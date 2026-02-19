import { describe, it, expect } from "vitest";
import { getAllGeoTerms, getUniqueGeoTerms, getGeoTermsByTopic, geoTermsToVocabTerms } from "./vocab";
import { getActiveTopics } from "./topic-registry";

describe("getAllGeoTerms", () => {
  it("returns an array of terms", () => {
    const terms = getAllGeoTerms();
    expect(Array.isArray(terms)).toBe(true);
    expect(terms.length).toBeGreaterThan(0);
  });

  it("each term has a word and definition", () => {
    for (const term of getAllGeoTerms().slice(0, 20)) {
      expect(term.word).toBeTruthy();
      expect(term.def).toBeTruthy();
    }
  });
});

describe("getUniqueGeoTerms", () => {
  it("has no duplicate words", () => {
    const terms = getUniqueGeoTerms();
    const words = terms.map((t) => t.word.toLowerCase());
    expect(new Set(words).size).toBe(words.length);
  });

  it("is <= total terms", () => {
    expect(getUniqueGeoTerms().length).toBeLessThanOrEqual(getAllGeoTerms().length);
  });
});

describe("getGeoTermsByTopic", () => {
  it("returns terms for an active topic", () => {
    const active = getActiveTopics();
    if (active.length === 0) return;
    const terms = getGeoTermsByTopic(active[0].slug);
    expect(Array.isArray(terms)).toBe(true);
  });

  it("returns empty for unknown topic", () => {
    expect(getGeoTermsByTopic("nonexistent-xyz")).toEqual([]);
  });
});

describe("geoTermsToVocabTerms", () => {
  it("converts geography terms to vocab format", () => {
    const geoTerms = getAllGeoTerms().slice(0, 5);
    const vocabTerms = geoTermsToVocabTerms(geoTerms);
    expect(vocabTerms.length).toBe(geoTerms.length);
    for (const vt of vocabTerms) {
      expect(vt.word).toBeTruthy();
      expect(vt.def).toBeTruthy();
    }
  });
});
