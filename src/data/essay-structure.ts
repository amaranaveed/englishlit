/* ────────────────────────────────────────────────────────
   Grade 9 Essay Structure – PETAETACWW
   Based on the Lightup method used in AQA GCSE classrooms.
   Data used by /essay-structure
   ──────────────────────────────────────────────────────── */

/* ── The 10 steps of a PETAETACWW paragraph ──────────── */
export interface StructureStep {
  number: number;
  letter: string;       // the letter in PETAETACWW
  label: string;        // short name shown in the step badge
  ao: string;           // which AO this targets
  colour: string;       // theme colour token
  what: string;         // one-line explanation
  detail: string;       // fuller guidance
  starterPhrases: string[];
  tip: string;          // quick bullet-point tip
  doThis: string;
  notThis: string;
}

export const PARAGRAPH_STEPS: StructureStep[] = [
  {
    number: 1,
    letter: "P",
    label: "Point",
    ao: "AO1",
    colour: "teal",
    what: "Use a word/phrase from the question + your own point.",
    detail:
      "Open with a clear argument that directly answers the question. Use the writer's name and a strong verb like 'constructs', 'presents', 'conveys'. This is NOT a description of what happens — it's your interpretation.",
    starterPhrases: [
      "[Writer] constructs…",
      "[Writer] presents [character] as…",
      "[Writer] conveys the idea that…",
      "Through [character/moment], [writer] suggests…",
    ],
    tip: "Always start with the writer's name — it shows you're analysing, not retelling.",
    doThis:
      "Priestley constructs Gerald as a representative of capitalist exploitation, revealing how the bourgeois class maintains power and control over the working class through financial dominance.",
    notThis:
      "Gerald had an affair with Eva Smith and this shows he is a bad person.",
  },
  {
    number: 2,
    letter: "E",
    label: "Evidence 1",
    ao: "AO1",
    colour: "green",
    what: "Embed a short quotation into your sentence.",
    detail:
      "Don't drop the quote on its own line. Weave it into the grammar of your sentence so it reads naturally. Keep it short — ideally under 8 words.",
    starterPhrases: [
      "This is clear when [character] remarks, \"…\"",
      "This is evident when [character] states, \"…\"",
      "This becomes apparent through the phrase \"…\"",
    ],
    tip: "Embed in quote — make it part of your sentence, not a separate block.",
    doThis:
      "This is clear when Gerald remarks, \"She lived very economically on what I allowed her.\"",
    notThis:
      "Gerald says a quote: \"She lived very economically on what I allowed her.\" This is evidence.",
  },
  {
    number: 3,
    letter: "T",
    label: "Technique 1",
    ao: "AO2",
    colour: "purple",
    what: "Name the technique used in the quotation.",
    detail:
      "Identify a specific language technique (diction, metaphor, imperative, possessive language, sibilance, etc.). Use the format: 'The [technique] of \"…\"'. This targets AO2 directly.",
    starterPhrases: [
      "The diction of \"…\" conveys…",
      "The [technique] of \"…\" suggests…",
      "The possessive language in \"…\" implies…",
      "The imperative \"…\" reveals…",
    ],
    tip: "Use Lightup technique — name it precisely, don't just say 'language'.",
    doThis:
      "The diction of \"allowed\" conveys control and domination, implying that Eva's survival depended entirely on Gerald's permission rather than her own independence.",
    notThis:
      "The word \"allowed\" is an interesting word choice that shows Gerald is in charge.",
  },
  {
    number: 4,
    letter: "A",
    label: "Analysis 1",
    ao: "AO2",
    colour: "orange",
    what: "What does the technique do? How does it show this? Why? (What, How, Why)",
    detail:
      "This is the most important part — go deep. Explain what effect the technique creates, how it achieves this, and why the writer chose it. Use the connective phrases 'this creates a sense of…', 'which illuminates…', 'because of this…' to build your analysis.",
    starterPhrases: [
      "This creates a sense of…",
      "…which illuminates…",
      "Because of this, the audience…",
      "This suggests that…",
    ],
    tip: "What, How, Why — always push through all three layers of analysis.",
    doThis:
      "This creates a sense of economic possession, which illuminates the imbalance of power between classes; because of this, the audience sees how capitalism fosters dependency and reinforces inequality.",
    notThis:
      "This shows that Gerald is powerful and Eva is not. It is a bad thing.",
  },
  {
    number: 5,
    letter: "E",
    label: "Evidence 2",
    ao: "AO1",
    colour: "green",
    what: "Introduce a second embedded quotation to deepen the argument.",
    detail:
      "Use a connective like 'Moreover' or 'Furthermore' to introduce your second piece of evidence. This second quote should build on or develop the first — showing progression in your argument.",
    starterPhrases: [
      "Moreover, when [character] says \"…\"",
      "Furthermore, the phrase \"…\" suggests…",
      "This is reinforced when [character] states, \"…\"",
    ],
    tip: "Embed in quote — the second quote should build on the first, not repeat the same idea.",
    doThis:
      "Moreover, when Gerald uses the phrase \"I allowed her,\" the possessive affix frames Eva as his property, reducing her to an object under his control.",
    notThis:
      "Also, Gerald says \"I allowed her\" which is another quote about the same thing.",
  },
  {
    number: 6,
    letter: "T",
    label: "Technique 2",
    ao: "AO2",
    colour: "purple",
    what: "Identify the technique in the second quotation.",
    detail:
      "Name a different technique or a different aspect of the same technique. Use the format: 'By [writer] using [technique], he/she…'. This shows range in your AO2 analysis.",
    starterPhrases: [
      "By [writer] using this language of [technique]…",
      "By [writer] employing [technique], he/she…",
      "[Writer]'s use of [technique] here…",
    ],
    tip: "Use Lightup technique — try to identify a different technique from your first one.",
    doThis:
      "By Priestley using this language of control, he exposes Gerald's dehumanising view of Eva as a passive recipient of his benevolence rather than an equal deserving freedom.",
    notThis:
      "Priestley uses language here to show that Gerald is controlling.",
  },
  {
    number: 7,
    letter: "A",
    label: "Analysis 2",
    ao: "AO2",
    colour: "orange",
    what: "What effect does this create? Use RAD (Represent, Amplify, Develop).",
    detail:
      "Push your analysis further using RAD: does this Represent a wider idea? Does it Amplify a theme already established? Does it Develop the audience's understanding? Use 'This creates a portrayal of…', 'which is emblematic of…', '[insert RAD]'.",
    starterPhrases: [
      "This creates a portrayal of…",
      "…which is emblematic of…",
      "This represents…",
      "This amplifies the idea that…",
      "This develops the audience's understanding of…",
    ],
    tip: "RAD = Represent, Amplify, Develop. Pick the one that fits and push deeper.",
    doThis:
      "This creates a portrayal of patronising ownership, which is emblematic of Gerald's alignment with the bourgeois class who sustain their social dominance through the subjugation of the proletariat.",
    notThis:
      "This shows Gerald is a bad person who treats Eva badly.",
  },
  {
    number: 8,
    letter: "C",
    label: "Context",
    ao: "AO3",
    colour: "blue",
    what: "Link to context, then link context back to the question.",
    detail:
      "State relevant context and connect it to your argument. Don't bolt it on — integrate it. Use the structure: 'This idea reflects… [context]… This reinforces…'. The context should illuminate your analysis, not sit separately.",
    starterPhrases: [
      "This idea reflects…",
      "This mirrors the [historical context] of…",
      "…which reinforces…",
      "This reinforces the moral necessity of…",
    ],
    tip: "Link to context → state context → link back to question. Three moves.",
    doThis:
      "This idea reflects the entrenched Edwardian class system, where the bourgeois maintained economic authority over the working class. It also mirrors 1912 Britain's capitalist policies, which Priestley contrasts with the post-war rise of socialism. This reinforces the moral necessity of dismantling exploitative power structures.",
    notThis:
      "In 1912 there were rich and poor people. The class system was unfair.",
  },
  {
    number: 9,
    letter: "W",
    label: "WOW",
    ao: "AO2",
    colour: "amber",
    what: "Grade 7+ bonus — add a structural/form point or higher-level connection.",
    detail:
      "This is your grade-booster. Use a connecting word like 'Furthermore' and add a point about the writer's use of structure or form (e.g. the Well-Made Play, the three unities, dramatic irony, cyclical structure). Then link it back to the question. This is what separates good from exceptional.",
    starterPhrases: [
      "Furthermore, [writer] uses the [structural feature] to…",
      "Moreover, the [form/structure] intensifies…",
      "This is further reinforced through [writer]'s use of [form]…",
    ],
    tip: "Connecting word → WOW (structure/form point) → link back to question.",
    doThis:
      "Furthermore, Priestley uses the Well-Made Play structure to intensify the cause-and-effect exposure of Gerald's role in Eva's downfall. His language choice becomes a catalyst in the chain of events that lead to her death, thereby magnifying Priestley's social critique.",
    notThis:
      "Also this links to the play's structure.",
  },
  {
    number: 10,
    letter: "W",
    label: "Writer's Intentions",
    ao: "AO1",
    colour: "red",
    what: "What was the writer's aim? Use CAMP + ICE.",
    detail:
      "End with the writer's purpose. Use CAMP to identify what the text is (Cautionary tale / Allegorical / Microcosm / Political diatribe) and ICE for what the writer wants to do to the audience (Inform / Criticise / Educate). Format: 'Thus, [writer] creates a [CAMP] to [ICE] the audience about…'.",
    starterPhrases: [
      "Thus, [writer] creates a [CAMP] to [ICE] the audience about…",
      "Ultimately, [writer] constructs a [CAMP] to [ICE]…",
      "Through this, [writer] fashions a [CAMP] that seeks to [ICE]…",
    ],
    tip: "CAMP = Cautionary tale / Allegorical / Microcosm / Political diatribe. ICE = Inform / Criticise / Educate.",
    doThis:
      "Thus, Priestley creates a political diatribe to critique the audience about the corrosive impact of capitalist exploitation, urging them to embrace collective social responsibility over individual gain.",
    notThis:
      "Priestley wanted people to be nicer to each other.",
  },
];

