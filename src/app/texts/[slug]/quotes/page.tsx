import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getQuotesByText } from "@/data/quotes";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ who?: string; theme?: string }>;
}

const RAD_COLOURS: Record<string, string> = {
  PROGRESS: "bg-green-light text-green",
  REGRESS: "bg-red-light text-red",
  STAGNATE: "bg-amber-light text-amber",
};

export default async function QuoteListPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { who, theme } = await searchParams;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const allQuotes = getQuotesByText(slug);
  let quotes = allQuotes;
  if (who) {
    quotes = quotes.filter((q) => q.who.toLowerCase() === who.toLowerCase());
  }
  if (theme) {
    quotes = quotes.filter((q) =>
      q.themes.some((t) => t.toLowerCase() === theme.toLowerCase())
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="font-ui text-sm text-grey mb-6">
        <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
        <span className="mx-2">›</span>
        <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
        <span className="mx-2">›</span>
        <span className="text-text font-medium">Quotes</span>
      </nav>

      <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">
        {text.title} — Quotes
      </h1>
      <p className="text-grey font-ui mb-4">
        {quotes.length} quote{quotes.length !== 1 ? "s" : ""}{who ? ` by ${who}` : ""}{theme ? ` — ${theme}` : ""} with full 6-part LightUp analysis
      </p>

      {(who || theme) && (
        <div className="flex items-center gap-2 mb-6">
          {who && (
            <span className="inline-block rounded-full bg-teal-light text-teal font-ui text-sm font-medium px-3 py-1">
              {who}
            </span>
          )}
          {theme && (
            <span className="inline-block rounded-full bg-teal-light text-teal font-ui text-sm font-medium px-3 py-1">
              {theme}
            </span>
          )}
          <Link
            href={`/texts/${slug}/quotes`}
            className="text-sm text-grey hover:text-teal font-ui transition-colors"
          >
            Show all quotes →
          </Link>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quotes.map((q) => (
          <Link
            key={q.id}
            href={`/texts/${slug}/quotes/${q.id}`}
            className="card-hover rounded-xl border border-border bg-surface p-5 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-teal-light text-teal font-ui font-bold text-sm flex items-center justify-center">
                {q.id}
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  RAD_COLOURS[q.rad.label] ?? "bg-grey-light text-grey"
                }`}
              >
                {q.rad.label}
              </span>
            </div>
            <p className="font-body text-sm italic text-text leading-relaxed line-clamp-3 mb-3">
              &ldquo;{q.quote.length > 80 ? q.quote.slice(0, 80) + "…" : q.quote}&rdquo;
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-light text-purple">
                {q.technique1.title}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-light text-blue">
                {q.technique2.title}
              </span>
            </div>
            <p className="text-xs text-grey font-ui mt-auto">
              {q.who}&ensp;·&ensp;{q.act}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
