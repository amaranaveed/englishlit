import Link from "next/link";
import { notFound } from "next/navigation";
import { getGeoModelAnswerById, getGeoModelAnswers } from "@/data/geography/model-answers";
import { getTopicBySlug } from "@/data/geography/topic-registry";
import {
  AnimatedBreadcrumb,
  AnimatedDiv,
  AnimatedSection,
  AnimatedRevealLine,
  AnimatedListItem,
  AnimatedSlideRight,
} from "@/components/AnimatedWrappers";

const STEP_COLOURS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  teal: { bg: "bg-teal-light", text: "text-teal", border: "border-teal/20", dot: "bg-teal" },
  purple: { bg: "bg-purple-light", text: "text-purple", border: "border-purple/20", dot: "bg-purple" },
  blue: { bg: "bg-blue-light", text: "text-blue", border: "border-blue/20", dot: "bg-blue" },
  orange: { bg: "bg-orange-light", text: "text-orange", border: "border-orange/20", dot: "bg-orange" },
  green: { bg: "bg-green-light", text: "text-green", border: "border-green/20", dot: "bg-green" },
  red: { bg: "bg-red-light", text: "text-red", border: "border-red/20", dot: "bg-red" },
};

const MARK_COLOURS: Record<number, { bg: string; text: string }> = {
  4: { bg: "bg-blue-100", text: "text-blue-700" },
  6: { bg: "bg-purple-100", text: "text-purple-700" },
  9: { bg: "bg-orange-100", text: "text-orange-700" },
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ModelAnswerDetailPage({ params }: Props) {
  const { id } = await params;
  const answer = getGeoModelAnswerById(id);
  if (!answer) notFound();

  const topic = getTopicBySlug(answer.topicSlug);
  if (!topic) notFound();

  const allAnswers = getGeoModelAnswers();
  const currentIndex = allAnswers.findIndex((a) => a.id === id);
  const prev = currentIndex > 0 ? allAnswers[currentIndex - 1] : null;
  const next = currentIndex < allAnswers.length - 1 ? allAnswers[currentIndex + 1] : null;
  const markColours = MARK_COLOURS[answer.marks] ?? { bg: "bg-grey-light", text: "text-grey" };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0">
          <Link href="/geography" className="hover:text-teal transition-colors">Geography</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/geography/model-answers" className="hover:text-teal transition-colors">Model Answers</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">{answer.commandWord} ({answer.marks}m)</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Question display */}
      <AnimatedDiv>
        <div className={`rounded-xl border ${markColours.bg} p-6 mb-8`}>
          <div className="flex items-start gap-4">
            <span className={`${markColours.bg} ${markColours.text} w-12 h-12 rounded-lg font-display font-bold text-lg flex items-center justify-center shrink-0 border border-current/20`}>
              {answer.marks}
            </span>
            <div>
              <p className="font-ui text-base text-text leading-relaxed font-medium">
                {answer.question}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${markColours.bg} ${markColours.text} px-2 py-0.5 rounded-full border border-current/20`}>
                  {answer.commandWord}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                  Grade {answer.grade}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-grey-light text-grey px-2 py-0.5 rounded-full">
                  {topic.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>

      {/* Colour-coded structural breakdown */}
      <AnimatedSection>
        <h2 className="font-display text-lg font-bold mb-4">Model Answer Breakdown</h2>
        <div className="space-y-4">
          {answer.steps.map((step, i) => {
            const colours = STEP_COLOURS[step.colour] ?? STEP_COLOURS.teal;
            return (
              <AnimatedListItem key={i} index={i}>
                <div className={`rounded-xl border ${colours.border} ${colours.bg} p-5`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-6 h-6 rounded-md ${colours.dot} text-white flex items-center justify-center text-[11px] font-bold`}>
                      {i + 1}
                    </span>
                    <span className={`font-ui text-xs font-bold uppercase tracking-wider ${colours.text}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className="font-body text-sm text-text leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </AnimatedListItem>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/40 my-8" delay={0.1} />

      {/* Examiner notes */}
      <AnimatedSection delay={0.1}>
        <h2 className="font-display text-lg font-bold mb-4">Examiner Notes</h2>
        <div className="rounded-xl border border-teal/20 bg-teal-light p-5">
          <ul className="space-y-2">
            {answer.examinerNotes.map((note, i) => (
              <li key={i} className="font-ui text-sm text-text flex gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-1.5" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedRevealLine className="h-px bg-border/40 my-8" delay={0.1} />

      {/* Practice link */}
      <AnimatedSection delay={0.15}>
        <div className="rounded-xl border border-border bg-surface p-5 text-center">
          <p className="font-ui text-sm text-grey mb-3">
            Ready to try this question yourself?
          </p>
          <Link
            href="/geography/exam"
            className="inline-block px-6 py-2.5 rounded-xl bg-teal text-white font-ui text-sm font-bold hover:bg-teal/90 transition-colors"
          >
            Practice in Exam Mode &rarr;
          </Link>
        </div>
      </AnimatedSection>

      {/* Prev/Next navigation */}
      <AnimatedRevealLine className="h-px bg-border/30 my-6" delay={0.1} />
      <AnimatedSlideRight>
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              href={`/geography/model-answers/${prev.id}`}
              className="font-ui text-sm text-grey hover:text-text transition-colors"
            >
              &larr; Previous
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/geography/model-answers/${next.id}`}
              className="font-ui text-sm text-teal hover:underline"
            >
              Next &rarr;
            </Link>
          ) : (
            <Link
              href="/geography/model-answers"
              className="font-ui text-sm text-teal hover:underline"
            >
              All Model Answers &rarr;
            </Link>
          )}
        </div>
      </AnimatedSlideRight>
    </div>
  );
}
