import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/data/geography/topic-registry";
import { getGeoTermsByTopic, getGeoCaseStudiesByTopic } from "@/data/geography/vocab";
import { getGeoExamQuestionCount } from "@/data/geography/exam-questions";
import GenerateGeographyFlashcardsButton from "@/components/GenerateGeographyFlashcardsButton";
import {
  AnimatedBreadcrumb,
  AnimatedHero,
  AnimatedDiv,
  AnimatedSection,
  AnimatedRevealLine,
  StaggerGrid,
  AnimatedInteractiveCard,
  AnimatedLinkCard,
  AnimatedIcon,
  AnimatedListItem,
} from "@/components/AnimatedWrappers";

const CATEGORY_COLOURS: Record<string, { bg: string; text: string; dot: string }> = {
  "key-term": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  process: { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" },
  "case-study": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "command-word": { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function GeographyTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic || topic.status !== "active") notFound();

  const terms = getGeoTermsByTopic(slug);
  const caseStudies = getGeoCaseStudiesByTopic(slug);
  const keyTerms = terms.filter((t) => t.category === "key-term");
  const processes = terms.filter((t) => t.category === "process");
  const examCount = getGeoExamQuestionCount(slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-[13px] text-grey mb-3">
          <Link href="/geography" className="hover:text-foreground transition-colors">
            Geography
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-foreground/70">{topic.title}</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Hero banner */}
      <AnimatedHero>
        <div className="relative rounded-2xl overflow-hidden mb-2 bg-[#1a1b3a]">
          <div className="h-36 sm:h-44 bg-gradient-to-br from-[#1a1b3a] via-[#252766] to-[#1a1b3a]" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-10">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                {topic.title}
              </h1>
              <p className="font-ui text-[14px] text-white/60">
                {topic.paper} {topic.section}&ensp;&middot;&ensp;{topic.unit}
              </p>
              {topic.description && (
                <p className="font-ui text-[13px] text-white/45 mt-2 max-w-lg">
                  {topic.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </AnimatedHero>

      {/* Action cards grid */}
      <StaggerGrid className="grid sm:grid-cols-2 gap-4 mb-10">
        {/* Key Terms */}
        <AnimatedInteractiveCard index={0}>
          <AnimatedLinkCard>
            <a href="#terms" className="card-hover rounded-xl border border-border bg-surface p-6 block">
              <AnimatedIcon><span className="text-2xl mb-2 block">📗</span></AnimatedIcon>
              <p className="font-display font-bold text-lg mb-1">Key Terms</p>
              <p className="text-sm text-grey font-ui">
                {keyTerms.length} key terms to learn
              </p>
            </a>
          </AnimatedLinkCard>
        </AnimatedInteractiveCard>

        {/* Processes */}
        {processes.length > 0 && (
          <AnimatedInteractiveCard index={1}>
            <AnimatedLinkCard>
              <a href="#processes" className="card-hover rounded-xl border border-border bg-surface p-6 block">
                <AnimatedIcon delay={0.05}><span className="text-2xl mb-2 block">🔄</span></AnimatedIcon>
                <p className="font-display font-bold text-lg mb-1">Processes</p>
                <p className="text-sm text-grey font-ui">
                  {processes.length} geographic processes
                </p>
              </a>
            </AnimatedLinkCard>
          </AnimatedInteractiveCard>
        )}

        {/* Case Studies */}
        {caseStudies.length > 0 && (
          <AnimatedInteractiveCard index={2}>
            <AnimatedLinkCard>
              <a href="#case-studies" className="card-hover rounded-xl border border-border bg-surface p-6 block">
                <AnimatedIcon delay={0.1}><span className="text-2xl mb-2 block">📍</span></AnimatedIcon>
                <p className="font-display font-bold text-lg mb-1">Case Studies</p>
                <p className="text-sm text-grey font-ui">
                  {caseStudies.length} named examples with facts, causes &amp; effects
                </p>
              </a>
            </AnimatedLinkCard>
          </AnimatedInteractiveCard>
        )}

        {/* Revision Sheet */}
        <AnimatedInteractiveCard index={3}>
          <AnimatedLinkCard>
            <Link href={`/geography/topics/${slug}/revision-sheet`} className="card-hover rounded-xl border border-border bg-surface p-6 block">
              <AnimatedIcon delay={0.15}><span className="text-2xl mb-2 block">📝</span></AnimatedIcon>
              <p className="font-display font-bold text-lg mb-1">Revision Sheet</p>
              <p className="text-sm text-grey font-ui">
                Printable A4 revision sheet with all key content
              </p>
            </Link>
          </AnimatedLinkCard>
        </AnimatedInteractiveCard>

        {/* Exam Practice */}
        <AnimatedInteractiveCard index={4}>
          <AnimatedLinkCard>
            <Link href="/geography/exam" className="card-hover rounded-xl border border-border bg-surface p-6 block">
              <AnimatedIcon delay={0.2}><span className="text-2xl mb-2 block">✍️</span></AnimatedIcon>
              <p className="font-display font-bold text-lg mb-1">Exam Practice</p>
              <p className="text-sm text-grey font-ui">
                {examCount} practice questions with AI marking
              </p>
            </Link>
          </AnimatedLinkCard>
        </AnimatedInteractiveCard>

        {/* Model Answers */}
        <AnimatedInteractiveCard index={5}>
          <AnimatedLinkCard>
            <Link href="/geography/model-answers" className="card-hover rounded-xl border border-border bg-surface p-6 block">
              <AnimatedIcon delay={0.25}><span className="text-2xl mb-2 block">🏆</span></AnimatedIcon>
              <p className="font-display font-bold text-lg mb-1">Model Answers</p>
              <p className="text-sm text-grey font-ui">
                Grade 9 model answers with examiner notes
              </p>
            </Link>
          </AnimatedLinkCard>
        </AnimatedInteractiveCard>
      </StaggerGrid>

      {/* Flashcards inline */}
      <AnimatedDiv>
        <div className="mb-10">
          <GenerateGeographyFlashcardsButton topicSlug={slug} />
        </div>
      </AnimatedDiv>

      <AnimatedRevealLine className="h-px bg-border/40 mb-8" delay={0.1} />

      {/* ─── Key Terms Section ─── */}
      <AnimatedSection>
        <section id="terms" className="mb-8 scroll-mt-20">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
            </span>
            Key Terms ({keyTerms.length})
          </h2>
          <div className="space-y-2">
            {keyTerms.map((term, i) => (
              <AnimatedListItem key={term.id} index={i}>
                <div className="rounded-lg border border-border bg-surface px-4 py-3 flex items-start gap-3">
                  <span className="font-ui text-sm font-semibold text-emerald-700 shrink-0 min-w-[140px]">
                    {term.word}
                  </span>
                  <span className="font-ui text-sm text-text">{term.def}</span>
                </div>
              </AnimatedListItem>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Processes Section ─── */}
      {processes.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection delay={0.1}>
            <section id="processes" className="mb-8 scroll-mt-20">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-sky-100 text-sky-600 flex items-center justify-center text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                </span>
                Processes ({processes.length})
              </h2>
              <div className="space-y-2">
                {processes.map((term, i) => (
                  <AnimatedListItem key={term.id} index={i}>
                    <div className="rounded-lg border border-border bg-surface px-4 py-3 flex items-start gap-3">
                      <span className="font-ui text-sm font-semibold text-sky-700 shrink-0 min-w-[140px]">
                        {term.word}
                      </span>
                      <span className="font-ui text-sm text-text">{term.def}</span>
                    </div>
                  </AnimatedListItem>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </>
      )}

      {/* ─── Case Studies Section ─── */}
      {caseStudies.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection delay={0.15}>
            <section id="case-studies" className="mb-8 scroll-mt-20">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-amber-100 text-amber-600 flex items-center justify-center text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </span>
                Case Studies ({caseStudies.length})
              </h2>
              <div className="space-y-4">
                {caseStudies.map((cs, i) => (
                  <AnimatedListItem key={cs.id} index={i}>
                    <Link
                      href={`/geography/topics/${slug}/case-studies/${cs.id}`}
                      className="block rounded-xl border border-border bg-surface p-5 card-hover"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display font-bold text-text mb-1">{cs.name}</h3>
                          <p className="font-ui text-xs text-grey">{cs.location}</p>
                        </div>
                        <span className="text-xs font-ui text-grey shrink-0 mt-1">&rarr;</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                          {cs.facts.length} facts
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 px-2 py-0.5 rounded-full">
                          {cs.causes.length} causes
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full">
                          {cs.effects.length} effects
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                          {cs.responses.length} responses
                        </span>
                      </div>
                    </Link>
                  </AnimatedListItem>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </>
      )}
    </div>
  );
}
