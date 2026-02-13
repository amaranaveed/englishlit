import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { INSPECTOR_CALLS_ESSAYS } from "@/data/exam-prep-inspector-calls";
import type { TechniqueDissection, ExaminerComment } from "@/data/exam-prep-inspector-calls";
import PrintButton from "@/components/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

function getEssays(slug: string) {
  if (slug === "inspector-calls") return INSPECTOR_CALLS_ESSAYS;
  return [];
}

const AO_COLOURS: Record<string, { bg: string; text: string; border: string }> = {
  AO1: { bg: "bg-teal-light", text: "text-teal", border: "border-teal/30" },
  AO2: { bg: "bg-purple-light", text: "text-purple", border: "border-purple/30" },
  AO3: { bg: "bg-orange-light", text: "text-orange", border: "border-orange/30" },
};

function AOBadge({ ao }: { ao: string }) {
  const c = AO_COLOURS[ao] || AO_COLOURS.AO1;
  return (
    <span className={`inline-flex items-center rounded-full ${c.bg} ${c.text} font-ui font-bold text-[10px] px-2 py-0.5 print:text-[7px] print:px-1.5`}>
      {ao}
    </span>
  );
}

export default async function ExamPrepEssaysPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const essays = getEssays(slug);
  if (essays.length === 0) notFound();

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
          <span className="text-text font-medium">Example Essays</span>
        </nav>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Example Essay Answers
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {essays.length} Grade 9 essays with technique dissection &amp; examiner commentary &middot; A4 printable
            </p>
          </div>
          <PrintButton label="Print / Save as PDF" />
        </div>
      </div>

      {/* Essays */}
      {essays.map((essay, idx) => (
        <article
          key={idx}
          className="exam-prep-page relative mb-12 last:mb-0 print:mb-0"
        >
          {/* ═══ THE ESSAY ═══ */}
          <div className="bg-surface overflow-hidden border border-border rounded-xl print:border print:border-gray-300 print:rounded-none print:shadow-none print:break-after-page">
            {/* Grade badge + question */}
            <div className="px-6 py-4 border-b border-border bg-teal-light print:px-[12mm] print:py-3 print:border-gray-300 print:bg-teal/5">
              <div className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded-full bg-teal text-white font-ui font-bold text-xs px-2.5 py-1 print:text-[8px] print:px-2 print:py-0.5">
                  {essay.grade}
                </span>
                <p className="font-display font-bold text-base text-text leading-snug print:text-[11px] print:leading-snug">
                  {essay.question}
                </p>
              </div>
            </div>

            {/* Essay body */}
            <div className="px-6 py-5 print:px-[12mm] print:py-4">
              <div className="font-body text-sm text-text leading-relaxed space-y-4 print:text-[10px] print:leading-snug print:space-y-2.5">
                {essay.essay.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Footer — print only */}
            <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[12mm] py-1">
              {text.title} &mdash; Example Essay {idx + 1} &mdash; GCSE Literature Revision
            </p>
          </div>

          {/* ═══ TECHNIQUE DISSECTION ═══ */}
          {essay.techniqueDissections && essay.techniqueDissections.length > 0 && (
            <div className="mt-6 bg-surface overflow-hidden border border-purple/30 rounded-xl print:border print:border-gray-300 print:rounded-none print:mt-0 print:shadow-none print:break-after-page">
              <div className="px-6 py-4 border-b border-purple/20 bg-purple-light print:px-[12mm] print:py-3 print:border-gray-300">
                <h3 className="font-display font-bold text-lg text-purple print:text-[12px]">
                  Technique Dissection
                </h3>
                <p className="font-ui text-sm text-grey mt-0.5 print:text-[8px]">
                  Every technique this essay uses, why the student used it, and what made the examiner reward it
                </p>
              </div>

              <div className="divide-y divide-border print:divide-gray-200">
                {essay.techniqueDissections.map((td: TechniqueDissection, tIdx: number) => (
                  <div key={tIdx} className="px-6 py-4 print:px-[12mm] print:py-2.5">
                    <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                      <span className="font-ui font-bold text-sm text-purple print:text-[10px]">
                        {td.technique}
                      </span>
                      <AOBadge ao={td.ao} />
                    </div>

                    {/* Term used in essay */}
                    <div className="mb-2 print:mb-1.5">
                      <p className="font-ui font-semibold text-xs text-grey uppercase tracking-wider mb-0.5 print:text-[7px]">
                        How the student used it
                      </p>
                      <p className="font-body italic text-sm text-text leading-snug print:text-[9px] print:leading-tight">
                        {td.termUsed}
                      </p>
                    </div>

                    {/* Quote referenced */}
                    <div className="mb-2 print:mb-1.5">
                      <p className="font-ui font-semibold text-xs text-grey uppercase tracking-wider mb-0.5 print:text-[7px]">
                        Quote referenced
                      </p>
                      <p className="font-body text-sm text-purple italic print:text-[9px]">
                        {td.quote}
                      </p>
                    </div>

                    {/* Why it scores */}
                    <div className="rounded-lg border border-teal/20 bg-teal-light px-4 py-2.5 print:px-3 print:py-2 print:rounded">
                      <p className="font-ui font-semibold text-xs text-teal uppercase tracking-wider mb-0.5 print:text-[7px]">
                        Why the examiner rewards this
                      </p>
                      <p className="font-body text-sm text-text leading-snug print:text-[9px] print:leading-tight">
                        {td.whyItScores}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══ EXAMINER COMMENTARY ═══ */}
          {essay.examinerCommentary && essay.examinerCommentary.length > 0 && (
            <div className="mt-6 bg-surface overflow-hidden border border-orange/30 rounded-xl print:border print:border-gray-300 print:rounded-none print:mt-0 print:shadow-none print:break-after-page">
              <div className="px-6 py-4 border-b border-orange/20 bg-orange-light print:px-[12mm] print:py-3 print:border-gray-300">
                <h3 className="font-display font-bold text-lg text-orange print:text-[12px]">
                  Examiner Commentary
                </h3>
                <p className="font-ui text-sm text-grey mt-0.5 print:text-[8px]">
                  What the examiner sees in each paragraph and why it reaches Grade 9
                </p>
              </div>

              <div className="divide-y divide-border print:divide-gray-200">
                {essay.examinerCommentary.map((ec: ExaminerComment, eIdx: number) => (
                  <div key={eIdx} className="px-6 py-4 print:px-[12mm] print:py-2.5">
                    {/* Paragraph label + AO badges */}
                    <div className="flex items-center gap-2 mb-2 print:mb-1.5 flex-wrap">
                      <span className="font-ui font-bold text-sm text-orange print:text-[10px]">
                        Para {ec.paragraph}: {ec.label}
                      </span>
                      <div className="flex gap-1">
                        {ec.aoCoverage.map((ao) => (
                          <AOBadge key={ao} ao={ao} />
                        ))}
                      </div>
                    </div>

                    {/* What examiner sees */}
                    <div className="mb-2 print:mb-1.5">
                      <p className="font-ui font-semibold text-xs text-grey uppercase tracking-wider mb-0.5 print:text-[7px]">
                        What the examiner sees
                      </p>
                      <p className="font-body text-sm text-text leading-snug print:text-[9px] print:leading-tight">
                        {ec.whatExaminerSees}
                      </p>
                    </div>

                    {/* Grade justification */}
                    <div className="rounded-lg border border-red/20 bg-red-light px-4 py-2.5 print:px-3 print:py-2 print:rounded">
                      <p className="font-ui font-semibold text-xs text-red uppercase tracking-wider mb-0.5 print:text-[7px]">
                        Why this is Grade 9
                      </p>
                      <p className="font-body text-sm text-text leading-snug print:text-[9px] print:leading-tight">
                        {ec.gradeJustification}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall verdict */}
              {essay.overallVerdict && (
                <div className="px-6 py-4 border-t border-orange/20 bg-orange-light print:px-[12mm] print:py-3 print:border-gray-300">
                  <p className="font-ui font-bold text-xs text-orange uppercase tracking-wider mb-1.5 print:text-[8px] print:mb-1">
                    Overall Verdict
                  </p>
                  <p className="font-body text-sm text-text leading-relaxed print:text-[9px] print:leading-snug">
                    {essay.overallVerdict}
                  </p>
                </div>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
