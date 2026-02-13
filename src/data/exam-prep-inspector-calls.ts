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
//  EXAMPLE ESSAYS (Grade 9 answers)
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_ESSAYS: ExampleEssay[] = [
  {
    question:
      "How does Priestley present the theme of social responsibility in An Inspector Calls?",
    grade: "Grade 9",
    essay: `Throughout 'An Inspector Calls', Priestley presents social responsibility as the moral foundation upon which a just society must be built. Writing in 1945, at the dawn of the welfare state, Priestley uses the play as a dramatic argument for collective duty — and against the selfish individualism embodied by Arthur Birling.

From the very beginning, Priestley systematically discredits the capitalist worldview through Mr Birling's speech: "a man has to mind his own business and look after himself and his own." The repetition of the possessive pronoun "his own" exposes the narrow, self-serving philosophy that underpins Birling's capitalism — responsibility extends no further than personal profit and family reputation. Priestley positions this speech deliberately before the Inspector's arrival so that the entire play functions as a systematic demolition of Birling's ideology. Furthermore, the devastating dramatic irony of his Titanic prediction — "unsinkable, absolutely unsinkable" — ensures the audience distrusts every word he says, priming them to reject his dismissal of social duty.

In contrast, the Inspector serves as Priestley's mouthpiece, delivering the play's central moral thesis: "We are members of one body. We are responsible for each other." The anaphoric repetition of "We are" creates an inescapable collectivist message — the pronoun refuses to allow any individual to exclude themselves. The organic metaphor "one body" compares society to a single living organism, deliberately echoing the Christian concept of the Body of Christ (1 Corinthians 12:27), granting the Inspector's socialist argument both religious and universal authority. These are not opinions but declarative moral truths delivered as imperatives, and Priestley instrumentalises the Inspector to break naturalistic convention and address the audience directly with a political manifesto.

Crucially, Priestley uses the generational divide to argue that change is possible but not inevitable. Sheila's moral awakening — "But these girls aren't cheap labour — they're people" — demonstrates the younger generation's capacity for genuine ethical transformation. The antithesis between "cheap labour" and "people" exposes the dehumanising language of capitalism, while Sheila's simple, direct phrasing suggests that moral truth is not complex; it is inequality that requires elaborate justification. By Act 3, Sheila has fully internalised the Inspector's values: "I'm ashamed of you as well — yes both of you." The role reversal — a child judging her parents — inverts the expected family hierarchy, arguing that moral authority must be earned, not inherited. For Priestley's 1945 audience, voting on the future of Britain, Sheila models the journey from complacent privilege to active social conscience.

However, the older generation's refusal to change provides Priestley's darkest warning. Mr Birling's relief when the Inspector is revealed as potentially fraudulent — "The whole thing's different now" — shows that he has learned nothing; the moral lesson is dismissed the moment social consequences disappear. Priestley demonstrates that some people value reputation over redemption, appearance over genuine moral change. The cyclical structure — the final phone call announcing another Inspector — refuses the audience comfortable closure, insisting that the moral question remains open.

Ultimately, the Inspector's prophecy — "if men will not learn that lesson, then they will be taught it in fire and blood and anguish" — bridges the 1912 setting and the 1945 audience. The tricolon builds in apocalyptic intensity, and the 1945 audience knows this prophecy has already been fulfilled through two World Wars. Priestley's message is devastatingly clear: social responsibility is not optional. The play leaves the audience with a choice that mirrors the one facing post-war Britain — will they learn voluntarily, like Sheila, or will they require further catastrophe?`,
    annotations: [
      { phrase: "a man has to mind his own business", note: "Key Birling quote — individualism exposed", colour: "red" },
      { phrase: "We are members of one body", note: "Inspector's central thesis — collectivism", colour: "green" },
      { phrase: "But these girls aren't cheap labour", note: "Sheila's awakening — dehumanisation exposed", colour: "blue" },
      { phrase: "fire and blood and anguish", note: "Prophetic tricolon — dramatic irony for 1945 audience", colour: "purple" },
    ],
    techniqueDissections: [
      {
        technique: "Repetition",
        termUsed: '"The repetition of the possessive pronoun \u201chis own\u201d"',
        quote: '"a man has to mind his own business and look after himself and his own"',
        ao: "AO2",
        whyItScores: "The student doesn't just spot repetition — they name the grammatical class ('possessive pronoun') and explain the effect: it draws a 'narrow, self-serving' boundary around responsibility. This is AO2 at its highest because it links a micro language feature to a macro ideological meaning.",
      },
      {
        technique: "Dramatic Irony",
        termUsed: '"the devastating dramatic irony of his Titanic prediction"',
        quote: '"unsinkable, absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "The student explains how dramatic irony functions structurally — it isn't just that Birling is wrong, but that his wrongness 'poisons everything he subsequently claims'. This shows understanding of cumulative dramatic effect, not just technique spotting.",
      },
      {
        technique: "Anaphora",
        termUsed: '"The anaphoric repetition of \u201cWe are\u201d creates an inescapable collectivist message"',
        quote: '"We are members of one body. We are responsible for each other"',
        ao: "AO2",
        whyItScores: "Naming 'anaphora' is precise terminology. But what earns marks is explaining the pronoun's function — it 'refuses to allow any individual to exclude themselves'. The student shows the technique has a political purpose, not just a rhetorical one.",
      },
      {
        technique: "Organic Metaphor",
        termUsed: '"The organic metaphor \u201cone body\u201d compares society to a single living organism"',
        quote: '"We are members of one body"',
        ao: "AO2",
        whyItScores: "The student links the metaphor to a specific literary/religious intertext (Body of Christ, 1 Corinthians 12:27). This elevates the analysis from technique identification to conceptual exploration — a key Grade 9 skill.",
      },
      {
        technique: "Mouthpiece / Breaking Convention",
        termUsed: '"Priestley instrumentalises the Inspector to break naturalistic convention"',
        quote: '"We are responsible for each other"',
        ao: "AO2",
        whyItScores: "Using the term 'instrumentalises' shows the student understands that the Inspector is a dramatic device, not just a character. Recognising the break from naturalism shows awareness of dramatic form (not just language), which is exactly what AO2 rewards at top band.",
      },
      {
        technique: "Antithesis",
        termUsed: '"The antithesis between \u201ccheap labour\u201d and \u201cpeople\u201d"',
        quote: '"But these girls aren\'t cheap labour — they\'re people"',
        ao: "AO2",
        whyItScores: "The student identifies a structural opposition and then makes a sharp conceptual point: 'moral truth is not complex; it is inequality that requires elaborate justification.' This kind of paradoxical insight is what distinguishes Grade 9 from Grade 8.",
      },
      {
        technique: "Role Reversal (Structural)",
        termUsed: '"The role reversal — a child judging her parents — inverts the expected family hierarchy"',
        quote: '"I\'m ashamed of you as well — yes both of you"',
        ao: "AO2",
        whyItScores: "This is structural analysis: the student identifies a power shift within the play's relationships and connects it to the thematic argument about moral authority. Examiners reward this because it shows understanding of how dramatic structure creates meaning.",
      },
      {
        technique: "Tricolon / Prophecy",
        termUsed: '"The tricolon builds in apocalyptic intensity"',
        quote: '"fire and blood and anguish"',
        ao: "AO2",
        whyItScores: "The student names the technique (tricolon) and then explains its escalating effect ('apocalyptic intensity'). Linking it to dramatic irony — the 1945 audience knows the prophecy was fulfilled — shows simultaneous AO2 + AO3 integration.",
      },
      {
        technique: "Contextual Argument (1912/1945)",
        termUsed: '"Writing in 1945, at the dawn of the welfare state"',
        quote: "N/A — contextual framing",
        ao: "AO3",
        whyItScores: "The student doesn't list context as a separate section — they weave it into their argument. The 1912/1945 dual time frame is used to explain why Priestley wrote the play, not just when. This is AO3 done properly: context shapes interpretation, not bolted-on facts.",
      },
      {
        technique: "Cyclical Structure",
        termUsed: '"The cyclical structure — the final phone call announcing another Inspector"',
        quote: "structural analysis of the ending",
        ao: "AO2",
        whyItScores: "Discussing the play's overall structure shows awareness of form beyond sentence-level language. The student explains what the cyclical structure does to the audience: it 'refuses comfortable closure'. This is sophisticated AO2 — structure as a tool of persuasion.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "Clear thesis statement that directly addresses the question. Establishes the 1945 context immediately and frames the play as a 'dramatic argument' — showing awareness of form and purpose from the first sentence.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "Top-band introductions don't describe — they argue. This paragraph makes a claim ('moral foundation upon which a just society must be built') that the rest of the essay will prove. The integration of AO3 into the thesis (not a separate context paragraph) is a Grade 9 marker.",
      },
      {
        paragraph: 2,
        label: "Mr Birling — Capitalist Individualism",
        whatExaminerSees: "Two quotes embedded fluently. Repetition of 'his own' analysed at word level (AO2). Dramatic irony of Titanic explained as a structural device, not just a factual error. Phrase 'poisons everything' shows conceptualised analysis.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The student explains how Priestley 'positions this speech deliberately before the Inspector's arrival' — this structural awareness (why the quote is where it is, not just what it means) pushes AO2 to the top band. The word 'systematically' shows the student sees Priestley as a craftsman, not an accident.",
      },
      {
        paragraph: 3,
        label: "The Inspector — Collectivism",
        whatExaminerSees: "Dense AO2 analysis: anaphora, organic metaphor, declarative statements, mouthpiece, political manifesto. Each technique is named, explained, and connected to Priestley's purpose. The religious intertext (Body of Christ) adds conceptual depth.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "This paragraph is what examiners describe as 'exploratory and conceptualised'. The student doesn't just explain what the Inspector says — they explain what Priestley is doing with the Inspector as a dramatic device. The phrase 'break naturalistic convention' shows genre awareness. Multiple AO2 methods are linked to AO3 purpose — this integration is the hallmark of Grade 9.",
      },
      {
        paragraph: 4,
        label: "Sheila — Generational Hope",
        whatExaminerSees: "Antithesis identified and explained. Two quotes from different acts show development across the play (AO1 — whole text). Role reversal analysed as a structural device. The 1945 audience is invoked to explain Priestley's purpose.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "Tracking a character's development across acts demonstrates 'whole text' engagement (top-band AO1). The conceptual point — 'moral authority must be earned, not inherited' — goes beyond the text to make an argument about society. This is what examiners call a 'personal and original conceptualised response'.",
      },
      {
        paragraph: 5,
        label: "Older Generation — Refusal to Change",
        whatExaminerSees: "Birling's quote analysed for what it reveals about moral failure. Cyclical structure explained as a dramatic device that affects the audience. Contrasting pair: 'reputation over redemption, appearance over genuine change'.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The balanced phrasing ('reputation over redemption') shows confident, controlled writing — a top-band AO1 quality. The student doesn't just describe the ending; they explain its effect on the audience, which shows awareness of dramatic purpose.",
      },
      {
        paragraph: 6,
        label: "Conclusion",
        whatExaminerSees: "Returns to the argument with new force. Tricolon analysed. Dramatic irony linked to audience reception. Final sentence poses a rhetorical question that mirrors Priestley's own strategy — the student writes like the playwright.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion doesn't summarise — it escalates. By ending with a rhetorical question ('will they learn voluntarily, like Sheila, or will they require further catastrophe?'), the student mimics Priestley's own technique, showing deep internalisation of the writer's craft. This is the kind of original, assured voice that separates Grade 9 from Grade 8.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it treats the play as a constructed argument, not just a story. Every paragraph analyses what Priestley is doing (AO2) and why he is doing it (AO3), while maintaining a clear, argued line of reasoning (AO1). Techniques are never just spotted — they are explained in terms of their effect on the audience and their role in Priestley's political project. Context is integrated into analysis, not bolted on. The writing style itself is assured and precise, with the student's own voice clearly audible throughout.",
  },
  {
    question:
      "How does Priestley present the character of Mr Birling in An Inspector Calls?",
    grade: "Grade 9",
    essay: `Priestley presents Mr Birling as the embodiment of capitalist arrogance, self-interest, and wilful ignorance — a character whose every certainty is systematically undermined to expose the moral bankruptcy of the ruling class he represents.

From the opening of the play, Priestley establishes Birling as a man of false authority. His speech about the Titanic — "unsinkable, absolutely unsinkable" — is a masterclass in dramatic irony: the 1945 audience knows the Titanic sank on its maiden voyage, and this catastrophic misjudgement poisons everything Birling subsequently claims. The intensifier "absolutely" amplifies the irony — Birling's certainty is inversely proportional to his understanding. Priestley deploys this technique deliberately: by discrediting Birling within the first few minutes, he ensures the audience distrusts the entire capitalist worldview Birling represents.

Birling's ideological position is laid bare in his self-serving philosophy: "a man has to mind his own business and look after himself and his own." The repetition of "his own" reveals an ideology centred entirely on possession and self-interest, excluding any obligation to the wider community. Priestley positions this statement strategically before the Inspector's arrival so that the play's entire moral architecture — built on collective responsibility — stands in direct opposition. Birling's worldview is not just morally wrong; it is presented as the root cause of Eva Smith's destruction. His decision to sack Eva for asking for a modest pay rise demonstrates how capitalist power operates: the wealthy can destroy lives through routine business decisions and feel no moral consequence.

Priestley further undermines Birling by exposing the gap between his public performance and his private reality. Mrs Birling reminds the Inspector that her husband "was Lord Mayor only two years ago," yet Birling has already dismissed community as "nonsense." The hypocrisy is deliberate: Birling sought civic positions not to serve but to accumulate social capital. His desperate attempts to impress Gerald — "you ought to like this port... it's exactly the same port your father gets" — reveal a man performing a class position he was not born into. The stage directions tell us he is "provincial in his speech," and Priestley uses this detail to show that Birling's entire social identity is constructed artifice.

Most damningly, Birling's response to the Inspector's revelations exposes a man incapable of moral growth. When the Inspector's legitimacy is questioned, Birling's immediate relief — "The whole thing's different now" — reveals that he cares only about public exposure, not private guilt. The moral lesson is dismissed the instant social consequences disappear. His patronising attempt to reassert authority over Sheila and Eric — "Come, come, you can see that, can't you?" — shows a father more concerned with obedience than with truth. Eric's devastating accusation — "You're not the kind of father a chap could go to when he's in trouble" — exposes Birling's failure as both a parent and a moral leader: he has provided material wealth but no ethical foundation.

Priestley presents Birling as a representative figure — not merely one flawed individual but the personification of the Edwardian ruling class whose complacent certainties led Britain into the catastrophe of two World Wars. The cyclical ending, with another Inspector on his way, suggests that men like Birling will face this reckoning repeatedly until they change — or are swept aside by history. For the 1945 audience, Birling is a warning from the past: this is the ideology that must not be allowed to rebuild Britain.`,
    annotations: [
      { phrase: "unsinkable, absolutely unsinkable", note: "Dramatic irony — Titanic discredits Birling's authority", colour: "red" },
      { phrase: "provincial in his speech", note: "Stage direction — performing a class he wasn't born into", colour: "orange" },
      { phrase: "The whole thing's different now", note: "Birling learns nothing — reputation over redemption", colour: "purple" },
      { phrase: "You're not the kind of father", note: "Eric's accusation — patriarchal failure exposed", colour: "blue" },
    ],
    techniqueDissections: [
      {
        technique: "Dramatic Irony",
        termUsed: '"a masterclass in dramatic irony"',
        quote: '"unsinkable, absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "The student doesn't just name dramatic irony — they explain its cascading effect: it 'poisons everything Birling subsequently claims'. This shows understanding that a single dramatic device can shape the audience's response for the entire play, not just one moment.",
      },
      {
        technique: "Intensifier (Word-Level Analysis)",
        termUsed: '"The intensifier \u201cabsolutely\u201d amplifies the irony"',
        quote: '"absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "Zooming into a single word ('absolutely') and explaining its function shows the micro-level language analysis that examiners reward. The conceptual link — 'certainty is inversely proportional to his understanding' — transforms a word-level observation into a character-level argument.",
      },
      {
        technique: "Repetition",
        termUsed: '"The repetition of \u201chis own\u201d reveals an ideology centred entirely on possession"',
        quote: '"look after himself and his own"',
        ao: "AO2",
        whyItScores: "The student links repetition to ideology — the repeated words aren't just emphatic, they expose a philosophical position. This is technique analysis in service of argument, not technique spotting for its own sake.",
      },
      {
        technique: "Structural Positioning",
        termUsed: '"Priestley positions this statement strategically before the Inspector\u2019s arrival"',
        quote: "structural analysis — placement of Birling's speech",
        ao: "AO2",
        whyItScores: "This is structural analysis: explaining why Priestley places the speech where he does. Examiners specifically reward awareness of how the playwright constructs the play's architecture to control audience response.",
      },
      {
        technique: "Stage Directions",
        termUsed: '"The stage directions tell us he is \u201cprovincial in his speech\u201d"',
        quote: '"provincial in his speech"',
        ao: "AO2",
        whyItScores: "Analysing stage directions (not just dialogue) shows awareness of dramatic form. The student connects 'provincial' to class performance — Birling's 'entire social identity is constructed artifice'. This is AO2 at its best: form revealing character.",
      },
      {
        technique: "Hypocrisy / Juxtaposition",
        termUsed: '"exposing the gap between his public performance and his private reality"',
        quote: '"was Lord Mayor" vs. community as "nonsense"',
        ao: "AO1",
        whyItScores: "The student juxtaposes two moments from the text to expose a contradiction Birling himself doesn't see. This is critical analysis at its most effective — using the text against itself to build an argument.",
      },
      {
        technique: "Social Performance / Artifice",
        termUsed: '"a man performing a class position he was not born into"',
        quote: '"you ought to like this port... it\'s exactly the same port your father gets"',
        ao: "AO3",
        whyItScores: "The student reads the port scene as social performance, connecting it to Birling's class insecurity. This is AO3 integrated into character analysis — understanding how Edwardian class anxiety drives Birling's behaviour. Context is used to explain the character, not bolted on separately.",
      },
      {
        technique: "Patronising Tone / Power Dynamics",
        termUsed: '"His patronising attempt to reassert authority"',
        quote: '"Come, come, you can see that, can\'t you?"',
        ao: "AO2",
        whyItScores: "The student identifies tone as a technique — not just what Birling says but how he says it. 'Patronising' is linked to patriarchal authority, showing the student reads speech acts as power moves.",
      },
      {
        technique: "Representative Character / Typicality",
        termUsed: '"not merely one flawed individual but the personification of the Edwardian ruling class"',
        quote: "conceptual argument about Birling's function",
        ao: "AO3",
        whyItScores: "This is the hallmark of a Grade 9 response: seeing the character as representative of a class and historical moment, not just an individual. The student reads Birling as Priestley's political argument made flesh.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "The thesis is a triple characterisation: 'capitalist arrogance, self-interest, and wilful ignorance'. The student also signals their structural argument: Birling's certainties are 'systematically undermined'. This tells the examiner the essay will track a deliberate pattern.",
        aoCoverage: ["AO1"],
        gradeJustification: "Top-band AO1 requires a 'critical, exploratory, conceptualised response'. This introduction delivers a clear argument that frames Birling not as a person but as a construct — something Priestley built to demolish.",
      },
      {
        paragraph: 2,
        label: "Titanic — False Authority",
        whatExaminerSees: "Dramatic irony explained as a structural device with cumulative effect. The intensifier 'absolutely' is analysed at word level. The student explains Priestley's deliberate technique: 'discrediting Birling within the first few minutes'.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The phrase 'certainty is inversely proportional to his understanding' is the kind of sharp, original formulation that examiners cite as evidence of a personal voice. This is not a learned formula — it's genuine critical thinking expressed with confidence.",
      },
      {
        paragraph: 3,
        label: "Ideological Position — 'His Own'",
        whatExaminerSees: "Repetition linked to ideology. Structural positioning explained. The student then makes the leap from language to consequence: Birling's philosophy is 'the root cause of Eva Smith's destruction'.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Moving from technique to consequence is what separates Grade 9 from Grade 7/8. Grade 7 explains the technique. Grade 8 explains the effect. Grade 9 explains the implication — the student argues that Birling's words have material consequences for other characters.",
      },
      {
        paragraph: 4,
        label: "Public vs Private — Class Performance",
        whatExaminerSees: "Three pieces of evidence (Lord Mayor, the port, stage directions) woven together to build a single argument about artifice. Stage directions analysed alongside dialogue. Context of Edwardian class mobility is integrated naturally.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "This paragraph demonstrates 'whole text' knowledge by drawing evidence from multiple moments. The analysis of stage directions shows awareness of dramatic form beyond dialogue. The phrase 'constructed artifice' could apply to both Birling's identity and Priestley's dramatic construction — this double meaning is sophisticated.",
      },
      {
        paragraph: 5,
        label: "Incapable of Moral Growth",
        whatExaminerSees: "Eric's quote is used as evidence against Birling — other characters' words illuminate the subject. The student identifies the connection between parental failure and moral failure. The phrase 'material wealth but no ethical foundation' is precise and balanced.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Using another character's words to analyse the subject shows sophisticated evidence handling. The student doesn't just describe Birling's stagnation — they diagnose it: he prioritises 'obedience' over 'truth'. This is evaluative writing at the top band.",
      },
      {
        paragraph: 6,
        label: "Conclusion",
        whatExaminerSees: "Birling elevated from individual to representative figure. Cyclical structure connected to the 1945 audience's political context. Final sentence directly addresses the audience's responsibility.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion doesn't summarise — it widens. By calling Birling 'the ideology that must not be allowed to rebuild Britain', the student makes the character analysis serve a political argument. This is the kind of ambitious, conceptualised conclusion that defines Grade 9.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because the student never treats Birling as just a character — he is consistently analysed as a dramatic construct, a political symbol, and a representative of a failing class. Every technique identified (dramatic irony, repetition, stage directions, structural positioning) is linked to Priestley's purpose. The writing is authoritative and precise, with original phrasing ('certainty is inversely proportional to his understanding') that demonstrates a genuine critical voice rather than memorised formulas.",
  },
  {
    question:
      "How does Priestley use the character of Sheila to present ideas about change in An Inspector Calls?",
    grade: "Grade 9",
    essay: `Priestley presents Sheila Birling as the character who undergoes the most profound moral transformation in the play, using her journey from naive socialite to moral authority as a model for the change he wanted to see in post-war British society.

At the start of the play, Sheila is presented through the stage directions as a young woman "very pleased with life and rather excited" — she is the product of upper-class privilege, insulated from the suffering of the working class. Her engagement to Gerald is framed as a social and commercial transaction rather than a love match; her father's delight is transparently motivated by the merger of Croft's and Birling's businesses. Priestley establishes Sheila within a world where people are valued for their economic utility rather than their humanity — the same world that destroyed Eva Smith.

However, Sheila's capacity for empathy distinguishes her from her parents almost immediately. Upon learning of her father's role in Eva's sacking, she responds: "But these girls aren't cheap labour — they're people." The antithesis between "cheap labour" and "people" exposes the dehumanising language of capitalism — the dash creates a typographical caesura that forces the audience to choose between the capitalist worldview and the humanist one. Sheila's simple, direct language suggests that moral truth is not complex; it is inequality that requires elaborate justification. This moment marks the beginning of her moral awakening, and Priestley uses its simplicity to argue that recognising others' humanity is the first step toward social change.

Crucially, Sheila is not exempted from guilt. Her confession that she had Eva dismissed from Milwards out of jealousy — "I went to the manager at Milwards and I told him that if they didn't get rid of that girl, I'd never go near the place again" — reveals the casual cruelty that privilege enables. Yet her immediate and genuine remorse — "I know I'm to blame — and I'm desperately sorry" — distinguishes her from every other character. The adverb "desperately" signals authentic emotional engagement, not the performative regret her parents later display. Priestley argues that acknowledging guilt is not weakness but the essential precondition for moral growth.

By Act 3, Sheila has fully absorbed the Inspector's moral framework and become his successor. Her confrontation with her parents — "I'm ashamed of you as well — yes both of you" — performs a devastating role reversal: the child judges the parents, inverting the family hierarchy and arguing that moral authority belongs to those who earn it through conscience, not those who inherit it through class. When she accuses them of "pretending everything's just as it was before," the word "pretending" exposes the fundamental flaw in the older generation's worldview — they choose comfortable illusion over uncomfortable truth. Sheila refuses to return to the "pink and intimate" world of Act 1's opening; she has seen the harsher light the Inspector brought and cannot unsee it.

Priestley's use of Sheila is ultimately strategic. Writing in 1945 for an audience about to vote on Britain's future, he presents Sheila as proof that change is possible — that individuals raised within a corrupt system can recognise its injustice and choose differently. Her journey from privilege to conscience mirrors the transformation Priestley demands of his audience. The play's cyclical ending — with another Inspector arriving — suggests that this moral test will be repeated. The question for the audience, as for Sheila, is whether they will choose awareness and responsibility, or retreat into the comfortable pretence of the Birling parents.`,
    annotations: [
      { phrase: "very pleased with life", note: "Stage direction — initial naivety and privilege", colour: "orange" },
      { phrase: "cheap labour — they're people", note: "Antithesis — awakening begins with recognising humanity", colour: "green" },
      { phrase: "I know I'm to blame — and I'm desperately sorry", note: "Genuine remorse vs performative regret", colour: "blue" },
      { phrase: "I'm ashamed of you as well", note: "Role reversal — child gains moral authority over parents", colour: "purple" },
    ],
    techniqueDissections: [
      {
        technique: "Stage Directions",
        termUsed: '"presented through the stage directions as a young woman \u201cvery pleased with life and rather excited\u201d"',
        quote: '"very pleased with life and rather excited"',
        ao: "AO2",
        whyItScores: "Analysing stage directions (not just dialogue) demonstrates awareness of dramatic form. The student uses them to establish Sheila's starting point — her privilege and naivety — so her later transformation has a clear baseline to measure against.",
      },
      {
        technique: "Subtext / Economic Framing",
        termUsed: '"Her engagement to Gerald is framed as a social and commercial transaction"',
        quote: "engagement scene analysis",
        ao: "AO1",
        whyItScores: "The student reads beneath the surface. Instead of taking the engagement at face value, they identify the economic subtext — Birling's delight is about business, not love. This shows the critical, inferential reading that examiners reward at the top band.",
      },
      {
        technique: "Antithesis",
        termUsed: '"The antithesis between \u201ccheap labour\u201d and \u201cpeople\u201d"',
        quote: '"But these girls aren\'t cheap labour — they\'re people"',
        ao: "AO2",
        whyItScores: "The student names the technique precisely, then makes a conceptual leap: the dash creates a 'typographical caesura that forces the audience to choose'. This is micro-level analysis (punctuation) linked to macro-level effect (audience moral choice) — exactly what top-band AO2 demands.",
      },
      {
        technique: "Typographical Caesura",
        termUsed: '"the dash creates a typographical caesura"',
        quote: '"cheap labour — they\'re people"',
        ao: "AO2",
        whyItScores: "Naming the dash as a 'typographical caesura' is precise, advanced terminology. More importantly, the student explains its function: it 'forces the audience to choose between the capitalist worldview and the humanist one'. The punctuation mark becomes a moral dividing line.",
      },
      {
        technique: "Adverb Analysis (Word-Level)",
        termUsed: '"The adverb \u201cdesperately\u201d signals authentic emotional engagement"',
        quote: '"I know I\'m to blame — and I\'m desperately sorry"',
        ao: "AO2",
        whyItScores: "Isolating a single adverb and explaining its function shows precise language analysis. The student then contrasts this with 'performative regret her parents later display' — comparative analysis across the text is a Grade 9 skill.",
      },
      {
        technique: "Role Reversal (Structural)",
        termUsed: '"a devastating role reversal: the child judges the parents"',
        quote: '"I\'m ashamed of you as well — yes both of you"',
        ao: "AO2",
        whyItScores: "This is structural, not just linguistic analysis. The student identifies a power shift in the play's relationships and connects it to the thematic argument: 'moral authority belongs to those who earn it through conscience, not those who inherit it through class'.",
      },
      {
        technique: "Diction / Word Choice",
        termUsed: '"the word \u201cpretending\u201d exposes the fundamental flaw"',
        quote: '"pretending everything\'s just as it was before"',
        ao: "AO2",
        whyItScores: "Single-word analysis linked to the older generation's entire worldview. The student argues that 'pretending' is the Birling parents' defining characteristic. This is how Grade 9 students use evidence: one word illuminates a whole theme.",
      },
      {
        technique: "Light Symbolism / Stage Directions",
        termUsed: '"Sheila refuses to return to the \u201cpink and intimate\u201d world of Act 1"',
        quote: '"pink and intimate" (opening stage directions)',
        ao: "AO2",
        whyItScores: "The student connects Sheila's moral journey to the play's lighting symbolism from the opening stage directions. Drawing a link between a character's arc and a stage direction from a different part of the play demonstrates 'whole text' understanding and sophisticated AO2.",
      },
      {
        technique: "Priestley's Purpose / Audience",
        termUsed: '"Writing in 1945 for an audience about to vote on Britain\u2019s future"',
        quote: "contextual framing of Sheila's role",
        ao: "AO3",
        whyItScores: "AO3 is not a list of historical facts — it's using context to explain authorial intention. The student argues that Sheila is strategically designed to model the transformation Priestley wants from his audience. Context explains purpose, not just setting.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "Thesis statement positions Sheila as a 'model for the change' Priestley wanted. The student names her journey ('naive socialite to moral authority') immediately, signalling that the essay will track a transformation arc.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "The introduction doesn't describe Sheila — it makes an argument about Priestley's purpose in creating her. This immediately signals to the examiner that this is a conceptualised response: the student sees characters as constructs, not people.",
      },
      {
        paragraph: 2,
        label: "Starting Point — Privilege and Naivety",
        whatExaminerSees: "Stage directions analysed. Engagement read as economic transaction (subtext). The student connects Sheila's world to the world 'that destroyed Eva Smith' — linking character to theme.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Establishing a baseline is essential for character-change essays. The student doesn't just say Sheila was 'happy' — they explain the system that produced her happiness and the cost of that system (Eva). This shows structural thinking about character function.",
      },
      {
        paragraph: 3,
        label: "Moral Awakening — 'Cheap Labour'",
        whatExaminerSees: "Antithesis named and explained. Typographical caesura identified in the dash. Conceptual argument about simplicity vs complexity of moral truth. AO2 is dense but never formulaic — each technique serves the argument.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The conceptual insight — 'moral truth is not complex; it is inequality that requires elaborate justification' — is the kind of original thinking that defines Grade 9. This is not a technique-spot followed by an effect; it's genuine literary analysis that goes beyond the mark scheme.",
      },
      {
        paragraph: 4,
        label: "Guilt and Genuine Remorse",
        whatExaminerSees: "The student acknowledges Sheila's guilt (not hagiography). Single adverb 'desperately' analysed for emotional authenticity. Comparative judgment: her remorse vs her parents' 'performative regret'.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Balanced character analysis — acknowledging flaws while tracking growth — shows critical maturity. The comparative point (genuine vs performative remorse) demonstrates evaluative skills across the whole text, not just one scene.",
      },
      {
        paragraph: 5,
        label: "Moral Authority — Act 3",
        whatExaminerSees: "Role reversal identified. Two quotes from Act 3 analysed. Connection to 'pink and intimate' lighting from Act 1 demonstrates whole-text awareness. The word 'pretending' is isolated and given thematic weight.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Linking Sheila's Act 3 moral stance to the Act 1 stage directions is exactly the kind of cross-text connection that earns top marks. The student shows the entire play is a coherent structure, not a series of isolated moments.",
      },
      {
        paragraph: 6,
        label: "Conclusion — Priestley's Strategic Purpose",
        whatExaminerSees: "Sheila explicitly connected to Priestley's 1945 political purpose. The cyclical ending is invoked. The final sentence poses a choice that mirrors the play's own strategy.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion elevates the character analysis into a political argument. The student's final question — 'whether they will choose awareness and responsibility, or retreat into the comfortable pretence' — mirrors Priestley's own rhetorical strategy, showing deep understanding of how the play works on its audience.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it tracks Sheila's transformation with precision, using evidence from across the entire play (stage directions from Act 1, dialogue from Acts 1-3, structural analysis of the ending). Every technique — antithesis, typographical caesura, adverb analysis, role reversal — is named precisely and then explained in terms of its dramatic effect. The student consistently asks 'why did Priestley do this?' rather than just 'what does this mean?', which is the key distinction between Grade 8 and Grade 9 analysis. Context is woven into the argument, not separated into its own paragraph.",
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
      { phrase: "the good hard school of experience", note: "Cliché — Birling presents himself as wise and authoritative, but his 'experience' has taught him nothing about morality.", colour: "orange", side: "left" as const },
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
