"use client";

import { useCallback } from "react";
import { useAuth } from "@/components/AuthProvider";
import * as storage from "@/lib/storage";
import type { Flashcard, ExamResponse } from "@/data/types";
import type { VocabQuizScore } from "@/data/vocab";

export function useStorage() {
  const { user } = useAuth();
  const userId = user?.id;

  return {
    // Flashcards
    getFlashcards: useCallback(() => storage.getFlashcards(userId), [userId]),
    saveFlashcards: useCallback((cards: Flashcard[]) => storage.saveFlashcards(cards, userId), [userId]),
    addFlashcard: useCallback((card: Flashcard) => storage.addFlashcard(card, userId), [userId]),
    deleteFlashcard: useCallback((id: string) => storage.deleteFlashcard(id, userId), [userId]),
    getDueFlashcards: useCallback(() => storage.getDueFlashcards(userId), [userId]),
    getDueCount: useCallback(() => storage.getDueCount(userId), [userId]),
    getFlashcardsByText: useCallback((slug: string) => storage.getFlashcardsByText(slug, userId), [userId]),
    getFlashcardsByType: useCallback((type: Flashcard["type"]) => storage.getFlashcardsByType(type, userId), [userId]),
    reviewCard: useCallback((id: string, confidence: 0 | 1 | 2 | 3) => storage.reviewCard(id, confidence, userId), [userId]),

    // Exam responses
    getExamResponses: useCallback(() => storage.getExamResponses(userId), [userId]),
    saveExamResponse: useCallback((r: ExamResponse) => storage.saveExamResponse(r, userId), [userId]),
    updateExamResponse: useCallback((id: string, updates: Partial<ExamResponse>) => storage.updateExamResponse(id, updates, userId), [userId]),
    getExamResponseById: useCallback((id: string) => storage.getExamResponseById(id, userId), [userId]),
    getExamResponsesByText: useCallback((slug: string) => storage.getExamResponsesByText(slug, userId), [userId]),

    // Vocab scores
    getVocabScores: useCallback(() => storage.getVocabScores(userId), [userId]),
    saveVocabScore: useCallback((s: VocabQuizScore) => storage.saveVocabScore(s, userId), [userId]),
  };
}
