"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import { getTextBySlug } from "@/data/text-registry";
import { useStorage } from "@/hooks/useStorage";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import type { ExamResponse } from "@/data/types";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

function levelColor(level: number) {
  if (level >= 5) return { bg: "bg-teal-light", border: "border-teal", text: "text-teal" };
  if (level >= 3) return { bg: "bg-orange-light", border: "border-orange", text: "text-orange" };
  return { bg: "bg-red-light", border: "border-red", text: "text-red" };
}

function formatDate(id: string) {
  // IDs are "exam-{timestamp}"
  const ts = parseInt(id.replace("exam-", ""), 10);
  if (isNaN(ts)) return "";
  const d = new Date(ts);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ExamHistoryPage() {
  const { user, loading } = useAuth();
  const { getExamResponses, deleteExamResponse } = useStorage();
  const [responses, setResponses] = useState<ExamResponse[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    if (!user) return;
    getExamResponses().then((r) => {
      setResponses(r);
      setLoaded(true);
    });
  }, [user, getExamResponses]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this exam response? This cannot be undone.")) return;
    await deleteExamResponse(id);
    setResponses((prev) => prev.filter((r) => r.id !== id));
  }

  // Get unique text slugs for filter
  const textSlugs = [...new Set(responses.map((r) => r.textSlug))];
  const filtered = filter === "all" ? responses : responses.filter((r) => r.textSlug === filter);

  // Stats
  const marked = responses.filter((r) => r.marking);
  const avgMark = marked.length > 0
    ? Math.round(marked.reduce((sum, r) => sum + (r.marking?.mark ?? 0), 0) / marked.length)
    : 0;
  const avgLevel = marked.length > 0
    ? (marked.reduce((sum, r) => sum + (r.marking?.level ?? 0), 0) / marked.length).toFixed(1)
    : "—";

  // ─── Loading ───
  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <PageBanner title="Your Exam History" subtitle="View all your past exam responses and marks." image="/images/exam-prep.jpg" />
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-teal" />
        </div>
      </div>
    );
  }

  // ─── Auth gate ───
  if (!user) {
    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner title="Your Exam History" subtitle="View all your past exam responses and marks." image="/images/exam-prep.jpg" />
        <div className="rounded-2xl border-2 border-border bg-surface p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-light">
            <svg className="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className="font-display text-lg font-bold text-text mb-2">Sign in to view your history</h2>
          <p className="font-body text-sm text-grey mb-6">Your past exams are saved to your account.</p>
          <button
            onClick={() => {
              createClient()?.auth.signInWithOAuth({
                provider: "google",
                options: { redirectTo: `${window.location.origin}/auth/callback` },
              });
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-teal text-white px-6 py-3 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors cursor-pointer"
          >
            Sign in with Google
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <PageBanner title="Your Exam History" subtitle="View all your past exam responses and marks." image="/images/exam-prep.jpg" />

      {/* Quick stats */}
      {marked.length > 0 && (
        <motion.div
          className="grid grid-cols-3 gap-3 mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
        >
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="font-display text-2xl font-bold text-text">{responses.length}</p>
            <p className="font-ui text-xs text-grey mt-1">Total essays</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="font-display text-2xl font-bold text-teal">{avgMark}/30</p>
            <p className="font-ui text-xs text-grey mt-1">Avg mark</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="font-display text-2xl font-bold text-purple">L{avgLevel}</p>
            <p className="font-ui text-xs text-grey mt-1">Avg level</p>
          </div>
        </motion.div>
      )}

      {/* Filter by text */}
      {textSlugs.length > 1 && (
        <motion.div
          className="flex gap-2 mb-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-3 py-1.5 font-ui text-xs font-semibold transition-colors cursor-pointer ${
              filter === "all" ? "bg-teal text-white" : "bg-surface border border-border text-grey hover:border-teal/50"
            }`}
          >
            All ({responses.length})
          </button>
          {textSlugs.map((slug) => {
            const t = getTextBySlug(slug);
            const count = responses.filter((r) => r.textSlug === slug).length;
            return (
              <button
                key={slug}
                onClick={() => setFilter(slug)}
                className={`rounded-lg px-3 py-1.5 font-ui text-xs font-semibold transition-colors cursor-pointer ${
                  filter === slug ? "bg-teal text-white" : "bg-surface border border-border text-grey hover:border-teal/50"
                }`}
              >
                {t?.title ?? slug} ({count})
              </button>
            );
          })}
        </motion.div>
      )}

      {/* Responses list */}
      {!loaded ? (
        <div className="flex items-center justify-center py-16">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-border border-t-teal" />
        </div>
      ) : filtered.length === 0 ? (
        <motion.div
          className="rounded-2xl border-2 border-dashed border-border bg-surface p-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <p className="font-display text-lg font-bold text-text mb-2">No exams yet</p>
          <p className="font-body text-sm text-grey mb-6">Start practising to see your history here.</p>
          <Link
            href="/exam"
            className="inline-flex rounded-xl bg-teal text-white px-6 py-2.5 font-ui font-semibold text-sm hover:bg-teal/90 transition-colors"
          >
            Start Exam Practice
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="space-y-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((r) => {
            const text = getTextBySlug(r.textSlug);
            const marking = r.marking;
            const colors = marking ? levelColor(marking.level) : null;

            return (
              <motion.div key={r.id} variants={staggerItem} className="rounded-xl border-2 border-border bg-surface hover:border-teal/50 hover:shadow-sm transition-all group">
                <Link
                  href={`/exam/result/${r.id}`}
                  className="block p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Text & date */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-display font-bold text-sm text-text">
                          {text?.title ?? r.textSlug}
                        </span>
                        <span className="font-ui text-xs text-grey">{formatDate(r.id)}</span>
                      </div>

                      {/* Question */}
                      <p className="font-body text-sm text-grey leading-relaxed line-clamp-2">
                        {r.question}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 mt-2">
                        <span className="font-ui text-xs text-grey">
                          {r.studentAnswer.split(/\s+/).filter(Boolean).length} words
                        </span>
                        <span className="font-ui text-xs text-grey">
                          {formatTime(r.timeSpent)}
                        </span>
                      </div>
                    </div>

                    {/* Mark badge */}
                    <div className="shrink-0 text-right">
                      {marking ? (
                        <div className={`rounded-lg ${colors!.bg} border ${colors!.border} px-3 py-2`}>
                          <p className={`font-display text-lg font-bold ${colors!.text}`}>
                            {marking.mark}/30
                          </p>
                          <p className={`font-ui text-[10px] font-semibold ${colors!.text}`}>
                            Level {marking.level} · Grade {marking.grade}
                          </p>
                        </div>
                      ) : (
                        <div className="rounded-lg bg-surface border border-border px-3 py-2">
                          <p className="font-ui text-xs text-grey font-semibold">Not marked</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
                {/* Delete button */}
                <div className="px-4 pb-3 pt-0 flex justify-end">
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-ui text-xs text-grey hover:text-red hover:bg-red-light transition-colors cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    Delete
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Bottom nav */}
      <div className="mt-8 text-center">
        <Link
          href="/exam"
          className="font-ui text-sm text-teal hover:underline transition-colors"
        >
          Start a new exam
        </Link>
      </div>
    </motion.div>
  );
}
