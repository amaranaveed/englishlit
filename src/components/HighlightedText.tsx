import React from "react";

/**
 * Parses **word** markers in text and renders them as teal-coloured bold spans.
 * Used throughout the 6-part analysis sections for vocabulary highlighting.
 */
export default function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const word = part.slice(2, -2);
          return (
            <span key={i} className="font-bold text-teal">
              {word}
            </span>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
