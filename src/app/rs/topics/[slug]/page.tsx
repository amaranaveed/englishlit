import Link from "next/link";
import { notFound } from "next/navigation";
import { getRsTopicBySlug } from "@/data/rs/topic-registry";
import { getRsTermsByTopic, getRsScriptureByTopic, getRsViewsByTopic } from "@/data/rs/vocab";
import { getRsExamQuestionsByTopic } from "@/data/rs/exam-questions";
import type { RSTerm, ScriptureQuote, DivergentView } from "@/data/rs/types";
import GenerateRsFlashcardsButton from "@/components/GenerateRsFlashcardsButton";
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
  "key-term": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  teaching: { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500" },
  scripture: { bg: "bg-violet-50", text: "text-violet-700", dot: "bg-violet-500" },
  "divergent-view": { bg: "bg-sky-50", text: "text-sky-700", dot: "bg-sky-500" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RsTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getRsTopicBySlug(slug);
  if (!topic || topic.status !== "active") notFound();

  const terms = getRsTermsByTopic(slug);
  const scripture = getRsScriptureByTopic(slug);
  const views = getRsViewsByTopic(slug);
  const keyTerms = terms.filter((t) => t.category === "key-term");
  const teachings = terms.filter((t) => t.category === "teaching");
  const examCount = getRsExamQuestionsByTopic(slug).length;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <AnimatedBreadcrumb>
        <nav className="font-ui text-[13px] text-grey mb-3">
          <Link href="/rs" className="hover:text-foreground transition-colors">
            Religious Studies
          </Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-foreground/70">{topic.title}</span>
        </nav>
      </AnimatedBreadcrumb>

      {/* Hero banner */}
      <AnimatedHero>
        <div className="relative rounded-2xl overflow-hidden mb-2 bg-[#1a1b3a]">
          <div className="h-36 sm:h-44 bg-gradient-to-br from-[#1a1b3a] via-[#1e2a5e] to-[#1a1b3a]" />
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
              <AnimatedIcon><span className="text-2xl mb-2 block">📘</span></AnimatedIcon>
              <p className="font-display font-bold text-lg mb-1">Key Terms</p>
              <p className="text-sm text-grey font-ui">
                {keyTerms.length} key terms to learn
              </p>
            </a>
          </AnimatedLinkCard>
        </AnimatedInteractiveCard>

        {/* Scripture Quotes */}
        {scripture.length > 0 && (
          <AnimatedInteractiveCard index={1}>
            <AnimatedLinkCard>
              <a href="#scripture" className="card-hover rounded-xl border border-border bg-surface p-6 block">
                <AnimatedIcon delay={0.05}><span className="text-2xl mb-2 block">📖</span></AnimatedIcon>
                <p className="font-display font-bold text-lg mb-1">Scripture Quotes</p>
                <p className="text-sm text-grey font-ui">
                  {scripture.length} key quotes from sources of wisdom
                </p>
              </a>
            </AnimatedLinkCard>
          </AnimatedInteractiveCard>
        )}

        {/* Divergent Views */}
        {views.length > 0 && (
          <AnimatedInteractiveCard index={2}>
            <AnimatedLinkCard>
              <a href="#views" className="card-hover rounded-xl border border-border bg-surface p-6 block">
                <AnimatedIcon delay={0.1}><span className="text-2xl mb-2 block">&#x2696;&#xFE0F;</span></AnimatedIcon>
                <p className="font-display font-bold text-lg mb-1">Divergent Views</p>
                <p className="text-sm text-grey font-ui">
                  {views.length} issues with contrasting positions
                </p>
              </a>
            </AnimatedLinkCard>
          </AnimatedInteractiveCard>
        )}

        {/* Exam Practice */}
        <AnimatedInteractiveCard index={3}>
          <AnimatedLinkCard>
            <Link href="/rs/exam" className="card-hover rounded-xl border border-border bg-surface p-6 block">
              <AnimatedIcon delay={0.2}><span className="text-2xl mb-2 block">&#x270D;&#xFE0F;</span></AnimatedIcon>
              <p className="font-display font-bold text-lg mb-1">Exam Practice</p>
              <p className="text-sm text-grey font-ui">
                {examCount} practice questions with AI marking
              </p>
            </Link>
          </AnimatedLinkCard>
        </AnimatedInteractiveCard>

        {/* Model Answers */}
        <AnimatedInteractiveCard index={4}>
          <AnimatedLinkCard>
            <Link href="/rs/model-answers" className="card-hover rounded-xl border border-border bg-surface p-6 block">
              <AnimatedIcon delay={0.25}><span className="text-2xl mb-2 block">&#x1F3C6;</span></AnimatedIcon>
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
          <GenerateRsFlashcardsButton topicSlug={slug} />
        </div>
      </AnimatedDiv>

      <AnimatedRevealLine className="h-px bg-border/40 mb-8" delay={0.1} />

      {/* ─── Key Terms Section ─── */}
      <AnimatedSection>
        <section id="terms" className="mb-8 scroll-mt-20">
          <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
            </span>
            Key Terms ({keyTerms.length})
          </h2>
          <div className="space-y-2">
            {keyTerms.map((term, i) => (
              <AnimatedListItem key={term.id} index={i}>
                <div className="rounded-lg border border-border bg-surface px-4 py-3 flex items-start gap-3">
                  <span className="font-ui text-sm font-semibold text-blue-700 shrink-0 min-w-[140px]">
                    {term.word}
                  </span>
                  <span className="font-ui text-sm text-text">{term.def}</span>
                </div>
              </AnimatedListItem>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Teachings Section ─── */}
      {teachings.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection delay={0.1}>
            <section id="teachings" className="mb-8 scroll-mt-20">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </span>
                Teachings ({teachings.length})
              </h2>
              <div className="space-y-2">
                {teachings.map((term, i) => (
                  <AnimatedListItem key={term.id} index={i}>
                    <div className="rounded-lg border border-border bg-surface px-4 py-3 flex items-start gap-3">
                      <span className="font-ui text-sm font-semibold text-indigo-700 shrink-0 min-w-[140px]">
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

      {/* ─── Scripture Quotes Section ─── */}
      {scripture.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection delay={0.15}>
            <section id="scripture" className="mb-8 scroll-mt-20">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-violet-100 text-violet-600 flex items-center justify-center text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </span>
                Scripture Quotes ({scripture.length})
              </h2>
              <div className="space-y-4">
                {scripture.map((sq, i) => (
                  <AnimatedListItem key={sq.id} index={i}>
                    <div className="rounded-xl border border-border bg-surface p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="font-body text-sm text-text leading-relaxed italic">
                          &ldquo;{sq.text}&rdquo;
                        </p>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                          sq.religion === "christianity"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}>
                          {sq.religion}
                        </span>
                      </div>
                      <p className="font-ui text-xs font-semibold text-violet-700 mb-1">
                        {sq.source}
                      </p>
                      <p className="font-ui text-xs text-grey">
                        {sq.significance}
                      </p>
                    </div>
                  </AnimatedListItem>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </>
      )}

      {/* ─── Divergent Views Section ─── */}
      {views.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-8" delay={0.1} />
          <AnimatedSection delay={0.2}>
            <section id="views" className="mb-8 scroll-mt-20">
              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-sky-100 text-sky-600 flex items-center justify-center text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
                </span>
                Divergent Views ({views.length})
              </h2>
              <div className="space-y-4">
                {views.map((view, i) => (
                  <AnimatedListItem key={view.id} index={i}>
                    <div className="rounded-xl border border-border bg-surface p-5">
                      <h3 className="font-display font-bold text-text mb-3">{view.issue}</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {view.views.map((v, vi) => (
                          <div
                            key={vi}
                            className={`rounded-lg p-4 ${
                              vi === 0
                                ? "bg-blue-50 border border-blue-200"
                                : "bg-indigo-50 border border-indigo-200"
                            }`}
                          >
                            <p className={`font-ui text-xs font-bold uppercase tracking-wider mb-1 ${
                              vi === 0 ? "text-blue-700" : "text-indigo-700"
                            }`}>
                              {v.label}
                            </p>
                            <p className="font-ui text-sm text-text mb-2">{v.position}</p>
                            <p className="font-ui text-xs text-grey italic">{v.evidence}</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
