"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import {
  PARAGRAPH_STEPS,
  ESSAY_SKELETON,
  MODEL_PARAGRAPHS,
  GRADE_COMPARISONS,
  CAMP,
  ICE,
  RAD,
  type StructureStep,
} from "@/data/essay-structure";

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
  teal: "bg-teal-light",
  purple: "bg-purple-light",
  blue: "bg-blue-light",
  amber: "bg-amber-light",
  green: "bg-green-light",
  orange: "bg-orange-light",
  red: "bg-red-light",
  grey: "bg-grey-light",
};
const TEXT_CLR: Record<string, string> = {
  teal: "text-teal",
  purple: "text-purple",
  blue: "text-blue",
  amber: "text-amber",
  green: "text-green",
  orange: "text-orange",
  red: "text-red",
  grey: "text-grey",
};
const BORDER: Record<string, string> = {
  teal: "border-teal/20",
  purple: "border-purple/20",
  blue: "border-blue/20",
  amber: "border-amber/20",
  green: "border-green/20",
  orange: "border-orange/20",
  red: "border-red/20",
  grey: "border-border",
};
const BADGE: Record<string, string> = {
  teal: "bg-teal text-white",
  purple: "bg-purple text-white",
  blue: "bg-blue text-white",
  amber: "bg-amber text-white",
  green: "bg-green text-white",
  orange: "bg-orange text-white",
  red: "bg-red text-white",
  grey: "bg-grey text-white",
};
const RING: Record<string, string> = {
  teal: "ring-teal",
  purple: "ring-purple",
  blue: "ring-blue",
  amber: "ring-amber",
  green: "ring-green",
  orange: "ring-orange",
  red: "ring-red",
};

