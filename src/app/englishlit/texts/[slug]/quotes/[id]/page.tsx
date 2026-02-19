import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getQuoteById, getQuotesByText } from "@/data/quotes";
import {
  KeyQuoteSection,
  TechniqueSection,
  RADSection,
  ContextSection,
  WOWSection,
} from "@/components/QuoteSections";
import GenerateFlashcardsButton from "@/components/GenerateFlashcardsButton";
import {
  AnimatedBreadcrumb,
  AnimatedDiv,
  AnimatedSection,
  AnimatedPill,
  AnimatedIcon,
  AnimatedWiggle,
  AnimatedRevealLine,
  AnimatedSlideRight,
} from "@/components/AnimatedWrappers";

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export default async function QuoteDetailPage({ params }: Props) {
  const { slug, id } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const quote = getQuoteById(slug, parseInt(id, 10));
  if (!quote) notFound();

  const allQuotes = getQuotesByText(slug);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0">
          <Link href="/englishlit/texts" className="hover:text-teal transition-colors">Texts</Link>
          <span className="mx-2">›</span>
          <Link href={`/englishlit/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
          <span className="mx-2">›</span>
          <Link href={`/englishlit/texts/${slug}/quotes`} className="hover:text-teal transition-colors">Quotes</Link>
          <span className="mx-2">›</span>
          <span className="text-text font-medium">Quote {quote.id}</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Quote nav pills */}
      <AnimatedDiv>
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {allQuotes.map((q) => (
            <AnimatedPill key={q.id}>
              <Link
                href={`/englishlit/texts/${slug}/quotes/${q.id}`}
                className={`w-9 h-9 rounded-lg font-ui font-bold text-sm flex items-center justify-center transition-colors ${
                  q.id === quote.id
                    ? "bg-teal text-white"
                    : "bg-teal-light text-teal hover:bg-teal hover:text-white"
                }`}
              >
                {q.id}
              </Link>
            </AnimatedPill>
          ))}
          <div className="ml-auto">
            <GenerateFlashcardsButton quote={quote} />
          </div>
        </div>
      </AnimatedDiv>

      {/* Theme badges */}
      {quote.themes && quote.themes.length > 0 && (
        <AnimatedDiv delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="font-ui text-sm font-semibold text-grey mr-1">Themes:</span>
            {quote.themes.map((theme) => (
              <span
                key={theme}
                className="px-3 py-1 rounded-full bg-teal-light text-teal font-ui text-sm font-medium"
              >
                {theme}
              </span>
            ))}
          </div>
        </AnimatedDiv>
      )}

      {/* 6-part analysis */}
      <AnimatedSection delay={0}>
        <KeyQuoteSection
          text={quote.keyQuote.text}
          who={quote.who}
          act={quote.act}
          note={quote.keyQuote.note}
          highlight={quote.keyQuote.highlight}
        />
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 my-2" delay={0.05} />

      <AnimatedSection delay={0.1}>
        <TechniqueSection
          step={2}
          title={quote.technique1.title}
          analysis={quote.technique1.analysis}
          secondPoint={quote.technique1.secondPoint}
          keyWords={quote.technique1.keyWords}
          variant="purple"
        />
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 my-2" delay={0.15} />

      <AnimatedSection delay={0.2}>
        <RADSection
          label={quote.rad.label}
          analysis={quote.rad.analysis}
          keyWords={quote.rad.keyWords}
        />
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 my-2" delay={0.25} />

      <AnimatedSection delay={0.3}>
        <TechniqueSection
          step={4}
          title={quote.technique2.title}
          analysis={quote.technique2.analysis}
          secondPoint={quote.technique2.secondPoint}
          keyWords={quote.technique2.keyWords}
          variant="blue"
        />
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 my-2" delay={0.35} />

      <AnimatedSection delay={0.4}>
        <ContextSection
          points={quote.context.points}
          keyWords={quote.context.keyWords}
        />
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/30 my-2" delay={0.45} />

      <AnimatedSection delay={0.5}>
        <WOWSection
          title={quote.wow.title}
          analysis={quote.wow.analysis}
          keyWords={quote.wow.keyWords}
        />
      </AnimatedSection>

      {/* Prev / Next nav */}
      <AnimatedDiv delay={0.3}>
        <div className="flex items-center justify-between font-ui text-sm">
          {quote.id > 1 ? (
            <AnimatedSlideRight delay={0.1}>
              <Link href={`/englishlit/texts/${slug}/quotes/${quote.id - 1}`} className="text-teal hover:underline">
                ← Quote {quote.id - 1}
              </Link>
            </AnimatedSlideRight>
          ) : <span />}
          {quote.id < allQuotes.length ? (
            <AnimatedSlideRight delay={0.2}>
              <Link href={`/englishlit/texts/${slug}/quotes/${quote.id + 1}`} className="text-teal hover:underline">
                Quote {quote.id + 1} →
              </Link>
            </AnimatedSlideRight>
          ) : <span />}
        </div>
      </AnimatedDiv>
    </div>
  );
}
