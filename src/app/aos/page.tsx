"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import {
  ASSESSMENT_OBJECTIVES,
  PAPER_AO_BREAKDOWN,
  type AODetail,
} from "@/data/assessment-objectives";

export default function AOPage() {
  const [expandedAO, setExpandedAO] = useState<string | null>("ao2");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="Assessment Objectives"
        subtitle="AQA GCSE English Literature (8702) — understanding what examiners are looking for is the fastest route to higher marks."
        image="/images/student-studying.jpg"
      />

      {/* ── Overview Grid ─────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {ASSESSMENT_OBJECTIVES.map((ao) => {
          const colourStyles: Record<string, { bg: string; text: string; border: string }> = {
            teal:   { bg: "bg-teal-light",   text: "text-teal",   border: "border-teal/20" },
            purple: { bg: "bg-purple-light", text: "text-purple", border: "border-purple/20" },
            blue:   { bg: "bg-blue-light",   text: "text-blue",   border: "border-blue/20" },
            green:  { bg: "bg-green-light",  text: "text-green",  border: "border-green/20" },
          };
          const cs = colourStyles[ao.colour] ?? colourStyles.teal;
          return (
            <button
              key={ao.id}
              onClick={() => setExpandedAO(expandedAO === ao.id ? null : ao.id)}
              className={`rounded-xl border ${cs.border} ${cs.bg} p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${
                expandedAO === ao.id ? "ring-2 ring-offset-2 ring-offset-bg " + cs.text.replace("text-", "ring-") : ""
              }`}
            >
              <p className={`font-display font-bold text-lg ${cs.text}`}>
                {ao.shortLabel}
              </p>
              <p className="font-ui text-xs text-grey mt-1 leading-snug">
                {ao.label.split("—")[1]?.trim()}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className={`font-ui text-[11px] font-bold ${cs.text}`}>
                  {ao.weight}
                </span>
                <span className="font-ui text-[11px] text-grey">
                  of total GCSE
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Expanded AO Detail ────────────────────────── */}
      {expandedAO && <AODetailCard ao={ASSESSMENT_OBJECTIVES.find((a) => a.id === expandedAO)!} />}

      {/* ── Paper & Mark Breakdown Table ───────────────── */}
      <section className="mt-12 mb-10">
        <h2 className="font-display text-xl font-bold mb-4">
          Mark Allocation by Paper
        </h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-ui">
              <thead>
                <tr className="bg-surface-hover">
                  <th className="text-left px-4 py-3 font-semibold text-text">Question</th>
                  <th className="text-center px-3 py-3 font-semibold text-teal">AO1</th>
                  <th className="text-center px-3 py-3 font-semibold text-purple">AO2</th>
                  <th className="text-center px-3 py-3 font-semibold text-blue">AO3</th>
                  <th className="text-center px-3 py-3 font-semibold text-green">AO4</th>
                  <th className="text-center px-3 py-3 font-semibold text-text">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {PAPER_AO_BREAKDOWN.map((row, i) => (
                  <tr key={i} className="hover:bg-surface-hover/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-text">{row.questionType}</p>
                      <p className="text-xs text-grey">
                        {row.paper} {row.section}
                      </p>
                    </td>
                    <td className="text-center px-3 py-3 text-teal font-semibold">{row.ao1}</td>
                    <td className="text-center px-3 py-3 text-purple font-semibold">{row.ao2}</td>
                    <td className="text-center px-3 py-3 text-blue font-semibold">
                      {row.ao3 || <span className="text-grey/40">—</span>}
                    </td>
                    <td className="text-center px-3 py-3 text-green font-semibold">
                      {row.ao4 || <span className="text-grey/40">—</span>}
                    </td>
                    <td className="text-center px-3 py-3 font-bold text-text">{row.totalMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="font-ui text-xs text-grey mt-2">
          AO4 (SPaG) marks are only awarded on the Paper 2 Section A Modern Text question.
        </p>
      </section>

      {/* ── Quick Reference: All Sentence Starters ────── */}
      <section className="mb-10">
        <h2 className="font-display text-xl font-bold mb-4">
          Sentence Starters — Quick Reference
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {ASSESSMENT_OBJECTIVES.filter((ao) => ao.id !== "ao4").map((ao) => {
            const colourMap: Record<string, string> = {
              teal: "border-teal bg-teal-light",
              purple: "border-purple bg-purple-light",
              blue: "border-blue bg-blue-light",
              green: "border-green bg-green-light",
            };
            const textMap: Record<string, string> = {
              teal: "text-teal",
              purple: "text-purple",
              blue: "text-blue",
              green: "text-green",
            };
            return (
              <div
                key={ao.id}
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
              </div>
            );
          })}
        </div>
      </section>

      {/* Back link */}
      <div className="flex items-center justify-between">
        <Link href="/" className="font-ui text-sm text-teal hover:underline">
          ← Dashboard
        </Link>
        <Link href="/exam" className="font-ui text-sm text-grey hover:text-text transition-colors">
          Exam Practice →
        </Link>
      </div>
    </div>
  );
}

/* ─── Expanded AO Detail Card ─────────────────────────── */
function AODetailCard({ ao }: { ao: AODetail }) {
  const [showLevels, setShowLevels] = useState(false);

  const colourMap: Record<string, { border: string; heading: string; badge: string; barBg: string }> = {
    teal:   { border: "border-teal/20", heading: "text-teal",   badge: "bg-teal text-white",     barBg: "bg-teal" },
    purple: { border: "border-purple/20", heading: "text-purple", badge: "bg-purple text-white", barBg: "bg-purple" },
    blue:   { border: "border-blue/20", heading: "text-blue",   badge: "bg-blue text-white",     barBg: "bg-blue" },
    green:  { border: "border-green/20", heading: "text-green",  badge: "bg-green text-white",   barBg: "bg-green" },
  };
  const cs = colourMap[ao.colour] ?? colourMap.teal;

  return (
    <div className={`rounded-2xl border-2 ${cs.border} bg-surface p-6 sm:p-8 mb-8 animate-in fade-in duration-300`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
        <div>
          <h2 className={`font-display text-xl font-bold ${cs.heading}`}>
            {ao.label}
          </h2>
          <p className="font-ui text-xs text-grey mt-1">
            {ao.weight} of total GCSE &middot; Up to {ao.maxMark} marks per question
          </p>
        </div>
        <span className={`${cs.badge} font-ui text-xs font-bold px-3 py-1 rounded-full shrink-0`}>
          {ao.maxMark} marks
        </span>
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
          💡 What the examiner is looking for
        </p>
        <p className="font-body text-sm text-text leading-relaxed">
          {ao.examinerSummary}
        </p>
      </div>

      {/* Top tips */}
      <div className="mb-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-2">
          Top Tips
        </h3>
        <div className="space-y-2">
          {ao.topTips.map((tip, i) => (
            <div key={i} className="rounded-lg bg-surface-hover p-3">
              <p className="font-body text-sm text-text leading-relaxed">
                <span className={`font-bold ${cs.heading} mr-1`}>{i + 1}.</span>
                {tip.text}
              </p>
              {tip.example && (
                <p className="font-body text-xs text-grey mt-1.5 italic border-l-2 border-border pl-3">
                  e.g. {tip.example}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Common mistakes */}
      <div className="mb-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-2">
          Common Mistakes to Avoid
        </h3>
        <ul className="space-y-1">
          {ao.commonMistakes.map((m, i) => (
            <li key={i} className="font-body text-sm text-text flex gap-2">
              <span className="text-red shrink-0">✕</span>
              {m}
            </li>
          ))}
        </ul>
      </div>

      {/* Level descriptors (collapsible) */}
      <div>
        <button
          onClick={() => setShowLevels(!showLevels)}
          className="font-ui text-sm font-semibold text-text flex items-center gap-2 cursor-pointer hover:text-teal transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform ${showLevels ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          Level Descriptors ({ao.levelDescriptors.length} levels)
        </button>
        {showLevels && (
          <div className="mt-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {ao.levelDescriptors.map((ld) => (
              <div
                key={ld.level}
                className="rounded-lg border border-border bg-surface px-4 py-2.5 flex items-start gap-3"
              >
                <span className={`${cs.badge} font-ui text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                  {ld.level}
                </span>
                <div>
                  <p className="font-ui text-xs font-semibold text-grey">
                    Marks {ld.range}
                  </p>
                  <p className="font-body text-sm text-text">{ld.descriptor}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
