"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Flashcard } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TYPE_BADGES: Record<string, { bg: string; text: string }> = {
  quote: { bg: "bg-teal-light", text: "text-teal" },
  technique: { bg: "bg-purple-light", text: "text-purple" },
  rad: { bg: "bg-green-light", text: "text-green" },
  wow: { bg: "bg-blue-light", text: "text-blue" },
  vocab: { bg: "bg-orange-light", text: "text-orange" },
  mistake: { bg: "bg-red-light", text: "text-red" },
  custom: { bg: "bg-grey-light", text: "text-grey" },
  character: { bg: "bg-amber-100", text: "text-amber-700" },
  theme: { bg: "bg-indigo-100", text: "text-indigo-700" },
  "key-term": { bg: "bg-emerald-100", text: "text-emerald-700" },
  "case-study": { bg: "bg-sky-100", text: "text-sky-700" },
  process: { bg: "bg-lime-100", text: "text-lime-700" },
};

const CONFIDENCE_BUTTONS: { label: string; value: 0 | 1 | 2 | 3; colour: string; hint: string }[] = [
  { label: "Again", value: 0, colour: "bg-red hover:bg-red/90", hint: "1 min" },
  { label: "Hard", value: 1, colour: "bg-orange hover:bg-orange/90", hint: "6 hrs" },
  { label: "Good", value: 2, colour: "bg-green hover:bg-green/90", hint: "1 day" },
  { label: "Easy", value: 3, colour: "bg-teal hover:bg-teal/90", hint: "3 days" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
};

interface Props {
  cards: Flashcard[];
  onComplete: () => void;
}

export default function FlashcardReview({ cards, onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const { reviewCard } = useStorage();

  if (cards.length === 0 || index >= cards.length) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.span
          className="text-4xl mb-4 block"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring" as const, stiffness: 400, damping: 12, delay: 0.15 }}
        >
          {"\uD83C\uDF89"}
        </motion.span>
        <motion.h2
          className="font-display text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
        >
          All caught up!
        </motion.h2>
        <motion.p
          className="text-grey font-ui text-sm mb-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
        >
          {reviewed > 0
            ? `You reviewed ${reviewed} card${reviewed !== 1 ? "s" : ""}.`
            : "No cards due for review right now."}
        </motion.p>
        <motion.button
          onClick={onComplete}
          className="mt-4 font-ui text-sm text-teal hover:underline cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to flashcard list
        </motion.button>
      </motion.div>
    );
  }

  const card = cards[index];
  const badge = TYPE_BADGES[card.type] ?? TYPE_BADGES.custom;
  const progress = ((index + 1) / cards.length) * 100;

  async function handleConfidence(value: 0 | 1 | 2 | 3) {
    await reviewCard(card.id, value);
    setFlipped(false);
    setReviewed((r) => r + 1);
    // Small delay so flip-back animation plays before moving on
    setTimeout(() => setIndex((i) => i + 1), 100);
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="h-1 rounded-full bg-grey-light overflow-hidden mb-4">
        <motion.div
          className="h-full rounded-full bg-teal"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 30 }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="flex items-center justify-between font-ui text-sm text-grey mb-4"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span>
          Card{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="inline-block font-bold text-text"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              {index + 1}
            </motion.span>
          </AnimatePresence>
          {" "}of {cards.length}
        </span>
        <motion.span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badge.bg} ${badge.text}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: EASE, delay: 0.1 }}
        >
          {card.type}
        </motion.span>
      </motion.div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${card.id}-${flipped}`}
          initial={{ opacity: 0, rotateY: flipped ? 90 : -90, scale: 0.95 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: flipped ? -90 : 90, scale: 0.95 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={() => setFlipped((f) => !f)}
          className="cursor-pointer mb-6"
        >
          {!flipped ? (
            <div className="rounded-xl border-2 border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
              <p className="font-ui text-xs text-grey uppercase tracking-wider mb-3">Question</p>
              <p className="font-body text-lg text-text leading-relaxed">{card.front}</p>
              <motion.p
                className="font-ui text-xs text-grey mt-4"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Tap to reveal
              </motion.p>
            </div>
          ) : (
            <div className="rounded-xl border-2 border-teal bg-teal-light p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
              <p className="font-ui text-xs text-teal uppercase tracking-wider mb-3">Answer</p>
              <p className="font-body text-sm text-text leading-relaxed">{card.back}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Confidence buttons — only show when flipped */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            className="grid grid-cols-4 gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 12, transition: { duration: 0.15 } }}
          >
            {CONFIDENCE_BUTTONS.map((btn) => (
              <motion.button
                key={btn.value}
                variants={staggerItem}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleConfidence(btn.value)}
                className={`${btn.colour} text-white rounded-lg py-3 font-ui text-sm font-semibold transition-colors cursor-pointer`}
              >
                <span className="block">{btn.label}</span>
                <span className="block text-[10px] opacity-80">{btn.hint}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
