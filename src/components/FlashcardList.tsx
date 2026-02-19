"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Flashcard } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";
import { getItemTitle } from "@/data/slug-lookup";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const TYPE_BADGES: Record<string, { bg: string; text: string; label: string }> = {
  quote: { bg: "bg-teal-light", text: "text-teal", label: "Quote" },
  technique: { bg: "bg-purple-light", text: "text-purple", label: "Technique" },
  rad: { bg: "bg-green-light", text: "text-green", label: "RAD" },
  wow: { bg: "bg-blue-light", text: "text-blue", label: "WOW" },
  vocab: { bg: "bg-orange-light", text: "text-orange", label: "Vocab" },
  mistake: { bg: "bg-red-light", text: "text-red", label: "Mistake" },
  custom: { bg: "bg-grey-light", text: "text-grey", label: "Custom" },
  character: { bg: "bg-amber-100", text: "text-amber-700", label: "Character" },
  theme: { bg: "bg-indigo-100", text: "text-indigo-700", label: "Theme" },
  "key-term": { bg: "bg-emerald-100", text: "text-emerald-700", label: "Key Term" },
  "case-study": { bg: "bg-sky-100", text: "text-sky-700", label: "Case Study" },
  process: { bg: "bg-lime-100", text: "text-lime-700", label: "Process" },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
};

type GroupBy = "none" | "text" | "type";

interface Props {
  cards: Flashcard[];
  onRefresh: () => void;
}

