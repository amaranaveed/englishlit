"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import type { Flashcard } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";
import { getTextBySlug } from "@/data/text-registry";
import FlashcardReview from "@/components/FlashcardReview";
import FlashcardList from "@/components/FlashcardList";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Tab = "review" | "list";
type ReviewStage = "setup" | "active";

const CARD_TYPES = [
  { value: "quote", label: "Quotes", bg: "bg-teal-light", text: "text-teal" },
  { value: "technique", label: "Techniques", bg: "bg-purple-light", text: "text-purple" },
  { value: "rad", label: "RAD", bg: "bg-green-light", text: "text-green" },
  { value: "wow", label: "WOW", bg: "bg-blue-light", text: "text-blue" },
  { value: "vocab", label: "Vocab", bg: "bg-orange-light", text: "text-orange" },
  { value: "mistake", label: "Mistakes", bg: "bg-red-light", text: "text-red" },
  { value: "character", label: "Characters", bg: "bg-amber-100", text: "text-amber-700" },
  { value: "theme", label: "Themes", bg: "bg-indigo-100", text: "text-indigo-700" },
] as const;

export default function FlashcardsPage() {
  const [tab, setTab] = useState<Tab>("review");
  const [allCards, setAllCards] = useState<Flashcard[]>([]);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);

  // Review setup state
  const [reviewStage, setReviewStage] = useState<ReviewStage>("setup");
  const [selectedText, setSelectedText] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  const { getFlashcards, getDueFlashcards } = useStorage();

  const refresh = useCallback(() => {
    Promise.all([getFlashcards(), getDueFlashcards()]).then(([all, due]) => {
      setAllCards(all);
      setDueCards(due);
    });
  }, [getFlashcards, getDueFlashcards]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const dueCount = dueCards.length;
  const totalCount = allCards.length;

  // Unique texts that have cards
  const textSlugs = useMemo(
    () => Array.from(new Set(allCards.map((c) => c.textSlug))),
    [allCards]
  );

  // Types present in due cards (for disabling empty pills)
  const availableTypes = useMemo(
    () => new Set(dueCards.map((c) => c.type)),
    [dueCards]
  );

  // Filtered review deck based on selections
  const filteredDue = useMemo(() => {
    let cards = dueCards;
    if (selectedText !== "all") {
      cards = cards.filter((c) => c.textSlug === selectedText);
    }
    if (selectedTypes.size > 0) {
      cards = cards.filter((c) => selectedTypes.has(c.type));
    }
    return cards;
  }, [dueCards, selectedText, selectedTypes]);

  function toggleType(type: string) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }

  function startReview() {
    setReviewStage("active");
  }

  function resetReview() {
    setReviewStage("setup");
    setSelectedText("all");
    setSelectedTypes(new Set());
    refresh();
  }

  // Empty state
  if (totalCount === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <motion.span
          className="text-4xl mb-4 block"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
        >
          🗂️
        </motion.span>
        <motion.h1
          className="font-display text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          Flashcards
        </motion.h1>
        <motion.p
          className="text-grey font-ui mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          No flashcards yet! Go to a quote analysis, character, or theme page and click
          <span className="font-semibold text-teal"> Generate Flashcards</span> to get started.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        >
          <Link href="/texts" className="font-ui text-sm text-teal hover:underline">
            Browse texts →
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Flashcards"
          subtitle={`${dueCount} due · ${totalCount} total`}
          image="/images/flashcards.jpg"
        />
      </motion.div>

      {/* Tab toggle */}
      <div className="flex rounded-lg bg-grey-light p-1 mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => { setTab("review"); resetReview(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "review" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          Review{dueCount > 0 && ` (${dueCount})`}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => { setTab("list"); refresh(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "list" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          All Cards ({totalCount})
        </motion.button>
      </div>

      {/* Content */}
      {tab === "review" ? (
        reviewStage === "setup" ? (
          <ReviewSetup
            textSlugs={textSlugs}
            selectedText={selectedText}
            onSelectText={setSelectedText}
            selectedTypes={selectedTypes}
            onToggleType={toggleType}
            availableTypes={availableTypes}
            filteredCount={filteredDue.length}
            dueCount={dueCount}
            onStart={startReview}
          />
        ) : (
          <FlashcardReview
            cards={filteredDue}
            onComplete={resetReview}
          />
        )
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <FlashcardList cards={allCards} onRefresh={refresh} />
        </motion.div>
      )}
    </div>
  );
}

/* ─── Review Setup Screen ─── */

interface SetupProps {
  textSlugs: string[];
  selectedText: string;
  onSelectText: (slug: string) => void;
  selectedTypes: Set<string>;
  onToggleType: (type: string) => void;
  availableTypes: Set<string>;
  filteredCount: number;
  dueCount: number;
  onStart: () => void;
}

function ReviewSetup({
  textSlugs,
  selectedText,
  onSelectText,
  selectedTypes,
  onToggleType,
  availableTypes,
  filteredCount,
  dueCount,
  onStart,
}: SetupProps) {
  return (
    <div className="space-y-6">
      {/* Section 1: Choose text */}
      <motion.div
        className="rounded-xl border border-border bg-surface p-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        whileHover={{ y: -2, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
      >
        <h3 className="font-ui text-sm font-semibold text-text mb-3">
          Which text do you want to revise?
        </h3>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            variants={staggerItem}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectText("all")}
            className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
              selectedText === "all"
                ? "border-teal bg-teal-light text-teal"
                : "border-border bg-bg text-grey hover:text-text hover:border-grey"
            }`}
          >
            All texts
          </motion.button>
          {textSlugs.map((slug) => {
            const t = getTextBySlug(slug);
            const active = selectedText === slug;
            return (
              <motion.button
                key={slug}
                variants={staggerItem}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectText(slug)}
                className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                  active
                    ? "border-teal bg-teal-light text-teal"
                    : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                }`}
              >
                {t?.title ?? slug}
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Section 2: Choose card types */}
      <motion.div
        className="rounded-xl border border-border bg-surface p-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        whileHover={{ y: -2, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
      >
        <h3 className="font-ui text-sm font-semibold text-text mb-1">
          What do you want to practise?
        </h3>
        <p className="font-ui text-xs text-grey mb-3">
          Leave all unselected to include everything, or pick specific types.
        </p>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {CARD_TYPES.map((ct) => {
            const selected = selectedTypes.has(ct.value);
            const hasCards = availableTypes.has(ct.value);
            return (
              <motion.button
                key={ct.value}
                variants={staggerItem}
                whileTap={{ scale: 0.9 }}
                onClick={() => onToggleType(ct.value)}
                disabled={!hasCards}
                className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                  !hasCards
                    ? "border-border bg-bg text-grey/40 cursor-not-allowed"
                    : selected
                      ? `border-transparent ${ct.bg} ${ct.text}`
                      : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                }`}
              >
                {ct.label}
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Start button */}
      <div className="text-center pt-2">
        <AnimatePresence mode="wait">
          <motion.p
            key={filteredCount}
            className="font-ui text-sm text-grey mb-3"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            {filteredCount === 0
              ? "No cards due with these filters."
              : `${filteredCount} card${filteredCount !== 1 ? "s" : ""} ready to review`}
            {filteredCount !== dueCount && filteredCount > 0 && ` (of ${dueCount} total due)`}
          </motion.p>
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          disabled={filteredCount === 0}
          className={`px-8 py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
            filteredCount > 0
              ? "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg"
              : "bg-grey-light text-grey cursor-not-allowed"
          }`}
        >
          Start Review →
        </motion.button>
      </div>
    </div>
  );
}
