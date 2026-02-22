import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getCharacterAnalysis, getCharactersByText } from "@/data/character-analysis";
import HighlightedText from "@/components/HighlightedText";
import GenerateCharacterFlashcardsButton from "@/components/GenerateCharacterFlashcardsButton";
import {
  AnimatedBreadcrumb, AnimatedDiv, AnimatedBadge, AnimatedSection,
  AnimatedListItem, StaggerGrid, AnimatedCard,
  AnimatedPill, AnimatedIcon, AnimatedWiggle, AnimatedRevealLine,
  AnimatedBlockquote, AnimatedInteractiveCard, AnimatedTimelineDot,
} from "@/components/AnimatedWrappers";

interface Props {
  params: Promise<{ slug: string; name: string }>;
}

const ARC_COLOURS: Record<string, string> = {
  "TRAGIC DECLINE": "bg-red-100 text-red-700",
  "TRAGIC COLLAPSE": "bg-red-100 text-red-700",
  "STATIC (CATALYSTS)": "bg-zinc-100 text-zinc-600",
  "STATIC (MORAL CATALYST)": "bg-zinc-100 text-zinc-600",
  "STATIC (SACRIFICIAL SYMBOL)": "bg-zinc-100 text-zinc-600",
  "MORAL STEADFASTNESS (CUT SHORT)": "bg-emerald-100 text-emerald-700",
  "RISING AVENGER": "bg-amber-100 text-amber-700",
  "STAGNATE (REFUSES CHANGE)": "bg-zinc-100 text-zinc-600",
  "MORAL AWAKENING": "bg-emerald-100 text-emerald-700",
  "PAINFUL AWAKENING": "bg-amber-100 text-amber-700",
  "PARTIAL AWAKENING (REVERTS)": "bg-amber-100 text-amber-700",
  "VICTIM (TOLD THROUGH OTHERS)": "bg-red-100 text-red-700",
};