/* ── CAMP + ICE reference ────────────────────────────── */
export interface AcronymItem {
  letter: string;
  word: string;
  description: string;
}

export const CAMP: AcronymItem[] = [
  { letter: "C", word: "Cautionary tale", description: "A story that warns the audience about consequences" },
  { letter: "A", word: "Allegorical", description: "A story with a hidden moral or political meaning" },
  { letter: "M", word: "Microcosm", description: "A small-scale representation of a wider society/issue" },
  { letter: "P", word: "Political diatribe", description: "A forceful attack on political/social injustice" },
];

export const ICE: AcronymItem[] = [
  { letter: "I", word: "Inform", description: "Make the audience aware of an issue" },
  { letter: "C", word: "Criticise", description: "Challenge and condemn attitudes or behaviour" },
  { letter: "E", word: "Educate", description: "Teach the audience to think/act differently" },
];

/* ── RAD reference ───────────────────────────────────── */
export const RAD: AcronymItem[] = [
  { letter: "R", word: "Represent", description: "The technique represents a wider idea or concept" },
  { letter: "A", word: "Amplify", description: "The technique amplifies a theme already established" },
  { letter: "D", word: "Develop", description: "The technique develops the audience's understanding" },
];

/* ── Overall essay skeleton ──────────────────────────── */
export interface EssaySection {
  label: string;
  colour: string;
  timing: string;
  bullets: string[];
}

