"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import type { Flashcard } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";
import FlashcardReview from "@/components/FlashcardReview";
import FlashcardList from "@/components/FlashcardList";
import { useAuth } from "@/components/AuthProvider";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { getItemTitle } from "@/data/slug-lookup";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type ReviewStage = "setup" | "active";

const CARD_TYPES = [
  { value: "key-term", label: "Key Terms", bg: "bg-blue-100", text: "text-blue-700" },
  { value: "teaching", label: "Teachings", bg: "bg-indigo-100", text: "text-indigo-700" },
  { value: "scripture", label: "Scripture", bg: "bg-violet-100", text: "text-violet-700" },
  { value: "vocab", label: "Vocab", bg: "bg-orange-light", text: "text-orange" },
  { value: "quote", label: "Quotes", bg: "bg-sky-100", text: "text-sky-700" },
  { value: "mistake", label: "Mistakes", bg: "bg-red-light", text: "text-red" },
] as const;

export default function RsFlashcardsPage() {
  const { user, loading: authLoading } = useAuth();
  const [tab, setTab] = useState<"review" | "list">("review");
  const [allCards, setAllCards] = useState<Flashcard[]>([]);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [reviewStage, setReviewStage] = useState<ReviewStage>("setup");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  const { getFlashcards, getDueFlashcards } = useStorage();

  const refresh = useCallback(() => {
    Promise.all([getFlashcards(), getDueFlashcards()]).then(([all, due]) => {
      // Filter to only RS cards
      setAllCards(all.filter((c) => c.textSlug.startsWith("rs-")));
      setDueCards(due.filter((c) => c.textSlug.startsWith("rs-")));
    });
  }, [getFlashcards, getDueFlashcards]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const dueCount = dueCards.length;
  const totalCount = allCards.length;

  // Unique topics that have cards
  const topicSlugs = useMemo(
    () => Array.from(new Set(allCards.map((c) => c.textSlug))),
    [allCards]
  );

  // Types present in due cards
  const availableTypes = useMemo(
    () => new Set(dueCards.map((c) => c.type)),
    [dueCards]
  );

  // Filtered review deck
  const filteredDue = useMemo(() => {
    let cards = dueCards;
    if (selectedTopic !== "all") {
      cards = cards.filter((c) => c.textSlug === selectedTopic);
    }
    if (selectedTypes.size > 0) {
      cards = cards.filter((c) => selectedTypes.has(c.type));
    }
    return cards;
  }, [dueCards, selectedTopic, selectedTypes]);

  function toggleType(type: string) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }

  function resetReview() {
    setReviewStage("setup");
    setSelectedTopic("all");
    setSelectedTypes(new Set());
    refresh();
  }

  // Require sign-in
  if (!authLoading && !user && isSupabaseConfigured()) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <motion.span
          className="text-4xl mb-4 block"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
        >
          🔒
        </motion.span>
        <motion.h1
          className="font-display text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          Sign in to access Flashcards
        </motion.h1>
        <motion.p
          className="text-grey font-ui mb-6 max-w-md mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          Sign in with Google to generate, review, and track your RS flashcards.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={async () => {
            const supabase = createClient();
            if (!supabase) return;
            await supabase.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: `${window.location.origin}/auth/callback` },
            });
          }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-purple text-white font-ui text-sm font-bold hover:bg-purple/90 transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          Sign in with Google
        </motion.button>
      </div>
    );
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
          &#x1F5C2;&#xFE0F;
        </motion.span>
        <motion.h1
          className="font-display text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          RS Flashcards
        </motion.h1>
        <motion.p
          className="text-grey font-ui mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          No RS flashcards yet! Go to a topic page and click
          <span className="font-semibold text-blue-600"> Generate Flashcards</span> to get started.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        >
          <Link href="/rs" className="font-ui text-sm text-blue-600 hover:underline">
            Browse topics &rarr;
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
          title="RS Flashcards"
          subtitle={`${dueCount} due \u00b7 ${totalCount} total`}
          image="/images/hero-books.jpg"
        />
      </motion.div>

      {/* Tab toggle */}
      <div className="flex rounded-lg bg-grey-light p-1 mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => { setTab("review"); resetReview(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "review" ? "bg-surface text-blue-600 shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          Review{dueCount > 0 && ` (${dueCount})`}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => { setTab("list"); refresh(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "list" ? "bg-surface text-blue-600 shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          All Cards ({totalCount})
        </motion.button>
      </div>

      {tab === "review" ? (
        reviewStage === "active" ? (
          <FlashcardReview
            cards={filteredDue}
            onComplete={resetReview}
          />
        ) : (
          <div className="space-y-6">
            {/* Topic filter */}
            <motion.div
              className="rounded-xl border border-border bg-surface p-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <h3 className="font-ui text-sm font-semibold text-text mb-3">
                Which topic do you want to revise?
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTopic("all")}
                  className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                    selectedTopic === "all"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                  }`}
                >
                  All topics
                </button>
                {topicSlugs.map((slug) => (
                  <button
                    key={slug}
                    onClick={() => setSelectedTopic(slug)}
                    className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                      selectedTopic === slug
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                    }`}
                  >
                    {getItemTitle(slug)}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Type filter */}
            <motion.div
              className="rounded-xl border border-border bg-surface p-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            >
              <h3 className="font-ui text-sm font-semibold text-text mb-1">
                What do you want to practise?
              </h3>
              <p className="font-ui text-xs text-grey mb-3">
                Leave all unselected to include everything, or pick specific types.
              </p>
              <div className="flex flex-wrap gap-2">
                {CARD_TYPES.map((ct) => {
                  const selected = selectedTypes.has(ct.value);
                  const hasCards = availableTypes.has(ct.value);
                  return (
                    <button
                      key={ct.value}
                      onClick={() => toggleType(ct.value)}
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
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Start button */}
            <div className="text-center pt-2">
              <p className="font-ui text-sm text-grey mb-3">
                {filteredDue.length === 0
                  ? "No cards due with these filters."
                  : `${filteredDue.length} card${filteredDue.length !== 1 ? "s" : ""} ready to review`}
                {filteredDue.length !== dueCount && filteredDue.length > 0 && ` (of ${dueCount} total due)`}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setReviewStage("active")}
                disabled={filteredDue.length === 0}
                className={`px-8 py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
                  filteredDue.length > 0
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                    : "bg-grey-light text-grey cursor-not-allowed"
                }`}
              >
                Start Review &rarr;
              </motion.button>
            </div>
          </div>
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
