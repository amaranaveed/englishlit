// ─── JEKYLL AND HYDE  - Exam Preparation Kit ───

import type { ExampleEssay } from "./exam-prep-inspector-calls";

// ═══════════════════════════════════════════════════
//  EXAMPLE ESSAYS  - Grade 9 exemplars written to
//  demonstrate the method (not real exam responses)
// ═══════════════════════════════════════════════════

export const JEKYLL_HYDE_ESSAYS: ExampleEssay[] = [
  {
    question:
      "Starting with this extract, how does Stevenson present the theme of duality in Jekyll and Hyde? Write about how Stevenson presents duality in this extract and in the novella as a whole.",
    extract: `I thus drew steadily nearer to that truth, by whose partial discovery I have been doomed to such a dreadful shipwreck: that man is not truly one, but truly two. I say two, because the state of my own knowledge does not pass beyond that point. Others will follow, others will outstrip me on the same lines; and I hazard the guess that man will be ultimately known for a mere polity of multifarious, incongruous, and independent denizens.`,
    extractAct: "Chapter 10: Henry Jekyll's Full Statement of the Case",
    grade: "Grade 9 (exemplar)",
    essay: `In this extract, Jekyll articulates the philosophical conclusion at the heart of the novella: "that man is not truly one, but truly two." Stevenson employs Jekyll's full statement to argue that duality is not a flaw in human nature but rather its defining feature, and that Victorian society's obsession with respectability only intensifies internal contradictions by forcing them underground. The extract represents the moment at which the novella's central argument is stated explicitly, and the language Jekyll uses reveals as much about the nature of that duality as the claim itself.

The most significant element of the extract is the phrase "doomed to such a dreadful shipwreck," which frames the discovery of duality as a catastrophe rather than an enlightenment. The metaphor of the shipwreck is revealing: it implies that Jekyll's journey towards self-knowledge has destroyed him, not saved him. The verb "doomed" carries the weight of predestination - this was not an accident but a fate sealed by the very act of investigation. Stevenson appears to be arguing that the truth about human nature is inherently dangerous, particularly within a society that has built its entire moral framework upon the assumption that good men are simply good. The extract also deploys remarkably scientific language: "polity of multifarious, incongruous, and independent denizens." The noun "polity" frames the self as a political entity - a community of competing interests rather than a unified soul. The adjectives "multifarious" and "incongruous" suggest not merely duality but multiplicity, and the word "independent" implies that these inner selves operate autonomously, beyond the control of the conscious will. This is a radical proposition for 1886: the self is not a kingdom with a single ruler but a fractious parliament of contradictory impulses.

Furthermore, Jekyll's admission that "the state of my own knowledge does not pass beyond that point" reveals a crucial intellectual humility that complicates his role as narrator. He does not claim to have fully understood human nature - he concedes that "others will follow, others will outstrip me on the same lines." This acknowledgement anticipates Freud's later work on the unconscious mind, and Stevenson positions Jekyll as a scientist who has glimpsed a truth far larger than his experiment can contain. The repetition of "others will" creates a sense of an unfolding scientific frontier, suggesting that Jekyll's discovery is not an endpoint but an opening - and a terrifying one. The word "hazard" in "I hazard the guess" conveys risk and uncertainty, reinforcing the idea that this knowledge is perilous.

In the wider novella, Stevenson develops this theme of duality through Hyde himself, who functions as the physical manifestation of Jekyll's repressed self. Jekyll describes himself earlier in the statement as someone "committed to a profound duplicity of life," and the significance of the word "committed" is considerable. It renders his double life almost vocational - something he is devoted to, not something that occurred by accident. He proceeds to describe how he "concealed my pleasures" and felt "an almost morbid sense of shame," and the adjective "morbid" carries substantial weight. It links shame to sickness, which is precisely Stevenson's point: the Victorian demand for perfect respectability does not merely repress individuals - it renders them ill. The repression itself becomes the disease. Hyde, then, is not truly a separate person. He is the consequence of half a personality being kept suppressed. Stevenson describes him as "pale and dwarfish" with "an impression of deformity," yet no character can precisely identify the source of his wrongness. Enfield states that he gives "a strong feeling of deformity" even though he "can't specify the point." Hyde does not possess a clear physical deformity because he represents something that cannot be seen - the hidden desires and impulses that respectable Victorians refused to acknowledge. His physical wrongness is fundamentally a moral wrongness that others can sense but not articulate. The fact that Hyde is smaller than Jekyll is equally important. Jekyll describes him as "less robust and less developed," which is logically consistent: Hyde represents the part of Jekyll that was never permitted to grow. He was stunted by years of repression, and this is precisely why he is so violent when he finally emerges.

Elsewhere in the novella, Stevenson also employs structure and setting to mirror the theme articulated in the extract. The entire story is told through limited perspectives - Utterson, Enfield, Lanyon - and none of them can perceive the full picture. The reader encounters fragments, locked doors, sealed letters, and wills that defy explanation. The narrative itself possesses a split personality. The truth only emerges at the very end, in Jekyll's confession, which means the reader experiences the same process of uncovering hidden truths that the characters do. This is not merely a clever plot device; it is the theme made structural. Jekyll's house physically enacts this duality as well: a respectable front door on the square and a "blistered and distained" back entrance in the alley. The house is the novella in miniature: a polished public face concealing something rotten behind it. The fog that pervades the novella functions in the same manner - it obscures, it conceals, it renders everything uncertain. Stevenson employs London itself as a metaphor for the respectable self: impressive from the outside, deeply compromised underneath.

Ultimately, the extract's declaration that "man is not truly one, but truly two" resonates through every element of the novella. Stevenson published this in 1886, at the centre of an era obsessed with propriety and moral purity, and his argument is essentially that all that purity is a performance. The harder one strives to be only good, the more violently the repressed half will eventually break free. Hyde is not a monster from outside - he was inside Jekyll all along, and the extract's vision of the self as "a mere polity of multifarious, incongruous, and independent denizens" suggests that Stevenson's warning extends beyond Jekyll to encompass all of humanity.`,
    annotations: [
      { phrase: "doomed to such a dreadful shipwreck", note: "Extract  - self-knowledge as catastrophe, not enlightenment", colour: "red" },
      { phrase: "a mere polity of multifarious, incongruous, and independent denizens", note: "Extract  - the self as fractious parliament, not unified soul", colour: "purple" },
      { phrase: "committed to a profound duplicity of life", note: "Jekyll's confession  - duality as deliberate practice, not accident", colour: "red" },
      { phrase: "an impression of deformity", note: "Hyde's indescribable wrongness  - moral corruption sensed but unspeakable", colour: "purple" },
      { phrase: "blistered and distained", note: "Back door of Jekyll's house  - physical duality of respectable/corrupt", colour: "orange" },
      { phrase: "Man is not truly one, but truly two", note: "Jekyll's thesis  - universal duality, not individual failing", colour: "green" },
    ],
    techniqueDissections: [
      {
        technique: "Metaphor (Shipwreck)",
        termUsed: '"The metaphor of the shipwreck is revealing: it implies that Jekyll\u2019s journey towards self-knowledge has destroyed him, not saved him"',
        quote: '"doomed to such a dreadful shipwreck"',
        ao: "AO2",
        whyItScores: "The student identifies the shipwreck metaphor from the extract and explains its implication with precision: self-knowledge is destruction. The connection to the verb 'doomed' deepens the analysis by introducing connotations of predestination. This kind of layered, word-level engagement with the extract is exactly what examiners reward at the top band.",
      },
      {
        technique: "Scientific Lexis / Diction",
        termUsed: '"The noun \u201cpolity\u201d frames the self as a political entity - a community of competing interests rather than a unified soul"',
        quote: '"a mere polity of multifarious, incongruous, and independent denizens"',
        ao: "AO2",
        whyItScores: "The student isolates a single word from the extract and unpacks its connotations with originality. The observation that 'polity' reframes the self as a political structure rather than a unified identity is a genuinely conceptual reading. The further analysis of 'multifarious', 'incongruous', and 'independent' demonstrates systematic close reading of the extract's language.",
      },
      {
        technique: "Repetition / Anticipation",
        termUsed: '"The repetition of \u201cothers will\u201d creates a sense of an unfolding scientific frontier"',
        quote: '"Others will follow, others will outstrip me on the same lines"',
        ao: "AO2",
        whyItScores: "The student identifies repetition in the extract and explains its effect with precision - it creates a sense of ongoing discovery that extends beyond Jekyll. The contextual link to Freud's later work shows genuine understanding of Stevenson's anticipation of psychological theory, integrating AO3 naturally.",
      },
      {
        technique: "Diction / Word Choice",
        termUsed: '"the significance of the word \u201ccommitted\u201d is considerable. It renders his double life almost vocational"',
        quote: '"committed to a profound duplicity of life"',
        ao: "AO2",
        whyItScores: "The student isolates a single word and explains its connotations with precision. The observation that 'committed' makes hypocrisy sound vocational is genuinely original  - it reframes Jekyll's duplicity as active choice rather than passive weakness. This kind of word-level analysis, expressed with clarity and confidence, is exactly what examiners reward at the top band.",
      },
      {
        technique: "Semantic Field of Illness",
        termUsed: '"the adjective \u201cmorbid\u201d carries substantial weight. It links shame to sickness, which is precisely Stevenson\u2019s point"',
        quote: '"an almost morbid sense of shame"',
        ao: "AO2",
        whyItScores: "The student identifies how a single adjective connects two conceptual fields  - shame and disease  - and uses this to make a broader argument about Victorian repression as pathology. The assured, precise phrasing ('carries substantial weight') shows a student reasoning with control and confidence.",
      },
      {
        technique: "Deliberate Ambiguity",
        termUsed: '"Hyde does not possess a clear physical deformity because he represents something that cannot be seen"',
        quote: '"a strong feeling of deformity" / "can\u2019t specify the point"',
        ao: "AO2",
        whyItScores: "The student explains the effect of vagueness as a deliberate authorial choice, not a gap in description. Arguing that Hyde's indescribable appearance mirrors the unspeakable nature of Victorian repression is a conceptual leap that demonstrates genuine critical thinking beyond technique-spotting.",
      },
      {
        technique: "Symbolism (Physical Size)",
        termUsed: '"Hyde is smaller than Jekyll... Hyde represents the part of Jekyll that was never permitted to grow"',
        quote: '"less robust and less developed"',
        ao: "AO2",
        whyItScores: "Connecting Hyde's physical smallness to the psychological stunting caused by repression is a sophisticated symbolic reading. The student does not simply identify the detail  - they explain WHY it makes sense within the novella's logic. This shows the student is building an argument, not listing observations.",
      },
      {
        technique: "Narrative Structure / Limited Perspective",
        termUsed: '"The narrative itself possesses a split personality"',
        quote: "structural analysis of fragmented narration",
        ao: "AO2",
        whyItScores: "The student makes a striking conceptual claim  - that the novella's structure mirrors its theme. This is analysis of form, not just language. The vivid metaphor ('split personality') demonstrates the student is thinking creatively about how structure produces meaning, which is a hallmark of the highest band.",
      },
      {
        technique: "Symbolism (Architecture)",
        termUsed: '"The house is the novella in miniature: a polished public face concealing something rotten behind it"',
        quote: '"blistered and distained"',
        ao: "AO2",
        whyItScores: "The student reads the house as the novella's central symbol, connecting architecture to theme with clarity and precision. The phrase 'The house is the novella in miniature' is a confident analytical claim that demonstrates the student can move from specific detail to conceptual argument.",
      },
      {
        technique: "Contextual Framing (Victorian Respectability)",
        termUsed: '"Stevenson published this in 1886, at the centre of an era obsessed with propriety and moral purity"',
        quote: "N/A  - contextual framing",
        ao: "AO3",
        whyItScores: "Context is woven into the argument's conclusion, not separated into its own paragraph. The student uses 1886 publication to explain Stevenson's purpose  - attacking the performance of purity  - rather than just noting the date. This is AO3 integrated naturally into the essay's thesis.",
      },
      {
        technique: "Repression as Cause (Contextual Argument)",
        termUsed: '"the Victorian demand for perfect respectability does not merely repress individuals - it renders them ill. The repression itself becomes the disease"',
        quote: '"an almost morbid sense of shame"',
        ao: "AO3",
        whyItScores: "The student makes a causal argument connecting Victorian social norms to the novella's events. This isn't context bolted on  - it's context as explanation. The concise phrasing ('The repression itself becomes the disease') shows the student can distil a complex argument into a memorable formulation.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction  - Extract Thesis",
        whatExaminerSees: "Clear thesis that directly addresses the extract and takes a conceptual position: duality is not a flaw but a defining feature, made worse by Victorian repression. The student frames the extract as the moment where the novella's central argument is stated explicitly, setting up close analysis to follow.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "Top-band introductions establish a line of argument, not a summary. This one identifies the extract's function within the novella ('the moment at which the novella's central argument is stated explicitly') and makes a claim about Victorian repression that every subsequent paragraph will develop. The student immediately signals that they will engage with the extract's language, not just its content.",
      },
      {
        paragraph: 2,
        label: "Extract Analysis  - Shipwreck, Polity, and Scientific Language",
        whatExaminerSees: "Sustained close analysis of the extract's language. 'Doomed' and 'shipwreck' analysed at word level. The scientific register ('polity', 'multifarious', 'incongruous') unpacked systematically. The student moves from individual words to a conceptual argument about the self as 'a fractious parliament.' AO2-heavy paragraph with embedded AO3.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "This paragraph demonstrates exactly what examiners want to see in extract analysis: precise, word-level engagement that builds towards a conceptual argument. The observation that 'polity' reframes the self as a political entity is genuinely original. The contextual point about 1886 is woven into the argument seamlessly. This is top-band extract engagement.",
      },
      {
        paragraph: 3,
        label: "Extract Analysis  - Intellectual Humility and Anticipation of Freud",
        whatExaminerSees: "Continued extract analysis focusing on Jekyll's self-awareness. Repetition of 'others will' identified and explained. The word 'hazard' analysed for connotations of risk. The student connects the extract to Freud's later work, demonstrating genuine contextual understanding. The paragraph completes the extract analysis before the essay transitions outward.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The student maintains close focus on the extract across two full paragraphs, demonstrating sustained engagement rather than a token gesture. The observation about 'hazard' conveying risk and uncertainty is precisely the kind of word-level analysis that distinguishes Grade 9. The link to Freud is intelligent and purposeful, not decorative.",
      },
      {
        paragraph: 4,
        label: "Wider Novella  - Hyde and Jekyll's Duplicity",
        whatExaminerSees: "Smooth transition to the wider novella ('In the wider novella'). Two quotations analysed at word level ('committed', 'morbid'). Hyde's vague appearance analysed as deliberate authorial choice. Physical size connected to psychological stunting. Multiple AO2 points woven into a single flowing argument with integrated AO3.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The transition from extract to wider novella is handled with assurance. The word-level analysis is precise and original. The leap from 'morbid' to 'repression as disease' shows genuine critical thinking. The analysis of Hyde's indescribable appearance and physical smallness demonstrates whole-text awareness that extends the extract's argument into the broader narrative.",
      },
      {
        paragraph: 5,
        label: "Wider Novella  - Structure and Setting",
        whatExaminerSees: "The student analyses form, not just content. Fragmented narration connected to the theme of concealment. Architecture read as symbolism. Fog connected to theme of concealment. The student moves fluently between narrative structure, setting, and thematic argument.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "Analysing narrative structure  - not just language  - is a key Grade 9 skill. The student demonstrates awareness of how the novella is built (multiple narrators, sealed documents, withheld information) and explains why this matters thematically. The observation that Jekyll's house 'is the novella in miniature' is a bold, confident analytical claim. The fog analysis adds a further layer of whole-text awareness.",
      },
      {
        paragraph: 6,
        label: "Conclusion  - Linking Back to the Extract",
        whatExaminerSees: "Returns to the extract's key statement with new force. Publication date deployed strategically. The final sentence links the conclusion directly back to the extract's language ('a mere polity of multifarious, incongruous, and independent denizens'), giving the essay a satisfying circular structure.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion escalates rather than summarises. The student makes the argument universal, which mirrors Stevenson's own rhetorical strategy. The final insight  - that the extract's vision extends beyond Jekyll to all of humanity  - is a genuinely compelling articulation of the novella's central warning. The return to the extract's own language demonstrates the disciplined structure examiners reward.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it demonstrates sustained, precise engagement with the extract before broadening into a convincing whole-text argument. The first two analytical paragraphs remain tightly focused on the extract's language  - 'doomed', 'shipwreck', 'polity', 'multifarious', 'hazard'  - building a conceptual reading of Jekyll's scientific register and the implications of his discovery. The transition to the wider novella is handled smoothly, and the subsequent paragraphs analyse Hyde, narrative structure, and setting with equal confidence. Context is woven throughout  - never bolted on as a separate paragraph. The student's analytical authority is evident in precise formulations such as 'The repression itself becomes the disease' and 'The house is the novella in miniature.' The conclusion links back to the extract's language, giving the essay a disciplined circular structure that examiners specifically reward in extract-based responses.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
  {
    question:
      "Starting with this extract, how does Stevenson present Hyde as a frightening outsider? Write about how Stevenson presents Hyde as a frightening outsider in this extract and in the novella as a whole.",
    extract: `For the man trampled calmly over the child's body and left her screaming on the ground. It sounds nothing to hear, but it was hellish to see. It wasn't like a man; it was like some damned Juggernaut. I gave a view halloa, took to my heels, collared the gentleman, and brought him back to where there was already quite a group about the screaming child. He was perfectly cool and made no resistance, but gave me one look, so ugly that it brought out the sweat on me like running.`,
    extractAct: "Chapter 1: Story of the Door",
    grade: "Grade 9 (exemplar)",
    essay: `In this extract, Stevenson introduces Hyde through Enfield's account of the trampling incident, and even in this first encounter, Hyde is established as a figure who defies every category Victorian society relied upon to identify and contain danger. Stevenson presents Hyde as frightening not because he is alien to respectable Victorian society, but because he is a product of it - the outsider who emerged from inside, and whose true terror lies in the fact that nobody can quite articulate what is wrong with him.

The most disturbing element of the extract is the phrase "trampled calmly over the child's body," and the adverb "calmly" is what renders the scene so unsettling. Violence is expected to be passionate, chaotic - but Hyde's is cold and deliberate. There is no emotion in it, which makes it feel inhuman. The oxymoronic pairing of "trampled" and "calmly" forces the reader to confront a type of cruelty that cannot be explained by rage or impulse - it is violence stripped of any recognisable human motive. Enfield's subsequent comparison is equally significant: "It wasn't like a man; it was like some damned Juggernaut." The simile removes Hyde from the category of the human altogether, placing him alongside an unstoppable, crushing force. The word "Juggernaut" carries connotations of a vast, indifferent power that destroys without awareness, which transforms Hyde from a man committing a crime into something almost elemental. For a Victorian readership, the religious origins of "Juggernaut" - derived from the Hindu deity Jagannath, whose festival cart was rumoured to crush devotees - would have added an additional layer of exotic, non-Christian menace, positioning Hyde as something fundamentally outside Western moral frameworks.

The extract also reveals a crucial dimension of Hyde's outsider status through Enfield's inability to process what he has witnessed. The parenthetical "It sounds nothing to hear, but it was hellish to see" is a confession of linguistic failure - the event cannot be adequately communicated in words. The adjective "hellish" is the strongest term Enfield can summon, and it places the experience beyond ordinary moral vocabulary and into the realm of the demonic. Furthermore, Hyde's reaction after being apprehended is deeply unsettling: "He was perfectly cool and made no resistance, but gave me one look, so ugly that it brought out the sweat on me like running." The phrase "perfectly cool" echoes the earlier "calmly," reinforcing Hyde's inhuman composure. The word "ugly" applied to a look rather than a face suggests that Hyde's repulsiveness is something he projects actively, not simply something he possesses. The physical response Enfield describes - sweating "like running" - is a bodily, involuntary reaction, as though Hyde bypasses rational thought and triggers a primal fear response. Stevenson appears to be constructing Hyde as a figure who operates below the threshold of Victorian articulation: one can feel his wrongness, but one cannot describe it.

In the wider novella, Stevenson reinforces this pattern of inarticulate horror through the reactions of other characters. When Utterson finally meets Hyde face to face, he describes "a hissing intake of breath" and says Hyde gave "an impression of deformity without any nameable malformation." The sibilance in "hissing" is almost serpentine - it subtly links Hyde to Satan, the original outsider, cast out of heaven. However, the more significant phrase is "without any nameable malformation." The Victorians were obsessed with physiognomy - the belief that one could read an individual's moral character from their face - and Hyde completely undermines that system. One can feel his evil, but one cannot see it. This is far more frightening than a conventional monster, because it means the usual methods of identifying and categorising danger are rendered ineffective. Hyde slips through the net of respectable knowledge. Stevenson's use of Hyde's physical size generates further unease. Hyde is described as "pale and dwarfish" and "particularly small and particularly wicked-looking." Jekyll explains this by stating that Hyde is "less robust and less developed" because the evil side of his nature had been "less exercised." The smallness carries considerable symbolic weight. Hyde is the part of Jekyll that was kept hidden and starved, never permitted to develop naturally. He is stunted, and stunted things are often aggressive precisely because they have been confined. Stevenson constructs an argument about Victorian repression here: keep something caged long enough and it will not emerge tame.

Elsewhere in the novella, Stevenson positions Hyde as an outsider geographically. Hyde lives in Soho, which Stevenson describes as a district of "muddy ways, and slatternly passengers, and street lamps" with a "haggard shaft of daylight" struggling to penetrate the fog. Every element of this description suggests decay, moral corruption, and obscurity. Meanwhile, Jekyll lives in a "square of ancient, handsome houses" - the respectable face of London. The fact that Hyde moves between these two worlds, entering Jekyll's house through the "blistered and distained" back door, renders him a figure who transgresses boundaries. He does not belong neatly in either space. He haunts the thresholds between respectable and disreputable London, just as he haunts the threshold between Jekyll's public self and his private desires. For a Victorian readership deeply invested in social boundaries - between classes, between moral and immoral, between civilised and savage - a figure who crosses all of them is profoundly threatening.

Hyde is ultimately frightening because he represents the return of the repressed. He is not an outsider who arrives from somewhere else - he emerges from within the most respectable man in the novella. Stevenson published this in 1886, at the height of Victorian confidence in progress, science, and moral certainty, and his message is deeply subversive: the real danger is not out there in the streets of Soho. It is behind the polished front doors of respectable London, wearing a gentleman's face. The extract's depiction of Hyde as a figure who "trampled calmly" and gave a look "so ugly that it brought out the sweat on me like running" establishes the pattern that the entire novella develops: the reason nobody can describe what is wrong with Hyde is that describing him would mean admitting what respectable men are capable of - and that was the one thing Victorian society could never do.`,
    annotations: [
      { phrase: "trampled calmly over the child's body", note: "Extract  - oxymoronic pairing, violence without passion is more disturbing than rage", colour: "red" },
      { phrase: "like some damned Juggernaut", note: "Extract  - simile removing Hyde from the human, placing him alongside elemental force", colour: "red" },
      { phrase: "so ugly that it brought out the sweat on me like running", note: "Extract  - Hyde bypasses rational thought, triggers primal fear", colour: "orange" },
      { phrase: "without any nameable malformation", note: "Hyde breaks Victorian physiognomy  - evil can't be categorised or contained", colour: "purple" },
      { phrase: "pale and dwarfish", note: "Physical smallness as symbolic stunting  - repression produces deformity", colour: "orange" },
      { phrase: "muddy ways, and slatternly passengers", note: "Soho as moral geography  - setting externalises Hyde's corruption", colour: "blue" },
    ],
    techniqueDissections: [
      {
        technique: "Oxymoron / Juxtaposition",
        termUsed: '"the adverb \u201ccalmly\u201d is what renders the scene so unsettling. Violence is expected to be passionate, chaotic - but Hyde\u2019s is cold and deliberate"',
        quote: '"trampled calmly over the child\u2019s body"',
        ao: "AO2",
        whyItScores: "The student identifies the jarring combination of violence and calm in the extract without needing to use the formal term 'oxymoron.' Instead, they explain the effect by contrasting it with what the reader expects. This shows genuine analytical thinking  - the student is reasoning about why the word choice is disturbing, not just labelling it.",
      },
      {
        technique: "Simile / Cultural Allusion",
        termUsed: '"The simile removes Hyde from the category of the human altogether, placing him alongside an unstoppable, crushing force"',
        quote: '"It wasn\u2019t like a man; it was like some damned Juggernaut"',
        ao: "AO2",
        whyItScores: "The student analyses the Juggernaut simile from the extract at multiple levels: its connotations of indifferent, crushing power, and its cultural origins in Hindu religious tradition. The contextual observation about how Victorian readers would have perceived the exotic, non-Christian reference demonstrates sophisticated AO3 integration within what is primarily an AO2 point.",
      },
      {
        technique: "Linguistic Failure / The Unspeakable",
        termUsed: '"The parenthetical \u201cIt sounds nothing to hear, but it was hellish to see\u201d is a confession of linguistic failure"',
        quote: '"It sounds nothing to hear, but it was hellish to see"',
        ao: "AO2",
        whyItScores: "The student identifies a moment in the extract where language itself breaks down and reads this as a deliberate technique. The observation that Enfield cannot communicate what he witnessed - that the experience exceeds his vocabulary - is a sophisticated point about how Stevenson uses the limitations of narration to generate horror.",
      },
      {
        technique: "Physicality / Involuntary Response",
        termUsed: '"The physical response Enfield describes - sweating \u201clike running\u201d - is a bodily, involuntary reaction, as though Hyde bypasses rational thought and triggers a primal fear response"',
        quote: '"so ugly that it brought out the sweat on me like running"',
        ao: "AO2",
        whyItScores: "The student reads the extract's physical detail as evidence of Hyde operating below conscious thought. The analysis moves from surface description to psychological implication: Hyde does not frighten the mind - he frightens the body. This is precisely the kind of interpretive depth that examiners reward.",
      },
      {
        technique: "Sibilance",
        termUsed: '"The sibilance in \u201chissing\u201d is almost serpentine - it subtly links Hyde to Satan, the original outsider"',
        quote: '"a hissing intake of breath"',
        ao: "AO2",
        whyItScores: "The student names the technique and immediately connects it to a cultural reference (Satan as serpent). This moves beyond sound-spotting into intertextual analysis. The follow-up  - calling Satan 'the original outsider, cast out of heaven'  - ties the technique directly to the essay question about outsider status.",
      },
      {
        technique: "Subversion of Physiognomy",
        termUsed: '"The Victorians were obsessed with physiognomy - the belief that one could read an individual\u2019s moral character from their face - and Hyde completely undermines that system"',
        quote: '"without any nameable malformation"',
        ao: "AO3",
        whyItScores: "The student integrates Victorian pseudo-science (physiognomy) into their analysis of Hyde's appearance. This is AO3 at its best: historical context used to explain why a textual detail would be specifically frightening for the original audience. The phrase 'Hyde slips through the net of respectable knowledge' is vivid and original.",
      },
      {
        technique: "Symbolism (Physical Size)",
        termUsed: '"The smallness carries considerable symbolic weight. Hyde is the part of Jekyll that was kept hidden and starved, never permitted to develop naturally"',
        quote: '"pale and dwarfish" / "less robust and less developed"',
        ao: "AO2",
        whyItScores: "The student subverts the expectation that villains should be large and powerful, then explains the symbolic logic of Hyde's smallness. The argument that stunted things are 'aggressive precisely because they have been confined' connects physical description to the novella's argument about repression. This is symbolic reading with genuine intellectual energy.",
      },
      {
        technique: "Threshold Symbolism / Transgression",
        termUsed: '"He haunts the thresholds between respectable and disreputable London, just as he haunts the threshold between Jekyll\u2019s public self and his private desires"',
        quote: '"blistered and distained" back door',
        ao: "AO2",
        whyItScores: "The student uses the metaphor of 'thresholds' to connect setting to character to theme in a single sentence. The parallel structure ('haunts the thresholds... just as he haunts the threshold') is elegant and shows the student writing with control and precision. This kind of conceptual linking across multiple levels of the text is a Grade 9 hallmark.",
      },
      {
        technique: "Victorian Social Boundaries (Context)",
        termUsed: '"For a Victorian readership deeply invested in social boundaries - between classes, between moral and immoral, between civilised and savage - a figure who crosses all of them is profoundly threatening"',
        quote: "N/A  - contextual argument",
        ao: "AO3",
        whyItScores: "The student lists the specific binary oppositions that structured Victorian thinking and explains why Hyde threatens all of them simultaneously. This is AO3 used structurally  - it explains why Hyde's boundary-crossing would be particularly alarming in 1886. The triple contrast ('classes... moral and immoral... civilised and savage') shows precise historical understanding.",
      },
      {
        technique: "Ironic Reversal (Authorial Purpose)",
        termUsed: '"the real danger is not out there in the streets of Soho. It is behind the polished front doors of respectable London"',
        quote: "conclusion  - Stevenson's subversive argument",
        ao: "AO3",
        whyItScores: "The student articulates Stevenson's subversive inversion of Victorian assumptions about where danger comes from. This is AO3 integrated into the essay's culminating argument. The geographical contrast ('Soho' vs 'polished front doors') echoes the setting analysis earlier, giving the conclusion a satisfying structural coherence.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction  - Extract Engagement and Thesis",
        whatExaminerSees: "A bold, paradoxical thesis rooted in the extract: Hyde is frightening not as an alien force but as a product of respectability. The student immediately reframes the question  - outsider status is redefined as something generated from within  - and signals that the extract will be analysed closely before the essay broadens.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "The introduction doesn't describe the extract  - it makes an argument about what it reveals. The paradox ('the outsider who emerged from inside') is the kind of original framing that immediately signals top-band writing. AO3 is embedded in the thesis: Victorian society's inability to name its own desires.",
      },
      {
        paragraph: 2,
        label: "Extract Analysis  - 'Calmly' and the Juggernaut Simile",
        whatExaminerSees: "Sustained close reading of the extract. 'Calmly' explained through contrast with expected violence. The Juggernaut simile analysed for connotations and cultural context. The student engages with the extract's language at word level across multiple quotations. AO2-heavy paragraph with well-integrated AO3.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The analysis of 'calmly' is sharp and original  - the student explains why calm violence is more disturbing than passionate violence. The Juggernaut analysis moves through multiple layers: literal meaning, connotation, cultural origin. The Victorian context about exotic menace is seamlessly integrated. This is exemplary extract analysis.",
      },
      {
        paragraph: 3,
        label: "Extract Analysis  - Linguistic Failure and Primal Fear",
        whatExaminerSees: "Continued extract focus. 'Hellish' analysed as the limit of Enfield's vocabulary. 'Perfectly cool' linked to earlier 'calmly.' The physical response ('sweat on me like running') read as evidence of primal, sub-rational fear. The student constructs a sustained argument about Hyde operating below Victorian articulation.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Two full paragraphs of extract analysis demonstrates genuine engagement, not a token gesture. The argument about linguistic failure is sophisticated: the student reads what Enfield cannot say as more significant than what he can. The analysis of sweating as an involuntary bodily response is original and convincing. The final sentence ('operates below the threshold of Victorian articulation') is a powerful conceptual formulation.",
      },
      {
        paragraph: 4,
        label: "Wider Novella  - Physiognomy, Sibilance, and Physical Size",
        whatExaminerSees: "Smooth transition to the wider novella. Sibilance identified and linked to Satan. Physiognomy introduced as Victorian context and used to explain why Hyde's indescribability is specifically frightening. Hyde's physical smallness read symbolically. The final sentence is memorable and precise.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The transition from extract to wider novella is handled with confidence. The integration of physiognomy as context is exemplary  - it's not a bolt-on fact but a framework that explains the textual detail. The symbolic reading of Hyde's size as stunted growth connects to the repression argument. The closing formulation ('keep something caged long enough and it will not emerge tame') is vivid, controlled prose.",
      },
      {
        paragraph: 5,
        label: "Wider Novella  - Setting, Geography, and Boundary Transgression",
        whatExaminerSees: "Multiple settings compared and contrasted. Hyde read as a transgressive figure who crosses boundaries. The threshold metaphor connects setting, character, and theme in one move. Victorian social boundaries listed and explained. Dense, confident analysis.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The paragraph demonstrates whole-text awareness by drawing together multiple settings. The threshold argument is sophisticated  - it connects physical movement between spaces to the transgression of social and moral categories. The AO3 is powerful: the student explains exactly which Victorian boundaries Hyde threatens and why that matters.",
      },
      {
        paragraph: 6,
        label: "Conclusion  - Linking Back to the Extract",
        whatExaminerSees: "Returns to the thesis with new force. Publication date deployed strategically. The final sentences return explicitly to the extract's language ('trampled calmly', 'so ugly that it brought out the sweat on me'), linking the conclusion back to the starting point. Closes with confident authority.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "The conclusion doesn't summarise  - it delivers the essay's most powerful argument. The return to the extract's language in the final sentence gives the essay a disciplined circular structure that examiners reward in extract-based responses. The insight that Hyde's indescribability protects Victorian respectability from self-knowledge is genuinely original.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it opens with sustained, precise engagement with the extract  - two full paragraphs of close reading that analyse 'calmly', the Juggernaut simile, 'hellish', 'perfectly cool', and 'sweat on me like running' before broadening to the wider novella. The extract-first structure is handled with discipline, and the transition outward is smooth and purposeful. The student analyses language ('hissing', 'pale and dwarfish'), structure (geographical contrasts, threshold symbolism), and context (physiognomy, Victorian social boundaries) with equal confidence. Quotations are embedded fluently and analysed at word level. The student's analytical authority drives the essay throughout, with precise formulations such as 'Hyde slips through the net of respectable knowledge' and 'keep something caged long enough and it will not emerge tame.' The conclusion returns to the extract's own language, giving the essay a circular structure that demonstrates the disciplined approach examiners specifically reward in extract-based questions.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
  {
    question:
      "Starting with this extract, how does Stevenson use setting to create atmosphere and reflect the theme of duality? Write about how Stevenson uses setting in this extract and in the novella as a whole.",
    extract: `Two doors from one corner, on the left hand going east, the line was broken by the entry of a court; and just at that point, a certain sinister block of building thrust forward its gable on the street. It was two storeys high; showed no window, nothing but a door on the lower storey and a blind forehead of discoloured wall on the upper; and bore in every feature the marks of prolonged and sordid negligence. The door, which was equipped with neither bell nor knocker, was blistered and distained.`,
    extractAct: "Chapter 1: Story of the Door",
    grade: "Grade 9 (exemplar)",
    essay: `In this extract, Stevenson describes the rear entrance to Jekyll's house - the door that Hyde uses - and transforms what could be a simple piece of scene-setting into a symbolic statement about the duality at the heart of the novella. Stevenson does not merely set his story in Victorian London; he transforms London itself into a character that embodies the moral contradictions of the age. Every detail of this extract carries a double meaning, and this appears to stem from Stevenson's understanding that a city built on respectability and repression would naturally develop a split personality of its own.

The extract's most striking feature is its personification of the building. Stevenson writes that the block "thrust forward its gable on the street," and the verb "thrust" is aggressive and intrusive - it suggests the building is not passively occupying space but actively imposing itself, forcing its presence upon the streetscape. This is significant because the building represents the hidden, disreputable side of Jekyll's existence: it does not wait quietly in the background but pushes itself forward, just as Hyde's impulses will eventually overpower Jekyll's restraint. The phrase "a blind forehead of discoloured wall" extends the personification further. The word "blind" denies the building the capacity for sight or self-awareness, and "forehead" renders it almost human - a face without eyes, a body without consciousness. The adjective "discoloured" adds the suggestion of bruising or disease, as though the building itself is marked by some kind of corruption. Stevenson constructs a building that looks like a person who has been damaged, which is precisely what Jekyll's hidden self is: a part of him that has been suppressed, neglected, and allowed to decay.

The extract also emphasises absence and denial in a manner that mirrors the novella's broader theme of concealment. The building "showed no window, nothing but a door" - it offers no transparency, no way of seeing inside. The door "was equipped with neither bell nor knocker," which removes the possibility of communication or social exchange. This is a structure that refuses to participate in the normal intercourse of Victorian public life. Every detail describes something that is not there: no windows, no bell, no knocker. Stevenson constructs the setting through negation, which is precisely how Hyde himself functions in the novella - he is defined by what others cannot see, cannot name, and cannot describe. The phrase "prolonged and sordid negligence" is particularly important. The adjective "sordid" carries moral connotations of degradation and shame, while "prolonged" implies that this neglect is not accidental but sustained over time. This mirrors Jekyll's own situation: his repressed desires have been neglected for so long that they have become sordid, and the physical decay of the door is the outward manifestation of that inner moral decline. The final detail - "blistered and distained" - is visceral, almost bodily. "Blistered" suggests burned or diseased skin, while "distained" carries connotations of both staining and dishonour. The door is not merely old; it is marked, scarred, and shamed.

In the wider novella, the extract's building is revealed to be the back entrance to Jekyll's house, and this duality of architecture becomes central to Stevenson's argument. The front entrance faces "a square of ancient, handsome houses," with a door that has "a great air of wealth and comfort." The adjectives tell the story on their own: "handsome" and "wealth" versus "blistered" and "distained." Two doors, one building - Stevenson has created a house that is literally respectable from one angle and corrupt from another. The effectiveness of this image lies in the fact that it is not two separate buildings. It is the same house. The respectability and the degradation are physically connected, sharing walls and foundations. This is Stevenson's entire argument about human nature compressed into architecture: the good and the evil are not in opposition - they share the same body.

Elsewhere in the novella, Stevenson extends this atmospheric duality to London itself. The fog is pervasive, and it achieves far more than a Gothic mood. When Utterson visits Soho to find Hyde's lodgings, Stevenson describes "a great chocolate-coloured pall lowered over heaven" and "the first fog of the season." The noun "pall" is particularly striking - it denotes a cloth draped over a coffin, which immediately associates the fog with death and concealment. The phrase "lowered over heaven" adds a spiritual dimension: the fog is blocking out the sky, cutting the city off from anything higher or purer. Soho itself is described with "muddy ways, and slatternly passengers, and street lamps, which had never been extinguished or had been kindled afresh to combat this mournful reinvasion of darkness." That image of the street lamps - either never turned off or relit against encroaching dark - is remarkable. It suggests a place locked in permanent battle against darkness, where light is always losing. The adjective "mournful" personifies the darkness, making it feel almost sentient, as though the city itself is grieving. Stevenson connects Soho to the concept of moral failure - this is where London's underside lives, the place respectable gentlemen visit but never admit to visiting. The contrast between interiors and exteriors reinforces this: Jekyll's cabinet - the private laboratory where the transformations occur - is the architectural equivalent of the unconscious mind, the place where the unacceptable happens out of sight. Every locked door, every sealed letter, every refused conversation is both a plot device and a thematic statement about how Victorian London maintained its illusions.

Ultimately, the extract's image of a "sinister block of building" with its "blistered and distained" door establishes the principle that governs every setting in the novella: every place exists in pairs, and every pair communicates the same proposition. The handsome square and the blistered back door. The fog that conceals and the lamps that fail. The private cabinet and the public consulting room. Writing in an era when London was the capital of the world's largest empire and simultaneously home to some of its worst poverty, Stevenson employs the physical city to expose the lie that respectability meant goodness. The true atmosphere of this novella is not fog or darkness - it is the suffocating pressure of keeping up appearances, and the creeping terror of what happens when that pretence can no longer be sustained. The extract captures this perfectly: a building that shows nothing, reveals nothing, and invites no contact - the architectural embodiment of Victorian repression.`,
    annotations: [
      { phrase: "thrust forward its gable on the street", note: "Extract  - personification, the building aggressively intrudes on the streetscape", colour: "red" },
      { phrase: "a blind forehead of discoloured wall", note: "Extract  - personification as damaged human face, corruption made visible", colour: "red" },
      { phrase: "blistered and distained", note: "Extract  - visceral, bodily diction suggesting disease and dishonour", colour: "orange" },
      { phrase: "a great chocolate-coloured pall lowered over heaven", note: "Fog as death-shroud over the city  - concealment as spiritual and moral darkness", colour: "purple" },
      { phrase: "mournful reinvasion of darkness", note: "Personified darkness reclaiming Soho  - light perpetually losing the battle", colour: "orange" },
      { phrase: "the suffocating pressure of keeping up appearances", note: "Student's own conceptual summary  - atmosphere redefined as social repression", colour: "green" },
    ],
    techniqueDissections: [
      {
        technique: "Personification (Architecture)",
        termUsed: '"the verb \u201cthrust\u201d is aggressive and intrusive - it suggests the building is not passively occupying space but actively imposing itself"',
        quote: '"thrust forward its gable on the street"',
        ao: "AO2",
        whyItScores: "The student isolates a single verb from the extract and explains its connotations with precision. The argument that the building's aggressive posture mirrors Hyde's eventual overpowering of Jekyll is a conceptual link between setting and character that demonstrates top-band analytical thinking.",
      },
      {
        technique: "Personification (The Blind Forehead)",
        termUsed: '"The word \u201cblind\u201d denies the building the capacity for sight or self-awareness, and \u201cforehead\u201d renders it almost human - a face without eyes"',
        quote: '"a blind forehead of discoloured wall"',
        ao: "AO2",
        whyItScores: "The student reads the extract's imagery at multiple levels: 'blind' as denial of perception, 'forehead' as humanisation, 'discoloured' as suggestion of disease. This layered, systematic close reading of a single phrase from the extract is exactly what examiners describe as 'exploratory' analysis in the top band.",
      },
      {
        technique: "Construction Through Negation",
        termUsed: '"Every detail describes something that is not there: no windows, no bell, no knocker. Stevenson constructs the setting through negation"',
        quote: '"showed no window, nothing but a door" / "equipped with neither bell nor knocker"',
        ao: "AO2",
        whyItScores: "The student identifies a structural pattern within the extract - the repeated emphasis on absence - and names it as a technique ('construction through negation'). This is original critical language, not exam-speak. The connection to Hyde being defined by what others cannot see demonstrates the student thinking across the text's levels.",
      },
      {
        technique: "Diction / Moral Connotation",
        termUsed: '"The adjective \u201csordid\u201d carries moral connotations of degradation and shame, while \u201cprolonged\u201d implies that this neglect is not accidental but sustained over time"',
        quote: '"prolonged and sordid negligence"',
        ao: "AO2",
        whyItScores: "The student analyses two adjectives from the extract in sequence, explaining the moral weight of 'sordid' and the temporal implication of 'prolonged.' The connection to Jekyll's own sustained repression shows the student reading setting as character study - a sophisticated analytical move.",
      },
      {
        technique: "Visceral / Bodily Diction",
        termUsed: '"\u201cBlistered\u201d suggests burned or diseased skin, while \u201cdistained\u201d carries connotations of both staining and dishonour"',
        quote: '"blistered and distained"',
        ao: "AO2",
        whyItScores: "The student reads the extract's final detail as bodily and visceral, connecting the door's surface to human skin. The dual meaning of 'distained' - physical staining and moral dishonour - shows the student engaging with the word at denotative and connotative levels simultaneously.",
      },
      {
        technique: "Contrasting Adjectives / Antithesis",
        termUsed: '"The adjectives tell the story on their own: \u201chandsome\u201d and \u201cwealth\u201d versus \u201cblistered\u201d and \u201cdistained\u201d"',
        quote: '"a great air of wealth and comfort" vs "blistered and distained"',
        ao: "AO2",
        whyItScores: "The student isolates specific adjectives and arranges them in direct opposition, letting the language itself demonstrate the duality. The phrase 'the adjectives tell the story on their own' shows confidence  - the student trusts the evidence and lets it speak. This is precise, efficient AO2 analysis.",
      },
      {
        technique: "Metaphor / Connotation ('Pall')",
        termUsed: '"The noun \u201cpall\u201d is particularly striking - it denotes a cloth draped over a coffin"',
        quote: '"a great chocolate-coloured pall lowered over heaven"',
        ao: "AO2",
        whyItScores: "The student identifies a single word and unpacks its connotations with precision: coffin cloth, death, concealment. The further observation  - that 'lowered over heaven' adds a spiritual dimension  - shows the student is reading at multiple levels simultaneously. This layered analysis, moving from denotation to connotation to thematic implication, is exactly what top-band AO2 looks like.",
      },
      {
        technique: "Personification",
        termUsed: '"The adjective \u201cmournful\u201d personifies the darkness, making it feel almost sentient, as though the city itself is grieving"',
        quote: '"this mournful reinvasion of darkness"',
        ao: "AO2",
        whyItScores: "The student names the technique and immediately explains its effect  - making darkness feel alive and emotionally charged. The word 'grieving' is the student's own, adding an interpretive layer that goes beyond the text. This shows creative critical engagement, not just identification.",
      },
      {
        technique: "Setting as Moral Geography (Context)",
        termUsed: '"this is where London\u2019s underside lives, the place respectable gentlemen visit but never admit to visiting"',
        quote: '"muddy ways, and slatternly passengers"',
        ao: "AO3",
        whyItScores: "The student provides relevant historical context about Soho's reputation without disrupting the essay's analytical flow. The observation that Soho is the place 'respectable gentlemen visit but never admit to visiting' is a sophisticated point about authorial craft  - the student understands how Stevenson uses cultural knowledge to communicate implicitly.",
      },
      {
        technique: "Imperial Context (Victorian London)",
        termUsed: '"London was the capital of the world\u2019s largest empire and simultaneously home to some of its worst poverty"',
        quote: "N/A  - contextual framing",
        ao: "AO3",
        whyItScores: "The student deploys imperial context precisely and purposefully in the conclusion. The paradox of empire  - wealth alongside poverty  - directly mirrors the novella's duality theme. This is AO3 used to clinch an argument, not decoratively, and it demonstrates genuine understanding of why Stevenson set his story where he did.",
      },
    ],
    examinerCommentary: [
      {
        paragraph: 1,
        label: "Introduction  - Extract as Symbolic Statement",
        whatExaminerSees: "The student identifies the extract as the rear entrance to Jekyll's house and immediately frames it as symbolic. London personified as 'a character that embodies the moral contradictions.' A clear thesis is established: the city itself has a split personality, grounded in the extract's physical detail.",
        aoCoverage: ["AO1", "AO3"],
        gradeJustification: "Top-band introductions make arguments, not announcements. This one identifies the extract's function (symbolic statement about duality) and establishes a thesis about London as a character with 'a split personality.' The student signals that the extract will be analysed closely before the essay broadens, which demonstrates awareness of the extract-based structure.",
      },
      {
        paragraph: 2,
        label: "Extract Analysis  - Personification and the Building as Body",
        whatExaminerSees: "Sustained close analysis of the extract's language. 'Thrust' analysed as aggressive verb. 'Blind forehead' read at multiple levels: denial of sight, humanisation, suggestion of disease. 'Discoloured' connected to bruising and corruption. The student builds a coherent reading of the building as a damaged human body.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "This paragraph demonstrates exactly what examiners want to see in extract analysis: precise, word-level engagement with the given passage. The student analyses three separate elements of a single phrase ('blind', 'forehead', 'discoloured') and connects them to the novella's argument about repression. The conceptual claim that the building looks like 'a person who has been damaged' is original and convincing.",
      },
      {
        paragraph: 3,
        label: "Extract Analysis  - Negation, 'Sordid', and 'Blistered'",
        whatExaminerSees: "Continued extract focus across a second full paragraph. The student identifies construction through negation as a pattern. 'Sordid' and 'prolonged' analysed for moral and temporal implications. 'Blistered and distained' read as bodily and visceral. The extract is thoroughly mined before the essay transitions outward.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "Two full paragraphs of extract analysis demonstrates genuine engagement with the passage. The identification of 'construction through negation' is original critical thinking  - the student has coined their own analytical term for a pattern they observe. The reading of 'blistered' as diseased skin and 'distained' as carrying dual meaning shows the kind of word-level precision that defines Grade 9.",
      },
      {
        paragraph: 4,
        label: "Wider Novella  - Two Doors, One Building",
        whatExaminerSees: "Smooth transition revealing the extract's building as Jekyll's back door. Front door and back door described and contrasted with precise quotation. Adjectives isolated and opposed. The crucial insight  - 'it is the same house'  - connects architecture to the duality theme.",
        aoCoverage: ["AO1", "AO2"],
        gradeJustification: "The transition from extract to wider novella is expertly handled  - the student reveals contextual information about the building that transforms the extract analysis. The move from specific adjectives to the conceptual claim ('the good and the evil are not in opposition  - they share the same body') is exactly the kind of micro-to-macro analysis that defines Grade 9.",
      },
      {
        paragraph: 5,
        label: "Wider Novella  - Fog, Soho, and the Cabinet",
        whatExaminerSees: "Word-level analysis of 'pall' (coffin cloth, spiritual darkness). Soho described with extended quotation. Street lamp imagery interpreted originally. The cabinet read as the architectural unconscious. Dense, layered analysis connecting multiple settings. AO3 integrated through imperial context.",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The analysis of 'pall' moves through three levels  - literal, metaphorical, spiritual  - in rapid succession. The street lamp imagery ('light is always losing') is original and thematically apt. The observation about locked doors functioning as both plot and theme demonstrates whole-text thinking. This paragraph hits AO1, AO2, and AO3 simultaneously.",
      },
      {
        paragraph: 6,
        label: "Conclusion  - Linking Back to the Extract",
        whatExaminerSees: "Returns to the extract's language ('sinister block of building', 'blistered and distained'). Settings listed in deliberate pairs. Imperial context deployed precisely. The final sentence redefines atmosphere and circles back to the extract's image of a building that 'shows nothing, reveals nothing, and invites no contact.'",
        aoCoverage: ["AO1", "AO2", "AO3"],
        gradeJustification: "The conclusion escalates rather than summarises. The paired settings give it rhetorical structure. The final sentence returns explicitly to the extract, reframing its imagery as 'the architectural embodiment of Victorian repression.' This circular structure  - extract to wider novella and back to extract  - demonstrates the disciplined approach that examiners specifically reward in extract-based responses.",
      },
    ],
    overallVerdict: "This essay earns Grade 9 because it opens with two paragraphs of sustained, precise extract analysis before broadening into a convincing whole-text argument about setting and duality. The extract is thoroughly mined: 'thrust', 'blind forehead', 'discoloured', 'sordid', 'prolonged', 'blistered', and 'distained' are all analysed at word level, and the student identifies 'construction through negation' as a structural pattern within the passage. The transition to the wider novella is handled smoothly, revealing contextual information about the building that deepens the extract analysis. Quotations from across the novella are embedded fluently and analysed with the same precision ('pall', 'mournful'). The student demonstrates whole-text awareness by identifying patterns across the entire novella  - paired settings, locked doors, recurring fog. Context is specific and purposeful: Victorian Soho, the culture of concealment, imperial London. The conclusion returns to the extract's language, giving the essay a disciplined circular structure that examiners specifically reward in extract-based questions.\n\nNote: This is a teaching exemplar written to demonstrate how targeted analytical methods work in practice. It is not a real exam response but models the kind of writing that earns top marks.",
  },
];
