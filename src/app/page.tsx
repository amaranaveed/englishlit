"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TEXT_REGISTRY, TEXT_ICONS, getActiveTexts } from "@/data/text-registry";
import { useStorage } from "@/hooks/useStorage";
import { useAuth } from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/client";

/* ── Rotating colours for "Your Texts" cards ──────── */
const TEXT_CARD_COLOURS = [
  { bar: "bg-purple",  bg: "bg-purple-light", text: "text-purple", border: "border-purple/15",  hoverText: "text-purple" },
  { bar: "bg-pink",    bg: "bg-pink-light",   text: "text-pink",   border: "border-pink/15",    hoverText: "text-pink" },
  { bar: "bg-blue",    bg: "bg-blue-light",   text: "text-blue",   border: "border-blue/15",    hoverText: "text-blue" },
  { bar: "bg-teal",    bg: "bg-teal-light",   text: "text-teal",   border: "border-teal/15",    hoverText: "text-teal" },
  { bar: "bg-orange",  bg: "bg-orange-light", text: "text-orange", border: "border-orange/15",  hoverText: "text-orange" },
  { bar: "bg-amber",   bg: "bg-amber-light",  text: "text-amber",  border: "border-amber/15",   hoverText: "text-amber" },
];

/* ── Colours for each paper group section ─────────── */
const GROUP_COLOURS = [
  { bg: "bg-purple-light", text: "text-purple", dot: "bg-purple", cardBorder: "border-purple/10", hoverText: "text-purple" },
  { bg: "bg-blue-light",   text: "text-blue",   dot: "bg-blue",   cardBorder: "border-blue/10",   hoverText: "text-blue" },
  { bg: "bg-teal-light",   text: "text-teal",   dot: "bg-teal",   cardBorder: "border-teal/10",   hoverText: "text-teal" },
  { bg: "bg-orange-light", text: "text-orange", dot: "bg-orange", cardBorder: "border-orange/10", hoverText: "text-orange" },
];

/* ── Banner images for paper group sections ────────── */
const GROUP_IMAGES = [
  "/images/shakespeare-3d.png",
  "/images/19th-century-banner.png",
  "/images/modern-texts-banner.png",
  "/images/poetry-banner.png",
];

