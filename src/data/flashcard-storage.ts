import type { Flashcard } from "./types";

const STORAGE_KEY = "flashcards";

// ─── Read / Write ───
export function getFlashcards(): Flashcard[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Flashcard[]) : [];
  } catch {
    return [];
  }
}

export function saveFlashcards(cards: Flashcard[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

// ─── Queries ───
export function getDueFlashcards(): Flashcard[] {
  const now = new Date().toISOString();
  return getFlashcards().filter((c) => c.nextReview <= now);
}

export function getDueCount(): number {
  return getDueFlashcards().length;
}

export function getFlashcardsByText(textSlug: string): Flashcard[] {
  return getFlashcards().filter((c) => c.textSlug === textSlug);
}

export function getFlashcardsByType(type: Flashcard["type"]): Flashcard[] {
  return getFlashcards().filter((c) => c.type === type);
}

// ─── Spaced Repetition ───
// Confidence: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy
// Intervals: Again = 1 min, Hard = 6 hrs, Good = 1 day × mult, Easy = 3 days × mult
// Multiplier grows with consecutive correct answers

const INTERVALS_MS = {
  0: 60 * 1000,                 // 1 minute
  1: 6 * 60 * 60 * 1000,       // 6 hours
  2: 24 * 60 * 60 * 1000,      // 1 day (base)
  3: 3 * 24 * 60 * 60 * 1000,  // 3 days (base)
} as const;

function getMultiplier(confidence: number): number {
  // Grows slightly with each consecutive success
  return Math.max(1, 1 + (confidence - 1) * 0.5);
}

export function reviewCard(cardId: string, confidence: 0 | 1 | 2 | 3): void {
  const cards = getFlashcards();
  const idx = cards.findIndex((c) => c.id === cardId);
  if (idx === -1) return;

  const card = cards[idx];
  const interval = INTERVALS_MS[confidence] * getMultiplier(card.confidence);
  const nextReview = new Date(Date.now() + interval).toISOString();

  cards[idx] = { ...card, confidence, nextReview };
  saveFlashcards(cards);
}

// ─── CRUD ───
export function deleteFlashcard(cardId: string): void {
  const cards = getFlashcards().filter((c) => c.id !== cardId);
  saveFlashcards(cards);
}

export function addFlashcard(card: Flashcard): void {
  const cards = getFlashcards();
  if (cards.some((c) => c.id === card.id)) return; // deduplicate
  cards.push(card);
  saveFlashcards(cards);
}
