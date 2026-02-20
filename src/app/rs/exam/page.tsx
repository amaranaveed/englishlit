"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { useStorage } from "@/hooks/useStorage";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import type { RsExamQuestion } from "@/data/rs/exam-questions";
import { getRsExamQuestionsByTopic, allRsExamQuestions } from "@/data/rs/exam-questions";
import { getActiveRsTopics } from "@/data/rs/topic-registry";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Stage = "select" | "writing" | "submitted";

/* ── Time allocation per marks ───────────────────────── */
function getTimeForMarks(marks: number): number {
  if (marks <= 2) return 2 * 60;   // 2 minutes
  if (marks <= 5) return 6 * 60;   // 6 minutes
  return 15 * 60;                  // 15 minutes for 12-mark
}

export default function RsExamPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [stage, setStage] = useState<Stage>("select");

  // Selection state
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<RsExamQuestion | null>(null);

  // Ref for auto-scrolling to questions section
  const questionsRef = useRef<HTMLDivElement>(null);

  // Writing state
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const [timeSpentOnSubmit, setTimeSpentOnSubmit] = useState(0);
  const { saveExamResponse } = useStorage();

  const activeTopics = getActiveRsTopics();
  const questions = selectedTopic ? getRsExamQuestionsByTopic(selectedTopic) : [];
  const selectedTopicEntry = activeTopics.find((t) => t.slug === selectedTopic);
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  // Timer
  useEffect(() => {
    if (started && stage === "writing") {
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, stage]);

  const formatTime = useCallback((s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }, []);

  function handleStart() {
    if (!selectedTopic || !selectedQuestion) return;
    const totalSeconds = getTimeForMarks(selectedQuestion.marks);
    setTimeLeft(totalSeconds);
    setStage("writing");
    setStarted(true);
  }

  async function handleSubmit() {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
    setTimeSpentOnSubmit(timeSpent);

    const id = `rs-exam-${Date.now()}`;
    const response: ExamResponse = {
      id,
      textSlug: `rs-${selectedTopic}`,
      question: selectedQuestion!.question,
      studentAnswer: answer,
      timeSpent,
      marks: selectedQuestion!.marks,
    };

    await saveExamResponse(response);
    router.push(`/rs/exam/result/${id}`);
  }

  function handleReset() {
    setStage("select");
    setSelectedTopic("");
    setSelectedQuestion(null);
    setAnswer("");
    setTimeLeft(0);
    setStarted(false);
    setTimeSpentOnSubmit(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }

  // ─── LOADING STATE ───
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a topic and question, then write a timed response."
          image="/images/hero-books.jpg"
        />
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-blue-600" />
        </div>
      </div>
    );
  }

  // ─── AUTH GATE ───
  if (!user) {
    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a topic and question, then write a timed response."
          image="/images/hero-books.jpg"
        />

        <motion.div
          className="rounded-2xl border-2 border-border bg-surface p-8 sm:p-10 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Lock icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-purple-light">
            <svg
              className="h-7 w-7 text-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h2 className="font-display text-xl font-bold text-text mb-2">
            Sign in to start practising
          </h2>
          <p className="font-body text-sm text-grey leading-relaxed max-w-md mx-auto mb-6">
            Exam practice requires a free account so we can save your work and
            track your progress.
          </p>

          {/* Benefits */}
          <motion.ul
            className="font-ui text-sm text-text space-y-2 mb-8 max-w-xs mx-auto text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              "Your answers are saved to your account",
              "Track progress across topics",
              "Practise under timed conditions",
            ].map((benefit) => (
              <motion.li
                key={benefit}
                variants={staggerItem}
                className="flex items-start gap-2"
              >
                <svg
                  className="h-4 w-4 text-blue-600 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Sign in button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              createClient()?.auth.signInWithOAuth({
                provider: "google",
                options: {
                  redirectTo: `${window.location.origin}/auth/callback`,
                },
              });
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-ui font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  // ─── SUBMITTED STAGE ───
  if (stage === "submitted") {
    const submittedWordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;
    const minutesTaken = Math.floor(timeSpentOnSubmit / 60);
    const secondsTaken = timeSpentOnSubmit % 60;

    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a topic and question, then write a timed response."
          image="/images/hero-books.jpg"
        />

        <motion.div
          className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8 sm:p-10 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {/* Checkmark icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="font-display text-xl font-bold text-text mb-2">
            Answer Submitted
          </h2>
          <p className="font-body text-sm text-grey leading-relaxed max-w-md mx-auto mb-6">
            Well done! Your response has been saved.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="rounded-xl bg-white border border-blue-200 px-5 py-3 text-center">
              <p className="font-display text-2xl font-bold text-blue-700 tabular-nums">
                {submittedWordCount}
              </p>
              <p className="font-ui text-xs text-grey mt-0.5">
                word{submittedWordCount !== 1 ? "s" : ""} written
              </p>
            </div>
            <div className="rounded-xl bg-white border border-blue-200 px-5 py-3 text-center">
              <p className="font-display text-2xl font-bold text-blue-700 tabular-nums">
                {minutesTaken}:{secondsTaken.toString().padStart(2, "0")}
              </p>
              <p className="font-ui text-xs text-grey mt-0.5">time taken</p>
            </div>
          </div>

          {/* Question summary */}
          {selectedQuestion && (
            <div className="rounded-lg bg-white/70 border border-blue-200 px-4 py-3 mb-8 text-left">
              <p className="font-ui text-xs text-blue-600 font-semibold mb-1">
                {selectedTopicEntry?.title} &middot; {selectedQuestion.marks} marks
              </p>
              <p className="font-body text-sm text-text leading-relaxed">
                {selectedQuestion.question}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-6 py-3 font-ui font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Practice Another Question
            </motion.button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/rs/essay-structure"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-surface text-text px-6 py-3 font-ui font-semibold text-sm hover:border-blue-500/50 transition-colors"
              >
                <svg
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Answer Structure Tips
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // ─── SELECT STAGE ───
  if (stage === "select") {
    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Exam Practice"
          subtitle="Choose a topic and question, then write a timed response."
          image="/images/hero-books.jpg"
        />

        {/* Step 1 -- Topic */}
        <div className="mb-6">
          <motion.label
            className="font-ui text-sm font-semibold text-text block mb-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            1. Choose your topic
          </motion.label>
          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {activeTopics.map((t) => (
              <motion.button
                key={t.slug}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedTopic(t.slug);
                  setSelectedQuestion(null);
                  setTimeout(() => {
                    if (questionsRef.current) {
                      const top =
                        questionsRef.current.getBoundingClientRect().top +
                        window.scrollY -
                        80;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }, 100);
                }}
                className={`rounded-xl border-2 p-4 text-left transition-colors cursor-pointer ${
                  selectedTopic === t.slug
                    ? "border-blue-500 bg-blue-50"
                    : "border-border bg-surface hover:border-blue-300"
                }`}
              >
                <p className="font-display font-bold text-sm text-text">
                  {t.title}
                </p>
                <p className="font-ui text-xs text-grey mt-0.5">
                  {t.paper} &middot; {t.section}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Step 2 -- Question */}
        <AnimatePresence>
          {selectedTopic && (
            <motion.div
              ref={questionsRef}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <motion.label
                className="font-ui text-sm font-semibold text-text block mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
              >
                2. Choose your question
              </motion.label>
              <motion.div
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {questions.map((q, i) => (
                  <motion.button
                    key={i}
                    variants={staggerItem}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedQuestion(q)}
                    className={`w-full rounded-lg border-2 px-4 py-3 text-left transition-colors cursor-pointer ${
                      selectedQuestion?.question === q.question
                        ? "border-blue-500 bg-blue-50"
                        : "border-border bg-surface hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-body text-sm text-text flex-1">
                        {q.question}
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 font-ui text-xs font-bold ${
                          q.marks >= 12
                            ? "bg-purple-light text-purple"
                            : q.marks >= 4
                            ? "bg-orange-light text-orange"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {q.marks} marks
                      </span>
                    </div>
                    <p className="font-ui text-xs text-grey mt-1">
                      Command word: {q.commandWord} &middot;{" "}
                      {getTimeForMarks(q.marks) / 60} min
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Start button */}
        <AnimatePresence>
          {selectedTopic && selectedQuestion && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStart}
              className="w-full rounded-xl bg-blue-600 text-white py-3 font-ui font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Start Timed Answer ({getTimeForMarks(selectedQuestion.marks) / 60}{" "}
              minutes)
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // ─── WRITING STAGE ───
  const isWarning = timeLeft <= 60 && timeLeft > 0; // 1 min warning
  const isLowTime = timeLeft <= 120 && timeLeft > 60; // 2 min warning
  const isExpired = timeLeft === 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-display font-bold text-text text-sm">
            {selectedTopicEntry?.title}
          </p>
          <p className="font-ui text-xs text-grey mt-0.5 max-w-md truncate">
            {selectedQuestion?.question}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-ui text-xs text-grey">
            <motion.span
              key={wordCount}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {wordCount}
            </motion.span>{" "}
            word{wordCount !== 1 ? "s" : ""}
          </span>
          <span
            className={`font-ui font-bold text-lg tabular-nums ${
              isExpired
                ? "text-red"
                : isWarning
                ? "text-red animate-pulse"
                : isLowTime
                ? "text-orange animate-pulse"
                : "text-text"
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Timer warnings */}
      <AnimatePresence>
        {isLowTime && !isWarning && !isExpired && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-lg bg-orange-light border border-orange px-4 py-2 mb-4 font-ui text-sm text-orange font-semibold text-center"
          >
            Less than 2 minutes remaining!
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isWarning && !isExpired && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-lg bg-orange-light border border-orange px-4 py-2 mb-4 font-ui text-sm text-orange font-semibold text-center"
          >
            Less than 1 minute remaining -- wrap up your answer!
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isExpired && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-lg bg-red-light border border-red px-4 py-2 mb-4 font-ui text-sm text-red font-semibold text-center"
          >
            Time&apos;s up! Submit your answer now.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question display */}
      <motion.div
        className="rounded-lg bg-blue-50 border border-blue-300 p-4 mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <p className="font-body text-text leading-relaxed">
          {selectedQuestion?.question}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`rounded-full px-2.5 py-0.5 font-ui text-xs font-bold ${
              selectedQuestion && selectedQuestion.marks >= 12
                ? "bg-purple-light text-purple"
                : selectedQuestion && selectedQuestion.marks >= 4
                ? "bg-orange-light text-orange"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {selectedQuestion?.marks} marks
          </span>
          <span className="font-ui text-xs text-blue-600">
            {selectedTopicEntry?.paper} &middot; {selectedTopicEntry?.section}
          </span>
        </div>
      </motion.div>

      {/* Writing area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
      >
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Start writing your answer here..."
          className="w-full min-h-[300px] rounded-xl border-2 border-border bg-surface p-5 font-body text-text leading-relaxed resize-y focus:outline-none focus:border-blue-500 transition-colors placeholder:text-grey"
          autoFocus
        />
      </motion.div>

      {/* Action bar */}
      <div className="flex items-center justify-between mt-4">
        <motion.button
          whileHover={{ x: -3 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            if (answer.trim() && !confirm("Leave? Your answer will be lost.")) {
              return;
            }
            handleReset();
          }}
          className="font-ui text-sm text-grey hover:text-text transition-colors cursor-pointer"
        >
          &larr; Cancel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="rounded-xl bg-blue-600 text-white px-6 py-2.5 font-ui font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Answer
        </motion.button>
      </div>
    </div>
  );
}
