import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getMindMapsByText } from "@/data/mindmaps";
import PrintButton from "@/components/PrintButton";
import HighlightedText from "@/components/HighlightedText";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ─── colour palette for the 4 trait quadrants ─── */
const TRAIT_COLOURS: Record<
  string,
  { bg: string; text: string; border: string; dot: string; print: string }
> = {
  teal: {
    bg: "bg-teal-light",
    text: "text-teal",
    border: "border-teal/30",
    dot: "bg-teal",
    print: "print:bg-teal/10",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/20",
    text: "text-purple-700 dark:text-purple-400",
    border: "border-purple-300 dark:border-purple-800",
    dot: "bg-purple-500",
    print: "print:bg-purple-50",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/20",
    text: "text-amber-700 dark:text-amber-400",
    border: "border-amber-300 dark:border-amber-800",
    dot: "bg-amber-500",
    print: "print:bg-amber-50",
  },
  red: {
    bg: "bg-red-100 dark:bg-red-900/20",
    text: "text-red-700 dark:text-red-400",
    border: "border-red-300 dark:border-red-800",
    dot: "bg-red-500",
    print: "print:bg-red-50",
  },
};

const FALLBACK_COLOUR = TRAIT_COLOURS.teal;

export default async function MindMapsPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const mindmaps = getMindMapsByText(slug);
  if (mindmaps.length === 0) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0">
      {/* Header — hidden on print */}
      <div className="print:hidden">
        <nav className="font-ui text-sm text-grey mb-6">
          <Link href="/texts" className="hover:text-teal transition-colors">
            Texts
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <Link
            href={`/texts/${slug}`}
            className="hover:text-teal transition-colors"
          >
            {text.title}
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">Mind Maps</span>
        </nav>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Character Mind Maps
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {mindmaps.length} characters &middot; A4
              landscape &middot; printable
            </p>
          </div>
          <PrintButton />
        </div>
      </div>

      {/* Mind map pages */}
      {mindmaps.map((mm, idx) => (
        <article
          key={mm.name}
          className={`
            mindmap-page
            relative
            border border-border rounded-2xl bg-surface
            mb-8 last:mb-0
            print:border-0 print:rounded-none print:mb-0
            print:shadow-none
            ${idx < mindmaps.length - 1 ? "print:break-after-page" : ""}
          `}
        >
          {/* ═══ A4 LANDSCAPE LAYOUT ═══ */}
          <div className="p-5 print:p-[8mm]">
            {/* ── CHARACTER NAME — CENTRE HEADER ── */}
            <div className="flex flex-col items-center mb-4 print:mb-3">
              <h2 className="font-display text-2xl font-bold text-teal print:text-xl">
                {mm.name}
              </h2>
              <div className="w-16 h-0.5 bg-teal/40 mt-1 print:w-12" />
            </div>

            {/* ── 2×2 TRAIT GRID ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
              {mm.traits.map((trait) => {
                const c =
                  TRAIT_COLOURS[trait.colour] ?? FALLBACK_COLOUR;

                return (
                  <div
                    key={trait.trait}
                    className={`rounded-xl border ${c.border} ${c.bg} ${c.print} p-4 print:p-2.5`}
                  >
                    {/* Trait header */}
                    <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${c.dot} print:w-2 print:h-2`}
                      />
                      <h3
                        className={`font-ui font-bold text-sm uppercase tracking-wide ${c.text} print:text-[10px]`}
                      >
                        {trait.trait}
                      </h3>
                    </div>

                    {/* Quotes within this trait */}
                    <div className="space-y-2.5 print:space-y-1.5">
                      {trait.quotes.map((q, qi) => (
                        <div key={qi}>
                          {/* Quote text */}
                          <p className="font-body italic text-sm text-text leading-snug print:text-[9px] print:leading-tight">
                            &ldquo;{q.quote}&rdquo;
                            <span className="not-italic font-ui text-xs text-grey ml-1 print:text-[8px]">
                              {q.who && `— ${q.who}, `}
                              {q.act}
                            </span>
                          </p>

                          {/* Analysis bullet points */}
                          <ul className="mt-1 space-y-0.5 print:mt-0.5">
                            {q.points.map((pt, pi) => (
                              <li
                                key={pi}
                                className="flex gap-1.5 items-start print:gap-1"
                              >
                                <span
                                  className={`mt-1.5 w-1 h-1 rounded-full ${c.dot} shrink-0 print:mt-1 print:w-0.5 print:h-0.5`}
                                />
                                <span className="font-body text-xs text-text leading-snug print:text-[8px] print:leading-tight">
                                  <HighlightedText text={pt} />
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── DRAMATIC ENTRANCES & EXITS ── */}
            {mm.dramaticMoments && mm.dramaticMoments.length > 0 && (
              <div className="mt-5 print:mt-3">
                <div className="flex items-center gap-2 mb-3 print:mb-2">
                  <span className="w-5 h-0.5 bg-blue print:w-4" />
                  <h3 className="font-ui font-bold text-sm uppercase tracking-wide text-blue print:text-[10px]">
                    Dramatic Entrances &amp; Exits
                  </h3>
                  <span className="flex-1 h-0.5 bg-blue/20" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:grid-cols-2 print:gap-2">
                  {mm.dramaticMoments.map((dm, di) => (
                    <div
                      key={di}
                      className="rounded-xl border border-blue/30 bg-blue-light p-3.5 print:p-2 print:bg-blue/5"
                    >
                      {/* Moment header */}
                      <div className="flex items-center gap-2 mb-1.5 print:mb-1">
                        <span className={`font-ui font-bold text-xs uppercase px-2 py-0.5 rounded-full print:text-[8px] ${
                          dm.type === "entrance"
                            ? "bg-green-light text-green"
                            : dm.type === "exit"
                            ? "bg-red-light text-red"
                            : "bg-purple-light text-purple"
                        }`}>
                          {dm.type === "absence" ? "absent" : dm.type}
                        </span>
                        <span className="font-ui text-xs text-grey print:text-[8px]">
                          {dm.act}
                        </span>
                      </div>
                      <p className="font-ui font-semibold text-sm text-text mb-1.5 print:text-[9px] print:mb-1">
                        {dm.moment}
                      </p>

                      {/* Stage direction quote */}
                      {dm.stageDirection && (
                        <p className="font-body italic text-xs text-grey leading-snug mb-1.5 print:text-[8px] print:mb-1">
                          &ldquo;{dm.stageDirection}&rdquo;
                        </p>
                      )}

                      {/* Analysis points */}
                      <ul className="space-y-0.5">
                        {dm.points.map((pt, pi) => (
                          <li
                            key={pi}
                            className="flex gap-1.5 items-start print:gap-1"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue shrink-0 print:mt-1 print:w-0.5 print:h-0.5" />
                            <span className="font-body text-xs text-text leading-snug print:text-[8px] print:leading-tight">
                              <HighlightedText text={pt} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Page label — print only */}
            <p className="hidden print:block text-right font-ui text-[7px] text-grey mt-2">
              {text.title} &mdash; {mm.name} &mdash; GCSE Literature Revision
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
