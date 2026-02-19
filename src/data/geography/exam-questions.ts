// ─── Geography Exam Questions (AQA-style) ───

export interface GeoExamQuestion {
  topicSlug: string;
  question: string;
  marks: number;
  paper: number;
  commandWord: string;
}

// ─── Natural Hazards (Paper 1, Section A) ───

const naturalHazardsQuestions: GeoExamQuestion[] = [
  {
    topicSlug: "natural-hazards",
    question:
      "Describe the distribution of earthquakes and volcanic eruptions around the world. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Describe",
  },
  {
    topicSlug: "natural-hazards",
    question:
      "Explain how tectonic hazards can be managed to reduce the effects on people. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "natural-hazards",
    question:
      "Using a named example of a tectonic hazard in a lower income country (LIC) or newly emerging economy (NEE), explain the effects of the hazard on people and the environment. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "natural-hazards",
    question:
      "Explain how monitoring and prediction can reduce the effects of tropical storms. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "natural-hazards",
    question:
      "\u2018The effects of tropical storms are worse in lower income countries.\u2019 To what extent do you agree with this statement? [9 marks + 3 SPaG]",
    marks: 9,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "natural-hazards",
    question:
      "Evaluate the effectiveness of strategies used to reduce the risk from tectonic hazards. [9 marks + 3 SPaG]",
    marks: 9,
    paper: 1,
    commandWord: "Evaluate",
  },
];

// ─── Rivers (Paper 1, Section C) ───

const riversQuestions: GeoExamQuestion[] = [
  {
    topicSlug: "rivers",
    question: "Describe how a waterfall is formed. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Describe",
  },
  {
    topicSlug: "rivers",
    question:
      "Explain how the shape of a river valley changes between the upper course and the lower course. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "rivers",
    question:
      "Using a named example, explain the causes of a flood event. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "rivers",
    question:
      "Explain how erosion and deposition create landforms in a river landscape. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "rivers",
    question:
      "\u2018Hard engineering is the most effective way to manage the risk of flooding.\u2019 To what extent do you agree? [9 marks + 3 SPaG]",
    marks: 9,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "rivers",
    question:
      "Using a named example, assess the effectiveness of river flood management strategies. [9 marks + 3 SPaG]",
    marks: 9,
    paper: 1,
    commandWord: "Evaluate",
  },
];

// ─── Coasts (Paper 1, Section C) ───

const coastsQuestions: GeoExamQuestion[] = [
  {
    topicSlug: "coasts",
    question: "Describe the formation of a spit. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Describe",
  },
  {
    topicSlug: "coasts",
    question:
      "Explain how weathering and erosion shape the coastline. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "coasts",
    question:
      "Explain why some coastlines are more vulnerable to erosion than others. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "coasts",
    question:
      "Using a named example, explain the effects of coastal erosion on people and the environment. [6 marks]",
    marks: 6,
    paper: 1,
    commandWord: "Explain",
  },
  {
    topicSlug: "coasts",
    question:
      "\u2018Managed retreat is the most sustainable approach to coastal management.\u2019 To what extent do you agree? [9 marks + 3 SPaG]",
    marks: 9,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "coasts",
    question:
      "Evaluate the costs and benefits of different coastal management strategies. [9 marks + 3 SPaG]",
    marks: 9,
    paper: 1,
    commandWord: "Evaluate",
  },
];

// ─── Urban Issues (Paper 2, Section A) ───

const urbanIssuesQuestions: GeoExamQuestion[] = [
  {
    topicSlug: "urban-issues",
    question:
      "Describe the pattern of urban growth in lower income countries. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Describe",
  },
  {
    topicSlug: "urban-issues",
    question:
      "Explain the social and economic challenges caused by rapid urbanisation in LICs or NEEs. [6 marks]",
    marks: 6,
    paper: 2,
    commandWord: "Explain",
  },
  {
    topicSlug: "urban-issues",
    question:
      "Using a named example of a city in a LIC or NEE, explain how urban planning is improving the quality of life for people. [6 marks]",
    marks: 6,
    paper: 2,
    commandWord: "Explain",
  },
  {
    topicSlug: "urban-issues",
    question:
      "Explain the environmental challenges of living in a major UK city. [6 marks]",
    marks: 6,
    paper: 2,
    commandWord: "Explain",
  },
  {
    topicSlug: "urban-issues",
    question:
      "Using a named example, evaluate the effectiveness of an urban regeneration project in the UK. [9 marks + 3 SPaG]",
    marks: 9,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "urban-issues",
    question:
      "\u2018Sustainable urban living is the key to solving the problems of cities in the future.\u2019 To what extent do you agree? [9 marks + 3 SPaG]",
    marks: 9,
    paper: 2,
    commandWord: "Evaluate",
  },
];

// ─── Combined question bank ───

const allGeoExamQuestions: GeoExamQuestion[] = [
  ...naturalHazardsQuestions,
  ...riversQuestions,
  ...coastsQuestions,
  ...urbanIssuesQuestions,
];

// ─── Helper functions ───

export function getGeoExamQuestions(topicSlug: string): GeoExamQuestion[] {
  return allGeoExamQuestions.filter((q) => q.topicSlug === topicSlug);
}

export function getAllGeoExamQuestions(): GeoExamQuestion[] {
  return allGeoExamQuestions;
}

export function getGeoExamQuestionCount(topicSlug?: string): number {
  if (topicSlug) return allGeoExamQuestions.filter((q) => q.topicSlug === topicSlug).length;
  return allGeoExamQuestions.length;
}

// ─── Named topic exports ───

export {
  naturalHazardsQuestions,
  riversQuestions,
  coastsQuestions,
  urbanIssuesQuestions,
  allGeoExamQuestions,
};
