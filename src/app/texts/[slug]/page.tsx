import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getQuotesByText, getExamQuestions } from "@/data/quotes";
import { getTextOverview } from "@/data/text-overviews";
import { getCharactersByText, hasCharacterAnalysis } from "@/data/character-analysis";
import { hasMindMaps, getMindMapsByText } from "@/data/mindmaps";
import { hasThemeSheets, getThemeSheetsByText } from "@/data/theme-sheets";
import { hasWritersToolkit, getWritersToolkit } from "@/data/writers-toolkit";
import TextAOGuide from "@/components/TextAOGuide";

const SECTION_IMAGES: Record<string, string> = {
  "Paper 1-Section A": "/images/shakespeare-3d.png",
  "Paper 1-Section B": "/images/19th-century-banner.png",
  "Paper 2-Section A": "/images/modern-texts-banner.png",
  "Paper 2-Section B": "/images/poetry-banner.png",
  "Paper 2-Section C": "/images/unseen-poetry-banner.png",
};

/* Per-text banner overrides (slug → image) */
const TEXT_IMAGES: Record<string, string> = {
  "much-ado": "/images/much-ado-banner.png",
  "christmas-carol": "/images/christmas-carol-banner.png",
  "macbeth": "/images/macbeth-banner.png",
  "romeo-juliet": "/images/romeo-juliet-banner.png",
  "tempest": "/images/tempest-banner.png",
  "merchant-venice": "/images/merchant-venice-banner.png",
  "julius-caesar": "/images/julius-caesar-banner.png",
  "pride-prejudice": "/images/pride-prejudice-banner.png",
  "jekyll-hyde": "/images/jekyll-hyde-banner.png",
  "frankenstein": "/images/frankenstein-banner.png",
  "jane-eyre": "/images/jane-eyre-banner.png",
  "sign-of-four": "/images/sign-four-banner.png",
  "inspector-calls": "/images/inspector-calls-banner.png",
  "blood-brothers": "/images/blood-brothers-banner.png",
  "animal-farm": "/images/animal-farm-banner.png",
  "lord-of-flies": "/images/lord-flies-banner.png",
  "taste-of-honey": "/images/taste-honey-banner.png",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function TextOverviewPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const quotes = getQuotesByText(slug);
  const examQs = getExamQuestions(slug);
  const overview = getTextOverview(slug);
  const characters = getCharactersByText(slug);
  const hasCharacters = hasCharacterAnalysis(slug);
  const mindmaps = getMindMapsByText(slug);
  const hasMindMapData = hasMindMaps(slug);
  const themeSheets = getThemeSheetsByText(slug);
  const hasThemeSheetData = hasThemeSheets(slug);
  const hasToolkit = hasWritersToolkit(slug);
  const toolkit = hasToolkit ? getWritersToolkit(slug) : undefined;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb above banner (for custom image texts) */}
      {TEXT_IMAGES[slug] ? (
        <nav className="font-ui text-[13px] text-grey mb-3">
          <Link href="/texts" className="hover:text-foreground transition-colors">
            Texts
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground/70">{text.title}</span>
        </nav>
      ) : null}

      {/* Hero banner */}
      <div className="relative rounded-2xl overflow-hidden bg-[#1a1b3a]"
           style={{ marginBottom: TEXT_IMAGES[slug] ? '0.75rem' : '2rem' }}>
        <div className={`relative ${TEXT_IMAGES[slug] ? 'h-44 sm:h-52' : 'h-48 sm:h-56'}`}>
          <Image
            src={TEXT_IMAGES[slug] ?? SECTION_IMAGES[`${text.paper}-${text.section}`] ?? "/images/library.jpg"}
            alt={text.title}
            fill
            className="object-cover object-center"
            sizes="900px"
            priority
          />
          {!TEXT_IMAGES[slug] && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b3a]/60 via-transparent to-transparent" />
          )}
        </div>
        {!TEXT_IMAGES[slug] && (
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-10">
          <nav className="font-ui text-[13px] text-white/50 mb-3">
            <Link href="/texts" className="hover:text-white/80 transition-colors">
              Texts
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">{text.title}</span>
          </nav>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
            {text.title}
          </h1>
          <p className="font-ui text-[14px] text-white/60">
            {text.author}&ensp;·&ensp;{text.year}&ensp;·&ensp;{text.paper}{" "}
            {text.section}
          </p>
        </div>
        )}
      </div>

      {/* Title + author below banner (for custom image texts) */}
      {TEXT_IMAGES[slug] ? (
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
            {text.title}
          </h1>
          <p className="font-ui text-[14px] text-grey">
            {text.author}&ensp;·&ensp;{text.year}&ensp;·&ensp;{text.paper}{" "}
            {text.section}
          </p>
        </div>
      ) : null}

      {/* Action cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <Link
          href={`/texts/${slug}/quotes`}
          className="card-hover rounded-xl border border-border bg-surface p-6"
        >
          <span className="text-2xl mb-2 block">📖</span>
          <p className="font-display font-bold text-lg mb-1">
            6-Part Quote Analysis
          </p>
          <p className="text-sm text-grey font-ui">
            {quotes.length} quotes with full 6-part analysis
          </p>
        </Link>

        {hasCharacters && (
          <Link
            href={`/texts/${slug}/characters/${encodeURIComponent(characters[0].name)}`}
            className="card-hover rounded-xl border border-border bg-surface p-6"
          >
            <span className="text-2xl mb-2 block">🎭</span>
            <p className="font-display font-bold text-lg mb-1">
              Character Analysis
            </p>
            <p className="text-sm text-grey font-ui">
              {characters.length} characters with arcs, quotes &amp; exam tips
            </p>
          </Link>
        )}

        {hasMindMapData && (
          <Link
            href={`/texts/${slug}/mindmaps`}
            className="card-hover rounded-xl border border-border bg-surface p-6"
          >
            <span className="text-2xl mb-2 block">🧠</span>
            <p className="font-display font-bold text-lg mb-1">
              Mind Maps
            </p>
            <p className="text-sm text-grey font-ui">
              {mindmaps.length} printable A4 character mind maps
            </p>
          </Link>
        )}

        {hasThemeSheetData && (
          <Link
            href={`/texts/${slug}/themes`}
            className="card-hover rounded-xl border border-border bg-surface p-6"
          >
            <span className="text-2xl mb-2 block">📝</span>
            <p className="font-display font-bold text-lg mb-1">
              Theme Sheets
            </p>
            <p className="text-sm text-grey font-ui">
              {themeSheets.length} printable A4 theme analysis sheets
            </p>
          </Link>
        )}

        {hasToolkit && toolkit && (
          <Link
            href={`/texts/${slug}/writers-toolkit`}
            className="card-hover rounded-xl border border-border bg-surface p-6"
          >
            <span className="text-2xl mb-2 block">🛠️</span>
            <p className="font-display font-bold text-lg mb-1">
              Writer&rsquo;s Toolkit
            </p>
            <p className="text-sm text-grey font-ui">
              {toolkit.sections.length} sections &middot; {toolkit.sections.reduce((sum, s) => sum + s.rows.length, 0)} techniques &middot; A4 printable
            </p>
          </Link>
        )}

        <Link
          href="/exam"
          className="card-hover rounded-xl border border-border bg-surface p-6"
        >
          <span className="text-2xl mb-2 block">✍️</span>
          <p className="font-display font-bold text-lg mb-1">Exam Practice</p>
          <p className="text-sm text-grey font-ui">
            {examQs.length} practice questions with timed writing
          </p>
        </Link>

        {slug === "inspector-calls" && (
          <Link
            href={`/texts/${slug}/exam-prep`}
            className="card-hover rounded-xl border border-teal/30 bg-surface p-6 sm:col-span-2"
          >
            <span className="text-2xl mb-2 block">📋</span>
            <p className="font-display font-bold text-lg mb-1">
              Exam Preparation Kit
            </p>
            <p className="text-sm text-grey font-ui">
              Grade 9 example essays, annotated extracts, essay plans &amp; templates, practice questions &mdash; all printable
            </p>
          </Link>
        )}
      </div>

      {/* AO Guide */}
      <TextAOGuide textSlug={slug} textTitle={text.title} />

      {overview && (
        <>
          {/* Context summary */}
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3">Context</h2>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="font-body text-text leading-relaxed">
                {overview.contextSummary}
              </p>
            </div>
          </section>

          {/* Themes */}
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3">Key Themes</h2>
            <div className="flex flex-wrap gap-2">
              {overview.themes.map((theme) => (
                <Link
                  key={theme}
                  href={`/texts/${slug}/quotes?theme=${encodeURIComponent(theme)}`}
                  className="inline-block rounded-full bg-teal-light text-teal font-ui text-sm font-medium px-3 py-1 hover:bg-teal hover:text-white transition-colors"
                >
                  {theme}
                </Link>
              ))}
            </div>
          </section>

          {/* Characters */}
          <section className="mb-8">
            <h2 className="font-display text-xl font-bold mb-3">Characters</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {overview.characters.map((c) => {
                const hasAnalysis = characters.some((ca) => ca.name === c.name);
                const href = hasAnalysis
                  ? `/texts/${slug}/characters/${encodeURIComponent(c.name)}`
                  : `/texts/${slug}/quotes?who=${encodeURIComponent(c.name)}`;
                return (
                  <Link
                    key={c.name}
                    href={href}
                    className="card-hover rounded-xl border border-border bg-surface px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-ui font-semibold text-sm text-text">
                        {c.name}
                      </p>
                      {hasAnalysis && (
                        <span className="text-xs font-ui font-medium rounded-full bg-teal-light text-teal px-2 py-0.5">
                          Analysis
                        </span>
                      )}
                    </div>
                    <p className="font-ui text-xs text-grey mt-0.5">{c.role}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* Quick quote preview */}
      <section>
        <h2 className="font-display text-xl font-bold mb-3">Quotes</h2>
        <div className="space-y-2">
          {quotes.map((q) => (
            <Link
              key={q.id}
              href={`/texts/${slug}/quotes/${q.id}`}
              className="card-hover rounded-lg border border-border bg-surface px-4 py-3 flex items-center gap-3"
            >
              <span className="w-7 h-7 rounded-md bg-teal-light text-teal font-ui font-bold text-xs flex items-center justify-center shrink-0">
                {q.id}
              </span>
              <p className="font-body text-sm italic text-text truncate">
                &ldquo;{q.quote.length > 70 ? q.quote.slice(0, 70) + "…" : q.quote}&rdquo;
              </p>
              <span className="ml-auto text-xs text-grey font-ui shrink-0">
                {q.technique1.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
