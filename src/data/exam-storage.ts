import type { ExamResponse } from "./types";

const STORAGE_KEY = "exam-responses";

export function getExamResponses(): ExamResponse[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ExamResponse[]) : [];
  } catch {
    return [];
  }
}

export function saveExamResponse(response: ExamResponse): void {
  const all = getExamResponses();
  all.push(response);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function updateExamResponse(id: string, updates: Partial<ExamResponse>): void {
  const all = getExamResponses();
  const idx = all.findIndex((r) => r.id === id);
  if (idx === -1) return;
  all[idx] = { ...all[idx], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function getExamResponseById(id: string): ExamResponse | undefined {
  return getExamResponses().find((r) => r.id === id);
}

export function getExamResponsesByText(textSlug: string): ExamResponse[] {
  return getExamResponses().filter((r) => r.textSlug === textSlug);
}
