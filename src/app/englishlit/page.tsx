import Link from "next/link";
import Image from "next/image";
import { TEXT_REGISTRY, TEXT_ICONS, getActiveTexts } from "@/data/text-registry";
import PageBanner from "@/components/PageBanner";

const SECTION_IMAGES = [
  "/images/shakespeare-3d.png",
  "/images/19th-century-banner.png",
  "/images/modern-texts-banner.png",
  "/images/poetry-banner.png",
  "/images/unseen-poetry-banner.png",
];

export default function EnglishLitPage() {
  const activeTexts = getActiveTexts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PageBanner
        title="GCSE English Literature"
        subtitle={`AQA 8702 · ${activeTexts.length} set texts`}
        image="/images/hero-books.jpg"
      />

      {/* Quick links */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <Link
          href="/englishlit/texts"
          className="block rounded-xl border border-border bg-surface p-5 card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-purple-light text-purple flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
            </span>
            <div>
              <p className="font-display font-bold text-text">Set Texts</p>
              <p className="font-ui text-sm text-grey">Browse all {activeTexts.length} set texts</p>
            </div>
          </div>
        </Link>

        <Link
          href="/englishlit/aos"
          className="block rounded-xl border border-border bg-surface p-5 card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-blue/10 text-blue flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <div>
              <p className="font-display font-bold text-text">Assessment Objectives</p>
              <p className="font-ui text-sm text-grey">AO1–AO4 explained with examples</p>
            </div>
          </div>
        </Link>

        <Link
          href="/englishlit/essay-structure"
          className="block rounded-xl border border-border bg-surface p-5 card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
            </span>
            <div>
              <p className="font-display font-bold text-text">Essay Structure</p>
              <p className="font-ui text-sm text-grey">PEEL paragraphs and essay frameworks</p>
            </div>
          </div>
        </Link>

        <Link
          href="/englishlit/exam"
          className="block rounded-xl border border-border bg-surface p-5 card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-orange/10 text-orange flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
            </span>
            <div>
              <p className="font-display font-bold text-text">Exam Practice</p>
              <p className="font-ui text-sm text-grey">Practice questions with AI marking</p>
            </div>
          </div>
        </Link>

        <Link
          href="/englishlit/flashcards"
          className="block rounded-xl border border-border bg-surface p-5 card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-pink/10 text-pink flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" /></svg>
            </span>
            <div>
              <p className="font-display font-bold text-text">Flashcards</p>
              <p className="font-ui text-sm text-grey">Spaced repetition for key quotes &amp; terms</p>
            </div>
          </div>
        </Link>

        <Link
          href="/englishlit/vocab"
          className="block rounded-xl border border-border bg-surface p-5 card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-purple/10 text-purple flex items-center justify-center text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
            </span>
            <div>
              <p className="font-display font-bold text-text">Vocab Quiz</p>
              <p className="font-ui text-sm text-grey">Literary terminology and definitions</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Text groups */}
      <div className="space-y-8">
        {TEXT_REGISTRY.map((group, gi) => {
          const activeCount = group.texts.filter((t) => t.status === "active").length;
          return (
            <section key={group.label}>
              {/* Section header with image */}
              <div className="relative rounded-xl overflow-hidden mb-4 bg-[#1a1b3a]">
                <div className="relative h-24 sm:h-28">
                  <Image
                    src={SECTION_IMAGES[gi % SECTION_IMAGES.length]}
                    alt={group.label}
                    fill
                    className="object-cover object-center"
                    sizes="1200px"
                  />
                  <div className="absolute inset-0 bg-[#1a1b3a]/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b3a]/75 via-[#1a1b3a]/35 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center px-6">
                  <div className="flex items-center gap-3 w-full">
                    <span className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-white text-[15px] sm:text-[17px] truncate">
                        {group.label}
                      </p>
                      <p className="font-ui text-[12px] text-white/60">{group.paper} {group.section}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shrink-0">
                      {activeCount}/{group.texts.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.texts.map((t) => {
                  const active = t.status === "active";
                  const icon = TEXT_ICONS[t.slug];
                  const inner = (
                    <div className="flex items-start gap-4">
                      {icon && (
                        <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-surface-hover">
                          <Image src={icon} alt="" width={56} height={56} className="w-full h-full object-cover object-[center_30%]" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className={`font-display font-bold mb-1 ${active ? "text-text" : "text-grey"}`}>
                          {t.title}
                        </p>
                        <p className="text-sm text-grey font-ui">{t.author}</p>
                        <p className="text-xs text-grey font-ui mt-1">{t.year}</p>
                        <div className="mt-3">
                          {active ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-green-light text-green px-2 py-0.5 rounded-full">
                              Active
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-grey-light text-grey px-2 py-0.5 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                  return active ? (
                    <Link key={t.slug} href={`/englishlit/texts/${t.slug}`} className="rounded-xl border border-border bg-surface p-5 card-hover block transition-transform hover:-translate-y-1">
                      {inner}
                    </Link>
                  ) : (
                    <div key={t.slug} className="rounded-xl border border-border bg-surface p-5 coming-soon-overlay opacity-60">
                      {inner}
                    </div>
                  );
                })}
              </div>

              {gi < TEXT_REGISTRY.length - 1 && (
                <div className="h-px bg-border/50 mt-8" />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
