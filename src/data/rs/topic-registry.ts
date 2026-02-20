// ─── RS TOPIC REGISTRY: AQA GCSE Religious Studies A (8062) ───

export interface TopicEntry {
  slug: string;
  title: string;
  paper: string;
  section: string;
  unit: string;
  status: "active" | "coming-soon";
  description?: string;
  colour?: string;
}

export interface TopicGroup {
  label: string;
  paper: string;
  section: string;
  topics: TopicEntry[];
}

export const RS_REGISTRY: TopicGroup[] = [
  {
    label: "Christianity",
    paper: "Paper 1",
    section: "Section A",
    topics: [
      {
        slug: "christianity-beliefs",
        title: "Christianity: Beliefs & Teachings",
        paper: "Paper 1",
        section: "Section A",
        unit: "3.1.1",
        status: "active",
        description: "The nature of God, creation, incarnation, crucifixion, resurrection, afterlife and salvation.",
        colour: "blue",
      },
      {
        slug: "christianity-practices",
        title: "Christianity: Practices",
        paper: "Paper 1",
        section: "Section A",
        unit: "3.1.2",
        status: "coming-soon",
      },
    ],
  },
  {
    label: "Islam",
    paper: "Paper 1",
    section: "Section B",
    topics: [
      {
        slug: "islam-beliefs",
        title: "Islam: Beliefs & Teachings",
        paper: "Paper 1",
        section: "Section B",
        unit: "3.1.3",
        status: "active",
        description: "The six articles of faith, five roots of Usul ad-Din, Tawhid, prophethood, angels, afterlife and predestination.",
        colour: "emerald",
      },
      {
        slug: "islam-practices",
        title: "Islam: Practices",
        paper: "Paper 1",
        section: "Section B",
        unit: "3.1.4",
        status: "coming-soon",
      },
    ],
  },
  {
    label: "Thematic Studies",
    paper: "Paper 2",
    section: "",
    topics: [
      {
        slug: "theme-a-relationships",
        title: "Theme A: Relationships & Families",
        paper: "Paper 2",
        section: "Theme A",
        unit: "3.2.1",
        status: "active",
        description: "Human sexuality, marriage, divorce, families, gender equality and contraception — Christian and Muslim perspectives.",
        colour: "rose",
      },
      {
        slug: "theme-b-religion-life",
        title: "Theme B: Religion & Life",
        paper: "Paper 2",
        section: "Theme B",
        unit: "3.2.2",
        status: "active",
        description: "Origins of the universe, environment, animals, abortion, euthanasia and life after death — Christian and Muslim perspectives.",
        colour: "teal",
      },
      {
        slug: "theme-c-existence-god",
        title: "Theme C: Existence of God & Revelation",
        paper: "Paper 2",
        section: "Theme C",
        unit: "3.2.3",
        status: "active",
        description: "Arguments for God's existence, miracles, religious experience, the problem of evil, revelation and enlightenment.",
        colour: "violet",
      },
      {
        slug: "theme-d-peace-conflict",
        title: "Theme D: Religion, Peace & Conflict",
        paper: "Paper 2",
        section: "Theme D",
        unit: "3.2.4",
        status: "active",
        description: "Violence, terrorism, just war, holy war, pacifism, nuclear weapons, peacemaking and reconciliation.",
        colour: "amber",
      },
      {
        slug: "theme-e-crime-punishment",
        title: "Theme E: Religion, Crime & Punishment",
        paper: "Paper 2",
        section: "Theme E",
        unit: "3.2.5",
        status: "active",
        description: "Reasons for crime, aims of punishment, the death penalty, forgiveness, good and evil — Christian and Muslim perspectives.",
        colour: "red",
      },
      {
        slug: "theme-f-human-rights",
        title: "Theme F: Religion, Human Rights & Social Justice",
        paper: "Paper 2",
        section: "Theme F",
        unit: "3.2.6",
        status: "active",
        description: "Human rights, prejudice, racism, sexism, wealth, poverty, exploitation and the role of religion in social justice.",
        colour: "cyan",
      },
    ],
  },
];

export function getAllRsTopics(): TopicEntry[] {
  return RS_REGISTRY.flatMap((g) => g.topics);
}

export function getActiveRsTopics(): TopicEntry[] {
  return getAllRsTopics().filter((t) => t.status === "active");
}

export function getRsTopicBySlug(slug: string): TopicEntry | undefined {
  return getAllRsTopics().find((t) => t.slug === slug);
}
