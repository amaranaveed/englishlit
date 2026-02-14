import { createClient } from "@/lib/supabase/client";
import type { Flashcard, ExamResponse, UserProfile } from "@/data/types";
import type { VocabQuizScore } from "@/data/vocab";

// ─── Helper ───

function supabase() {
  return createClient()!;
}

// ═══════════════════════════════════════════════════════════════════
// FLASHCARD STORAGE
// ═══════════════════════════════════════════════════════════════════

export async function getFlashcards(userId?: string): Promise<Flashcard[]> {
  if (!userId) {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("flashcards");
      return raw ? (JSON.parse(raw) as Flashcard[]) : [];
    } catch { return []; }
  }

  const { data, error } = await supabase()
    .from("flashcards")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    type: row.type as Flashcard["type"],
    textSlug: row.text_slug as string,
    front: row.front as string,
    back: row.back as string,
    confidence: row.confidence as number,
    nextReview: new Date(row.next_review).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export async function saveFlashcards(cards: Flashcard[], userId?: string): Promise<void> {
  if (!userId) {
    localStorage.setItem("flashcards", JSON.stringify(cards));
    return;
  }

  // Delete all then re-insert (bulk replace)
  await supabase().from("flashcards").delete().neq("id", "");
  if (cards.length === 0) return;

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

  // Batch in chunks of 100
  for (let i = 0; i < rows.length; i += 100) {
    await supabase().from("flashcards").insert(rows.slice(i, i + 100));
  }
}

export async function addFlashcard(card: Flashcard, userId?: string): Promise<void> {
  if (!userId) {
    const cards = await getFlashcards();
    if (cards.some((c) => c.id === card.id)) return;
    cards.push(card);
    localStorage.setItem("flashcards", JSON.stringify(cards));
    return;
  }

  await supabase().from("flashcards").upsert({
    id: card.id,
    user_id: userId,
    type: card.type,
    text_slug: card.textSlug,
    front: card.front,
    back: card.back,
    confidence: card.confidence,
    next_review: card.nextReview,
    created_at: card.createdAt,
  }, { onConflict: "user_id,id" });
}

export async function deleteFlashcard(cardId: string, userId?: string): Promise<void> {
  if (!userId) {
    const cards = (await getFlashcards()).filter((c) => c.id !== cardId);
    localStorage.setItem("flashcards", JSON.stringify(cards));
    return;
  }

  await supabase().from("flashcards").delete().eq("id", cardId);
}

// ─── Queries ───

