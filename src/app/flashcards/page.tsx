"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import type { Flashcard } from "@/data/types";
import { getFlashcards, getDueFlashcards } from "@/data/flashcard-storage";
import { getTextBySlug } from "@/data/text-registry";
import FlashcardReview from "@/components/FlashcardReview";
import FlashcardList from "@/components/FlashcardList";

type Tab = "review" | "list";
type ReviewStage = "setup" | "active";

const CARD_TYPES = [
  { value: "quote", label: "Quotes", bg: "bg-teal-light", text: "text-teal" },
  { value: "technique", label: "Techniques", bg: "bg-purple-light", text: "text-purple" },
  { value: "rad", label: "RAD", bg: "bg-green-light", text: "text-green" },
  { value: "wow", label: "WOW", bg: "bg-blue-light", text: "text-blue" },
  { value: "vocab", label: "Vocab", bg: "bg-orange-light", text: "text-orange" },
  { value: "mistake", label: "Mistakes", bg: "bg-red-light", text: "text-red" },
] as const;

export default function FlashcardsPage() {
  const [tab, setTab] = useState<Tab>("review");
  const [allCards, setAllCards] = useState<Flashcard[]>([]);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);

  // Review setup state
  const [reviewStage, setReviewStage] = useState<ReviewStage>("setup");
  const [selectedText, setSelectedText] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  const refresh = useCallback(() => {
    setAllCards(getFlashcards());
    setDueCards(getDueFlashcards());
  }, []);

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
        <span className="text-4xl mb-4 block">🗂️</span>
        <h1 className="font-display text-2xl font-bold mb-2">Flashcards</h1>
        <p className="text-grey font-ui mb-6">
          No flashcards yet! Go to a quote analysis page and click
          <span className="font-semibold text-teal"> Generate Flashcards</span> to get started.
        </p>
        <Link href="/texts" className="font-ui text-sm text-teal hover:underline">
          Browse texts →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold">Flashcards</h1>
          <p className="text-grey font-ui text-sm mt-0.5">
            {dueCount} due · {totalCount} total
          </p>
        </div>
      </div>

      {/* Tab toggle */}
      <div className="flex rounded-lg bg-grey-light p-1 mb-6">
        <button
          onClick={() => { setTab("review"); resetReview(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "review" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          Review{dueCount > 0 && ` (${dueCount})`}
        </button>
        <button
          onClick={() => { setTab("list"); refresh(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "list" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          All Cards ({totalCount})
        </button>
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
        <FlashcardList cards={allCards} onRefresh={refresh} />
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
      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-3">
          Which text do you want to revise?
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSelectText("all")}
            className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
              selectedText === "all"
                ? "border-teal bg-teal-light text-teal"
                : "border-border bg-bg text-grey hover:text-text hover:border-grey"
            }`}
          >
            All texts
          </button>
          {textSlugs.map((slug) => {
            const t = getTextBySlug(slug);
            const active = selectedText === slug;
            return (
              <button
                key={slug}
                onClick={() => onSelectText(slug)}
                className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                  active
                    ? "border-teal bg-teal-light text-teal"
                    : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                }`}
              >
                {t?.title ?? slug}
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Choose card types */}
      <div className="rounded-xl border border-border bg-surface p-5">
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
              </button>
            );
          })}
        </div>
      </div>

      {/* Start button */}
      <div className="text-center pt-2">
        <p className="font-ui text-sm text-grey mb-3">
          {filteredCount === 0
            ? "No cards due with these filters."
            : `${filteredCount} card${filteredCount !== 1 ? "s" : ""} ready to review`}
          {filteredCount !== dueCount && filteredCount > 0 && ` (of ${dueCount} total due)`}
        </p>
        <button
          onClick={onStart}
          disabled={filteredCount === 0}
          className={`px-8 py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
            filteredCount > 0
              ? "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg"
              : "bg-grey-light text-grey cursor-not-allowed"
          }`}
        >
          Start Review →
        </button>
      </div>
    </div>
  );
}
