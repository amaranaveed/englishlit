/* ────────────────────────────────────────────────────────
   Grade 9 Essay Structure
   A scaffold for building analytical paragraphs — not a
   rigid formula. AQA examiners reward fluent, argued
   responses, so adapt these steps to your own voice.
   Data used by /essay-structure
   ──────────────────────────────────────────────────────── */

/* ── The 10 steps of an analytical paragraph ─────────── */
export interface StructureStep {
  number: number;
  letter: string;       // step letter code
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
    label: "Analyse Language",
    ao: "AO2",
    colour: "purple",
    what: "Zoom into a specific word or phrase and explain what it suggests.",
    detail:
      "Start with what the language MEANS, then name the technique if it adds to your argument. Don't lead with technique names — examiners call this 'feature-spotting'. Instead, explain what the writer's choice reveals, implies, or suggests, and use terminology naturally where it helps.",
    starterPhrases: [
      "The word \"…\" suggests…",
      "The [technique] of \"…\" conveys…",
      "The possessive language in \"…\" implies…",
      "The imperative \"…\" reveals…",
    ],
    tip: "Lead with meaning, not technique names. 'The word \"allowed\" implies control' beats 'The verb \"allowed\" is diction'.",
    doThis:
      "The word \"allowed\" is telling — it's the language of permission, not partnership, implying that Eva's survival depended entirely on Gerald's goodwill rather than her own independence.",
    notThis:
      "The writer uses diction. The word \"allowed\" is a verb that shows Gerald is in charge.",
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
    label: "Deepen Analysis",
    ao: "AO2",
    colour: "purple",
    what: "Push your analysis further — what does this language reveal about the writer's argument?",
    detail:
      "Build on your second quotation by explaining what it adds to your argument. You might analyse a different aspect of the writer's language, connect to structure or form, or show how this evidence deepens the point you're making. Use terminology naturally where it helps.",
    starterPhrases: [
      "By [writer] using this language of…, [he/she]…",
      "[Writer]'s choice of \"…\" here reinforces…",
      "This language reveals…",
    ],
    tip: "Ask yourself: what does this second piece of evidence ADD to the argument?",
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
    what: "Weave in context to explain WHY the writer made this choice.",
    detail:
      "Context should illuminate your analysis, not sit in its own separate section. The best responses integrate context naturally — explaining how the historical, social, or cultural background shapes the writer's choices and their effect on the audience. AQA examiners penalise 'bolted-on' context that reads like a history essay. Instead, ask: 'Why did the writer do this HERE? What does this mean for the audience of the time?'",
    starterPhrases: [
      "This reflects the [period] reality that…",
      "Writing in [year], [writer] uses this to…",
      "For the [original audience], this would…",
      "This mirrors the [historical context] of…",
    ],
    tip: "Context explains the writer's purpose, not just the time period. Don't write a history paragraph.",
    doThis:
      "This reflects the rigid Edwardian class system, where the wealthy held enormous economic power over the working class. Writing in 1945, Priestley contrasts this with the post-war push for a fairer society, reinforcing his argument that these exploitative power dynamics need to be dismantled.",
    notThis:
      "In 1912 there were rich and poor people. The class system was unfair.",
  },
  {
    number: 9,
    letter: "W",
    label: "Structure / Form",
    ao: "AO2",
    colour: "amber",
    what: "Connect to the bigger picture — how does structure or form reinforce your point?",
    detail:
      "This is what separates Level 5/6 responses from lower levels. Consider how the writer's structural or formal choices reinforce the point you're making: cyclical structure, dramatic irony, the positioning of this moment in the text, genre conventions, or the relationship between this moment and the rest of the work. Don't force it — only include this if it genuinely strengthens your argument.",
    starterPhrases: [
      "Furthermore, [writer] uses the [structural feature] to…",
      "Moreover, the [form/structure] intensifies…",
      "Structurally, [writer] positions this to…",
    ],
    tip: "Think about WHY this moment is placed HERE in the text. What does the structure do?",
    doThis:
      "Furthermore, Priestley uses the Well-Made Play structure to intensify the cause-and-effect exposure of Gerald's role in Eva's downfall. His language choice becomes a catalyst in the chain of events that lead to her death, magnifying Priestley's social critique.",
    notThis:
      "Also this links to the play's structure.",
  },
  {
    number: 10,
    letter: "W",
    label: "Writer's Purpose",
    ao: "AO1",
    colour: "red",
    what: "End by explaining the writer's purpose — why did they make this choice?",
    detail:
      "Close the paragraph by connecting your analysis back to the writer's overall purpose. What is the writer trying to make the audience think, feel, or do? This is where you show you understand the text as a deliberately constructed argument, not just a story. Use the writer's name and a strong verb: 'Priestley uses…', 'Shakespeare challenges…', 'Austen exposes…'.",
    starterPhrases: [
      "Ultimately, [writer] uses [character/moment] to…",
      "Through this, [writer] challenges the audience to…",
      "[Writer] constructs this as a [warning/critique/argument] about…",
    ],
    tip: "The writer's purpose is the WHY behind everything. Why did they write this? What do they want the audience to take away?",
    doThis:
      "Ultimately, Priestley uses Gerald's relationship with Eva as a political critique, exposing how capitalist exploitation damages real lives and urging the audience to choose collective responsibility over individual self-interest.",
    notThis:
      "Priestley wanted people to be nicer to each other.",
  },
];

