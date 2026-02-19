import type { GeographyTerm, CaseStudy } from "./types";
import type { VocabTerm } from "../vocab";
import { RIVER_TERMS, RIVER_CASE_STUDIES } from "./terms-rivers";
import { COAST_TERMS, COAST_CASE_STUDIES } from "./terms-coasts";
import { NATURAL_HAZARDS_TERMS, NATURAL_HAZARDS_CASE_STUDIES } from "./terms-natural-hazards";
import { URBAN_ISSUES_TERMS, URBAN_ISSUES_CASE_STUDIES } from "./terms-urban-issues";

// ─── Aggregated Geography Data ───

const ALL_GEO_TERMS: GeographyTerm[] = [
  ...RIVER_TERMS,
  ...COAST_TERMS,
  ...NATURAL_HAZARDS_TERMS,
  ...URBAN_ISSUES_TERMS,
];

const ALL_GEO_CASE_STUDIES: CaseStudy[] = [
  ...RIVER_CASE_STUDIES,
  ...COAST_CASE_STUDIES,
  ...NATURAL_HAZARDS_CASE_STUDIES,
  ...URBAN_ISSUES_CASE_STUDIES,
];

export function getAllGeoTerms(): GeographyTerm[] {
  return ALL_GEO_TERMS;
}

export function getGeoTermsByTopic(topicSlug: string): GeographyTerm[] {
  return ALL_GEO_TERMS.filter((t) => t.topicSlug === topicSlug);
}

export function getUniqueGeoTerms(): GeographyTerm[] {
  const seen = new Set<string>();
  return ALL_GEO_TERMS.filter((t) => {
    const key = t.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getAllGeoCaseStudies(): CaseStudy[] {
  return ALL_GEO_CASE_STUDIES;
}

export function getGeoCaseStudiesByTopic(topicSlug: string): CaseStudy[] {
  return ALL_GEO_CASE_STUDIES.filter((cs) => cs.topicSlug === topicSlug);
}

// ─── Adapter: Convert GeographyTerm[] → VocabTerm[] for reuse with VocabQuiz ───

export function getGeoCaseStudyById(id: string): CaseStudy | undefined {
  return ALL_GEO_CASE_STUDIES.find((cs) => cs.id === id);
}

export function geoTermsToVocabTerms(terms: GeographyTerm[]): VocabTerm[] {
  return terms.map((t) => ({
    id: t.id,
    word: t.word,
    def: t.def,
    textSlug: `geo-${t.topicSlug}`,
    quoteId: 0,
    section: t.category,
  }));
}
