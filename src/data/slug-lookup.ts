import { getTextBySlug } from "./text-registry";
import { getTopicBySlug } from "./geography/topic-registry";

/**
 * Unified title lookup — resolves a slug to its display title
 * across both English Lit texts and Geography topics.
 */
export function getItemTitle(slug: string): string {
  // Check English Lit first
  const text = getTextBySlug(slug);
  if (text) return text.title;

  // Check Geography (strip geo- prefix if present)
  const geoSlug = slug.startsWith("geo-") ? slug.slice(4) : slug;
  const topic = getTopicBySlug(geoSlug);
  if (topic) return topic.title;

  return slug;
}
