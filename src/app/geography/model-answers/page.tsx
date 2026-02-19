import Link from "next/link";
import { getGeoModelAnswers } from "@/data/geography/model-answers";
import { getTopicBySlug, getActiveTopics } from "@/data/geography/topic-registry";
import {
  AnimatedBreadcrumb,
  AnimatedHero,
  AnimatedSection,
  AnimatedRevealLine,
  StaggerGrid,
  AnimatedLinkCard,
  AnimatedInteractiveCard,
  AnimatedIcon,
} from "@/components/AnimatedWrappers";

const MARK_COLOURS: Record<number, { bg: string; text: string }> = {
  4: { bg: "bg-blue-50", text: "text-blue-700" },
  6: { bg: "bg-purple-50", text: "text-purple-700" },
  9: { bg: "bg-orange-50", text: "text-orange-700" },
};

export default function ModelAnswersPage() {
  const allAnswers = getGeoModelAnswers();
  const topics = getActiveTopics();

  const grouped = topics
    .map((topic) => ({
      topic,
      answers: allAnswers.filter((a) => a.topicSlug === topic.slug),
    }))
    .filter((g) => g.answers.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-[13px] text-grey mb-3">
          <Link href="/geography" className="hover:text-foreground transition-colors">
            Geography
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-foreground/70">Model Answers</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Hero banner */}
      <AnimatedHero>
        <div className="relative rounded-2xl overflow-hidden mb-8 bg-[#1a1b3a]">
          <div className="h-36 sm:h-44 bg-gradient-to-br from-[#1a1b3a] via-[#252766] to-[#1a1b3a]" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-10">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                Model Answers
              </h1>
              <p className="font-ui text-[14px] text-white/60">
                {allAnswers.length} Grade 9 model answers with colour-coded structure &amp; examiner notes
              </p>
            </div>
          </div>
        </div>
      </AnimatedHero>

      {/* Grouped by topic */}
      <div className="space-y-10">
        {grouped.map((group, gi) => (
          <AnimatedSection key={group.topic.slug} delay={gi * 0.1}>
            <section>
              <h2 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <AnimatedIcon delay={gi * 0.05}>
                  <span className="text-xl">
                    {group.topic.slug === "natural-hazards" ? "🌋" :
                     group.topic.slug === "rivers" ? "🏞️" :
                     group.topic.slug === "coasts" ? "🏖️" : "🏙️"}
                  </span>
                </AnimatedIcon>
                {group.topic.title}
              </h2>

              <StaggerGrid className="grid sm:grid-cols-1 gap-3">
                {group.answers.map((answer, ai) => {
                  const colours = MARK_COLOURS[answer.marks] ?? { bg: "bg-grey-light", text: "text-grey" };
                  return (
                    <AnimatedInteractiveCard key={answer.id} index={ai}>
                      <AnimatedLinkCard>
                        <Link
                          href={`/geography/model-answers/${answer.id}`}
                          className="card-hover rounded-xl border border-border bg-surface p-5 block"
                        >
                          <div className="flex items-start gap-4">
                            <span className={`${colours.bg} ${colours.text} w-10 h-10 rounded-lg font-display font-bold text-sm flex items-center justify-center shrink-0`}>
                              {answer.marks}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-ui text-sm text-text mb-2 leading-relaxed">
                                {answer.question}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <span className={`text-[10px] font-bold uppercase tracking-wider ${colours.bg} ${colours.text} px-2 py-0.5 rounded-full`}>
                                  {answer.commandWord}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                                  Grade {answer.grade}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-grey-light text-grey px-2 py-0.5 rounded-full">
                                  {answer.steps.length} paragraphs
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-ui text-grey shrink-0 mt-1">&rarr;</span>
                          </div>
                        </Link>
                      </AnimatedLinkCard>
                    </AnimatedInteractiveCard>
                  );
                })}
              </StaggerGrid>

              {gi < grouped.length - 1 && (
                <AnimatedRevealLine className="h-px bg-border/40 mt-8" delay={0.1} />
              )}
            </section>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
