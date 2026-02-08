// ─── Quote Analysis Data Types ───

export interface KeyWord {
  word: string;
  def: string;
}

export interface KeyQuote {
  text: string;
  highlight: string;
  note: string;
}

export interface TechniqueSection {
  title: string;
  analysis: string;
  secondPoint: string;
  keyWords: KeyWord[];
}

export interface RADSection {
  label: "PROGRESS" | "REGRESS" | "STAGNATE";
  analysis: string;
  keyWords: KeyWord[];
}

export interface ContextPoint {
  label: string;
  text: string;
}

export interface ContextSection {
  points: ContextPoint[];
  keyWords: KeyWord[];
}

export interface WOWSection {
  title: string;
  analysis: string;
  keyWords: KeyWord[];
}

export interface Quote {
  id: number;
  textSlug: string;
  quote: string;
  who: string;
  act: string;
  themes: string[];
  keyQuote: KeyQuote;
  technique1: TechniqueSection;
  rad: RADSection;
  technique2: TechniqueSection;
  context: ContextSection;
  wow: WOWSection;
}

export interface ExamQuestion {
  textSlug: string;
  question: string;
}

export interface Flashcard {
  id: string;
  type: "quote" | "technique" | "rad" | "wow" | "vocab" | "mistake" | "custom";
  textSlug: string;
  front: string;
  back: string;
  confidence: number; // 0-3
  nextReview: string; // ISO date
  createdAt: string;
}

export interface ExamResponse {
  id: string;
  textSlug: string;
  question: string;
  studentAnswer: string;
  timeSpent: number;
  marking?: {
    level: number;
    mark: number;
    grade: string;
    ao1: { mark: number; feedback: string };
    ao2: { mark: number; feedback: string };
    ao3: { mark: number; feedback: string };
    strengths: string[];
    improvements: string[];
    mistakes: { topic: string; correction: string }[];
    modelParagraph: string;
  };
}
