"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import {
  getUniqueVocabTerms,
  getVocabTermsByText,
  getAllVocabTerms,
  getVocabTextSlugs,
  getVocabTextTitle,
  type VocabTerm,
  type VocabQuizScore,
} from "@/data/vocab";
import { useStorage } from "@/hooks/useStorage";
import { ALL_QUOTES } from "@/data/quotes";
import VocabQuiz from "@/components/VocabQuiz";

type TopTab = "glossary" | "techniques" | "quiz";
type Stage = "setup" | "quiz" | "results";
type QuizMode = "term-to-def" | "def-to-term";

export default function VocabPage() {
  const [topTab, setTopTab] = useState<TopTab>("glossary");
  const [stage, setStage] = useState<Stage>("setup");
  const [selectedText, setSelectedText] = useState<string>("all");
  const [mode, setMode] = useState<QuizMode>("term-to-def");
  const [result, setResult] = useState<{ correct: number; total: number; missed: string[] } | null>(null);
  const [missedAdded, setMissedAdded] = useState(false);
  const [scores, setScores] = useState<VocabQuizScore[]>([]);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [techniqueSearch, setTechniqueSearch] = useState("");

  const { saveVocabScore, getVocabScores, addFlashcard } = useStorage();

  const textSlugs = useMemo(() => getVocabTextSlugs(), []);
  const allTerms = useMemo(() => getUniqueVocabTerms(), []);

  useEffect(() => {
    getVocabScores().then(setScores);
  }, [getVocabScores]);

  const quizTerms = useMemo(() => {
    if (selectedText === "all") return getUniqueVocabTerms();
    return getVocabTermsByText(selectedText);
  }, [selectedText]);

  // Need at least 4 terms for multiple choice
  const canStart = quizTerms.length >= 4;

  function handleStart() {
    if (!canStart) return;
    setStage("quiz");
    setResult(null);
    setMissedAdded(false);
  }

  async function handleComplete(correct: number, total: number, missed: string[]) {
    const score: VocabQuizScore = {
      id: Date.now().toString(36),
      date: new Date().toISOString(),
      textSlug: selectedText,
      mode,
      total,
      correct,
      missed,
    };
    await saveVocabScore(score);
    setResult({ correct, total, missed });
    const updatedScores = await getVocabScores();
    setScores(updatedScores);
    setStage("results");
  }

  async function handleAddMissedToFlashcards() {
    if (!result || missedAdded) return;
    const termsByWord = new Map<string, VocabTerm>();
    for (const t of quizTerms) {
      termsByWord.set(t.word.toLowerCase(), t);
    }
    for (const word of result.missed) {
      const term = termsByWord.get(word.toLowerCase());
      if (term) {
        await addFlashcard({
          id: `vocab-quiz-${term.id}`,
          type: "vocab",
          textSlug: term.textSlug,
          front: `Define: ${term.word}`,
          back: term.def,
          confidence: 0,
          nextReview: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
      }
    }
    setMissedAdded(true);
  }

  function handleReset() {
    setStage("setup");
    setResult(null);
    setMissedAdded(false);
  }

  // ─── SETUP / GLOSSARY ───
  if (stage === "setup") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageBanner
          title="Vocabulary"
          subtitle={`${allTerms.length} literary terms across ${textSlugs.length} text${textSlugs.length !== 1 ? "s" : ""}`}
          image="/images/library.jpg"
        />

        {/* Tab toggle */}
        <div className="flex rounded-lg bg-grey-light p-1 mb-6">
          <button
            onClick={() => setTopTab("glossary")}
            className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
              topTab === "glossary" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
            }`}
          >
            Key Terms
          </button>
          <button
            onClick={() => setTopTab("techniques")}
            className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
              topTab === "techniques" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
            }`}
          >
            Techniques
          </button>
          <button
            onClick={() => setTopTab("quiz")}
            className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
              topTab === "quiz" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
            }`}
          >
            Quiz
          </button>
        </div>

        {topTab === "glossary" ? (
          <VocabGlossary
            textSlugs={textSlugs}
            search={glossarySearch}
            onSearchChange={setGlossarySearch}
          />
        ) : topTab === "techniques" ? (
          <TechniquesView
            textSlugs={textSlugs}
            search={techniqueSearch}
            onSearchChange={setTechniqueSearch}
          />
        ) : (
          <QuizSetup
            allTerms={allTerms}
            textSlugs={textSlugs}
            selectedText={selectedText}
            onSelectText={setSelectedText}
            mode={mode}
            onSelectMode={setMode}
            canStart={canStart}
            quizTermCount={quizTerms.length}
            onStart={handleStart}
            scores={scores}
          />
        )}
      </div>
    );
  }

  // ─── QUIZ ───
  if (stage === "quiz") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-xl font-bold">Vocab Quiz</h1>
          <button
            onClick={handleReset}
            className="font-ui text-xs text-grey hover:text-red transition-colors cursor-pointer"
          >
            Quit
          </button>
        </div>
        <VocabQuiz terms={quizTerms} mode={mode} onComplete={handleComplete} />
      </div>
    );
  }

  // ─── RESULTS ───
  if (stage === "results" && result) {
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = "🎉";
    let message = "Outstanding!";
    if (pct < 50) { emoji = "📚"; message = "Keep practising!"; }
    else if (pct < 80) { emoji = "💪"; message = "Good effort!"; }
    else if (pct < 100) { emoji = "🌟"; message = "Nearly perfect!"; }

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <span className="text-5xl mb-4 block">{emoji}</span>
          <h2 className="font-display text-2xl font-bold mb-1">{message}</h2>
          <p className="font-ui text-grey text-sm mb-6">
            You scored{" "}
            <span className={`font-bold ${pct >= 80 ? "text-green" : pct >= 50 ? "text-orange" : "text-red"}`}>
              {result.correct}/{result.total} ({pct}%)
            </span>
          </p>

          {/* Score bar */}
          <div className="max-w-xs mx-auto mb-6">
            <div className="h-3 rounded-full bg-grey-light overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${pct >= 80 ? "bg-green" : pct >= 50 ? "bg-orange" : "bg-red"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Missed terms */}
          {result.missed.length > 0 && (
            <div className="text-left rounded-lg border border-border bg-bg p-4 mb-6">
              <h3 className="font-ui text-sm font-semibold text-text mb-2">
                Terms to revise ({result.missed.length})
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {result.missed.map((word) => (
                  <span
                    key={word}
                    className="px-2.5 py-1 rounded-full bg-red-light text-red font-ui text-xs font-medium"
                  >
                    {word}
                  </span>
                ))}
              </div>

              {/* Add to flashcards */}
              <button
                onClick={handleAddMissedToFlashcards}
                disabled={missedAdded}
                className={`mt-3 w-full py-2 rounded-lg font-ui text-sm font-semibold transition-all cursor-pointer ${
                  missedAdded
                    ? "bg-green-light text-green"
                    : "bg-orange text-white hover:bg-orange/90"
                }`}
              >
                {missedAdded
                  ? `✓ Added ${result.missed.length} term${result.missed.length !== 1 ? "s" : ""} to flashcards`
                  : `Add missed terms to flashcards`}
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-teal text-white font-ui text-sm font-bold hover:bg-teal/90 transition-colors cursor-pointer"
            >
              Quiz Again
            </button>
            <Link
              href="/flashcards"
              className="px-6 py-2.5 rounded-xl border border-border bg-surface text-text font-ui text-sm font-bold hover:bg-bg transition-colors text-center"
            >
              Review Flashcards
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ─── Glossary View ─── */

const SECTION_COLOURS: Record<string, { bg: string; text: string }> = {
  "Technique 1": { bg: "bg-purple-light", text: "text-purple" },
  "Technique 2": { bg: "bg-blue-light", text: "text-blue" },
  RAD: { bg: "bg-green-light", text: "text-green" },
  Context: { bg: "bg-orange-light", text: "text-orange" },
  WOW: { bg: "bg-teal-light", text: "text-teal" },
};

function VocabGlossary({
  textSlugs,
  search,
  onSearchChange,
}: {
  textSlugs: string[];
  search: string;
  onSearchChange: (v: string) => void;
}) {
  const allTerms = getAllVocabTerms();
  const q = search.toLowerCase();

  // Group: text → section → terms (deduped within each section)
  const grouped = useMemo(() => {
    return textSlugs.map((slug) => {
      const title = getVocabTextTitle(slug);
      const textTerms = allTerms.filter((t) => t.textSlug === slug);

      // Group by section, maintaining order
      const sectionOrder = ["Technique 1", "RAD", "Technique 2", "Context", "WOW"];
      const sections = sectionOrder.map((sec) => {
        const seen = new Set<string>();
        const terms = textTerms.filter((t) => {
          if (t.section !== sec) return false;
          const key = t.word.toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          // Apply search filter
          if (q && !t.word.toLowerCase().includes(q) && !t.def.toLowerCase().includes(q)) return false;
          return true;
        });
        return { section: sec, terms };
      }).filter((s) => s.terms.length > 0);

      const totalVisible = sections.reduce((sum, s) => sum + s.terms.length, 0);
      return { slug, title, sections, totalVisible };
    }).filter((g) => g.totalVisible > 0);
  }, [allTerms, textSlugs, q]);

  const totalCount = grouped.reduce((sum, g) => sum + g.totalVisible, 0);

  return (
    <div>
      {/* Search */}
      <input
        type="text"
        placeholder="Search terms…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 font-ui text-sm text-text placeholder:text-grey focus:outline-none focus:ring-2 focus:ring-teal/30 mb-2"
      />
      <p className="font-ui text-xs text-grey mb-5">
        {totalCount} term{totalCount !== 1 ? "s" : ""}{search && " matching"}
      </p>

      {/* Grouped terms */}
      <div className="space-y-8">
        {grouped.map((group) => (
          <section key={group.slug}>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-display text-lg font-bold text-text">{group.title}</h2>
              <span className="font-ui text-xs text-grey">
                {group.totalVisible} term{group.totalVisible !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="space-y-4">
              {group.sections.map((sec) => {
                const colours = SECTION_COLOURS[sec.section] ?? { bg: "bg-grey-light", text: "text-grey" };
                return (
                  <div key={sec.section}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${colours.bg} ${colours.text}`}>
                        {sec.section}
                      </span>
                    </div>
                    <div className="grid gap-1.5">
                      {sec.terms.map((term) => (
                        <div
                          key={term.id}
                          className="rounded-lg border border-border bg-surface px-4 py-2.5 flex items-start gap-3"
                        >
                          <span className="font-ui text-sm font-semibold text-teal shrink-0 min-w-[120px]">
                            {term.word}
                          </span>
                          <span className="font-ui text-sm text-text">
                            {term.def}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {totalCount === 0 && (
        <div className="text-center py-12">
          <p className="text-grey font-ui text-sm">No terms match your search.</p>
        </div>
      )}
    </div>
  );
}

/* ─── Quiz Setup ─── */

function QuizSetup({
  allTerms,
  textSlugs,
  selectedText,
  onSelectText,
  mode,
  onSelectMode,
  canStart,
  quizTermCount,
  onStart,
  scores,
}: {
  allTerms: VocabTerm[];
  textSlugs: string[];
  selectedText: string;
  onSelectText: (s: string) => void;
  mode: QuizMode;
  onSelectMode: (m: QuizMode) => void;
  canStart: boolean;
  quizTermCount: number;
  onStart: () => void;
  scores: VocabQuizScore[];
}) {
  return (
    <div className="space-y-6">
      {/* Choose text */}
      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-3">
          Which text?
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSelectText("all")}
            className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
              selectedText === "all"
                ? "border-teal bg-teal-light text-teal"
                : "border-border bg-bg text-grey hover:text-text hover:border-grey"
            }`}
          >
            All texts ({allTerms.length})
          </button>
          {textSlugs.map((slug) => {
            const title = getVocabTextTitle(slug);
            const count = getVocabTermsByText(slug).length;
            return (
              <button
                key={slug}
                onClick={() => onSelectText(slug)}
                className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                  selectedText === slug
                    ? "border-teal bg-teal-light text-teal"
                    : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                }`}
              >
                {title} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Choose mode */}
      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="font-ui text-sm font-semibold text-text mb-3">
          Quiz mode
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => onSelectMode("term-to-def")}
            className={`rounded-xl border-2 p-4 text-left transition-all cursor-pointer ${
              mode === "term-to-def"
                ? "border-teal bg-teal-light"
                : "border-border bg-bg hover:border-grey"
            }`}
          >
            <p className="font-ui text-sm font-semibold text-text">Term → Definition</p>
            <p className="font-ui text-xs text-grey mt-1">
              See the term, pick the correct definition
            </p>
          </button>
          <button
            onClick={() => onSelectMode("def-to-term")}
            className={`rounded-xl border-2 p-4 text-left transition-all cursor-pointer ${
              mode === "def-to-term"
                ? "border-purple bg-purple-light"
                : "border-border bg-bg hover:border-grey"
            }`}
          >
            <p className="font-ui text-sm font-semibold text-text">Definition → Term</p>
            <p className="font-ui text-xs text-grey mt-1">
              See the definition, pick the correct term
            </p>
          </button>
        </div>
      </div>

      {/* Start */}
      <div className="text-center pt-2">
        <p className="font-ui text-sm text-grey mb-3">
          {canStart
            ? `${quizTermCount} term${quizTermCount !== 1 ? "s" : ""} ready`
            : "Need at least 4 terms for multiple choice."
          }
        </p>
        <button
          onClick={onStart}
          disabled={!canStart}
          className={`px-8 py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
            canStart
              ? "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg"
              : "bg-grey-light text-grey cursor-not-allowed"
          }`}
        >
          Start Quiz →
        </button>
      </div>

      {/* Recent scores */}
      {scores.length > 0 && (
        <div className="rounded-xl border border-border bg-surface p-5">
          <h3 className="font-ui text-sm font-semibold text-text mb-3">
            Recent scores
          </h3>
          <div className="space-y-2">
            {scores.slice(0, 5).map((s) => {
              const pct = Math.round((s.correct / s.total) * 100);
              const textLabel = s.textSlug === "all" ? "All texts" : getVocabTextTitle(s.textSlug);
              const modeLabel = s.mode === "term-to-def" ? "Term→Def" : "Def→Term";
              return (
                <div key={s.id} className="flex items-center gap-3 text-sm font-ui">
                  <span className={`font-bold ${pct >= 80 ? "text-green" : pct >= 50 ? "text-orange" : "text-red"}`}>
                    {pct}%
                  </span>
                  <span className="text-text">
                    {s.correct}/{s.total}
                  </span>
                  <span className="text-grey">·</span>
                  <span className="text-grey">{textLabel}</span>
                  <span className="text-grey">·</span>
                  <span className="text-xs text-grey bg-grey-light px-1.5 py-0.5 rounded">
                    {modeLabel}
                  </span>
                  <span className="text-grey text-xs ml-auto">
                    {new Date(s.date).toLocaleDateString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Techniques & Effects View ─── */

interface TechniqueEntry {
  title: string;
  effect: string;
  textSlug: string;
  quoteId: number;
  section: "Technique 1" | "Technique 2" | "WOW";
}

function firstSentence(text: string): string {
  const clean = text.replace(/\*\*(.*?)\*\*/g, "$1");
  const match = clean.match(/^(.+?[.!])(?:\s|$)/);
  return match ? match[1] : clean.slice(0, 120) + (clean.length > 120 ? "…" : "");
}

function extractTechniques(): TechniqueEntry[] {
  const entries: TechniqueEntry[] = [];
  for (const q of ALL_QUOTES) {
    entries.push({
      title: q.technique1.title,
      effect: firstSentence(q.technique1.analysis),
      textSlug: q.textSlug,
      quoteId: q.id,
      section: "Technique 1",
    });
    entries.push({
      title: q.technique2.title,
      effect: firstSentence(q.technique2.analysis),
      textSlug: q.textSlug,
      quoteId: q.id,
      section: "Technique 2",
    });
    entries.push({
      title: q.wow.title,
      effect: firstSentence(q.wow.analysis),
      textSlug: q.textSlug,
      quoteId: q.id,
      section: "WOW",
    });
  }
  return entries;
}

const TECHNIQUE_SECTION_COLOURS: Record<string, { bg: string; text: string }> = {
  "Technique 1": { bg: "bg-purple-light", text: "text-purple" },
  "Technique 2": { bg: "bg-blue-light", text: "text-blue" },
  WOW: { bg: "bg-teal-light", text: "text-teal" },
};

function TechniquesView({
  textSlugs,
  search,
  onSearchChange,
}: {
  textSlugs: string[];
  search: string;
  onSearchChange: (v: string) => void;
}) {
  const allTechniques = useMemo(() => extractTechniques(), []);
  const q = search.toLowerCase();

  const grouped = useMemo(() => {
    return textSlugs.map((slug) => {
      const title = getVocabTextTitle(slug);
      const techniques = allTechniques.filter((t) => {
        if (t.textSlug !== slug) return false;
        if (q && !t.title.toLowerCase().includes(q) && !t.effect.toLowerCase().includes(q)) return false;
        return true;
      });
      return { slug, title, techniques };
    }).filter((g) => g.techniques.length > 0);
  }, [allTechniques, textSlugs, q]);

  const totalCount = grouped.reduce((sum, g) => sum + g.techniques.length, 0);

  return (
    <div>
      {/* Search */}
      <input
        type="text"
        placeholder="Search techniques…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 font-ui text-sm text-text placeholder:text-grey focus:outline-none focus:ring-2 focus:ring-teal/30 mb-2"
      />
      <p className="font-ui text-xs text-grey mb-5">
        {totalCount} technique{totalCount !== 1 ? "s" : ""}{search && " matching"}
      </p>

      <div className="space-y-8">
        {grouped.map((group) => (
          <section key={group.slug}>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-display text-lg font-bold text-text">{group.title}</h2>
              <span className="font-ui text-xs text-grey">
                {group.techniques.length} technique{group.techniques.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="space-y-1.5">
              {group.techniques.map((tech, i) => {
                const colours = TECHNIQUE_SECTION_COLOURS[tech.section] ?? { bg: "bg-grey-light", text: "text-grey" };
                return (
                  <div
                    key={`${tech.textSlug}-${tech.quoteId}-${tech.section}-${i}`}
                    className="rounded-lg border border-border bg-surface px-4 py-2.5 flex items-start gap-3"
                  >
                    <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-0.5 ${colours.bg} ${colours.text}`}>
                      {tech.section}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-ui text-sm font-bold ${colours.text}`}>
                        {tech.title}
                      </p>
                      <p className="font-ui text-xs text-grey mt-0.5">
                        {tech.effect}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {totalCount === 0 && (
        <div className="text-center py-12">
          <p className="text-grey font-ui text-sm">No techniques match your search.</p>
        </div>
      )}
    </div>
  );
}
