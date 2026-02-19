// ─── AQA GCSE Geography (8035) Assessment Objectives ───

export interface GeoAOTip {
  text: string;
  example?: string;
}

export interface GeoSentenceStarter {
  label: string;
  starter: string;
}

export interface GeoAODetail {
  id: "ao1" | "ao2" | "ao3" | "ao4";
  label: string;
  shortLabel: string;
  weight: string;
  colour: string;
  description: string;
  whatItMeans: string;
  examinerSummary: string;
  commonMistakes: string[];
  topTips: GeoAOTip[];
  sentenceStarters: GeoSentenceStarter[];
}

// ─── Core AO Definitions ───────────────────────────────

export const GEO_ASSESSMENT_OBJECTIVES: GeoAODetail[] = [
  {
    id: "ao1",
    label: "AO1 — Knowledge",
    shortLabel: "AO1",
    weight: "15%",
    colour: "teal",
    description:
      "Demonstrate knowledge of locations, places, processes, environments and different scales.",
    whatItMeans:
      "AO1 is about recalling factual information — place names, statistics, case study details, and precise geographical terminology. You need to show you know the content inside out.",
    examinerSummary:
      "The examiner wants to see named examples, specific facts and figures, and precise geographical terminology. Vague answers without real-world detail will not score highly.",
    commonMistakes: [
      "Being vague without naming specific places or locations",
      "Confusing geographical processes (e.g. erosion vs weathering)",
      "Not using case study detail — names, dates, statistics",
      "Listing facts without any depth or development",
    ],
    topTips: [
      {
        text: "Always name specific places and give figures when you can",
        example:
          "The 2004 Indian Ocean tsunami killed over 230,000 people across 14 countries, with Indonesia worst affected.",
      },
      {
        text: "Use detailed case study knowledge — names of places, dates, and statistics make your answer stand out",
        example:
          "In Boscastle, Cornwall, 75 mm of rain fell in 2 hours on 16 August 2004.",
      },
      {
        text: "Learn key geographical definitions precisely — the examiner can tell the difference between a textbook definition and a vague one",
      },
      {
        text: "Revise at different scales: local, national, international, global — the exam can ask about any of them",
      },
    ],
    sentenceStarters: [
      { label: "Named example", starter: "One example of this is..." },
      { label: "Place reference", starter: "In [place name]..." },
      { label: "Key feature", starter: "A key feature of this is..." },
      { label: "Case study", starter: "This can be seen in [case study]..." },
    ],
  },
  {
    id: "ao2",
    label: "AO2 — Understanding",
    shortLabel: "AO2",
    weight: "25%",
    colour: "purple",
    description:
      "Demonstrate geographical understanding of concepts and how they are interrelated.",
    whatItMeans:
      "AO2 is about showing WHY things happen, how geographical processes connect, and how concepts apply to real places. It goes beyond knowledge into explanation and reasoning.",
    examinerSummary:
      "The examiner wants to see cause-and-effect chains, links between human and physical factors, and clear explanations of interrelationships. Simply describing what happens is not enough — you must explain why.",
    commonMistakes: [
      "Describing what happens without explaining why it happens",
      "Not linking factors together — treating each point in isolation",
      "Ignoring interrelationships between human and physical geography",
      "Writing a list of points instead of building a chain of reasoning",
    ],
    topTips: [
      {
        text: "Use connective language that shows cause and effect: 'because', 'this leads to', 'as a result', 'consequently'",
        example:
          "Deforestation leads to increased surface runoff because there are fewer trees to intercept rainfall, which in turn increases flood risk downstream.",
      },
      {
        text: "Show chains of reasoning — don't just make one point, follow it through to its consequences",
      },
      {
        text: "Link social, economic, and environmental factors together to show you understand interrelationships",
        example:
          "Urbanisation increases impermeable surfaces (physical), which raises flood risk (environmental), damaging homes and businesses (economic) and displacing communities (social).",
      },
      {
        text: "Think about how processes at one scale affect outcomes at another — e.g. global climate change causing local flooding",
      },
    ],
    sentenceStarters: [
      { label: "Cause-effect", starter: "This happens because..." },
      { label: "Consequence", starter: "As a result of..." },
      { label: "Linking", starter: "This is linked to..." },
      { label: "Interrelationship", starter: "The relationship between X and Y..." },
    ],
  },
  {
    id: "ao3",
    label: "AO3 — Application & Analysis",
    shortLabel: "AO3",
    weight: "35%",
    colour: "blue",
    description:
      "Apply knowledge and understanding to interpret, analyse and evaluate geographical information and issues to make judgements.",
    whatItMeans:
      "AO3 is the highest-weighted objective. It is about using data, maps, graphs, and photographs to make informed judgements. This includes 10% of the total marks allocated to fieldwork context questions.",
    examinerSummary:
      "The examiner wants evidence-based arguments, balanced evaluation, supported conclusions, and confident data interpretation. You need to weigh up both sides and reach a justified conclusion.",
    commonMistakes: [
      "Writing one-sided arguments without considering alternative viewpoints",
      "Not using evidence from the resources provided in the exam paper",
      "Reaching weak conclusions that don't follow from your argument",
      "Not referring to specific data, figures, or evidence from the sources",
    ],
    topTips: [
      {
        text: "For 9-mark questions, argue both sides then reach a clear conclusion. The examiner rewards balanced, evaluative answers",
        example:
          "While tourism brings economic benefits such as job creation, it can also lead to environmental degradation. Overall, the most significant impact is...",
      },
      {
        text: "Always refer to specific data or evidence from the resources — quote figures, describe map patterns, reference photographs",
      },
      {
        text: "Use evaluative language: 'however', 'on the other hand', 'the most significant factor is', 'to a certain extent'",
      },
      {
        text: "In fieldwork questions, explain WHY you chose a method, not just WHAT you did — show understanding of reliability and accuracy",
      },
    ],
    sentenceStarters: [
      { label: "Evidence-based", starter: "The evidence suggests that..." },
      { label: "Counter-argument", starter: "However, it could be argued..." },
      { label: "Data reference", starter: "Figure X shows that..." },
      { label: "Judgement", starter: "Overall, the most significant factor is..." },
    ],
  },
  {
    id: "ao4",
    label: "AO4 — Geographical Skills",
    shortLabel: "AO4",
    weight: "25%",
    colour: "green",
    description:
      "Select, adapt and use a variety of skills and techniques to investigate questions and issues and communicate findings.",
    whatItMeans:
      "AO4 covers practical geographical skills: map reading, graph interpretation, statistical techniques, photograph analysis, and GIS. This includes 5% of the total marks allocated to fieldwork skills.",
    examinerSummary:
      "The examiner wants accurate use of data, correct units, precise grid references, and confident graph interpretation. Careless errors with units or grid references cost easy marks.",
    commonMistakes: [
      "Not including correct units in numerical answers (e.g. km, metres, %)",
      "Giving inaccurate or 4-figure grid references when 6-figure are required",
      "Misreading map scales or graph axes",
      "Not describing data trends clearly — just stating individual values",
    ],
    topTips: [
      {
        text: "Always include units in your answers — marks are lost every year for missing units",
        example:
          "The distance between A and B is 2.5 km (not just '2.5').",
      },
      {
        text: "Use 6-figure grid references unless the question specifically asks for 4-figure. Practise reading Ordnance Survey maps regularly",
        example:
          "The church is located at grid reference 295 437.",
      },
      {
        text: "When describing graphs, mention specific values, identify trends, and note any anomalies",
        example:
          "Rainfall peaks at 120 mm in November, then falls steadily to a low of 30 mm in April.",
      },
      {
        text: "For fieldwork questions, know the strengths and weaknesses of different data collection methods",
      },
    ],
    sentenceStarters: [
      { label: "Map reading", starter: "The map shows that..." },
      { label: "Data reference", starter: "According to Figure X..." },
      { label: "Grid reference", starter: "At grid reference..." },
      { label: "Trend", starter: "The trend shows..." },
    ],
  },
];

// ─── Paper-by-Paper AO Weighting Breakdown ─────────────

export interface GeoPaperAOBreakdown {
  paper: string;
  ao1: string;
  ao2: string;
  ao3: string;
  ao4: string;
  total: string;
}

export const GEO_PAPER_AO_BREAKDOWN: GeoPaperAOBreakdown[] = [
  { paper: "Paper 1", ao1: "7.5%", ao2: "11%", ao3: "8.5%", ao4: "8%", total: "35%" },
  { paper: "Paper 2", ao1: "7.5%", ao2: "11%", ao3: "8.5%", ao4: "8%", total: "35%" },
  { paper: "Paper 3", ao1: "0%", ao2: "3%", ao3: "18%", ao4: "9%", total: "30%" },
];

// ─── Helper functions ──────────────────────────────────

export function getGeoAO(id: string): GeoAODetail | undefined {
  return GEO_ASSESSMENT_OBJECTIVES.find((ao) => ao.id === id);
}
