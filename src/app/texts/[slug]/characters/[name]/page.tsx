import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getCharacterAnalysis, getCharactersByText } from "@/data/character-analysis";
import HighlightedText from "@/components/HighlightedText";
import GenerateCharacterFlashcardsButton from "@/components/GenerateCharacterFlashcardsButton";

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
      <nav className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0">
        <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
        <span className="mx-2">›</span>
        <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
        <span className="mx-2">›</span>
        <span className="text-text font-medium">{character.name}</span>
      </nav>

      {/* Character nav pills */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {allCharacters.map((c) => (
          <Link
            key={c.name}
            href={`/texts/${slug}/characters/${encodeURIComponent(c.name)}`}
            className={`rounded-lg font-ui font-bold text-sm px-3 py-2 transition-colors ${
              c.name === character.name
                ? "bg-teal text-white"
                : "bg-teal-light text-teal hover:bg-teal hover:text-white"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {/* Name & overview */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h1 className="font-display text-2xl sm:text-3xl font-bold">
          {character.name}
        </h1>
        <GenerateCharacterFlashcardsButton character={character} />
      </div>
      <span className={`inline-block rounded-full font-ui text-xs font-bold px-3 py-1 mb-4 ${arcColour}`}>
        {character.arc.label}
      </span>
      <div className="rounded-xl border border-border bg-surface p-5 mb-8">
        <p className="font-body text-text leading-relaxed">
          <HighlightedText text={character.overview} />
        </p>
      </div>

      {/* Themes */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Key Themes</h2>
        <div className="space-y-2">
          {character.themes.map((theme) => (
            <div key={theme.name} className="rounded-xl border border-border bg-surface px-4 py-3">
              <Link
                href={`/texts/${slug}/quotes?theme=${encodeURIComponent(theme.name)}`}
                className="inline-block rounded-full bg-teal-light text-teal font-ui text-sm font-bold px-3 py-0.5 hover:bg-teal hover:text-white transition-colors mb-1"
              >
                {theme.name}
              </Link>
              <p className="font-body text-sm text-text leading-relaxed">
                {theme.link}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Character arc */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Character Arc</h2>
        <div className="relative pl-6 border-l-2 border-teal/30 space-y-5">
          {character.arc.stages.map((stage, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-teal ring-2 ring-bg" />
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
          ))}
        </div>
      </section>

      {/* Key quotes */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Key Quotes</h2>
        <div className="space-y-4">
          {character.keyQuotes.map((kq, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-5">
              <blockquote className="font-body italic text-text border-l-4 border-teal pl-4 mb-2">
                &ldquo;{kq.quote}&rdquo;
              </blockquote>
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
          ))}
        </div>
      </section>

      {/* Relationships */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Key Relationships</h2>
        <div className="space-y-3">
          {character.relationships.map((rel, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface px-4 py-3">
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
          ))}
        </div>
      </section>

      {/* Writer's methods */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Writer&rsquo;s Methods</h2>
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
          <p className="font-body text-sm text-text leading-relaxed">
            <HighlightedText text={character.writersMethods} />
          </p>
        </div>
      </section>

      {/* WOW — Grade 7+ */}
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

      {/* Key vocabulary */}
      <section className="mb-8">
        <h2 className="font-display text-xl font-bold mb-3">Key Vocabulary</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {character.keyWords.map((kw) => (
            <div
              key={kw.word}
              className="rounded-lg border border-border bg-surface px-4 py-2"
            >
              <span className="font-ui font-bold text-sm text-teal">{kw.word}</span>
              <p className="font-ui text-xs text-grey mt-0.5">{kw.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam tip */}
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

      {/* Back link */}
      <Link
        href={`/texts/${slug}`}
        className="inline-block font-ui text-sm text-teal hover:underline"
      >
        ← Back to {text.title}
      </Link>
    </div>
  );
}
