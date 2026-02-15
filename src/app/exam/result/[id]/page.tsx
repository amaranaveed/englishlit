"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getTextBySlug } from "@/data/text-registry";
import { getExamQuestions } from "@/data/quotes";
import { useStorage } from "@/hooks/useStorage";
import { useAuth } from "@/components/AuthProvider";
import type { ExamResponse } from "@/data/types";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const scoreCardItem = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

export default function ExamResultPage() {
  const { id } = useParams<{ id: string }>();
  const { profile } = useAuth();
  const [response, setResponse] = useState<ExamResponse | null>(null);
  const [marking, setMarking] = useState(false);
  const [markError, setMarkError] = useState<string | null>(null);
  const [mistakesAdded, setMistakesAdded] = useState(false);

  const { getExamResponseById, updateExamResponse, addFlashcard } = useStorage();

  const [autoMarkTriggered, setAutoMarkTriggered] = useState(false);

  useEffect(() => {
    getExamResponseById(id).then((r) => {
      if (r) setResponse(r);
    });
  }, [id, getExamResponseById]);

  // Auto-mark on page load if no marking exists yet
  useEffect(() => {
    if (response && !response.marking && !marking && !autoMarkTriggered && !markError) {
      setAutoMarkTriggered(true);
      handleMark();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  if (!response) {
    return (
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <p className="text-grey font-ui">Response not found.</p>
        <Link href="/exam" className="font-ui text-sm text-teal hover:underline mt-4 inline-block">
          ← Back to Exam Practice
        </Link>
      </motion.div>
    );
  }

  const text = getTextBySlug(response.textSlug);
  const minutes = Math.floor(response.timeSpent / 60);
  const seconds = response.timeSpent % 60;
  const wordCount = response.studentAnswer.trim().split(/\s+/).length;

  async function handleMark() {
    if (!response || marking) return;
    setMarking(true);
    setMarkError(null);

    try {
      // Look up curated model paragraph for this question
      const questions = getExamQuestions(response.textSlug);
      const matchedQ = questions.find((q) => q.question === response.question);

      const res = await fetch("/api/mark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          textName: text?.title ?? response.textSlug,
          question: response.question,
          answer: response.studentAnswer,
          ...(matchedQ?.modelParagraph ? { modelParagraph: matchedQ.modelParagraph } : {}),
          ...(profile?.targetGrade ? { targetGrade: profile.targetGrade } : {}),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMarkError(data.error || `API error ${res.status}`);
        return;
      }

      // Save marking
      await updateExamResponse(response.id, { marking: data.marking });
      setResponse({ ...response, marking: data.marking });
    } catch (err) {
      setMarkError(err instanceof Error ? err.message : "Network error");
    } finally {
      setMarking(false);
    }
  }

  async function handleAddMistakes() {
    if (!response?.marking?.mistakes || mistakesAdded) return;
    const now = new Date().toISOString();
    for (const m of response.marking.mistakes) {
      await addFlashcard({
        id: `mistake-${response.id}-${m.topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}`,
        type: "mistake",
        textSlug: response.textSlug,
        front: m.topic,
        back: m.correction,
        confidence: 0,
        nextReview: now,
        createdAt: now,
      });
    }
    setMistakesAdded(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <motion.nav
        className="font-ui text-sm text-grey mb-6"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Link href="/exam" className="hover:text-teal transition-colors">
          Exam Practice
        </Link>
        <span className="mx-2">›</span>
        <span className="text-text font-medium">Result</span>
      </motion.nav>

      <motion.h1
        className="font-display text-2xl font-bold mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
      >
        Essay Submitted
      </motion.h1>
      <motion.p
        className="text-grey font-ui text-sm mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
      >
        {text?.title} · {minutes}m {seconds}s · {wordCount} words
      </motion.p>

      {/* Question */}
      <motion.div
        className="rounded-lg bg-purple-light border border-purple p-4 mb-6"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-body text-text leading-relaxed">{response.question}</p>
      </motion.div>

      {/* Student answer */}
      <motion.div
        className="rounded-xl border border-border bg-surface p-5 mb-6"
        whileHover={{ boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-ui text-xs font-semibold text-grey uppercase tracking-wider mb-2">
          Your Response
        </p>
        <p className="font-body text-text leading-relaxed whitespace-pre-wrap">
          {response.studentAnswer}
        </p>
      </motion.div>

      {/* AI Marking section */}
      {response.marking ? (
        <>
          {/* Score card */}
          <motion.div
            className="grid grid-cols-3 gap-3 mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={scoreCardItem} className="rounded-xl border border-border bg-surface p-4 text-center">
              <p className="font-ui text-xs text-grey uppercase tracking-wider">Level</p>
              <p className="font-display text-2xl font-bold text-teal">{response.marking.level}</p>
            </motion.div>
            <motion.div variants={scoreCardItem} className="rounded-xl border border-border bg-surface p-4 text-center">
              <p className="font-ui text-xs text-grey uppercase tracking-wider">Mark</p>
              <p className="font-display text-2xl font-bold text-purple">{response.marking.mark}/30</p>
            </motion.div>
            <motion.div variants={scoreCardItem} className="rounded-xl border border-border bg-surface p-4 text-center">
              <p className="font-ui text-xs text-grey uppercase tracking-wider">Grade</p>
              <p className="font-display text-2xl font-bold text-blue">{response.marking.grade}</p>
            </motion.div>
          </motion.div>

          {/* AO breakdown */}
          <motion.div
            className="space-y-3 mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {(["ao1", "ao2", "ao3"] as const).map((ao) => {
              const data = response.marking![ao];
              const maxMark = ao === "ao2" ? 18 : 6;
              const labels = { ao1: "AO1 — Response & Quotations", ao2: "AO2 — Analysis & Methods", ao3: "AO3 — Context" };
              const pct = (data.mark / maxMark) * 100;
              return (
                <motion.div key={ao} variants={staggerItem} className="rounded-lg border border-border bg-surface p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-ui text-sm font-semibold text-text">{labels[ao]}</p>
                    <span className="font-ui text-sm font-bold text-teal">{data.mark}/{maxMark}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full bg-grey-light overflow-hidden mb-2">
                    <motion.div
                      className={`h-full rounded-full ${pct >= 70 ? "bg-green" : pct >= 40 ? "bg-orange" : "bg-red"}`}
                      initial={{ width: 0 }}
                      animate={{ width: pct + "%" }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                    />
                  </div>
                  <p className="font-body text-sm text-text leading-relaxed">{data.feedback}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Strengths & Improvements */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 mb-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem} className="rounded-xl border border-green bg-green-light p-4">
              <p className="font-ui text-sm font-semibold text-green mb-2">Strengths</p>
              <ul className="space-y-1">
                {response.marking.strengths.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
                    className="font-body text-sm text-text flex gap-2"
                  >
                    <span className="text-green shrink-0">✓</span>{s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={staggerItem} className="rounded-xl border border-orange bg-orange-light p-4">
              <p className="font-ui text-sm font-semibold text-orange mb-2">Improvements</p>
              <ul className="space-y-1">
                {response.marking.improvements.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
                    className="font-body text-sm text-text flex gap-2"
                  >
                    <span className="text-orange shrink-0">→</span>{s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Mistakes → Flashcards */}
          {response.marking.mistakes.length > 0 && (
            <motion.div
              className="rounded-xl border border-red bg-red-light p-4 mb-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-ui text-sm font-semibold text-red">
                  Mistakes to Learn ({response.marking.mistakes.length})
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddMistakes}
                  disabled={mistakesAdded}
                  className={`font-ui text-xs font-bold px-3 py-1 rounded-full transition-colors cursor-pointer ${
                    mistakesAdded
                      ? "bg-green-light text-green"
                      : "bg-red text-white hover:bg-red/90"
                  }`}
                >
                  {mistakesAdded ? "✓ Added to flashcards" : "Add to flashcards"}
                </motion.button>
              </div>
              <motion.div
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {response.marking.mistakes.map((m, i) => (
                  <motion.div key={i} variants={staggerItem} className="rounded-lg bg-surface-raised p-3">
                    <p className="font-ui text-sm font-medium text-text">{m.topic}</p>
                    <p className="font-ui text-xs text-grey mt-0.5">{m.correction}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Model paragraph */}
          {response.marking.modelParagraph && (
            <motion.div
              className="rounded-xl border-2 border-teal bg-teal-light p-5 mb-6"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="font-ui text-xs font-semibold text-teal uppercase tracking-wider mb-2">
                Model Paragraph (Grade 8/9)
              </p>
              <p className="font-body text-text leading-relaxed">
                {response.marking.modelParagraph}
              </p>
            </motion.div>
          )}
        </>
      ) : (
        /* ─── No marking yet: auto-marking loading screen ─── */
        <motion.div
          className="rounded-xl border-2 border-teal/30 bg-surface p-10 text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {markError ? (
            <>
              <span className="text-3xl mb-3 block">⚠️</span>
              <p className="font-display text-lg font-bold text-text mb-2">
                Marking Failed
              </p>
              <div className="rounded-lg bg-red-light border border-red p-3 mb-5 max-w-md mx-auto text-left">
                <p className="font-ui text-xs text-red/80">{markError}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setMarkError(null); setAutoMarkTriggered(false); }}
                className="px-6 py-2.5 rounded-xl bg-teal text-white font-ui text-sm font-bold hover:bg-teal/90 transition-colors cursor-pointer"
              >
                Try again
              </motion.button>
            </>
          ) : (
            <motion.div
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 animate-spin" viewBox="0 0 50 50" fill="none">
                    <circle cx="25" cy="25" r="20" stroke="#e5e7eb" strokeWidth="4" />
                    <circle cx="25" cy="25" r="20" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" strokeDasharray="80 45" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl">🤖</span>
                </div>
              </div>
              <p className="font-display text-lg font-bold text-text mb-1">
                AI Examiner is marking your essay...
              </p>
              <p className="font-ui text-sm text-grey max-w-sm mx-auto mb-4">
                Analysing your response against AO1, AO2, and AO3. This usually takes around 10 seconds.
              </p>
              <div className="flex justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-teal animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Actions */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
          <Link href="/exam" className="font-ui text-sm text-teal hover:underline">
            ← Try another question
          </Link>
        </motion.div>
        <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="font-ui text-sm text-grey hover:text-text transition-colors">
            Dashboard
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