/* ── Framer Motion animation variants ──────────────── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const heroImageFloat = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, ease: "easeInOut" as const, repeat: Infinity },
  },
};

export default function HomePage() {
  const { user, profile, loading, profileLoading } = useAuth();
  const allActiveTexts = getActiveTexts();
  const { getDueCount, getFlashcards, getExamResponses, getVocabScores } = useStorage();
  const [stats, setStats] = useState({ due: 0, totalCards: 0, essays: 0, marked: 0, vocabBest: 0 });
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  useEffect(() => {
    async function load() {
      const [due, cards, exams, vocabScores] = await Promise.all([
        getDueCount(),
        getFlashcards(),
        getExamResponses(),
        getVocabScores(),
      ]);
      const totalCards = cards.length;
      const essays = exams.length;
      const marked = exams.filter((e) => e.marking).length;
      const vocabBest = vocabScores.length > 0
        ? Math.max(...vocabScores.map((s) => Math.round((s.correct / s.total) * 100)))
        : 0;
      setStats({ due, totalCards, essays, marked, vocabBest });
    }
    load();
  }, [getDueCount, getFlashcards, getExamResponses, getVocabScores]);

  return (
    <div className="min-h-[calc(100vh-4rem)]">

      {/* ── Hero — Full-width navy ─────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--hero-bg)]">
        {/* Gradient overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(79,82,195,0.15) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.2) 0%, transparent 50%)",
          }}
        />
        {/* Decorative grid dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-20 sm:pb-28">
          <div className="relative z-10 max-w-2xl lg:max-w-[52%]">
            {/* Tagline chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-orange"
              />
              <span className="font-ui text-[13px] text-white/80 font-medium tracking-wide">
                AQA 8702 Revision Platform
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-[36px] sm:text-[52px] lg:text-[58px] font-extrabold text-white leading-[1.08] tracking-[-0.02em]"
            >
              Smarter GCSE English{" "}
              <motion.span
                className="text-orange inline-block"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              >
                Literature
              </motion.span>{" "}
              Revision
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-body text-[17px] sm:text-[20px] text-white/70 mt-6 max-w-2xl leading-relaxed"
            >
              Revise your set texts, practise exam questions, and build your
              analytical vocabulary &mdash; all in one place.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link href="/texts" className="btn-pill btn-pill-orange text-[16px] px-8 py-3.5">
                  Start Revising
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link href="/exam" className="btn-pill bg-white/10 text-white border border-white/15 hover:bg-white/18 transition-all duration-200 text-[16px] px-8 py-3.5">
                  Exam Practice
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-body text-[13px] text-white/30 mt-8 italic"
            >
              Dedicated to my loving daughter Kinza
            </motion.p>
          </div>

          {/* Right-side blended image with float + parallax */}
          <motion.div
            style={{ y: heroParallax }}
            className="hidden lg:block absolute -right-16 bottom-0 w-[55%] xl:w-[50%] h-[95%] pointer-events-none overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
              className="relative w-full h-full"
            >
              <motion.div
                variants={heroImageFloat}
                animate="animate"
                className="relative w-full h-full"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 45%), linear-gradient(to top, transparent 0%, black 35%), linear-gradient(to bottom, transparent 0%, black 15%), linear-gradient(to left, transparent 0%, black 10%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%), linear-gradient(to top, transparent 0%, black 35%), linear-gradient(to bottom, transparent 0%, black 15%), linear-gradient(to left, transparent 0%, black 10%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <Image
                  src="/images/hero-characters.png"
                  alt="GCSE Literature characters"
                  fill
                  className="object-cover object-[40%_center]"
                  sizes="(min-width: 1280px) 50vw, 55vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 1 — Stats + Quick Access (lavender band)   */}
      {/* ═══════════════════════════════════════════════════ */}
      {/* ── Wave: Hero → Lavender (3-layer SplashLearn-style) ── */}
      <div className="relative bg-[var(--bg-lavender)]">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[100px] -mt-[60px] sm:-mt-[100px] relative z-10">
          <path d="M0 120V85C160 40 380 20 580 35C780 50 940 80 1120 70C1300 60 1400 55 1440 60V120H0Z" fill="var(--bg-lavender)" opacity="0.4" />
          <path d="M0 120V95C200 55 440 35 700 50C960 65 1160 85 1440 72V120H0Z" fill="var(--bg-lavender)" opacity="0.7" />
          <path d="M0 120V105C320 75 640 60 960 70C1150 76 1340 90 1440 85V120H0Z" fill="var(--bg-lavender)" />
        </svg>
      </div>

      {/* ── Social Proof Band ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bg-lavender)]">
        {/* Floating grade decorations */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <motion.span animate={{ y: [0, -15, 0], rotate: [-12, -8, -12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-6 left-[6%] text-purple/[0.07] font-display font-extrabold text-[72px] leading-none">A+</motion.span>
          <motion.span animate={{ y: [0, -10, 0], rotate: [10, 14, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-10 right-[10%] text-orange/[0.08] font-display font-extrabold text-[56px] leading-none">9</motion.span>
          <motion.span animate={{ y: [0, -12, 0], rotate: [6, 2, 6] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-4 left-[18%] text-pink/[0.06] font-display font-extrabold text-[60px] leading-none">A*</motion.span>
          <motion.span animate={{ y: [0, -8, 0], rotate: [-8, -12, -8] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-8 right-[5%] text-teal/[0.07] font-display font-extrabold text-[44px] leading-none">A</motion.span>
          <motion.span animate={{ y: [0, -10, 0], rotate: [18, 22, 18] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute top-2 left-[48%] text-blue/[0.06] font-display font-extrabold text-[38px] leading-none">8</motion.span>
          <motion.span animate={{ y: [0, -14, 0], rotate: [-15, -11, -15] }} transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-2 right-[35%] text-purple/[0.05] font-display font-extrabold text-[50px] leading-none hidden sm:block">A+</motion.span>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 text-center py-10 sm:py-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            className="font-display text-[22px] sm:text-[28px] font-bold text-text leading-snug"
          >
            Built for <span className="text-purple">GCSE Literature</span> success
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0"
          >
            {/* Stat 1 */}
            <motion.div variants={staggerItem} className="sm:border-r sm:border-border-subtle sm:pr-8">
              <p className="font-ui text-[13px] text-grey font-medium">Complete AQA 8702 coverage</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                className="font-display font-bold text-[26px] sm:text-[30px] text-text leading-tight mt-1"
              >
                15+ Set Texts
              </motion.p>
            </motion.div>
            {/* Stat 2 */}
            <motion.div variants={staggerItem} className="sm:border-r sm:border-border-subtle sm:px-8">
              <p className="font-ui text-[13px] text-grey font-medium">All-in-one revision platform</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
                className="font-display font-bold text-[26px] sm:text-[30px] text-text leading-tight mt-1"
              >
                6 Revision Tools
              </motion.p>
            </motion.div>
            {/* Stat 3 */}
            <motion.div variants={staggerItem} className="sm:pl-8">
              <p className="font-ui text-[13px] text-grey font-medium">Expert essay structures</p>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
                className="font-display font-bold text-[26px] sm:text-[30px] text-text leading-tight mt-1"
              >
                Grade 9 Method
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--bg-lavender)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-2 sm:pt-4 pb-12 sm:pb-16">
          {/* Progress stats — gated behind auth */}
          {!loading && !user ? (
            /* Sign-in prompt for unauthenticated users */
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-2xl border border-border-subtle bg-bg p-6 sm:p-8 mb-12 shadow-[var(--card-shadow)]"
            >
              <div className="flex flex-col items-center text-center py-4 sm:py-6">
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center mb-4"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </motion.span>
                <h3 className="font-display font-semibold text-[17px] text-text mb-1.5">
                  Sign in to track your progress
                </h3>
                <p className="font-body text-[14px] text-grey max-w-sm leading-relaxed mb-6">
                  Keep track of your flashcard stats, essay marks, vocabulary scores, and revision streaks across all your devices.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    createClient()!.auth.signInWithOAuth({
                      provider: "google",
                      options: { redirectTo: `${window.location.origin}/auth/callback` },
                    })
                  }
                  className="inline-flex items-center gap-2.5 btn-pill bg-purple text-white hover:bg-purple-dark transition-colors text-[15px] px-7 py-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign in with Google
                </motion.button>
              </div>
            </motion.div>
          ) : (loading || profileLoading) ? (
            /* Loading skeleton while auth resolves */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-border-subtle bg-bg p-6 sm:p-8 mb-12 shadow-[var(--card-shadow)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple/10 animate-pulse" />
                <div className="h-5 w-32 bg-border-subtle rounded animate-pulse" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="rounded-xl bg-surface-hover/50 px-5 py-4 h-20 animate-pulse" />
                ))}
              </div>
            </motion.div>
          ) : (
            /* Authenticated: show real progress */
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="rounded-2xl border border-border-subtle bg-bg p-6 sm:p-8 mb-12 shadow-[var(--card-shadow)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-xl bg-purple/10 text-purple flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                </motion.span>
                <span className="font-display font-semibold text-[17px] text-text">Your Progress</span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                <StatCard value={stats.due} label="Cards Due" colour="orange" icon="clock" />
                <StatCard value={stats.totalCards} label="Flashcards" colour="purple" icon="cards" />
                <StatCard value={stats.essays} label={stats.essays === 1 ? "Essay" : "Essays"} colour="pink" icon="essay" />
                <StatCard value={stats.marked} label="Marked" colour="teal" icon="check" />
              </motion.div>
            </motion.div>
          )}

          {/* Subject tiles — 6 cols at lg for full edge-to-edge feel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
          >
            <SubjectTile href="/texts" title="Texts" subtitle={`${allActiveTexts.length} active`} colour="purple" icon={<BookIcon />} index={0} image="/images/hero-books.jpg" />
            <SubjectTile href="/exam" title="Exam Practice" subtitle="Timed essays" colour="pink" icon={<EditIcon />} index={1} image="/images/writing.jpg" />
            <SubjectTile href="/flashcards" title="Flashcards" subtitle={stats.due > 0 ? `${stats.due} due` : "All clear"} colour="blue" icon={<LayersIcon />} index={2} image="/images/flashcards.jpg" />
            <SubjectTile href="/vocab" title="Vocab Quiz" subtitle={stats.vocabBest > 0 ? `Best ${stats.vocabBest}%` : "Key terms"} colour="orange" icon={<ChatIcon />} index={3} image="/images/exam-prep.jpg" />
            <SubjectTile href="/aos" title="AOs" subtitle="Mark schemes" colour="teal" icon={<TargetIcon />} index={4} image="/images/student-studying.jpg" />
            <SubjectTile href="/essay-structure" title="Essay Guide" subtitle="Grade 9 method" colour="amber" icon={<PenIcon />} index={5} image="/images/quill-pen.jpg" />
          </motion.div>
        </div>
      </section>

      {/* ── Wave: Lavender → White (3-layer) ────────────── */}
      <div className="relative bg-bg">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="block w-full h-[50px] sm:h-[80px]">
          <path d="M1440 0V35C1280 80 1060 100 860 85C660 70 500 40 320 50C140 60 40 65 0 60V0H1440Z" fill="var(--bg-lavender)" opacity="0.4" />
          <path d="M1440 0V25C1240 65 1000 85 740 70C480 55 280 35 0 48V0H1440Z" fill="var(--bg-lavender)" opacity="0.7" />
          <path d="M1440 0V15C1120 45 800 60 480 50C290 44 100 30 0 35V0H1440Z" fill="var(--bg-lavender)" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION — Study Smarter, Not Harder (features)     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left — heading + CTA */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:w-[38%] shrink-0"
            >
              <h2 className="font-display text-[30px] sm:text-[40px] lg:text-[44px] font-extrabold text-text leading-[1.1] tracking-[-0.02em]">
                Study Smarter,{" "}
                <motion.span
                  className="text-purple inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                >
                  Not Harder
                </motion.span>
              </h2>
              <p className="font-body text-[16px] sm:text-[17px] text-grey mt-5 leading-relaxed max-w-md">
                Every tool is designed around how top students actually revise &mdash; active recall, spaced repetition, and deep analysis.
              </p>
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href="/texts" className="btn-pill btn-pill-orange text-[15px] px-7 py-3">
                  Start Revising
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — 2×2 feature grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
            >
              <FeatureItem
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>}
                colour="purple"
                title="Deep quote analysis"
                description="Our 6-part method breaks every quote into technique, context, and critical wow-factor insights."
              />
              <FeatureItem
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>}
                colour="orange"
                title="Target what matters"
                description="Whether it's quotes, characters, themes, or exam technique &mdash; focus exactly where you need help."
              />
              <FeatureItem
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>}
                colour="teal"
                title="See yourself progress"
                description="Spaced-repetition flashcards, essay marking, and vocab scores keep you motivated and on track."
              />
              <FeatureItem
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>}
                colour="pink"
                title="Your revision, your way"
                description="Timed essays, flashcards, mind maps, or printable theme sheets &mdash; adapt to how you learn best."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Wave: White → White (subtle divider) ──────────── */}
      <div className="bg-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="border-t border-border-subtle" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 2 — Your Texts (logged-in users only)     */}
      {/* ═══════════════════════════════════════════════════ */}
      {(() => {
        const isLoggedIn = !loading && !!user;
        const isAuthResolved = !loading && !profileLoading;
        const hasTextSlugs = isLoggedIn && profile && profile.textSlugs.length > 0;
        const displayTexts = hasTextSlugs
          ? allActiveTexts.filter((t) => profile!.textSlugs.includes(t.slug))
          : [];
        const sectionSubtitle = hasTextSlugs
          ? `${displayTexts.length} selected ${displayTexts.length === 1 ? "text" : "texts"} ready to revise`
          : "";

        return isLoggedIn && isAuthResolved ? (
          <section className="bg-bg">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex items-center gap-4 mb-8"
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-11 h-11 rounded-xl bg-purple text-white flex items-center justify-center shadow-[0_2px_10px_rgba(79,82,195,0.3)]"
                >
                  <BookIcon />
                </motion.span>
                <div>
                  <h2 className="font-display text-[24px] sm:text-[30px] font-bold text-text leading-tight">
                    Your Texts
                  </h2>
                  {sectionSubtitle && (
                    <p className="font-ui text-[14px] text-grey mt-0.5">{sectionSubtitle}</p>
                  )}
                </div>
                <div className="flex-1" />
                <motion.div whileHover={{ scale: 1.05, x: 3 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/texts" className="hidden sm:inline-flex items-center gap-2 font-ui text-[14px] font-semibold text-purple hover:text-purple-dark transition-colors btn-pill bg-purple-light px-5 py-2">
                    View all
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Logged in but no texts selected in profile */}
              {isLoggedIn && isAuthResolved && !hasTextSlugs ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="rounded-2xl border border-border-subtle bg-surface p-8 sm:p-10 text-center"
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center mx-auto mb-4"
                  >
                    <BookIcon />
                  </motion.span>
                  <h3 className="font-display font-semibold text-[17px] text-text mb-1.5">
                    No texts selected yet
                  </h3>
                  <p className="font-body text-[14px] text-grey max-w-sm mx-auto leading-relaxed">
                    Click the <span className="inline-flex items-center gap-1 font-semibold text-text"><svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> settings</span> icon in the header to select your set texts.
                  </p>
                </motion.div>
              ) : displayTexts.length > 0 ? (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {displayTexts.map((t, i) => {
                    const colours = TEXT_CARD_COLOURS[i % TEXT_CARD_COLOURS.length];
                    return (
                      <motion.div
                        key={t.slug}
                        variants={staggerItem}
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Link
                          href={`/texts/${t.slug}`}
                          className={`group relative rounded-2xl border bg-surface overflow-hidden block ${colours.border}`}
                        >
                          <motion.div
                            className={`h-1.5 w-full ${colours.bar}`}
                            variants={{
                              hidden: { scaleX: 0 },
                              visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                            style={{ transformOrigin: "left" }}
                          />
                          <div className="px-6 py-5">
                            <div className="flex items-start gap-4">
                              {TEXT_ICONS[t.slug] ? (
                                <img src={TEXT_ICONS[t.slug]} alt="" className="w-20 h-20 rounded-full object-cover object-[center_30%] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]" />
                              ) : (
                                <span className={`w-14 h-14 rounded-xl ${colours.bg} ${colours.text} font-display font-bold text-[22px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]`}>
                                  {t.title.charAt(0)}
                                </span>
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="font-display font-semibold text-[17px] text-text leading-snug truncate">
                                  {t.title}
                                </p>
                                <p className="font-ui text-[14px] text-grey mt-1">{t.author}</p>
                                <div className="flex items-center gap-2 mt-3">
                                  <span className={`text-[12px] font-semibold ${colours.text} ${colours.bg} px-3 py-0.5 rounded-full`}>
                                    {t.paper} {t.section}
                                  </span>
                                  <span className="text-[12px] text-grey font-medium">{t.year}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-6 right-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                            <svg className={`w-5 h-5 ${colours.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : null}
            </div>
          </section>
        ) : null;
      })()}

      {/* ── Wave: White → Surface (3-layer) ─────────────── */}
      <div className="relative bg-surface">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="block w-full h-[50px] sm:h-[80px]">
          <path d="M0 0V40C200 85 440 95 680 80C920 65 1100 35 1280 45C1380 50 1420 52 1440 50V0H0Z" fill="var(--bg-primary)" opacity="0.4" />
          <path d="M0 0V28C260 70 520 80 780 68C1040 56 1200 40 1440 42V0H0Z" fill="var(--bg-primary)" opacity="0.7" />
          <path d="M0 0V18C360 50 720 58 1080 48C1260 43 1380 35 1440 32V0H0Z" fill="var(--bg-primary)" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 3 — All AQA Texts (surface band)           */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-4 mb-10"
          >
            <motion.span
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 rounded-xl bg-purple text-white flex items-center justify-center shadow-[0_2px_10px_rgba(79,82,195,0.25)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>
            </motion.span>
            <div>
              <h2 className="font-display text-[24px] sm:text-[30px] font-bold text-text leading-tight">
                All AQA Texts
              </h2>
              <p className="font-ui text-[14px] text-grey mt-0.5">Every set text for AQA GCSE English Literature 8702</p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="space-y-6"
          >
            {TEXT_REGISTRY.map((group, gi) => {
              const gc = GROUP_COLOURS[gi % GROUP_COLOURS.length];
              const groupImage = GROUP_IMAGES[gi % GROUP_IMAGES.length];
              return (
                <motion.div
                  key={group.label}
                  variants={staggerItem}
                  className="rounded-2xl border border-border-subtle bg-bg overflow-hidden shadow-[var(--card-shadow)]"
                >
                  {/* Banner image with overlay */}
                  <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-[#1a1b3a]">
                    <Image src={groupImage} alt={group.label} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 1200px" />
                    <div className="absolute inset-0 bg-[#1a1b3a]/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b3a]/75 via-[#1a1b3a]/35 to-transparent" />
                    <div className="absolute inset-0 flex items-center px-6 sm:px-7">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm text-white flex items-center justify-center border border-white/20">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                        </span>
                        <div>
                          <p className="text-[17px] sm:text-[20px] font-display font-bold text-white leading-snug">
                            {group.label}
                          </p>
                          <p className="font-ui text-[13px] text-white/70 mt-0.5">{group.paper} {group.section}</p>
                        </div>
                        <div className="flex-1" />
                        <span className="text-[12px] font-semibold text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                          {group.texts.filter(t => t.status === "active").length}/{group.texts.length} available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cards grid */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5 sm:p-6"
                  >
                    {group.texts.map((t) => {
                      const active = t.status === "active";
                      return active ? (
                        <motion.div key={t.slug} variants={staggerItem} whileHover={{ scale: 1.02, y: -2 }}>
                          <Link
                            href={`/texts/${t.slug}`}
                            className={`group flex items-center gap-4 rounded-xl border ${gc.cardBorder} bg-surface hover:bg-surface-hover px-5 py-4 transition-all duration-200 hover:border-purple/20 hover:shadow-[var(--card-shadow)]`}
                          >
                            {TEXT_ICONS[t.slug] ? (
                              <img src={TEXT_ICONS[t.slug]} alt="" className="w-10 h-10 rounded-full object-cover object-[center_30%] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                            ) : (
                              <span className={`w-10 h-10 rounded-lg ${gc.bg} ${gc.text} font-display font-bold text-[16px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                                {t.title.charAt(0)}
                              </span>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="font-ui text-[15px] font-semibold text-text truncate">{t.title}</p>
                              <p className="font-ui text-[13px] text-grey mt-0.5">{t.author} &middot; {t.year}</p>
                            </div>
                            <svg className={`w-4 h-4 text-border shrink-0 group-hover:${gc.hoverText} group-hover:translate-x-0.5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                          </Link>
                        </motion.div>
                      ) : (
                        <motion.div key={t.slug} variants={staggerItem} className="flex items-center gap-4 rounded-xl border border-border-subtle/50 bg-surface px-5 py-4 opacity-40">
                          <span className="w-10 h-10 rounded-lg bg-surface-hover text-grey font-display font-bold text-[16px] flex items-center justify-center shrink-0">
                            {t.title.charAt(0)}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="font-ui text-[15px] font-medium text-grey truncate">{t.title}</p>
                            <p className="font-ui text-[13px] text-grey/50 mt-0.5">{t.author}</p>
                          </div>
                          <span className="text-[10px] font-bold text-grey/40 bg-surface-hover px-2.5 py-1 rounded-full shrink-0">SOON</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

/* ── Stat card with animated counter ─────────────────── */
function StatCard({ value, label, colour, icon }: { value: number; label: string; colour: string; icon: string }) {
  const colourMap: Record<string, { bg: string; text: string; iconBg: string }> = {
    orange: { bg: "bg-orange-light", text: "text-orange", iconBg: "bg-orange/10" },
    purple: { bg: "bg-purple-light", text: "text-purple", iconBg: "bg-purple/10" },
    pink:   { bg: "bg-pink-light",   text: "text-pink",   iconBg: "bg-pink/10" },
    teal:   { bg: "bg-teal-light",   text: "text-teal",   iconBg: "bg-teal/10" },
    blue:   { bg: "bg-blue-light",   text: "text-blue",   iconBg: "bg-blue/10" },
  };
  const c = colourMap[colour] ?? colourMap.purple;

  const icons: Record<string, React.ReactNode> = {
    clock: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    cards: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" /></svg>,
    essay: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
    check: <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl ${c.bg} px-5 py-4 flex items-center gap-3.5`}
    >
      <motion.span
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className={`w-9 h-9 rounded-lg ${c.iconBg} ${c.text} flex items-center justify-center shrink-0`}
      >
        {icons[icon]}
      </motion.span>
      <div>
        <p className={`font-display font-bold text-[24px] ${c.text} leading-none tabular-nums`}>{value}</p>
        <p className="font-ui text-[13px] text-grey mt-1 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

/* ── Subject tile with hover lift and stagger ─────────── */
function SubjectTile({
  href,
  title,
  subtitle,
  colour,
  icon,
  index,
  image,
}: {
  href: string;
  title: string;
  subtitle: string;
  colour: string;
  icon: React.ReactNode;
  index: number;
  image?: string;
}) {
  const styles: Record<string, { bg: string; iconBg: string; iconText: string; border: string }> = {
    purple: { bg: "bg-bg",          iconBg: "bg-purple/10", iconText: "text-purple", border: "border-border-subtle" },
    pink:   { bg: "bg-bg",          iconBg: "bg-pink/10",   iconText: "text-pink",   border: "border-border-subtle" },
    blue:   { bg: "bg-bg",          iconBg: "bg-blue/10",   iconText: "text-blue",   border: "border-border-subtle" },
    orange: { bg: "bg-bg",          iconBg: "bg-orange/10", iconText: "text-orange", border: "border-border-subtle" },
    teal:   { bg: "bg-bg",          iconBg: "bg-teal/10",   iconText: "text-teal",   border: "border-border-subtle" },
    amber:  { bg: "bg-bg",          iconBg: "bg-amber/10",  iconText: "text-amber",  border: "border-border-subtle" },
    green:  { bg: "bg-bg",          iconBg: "bg-green/10",  iconText: "text-green",  border: "border-border-subtle" },
  };
  const s = styles[colour] ?? styles.purple;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.05, y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
    >
      <Link
        href={href}
        className={`group tile-glow rounded-2xl ${s.bg} border ${s.border} overflow-hidden shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] block`}
      >
        {/* Tile image */}
        {image && (
          <div className="relative h-24 sm:h-28 w-full overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          </div>
        )}
        <div className={image ? "px-5 pb-5 -mt-5 relative" : "p-5 sm:p-6"}>
          <div className={`w-12 h-12 rounded-xl ${s.iconBg} ${s.iconText} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${image ? "shadow-sm bg-bg border border-border-subtle" : ""}`}>
            {icon}
          </div>
          <p className="font-display font-semibold text-[16px] text-text leading-snug">{title}</p>
          <p className="font-ui text-[13px] text-grey mt-1.5">{subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Feature item (Study Smarter grid) ─────────────────── */
function FeatureItem({
  icon,
  colour,
  title,
  description,
}: {
  icon: React.ReactNode;
  colour: string;
  title: string;
  description: string;
}) {
  const colourMap: Record<string, { iconBg: string; iconText: string }> = {
    purple: { iconBg: "bg-purple/10", iconText: "text-purple" },
    orange: { iconBg: "bg-orange/10", iconText: "text-orange" },
    teal:   { iconBg: "bg-teal/10",   iconText: "text-teal" },
    pink:   { iconBg: "bg-pink/10",   iconText: "text-pink" },
    blue:   { iconBg: "bg-blue/10",   iconText: "text-blue" },
  };
  const c = colourMap[colour] ?? colourMap.purple;

  return (
    <motion.div variants={staggerItem}>
      <motion.span
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className={`w-11 h-11 rounded-xl ${c.iconBg} ${c.iconText} flex items-center justify-center mb-4`}
      >
        {icon}
      </motion.span>
      <h3 className={`font-display font-bold text-[17px] sm:text-[19px] ${c.iconText} leading-snug`}>
        {title}
      </h3>
      <p
        className="font-body text-[14px] sm:text-[15px] text-grey mt-2 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </motion.div>
  );
}

/* ── Icons ─────────────────────────────────────────────── */
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
