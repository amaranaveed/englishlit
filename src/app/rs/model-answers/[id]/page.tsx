"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { getRsModelAnswerById, getRsModelAnswers } from "@/data/rs/model-answers";
import { getRsTopicBySlug } from "@/data/rs/topic-registry";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── colour helpers ──────────────────────────────────── */
const BG: Record<string, string> = {
  blue: "bg-blue-50", indigo: "bg-indigo-50", sky: "bg-sky-50",
  violet: "bg-violet-50", purple: "bg-purple-light",
  orange: "bg-orange-light", green: "bg-green-light", red: "bg-red-light",
  teal: "bg-teal-light", cyan: "bg-cyan-50", emerald: "bg-emerald-50",
};
const TEXT_CLR: Record<string, string> = {
  blue: "text-blue-700", indigo: "text-indigo-700", sky: "text-sky-700",
  violet: "text-violet-700", purple: "text-purple",
  orange: "text-orange", green: "text-green", red: "text-red",
  teal: "text-teal", cyan: "text-cyan-700", emerald: "text-emerald-700",
};
const BADGE: Record<string, string> = {
  blue: "bg-blue-600 text-white", indigo: "bg-indigo-600 text-white", sky: "bg-sky-600 text-white",
  violet: "bg-violet-600 text-white", purple: "bg-purple text-white",
  orange: "bg-orange text-white", green: "bg-green text-white", red: "bg-red text-white",
  teal: "bg-teal text-white", cyan: "bg-cyan-600 text-white", emerald: "bg-emerald-600 text-white",
};
const BORDER: Record<string, string> = {
  blue: "border-blue-200", indigo: "border-indigo-200", sky: "border-sky-200",
  violet: "border-violet-200", purple: "border-purple/20",
  orange: "border-orange/20", green: "border-green/20", red: "border-red/20",
  teal: "border-teal/20", cyan: "border-cyan-200", emerald: "border-emerald-200",
};

const MARK_COLOURS: Record<number, { bg: string; text: string }> = {
  5: { bg: "bg-blue-100", text: "text-blue-700" },
  12: { bg: "bg-indigo-100", text: "text-indigo-700" },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default function RsModelAnswerDetailPage({ params }: Props) {
  const { id } = use(params);
  const answer = getRsModelAnswerById(id);
  if (!answer) notFound();

  const topic = getRsTopicBySlug(answer.topicSlug);
  if (!topic) notFound();

  const allAnswers = getRsModelAnswers();
  const currentIndex = allAnswers.findIndex((a) => a.id === id);
  const prev = currentIndex > 0 ? allAnswers[currentIndex - 1] : null;
  const next = currentIndex < allAnswers.length - 1 ? allAnswers[currentIndex + 1] : null;
  const markColours = MARK_COLOURS[answer.marks] ?? { bg: "bg-grey-light", text: "text-grey" };

  const [highlightStep, setHighlightStep] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <motion.nav
        className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Link href="/rs" className="hover:text-blue-600 transition-colors">Religious Studies</Link>
        <span className="mx-2">&rsaquo;</span>
        <Link href="/rs/model-answers" className="hover:text-blue-600 transition-colors">Model Answers</Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-text font-medium">{answer.commandWord} ({answer.marks}m)</span>
      </motion.nav>

      {/* Question card */}
      <motion.div
        className="rounded-xl border border-border bg-surface-hover p-5 mb-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
      >
        <div className="flex items-start gap-4">
          <span className={`${markColours.bg} ${markColours.text} w-11 h-11 rounded-lg font-display font-bold text-base flex items-center justify-center shrink-0`}>
            {answer.marks}
          </span>
          <div>
            <p className="font-ui text-sm text-text leading-relaxed font-medium">
              {answer.question}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider ${markColours.bg} ${markColours.text} px-2 py-0.5 rounded-full`}>
                {answer.commandWord}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                Grade {answer.grade}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-grey-light text-grey px-2 py-0.5 rounded-full">
                {topic.title}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filter buttons */}
      <motion.div
        className="flex flex-wrap gap-1.5 mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
      >
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
        {answer.steps.map((step, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => setHighlightStep(highlightStep === i ? null : i)}
            className={`font-ui text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-all cursor-pointer ${
              highlightStep === i
                ? `${BADGE[step.colour] ?? "bg-blue-600 text-white"} border-transparent`
                : `bg-surface ${TEXT_CLR[step.colour] ?? "text-blue-700"} ${BORDER[step.colour] ?? "border-blue-200"}`
            }`}
          >
            {step.label.charAt(0).toUpperCase()}
          </motion.button>
        ))}
      </motion.div>

      {/* The paragraph itself */}
      <motion.div
        className="rounded-xl border border-border bg-surface p-5 sm:p-6 font-ui text-[15px] leading-relaxed text-text"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
      >
        {answer.steps.map((step, i) => {
          const dimmed = highlightStep !== null && highlightStep !== i;
          const active = highlightStep === i;
          return (
            <span
              key={i}
              onMouseEnter={() => setHighlightStep(i)}
              className={`transition-all duration-200 cursor-pointer ${
                dimmed ? "opacity-20" : ""
              } ${
                active ? `${TEXT_CLR[step.colour] ?? "text-blue-700"} font-medium` : ""
              }`}
            >
              {i > 0 && " "}
              {active && (
                <span
                  className={`inline-flex items-center justify-center ${BADGE[step.colour] ?? "bg-blue-600 text-white"} text-[10px] font-bold w-4 h-4 rounded mr-1 align-text-bottom`}
                >
                  {step.label.charAt(0).toUpperCase()}
                </span>
              )}
              {step.text}
            </span>
          );
        })}
      </motion.div>

      {/* Legend */}
      <motion.div
        className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
      >
        {answer.steps.map((step, i) => (
          <span
            key={i}
            className={`flex items-center gap-1.5 font-ui text-xs ${TEXT_CLR[step.colour] ?? "text-blue-700"}`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${(BADGE[step.colour] ?? "bg-blue-600 text-white").split(" ")[0]}`} />
            {step.label.charAt(0).toUpperCase()} &mdash; {step.label}
          </span>
        ))}
      </motion.div>

      {/* Examiner notes */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
      >
        <h2 className="font-display text-lg font-bold mb-4">Examiner Notes</h2>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <ul className="space-y-2">
            {answer.examinerNotes.map((note, i) => (
              <li key={i} className="font-ui text-sm text-text flex gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Practice link */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
      >
        <div className="rounded-xl border border-border bg-surface p-5 text-center">
          <p className="font-ui text-sm text-grey mb-3">
            Ready to try this question yourself?
          </p>
          <Link
            href="/rs/exam"
            className="inline-block px-6 py-2.5 rounded-xl bg-blue-600 text-white font-ui text-sm font-bold hover:bg-blue-700 transition-colors"
          >
            Practice in Exam Mode &rarr;
          </Link>
        </div>
      </motion.div>

      {/* Prev/Next navigation */}
      <div className="h-px bg-border/30 my-6" />
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
      >
        {prev ? (
          <Link
            href={`/rs/model-answers/${prev.id}`}
            className="font-ui text-sm text-grey hover:text-text transition-colors"
          >
            &larr; Previous
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/rs/model-answers/${next.id}`}
            className="font-ui text-sm text-blue-600 hover:underline"
          >
            Next &rarr;
          </Link>
        ) : (
          <Link
            href="/rs/model-answers"
            className="font-ui text-sm text-blue-600 hover:underline"
          >
            All Model Answers &rarr;
          </Link>
        )}
      </motion.div>
    </div>
  );
}
