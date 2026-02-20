// ─── Religious Studies Data Types ───

export interface RSTerm {
  id: string;
  word: string;
  def: string;
  topicSlug: string;
  category: "key-term" | "teaching" | "practice" | "scripture" | "divergent-view";
}

export interface ScriptureQuote {
  id: string;
  topicSlug: string;
  text: string;
  source: string;
  religion: "christianity" | "islam";
  significance: string;
}

export interface DivergentView {
  id: string;
  topicSlug: string;
  issue: string;
  views: { label: string; position: string; evidence: string }[];
}
