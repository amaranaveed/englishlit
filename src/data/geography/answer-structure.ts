// ─── Geography Answer Structure Data (AQA GCSE 8035) ───

export interface AnswerType {
  id: string;
  marks: number;
  label: string;
  colour: string;
  timeMinutes: number;
  commandWords: string[];
  structure: string[];
  levelDescriptors: { level: number; range: string; descriptor: string }[];
  doThis: string;
  notThis: string;
  tip: string;
}

export interface CommandWord {
  word: string;
  meaning: string;
  typicalMarks: string;
  colour: string;
}

// ─── Answer Types ───

export const ANSWER_TYPES: AnswerType[] = [
  {
    id: "short",
    marks: 2,
    label: "1–2 mark questions",
    colour: "teal",
    timeMinutes: 1,
    commandWords: ["State", "Name", "Define", "Give", "Calculate"],
    structure: [
      "Give a precise definition or named example",
      "Include specific detail or a statistic",
    ],
    levelDescriptors: [],
    doThis:
      "Urbanisation is the growth in the proportion of a country\u2019s population living in urban areas.",
    notThis: "Urbanisation is when people move to cities.",
    tip: "Be precise. One clear sentence with a key detail is worth more than a vague paragraph. If a question says \u2018State\u2019, you do not need to explain \u2014 just give the fact.",
  },
  {
    id: "describe-4",
    marks: 4,
    label: "4 mark Describe questions",
    colour: "blue",
    timeMinutes: 4,
    commandWords: ["Describe", "Compare", "Outline"],
    structure: [
      "Identify the main pattern or trend",
      "Support with data/evidence from the resource",
      "Note any anomalies or exceptions",
      "Use geographical terminology",
    ],
    levelDescriptors: [
      { level: 1, range: "1\u20132", descriptor: "Basic: simple statements without data or detail" },
      { level: 2, range: "3\u20134", descriptor: "Clear: describes patterns with data from the resource" },
    ],
    doThis:
      "The graph shows that rainfall increases from 50mm in January to 120mm in July, with a clear seasonal pattern. However, there is an anomaly in March where rainfall drops to 30mm.",
    notThis: "It rains more in summer than winter.",
    tip: "Always quote data from the figure \u2014 numbers, percentages, or place names. The examiner is looking for evidence you can read and interpret geographical information, not just make general observations.",
  },
  {
    id: "explain-6",
    marks: 6,
    label: "6 mark Explain questions",
    colour: "purple",
    timeMinutes: 8,
    commandWords: ["Explain", "Suggest", "Examine"],
    structure: [
      "Point \u2014 Make a clear geographical statement",
      "Evidence \u2014 Use named examples, facts, figures",
      "Explain \u2014 Show WHY using \u2018because\u2019, \u2018this leads to\u2019, \u2018as a result\u2019",
      "Link \u2014 Connect back to the question",
    ],
    levelDescriptors: [
      { level: 1, range: "1\u20133", descriptor: "Basic: simple statements with limited or no case study detail" },
      { level: 2, range: "4\u20136", descriptor: "Clear: uses case study detail with linked chains of reasoning" },
    ],
    doThis:
      "One effect of deforestation is soil erosion. In the Amazon rainforest, when trees are removed, the roots no longer bind the soil. During heavy rainfall, the exposed topsoil is washed away by surface runoff. This leads to rivers becoming silted, which increases flood risk downstream and reduces water quality for communities.",
    notThis:
      "Cutting down trees causes soil erosion because there are no roots.",
    tip: "Use the PEEL structure. The key to Level 2 is linked reasoning \u2014 build a chain of \u2018because\u2019 and \u2018this leads to\u2019 so the examiner can see your understanding of cause and effect. Always include a named case study.",
  },
  {
    id: "evaluate-9",
    marks: 9,
    label: "9 mark Evaluate/Assess questions",
    colour: "orange",
    timeMinutes: 15,
    commandWords: ["Evaluate", "Assess", "Discuss", "To what extent", "Justify"],
    structure: [
      "Brief introduction \u2014 define key terms, outline your argument",
      "Paragraph 1 \u2014 FOR argument with case study evidence (PEEL)",
      "Paragraph 2 \u2014 AGAINST or alternative view with different evidence",
      "Paragraph 3 \u2014 Additional perspective (social/economic/environmental)",
      "Conclusion \u2014 Clear judgement answering the question directly",
    ],
    levelDescriptors: [
      { level: 1, range: "1\u20133", descriptor: "Basic: simple statements, limited understanding" },
      { level: 2, range: "4\u20136", descriptor: "Clear: some relevant reasoning with examples" },
      { level: 3, range: "7\u20139", descriptor: "Detailed: thorough understanding with supported conclusion" },
    ],
    doThis:
      "To a large extent, international aid has been effective in reducing the impacts of tectonic hazards. After the 2010 Haiti earthquake, international organisations provided $13.5 billion in aid, which funded emergency shelters and medical care for 3 million displaced people. However, long-term recovery has been much slower \u2014 by 2015, over 60,000 people still lived in temporary camps, suggesting that aid alone cannot solve the structural issues of poverty and poor governance that made Haiti so vulnerable. In contrast, Japan\u2019s 2011 earthquake and tsunami showed that a combination of technology, preparation, and wealth can be more effective than aid\u2026",
    notThis:
      "Aid is good because it helps people. But sometimes it doesn\u2019t work. Overall I think aid is quite good.",
    tip: "9-markers also carry +3 SPaG marks. Plan your answer before writing \u2014 spend 2 minutes jotting bullet points. Your conclusion must make a clear judgement (\u2018to a large extent\u2019, \u2018it depends on\u2019) and not just summarise both sides. Use connectives like \u2018however\u2019, \u2018on the other hand\u2019, \u2018nevertheless\u2019 to show balance.",
  },
];

