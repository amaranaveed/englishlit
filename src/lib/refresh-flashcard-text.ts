import { ALL_QUOTES } from "@/data/quotes";
import type { Flashcard } from "@/data/types";

/**
 * Regenerates the back text for all quote-based flashcards from source data.
 * Preserves review progress (confidence, nextReview).
 * Card IDs follow: {textSlug}-q{quoteId}-{type}
 */
export function refreshCardText(cards: Flashcard[]): Flashcard[] {
  // Build lookup: "textSlug-quoteId" → Quote
  const quoteMap = new Map(
    ALL_QUOTES.map((q) => [`${q.textSlug}-q${q.id}`, q])
  );

  return cards.map((card) => {
    // Parse card ID: e.g. "frankenstein-q1-wow"
    const match = card.id.match(/^(.+)-q(\d+)-(tech1|tech2|rad|wow|quote)$/);
    if (!match) return card; // vocab, character, theme cards — skip

    const key = `${match[1]}-q${match[2]}`;
    const cardType = match[3];
    const quote = quoteMap.get(key);
    if (!quote) return card;

    const strip = (t: string) => t.replace(/\*\*([^*]+)\*\*/g, "$1");

    let back = card.back;
    switch (cardType) {
      case "tech1":
        back = `${quote.technique1.title} — ${strip(quote.technique1.analysis)}`;
        break;
      case "tech2":
        back = `${quote.technique2.title} — ${strip(quote.technique2.analysis)}`;
        break;
      case "rad":
        back = `${quote.rad.label} — ${strip(quote.rad.analysis)}`;
        break;
      case "wow":
        back = `${quote.wow.title} — ${strip(quote.wow.analysis)}`;
        break;
      case "quote":
        back = `${quote.who} — ${quote.act}`;
        break;
    }

    if (back === card.back) return card;
    return { ...card, back };
  });
}
