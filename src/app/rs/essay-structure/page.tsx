"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import {
  RS_ANSWER_TYPES,
  RS_COMMAND_WORDS,
  RS_GRADE_CHARACTERISTICS,
  type RsAnswerType,
} from "@/data/rs/answer-structure";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ── colour helpers ──────────────────────────────────── */
const BG: Record<string, string> = {
  blue: "bg-blue-50",
  indigo: "bg-indigo-50",
  purple: "bg-purple-light",
  orange: "bg-orange-light",
  green: "bg-green-light",
  red: "bg-red-light",
  amber: "bg-amber-50",
  yellow: "bg-yellow-50",
  grey: "bg-grey-light",
  gray: "bg-grey-light",
};
const TEXT_CLR: Record<string, string> = {
  blue: "text-blue-700",
  indigo: "text-indigo-700",
  purple: "text-purple",
  orange: "text-orange",
  green: "text-green",
  red: "text-red",
  amber: "text-amber-700",
  yellow: "text-yellow-700",
  grey: "text-grey",
  gray: "text-grey",
};
const BORDER: Record<string, string> = {
  blue: "border-blue-200",
  indigo: "border-indigo-200",
  purple: "border-purple/20",
  orange: "border-orange/20",
  green: "border-green/20",
  red: "border-red/20",
  amber: "border-amber-200",
  yellow: "border-yellow-200",
  grey: "border-border",
  gray: "border-border",
};
const BADGE: Record<string, string> = {
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  purple: "bg-purple text-white",
  orange: "bg-orange text-white",
  green: "bg-green text-white",
  red: "bg-red text-white",
  amber: "bg-amber-600 text-white",
  yellow: "bg-yellow-600 text-white",
  grey: "bg-grey text-white",
  gray: "bg-grey text-white",
};
const RING: Record<string, string> = {
  blue: "ring-blue-500",
  indigo: "ring-indigo-500",
  purple: "ring-purple",
  orange: "ring-orange",
  red: "ring-red",
  green: "ring-green",
};

/* ── Colour group labels for command words ────────────── */
const DIFFICULTY_GROUPS: { difficulty: string; label: string; colour: string }[] = [
  { difficulty: "recall", label: "Recall", colour: "blue" },
  { difficulty: "explain", label: "Explain", colour: "purple" },
  { difficulty: "evaluate", label: "Evaluate", colour: "red" },
];

