// ─── AN INSPECTOR CALLS — Exam Preparation Kit ───

export interface TechniqueDissection {
  technique: string;
  termUsed: string;
  quote: string;
  ao: "AO1" | "AO2" | "AO3";
  whyItScores: string;
}

export interface ExaminerComment {
  paragraph: number;
  label: string;
  whatExaminerSees: string;
  aoCoverage: ("AO1" | "AO2" | "AO3")[];
  gradeJustification: string;
}

export interface ExampleEssay {
  question: string;
  extract?: string;
  extractAct?: string;
  grade: string;
  essay: string;
  annotations: { phrase: string; note: string; colour: string }[];
  techniqueDissections: TechniqueDissection[];
  examinerCommentary: ExaminerComment[];
  overallVerdict: string;
}

export interface ExtractAnnotation {
  phrase: string;
  note: string;
  colour: string;
  side: "left" | "right";
}

export interface AnnotatedExtract {
  title: string;
  act: string;
  context: string;
  extract: string;
  annotations: ExtractAnnotation[];
  overallAnalysis: string[];
}

export interface EssayPlan {
  question: string;
  lineOfArgument: string;
  intro: string;
  parts: { label: string; point: string; quote: string; analysis: string }[];
  conclusion: string;
}

export interface ExamPrepQuestion {
  extract: string;
  extractAct: string;
  question: string;
  theme: string;
}

