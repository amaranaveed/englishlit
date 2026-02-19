// ─── SUBJECT CONFIGURATION ───

export type SubjectId = "english-lit" | "geography";

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface SubjectConfig {
  id: SubjectId;
  name: string;
  shortName: string;
  examBoard: string;
  specCode: string;
  colour: string;
  basePath: string;
  navItems: NavItem[];
}

export const SUBJECTS: SubjectConfig[] = [
  {
    id: "english-lit",
    name: "English Literature",
    shortName: "Eng Lit",
    examBoard: "AQA",
    specCode: "8702",
    colour: "purple",
    basePath: "/englishlit",
    navItems: [
      { label: "Texts", href: "/englishlit/texts", hasDropdown: true },
      { label: "AOs", href: "/englishlit/aos" },
      { label: "Essay Structure", href: "/englishlit/essay-structure" },
      { label: "Exam Practice", href: "/englishlit/exam" },
      { label: "Flashcards", href: "/englishlit/flashcards" },
      { label: "Vocabulary", href: "/englishlit/vocab" },
    ],
  },
  {
    id: "geography",
    name: "Geography",
    shortName: "Geog",
    examBoard: "AQA",
    specCode: "8035",
    colour: "green",
    basePath: "/geography",
    navItems: [
      { label: "Topics", href: "/geography/topics", hasDropdown: true },
      { label: "AOs", href: "/geography/aos" },
      { label: "Essay Structure", href: "/geography/essay-structure" },
      { label: "Exam Practice", href: "/geography/exam" },
      { label: "Key Terms", href: "/geography/key-terms" },
      { label: "Flashcards", href: "/geography/flashcards" },
    ],
  },
];

export function getSubjectFromPath(pathname: string): SubjectConfig {
  if (pathname.startsWith("/geography")) return SUBJECTS[1];
  if (pathname.startsWith("/englishlit")) return SUBJECTS[0];
  return SUBJECTS[0];
}

export function getSubjectById(id: SubjectId): SubjectConfig {
  return SUBJECTS.find((s) => s.id === id)!;
}