export default function RsAnswerStructurePage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="Answer Structure"
        subtitle="How to tackle every question type in AQA Religious Studies"
        image="/images/hero-books.jpg"
      />

      {/* ── Answer Types ────────────────────────────────── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.h2
          className="font-display text-xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Question Types
        </motion.h2>
        <p className="text-grey font-ui text-sm mb-6 max-w-2xl">
          AQA Religious Studies uses five question tariffs: 1, 2, 4, 5, and 12 marks.
          Click each card to see the full structure, level descriptors, and tips.
        </p>

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {RS_ANSWER_TYPES.map((at) => (
            <RsAnswerTypeCard
              key={at.id}
              answerType={at}
              expanded={expandedCard === at.id}
              onToggle={() =>
                setExpandedCard(expandedCard === at.id ? null : at.id)
              }
            />
          ))}
        </motion.div>
      </motion.section>

      {/* ── Command Words ───────────────────────────────── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.h2
          className="font-display text-xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Command Words
        </motion.h2>
        <p className="text-grey font-ui text-sm mb-6 max-w-2xl">
          Know exactly what the examiner expects. Command words are grouped by
          difficulty &mdash; from simple recall to complex evaluation.
        </p>

        {DIFFICULTY_GROUPS.map((group) => {
          const words = RS_COMMAND_WORDS.filter((cw) => cw.difficulty === group.difficulty);
          if (words.length === 0) return null;
          return (
            <motion.div
              key={group.difficulty}
              className="mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${BADGE[group.colour].split(" ")[0]}`}
                />
                <h3 className={`font-ui text-sm font-bold ${TEXT_CLR[group.colour]}`}>
                  {group.label}
                </h3>
              </div>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {words.map((cw) => (
                  <motion.div
                    key={cw.word}
                    variants={staggerItem}
                    whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }}
                    className={`rounded-xl border ${BORDER[group.colour]} ${BG[group.colour]} p-4`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-display text-sm font-bold ${TEXT_CLR[group.colour]}`}>
                        {cw.word}
                      </h4>
                      <span
                        className={`font-ui text-[10px] font-bold px-2 py-0.5 rounded-full ${BADGE[group.colour]}`}
                      >
                        {cw.marks}
                      </span>
                    </div>
                    <p className="font-ui text-sm text-text leading-relaxed">
                      {cw.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.section>

      {/* ── Grade Comparison ──────────────────────────────── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.h2
          className="font-display text-xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          What Separates the Grades?
        </motion.h2>
        <p className="text-grey font-ui text-sm mb-6 max-w-2xl">
          See what examiners look for at each grade boundary &mdash; and what you
          need to do to move up.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {RS_GRADE_CHARACTERISTICS.map((gc, gi) => (
            <motion.div
              key={gc.band}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: gi * 0.1 }}
              className={`rounded-xl border ${BORDER[gc.colour]} ${BG[gc.colour]} p-5`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`${BADGE[gc.colour]} px-3 py-1 rounded-full text-xs font-bold`}>
                  {gc.band}
                </span>
              </div>
              <ul className="space-y-2">
                {gc.traits.map((trait, i) => (
                  <li key={i} className="font-ui text-sm text-text flex gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${BADGE[gc.colour].split(" ")[0]} shrink-0 mt-1.5`} />
                    {trait}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Footer links ─────────────────────────────────── */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/rs"
            className="font-ui text-sm text-blue-600 hover:underline"
          >
            &larr; RS Home
          </Link>
        </motion.div>
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/rs/model-answers"
              className="font-ui text-sm text-blue-600 hover:underline"
            >
              Model Answers
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/rs/exam"
              className="font-ui text-sm text-grey hover:text-text transition-colors"
            >
              Exam Practice &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Answer Type Card (expandable) ───────────────────── */
function RsAnswerTypeCard({
  answerType,
  expanded,
  onToggle,
}: {
  answerType: RsAnswerType;
  expanded: boolean;
  onToggle: () => void;
}) {
  const c = answerType.colour;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={
        expanded ? undefined : { y: -2, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }
      }
      whileTap={expanded ? undefined : { scale: 0.99 }}
      className={`rounded-xl border ${BORDER[c]} bg-surface transition-[ring,ring-offset] ${
        expanded ? `ring-2 ring-offset-2 ring-offset-bg ${RING[c] ?? "ring-blue-500"}` : ""
      }`}
    >
      {/* Collapsed header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span
          className={`${BADGE[c]} w-10 h-10 rounded-lg font-display font-bold text-sm flex items-center justify-center shrink-0`}
        >
          {answerType.marks}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-ui font-bold text-[15px] text-text">
              {answerType.label}
            </span>
            <span
              className={`font-ui text-[11px] font-semibold px-2 py-0.5 rounded-full ${BG[c]} ${TEXT_CLR[c]}`}
            >
              {answerType.timeMinutes} min
            </span>
          </div>
          <p className="font-ui text-sm text-grey mt-0.5 line-clamp-1">
            {answerType.commandWords.join(", ")}
          </p>
        </div>
        <svg
          className={`w-4 h-4 text-grey shrink-0 transition-transform ${
            expanded ? "rotate-90" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Expanded detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="px-5 pb-5 pt-0 space-y-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {/* Structure steps */}
            <div>
              <p className="font-ui text-xs font-bold text-grey uppercase tracking-wider mb-2">
                Structure
              </p>
              <ol className="space-y-2">
                {answerType.structure.map((step, i) => (
                  <li key={i} className="flex gap-3 font-ui text-sm text-text">
                    <span
                      className={`${BADGE[c]} w-5 h-5 rounded-md shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold`}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Level descriptors */}
            {answerType.levelDescriptors.length > 0 && (
              <div>
                <p className="font-ui text-xs font-bold text-grey uppercase tracking-wider mb-2">
                  Level Descriptors
                </p>
                <div className="space-y-2">
                  {answerType.levelDescriptors.map((ld) => (
                    <div
                      key={ld.level}
                      className={`rounded-lg border ${BORDER[c]} ${BG[c]} px-4 py-3 flex items-start gap-3`}
                    >
                      <span
                        className={`${BADGE[c]} w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[11px] font-bold`}
                      >
                        L{ld.level}
                      </span>
                      <div>
                        <span className={`font-ui text-xs font-bold ${TEXT_CLR[c]}`}>
                          {ld.range} marks
                        </span>
                        <p className="font-ui text-sm text-text mt-0.5">
                          {ld.descriptor}
                        </p>
                      </div>
                    </div>
                  ))}
                  {answerType.id === "rs-12-mark" && (
                    <div className="rounded-lg border border-amber/20 bg-amber-light px-4 py-3 flex items-start gap-3">
                      <span className="bg-amber text-white w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[11px] font-bold">
                        +
                      </span>
                      <div>
                        <span className="font-ui text-xs font-bold text-amber">
                          0&ndash;3 SPaG marks
                        </span>
                        <p className="font-ui text-sm text-text mt-0.5">
                          Spelling, punctuation, grammar, and use of specialist
                          terminology
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tip */}
            <div
              className={`rounded-lg ${BG[c]} border ${BORDER[c]} px-4 py-3`}
            >
              <p
                className={`font-ui text-xs font-bold ${TEXT_CLR[c]} mb-1`}
              >
                Quick Tip
              </p>
              <p className="font-ui text-sm text-text">{answerType.tip}</p>
            </div>

            {/* Do / Don't */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-green/20 bg-green-light p-4">
                <p className="font-ui text-xs font-bold text-green mb-2">
                  Do this
                </p>
                <p className="font-ui text-sm text-text leading-relaxed italic">
                  &ldquo;{answerType.doThis}&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-red/20 bg-red-light p-4">
                <p className="font-ui text-xs font-bold text-red mb-2">
                  Not this
                </p>
                <p className="font-ui text-sm text-text leading-relaxed italic">
                  &ldquo;{answerType.notThis}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
