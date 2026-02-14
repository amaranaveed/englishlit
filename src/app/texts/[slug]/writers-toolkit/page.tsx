import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getWritersToolkit } from "@/data/writers-toolkit";
import type { ToolkitSection } from "@/data/writers-toolkit";
import PrintButton from "@/components/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

/* colour palette keyed by section colour string */
const SECTION_COLOURS: Record<
  string,
  { accent: string; accentBg: string; accentLight: string; border: string; dot: string; headerBg: string }
> = {
  purple: {
    accent: "text-purple-700",
    accentBg: "bg-purple-600",
    accentLight: "bg-purple-100",
    border: "border-purple-300",
    dot: "bg-purple-500",
    headerBg: "bg-purple-600",
  },
  orange: {
    accent: "text-orange",
    accentBg: "bg-orange",
    accentLight: "bg-orange-light",
    border: "border-orange/30",
    dot: "bg-orange",
    headerBg: "bg-orange",
  },
  green: {
    accent: "text-green",
    accentBg: "bg-green",
    accentLight: "bg-green-light",
    border: "border-green/30",
    dot: "bg-green",
    headerBg: "bg-green",
  },
  blue: {
    accent: "text-blue",
    accentBg: "bg-blue",
    accentLight: "bg-blue-light",
    border: "border-blue/30",
    dot: "bg-blue",
    headerBg: "bg-blue",
  },
  red: {
    accent: "text-red",
    accentBg: "bg-red",
    accentLight: "bg-red-light",
    border: "border-red/30",
    dot: "bg-red",
    headerBg: "bg-red",
  },
  teal: {
    accent: "text-teal",
    accentBg: "bg-teal",
    accentLight: "bg-teal-light",
    border: "border-teal/30",
    dot: "bg-teal",
    headerBg: "bg-teal",
  },
};

const FALLBACK = SECTION_COLOURS.teal;

function SectionTable({ section, textTitle, isLast }: { section: ToolkitSection; textTitle: string; isLast: boolean }) {
  const c = SECTION_COLOURS[section.colour] ?? FALLBACK;

  return (
    <article
      className={`
        toolkit-section relative
        mb-8 last:mb-0
        bg-surface overflow-hidden
        border ${c.border} rounded-xl
        print:border print:border-gray-300 print:rounded-none print:mb-0 print:shadow-none
        ${!isLast ? "print:break-after-page" : ""}
      `}
    >
      {/* Section header */}
      <div className={`${c.headerBg} px-5 py-3 print:px-[10mm] print:py-2`}>
        <h2 className="font-display font-bold text-lg text-white uppercase tracking-wider print:text-sm">
          {section.title}
        </h2>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[180px_1fr_1fr] print:grid-cols-[130px_1fr_1fr] border-b border-border print:border-gray-300">
        {section.columns.map((col, i) => (
          <div
            key={i}
            className={`
              px-4 py-2.5 print:px-3 print:py-1.5
              ${i < 2 ? "border-r border-border print:border-gray-300" : ""}
              ${i === 0 ? `${c.accentLight}` : ""}
            `}
          >
            <p className={`font-ui font-bold text-xs uppercase tracking-wider ${c.accent} print:text-[8px]`}>
              {col}
            </p>
          </div>
        ))}
      </div>

      {/* Rows */}
      {section.rows.map((row, rIdx) => (
        <div
          key={rIdx}
          className={`
            grid grid-cols-[180px_1fr_1fr] print:grid-cols-[130px_1fr_1fr]
            ${rIdx < section.rows.length - 1 ? "border-b border-border/50 print:border-gray-200" : ""}
          `}
        >
          {/* Technique label */}
          <div className={`${c.accentLight} px-4 py-2.5 border-r border-border print:px-3 print:py-1.5 print:border-gray-300`}>
            <p className={`font-ui font-bold text-[13px] ${c.accent} leading-snug print:text-[9px] print:leading-tight`}>
              {row.label}
            </p>
          </div>

          {/* Example */}
          <div className="px-4 py-2.5 border-r border-border print:px-3 print:py-1.5 print:border-gray-300">
            <p className="font-body text-[13px] text-text leading-snug italic print:text-[9px] print:leading-tight">
              {row.example}
            </p>
          </div>

          {/* Effect */}
          <div className="px-4 py-2.5 print:px-3 print:py-1.5">
            <p className="font-body text-[13px] text-text leading-snug print:text-[9px] print:leading-tight">
              {row.effect}
            </p>
          </div>
        </div>
      ))}

      {/* Page label — print only */}
      <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[10mm] py-1">
        {textTitle} &mdash; Writer&rsquo;s Toolkit: {section.title} &mdash; GCSE Literature Revision
      </p>
    </article>
  );
}

export default async function WritersToolkitPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const toolkit = getWritersToolkit(slug);
  if (!toolkit) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0">
      {/* Header — hidden on print */}
      <div className="print:hidden">
        <nav className="font-ui text-sm text-grey mb-6">
          <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">Writer&rsquo;s Toolkit</span>
        </nav>

        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Writer&rsquo;s Toolkit
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {toolkit.sections.length} sections &middot; A4 printable
            </p>
          </div>
          <PrintButton label="Print / Save as PDF" />
        </div>

        {/* Iconic quote banner */}
        <div className="rounded-xl border border-teal/30 bg-teal-light px-6 py-4 mb-8">
          <p className="font-display italic text-teal text-center text-lg leading-relaxed">
            &ldquo;{toolkit.headerQuote}&rdquo;
          </p>
        </div>
      </div>

      {/* Print-only title page header */}
      <div className="hidden print:block print:px-[10mm] print:py-[6mm] print:mb-0 print:break-after-page">
        <div className="text-center border-2 border-gray-400 rounded-none p-8">
          <p className="font-ui text-xs uppercase tracking-widest text-gray-500 mb-4">
            Writer&rsquo;s Toolkit
          </p>
          <h1 className="font-display text-3xl font-bold mb-2">{text.title}</h1>
          <p className="font-ui text-sm text-gray-600 mb-6">
            {text.author}
          </p>
          <div className="mx-auto max-w-lg border-t border-b border-gray-300 py-4 my-6">
            <p className="font-display italic text-base text-gray-700 leading-relaxed">
              &ldquo;{toolkit.headerQuote}&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {toolkit.sections.map((s) => (
              <p key={s.title} className="font-ui text-[10px] uppercase tracking-wider text-gray-500">
                {s.title}
              </p>
            ))}
          </div>
          <p className="font-ui text-[8px] text-gray-400 mt-10">
            GCSE English Literature Revision &mdash; {toolkit.sections.reduce((sum, s) => sum + s.rows.length, 0)} techniques
          </p>
        </div>
      </div>

      {/* Sections */}
      {toolkit.sections.map((section, idx) => (
        <SectionTable
          key={section.title}
          section={section}
          textTitle={text.title}
          isLast={idx === toolkit.sections.length - 1}
        />
      ))}
    </div>
  );
}
