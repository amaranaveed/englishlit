// ─── AQA GCSE English Literature Assessment Objectives ───

export interface AOTip {
  text: string;
  example?: string;
}

export interface SentenceStarter {
  label: string;
  starter: string;
}

export interface AODetail {
  id: "ao1" | "ao2" | "ao3" | "ao4";
  label: string;
  shortLabel: string;
  maxMark: number;          // default for a 30-mark question
  weight: string;           // percentage weighting across the whole GCSE
  colour: string;           // theme colour key
  description: string;
  examinerSummary: string;  // what the examiner is looking for
  whatItMeans: string;
  commonMistakes: string[];
  topTips: AOTip[];
  sentenceStarters: SentenceStarter[];
  levelDescriptors: { level: number; range: string; descriptor: string }[];
}

export interface TextAOGuidance {
  textSlug: string;
  ao1: { tips: string[]; examplePhrase: string };
  ao2: { tips: string[]; examplePhrase: string };
  ao3: { tips: string[]; examplePhrase: string };
}

// ─── Core AO Definitions ───────────────────────────────

export const ASSESSMENT_OBJECTIVES: AODetail[] = [
  {
    id: "ao1",
    label: "AO1 — Response & Quotation",
    shortLabel: "AO1",
    maxMark: 6,
    weight: "15%",
    colour: "teal",
    description:
      "Read, respond to and evaluate texts. Students should be able to maintain a critical style and develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations.",
    examinerSummary:
      "The examiner wants to see that you have a personal viewpoint, can argue it convincingly, and embed short, well-chosen quotations to support every point you make.",
    whatItMeans:
      "AO1 is about showing you've actually read and understood the text. You need to make clear, argued points — not just describe what happens. Every point should be backed up with a short, precise quotation embedded naturally into your sentence.",
    commonMistakes: [
      "Retelling the plot instead of analysing it",
      "Using long, block quotations instead of short embedded ones",
      "Not giving a personal interpretation or opinion",
      "Making vague statements without textual evidence",
      "Simply identifying features without explaining their effect",
    ],
    topTips: [
      {
        text: "Embed short quotations (2–5 words) directly into your sentences rather than using long block quotes",
        example:
          'Shakespeare presents Beatrice as "too curst" to conform to patriarchal expectations of femininity.',
      },
      {
        text: "Use the Point-Evidence-Explain (PEE) structure — but aim for Point-Evidence-Analysis-Link (PEAL) at Grade 7+",
      },
      {
        text: "Begin with a clear thesis/argument that answers the question directly",
        example:
          "Austen uses Darcy's transformation to critique Regency class prejudice.",
      },
      {
        text: 'Use evaluative language: "perhaps", "arguably", "it could be interpreted that"',
      },
      {
        text: "Refer to the writer by surname and consciously write about their choices: 'Shakespeare presents…', 'Austen constructs…'",
      },
    ],
    sentenceStarters: [
      { label: "Personal response", starter: "It could be argued that…" },
      { label: "Evaluative", starter: "Perhaps [writer] intends to…" },
      { label: "Alternative reading", starter: "An alternative interpretation is that…" },
      { label: "Thesis", starter: "[Writer] presents [character/theme] as…" },
      { label: "Critical style", starter: "Significantly, [writer] chooses to…" },
      { label: "Summary point", starter: "Ultimately, [writer] uses [character/theme] to…" },
    ],
    levelDescriptors: [
      { level: 1, range: "1–4", descriptor: "Simple, limited comment with little textual reference" },
      { level: 2, range: "5–10", descriptor: "Supported response with some relevant quotations" },
      { level: 3, range: "11–16", descriptor: "Thoughtful response with appropriate references" },
      { level: 4, range: "17–22", descriptor: "Critical, exploratory response with precise references" },
      { level: 5, range: "23–26", descriptor: "Convincing, critical analysis with judicious references" },
      { level: 6, range: "27–30", descriptor: "Assured personal response with discriminating references" },
    ],
  },
  {
    id: "ao2",
    label: "AO2 — Language, Form & Structure",
    shortLabel: "AO2",
    maxMark: 18,
    weight: "45%",
    colour: "purple",
    description:
      "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.",
    examinerSummary:
      "This is the highest-weighted AO. The examiner wants you to zoom into specific words, techniques, structural choices and literary devices, explaining HOW they create meaning and effect on the reader.",
    whatItMeans:
      "AO2 is the big one — worth 18 out of 30 marks. You need to analyse individual words (language), how the text is put together (structure), and the type of text/genre conventions (form). Use proper terminology: metaphor, dramatic irony, foreshadowing, etc. — but always explain the EFFECT, don't just name the technique.",
    commonMistakes: [
      "Naming a technique ('this is a metaphor') without explaining its effect",
      "Only analysing language and ignoring form and structure",
      "Using subject terminology incorrectly",
      "Analysing at sentence level only — missing whole-text structural patterns",
      "Describing what a quote says rather than how it works",
    ],
    topTips: [
      {
        text: "Zoom into individual words — what connotations do they carry?",
        example:
          'The verb "kill" in Beatrice\'s demand "Kill Claudio" is a violent, monosyllabic imperative that shatters the romantic tone of the scene.',
      },
      {
        text: "Cover all three: language (word-level), structure (how the text is organised), and form (genre/type)",
      },
      {
        text: "Always explain the EFFECT on the reader or audience — 'This creates a sense of…', 'This suggests to the reader that…'",
      },
      {
        text: "Use subject terminology naturally — don't crowbar it in. Name the technique, then immediately explain what it does",
      },
      {
        text: "Look for patterns: repetition, contrasts, shifts in tone, cyclical structures",
      },
      {
        text: "Consider the semantic field — groups of related words that build up a particular impression",
      },
    ],
    sentenceStarters: [
      { label: "Word-level", starter: "The [noun/verb/adjective] '…' connotes…" },
      { label: "Technique", starter: "[Writer]'s use of [technique] suggests…" },
      { label: "Effect", starter: "This creates a sense of… for the [reader/audience]" },
      { label: "Structure", starter: "Structurally, [writer] positions this [at the start/climax/end] to…" },
      { label: "Form", starter: "The [genre/form] conventions are subverted here because…" },
      { label: "Semantic field", starter: "The semantic field of [topic] — '…', '…', '…' — reinforces…" },
    ],
    levelDescriptors: [
      { level: 1, range: "1–4", descriptor: "Simple awareness of language/structure" },
      { level: 2, range: "5–10", descriptor: "Some comment on writer's methods with some terminology" },
      { level: 3, range: "11–16", descriptor: "Explained analysis of writer's methods with appropriate terminology" },
      { level: 4, range: "17–22", descriptor: "Examination of writer's methods with subject terminology used effectively" },
      { level: 5, range: "23–26", descriptor: "Analysis of writer's methods with subject terminology used judiciously" },
      { level: 6, range: "27–30", descriptor: "Sophisticated analysis with assured use of subject terminology" },
    ],
  },
  {
    id: "ao3",
    label: "AO3 — Context",
    shortLabel: "AO3",
    maxMark: 6,
    weight: "15%",
    colour: "blue",
    description:
      "Show understanding of the relationships between texts and the contexts in which they were written.",
    examinerSummary:
      "The examiner wants context to be woven INTO your analysis — not bolted on as a separate paragraph. Show how the historical, social, or cultural background shapes meaning, not just that you know facts about the period.",
    whatItMeans:
      "AO3 requires you to connect the text to the time it was written (or set). This means the social, historical, cultural, and literary context. But the key word is 'relationships' — you must show how context AFFECTS meaning in the text, not just list facts about the era.",
    commonMistakes: [
      "Writing a separate 'context paragraph' that isn't linked to analysis",
      "Listing historical facts without connecting them to the text",
      "Ignoring context entirely and only doing close reading",
      "Only mentioning biographical context about the author",
      "Treating context as an add-on rather than integrating it",
    ],
    topTips: [
      {
        text: "Integrate context INTO your analytical paragraphs — don't separate it",
        example:
          'Hero\'s public shaming reflects the Elizabethan honour code, where a woman\'s "virtue" was her family\'s social currency.',
      },
      {
        text: "Use phrases that link context to meaning: 'A contemporary audience would have…', 'This reflects the [period] belief that…'",
      },
      {
        text: "Think about what would SHOCK or CHALLENGE an audience of the time vs. a modern reader",
      },
      {
        text: "Consider the writer's purpose — why did they write this text? What were they responding to?",
      },
      {
        text: "Remember the three types: historical (events/period), social (class/gender norms), cultural (beliefs/values of the time)",
      },
    ],
    sentenceStarters: [
      { label: "Historical", starter: "In the [period], [context fact], which is reflected in…" },
      { label: "Social", starter: "This reflects the [period] expectation that…" },
      { label: "Audience", starter: "A contemporary audience would have understood this as…" },
      { label: "Writer purpose", starter: "Perhaps [writer] intended to challenge the [period] view that…" },
      { label: "Modern contrast", starter: "While a modern reader might see this as…, an [period] audience would…" },
      { label: "Cultural", starter: "[Writer] uses [character/event] to critique the [period] culture of…" },
    ],
    levelDescriptors: [
      { level: 1, range: "1–4", descriptor: "Simple awareness of context" },
      { level: 2, range: "5–10", descriptor: "Some awareness of context with limited links to text" },
      { level: 3, range: "11–16", descriptor: "Relevant understanding of context linked to text" },
      { level: 4, range: "17–22", descriptor: "Understanding of context integrated into response" },
      { level: 5, range: "23–26", descriptor: "Context convincingly integrated into analysis" },
      { level: 6, range: "27–30", descriptor: "Context embedded sophisticatedly throughout response" },
    ],
  },
  {
    id: "ao4",
    label: "AO4 — Spelling, Punctuation & Grammar",
    shortLabel: "AO4 (SPaG)",
    maxMark: 4,
    weight: "5%",
    colour: "green",
    description:
      "Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. (Paper 2 Section A only — Modern Text question.)",
    examinerSummary:
      "SPaG marks are only available on the Paper 2 Modern Text question (e.g. An Inspector Calls). The examiner rewards accurate spelling, varied punctuation, a range of sentence structures, and sophisticated vocabulary.",
    whatItMeans:
      "AO4 is only assessed on ONE question across the whole GCSE — the Modern Text question on Paper 2 (Section A). It's worth 4 extra marks for the quality of your written expression. This means spelling, punctuation, grammar, and vocabulary.",
    commonMistakes: [
      "Thinking SPaG marks apply to every question (they don't — only Paper 2 Section A)",
      "Using overly complex vocabulary incorrectly",
      "Writing in an informal or chatty register",
      "Not proofreading for basic spelling errors",
      "Using only simple sentence structures throughout",
    ],
    topTips: [
      {
        text: "SPaG marks only apply to Paper 2 Section A (Modern Text) — but good writing helps everywhere",
      },
      {
        text: "Use a range of sentence types: simple for emphasis, complex for nuanced analysis",
      },
      {
        text: "Learn the correct spelling of key literary terms: metaphor, soliloquy, pathetic fallacy, juxtaposition",
      },
      {
        text: "Use semicolons to link related analytical points; they signal sophistication to the examiner",
      },
      {
        text: "Proofread your final paragraph if you have time — first and last impressions matter",
      },
    ],
    sentenceStarters: [
      { label: "Sophisticated vocab", starter: "[Writer] juxtaposes… with… to underscore…" },
      { label: "Complex sentence", starter: "Although [point], [writer] simultaneously conveys…" },
      { label: "Semicolon link", starter: "[Analysis point]; this is further reinforced by…" },
      { label: "Subordinate clause", starter: "Despite [counterpoint], [writer] ultimately suggests…" },
    ],
    levelDescriptors: [
      { level: 1, range: "1", descriptor: "Threshold: Some accuracy in spelling/punctuation/grammar" },
      { level: 2, range: "2", descriptor: "Reasonable accuracy with some range of vocabulary and sentence structures" },
      { level: 3, range: "3", descriptor: "Consistent accuracy with good range of vocabulary and sentence structures" },
      { level: 4, range: "4", descriptor: "Assured accuracy with a sophisticated range of vocabulary and sentence structures" },
    ],
  },
];

