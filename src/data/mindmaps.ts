// ─── Mind Map Aggregation ───

import type { CharacterMindMap } from "./mindmaps-inspector-calls";
import { INSPECTOR_CALLS_MINDMAPS } from "./mindmaps-inspector-calls";
import { MUCH_ADO_MINDMAPS } from "./mindmaps-much-ado";
import { MACBETH_MINDMAPS } from "./mindmaps-macbeth";
import { CHRISTMAS_CAROL_MINDMAPS } from "./mindmaps-christmas-carol";
import { ROMEO_JULIET_MINDMAPS } from "./mindmaps-romeo-juliet";
import { JEKYLL_HYDE_MINDMAPS } from "./mindmaps-jekyll-hyde";
import { PRIDE_PREJUDICE_MINDMAPS } from "./mindmaps-pride-prejudice";
import { ANIMAL_FARM_MINDMAPS } from "./mindmaps-animal-farm";
import { LORD_OF_FLIES_MINDMAPS } from "./mindmaps-lord-of-flies";

export type { CharacterMindMap, MindMapTrait, MindMapQuotePoint, MindMapDramaticMoment } from "./mindmaps-inspector-calls";

const ALL_MINDMAPS: CharacterMindMap[] = [
  ...INSPECTOR_CALLS_MINDMAPS,
  ...MUCH_ADO_MINDMAPS,
  ...MACBETH_MINDMAPS,
  ...CHRISTMAS_CAROL_MINDMAPS,
  ...ROMEO_JULIET_MINDMAPS,
  ...JEKYLL_HYDE_MINDMAPS,
  ...PRIDE_PREJUDICE_MINDMAPS,
  ...ANIMAL_FARM_MINDMAPS,
  ...LORD_OF_FLIES_MINDMAPS,
];

export function getMindMapsByText(slug: string): CharacterMindMap[] {
  return ALL_MINDMAPS.filter((m) => m.textSlug === slug);
}

export function hasMindMaps(slug: string): boolean {
  return ALL_MINDMAPS.some((m) => m.textSlug === slug);
}
