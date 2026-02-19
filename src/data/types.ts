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
  modelParagraph?: string;
}

// ─── Character Analysis Data Types ───

export interface ThemeLink {
  name: string;
  link: string;
}

export interface CharacterQuote {
  quote: string;
  act: string;
  analysis: string;
  themes: ThemeLink[];
}

export interface CharacterRelationship {
  character: string;
  nature: string;
  analysis: string;
}

export interface CharacterArcStage {
  title: string;
  act: string;
  description: string;
}

export interface CharacterAnalysis {
  name: string;
  textSlug: string;
  overview: string;
  themes: ThemeLink[];
  arc: {
    label: string;
    stages: CharacterArcStage[];
  };
  keyQuotes: CharacterQuote[];
  relationships: CharacterRelationship[];
  writersMethods: string;
  wow: string;
  keyWords: KeyWord[];
  examTip: string;
}

export interface Flashcard {
  id: string;
  type: "quote" | "technique" | "rad" | "wow" | "vocab" | "mistake" | "custom" | "character" | "theme" | "key-term" | "case-study" | "process";
  textSlug: string;
  front: string;
  back: string;
  confidence: number; // 0-3
  nextReview: string; // ISO date
  createdAt: string;
}

// ─── Theme Sheet Data Types (Printable A4) ───

export interface ThemeSheetQuote {
  quote: string;
  who: string;
  act: string;
  analysis: string[];
}

export interface ThemeSheetPoint {
  description: string;
  quotes: ThemeSheetQuote[];
}

export interface ThemeSheet {
  textSlug: string;
  theme: string;
  thesis: string;
  points: ThemeSheetPoint[];
}

export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface SubjectGrade {
  subjectId: "english-lit" | "geography";
  targetGrade: GradeLevel;
}

export interface UserProfile {
  firstName: string;
  yearGroup: 8 | 9 | 10 | 11;
  targetGrade: GradeLevel; // default / backwards compat
  subjects: SubjectGrade[];
  textSlugs: string[];
  geoTopicSlugs: string[];
  createdAt: string;
  updatedAt: string;
}

/** Get target grade for a specific subject, falling back to the default */
export function getSubjectTargetGrade(
  profile: UserProfile | null,
  subjectId: "english-lit" | "geography"
): GradeLevel | undefined {
  if (!profile) return undefined;
  const s = profile.subjects?.find((s) => s.subjectId === subjectId);
  return s?.targetGrade ?? profile.targetGrade;
}

export interface ExamResponse {
  id: string;
  textSlug: string;
  question: string;
  studentAnswer: string;
  timeSpent: number;
  marks?: number; // total marks for the question (e.g. 4, 6, 9 for geography)
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
