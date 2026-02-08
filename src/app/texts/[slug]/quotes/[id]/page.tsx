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
      <nav className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0">
        <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
        <span className="mx-2">›</span>
        <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
        <span className="mx-2">›</span>
        <Link href={`/texts/${slug}/quotes`} className="hover:text-teal transition-colors">Quotes</Link>
        <span className="mx-2">›</span>
        <span className="text-text font-medium">Quote {quote.id}</span>
      </nav>

      {/* Quote nav pills */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {allQuotes.map((q) => (
          <Link
            key={q.id}
            href={`/texts/${slug}/quotes/${q.id}`}
            className={`w-9 h-9 rounded-lg font-ui font-bold text-sm flex items-center justify-center transition-colors ${
              q.id === quote.id
                ? "bg-teal text-white"
                : "bg-teal-light text-teal hover:bg-teal hover:text-white"
            }`}
          >
            {q.id}
          </Link>
        ))}
        <div className="ml-auto">
          <GenerateFlashcardsButton quote={quote} />
        </div>
      </div>

      {/* 6-part analysis */}
      <KeyQuoteSection
        text={quote.keyQuote.text}
        who={quote.who}
        act={quote.act}
        note={quote.keyQuote.note}
        highlight={quote.keyQuote.highlight}
      />

      <TechniqueSection
        step={2}
        title={quote.technique1.title}
        analysis={quote.technique1.analysis}
        secondPoint={quote.technique1.secondPoint}
        keyWords={quote.technique1.keyWords}
        variant="purple"
      />

      <RADSection
        label={quote.rad.label}
        analysis={quote.rad.analysis}
        keyWords={quote.rad.keyWords}
      />

      <TechniqueSection
        step={4}
        title={quote.technique2.title}
        analysis={quote.technique2.analysis}
        secondPoint={quote.technique2.secondPoint}
        keyWords={quote.technique2.keyWords}
        variant="blue"
      />

      <ContextSection
        points={quote.context.points}
        keyWords={quote.context.keyWords}
      />

      <WOWSection
        title={quote.wow.title}
        analysis={quote.wow.analysis}
        keyWords={quote.wow.keyWords}
      />

      {/* Prev / Next nav */}
      <div className="flex items-center justify-between font-ui text-sm">
        {quote.id > 1 ? (
          <Link href={`/texts/${slug}/quotes/${quote.id - 1}`} className="text-teal hover:underline">
            ← Quote {quote.id - 1}
          </Link>
        ) : <span />}
        {quote.id < allQuotes.length ? (
          <Link href={`/texts/${slug}/quotes/${quote.id + 1}`} className="text-teal hover:underline">
            Quote {quote.id + 1} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
