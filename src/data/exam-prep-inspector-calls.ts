// ─── AN INSPECTOR CALLS  - Exam Preparation Kit ───

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
  extract?: string;
  extractAct?: string;
  question: string;
  theme: string;
}

// ═══════════════════════════════════════════════════
//  EXAMPLE ESSAYS  - Grade 9 exemplars written to
//  demonstrate the method (not real exam responses)
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_ESSAYS: ExampleEssay[] = [
  {
    question:
      "How does Priestley present ideas about social responsibility in An Inspector Calls?",
    grade: "Grade 9 (exemplar)",
    essay: `In the Inspector's final speech, Priestley transforms the stage from a domestic drama into a direct political address. Writing in 1945, when Britain was deciding between the Conservative promise of a return to pre-war norms and the Labour vision of a welfare state, Priestley uses the Inspector as his mouthpiece to articulate the socialist case for collective responsibility - the very argument he had been making in his popular BBC Postscripts broadcasts throughout the war.

The opening imperative, "just remember this," is significant because the adverb "just" strips away any complexity. Priestley is arguing that social responsibility is not a difficult philosophical concept but a simple moral truth that the ruling class has chosen to ignore - and this deliberate ignorance, rather than genuine misunderstanding, is what makes the Birlings culpable. The tripling of "millions and millions and millions" then forces the audience to confront the systemic scale of the problem. Priestley is not asking the audience to feel sorry for one girl; he is exposing the entire structure of Edwardian capitalism, in which the comfortable lives of the bourgeoisie were built on the exploitation of an invisible working class. The deliberate accumulation of human qualities - "their lives, their hopes and fears, their suffering and chance of happiness" - serves a specific political function: it restores individuality to the people that capitalism reduces to statistics. This directly counteracts the Malthusian language of "surplus population" that characterised Victorian and Edwardian attitudes to the poor, and which Birling echoes when he dismisses Eva as merely "cheap labour." The organic metaphor "intertwined" is Priestley's answer to Birling's earlier insistence on separation: society is not a collection of isolated units but a living system in which every action has consequences for others.

The short declarative sentences "We don't live alone. We are members of one body. We are responsible for each other" represent the ideological heart of the play. The anaphoric "We" is deliberately inclusive - it refuses to permit the audience to position themselves as observers of the Birlings' failings rather than participants in the same social system. The metaphor "one body" carries religious connotations, echoing 1 Corinthians 12:27 and the concept of the Body of Christ, and Priestley's choice to invoke Christian language is strategic: by grounding his socialist argument in biblical imagery, he reaches beyond political affiliation to a universal moral authority that even a Conservative audience would struggle to reject. The final warning, "fire and blood and anguish," constitutes a prophetic tricolon of devastating dramatic irony. For the 1945 audience, who had lived through the trenches of the First World War and the Blitz of the Second, this is not a prophecy but a historical fact. Priestley is making the argument that these catastrophes were not random events but the direct consequences of the selfish ideology the Birlings represent - and that unless Britain chooses a different path, they will happen again.

Moreover, this speech marks a crucial break in dramatic convention. The Inspector ceases to function as a realistic character and instead addresses the audience directly, breaking the fourth wall in a technique that forces the audience out of passive entertainment into active moral reflection. Priestley is making the political personal: you cannot simply watch this play and go home unchanged.

Elsewhere in the play, Priestley establishes the ideology that this speech dismantles from the very opening. Mr Birling's declaration, "a man has to mind his own business and look after himself and his own," is not presented as one man's opinion but as the articulation of an entire class's worldview - the laissez-faire capitalism that dominated Edwardian Britain and that Priestley held directly responsible for the social conditions that led to war. The repetition of the possessive pronoun "his own" reveals how this philosophy shrinks the moral universe to the self and immediate family, rendering the suffering of others literally invisible. Priestley has already undermined Birling's credibility through dramatic irony: the prediction that the Titanic is "unsinkable, absolutely unsinkable" would have provoked immediate recognition in the 1945 audience. This is not merely a joke at Birling's expense; Priestley is making a structural argument that the confidence of the Edwardian ruling class was built on delusion, and that their certainty about economic matters deserves the same scepticism as their certainty about the Titanic.

Priestley deepens the theme of responsibility through the generational divide. Sheila's declaration, "But these girls aren't cheap labour - they're people," employs antithesis to expose how the language of capitalism dehumanises the working class by reducing individuals to economic categories. The significance of this line lies in its simplicity: Sheila states something that should be self-evident, and the fact that it needs to be stated at all is Priestley's real indictment of the Birling class. By Act 3, Sheila has assumed the Inspector's moral authority, declaring "I'm ashamed of you as well - yes both of you." Priestley constructs this role reversal - a young woman judging her own parents - as an argument about where moral authority should reside in post-war Britain: not with the old order of inherited wealth and social position, but with the generation willing to confront uncomfortable truths about their own complicity. For a 1945 audience on the verge of voting in a Labour government that would create the NHS and the welfare state, Sheila embodies the generational transformation Priestley believed was essential.

However, the older generation's refusal to accept responsibility reveals why the Inspector's warning carries such urgency. Birling's response upon learning the Inspector may not be genuine, "The whole thing's different now," demonstrates that his concern was never ethical but reputational - he cares about scandal, not about Eva Smith. Priestley uses Birling's relief to expose the fundamental moral failure of the capitalist class: they will only behave responsibly when forced to by external consequences, never from genuine conscience. The cyclical structure of the ending, in which a second inspector is announced, returns the audience to the Inspector's central ultimatum: learn the lesson voluntarily, or be taught it in "fire and blood and anguish." The play refuses its audience a comfortable resolution because Priestley's argument is that the question of social responsibility is never settled - it must be confronted by every generation, and the cost of failure is measured in human lives.`,
    annotations: [
      { phrase: "a man has to mind his own business", note: "Key Birling quote  - individualism exposed", colour: "red" },
      { phrase: "We are members of one body", note: "Inspector's central thesis  - collectivism", colour: "green" },
      { phrase: "But these girls aren't cheap labour", note: "Sheila's awakening  - dehumanisation exposed", colour: "blue" },
      { phrase: "fire and blood and anguish", note: "Prophetic tricolon  - dramatic irony for 1945 audience", colour: "purple" },
    ],
    techniqueDissections: [
      {
        technique: "Repetition",
        termUsed: '"The repetition of the possessive pronoun \'his own\' reveals how this philosophy shrinks the moral universe to the self and immediate family"',
        quote: '"a man has to mind his own business and look after himself and his own"',
        ao: "AO2",
        whyItScores: "The student doesn't just spot repetition  - they explain its conceptual effect ('shrinks the moral universe to the self'). This shows genuine analytical thinking: linking a micro language feature to an ideological meaning, not just naming a technique and moving on.",
      },
      {
        technique: "Dramatic Irony",
        termUsed: '"Priestley has already undermined Birling\'s credibility through dramatic irony"',
        quote: '"unsinkable, absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "The student explains how dramatic irony functions structurally  - it doesn't just make Birling wrong about one thing; it is 'a structural argument that the confidence of the Edwardian ruling class was built on delusion'. This shows understanding of cumulative dramatic effect across the whole play, not just one moment.",
      },
      {
        technique: "Repetition / Inclusive Pronoun",
        termUsed: '"The anaphoric \'We\' is deliberately inclusive - it refuses to permit the audience to position themselves as observers of the Birlings\' failings rather than participants in the same social system"',
        quote: '"We are members of one body. We are responsible for each other"',
        ao: "AO2",
        whyItScores: "The student names the technique ('anaphoric') and then delivers sharp analysis. Explaining that it 'refuses to permit the audience to position themselves as observers' shows genuine engagement with how language works on an audience. The insight demonstrates how Priestley's pronoun choice implicates the entire audience in his argument.",
      },
      {
        technique: "Metaphor",
        termUsed: '"The metaphor \'one body\' carries religious connotations, echoing 1 Corinthians 12:27 and the concept of the Body of Christ"',
        quote: '"We are members of one body"',
        ao: "AO2",
        whyItScores: "Linking the metaphor to a specific biblical intertext (1 Corinthians 12:27) elevates the analysis from technique identification to conceptual exploration  - a key Grade 9 skill. The student then explains the strategic purpose: 'by grounding his socialist argument in biblical imagery, he reaches beyond political affiliation to a universal moral authority.'",
      },
      {
        technique: "Breaking Dramatic Convention",
        termUsed: '"The Inspector ceases to function as a realistic character and instead addresses the audience directly, breaking the fourth wall"',
        quote: '"We are responsible for each other"',
        ao: "AO2",
        whyItScores: "The student recognises that Priestley breaks the naturalistic frame  - this is analysis of dramatic form, not just language. The observation that this 'forces the audience out of passive entertainment into active moral reflection' demonstrates awareness of how playwrights use form (not just words) to shape audience response. Examiners reward this kind of dramatic-form analysis highly.",
      },
      {
        technique: "Contrast / Antithesis",
        termUsed: '"Sheila\'s declaration, \'But these girls aren\'t cheap labour - they\'re people,\' employs antithesis to expose how the language of capitalism dehumanises the working class"',
        quote: '"But these girls aren\'t cheap labour  - they\'re people"',
        ao: "AO2",
        whyItScores: "The student identifies the structural opposition using the formal term 'antithesis' and then explains what the contrast does thematically  - it exposes how capitalism 'reduces individuals to economic categories'. The follow-up insight that 'the fact that it needs to be stated at all is Priestley's real indictment' is genuinely original thinking.",
      },
      {
        technique: "Role Reversal (Structural)",
        termUsed: '"Priestley constructs this role reversal - a young woman judging her own parents - as an argument about where moral authority should reside in post-war Britain"',
        quote: '"I\'m ashamed of you as well  - yes both of you"',
        ao: "AO2",
        whyItScores: "This is structural analysis: the student identifies a power shift within the play's relationships and connects it to the thematic argument. The conceptual point  - moral authority should rest 'not with the old order of inherited wealth and social position, but with the generation willing to confront uncomfortable truths'  - goes beyond the text to make an argument about society itself.",
      },
      {
        technique: "Tricolon",
        termUsed: '"The final warning, \'fire and blood and anguish,\' constitutes a prophetic tricolon of devastating dramatic irony"',
        quote: '"fire and blood and anguish"',
        ao: "AO2",
        whyItScores: "The student names the technique ('prophetic tricolon') and immediately links it to dramatic irony  - for the 1945 audience, 'this is not a prophecy but a historical fact'. This shows simultaneous AO2 + AO3 integration, which is a Grade 9 hallmark.",
      },
      {
        technique: "Contextual Framing (1912/1945)",
        termUsed: '"Writing in 1945, when Britain was deciding between the Conservative promise of a return to pre-war norms and the Labour vision of a welfare state"',
        quote: "N/A  - contextual framing",
        ao: "AO3",
        whyItScores: "The student doesn't treat context as a separate bolt-on  - it's woven into the opening argument. The 1912/1945 dual time frame is used to explain why Priestley wrote the play, not just when. This is AO3 done properly: context shapes interpretation and authorial purpose.",
      },
      {
        technique: "Cyclical Structure",
        termUsed: '"The cyclical structure of the ending, in which a second inspector is announced, returns the audience to the Inspector\'s central ultimatum"',
        quote: "structural analysis of the ending",
        ao: "AO2",
        whyItScores: "Discussing the play's overall structure shows awareness of form beyond sentence-level language. The student explains that 'the play refuses its audience a comfortable resolution because Priestley's argument is that the question of social responsibility is never settled'. This is sophisticated AO2: structure as a tool of persuasion.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "Clear thesis that directly addresses the question. The 1945 context is established immediately and the play is framed as 'a direct political address'. The student names the BBC Postscripts broadcasts and the 1945 election context, showing precise AO3 integration from the outset.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "Top-band introductions argue, not describe. This one frames the Inspector's speech as Priestley's 'mouthpiece to articulate the socialist case for collective responsibility'. The AO3 is integrated into the thesis  - not separated into its own paragraph  - which is a Grade 9 marker.",
      },
      {
        paragraph: 2,
        label: "Inspector's Speech  - Imperative, Tripling, Organic Metaphor",
        whatExaminerSees: "Dense analysis of the speech's opening: the imperative 'just remember this' is explained, tripling of 'millions' connected to systemic scale, and the organic metaphor 'intertwined' contrasted with Birling's insistence on separation. Multiple AO2 points woven together with contextual understanding.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The student moves seamlessly from micro-level word analysis ('just' as an adverb that 'strips away complexity') to macro-level political argument (exposing 'the entire structure of Edwardian capitalism'). The observation that the accumulation of human qualities 'restores individuality to the people that capitalism reduces to statistics' is conceptualised, original thinking.",
      },
      {
        paragraph: 3,
        label: "The Inspector  - Short Declaratives and Collectivism",
        whatExaminerSees: "The anaphoric 'We' identified and explained as 'deliberately inclusive'. Metaphor 'one body' linked to 1 Corinthians 12:27. Tricolon 'fire and blood and anguish' analysed as prophetic dramatic irony. Multiple AO2 points connected to AO3 purpose.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The observation that Priestley's biblical imagery is 'strategic' because it 'reaches beyond political affiliation to a universal moral authority' shows the student reading authorial choices as deliberate persuasive strategies. The dramatic irony analysis  - 'this is not a prophecy but a historical fact'  - demonstrates simultaneous AO2 and AO3 integration, which is a Grade 9 hallmark.",
      },
      {
        paragraph: 4,
        label: "Breaking Dramatic Convention",
        whatExaminerSees: "The student identifies a 'crucial break in dramatic convention' where the Inspector 'breaks the fourth wall'. The analysis connects form to political purpose: 'you cannot simply watch this play and go home unchanged.'",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Recognising that the Inspector 'ceases to function as a realistic character' and analysing the fourth-wall break demonstrates awareness of dramatic form beyond dialogue. This is what examiners describe as a 'conceptualised response'  - the student sees the play as a constructed argument, not just a sequence of speeches.",
      },
      {
        paragraph: 5,
        label: "Mr Birling  - Capitalist Individualism",
        whatExaminerSees: "Birling's philosophy identified as the ideological counterpoint the Inspector's speech dismantles. Repetition of 'his own' analysed conceptually. Dramatic irony of the Titanic connected to a 'structural argument' about ruling-class delusion. The student demonstrates whole-text awareness by linking different moments across the play.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The student explains that Priestley 'has already undermined Birling's credibility' so that the Inspector's collectivist argument lands with full force. The insight that 'their certainty about economic matters deserves the same scepticism as their certainty about the Titanic' is a sharp structural argument that links two moments across the play. This is top-band AO2.",
      },
      {
        paragraph: 6,
        label: "Sheila  - Generational Hope",
        whatExaminerSees: "Antithesis identified in 'cheap labour' vs 'people'. Sheila's role reversal analysed as an argument about where moral authority should reside. The 1945 audience context  - 'on the verge of voting in a Labour government'  - is integrated naturally into the character analysis.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The insight that 'the fact that it needs to be stated at all is Priestley's real indictment of the Birling class' is the kind of original thinking that defines Grade 9. Tracking Sheila from Act 1 to Act 3 demonstrates whole-text understanding. The contextual link to the 1945 election is woven into the argument, not bolted on.",
      },
      {
        paragraph: 7,
        label: "Older Generation  - Refusal to Change / Conclusion",
        whatExaminerSees: "Birling's 'The whole thing's different now' analysed as evidence that his concern 'was never ethical but reputational'. Cyclical structure identified. The essay ends by returning to the Inspector's central ultimatum: 'fire and blood and anguish'. The final sentence argues that 'the question of social responsibility is never settled'.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion escalates rather than summarising. The observation that Birling's relief exposes the 'fundamental moral failure of the capitalist class' is a precise moral judgement. The cyclical structure analysis  - 'the play refuses its audience a comfortable resolution'  - shows awareness of how dramatic structure shapes audience response. The final sentence  - 'the cost of failure is measured in human lives'  - has genuine rhetorical force.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it treats the play as a constructed argument, not just a story. Every paragraph analyses what Priestley is doing and why  - from the adverb 'just' in the opening imperative to the cyclical structure of the ending. Techniques are identified by name ('anaphoric', 'antithesis', 'prophetic tricolon') and always explained in terms of their effect on the audience and Priestley's political purpose. Context is woven into the argument throughout  - the 1945 election, the BBC Postscripts, the Labour welfare state  - rather than separated into a bolt-on paragraph. The essay's seven-paragraph structure moves logically from the Inspector's final speech through wider-play evidence to a conclusion that returns to his central ultimatum, demonstrating whole-text understanding and sustained argumentative control.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
  {
    question:
      "How and why does Priestley present Mr Birling as a foolish and dangerous character in An Inspector Calls?",
    grade: "Grade 9 (exemplar)",
    essay: `Priestley presents Mr Birling at the height of his self-assurance in Act 1, delivering a speech that encapsulates the laissez-faire capitalist ideology the play will systematically dismantle. Priestley constructs Birling not as a unique individual but as a dramatic type - a representative of the Edwardian industrialist class whose arrogance and selfishness, in Priestley's view, directly caused the social conditions that led to two World Wars. For a 1945 audience deciding between Churchill's Conservatives and Attlee's Labour, Birling is Priestley's portrait of what happens when those in power refuse to accept responsibility for those beneath them.

The speech opens with Birling's patronising appeal to "you youngsters," establishing a generational hierarchy in which age and wealth automatically confer moral authority. This is precisely the assumption Priestley's play exists to destroy. The parenthetical "I've learnt in the good hard school of experience" is a cliche that reveals Birling's intellectual poverty - he presents received wisdom as personal insight, performing authority rather than possessing it. The central declaration, "a man has to mind his own business and look after himself and his own," is not merely a personal opinion; it is the articulation of the entire capitalist philosophy that the Beveridge Report of 1942 sought to replace. The repetition of the possessive pronoun "his own" reveals how this worldview shrinks moral responsibility to the self and immediate family, rendering the suffering of the working class - the Eva Smiths and John Smiths - literally invisible. Priestley is arguing that this is not merely selfish but dangerous: it is the ideology that allowed factory owners to pay starvation wages, that allowed councils to ignore slum housing, and that ultimately allowed nations to slide into war.

The most structurally significant moment in this speech is its interruption. The stage direction "We hear the sharp ring of a front door bell" silences Birling mid-sentence - his capitalist worldview is never permitted to reach its conclusion. Priestley's structural choice here is deliberate and symbolic: the doorbell represents the arrival of social conscience, and it speaks louder than all of Birling's rhetoric. The adjective "sharp" connotes something that cuts through pretension, puncturing the "pink and intimate" atmosphere of bourgeois self-congratulation. Birling's trailing "and -" leaves his philosophy permanently incomplete, and this incompleteness is Priestley's point: individualism has no answer to the moral questions the Inspector will raise. It can only be silenced by them.

Priestley has already ensured that the audience distrusts Birling before this speech. His prediction that the Titanic is "unsinkable, absolutely unsinkable" is a masterful use of dramatic irony: the 1945 audience knows the ship sank on its maiden voyage, killing over 1,500 people. This is not merely a joke at Birling's expense - Priestley is making a structural argument. By demonstrating that Birling is catastrophically wrong about a factual matter, Priestley primes the audience to recognise that he is equally wrong about his moral philosophy. The intensifier "absolutely" compounds the irony: the more certain Birling sounds, the more deluded the audience knows him to be. Priestley follows this with "nobody wants war," another prediction the audience knows to be fatally incorrect. The cumulative effect is devastating: by the time Birling delivers this philosophy speech, his authority has already been destroyed.

Priestley further presents Birling as a man whose entire social identity is a performance. The stage directions describe him as "provincial in his speech," revealing that his upper-class manner is adopted, not natural - he is playing a role to secure social advancement. His anxiety over the port - "you ought to like this port... it's exactly the same port your father gets" - exposes a desperate need to prove himself equal to Gerald Croft's aristocratic family. This matters because Priestley is exposing the fundamental hypocrisy of the capitalist class: Birling held civic office as Lord Mayor and pursues a knighthood, yet dismisses "community and all that nonsense." His public roles were instruments of status, not expressions of duty. For a 1945 audience, this hypocrisy had a specific political resonance - it echoed the behaviour of the industrialists and politicians whom Priestley blamed for the failures of the inter-war period.

Birling's most damning characteristic is his refusal to change, which Priestley contrasts with Sheila to sharpen the play's argument about generational responsibility. Upon learning the Inspector may not be genuine, Birling responds with immediate relief: "The whole thing's different now." The adjective "different" does not indicate moral reassessment; it indicates that the threat of public scandal has been removed, and with it any motivation for self-examination. This is Priestley's diagnosis of the capitalist class: they will only behave responsibly when forced to by external consequences, never from genuine conscience. Eric's accusation, "You're not the kind of father a chap could go to when he's in trouble," exposes the personal cost of Birling's ideology - he has built a family on obedience and material provision rather than moral guidance, mirroring how the Edwardian ruling class governed: maintaining order through wealth and authority while failing to provide genuine social leadership. The cyclical ending, with a second inspector on the way, ensures that the moral test Birling failed will recur - just as his incomplete speech will echo through the play until someone finishes the sentence with the right answer.`,
    annotations: [
      { phrase: "unsinkable, absolutely unsinkable", note: "Dramatic irony  - Titanic discredits Birling's authority", colour: "red" },
      { phrase: "provincial in his speech", note: "Stage direction  - performing a class he wasn't born into", colour: "orange" },
      { phrase: "The whole thing's different now", note: "Birling learns nothing  - reputation over redemption", colour: "purple" },
      { phrase: "You're not the kind of father", note: "Eric's accusation  - patriarchal failure exposed", colour: "blue" },
    ],
    techniqueDissections: [
      {
        technique: "Dramatic Irony",
        termUsed: '"His prediction that the Titanic is \'unsinkable, absolutely unsinkable\' is a masterful use of dramatic irony"',
        quote: '"unsinkable, absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "The student names dramatic irony confidently and then makes a sharp structural move: 'By demonstrating that Birling is catastrophically wrong about a factual matter, Priestley primes the audience to recognise that he is equally wrong about his moral philosophy.' This shows genuine critical thinking about cumulative dramatic effect, not a memorised response.",
      },
      {
        technique: "Intensifier (Word-Level Analysis)",
        termUsed: '"The intensifier \'absolutely\' compounds the irony: the more certain Birling sounds, the more deluded the audience knows him to be"',
        quote: '"absolutely unsinkable"',
        ao: "AO2",
        whyItScores: "Zooming into a single word ('absolutely') and explaining how it backfires shows micro-level analysis. The student spots a paradox  - an intensifier that undermines rather than strengthens  - which is the kind of original observation that examiners reward at the top band.",
      },
      {
        technique: "Repetition",
        termUsed: '"The repetition of the possessive pronoun \'his own\' reveals how this worldview shrinks moral responsibility to the self and immediate family"',
        quote: '"look after himself and his own"',
        ao: "AO2",
        whyItScores: "The student links repetition to its ideological effect  - the repeated words shrink 'moral responsibility to the self and immediate family, rendering the suffering of the working class... literally invisible'. The analytical move from language feature to political consequence is what pushes AO2 to the top band.",
      },
      {
        technique: "Structural Positioning",
        termUsed: '"Priestley\'s structural choice here is deliberate and symbolic: the doorbell represents the arrival of social conscience, and it speaks louder than all of Birling\'s rhetoric"',
        quote: "structural analysis  - placement of Birling's speech",
        ao: "AO2",
        whyItScores: "The student explicitly names this as a 'structural choice' that is 'deliberate and symbolic'. The analysis that 'individualism has no answer to the moral questions the Inspector will raise. It can only be silenced by them' reads structure as meaning with genuine impact. This is AO2 at its most sophisticated.",
      },
      {
        technique: "Stage Directions",
        termUsed: '"The stage directions describe him as \'provincial in his speech,\' revealing that his upper-class manner is adopted, not natural"',
        quote: '"provincial in his speech"',
        ao: "AO2",
        whyItScores: "Analysing stage directions (not just dialogue) demonstrates awareness of dramatic form. The student's insight  - that Birling is 'playing a role to secure social advancement'  - connects a production detail to a character argument about performance and class. This is AO2 at its best: form revealing character.",
      },
      {
        technique: "Hypocrisy / Contradiction",
        termUsed: '"Birling held civic office as Lord Mayor and pursues a knighthood, yet dismisses \'community and all that nonsense\'"',
        quote: '"community and all that nonsense"',
        ao: "AO1",
        whyItScores: "The student exposes a direct contradiction in Birling's character  - his public roles were 'instruments of status, not expressions of duty'. This is critical analysis at its sharpest  - using the text against itself to build an argument. The precise phrasing shows confident analytical control.",
      },
      {
        technique: "Social Performance / Artifice",
        termUsed: '"His anxiety over the port - \'you ought to like this port... it\'s exactly the same port your father gets\' - exposes a desperate need to prove himself equal to Gerald Croft\'s aristocratic family"',
        quote: '"you ought to like this port... it\'s exactly the same port your father gets"',
        ao: "AO3",
        whyItScores: "The student reads the port scene as social performance, connecting it to Birling's class insecurity and 'a desperate need to prove himself equal'. This is AO3 integrated naturally into character analysis  - understanding how Edwardian class anxiety drives behaviour. Context is used to explain the character, not added as a separate paragraph.",
      },
      {
        technique: "Patronising Tone / Power Dynamics",
        termUsed: '"Birling\'s patronising appeal to \'you youngsters,\' establishing a generational hierarchy in which age and wealth automatically confer moral authority"',
        quote: '"you youngsters"',
        ao: "AO2",
        whyItScores: "The student identifies tone and power dynamics  - not just what Birling says but how he uses it to 'establish a generational hierarchy'. The analysis that 'This is precisely the assumption Priestley's play exists to destroy' connects this moment to the play's entire dramatic purpose, which is evaluative writing at the top band.",
      },
      {
        technique: "Representative Character / Typicality",
        termUsed: '"Priestley constructs Birling not as a unique individual but as a dramatic type - a representative of the Edwardian industrialist class"',
        quote: "conceptual argument about Birling's function",
        ao: "AO3",
        whyItScores: "Seeing the character as 'a dramatic type' and representative of a class is the hallmark of a Grade 9 response. The student reads Birling as Priestley's political argument made flesh  - for the 1945 audience, he is 'Priestley's portrait of what happens when those in power refuse to accept responsibility for those beneath them.'",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "The thesis frames Birling as 'not a unique individual but a dramatic type - a representative of the Edwardian industrialist class'. This tells the examiner the essay will analyse Birling as a political construct, not just describe a character. The 1945 election context is embedded in the opening.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "Top-band AO1 requires a 'critical, exploratory, conceptualised response'. This introduction frames Birling as 'Priestley's portrait of what happens when those in power refuse to accept responsibility'  - a political argument, not a character description. The confident, direct voice signals an assured writer.",
      },
      {
        paragraph: 2,
        label: "Act 1 Speech  - Patronising Appeal and Possessive Pronouns",
        whatExaminerSees: "The patronising 'you youngsters' is identified as establishing a 'generational hierarchy'. The cliche 'the good hard school of experience' is analysed as 'intellectual poverty'. The repetition of 'his own' is explained as shrinking 'moral responsibility to the self'. Multiple AO2 points build a cumulative argument.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The student makes a sharp analytical move: the cliche 'reveals Birling's intellectual poverty - he presents received wisdom as personal insight, performing authority rather than possessing it.' This distinction between genuine and performed authority is genuinely original critical thinking. The contextual link to the Beveridge Report shows precise AO3 integration.",
      },
      {
        paragraph: 3,
        label: "Structural Interruption  - The Doorbell",
        whatExaminerSees: "The student identifies 'the most structurally significant moment' and explains the symbolic meaning of the doorbell: 'the arrival of social conscience'. The adjective 'sharp' is analysed at word level. Birling's trailing 'and -' is read as permanent incompleteness.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The insight that 'individualism has no answer to the moral questions the Inspector will raise. It can only be silenced by them' is a powerful conceptual argument about dramatic structure. The student reads the doorbell as symbolic, the adjective 'sharp' as 'puncturing the pink and intimate atmosphere', and the dash as leaving Birling's philosophy 'permanently incomplete'. This is structure read as meaning at the highest level.",
      },
      {
        paragraph: 4,
        label: "Titanic and Dramatic Irony",
        whatExaminerSees: "Dramatic irony named and explained as a structural device with cumulative effect. The intensifier 'absolutely' is analysed at word level  - 'the more certain Birling sounds, the more deluded the audience knows him to be'. The second prediction ('nobody wants war') compounds the effect.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The student makes a structural argument: Priestley uses factual wrongness to prime the audience against Birling's moral philosophy. The paradox about the intensifier is genuinely original critical thinking. The cumulative analysis  - Titanic, then war prediction, then philosophy speech  - shows the student reading the play as a carefully constructed sequence, not isolated moments.",
      },
      {
        paragraph: 5,
        label: "Social Performance  - Stage Directions and Class Hypocrisy",
        whatExaminerSees: "Three pieces of evidence woven into one argument about artifice: stage directions ('provincial in his speech'), the port scene ('a desperate need to prove himself equal'), and the Lord Mayor contradiction. Stage directions are analysed alongside dialogue.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The student exposes the contradiction  - 'Birling held civic office as Lord Mayor and pursues a knighthood, yet dismisses community and all that nonsense'  - using the text against itself. The insight that 'His public roles were instruments of status, not expressions of duty' is a precise critical judgement. The 1945 political resonance is integrated naturally, not bolted on.",
      },
      {
        paragraph: 6,
        label: "Refusal to Change  - Conclusion",
        whatExaminerSees: "Birling's 'The whole thing's different now' analysed as evidence that concern was 'never ethical but reputational'. Eric's accusation used as evidence against Birling. The cyclical ending connected to Birling's incomplete speech. The student widens from character to class to history.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion tracks Birling's moral failure through multiple lenses: parental failure (Eric's accusation reveals 'a family built on obedience and material provision rather than moral guidance'), class failure (mirroring 'how the Edwardian ruling class governed'), and structural failure (the cyclical ending ensures 'the moral test Birling failed will recur'). The final image  - 'his incomplete speech will echo through the play until someone finishes the sentence with the right answer'  - has genuine rhetorical force.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because the student never treats Birling as just a character  - he is consistently analysed as 'a dramatic type' and a political symbol representing the Edwardian industrialist class. Evidence is drawn from across the play (dialogue, stage directions, other characters' words like Eric's accusation), and every technique is linked to Priestley's purpose. The writing demonstrates genuine analytical control  - from micro-level word analysis ('absolutely' as a self-undermining intensifier, 'sharp' as puncturing bourgeois comfort) to macro-level structural arguments (the doorbell as 'the arrival of social conscience', the cyclical ending as a recurring moral test). Context is integrated naturally throughout, connecting Birling's hypocrisy to the broader political question facing the 1945 audience.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
  {
    question:
      "How does Priestley use the character of Sheila to present ideas about change in An Inspector Calls?",
    grade: "Grade 9 (exemplar)",
    essay: `Priestley presents Sheila's moral transformation as the central argument for change in the play. By Act 3, she ceases to be merely a character in a family drama and becomes the voice of Priestley's argument about change itself. Having progressed from the sheltered, "pleased with life" young woman of Act 1 to a figure of genuine moral authority, Sheila now directly confronts her parents' refusal to accept the lesson of the evening. Priestley, writing in 1945 when Britain was deciding whether to build a welfare state or return to pre-war norms, uses Sheila's journey to present change not as a comfortable process but as a painful and necessary confrontation with one's own complicity in injustice.

In Act 3, Sheila's accusation to her parents  - "You're pretending everything's just as it was before"  - reveals the depth of her transformation. The verb "pretending" carries enormous weight because it reframes her parents' denial not as ignorance but as a deliberate, conscious performance. This distinction is central to Priestley's argument about social responsibility: the Birlings are not incapable of understanding the Inspector's message - they understood it perfectly well during the evening - but they are actively choosing to reject it now that the external pressure has been removed. This is Priestley's indictment of the entire capitalist class: their moral failure is not one of understanding but of will. Eric's response, "I'm not pretending," aligns him with Sheila and reinforces the generational divide that structures the entire play, while Sheila's clarification, "No, but these two are," uses a demonstrative pronoun that creates deliberate distance - as though the moral gap between the generations has become too wide for the word "parents" to bridge. Priestley is dramatising the political argument that the younger generation must not merely inherit the old order but actively break from it.

The declarative "whoever that Inspector was, it was anything but a joke" reveals the depth of Sheila's transformation. Her moral growth exists independently of the Inspector's identity - whether he was a real police officer, a supernatural figure, or a hoax is, for Sheila, entirely immaterial, because the truth of what the family did to Eva Smith remains unchanged regardless. Priestley is making a philosophical point here about the nature of moral responsibility: it does not depend on who is watching or what the consequences might be. The triplet structure "You knew it then. You began to learn something. And now you've stopped" employs short, accusatory sentences that mirror the Inspector's own rhetorical style, suggesting that Sheila has internalised his moral framework. The verb "stopped" implies a deliberate choice to halt a process of growth, and Priestley's argument is that this wilful regression - this choosing to un-know what you have already understood - is more morally culpable than never having known at all. The phrase "the same old way" carries particular resonance for the 1945 audience: Priestley is drawing a direct parallel between the Birlings' desire to return to their pre-Inspector comfort and the broader political question of whether Britain would revert to the failed pre-war social order that had produced mass unemployment, the General Strike, and ultimately two World Wars.

Priestley carefully constructs the starting point from which this transformation is measured. The stage directions describe Sheila as "very pleased with life and rather excited" - phrases that establish her as a product of bourgeois privilege who has never needed to question the system that produced her comfort. Her engagement to Gerald is framed less as a love story than as a business transaction: Birling's "your engagement to Sheila means a tremendous lot to me" places the emphasis on "to me," revealing that Sheila's marriage serves her father's social ambitions rather than her own happiness. The opening lighting, described as "pink and intimate," functions as a visual metaphor for the entire Birling worldview: rose-tinted, warm, and fundamentally dishonest. Priestley establishes this sheltered world so precisely because the audience must understand exactly what Sheila is surrendering when she chooses moral truth over comfortable ignorance. By Act 3, she has left the "pink and intimate" world permanently - she has entered the "brighter and harder" light of moral reality, and Priestley's point is that this cannot be reversed. Once you have seen the human cost of your privilege, you cannot unsee it.

Sheila's awakening begins when she declares "But these girls aren't cheap labour - they're people." The antithesis forces the audience to confront how the language of capitalism dehumanises workers by reducing them to economic categories - "cheap labour" is not just an economic term but a moral judgement that denies individuality and human worth. Crucially, Priestley does not exempt Sheila from culpability: she too acted against Eva, having her dismissed from Milwards out of jealousy. Her acceptance of blame - "I know I'm to blame - and I'm desperately sorry" - is what distinguishes her from her parents. The adverb "desperately" connotes genuine anguish rather than performative regret, and Priestley contrasts this with Mrs Birling's sole concern about "a public scandal" to argue that authentic moral growth requires accepting guilt independently of social consequences. Sheila does not need an audience to feel remorse; her parents only care about appearances. This distinction is Priestley's central argument about the nature of change: it must come from genuine conscience, not from fear of punishment.

This Act 3 confrontation represents the culmination of this journey. Sheila has effectively become the Inspector's successor, carrying his moral authority forward after his departure and directing it at her own family. For the 1945 audience, the general election was fundamentally a choice between Birling's worldview and the Inspector's, and Sheila functions as Priestley's proof that change is possible - but only through the painful process of confronting your own complicity, accepting genuine shame, and refusing to retreat into the "same old way." The cyclical ending, with a real inspector announced, suggests that this moral test will recur until society passes it. Priestley's final question is not whether Sheila will pass it again - the audience can be confident she will - but whether they themselves will follow her example, or whether they will join the older Birlings in pretending that nothing has changed.`,
    annotations: [
      { phrase: "very pleased with life", note: "Stage direction - initial naivety and privilege", colour: "orange" },
      { phrase: "cheap labour - they're people", note: "Antithesis - awakening begins with recognising humanity", colour: "green" },
      { phrase: "I know I'm to blame - and I'm desperately sorry", note: "Genuine remorse vs performative regret", colour: "blue" },
      { phrase: "I'm ashamed of you as well", note: "Role reversal - child gains moral authority over parents", colour: "purple" },
    ],
    techniqueDissections: [
      {
        technique: "Stage Directions",
        termUsed: '"The stage directions describe Sheila as \'very pleased with life and rather excited\'"',
        quote: '"very pleased with life and rather excited"',
        ao: "AO2",
        whyItScores: "Analysing stage directions (not just dialogue) demonstrates awareness of dramatic form. The student explains these as establishing Sheila as 'a product of bourgeois privilege who has never needed to question the system that produced her comfort'. This baseline is essential  - her later transformation has a clear starting point to measure against. This is smart structural thinking.",
      },
      {
        technique: "Economic Framing / Subtext",
        termUsed: '"Her engagement to Gerald is framed less as a love story than as a business transaction"',
        quote: "engagement scene analysis",
        ao: "AO1",
        whyItScores: "The student reads beneath the surface. Instead of taking the engagement at face value, they identify the economic subtext  - Birling's emphasis on 'to me' reveals that 'Sheila's marriage serves her father's social ambitions rather than her own happiness'. This inferential reading, seeing what is NOT explicitly stated, is what examiners reward at the top band.",
      },
      {
        technique: "Contrast / Antithesis",
        termUsed: '"The antithesis forces the audience to confront how the language of capitalism dehumanises workers by reducing them to economic categories"',
        quote: '"But these girls aren\'t cheap labour - they\'re people"',
        ao: "AO2",
        whyItScores: "The student identifies the structural opposition using the formal term 'antithesis' and then makes a genuine analytical leap: 'the fact that it needs to be stated at all is Priestley's real indictment of the Birling class'. This insight  - that basic decency has become radical  - is the kind of original thinking that comes from real engagement with the text, not formula-following.",
      },
      {
        technique: "Simplicity as Technique",
        termUsed: '"The significance of this line lies in its simplicity: Sheila states something that should be self-evident"',
        quote: '"But these girls aren\'t cheap labour - they\'re people"',
        ao: "AO2",
        whyItScores: "This is a sophisticated observation: the student analyses the ABSENCE of elaborate technique as itself a meaningful choice by Priestley. The argument that 'the fact that it needs to be stated at all is Priestley's real indictment' is a genuinely original conceptual point that goes beyond standard technique-spotting.",
      },
      {
        technique: "Adverb Analysis (Word-Level)",
        termUsed: '"The adverb \'desperately\' connotes genuine anguish rather than performative regret"',
        quote: '"I know I\'m to blame - and I\'m desperately sorry"',
        ao: "AO2",
        whyItScores: "Isolating a single adverb and explaining its function shows precise language analysis. The comparative move  - contrasting Sheila's genuine anguish with Mrs Birling's sole concern about 'a public scandal'  - demonstrates evaluative skills across the whole text, which is a key Grade 9 skill.",
      },
      {
        technique: "Role Reversal (Structural)",
        termUsed: '"Sheila has effectively become the Inspector\'s successor, carrying his moral authority forward after his departure and directing it at her own family"',
        quote: '"You\'re pretending everything\'s just as it was before"',
        ao: "AO2",
        whyItScores: "The student identifies a structural power shift  - Sheila as the Inspector's successor  - and connects it to the thematic argument about where moral authority resides. This scene dramatises this role reversal: Sheila is now the one interrogating and judging, while her parents are the ones being exposed.",
      },
      {
        technique: "Diction / Word Choice",
        termUsed: '"The verb \'pretending\' carries enormous weight because it reframes her parents\' denial not as ignorance but as a deliberate, conscious performance"',
        quote: '"pretending everything\'s just as it was before"',
        ao: "AO2",
        whyItScores: "Single-word analysis linked to the older generation's entire worldview. The student makes a crucial distinction: 'the Birlings are not incapable of understanding the Inspector's message... but they are actively choosing to reject it'. One word illuminates the difference between ignorance and wilful ignorance. This is how Grade 9 students use evidence.",
      },
      {
        technique: "Light Symbolism / Stage Directions",
        termUsed: '"she has left the \'pink and intimate\' world permanently - she has entered the \'brighter and harder\' light of moral reality"',
        quote: '"pink and intimate" / "brighter and harder" (opening stage directions)',
        ao: "AO2",
        whyItScores: "Connecting Sheila's moral journey to the play's lighting symbolism demonstrates whole-text understanding. The student argues that 'Once you have seen the human cost of your privilege, you cannot unsee it'  - linking Act 1 stage directions to Sheila's Act 3 moral position. This is a key Grade 9 skill: reading the play as a coherent structure, not isolated moments.",
      },
      {
        technique: "Priestley's Purpose / Audience",
        termUsed: '"Sheila functions as Priestley\'s proof that change is possible - but only through the painful process of confronting your own complicity"',
        quote: "contextual framing of Sheila's role",
        ao: "AO3",
        whyItScores: "The student frames Sheila's entire function as Priestley's proof of a political argument about change. The 1945 election context is embedded naturally: 'the general election was fundamentally a choice between Birling's worldview and the Inspector's.' This is AO3 at its best: context explains authorial purpose, not just historical setting.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction",
        whatExaminerSees: "Thesis names the transformation clearly: Sheila progresses from 'the sheltered, pleased with life young woman of Act 1 to a figure of genuine moral authority'. The 1945 context is embedded from the outset. The student frames change as 'a painful and necessary confrontation with one's own complicity in injustice'.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "The introduction does not describe Sheila  - it makes an argument about why Priestley created her. Framing change as 'painful and necessary' rather than comfortable immediately signals a conceptualised response. The student sees characters as dramatic constructs with a political purpose, not just people in a story.",
      },
      {
        paragraph: 2,
        label: "Act 3 Confrontation  - 'Pretending' and the Generational Divide",
        whatExaminerSees: "The verb 'pretending' is analysed with precision: it 'reframes her parents' denial not as ignorance but as a deliberate, conscious performance'. Eric's alignment with Sheila is noted. The demonstrative pronoun 'these two' is explained as creating 'deliberate distance'. Multiple AO2 points build a single argument.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The crucial distinction  - 'the Birlings are not incapable of understanding the Inspector's message... but they are actively choosing to reject it'  - is the kind of original moral reasoning that defines Grade 9. The student reads a single word ('pretending') and builds it into an argument about 'the entire capitalist class'. The demonstrative pronoun analysis shows micro-level awareness serving macro-level argument.",
      },
      {
        paragraph: 3,
        label: "Moral Independence  - 'Whoever That Inspector Was'",
        whatExaminerSees: "The student identifies that Sheila's moral growth 'exists independently of the Inspector's identity'. The triplet 'You knew it then. You began to learn something. And now you've stopped' is analysed as mirroring 'the Inspector's own rhetorical style'. The phrase 'the same old way' is connected to the 1945 political question.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The philosophical point  - that 'moral responsibility does not depend on who is watching or what the consequences might be'  - elevates the analysis beyond technique-spotting into genuine ethical reasoning. The AO3 connection between 'the same old way' and 'the broader political question of whether Britain would revert to the failed pre-war social order' is seamlessly integrated.",
      },
      {
        paragraph: 4,
        label: "Starting Point  - Privilege and Naivety",
        whatExaminerSees: "Stage directions analysed with precision: 'very pleased with life' establishes privilege. The engagement is read as an economic transaction serving Birling's social ambitions. The 'pink and intimate' lighting is explained as 'a visual metaphor for the entire Birling worldview: rose-tinted, warm, and fundamentally dishonest.'",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Establishing a baseline is essential for character-change essays. The student explains that Priestley 'establishes this sheltered world so precisely because the audience must understand exactly what Sheila is surrendering when she chooses moral truth over comfortable ignorance.' This shows sophisticated structural thinking  - the starting point exists to make the transformation meaningful.",
      },
      {
        paragraph: 5,
        label: "Moral Awakening  - Antithesis and Genuine Remorse",
        whatExaminerSees: "Antithesis identified in 'cheap labour' vs 'people'. The student acknowledges Sheila's own culpability (balanced analysis). The adverb 'desperately' is isolated and contrasted with Mrs Birling's concern about 'a public scandal'. The distinction between genuine conscience and fear of consequences is precisely articulated.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Balanced character analysis  - acknowledging flaws while tracking growth  - shows critical maturity. The central argument  - 'authentic moral growth requires accepting guilt independently of social consequences'  - is the student's own moral reasoning, applied to the text. The insight that 'Sheila does not need an audience to feel remorse; her parents only care about appearances' is a sharp comparative judgement.",
      },
      {
        paragraph: 6,
        label: "Conclusion  - Priestley's Strategic Purpose",
        whatExaminerSees: "Sheila framed as 'the Inspector's successor, carrying his moral authority forward'. The 1945 election context is invoked directly: 'a choice between Birling's worldview and the Inspector's'. The cyclical ending is connected to the audience's own moral choice. The final sentence distinguishes between Sheila's certainty and the audience's open question.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion elevates character analysis into political argument. The final question  - 'whether they themselves will follow her example, or whether they will join the older Birlings in pretending that nothing has changed'  - is confident, original, and mirrors Priestley's own rhetorical strategy. The verb 'pretending' returns from the opening analysis, giving the essay a satisfying structural coherence.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it tracks Sheila's transformation with precision, using evidence from across the entire play (stage directions from Act 1, dialogue from Acts 1-3, structural analysis of the ending). The student consistently asks 'why did Priestley do this?' rather than just 'what does this mean?', which is the key distinction between Grade 8 and Grade 9. The quality of the insights  - that 'pretending' reframes denial as 'a deliberate, conscious performance', that moral responsibility 'does not depend on who is watching', that Sheila's simplicity in stating 'they're people' is itself Priestley's real indictment, that the 'pink and intimate' world has been left permanently  - shows a student thinking with genuine originality. Context is integrated naturally throughout, connecting Sheila's journey to the 1945 election and the choice between 'Birling's worldview and the Inspector's'.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
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
      "The Inspector is about to leave the Birling household after revealing how each family member contributed to Eva Smith's death. He delivers his final speech directly to the family  - and, symbolically, to the audience.",
    extract: `But just remember this. One Eva Smith has gone  - but there are millions and millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering and chance of happiness, all intertwined with our lives, and what we think and say and do. We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish. Good night.`,
    annotations: [
      { phrase: "millions and millions and millions", note: "Tripling / hyperbole  - emphasises the vast scale of suffering caused by inequality. The repetition forces the audience to confront the systemic nature of the problem.", colour: "red", side: "left" as const },
      { phrase: "their lives, their hopes and fears, their suffering and chance of happiness", note: "List  - humanises the working class by giving them emotions and aspirations. Counteracts the Birlings' tendency to view workers as statistics.", colour: "green", side: "right" as const },
      { phrase: "intertwined with our lives", note: "Organic metaphor  - society is a connected web, not isolated individuals. Directly opposes Birling's individualist philosophy.", colour: "blue", side: "left" as const },
      { phrase: "We don't live alone", note: "Short declarative  - simple moral truth. Refutes Birling's 'a man has to mind his own business'.", colour: "purple", side: "right" as const },
      { phrase: "We are members of one body", note: "Organic metaphor echoing 1 Corinthians 12:27 (Body of Christ). Gives socialist message religious and moral authority.", colour: "red", side: "left" as const },
      { phrase: "We are responsible for each other", note: "Anaphoric 'We are'  - the pronoun includes everyone, refusing to let anyone exclude themselves from moral duty.", colour: "green", side: "right" as const },
      { phrase: "fire and blood and anguish", note: "Prophetic tricolon  - builds in intensity. For the 1945 audience, this refers to the two World Wars that have already happened. Devastating dramatic irony.", colour: "orange", side: "left" as const },
    ],
    overallAnalysis: [
      "The Inspector breaks naturalistic convention  - this is not a character speaking but Priestley delivering a political manifesto to the 1945 audience.",
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
    extract: `But the way some of these cranks talk and write now, you'd think everybody has to look after everybody else, as if we were all mixed up together like bees in a hive  - community and all that nonsense. But take my word for it, you youngsters  - and I've learnt in the good hard school of experience  - that a man has to mind his own business and look after himself and his own  - and  -`,
    annotations: [
      { phrase: "cranks", note: "Dismissive noun  - Birling ridicules anyone who believes in collective responsibility, positioning himself as the voice of reason. Ironic, since the 'cranks' are proved right.", colour: "red", side: "left" as const },
      { phrase: "everybody has to look after everybody else", note: "Birling mocks the exact principle the Inspector will later assert as moral truth. Dramatic irony  - the audience knows Birling is wrong.", colour: "blue", side: "right" as const },
      { phrase: "mixed up together like bees in a hive", note: "Birling dismisses the organic metaphor of society as interconnected  - yet the play proves this is exactly how society works.", colour: "green", side: "left" as const },
      { phrase: "community and all that nonsense", note: "Birling dismisses community despite holding civic positions (Lord Mayor, magistrate). Exposes his hypocrisy  - public service was for status, not duty.", colour: "purple", side: "right" as const },
      { phrase: "the good hard school of experience", note: "Clich\u00e9  - Birling presents himself as wise and authoritative, but his 'experience' has taught him nothing about morality.", colour: "orange", side: "left" as const },
      { phrase: "a man has to mind his own business and look after himself and his own", note: "The play's anti-thesis. Repetition of 'his own' reveals selfishness. Priestley positions this before the Inspector arrives so the play demolishes it.", colour: "red", side: "right" as const },
      { phrase: "and  -", note: "The dash interrupts Birling mid-sentence  - he is cut off by the doorbell (the Inspector's arrival). Priestley literally silences capitalism with the arrival of social conscience.", colour: "green", side: "left" as const },
    ],
    overallAnalysis: [
      "Priestley uses Birling as a dramatic straw man  - his philosophy is presented to be knocked down by the rest of the play.",
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
    extract: `SHEILA: I tell you  - whoever that Inspector was, it was anything but a joke. You knew it then. You began to learn something. And now you've stopped. You're ready to go on in the same old way.

BIRLING: (amused) And you're not, eh?

SHEILA: No, because I remember what he said, how he looked, and what he made me feel. Fire and blood and anguish. And it frightens me the way you talk, and I can't listen to any more of it.

MRS BIRLING: You're overtired. In the morning you'll feel better and then you'll see things more sensibly.

SHEILA: I'm ashamed of you as well  - yes both of you.`,
    annotations: [
      { phrase: "whoever that Inspector was", note: "Sheila recognises that the Inspector's identity is irrelevant  - the moral lesson stands regardless. This is the mature, critical thinking Priestley wants from his audience.", colour: "green", side: "right" as const },
      { phrase: "You began to learn something. And now you've stopped.", note: "Short, punchy sentences  - Sheila speaks with moral clarity. The accusation is devastating: the parents had the chance to change and chose not to.", colour: "blue", side: "left" as const },
      { phrase: "the same old way", note: "Represents pre-war complacency and class arrogance. For the 1945 audience, 'the same old way' is what caused two World Wars.", colour: "red", side: "right" as const },
      { phrase: "how he looked, and what he made me feel", note: "Sheila's transformation is emotional and embodied, not merely intellectual. She has internalised the Inspector's values.", colour: "purple", side: "left" as const },
      { phrase: "Fire and blood and anguish", note: "Sheila repeats the Inspector's prophecy  - she has become his successor, carrying his message forward after he has left.", colour: "orange", side: "right" as const },
      { phrase: "You're overtired", note: "Mrs Birling dismisses Sheila's moral awakening as hysteria  - a patronising, gendered response that refuses to engage with the substance of her argument.", colour: "red", side: "left" as const },
      { phrase: "I'm ashamed of you as well  - yes both of you", note: "Role reversal  - child judges parents. Moral authority is earned through conscience, not inherited through age. The dash adds emphasis and defiance.", colour: "green", side: "right" as const },
    ],
    overallAnalysis: [
      "Sheila functions as the audience's proxy  - she has seen the truth and refuses to unsee it.",
      "The generational divide is starkly drawn: the parents retreat into denial while Sheila advances into moral courage.",
      "Mrs Birling's dismissal of Sheila as 'overtired' reflects a patriarchal society that silences women's moral voices.",
      "Priestley positions Sheila as post-war Britain's hope  - the next generation who will build the welfare state.",
    ],
  },
  {
    title: "Mrs Birling's Refusal of Responsibility",
    act: "Act 2",
    context:
      "Mrs Birling is being questioned about her role as chair of the Brumley Women's Charity Organisation, and her refusal to help Eva Smith when she came seeking assistance.",
    extract: `MRS BIRLING: Yes. She came to us claiming she was Mrs Birling  - which was quite untrue. She gave herself ridiculous airs. She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position.

INSPECTOR: (very deliberately) Her position? Her position was that she was penniless, alone, desperately ill, and that one of you was entirely responsible.

MRS BIRLING: I used my influence to have it refused.

INSPECTOR: You refused her even though you knew what might happen to her afterwards?

MRS BIRLING: As if a girl of that sort would ever refuse money!`,
    annotations: [
      { phrase: "claiming she was Mrs Birling", note: "Dramatic irony  - the audience knows (or suspects) Eva used the name because Eric, a Birling, is the father. Mrs Birling's outrage at the 'theft' of her name blinds her to the truth.", colour: "red", side: "left" as const },
      { phrase: "ridiculous airs", note: "Mrs Birling cannot conceive that a working-class woman could have dignity. Class prejudice prevents her from seeing Eva as human.", colour: "purple", side: "right" as const },
      { phrase: "fine feelings and scruples", note: "The irony is devastating  - Eva had genuine moral scruples (refusing Eric's stolen money), while Mrs Birling, who claims moral authority, has none.", colour: "blue", side: "left" as const },
      { phrase: "a girl in her position", note: "Mrs Birling reduces Eva to a class category. The Inspector's echo  - 'Her position?'  - forces her to confront Eva's actual circumstances.", colour: "orange", side: "right" as const },
      { phrase: "I used my influence to have it refused", note: "The key confession. Mrs Birling weaponises her charity position  - an institution meant to help becomes an instrument of class cruelty.", colour: "red", side: "left" as const },
      { phrase: "a girl of that sort", note: "Dehumanising phrase  - 'that sort' reduces Eva to a type, denying her individuality. Mrs Birling projects her own class assumptions onto someone she refuses to understand.", colour: "green", side: "right" as const },
    ],
    overallAnalysis: [
      "Mrs Birling had the final opportunity to save Eva's life and deliberately chose not to  - making her arguably the most morally culpable character.",
      "Priestley exposes how institutions meant to help the poor are controlled by the very class responsible for their suffering.",
      "The Inspector's 'very deliberately' stage direction signals that he is building a trap  - Mrs Birling is about to condemn the 'father' without realising it is her own son.",
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
      "Priestley presents responsibility as the central moral test of the play  - those who accept it (Sheila, Eric) represent hope, while those who refuse it (Mr & Mrs Birling) represent the moral failure that caused two World Wars.",
    intro:
      "Establish the 1912/1945 dual time frame. State that Priestley uses the Inspector as a mouthpiece to argue for collective social responsibility and against capitalist individualism.",
    parts: [
      {
        label: "Point 1",
        point: "Birling rejects responsibility  - represents capitalist individualism",
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
        point: "Sheila accepts responsibility  - represents younger generation's hope",
        quote: '"But these girls aren\'t cheap labour  - they\'re people"',
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
      "Return to the argument: Priestley uses every dramatic tool  - irony, structure, characterisation  - to prove that social responsibility is not optional. The 1945 audience must choose: learn like Sheila, or repeat the catastrophe like Birling.",
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
        analysis: "Patronising tone ('Come, come') = attempt to reassert patriarchal authority. Birling learns nothing  - dismisses moral lesson when consequences disappear. Values reputation over redemption.",
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
        quote: '"I\'m ashamed of you as well  - yes both of you"',
        analysis: "Role reversal: child judges parents. Moral authority earned through conscience, not inherited. 'Ashamed' = she judges by the Inspector's moral standard.",
      },
      {
        label: "Point 4",
        point: "Eric confronts his father's failure as both parent and moral leader",
        quote: '"You\'re not the kind of father a chap could go to when he\'s in trouble"',
        analysis: "Strikes at patriarchal failure  - wealth without wisdom. Displaced self-reference ('a chap') reveals deep emotional damage. Birling = representative failed father of the nation.",
      },
      {
        label: "Point 5",
        point: "The cyclical ending places moral hope with the young",
        quote: '"That was the police. A girl has just died... an Inspector is on his way here"',
        analysis: "The test will repeat. For the older Birlings = devastating return of denied truth. For Sheila/Eric = validation. Priestley asks: which generation does the audience belong to?",
      },
    ],
    conclusion:
      "Priestley leaves no doubt: the older generation has failed. The play is a call to the 1945 audience  - the young who must build a better Britain  - to reject the Birlings' complacency and embrace the Inspector's moral vision.",
  },
];

// ═══════════════════════════════════════════════════
//  EXAM QUESTIONS (Paper 2 Section A — no extract)
// ═══════════════════════════════════════════════════

export const INSPECTOR_CALLS_EXAM_QUESTIONS: ExamPrepQuestion[] = [
  {
    question: "How and why does Priestley present Mr Birling as a foolish character in An Inspector Calls?",
    theme: "Character: Mr Birling",
  },
  {
    question: "How does Priestley present ideas about social responsibility in An Inspector Calls?",
    theme: "Social Responsibility",
  },
  {
    question: "How does Priestley present Mrs Birling's attitude to the working class in An Inspector Calls?",
    theme: "Class & Power",
  },
  {
    question: "How does Priestley use the younger generation to present ideas about change in An Inspector Calls?",
    theme: "Generational Divide",
  },
  {
    question: "How does Priestley present Gerald's relationship with Eva Smith in An Inspector Calls?",
    theme: "Gender & Exploitation",
  },
  {
    question: "How does Priestley use the opening of the play to present the theme of artifice and pretence in An Inspector Calls?",
    theme: "Artifice & Pretence",
  },
  {
    question: "How does Priestley present the effects of the Inspector's investigation on the Birling family in An Inspector Calls?",
    theme: "Social Responsibility",
  },
  {
    question: "How does Priestley present the conflict between the Inspector and Mr Birling in An Inspector Calls?",
    theme: "Social Responsibility",
  },
];