// ─── Command Words ───

export const COMMAND_WORDS: CommandWord[] = [
  {
    word: "State / Name / Give",
    meaning: "Recall a fact or give a named example",
    typicalMarks: "1\u20132",
    colour: "teal",
  },
  {
    word: "Define",
    meaning: "Give the precise meaning of a term",
    typicalMarks: "1\u20132",
    colour: "teal",
  },
  {
    word: "Calculate",
    meaning: "Work out a numerical answer, show working",
    typicalMarks: "1\u20132",
    colour: "teal",
  },
  {
    word: "Describe",
    meaning: "Set out characteristics, patterns, or features \u2014 NOT reasons",
    typicalMarks: "2\u20136",
    colour: "blue",
  },
  {
    word: "Compare",
    meaning: "Identify similarities AND differences",
    typicalMarks: "2\u20134",
    colour: "blue",
  },
  {
    word: "Outline",
    meaning: "Set out the main characteristics briefly",
    typicalMarks: "2\u20134",
    colour: "blue",
  },
  {
    word: "Suggest",
    meaning: "Apply knowledge to a new or unfamiliar context",
    typicalMarks: "2\u20136",
    colour: "purple",
  },
  {
    word: "Explain",
    meaning: "Give reasons WHY or HOW \u2014 cause and effect",
    typicalMarks: "4\u20136",
    colour: "purple",
  },
  {
    word: "Examine",
    meaning: "Investigate closely, considering multiple aspects",
    typicalMarks: "6",
    colour: "purple",
  },
  {
    word: "Discuss",
    meaning: "Present different viewpoints, strengths and weaknesses",
    typicalMarks: "6\u20139",
    colour: "orange",
  },
  {
    word: "Assess",
    meaning: "Make an informed judgement based on evidence",
    typicalMarks: "9",
    colour: "orange",
  },
  {
    word: "Evaluate",
    meaning: "Weigh up pros and cons, reach a supported conclusion",
    typicalMarks: "9",
    colour: "orange",
  },
  {
    word: "To what extent",
    meaning: "Judge the degree of importance or success",
    typicalMarks: "9",
    colour: "orange",
  },
  {
    word: "Justify",
    meaning: "Support a case with evidence, explain why alternatives are less valid",
    typicalMarks: "9",
    colour: "orange",
  },
];

// ─── Connectives for Quick Reference ───

export interface Connective {
  word: string;
  purpose: string;
  colour: string;
}

// ─── Grade Characteristics ───

export interface GradeCharacteristic {
  band: "3-4" | "5-6" | "7-9";
  colour: string;
  traits: string[];
}

export const GRADE_CHARACTERISTICS: GradeCharacteristic[] = [
  {
    band: "3-4",
    colour: "orange",
    traits: [
      "Basic descriptions with limited detail",
      "Few or no named examples or case studies",
      "Simple explanations without chains of reasoning",
      "No balance in evaluation questions",
      "Limited use of geographical terminology",
      "No data or statistics used as evidence",
    ],
  },
  {
    band: "5-6",
    colour: "blue",
    traits: [
      "Clear descriptions with some supporting data",
      "Named examples mentioned but not fully developed",
      "Some chains of reasoning using connectives",
      "Attempts at balance but conclusion may be weak",
      "Geographical terminology used mostly correctly",
      "Some use of figures/data from resources",
    ],
  },
  {
    band: "7-9",
    colour: "teal",
    traits: [
      "Detailed descriptions with precise data from resources",
      "Thorough case study knowledge with specific facts and figures",
      "Extended chains of reasoning with multiple linked points",
      "Balanced evaluation with a clear, supported judgement",
      "Confident use of specialist geographical terminology",
      "Integrates evidence from multiple sources throughout",
    ],
  },
];

// ─── Pre-submission Checklist ───

export const CHECKLIST_ITEMS: string[] = [
  "Read the command word — am I doing what it asks?",
  "Named a specific case study with location",
  "Included at least 2 facts, figures, or statistics",
  "Used chains of reasoning (because → this leads to → as a result)",
  "Used geographical terminology correctly",
  "Addressed both sides for evaluate/assess questions",
  "Written a clear conclusion with a supported judgement (9-markers)",
  "Checked spelling of key geographical terms",
  "Used paragraphs to separate each point",
  "Stayed within the suggested time allocation",
];

export const CONNECTIVES: Connective[] = [
  { word: "because", purpose: "Explain cause", colour: "purple" },
  { word: "this leads to", purpose: "Show effect", colour: "purple" },
  { word: "as a result", purpose: "Show consequence", colour: "purple" },
  { word: "this means that", purpose: "Explain significance", colour: "purple" },
  { word: "for example", purpose: "Introduce evidence", colour: "blue" },
  { word: "such as", purpose: "Give a specific case", colour: "blue" },
  { word: "the evidence shows", purpose: "Link to data", colour: "blue" },
  { word: "however", purpose: "Introduce contrast", colour: "orange" },
  { word: "on the other hand", purpose: "Alternative view", colour: "orange" },
  { word: "nevertheless", purpose: "Concede but maintain", colour: "orange" },
  { word: "whereas", purpose: "Compare directly", colour: "orange" },
  { word: "to a large extent", purpose: "Make a judgement", colour: "teal" },
  { word: "it depends on", purpose: "Show nuance", colour: "teal" },
  { word: "overall", purpose: "Conclude", colour: "teal" },
  { word: "in conclusion", purpose: "Sum up argument", colour: "teal" },
];
