import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { getThemeSheetsByText } from "@/data/theme-sheets";
import PrintButton from "@/components/PrintButton";
import GenerateThemeFlashcardsButton from "@/components/GenerateThemeFlashcardsButton";

interface Props {
  params: Promise<{ slug: string }>;
}

/* colour rotation per sheet */
const SHEET_COLOURS = [
  { accent: "text-teal",   accentBg: "bg-teal",   accentLight: "bg-teal-light",   dot: "bg-teal",   border: "border-teal/30" },
  { accent: "text-purple",  accentBg: "bg-purple",  accentLight: "bg-purple-light",  dot: "bg-purple",  border: "border-purple/30" },
  { accent: "text-blue",    accentBg: "bg-blue",    accentLight: "bg-blue-light",    dot: "bg-blue",    border: "border-blue/30" },
  { accent: "text-orange",  accentBg: "bg-orange",  accentLight: "bg-orange-light",  dot: "bg-orange",  border: "border-orange/30" },
  { accent: "text-green",   accentBg: "bg-green",   accentLight: "bg-green-light",   dot: "bg-green",   border: "border-green/30" },
  { accent: "text-red",     accentBg: "bg-red",     accentLight: "bg-red-light",     dot: "bg-red",     border: "border-red/30" },
] as const;

export default async function ThemeSheetsPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const sheets = getThemeSheetsByText(slug);
  if (sheets.length === 0) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0">
      {/* Header — hidden on print */}
      <div className="print:hidden">
        <nav className="font-ui text-sm text-grey mb-6">
          <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">Theme Sheets</span>
        </nav>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Theme Analysis Sheets
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {sheets.length} themes &middot; A4 printable
            </p>
          </div>
          <PrintButton label="Print A4 Theme Sheets" />
        </div>
      </div>

      {/* Theme sheets */}
      {sheets.map((sheet, sheetIdx) => {
        const c = SHEET_COLOURS[sheetIdx % SHEET_COLOURS.length];

        return (
          <article
            key={sheet.theme}
            className={`
              theme-sheet-page relative
              mb-10 last:mb-0
              bg-surface overflow-hidden
              border ${c.border} rounded-xl
              print:border print:border-gray-300 print:rounded-none print:mb-0 print:shadow-none
              ${sheetIdx < sheets.length - 1 ? "print:break-after-page" : ""}
            `}
          >
            {/* ═══ THESIS BANNER ═══ */}
            <div className="px-5 py-3.5 border-b border-border bg-surface print:px-[10mm] print:py-2.5 print:border-gray-300">
              <div className="flex items-center justify-between gap-3">
                <p className="font-body text-sm text-text leading-relaxed text-center flex-1 print:text-[10px] print:leading-snug">
                  <span className="font-display italic font-semibold">{text.title}</span>{" "}
                  {sheet.thesis.includes(text.title)
                    ? sheet.thesis.substring(sheet.thesis.indexOf(text.title) + text.title.length).trim()
                    : sheet.thesis}
                </p>
                <GenerateThemeFlashcardsButton sheet={sheet} textTitle={text.title} />
              </div>
            </div>

            {/* ═══ TABLE BODY: vertical label + rows ═══ */}
            <div className="flex">
              {/* Vertical theme name */}
              <div className={`hidden sm:flex items-center justify-center w-14 shrink-0 ${c.accentLight} border-r border-border print:flex print:w-10 print:border-gray-300`}>
                <span
                  className={`font-display italic font-bold text-xl ${c.accent} print:text-base`}
                  style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
                >
                  {sheet.theme.toLowerCase()}
                </span>
              </div>

              {/* Rows */}
              <div className="flex-1 min-w-0">
                {/* Mobile theme label */}
                <div className={`sm:hidden px-4 py-2 ${c.accentLight} border-b border-border print:hidden`}>
                  <span className={`font-display italic font-bold text-base ${c.accent}`}>
                    {sheet.theme}
                  </span>
                </div>

                {sheet.points.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className={`
                      grid grid-cols-1 md:grid-cols-[200px_1fr] print:grid-cols-[150px_1fr]
                      ${pIdx < sheet.points.length - 1 ? "border-b border-border print:border-gray-300" : ""}
                    `}
                  >
                    {/* LEFT: Point description */}
                    <div className={`${c.accentLight} px-4 py-3 border-b md:border-b-0 md:border-r border-border print:px-3 print:py-2 print:border-gray-300`}>
                      <p className={`font-ui font-bold text-xs uppercase tracking-wider mb-1 ${c.accent} print:text-[8px] print:mb-0.5`}>
                        Point {pIdx + 1}
                      </p>
                      <p className="font-body text-[13px] text-text leading-snug print:text-[9px] print:leading-tight">
                        {point.description}
                      </p>
                    </div>

                    {/* RIGHT: Quotes + analysis */}
                    <div className="px-4 py-3 print:px-3 print:py-2">
                      {point.quotes.map((q, qIdx) => (
                        <div key={qIdx} className={qIdx > 0 ? "mt-3 pt-3 border-t border-border/50 print:mt-2 print:pt-2 print:border-gray-200" : ""}>
                          {/* Quote + attribution */}
                          <p className="font-body text-sm leading-snug print:text-[10px] print:leading-tight">
                            <span className={`font-bold italic ${c.accent}`}>
                              &ldquo;{q.quote}&rdquo;
                            </span>{" "}
                            <span className="font-ui font-semibold text-xs text-grey not-italic print:text-[8px]">
                              [{q.who}] {q.act}
                            </span>
                          </p>

                          {/* Analysis bullets */}
                          <ul className="mt-1.5 space-y-1 print:mt-1 print:space-y-0.5">
                            {q.analysis.map((a, aIdx) => (
                              <li key={aIdx} className="flex items-start gap-2 print:gap-1">
                                <span className={`mt-[5px] w-[5px] h-[5px] rounded-full shrink-0 border ${c.border} print:mt-1 print:w-1 print:h-1`} />
                                <span className="font-body text-[13px] text-text leading-snug print:text-[9px] print:leading-tight">
                                  {a}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Page label — print only */}
            <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[10mm] py-1">
              {text.title} &mdash; {sheet.theme} &mdash; GCSE Literature Revision
            </p>
          </article>
        );
      })}
    </div>
  );
}
