"use client";

import { useState, useEffect } from "react";
import type { CharacterAnalysis } from "@/data/types";

/**
 * Generates flashcards from a character analysis and saves to localStorage.
 * Cards: overview, arc label, arc stages, key quotes, relationships, WOW, vocab.
 */
export default function GenerateCharacterFlashcardsButton({
  character,
}: {
  character: CharacterAnalysis;
}) {
  const [generated, setGenerated] = useState(false);
  const [count, setCount] = useState(0);

  const prefix = `${character.textSlug}-char-${character.name.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem("flashcards");
      if (raw) {
        const cards = JSON.parse(raw) as { id: string }[];
        if (cards.some((c) => c.id.startsWith(prefix))) {
          setGenerated(true);
          setCount(cards.filter((c) => c.id.startsWith(prefix)).length);
        }
      }
    } catch {
      // ignore
    }
  }, [prefix]);

  function handleGenerate() {
    const now = new Date().toISOString();

    type CardType = "character" | "vocab";
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
      // Card 1: Character overview
      {
        id: `${prefix}-overview`,
        type: "character",
        textSlug: character.textSlug,
        front: `Who is ${character.name}? Summarise their role.`,
        back: stripHighlights(character.overview).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 2: Character arc label
      {
        id: `${prefix}-arc`,
        type: "character",
        textSlug: character.textSlug,
        front: `What is ${character.name}'s character arc?`,
        back: character.arc.label,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 3: Writer's methods
      {
        id: `${prefix}-methods`,
        type: "character",
        textSlug: character.textSlug,
        front: `How does the writer present ${character.name}?`,
        back: stripHighlights(character.writersMethods).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 4: WOW — Grade 7+
      {
        id: `${prefix}-wow`,
        type: "character",
        textSlug: character.textSlug,
        front: `Grade 7+ insight about ${character.name}?`,
        back: stripHighlights(character.wow).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
      // Card 5: Exam tip
      {
        id: `${prefix}-examtip`,
        type: "character",
        textSlug: character.textSlug,
        front: `Exam tip for writing about ${character.name}?`,
        back: stripHighlights(character.examTip).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      },
    ];

    // Arc stage cards
    character.arc.stages.forEach((stage, i) => {
      newCards.push({
        id: `${prefix}-stage-${i}`,
        type: "character",
        textSlug: character.textSlug,
        front: `${character.name}'s arc — what happens in ${stage.act}?`,
        back: `${stage.title}: ${stage.description.slice(0, 150)}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    });

    // Key quote cards
    character.keyQuotes.forEach((kq, i) => {
      newCards.push({
        id: `${prefix}-kq-${i}`,
        type: "character",
        textSlug: character.textSlug,
        front: `What does "${kq.quote.length > 60 ? kq.quote.slice(0, 60) + "…" : kq.quote}" reveal about ${character.name}?`,
        back: stripHighlights(kq.analysis).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    });

    // Relationship cards
    character.relationships.forEach((rel, i) => {
      newCards.push({
        id: `${prefix}-rel-${i}`,
        type: "character",
        textSlug: character.textSlug,
        front: `What is ${character.name}'s relationship with ${rel.character}?`,
        back: `${rel.nature} — ${stripHighlights(rel.analysis).slice(0, 150)}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    });

    // Vocab cards
    const seen = new Set<string>();
    character.keyWords.forEach((kw) => {
      const key = kw.word.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        newCards.push({
          id: `${prefix}-vocab-${key.replace(/\s+/g, "-")}`,
          type: "vocab",
          textSlug: character.textSlug,
          front: `Define: ${kw.word}`,
          back: kw.def,
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });
      }
    });

    // Merge with existing, deduplicating by id
    try {
      const raw = localStorage.getItem("flashcards");
      const existing = raw ? (JSON.parse(raw) as { id: string }[]) : [];
      const existingIds = new Set(existing.map((c) => c.id));
      const toAdd = newCards.filter((c) => !existingIds.has(c.id));
      localStorage.setItem("flashcards", JSON.stringify([...existing, ...toAdd]));
      setGenerated(true);
      setCount(newCards.length);
    } catch {
      // ignore
    }
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
