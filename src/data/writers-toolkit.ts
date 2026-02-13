// ─── Writer's Toolkit Aggregation ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";
import { INSPECTOR_CALLS_TOOLKIT } from "./writers-toolkit-inspector-calls";
import { MACBETH_TOOLKIT } from "./writers-toolkit-macbeth";
import { CHRISTMAS_CAROL_TOOLKIT } from "./writers-toolkit-christmas-carol";
import { MUCH_ADO_TOOLKIT } from "./writers-toolkit-much-ado";
import { ANIMAL_FARM_TOOLKIT } from "./writers-toolkit-animal-farm";
import { BLOOD_BROTHERS_TOOLKIT } from "./writers-toolkit-blood-brothers";
import { FRANKENSTEIN_TOOLKIT } from "./writers-toolkit-frankenstein";
import { GREAT_EXPECTATIONS_TOOLKIT } from "./writers-toolkit-great-expectations";
import { JANE_EYRE_TOOLKIT } from "./writers-toolkit-jane-eyre";
import { JEKYLL_HYDE_TOOLKIT } from "./writers-toolkit-jekyll-hyde";
import { JULIUS_CAESAR_TOOLKIT } from "./writers-toolkit-julius-caesar";
import { LORD_OF_FLIES_TOOLKIT } from "./writers-toolkit-lord-of-flies";
import { MERCHANT_VENICE_TOOLKIT } from "./writers-toolkit-merchant-venice";
import { PRIDE_PREJUDICE_TOOLKIT } from "./writers-toolkit-pride-prejudice";
import { ROMEO_JULIET_TOOLKIT } from "./writers-toolkit-romeo-juliet";
import { SIGN_OF_FOUR_TOOLKIT } from "./writers-toolkit-sign-of-four";
import { TASTE_OF_HONEY_TOOLKIT } from "./writers-toolkit-taste-of-honey";
import { TEMPEST_TOOLKIT } from "./writers-toolkit-tempest";

export type { WritersToolkit, ToolkitSection, ToolkitRow } from "./writers-toolkit-inspector-calls";

const ALL_TOOLKITS: WritersToolkit[] = [
  INSPECTOR_CALLS_TOOLKIT,
  MACBETH_TOOLKIT,
  CHRISTMAS_CAROL_TOOLKIT,
  MUCH_ADO_TOOLKIT,
  ANIMAL_FARM_TOOLKIT,
  BLOOD_BROTHERS_TOOLKIT,
  FRANKENSTEIN_TOOLKIT,
  GREAT_EXPECTATIONS_TOOLKIT,
  JANE_EYRE_TOOLKIT,
  JEKYLL_HYDE_TOOLKIT,
  JULIUS_CAESAR_TOOLKIT,
  LORD_OF_FLIES_TOOLKIT,
  MERCHANT_VENICE_TOOLKIT,
  PRIDE_PREJUDICE_TOOLKIT,
  ROMEO_JULIET_TOOLKIT,
  SIGN_OF_FOUR_TOOLKIT,
  TASTE_OF_HONEY_TOOLKIT,
  TEMPEST_TOOLKIT,
];

export function getWritersToolkit(slug: string): WritersToolkit | undefined {
  return ALL_TOOLKITS.find((t) => t.textSlug === slug);
}

export function hasWritersToolkit(slug: string): boolean {
  return ALL_TOOLKITS.some((t) => t.textSlug === slug);
}