// ═══════════════════════════════════════════════════
//  EXAMPLE ESSAYS — Grade 9 exemplars written to
//  demonstrate the method (not real exam responses)
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_ESSAYS: ExampleEssay[] = [
  {
    question:
      "How does Priestley present the theme of social responsibility in An Inspector Calls?",
    grade: "Grade 9 (exemplar)",
    essay: `Priestley uses 'An Inspector Calls' to argue that social responsibility isn't something people can opt out of — it's the basic requirement for a fair society. Writing in 1945, just as Britain was deciding whether to build a welfare state, he sets the play in 1912 to show his audience exactly what happens when people refuse to take responsibility for each other.

The first thing Priestley does is demolish the alternative. Mr Birling's speech — "a man has to mind his own business and look after himself and his own" — is presented as the voice of confident capitalism, but Priestley has already destroyed his credibility through the dramatic irony of the Titanic prediction. The repetition of "his own" draws a tight circle around Birling's worldview: responsibility starts and ends with himself. What makes this so effective is the positioning — Priestley places this speech right before the Inspector arrives, so everything Birling says about self-reliance is immediately challenged. The audience, knowing the Titanic sank, already distrusts him, which means they're primed to reject his entire philosophy before the Inspector even opens his mouth.

The Inspector, by contrast, speaks for Priestley himself. His final speech — "We are members of one body. We are responsible for each other" — is the moral heart of the play. The repeated "We are" at the start of each sentence is deliberate: it's inclusive, almost aggressive in how it refuses to let anyone opt out. The metaphor "one body" is interesting because it echoes the Christian idea of the Body of Christ, which gives the Inspector's socialist message a kind of religious weight. These aren't suggestions — they're delivered as facts, as moral truths. Priestley essentially breaks the illusion of the play here; the Inspector stops being a character and becomes a direct address to the audience. It's more like a political speech than a line of dialogue.

Where the play gets really clever, though, is in the generational divide. Sheila's response to learning about Eva — "But these girls aren't cheap labour — they're people" — is so simple it's almost shocking. The contrast between "cheap labour" and "people" forces you to see how capitalism strips away humanity by turning workers into numbers. Sheila doesn't need fancy language to make her point, and I think that's deliberate — Priestley is showing that the truth is actually straightforward; it's injustice that needs complicated excuses. By Act 3, Sheila has completely turned on her parents: "I'm ashamed of you as well — yes both of you." A child judging her parents, reversing the usual family hierarchy — this is Priestley arguing that moral authority has to be earned through conscience, not just handed down through age or class. For the 1945 audience who were about to vote, Sheila is the model of what Priestley wanted them to become.

But Priestley doesn't let the audience feel comfortable, because the older generation refuses to change. When Birling realises the Inspector might be fake, his immediate reaction — "The whole thing's different now" — is chilling. He hasn't learned anything; the moment there are no social consequences, the moral lesson vanishes. Priestley is making the point that some people only care about reputation, not about actually being good. The phone call at the end, announcing a real inspector, stops the play from having a neat resolution. The audience can't relax — the question is still open.

Ultimately, the Inspector's warning — "if men will not learn that lesson, then they will be taught it in fire and blood and anguish" — connects the 1912 setting directly to the 1945 audience. The three-part build-up ("fire... blood... anguish") gets progressively worse, and of course the 1945 audience knows this actually happened — two World Wars proved the Inspector right. Priestley's message couldn't be clearer: you can learn this lesson voluntarily, like Sheila, or you can wait for catastrophe to teach it for you. The choice is the audience's.`,
    annotations: [
      { phrase: "a man has to mind his own business", note: "Key Birling quote — individualism exposed", colour: "red" },
      { phrase: "We are members of one body", note: "Inspector's central thesis — collectivism", colour: "green" },
      { phrase: "But these girls aren't cheap labour", note: "Sheila's awakening — dehumanisation exposed", colour: "blue" },
      { phrase: "fire and blood and anguish", note: "Prophetic tricolon — dramatic irony for 1945 audience", colour: "purple" },
    ],
    techniqueDissections: [
      {
        technique: "Repetition",
        termUsed: '"The repetition of \u201chis own\u201d draws a tight circle around Birling\u2019s worldview"',
        quote: '"a man has to mind his own business and look after himself and his own"',
        ao: "AO2",
        whyItScores: "The student doesn't just spot repetition — they explain its conceptual effect with a vivid metaphor ('draws a tight circle'). This shows genuine analytical thinking: linking a micro language feature to an ideological meaning, not just naming a technique and moving on.",
      },
      {
        technique: "Dramatic Irony",
        termUsed: '"Priestley has already destroyed his credibility through the dramatic irony of the Titanic prediction"',
        quote: '"unsinkable, absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "The student explains how dramatic irony functions structurally — it doesn't just make Birling wrong about one thing; it causes the audience to distrust 'his entire philosophy'. This shows understanding of cumulative dramatic effect across the whole play, not just one moment.",
      },
      {
        technique: "Repetition / Inclusive Pronoun",
        termUsed: '"The repeated \u201cWe are\u201d at the start of each sentence is deliberate: it\u2019s inclusive, almost aggressive"',
        quote: '"We are members of one body. We are responsible for each other"',
        ao: "AO2",
        whyItScores: "The student identifies the technique through description rather than naming it 'anaphora' — but the analysis is sharp. Calling the repetition 'almost aggressive in how it refuses to let anyone opt out' shows genuine engagement with how language works on an audience. Not every Grade 9 response needs formal terminology; what matters is the quality of the insight.",
      },
      {
        technique: "Metaphor",
        termUsed: '"The metaphor \u201cone body\u201d is interesting because it echoes the Christian idea of the Body of Christ"',
        quote: '"We are members of one body"',
        ao: "AO2",
        whyItScores: "Linking the metaphor to a religious intertext (Body of Christ) elevates the analysis from technique identification to conceptual exploration — a key Grade 9 skill. The natural phrasing ('is interesting because') shows the student is genuinely thinking, not filling in a formula.",
      },
      {
        technique: "Breaking Dramatic Convention",
        termUsed: '"the Inspector stops being a character and becomes a direct address to the audience. It\u2019s more like a political speech than a line of dialogue"',
        quote: '"We are responsible for each other"',
        ao: "AO2",
        whyItScores: "The student recognises that Priestley breaks the naturalistic frame — this is analysis of dramatic form, not just language. The comparison to 'a political speech' is vivid and accurate. Examiners reward awareness of how playwrights use form (not just words) to shape audience response.",
      },
      {
        technique: "Contrast / Antithesis",
        termUsed: '"The contrast between \u201ccheap labour\u201d and \u201cpeople\u201d forces you to see how capitalism strips away humanity"',
        quote: '"But these girls aren\'t cheap labour \u2014 they\'re people"',
        ao: "AO2",
        whyItScores: "The student identifies the structural opposition without using the formal term 'antithesis', but the analysis is stronger for it — they explain what the contrast DOES to the audience ('forces you to see'). The follow-up insight that 'the truth is actually straightforward; it's injustice that needs complicated excuses' is genuinely original thinking.",
      },
      {
        technique: "Role Reversal (Structural)",
        termUsed: '"A child judging her parents, reversing the usual family hierarchy"',
        quote: '"I\'m ashamed of you as well \u2014 yes both of you"',
        ao: "AO2",
        whyItScores: "This is structural analysis: the student identifies a power shift within the play's relationships and connects it to the thematic argument. The conceptual point — 'moral authority has to be earned through conscience, not just handed down through age or class' — goes beyond the text to make an argument about society itself.",
      },
      {
        technique: "Tricolon",
        termUsed: '"The three-part build-up (\u201cfire... blood... anguish\u201d) gets progressively worse"',
        quote: '"fire and blood and anguish"',
        ao: "AO2",
        whyItScores: "The student identifies the escalating pattern and describes it naturally as a 'three-part build-up'. Linking it to dramatic irony — 'the 1945 audience knows this actually happened' — shows simultaneous AO2 + AO3 integration, which is a Grade 9 hallmark.",
      },
      {
        technique: "Contextual Framing (1912/1945)",
        termUsed: '"Writing in 1945, just as Britain was deciding whether to build a welfare state"',
        quote: "N/A \u2014 contextual framing",
        ao: "AO3",
        whyItScores: "The student doesn't treat context as a separate bolt-on — it's woven into the opening argument. The 1912/1945 dual time frame is used to explain why Priestley wrote the play, not just when. This is AO3 done properly: context shapes interpretation and authorial purpose.",
      },
      {
        technique: "Cyclical Structure",
        termUsed: '"The phone call at the end, announcing a real inspector, stops the play from having a neat resolution"',
        quote: "structural analysis of the ending",
        ao: "AO2",
        whyItScores: "Discussing the play's overall structure shows awareness of form beyond sentence-level language. The student explains the effect on the audience — 'The audience can't relax' — in natural, vivid terms. This is sophisticated AO2: structure as a tool of persuasion.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "Clear thesis that directly addresses the question. The 1945 context is established immediately and the play is framed as a deliberate argument. The natural phrasing ('isn't something people can opt out of') shows a confident student voice rather than a rehearsed formula.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "Top-band introductions argue, not describe. This one takes a clear position ('the basic requirement for a fair society') that the rest of the essay will prove. The AO3 is integrated into the thesis — not separated into its own paragraph — which is a Grade 9 marker.",
      },
      {
        paragraph: 2,
        label: "Mr Birling \u2014 Capitalist Individualism",
        whatExaminerSees: "Two quotes analysed with genuine insight. Repetition of 'his own' explained conceptually. Dramatic irony connected to structural positioning. Natural, engaged tone: 'What makes this so effective' shows the student is thinking, not reciting.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The student explains WHY Priestley places the speech where he does — this structural awareness ('right before the Inspector arrives') pushes AO2 to the top band. The engaged voice throughout demonstrates a personal, original response rather than a template.",
      },
      {
        paragraph: 3,
        label: "The Inspector \u2014 Collectivism",
        whatExaminerSees: "Dense analysis of the Inspector's speech: repeated 'We are' identified, metaphor linked to Body of Christ, dramatic convention broken. Multiple AO2 points connected to AO3 purpose. The student's own voice is clearly audible.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "Calling the repeated 'We are' 'almost aggressive' is fresh, original language that shows genuine analytical thinking. The observation that the speech is 'more like a political speech than a line of dialogue' demonstrates awareness of dramatic form. This is what examiners describe as a 'conceptualised response' \u2014 the student sees the play as a constructed argument.",
      },
      {
        paragraph: 4,
        label: "Sheila \u2014 Generational Hope",
        whatExaminerSees: "Contrast identified and explained. Two quotes from different acts track Sheila's development across the play (whole-text awareness). Role reversal analysed structurally. Natural voice \u2014 'Where the play gets really clever' and 'I think that's deliberate' \u2014 shows personal engagement.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conceptual insight \u2014 'the truth is actually straightforward; it's injustice that needs complicated excuses' \u2014 is the kind of original thinking that defines Grade 9. The student's use of 'I think' shows they're genuinely reasoning, not reciting. Tracking Sheila from Act 1 to Act 3 demonstrates whole-text understanding.",
      },
      {
        paragraph: 5,
        label: "Older Generation \u2014 Refusal to Change",
        whatExaminerSees: "Birling's inability to change analysed clearly. Cyclical structure identified and its effect on the audience explained. The student makes evaluative judgements ('chilling') while maintaining analytical rigour.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The observation that 'some people only care about reputation, not about actually being good' is a clear, confident moral judgement. The analysis of the cyclical ending \u2014 'The audience can't relax' \u2014 shows awareness of how dramatic structure shapes audience response.",
      },
      {
        paragraph: 6,
        label: "Conclusion",
        whatExaminerSees: "Returns to the argument with new force. Tricolon analysed. Dramatic irony linked to 1945 audience. Final sentence poses a choice that mirrors Priestley's own rhetorical strategy.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion escalates rather than summarising. The final sentence \u2014 'you can learn this lesson voluntarily, like Sheila, or you can wait for catastrophe to teach it for you' \u2014 directly addresses the reader with the same moral urgency as Priestley himself. This assured, direct voice is what separates Grade 9 from Grade 8.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it treats the play as a constructed argument, not just a story. Every paragraph analyses what Priestley is doing and why, while maintaining a clear line of reasoning. Techniques are identified \u2014 sometimes by name, sometimes through description \u2014 but always explained in terms of their effect on the audience. Context is woven into the argument, not separated out. The student's own voice is clearly audible throughout, with genuine engagement and original insight rather than formulaic analysis.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
  {
    question:
      "How does Priestley present the character of Mr Birling in An Inspector Calls?",
    grade: "Grade 9 (exemplar)",
    essay: `Priestley presents Mr Birling as a man whose authority is entirely constructed \u2014 and then spends the whole play taking it apart. Birling represents everything Priestley opposes: capitalism, self-interest, and a stubborn refusal to accept responsibility for anyone beyond his own family.

From the very first scene, Priestley makes sure we don't trust Birling. The Titanic speech \u2014 "unsinkable, absolutely unsinkable" \u2014 is the most obvious example of dramatic irony in the play, but what's clever about it is the word "absolutely." It's an intensifier that's supposed to make Birling sound certain, but for the 1945 audience it does the opposite \u2014 it makes him sound ridiculous. The more confident he is, the more wrong we know he is. Priestley does this on purpose: if the audience loses faith in Birling's predictions, they'll question everything else he says too. His entire worldview gets undermined before the Inspector even arrives.

That worldview is spelled out clearly in his philosophy speech: "a man has to mind his own business and look after himself and his own." The possessive pronoun "his own" gets repeated in a way that makes Birling's world feel very small \u2014 it's just him, his family, his business. Nobody else matters. Priestley puts this speech right before the doorbell rings, which is a structural choice that matters: Birling's individualism is literally interrupted by the arrival of social conscience. His capitalist philosophy never even gets to finish its sentence. And when we learn what Birling actually did to Eva \u2014 sacking her for asking for a decent wage \u2014 his philosophy stops being abstract. It has a body count.

Priestley also attacks Birling's status as fake. There's a telling moment when Mrs Birling mentions he "was Lord Mayor only two years ago," but Birling himself has just dismissed community as "nonsense." If he genuinely thought community was nonsense, why did he want to be Lord Mayor? The answer is obvious: it was about status, not service. Similarly, his fussing over the port \u2014 "you ought to like this port... it's exactly the same port your father gets" \u2014 shows a man desperately trying to prove he belongs in Gerald's social class. The stage directions describe him as "provincial in his speech," and Priestley uses this detail to show that Birling's entire social identity is a performance. He's pretending to be something he's not.

The most damning thing about Birling, though, is his complete inability to learn. When the Inspector turns out to be potentially fake, Birling's relief is instant: "The whole thing's different now." For him, morality is only relevant if there are consequences. No exposure means no guilt. His attempt to reassert control over his children \u2014 "Come, come, you can see that, can't you?" \u2014 is patronising but also desperate. He needs them to agree with him because their moral awakening threatens his authority. Eric's accusation \u2014 "You're not the kind of father a chap could go to when he's in trouble" \u2014 cuts to the heart of it: Birling has given his family money and status but no moral compass. He's failed as a father in the way that actually matters.

Priestley doesn't just want us to see Birling as one bad man, though. He's supposed to represent a whole class \u2014 the Edwardian industrialists whose arrogance and selfishness led to the disasters of the twentieth century. The cyclical ending, with another inspector on the way, suggests that history will keep testing people like Birling until they either change or get left behind. For the 1945 audience, Birling is a warning from the past: this is what the old Britain looked like, and we cannot let it come back.`,
    annotations: [
      { phrase: "unsinkable, absolutely unsinkable", note: "Dramatic irony \u2014 Titanic discredits Birling's authority", colour: "red" },
      { phrase: "provincial in his speech", note: "Stage direction \u2014 performing a class he wasn't born into", colour: "orange" },
      { phrase: "The whole thing's different now", note: "Birling learns nothing \u2014 reputation over redemption", colour: "purple" },
      { phrase: "You're not the kind of father", note: "Eric's accusation \u2014 patriarchal failure exposed", colour: "blue" },
    ],
    techniqueDissections: [
      {
        technique: "Dramatic Irony",
        termUsed: '"the most obvious example of dramatic irony in the play"',
        quote: '"unsinkable, absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "The student names dramatic irony confidently and then makes a sharp analytical move: 'The more confident he is, the more wrong we know he is.' This paradox shows genuine critical thinking expressed in the student's own voice, not a memorised response.",
      },
      {
        technique: "Intensifier (Word-Level Analysis)",
        termUsed: '"It\u2019s an intensifier that\u2019s supposed to make Birling sound certain, but for the 1945 audience it does the opposite"',
        quote: '"absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "Zooming into a single word ('absolutely') and explaining how it backfires shows micro-level analysis. The student spots a paradox \u2014 an intensifier that undermines rather than strengthens \u2014 which is the kind of original observation that examiners reward at the top band.",
      },
      {
        technique: "Repetition",
        termUsed: '"The possessive pronoun \u201chis own\u201d gets repeated in a way that makes Birling\u2019s world feel very small"',
        quote: '"look after himself and his own"',
        ao: "AO2",
        whyItScores: "The student links repetition to its emotional and ideological effect \u2014 the repeated words make Birling's world 'feel very small'. The natural phrasing is more vivid than a formulaic 'creates a sense of', showing the student is writing in their own voice.",
      },
      {
        technique: "Structural Positioning",
        termUsed: '"Priestley puts this speech right before the doorbell rings, which is a structural choice that matters"',
        quote: "structural analysis \u2014 placement of Birling's speech",
        ao: "AO2",
        whyItScores: "The student explicitly names this as a 'structural choice' and explains why it matters. The vivid phrasing \u2014 'Birling's individualism is literally interrupted by the arrival of social conscience' and 'It has a body count' \u2014 shows the student reading structure as meaning, with genuine impact.",
      },
      {
        technique: "Stage Directions",
        termUsed: '"The stage directions describe him as \u201cprovincial in his speech\u201d"',
        quote: '"provincial in his speech"',
        ao: "AO2",
        whyItScores: "Analysing stage directions (not just dialogue) demonstrates awareness of dramatic form. The student's conclusion \u2014 'Birling's entire social identity is a performance' \u2014 connects a production detail to a character argument. This is AO2 at its best: form revealing character.",
      },
      {
        technique: "Hypocrisy / Contradiction",
        termUsed: '"If he genuinely thought community was nonsense, why did he want to be Lord Mayor?"',
        quote: '"was Lord Mayor" vs. community as "nonsense"',
        ao: "AO1",
        whyItScores: "The student uses a rhetorical question to expose a contradiction in Birling's character. This is critical analysis at its sharpest \u2014 using the text against itself to build an argument. The conversational directness makes it more convincing, not less.",
      },
      {
        technique: "Social Performance / Artifice",
        termUsed: '"his fussing over the port shows a man desperately trying to prove he belongs in Gerald\u2019s social class"',
        quote: '"you ought to like this port... it\'s exactly the same port your father gets"',
        ao: "AO3",
        whyItScores: "The student reads the port scene as social performance, connecting it to Birling's class insecurity. This is AO3 integrated naturally into character analysis \u2014 understanding how Edwardian class anxiety drives behaviour. Context is used to explain the character, not added as a separate paragraph.",
      },
      {
        technique: "Patronising Tone / Power Dynamics",
        termUsed: '"His attempt to reassert control is patronising but also desperate"',
        quote: '"Come, come, you can see that, can\'t you?"',
        ao: "AO2",
        whyItScores: "The student identifies tone as a technique \u2014 not just what Birling says but how he says it. The double characterisation ('patronising but also desperate') shows nuanced reading. Birling's speech is read as a power move, not just a statement, which is evaluative writing at the top band.",
      },
      {
        technique: "Representative Character / Typicality",
        termUsed: '"He\u2019s supposed to represent a whole class \u2014 the Edwardian industrialists"',
        quote: "conceptual argument about Birling's function",
        ao: "AO3",
        whyItScores: "Seeing the character as representative of a class and historical moment is the hallmark of a Grade 9 response. The student reads Birling as Priestley's political argument made flesh \u2014 not merely one flawed individual but a symbol of an entire ideology.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "The thesis uses a strong image: Birling's authority is 'entirely constructed' and Priestley 'spends the whole play taking it apart'. This tells the examiner the essay will track a deliberate dramatic pattern, not just describe a character.",
        aoCoverage: ["AO1"],
        gradeJustification: "Top-band AO1 requires a 'critical, exploratory, conceptualised response'. This introduction frames Birling not as a person but as a construct \u2014 something Priestley built to demolish. The confident, direct voice signals an assured writer.",
      },
      {
        paragraph: 2,
        label: "Titanic \u2014 False Authority",
        whatExaminerSees: "Dramatic irony named and explained as a structural device with cumulative effect. The intensifier 'absolutely' is analysed at word level. The student's own phrasing \u2014 'The more confident he is, the more wrong we know he is' \u2014 is sharp and memorable.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The paradox about confidence and wrongness is genuinely original critical thinking \u2014 not a learned formula. The student explains how one device shapes the audience's response for the entire play, not just one scene. This is top-band AO2.",
      },
      {
        paragraph: 3,
        label: "Ideological Position \u2014 'His Own'",
        whatExaminerSees: "Repetition linked to ideology. Structural positioning explained clearly. The student then makes a powerful leap from language to consequence: 'His capitalist philosophy never even gets to finish its sentence' and 'It has a body count.'",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Moving from technique to real-world consequence is what separates Grade 9 from Grade 7/8. The punchy final sentences show a student writing with control and impact. The structural observation \u2014 the doorbell interrupts the philosophy \u2014 demonstrates genuine awareness of how the play is built.",
      },
      {
        paragraph: 4,
        label: "Public vs Private \u2014 Class Performance",
        whatExaminerSees: "Three pieces of evidence (Lord Mayor, the port, stage directions) woven into one argument about artifice. The rhetorical question is used effectively as an analytical tool. Stage directions are analysed alongside dialogue.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The rhetorical question \u2014 'If he genuinely thought community was nonsense, why did he want to be Lord Mayor?' \u2014 is a sharp critical move that uses the text against itself. The analysis of stage directions shows awareness of dramatic form beyond dialogue. This paragraph demonstrates whole-text knowledge by drawing evidence from multiple moments.",
      },
      {
        paragraph: 5,
        label: "Incapable of Moral Growth",
        whatExaminerSees: "Eric's words used as evidence against Birling \u2014 another character's perspective illuminates the subject. The student connects parental failure to moral failure. The phrase 'money and status but no moral compass' is precise and balanced.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Using another character's words to analyse the subject shows sophisticated evidence handling. The student doesn't just describe Birling's stagnation \u2014 they diagnose it: he prioritises 'obedience' over 'truth'. The natural voice ('the most damning thing', 'cuts to the heart of it') shows genuine engagement.",
      },
      {
        paragraph: 6,
        label: "Conclusion",
        whatExaminerSees: "Birling elevated from individual to representative figure. Cyclical structure connected to the 1945 audience's political context. Final sentence directly addresses what Birling means for the audience.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion widens from character to class to history. The final phrase \u2014 'this is what the old Britain looked like, and we cannot let it come back' \u2014 has genuine rhetorical force and mirrors Priestley's own urgency. This is the kind of ambitious, outward-looking conclusion that defines Grade 9.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because the student never treats Birling as just a character \u2014 he is consistently analysed as a dramatic construct and a political symbol. Evidence is drawn from across the play (dialogue, stage directions, other characters' words), and every technique is linked to Priestley's purpose. The writing has genuine personality \u2014 sharp, direct phrasing ('It has a body count', 'his entire social identity is a performance') that demonstrates an original critical voice rather than memorised formulas.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
  {
    question:
      "How does Priestley use the character of Sheila to present ideas about change in An Inspector Calls?",
    grade: "Grade 9 (exemplar)",
    essay: `Sheila Birling goes through the biggest transformation in the entire play. Priestley uses her journey \u2014 from a sheltered, naive young woman to someone who stands up to her own parents \u2014 as a blueprint for the kind of change he believed Britain needed after the war.

At the beginning, Sheila is exactly what you'd expect from an upper-class Edwardian daughter. The stage directions describe her as "very pleased with life and rather excited" \u2014 she's happy, comfortable, and completely unaware of how her family's wealth was built on other people's suffering. Her engagement to Gerald is presented less as a love story and more as a business deal; Birling is clearly more excited about merging with Croft's Limited than about his daughter's happiness. Priestley sets Sheila up inside a world where everything \u2014 even love \u2014 has a price tag, and where people are measured by what they're worth financially rather than who they are.

But Sheila is different from her parents, and Priestley shows us this almost immediately. When she finds out what her father did to Eva, her response is striking: "But these girls aren't cheap labour \u2014 they're people." The contrast between "cheap labour" and "people" is sharp and deliberate \u2014 it forces the audience to recognise how capitalism turns human beings into categories. What I find powerful about this line is its simplicity. Sheila doesn't use complicated language or try to sound clever. She just states something obvious, and the fact that it needs to be said at all is Priestley's real point: the Birlings have been so embedded in their class privilege that basic human decency has become a radical statement. The dash in the middle almost feels like a pause where the audience has to choose which side they're on.

Priestley doesn't let Sheila off the hook, though. She did something awful to Eva too \u2014 getting her sacked from Milwards out of jealousy \u2014 and she owns it: "I know I'm to blame \u2014 and I'm desperately sorry." What separates Sheila from her parents is that word "desperately." It's not polite regret or damage control; it's genuine anguish. Compare this to her parents later, who only care about whether there'll be a public scandal. Sheila's guilt is real, and Priestley uses this to make an argument: admitting you've done something wrong isn't weakness. It's actually the first step towards being a better person.

By the final act, Sheila has effectively become the Inspector's replacement. Her confrontation with her parents \u2014 "I'm ashamed of you as well \u2014 yes both of you" \u2014 is one of the most powerful moments in the play because it completely reverses the family hierarchy. A young woman is judging her own parents, and she has the moral authority to do it because she actually listened to the Inspector while they refused to. When she accuses them of "pretending everything's just as it was before," that word "pretending" is devastating \u2014 it strips away their denial and exposes it for what it is: a choice to remain ignorant. Sheila can't go back to the "pink and intimate" lighting of Act 1. She's seen what's really going on, and she can't unsee it.

What makes Sheila such an important character is that Priestley wrote the play in 1945, when Britain was literally choosing its future in a general election. Sheila is his answer to the question "can people actually change?" \u2014 and the answer is yes, but only if they're willing to feel uncomfortable. Her journey from privilege to conscience is exactly the journey Priestley wanted his audience to make. The fact that the play ends with another Inspector arriving suggests that this test keeps coming back. The real question isn't whether Sheila will pass it again \u2014 we know she will. The question is whether the audience will follow her lead, or whether they'll retreat into the Birlings' comfortable denial.`,
    annotations: [
      { phrase: "very pleased with life", note: "Stage direction \u2014 initial naivety and privilege", colour: "orange" },
      { phrase: "cheap labour \u2014 they're people", note: "Contrast \u2014 awakening begins with recognising humanity", colour: "green" },
      { phrase: "I know I'm to blame \u2014 and I'm desperately sorry", note: "Genuine remorse vs performative regret", colour: "blue" },
      { phrase: "I'm ashamed of you as well", note: "Role reversal \u2014 child gains moral authority over parents", colour: "purple" },
    ],
    techniqueDissections: [
      {
        technique: "Stage Directions",
        termUsed: '"The stage directions describe her as \u201cvery pleased with life and rather excited\u201d"',
        quote: '"very pleased with life and rather excited"',
        ao: "AO2",
        whyItScores: "Analysing stage directions (not just dialogue) demonstrates awareness of dramatic form. The student uses them to establish Sheila's starting point \u2014 her privilege and naivety \u2014 so her later transformation has a clear baseline to measure against. This is smart structural thinking.",
      },
      {
        technique: "Economic Framing / Subtext",
        termUsed: '"Her engagement to Gerald is presented less as a love story and more as a business deal"',
        quote: "engagement scene analysis",
        ao: "AO1",
        whyItScores: "The student reads beneath the surface. Instead of taking the engagement at face value, they identify the economic subtext \u2014 Birling cares more about the business merger than his daughter's happiness. This inferential reading, seeing what's NOT explicitly stated, is what examiners reward at the top band.",
      },
      {
        technique: "Contrast / Antithesis",
        termUsed: '"The contrast between \u201ccheap labour\u201d and \u201cpeople\u201d is sharp and deliberate"',
        quote: '"But these girls aren\'t cheap labour \u2014 they\'re people"',
        ao: "AO2",
        whyItScores: "The student identifies the structural opposition and then makes a genuine analytical leap: 'the fact that it needs to be said at all is Priestley's real point'. This insight \u2014 that basic decency has become radical \u2014 is the kind of original thinking that comes from real engagement with the text, not formula-following.",
      },
      {
        technique: "Simplicity as Technique",
        termUsed: '"Sheila doesn\u2019t use complicated language or try to sound clever. She just states something obvious"',
        quote: '"But these girls aren\'t cheap labour \u2014 they\'re people"',
        ao: "AO2",
        whyItScores: "This is a sophisticated observation: the student analyses the ABSENCE of elaborate technique as itself a meaningful choice by Priestley. Arguing that 'basic human decency has become a radical statement' is a genuinely original conceptual point that goes beyond standard technique-spotting.",
      },
      {
        technique: "Adverb Analysis (Word-Level)",
        termUsed: '"What separates Sheila from her parents is that word \u201cdesperately\u201d"',
        quote: '"I know I\'m to blame \u2014 and I\'m desperately sorry"',
        ao: "AO2",
        whyItScores: "Isolating a single adverb and explaining its function shows precise language analysis. The comparative move \u2014 contrasting Sheila's genuine anguish with her parents' concern about scandal \u2014 demonstrates evaluative skills across the whole text, which is a key Grade 9 skill.",
      },
      {
        technique: "Role Reversal (Structural)",
        termUsed: '"it completely reverses the family hierarchy"',
        quote: '"I\'m ashamed of you as well \u2014 yes both of you"',
        ao: "AO2",
        whyItScores: "The student identifies a structural power shift and connects it to the thematic argument about moral authority. The natural enthusiasm \u2014 'one of the most powerful moments in the play' \u2014 shows genuine engagement. The student explains WHY Sheila has this authority: 'because she actually listened.'",
      },
      {
        technique: "Diction / Word Choice",
        termUsed: '"that word \u201cpretending\u201d is devastating \u2014 it strips away their denial"',
        quote: '"pretending everything\'s just as it was before"',
        ao: "AO2",
        whyItScores: "Single-word analysis linked to the older generation's entire worldview. The student uses strong, vivid language ('devastating', 'strips away') that shows emotional as well as intellectual engagement with the text. This is how Grade 9 students use evidence: one word illuminates a whole theme.",
      },
      {
        technique: "Light Symbolism / Stage Directions",
        termUsed: '"Sheila can\u2019t go back to the \u201cpink and intimate\u201d lighting of Act 1"',
        quote: '"pink and intimate" (opening stage directions)',
        ao: "AO2",
        whyItScores: "Connecting Sheila's moral journey to the play's lighting symbolism from the opening stage directions demonstrates whole-text understanding. Drawing links between a character's arc in Act 3 and a stage direction from Act 1 is a key Grade 9 skill \u2014 it shows the student reads the play as a coherent structure.",
      },
      {
        technique: "Priestley's Purpose / Audience",
        termUsed: '"Sheila is his answer to the question \u201ccan people actually change?\u201d"',
        quote: "contextual framing of Sheila's role",
        ao: "AO3",
        whyItScores: "The student frames Sheila's entire function as Priestley's answer to a political question. This is AO3 at its best: context explains authorial purpose, not just historical setting. The natural, direct phrasing makes the argument genuinely compelling.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "Thesis names the transformation clearly and connects it to Priestley's post-war political purpose. The phrase 'a blueprint for the kind of change he believed Britain needed' signals a conceptualised response from the outset.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "The introduction doesn't describe Sheila \u2014 it makes an argument about why Priestley created her. This immediately signals to the examiner that the student sees characters as dramatic constructs with a political purpose, not just people in a story.",
      },
      {
        paragraph: 2,
        label: "Starting Point \u2014 Privilege and Naivety",
        whatExaminerSees: "Stage directions analysed. The engagement is read as an economic transaction (identifying subtext). The student connects Sheila's world to the broader system that destroys Eva.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Establishing a baseline is essential for character-change essays. The student doesn't just say Sheila was 'happy' \u2014 they explain the system that produced her happiness and its human cost. This shows structural thinking about character function within the play.",
      },
      {
        paragraph: 3,
        label: "Moral Awakening \u2014 'Cheap Labour'",
        whatExaminerSees: "Contrast identified and explained. The argument about simplicity is original: 'basic human decency has become a radical statement'. Natural voice \u2014 'What I find powerful about this line' \u2014 shows personal engagement rather than formula.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The conceptual insight about simplicity is the kind of original thinking that defines Grade 9. The student's use of 'What I find powerful' demonstrates genuine personal response \u2014 this is their own interpretation, not a rehearsed answer. The observation about the dash as a moral 'pause' shows micro-level awareness of punctuation effects.",
      },
      {
        paragraph: 4,
        label: "Guilt and Genuine Remorse",
        whatExaminerSees: "The student acknowledges Sheila's guilt (balanced, not one-sided analysis). A single adverb ('desperately') is isolated and explained. Comparative judgement: her genuine remorse vs her parents' performative concern about scandal.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Balanced character analysis \u2014 acknowledging flaws while tracking growth \u2014 shows critical maturity. The argument that 'admitting you've done something wrong isn't weakness' is the student's own moral reasoning, which examiners reward as evidence of personal engagement beyond the mark scheme.",
      },
      {
        paragraph: 5,
        label: "Moral Authority \u2014 Act 3",
        whatExaminerSees: "Role reversal identified. 'Pretending' isolated and given thematic weight. Connection to 'pink and intimate' lighting from Act 1 demonstrates whole-text awareness. The student writes with genuine conviction.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Linking Sheila's Act 3 moral stance to the Act 1 stage directions is exactly the kind of cross-text connection that earns top marks. The student shows the entire play is a coherent structure, not a series of isolated moments. The phrase 'She can't unsee it' captures Sheila's transformation in visceral, original language.",
      },
      {
        paragraph: 6,
        label: "Conclusion \u2014 Priestley's Strategic Purpose",
        whatExaminerSees: "Sheila explicitly connected to Priestley's 1945 political purpose. The cyclical ending is invoked. The final sentence distinguishes between Sheila's certainty and the audience's open choice.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion elevates character analysis into political argument. The final distinction \u2014 'The real question isn't whether Sheila will pass it again \u2014 we know she will. The question is whether the audience will follow her lead' \u2014 is confident, original, and mirrors Priestley's own rhetorical strategy.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it tracks Sheila's transformation with precision, using evidence from across the entire play (stage directions from Act 1, dialogue from Acts 1\u20133, structural analysis of the ending). The student consistently asks 'why did Priestley do this?' rather than just 'what does this mean?', which is the key distinction between Grade 8 and Grade 9. The personal voice \u2014 'What I find powerful', genuine moral reasoning about guilt and growth \u2014 shows a student thinking for themselves, not reproducing a template. Context is integrated naturally, not bolted on.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
];

// ═══════════════════════════════════════════════════
//  ANNOTATED EXTRACTS
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_EXTRACTS: AnnotatedExtract[] = [
  {
    title: "The Inspector's Final Speech",
    act: "Act 3",
    context:
      "The Inspector is about to leave the Birling household after revealing how each family member contributed to Eva Smith's death. He delivers his final speech directly to the family — and, symbolically, to the audience.",
    extract: `But just remember this. One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering and chance of happiness, all intertwined with our lives, and what we think and say and do. We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish. Good night.`,
    annotations: [
      { phrase: "millions and millions and millions", note: "Tripling / hyperbole — emphasises the vast scale of suffering caused by inequality. The repetition forces the audience to confront the systemic nature of the problem.", colour: "red", side: "left" as const },
      { phrase: "their lives, their hopes and fears, their suffering and chance of happiness", note: "List — humanises the working class by giving them emotions and aspirations. Counteracts the Birlings' tendency to view workers as statistics.", colour: "green", side: "right" as const },
      { phrase: "intertwined with our lives", note: "Organic metaphor — society is a connected web, not isolated individuals. Directly opposes Birling's individualist philosophy.", colour: "blue", side: "left" as const },
      { phrase: "We don't live alone", note: "Short declarative — simple moral truth. Refutes Birling's 'a man has to mind his own business'.", colour: "purple", side: "right" as const },
      { phrase: "We are members of one body", note: "Organic metaphor echoing 1 Corinthians 12:27 (Body of Christ). Gives socialist message religious and moral authority.", colour: "red", side: "left" as const },
      { phrase: "We are responsible for each other", note: "Anaphoric 'We are' — the pronoun includes everyone, refusing to let anyone exclude themselves from moral duty.", colour: "green", side: "right" as const },
      { phrase: "fire and blood and anguish", note: "Prophetic tricolon — builds in intensity. For the 1945 audience, this refers to the two World Wars that have already happened. Devastating dramatic irony.", colour: "orange", side: "left" as const },
    ],
    overallAnalysis: [
      "The Inspector breaks naturalistic convention — this is not a character speaking but Priestley delivering a political manifesto to the 1945 audience.",
      "Functions as a Brechtian Verfremdungseffekt (alienation effect): forces the audience out of passive entertainment into active moral reflection.",
      "The shift from 'remember this' to 'fire and blood' escalates from personal appeal to apocalyptic prophecy.",
      "The speech is structured as a moral ultimatum: learn voluntarily, or be taught by catastrophe.",
    ],
  },
  {
    title: "Mr Birling's Capitalist Philosophy",
    act: "Act 1",
    context:
      "Before the Inspector arrives, Mr Birling delivers a speech to Gerald and Eric about his philosophy of life. This is Priestley's way of establishing the worldview the play will systematically dismantle.",
    extract: `But the way some of these cranks talk and write now, you'd think everybody has to look after everybody else, as if we were all mixed up together like bees in a hive — community and all that nonsense. But take my word for it, you youngsters — and I've learnt in the good hard school of experience — that a man has to mind his own business and look after himself and his own — and —`,
    annotations: [
      { phrase: "cranks", note: "Dismissive noun — Birling ridicules anyone who believes in collective responsibility, positioning himself as the voice of reason. Ironic, since the 'cranks' are proved right.", colour: "red", side: "left" as const },
      { phrase: "everybody has to look after everybody else", note: "Birling mocks the exact principle the Inspector will later assert as moral truth. Dramatic irony — the audience knows Birling is wrong.", colour: "blue", side: "right" as const },
      { phrase: "mixed up together like bees in a hive", note: "Birling dismisses the organic metaphor of society as interconnected — yet the play proves this is exactly how society works.", colour: "green", side: "left" as const },
      { phrase: "community and all that nonsense", note: "Birling dismisses community despite holding civic positions (Lord Mayor, magistrate). Exposes his hypocrisy — public service was for status, not duty.", colour: "purple", side: "right" as const },
      { phrase: "the good hard school of experience", note: "Clich\u00e9 — Birling presents himself as wise and authoritative, but his 'experience' has taught him nothing about morality.", colour: "orange", side: "left" as const },
      { phrase: "a man has to mind his own business and look after himself and his own", note: "The play's anti-thesis. Repetition of 'his own' reveals selfishness. Priestley positions this before the Inspector arrives so the play demolishes it.", colour: "red", side: "right" as const },
      { phrase: "and —", note: "The dash interrupts Birling mid-sentence — he is cut off by the doorbell (the Inspector's arrival). Priestley literally silences capitalism with the arrival of social conscience.", colour: "green", side: "left" as const },
    ],
    overallAnalysis: [
      "Priestley uses Birling as a dramatic straw man — his philosophy is presented to be knocked down by the rest of the play.",
      "The Titanic reference earlier ('unsinkable, absolutely unsinkable') has already destroyed Birling's credibility before this speech.",
      "The interruption by the Inspector's arrival is structurally significant: Birling's philosophy is never allowed to reach its conclusion.",
      "For the 1945 audience, Birling represents the pre-war Edwardian ruling class whose arrogance led to catastrophe.",
    ],
  },
  {
    title: "Sheila Confronts Her Parents",
    act: "Act 3",
    context:
      "After the Inspector has left, Mr and Mrs Birling celebrate the possibility that he was not a real police inspector. Sheila, however, refuses to dismiss the moral lesson.",
    extract: `SHEILA: I tell you — whoever that Inspector was, it was anything but a joke. You knew it then. You began to learn something. And now you've stopped. You're ready to go on in the same old way.

BIRLING: (amused) And you're not, eh?

SHEILA: No, because I remember what he said, how he looked, and what he made me feel. Fire and blood and anguish. And it frightens me the way you talk, and I can't listen to any more of it.

MRS BIRLING: You're overtired. In the morning you'll feel better and then you'll see things more sensibly.

SHEILA: I'm ashamed of you as well — yes both of you.`,
    annotations: [
      { phrase: "whoever that Inspector was", note: "Sheila recognises that the Inspector's identity is irrelevant — the moral lesson stands regardless. This is the mature, critical thinking Priestley wants from his audience.", colour: "green", side: "right" as const },
      { phrase: "You began to learn something. And now you've stopped.", note: "Short, punchy sentences — Sheila speaks with moral clarity. The accusation is devastating: the parents had the chance to change and chose not to.", colour: "blue", side: "left" as const },
      { phrase: "the same old way", note: "Represents pre-war complacency and class arrogance. For the 1945 audience, 'the same old way' is what caused two World Wars.", colour: "red", side: "right" as const },
      { phrase: "how he looked, and what he made me feel", note: "Sheila's transformation is emotional and embodied, not merely intellectual. She has internalised the Inspector's values.", colour: "purple", side: "left" as const },
      { phrase: "Fire and blood and anguish", note: "Sheila repeats the Inspector's prophecy — she has become his successor, carrying his message forward after he has left.", colour: "orange", side: "right" as const },
      { phrase: "You're overtired", note: "Mrs Birling dismisses Sheila's moral awakening as hysteria — a patronising, gendered response that refuses to engage with the substance of her argument.", colour: "red", side: "left" as const },
      { phrase: "I'm ashamed of you as well — yes both of you", note: "Role reversal — child judges parents. Moral authority is earned through conscience, not inherited through age. The dash adds emphasis and defiance.", colour: "green", side: "right" as const },
    ],
    overallAnalysis: [
      "Sheila functions as the audience's proxy — she has seen the truth and refuses to unsee it.",
      "The generational divide is starkly drawn: the parents retreat into denial while Sheila advances into moral courage.",
      "Mrs Birling's dismissal of Sheila as 'overtired' reflects a patriarchal society that silences women's moral voices.",
      "Priestley positions Sheila as post-war Britain's hope — the next generation who will build the welfare state.",
    ],
  },
  {
    title: "Mrs Birling's Refusal of Responsibility",
    act: "Act 2",
    context:
      "Mrs Birling is being questioned about her role as chair of the Brumley Women's Charity Organisation, and her refusal to help Eva Smith when she came seeking assistance.",
    extract: `MRS BIRLING: Yes. She came to us claiming she was Mrs Birling — which was quite untrue. She gave herself ridiculous airs. She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position.

INSPECTOR: (very deliberately) Her position? Her position was that she was penniless, alone, desperately ill, and that one of you was entirely responsible.

MRS BIRLING: I used my influence to have it refused.

INSPECTOR: You refused her even though you knew what might happen to her afterwards?

MRS BIRLING: As if a girl of that sort would ever refuse money!`,
    annotations: [
      { phrase: "claiming she was Mrs Birling", note: "Dramatic irony — the audience knows (or suspects) Eva used the name because Eric, a Birling, is the father. Mrs Birling's outrage at the 'theft' of her name blinds her to the truth.", colour: "red", side: "left" as const },
      { phrase: "ridiculous airs", note: "Mrs Birling cannot conceive that a working-class woman could have dignity. Class prejudice prevents her from seeing Eva as human.", colour: "purple", side: "right" as const },
      { phrase: "fine feelings and scruples", note: "The irony is devastating — Eva had genuine moral scruples (refusing Eric's stolen money), while Mrs Birling, who claims moral authority, has none.", colour: "blue", side: "left" as const },
      { phrase: "a girl in her position", note: "Mrs Birling reduces Eva to a class category. The Inspector's echo — 'Her position?' — forces her to confront Eva's actual circumstances.", colour: "orange", side: "right" as const },
      { phrase: "I used my influence to have it refused", note: "The key confession. Mrs Birling weaponises her charity position — an institution meant to help becomes an instrument of class cruelty.", colour: "red", side: "left" as const },
      { phrase: "a girl of that sort", note: "Dehumanising phrase — 'that sort' reduces Eva to a type, denying her individuality. Mrs Birling projects her own class assumptions onto someone she refuses to understand.", colour: "green", side: "right" as const },
    ],
    overallAnalysis: [
      "Mrs Birling had the final opportunity to save Eva's life and deliberately chose not to — making her arguably the most morally culpable character.",
      "Priestley exposes how institutions meant to help the poor are controlled by the very class responsible for their suffering.",
      "The Inspector's 'very deliberately' stage direction signals that he is building a trap — Mrs Birling is about to condemn the 'father' without realising it is her own son.",
      "Mrs Birling's complete lack of self-awareness represents the older generation's inability to recognise their own moral failures.",
    ],
  },
];

// ═══════════════════════════════════════════════════
//  ESSAY PLANS (Completed examples)
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_ESSAY_PLANS: EssayPlan[] = [
  {
    question:
      "How does Priestley present ideas about responsibility in An Inspector Calls?",
    lineOfArgument:
      "Priestley presents responsibility as the central moral test of the play — those who accept it (Sheila, Eric) represent hope, while those who refuse it (Mr & Mrs Birling) represent the moral failure that caused two World Wars.",
    intro:
      "Establish the 1912/1945 dual time frame. State that Priestley uses the Inspector as a mouthpiece to argue for collective social responsibility and against capitalist individualism.",
    parts: [
      {
        label: "Point 1",
        point: "Birling rejects responsibility — represents capitalist individualism",
        quote: '"a man has to mind his own business and look after himself and his own"',
        analysis: "Repetition of 'his own' = selfishness. Positioned before Inspector arrives so the play dismantles it. Dramatic irony of Titanic discredits his authority.",
      },
      {
        label: "Point 2",
        point: "The Inspector asserts collective responsibility as moral truth",
        quote: '"We are members of one body. We are responsible for each other"',
        analysis: "Anaphora of 'We are' = collectivism. Organic metaphor 'one body' echoes Body of Christ. Declarative statements = moral imperatives. Priestley's mouthpiece.",
      },
      {
        label: "Point 3",
        point: "Sheila accepts responsibility — represents younger generation's hope",
        quote: '"But these girls aren\'t cheap labour — they\'re people"',
        analysis: "Antithesis exposes dehumanisation. Simple language = moral truth isn't complex. Her progression models the audience's journey.",
      },
      {
        label: "Point 4",
        point: "Mrs Birling weaponises her position to refuse responsibility",
        quote: '"I used my influence to have it refused"',
        analysis: "Charity becomes instrument of class cruelty. Had final chance to save Eva. Priestley exposes institutional hypocrisy.",
      },
      {
        label: "Point 5",
        point: "The cyclical structure warns that responsibility cannot be avoided",
        quote: '"if men will not learn that lesson, then they will be taught it in fire and blood and anguish"',
        analysis: "Prophetic tricolon = dramatic irony (1945 audience knows Wars happened). Final phone call = cyclical structure. Moral lesson will repeat until learned.",
      },
    ],
    conclusion:
      "Return to the argument: Priestley uses every dramatic tool — irony, structure, characterisation — to prove that social responsibility is not optional. The 1945 audience must choose: learn like Sheila, or repeat the catastrophe like Birling.",
  },
  {
    question:
      "How does Priestley explore the conflict between old and young in An Inspector Calls?",
    lineOfArgument:
      "Priestley presents a stark generational divide: the older generation (Mr & Mrs Birling) are incapable of moral change, while the younger generation (Sheila & Eric) represent the hope for a more just post-war society.",
    intro:
      "Establish context: written in 1945 for an audience choosing Britain's future. The play dramatises the choice between clinging to the pre-war status quo or embracing change.",
    parts: [
      {
        label: "Point 1",
        point: "Mr Birling represents the older generation's ideological stagnation",
        quote: '"The whole thing\'s different now. Come, come, you can see that, can\'t you?"',
        analysis: "Patronising tone ('Come, come') = attempt to reassert patriarchal authority. Birling learns nothing — dismisses moral lesson when consequences disappear. Values reputation over redemption.",
      },
      {
        label: "Point 2",
        point: "Mrs Birling dismisses the young as hysterical rather than engaging with truth",
        quote: '"You\'re overtired. In the morning you\'ll feel better"',
        analysis: "Gendered, patronising dismissal. Refuses to engage with substance of Sheila's moral argument. Represents wilful ignorance of the ruling class.",
      },
      {
        label: "Point 3",
        point: "Sheila transforms from naive socialite to moral authority",
        quote: '"I\'m ashamed of you as well — yes both of you"',
        analysis: "Role reversal: child judges parents. Moral authority earned through conscience, not inherited. 'Ashamed' = she judges by the Inspector's moral standard.",
      },
      {
        label: "Point 4",
        point: "Eric confronts his father's failure as both parent and moral leader",
        quote: '"You\'re not the kind of father a chap could go to when he\'s in trouble"',
        analysis: "Strikes at patriarchal failure — wealth without wisdom. Displaced self-reference ('a chap') reveals deep emotional damage. Birling = representative failed father of the nation.",
      },
      {
        label: "Point 5",
        point: "The cyclical ending places moral hope with the young",
        quote: '"That was the police. A girl has just died... an Inspector is on his way here"',
        analysis: "The test will repeat. For the older Birlings = devastating return of denied truth. For Sheila/Eric = validation. Priestley asks: which generation does the audience belong to?",
      },
    ],
    conclusion:
      "Priestley leaves no doubt: the older generation has failed. The play is a call to the 1945 audience — the young who must build a better Britain — to reject the Birlings' complacency and embrace the Inspector's moral vision.",
  },
];

// ═══════════════════════════════════════════════════
//  EXAM QUESTIONS (with extracts)
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_EXAM_QUESTIONS: ExamPrepQuestion[] = [
  {
    extract: `BIRLING: But take my word for it, you youngsters — and I've learnt in the good hard school of experience — that a man has to mind his own business and look after himself and his own — and —\n\nWe hear the sharp ring of a front door bell. BIRLING stops to listen.\n\nBIRLING: I wonder who that can be at this time of night.`,
    extractAct: "Act 1",
    question: "Starting with this extract, how does Priestley present Mr Birling as a foolish character?",
    theme: "Character: Mr Birling",
  },
  {
    extract: `INSPECTOR: But just remember this. One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering and chance of happiness, all intertwined with our lives, and what we think and say and do. We don't live alone. We are members of one body. We are responsible for each other.`,
    extractAct: "Act 3",
    question: "Starting with this extract, how does Priestley present ideas about social responsibility?",
    theme: "Social Responsibility",
  },
  {
    extract: `MRS BIRLING: As if a girl of that sort would ever refuse money!\n\nINSPECTOR: (staring at her) There are a lot of young women living that sort of existence in every city and big town in this country, Miss Birling. If there weren't, the factories and warehouses wouldn't know where to look for cheap labour. Ask your father.\n\nMRS BIRLING: I don't suppose for a moment that we can understand why the girl committed suicide. Girls of that class —`,
    extractAct: "Act 2",
    question: "Starting with this extract, how does Priestley present Mrs Birling's attitude to the working class?",
    theme: "Class & Power",
  },
  {
    extract: `SHEILA: You're pretending everything's just as it was before.\n\nERIC: I'm not pretending.\n\nSHEILA: No, but these two are. (To her parents.) And I tell you — whoever that Inspector was, it was anything but a joke. You knew it then. You began to learn something. And now you've stopped. You're ready to go on in the same old way.`,
    extractAct: "Act 3",
    question: "Starting with this extract, how does Priestley use the younger generation to present ideas about change?",
    theme: "Generational Divide",
  },
  {
    extract: `GERALD: She was young and pretty and warm-hearted — and intensely grateful.\n\nINSPECTOR: In fact, he was the most important person in her life — you understand?\n\nGERALD: (eagerly) Yes — and then I was sorry for her.`,
    extractAct: "Act 2",
    question: "Starting with this extract, how does Priestley present Gerald's relationship with Eva Smith?",
    theme: "Gender & Exploitation",
  },
  {
    extract: `The lighting should be pink and intimate until the INSPECTOR arrives, and then it should be brighter and harder.\n\nBIRLING: (jovially) Gerald, I'm going to tell you frankly. Your engagement to Sheila means a tremendous lot to me. She'll make you happy, and I'm sure you'll make her happy. What I like about it is that I think you're just the kind of son-in-law I always wanted.`,
    extractAct: "Act 1 (Opening)",
    question: "Starting with this extract, how does Priestley use the opening of the play to present the theme of artifice and pretence?",
    theme: "Artifice & Pretence",
  },
  {
    extract: `ERIC: (nearly at breaking point) Then — you killed her. She came to you to protect me — and you turned her away — yes, and you killed her — and the child she'd have had too — my child — your own grandchild — you killed them both — damn you, damn you —\n\nMRS BIRLING: (very distressed now) No — Eric — please — I didn't know — I didn't understand —`,
    extractAct: "Act 3",
    question: "Starting with this extract, how does Priestley present the effects of the Inspector's investigation on the Birling family?",
    theme: "Social Responsibility",
  },
  {
    extract: `INSPECTOR: Public men, Mr Birling, have responsibilities as well as privileges.\n\nBIRLING: Possibly. But you weren't asked to come here to talk to me about my responsibilities.\n\nINSPECTOR: Let's leave it at that then. Good night.`,
    extractAct: "Act 1",
    question: "Starting with this extract, how does Priestley present the conflict between the Inspector and Mr Birling?",
    theme: "Social Responsibility",
  },
];
