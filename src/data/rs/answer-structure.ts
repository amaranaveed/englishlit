// ---------------------------------------------------------------------------
// AQA GCSE Religious Studies A (8062) - Answer Structures & Frameworks
// Specification reference: AQA 8062 (Teaching from September 2016)
// ---------------------------------------------------------------------------

export interface RsAnswerType {
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

export interface RsCommandWord {
  word: string;
  marks: string;
  description: string;
  difficulty: "recall" | "explain" | "evaluate";
}

export interface RsGradeCharacteristic {
  band: string;
  colour: string;
  traits: string[];
}

// ---------------------------------------------------------------------------
// Answer types for each mark tariff
// ---------------------------------------------------------------------------

export const RS_ANSWER_TYPES: RsAnswerType[] = [
  // ---- 1-mark: Multiple-choice identification ----
  {
    id: "rs-1-mark",
    marks: 1,
    label: "1-mark — Identification",
    colour: "gray",
    timeMinutes: 0.5,
    commandWords: ["Which one"],
    structure: [
      "Read all four options carefully.",
      "Select the one correct answer (e.g. write the letter or the word).",
    ],
    levelDescriptors: [
      {
        level: 1,
        range: "0-1",
        descriptor: "Correct identification of the term, concept or belief.",
      },
    ],
    doThis:
      "Read every option before choosing. Check the question stem carefully — it might ask for the meaning of a term, not just which word 'sounds right'.",
    notThis:
      "Don't rush and pick the first option that looks familiar. Distractors are often real religious terms that relate to the topic but do not answer the specific question.",
    tip: "These are free marks if you know your key vocabulary. Make flashcards for all specialist terms for each topic.",
  },

  // ---- 2-mark: Give two / Name two ----
  {
    id: "rs-2-mark",
    marks: 2,
    label: "2-mark — Give Two / Name Two",
    colour: "green",
    timeMinutes: 1,
    commandWords: ["Give two", "Name two"],
    structure: [
      "Point 1: State a brief, accurate belief, teaching or practice.",
      "Point 2: State a second, different belief, teaching or practice.",
    ],
    levelDescriptors: [
      {
        level: 1,
        range: "1",
        descriptor:
          "One simple, relevant point identified.",
      },
      {
        level: 2,
        range: "2",
        descriptor:
          "Two simple, relevant points identified.",
      },
    ],
    doThis:
      "Write two short, distinct points — one per line if you like. Each point earns 1 mark. No development or explanation is needed.",
    notThis:
      "Don't waste time writing full paragraphs. Don't repeat the same idea in different words — the two points must be genuinely different.",
    tip: "Think of these as a quick-fire recall test. If you write more than two sentences total, you are spending too long.",
  },

  // ---- 4-mark: Explain two ----
  {
    id: "rs-4-mark",
    marks: 4,
    label: "4-mark — Explain Two",
    colour: "blue",
    timeMinutes: 5,
    commandWords: ["Explain two"],
    structure: [
      "Point 1: State a relevant belief, teaching or way of influence.",
      "Develop Point 1: Explain what it means or how/why it is important, with reference to a source of wisdom if possible.",
      "Point 2: State a second, different belief, teaching or way of influence.",
      "Develop Point 2: Explain what it means or how/why it is important, with reference to a source of wisdom if possible.",
    ],
    levelDescriptors: [
      {
        level: 1,
        range: "1",
        descriptor: "Simple, valid statement of a relevant point.",
      },
      {
        level: 2,
        range: "2",
        descriptor:
          "A developed or explained point, OR two simple points.",
      },
      {
        level: 3,
        range: "3",
        descriptor:
          "One well-developed point plus one simple point.",
      },
      {
        level: 4,
        range: "4",
        descriptor:
          "Two developed or explained points, showing understanding of how/why they are significant.",
      },
    ],
    doThis:
      "Write two clear paragraphs. Each paragraph: state the point, then develop it with explanation and — ideally — a source of wisdom or authority.",
    notThis:
      "Don't list lots of brief points hoping some will stick. The examiner wants depth on two points, not breadth across many.",
    tip: "Even though a source of wisdom is not always explicitly required for 4-mark questions, including one in your development shows higher-level understanding and can secure full marks.",
  },

  // ---- 5-mark: Explain two + source of wisdom ----
  {
    id: "rs-5-mark",
    marks: 5,
    label: "5-mark — Explain Two + Source of Wisdom",
    colour: "purple",
    timeMinutes: 6,
    commandWords: ["Explain two"],
    structure: [
      "Point 1: State a relevant teaching or belief.",
      "Develop Point 1: Explain its meaning and significance.",
      "Point 2: State a second, different teaching or belief.",
      "Develop Point 2: Explain its meaning and significance.",
      "Source of wisdom: Include a relevant reference to scripture or another source of authority in at least one of your points (the 5th mark).",
    ],
    levelDescriptors: [
      {
        level: 1,
        range: "1",
        descriptor: "Simple, valid statement of a relevant point.",
      },
      {
        level: 2,
        range: "2",
        descriptor:
          "A developed or explained point, OR two simple points.",
      },
      {
        level: 3,
        range: "3",
        descriptor:
          "One well-developed point with explanation plus one simple point.",
      },
      {
        level: 4,
        range: "4",
        descriptor:
          "Two developed points showing clear understanding of their significance.",
      },
      {
        level: 5,
        range: "5",
        descriptor:
          "Two well-developed points plus a relevant reference to a source of wisdom and authority (scripture, creed, scholarly teaching, etc.).",
      },
    ],
    doThis:
      "Write two developed paragraphs and ensure you explicitly quote or paraphrase a source of wisdom (e.g. Bible verse, Qur'an surah, Hadith, creed). The 5th mark is awarded for this reference.",
    notThis:
      "Don't forget the source of wisdom — this is the key difference from the 4-mark question. Leaving it out caps you at 4/5.",
    tip: "Learn at least two key scripture references per sub-topic. Even a paraphrase ('The Bible teaches that...') counts, but a direct quote is stronger.",
  },

  // ---- 12-mark: Evaluate / Discuss ----
  {
    id: "rs-12-mark",
    marks: 12,
    label: "12-mark — Evaluation (+3 SPaG)",
    colour: "red",
    timeMinutes: 15,
    commandWords: ["Evaluate", "Discuss"],
    structure: [
      "Introduction (optional but helpful): Briefly define any key terms and state whether you broadly agree or disagree.",
      "Arguments FOR the statement: Give 2-3 reasoned arguments supporting the statement, each backed by religious teachings, scripture or sources of authority.",
      "Arguments AGAINST the statement: Give 2-3 reasoned arguments offering a different perspective, including at least one non-religious viewpoint (e.g. atheist, humanist, scientific).",
      "Justified conclusion: Weigh up both sides and explain which you find more convincing and why. Your conclusion must go beyond simply restating your opening position.",
      "SPaG check: Re-read for spelling (especially specialist terms), punctuation and grammar — up to 3 additional marks are awarded for this.",
    ],
    levelDescriptors: [
      {
        level: 1,
        range: "1-4",
        descriptor:
          "Simple or basic arguments with limited reasoning. May be one-sided. Little or no reference to religion or belief. Points may be poorly organised or just listed.",
      },
      {
        level: 2,
        range: "5-8",
        descriptor:
          "Reasoned arguments for and/or against the statement with some development. Some reference to religion or belief, possibly with a source of wisdom. Conclusion attempted but may not be fully justified. May lack balance between perspectives.",
      },
      {
        level: 3,
        range: "9-12",
        descriptor:
          "Well-argued, balanced response with clear reasoning throughout. Multiple perspectives considered, including religious and non-religious viewpoints. Effective use of sources of wisdom and authority. Sustained, coherent argument leading to a justified conclusion that weighs up the evidence.",
      },
    ],
    doThis:
      "Plan before you write — even 60 seconds of planning helps. Use PEEL-style paragraphs (Point, Evidence, Explain, Link back to the statement). Ensure you address both sides and reach a genuine conclusion.",
    notThis:
      "Don't write a one-sided rant. Don't forget non-religious perspectives. Don't end with 'It is up to the individual' without explaining your own reasoned position.",
    tip: "The 12-mark question is where most marks are won or lost. Practise timed essays (15 minutes) regularly. Remember: 12 marks for content plus up to 3 marks for SPaG = 15 marks total on this one question.",
  },
];

// ---------------------------------------------------------------------------
// Command words
// ---------------------------------------------------------------------------

export const RS_COMMAND_WORDS: RsCommandWord[] = [
  {
    word: "Which one",
    marks: "1 mark",
    description:
      "Select the correct answer from four options. Tests recall of key vocabulary and concepts.",
    difficulty: "recall",
  },
  {
    word: "Give / Name",
    marks: "2 marks",
    description:
      "State two brief, accurate points. No explanation or development is required — just two distinct, relevant facts, beliefs or practices.",
    difficulty: "recall",
  },
  {
    word: "Explain",
    marks: "4 or 5 marks",
    description:
      "Provide two developed points that demonstrate understanding. For 5-mark questions you must also include a reference to a source of wisdom and authority (scripture, creed, teaching).",
    difficulty: "explain",
  },
  {
    word: "Evaluate / Discuss",
    marks: "12 marks (+3 SPaG)",
    description:
      "Present a balanced argument considering multiple viewpoints on a statement. Include religious and non-religious perspectives, use sources of wisdom and authority, and reach a justified conclusion explaining which arguments are most persuasive and why.",
    difficulty: "evaluate",
  },
];

// ---------------------------------------------------------------------------
// Grade characteristics
// ---------------------------------------------------------------------------

export const RS_GRADE_CHARACTERISTICS: RsGradeCharacteristic[] = [
  {
    band: "Grade 4-5",
    colour: "amber",
    traits: [
      "Demonstrates generally accurate knowledge of key beliefs and practices with some correct use of specialist vocabulary.",
      "Can identify relevant teachings but may not always explain their significance in depth.",
      "Sources of wisdom are sometimes included but may be vague or not fully integrated into the answer.",
      "Evaluation attempts are present but may be one-sided, with limited development of counter-arguments.",
      "Conclusions tend to be asserted rather than justified — e.g. 'I agree' without a clear reason drawn from the argument.",
      "Answers to 4-mark and 5-mark questions typically make valid points but lack full development on both points.",
    ],
  },
  {
    band: "Grade 6-7",
    colour: "yellow",
    traits: [
      "Shows accurate and relevant knowledge with consistent use of specialist terminology.",
      "Explains beliefs and their influence on individuals and communities with clear understanding.",
      "Sources of wisdom and authority are included and linked to the points being made.",
      "Evaluation considers both sides of an argument with some reasoned development, though one side may be stronger than the other.",
      "Non-religious perspectives are acknowledged but may not be fully developed.",
      "Conclusions are present and partially justified, with some reference to the arguments made in the essay.",
      "Answers to 4-mark and 5-mark questions are generally well developed on both points.",
    ],
  },
  {
    band: "Grade 8-9",
    colour: "green",
    traits: [
      "Demonstrates detailed, precise knowledge with sophisticated understanding of how beliefs connect to wider religious life.",
      "Specialist vocabulary is used fluently and accurately throughout.",
      "Sources of wisdom and authority are woven naturally into arguments, not bolted on as afterthoughts.",
      "Evaluation is balanced, sustained and coherent — arguments are developed with depth, not just breadth.",
      "Multiple perspectives are considered, including different denominations or traditions within a religion, and well-developed non-religious viewpoints.",
      "Conclusions are fully justified, weighing the relative strength of the arguments presented and explaining why one position is more convincing.",
      "Writing is clear, well-organised and demonstrates excellent SPaG, securing all 3 additional marks on the 12-mark question.",
    ],
  },
];
