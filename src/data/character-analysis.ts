// ─── Character Analysis Aggregation ───

import type { CharacterAnalysis } from "./types";
import { MACBETH_CHARACTERS } from "./character-analysis-macbeth";
import { INSPECTOR_CALLS_CHARACTERS } from "./character-analysis-inspector-calls";

export const ALL_CHARACTER_ANALYSES: CharacterAnalysis[] = [
  ...MACBETH_CHARACTERS,
  ...INSPECTOR_CALLS_CHARACTERS,
];

/** Get all character analyses for a given text slug */
export function getCharactersByText(slug: string): CharacterAnalysis[] {
  return ALL_CHARACTER_ANALYSES.filter((c) => c.textSlug === slug);
}

/** Get a single character analysis by text slug and character name */
export function getCharacterAnalysis(
  slug: string,
  name: string,
): CharacterAnalysis | undefined {
  const decoded = decodeURIComponent(name);
  return ALL_CHARACTER_ANALYSES.find(
    (c) => c.textSlug === slug && c.name === decoded,
  );
}

/** Check if character analysis data exists for a text */
export function hasCharacterAnalysis(slug: string): boolean {
  return ALL_CHARACTER_ANALYSES.some((c) => c.textSlug === slug);
}
