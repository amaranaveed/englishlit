// ---------------------------------------------------------------------------
// AQA GCSE Religious Studies A (8062) - Assessment Objectives
// Specification reference: AQA 8062 (Teaching from September 2016)
// ---------------------------------------------------------------------------

export interface RsAOTip {
  text: string;
  example?: string;
}

export interface RsSentenceStarter {
  label: string;
  starter: string;
}

export interface RsAODetail {
  id: "ao1" | "ao2";
  label: string;
  shortLabel: string;
  weight: string;
  colour: string;
  description: string;
  whatItMeans: string;
  examinerSummary: string;
  commonMistakes: string[];
  topTips: RsAOTip[];
  sentenceStarters: RsSentenceStarter[];
}

export interface RsPaperAOBreakdown {
  paper: string;
  ao1: string;
  ao2: string;
  total: string;
}

// ---------------------------------------------------------------------------
// AO details
// ---------------------------------------------------------------------------

export const RS_ASSESSMENT_OBJECTIVES: RsAODetail[] = [
  {
    id: "ao1",
    label: "AO1 — Knowledge & Understanding",
    shortLabel: "AO1",
    weight: "50%",
    colour: "blue",
    description:
      "Demonstrate knowledge and understanding of religion and belief, including: beliefs, practices and sources of authority; influence of religion and belief on individuals, communities and societies; similarities and differences within and/or between religions and their beliefs.",
    whatItMeans:
      "AO1 tests whether you actually know the content of the religions you have studied. This means being able to recall specific teachings, quote or paraphrase sources of wisdom and authority (scripture, creeds, scholarly opinion), and show you understand how beliefs translate into the daily lives of believers. It is not enough to give vague answers — examiners want precise knowledge such as names of key concepts, correct terminology, and accurate references to holy texts.",
    examinerSummary:
      "Examiners reward accurate, relevant knowledge supported by specific examples and correct use of specialist vocabulary. Top-band AO1 answers demonstrate detailed understanding of how beliefs connect to practices and real-world impact, not just memorised facts.",
    commonMistakes: [
      "Writing vague statements like 'Christians believe in God' without specifying what aspect of belief the question targets (e.g. the Trinity, omnipotence, creation).",
      "Confusing teachings from different religions — for example attributing the Five Pillars to Christianity or the Nicene Creed to Islam.",
      "Failing to use specialist terminology such as 'Tawhid', 'incarnation', 'Akhirah', or 'atonement' when it is directly relevant.",
      "Giving only one developed point when the question explicitly asks for two explanations, losing half the available marks.",
      "Providing a source of wisdom or scripture reference that is inaccurate or attributed to the wrong text (e.g. saying a Hadith quote is from the Qur'an).",
    ],
    topTips: [
      {
        text: "Learn key quotes from sources of wisdom and authority for every topic — aim for at least two per sub-topic.",
        example:
          "For the Trinity, know Genesis 1:1-2 ('the Spirit of God was hovering over the waters') and Matthew 28:19 ('baptising them in the name of the Father and of the Son and of the Holy Spirit').",
      },
      {
        text: "Always use correct specialist vocabulary and define it briefly if the term is complex.",
        example:
          "Write 'Tawhid — the absolute oneness of Allah' rather than just 'Muslims believe in one God'.",
      },
      {
        text: "Show understanding by explaining the influence of a belief, not just stating the belief itself.",
        example:
          "Don't just say 'Christians believe in the afterlife'; explain that belief in judgement motivates many Christians to live morally and follow the teachings of Jesus.",
      },
      {
        text: "Revise similarities and differences between denominations or traditions within a religion.",
        example:
          "Catholic Christians accept the authority of the Pope and Sacred Tradition alongside Scripture, whereas many Protestant Christians follow 'sola scriptura' — the Bible alone.",
      },
      {
        text: "Practise condensing knowledge into two clear, developed paragraphs for the 4-mark and 5-mark questions.",
        example:
          "Point 1: State the belief + explain it + give a source of wisdom. Point 2: State a second belief + explain it + give a source of wisdom.",
      },
    ],
    sentenceStarters: [
      {
        label: "State a belief",
        starter: "One key [Christian/Muslim] belief is... This means that...",
      },
      {
        label: "Use a source of wisdom",
        starter:
          "This is supported by [the Bible/the Qur'an/a Hadith], which teaches that '...'",
      },
      {
        label: "Explain influence",
        starter:
          "This belief influences [Christians/Muslims] because it leads them to...",
      },
      {
        label: "Show understanding of diversity",
        starter:
          "However, not all [Christians/Muslims] interpret this in the same way. For example, [denomination/tradition] believes that...",
      },
      {
        label: "Use specialist vocabulary",
        starter:
          "The technical term for this is [term], which refers to...",
      },
    ],
  },
  {
    id: "ao2",
    label: "AO2 — Analysis & Evaluation",
    shortLabel: "AO2",
    weight: "50%",
    colour: "indigo",
    description:
      "Analyse and evaluate aspects of religion and belief, including their significance and influence.",
    whatItMeans:
      "AO2 tests your ability to think critically about religious beliefs, practices and moral issues. You must construct reasoned arguments for and against a given statement, consider multiple viewpoints (including religious and non-religious perspectives), and reach a justified conclusion. This goes beyond describing what people believe — you must weigh up whether the arguments are persuasive and explain why.",
    examinerSummary:
      "Examiners reward well-structured arguments that consider multiple perspectives, use evidence (scriptural, philosophical or ethical), and arrive at a justified personal conclusion. Top-band AO2 answers demonstrate sustained, coherent reasoning — not just a list of points for and against.",
    commonMistakes: [
      "Only arguing one side of the statement and failing to consider alternative viewpoints, which caps marks at Level 2.",
      "Writing a conclusion that simply repeats the introduction ('I agree with the statement') without justifying why one set of arguments is stronger than the other.",
      "Ignoring non-religious perspectives entirely — the mark scheme explicitly rewards reference to 'non-religious arguments such as those held by atheist and humanist traditions'.",
      "Treating the 12-mark question as a knowledge recall exercise and writing long descriptions of beliefs instead of evaluating whether the statement is valid.",
      "Forgetting to refer to sources of wisdom and authority to support evaluative arguments, which is required for the higher levels.",
    ],
    topTips: [
      {
        text: "Structure your 12-mark answer as: arguments for the statement, arguments against, then a justified conclusion.",
        example:
          "Para 1-2: Reasons why a Christian might agree with the statement, supported by scripture. Para 3-4: Reasons why someone might disagree, including a non-religious perspective. Conclusion: Which side is more convincing and why.",
      },
      {
        text: "Always include at least one non-religious perspective in your evaluation.",
        example:
          "An atheist might argue that the problem of evil disproves the existence of an omnipotent, omnibenevolent God, because natural disasters cause suffering to innocent people.",
      },
      {
        text: "Use evaluative connectives to keep your argument analytical, not descriptive.",
        example:
          "Use phrases like 'This is significant because...', 'However, a weakness of this argument is...', 'On the other hand...', 'This is more convincing than... because...'.",
      },
      {
        text: "Make your conclusion genuinely justified — explain why you find one side more persuasive, do not just pick a side.",
        example:
          `Write 'In conclusion, the argument that the resurrection is the most important belief is more persuasive because without it, as St Paul argues, Christian faith is "in vain" (1 Corinthians 15:14)' rather than just 'I agree with the statement.'`,
      },
      {
        text: "Remember that SPaG marks (up to 3) are awarded separately on the 12-mark question — take a moment to check spelling of key terms.",
        example:
          "Common misspellings that cost marks: 'resurection' (resurrection), 'omnibenevelent' (omnibenevolent), 'Muhammed' (Muhammad).",
      },
    ],
    sentenceStarters: [
      {
        label: "Argue in favour",
        starter:
          "Some [Christians/Muslims] would agree with this statement because...",
      },
      {
        label: "Argue against",
        starter:
          "However, others would disagree because they believe that...",
      },
      {
        label: "Non-religious perspective",
        starter:
          "From a non-religious point of view, an atheist or humanist might argue that...",
      },
      {
        label: "Evaluate significance",
        starter:
          "This argument is [persuasive/less convincing] because...",
      },
      {
        label: "Justified conclusion",
        starter:
          "In conclusion, having weighed both sides, I believe that... because...",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Paper / AO mark breakdown
// ---------------------------------------------------------------------------

export const RS_PAPER_AO_BREAKDOWN: RsPaperAOBreakdown[] = [
  {
    paper: "Paper 1: Study of Religions",
    ao1: "24 marks per section (AO1)",
    ao2: "24 marks per section (AO2)",
    total: "96 marks (2 sections x 48 marks each)",
  },
  {
    paper: "Paper 2: Thematic Studies",
    ao1: "12 marks per theme (AO1)",
    ao2: "12 marks per theme (AO2)",
    total: "96 marks (4 themes x 24 marks each)",
  },
];
