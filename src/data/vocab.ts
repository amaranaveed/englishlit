import { ALL_QUOTES } from "./quotes";
import type { KeyWord } from "./types";
import { getTextBySlug } from "./text-registry";

// ─── Vocab Term (enriched with source info) ───

export interface VocabTerm {
  id: string; // slug of the word
  word: string;
  def: string;
  textSlug: string;
  quoteId: number;
  section: string; // which section it came from
}

// ─── Extract ALL vocab terms from quote data ───

function slugify(word: string): string {
  return word.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function extractTerms(
  keywords: KeyWord[],
  textSlug: string,
  quoteId: number,
  section: string
): VocabTerm[] {
  return keywords.map((kw) => ({
    id: `${textSlug}-q${quoteId}-${slugify(kw.word)}`,
    word: kw.word,
    def: kw.def,
    textSlug,
    quoteId,
    section,
  }));
}

function buildAllTerms(): VocabTerm[] {
  const terms: VocabTerm[] = [];
  for (const q of ALL_QUOTES) {
    terms.push(...extractTerms(q.technique1.keyWords, q.textSlug, q.id, "Technique 1"));
    terms.push(...extractTerms(q.rad.keyWords, q.textSlug, q.id, "RAD"));
    terms.push(...extractTerms(q.technique2.keyWords, q.textSlug, q.id, "Technique 2"));
    terms.push(...extractTerms(q.context.keyWords, q.textSlug, q.id, "Context"));
    terms.push(...extractTerms(q.wow.keyWords, q.textSlug, q.id, "WOW"));
  }
  return terms;
}

const ALL_TERMS = buildAllTerms();

// ─── Queries ───

/** All vocab terms (may have duplicates across quotes) */
export function getAllVocabTerms(): VocabTerm[] {
  return ALL_TERMS;
}

/** Unique terms (deduplicated by word, keeps first occurrence) */
export function getUniqueVocabTerms(): VocabTerm[] {
  const seen = new Set<string>();
  const unique: VocabTerm[] = [];
  for (const t of ALL_TERMS) {
    const key = t.word.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(t);
    }
  }
  return unique;
}

/** Unique terms for a specific text */
export function getVocabTermsByText(textSlug: string): VocabTerm[] {
  const terms = ALL_TERMS.filter((t) => t.textSlug === textSlug);
  const seen = new Set<string>();
  const unique: VocabTerm[] = [];
  for (const t of terms) {
    const key = t.word.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(t);
    }
  }
  return unique;
}

/** Get text slugs that have vocab terms */
export function getVocabTextSlugs(): string[] {
  return Array.from(new Set(ALL_TERMS.map((t) => t.textSlug)));
}

/** Get text title from slug (convenience) */
export function getVocabTextTitle(slug: string): string {
  return getTextBySlug(slug)?.title ?? slug;
}

// ─── Quiz Score Storage ───

const STORAGE_KEY = "vocab-quiz-scores";

export interface VocabQuizScore {
  id: string;
  date: string;
  textSlug: string | "all";
  mode: "term-to-def" | "def-to-term";
  total: number;
  correct: number;
  missed: string[]; // word strings
}

export function getVocabScores(): VocabQuizScore[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as VocabQuizScore[]) : [];
  } catch {
    return [];
  }
}

export function saveVocabScore(score: VocabQuizScore): void {
  const scores = getVocabScores();
  scores.unshift(score);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores.slice(0, 50)));
}