export default function FlashcardList({ cards, onRefresh }: Props) {
  const [search, setSearch] = useState("");
  const [groupBy, setGroupBy] = useState<GroupBy>("text");
  const [dueFilter, setDueFilter] = useState<string>("all");
  const { deleteFlashcard } = useStorage();

  const now = new Date().toISOString();

  const filtered = cards.filter((c) => {
    if (dueFilter === "due" && c.nextReview > now) return false;
    if (dueFilter === "not-due" && c.nextReview <= now) return false;
    if (search) {
      const q = search.toLowerCase();
      if (!c.front.toLowerCase().includes(q) && !c.back.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  async function handleDelete(id: string) {
    await deleteFlashcard(id);
    onRefresh();
  }

  // Group cards
  function getGroups(): { key: string; label: string; badge?: { bg: string; text: string }; cards: Flashcard[] }[] {
    if (groupBy === "text") {
      const map = new Map<string, Flashcard[]>();
      for (const c of filtered) {
        const arr = map.get(c.textSlug) || [];
        arr.push(c);
        map.set(c.textSlug, arr);
      }
      return Array.from(map.entries()).map(([slug, cards]) => {
        return { key: slug, label: getItemTitle(slug), cards };
      });
    }
    if (groupBy === "type") {
      const order = ["quote", "technique", "rad", "wow", "vocab", "mistake", "character", "theme", "key-term", "case-study", "process", "custom"];
      const map = new Map<string, Flashcard[]>();
      for (const c of filtered) {
        const arr = map.get(c.type) || [];
        arr.push(c);
        map.set(c.type, arr);
      }
      return order
        .filter((t) => map.has(t))
        .map((t) => ({
          key: t,
          label: TYPE_BADGES[t]?.label ?? t,
          badge: TYPE_BADGES[t],
          cards: map.get(t)!,
        }));
    }
    return [{ key: "all", label: "All Cards", cards: filtered }];
  }

  const groups = getGroups();

  return (
    <div>
      {/* Toolbar */}
      <motion.div
        className="flex flex-wrap items-center gap-2 mb-4"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search cards..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 font-ui text-sm text-text placeholder:text-grey focus:outline-none focus:ring-2 focus:ring-teal/30 flex-1 min-w-[140px] transition-shadow"
        />

        {/* Group by toggle */}
        <div className="flex rounded-lg bg-grey-light p-0.5">
          {([
            { value: "text", label: "By Text" },
            { value: "type", label: "By Type" },
            { value: "none", label: "All" },
          ] as const).map((opt) => (
            <motion.button
              key={opt.value}
              whileTap={{ scale: 0.92 }}
              onClick={() => setGroupBy(opt.value)}
              className={`px-3 py-1.5 rounded-md font-ui text-xs font-semibold transition-colors cursor-pointer ${
                groupBy === opt.value
                  ? "bg-surface text-teal shadow-sm"
                  : "text-grey hover:text-text"
              }`}
            >
              {opt.label}
            </motion.button>
          ))}
        </div>

        {/* Due filter */}
        <select
          value={dueFilter}
          onChange={(e) => setDueFilter(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 font-ui text-sm text-text focus:outline-none focus:ring-2 focus:ring-teal/30 cursor-pointer"
        >
          <option value="all">All status</option>
          <option value="due">Due now</option>
          <option value="not-due">Not due</option>
        </select>
      </motion.div>

      {/* Count */}
      <AnimatePresence mode="wait">
        <motion.p
          key={filtered.length}
          className="font-ui text-xs text-grey mb-4"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          {filtered.length} card{filtered.length !== 1 ? "s" : ""}
          {filtered.length !== cards.length && ` (of ${cards.length} total)`}
        </motion.p>
      </AnimatePresence>

      {/* Grouped cards */}
      {filtered.length === 0 ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <p className="text-grey font-ui text-sm">
            {cards.length === 0
              ? "No flashcards yet. Generate them from a quote analysis page!"
              : "No cards match your filters."}
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {groups.map((group, gi) => (
            <motion.section
              key={group.key}
              variants={staggerItem}
            >
              {/* Group header */}
              {groupBy !== "none" && (
                <motion.div
                  className="flex items-center gap-2 mb-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: gi * 0.05 }}
                >
                  {group.badge && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${group.badge.bg} ${group.badge.text}`}>
                      {group.label}
                    </span>
                  )}
                  {!group.badge && (
                    <h3 className="font-ui text-sm font-semibold text-text">
                      {group.label}
                    </h3>
                  )}
                  <span className="font-ui text-xs text-grey">
                    {group.cards.length} card{group.cards.length !== 1 ? "s" : ""}
                  </span>
                </motion.div>
              )}

              {/* Card rows */}
              <div className="space-y-1.5">
                {group.cards.map((card, ci) => {
                  const badge = TYPE_BADGES[card.type] ?? TYPE_BADGES.custom;
                  const isDue = card.nextReview <= now;
                  const textName = getItemTitle(card.textSlug);
                  return (
                    <motion.div
                      key={card.id}
                      className="rounded-lg border border-border bg-surface px-4 py-3 flex items-start gap-3"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.3, ease: EASE, delay: Math.min(ci * 0.03, 0.2) }}
                      whileHover={{ x: 3, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
                    >
                      {/* Type badge (hide if grouped by type) */}
                      {groupBy !== "type" && (
                        <span
                          className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} mt-0.5`}
                        >
                          {badge.label}
                        </span>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="font-ui text-sm text-text font-medium truncate">
                          {card.front}
                        </p>
                        <p className="font-ui text-xs text-grey mt-0.5 truncate">
                          {card.back}
                        </p>
                        {/* Text label (show if grouped by type or none) */}
                        {groupBy !== "text" && textName && (
                          <p className="font-ui text-[10px] text-grey mt-1">
                            {textName}
                          </p>
                        )}
                      </div>

                      {/* Status + delete */}
                      <div className="flex items-center gap-2 shrink-0">
                        {isDue && (
                          <motion.span
                            className="w-2 h-2 rounded-full bg-orange"
                            title="Due for review"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        )}
                        <motion.button
                          onClick={() => handleDelete(card.id)}
                          className="text-grey hover:text-red transition-colors cursor-pointer p-1"
                          title="Delete card"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.85 }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </motion.div>
      )}
    </div>
  );
}
