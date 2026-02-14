"use client";

import { useState, useCallback, useMemo } from "react";
import type { VocabTerm } from "@/data/vocab";

type QuizMode = "term-to-def" | "def-to-term";

interface Props {
  terms: VocabTerm[];
  mode: QuizMode;
  onComplete: (correct: number, total: number, missed: string[]) => void;
}

/** Pick n random items from an array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function VocabQuiz({ terms, mode, onComplete }: Props) {
  const questionSet = useMemo(() => shuffle(terms), [terms]);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [missed, setMissed] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = questionSet[index];
  const total = questionSet.length;

  // Generate 4 options (1 correct + 3 distractors)
  const options = useMemo(() => {
    if (!current) return [];

    // Get distractors from other terms
    const others = terms.filter(
      (t) => t.word.toLowerCase() !== current.word.toLowerCase()
    );
    const distractors = shuffle(others).slice(0, 3);

    const opts = [current, ...distractors].map((t, i) => ({
      idx: i,
      term: t,
      text: mode === "term-to-def" ? t.def : t.word,
      isCorrect: t.word.toLowerCase() === current.word.toLowerCase(),
    }));

    return shuffle(opts);
  }, [current, terms, mode]);

  function handleSelect(optIdx: number) {
    if (showResult) return;
    setSelected(optIdx);
    setShowResult(true);

    const opt = options[optIdx];
    if (opt.isCorrect) {
      setCorrect((c) => c + 1);
    } else {
      setMissed((m) => [...m, current.word]);
    }
  }

  function handleNext() {
    if (index + 1 >= total) {
      // Quiz complete
      const wasCorrect = options[selected!]?.isCorrect;
      const finalCorrect = wasCorrect ? correct : correct;
      onComplete(finalCorrect, total, missed);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setShowResult(false);
  }

  if (!current) return null;

  const prompt = mode === "term-to-def" ? current.word : current.def;
  const promptLabel = mode === "term-to-def" ? "What does this term mean?" : "Which term matches this definition?";

  const progress = ((index + 1) / total) * 100;

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div>
        <div className="flex justify-between font-ui text-xs text-grey mb-1">
          <span>
            Question {index + 1} of {total}
          </span>
          <span>
            {correct} correct
          </span>
        </div>
        <div className="h-2 rounded-full bg-grey-light overflow-hidden">
          <div
            className="h-full bg-teal rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-xl border border-border bg-surface p-6 text-center">
        <p className="font-ui text-xs text-grey uppercase tracking-wider mb-2">
          {promptLabel}
        </p>
        <p className={`font-display font-bold text-text ${mode === "term-to-def" ? "text-2xl" : "text-lg"}`}>
          {mode === "term-to-def" ? (
            <span className="text-teal">{prompt}</span>
          ) : (
            `"${prompt}"`
          )}
        </p>
        <p className="font-ui text-xs text-grey mt-2">
          from {current.section}
        </p>
      </div>

      {/* Options grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt, i) => {
          let classes = "rounded-xl border-2 p-4 font-ui text-sm text-left transition-all cursor-pointer";

          if (!showResult) {
            classes += " border-border bg-surface hover:border-teal hover:bg-teal-light";
          } else if (opt.isCorrect) {
            classes += " border-green bg-green-light text-green";
          } else if (selected === i) {
            classes += " border-red bg-red-light text-red";
          } else {
            classes += " border-border bg-surface opacity-50";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={classes}
            >
              <span className="font-medium">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* Result feedback + next */}
      {showResult && (
        <div className="text-center space-y-3">
          {options[selected!]?.isCorrect ? (
            <p className="font-ui text-sm font-semibold text-green">✓ Correct!</p>
          ) : (
            <div>
              <p className="font-ui text-sm font-semibold text-red mb-1">
                ✗ Incorrect
              </p>
              <p className="font-ui text-xs text-grey">
                The answer was:{" "}
                <span className="font-semibold text-text">
                  {mode === "term-to-def" ? current.def : current.word}
                </span>
              </p>
            </div>
          )}
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-teal text-white font-ui text-sm font-bold hover:bg-teal/90 transition-colors cursor-pointer"
          >
            {index + 1 >= total ? "See Results" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}
