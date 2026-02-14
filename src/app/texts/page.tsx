import Link from "next/link";
import Image from "next/image";
import { TEXT_REGISTRY } from "@/data/text-registry";

const SECTION_IMAGES = [
  "/images/shakespeare-3d.png", // Shakespeare
  "/images/19th-century-banner.png",     // 19th Century Novel
  "/images/modern-texts-banner.png",   // Modern Texts
  "/images/poetry-banner.png",       // Poetry
  "/images/unseen-poetry-banner.png",       // Unseen Poetry
];

export default function TextsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header with background image */}
      <div className="relative rounded-2xl overflow-hidden mb-10">
        <div className="relative h-48 sm:h-56">
          <Image src="/images/hero-books.jpg" alt="Books on shelves" fill className="object-cover" sizes="1200px" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-navy)]/90 via-[var(--bg-navy)]/70 to-[var(--bg-navy)]/50" />
        </div>
        <div className="absolute inset-0 flex items-center px-8 sm:px-10">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">All Texts</h1>
            <p className="font-ui text-[15px] text-white/70">
              Every set text for AQA GCSE English Literature 8702
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {TEXT_REGISTRY.map((group, gi) => (
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
                    {group.texts.filter(t => t.status === "active").length}/{group.texts.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.texts.map((t) => {
                const active = t.status === "active";
                const inner = (
                  <>
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
                  </>
                );
                return active ? (
                  <Link key={t.slug} href={`/texts/${t.slug}`} className="rounded-xl border border-border bg-surface p-5 card-hover">
                    {inner}
                  </Link>
                ) : (
                  <div key={t.slug} className="rounded-xl border border-border bg-surface p-5 coming-soon-overlay opacity-60">
                    {inner}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
