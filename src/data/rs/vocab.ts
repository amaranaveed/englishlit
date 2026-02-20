import type { RSTerm, ScriptureQuote, DivergentView } from "./types";
import type { VocabTerm } from "../vocab";
import {
  CHRISTIANITY_BELIEFS_TERMS,
  CHRISTIANITY_BELIEFS_SCRIPTURE,
  CHRISTIANITY_BELIEFS_VIEWS,
} from "./terms-christianity-beliefs";
import {
  ISLAM_BELIEFS_TERMS,
  ISLAM_BELIEFS_SCRIPTURE,
  ISLAM_BELIEFS_VIEWS,
} from "./terms-islam-beliefs";
import {
  THEME_A_RELATIONSHIPS_TERMS,
  THEME_A_RELATIONSHIPS_SCRIPTURE,
  THEME_A_RELATIONSHIPS_VIEWS,
} from "./terms-theme-a-relationships";
import {
  THEME_B_RELIGION_LIFE_TERMS,
  THEME_B_RELIGION_LIFE_SCRIPTURE,
  THEME_B_RELIGION_LIFE_VIEWS,
} from "./terms-theme-b-religion-life";
import {
  THEME_C_EXISTENCE_GOD_TERMS,
  THEME_C_EXISTENCE_GOD_SCRIPTURE,
  THEME_C_EXISTENCE_GOD_VIEWS,
} from "./terms-theme-c-existence-god";
import {
  THEME_D_PEACE_CONFLICT_TERMS,
  THEME_D_PEACE_CONFLICT_SCRIPTURE,
  THEME_D_PEACE_CONFLICT_VIEWS,
} from "./terms-theme-d-peace-conflict";
import {
  THEME_E_CRIME_PUNISHMENT_TERMS,
  THEME_E_CRIME_PUNISHMENT_SCRIPTURE,
  THEME_E_CRIME_PUNISHMENT_VIEWS,
} from "./terms-theme-e-crime-punishment";
import {
  THEME_F_HUMAN_RIGHTS_TERMS,
  THEME_F_HUMAN_RIGHTS_SCRIPTURE,
  THEME_F_HUMAN_RIGHTS_VIEWS,
} from "./terms-theme-f-human-rights";

// ─── Aggregated RS Data ───

const ALL_RS_TERMS: RSTerm[] = [
  ...CHRISTIANITY_BELIEFS_TERMS,
  ...ISLAM_BELIEFS_TERMS,
  ...THEME_A_RELATIONSHIPS_TERMS,
  ...THEME_B_RELIGION_LIFE_TERMS,
  ...THEME_C_EXISTENCE_GOD_TERMS,
  ...THEME_D_PEACE_CONFLICT_TERMS,
  ...THEME_E_CRIME_PUNISHMENT_TERMS,
  ...THEME_F_HUMAN_RIGHTS_TERMS,
];

const ALL_RS_SCRIPTURE: ScriptureQuote[] = [
  ...CHRISTIANITY_BELIEFS_SCRIPTURE,
  ...ISLAM_BELIEFS_SCRIPTURE,
  ...THEME_A_RELATIONSHIPS_SCRIPTURE,
  ...THEME_B_RELIGION_LIFE_SCRIPTURE,
  ...THEME_C_EXISTENCE_GOD_SCRIPTURE,
  ...THEME_D_PEACE_CONFLICT_SCRIPTURE,
  ...THEME_E_CRIME_PUNISHMENT_SCRIPTURE,
  ...THEME_F_HUMAN_RIGHTS_SCRIPTURE,
];

const ALL_RS_VIEWS: DivergentView[] = [
  ...CHRISTIANITY_BELIEFS_VIEWS,
  ...ISLAM_BELIEFS_VIEWS,
  ...THEME_A_RELATIONSHIPS_VIEWS,
  ...THEME_B_RELIGION_LIFE_VIEWS,
  ...THEME_C_EXISTENCE_GOD_VIEWS,
  ...THEME_D_PEACE_CONFLICT_VIEWS,
  ...THEME_E_CRIME_PUNISHMENT_VIEWS,
  ...THEME_F_HUMAN_RIGHTS_VIEWS,
];

// ─── Terms ───

export function getAllRsTerms(): RSTerm[] {
  return ALL_RS_TERMS;
}

export function getRsTermsByTopic(topicSlug: string): RSTerm[] {
  return ALL_RS_TERMS.filter((t) => t.topicSlug === topicSlug);
}

export function getUniqueRsTerms(): RSTerm[] {
  const seen = new Set<string>();
  return ALL_RS_TERMS.filter((t) => {
    const key = t.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ─── Scripture ───

export function getAllRsScripture(): ScriptureQuote[] {
  return ALL_RS_SCRIPTURE;
}

export function getRsScriptureByTopic(topicSlug: string): ScriptureQuote[] {
  return ALL_RS_SCRIPTURE.filter((s) => s.topicSlug === topicSlug);
}

// ─── Divergent Views ───

export function getAllRsViews(): DivergentView[] {
  return ALL_RS_VIEWS;
}

export function getRsViewsByTopic(topicSlug: string): DivergentView[] {
  return ALL_RS_VIEWS.filter((v) => v.topicSlug === topicSlug);
}

// ─── Adapter: Convert RSTerm[] → VocabTerm[] for reuse with VocabQuiz ───

export function rsTermsToVocabTerms(terms: RSTerm[]): VocabTerm[] {
  return terms.map((t) => ({
    id: t.id,
    word: t.word,
    def: t.def,
    textSlug: `rs-${t.topicSlug}`,
    quoteId: 0,
    section: t.category,
  }));
}
