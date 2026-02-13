import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { INSPECTOR_CALLS_EXTRACTS } from "@/data/exam-prep-inspector-calls";
import type { ExtractAnnotation } from "@/data/exam-prep-inspector-calls";
import PrintButton from "@/components/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

function getExtracts(slug: string) {
  if (slug === "inspector-calls") return INSPECTOR_CALLS_EXTRACTS;
  return [];
}

const COLOURS: Record<string, { border: string; bg: string; text: string; highlight: string }> = {
  red:    { border: "border-red",    bg: "bg-red-light",    text: "text-red",    highlight: "bg-red-light" },
  green:  { border: "border-green",  bg: "bg-green-light",  text: "text-green",  highlight: "bg-green-light" },
  blue:   { border: "border-blue",   bg: "bg-blue-light",   text: "text-blue",   highlight: "bg-blue-light" },
  purple: { border: "border-purple", bg: "bg-purple-light", text: "text-purple", highlight: "bg-purple-light" },
  orange: { border: "border-orange", bg: "bg-orange-light", text: "text-orange", highlight: "bg-orange-light" },
};

/* Inline colour values for dangerouslySetInnerHTML highlights */
const HIGHLIGHT_INLINE: Record<string, { light: string; main: string }> = {
  red:    { light: "#FBEAEA", main: "#C0392B" },
  green:  { light: "#E9F5EF", main: "#2E8B57" },
  blue:   { light: "#EBF2FC", main: "#3B7DDD" },
  purple: { light: "#F0ECF8", main: "#6B4EAA" },
  orange: { light: "#FDF2E9", main: "#D46A27" },
};

function highlightExtract(text: string, annotations: ExtractAnnotation[]): string {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Sort by phrase length descending to avoid partial matches
  const sorted = [...annotations].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const ann of sorted) {
    const col = HIGHLIGHT_INLINE[ann.colour] || HIGHLIGHT_INLINE.red;
    const escapedPhrase = ann.phrase
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    html = html.replace(
      escapedPhrase,
      `<mark style="background:${col.light};border-bottom:2px solid ${col.main};padding:1px 3px;border-radius:2px;color:inherit;">${escapedPhrase}</mark>`
    );
  }

  return html
    .split("\n\n")
    .map((p) => `<p style="margin-bottom:0.75em;">${p}</p>`)
    .join("");
}

