// ─── GEOGRAPHY TOPIC REGISTRY: AQA GCSE Geography 8035 ───

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

export const GEOGRAPHY_REGISTRY: TopicGroup[] = [
  {
    label: "Physical Geography",
    paper: "Paper 1",
    section: "Section A",
    topics: [
      { slug: "natural-hazards", title: "The Challenge of Natural Hazards", paper: "Paper 1", section: "Section A", unit: "3.1.1", status: "active", description: "Tectonic hazards, weather hazards, and climate change — plate boundaries, tropical storms, and UK weather extremes.", colour: "red" },
      { slug: "living-world", title: "The Living World", paper: "Paper 1", section: "Section A", unit: "3.1.2", status: "coming-soon" },
    ],
  },
  {
    label: "Physical Landscapes in the UK",
    paper: "Paper 1",
    section: "Section B",
    topics: [
      { slug: "rivers", title: "Rivers", paper: "Paper 1", section: "Section B", unit: "3.1.3.2", status: "active", description: "River landscapes — erosion, transportation, deposition, landforms, flooding, and flood management strategies.", colour: "sky" },
      { slug: "coasts", title: "Coastal Landscapes", paper: "Paper 1", section: "Section B", unit: "3.1.3.3", status: "active", description: "Coastal processes — weathering, erosion, mass movement, deposition, landforms, and coastal management.", colour: "teal" },
      { slug: "glacial-landscapes", title: "Glacial Landscapes", paper: "Paper 1", section: "Section B", unit: "3.1.3.4", status: "coming-soon" },
    ],
  },
  {
    label: "Human Geography",
    paper: "Paper 2",
    section: "Section A",
    topics: [
      { slug: "urban-issues", title: "Urban Issues and Challenges", paper: "Paper 2", section: "Section A", unit: "3.2.1", status: "active", description: "Urbanisation, megacities, sustainable urban living, UK city challenges, and regeneration projects.", colour: "violet" },
      { slug: "changing-economic-world", title: "The Changing Economic World", paper: "Paper 2", section: "Section A", unit: "3.2.2", status: "coming-soon" },
      { slug: "resource-management", title: "The Challenge of Resource Management", paper: "Paper 2", section: "Section B", unit: "3.2.3", status: "coming-soon" },
    ],
  },
  {
    label: "Geographical Applications",
    paper: "Paper 3",
    section: "",
    topics: [
      { slug: "fieldwork", title: "Geographical Applications & Fieldwork", paper: "Paper 3", section: "", unit: "3.3", status: "coming-soon" },
    ],
  },
];

export function getAllTopics(): TopicEntry[] {
  return GEOGRAPHY_REGISTRY.flatMap((g) => g.topics);
}

export function getActiveTopics(): TopicEntry[] {
  return getAllTopics().filter((t) => t.status === "active");
}

export function getTopicBySlug(slug: string): TopicEntry | undefined {
  return getAllTopics().find((t) => t.slug === slug);
}