export const ESSAY_SKELETON: EssaySection[] = [
  {
    label: "Plan",
    colour: "grey",
    timing: "~5 min",
    bullets: [
      "Read the question twice — underline the key word (e.g. 'how', 'present', 'explore').",
      "Jot 3 arguments that directly answer the question — each becomes a PETAETACWW paragraph.",
      "For each argument, note two short quotations you'll use.",
      "Decide your overall thesis (your 'big idea' about the question).",
    ],
  },
  {
    label: "Introduction",
    colour: "teal",
    timing: "~3 min",
    bullets: [
      "State your thesis in 2–3 sentences — no waffle.",
      "Signal the direction of your argument.",
      "Mention the writer's purpose or intention.",
      "Do NOT retell the plot or define the theme.",
    ],
  },
  {
    label: "Body Paragraphs (×3)",
    colour: "purple",
    timing: "~30 min",
    bullets: [
      "Each paragraph follows the full PETAETACWW structure.",
      "Two evidence + technique + analysis cycles per paragraph gives you double the AO2 marks.",
      "Use connectives between paragraphs ('Furthermore…', 'In contrast…', 'Most significantly…').",
      "Every paragraph must end with Writer's Intentions using CAMP + ICE.",
    ],
  },
  {
    label: "Conclusion",
    colour: "blue",
    timing: "~2 min",
    bullets: [
      "Restate your thesis in different words.",
      "Reference the writer's overall intention one final time.",
      "End with a punchy final sentence — leave the examiner thinking.",
      "Never introduce new evidence in the conclusion.",
    ],
  },
];

