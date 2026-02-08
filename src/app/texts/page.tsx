import Link from "next/link";
import { TEXT_REGISTRY } from "@/data/text-registry";

export default function TextsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-2xl sm:text-3xl font-bold mb-8">All Texts</h1>

      <div className="space-y-8">
        {TEXT_REGISTRY.map((group) => (
          <section key={group.label}>
            <h2 className="font-ui text-sm font-semibold text-grey uppercase tracking-wider mb-3">
              {group.paper} {group.section} — {group.label}
            </h2>
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
