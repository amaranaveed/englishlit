"use client";

import { useState, useEffect } from "react";
import type { ThemeSheet } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";

/**
 * Generates flashcards from a theme sheet and saves to localStorage.
 * Cards: thesis, each analytical point, key quotes + analysis.
 */
export default function GenerateThemeFlashcardsButton({
  sheet,
  textTitle,
}: {
  sheet: ThemeSheet;
  textTitle: string;
}) {
  const [generated, setGenerated] = useState(false);
  const [count, setCount] = useState(0);

  const prefix = `${sheet.textSlug}-theme-${sheet.theme.toLowerCase().replace(/\s+/g, "-")}`;
  const { getFlashcards, addFlashcard } = useStorage();

  useEffect(() => {
    getFlashcards().then((cards) => {
      if (cards.some((c) => c.id.startsWith(prefix))) {
        setGenerated(true);
        setCount(cards.filter((c) => c.id.startsWith(prefix)).length);
      }
    });
  }, [prefix, getFlashcards]);

  async function handleGenerate() {
    const now = new Date().toISOString();

    type CardType = "theme";
    interface NewCard {
      id: string;
      type: CardType;
      textSlug: string;
      front: string;
      back: string;
      confidence: number;
      nextReview: string;
      createdAt: string;
    }

    const newCards: NewCard[] = [
      // Card 1: Thesis statement
      {
        id: `${prefix}-thesis`,
        type: "theme",
        textSlug: sheet.textSlug,
        front: `What is the thesis for the theme of ${sheet.theme} in ${textTitle}?`,
        back: sheet.thesis,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
    ];

    // Point cards — one card per analytical point
    sheet.points.forEach((point, pIdx) => {
      newCards.push({
        id: `${prefix}-point-${pIdx}`,
        type: "theme",
        textSlug: sheet.textSlug,
        front: `${sheet.theme} in ${textTitle} — what is Point ${pIdx + 1}?`,
        back: point.description,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });

      // Quote cards within each point
      point.quotes.forEach((q, qIdx) => {
        // Quote identification
        newCards.push({
          id: `${prefix}-p${pIdx}-q${qIdx}-id`,
          type: "theme",
          textSlug: sheet.textSlug,
          front: `Who says "${q.quote.length > 60 ? q.quote.slice(0, 60) + "…" : q.quote}" and where? (${sheet.theme})`,
          back: `${q.who} — ${q.act}`,
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });

        // Quote analysis
        if (q.analysis.length > 0) {
          newCards.push({
            id: `${prefix}-p${pIdx}-q${qIdx}-analysis`,
            type: "theme",
            textSlug: sheet.textSlug,
            front: `Analyse "${q.quote.length > 50 ? q.quote.slice(0, 50) + "…" : q.quote}" in relation to ${sheet.theme}.`,
            back: q.analysis.join(" ").slice(0, 250),
            confidence: 0,
            nextReview: now,
            createdAt: now,
          });
        }
      });
    });

    // Save each card (addFlashcard handles deduplication)
    for (const card of newCards) {
      await addFlashcard(card);
    }
    setGenerated(true);
    setCount(newCards.length);
  }

  if (generated) {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-green-light border border-green px-3 py-1.5 font-ui text-xs text-green print:hidden">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {count} cards
      </div>
    );
  }

  return (
    <button
      onClick={handleGenerate}
      className="flex items-center gap-2 rounded-lg bg-teal text-white px-3 py-1.5 font-ui text-xs font-semibold hover:bg-teal/90 transition-colors cursor-pointer print:hidden"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Flashcards
    </button>
  );
}
