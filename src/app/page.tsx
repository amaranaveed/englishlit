"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { TEXT_REGISTRY, getActiveTexts } from "@/data/text-registry";
import { getDueCount, getFlashcards } from "@/data/flashcard-storage";
import { getExamResponses } from "@/data/exam-storage";
import { getVocabScores } from "@/data/vocab";

export default function HomePage() {
  const activeTexts = getActiveTexts();
  const [stats, setStats] = useState({ due: 0, totalCards: 0, essays: 0, marked: 0, vocabBest: 0 });

  useEffect(() => {
    const due = getDueCount();
    const totalCards = getFlashcards().length;
    const exams = getExamResponses();
    const essays = exams.length;
    const marked = exams.filter((e) => e.marking).length;
    const vocabScores = getVocabScores();
    const vocabBest = vocabScores.length > 0
      ? Math.max(...vocabScores.map((s) => Math.round((s.correct / s.total) * 100)))
      : 0;
    setStats({ due, totalCards, essays, marked, vocabBest });
  }, []);

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 0%, var(--hero-gradient-1) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 75% 100%, var(--hero-gradient-2) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 pt-14 sm:pt-16 pb-12 sm:pb-14 text-center">
          <h1 className="font-display text-[26px] sm:text-[32px] font-bold text-text leading-tight">
            GCSE English Literature
          </h1>
          <p className="font-ui text-[15px] text-grey mt-3 max-w-md mx-auto leading-relaxed">
            Revise your set texts, practise exam questions, and build your
            analytical vocabulary — all in one place.
          </p>
          <p className="font-ui text-[13px] text-grey/60 mt-2 italic">
            Dedicated to my loving daughter Kinza
          </p>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-12">

        {/* ── Progress strip ────────────────────────── */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-12">
          <ProgressPill value={stats.due} label="cards due" colour={stats.due > 0 ? "orange" : "teal"} />
          <ProgressPill value={stats.totalCards} label="flashcards" colour="teal" />
          <ProgressPill value={stats.essays} label={stats.essays === 1 ? "essay" : "essays"} colour="purple" />
          <ProgressPill value={stats.marked} label="marked" colour="blue" />
        </div>

        {/* ── Subject tiles ─────────────────────────── */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          <SubjectTile
            href="/texts"
            title="Texts"
            subtitle={`${activeTexts.length} active`}
            colour="teal"
            icon={<BookIcon />}
          />
          <SubjectTile
            href="/exam"
            title="Exam Practice"
            subtitle="Timed essays"
            colour="purple"
            icon={<EditIcon />}
          />
          <SubjectTile
            href="/flashcards"
            title="Flashcards"
            subtitle={stats.due > 0 ? `${stats.due} due` : "All clear"}
            colour="blue"
            icon={<LayersIcon />}
          />
          <SubjectTile
            href="/vocab"
            title="Vocab Quiz"
            subtitle={stats.vocabBest > 0 ? `Best ${stats.vocabBest}%` : "Key terms"}
            colour="orange"
            icon={<ChatIcon />}
          />
          <SubjectTile
            href="/aos"
            title="AOs"
            subtitle="Mark schemes"
            colour="green"
            icon={<TargetIcon />}
          />
          <SubjectTile
            href="/essay-structure"
            title="Essay Structure"
            subtitle="Grade 9 method"
            colour="amber"
            icon={<PenIcon />}
          />
        </section>

        {/* ── Your texts ────────────────────────────── */}
        {activeTexts.length > 0 && (
          <section className="mb-14">
            <h2 className="font-display text-[20px] font-bold text-text mb-4">
              Your Texts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {activeTexts.map((t) => (
                <Link
                  key={t.slug}
                  href={`/texts/${t.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4 card-hover"
                >
                  <span className="w-10 h-10 rounded-lg bg-teal-light text-teal font-display font-bold text-[17px] flex items-center justify-center shrink-0">
                    {t.title.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-ui font-semibold text-[15px] text-text leading-snug truncate">
                      {t.title}
                    </p>
                    <p className="font-ui text-[13px] text-grey mt-0.5">
                      {t.author} &middot; {t.paper} {t.section}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-grey/30 shrink-0 group-hover:text-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── All AQA texts ─────────────────────────── */}
        <section className="pb-8">
          <h2 className="font-display text-[20px] font-bold text-text mb-6">
            All AQA Texts
          </h2>
          <div className="space-y-8">
            {TEXT_REGISTRY.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-ui text-[11px] font-semibold text-grey uppercase tracking-[0.12em] whitespace-nowrap">
                    {group.paper} {group.section} &mdash; {group.label}
                  </h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {group.texts.map((t) => {
                    const active = t.status === "active";
                    const inner = (
                      <>
                        <div className="min-w-0">
                          <p className={`font-ui text-[14px] font-medium truncate ${active ? "text-text" : "text-grey"}`}>
                            {t.title}
                          </p>
                          <p className={`font-ui text-[12px] mt-0.5 ${active ? "text-grey" : "text-grey/50"}`}>
                            {t.author}
                          </p>
                        </div>
                        {active ? (
                          <span className="text-[11px] font-semibold text-green shrink-0">Active</span>
                        ) : (
                          <span className="text-[11px] font-medium text-grey/40 shrink-0">Soon</span>
                        )}
                      </>
                    );
                    return active ? (
                      <Link
                        key={t.slug}
                        href={`/texts/${t.slug}`}
                        className="rounded-xl border border-border bg-surface px-4 py-3.5 flex items-center justify-between gap-3 card-hover cursor-pointer"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div
                        key={t.slug}
                        className="rounded-xl border border-border/60 bg-surface px-4 py-3.5 flex items-center justify-between gap-3 opacity-45"
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ── Progress pill ─────────────────────────────────── */
function ProgressPill({ value, label, colour }: { value: number; label: string; colour: string }) {
  const dotMap: Record<string, string> = {
    teal: "bg-teal",
    purple: "bg-purple",
    blue: "bg-blue",
    orange: "bg-orange",
  };
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${dotMap[colour] ?? "bg-grey"}`} />
      <span className="font-ui text-[14px] text-text">
        <span className="font-bold">{value}</span>{" "}
        <span className="text-grey">{label}</span>
      </span>
    </div>
  );
}

/* ── Subject tile ──────────────────────────────────── */
function SubjectTile({
  href,
  title,
  subtitle,
  colour,
  icon,
}: {
  href: string;
  title: string;
  subtitle: string;
  colour: string;
  icon: React.ReactNode;
}) {
  const styles: Record<string, { bg: string; iconBg: string; iconText: string; border: string }> = {
    teal:   { bg: "bg-teal-light",   iconBg: "bg-teal/12",   iconText: "text-teal",   border: "border-teal/15" },
    purple: { bg: "bg-purple-light", iconBg: "bg-purple/12", iconText: "text-purple", border: "border-purple/15" },
    blue:   { bg: "bg-blue-light",   iconBg: "bg-blue/12",   iconText: "text-blue",   border: "border-blue/15" },
    orange: { bg: "bg-orange-light", iconBg: "bg-orange/12", iconText: "text-orange", border: "border-orange/15" },
    green:  { bg: "bg-green-light",  iconBg: "bg-green/12",  iconText: "text-green",  border: "border-green/15" },
    amber:  { bg: "bg-amber-light",  iconBg: "bg-amber/12",  iconText: "text-amber",  border: "border-amber/15" },
  };
  const s = styles[colour] ?? styles.teal;

  return (
    <Link
      href={href}
      className={`group rounded-2xl ${s.bg} border ${s.border} p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
    >
      <div className={`w-10 h-10 rounded-xl ${s.iconBg} ${s.iconText} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <p className="font-ui font-semibold text-[15px] text-text leading-snug">{title}</p>
      <p className="font-ui text-[13px] text-grey mt-1">{subtitle}</p>
    </Link>
  );
}

/* ── Icons (Heroicons outline, 20px, 1.5 stroke) ──── */
function BookIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}
