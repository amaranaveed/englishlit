"use client";

import { useState, useEffect } from "react";
import type { Quote } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";

/**
 * Generates 5-8 flashcards from a quote's 6-part analysis and saves to localStorage.
 * Cards: quote → speaker, technique1, RAD, WOW, + one per vocab term.
 */
export default function GenerateFlashcardsButton({ quote }: { quote: Quote }) {
  const [generated, setGenerated] = useState(false);
  const [count, setCount] = useState(0);
  const { getFlashcards, addFlashcard } = useStorage();

  // Check if cards already exist for this quote
  useEffect(() => {
    getFlashcards().then((cards) => {
      const prefix = `${quote.textSlug}-q${quote.id}-`;
      if (cards.some((c) => c.id.startsWith(prefix))) {
        setGenerated(true);
        setCount(cards.filter((c) => c.id.startsWith(prefix)).length);
      }
    });
  }, [quote.textSlug, quote.id, getFlashcards]);

  async function handleGenerate() {
    const prefix = `${quote.textSlug}-q${quote.id}`;
    const now = new Date().toISOString();

    type CardType = "quote" | "technique" | "rad" | "wow" | "vocab";
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
      // Card 1: Quote identification
      {
        id: `${prefix}-quote`,
        type: "quote" as const,
        textSlug: quote.textSlug,
        front: `Who says: "${quote.quote.length > 60 ? quote.quote.slice(0, 60) + "…" : quote.quote}" and where?`,
        back: `${quote.who} — ${quote.act}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 2: Technique 1
      {
        id: `${prefix}-tech1`,
        type: "technique" as const,
        textSlug: quote.textSlug,
        front: `Key technique in: "${quote.quote.length > 50 ? quote.quote.slice(0, 50) + "…" : quote.quote}"?`,
        back: `${quote.technique1.title} — ${stripHighlights(quote.technique1.analysis).slice(0, 120)}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 3: RAD
      {
        id: `${prefix}-rad`,
        type: "rad" as const,
        textSlug: quote.textSlug,
        front: `Does the character PROGRESS, REGRESS or STAGNATE in: "${quote.quote.length > 50 ? quote.quote.slice(0, 50) + "…" : quote.quote}"?`,
        back: `${quote.rad.label} — ${stripHighlights(quote.rad.analysis).slice(0, 120)}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 4: WOW
      {
        id: `${prefix}-wow`,
        type: "wow" as const,
        textSlug: quote.textSlug,
        front: `Grade 8/9 theory for: "${quote.quote.length > 50 ? quote.quote.slice(0, 50) + "…" : quote.quote}"?`,
        back: `${quote.wow.title} — ${stripHighlights(quote.wow.analysis).slice(0, 120)}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
    ];

    // Add vocab cards from all sections
    const allVocab = [
      ...quote.technique1.keyWords,
      ...quote.rad.keyWords,
      ...quote.technique2.keyWords,
      ...quote.context.keyWords,
      ...quote.wow.keyWords,
    ];
    const seen = new Set<string>();
    allVocab.forEach((kw) => {
      const key = kw.word.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        newCards.push({
          id: `${prefix}-vocab-${key.replace(/\s+/g, "-")}`,
          type: "vocab" as const,
          textSlug: quote.textSlug,
          front: `Define: ${kw.word}`,
          back: kw.def,
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });
      }
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
      <div className="flex items-center gap-2 rounded-lg bg-green-light border border-green px-4 py-2.5 font-ui text-sm text-green">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {count} flashcards generated
      </div>
    );
  }

  return (
    <button
      onClick={handleGenerate}
      className="flex items-center gap-2 rounded-lg bg-teal text-white px-4 py-2.5 font-ui text-sm font-semibold hover:bg-teal/90 transition-colors cursor-pointer"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Generate Flashcards
    </button>
  );
}

function stripHighlights(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}
