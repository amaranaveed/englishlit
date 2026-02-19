import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/data/geography/topic-registry";
import { getGeoTermsByTopic, getGeoCaseStudiesByTopic } from "@/data/geography/vocab";
import PrintButton from "@/components/PrintButton";
import {
  AnimatedBreadcrumb,
  AnimatedDiv,
  AnimatedSection,
  AnimatedRevealLine,
} from "@/components/AnimatedWrappers";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RevisionSheetPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic || topic.status !== "active") notFound();

  const terms = getGeoTermsByTopic(slug);
  const caseStudies = getGeoCaseStudiesByTopic(slug);
  const keyTerms = terms.filter((t) => t.category === "key-term");
  const processes = terms.filter((t) => t.category === "process");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print:max-w-none print:px-[10mm] print:py-0">
      {/* Header — hidden on print */}
      <div className="print:hidden">
        <AnimatedBreadcrumb>
          <nav className="font-ui text-sm text-grey mb-6">
            <Link href="/geography" className="hover:text-teal transition-colors">Geography</Link>
            <span className="mx-2">&rsaquo;</span>
            <Link href={`/geography/topics/${slug}`} className="hover:text-teal transition-colors">{topic.title}</Link>
            <span className="mx-2">&rsaquo;</span>
            <span className="text-text font-medium">Revision Sheet</span>
          </nav>
        </AnimatedBreadcrumb>

        <AnimatedDiv>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="font-display text-2xl font-bold text-text mb-1">
                {topic.title} &mdash; Revision Sheet
              </h1>
              <p className="font-ui text-sm text-grey">
                {topic.paper} {topic.section} &middot; {topic.unit} &middot; {keyTerms.length + processes.length} terms &middot; {caseStudies.length} case studies
              </p>
            </div>
            <PrintButton />
          </div>
        </AnimatedDiv>
      </div>

      {/* ─── Print title (visible only on print) ─── */}
      <div className="hidden print:block mb-4 pt-4">
        <h1 className="text-xl font-bold">{topic.title} — Revision Sheet</h1>
        <p className="text-xs text-gray-500">
          AQA GCSE Geography 8035 &middot; {topic.paper} {topic.section} &middot; {topic.unit}
        </p>
      </div>

      {/* ─── Key Terms Table ─── */}
      {keyTerms.length > 0 && (
        <AnimatedSection>
          <section className="mb-6 print:mb-4">
            <h2 className="font-display text-lg font-bold mb-3 print:text-base print:mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] print:hidden">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
              </span>
              Key Terms ({keyTerms.length})
            </h2>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border print:border-gray-400">
                  <th className="text-left font-ui font-semibold text-text py-2 pr-4 w-[180px] print:w-[140px]">Term</th>
                  <th className="text-left font-ui font-semibold text-text py-2">Definition</th>
                </tr>
              </thead>
              <tbody>
                {keyTerms.map((term) => (
                  <tr key={term.id} className="border-b border-border/50 print:border-gray-200">
                    <td className="font-ui font-semibold text-emerald-700 py-2 pr-4 print:text-black align-top">{term.word}</td>
                    <td className="font-ui text-text py-2 print:text-gray-700">{term.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </AnimatedSection>
      )}

      {/* ─── Processes Table ─── */}
      {processes.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-6 print:hidden" delay={0.1} />
          <AnimatedSection delay={0.1}>
            <section className="mb-6 print:mb-4">
              <h2 className="font-display text-lg font-bold mb-3 print:text-base print:mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-sky-100 text-sky-600 flex items-center justify-center text-[10px] print:hidden">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
                </span>
                Processes ({processes.length})
              </h2>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-border print:border-gray-400">
                    <th className="text-left font-ui font-semibold text-text py-2 pr-4 w-[180px] print:w-[140px]">Process</th>
                    <th className="text-left font-ui font-semibold text-text py-2">Definition</th>
                  </tr>
                </thead>
                <tbody>
                  {processes.map((term) => (
                    <tr key={term.id} className="border-b border-border/50 print:border-gray-200">
                      <td className="font-ui font-semibold text-sky-700 py-2 pr-4 print:text-black align-top">{term.word}</td>
                      <td className="font-ui text-text py-2 print:text-gray-700">{term.def}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </AnimatedSection>
        </>
      )}

      {/* ─── Case Studies ─── */}
      {caseStudies.length > 0 && (
        <>
          <AnimatedRevealLine className="h-px bg-border/30 mb-6 print:hidden" delay={0.1} />
          {caseStudies.map((cs, ci) => (
            <AnimatedSection key={cs.id} delay={0.1 + ci * 0.05}>
              <section className="mb-6 print:mb-4 print:break-inside-avoid">
                {ci > 0 && <div className="print:break-before-page" />}
                <h2 className="font-display text-lg font-bold mb-1 print:text-base">
                  {cs.name}
                </h2>
                <p className="font-ui text-xs text-grey mb-3">{cs.location}</p>

                <div className="grid sm:grid-cols-2 gap-3 print:grid-cols-2 print:gap-2">
                  {/* Facts */}
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 print:border-gray-300 print:bg-white">
                    <p className="font-ui text-[10px] font-bold uppercase tracking-wider text-amber-700 mb-1.5 print:text-black">Key Facts</p>
                    <ul className="space-y-1">
                      {cs.facts.map((f, i) => (
                        <li key={i} className="font-ui text-xs text-text flex gap-1.5">
                          <span className="text-amber-500 shrink-0 print:text-black">&bull;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Causes */}
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 print:border-gray-300 print:bg-white">
                    <p className="font-ui text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1.5 print:text-black">Causes</p>
                    <ul className="space-y-1">
                      {cs.causes.map((c, i) => (
                        <li key={i} className="font-ui text-xs text-text flex gap-1.5">
                          <span className="text-red-500 shrink-0 print:text-black">&bull;</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Effects */}
                  <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 print:border-gray-300 print:bg-white">
                    <p className="font-ui text-[10px] font-bold uppercase tracking-wider text-orange-700 mb-1.5 print:text-black">Effects</p>
                    <ul className="space-y-1">
                      {cs.effects.map((e, i) => (
                        <li key={i} className="font-ui text-xs text-text flex gap-1.5">
                          <span className="text-orange-500 shrink-0 print:text-black">&bull;</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responses */}
                  <div className="rounded-lg border border-green-200 bg-green-50 p-3 print:border-gray-300 print:bg-white">
                    <p className="font-ui text-[10px] font-bold uppercase tracking-wider text-green-700 mb-1.5 print:text-black">Responses</p>
                    <ul className="space-y-1">
                      {cs.responses.map((r, i) => (
                        <li key={i} className="font-ui text-xs text-text flex gap-1.5">
                          <span className="text-green-500 shrink-0 print:text-black">&bull;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </AnimatedSection>
          ))}
        </>
      )}
    </div>
  );
}
