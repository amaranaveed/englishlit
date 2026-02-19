import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/data/geography/topic-registry";
import { getGeoCaseStudyById, getGeoCaseStudiesByTopic } from "@/data/geography/vocab";
import { getGeoExamQuestions } from "@/data/geography/exam-questions";
import { CaseStudySection, SECTION_COLOURS } from "@/components/CaseStudySections";
import GenerateGeographyFlashcardsButton from "@/components/GenerateGeographyFlashcardsButton";
import {
  AnimatedBreadcrumb,
  AnimatedDiv,
  AnimatedSection,
  AnimatedPill,
  AnimatedRevealLine,
  AnimatedSlideRight,
} from "@/components/AnimatedWrappers";

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug, id } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic || topic.status !== "active") notFound();

  const cs = getGeoCaseStudyById(id);
  if (!cs || cs.topicSlug !== slug) notFound();

  const allCaseStudies = getGeoCaseStudiesByTopic(slug);
  const currentIndex = allCaseStudies.findIndex((c) => c.id === id);
  const prev = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : null;
  const next = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : null;
  const examQs = getGeoExamQuestions(slug);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-sm text-grey mb-6 flex flex-wrap items-center gap-0">
          <Link href="/geography" className="hover:text-teal transition-colors">Geography</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href={`/geography/topics/${slug}`} className="hover:text-teal transition-colors">{topic.title}</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-text font-medium">{cs.name}</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Case study nav pills */}
      <AnimatedDiv>
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {allCaseStudies.map((c) => (
            <AnimatedPill key={c.id}>
              <Link
                href={`/geography/topics/${slug}/case-studies/${c.id}`}
                className={`px-3 py-1.5 rounded-lg font-ui text-sm font-medium transition-colors ${
                  c.id === id
                    ? "bg-amber-100 text-amber-700 border border-amber-300"
                    : "bg-bg text-grey hover:text-text border border-border"
                }`}
              >
                {c.name}
              </Link>
            </AnimatedPill>
          ))}
        </div>
      </AnimatedDiv>

      {/* Header */}
      <AnimatedDiv>
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-text mb-2">
            {cs.name}
          </h1>
          <p className="font-ui text-sm text-grey">
            {cs.location}
          </p>
        </div>
      </AnimatedDiv>

      {/* Colour-coded sections */}
      <div className="space-y-4 mb-8">
        <CaseStudySection
          title="Key Facts"
          items={cs.facts}
          colour={SECTION_COLOURS.facts}
          delay={0.1}
        />
        <CaseStudySection
          title="Causes"
          items={cs.causes}
          colour={SECTION_COLOURS.causes}
          delay={0.15}
        />
        <CaseStudySection
          title="Effects"
          items={cs.effects}
          colour={SECTION_COLOURS.effects}
          delay={0.2}
        />
        <CaseStudySection
          title="Responses"
          items={cs.responses}
          colour={SECTION_COLOURS.responses}
          delay={0.25}
        />
      </div>

      <AnimatedRevealLine className="h-px bg-border/40 mb-8" delay={0.1} />

      {/* Generate flashcards */}
      <AnimatedSection>
        <div className="mb-8">
          <GenerateGeographyFlashcardsButton topicSlug={slug} />
        </div>
      </AnimatedSection>

      {/* Related exam questions */}
      {examQs.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection delay={0.1}>
            <section className="mb-8">
              <h2 className="font-display text-lg font-bold mb-3">Related Exam Questions</h2>
              <div className="space-y-2">
                {examQs.slice(0, 3).map((q, i) => (
                  <div key={i} className="rounded-lg border border-border bg-surface px-4 py-3">
                    <p className="font-ui text-sm text-text">{q.question}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-light text-teal px-2 py-0.5 rounded-full">
                        {q.marks} marks
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">
                        {q.commandWord}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/geography/exam"
                className="inline-block mt-3 font-ui text-sm text-teal hover:underline"
              >
                Practice all {examQs.length} questions &rarr;
              </Link>
            </section>
          </AnimatedSection>
        </>
      )}

      {/* Prev/Next navigation */}
      <AnimatedRevealLine className="h-px bg-border/30 mb-6" delay={0.1} />
      <AnimatedSlideRight>
        <div className="flex items-center justify-between">
          {prev ? (
            <Link
              href={`/geography/topics/${slug}/case-studies/${prev.id}`}
              className="font-ui text-sm text-grey hover:text-text transition-colors"
            >
              &larr; {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/geography/topics/${slug}/case-studies/${next.id}`}
              className="font-ui text-sm text-teal hover:underline"
            >
              {next.name} &rarr;
            </Link>
          ) : (
            <Link
              href={`/geography/topics/${slug}`}
              className="font-ui text-sm text-teal hover:underline"
            >
              Back to topic &rarr;
            </Link>
          )}
        </div>
      </AnimatedSlideRight>
    </div>
  );
}