/* ── Full model paragraphs (colour-coded PETAETACWW) ─── */
export interface ModelParagraphData {
  id: string;
  textTitle: string;
  author: string;
  question: string;
  segments: { text: string; step: number; label: string; colour: string }[];
}

export const MODEL_PARAGRAPHS: ModelParagraphData[] = [
  /* ── An Inspector Calls ──────────────────────────────── */
  {
    id: "inspector-calls",
    textTitle: "An Inspector Calls",
    author: "J.B. Priestley",
    question: "How does Priestley present ideas about social class in An Inspector Calls?",
    segments: [
      {
        text: "Priestley constructs Gerald as a representative of capitalist exploitation, revealing how the bourgeois class maintains power and control over the working class through financial dominance.",
        step: 1, label: "Point", colour: "teal",
      },
      {
        text: "This is clear when Gerald remarks, \"She lived very economically on what I allowed her.\"",
        step: 2, label: "Evidence 1", colour: "green",
      },
      {
        text: "The diction of \"allowed\" conveys control and domination, implying that Eva's survival depended entirely on Gerald's permission rather than her own independence.",
        step: 3, label: "Technique 1", colour: "purple",
      },
      {
        text: "This creates a sense of economic possession, which illuminates the imbalance of power between classes; because of this, the audience sees how capitalism fosters dependency and reinforces inequality.",
        step: 4, label: "Analysis 1", colour: "orange",
      },
      {
        text: "Moreover, when Gerald uses the phrase \"I allowed her,\" the possessive affix frames Eva as his property, reducing her to an object under his control.",
        step: 5, label: "Evidence 2", colour: "green",
      },
      {
        text: "By Priestley using this language of control, he exposes Gerald's dehumanising view of Eva as a passive recipient of his benevolence rather than an equal deserving freedom.",
        step: 6, label: "Technique 2", colour: "purple",
      },
      {
        text: "This creates a portrayal of patronising ownership, which is emblematic of Gerald's alignment with the bourgeois class who sustain their social dominance through the subjugation of the proletariat.",
        step: 7, label: "Analysis 2", colour: "orange",
      },
      {
        text: "This idea reflects the entrenched Edwardian class system, where the bourgeois maintained economic authority over the working class. It also mirrors 1912 Britain's capitalist policies, which Priestley contrasts with the post-war rise of socialism. This reinforces the moral necessity of dismantling exploitative power structures.",
        step: 8, label: "Context", colour: "blue",
      },
      {
        text: "Furthermore, Priestley uses the Well-Made Play structure to intensify the cause-and-effect exposure of Gerald's role in Eva's downfall. His language choice becomes a catalyst in the chain of events that lead to her death, thereby magnifying Priestley's social critique.",
        step: 9, label: "WOW", colour: "amber",
      },
      {
        text: "Thus, Priestley creates a political diatribe to critique the audience about the corrosive impact of capitalist exploitation, urging them to embrace collective social responsibility over individual gain.",
        step: 10, label: "Writer's Intentions", colour: "red",
      },
    ],
  },

  /* ── Much Ado About Nothing ──────────────────────────── */
  {
    id: "much-ado",
    textTitle: "Much Ado About Nothing",
    author: "William Shakespeare",
    question: "How does Shakespeare present ideas about gender and power in Much Ado About Nothing?",
    segments: [
      {
        text: "Shakespeare presents Beatrice as a woman who is acutely aware of her own powerlessness within a patriarchal society, using her command of \"Kill Claudio\" to expose the structural exclusion of women from the honour system.",
        step: 1, label: "Point", colour: "teal",
      },
      {
        text: "This is clear when Beatrice demands of Benedick, \"Kill Claudio.\"",
        step: 2, label: "Evidence 1", colour: "green",
      },
      {
        text: "The imperative monosyllables create a brutal brevity that strips away Beatrice's characteristic wit, replacing elaborate wordplay with raw, unadorned command.",
        step: 3, label: "Technique 1", colour: "purple",
      },
      {
        text: "This creates a sense of desperate urgency, which illuminates the depth of her moral outrage at Hero's public shaming; because of this, the audience recognises that Beatrice's intellectual armour has been completely abandoned in favour of genuine emotional conviction.",
        step: 4, label: "Analysis 1", colour: "orange",
      },
      {
        text: "Moreover, when Beatrice cries \"O that I were a man! I would eat his heart in the market-place,\" the violent imagery reveals the full extent of her frustration.",
        step: 5, label: "Evidence 2", colour: "green",
      },
      {
        text: "By Shakespeare using the hyperbolic metaphor of consuming Claudio's heart publicly, he transforms Beatrice's grief into visceral, animalistic rage that transcends the conventions of feminine speech.",
        step: 6, label: "Technique 2", colour: "purple",
      },
      {
        text: "This creates a portrayal of a woman trapped between intellectual power and physical disenfranchisement, which amplifies Shakespeare's broader exploration of how the honour code serves men while silencing women — Beatrice can see injustice clearly yet is structurally excluded from acting upon it.",
        step: 7, label: "Analysis 2", colour: "orange",
      },
      {
        text: "This idea reflects Elizabethan society's rigid gender hierarchy, where a woman's honour was equated with sexual purity and men alone held the right to defend it through duelling. Hero's public shaming would have constituted social annihilation, yet women like Beatrice were entirely excluded from the martial system that could restore it. This reinforces the systemic inequality at the heart of the play's conflict.",
        step: 8, label: "Context", colour: "blue",
      },
      {
        text: "Furthermore, Shakespeare's structural placement of this demand at the exact moment Benedick declares his love creates a jarring collision between romance and violence, forcing the audience out of comfortable comedic engagement and into critical reflection on the society that makes such a demand necessary.",
        step: 9, label: "WOW", colour: "amber",
      },
      {
        text: "Thus, Shakespeare creates an allegorical critique to educate the audience about the corrosive impact of patriarchal honour codes that demand women's virtue while denying them any power to defend it.",
        step: 10, label: "Writer's Intentions", colour: "red",
      },
    ],
  },

  /* ── Pride and Prejudice ─────────────────────────────── */
  {
    id: "pride-prejudice",
    textTitle: "Pride and Prejudice",
    author: "Jane Austen",
    question: "How does Austen present ideas about self-knowledge in Pride and Prejudice?",
    segments: [
      {
        text: "Austen presents Elizabeth's journey towards self-knowledge as the novel's central moral argument, suggesting that even the most intelligent individuals are vulnerable to the distorting effects of prejudice.",
        step: 1, label: "Point", colour: "teal",
      },
      {
        text: "This is clear when Elizabeth reflects, \"Till this moment I never knew myself.\"",
        step: 2, label: "Evidence 1", colour: "green",
      },
      {
        text: "The epiphanic monosyllables — almost every word is a single syllable — carry maximum emotional weight through their stark simplicity, stripping away the elaborate wit that has defined Elizabeth throughout the novel.",
        step: 3, label: "Technique 1", colour: "purple",
      },
      {
        text: "This creates a sense of devastating clarity, which illuminates the gap between Elizabeth's self-image as a rational judge of character and the reality of her own blind spots; because of this, the reader is forced to reassess every confident judgement Elizabeth has made previously.",
        step: 4, label: "Analysis 1", colour: "orange",
      },
      {
        text: "Moreover, the verb \"knew\" echoes Austen's broader epistemological concern, as the entire novel interrogates the question of how we can truly know others when we cannot even know ourselves.",
        step: 5, label: "Evidence 2", colour: "green",
      },
      {
        text: "By Austen placing this brief, understated confession immediately after Darcy's lengthy letter, she creates a deliberate structural contrast: pages of detailed evidence are condensed into just eight words of self-recognition.",
        step: 6, label: "Technique 2", colour: "purple",
      },
      {
        text: "This creates a portrayal of genuine intellectual humility, which represents the novel's philosophical core — that the deepest truths require the plainest language, and that self-knowledge demands the courage to abandon one's most cherished assumptions.",
        step: 7, label: "Analysis 2", colour: "orange",
      },
      {
        text: "This idea reflects the Enlightenment's emphasis on rational self-examination, yet Austen subtly critiques its limits: Elizabeth, the novel's most perceptive character, has been blind to her own prejudice. In Regency society, where women were judged on appearance and propriety rather than intellect, Elizabeth's journey towards genuine self-awareness becomes a quietly radical act of internal liberation. This reinforces the moral necessity of looking beyond surface impressions.",
        step: 8, label: "Context", colour: "blue",
      },
      {
        text: "Furthermore, Austen uses this moment as the novel's structural volta — everything before it is defined by misreading, and everything after by growing clarity — mirroring the classical anagnorisis of tragic drama yet repurposing it within a comedic framework where self-knowledge leads to happiness rather than destruction.",
        step: 9, label: "WOW", colour: "amber",
      },
      {
        text: "Thus, Austen creates a cautionary tale to educate the audience about the dangers of allowing prejudice to masquerade as rational judgement, urging readers to pursue genuine self-knowledge over comfortable self-deception.",
        step: 10, label: "Writer's Intentions", colour: "red",
      },
    ],
  },
];