export default async function ExamPrepExtractsPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const extracts = getExtracts(slug);
  if (extracts.length === 0) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0">
      {/* Header — hidden on print */}
      <div className="print:hidden">
        <nav className="font-ui text-sm text-grey mb-6">
          <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/texts/${slug}/exam-prep`} className="hover:text-teal transition-colors">Exam Prep Kit</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">Annotated Extracts</span>
        </nav>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Annotated Extracts
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {extracts.length} key extracts with margin annotations &middot; A4 printable
            </p>
          </div>
          <PrintButton label="Print / Save as PDF" />
        </div>
      </div>

      {/* Extracts */}
      {extracts.map((ext, idx) => {
        const left = ext.annotations.filter((a) => a.side === "left");
        const right = ext.annotations.filter((a) => a.side === "right");

        return (
          <article
            key={idx}
            className={`
              exam-prep-page relative
              mb-10 last:mb-0
              bg-surface overflow-hidden
              border border-border rounded-xl
              print:border print:border-gray-300 print:rounded-none print:mb-0 print:shadow-none
              ${idx < extracts.length - 1 ? "print:break-after-page" : ""}
            `}
          >
            {/* Title banner */}
            <div className="px-6 py-4 border-b border-border bg-teal-light print:px-[12mm] print:py-3 print:border-gray-300 print:bg-teal/5">
              <h2 className="font-display font-bold text-lg text-text print:text-[12px]">
                {ext.title}
              </h2>
              <p className="font-ui text-sm text-grey mt-0.5 print:text-[9px]">
                {ext.act} &mdash; {text.title}
              </p>
            </div>

            <div className="px-4 py-5 print:px-[8mm] print:py-4">
              {/* Context */}
              <div className="mb-5 print:mb-3 px-2">
                <p className="font-ui font-bold text-xs uppercase tracking-wider text-grey mb-1.5 print:text-[8px] print:mb-1">
                  Context
                </p>
                <p className="font-body text-sm text-text leading-relaxed print:text-[9px] print:leading-snug">
                  {ext.context}
                </p>
              </div>

              {/* 3-column annotation grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-3 lg:gap-4 print:grid-cols-[170px_1fr_170px] print:gap-2 mb-5 print:mb-3">
                {/* Left annotations */}
                <div className="hidden lg:flex flex-col gap-2 print:flex print:gap-1.5">
                  {left.map((ann, aIdx) => {
                    const c = COLOURS[ann.colour] || COLOURS.red;
                    return (
                      <div
                        key={aIdx}
                        className={`rounded-lg ${c.bg} border-r-[3px] ${c.border} px-3 py-2.5 print:px-2 print:py-1.5 print:rounded`}
                      >
                        <p className={`font-body italic text-[11px] font-semibold ${c.text} leading-tight print:text-[8px]`}>
                          &ldquo;{ann.phrase}&rdquo;
                        </p>
                        <p className="font-body text-[11px] text-text leading-snug mt-1 print:text-[8px] print:leading-tight print:mt-0.5">
                          {ann.note}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Extract text with highlighted phrases */}
                <div className="rounded-xl border border-border bg-bg p-5 print:p-3 print:border-gray-300 print:bg-gray-50 print:rounded-lg">
                  <p className="font-ui font-bold text-xs uppercase tracking-wider text-teal mb-2 print:text-[8px] print:mb-1">
                    Extract
                  </p>
                  <div
                    className="font-body text-sm text-text leading-relaxed print:text-[9px] print:leading-snug"
                    dangerouslySetInnerHTML={{ __html: highlightExtract(ext.extract, ext.annotations) }}
                  />
                </div>

                {/* Right annotations */}
                <div className="hidden lg:flex flex-col gap-2 print:flex print:gap-1.5">
                  {right.map((ann, aIdx) => {
                    const c = COLOURS[ann.colour] || COLOURS.red;
                    return (
                      <div
                        key={aIdx}
                        className={`rounded-lg ${c.bg} border-l-[3px] ${c.border} px-3 py-2.5 print:px-2 print:py-1.5 print:rounded`}
                      >
                        <p className={`font-body italic text-[11px] font-semibold ${c.text} leading-tight print:text-[8px]`}>
                          &ldquo;{ann.phrase}&rdquo;
                        </p>
                        <p className="font-body text-[11px] text-text leading-snug mt-1 print:text-[8px] print:leading-tight print:mt-0.5">
                          {ann.note}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile: all annotations stacked */}
                <div className="lg:hidden space-y-2 print:hidden">
                  {ext.annotations.map((ann, aIdx) => {
                    const c = COLOURS[ann.colour] || COLOURS.red;
                    return (
                      <div
                        key={aIdx}
                        className={`rounded-lg ${c.bg} border-l-[3px] ${c.border} px-3 py-2.5`}
                      >
                        <p className={`font-body italic text-[11px] font-semibold ${c.text} leading-tight`}>
                          &ldquo;{ann.phrase}&rdquo;
                        </p>
                        <p className="font-body text-[11px] text-text leading-snug mt-1">
                          {ann.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Overall Analysis */}
              <div className="rounded-xl border border-teal/30 bg-teal-light px-5 py-4 print:px-3 print:py-2.5 print:rounded-lg print:border-teal/20 print:bg-teal/5 mx-2 lg:mx-0">
                <p className="font-ui font-bold text-xs uppercase tracking-wider text-teal mb-2 print:text-[8px] print:mb-1.5">
                  Key Analysis Points
                </p>
                <ul className="space-y-1.5 print:space-y-1">
                  {ext.overallAnalysis.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 print:gap-1.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0 print:mt-1 print:w-1 print:h-1" />
                      <span className="font-body text-sm text-text leading-snug print:text-[9px] print:leading-tight">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer — print only */}
            <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[12mm] py-1">
              {text.title} &mdash; Annotated Extract &mdash; GCSE Literature Revision
            </p>
          </article>
        );
      })}
    </div>
  );
}
