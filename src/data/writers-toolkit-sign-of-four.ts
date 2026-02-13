// ─── Writer's Toolkit — The Sign of Four (Arthur Conan Doyle) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const SIGN_OF_FOUR_TOOLKIT: WritersToolkit = {
  textSlug: "sign-of-four",
  headerQuote:
    "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  sections: [
    // ══════════════════════════════════════════════════════════
    //  1. LANGUAGE
    // ══════════════════════════════════════════════════════════
    {
      title: "Language",
      colour: "purple",
      columns: ["Technique", "Example", "What It Reveals / Suggests"],
      rows: [
        {
          label: "Scientific / deductive diction",
          example:
            '"Detection is, or ought to be, an exact science and should be treated in the same cold and unemotional manner"',
          effect:
            "Holmes's lexis of precision — 'exact science', 'cold and unemotional' — positions detection as a rational, almost clinical discipline, elevating reason above sentiment and establishing Holmes as the embodiment of Victorian scientific positivism.",
        },
        {
          label: "Sensory description",
          example:
            '"The rich smell of opium … the bodies lying in strange fantastic poses"',
          effect:
            "Watson's appeal to smell and sight plunges the reader into the seedy underworld of Victorian London, creating an immersive atmosphere that contrasts sharply with the ordered rationalism of Baker Street.",
        },
        {
          label: "Gothic imagery",
          example:
            '"The dense drizzly fog … the muddy ways … the dull light of the lamps"',
          effect:
            "Doyle layers oppressive, suffocating images — fog, mud, dull light — to create a Gothic London landscape where clarity is obscured and danger lurks just beyond perception, mirroring the mystery itself.",
        },
        {
          label: "Exotic / imperial language",
          example:
            '"The old fort of Doab … the Doab … Doab" — unfamiliar Indian geography saturates Jonathan Small\'s confession',
          effect:
            "The repetition of unfamiliar Indian place names constructs the East as a distant, mysterious space for Victorian readers, reinforcing imperial attitudes that frame colonised lands as exotic backdrops for British adventure.",
        },
        {
          label: "Simile",
          example:
            '"He whipped out his lens and a tape measure, and hurried about the room on his knees … like a well-trained bloodhound"',
          effect:
            "The animalistic simile reduces Holmes to pure instinct and function — the 'bloodhound' image emphasises his relentless, almost inhuman pursuit of evidence, suggesting detection requires shedding civilised restraint.",
        },
        {
          label: "Metaphor",
          example:
            '"My mind rebels at stagnation. Give me problems, give me work"',
          effect:
            "Holmes metaphorically equates inactivity with decay — 'stagnation' implies his brilliant mind will rot without stimulation, justifying his cocaine use as a response to intellectual deprivation rather than moral weakness.",
        },
        {
          label: "Watson's romantic language vs Holmes's analytical register",
          example:
            'Watson: "a wondrous subtle thing is love" vs Holmes: "Love is an emotional thing, and whatever is emotional is opposed to that true cold reason"',
          effect:
            "The stark contrast in register — Watson's poetic, reverent tone against Holmes's dismissive, clinical phrasing — dramatises the central tension between emotion and reason, with Doyle allowing both perspectives equal weight.",
        },
        {
          label: "Repetition",
          example:
            '"The sign of the four … the sign of the four"',
          effect:
            "The recurring phrase functions as a motif linking past crime to present mystery — each repetition tightens the net of guilt around the conspirators, making the pact inescapable and suggesting that past actions inevitably resurface.",
        },
        {
          label: "Imperative verbs",
          example:
            '"Shut the door … Give me a cigar … Hand me my violin"',
          effect:
            "Holmes's clipped imperatives assert his authority and control within Baker Street — he directs Watson (and the narrative) with the casual command of someone who assumes obedience, establishing the power dynamic of their partnership.",
        },
        {
          label: "Lists / cataloguing",
          example:
            '"Observation shows me that you have been to the Wigmore Street Post-Office this morning … you have a little reddish mould adhering to your instep"',
          effect:
            "Holmes's methodical cataloguing of evidence demonstrates the deductive chain in action — each observation builds logically on the last, turning ordinary details into a dazzling display of intellectual power that awes both Watson and the reader.",
        },
        {
          label: "Dialogue contrasts",
          example:
            'Athelney Jones: "Facts are better than theories" vs Holmes: "I think that there are one or two points which are not entirely cleared up"',
          effect:
            "The contrast between Jones's blunt overconfidence and Holmes's measured understatement exposes the difference between genuine intellect and institutional bluster — Doyle uses dialogue to satirise the official police force.",
        },
        {
          label: "Emotive language",
          example:
            '"Fearsome face … the moonlight, and it seemed to me that I had never seen features so deeply marked with all bestiality and cruelty"',
          effect:
            "Watson's emotive, horrified description of Tonga relies on dehumanising adjectives — 'bestiality', 'cruelty' — revealing ingrained Victorian racial prejudice and the imperial tendency to construct colonised peoples as monstrous and subhuman.",
        },
        {
          label: "Imagery of darkness and fog",
          example:
            '"A dense drizzly fog lay low upon the great city … mud-coloured clouds drooped sadly over the muddy streets"',
          effect:
            "The pathetic fallacy creates a moral as well as physical landscape — fog obscures truth, mud suggests moral contamination, and the 'drooped sadly' personification makes the city itself seem to grieve, reflecting the corruption hidden within London.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  2. STRUCTURAL TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Structural Techniques",
      colour: "orange",
      columns: ["Technique", "Example / Location", "Effect on the Reader"],
      rows: [
        {
          label: "Dual narrative (detection + romance)",
          example:
            "The mystery of the Agra treasure runs parallel to Watson's growing love for Mary Morstan",
          effect:
            "Doyle weaves two plots together so that emotional engagement (romance) sustains the reader through the intellectual puzzle (detection) — the dual structure also dramatises the novel's central tension between reason and feeling.",
        },
        {
          label: "Chase sequence structure",
          example:
            "Chapter 10: 'The End of the Islander' — the Thames boat chase after the Aurora",
          effect:
            "The pursuit along the Thames accelerates the narrative pace dramatically — short sentences and urgent verbs create breathless momentum, shifting the novel from cerebral puzzle to visceral adventure.",
        },
        {
          label: "Embedded narrative (Jonathan Small's confession)",
          example:
            "Chapter 12: 'The Strange Story of Jonathan Small' — Small narrates his own history",
          effect:
            "The shift to Small's first-person voice humanises the villain, complicating simple moral judgements — his embedded confession reframes the crime as a consequence of imperial exploitation, adding moral depth to the resolution.",
        },
        {
          label: "Clue-revelation pattern",
          example:
            "Holmes examines the watch, the footprints, the rope, and the thorn — each clue building towards the solution",
          effect:
            "Doyle structures the investigation as a chain of discoveries, each one narrowing the field of possibility — the reader is invited to solve alongside Holmes but is always one step behind, maintaining suspense.",
        },
        {
          label: "Red herrings",
          example:
            "Athelney Jones arrests Thaddeus Sholto, the wrong suspect, with great confidence",
          effect:
            "The false arrest misdirects the reader and satirises official police incompetence — it also heightens the satisfaction of Holmes's eventual correct deduction by contrast with institutional failure.",
        },
        {
          label: "Rising tension",
          example:
            "From Mary's mysterious summons, through the night journey, to the discovery of Bartholomew Sholto's body",
          effect:
            "Doyle escalates stakes progressively — mystery gives way to danger, which gives way to murder — each chapter raises the emotional temperature, making it impossible for the reader to stop turning pages.",
        },
        {
          label: "Climax (Thames chase)",
          example:
            '"We were fairly after her now … fired a shot across her bows … the boilers might be strained"',
          effect:
            "The chase is the structural and emotional peak — Doyle deploys rapid action, short clauses, and physical jeopardy to deliver a cinematic climax that resolves the pursuit plot through thrilling spectacle rather than quiet deduction.",
        },
        {
          label: "Denouement",
          example:
            "After the chase, Small's confession explains everything; Watson proposes to Mary",
          effect:
            "The double resolution — mystery solved, love declared — provides intellectual and emotional closure simultaneously, leaving the reader satisfied on both fronts while Holmes retreats into cocaine, hinting at future unrest.",
        },
        {
          label: "Foreshadowing",
          example:
            '"I abhor the dull routine of existence. I crave for mental exaltation"',
          effect:
            "Holmes's opening complaint foreshadows both his drug use and the adventure to come — Doyle signals to the reader that the static domestic scene cannot last, generating anticipation from the very first chapter.",
        },
        {
          label: "Flashback (the Agra treasure backstory)",
          example:
            "Jonathan Small's account of the mutiny and the theft of the treasure in India",
          effect:
            "The flashback transports the reader from Victorian London to colonial India, expanding the novel's scope — it recontextualises the present-day crime within a broader history of imperial violence and broken promises.",
        },
        {
          label: "Parallel narratives",
          example:
            "London events unfold alongside revelations about past events in India and the Andaman Islands",
          effect:
            "The parallels between past and present suggest that imperial history cannot be contained — crimes committed abroad inevitably return to haunt the imperial centre, creating a structural metaphor for colonial guilt.",
        },
        {
          label: "Frame of detection",
          example:
            "The novel opens and closes in Baker Street, with Holmes and Watson in their familiar domestic setting",
          effect:
            "The circular structure provides reassuring containment — whatever chaos the adventure brings, the reader returns to the orderly world of Baker Street, reinforcing the comforting idea that reason can restore order to a disordered world.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  3. NARRATIVE TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Narrative Techniques",
      colour: "green",
      columns: ["Technique", "Example / Location", "Effect on the Reader"],
      rows: [
        {
          label: "Watson as first-person narrator",
          example:
            '"Sherlock Holmes took his bottle from the corner of the mantelpiece … I watched him with some distaste"',
          effect:
            "Watson's first-person narration filters everything through an ordinary, relatable consciousness — the reader shares his admiration and bafflement, making Holmes's brilliance more impressive because we experience it through Watson's limited but warm perspective.",
        },
        {
          label: "Holmes's deductive method displayed",
          example:
            '"By an examination of the ground I gained the trifling details which I gave to that imbecile Lestrade"',
          effect:
            "Doyle dramatises the deductive process so the reader can follow (but never quite match) Holmes's reasoning — this creates an addictive cycle of confusion and revelation that drives the genre's appeal.",
        },
        {
          label: "Embedded confession narrative",
          example:
            '"You must know … that I am Jonathan Small, late of the Third Buffs"',
          effect:
            "Allowing Small to tell his own story in his own voice generates unexpected sympathy — the reader hears a working-class soldier exploited by empire, complicating the neat division between criminal and detective.",
        },
        {
          label: "Contrast between narrators",
          example:
            "Watson's polished, literary prose vs Jonathan Small's colloquial, soldier's dialect",
          effect:
            "The shift in register between narrators highlights class difference — Watson's educated diction represents the respectable middle class, while Small's rougher voice exposes the lives of those the empire used and discarded.",
        },
        {
          label: "Setting as atmosphere",
          example:
            '"It was a September evening and not yet seven o\'clock, but the day had been a dreary one, and a dense drizzly fog lay low upon the great city"',
          effect:
            "Watson uses setting to create mood before action — the fog and dreariness prime the reader for mystery and danger, making the urban landscape an active participant in the narrative rather than a passive backdrop.",
        },
        {
          label: "Victorian London as character",
          example:
            '"We plunged away at a furious pace through the foggy streets … the murky, shifting, vaporous streets"',
          effect:
            "London is given agency and personality through personification and kinetic verbs — 'murky', 'shifting' suggest the city is alive and deceptive, reflecting the moral ambiguity that the detective must penetrate.",
        },
        {
          label: "Suspense building",
          example:
            '"At the door stood a very small, dark fellow … His small eyes glowed and burned with a sombre light"',
          effect:
            "Watson's slow, detail-rich descriptions delay revelation and force the reader to linger on unsettling images — the withholding of information creates tension that only Holmes's deductions can release.",
        },
        {
          label: "The locked room",
          example:
            "Bartholomew Sholto is found dead in a locked room with no apparent means of entry",
          effect:
            "The locked-room scenario presents an apparently impossible crime that challenges reason itself — it is the ultimate test of Holmes's method, and its solution restores the reader's faith in rational explanation.",
        },
        {
          label: "Chase narrative",
          example:
            '"We shot through the Pool … past the West India Docks … down the long Deptford Reach"',
          effect:
            "The breathless listing of Thames landmarks creates a cinematic tracking shot — the reader is propelled through real London geography, grounding the fiction in recognisable reality and amplifying the excitement.",
        },
        {
          label: "Comic relief (Baker Street Irregulars)",
          example:
            '"There was one little yellow-faced, wizened lad … who gave his name as Wiggins"',
          effect:
            "The Irregulars inject humour and energy into the narrative, lightening the tension — their street-urchin vitality also quietly reminds the reader of London's child poverty, adding a social dimension beneath the comedy.",
        },
        {
          label: "Exoticised 'other' (Tonga)",
          example:
            '"Never have I seen features so deeply marked with all bestiality and cruelty … a face which might well strike fear"',
          effect:
            "Watson's narration constructs Tonga through dehumanising language — 'bestiality' strips him of humanity. The narrative technique reveals how Victorian fiction used the 'exotic other' as a source of terror, reflecting imperial anxieties rather than reality.",
        },
        {
          label: "Dual timeline (London / India)",
          example:
            "The present-day investigation in London is interwoven with the historical events at the Agra Fort during the Indian Rebellion",
          effect:
            "The dual timeline forces the reader to connect imperial past and metropolitan present — crime and treasure flow from colony to capital, structurally enacting the economic and moral entanglement of empire.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. FORM AND GENRE
    // ══════════════════════════════════════════════════════════
    {
      title: "Form and Genre",
      colour: "blue",
      columns: ["Convention", "How Doyle Uses It", "Why It Matters"],
      rows: [
        {
          label: "Detective fiction",
          example:
            "Holmes gathers clues, analyses evidence, and reveals the solution — following the pattern established by Poe's Dupin stories",
          effect:
            "Doyle codifies the conventions of detective fiction — the brilliant detective, the loyal companion, the baffled police — creating a formula that reassures Victorian readers that reason and order can triumph over chaos.",
        },
        {
          label: "Sensation novel",
          example:
            "Mysterious letters, secret pacts, hidden treasure, and a horrifying murder with a poisoned thorn",
          effect:
            "Doyle borrows from the sensation genre to heighten emotional impact — the shocking, melodramatic elements (poison, locked rooms, grotesque death) appeal to the reader's appetite for thrills alongside intellectual puzzles.",
        },
        {
          label: "Adventure narrative",
          example:
            "The Thames boat chase, Jonathan Small's military experiences in India, the treasure hunt",
          effect:
            "The adventure form allows Doyle to expand the novel's geographical and emotional range — scenes of physical danger and exotic locations tap into Victorian enthusiasm for imperial adventure stories.",
        },
        {
          label: "Gothic elements",
          example:
            "Pondicherry Lodge at night — dark corridors, a dead man's frozen grin, a shadowy figure on the roof",
          effect:
            "Gothic conventions of darkness, death, and the uncanny create an atmosphere of dread that intensifies the mystery — the dead man's rictus grin transforms the crime scene into a horror tableau.",
        },
        {
          label: "Romance subplot",
          example:
            "Watson's courtship of Mary Morstan develops alongside the investigation",
          effect:
            "The romance provides emotional warmth and human stakes — Watson's personal investment in the case raises the tension, and the love story offers a conventional happy ending that balances Holmes's melancholy withdrawal.",
        },
        {
          label: "Imperial adventure",
          example:
            "Jonathan Small's narrative of mutiny, treasure, and the Andaman Islands draws on the literature of empire",
          effect:
            "The imperial adventure form frames colonised lands as spaces of danger and opportunity — Doyle simultaneously entertains readers with exotic thrills and (perhaps unconsciously) exposes the violence underlying imperial wealth.",
        },
        {
          label: "Locked-room mystery",
          example:
            "Bartholomew Sholto is found murdered in a sealed attic room with the door locked from inside",
          effect:
            "The locked-room puzzle is the purest test of the rational detective — it presents a seemingly supernatural impossibility that Holmes must explain through natural means, dramatising the triumph of science over superstition.",
        },
        {
          label: "Rational / scientific investigation",
          example:
            '"I never guess. It is a shocking habit — destructive to the logical faculty"',
          effect:
            "Holmes's insistence on empirical method reflects the Victorian faith in science and progress — the detective novel becomes a celebration of Enlightenment values, reassuring readers that the world is knowable and orderly.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  5. SYMBOLISM AND MOTIFS
    // ══════════════════════════════════════════════════════════
    {
      title: "Symbolism and Motifs",
      colour: "red",
      columns: ["Symbol / Motif", "Key Appearance", "Symbolic Significance"],
      rows: [
        {
          label: "The Agra treasure",
          example:
            '"The Agra treasure … it has been like an albatross round my neck"',
          effect:
            "The treasure symbolises the corrupting legacy of empire — everyone who touches it is destroyed or diminished. Its eventual loss in the Thames suggests that stolen imperial wealth can never be safely possessed.",
        },
        {
          label: "The sign of four (the pact)",
          example:
            '"In token of our act, let each of us draw the sign of four upon this paper"',
          effect:
            "The sign represents a binding oath of loyalty and shared guilt — it links four men across race and rank in a criminal pact, symbolising how the colonial system creates alliances born of greed that transcend social boundaries only to destroy all parties.",
        },
        {
          label: "The seven percent solution (cocaine)",
          example:
            '"Which is it to-day … morphine or cocaine?" … "It is cocaine … a seven-per-cent solution"',
          effect:
            "Holmes's cocaine use symbolises the dangerous cost of genius — his brilliant mind devours itself without stimulation, suggesting that exceptionalism isolates and damages. It also reflects Victorian anxieties about readily available narcotics.",
        },
        {
          label: "Fog and darkness",
          example:
            '"A dense drizzly fog lay low upon the great city"',
          effect:
            "Fog recurs as a symbol of moral obscurity and hidden truth — it represents the barriers to knowledge that Holmes must penetrate, making London itself a puzzle to be solved and reflecting the confusion that precedes clarity.",
        },
        {
          label: "The Thames",
          example:
            '"The timbers of the Aurora creaked and groaned … the treasure sank into the Thames for ever"',
          effect:
            "The Thames symbolises the flow of imperial wealth into and through London — the treasure's disappearance into its dark waters suggests that colonial plunder is ultimately absorbed and lost in the murky currents of history.",
        },
        {
          label: "Baker Street",
          example:
            '"We sat in the bow-window together … 221B Baker Street"',
          effect:
            "Baker Street represents order, domesticity, and rational safety — it is the still centre from which Holmes ventures into chaos and to which he always returns, symbolising the Victorian ideal of the well-ordered home as refuge.",
        },
        {
          label: "Tonga's blow-dart",
          example:
            '"A poisoned thorn … driven through the scalp … some strychnine-like substance"',
          effect:
            "The blow-dart symbolises the invisible, exotic danger that imperial contact brings back to England — a weapon from the colonial periphery penetrates the locked room of English safety, suggesting empire cannot be kept at a comfortable distance.",
        },
        {
          label: "The locked room",
          example:
            "Bartholomew Sholto's sealed attic becomes a crime scene that defies explanation",
          effect:
            "The locked room symbolises the limits of conventional understanding — only Holmes's extraordinary reason can penetrate it, making the sealed space a metaphor for the apparently impenetrable mysteries that science promises to unlock.",
        },
        {
          label: "Footprints / clues",
          example:
            '"Here is the print of a heavy foot with a broad metal heel … and beside it is the mark of the timber-toe"',
          effect:
            "Footprints symbolise the idea that every action leaves a trace — they embody Holmes's conviction that the truth is always inscribed in the physical world, waiting for a trained eye to read it.",
        },
        {
          label: "The pocket watch",
          example:
            '"It has recently been in the hands of a careless person — there are numerous scratches round the keyhole"',
          effect:
            "Watson's brother's watch symbolises family decline through alcoholism — Holmes reads its scratches like a text, turning a sentimental object into forensic evidence and demonstrating that even personal grief can be subjected to rational analysis.",
        },
        {
          label: "India / empire",
          example:
            '"The old fort of Agra … the Doab … the rajah\'s treasure" — India is a persistent presence throughout the narrative',
          effect:
            "India functions as a symbol of both opportunity and moral corruption — the wealth extracted through imperial violence poisons everyone it touches, from Indian conspirators to English gentlemen, suggesting that the empire's foundations are rotten.",
        },
        {
          label: "Pearls",
          example:
            '"A chaplet of pearls … six of the finest pearls that I had ever seen"',
          effect:
            "The pearls sent annually to Mary Morstan symbolise guilt made beautiful — they are attempts to compensate for injustice through luxury, yet their anonymous delivery only deepens mystery and unease, suggesting stolen wealth cannot buy redemption.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Where It Appears", "Critical Interpretation"],
      rows: [
        {
          label: "Imperialism and empire",
          example:
            "Jonathan Small's story — the Indian Rebellion, the Agra treasure, the Andaman Islands penal colony",
          effect:
            "The entire plot is driven by imperial exploitation — the treasure stolen during the Indian Rebellion returns to destabilise London, suggesting Doyle (perhaps unconsciously) exposes how empire's violence abroad creates consequences at home.",
        },
        {
          label: "The exotic 'other'",
          example:
            '"An unhallowed dwarf with his hideous face … the little Andaman Islander"',
          effect:
            "Tonga is constructed as racially monstrous through dehumanising language — Doyle reflects Victorian pseudoscientific racism by presenting non-European peoples as animalistic. A modern reader recognises this as a product of imperial ideology rather than objective description.",
        },
        {
          label: "Rationalism vs emotion",
          example:
            'Holmes: "The emotional qualities are antagonistic to clear reasoning" vs Watson\'s love for Mary',
          effect:
            "The novel stages a debate between head and heart — Holmes represents pure intellect, Watson represents feeling. Doyle suggests both are necessary: Holmes solves the case but cannot sustain human connection, while Watson finds love but cannot solve the puzzle alone.",
        },
        {
          label: "Victorian class system",
          example:
            "Mary Morstan is a governess; the Sholtos are wealthy; Jonathan Small is a working-class soldier; Tonga is an enslaved Islander",
          effect:
            "The novel's characters span the Victorian class spectrum — Doyle shows how the treasure disrupts class boundaries, elevating some and destroying others, revealing class position to be precarious and dependent on access to (often stolen) wealth.",
        },
        {
          label: "The detective as hero",
          example:
            '"He was a man who seldom took exercise for exercise\'s sake … yet his condition was little short of marvellous"',
          effect:
            "Holmes replaces the traditional action hero with an intellectual one — his heroism lies in observation and deduction rather than physical strength, reflecting a cultural shift towards valuing scientific thinking as the highest form of human achievement.",
        },
        {
          label: "Science and deduction",
          example:
            '"I have a turn both for observation and for deduction … the only unofficial consulting detective"',
          effect:
            "Holmes embodies Victorian faith in scientific method — his ability to read the world like a text reflects the era's confidence that empirical inquiry can explain everything, from crime to human nature, replacing superstition with knowledge.",
        },
        {
          label: "Cocaine and Victorian morality",
          example:
            '"My mind rebels at stagnation … give me problems, give me work, give me the most abstruse cryptogram"',
          effect:
            "Holmes's drug use complicates his heroic status — Doyle presents addiction not as moral failing but as intellectual frustration, reflecting Victorian ambivalence about drugs that were legal yet socially troubling, and suggesting that genius exacts a personal cost.",
        },
        {
          label: "Justice vs law",
          example:
            'Small: "I would rather swing a score of times … than have the treasure go to those who never earned it"',
          effect:
            "Small's passionate plea forces the reader to question whether legal justice is truly just — he was exploited by his colonial employers, and his 'crime' was against men who had already stolen the treasure. Doyle leaves the moral question deliberately unresolved.",
        },
        {
          label: "Holmes as outsider",
          example:
            '"I am the last and highest court of appeal in detection" — yet Holmes lives alone, uses cocaine, and has no family',
          effect:
            "Holmes's genius sets him apart from normal society — he can see what others cannot, but this gift isolates him. Doyle presents the outsider as both necessary to and excluded from the community he protects, creating a poignant tension at the heart of the character.",
        },
        {
          label: "Watson as everyman",
          example:
            '"I endeavoured … to copy the methods of my companion … but there was nothing in it"',
          effect:
            "Watson's humility and ordinariness make him the reader's proxy — his failures at deduction are our failures, and his admiration for Holmes mirrors our own. Doyle uses Watson to democratise the narrative, ensuring the story belongs to the reader as much as the detective.",
        },
        {
          label: "Wealth and greed",
          example:
            '"What was the treasure then to me? … It was like a curse upon our party"',
          effect:
            "The Agra treasure corrupts everyone who pursues it — Sholto dies in fear, Small loses his freedom, Tonga loses his life. Doyle presents wealth as morally toxic, suggesting that greed corrodes human relationships and that the true cost of treasure is measured in lives destroyed.",
        },
        {
          label: "The imperial adventure narrative",
          example:
            "Small's account of the Indian Rebellion, jungle survival, and the treasure pact echoes Kipling and Haggard",
          effect:
            "Doyle uses the imperial adventure form to entertain but also — intentionally or not — to reveal its moral contradictions. The excitement of treasure hunting is undermined by the violence it requires, inviting the critical reader to question the genre's celebration of conquest.",
        },
      ],
    },
  ],
};
