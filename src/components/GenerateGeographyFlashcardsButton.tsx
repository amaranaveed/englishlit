"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useStorage } from "@/hooks/useStorage";
import { getGeoTermsByTopic, getGeoCaseStudiesByTopic } from "@/data/geography/vocab";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function GenerateGeographyFlashcardsButton({ topicSlug }: { topicSlug: string }) {
  const [generated, setGenerated] = useState(false);
  const [count, setCount] = useState(0);
  const { getFlashcards, addFlashcard } = useStorage();

  const prefix = `geo-${topicSlug}-`;

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
    const terms = getGeoTermsByTopic(topicSlug);
    const caseStudies = getGeoCaseStudiesByTopic(topicSlug);
    const now = new Date().toISOString();
    const textSlug = `geo-${topicSlug}`;
    let cardCount = 0;

    // Generate term definition cards
    for (const term of terms) {
      await addFlashcard({
        id: `${prefix}${term.id}`,
        type: term.category === "process" ? "process" : "key-term",
        textSlug,
        front: `Define: ${term.word}`,
        back: term.def,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
      cardCount++;
    }

    // Generate case study cards
    for (const cs of caseStudies) {
      // Card: Name + Location
      await addFlashcard({
        id: `${prefix}cs-${cs.id}-name`,
        type: "case-study",
        textSlug,
        front: `Name a case study for ${topicSlug.replace(/-/g, " ")} and its location.`,
        back: `${cs.name} — ${cs.location}`,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
      cardCount++;

      // Card: Key facts
      await addFlashcard({
        id: `${prefix}cs-${cs.id}-facts`,
        type: "case-study",
        textSlug,
        front: `Give 3 key facts about ${cs.name}.`,
        back: cs.facts.join("\n"),
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
      cardCount++;

      // Card: Causes
      if (cs.causes.length > 0) {
        await addFlashcard({
          id: `${prefix}cs-${cs.id}-causes`,
          type: "case-study",
          textSlug,
          front: `What caused ${cs.name}? (Give 3 reasons)`,
          back: cs.causes.slice(0, 3).join("\n"),
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });
        cardCount++;
      }

      // Card: Effects
      if (cs.effects.length > 0) {
        await addFlashcard({
          id: `${prefix}cs-${cs.id}-effects`,
          type: "case-study",
          textSlug,
          front: `What were the effects of ${cs.name}? (Give 3)`,
          back: cs.effects.slice(0, 3).join("\n"),
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });
        cardCount++;
      }

      // Card: Responses
      if (cs.responses.length > 0) {
        await addFlashcard({
          id: `${prefix}cs-${cs.id}-responses`,
          type: "case-study",
          textSlug,
          front: `How did people respond to ${cs.name}? (Give 3)`,
          back: cs.responses.slice(0, 3).join("\n"),
          confidence: 0,
          nextReview: now,
          createdAt: now,
        });
        cardCount++;
      }
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
          ? "bg-green-light text-green border border-green/20"
          : "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg"
      }`}
    >
      {generated
        ? `${count} flashcard${count !== 1 ? "s" : ""} generated`
        : "Generate Flashcards"}
    </motion.button>
  );
}
