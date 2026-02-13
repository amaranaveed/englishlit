import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { INSPECTOR_CALLS_EXAM_QUESTIONS } from "@/data/exam-prep-inspector-calls";
import PrintButton from "@/components/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

function getQuestions(slug: string) {
  if (slug === "inspector-calls") return INSPECTOR_CALLS_EXAM_QUESTIONS;
  return [];
}

const THEME_COLOURS: Record<string, { bg: string; text: string; border: string }> = {
  "Social Responsibility": { bg: "bg-teal-light", text: "text-teal", border: "border-teal/30" },
  "Class & Power": { bg: "bg-purple-light", text: "text-purple", border: "border-purple/30" },
  "Generational Divide": { bg: "bg-blue-light", text: "text-blue", border: "border-blue/30" },
  "Gender & Exploitation": { bg: "bg-red-light", text: "text-red", border: "border-red/30" },
  "Artifice & Pretence": { bg: "bg-orange-light", text: "text-orange", border: "border-orange/30" },
  "Character: Mr Birling": { bg: "bg-red-light", text: "text-red", border: "border-red/30" },
};

const DEFAULT_THEME = { bg: "bg-grey-light", text: "text-grey", border: "border-border" };

export default async function ExamPrepQuestionsPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const questions = getQuestions(slug);
  if (questions.length === 0) notFound();

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
          <span className="text-text font-medium">Exam Questions</span>
        </nav>

        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              Practice Exam Questions
            </h1>
            <p className="text-grey font-ui mt-1">
              {text.title} &mdash; {questions.length} questions with extracts &middot; A4 printable
            </p>
          </div>
          <PrintButton label="Print / Save as PDF" />
        </div>
      </div>

      {/* Questions */}
      {questions.map((q, idx) => {
        const tc = THEME_COLOURS[q.theme] || DEFAULT_THEME;

        return (
          <article
            key={idx}
            className={`
              exam-prep-page relative
              mb-8 last:mb-0
              bg-surface overflow-hidden
              border border-border rounded-xl
              print:border print:border-gray-300 print:rounded-none print:mb-0 print:shadow-none
              ${idx < questions.length - 1 ? "print:break-after-page" : ""}
            `}
          >
            {/* Header bar */}
            <div className="px-6 py-3 border-b border-border bg-surface-raised flex items-center justify-between print:px-[12mm] print:py-2 print:border-gray-300">
              <p className="font-ui font-bold text-sm text-text print:text-[10px]">
                Question {idx + 1}
              </p>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center rounded-full ${tc.bg} ${tc.text} font-ui font-medium text-xs px-2.5 py-0.5 print:text-[7px] print:px-1.5 print:py-0.5`}>
                  {q.theme}
                </span>
                <span className="font-ui text-xs text-grey print:text-[8px]">{q.extractAct}</span>
              </div>
            </div>

            <div className="px-6 py-5 print:px-[12mm] print:py-4">
              {/* Extract */}
              <div className="rounded-xl border border-border bg-bg p-5 mb-5 print:p-3 print:mb-4 print:border-gray-300 print:bg-gray-50 print:rounded-lg">
                <p className="font-ui font-bold text-xs uppercase tracking-wider text-teal mb-2 print:text-[8px] print:mb-1.5">
                  Read the following extract from {q.extractAct} and then answer the question that follows.
                </p>
                <div className="font-body text-sm text-text leading-relaxed whitespace-pre-line print:text-[10px] print:leading-snug">
                  {q.extract}
                </div>
              </div>

              {/* Question */}
              <div className={`rounded-xl border ${tc.border} ${tc.bg} px-5 py-4 mb-5 print:px-3 print:py-3 print:mb-4 print:rounded-lg`}>
                <p className="font-display font-bold text-base text-text leading-snug print:text-[11px] print:leading-snug">
                  {q.question}
                </p>
                <p className="font-ui text-xs text-grey mt-2 print:text-[8px] print:mt-1">
                  Write about the whole text in your answer.
                  <br />
                  [30 marks] AO1, AO2, AO3
                </p>
              </div>

              {/* Lined writing space (print only for practice) */}
              <div className="print:block hidden">
                <p className="font-ui font-bold text-[8px] uppercase tracking-wider text-grey mb-2">
                  Planning Space
                </p>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-5 border-b border-dashed border-gray-300" />
                ))}
              </div>
            </div>

            {/* Footer — print only */}
            <p className="hidden print:block text-right font-ui text-[7px] text-grey border-t border-gray-300 px-[12mm] py-1">
              {text.title} &mdash; Practice Question {idx + 1} &mdash; GCSE Literature Revision
            </p>
          </article>
        );
      })}
    </div>
  );
}
