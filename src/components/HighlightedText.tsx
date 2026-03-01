import React from "react";
import type { KeyWord } from "@/data/types";

/**
 * Parses **word** markers in text and renders them as teal-coloured bold spans.
 *
 * Tooltip definitions come from two sources:
 * 1. The keyWords prop (if provided)
 * 2. Inline bracketed definitions in the text itself — e.g. **proleptic** (anticipating future events)
 *
 * When a tooltip is shown, the bracketed text is stripped to avoid duplication.
 */

function TooltipWord({ word, def }: { word: string; def: string }) {
  return (
    <span className="vocab-tip group/vocab relative inline">
      <span
        className="font-bold text-teal underline decoration-dotted decoration-teal/40 underline-offset-2 cursor-help"
        tabIndex={0}
      >
        {word}
      </span>
      <span
        role="tooltip"
        className="vocab-tip-bubble pointer-events-none invisible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-max max-w-[220px] rounded-lg bg-text text-white px-3 py-2 font-ui text-xs leading-snug shadow-lg opacity-0 transition-all duration-150 group-hover/vocab:visible group-hover/vocab:opacity-100 group-focus-within/vocab:visible group-focus-within/vocab:opacity-100"
      >
        <span className="font-semibold text-teal-300">{word}</span>
        <span className="text-white/70"> — </span>
        {def}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text" />
      </span>
    </span>
  );
}

export default function HighlightedText({
  text,
  keyWords,
}: {
  text: string;
  keyWords?: KeyWord[];
}) {
  // Build definition lookup from keyWords prop
  const defMap = new Map<string, string>();
  if (keyWords?.length) {
    for (const kw of keyWords) {
      defMap.set(kw.word.toLowerCase(), kw.def);
    }
  }

  // Also extract inline **word** (definition) patterns from the text
  const inlinePattern = /\*\*([^*]+)\*\*\s*\(([^)]+)\)/g;
  let match;
  while ((match = inlinePattern.exec(text)) !== null) {
    const word = match[1].toLowerCase();
    if (!defMap.has(word)) {
      defMap.set(word, match[2]);
    }
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  // Track which bold-word indices have a tooltip, so we strip brackets from the next text part
  const tooltipIndices = new Set<number>();
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith("**") && part.endsWith("**")) {
      const word = part.slice(2, -2);
      if (defMap.has(word.toLowerCase())) {
        tooltipIndices.add(i);
      }
    }
  }

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const word = part.slice(2, -2);
          const def = defMap.get(word.toLowerCase());

          if (def) {
            return <TooltipWord key={i} word={word} def={def} />;
          }

          return (
            <span key={i} className="italic text-teal">
              {word}
            </span>
          );
        }

        // If the previous part was a tooltip word, strip the leading bracketed definition
        let displayText = part;
        if (tooltipIndices.has(i - 1)) {
          displayText = displayText.replace(/^\s*\([^)]*\)/, "");
        }

        return <React.Fragment key={i}>{displayText}</React.Fragment>;
      })}
    </>
  );
}
