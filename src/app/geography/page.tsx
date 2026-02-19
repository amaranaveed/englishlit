"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GEOGRAPHY_REGISTRY, getActiveTopics } from "@/data/geography/topic-registry";
import { getAllGeoTerms } from "@/data/geography/vocab";
import PageBanner from "@/components/PageBanner";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const GROUP_COLOURS = [
  { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", border: "border-emerald-200", hoverText: "text-emerald-700" },
  { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500", border: "border-sky-200", hoverText: "text-sky-700" },
  { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", border: "border-amber-200", hoverText: "text-amber-700" },
  { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500", border: "border-violet-200", hoverText: "text-violet-700" },
];

export default function GeographyPage() {
  const activeTopics = getActiveTopics();
  const allTerms = getAllGeoTerms();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="GCSE Geography"
        subtitle={`AQA 8035 · ${activeTopics.length} topics · ${allTerms.length} key terms`}
        image="/images/hero-books.jpg"
      />

      {/* Quick links */}
      <motion.div
        className="grid sm:grid-cols-2 gap-4 mb-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={staggerItem}>
          <Link
            href="/geography/key-terms"
            className="block rounded-xl border border-border bg-surface p-5 card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
              </span>
              <div>
                <p className="font-display font-bold text-text">Key Terms Quiz</p>
                <p className="font-ui text-sm text-grey">Browse and quiz geography vocabulary</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Link
            href="/geography/flashcards"
            className="block rounded-xl border border-border bg-surface p-5 card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" /></svg>
              </span>
              <div>
                <p className="font-display font-bold text-text">Flashcards</p>
                <p className="font-ui text-sm text-grey">Review geography flashcards with spaced repetition</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Link
            href="/geography/model-answers"
            className="block rounded-xl border border-border bg-surface p-5 card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
              </span>
              <div>
                <p className="font-display font-bold text-text">Model Answers</p>
                <p className="font-ui text-sm text-grey">Grade 9 model answers with examiner notes</p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Link
            href="/geography/exam"
            className="block rounded-xl border border-border bg-surface p-5 card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
              </span>
              <div>
                <p className="font-display font-bold text-text">Exam Practice</p>
                <p className="font-ui text-sm text-grey">Practice questions with AI marking</p>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Topic groups */}
      <div className="space-y-8">
        {GEOGRAPHY_REGISTRY.map((group, gi) => {
          const colours = GROUP_COLOURS[gi % GROUP_COLOURS.length];
          const activeCount = group.topics.filter((t) => t.status === "active").length;
          return (
            <motion.section
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: gi * 0.1 }}
            >
              {/* Section header */}
              <div className={`flex items-center gap-3 mb-4 px-1`}>
                <span className={`w-8 h-8 rounded-lg ${colours.bg} ${colours.text} flex items-center justify-center border ${colours.border}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </span>
                <div className="flex-1">
                  <h2 className="font-display font-bold text-text">{group.label}</h2>
                  <p className="font-ui text-xs text-grey">{group.paper} {group.section}</p>
                </div>
                <span className={`text-[11px] font-semibold ${colours.text} ${colours.bg} px-3 py-1 rounded-full border ${colours.border}`}>
                  {activeCount}/{group.topics.length}
                </span>
              </div>

              {/* Topic cards */}
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.topics.map((topic) => {
                  const active = topic.status === "active";
                  return (
                    <motion.div key={topic.slug} variants={staggerItem}>
                      {active ? (
                        <Link
                          href={`/geography/topics/${topic.slug}`}
                          className="block rounded-xl border border-border bg-surface p-5 card-hover"
                        >
                          <p className="font-display font-bold text-text mb-1">{topic.title}</p>
                          <p className="font-ui text-xs text-grey">{topic.unit}</p>
                          <div className="mt-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-green-light text-green px-2 py-0.5 rounded-full">
                              Active
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div className="rounded-xl border border-border bg-surface p-5 opacity-60">
                          <p className="font-display font-bold text-grey mb-1">{topic.title}</p>
                          <p className="font-ui text-xs text-grey">{topic.unit}</p>
                          <div className="mt-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-grey-light text-grey px-2 py-0.5 rounded-full">
                              Coming Soon
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
