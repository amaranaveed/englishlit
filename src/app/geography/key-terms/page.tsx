"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import VocabQuiz from "@/components/VocabQuiz";
import { useStorage } from "@/hooks/useStorage";
import { getActiveTopics } from "@/data/geography/topic-registry";
import {
  getUniqueGeoTerms,
  getGeoTermsByTopic,
  geoTermsToVocabTerms,
  getAllGeoTerms,
} from "@/data/geography/vocab";
import type { VocabQuizScore } from "@/data/vocab";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const CATEGORY_COLOURS: Record<string, { bg: string; text: string }> = {
  "key-term": { bg: "bg-emerald-100", text: "text-emerald-700" },
  process: { bg: "bg-sky-100", text: "text-sky-700" },
  "case-study": { bg: "bg-amber-100", text: "text-amber-700" },
  "command-word": { bg: "bg-violet-100", text: "text-violet-700" },
};

type TopTab = "browse" | "quiz";
type Stage = "setup" | "quiz" | "results";
type QuizMode = "term-to-def" | "def-to-term";

export default function GeographyKeyTermsPage() {
  const [topTab, setTopTab] = useState<TopTab>("browse");
  const [stage, setStage] = useState<Stage>("setup");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [mode, setMode] = useState<QuizMode>("term-to-def");
  const [result, setResult] = useState<{ correct: number; total: number; missed: string[] } | null>(null);
  const [missedAdded, setMissedAdded] = useState(false);
  const [scores, setScores] = useState<VocabQuizScore[]>([]);
  const [glossarySearch, setGlossarySearch] = useState("");

  const { saveVocabScore, getVocabScores, addFlashcard } = useStorage();

  const topics = useMemo(() => getActiveTopics(), []);
  const allTerms = useMemo(() => getUniqueGeoTerms(), []);

  useEffect(() => {
    getVocabScores().then((all) => {
      setScores(all.filter((s) => s.textSlug.startsWith("geo-") || s.textSlug === "all-geo"));
    });
  }, [getVocabScores]);

  const quizTerms = useMemo(() => {
    const geoTerms = selectedTopic === "all" ? getUniqueGeoTerms() : getGeoTermsByTopic(selectedTopic);
    return geoTermsToVocabTerms(geoTerms);
  }, [selectedTopic]);

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
      textSlug: selectedTopic === "all" ? "all-geo" : `geo-${selectedTopic}`,
      mode,
      total,
      correct,
      missed,
    };
    await saveVocabScore(score);
    setResult({ correct, total, missed });
    const updatedScores = await getVocabScores();
    setScores(updatedScores.filter((s) => s.textSlug.startsWith("geo-") || s.textSlug === "all-geo"));
    setStage("results");
  }

  async function handleAddMissedToFlashcards() {
    if (!result || missedAdded) return;
    for (const word of result.missed) {
      const term = quizTerms.find((t) => t.word.toLowerCase() === word.toLowerCase());
      if (term) {
        await addFlashcard({
          id: `geo-quiz-${term.id}`,
          type: "key-term",
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
    setTopTab("quiz");
  }

  // ─── QUIZ ───
  if (stage === "quiz") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex items-center justify-between mb-6"
        >
          <h1 className="font-display text-xl font-bold">Key Terms Quiz</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="font-ui text-xs text-grey hover:text-red transition-colors cursor-pointer"
          >
            Quit
          </motion.button>
        </motion.div>
        <VocabQuiz terms={quizTerms} mode={mode} onComplete={handleComplete} />
      </div>
    );
  }

  // ─── RESULTS ───
  if (stage === "results" && result) {
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = "\u{1F389}";
    let message = "Outstanding!";
    if (pct < 50) { emoji = "\u{1F4DA}"; message = "Keep practising!"; }
    else if (pct < 80) { emoji = "\u{1F4AA}"; message = "Good effort!"; }
    else if (pct < 100) { emoji = "\u{1F31F}"; message = "Nearly perfect!"; }

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
            className="text-5xl mb-4 block"
          >
            {emoji}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
            className="font-display text-2xl font-bold mb-1"
          >
            {message}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
            className="font-ui text-grey text-sm mb-6"
          >
            You scored{" "}
            <span className={`font-bold ${pct >= 80 ? "text-green" : pct >= 50 ? "text-orange" : "text-red"}`}>
              {result.correct}/{result.total} ({pct}%)
            </span>
          </motion.p>

          <div className="max-w-xs mx-auto mb-6">
            <div className="h-3 rounded-full bg-grey-light overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
                className={`h-full rounded-full ${pct >= 80 ? "bg-green" : pct >= 50 ? "bg-orange" : "bg-red"}`}
              />
            </div>
          </div>

          {result.missed.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
              className="text-left rounded-lg border border-border bg-bg p-4 mb-6"
            >
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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddMissedToFlashcards}
                disabled={missedAdded}
                className={`mt-3 w-full py-2 rounded-lg font-ui text-sm font-semibold transition-all cursor-pointer ${
                  missedAdded
                    ? "bg-green-light text-green"
                    : "bg-orange text-white hover:bg-orange/90"
                }`}
              >
                {missedAdded
                  ? `Added ${result.missed.length} term${result.missed.length !== 1 ? "s" : ""} to flashcards`
                  : `Add missed terms to flashcards`}
              </motion.button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-teal text-white font-ui text-sm font-bold hover:bg-teal/90 transition-colors cursor-pointer"
            >
              Quiz Again
            </motion.button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/geography/flashcards"
                className="block px-6 py-2.5 rounded-xl border border-border bg-surface text-text font-ui text-sm font-bold hover:bg-bg transition-colors text-center"
              >
                Review Flashcards
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ─── SETUP (Browse + Quiz tabs) ───
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="Geography Key Terms"
        subtitle={`${allTerms.length} key terms across ${topics.length} topics`}
        image="/images/hero-books.jpg"
      />

      {/* Tab toggle */}
      <div className="flex rounded-lg bg-grey-light p-1 mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setTopTab("browse")}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            topTab === "browse" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          Browse
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setTopTab("quiz")}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            topTab === "quiz" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          Quiz
        </motion.button>
      </div>

      {topTab === "browse" ? (
        <BrowseTab search={glossarySearch} onSearchChange={setGlossarySearch} />
      ) : (
        <div className="space-y-6">
          {/* Choose topic */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-ui text-sm font-semibold text-text mb-3">
              Which topic?
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-2"
            >
              <motion.button
                variants={staggerItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTopic("all")}
                className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                  selectedTopic === "all"
                    ? "border-teal bg-teal-light text-teal"
                    : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                }`}
              >
                All topics ({allTerms.length})
              </motion.button>
              {topics.map((topic) => {
                const count = getGeoTermsByTopic(topic.slug).length;
                return (
                  <motion.button
                    key={topic.slug}
                    variants={staggerItem}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTopic(topic.slug)}
                    className={`px-4 py-2 rounded-lg font-ui text-sm font-medium transition-all cursor-pointer border ${
                      selectedTopic === topic.slug
                        ? "border-teal bg-teal-light text-teal"
                        : "border-border bg-bg text-grey hover:text-text hover:border-grey"
                    }`}
                  >
                    {topic.title} ({count})
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Choose mode */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-ui text-sm font-semibold text-text mb-3">
              Quiz mode
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode("term-to-def")}
                className={`rounded-xl border-2 p-4 text-left transition-all cursor-pointer ${
                  mode === "term-to-def"
                    ? "border-teal bg-teal-light"
                    : "border-border bg-bg hover:border-grey"
                }`}
              >
                <p className="font-ui text-sm font-semibold text-text">Term &rarr; Definition</p>
                <p className="font-ui text-xs text-grey mt-1">
                  See the term, pick the correct definition
                </p>
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMode("def-to-term")}
                className={`rounded-xl border-2 p-4 text-left transition-all cursor-pointer ${
                  mode === "def-to-term"
                    ? "border-purple bg-purple-light"
                    : "border-border bg-bg hover:border-grey"
                }`}
              >
                <p className="font-ui text-sm font-semibold text-text">Definition &rarr; Term</p>
                <p className="font-ui text-xs text-grey mt-1">
                  See the definition, pick the correct term
                </p>
              </motion.button>
            </div>
          </div>

          {/* Start */}
          <div className="text-center pt-2">
            <p className="font-ui text-sm text-grey mb-3">
              {canStart
                ? `${quizTerms.length} term${quizTerms.length !== 1 ? "s" : ""} ready`
                : "Need at least 4 terms for multiple choice."}
            </p>
            <motion.button
              whileHover={{ scale: canStart ? 1.02 : 1 }}
              whileTap={{ scale: canStart ? 0.95 : 1 }}
              onClick={handleStart}
              disabled={!canStart}
              className={`px-8 py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
                canStart
                  ? "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg"
                  : "bg-grey-light text-grey cursor-not-allowed"
              }`}
            >
              Start Quiz &rarr;
            </motion.button>
          </div>

          {/* Recent scores */}
          {scores.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h3 className="font-ui text-sm font-semibold text-text mb-3">
                Recent scores
              </h3>
              <div className="space-y-2">
                {scores.slice(0, 5).map((s) => {
                  const pct = Math.round((s.correct / s.total) * 100);
                  const topicLabel = s.textSlug === "all-geo" ? "All topics" : s.textSlug.replace("geo-", "");
                  const modeLabel = s.mode === "term-to-def" ? "Term\u2192Def" : "Def\u2192Term";
                  return (
                    <div key={s.id} className="flex items-center gap-3 text-sm font-ui">
                      <span className={`font-bold ${pct >= 80 ? "text-green" : pct >= 50 ? "text-orange" : "text-red"}`}>
                        {pct}%
                      </span>
                      <span className="text-text">{s.correct}/{s.total}</span>
                      <span className="text-grey">&middot;</span>
                      <span className="text-grey capitalize">{topicLabel}</span>
                      <span className="text-grey">&middot;</span>
                      <span className="text-xs text-grey bg-grey-light px-1.5 py-0.5 rounded">{modeLabel}</span>
                      <span className="text-grey text-xs ml-auto">
                        {new Date(s.date).toLocaleDateString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── Browse Tab ─── */
function BrowseTab({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (v: string) => void;
}) {
  const topics = useMemo(() => getActiveTopics(), []);
  const allTerms = useMemo(() => getAllGeoTerms(), []);
  const q = search.toLowerCase();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (slug: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });

  const effectiveExpanded = q ? new Set(topics.map((t) => t.slug)) : expanded;

  const grouped = useMemo(() => {
    return topics.map((topic) => {
      const topicTerms = allTerms.filter((t) => t.topicSlug === topic.slug);
      const categories = ["key-term", "process", "case-study", "command-word"] as const;

      const sections = categories.map((cat) => {
        const seen = new Set<string>();
        const terms = topicTerms.filter((t) => {
          if (t.category !== cat) return false;
          const key = t.word.toLowerCase();
          if (seen.has(key)) return false;
          seen.add(key);
          if (q && !t.word.toLowerCase().includes(q) && !t.def.toLowerCase().includes(q)) return false;
          return true;
        });
        return { category: cat, terms };
      }).filter((s) => s.terms.length > 0);

      const totalVisible = sections.reduce((sum, s) => sum + s.terms.length, 0);
      return { slug: topic.slug, title: topic.title, sections, totalVisible };
    }).filter((g) => g.totalVisible > 0);
  }, [allTerms, topics, q]);

  const totalCount = grouped.reduce((sum, g) => sum + g.totalVisible, 0);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 font-ui text-sm text-text placeholder:text-grey focus:outline-none focus:ring-2 focus:ring-teal/30 mb-2"
        />
        <p className="font-ui text-xs text-grey mb-5">
          {totalCount} term{totalCount !== 1 ? "s" : ""}{search && " matching"}
        </p>
      </motion.div>

      <div className="space-y-3">
        {grouped.map((group) => {
          const isOpen = effectiveExpanded.has(group.slug);
          return (
            <div key={group.slug} className="rounded-xl border border-border bg-surface overflow-hidden">
              <button
                onClick={() => toggle(group.slug)}
                className="w-full flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-bg/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-lg font-bold text-text">{group.title}</h2>
                  <span className="font-ui text-xs text-grey">
                    {group.totalVisible} term{group.totalVisible !== 1 ? "s" : ""}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-grey transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 space-y-4">
                      {group.sections.map((sec) => {
                        const colours = CATEGORY_COLOURS[sec.category] ?? { bg: "bg-grey-light", text: "text-grey" };
                        return (
                          <div key={sec.category}>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${colours.bg} ${colours.text}`}>
                                {sec.category}
                              </span>
                            </div>
                            <div className="grid gap-1.5">
                              {sec.terms.map((term) => (
                                <div
                                  key={term.id}
                                  className="rounded-lg border border-border bg-bg px-4 py-2.5 flex items-start gap-3"
                                >
                                  <span className="font-ui text-sm font-semibold text-text shrink-0 min-w-[120px]">
                                    {term.word}
                                  </span>
                                  <span className="font-ui text-sm text-grey">{term.def}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