// ─── Per-Text AO Guidance ──────────────────────────────

export const TEXT_AO_GUIDANCE: TextAOGuidance[] = [
  {
    textSlug: "much-ado",
    ao1: {
      tips: [
        "Always refer to Shakespeare by name and write about his deliberate choices",
        "Embed short quotations from the play — aim for 2–5 word phrases woven into your sentence",
        "Show a personal response: do you sympathise with Beatrice? Is Claudio redeemable?",
        "Compare characters' attitudes to love: Beatrice/Benedick vs Hero/Claudio",
      ],
      examplePhrase:
        'Shakespeare presents Beatrice as a proto-feminist figure whose declaration "I had rather hear my dog bark at a crow" subverts Elizabethan expectations of feminine compliance.',
    },
    ao2: {
      tips: [
        "Analyse Shakespeare's use of prose vs verse — Beatrice and Benedick speak in witty prose, lovers speak in verse",
        "Identify dramatic irony in the gulling scenes (audiences know the trick)",
        "Examine the play's structure: deception drives both the comic and dark plots",
        "Look at the parallel structure: the serious Hero/Claudio plot mirrors and contrasts the Beatrice/Benedick plot",
        "Analyse military and combat imagery in the 'merry war' of wit",
      ],
      examplePhrase:
        'Shakespeare\'s use of the stichomythic exchange between Beatrice and Benedick — "I wonder that you will still be talking, Signor Benedick" — establishes their linguistic equality through rapid, evenly-matched dialogue.',
    },
    ao3: {
      tips: [
        "Connect to Elizabethan patriarchy: women were property of fathers, then husbands",
        "Hero's shaming scene reflects the honour/shame culture where female 'virtue' equalled family reputation",
        "The play was written c.1598–99 during a period of comedic experimentation",
        "Don John as 'bastard' reflects Elizabethan anxieties about illegitimacy and social order",
        "Consider how a modern audience responds differently to Claudio's cruelty than an Elizabethan one would",
      ],
      examplePhrase:
        'Hero\'s silent obedience during her public shaming reflects the patriarchal expectation that women should be "seen and not heard" — a norm Shakespeare interrogates by giving Beatrice the powerful command "Kill Claudio".',
    },
  },
  {
    textSlug: "pride-prejudice",
    ao1: {
      tips: [
        "Refer to Austen as the deliberate architect of the novel: 'Austen constructs…', 'Austen satirises…'",
        "Embed short quotations — Austen's prose is dense with ironic phrases perfect for embedding",
        "Show your personal reading: do you think Darcy genuinely changes, or just learns to perform differently?",
        "Track Elizabeth's 'arc of self-knowledge' — how does her understanding shift?",
      ],
      examplePhrase:
        'Austen establishes the novel\'s satirical tone from the famous opening — "It is a truth universally acknowledged" — which simultaneously mocks Regency marriage economics and foreshadows the novel\'s central conflicts.',
    },
    ao2: {
      tips: [
        "Analyse Austen's use of free indirect discourse — where the narrator's voice blends with a character's thoughts",
        "Look at the epistolary elements: Darcy's letter is a structural turning point that forces Elizabeth's epiphany",
        "Examine Austen's use of irony, both dramatic and verbal — especially in dialogue",
        "Consider the novel's symmetrical structure: both protagonists must overcome their titular flaw",
        "Analyse how Austen uses foil characters (Charlotte/Lydia/Jane) to illuminate Elizabeth's choices",
      ],
      examplePhrase:
        'Austen\'s use of free indirect discourse in "She grew absolutely ashamed of herself" blurs the boundary between narrator and character, performing Elizabeth\'s moment of painful self-recognition at the sentence level.',
    },
    ao3: {
      tips: [
        "Connect to the Regency marriage market: women couldn't inherit entailed property (the Bennet estate)",
        "The novel critiques class rigidity — Lady Catherine embodies aristocratic snobbery",
        "Published 1813: post-French Revolution anxieties about social upheaval and class boundaries",
        "Women's limited options: marriage or genteel poverty (consider Charlotte Lucas's pragmatism)",
        "Consider how Austen's own position as an unmarried woman in a society that valued wives above all informs the novel",
      ],
      examplePhrase:
        'Charlotte Lucas\'s acceptance of Mr Collins — "I am not romantic, you know; I never was" — reflects the economic reality that, for women without fortune in Regency England, marriage was "the only honourable provision".',
    },
  },
];