/* ── Key differences: grade 5/7/9 ────────────────────── */
export interface GradeComparison {
  grade: string;
  colour: string;
  traits: string[];
}

export const GRADE_COMPARISONS: GradeComparison[] = [
  {
    grade: "Grade 5",
    colour: "orange",
    traits: [
      "Makes a relevant point and gives a quotation",
      "Explains what the quote means (paraphrase)",
      "May name a technique but doesn't analyse it",
      "Context is bolted on as a separate sentence",
      "No alternative interpretations or writer's intentions",
      "Only one evidence + analysis cycle",
    ],
  },
  {
    grade: "Grade 7",
    colour: "blue",
    traits: [
      "Clear argument linked to the question",
      "Short, embedded quotations",
      "Names techniques and explains their effect",
      "Context is linked to the analysis",
      "Some attempt at WOW or structural point",
      "Two evidence cycles but analysis lacks depth",
    ],
  },
  {
    grade: "Grade 9",
    colour: "green",
    traits: [
      "Sharp argument with writer's name and critical voice",
      "Two embedded quotes that build on each other",
      "Deep word-level analysis using What, How, Why + RAD",
      "Context woven in — illuminates, doesn't decorate",
      "WOW point on structure/form that links back to question",
      "Ends with Writer's Intentions using CAMP + ICE",
    ],
  },
];
