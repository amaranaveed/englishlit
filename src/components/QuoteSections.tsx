import HighlightedText from "./HighlightedText";
import type { KeyWord } from "@/data/types";

/* ─── AO Badge ────────────────────────────────── */
function AOBadge({ ao, label }: { ao: string; label: string }) {
  const styles: Record<string, string> = {
    ao1: "bg-teal/10 text-teal border-teal/20",
    ao2: "bg-purple/10 text-purple border-purple/20",
    ao3: "bg-blue/10 text-blue border-blue/20",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-ui text-[10px] font-bold uppercase tracking-wider ${styles[ao] ?? styles.ao1}`}
      title={label}
    >
      {ao.toUpperCase()}
    </span>
  );
}

export function KeyWords({ words }: { words: KeyWord[] }) {
  if (!words.length) return null;
  return (
    <div className="border-t border-black/10 pt-3">
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-grey mb-2">
        Key Words
      </p>
      <div className="flex flex-wrap gap-2">
        {words.map((w) => (
          <span
            key={w.word}
            className="inline-flex items-center gap-1 rounded-full bg-surface-raised border border-black/10 px-2.5 py-1 font-ui text-xs"
            title={w.def}
          >
            <span className="font-bold text-teal">{w.word}</span>
            <span className="text-grey">— {w.def}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Section header with step number ───
function SectionHeader({
  step,
  title,
  colour,
  badgeClass,
}: {
  step: number;
  title: string;
  colour: string;
  badgeClass: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-7 h-7 rounded-full ${badgeClass} font-ui font-bold text-xs flex items-center justify-center`}
      >
        {step}
      </span>
      <h2 className={`font-ui font-bold text-sm uppercase tracking-wider ${colour}`}>
        {title}
      </h2>
    </div>
  );
}

// ─── 1. KEY QUOTE ───
export function KeyQuoteSection({
  text,
  who,
  act,
  note,
  highlight,
}: {
  text: string;
  who: string;
  act: string;
  note: string;
  highlight: string;
}) {
  return (
    <section className="rounded-xl border-2 border-teal bg-teal-light p-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <SectionHeader step={1} title="Key Quote" colour="text-teal" badgeClass="bg-teal text-white" />
        <AOBadge ao="ao1" label="AO1 — Response & Quotation" />
      </div>
      <blockquote className="font-body text-lg italic text-text leading-relaxed mb-3">
        &ldquo;{text}&rdquo;
      </blockquote>
      <p className="text-sm text-grey font-ui mb-2">{who} · {act}</p>
      {highlight && (
        <p className="text-sm font-ui text-teal font-semibold mb-2">
          Focus: &ldquo;{highlight}&rdquo;
        </p>
      )}
      <p className="font-body text-text leading-relaxed">
        <HighlightedText text={note} />
      </p>
    </section>
  );
}

// ─── 2 & 4. TECHNIQUE (reusable for both) ───
export function TechniqueSection({
  step,
  title,
  analysis,
  secondPoint,
  keyWords,
  variant,
}: {
  step: 2 | 4;
  title: string;
  analysis: string;
  secondPoint: string;
  keyWords: KeyWord[];
  variant: "purple" | "blue";
}) {
  const styles = {
    purple: { border: "border-purple", bg: "bg-purple-light", text: "text-purple", badge: "bg-purple text-white" },
    blue: { border: "border-blue", bg: "bg-blue-light", text: "text-blue", badge: "bg-blue text-white" },
  };
  const s = styles[variant];

  return (
    <section className={`rounded-xl border-2 ${s.border} ${s.bg} p-6 mb-6`}>
      <div className="flex items-center justify-between mb-3">
        <SectionHeader
          step={step}
          title={`Technique ${step === 2 ? 1 : 2} — ${title}`}
          colour={s.text}
          badgeClass={s.badge}
        />
        <AOBadge ao="ao2" label="AO2 — Language, Form & Structure" />
      </div>
      <p className="font-body text-text leading-relaxed mb-3">
        <HighlightedText text={analysis} />
      </p>
      <p className="font-body text-text leading-relaxed mb-4">
        <HighlightedText text={secondPoint} />
      </p>
      <KeyWords words={keyWords} />
    </section>
  );
}

// ─── 3. RAD ───
const RAD_STYLES: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  PROGRESS: { border: "border-green", bg: "bg-green-light", text: "text-green", badge: "bg-green text-white" },
  REGRESS: { border: "border-red", bg: "bg-red-light", text: "text-red", badge: "bg-red text-white" },
  STAGNATE: { border: "border-amber", bg: "bg-amber-light", text: "text-amber", badge: "bg-amber text-white" },
};

export function RADSection({
  label,
  analysis,
  keyWords,
}: {
  label: string;
  analysis: string;
  keyWords: KeyWord[];
}) {
  const s = RAD_STYLES[label] ?? RAD_STYLES.PROGRESS;
  return (
    <section className={`rounded-xl border-2 ${s.border} ${s.bg} p-6 mb-6`}>
      <div className="flex items-center justify-between mb-3">
        <SectionHeader step={3} title={`RAD — ${label}`} colour={s.text} badgeClass={s.badge} />
        <AOBadge ao="ao2" label="AO2 — Language, Form & Structure" />
      </div>
      <p className="font-body text-text leading-relaxed mb-4">
        <HighlightedText text={analysis} />
      </p>
      <KeyWords words={keyWords} />
    </section>
  );
}

// ─── 5. CONTEXT ───
export function ContextSection({
  points,
  keyWords,
}: {
  points: { label: string; text: string }[];
  keyWords: KeyWord[];
}) {
  return (
    <section className="rounded-xl border-2 border-orange bg-orange-light p-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <SectionHeader step={5} title="Context (AO3)" colour="text-orange" badgeClass="bg-orange text-white" />
        <AOBadge ao="ao3" label="AO3 — Context" />
      </div>
      <div className="space-y-3 mb-4">
        {points.map((p, i) => (
          <div key={i}>
            <p className="font-ui font-semibold text-sm text-orange mb-0.5">{p.label}</p>
            <p className="font-body text-text leading-relaxed">
              <HighlightedText text={p.text} />
            </p>
          </div>
        ))}
      </div>
      <KeyWords words={keyWords} />
    </section>
  );
}

// ─── 6. WOW ───
export function WOWSection({
  title,
  analysis,
  keyWords,
}: {
  title: string;
  analysis: string;
  keyWords: KeyWord[];
}) {
  return (
    <section className="rounded-xl border-2 border-teal bg-gradient-to-br from-teal-light to-purple-light p-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <SectionHeader step={6} title={`WOW — ${title}`} colour="text-teal" badgeClass="bg-teal text-white" />
        <div className="flex gap-1">
          <AOBadge ao="ao1" label="AO1 — Response & Quotation" />
          <AOBadge ao="ao2" label="AO2 — Language, Form & Structure" />
        </div>
      </div>
      <p className="font-body text-text leading-relaxed mb-4">
        <HighlightedText text={analysis} />
      </p>
      <KeyWords words={keyWords} />
    </section>
  );
}
