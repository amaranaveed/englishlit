"use client";

import { useState } from "react";
import type { Flashcard } from "@/data/types";
import { reviewCard } from "@/data/flashcard-storage";

const TYPE_BADGES: Record<string, { bg: string; text: string }> = {
  quote: { bg: "bg-teal-light", text: "text-teal" },
  technique: { bg: "bg-purple-light", text: "text-purple" },
  rad: { bg: "bg-green-light", text: "text-green" },
  wow: { bg: "bg-blue-light", text: "text-blue" },
  vocab: { bg: "bg-orange-light", text: "text-orange" },
  mistake: { bg: "bg-red-light", text: "text-red" },
  custom: { bg: "bg-grey-light", text: "text-grey" },
  character: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400" },
  theme: { bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-700 dark:text-indigo-400" },
};

const CONFIDENCE_BUTTONS: { label: string; value: 0 | 1 | 2 | 3; colour: string; hint: string }[] = [
  { label: "Again", value: 0, colour: "bg-red hover:bg-red/90", hint: "1 min" },
  { label: "Hard", value: 1, colour: "bg-orange hover:bg-orange/90", hint: "6 hrs" },
  { label: "Good", value: 2, colour: "bg-green hover:bg-green/90", hint: "1 day" },
  { label: "Easy", value: 3, colour: "bg-teal hover:bg-teal/90", hint: "3 days" },
];

interface Props {
  cards: Flashcard[];
  onComplete: () => void;
}

export default function FlashcardReview({ cards, onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  if (cards.length === 0 || index >= cards.length) {
    return (
      <div className="text-center py-16">
        <span className="text-4xl mb-4 block">🎉</span>
        <h2 className="font-display text-xl font-bold mb-2">All caught up!</h2>
        <p className="text-grey font-ui text-sm mb-1">
          {reviewed > 0
            ? `You reviewed ${reviewed} card${reviewed !== 1 ? "s" : ""}.`
            : "No cards due for review right now."}
        </p>
        <button
          onClick={onComplete}
          className="mt-4 font-ui text-sm text-teal hover:underline cursor-pointer"
        >
          Back to flashcard list
        </button>
      </div>
    );
  }

  const card = cards[index];
  const badge = TYPE_BADGES[card.type] ?? TYPE_BADGES.custom;

  function handleConfidence(value: 0 | 1 | 2 | 3) {
    reviewCard(card.id, value);
    setFlipped(false);
    setReviewed((r) => r + 1);
    // Small delay so flip-back animation plays before moving on
    setTimeout(() => setIndex((i) => i + 1), 100);
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between font-ui text-sm text-grey mb-4">
        <span>
          Card {index + 1} of {cards.length}
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}>
          {card.type}
        </span>
      </div>

      {/* Card */}
      <div
        className="flip-card w-full cursor-pointer mb-6"
        style={{ minHeight: 260 }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`flip-card-inner relative w-full ${flipped ? "flipped" : ""}`} style={{ minHeight: 260 }}>
          {/* Front */}
          <div className="flip-card-front absolute inset-0 rounded-xl border-2 border-border bg-surface p-6 flex flex-col items-center justify-center text-center">
            <p className="font-ui text-xs text-grey uppercase tracking-wider mb-3">Question</p>
            <p className="font-body text-lg text-text leading-relaxed">{card.front}</p>
            <p className="font-ui text-xs text-grey mt-4">Tap to reveal</p>
          </div>
          {/* Back */}
          <div className="flip-card-back absolute inset-0 rounded-xl border-2 border-teal bg-teal-light p-6 flex flex-col items-center justify-center text-center">
            <p className="font-ui text-xs text-teal uppercase tracking-wider mb-3">Answer</p>
            <p className="font-body text-lg text-text leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>

      {/* Confidence buttons — only show when flipped */}
      {flipped && (
        <div className="grid grid-cols-4 gap-2">
          {CONFIDENCE_BUTTONS.map((btn) => (
            <button
              key={btn.value}
              onClick={() => handleConfidence(btn.value)}
              className={`${btn.colour} text-white rounded-lg py-3 font-ui text-sm font-semibold transition-colors cursor-pointer`}
            >
              <span className="block">{btn.label}</span>
              <span className="block text-[10px] opacity-80">{btn.hint}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
