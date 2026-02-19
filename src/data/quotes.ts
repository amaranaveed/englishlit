import { Quote } from "./types";
import { MUCH_ADO_QUOTES } from "./quotes-much-ado";
import { PRIDE_PREJUDICE_QUOTES } from "./quotes-pride-prejudice";
import { MACBETH_QUOTES } from "./quotes-macbeth";
import { CHRISTMAS_CAROL_QUOTES } from "./quotes-christmas-carol";
import { INSPECTOR_CALLS_QUOTES } from "./quotes-inspector-calls";
import { JEKYLL_HYDE_QUOTES } from "./quotes-jekyll-hyde";
import { ROMEO_JULIET_QUOTES } from "./quotes-romeo-juliet";
import { TEMPEST_QUOTES } from "./quotes-tempest";
import { MERCHANT_VENICE_QUOTES } from "./quotes-merchant-venice";
import { JULIUS_CAESAR_QUOTES } from "./quotes-julius-caesar";
import { GREAT_EXPECTATIONS_QUOTES } from "./quotes-great-expectations";
import { FRANKENSTEIN_QUOTES } from "./quotes-frankenstein";
import { JANE_EYRE_QUOTES } from "./quotes-jane-eyre";
import { SIGN_OF_FOUR_QUOTES } from "./quotes-sign-of-four";
import { BLOOD_BROTHERS_QUOTES } from "./quotes-blood-brothers";
import { ANIMAL_FARM_QUOTES } from "./quotes-animal-farm";
import { LORD_OF_FLIES_QUOTES } from "./quotes-lord-of-flies";
import { TASTE_OF_HONEY_QUOTES } from "./quotes-taste-of-honey";
import { POWER_CONFLICT_QUOTES } from "./quotes-power-conflict";
import { LOVE_RELATIONSHIPS_QUOTES } from "./quotes-love-relationships";
import { WORLDS_LIVES_QUOTES } from "./quotes-worlds-lives";
import { UNSEEN_POETRY_QUOTES } from "./quotes-unseen-poetry";

// ─── All Quotes (combined) ───
export const ALL_QUOTES: Quote[] = [
  ...MUCH_ADO_QUOTES,
  ...PRIDE_PREJUDICE_QUOTES,
  ...MACBETH_QUOTES,
  ...CHRISTMAS_CAROL_QUOTES,
  ...INSPECTOR_CALLS_QUOTES,
  ...JEKYLL_HYDE_QUOTES,
  ...ROMEO_JULIET_QUOTES,
  ...TEMPEST_QUOTES,
  ...MERCHANT_VENICE_QUOTES,
  ...JULIUS_CAESAR_QUOTES,
  ...GREAT_EXPECTATIONS_QUOTES,
  ...FRANKENSTEIN_QUOTES,
  ...JANE_EYRE_QUOTES,
  ...SIGN_OF_FOUR_QUOTES,
  ...BLOOD_BROTHERS_QUOTES,
  ...ANIMAL_FARM_QUOTES,
  ...LORD_OF_FLIES_QUOTES,
  ...TASTE_OF_HONEY_QUOTES,
  ...POWER_CONFLICT_QUOTES,
  ...LOVE_RELATIONSHIPS_QUOTES,
  ...WORLDS_LIVES_QUOTES,
  ...UNSEEN_POETRY_QUOTES,
];

export function getQuotesByText(textSlug: string): Quote[] {
  return ALL_QUOTES.filter((q) => q.textSlug === textSlug);
}

export function getQuoteById(textSlug: string, id: number): Quote | undefined {
  return ALL_QUOTES.find((q) => q.textSlug === textSlug && q.id === id);
}
