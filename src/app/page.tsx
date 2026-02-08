import Link from "next/link";
import { TEXT_REGISTRY, getActiveTexts } from "@/data/text-registry";

export default function HomePage() {
  const activeTexts = getActiveTexts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text mb-3">
          GCSE English Literature
        </h1>
        <p className="text-grey font-ui text-base sm:text-lg max-w-xl mx-auto">
          AQA 8702&ensp;·&ensp;LightUp 6-Part Quote Analysis, Exam Practice,
          Flashcards&nbsp;&amp;&nbsp;Vocab&nbsp;Quiz
        </p>
      </section>

      {/* Quick-start cards */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        <QuickCard href="/texts" icon="📚" label="Texts" sub={`${activeTexts.length} active`} colour="teal" />
        <QuickCard href="/exam" icon="✍️" label="Exam Practice" sub="Timed essays" colour="purple" />
        <QuickCard href="/flashcards" icon="🗂️" label="Flashcards" sub="Spaced repetition" colour="blue" />
        <QuickCard href="/vocab" icon="🔤" label="Vocab Quiz" sub="Key terms" colour="orange" />
      </section>

      {/* Active texts */}
      <section className="mb-14">
        <h2 className="font-display text-xl font-bold mb-4">Your Texts</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {activeTexts.map((t) => (
            <Link
              key={t.slug}
              href={`/texts/${t.slug}`}
              className="card-hover rounded-xl border border-border bg-white p-5 flex items-start gap-4"
            >
              <span className="w-10 h-10 rounded-lg bg-teal-light text-teal font-display font-bold text-lg flex items-center justify-center shrink-0">
                {t.title.charAt(0)}
              </span>
              <div>
                <p className="font-display font-bold text-text leading-snug">{t.title}</p>
                <p className="text-sm text-grey font-ui">{t.author}&ensp;·&ensp;{t.paper} {t.section}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All texts grouped */}
      <section>
        <h2 className="font-display text-xl font-bold mb-4">All AQA Texts</h2>
        <div className="space-y-6">
          {TEXT_REGISTRY.map((group) => (
            <div key={group.label}>
              <h3 className="font-ui text-sm font-semibold text-grey uppercase tracking-wider mb-2">
                {group.paper} {group.section} — {group.label}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.texts.map((t) => {
                  const active = t.status === "active";
                  const inner = (
                    <>
                      <div>
                        <p className={`font-semibold ${active ? "text-text" : "text-grey"}`}>{t.title}</p>
                        <p className="text-xs text-grey">{t.author}</p>
                      </div>
                      {active ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-green-light text-green px-2 py-0.5 rounded-full">Active</span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-grey-light text-grey px-2 py-0.5 rounded-full">Soon</span>
                      )}
                    </>
                  );
                  return active ? (
                    <Link key={t.slug} href={`/texts/${t.slug}`} className="rounded-lg border border-border bg-white px-4 py-3 font-ui text-sm flex items-center justify-between card-hover cursor-pointer">
                      {inner}
                    </Link>
                  ) : (
                    <div key={t.slug} className="rounded-lg border border-border bg-white px-4 py-3 font-ui text-sm flex items-center justify-between coming-soon-overlay opacity-60">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickCard({ href, icon, label, sub, colour }: { href: string; icon: string; label: string; sub: string; colour: string }) {
  const colourMap: Record<string, string> = {
    teal: "bg-teal-light text-teal",
    purple: "bg-purple-light text-purple",
    blue: "bg-blue-light text-blue",
    orange: "bg-orange-light text-orange",
  };
  return (
    <Link href={href} className="card-hover rounded-xl border border-border bg-white p-4 text-center">
      <span className="text-2xl mb-1 block">{icon}</span>
      <p className="font-ui font-semibold text-sm text-text">{label}</p>
      <p className={`font-ui text-xs mt-0.5 ${colourMap[colour] ?? "text-grey"}`}>{sub}</p>
    </Link>
  );
}
