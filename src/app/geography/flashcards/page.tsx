"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import type { Flashcard } from "@/data/types";
import { useStorage } from "@/hooks/useStorage";
import FlashcardReview from "@/components/FlashcardReview";
import FlashcardList from "@/components/FlashcardList";
import { useAuth } from "@/components/AuthProvider";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function GeographyFlashcardsPage() {
  const { user, loading: authLoading } = useAuth();
  const [tab, setTab] = useState<"review" | "list">("review");
  const [allCards, setAllCards] = useState<Flashcard[]>([]);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [reviewing, setReviewing] = useState(false);

  const { getFlashcards, getDueFlashcards } = useStorage();

  const refresh = useCallback(() => {
    Promise.all([getFlashcards(), getDueFlashcards()]).then(([all, due]) => {
      // Filter to only geography cards
      setAllCards(all.filter((c) => c.textSlug.startsWith("geo-")));
      setDueCards(due.filter((c) => c.textSlug.startsWith("geo-")));
    });
  }, [getFlashcards, getDueFlashcards]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const dueCount = dueCards.length;
  const totalCount = allCards.length;

  // Require sign-in
  if (!authLoading && !user && isSupabaseConfigured()) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <motion.span
          className="text-4xl mb-4 block"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
        >
          🔒
        </motion.span>
        <motion.h1
          className="font-display text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          Sign in to access Flashcards
        </motion.h1>
        <motion.p
          className="text-grey font-ui mb-6 max-w-md mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          Sign in with Google to generate, review, and track your geography flashcards.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={async () => {
            const supabase = createClient();
            if (!supabase) return;
            await supabase.auth.signInWithOAuth({
              provider: "google",
              options: { redirectTo: `${window.location.origin}/auth/callback` },
            });
          }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-purple text-white font-ui text-sm font-bold hover:bg-purple/90 transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          Sign in with Google
        </motion.button>
      </div>
    );
  }

  // Empty state
  if (totalCount === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <motion.span
          className="text-4xl mb-4 block"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
        >
          🗂️
        </motion.span>
        <motion.h1
          className="font-display text-2xl font-bold mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          Geography Flashcards
        </motion.h1>
        <motion.p
          className="text-grey font-ui mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          No geography flashcards yet! Go to a topic page and click
          <span className="font-semibold text-teal"> Generate Flashcards</span> to get started.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
        >
          <Link href="/geography" className="font-ui text-sm text-teal hover:underline">
            Browse topics &rarr;
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <PageBanner
          title="Geography Flashcards"
          subtitle={`${dueCount} due · ${totalCount} total`}
          image="/images/hero-books.jpg"
        />
      </motion.div>

      {/* Tab toggle */}
      <div className="flex rounded-lg bg-grey-light p-1 mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => { setTab("review"); setReviewing(false); refresh(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "review" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          Review{dueCount > 0 && ` (${dueCount})`}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => { setTab("list"); refresh(); }}
          className={`flex-1 rounded-md py-2 font-ui text-sm font-semibold transition-colors cursor-pointer ${
            tab === "list" ? "bg-surface text-teal shadow-sm" : "text-grey hover:text-text"
          }`}
        >
          All Cards ({totalCount})
        </motion.button>
      </div>

      {tab === "review" ? (
        reviewing ? (
          <FlashcardReview
            cards={dueCards}
            onComplete={() => { setReviewing(false); refresh(); }}
          />
        ) : (
          <div className="text-center py-8">
            <p className="font-ui text-sm text-grey mb-4">
              {dueCount === 0
                ? "No geography cards due right now. Check back later!"
                : `${dueCount} card${dueCount !== 1 ? "s" : ""} ready to review`}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setReviewing(true)}
              disabled={dueCount === 0}
              className={`px-8 py-3 rounded-xl font-ui text-sm font-bold transition-all cursor-pointer ${
                dueCount > 0
                  ? "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg"
                  : "bg-grey-light text-grey cursor-not-allowed"
              }`}
            >
              Start Review &rarr;
            </motion.button>
          </div>
        )
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <FlashcardList cards={allCards} onRefresh={refresh} />
        </motion.div>
      )}
    </div>
  );
}
