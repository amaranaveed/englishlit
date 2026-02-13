import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextBySlug } from "@/data/text-registry";
import { INSPECTOR_CALLS_ESSAYS, INSPECTOR_CALLS_EXTRACTS, INSPECTOR_CALLS_ESSAY_PLANS, INSPECTOR_CALLS_EXAM_QUESTIONS } from "@/data/exam-prep-inspector-calls";

interface Props {
  params: Promise<{ slug: string }>;
}

function getExamPrepStats(slug: string) {
  if (slug === "inspector-calls") {
    return {
      essays: INSPECTOR_CALLS_ESSAYS.length,
      extracts: INSPECTOR_CALLS_EXTRACTS.length,
      plans: INSPECTOR_CALLS_ESSAY_PLANS.length,
      questions: INSPECTOR_CALLS_EXAM_QUESTIONS.length,
    };
  }
  return null;
}

const SECTIONS = [
  {
    key: "essays",
    href: "essays",
    pdfFile: "example-essays.pdf",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Example Essay Answers",
    colour: "teal",
    getDesc: (n: number) => `${n} full Grade 9 model essays with technique dissection and examiner commentary.`,
    includes: [
      "Full-length Grade 9 essay responses",
      "Technique dissection with AO breakdown",
      "Paragraph-by-paragraph examiner commentary",
      "A4 printable format",
    ],
  },
  {
    key: "extracts",
    href: "extracts",
    pdfFile: "annotated-extracts.pdf",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    title: "Annotated Extracts",
    colour: "purple",
    getDesc: (n: number) => `${n} key extracts with colour-coded margin annotations breaking down language, structure, and Priestley's methods.`,
    includes: [
      "Key extracts from every act",
      "Margin-style colour-coded annotations",
      "Highlighted phrases with technique identification",
      "Context notes and overall analysis",
    ],
  },
  {
    key: "plans",
    href: "plans",
    pdfFile: "essay-plans.pdf",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    title: "Essay Plans & Templates",
    colour: "blue",
    getDesc: (n: number) => `${n} completed essay plans showing point-quote-analysis structure, plus blank templates for you to fill out yourself.`,
    includes: [
      "Completed plans with line of argument",
      "Point-Quote-Analysis for each paragraph",
      "Blank templates for self-practice",
      "Covers key themes and characters",
    ],
  },
  {
    key: "questions",
    href: "questions",
    pdfFile: "practice-questions.pdf",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Practice Exam Questions",
    colour: "orange",
    getDesc: (n: number) => `${n} exam-style questions with extracts, covering every major theme and character.`,
    includes: [
      "Extract-based questions (AQA format)",
      "Covers all key themes",
      "Planning space included",
      "30-mark questions with AO breakdown",
    ],
  },
];

const COLOUR_MAP: Record<string, { iconBg: string; iconText: string; cardBorder: string; badgeBg: string; badgeText: string; btnBg: string; btnHover: string }> = {
  teal:   { iconBg: "bg-teal-light", iconText: "text-teal", cardBorder: "border-teal/20", badgeBg: "bg-teal", badgeText: "text-white", btnBg: "bg-teal", btnHover: "hover:bg-teal/90" },
  purple: { iconBg: "bg-purple-light", iconText: "text-purple", cardBorder: "border-purple/20", badgeBg: "bg-purple", badgeText: "text-white", btnBg: "bg-purple", btnHover: "hover:bg-purple/90" },
  blue:   { iconBg: "bg-blue-light", iconText: "text-blue", cardBorder: "border-blue/20", badgeBg: "bg-blue", badgeText: "text-white", btnBg: "bg-blue", btnHover: "hover:bg-blue/90" },
  orange: { iconBg: "bg-orange-light", iconText: "text-orange", cardBorder: "border-orange/20", badgeBg: "bg-orange", badgeText: "text-white", btnBg: "bg-orange", btnHover: "hover:bg-orange/90" },
};

