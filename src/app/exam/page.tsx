"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getActiveTexts, getTextBySlug } from "@/data/text-registry";
import { getExamQuestions } from "@/data/quotes";
import { saveExamResponse } from "@/data/exam-storage";
import type { ExamResponse } from "@/data/types";

type Stage = "select" | "writing" | "submitted";

export default function ExamPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("select");

  // Selection state
  const [selectedText, setSelectedText] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");

  // Writing state
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 min in seconds
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const activeTexts = getActiveTexts();
  const questions = selectedText ? getExamQuestions(selectedText) : [];
  const text = selectedText ? getTextBySlug(selectedText) : null;
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
    if (!selectedText || !selectedQuestion) return;
    setStage("writing");
    setStarted(true);
  }

  function handleSubmit() {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
    const id = `exam-${Date.now()}`;

    const response: ExamResponse = {
      id,
      textSlug: selectedText,
      question: selectedQuestion,
      studentAnswer: answer,
      timeSpent,
    };

    saveExamResponse(response);
    setStage("submitted");
    router.push(`/exam/result/${id}`);
  }

  // ─── SELECT STAGE ───
  if (stage === "select") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">
          Exam Practice
        </h1>
        <p className="text-grey font-ui text-sm mb-8">
          Choose a text and question, then write a timed essay response.
        </p>

        {/* Step 1 — Text */}
        <div className="mb-6">
          <label className="font-ui text-sm font-semibold text-text block mb-2">
            1. Choose your text
          </label>
          <div className="grid grid-cols-2 gap-3">
            {activeTexts.map((t) => (
              <button
                key={t.slug}
                onClick={() => {
                  setSelectedText(t.slug);
                  setSelectedQuestion("");
                }}
                className={`rounded-xl border-2 p-4 text-left transition-colors cursor-pointer ${
                  selectedText === t.slug
                    ? "border-teal bg-teal-light"
                    : "border-border bg-surface hover:border-teal/50"
                }`}
              >
                <p className="font-display font-bold text-sm text-text">
                  {t.title}
                </p>
                <p className="font-ui text-xs text-grey mt-0.5">{t.author}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Question */}
        {selectedText && (
          <div className="mb-8">
            <label className="font-ui text-sm font-semibold text-text block mb-2">
              2. Choose your question
            </label>
            <div className="space-y-2">
              {questions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedQuestion(q.question)}
                  className={`w-full rounded-lg border-2 px-4 py-3 text-left transition-colors cursor-pointer ${
                    selectedQuestion === q.question
                      ? "border-purple bg-purple-light"
                      : "border-border bg-surface hover:border-purple/50"
                  }`}
                >
                  <p className="font-body text-sm text-text">{q.question}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Start button */}
        {selectedText && selectedQuestion && (
          <button
            onClick={handleStart}
            className="w-full rounded-xl bg-teal text-white py-3 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors cursor-pointer"
          >
            Start Timed Essay (50 minutes)
          </button>
        )}
      </div>
    );
  }

  // ─── WRITING STAGE ───
  const isWarning = timeLeft <= 300 && timeLeft > 0; // 5 min warning
  const isExpired = timeLeft === 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-display font-bold text-text text-sm">
            {text?.title}
          </p>
          <p className="font-ui text-xs text-grey mt-0.5 max-w-md truncate">
            {selectedQuestion}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-ui text-xs text-grey">
            {wordCount} word{wordCount !== 1 ? "s" : ""}
          </span>
          <span
            className={`font-ui font-bold text-lg tabular-nums ${
              isExpired
                ? "text-red"
                : isWarning
                ? "text-orange animate-pulse"
                : "text-text"
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Timer warning */}
      {isWarning && !isExpired && (
        <div className="rounded-lg bg-orange-light border border-orange px-4 py-2 mb-4 font-ui text-sm text-orange font-semibold text-center">
          ⚠️ Less than 5 minutes remaining!
        </div>
      )}
      {isExpired && (
        <div className="rounded-lg bg-red-light border border-red px-4 py-2 mb-4 font-ui text-sm text-red font-semibold text-center">
          ⏰ Time&apos;s up! Submit your answer now.
        </div>
      )}

      {/* Question display */}
      <div className="rounded-lg bg-purple-light border border-purple p-4 mb-4">
        <p className="font-body text-text leading-relaxed">
          {selectedQuestion}
        </p>
        <p className="font-ui text-xs text-purple mt-2">
          {text?.paper} {text?.section} · 30 marks
          {selectedText === "much-ado" ? " + 4 SPaG" : ""}
        </p>
      </div>

      {/* Writing area */}
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Start writing your essay response here…"
        className="w-full min-h-[400px] rounded-xl border-2 border-border bg-surface p-5 font-body text-text leading-relaxed resize-y focus:outline-none focus:border-teal transition-colors placeholder:text-grey"
        autoFocus
      />

      {/* Action bar */}
      <div className="flex items-center justify-between mt-4">
        <Link
          href="/exam"
          onClick={(e) => {
            if (answer.trim() && !confirm("Leave? Your essay will be lost.")) {
              e.preventDefault();
            }
          }}
          className="font-ui text-sm text-grey hover:text-text transition-colors"
        >
          ← Cancel
        </Link>
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="rounded-xl bg-teal text-white px-6 py-2.5 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit Essay
        </button>
      </div>
    </div>
  );
}
