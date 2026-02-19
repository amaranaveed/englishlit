import { describe, it, expect, beforeEach } from "vitest";
import { getFlashcards, getExamResponses, getVocabScores, getHomeStats } from "./storage";

// These tests run without a userId, so they use localStorage (jsdom)

beforeEach(() => {
  localStorage.clear();
});

describe("getFlashcards (localStorage)", () => {
  it("returns empty array when no data", async () => {
    const cards = await getFlashcards();
    expect(cards).toEqual([]);
  });

  it("returns stored flashcards", async () => {
    const mock = [{ id: "1", type: "quote", textSlug: "macbeth", front: "Q", back: "A", confidence: 0, nextReview: new Date().toISOString(), createdAt: new Date().toISOString() }];
    localStorage.setItem("flashcards", JSON.stringify(mock));
    const cards = await getFlashcards();
    expect(cards.length).toBe(1);
    expect(cards[0].id).toBe("1");
  });
});

describe("getExamResponses (localStorage)", () => {
  it("returns empty array when no data", async () => {
    const responses = await getExamResponses();
    expect(responses).toEqual([]);
  });

  it("returns stored responses", async () => {
    const mock = [{ id: "r1", textSlug: "macbeth", question: "Q?", studentAnswer: "A", timeSpent: 300 }];
    localStorage.setItem("exam-responses", JSON.stringify(mock));
    const responses = await getExamResponses();
    expect(responses.length).toBe(1);
    expect(responses[0].id).toBe("r1");
  });
});

describe("getVocabScores (localStorage)", () => {
  it("returns empty array when no data", async () => {
    const scores = await getVocabScores();
    expect(scores).toEqual([]);
  });
});

describe("getHomeStats (localStorage)", () => {
  it("returns zeroes when no data", async () => {
    const stats = await getHomeStats();
    expect(stats).toEqual({ due: 0, totalCards: 0, essays: 0, marked: 0, vocabBest: 0 });
  });

  it("counts flashcards and exams correctly", async () => {
    const now = new Date();
    const past = new Date(now.getTime() - 100000).toISOString();
    const future = new Date(now.getTime() + 100000).toISOString();

    localStorage.setItem("flashcards", JSON.stringify([
      { id: "1", type: "quote", textSlug: "x", front: "F", back: "B", confidence: 0, nextReview: past, createdAt: past },
      { id: "2", type: "quote", textSlug: "x", front: "F", back: "B", confidence: 0, nextReview: future, createdAt: past },
    ]));
    localStorage.setItem("exam-responses", JSON.stringify([
      { id: "e1", textSlug: "x", question: "Q", studentAnswer: "A", timeSpent: 60 },
      { id: "e2", textSlug: "x", question: "Q", studentAnswer: "A", timeSpent: 60, marking: { grade: 7 } },
    ]));

    const stats = await getHomeStats();
    expect(stats.totalCards).toBe(2);
    expect(stats.due).toBe(1);
    expect(stats.essays).toBe(2);
    expect(stats.marked).toBe(1);
  });
});
