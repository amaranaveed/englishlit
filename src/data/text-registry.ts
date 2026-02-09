// ─── TEXT REGISTRY: All AQA GCSE Literature Texts ───

export interface TextEntry {
  slug: string;
  title: string;
  author: string;
  year: string;
  paper: string;
  section: string;
  status: "active" | "coming-soon";
}

export interface PaperGroup {
  label: string;
  paper: string;
  section: string;
  texts: TextEntry[];
}

export const TEXT_REGISTRY: PaperGroup[] = [
  {
    label: "Shakespeare",
    paper: "Paper 1",
    section: "Section A",
    texts: [
      { slug: "much-ado", title: "Much Ado About Nothing", author: "William Shakespeare", year: "1598-99", paper: "Paper 1", section: "Section A", status: "active" },
      { slug: "macbeth", title: "Macbeth", author: "William Shakespeare", year: "1606", paper: "Paper 1", section: "Section A", status: "active" },
      { slug: "romeo-juliet", title: "Romeo and Juliet", author: "William Shakespeare", year: "1597", paper: "Paper 1", section: "Section A", status: "active" },
      { slug: "tempest", title: "The Tempest", author: "William Shakespeare", year: "1611", paper: "Paper 1", section: "Section A", status: "active" },
      { slug: "merchant-venice", title: "The Merchant of Venice", author: "William Shakespeare", year: "1596-98", paper: "Paper 1", section: "Section A", status: "active" },
      { slug: "julius-caesar", title: "Julius Caesar", author: "William Shakespeare", year: "1599", paper: "Paper 1", section: "Section A", status: "active" },
    ],
  },
  {
    label: "19th Century Novel",
    paper: "Paper 1",
    section: "Section B",
    texts: [
      { slug: "pride-prejudice", title: "Pride and Prejudice", author: "Jane Austen", year: "1813", paper: "Paper 1", section: "Section B", status: "active" },
      { slug: "christmas-carol", title: "A Christmas Carol", author: "Charles Dickens", year: "1843", paper: "Paper 1", section: "Section B", status: "active" },
      { slug: "great-expectations", title: "Great Expectations", author: "Charles Dickens", year: "1861", paper: "Paper 1", section: "Section B", status: "active" },
      { slug: "jekyll-hyde", title: "Dr Jekyll and Mr Hyde", author: "R.L. Stevenson", year: "1886", paper: "Paper 1", section: "Section B", status: "active" },
      { slug: "frankenstein", title: "Frankenstein", author: "Mary Shelley", year: "1818", paper: "Paper 1", section: "Section B", status: "active" },
      { slug: "jane-eyre", title: "Jane Eyre", author: "Charlotte Brontë", year: "1847", paper: "Paper 1", section: "Section B", status: "active" },
      { slug: "sign-of-four", title: "The Sign of Four", author: "Arthur Conan Doyle", year: "1890", paper: "Paper 1", section: "Section B", status: "active" },
    ],
  },
  {
    label: "Modern Text",
    paper: "Paper 2",
    section: "Section A",
    texts: [
      { slug: "inspector-calls", title: "An Inspector Calls", author: "J.B. Priestley", year: "1945", paper: "Paper 2", section: "Section A", status: "active" },
      { slug: "blood-brothers", title: "Blood Brothers", author: "Willy Russell", year: "1983", paper: "Paper 2", section: "Section A", status: "active" },
      { slug: "animal-farm", title: "Animal Farm", author: "George Orwell", year: "1945", paper: "Paper 2", section: "Section A", status: "active" },
      { slug: "lord-of-flies", title: "Lord of the Flies", author: "William Golding", year: "1954", paper: "Paper 2", section: "Section A", status: "active" },
      { slug: "taste-of-honey", title: "A Taste of Honey", author: "Shelagh Delaney", year: "1958", paper: "Paper 2", section: "Section A", status: "active" },
      { slug: "history-boys", title: "The History Boys", author: "Alan Bennett", year: "2004", paper: "Paper 2", section: "Section A", status: "coming-soon" },
      { slug: "dna", title: "DNA", author: "Dennis Kelly", year: "2008", paper: "Paper 2", section: "Section A", status: "coming-soon" },
      { slug: "curious-incident", title: "The Curious Incident", author: "Mark Haddon", year: "2003", paper: "Paper 2", section: "Section A", status: "coming-soon" },
      { slug: "pigeon-english", title: "Pigeon English", author: "Stephen Kelman", year: "2011", paper: "Paper 2", section: "Section A", status: "coming-soon" },
      { slug: "never-let-me-go", title: "Never Let Me Go", author: "Kazuo Ishiguro", year: "2005", paper: "Paper 2", section: "Section A", status: "coming-soon" },
    ],
  },
  {
    label: "Poetry Anthology",
    paper: "Paper 2",
    section: "Section B",
    texts: [
      { slug: "love-relationships", title: "Love & Relationships Anthology", author: "Various (15 poems)", year: "", paper: "Paper 2", section: "Section B", status: "coming-soon" },
      { slug: "power-conflict", title: "Power & Conflict Anthology", author: "Various (15 poems)", year: "", paper: "Paper 2", section: "Section B", status: "coming-soon" },
      { slug: "worlds-lives", title: "Worlds & Lives Anthology (2025+)", author: "Various (15 poems)", year: "", paper: "Paper 2", section: "Section B", status: "coming-soon" },
    ],
  },
  {
    label: "Unseen Poetry",
    paper: "Paper 2",
    section: "Section C",
    texts: [
      { slug: "unseen-poetry", title: "Unseen Poetry Practice", author: "N/A", year: "", paper: "Paper 2", section: "Section C", status: "coming-soon" },
    ],
  },
];

// Flat list helper
export function getAllTexts(): TextEntry[] {
  return TEXT_REGISTRY.flatMap((g) => g.texts);
}

export function getActiveTexts(): TextEntry[] {
  return getAllTexts().filter((t) => t.status === "active");
}

export function getTextBySlug(slug: string): TextEntry | undefined {
  return getAllTexts().find((t) => t.slug === slug);
}