export async function getDueFlashcards(userId?: string): Promise<Flashcard[]> {
  const now = new Date().toISOString();

  if (!userId) {
    return (await getFlashcards()).filter((c) => c.nextReview <= now);
  }

  const { data, error } = await supabase()
    .from("flashcards")
    .select("*")
    .lte("next_review", now);

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    type: row.type as Flashcard["type"],
    textSlug: row.text_slug as string,
    front: row.front as string,
    back: row.back as string,
    confidence: row.confidence as number,
    nextReview: new Date(row.next_review).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export async function getDueCount(userId?: string): Promise<number> {
  if (!userId) {
    return (await getDueFlashcards()).length;
  }

  const now = new Date().toISOString();
  const { count, error } = await supabase()
    .from("flashcards")
    .select("*", { count: "exact", head: true })
    .lte("next_review", now);

  if (error || count === null) return 0;
  return count;
}

export async function getFlashcardsByText(textSlug: string, userId?: string): Promise<Flashcard[]> {
  if (!userId) {
    return (await getFlashcards()).filter((c) => c.textSlug === textSlug);
  }

  const { data, error } = await supabase()
    .from("flashcards")
    .select("*")
    .eq("text_slug", textSlug);

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    type: row.type as Flashcard["type"],
    textSlug: row.text_slug as string,
    front: row.front as string,
    back: row.back as string,
    confidence: row.confidence as number,
    nextReview: new Date(row.next_review).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export async function getFlashcardsByType(type: Flashcard["type"], userId?: string): Promise<Flashcard[]> {
  if (!userId) {
    return (await getFlashcards()).filter((c) => c.type === type);
  }

  const { data, error } = await supabase()
    .from("flashcards")
    .select("*")
    .eq("type", type);

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    type: row.type as Flashcard["type"],
    textSlug: row.text_slug as string,
    front: row.front as string,
    back: row.back as string,
    confidence: row.confidence as number,
    nextReview: new Date(row.next_review).toISOString(),
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

// ─── Spaced Repetition ───

const INTERVALS_MS = {
  0: 60 * 1000,                // 1 minute
  1: 6 * 60 * 60 * 1000,      // 6 hours
  2: 24 * 60 * 60 * 1000,     // 1 day
  3: 3 * 24 * 60 * 60 * 1000, // 3 days
} as const;

function getMultiplier(confidence: number): number {
  return Math.max(1, 1 + (confidence - 1) * 0.5);
}

export async function reviewCard(cardId: string, confidence: 0 | 1 | 2 | 3, userId?: string): Promise<void> {
  if (!userId) {
    const cards = await getFlashcards();
    const idx = cards.findIndex((c) => c.id === cardId);
    if (idx === -1) return;
    const card = cards[idx];
    const interval = INTERVALS_MS[confidence] * getMultiplier(card.confidence);
    const nextReview = new Date(Date.now() + interval).toISOString();
    cards[idx] = { ...card, confidence, nextReview };
    localStorage.setItem("flashcards", JSON.stringify(cards));
    return;
  }

  const { data } = await supabase()
    .from("flashcards")
    .select("confidence")
    .eq("id", cardId)
    .single();

  if (!data) return;

  const interval = INTERVALS_MS[confidence] * getMultiplier(data.confidence);
  const nextReview = new Date(Date.now() + interval).toISOString();

  await supabase()
    .from("flashcards")
    .update({ confidence, next_review: nextReview })
    .eq("id", cardId);
}

// ═══════════════════════════════════════════════════════════════════
// EXAM RESPONSE STORAGE
// ═══════════════════════════════════════════════════════════════════

export async function getExamResponses(userId?: string): Promise<ExamResponse[]> {
  if (!userId) {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("exam-responses");
      return raw ? (JSON.parse(raw) as ExamResponse[]) : [];
    } catch { return []; }
  }

  const { data, error } = await supabase()
    .from("exam_responses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    textSlug: row.text_slug as string,
    question: row.question as string,
    studentAnswer: row.student_answer as string,
    timeSpent: row.time_spent as number,
    ...(row.marking ? { marking: row.marking as ExamResponse["marking"] } : {}),
  }));
}

export async function saveExamResponse(response: ExamResponse, userId?: string): Promise<void> {
  if (!userId) {
    const all = await getExamResponses();
    all.push(response);
    localStorage.setItem("exam-responses", JSON.stringify(all));
    return;
  }

  await supabase().from("exam_responses").insert({
    id: response.id,
    user_id: userId,
    text_slug: response.textSlug,
    question: response.question,
    student_answer: response.studentAnswer,
    time_spent: response.timeSpent,
    marking: response.marking ?? null,
  });
}

export async function updateExamResponse(id: string, updates: Partial<ExamResponse>, userId?: string): Promise<void> {
  if (!userId) {
    const all = await getExamResponses();
    const idx = all.findIndex((r) => r.id === id);
    if (idx === -1) return;
    all[idx] = { ...all[idx], ...updates };
    localStorage.setItem("exam-responses", JSON.stringify(all));
    return;
  }

  // Build the Supabase update object with snake_case keys
  const dbUpdates: Record<string, unknown> = {};
  if (updates.textSlug !== undefined) dbUpdates.text_slug = updates.textSlug;
  if (updates.question !== undefined) dbUpdates.question = updates.question;
  if (updates.studentAnswer !== undefined) dbUpdates.student_answer = updates.studentAnswer;
  if (updates.timeSpent !== undefined) dbUpdates.time_spent = updates.timeSpent;
  if (updates.marking !== undefined) dbUpdates.marking = updates.marking;

  if (Object.keys(dbUpdates).length > 0) {
    await supabase().from("exam_responses").update(dbUpdates).eq("id", id);
  }
}