// ─── Helper functions ──────────────────────────────────

export function getAO(id: string): AODetail | undefined {
  return ASSESSMENT_OBJECTIVES.find((ao) => ao.id === id);
}

export function getTextAOGuidance(textSlug: string): TextAOGuidance | undefined {
  return TEXT_AO_GUIDANCE.find((g) => g.textSlug === textSlug);
}

// ─── AO Mark Breakdown by Paper/Question ───────────────

export interface QuestionAOBreakdown {
  paper: string;
  section: string;
  questionType: string;
  totalMarks: number;
  ao1: number;
  ao2: number;
  ao3: number;
  ao4: number;
  notes: string;
}

export const PAPER_AO_BREAKDOWN: QuestionAOBreakdown[] = [
  {
    paper: "Paper 1",
    section: "Section A",
    questionType: "Shakespeare",
    totalMarks: 30,
    ao1: 6,
    ao2: 18,
    ao3: 6,
    ao4: 0,
    notes: "Extract-based question plus wider text. No SPaG marks.",
  },
  {
    paper: "Paper 1",
    section: "Section B",
    questionType: "19th Century Novel",
    totalMarks: 30,
    ao1: 6,
    ao2: 18,
    ao3: 6,
    ao4: 0,
    notes: "Extract-based question plus wider text. No SPaG marks.",
  },
  {
    paper: "Paper 2",
    section: "Section A",
    questionType: "Modern Text",
    totalMarks: 34,
    ao1: 6,
    ao2: 18,
    ao3: 6,
    ao4: 4,
    notes: "Essay question (no extract). Includes 4 SPaG marks.",
  },
  {
    paper: "Paper 2",
    section: "Section B",
    questionType: "Poetry Anthology",
    totalMarks: 30,
    ao1: 6,
    ao2: 18,
    ao3: 6,
    ao4: 0,
    notes: "Compare one named poem with one of your choice.",
  },
  {
    paper: "Paper 2",
    section: "Section C",
    questionType: "Unseen Poetry",
    totalMarks: 32,
    ao1: 6,
    ao2: 18,
    ao3: 0,
    ao4: 0,
    notes: "Two questions: one analysis (24 marks), one comparison (8 marks). No AO3.",
  },
];
