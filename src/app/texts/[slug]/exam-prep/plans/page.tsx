import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { INSPECTOR_CALLS_ESSAY_PLANS } from "@/data/exam-prep-inspector-calls";
import PrintButton from "@/components/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPlans(slug: string) {
  if (slug === "inspector-calls") return INSPECTOR_CALLS_ESSAY_PLANS;
  return [];
}

/* Colour rotation for plan rows */
const ROW_COLOURS = [
  { bg: "bg-teal-light", border: "border-teal/20", accent: "text-teal" },
  { bg: "bg-purple-light", border: "border-purple/20", accent: "text-purple" },
  { bg: "bg-blue-light", border: "border-blue/20", accent: "text-blue" },
  { bg: "bg-orange-light", border: "border-orange/20", accent: "text-orange" },
  { bg: "bg-green-light", border: "border-green/20", accent: "text-green" },
] as const;

export default async function ExamPrepPlansPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const plans = getPlans(slug);
  if (plans.length === 0) notFound();

  /* Generate blank templates from the same questions */
  const blankTemplates = plans.map((p) => ({
    question: p.question,
    parts: p.parts.map((pt) => pt.label),
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-0 print:py-0">
      {/* Header — hidden on print */}
      <div className="print:hidden">
        <nav className="font-ui text-sm text-grey mb-6">
          <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/texts/${slug}/exam-prep`} className="hover:text-teal transition-colors">Exam Prep Kit</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">Essay Plans</span>
        </nav>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Essay Plans &amp; Templates
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {plans.length} completed plans + {blankTemplates.length} blank templates &middot; A4 printable
            </p>
          </div>
          <PrintButton label="Print / Save as PDF" />
        </div>
      </div>

      {/* ═══ COMPLETED ESSAY PLANS ═══ */}
      {plans.map((plan, idx) => (
        <article
          key={idx}
          className="exam-prep-page relative mb-10 bg-surface overflow-hidden border border-border rounded-xl print:border print:border-gray-300 print:rounded-none print:mb-0 print:shadow-none print:break-after-page"
        >
          {/* Question banner */}
          <div className="px-6 py-4 border-b border-border bg-teal-light print:px-[12mm] print:py-3 print:border-gray-300 print:bg-teal/5">
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded-full bg-teal text-white font-ui font-bold text-xs px-2.5 py-1 print:text-[8px] print:px-2 print:py-0.5">
                EXAMPLE
              </span>
              <p className="font-display font-bold text-base text-text leading-snug print:text-[11px] print:leading-snug">
                {plan.question}
              </p>
            </div>
          </div>

          <div className="print:px-[12mm] print:py-3">
            {/* Line of argument */}
            <div className="px-6 py-4 border-b border-border print:px-0 print:py-2.5 print:border-gray-200">
              <p className="font-ui font-bold text-xs uppercase tracking-wider text-red mb-1.5 print:text-[8px] print:mb-1">
                Line of Argument
              </p>
              <p className="font-body text-sm text-text leading-relaxed print:text-[9px] print:leading-snug">
                {plan.lineOfArgument}
              </p>
            </div>

            {/* Introduction */}
            <div className="px-6 py-4 border-b border-border bg-grey-light/30 print:px-0 print:py-2.5 print:border-gray-200 print:bg-gray-50">
              <p className="font-ui font-bold text-xs uppercase tracking-wider text-grey mb-1.5 print:text-[8px] print:mb-1">
                Introduction
              </p>
              <p className="font-body text-sm text-text leading-relaxed print:text-[9px] print:leading-snug">
                {plan.intro}
              </p>
            </div>

            {/* Essay parts */}
            {plan.parts.map((part, pIdx) => {
              const c = ROW_COLOURS[pIdx % ROW_COLOURS.length];
              return (
                <div
                  key={pIdx}
                  className={`px-6 py-4 border-b border-border ${c.bg} print:px-0 print:py-2.5 print:border-gray-200`}
                >
                  <p className={`font-ui font-bold text-xs uppercase tracking-wider ${c.accent} mb-1.5 print:text-[8px] print:mb-1`}>
                    {part.label}
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 print:grid-cols-3 print:gap-2">
                    <div>
                      <p className="font-ui font-semibold text-xs text-grey mb-0.5 print:text-[7px]">Point</p>
                      <p className="font-body text-sm text-text leading-snug print:text-[9px] print:leading-tight">{part.point}</p>
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-xs text-grey mb-0.5 print:text-[7px]">Quote</p>
                      <p className="font-body italic text-sm text-text leading-snug print:text-[9px] print:leading-tight">{part.quote}</p>
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-xs text-grey mb-0.5 print:text-[7px]">Analysis</p>
                      <p className="font-body text-sm text-text leading-snug print:text-[9px] print:leading-tight">{part.analysis}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Conclusion */}
            <div className="px-6 py-4 bg-grey-light/30 print:px-0 print:py-2.5 print:bg-gray-50">
              <p className="font-ui font-bold text-xs uppercase tracking-wider text-grey mb-1.5 print:text-[8px] print:mb-1">
                Conclusion
              </p>
              <p className="font-body text-sm text-text leading-relaxed print:text-[9px] print:leading-snug">
                {plan.conclusion}
              </p>
            </div>
          </div>

          {/* Footer — print only */}
          <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[12mm] py-1">
            {text.title} &mdash; Essay Plan &mdash; GCSE Literature Revision
          </p>
        </article>
      ))}

      {/* ═══ BLANK ESSAY PLAN TEMPLATES ═══ */}
      {blankTemplates.map((tmpl, idx) => (
        <article
          key={`blank-${idx}`}
          className="exam-prep-page relative mb-10 last:mb-0 bg-surface overflow-hidden border border-border rounded-xl print:border print:border-gray-300 print:rounded-none print:mb-0 print:shadow-none print:break-after-page"
        >
          {/* Question banner */}
          <div className="px-6 py-4 border-b border-border bg-orange-light print:px-[12mm] print:py-3 print:border-gray-300 print:bg-orange/5">
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded-full bg-orange text-white font-ui font-bold text-xs px-2.5 py-1 print:text-[8px] print:px-2 print:py-0.5">
                BLANK
              </span>
              <p className="font-display font-bold text-base text-text leading-snug print:text-[11px] print:leading-snug">
                {tmpl.question}
              </p>
            </div>
          </div>

          <div className="print:px-[12mm] print:py-3">
            {/* Line of argument */}
            <div className="px-6 py-5 border-b border-border print:px-0 print:py-4 print:border-gray-200">
              <p className="font-ui font-bold text-xs uppercase tracking-wider text-red mb-2 print:text-[8px] print:mb-1">
                Line of Argument
              </p>
              <div className="h-16 border-b-2 border-dashed border-border print:h-12 print:border-gray-300" />
            </div>

            {/* Introduction */}
            <div className="px-6 py-5 border-b border-border print:px-0 print:py-4 print:border-gray-200">
              <p className="font-ui font-bold text-xs uppercase tracking-wider text-grey mb-2 print:text-[8px] print:mb-1">
                Introduction
              </p>
              <div className="h-16 border-b-2 border-dashed border-border print:h-12 print:border-gray-300" />
            </div>

            {/* Blank parts */}
            {tmpl.parts.map((label, pIdx) => {
              const c = ROW_COLOURS[pIdx % ROW_COLOURS.length];
              return (
                <div
                  key={pIdx}
                  className={`px-6 py-5 border-b border-border ${c.bg} print:px-0 print:py-3 print:border-gray-200`}
                >
                  <p className={`font-ui font-bold text-xs uppercase tracking-wider ${c.accent} mb-3 print:text-[8px] print:mb-2`}>
                    {label}
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 print:grid-cols-3 print:gap-2">
                    <div>
                      <p className="font-ui font-semibold text-xs text-grey mb-1 print:text-[7px]">Point</p>
                      <div className="h-14 border-b-2 border-dashed border-border/50 print:h-10 print:border-gray-300" />
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-xs text-grey mb-1 print:text-[7px]">Quote</p>
                      <div className="h-14 border-b-2 border-dashed border-border/50 print:h-10 print:border-gray-300" />
                    </div>
                    <div>
                      <p className="font-ui font-semibold text-xs text-grey mb-1 print:text-[7px]">Analysis</p>
                      <div className="h-14 border-b-2 border-dashed border-border/50 print:h-10 print:border-gray-300" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Conclusion */}
            <div className="px-6 py-5 print:px-0 print:py-4">
              <p className="font-ui font-bold text-xs uppercase tracking-wider text-grey mb-2 print:text-[8px] print:mb-1">
                Conclusion
              </p>
              <div className="h-16 border-b-2 border-dashed border-border print:h-12 print:border-gray-300" />
            </div>
          </div>

          {/* Footer — print only */}
          <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[12mm] py-1">
            {text.title} &mdash; Blank Essay Plan &mdash; GCSE Literature Revision
          </p>
        </article>
      ))}
    </div>
  );
}
