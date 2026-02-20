"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useStorage } from "@/hooks/useStorage";
import { getRsTermsByTopic, getRsScriptureByTopic } from "@/data/rs/vocab";
import type { ScriptureQuote } from "@/data/rs/types";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function GenerateRsFlashcardsButton({ topicSlug }: { topicSlug: string }) {
  const [generated, setGenerated] = useState(false);
  const [count, setCount] = useState(0);
  const { getFlashcards, addFlashcard } = useStorage();

  const prefix = `rs-${topicSlug}-`;

  // Check if cards already exist
  useEffect(() => {
    getFlashcards().then((cards) => {
      const existing = cards.filter((c) => c.id.startsWith(prefix));
      if (existing.length > 0) {
        setGenerated(true);
        setCount(existing.length);
      }
    });
  }, [topicSlug, getFlashcards, prefix]);

  async function handleGenerate() {
    const terms = getRsTermsByTopic(topicSlug);
    const scripture = getRsScriptureByTopic(topicSlug);
    const now = new Date().toISOString();
    const textSlug = `rs-${topicSlug}`;
    let cardCount = 0;

    // Generate term definition cards
    for (const term of terms) {
      await addFlashcard({
        id: `${prefix}${term.id}`,
        type: term.category === "teaching" ? "teaching" : "key-term",
        textSlug,
        front: `Define: ${term.word}`,
        back: term.def,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
      cardCount++;
    }

    // Generate scripture quote cards
    for (const quote of scripture) {
      // Card: Quote text → Source + Significance
      await addFlashcard({
        id: `${prefix}scripture-${quote.id}`,
        type: "scripture",
        textSlug,
        front: `What is the source and significance of this quote?\n\n"${quote.text}"`,
        back: `Source: ${quote.source}\n\nSignificance: ${quote.significance}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
      cardCount++;
    }

    setGenerated(true);
    setCount(cardCount);
  }

  return (
    <motion.button
      whileHover={{ scale: generated ? 1 : 1.02 }}
      whileTap={{ scale: generated ? 1 : 0.95 }}
      onClick={generated ? undefined : handleGenerate}
      disabled={generated}
      className={`w-full py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
        generated
          ? "bg-blue-50 text-blue-700 border border-blue-200"
          : "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
      }`}
    >
      {generated
        ? `${count} flashcard${count !== 1 ? "s" : ""} generated`
        : "Generate Flashcards"}
    </motion.button>
  );
}
