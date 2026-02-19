// ─── Geography Data Types ───

export interface GeographyTerm {
  id: string;
  word: string;
  def: string;
  topicSlug: string;
  category: "key-term" | "process" | "case-study" | "command-word";
}

export interface CaseStudy {
  id: string;
  topicSlug: string;
  name: string;
  location: string;
  facts: string[];
  causes: string[];
  effects: string[];
  responses: string[];
}
