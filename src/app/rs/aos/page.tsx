"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import {
  RS_ASSESSMENT_OBJECTIVES,
  RS_PAPER_AO_BREAKDOWN,
  type RsAODetail,
} from "@/data/rs/assessment-objectives";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function RsAOPage() {
  const [expandedAO, setExpandedAO] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="Assessment Objectives"
        subtitle="AQA GCSE Religious Studies A 8062"
        image="/images/hero-books.jpg"
      />

      {/* ── Overview Grid ─────────────────────────────── */}
      <motion.div
        className="grid grid-cols-2 gap-3 mb-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {RS_ASSESSMENT_OBJECTIVES.map((ao) => {
          const colourStyles: Record<string, { bg: string; text: string; border: string }> = {
            blue:   { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-blue-200" },
            indigo: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
            purple: { bg: "bg-purple-light", text: "text-purple", border: "border-purple/20" },
            teal:   { bg: "bg-teal-light",   text: "text-teal",   border: "border-teal/20" },
          };
          const cs = colourStyles[ao.colour] ?? colourStyles.blue;
          return (
            <motion.button
              key={ao.id}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setExpandedAO(expandedAO === ao.id ? null : ao.id)}
              className={`rounded-xl border ${cs.border} ${cs.bg} p-4 text-left transition-[ring,ring-offset] cursor-pointer ${
                expandedAO === ao.id ? "ring-2 ring-offset-2 ring-offset-bg " + cs.text.replace("text-", "ring-") : ""
              }`}
            >
              <p className={`font-display font-bold text-lg ${cs.text}`}>
                {ao.shortLabel}
              </p>
              <p className="font-ui text-xs text-grey mt-1 leading-snug">
                {ao.label.split("\u2014")[1]?.trim()}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className={`font-ui text-[11px] font-bold ${cs.text}`}>
                  {ao.weight}
                </span>
                <span className="font-ui text-[11px] text-grey">
                  of total GCSE
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* ── Expanded AO Detail ────────────────────────── */}
      <AnimatePresence mode="wait">
        {expandedAO && (
          <RsAODetailCard
            key={expandedAO}
            ao={RS_ASSESSMENT_OBJECTIVES.find((a) => a.id === expandedAO)!}
          />
        )}
      </AnimatePresence>

      {/* ── Paper & AO Weighting Table ───────────────── */}
      <motion.section
        className="mt-12 mb-10"
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
          AO Weighting by Paper
        </motion.h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-ui">
              <thead>
                <tr className="bg-surface-hover">
                  <th className="text-left px-4 py-3 font-semibold text-text">Paper</th>
                  <th className="text-center px-3 py-3 font-semibold text-blue-700">AO1</th>
                  <th className="text-center px-3 py-3 font-semibold text-indigo-700">AO2</th>
                  <th className="text-center px-3 py-3 font-semibold text-text">Total</th>
                </tr>
              </thead>
              <motion.tbody
                className="divide-y divide-border"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {RS_PAPER_AO_BREAKDOWN.map((row, i) => (
                  <motion.tr
                    key={i}
                    variants={staggerItem}
                    className="hover:bg-surface-hover/50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-text">{row.paper}</td>
                    <td className="text-center px-3 py-3 text-blue-700 font-semibold">{row.ao1}</td>
                    <td className="text-center px-3 py-3 text-indigo-700 font-semibold">{row.ao2}</td>
                    <td className="text-center px-3 py-3 font-bold text-text">{row.total}</td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        </div>
        <p className="font-ui text-xs text-grey mt-2">
          AQA GCSE Religious Studies A (8062) consists of two papers: Paper 1 covers the study of two religions, and Paper 2 covers four thematic studies. Both AOs are weighted equally at 50% each.
        </p>
      </motion.section>

      {/* ── Quick Reference: All Sentence Starters ────── */}
      <motion.section
        className="mb-10"
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
          Sentence Starters -- Quick Reference
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {RS_ASSESSMENT_OBJECTIVES.map((ao) => {
            const colourMap: Record<string, string> = {
              blue: "border-blue-200 bg-blue-50",
              indigo: "border-indigo-200 bg-indigo-50",
              purple: "border-purple bg-purple-light",
              teal: "border-teal bg-teal-light",
            };
            const textMap: Record<string, string> = {
              blue: "text-blue-700",
              indigo: "text-indigo-700",
              purple: "text-purple",
              teal: "text-teal",
            };
            return (
              <motion.div
                key={ao.id}
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className={`rounded-xl border ${colourMap[ao.colour]} p-4`}
              >
                <p className={`font-ui text-sm font-bold ${textMap[ao.colour]} mb-2`}>
                  {ao.shortLabel}
                </p>
                <ul className="space-y-1.5">
                  {ao.sentenceStarters.map((ss, j) => (
                    <li key={j} className="font-body text-sm text-text">
                      <span className="font-ui text-xs text-grey mr-1.5">
                        {ss.label}:
                      </span>
                      <span className="italic">{ss.starter}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* ── Footer links ─────────────────────────────── */}
      <div className="flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Link href="/rs" className="font-ui text-sm text-blue-600 hover:underline">
            &larr; RS Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
          <Link href="/rs/essay-structure" className="font-ui text-sm text-grey hover:text-text transition-colors">
            Answer Structure &rarr;
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Expanded AO Detail Card ─────────────────────────── */
function RsAODetailCard({ ao }: { ao: RsAODetail }) {
  const colourMap: Record<string, { border: string; heading: string; badge: string }> = {
    blue:   { border: "border-blue-200",   heading: "text-blue-700",   badge: "bg-blue-600 text-white" },
    indigo: { border: "border-indigo-200", heading: "text-indigo-700", badge: "bg-indigo-600 text-white" },
    purple: { border: "border-purple/20", heading: "text-purple", badge: "bg-purple text-white" },
    teal:   { border: "border-teal/20",   heading: "text-teal",   badge: "bg-teal text-white" },
  };
  const cs = colourMap[ao.colour] ?? colourMap.blue;

  return (
    <motion.div
      className={`rounded-2xl border-2 ${cs.border} bg-surface p-6 sm:p-8 mb-8`}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
        <div>
          <motion.h2
            className={`font-display text-xl font-bold ${cs.heading}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          >
            {ao.label}
          </motion.h2>
          <p className="font-ui text-xs text-grey mt-1">
            {ao.weight} of total GCSE
          </p>
        </div>
        <motion.span
          className={`${cs.badge} font-ui text-xs font-bold px-3 py-1 rounded-full shrink-0`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.15 }}
        >
          {ao.weight}
        </motion.span>
      </div>

      {/* What it means */}
      <div className="mb-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-1.5">
          What does this mean?
        </h3>
        <p className="font-body text-sm text-text leading-relaxed">
          {ao.whatItMeans}
        </p>
      </div>

      {/* Examiner says */}
      <div className="rounded-lg bg-surface-hover border border-border p-4 mb-5">
        <p className="font-ui text-xs font-bold text-grey uppercase tracking-wider mb-1">
          What the examiner is looking for
        </p>
        <p className="font-body text-sm text-text leading-relaxed">
          {ao.examinerSummary}
        </p>
      </div>

      {/* Common mistakes */}
      <div className="mb-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-2">
          Common Mistakes to Avoid
        </h3>
        <motion.ul
          className="space-y-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {ao.commonMistakes.map((m, i) => (
            <motion.li key={i} variants={staggerItem} className="font-body text-sm text-text flex gap-2">
              <span className="text-red shrink-0">&times;</span>
              {m}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Top tips */}
      <div className="mb-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-2">
          Top Tips
        </h3>
        <motion.div
          className="space-y-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {ao.topTips.map((tip, i) => (
            <motion.div key={i} variants={staggerItem} className="rounded-lg bg-surface-hover p-3">
              <p className="font-body text-sm text-text leading-relaxed">
                <span className={`font-bold ${cs.heading} mr-1`}>{i + 1}.</span>
                {tip.text}
              </p>
              {tip.example && (
                <p className="font-body text-xs text-grey mt-1.5 italic border-l-2 border-border pl-3">
                  e.g. {tip.example}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sentence starters */}
      <div>
        <h3 className="font-ui text-sm font-semibold text-text mb-2">
          Sentence Starters
        </h3>
        <div className="flex flex-wrap gap-2">
          {ao.sentenceStarters.map((ss, j) => (
            <span
              key={j}
              className={`font-ui text-xs italic px-3 py-1.5 rounded-lg ${
                ao.colour === "blue" ? "bg-blue-50 text-blue-700" :
                ao.colour === "indigo" ? "bg-indigo-50 text-indigo-700" :
                ao.colour === "purple" ? "bg-purple-light text-purple" :
                "bg-teal-light text-teal"
              }`}
            >
              {ss.starter}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
