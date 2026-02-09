import { Quote, ExamQuestion } from "./types";
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
];

export function getQuotesByText(textSlug: string): Quote[] {
  return ALL_QUOTES.filter((q) => q.textSlug === textSlug);
}

export function getQuoteById(textSlug: string, id: number): Quote | undefined {
  return ALL_QUOTES.find((q) => q.textSlug === textSlug && q.id === id);
}

// ─── Exam Questions ───
export const EXAM_QUESTIONS: ExamQuestion[] = [
  // Much Ado About Nothing
  { textSlug: "much-ado", question: "How does Shakespeare present the relationship between Beatrice and Benedick?" },
  { textSlug: "much-ado", question: "How does Shakespeare present ideas about honour and shame?" },
  { textSlug: "much-ado", question: "How does Shakespeare present attitudes to women and marriage?" },
  { textSlug: "much-ado", question: "How does Shakespeare use deception as a dramatic device?" },
  { textSlug: "much-ado", question: "How does Shakespeare present Beatrice as a powerful female character?" },
  { textSlug: "much-ado", question: "How does Shakespeare present the theme of appearance versus reality?" },
  // Pride and Prejudice
  { textSlug: "pride-prejudice", question: "How does Austen present the theme of pride?" },
  { textSlug: "pride-prejudice", question: "How does Austen present Elizabeth as an unconventional heroine?" },
  { textSlug: "pride-prejudice", question: "How does Austen present attitudes to marriage and social class?" },
  { textSlug: "pride-prejudice", question: "How does Austen present the relationship between Elizabeth and Darcy?" },
  { textSlug: "pride-prejudice", question: "How does Austen use irony to comment on Regency society?" },
  { textSlug: "pride-prejudice", question: "How does Austen present ideas about prejudice and self-knowledge?" },
  // Macbeth
  { textSlug: "macbeth", question: "How does Shakespeare present Macbeth as a tragic hero?" },
  { textSlug: "macbeth", question: "How does Shakespeare present the theme of ambition?" },
  { textSlug: "macbeth", question: "How does Shakespeare present Lady Macbeth as a powerful character?" },
  { textSlug: "macbeth", question: "How does Shakespeare present the theme of guilt?" },
  { textSlug: "macbeth", question: "How does Shakespeare use the supernatural to create dramatic tension?" },
  { textSlug: "macbeth", question: "How does Shakespeare present the relationship between Macbeth and Lady Macbeth?" },
  // A Christmas Carol
  { textSlug: "christmas-carol", question: "How does Dickens present Scrooge's transformation?" },
  { textSlug: "christmas-carol", question: "How does Dickens present the theme of social responsibility?" },
  { textSlug: "christmas-carol", question: "How does Dickens use the character of Tiny Tim?" },
  { textSlug: "christmas-carol", question: "How does Dickens criticise Victorian attitudes to the poor?" },
  { textSlug: "christmas-carol", question: "How does Dickens use the supernatural to convey his message?" },
  { textSlug: "christmas-carol", question: "How does Dickens present the importance of family and community?" },
  // An Inspector Calls
  { textSlug: "inspector-calls", question: "How does Priestley present the theme of social responsibility?" },
  { textSlug: "inspector-calls", question: "How does Priestley present the character of Mr Birling?" },
  { textSlug: "inspector-calls", question: "How does Priestley use the character of the Inspector?" },
  { textSlug: "inspector-calls", question: "How does Priestley present the differences between the older and younger generations?" },
  { textSlug: "inspector-calls", question: "How does Priestley present Sheila's development throughout the play?" },
  { textSlug: "inspector-calls", question: "How does Priestley explore ideas about class and gender?" },
  // Dr Jekyll and Mr Hyde
  { textSlug: "jekyll-hyde", question: "How does Stevenson present the theme of duality?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson create a sense of mystery and suspense?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson present Hyde as a frightening outsider?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson explore the theme of repression in Victorian society?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson use setting to reflect the duality of human nature?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson present the dangers of unchecked scientific ambition?" },
  // Romeo and Juliet
  { textSlug: "romeo-juliet", question: "How does Shakespeare present the theme of love in Romeo and Juliet?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare use the feud between the Montagues and Capulets?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare present Romeo as a tragic hero?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare present Juliet as a strong female character?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare explore the theme of fate and destiny?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare use light and dark imagery in the play?" },
  // The Tempest
  { textSlug: "tempest", question: "How does Shakespeare present Prospero as a complex character?" },
  { textSlug: "tempest", question: "How does Shakespeare explore the theme of power and control?" },
  { textSlug: "tempest", question: "How does Shakespeare present the relationship between Prospero and Caliban?" },
  { textSlug: "tempest", question: "How does Shakespeare explore ideas about colonialism and freedom?" },
  { textSlug: "tempest", question: "How does Shakespeare use magic and the supernatural in The Tempest?" },
  { textSlug: "tempest", question: "How does Shakespeare present the theme of forgiveness and reconciliation?" },
  // The Merchant of Venice
  { textSlug: "merchant-venice", question: "How does Shakespeare present Shylock as a complex character?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare explore the theme of justice and mercy?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare present attitudes to prejudice and discrimination?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare present Portia as a powerful female character?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare explore the relationship between wealth and love?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare use the casket plot to explore appearance vs reality?" },
  // Julius Caesar
  { textSlug: "julius-caesar", question: "How does Shakespeare present Brutus as a tragic hero?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare explore the theme of political power and ambition?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare present the power of rhetoric and persuasion?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare present the theme of loyalty and betrayal?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare explore the conflict between public duty and private conscience?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare use omens and the supernatural to create tension?" },
  // Great Expectations
  { textSlug: "great-expectations", question: "How does Dickens present Pip's moral development?" },
  { textSlug: "great-expectations", question: "How does Dickens explore the theme of social class and ambition?" },
  { textSlug: "great-expectations", question: "How does Dickens present Miss Havisham as a memorable character?" },
  { textSlug: "great-expectations", question: "How does Dickens explore the theme of guilt and redemption?" },
  { textSlug: "great-expectations", question: "How does Dickens use Magwitch to challenge ideas about class and criminality?" },
  { textSlug: "great-expectations", question: "How does Dickens present the relationship between wealth and moral character?" },
  // Frankenstein
  { textSlug: "frankenstein", question: "How does Shelley present Victor Frankenstein as a flawed protagonist?" },
  { textSlug: "frankenstein", question: "How does Shelley explore the theme of dangerous knowledge?" },
  { textSlug: "frankenstein", question: "How does Shelley present the Creature as a sympathetic character?" },
  { textSlug: "frankenstein", question: "How does Shelley explore the theme of isolation and alienation?" },
  { textSlug: "frankenstein", question: "How does Shelley use the Gothic to explore ideas about creation and responsibility?" },
  { textSlug: "frankenstein", question: "How does Shelley present the relationship between creator and creation?" },
  // Jane Eyre
  { textSlug: "jane-eyre", question: "How does Brontë present Jane as an independent and resilient character?" },
  { textSlug: "jane-eyre", question: "How does Brontë explore the theme of social class and inequality?" },
  { textSlug: "jane-eyre", question: "How does Brontë present the relationship between Jane and Rochester?" },
  { textSlug: "jane-eyre", question: "How does Brontë explore the theme of religion and morality?" },
  { textSlug: "jane-eyre", question: "How does Brontë use Gothic elements to create tension and meaning?" },
  { textSlug: "jane-eyre", question: "How does Brontë present attitudes to gender and women's independence?" },
  // The Sign of Four
  { textSlug: "sign-of-four", question: "How does Conan Doyle present Sherlock Holmes as an unconventional hero?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle explore the theme of justice and the law?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle use the narrative structure to create mystery?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle present attitudes to empire and colonialism?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle explore the theme of greed and its consequences?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle present the relationship between Holmes and Watson?" },
  // Blood Brothers
  { textSlug: "blood-brothers", question: "How does Russell present the theme of social class and inequality?" },
  { textSlug: "blood-brothers", question: "How does Russell use the character of Mrs Johnstone to explore ideas about motherhood?" },
  { textSlug: "blood-brothers", question: "How does Russell present the differences between Mickey and Edward?" },
  { textSlug: "blood-brothers", question: "How does Russell explore the theme of fate and superstition?" },
  { textSlug: "blood-brothers", question: "How does Russell use the Narrator to create dramatic tension?" },
  { textSlug: "blood-brothers", question: "How does Russell present the impact of unemployment and poverty?" },
  // Animal Farm
  { textSlug: "animal-farm", question: "How does Orwell present the theme of power and corruption?" },
  { textSlug: "animal-farm", question: "How does Orwell use the character of Napoleon to explore tyranny?" },
  { textSlug: "animal-farm", question: "How does Orwell present Boxer as a tragic figure?" },
  { textSlug: "animal-farm", question: "How does Orwell explore the role of propaganda and language in controlling others?" },
  { textSlug: "animal-farm", question: "How does Orwell present the failure of revolution and idealism?" },
  { textSlug: "animal-farm", question: "How does Orwell use allegory to comment on political systems?" },
  // Lord of the Flies
  { textSlug: "lord-of-flies", question: "How does Golding present the theme of civilisation versus savagery?" },
  { textSlug: "lord-of-flies", question: "How does Golding use the character of Jack to explore the desire for power?" },
  { textSlug: "lord-of-flies", question: "How does Golding present Ralph as a leader and symbol of order?" },
  { textSlug: "lord-of-flies", question: "How does Golding explore the theme of fear and the beast?" },
  { textSlug: "lord-of-flies", question: "How does Golding use Simon to explore ideas about good and evil?" },
  { textSlug: "lord-of-flies", question: "How does Golding present the island as a microcosm of society?" },
  // A Taste of Honey
  { textSlug: "taste-of-honey", question: "How does Delaney present the relationship between Jo and Helen?" },
  { textSlug: "taste-of-honey", question: "How does Delaney explore the theme of class and poverty?" },
  { textSlug: "taste-of-honey", question: "How does Delaney present attitudes to race and sexuality in 1950s Britain?" },
  { textSlug: "taste-of-honey", question: "How does Delaney present Jo as an unconventional female character?" },
  { textSlug: "taste-of-honey", question: "How does Delaney use Geof to challenge gender stereotypes?" },
  { textSlug: "taste-of-honey", question: "How does Delaney explore the theme of motherhood and neglect?" },
];

export function getExamQuestions(textSlug: string): ExamQuestion[] {
  return EXAM_QUESTIONS.filter((q) => q.textSlug === textSlug);
}