export default async function CharacterDetailPage({ params }: Props) {
  const { slug, name } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const character = getCharacterAnalysis(slug, name);
  if (!character) notFound();

  const allCharacters = getCharactersByText(slug);
  const arcColour = ARC_COLOURS[character.arc.label] ?? "bg-teal-light text-teal";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0">
          <Link href="/englishlit/texts" className="hover:text-teal transition-colors">Texts</Link>
          <span className="mx-2">›</span>
          <Link href={`/englishlit/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
          <span className="mx-2">›</span>
          <span className="text-text font-medium">{character.name}</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Character nav pills */}
      <AnimatedDiv>
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {allCharacters.map((c) => (
            <AnimatedPill key={c.name}>
              <Link
                href={`/englishlit/texts/${slug}/characters/${encodeURIComponent(c.name)}`}
                className={`rounded-lg font-ui font-bold text-sm px-3 py-2 transition-colors ${
                  c.name === character.name
                    ? "bg-teal text-white"
                    : "bg-teal-light text-teal hover:bg-teal hover:text-white"
                }`}
              >
                {c.name}
              </Link>
            </AnimatedPill>
          ))}
        </div>
      </AnimatedDiv>

      {/* Name & overview */}
      <AnimatedDiv delay={0.1}>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            {character.name}
          </h1>
          <GenerateCharacterFlashcardsButton character={character} />
        </div>
      </AnimatedDiv>
      <AnimatedBadge>
        <span className={`inline-block rounded-full font-ui text-xs font-bold px-3 py-1 mb-4 ${arcColour}`}>
          {character.arc.label}
        </span>
      </AnimatedBadge>
      <AnimatedDiv delay={0.15}>
        <div className="rounded-xl border border-border bg-surface p-5 mb-8">
          <p className="font-body text-text leading-relaxed">
            <HighlightedText text={character.overview} />
          </p>
        </div>
      </AnimatedDiv>

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Themes */}
      <AnimatedSection>
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold mb-3">Key Themes</h2>
          <div className="space-y-2">
            {character.themes.map((theme, i) => (
              <AnimatedListItem key={theme.name} index={i}>
                <div className="rounded-xl border border-border bg-surface px-4 py-3">
                  <Link
                    href={`/englishlit/texts/${slug}/quotes?theme=${encodeURIComponent(theme.name)}`}
                    className="inline-block rounded-full bg-teal-light text-teal font-ui text-sm font-bold px-3 py-0.5 hover:bg-teal hover:text-white transition-colors mb-1"
                  >
                    {theme.name}
                  </Link>
                  <p className="font-body text-sm text-text leading-relaxed">
                    {theme.link}
                  </p>
                </div>
              </AnimatedListItem>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Character arc */}
      <AnimatedSection>
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold mb-3">Character Arc</h2>
          <div className="relative pl-6 border-l-2 border-teal/30 space-y-5">
            {character.arc.stages.map((stage, i) => (
              <AnimatedListItem key={i} index={i}>
                <div className="relative">
                  {/* Timeline dot */}
                  <AnimatedTimelineDot className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-teal ring-2 ring-bg" />
                  <div className="rounded-xl border border-border bg-surface px-4 py-3">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-ui font-bold text-sm text-teal">
                        {stage.act}
                      </span>
                      <span className="font-display font-semibold text-sm text-text">
                        {stage.title}
                      </span>
                    </div>
                    <p className="font-body text-sm text-text leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </AnimatedListItem>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Key quotes */}
      <AnimatedSection>
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold mb-3">Key Quotes</h2>
          <div className="space-y-4">
            {character.keyQuotes.map((kq, i) => (
              <AnimatedListItem key={i} index={i}>
                <div className="rounded-xl border border-border bg-surface p-5">
                  <AnimatedBlockquote className="font-body italic text-text border-l-4 border-teal pl-4 mb-2">
                    &ldquo;{kq.quote}&rdquo;
                  </AnimatedBlockquote>
                  <p className="font-ui text-xs text-grey mb-2">{kq.act}</p>
                  <p className="font-body text-sm text-text leading-relaxed mb-3">
                    <HighlightedText text={kq.analysis} />
                  </p>
                  {/* Theme connections */}
                  {kq.themes && kq.themes.length > 0 && (
                    <div className="border-t border-border pt-3 space-y-2">
                      <p className="font-ui text-xs font-bold text-grey uppercase tracking-wide">
                        Theme Links
                      </p>
                      {kq.themes.map((t) => (
                        <div key={t.name} className="flex gap-2 items-start">
                          <span className="shrink-0 rounded-full bg-teal-light text-teal font-ui text-xs font-bold px-2 py-0.5 mt-0.5">
                            {t.name}
                          </span>
                          <p className="font-body text-sm text-text leading-snug">
                            {t.link}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedListItem>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Symbols & Motifs */}
      {character.symbols && character.symbols.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection>
            <section className="mb-8">
              <h2 className="font-display text-xl font-bold mb-3">Symbols &amp; Motifs</h2>
              <div className="space-y-3">
                {character.symbols.map((sym, i) => (
                  <AnimatedListItem key={i} index={i}>
                    <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
                      <span className="font-ui font-bold text-sm text-orange-700">
                        {sym.symbol}
                      </span>
                      <p className="font-body text-sm text-text leading-relaxed mt-1">
                        <HighlightedText text={sym.meaning} />
                      </p>
                      <p className="font-ui text-xs text-grey mt-2 italic">
                        e.g. {sym.examples}
                      </p>
                    </div>
                  </AnimatedListItem>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </>
      )}

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Relationships */}
      <AnimatedSection>
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold mb-3">Key Relationships</h2>
          <div className="space-y-3">
            {character.relationships.map((rel, i) => (
              <AnimatedListItem key={i} index={i}>
                <div className="rounded-xl border border-border bg-surface px-4 py-3">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-display font-semibold text-sm text-text">
                      {rel.character}
                    </span>
                    <span className="text-xs font-ui font-medium rounded-full bg-purple-100 text-purple-700 px-2 py-0.5">
                      {rel.nature}
                    </span>
                  </div>
                  <p className="font-body text-sm text-text leading-relaxed">
                    <HighlightedText text={rel.analysis} />
                  </p>
                </div>
              </AnimatedListItem>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Speech Patterns */}
      {character.speechPatterns && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection>
            <section className="mb-8">
              <h2 className="font-display text-xl font-bold mb-3">Speech Patterns</h2>
              <div className="rounded-xl border border-pink-200 bg-pink-50 p-5">
                <p className="font-body text-sm text-text leading-relaxed">
                  <HighlightedText text={character.speechPatterns} />
                </p>
              </div>
            </section>
          </AnimatedSection>
        </>
      )}

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Writer's methods */}
      <AnimatedSection>
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold mb-3">Writer&rsquo;s Methods</h2>
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
            <p className="font-body text-sm text-text leading-relaxed">
              <HighlightedText text={character.writersMethods} />
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Alternative Interpretations */}
      {character.alternativeInterpretations && character.alternativeInterpretations.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection>
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="font-display text-xl font-bold">Alternative Interpretations</h2>
                <span className="text-xs font-ui font-bold rounded-full bg-red-100 text-red-700 px-2 py-0.5">
                  CRITICAL
                </span>
              </div>
              <div className="space-y-3">
                {character.alternativeInterpretations.map((ai, i) => (
                  <AnimatedListItem key={i} index={i}>
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                      <span className="font-display font-semibold text-sm text-text">
                        {ai.reading}
                      </span>
                      <p className="font-body text-sm text-text leading-relaxed mt-1">
                        <HighlightedText text={ai.evidence} />
                      </p>
                    </div>
                  </AnimatedListItem>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </>
      )}

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* WOW — Grade 7+ */}
      <AnimatedSection>
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-display text-xl font-bold">Grade 7+ Point</h2>
            <span className="text-xs font-ui font-bold rounded-full bg-amber-100 text-amber-700 px-2 py-0.5">
              WOW
            </span>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-body text-sm text-text leading-relaxed">
              <HighlightedText text={character.wow} />
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Key vocabulary */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Key Vocabulary</h2>
        <StaggerGrid className="grid sm:grid-cols-2 gap-2">
          {character.keyWords.map((kw) => (
            <AnimatedInteractiveCard
              key={kw.word}
              className="rounded-lg border border-border bg-surface px-4 py-2"
            >
              <span className="font-ui font-bold text-sm text-teal">{kw.word}</span>
              <p className="font-ui text-xs text-grey mt-0.5">{kw.def}</p>
            </AnimatedInteractiveCard>
          ))}
        </StaggerGrid>
      </section>

      {/* Context Links */}
      {character.contextLinks && character.contextLinks.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection>
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="font-display text-xl font-bold">Context Links</h2>
                <span className="text-xs font-ui font-bold rounded-full bg-green-100 text-green-700 px-2 py-0.5">
                  AO3
                </span>
              </div>
              <div className="space-y-3">
                {character.contextLinks.map((cl, i) => (
                  <AnimatedListItem key={i} index={i}>
                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                      <span className="font-ui font-bold text-sm text-green-700">
                        {cl.context}
                      </span>
                      <p className="font-body text-sm text-text leading-relaxed mt-1">
                        <HighlightedText text={cl.link} />
                      </p>
                    </div>
                  </AnimatedListItem>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </>
      )}

      <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />

      {/* Exam tip */}
      <AnimatedSection>
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="font-display text-xl font-bold">Exam Tip</h2>
            <span className="text-xs font-ui font-bold rounded-full bg-blue-100 text-blue-700 px-2 py-0.5">
              AO
            </span>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <p className="font-body text-sm text-text leading-relaxed">
              <HighlightedText text={character.examTip} />
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Back link */}
      <Link
        href={`/englishlit/texts/${slug}`}
        className="inline-block font-ui text-sm text-teal hover:underline"
      >
        ← Back to {text.title}
      </Link>
    </div>
  );
}
