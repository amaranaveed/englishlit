import { createClient } from "@/lib/supabase/client";
import type { Flashcard, ExamResponse } from "@/data/types";
import type { VocabQuizScore } from "@/data/vocab";

const MIGRATION_KEY = "supabase-data-migrated";

export async function migrateLocalStorageToSupabase(userId: string): Promise<void> {
  if (localStorage.getItem(MIGRATION_KEY)) return;

  const sb = createClient();
  if (!sb) return;
  let migrated = false;

  // 1. Migrate flashcards
  try {
    const raw = localStorage.getItem("flashcards");
    if (raw) {
      const cards = JSON.parse(raw) as Flashcard[];
      if (cards.length > 0) {
        const rows = cards.map((c) => ({
          id: c.id,
          user_id: userId,
          type: c.type,
          text_slug: c.textSlug,
          front: c.front,
          back: c.back,
          confidence: c.confidence,
          next_review: c.nextReview,
          created_at: c.createdAt,
        }));
        for (let i = 0; i < rows.length; i += 100) {
          await sb.from("flashcards").upsert(rows.slice(i, i + 100), { onConflict: "user_id,id" });
        }
        migrated = true;
      }
    }
  } catch { /* ignore */ }

  // 2. Migrate exam responses
  try {
    const raw = localStorage.getItem("exam-responses");
    if (raw) {
      const responses = JSON.parse(raw) as ExamResponse[];
      if (responses.length > 0) {
        const rows = responses.map((r) => ({
          id: r.id,
          user_id: userId,
          text_slug: r.textSlug,
          question: r.question,
          student_answer: r.studentAnswer,
          time_spent: r.timeSpent,
          marking: r.marking ?? null,
        }));
        for (let i = 0; i < rows.length; i += 100) {
          await sb.from("exam_responses").upsert(rows.slice(i, i + 100), { onConflict: "user_id,id" });
        }
        migrated = true;
      }
    }
  } catch { /* ignore */ }

  // 3. Migrate vocab scores
  try {
    const raw = localStorage.getItem("vocab-quiz-scores");
    if (raw) {
      const scores = JSON.parse(raw) as VocabQuizScore[];
      if (scores.length > 0) {
        const rows = scores.map((s) => ({
          id: s.id,
          user_id: userId,
          date: s.date,
          text_slug: s.textSlug,
          mode: s.mode,
          total: s.total,
          correct: s.correct,
          missed: s.missed,
        }));
        for (let i = 0; i < rows.length; i += 100) {
          await sb.from("vocab_quiz_scores").upsert(rows.slice(i, i + 100), { onConflict: "user_id,id" });
        }
        migrated = true;
      }
    }
  } catch { /* ignore */ }

  if (migrated) {
    localStorage.setItem(MIGRATION_KEY, new Date().toISOString());
  }
}
