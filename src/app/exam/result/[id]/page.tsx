"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getExamResponseById } from "@/data/exam-storage";
import { getTextBySlug } from "@/data/text-registry";
import type { ExamResponse } from "@/data/types";

export default function ExamResultPage() {
  const { id } = useParams<{ id: string }>();
  const [response, setResponse] = useState<ExamResponse | null>(null);

  useEffect(() => {
    const r = getExamResponseById(id);
    if (r) setResponse(r);
  }, [id]);

  if (!response) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-grey font-ui">Response not found.</p>
        <Link href="/exam" className="font-ui text-sm text-teal hover:underline mt-4 inline-block">
          ← Back to Exam Practice
        </Link>
      </div>
    );
  }

  const text = getTextBySlug(response.textSlug);
  const minutes = Math.floor(response.timeSpent / 60);
  const seconds = response.timeSpent % 60;
  const wordCount = response.studentAnswer.trim().split(/\s+/).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="font-ui text-sm text-grey mb-6">
        <Link href="/exam" className="hover:text-teal transition-colors">
          Exam Practice
        </Link>
        <span className="mx-2">›</span>
        <span className="text-text font-medium">Result</span>
      </nav>

      <h1 className="font-display text-2xl font-bold mb-1">Essay Submitted</h1>
      <p className="text-grey font-ui text-sm mb-6">
        {text?.title} · {minutes}m {seconds}s · {wordCount} words
      </p>

      {/* Question */}
      <div className="rounded-lg bg-purple-light border border-purple p-4 mb-6">
        <p className="font-body text-text leading-relaxed">{response.question}</p>
      </div>

      {/* Student answer */}
      <div className="rounded-xl border border-border bg-white p-5 mb-6">
        <p className="font-ui text-xs font-semibold text-grey uppercase tracking-wider mb-2">
          Your Response
        </p>
        <p className="font-body text-text leading-relaxed whitespace-pre-wrap">
          {response.studentAnswer}
        </p>
      </div>

      {/* AI Marking section */}
      {response.marking ? (
        <>
          {/* Score card */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="font-ui text-xs text-grey uppercase tracking-wider">Level</p>
              <p className="font-display text-2xl font-bold text-teal">{response.marking.level}</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="font-ui text-xs text-grey uppercase tracking-wider">Mark</p>
              <p className="font-display text-2xl font-bold text-purple">{response.marking.mark}/30</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-4 text-center">
              <p className="font-ui text-xs text-grey uppercase tracking-wider">Grade</p>
              <p className="font-display text-2xl font-bold text-blue">{response.marking.grade}</p>
            </div>
          </div>

          {/* AO breakdown */}
          <div className="space-y-3 mb-6">
            {(["ao1", "ao2", "ao3"] as const).map((ao) => {
              const data = response.marking![ao];
              const maxMark = ao === "ao2" ? 18 : 6;
              const labels = { ao1: "AO1 — Response & Quotations", ao2: "AO2 — Analysis & Methods", ao3: "AO3 — Context" };
              return (
                <div key={ao} className="rounded-lg border border-border bg-white p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-ui text-sm font-semibold text-text">{labels[ao]}</p>
                    <span className="font-ui text-sm font-bold text-teal">{data.mark}/{maxMark}</span>
                  </div>
                  <p className="font-body text-sm text-text leading-relaxed">{data.feedback}</p>
                </div>
              );
            })}
          </div>

          {/* Strengths & Improvements */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-green bg-green-light p-4">
              <p className="font-ui text-sm font-semibold text-green mb-2">Strengths</p>
              <ul className="space-y-1">
                {response.marking.strengths.map((s, i) => (
                  <li key={i} className="font-body text-sm text-text flex gap-2">
                    <span className="text-green shrink-0">✓</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-orange bg-orange-light p-4">
              <p className="font-ui text-sm font-semibold text-orange mb-2">Improvements</p>
              <ul className="space-y-1">
                {response.marking.improvements.map((s, i) => (
                  <li key={i} className="font-body text-sm text-text flex gap-2">
                    <span className="text-orange shrink-0">→</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Model paragraph */}
          {response.marking.modelParagraph && (
            <div className="rounded-xl border-2 border-teal bg-teal-light p-5 mb-6">
              <p className="font-ui text-xs font-semibold text-teal uppercase tracking-wider mb-2">
                Model Paragraph (Grade 8/9)
              </p>
              <p className="font-body text-text leading-relaxed">
                {response.marking.modelParagraph}
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-border bg-grey-light p-8 text-center mb-6">
          <span className="text-3xl mb-3 block">🤖</span>
          <p className="font-display text-lg font-bold text-text mb-1">
            AI Marking Coming Soon
          </p>
          <p className="font-ui text-sm text-grey max-w-md mx-auto">
            Your essay has been saved. AI-powered marking with AO breakdown,
            strengths, improvements, and a model paragraph will be available in a future update.
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Link href="/exam" className="font-ui text-sm text-teal hover:underline">
          ← Try another question
        </Link>
        <Link href="/" className="font-ui text-sm text-grey hover:text-text transition-colors">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