/* ── Writer's Purpose — useful vocabulary ────────────── */
export interface AcronymItem {
  letter: string;
  word: string;
  description: string;
}

export const CAMP: AcronymItem[] = [
  { letter: "C", word: "Cautionary tale", description: "A story that warns the audience about consequences" },
  { letter: "A", word: "Allegory", description: "A story with a deeper moral or political meaning" },
  { letter: "M", word: "Microcosm", description: "A small-scale representation of a wider society or issue" },
  { letter: "P", word: "Political critique", description: "A challenge to political or social injustice" },
];

export const ICE: AcronymItem[] = [
  { letter: "I", word: "Inform", description: "Make the audience aware of an issue" },
  { letter: "C", word: "Challenge", description: "Challenge attitudes, beliefs, or behaviour" },
  { letter: "E", word: "Educate", description: "Encourage the audience to think or act differently" },
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
      "Jot 3 arguments that directly answer the question — each becomes an analytical paragraph.",
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
      "Each paragraph builds an argument: point → evidence → analysis → context → writer's purpose.",
      "Two evidence + analysis cycles per paragraph gives you depth and range.",
      "Use connectives between paragraphs ('Furthermore…', 'In contrast…', 'Most significantly…').",
      "Always connect back to the writer's purpose — why did they make this choice?",
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

/* ── Full model paragraphs (colour-coded by step) ──────
   These are teaching exemplars written to demonstrate
   each step of the method, not real exam responses.    */
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
        text: "Priestley presents Gerald as a product of the upper class whose treatment of Eva exposes how the wealthy maintain control over the working class through financial power.",
        step: 1, label: "Point", colour: "teal",
      },
      {
        text: "This is clear when Gerald remarks, \"She lived very economically on what I allowed her.\"",
        step: 2, label: "Evidence 1", colour: "green",
      },
      {
        text: "The word \"allowed\" is telling — it's the language of permission, not partnership, implying that Eva's survival depended entirely on Gerald's goodwill rather than her own independence.",
        step: 3, label: "Analyse Language", colour: "purple",
      },
      {
        text: "This creates a sense of economic possession, which shows the audience how capitalism turns relationships into transactions; Eva isn't Gerald's equal — she's financially dependent on him, and he doesn't even seem to realise how demeaning that is.",
        step: 4, label: "Analysis 1", colour: "orange",
      },
      {
        text: "Moreover, the phrase \"I allowed her\" is significant because the possessive \"I\" centres Gerald as the one with power — Eva is reduced to the object of his generosity, not a person with her own agency.",
        step: 5, label: "Evidence 2", colour: "green",
      },
      {
        text: "By Priestley using this language of control, he reveals how Gerald views Eva not as an equal but as someone he has the right to provide for or withdraw from — a kind of casual ownership he doesn't question.",
        step: 6, label: "Deepen Analysis", colour: "purple",
      },
      {
        text: "This builds a picture of patronising superiority that isn't unique to Gerald — it represents how the upper class as a whole treat working people as dependants rather than equals, maintaining their social dominance through financial control.",
        step: 7, label: "Analysis 2", colour: "orange",
      },
      {
        text: "This reflects the rigid Edwardian class system, where the wealthy held enormous economic power over the working class. Writing in 1945, Priestley contrasts this with the post-war push for a fairer society, reinforcing his argument that these exploitative power dynamics need to be dismantled.",
        step: 8, label: "Context", colour: "blue",
      },
      {
        text: "Furthermore, Priestley uses the Well-Made Play structure to make Gerald's role in Eva's downfall feel like an inevitable chain of cause and effect — his language isn't just revealing character, it's driving the plot towards tragedy, which makes Priestley's social critique hit harder.",
        step: 9, label: "Structure / Form", colour: "amber",
      },
      {
        text: "Ultimately, Priestley uses Gerald's relationship with Eva as a political critique, exposing how capitalist exploitation damages real lives and urging the audience to choose collective responsibility over individual self-interest.",
        step: 10, label: "Writer's Purpose", colour: "red",
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
        text: "Shakespeare presents Beatrice as a woman who understands exactly how powerless she is in a patriarchal society, using her demand to \"Kill Claudio\" to expose how the honour system completely excludes women.",
        step: 1, label: "Point", colour: "teal",
      },
      {
        text: "This is clear when Beatrice demands of Benedick, \"Kill Claudio.\"",
        step: 2, label: "Evidence 1", colour: "green",
      },
      {
        text: "The two blunt monosyllables are shocking after Beatrice's usual wit — there's no wordplay, no cleverness, just a raw, unadorned command that strips her character back to pure emotional conviction.",
        step: 3, label: "Analyse Language", colour: "purple",
      },
      {
        text: "This creates a sense of desperate urgency that shows the audience just how deep her outrage runs at Hero's public shaming; Beatrice's intellectual armour has been completely abandoned, and what's left is genuine moral fury.",
        step: 4, label: "Analysis 1", colour: "orange",
      },
      {
        text: "Moreover, when Beatrice cries \"O that I were a man! I would eat his heart in the market-place,\" the violent imagery reveals the full extent of her frustration.",
        step: 5, label: "Evidence 2", colour: "green",
      },
      {
        text: "By Shakespeare using this hyperbolic metaphor of consuming Claudio's heart publicly, he pushes Beatrice's grief beyond anything that would be considered acceptable feminine speech — it becomes visceral, almost animalistic rage.",
        step: 6, label: "Deepen Analysis", colour: "purple",
      },
      {
        text: "This portrays a woman trapped between intellectual power and physical powerlessness, which amplifies one of the play's central tensions: the honour code is supposed to protect women like Hero, but only men are allowed to use it. Beatrice can see the injustice clearly, but she's structurally locked out of doing anything about it herself.",
        step: 7, label: "Analysis 2", colour: "orange",
      },
      {
        text: "This reflects Elizabethan society's rigid gender hierarchy, where a woman's honour was essentially her sexual purity and only men could defend it through duelling. Hero's public shaming would have been social destruction, yet women like Beatrice had no access to the system that could restore her reputation. This reinforces the systemic inequality at the heart of the play's conflict.",
        step: 8, label: "Context", colour: "blue",
      },
      {
        text: "Furthermore, Shakespeare places this demand at the exact moment Benedick declares his love, which creates a jarring collision between romance and violence — the audience is pulled out of comfortable comedy and forced to think about the kind of society that makes a woman's first request of her lover a demand for murder.",
        step: 9, label: "Structure / Form", colour: "amber",
      },
      {
        text: "Ultimately, Shakespeare uses this scene to critique a patriarchal honour code that demands women's virtue while giving them absolutely no power to defend it — exposing a system that claims to protect women but actually silences them.",
        step: 10, label: "Writer's Purpose", colour: "red",
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
        text: "Austen presents Elizabeth's journey towards self-knowledge as the novel's central argument, suggesting that even the most intelligent people are vulnerable to the distorting effects of their own prejudice.",
        step: 1, label: "Point", colour: "teal",
      },
      {
        text: "This is clear when Elizabeth reflects, \"Till this moment I never knew myself.\"",
        step: 2, label: "Evidence 1", colour: "green",
      },
      {
        text: "What's striking about this line is its simplicity — almost every word is a single syllable, which gives it a kind of blunt emotional weight. The elaborate wit that's defined Elizabeth throughout the novel is completely gone.",
        step: 3, label: "Analyse Language", colour: "purple",
      },
      {
        text: "This creates a moment of devastating clarity that exposes the gap between how Elizabeth sees herself — a rational, perceptive judge of character — and the reality of her own blind spots. Because of this, the reader is forced to look back at every confident judgement Elizabeth has made and question whether she was ever as right as she thought.",
        step: 4, label: "Analysis 1", colour: "orange",
      },
      {
        text: "Moreover, the verb \"knew\" connects to the broader question Austen is exploring throughout the novel — how can we truly know other people when we don't even know ourselves?",
        step: 5, label: "Evidence 2", colour: "green",
      },
      {
        text: "By Austen placing this short, understated confession immediately after Darcy's lengthy letter, she creates a deliberate structural contrast: pages and pages of evidence are condensed into just eight words of self-recognition.",
        step: 6, label: "Deepen Analysis", colour: "purple",
      },
      {
        text: "This portrays genuine intellectual humility, which gets at the novel's philosophical core — that the deepest truths often require the plainest language, and that real self-knowledge takes the courage to let go of assumptions you've built your identity around.",
        step: 7, label: "Analysis 2", colour: "orange",
      },
      {
        text: "This reflects the Enlightenment's emphasis on rational self-examination, but Austen subtly exposes its limits: Elizabeth, the novel's most perceptive character, has been blind to her own prejudice. In Regency society, where women were judged on appearance and propriety rather than intellect, Elizabeth's journey towards genuine self-awareness becomes a quietly radical act. This reinforces the moral importance of looking beyond first impressions.",
        step: 8, label: "Context", colour: "blue",
      },
      {
        text: "Furthermore, this moment works as the novel's turning point — everything before it is defined by misreading, and everything after by growing clarity. It mirrors the classical 'recognition scene' from tragedy, but Austen repurposes it within a comedy where self-knowledge leads to happiness rather than destruction.",
        step: 9, label: "Structure / Form", colour: "amber",
      },
      {
        text: "Ultimately, Austen uses Elizabeth's story as a cautionary tale about the dangers of letting prejudice disguise itself as good judgement, urging readers to pursue honest self-knowledge rather than settling for comfortable self-deception.",
        step: 10, label: "Writer's Purpose", colour: "red",
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
      "Analyses language and explains its effect",
      "Context is linked to the analysis",
      "Some attempt at a structural or form point",
      "Two evidence cycles but analysis could go deeper",
    ],
  },
  {
    grade: "Grade 9",
    colour: "green",
    traits: [
      "Sharp argument with writer's name and critical voice",
      "Two embedded quotes that build on each other",
      "Deep word-level analysis — explains What, How, and Why",
      "Context woven in — illuminates, doesn't decorate",
      "Structural/form analysis that links back to the question",
      "Ends by connecting to the writer's overall purpose",
    ],
  },
];
