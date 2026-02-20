// ---------------------------------------------------------------------------
// AQA GCSE Religious Studies A (8062) - Exam Questions Bank
// Specification reference: AQA 8062 (Teaching from September 2016)
// ---------------------------------------------------------------------------

export interface RsExamQuestion {
  topicSlug: string;
  question: string;
  marks: number;
  paper: number;
  commandWord: string;
}

// ---------------------------------------------------------------------------
// Question bank — Christianity Beliefs & Islam Beliefs
// ---------------------------------------------------------------------------

export const RS_EXAM_QUESTIONS: RsExamQuestion[] = [
  // =========================================================================
  // CHRISTIANITY BELIEFS (Paper 1)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "christianity-beliefs",
    question:
      "Which one of the following describes God as 'all-loving'? [A] Omnipotent [B] Omniscient [C] Omnibenevolent [D] Transcendent",
    marks: 1,
    paper: 1,
    commandWord: "Which one",
  },
  {
    topicSlug: "christianity-beliefs",
    question:
      "Which one of the following is the Christian belief that God became human in the person of Jesus? [A] Resurrection [B] Ascension [C] Incarnation [D] Salvation",
    marks: 1,
    paper: 1,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..." / "Name two..."
  {
    topicSlug: "christianity-beliefs",
    question: "Give two Christian beliefs about the afterlife.",
    marks: 2,
    paper: 1,
    commandWord: "Give two",
  },
  {
    topicSlug: "christianity-beliefs",
    question:
      "Name two of the three persons of the Trinity.",
    marks: 2,
    paper: 1,
    commandWord: "Name two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "christianity-beliefs",
    question:
      "Explain two ways the belief in the Trinity influences Christians today. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Explain two",
  },
  {
    topicSlug: "christianity-beliefs",
    question:
      "Explain two Christian beliefs about the nature of God. Refer to a source of wisdom and authority in your answer. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom/scripture"
  {
    topicSlug: "christianity-beliefs",
    question:
      "Explain two Christian teachings about creation. Refer to scripture or another source of Christian belief in your answer. [5 marks]",
    marks: 5,
    paper: 1,
    commandWord: "Explain two",
  },
  {
    topicSlug: "christianity-beliefs",
    question:
      "Explain two Christian beliefs about salvation. Refer to scripture or another source of Christian belief in your answer. [5 marks]",
    marks: 5,
    paper: 1,
    commandWord: "Explain two",
  },

  // 12-mark — "'Statement.' Evaluate this statement."
  {
    topicSlug: "christianity-beliefs",
    question:
      "'The resurrection of Jesus is the most important Christian belief.' Evaluate this statement. In your answer you should: refer to Christian teachings, give reasoned arguments to support this statement, give reasoned arguments to support a different point of view, reach a justified conclusion. [12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "christianity-beliefs",
    question:
      "'Belief in the Trinity is essential to Christianity.' Evaluate this statement. In your answer you should: refer to Christian teachings, give reasoned arguments to support this statement, give reasoned arguments to support a different point of view, reach a justified conclusion. [12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "christianity-beliefs",
    question:
      "'Science proves that the Christian creation story is wrong.' Evaluate this statement. In your answer you should: refer to Christian teachings, give reasoned arguments to support this statement, give reasoned arguments to support a different point of view, reach a justified conclusion. [12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 1,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // ISLAM BELIEFS (Paper 1)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "islam-beliefs",
    question:
      "Which one of the following is the Islamic belief in the oneness of God? [A] Risalah [B] Tawhid [C] Akhirah [D] Al-Qadr",
    marks: 1,
    paper: 1,
    commandWord: "Which one",
  },
  {
    topicSlug: "islam-beliefs",
    question:
      "Which one of the following is the Muslim term for life after death? [A] Tawhid [B] Risalah [C] Akhirah [D] Malaikah",
    marks: 1,
    paper: 1,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..." / "Name two..."
  {
    topicSlug: "islam-beliefs",
    question: "Give two of the six articles of faith in Sunni Islam.",
    marks: 2,
    paper: 1,
    commandWord: "Give two",
  },
  {
    topicSlug: "islam-beliefs",
    question: "Name two angels recognised in Islam and state a role of each.",
    marks: 2,
    paper: 1,
    commandWord: "Name two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "islam-beliefs",
    question:
      "Explain two ways belief in Tawhid influences Muslims today. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Explain two",
  },
  {
    topicSlug: "islam-beliefs",
    question:
      "Explain two Muslim beliefs about prophethood (Risalah). Refer to a source of wisdom and authority in your answer. [4 marks]",
    marks: 4,
    paper: 1,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom/scripture"
  {
    topicSlug: "islam-beliefs",
    question:
      "Explain two Muslim teachings about the Day of Judgement. Refer to scripture or another source of Muslim belief in your answer. [5 marks]",
    marks: 5,
    paper: 1,
    commandWord: "Explain two",
  },
  {
    topicSlug: "islam-beliefs",
    question:
      "Explain two Muslim beliefs about predestination (Al-Qadr). Refer to scripture or another source of Muslim belief in your answer. [5 marks]",
    marks: 5,
    paper: 1,
    commandWord: "Explain two",
  },

  // 12-mark — "'Statement.' Evaluate this statement."
  {
    topicSlug: "islam-beliefs",
    question:
      "'Belief in Tawhid is the most important of the six articles of faith.' Evaluate this statement. In your answer you should: refer to Muslim teachings, give reasoned arguments to support this statement, give reasoned arguments to support a different point of view, reach a justified conclusion. [12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "islam-beliefs",
    question:
      "'Belief in predestination (Al-Qadr) means that Muslims do not have free will.' Evaluate this statement. In your answer you should: refer to Muslim teachings, give reasoned arguments to support this statement, give reasoned arguments to support a different point of view, reach a justified conclusion. [12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 1,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "islam-beliefs",
    question:
      "'The Qur'an is the only source of authority a Muslim needs.' Evaluate this statement. In your answer you should: refer to Muslim teachings, give reasoned arguments to support this statement, give reasoned arguments to support a different point of view, reach a justified conclusion. [12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 1,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // THEME A: RELATIONSHIPS & FAMILIES (Paper 2)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "theme-a-relationships",
    question:
      "Which one of the following is the Christian term for a sexual relationship between a married person and someone who is not their spouse? [A] Cohabitation [B] Adultery [C] Annulment [D] Celibacy",
    marks: 1,
    paper: 2,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..."
  {
    topicSlug: "theme-a-relationships",
    question: "Give two religious beliefs about the purpose of marriage.",
    marks: 2,
    paper: 2,
    commandWord: "Give two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "theme-a-relationships",
    question:
      "Explain two contrasting religious beliefs about divorce. In your answer you must refer to one or more religious traditions. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom"
  {
    topicSlug: "theme-a-relationships",
    question:
      "Explain two religious teachings about the roles of men and women in the family. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    paper: 2,
    commandWord: "Explain two",
  },

  // 12-mark — Evaluate
  {
    topicSlug: "theme-a-relationships",
    question:
      "'Marriage is the only acceptable context for a sexual relationship.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "theme-a-relationships",
    question:
      "'Religious believers should never accept same-sex marriage.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // THEME B: RELIGION & LIFE (Paper 2)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "theme-b-religion-life",
    question:
      "Which one of the following is the belief that humans have a duty to look after the world on God's behalf? [A] Dominion [B] Stewardship [C] Awe [D] Sanctity of life",
    marks: 1,
    paper: 2,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..."
  {
    topicSlug: "theme-b-religion-life",
    question: "Give two religious beliefs about why the environment should be protected.",
    marks: 2,
    paper: 2,
    commandWord: "Give two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "theme-b-religion-life",
    question:
      "Explain two contrasting religious beliefs about abortion. In your answer you must refer to one or more religious traditions. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom"
  {
    topicSlug: "theme-b-religion-life",
    question:
      "Explain two religious teachings about the sanctity of life. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    paper: 2,
    commandWord: "Explain two",
  },

  // 12-mark — Evaluate
  {
    topicSlug: "theme-b-religion-life",
    question:
      "'Euthanasia should never be allowed because life is sacred.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "theme-b-religion-life",
    question:
      "'Religious believers should not use animals for food.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // THEME C: EXISTENCE OF GOD & REVELATION (Paper 2)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "theme-c-existence-god",
    question:
      "Which one of the following is the argument for God's existence based on the idea that the universe must have a first cause? [A] Design argument [B] Cosmological argument [C] Argument from miracles [D] Argument from morality",
    marks: 1,
    paper: 2,
    commandWord: "Which one",
  },

  // 2-mark — "Name two..."
  {
    topicSlug: "theme-c-existence-god",
    question: "Name two types of revelation through which believers claim to experience God.",
    marks: 2,
    paper: 2,
    commandWord: "Name two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "theme-c-existence-god",
    question:
      "Explain two contrasting religious beliefs about visions as a form of revelation. In your answer you must refer to one or more religious traditions. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom"
  {
    topicSlug: "theme-c-existence-god",
    question:
      "Explain two religious responses to the problem of evil and suffering. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    paper: 2,
    commandWord: "Explain two",
  },

  // 12-mark — Evaluate
  {
    topicSlug: "theme-c-existence-god",
    question:
      "'The existence of evil and suffering proves that God does not exist.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "theme-c-existence-god",
    question:
      "'Miracles prove that God exists.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // THEME D: RELIGION, PEACE & CONFLICT (Paper 2)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "theme-d-peace-conflict",
    question:
      "Which one of the following is the belief that all forms of violence and war are wrong? [A] Just war [B] Holy war [C] Pacifism [D] Reconciliation",
    marks: 1,
    paper: 2,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..."
  {
    topicSlug: "theme-d-peace-conflict",
    question: "Give two conditions of Just War theory.",
    marks: 2,
    paper: 2,
    commandWord: "Give two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "theme-d-peace-conflict",
    question:
      "Explain two contrasting religious beliefs about the use of violence. In your answer you must refer to one or more religious traditions. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom"
  {
    topicSlug: "theme-d-peace-conflict",
    question:
      "Explain two religious teachings about forgiveness and reconciliation. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    paper: 2,
    commandWord: "Explain two",
  },

  // 12-mark — Evaluate
  {
    topicSlug: "theme-d-peace-conflict",
    question:
      "'War can never be justified from a religious point of view.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "theme-d-peace-conflict",
    question:
      "'Weapons of mass destruction can never be used by religious believers.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // THEME E: RELIGION, CRIME & PUNISHMENT (Paper 2)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "theme-e-crime-punishment",
    question:
      "Which one of the following is the aim of punishment that tries to change a criminal's behaviour so they do not reoffend? [A] Retribution [B] Deterrence [C] Reformation [D] Protection",
    marks: 1,
    paper: 2,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..."
  {
    topicSlug: "theme-e-crime-punishment",
    question: "Give two religious beliefs about forgiveness of criminals.",
    marks: 2,
    paper: 2,
    commandWord: "Give two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "theme-e-crime-punishment",
    question:
      "Explain two contrasting religious beliefs about the death penalty. In your answer you must refer to one or more religious traditions. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom"
  {
    topicSlug: "theme-e-crime-punishment",
    question:
      "Explain two religious teachings about justice. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    paper: 2,
    commandWord: "Explain two",
  },

  // 12-mark — Evaluate
  {
    topicSlug: "theme-e-crime-punishment",
    question:
      "'The death penalty can never be justified from a religious point of view.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "theme-e-crime-punishment",
    question:
      "'Religious believers should always forgive criminals.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },

  // =========================================================================
  // THEME F: RELIGION, HUMAN RIGHTS & SOCIAL JUSTICE (Paper 2)
  // =========================================================================

  // 1-mark — "Which one of the following..."
  {
    topicSlug: "theme-f-human-rights",
    question:
      "Which one of the following describes treating people differently because of their race, gender, or religion? [A] Prejudice [B] Discrimination [C] Tolerance [D] Justice",
    marks: 1,
    paper: 2,
    commandWord: "Which one",
  },

  // 2-mark — "Give two..."
  {
    topicSlug: "theme-f-human-rights",
    question: "Give two religious teachings about the responsibility to help the poor.",
    marks: 2,
    paper: 2,
    commandWord: "Give two",
  },

  // 4-mark — "Explain two..."
  {
    topicSlug: "theme-f-human-rights",
    question:
      "Explain two contrasting religious beliefs about wealth. In your answer you must refer to one or more religious traditions. [4 marks]",
    marks: 4,
    paper: 2,
    commandWord: "Explain two",
  },

  // 5-mark — "Explain two... + source of wisdom"
  {
    topicSlug: "theme-f-human-rights",
    question:
      "Explain two religious teachings about racial equality. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    paper: 2,
    commandWord: "Explain two",
  },

  // 12-mark — Evaluate
  {
    topicSlug: "theme-f-human-rights",
    question:
      "'Religious believers have a duty to fight against social injustice.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
  {
    topicSlug: "theme-f-human-rights",
    question:
      "'It is impossible to be wealthy and a true religious believer.'\n\nEvaluate this statement.\n\nIn your answer you should:\n\u2022 refer to religious teaching\n\u2022 give reasoned arguments to support this statement\n\u2022 give reasoned arguments to support a different point of view\n\u2022 reach a justified conclusion.\n\n[12 marks] [+3 SPaG marks]",
    marks: 12,
    paper: 2,
    commandWord: "Evaluate",
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getRsExamQuestionsByTopic(topicSlug: string): RsExamQuestion[] {
  return RS_EXAM_QUESTIONS.filter((q) => q.topicSlug === topicSlug);
}

export function allRsExamQuestions(): RsExamQuestion[] {
  return RS_EXAM_QUESTIONS;
}
