// ─── Theme Sheet Aggregation ───

import type { ThemeSheet } from "./types";
import { ANIMAL_FARM_THEME_SHEETS } from "./theme-sheets-animal-farm";
import { BLOOD_BROTHERS_THEME_SHEETS } from "./theme-sheets-blood-brothers";
import { CHRISTMAS_CAROL_THEME_SHEETS } from "./theme-sheets-christmas-carol";
import { FRANKENSTEIN_THEME_SHEETS } from "./theme-sheets-frankenstein";
import { GREAT_EXPECTATIONS_THEME_SHEETS } from "./theme-sheets-great-expectations";
import { INSPECTOR_CALLS_THEME_SHEETS } from "./theme-sheets-inspector-calls";
import { JANE_EYRE_THEME_SHEETS } from "./theme-sheets-jane-eyre";
import { JEKYLL_HYDE_THEME_SHEETS } from "./theme-sheets-jekyll-hyde";
import { JULIUS_CAESAR_THEME_SHEETS } from "./theme-sheets-julius-caesar";
import { LORD_OF_FLIES_THEME_SHEETS } from "./theme-sheets-lord-of-flies";
import { MACBETH_THEME_SHEETS } from "./theme-sheets-macbeth";
import { MERCHANT_VENICE_THEME_SHEETS } from "./theme-sheets-merchant-venice";
import { MUCH_ADO_THEME_SHEETS } from "./theme-sheets-much-ado";
import { PRIDE_PREJUDICE_THEME_SHEETS } from "./theme-sheets-pride-prejudice";
import { ROMEO_JULIET_THEME_SHEETS } from "./theme-sheets-romeo-juliet";
import { SIGN_OF_FOUR_THEME_SHEETS } from "./theme-sheets-sign-of-four";
import { TASTE_OF_HONEY_THEME_SHEETS } from "./theme-sheets-taste-of-honey";
import { TEMPEST_THEME_SHEETS } from "./theme-sheets-tempest";

const ALL_THEME_SHEETS: ThemeSheet[] = [
  ...ANIMAL_FARM_THEME_SHEETS,
  ...BLOOD_BROTHERS_THEME_SHEETS,
  ...CHRISTMAS_CAROL_THEME_SHEETS,
  ...FRANKENSTEIN_THEME_SHEETS,
  ...GREAT_EXPECTATIONS_THEME_SHEETS,
  ...INSPECTOR_CALLS_THEME_SHEETS,
  ...JANE_EYRE_THEME_SHEETS,
  ...JEKYLL_HYDE_THEME_SHEETS,
  ...JULIUS_CAESAR_THEME_SHEETS,
  ...LORD_OF_FLIES_THEME_SHEETS,
  ...MACBETH_THEME_SHEETS,
  ...MERCHANT_VENICE_THEME_SHEETS,
  ...MUCH_ADO_THEME_SHEETS,
  ...PRIDE_PREJUDICE_THEME_SHEETS,
  ...ROMEO_JULIET_THEME_SHEETS,
  ...SIGN_OF_FOUR_THEME_SHEETS,
  ...TASTE_OF_HONEY_THEME_SHEETS,
  ...TEMPEST_THEME_SHEETS,
];

export function getThemeSheetsByText(slug: string): ThemeSheet[] {
  return ALL_THEME_SHEETS.filter((s) => s.textSlug === slug);
}

export function hasThemeSheets(slug: string): boolean {
  return ALL_THEME_SHEETS.some((s) => s.textSlug === slug);
}
