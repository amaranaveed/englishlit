import { getActiveTexts, getTextBySlug } from "./text-registry";
import { ALL_QUOTES } from "./quotes";
import { ALL_CHARACTER_ANALYSES } from "./character-analysis";
import { getAllThemeSheets } from "./theme-sheets";
import { getUniqueVocabTerms } from "./vocab";
import { getActiveRsTopics } from "./rs/topic-registry";
import { getUniqueRsTerms, getAllRsScripture } from "./rs/vocab";

export type SearchCategory = "text" | "quote" | "character" | "theme" | "vocab" | "topic";

export interface SearchItem {
  category: SearchCategory;
  title: string;
  subtitle: string;
  href: string;
  searchText: string;
  textSlug: string;
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Texts
  for (const t of getActiveTexts()) {
    items.push({
      category: "text",
      title: t.title,
      subtitle: `${t.author} (${t.year}) — ${t.paper} ${t.section}`,
      href: `/englishlit/texts/${t.slug}`,
      searchText: `${t.title} ${t.author} ${t.year} ${t.paper} ${t.section}`.toLowerCase(),
      textSlug: t.slug,
    });
  }

  // Quotes
  for (const q of ALL_QUOTES) {
    const textTitle = getTextBySlug(q.textSlug)?.title ?? q.textSlug;
    items.push({
      category: "quote",
      title: q.quote.length > 80 ? `"${q.quote.slice(0, 80)}…"` : `"${q.quote}"`,
      subtitle: `${q.who} — ${textTitle}, ${q.act}`,
      href: `/englishlit/texts/${q.textSlug}/quotes/${q.id}`,
      searchText: `${q.quote} ${q.who} ${q.act} ${q.themes.join(" ")} ${textTitle}`.toLowerCase(),
      textSlug: q.textSlug,
    });
  }

  // Characters
  for (const c of ALL_CHARACTER_ANALYSES) {
    const textTitle = getTextBySlug(c.textSlug)?.title ?? c.textSlug;
    items.push({
      category: "character",
      title: c.name,
      subtitle: `${textTitle} — ${c.overview.length > 80 ? c.overview.slice(0, 80) + "…" : c.overview}`,
      href: `/englishlit/texts/${c.textSlug}/characters/${encodeURIComponent(c.name)}`,
      searchText: `${c.name} ${c.overview} ${textTitle}`.toLowerCase(),
      textSlug: c.textSlug,
    });
  }

  // Theme Sheets
  for (const ts of getAllThemeSheets()) {
    const textTitle = getTextBySlug(ts.textSlug)?.title ?? ts.textSlug;
    items.push({
      category: "theme",
      title: ts.theme,
      subtitle: `${textTitle} — ${ts.thesis.length > 80 ? ts.thesis.slice(0, 80) + "…" : ts.thesis}`,
      href: `/englishlit/texts/${ts.textSlug}/themes`,
      searchText: `${ts.theme} ${ts.thesis} ${textTitle}`.toLowerCase(),
      textSlug: ts.textSlug,
    });
  }

  // Vocab
  for (const v of getUniqueVocabTerms()) {
    items.push({
      category: "vocab",
      title: v.word,
      subtitle: v.def.length > 80 ? v.def.slice(0, 80) + "…" : v.def,
      href: "/englishlit/vocab",
      searchText: `${v.word} ${v.def} ${getTextBySlug(v.textSlug)?.title ?? v.textSlug}`.toLowerCase(),
      textSlug: v.textSlug,
    });
  }

  // RS Topics
  for (const t of getActiveRsTopics()) {
    items.push({
      category: "topic",
      title: t.title,
      subtitle: `Religious Studies — ${t.paper} ${t.section}`,
      href: `/rs/topics/${t.slug}`,
      searchText: `${t.title} religious studies rs ${t.paper} ${t.section}`.toLowerCase(),
      textSlug: `rs-${t.slug}`,
    });
  }

  // RS Terms
  for (const t of getUniqueRsTerms()) {
    items.push({
      category: "vocab",
      title: t.word,
      subtitle: t.def.length > 80 ? t.def.slice(0, 80) + "…" : t.def,
      href: "/rs/key-terms",
      searchText: `${t.word} ${t.def} religious studies rs`.toLowerCase(),
      textSlug: `rs-${t.topicSlug}`,
    });
  }

  // RS Scripture
  for (const s of getAllRsScripture()) {
    items.push({
      category: "quote",
      title: s.text.length > 80 ? `"${s.text.slice(0, 80)}…"` : `"${s.text}"`,
      subtitle: `${s.source} — ${s.religion === "christianity" ? "Christianity" : "Islam"}`,
      href: `/rs/topics/${s.topicSlug}`,
      searchText: `${s.text} ${s.source} ${s.religion} scripture religious studies`.toLowerCase(),
      textSlug: `rs-${s.topicSlug}`,
    });
  }

  return items;
}

let _index: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (!_index) _index = buildIndex();
  return _index;
}