export default async function ExamPrepPage({ params }: Props) {
  const { slug } = await params;
  const text = getTextBySlug(slug);
  if (!text || text.status !== "active") notFound();

  const stats = getExamPrepStats(slug);
  if (!stats) notFound();

  const totalItems = stats.essays + stats.extracts + stats.plans + stats.questions;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="font-ui text-sm text-grey mb-6">
        <Link href="/texts" className="hover:text-teal transition-colors">Texts</Link>
        <span className="mx-2">&rsaquo;</span>
        <Link href={`/texts/${slug}`} className="hover:text-teal transition-colors">{text.title}</Link>
        <span className="mx-2">&rsaquo;</span>
        <span className="text-text font-medium">Exam Prep Kit</span>
      </nav>

      {/* Hero */}
      <div className="rounded-2xl border border-border bg-surface p-8 mb-8 text-center"
        style={{ background: "linear-gradient(135deg, var(--hero-gradient-1), var(--hero-gradient-2))" }}
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">
          Exam Preparation Kit
        </h1>
        <p className="font-display text-xl text-teal font-semibold italic mb-3">
          &lsquo;{text.title}&rsquo;
        </p>
        <p className="font-ui text-grey max-w-xl mx-auto mb-4">
          {text.author} &middot; {text.year} &middot; {text.paper} {text.section}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="inline-flex items-center rounded-full bg-teal text-white font-ui font-bold text-sm px-4 py-1.5">
            Grade 9 Targeted
          </span>
          <span className="inline-flex items-center rounded-full bg-surface border border-border text-text font-ui font-medium text-sm px-4 py-1.5">
            {totalItems} downloadable resources
          </span>
          <span className="inline-flex items-center rounded-full bg-surface border border-border text-text font-ui font-medium text-sm px-4 py-1.5">
            A4 printable
          </span>
        </div>

        <p className="font-body text-sm text-text leading-relaxed max-w-2xl mx-auto">
          Everything you need to ace your GCSE Literature exam on {text.title}. Click
          <strong> Download PDF</strong> on any section below to save a printable A4 revision
          document, or click <strong>Preview</strong> to view the material on screen.
        </p>
      </div>

      {/* Section cards */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {SECTIONS.map((section) => {
          const count = stats[section.key as keyof typeof stats];
          const c = COLOUR_MAP[section.colour];

          return (
            <div
              key={section.key}
              className={`rounded-xl border ${c.cardBorder} bg-surface p-6`}
            >
              <div className="flex items-start gap-4">
                <div className={`${c.iconBg} ${c.iconText} rounded-xl p-3 shrink-0`}>
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-display font-bold text-lg text-text">
                      {section.title}
                    </h2>
                    <span className={`${c.badgeBg} ${c.badgeText} font-ui font-bold text-xs rounded-full px-2 py-0.5`}>
                      {count}
                    </span>
                  </div>
                  <p className="font-body text-sm text-grey leading-relaxed mb-3">
                    {section.getDesc(count)}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {section.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className={`w-4 h-4 ${c.iconText} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="font-ui text-xs text-text">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={`/downloads/${slug}/${section.pdfFile}`}
                      download
                      className={`inline-flex items-center gap-2 rounded-lg ${c.btnBg} ${c.btnHover} text-white font-ui font-bold text-xs px-4 py-2 transition-colors`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Download PDF
                    </a>
                    <Link
                      href={`/texts/${slug}/exam-prep/${section.href}`}
                      className={`inline-flex items-center gap-1.5 rounded-lg border ${c.cardBorder} ${c.iconText} font-ui font-bold text-xs px-4 py-2 hover:bg-surface-hover transition-colors`}
                    >
                      Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* How to use */}
      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="font-display font-bold text-lg mb-3">How It Works</h2>
        <ol className="space-y-2">
          {[
            'Click "Download PDF" on any section above to save an A4-formatted revision document.',
            "Open the PDF in any viewer — it's ready to read on screen or print.",
            "Print on A4 paper for revision, annotate digitally, or keep on your device.",
            "Use the Preview button to browse the material on the website first.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-teal text-white font-ui font-bold text-xs flex items-center justify-center">
                {i + 1}
              </span>
              <span className="font-body text-sm text-text leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
