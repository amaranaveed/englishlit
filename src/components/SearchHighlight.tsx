"use client";

export default function SearchHighlight({ text, query }: { text: string; query: string }) {
  if (!query || query.length < 2) return <>{text}</>;

  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-purple-light text-purple font-semibold rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