export default function EssayStructurePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [highlightStep, setHighlightStep] = useState<number | null>(null);
  const [activeTextIdx, setActiveTextIdx] = useState(0);
  const activeModel = MODEL_PARAGRAPHS[activeTextIdx];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="Grade 9 Essay Structure"
        subtitle="A 10-step scaffold for building analytical paragraphs that examiners reward. Learn it, adapt it, make it your own."
        image="/images/writing.jpg"
      />

      {/* Step colour strip */}
      <motion.div
        className="flex flex-wrap gap-1 mb-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PARAGRAPH_STEPS.map((s) => (
          <motion.span
            key={s.number}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
            }}
            className={`${BADGE[s.colour]} font-display font-bold text-xs w-7 h-7 rounded-lg flex items-center justify-center`}
            title={s.label}
          >
            {s.letter}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 mb-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } } }}
          className="font-ui text-xs font-semibold px-3 py-1 rounded-full bg-teal-light text-teal"
        >
          AO1 — Argument &amp; Evidence
        </motion.span>
        <motion.span
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } } }}
          className="font-ui text-xs font-semibold px-3 py-1 rounded-full bg-purple-light text-purple"
        >
          AO2 — Writer&apos;s Methods
        </motion.span>
        <motion.span
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } } }}
          className="font-ui text-xs font-semibold px-3 py-1 rounded-full bg-blue-light text-blue"
        >
          AO3 — Context
        </motion.span>
      </motion.div>

      {/* ── Essay Skeleton ───────────────────────────── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.h2
          className="font-display text-xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Essay Skeleton
        </motion.h2>
        <p className="text-grey font-ui text-sm mb-6 max-w-2xl">
          Every literature essay (45 min for Shakespeare/novel, 40 min for modern
          text) should follow this shape. Timing is approximate.
        </p>
        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ESSAY_SKELETON.map((section) => (
            <motion.div
              key={section.label}
              variants={staggerItem}
              whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }}
              className={`rounded-xl border ${BORDER[section.colour]} ${BG[section.colour]} p-5`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`font-ui text-sm font-bold ${TEXT_CLR[section.colour]}`}
                >
                  {section.label}
                </h3>
                <span className="font-ui text-xs text-grey">
                  {section.timing}
                </span>
              </div>
              <ul className="space-y-1.5">
                {section.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="font-ui text-sm text-text flex gap-2"
                  >
                    <span className={`shrink-0 ${TEXT_CLR[section.colour]}`}>
                      &bull;
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── The 10 Steps ─────────────────────────────── */}
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
          The 10 Steps
        </motion.h2>
        <p className="text-grey font-ui text-sm mb-6 max-w-2xl">
          Every body paragraph hits these ten beats. Click a step to see
          the full guidance, sentence starters, and do/don&apos;t examples.
        </p>

        {/* Step cards */}
        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PARAGRAPH_STEPS.map((step) => (
            <StepCard
              key={step.number}
              step={step}
              expanded={expandedStep === step.number}
              onToggle={() =>
                setExpandedStep(
                  expandedStep === step.number ? null : step.number
                )
              }
            />
          ))}
        </motion.div>
      </motion.section>

      {/* ── Acronym Reference Cards ──────────────────── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.h2
          className="font-display text-xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Key Acronyms
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* RAD */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            className="rounded-xl border border-orange/20 bg-orange-light p-5"
          >
            <h3 className="font-display text-lg font-bold text-orange mb-3">
              RAD
            </h3>
            <p className="font-ui text-xs text-grey mb-3">
              Use in Analysis 2 to push deeper
            </p>
            <ul className="space-y-2">
              {RAD.map((item) => (
                <li key={item.letter} className="font-ui text-sm text-text flex gap-2">
                  <span className="bg-orange text-white font-bold text-xs w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">
                    {item.letter}
                  </span>
                  <div>
                    <span className="font-semibold">{item.word}</span>
                    <span className="text-grey"> &mdash; {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Text types */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            className="rounded-xl border border-red/20 bg-red-light p-5"
          >
            <h3 className="font-display text-lg font-bold text-red mb-3">
              Useful Vocabulary: Text Types
            </h3>
            <p className="font-ui text-xs text-grey mb-3">
              What kind of text has the writer created? Use these terms when they fit naturally.
            </p>
            <ul className="space-y-2">
              {CAMP.map((item) => (
                <li key={item.letter} className="font-ui text-sm text-text flex gap-2">
                  <span className="bg-red text-white font-bold text-xs w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">
                    {item.letter}
                  </span>
                  <div>
                    <span className="font-semibold">{item.word}</span>
                    <span className="text-grey"> &mdash; {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Writer's intent */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            className="rounded-xl border border-amber/20 bg-amber-light p-5"
          >
            <h3 className="font-display text-lg font-bold text-amber mb-3">
              Useful Vocabulary: Writer&apos;s Intent
            </h3>
            <p className="font-ui text-xs text-grey mb-3">
              What does the writer want the audience to think, feel, or do?
            </p>
            <ul className="space-y-2">
              {ICE.map((item) => (
                <li key={item.letter} className="font-ui text-sm text-text flex gap-2">
                  <span className="bg-amber text-white font-bold text-xs w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5">
                    {item.letter}
                  </span>
                  <div>
                    <span className="font-semibold">{item.word}</span>
                    <span className="text-grey"> &mdash; {item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Flexible formula suggestion */}
        <div className="mt-4 rounded-xl border border-border bg-surface-hover p-4">
          <p className="font-ui text-sm text-text">
            <span className="font-bold text-red">Example pattern:</span>{" "}
            <span className="italic text-grey">
              &ldquo;Ultimately, [writer] uses [character/moment] to{" "}
              <span className="font-semibold text-amber">[challenge/inform/educate]</span> the audience
              about…&rdquo;
            </span>
          </p>
          <p className="font-ui text-xs text-grey mt-2">
            This is a useful starting pattern, not a rigid formula. Adapt it to fit your argument naturally.
          </p>
        </div>
      </motion.section>

      {/* ── Interactive Model Paragraph ──────────────── */}
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
          Model Paragraph — See It in Action
        </motion.h2>
        <p className="text-grey font-ui text-sm mb-4 max-w-2xl">
          Choose a text, then hover or tap each coloured section to see which
          step it belongs to.
        </p>

        {/* Text switcher tabs */}
        <div className="flex rounded-lg bg-grey-light p-1 mb-5">
          {MODEL_PARAGRAPHS.map((mp, idx) => (
            <motion.button
              key={mp.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveTextIdx(idx); setHighlightStep(null); }}
              className={`flex-1 rounded-md py-2 px-2 font-ui text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTextIdx === idx
                  ? "bg-surface text-teal shadow-sm"
                  : "text-grey hover:text-text"
              }`}
            >
              {mp.textTitle}
            </motion.button>
          ))}
        </div>

        {/* Question card */}
        <div className="rounded-xl border border-border bg-surface-hover p-4 mb-4">
          <p className="font-ui text-xs font-bold text-grey uppercase tracking-wider mb-1">
            Question — {activeModel.textTitle}
          </p>
          <p className="font-ui text-sm text-text font-medium">
            {activeModel.question}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setHighlightStep(null)}
            className={`font-ui text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
              highlightStep === null
                ? "bg-text text-bg border-text"
                : "bg-surface text-grey border-border hover:text-text"
            }`}
          >
            All
          </motion.button>
          {PARAGRAPH_STEPS.map((s) => (
            <motion.button
              key={s.number}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setHighlightStep(highlightStep === s.number ? null : s.number)
              }
              className={`font-ui text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                highlightStep === s.number
                  ? `${BADGE[s.colour]} border-transparent`
                  : `bg-surface ${TEXT_CLR[s.colour]} ${BORDER[s.colour]}`
              }`}
            >
              {s.letter}
            </motion.button>
          ))}
        </div>

        {/* The paragraph itself */}
        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 font-ui text-[15px] leading-relaxed text-text">
          {activeModel.segments.map((seg, i) => {
            const dimmed =
              highlightStep !== null && highlightStep !== seg.step;
            const active = highlightStep === seg.step;
            return (
              <span
                key={`${activeModel.id}-${i}`}
                onMouseEnter={() => setHighlightStep(seg.step)}
                className={`transition-all duration-200 cursor-pointer ${
                  dimmed ? "opacity-20" : ""
                } ${
                  active
                    ? `${TEXT_CLR[seg.colour]} font-medium`
                    : ""
                }`}
              >
                {i > 0 && " "}
                {active && (
                  <span
                    className={`inline-flex items-center justify-center ${BADGE[seg.colour]} text-[10px] font-bold w-4 h-4 rounded mr-1 align-text-bottom`}
                  >
                    {PARAGRAPH_STEPS[seg.step - 1]?.letter}
                  </span>
                )}
                {seg.text}
              </span>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
          {PARAGRAPH_STEPS.map((s) => (
            <span
              key={s.number}
              className={`flex items-center gap-1.5 font-ui text-xs ${TEXT_CLR[s.colour]}`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${BADGE[s.colour].split(" ")[0]}`}
              />
              {s.letter} — {s.label}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ── Grade Comparison ─────────────────────────── */}
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
          The same quote can score anywhere from grade 5 to grade 9 — it all
          depends on how you handle it.
        </p>
        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {GRADE_COMPARISONS.map((gc) => (
            <motion.div
              key={gc.grade}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              className={`rounded-xl border ${BORDER[gc.colour]} ${BG[gc.colour]} p-5`}
            >
              <h3
                className={`font-display text-lg font-bold ${TEXT_CLR[gc.colour]} mb-3`}
              >
                {gc.grade}
              </h3>
              <ul className="space-y-2">
                {gc.traits.map((t, i) => (
                  <li key={i} className="font-ui text-sm text-text flex gap-2">
                    <span className={`shrink-0 mt-1 ${TEXT_CLR[gc.colour]}`}>
                      &bull;
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Quick Checklist ──────────────────────────── */}
      <motion.section
        className="mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.h2
          className="font-display text-xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Before You Submit — Quick Checklist
        </motion.h2>
        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <motion.ul
            className="space-y-2.5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { text: "Point opens with writer's name + argument (not plot retelling).", colour: "teal" },
              { text: "Evidence 1 is embedded into your sentence, not dumped separately.", colour: "green" },
              { text: "Language analysis starts with meaning, not just technique names.", colour: "purple" },
              { text: "Analysis 1 uses What \u2192 How \u2192 Why to go deep.", colour: "orange" },
              { text: "Evidence 2 builds on Evidence 1 with a connective (Moreover\u2026).", colour: "green" },
              { text: "Second analysis deepens the argument \u2014 not just a different technique.", colour: "purple" },
              { text: "Analysis 2 pushes further \u2014 Represent, Amplify, or Develop.", colour: "orange" },
              { text: "Context is woven in \u2014 not bolted on. Explains the writer's choices.", colour: "blue" },
              { text: "Structure/form point connects to the bigger picture.", colour: "amber" },
              { text: "Ends by connecting to the writer's overall purpose.", colour: "red" },
            ].map((item, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-start gap-3 font-ui text-sm text-text">
                <span
                  className={`${BADGE[item.colour]} w-5 h-5 rounded-md shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold`}
                >
                  {PARAGRAPH_STEPS[i]?.letter}
                </span>
                {item.text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* ── Footer links ─────────────────────────────── */}
      <div className="flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="font-ui text-sm text-teal hover:underline"
          >
            &larr; Dashboard
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/englishlit/exam"
            className="font-ui text-sm text-grey hover:text-text transition-colors"
          >
            Practise an Essay &rarr;
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Step Card (expandable) ──────────────────────────── */
function StepCard({
  step,
  expanded,
  onToggle,
}: {
  step: StructureStep;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={expanded ? undefined : { y: -2, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
      whileTap={expanded ? undefined : { scale: 0.99 }}
      className={`rounded-xl border ${BORDER[step.colour]} bg-surface transition-[ring,ring-offset] ${
        expanded ? `ring-2 ring-offset-2 ring-offset-bg ${RING[step.colour]}` : ""
      }`}
    >
      {/* Collapsed header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span
          className={`${BADGE[step.colour]} w-8 h-8 rounded-lg font-display font-bold text-sm flex items-center justify-center shrink-0`}
        >
          {step.letter}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-ui font-bold text-[15px] text-text">
              {step.label}
            </span>
            <span
              className={`font-ui text-[11px] font-semibold px-2 py-0.5 rounded-full ${BG[step.colour]} ${TEXT_CLR[step.colour]}`}
            >
              {step.ao}
            </span>
          </div>
          <p className="font-ui text-sm text-grey mt-0.5 line-clamp-1">
            {step.what}
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
            <p className="font-ui text-sm text-text leading-relaxed">
              {step.detail}
            </p>

            {/* Tip */}
            <div className={`rounded-lg ${BG[step.colour]} border ${BORDER[step.colour]} px-4 py-3`}>
              <p className={`font-ui text-xs font-bold ${TEXT_CLR[step.colour]} mb-1`}>
                Quick Tip
              </p>
              <p className="font-ui text-sm text-text">
                {step.tip}
              </p>
            </div>

            {/* Sentence starters */}
            <div>
              <p className="font-ui text-xs font-bold text-grey uppercase tracking-wider mb-2">
                Sentence Starters
              </p>
              <div className="flex flex-wrap gap-2">
                {step.starterPhrases.map((sp, i) => (
                  <span
                    key={i}
                    className={`font-ui text-xs italic px-3 py-1.5 rounded-lg ${BG[step.colour]} ${TEXT_CLR[step.colour]}`}
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>

            {/* Do / Don't */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-green/20 bg-green-light p-4">
                <p className="font-ui text-xs font-bold text-green mb-2">
                  Do this
                </p>
                <p className="font-ui text-sm text-text leading-relaxed italic">
                  &ldquo;{step.doThis}&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-red/20 bg-red-light p-4">
                <p className="font-ui text-xs font-bold text-red mb-2">
                  Not this
                </p>
                <p className="font-ui text-sm text-text leading-relaxed italic">
                  &ldquo;{step.notThis}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
