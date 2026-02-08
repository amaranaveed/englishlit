import { Quote, ExamQuestion } from "./types";
import { MUCH_ADO_QUOTES } from "./quotes-much-ado";
import { PRIDE_PREJUDICE_QUOTES } from "./quotes-pride-prejudice";

// ─── All Quotes (combined) ───
export const ALL_QUOTES: Quote[] = [...MUCH_ADO_QUOTES, ...PRIDE_PREJUDICE_QUOTES];

export function getQuotesByText(textSlug: string): Quote[] {
  return ALL_QUOTES.filter((q) => q.textSlug === textSlug);
}

export function getQuoteById(textSlug: string, id: number): Quote | undefined {
  return ALL_QUOTES.find((q) => q.textSlug === textSlug && q.id === id);
}

// ─── Exam Questions ───
export const EXAM_QUESTIONS: ExamQuestion[] = [
  // Much Ado About Nothing
  { textSlug: "much-ado", question: "How does Shakespeare present the relationship between Beatrice and Benedick?" },
  { textSlug: "much-ado", question: "How does Shakespeare present ideas about honour and shame?" },
  { textSlug: "much-ado", question: "How does Shakespeare present attitudes to women and marriage?" },
  { textSlug: "much-ado", question: "How does Shakespeare use deception as a dramatic device?" },
  { textSlug: "much-ado", question: "How does Shakespeare present Beatrice as a powerful female character?" },
  { textSlug: "much-ado", question: "How does Shakespeare present the theme of appearance versus reality?" },
  // Pride and Prejudice
  { textSlug: "pride-prejudice", question: "How does Austen present the theme of pride?" },
  { textSlug: "pride-prejudice", question: "How does Austen present Elizabeth as an unconventional heroine?" },
  { textSlug: "pride-prejudice", question: "How does Austen present attitudes to marriage and social class?" },
  { textSlug: "pride-prejudice", question: "How does Austen present the relationship between Elizabeth and Darcy?" },
  { textSlug: "pride-prejudice", question: "How does Austen use irony to comment on Regency society?" },
  { textSlug: "pride-prejudice", question: "How does Austen present ideas about prejudice and self-knowledge?" },
];

export function getExamQuestions(textSlug: string): ExamQuestion[] {
  return EXAM_QUESTIONS.filter((q) => q.textSlug === textSlug);
}
