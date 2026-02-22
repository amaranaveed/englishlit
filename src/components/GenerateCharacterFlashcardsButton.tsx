"use client";

import { useState, useEffect } from "react";
import type { CharacterAnalysis } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";

/**
 * Generates flashcards from a character analysis and saves to storage.
 * Cards: overview, arc label, arc stages, key quotes, relationships, WOW, exam tip, + 2 vocab.
 */
export default function GenerateCharacterFlashcardsButton({
  character,
}: {
  character: CharacterAnalysis;
}) {
  const [generated, setGenerated] = useState(false);
  const [count, setCount] = useState(0);

  const prefix = `${character.textSlug}-char-${character.name.toLowerCase().replace(/\s+/g, "-")}`;
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

    // Vocab cards — capped at 2 to keep balanced with other types
    const seen = new Set<string>();
    let vocabCount = 0;
    for (const kw of character.keyWords) {
      if (vocabCount >= 2) break;
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
        vocabCount++;
      }
    }

    // Symbol cards — 1 per symbol, capped at 3
    if (character.symbols) {
      character.symbols.slice(0, 3).forEach((sym, i) => {
        newCards.push({
          id: `${prefix}-symbol-${i}`,
          type: "character",
          textSlug: character.textSlug,
          front: `What does the symbol of "${sym.symbol}" represent for ${character.name}?`,
          back: `${stripHighlights(sym.meaning).slice(0, 180)} (e.g. ${sym.examples})`,
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });
      });
    }

    // Alternative interpretation card — 1 card
    if (character.alternativeInterpretations && character.alternativeInterpretations.length > 0) {
      newCards.push({
        id: `${prefix}-alt-interp-0`,
        type: "character",
        textSlug: character.textSlug,
        front: `Give an alternative critical reading of ${character.name}.`,
        back: `${character.alternativeInterpretations[0].reading}: ${stripHighlights(character.alternativeInterpretations[0].evidence).slice(0, 200)}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    }

    // Speech patterns card — 1 card
    if (character.speechPatterns) {
      newCards.push({
        id: `${prefix}-speech`,
        type: "character",
        textSlug: character.textSlug,
        front: `How do ${character.name}'s speech patterns change through the text?`,
        back: stripHighlights(character.speechPatterns).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    }

    // Context link card — 1 card
    if (character.contextLinks && character.contextLinks.length > 0) {
      newCards.push({
        id: `${prefix}-context-0`,
        type: "character",
        textSlug: character.textSlug,
        front: `What historical/social context is relevant to ${character.name}? (${character.contextLinks[0].context})`,
        back: stripHighlights(character.contextLinks[0].link).slice(0, 200),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    }

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
