import { getTextBySlug } from "./text-registry";
import { getTopicBySlug } from "./geography/topic-registry";
import { getRsTopicBySlug } from "./rs/topic-registry";

/**
 * Unified title lookup — resolves a slug to its display title
 * across English Lit texts, Geography topics, and RS topics.
 */
export function getItemTitle(slug: string): string {
  // Check English Lit first
  const text = getTextBySlug(slug);
  if (text) return text.title;

  // Check Geography (strip geo- prefix if present)
  const geoSlug = slug.startsWith("geo-") ? slug.slice(4) : slug;
  const topic = getTopicBySlug(geoSlug);
  if (topic) return topic.title;

  // Check RS (strip rs- prefix if present)
  const rsSlug = slug.startsWith("rs-") ? slug.slice(3) : slug;
  const rsTopic = getRsTopicBySlug(rsSlug);
  if (rsTopic) return rsTopic.title;

  return slug;
}