export async function getExamResponseById(id: string, userId?: string): Promise<ExamResponse | undefined> {
  if (!userId) {
    return (await getExamResponses()).find((r) => r.id === id);
  }

  const { data, error } = await supabase()
    .from("exam_responses")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return undefined;

  return {
    id: data.id as string,
    textSlug: data.text_slug as string,
    question: data.question as string,
    studentAnswer: data.student_answer as string,
    timeSpent: data.time_spent as number,
    ...(data.marking ? { marking: data.marking as ExamResponse["marking"] } : {}),
  };
}

export async function getExamResponsesByText(textSlug: string, userId?: string): Promise<ExamResponse[]> {
  if (!userId) {
    return (await getExamResponses()).filter((r) => r.textSlug === textSlug);
  }

  const { data, error } = await supabase()
    .from("exam_responses")
    .select("*")
    .eq("text_slug", textSlug);

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    textSlug: row.text_slug as string,
    question: row.question as string,
    studentAnswer: row.student_answer as string,
    timeSpent: row.time_spent as number,
    ...(row.marking ? { marking: row.marking as ExamResponse["marking"] } : {}),
  }));
}

// ═══════════════════════════════════════════════════════════════════
// VOCAB QUIZ SCORE STORAGE
// ═══════════════════════════════════════════════════════════════════

export async function getVocabScores(userId?: string): Promise<VocabQuizScore[]> {
  if (!userId) {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem("vocab-quiz-scores");
      return raw ? (JSON.parse(raw) as VocabQuizScore[]) : [];
    } catch { return []; }
  }

  const { data, error } = await supabase()
    .from("vocab_quiz_scores")
    .select("*")
    .order("date", { ascending: false })
    .limit(50);

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id as string,
    date: row.date as string,
    textSlug: row.text_slug as string,
    mode: row.mode as VocabQuizScore["mode"],
    total: row.total as number,
    correct: row.correct as number,
    missed: (row.missed ?? []) as string[],
  }));
}

export async function saveVocabScore(score: VocabQuizScore, userId?: string): Promise<void> {
  if (!userId) {
    const scores = await getVocabScores();
    scores.unshift(score);
    localStorage.setItem("vocab-quiz-scores", JSON.stringify(scores.slice(0, 50)));
    return;
  }

  await supabase().from("vocab_quiz_scores").insert({
    id: score.id,
    user_id: userId,
    date: score.date,
    text_slug: score.textSlug,
    mode: score.mode,
    total: score.total,
    correct: score.correct,
    missed: score.missed,
  });
}

// ═══════════════════════════════════════════════════════════════════
// USER PROFILE STORAGE
// ═══════════════════════════════════════════════════════════════════

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const { data, error } = await supabase()
    .from("user_profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error || !data) return null;

  return {
    firstName: data.first_name as string,
    yearGroup: data.year_group as UserProfile["yearGroup"],
    targetGrade: data.target_grade as UserProfile["targetGrade"],
    textSlugs: (data.text_slugs ?? []) as string[],
    createdAt: new Date(data.created_at).toISOString(),
    updatedAt: new Date(data.updated_at).toISOString(),
  };
}

export async function saveUserProfile(
  profile: Omit<UserProfile, "createdAt" | "updatedAt">,
  userId: string
): Promise<void> {
  await supabase().from("user_profiles").upsert({
    user_id: userId,
    first_name: profile.firstName,
    year_group: profile.yearGroup,
    target_grade: profile.targetGrade,
    text_slugs: profile.textSlugs,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id" });
}
