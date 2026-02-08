"use client";

import { useState } from "react";
import Link from "next/link";
import { getTextAOGuidance, ASSESSMENT_OBJECTIVES } from "@/data/assessment-objectives";

interface Props {
  textSlug: string;
  textTitle: string;
}

export default function TextAOGuide({ textSlug, textTitle }: Props) {
  const guidance = getTextAOGuidance(textSlug);
  const [openAO, setOpenAO] = useState<string | null>(null);

  if (!guidance) return null;

  const aos = [
    { id: "ao1" as const, data: guidance.ao1, ao: ASSESSMENT_OBJECTIVES[0] },
    { id: "ao2" as const, data: guidance.ao2, ao: ASSESSMENT_OBJECTIVES[1] },
    { id: "ao3" as const, data: guidance.ao3, ao: ASSESSMENT_OBJECTIVES[2] },
  ];

  const colourStyles: Record<string, { border: string; bg: string; text: string; badge: string; dotBg: string }> = {
    teal:   { border: "border-teal/20",   bg: "bg-teal-light",   text: "text-teal",   badge: "bg-teal text-white",   dotBg: "bg-teal" },
    purple: { border: "border-purple/20", bg: "bg-purple-light", text: "text-purple", badge: "bg-purple text-white", dotBg: "bg-purple" },
    blue:   { border: "border-blue/20",   bg: "bg-blue-light",   text: "text-blue",   badge: "bg-blue text-white",   dotBg: "bg-blue" },
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h2 className="font-display text-xl font-bold">
          AO Guide for {textTitle}
        </h2>
        <Link
          href="/aos"
          className="font-ui text-xs text-teal hover:underline"
        >
          View all AOs →
        </Link>
      </div>

      <div className="space-y-3">
        {aos.map(({ id, data, ao }) => {
          const cs = colourStyles[ao.colour] ?? colourStyles.teal;
          const isOpen = openAO === id;

          return (
            <div
              key={id}
              className={`rounded-xl border ${cs.border} ${isOpen ? cs.bg : "bg-surface"} transition-colors`}
            >
              <button
                onClick={() => setOpenAO(isOpen ? null : id)}
                className="w-full flex items-center gap-3 px-5 py-4 cursor-pointer text-left"
              >
                <span className={`${cs.badge} font-ui text-xs font-bold w-8 h-5 rounded-full flex items-center justify-center shrink-0`}>
                  {ao.shortLabel}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-ui text-sm font-semibold text-text">
                    {ao.label.split("—")[1]?.trim()}
                  </p>
                  <p className="font-ui text-xs text-grey">
                    {ao.maxMark} marks &middot; {ao.weight}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 text-grey shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
                  {/* Tips */}
                  <div>
                    <p className={`font-ui text-xs font-bold ${cs.text} uppercase tracking-wider mb-2`}>
                      Tips for {textTitle}
                    </p>
                    <ul className="space-y-1.5">
                      {data.tips.map((tip, i) => (
                        <li key={i} className="font-body text-sm text-text flex gap-2">
                          <span className={`${cs.text} shrink-0 font-bold`}>•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example */}
                  <div className="rounded-lg bg-surface border border-border p-3">
                    <p className="font-ui text-xs font-semibold text-grey mb-1">
                      Example sentence
                    </p>
                    <p className="font-body text-sm text-text italic leading-relaxed">
                      {data.examplePhrase}
                    </p>
                  </div>

                  {/* Quick sentence starters from the AO */}
                  <div>
                    <p className="font-ui text-xs font-semibold text-grey mb-1.5">
                      Sentence starters
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ao.sentenceStarters.slice(0, 4).map((ss, j) => (
                        <span
                          key={j}
                          className={`inline-block rounded-full ${cs.bg} border ${cs.border} px-2.5 py-1 font-ui text-xs ${cs.text}`}
                        >
                          {ss.starter}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
