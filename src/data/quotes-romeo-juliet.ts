import { Quote } from "./types";

// ─── ROMEO AND JULIET — 6 Quotes ───

export const ROMEO_JULIET_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "romeo-juliet",
    quote: "Two households, both alike in dignity, in fair Verona, where we lay our scene",
    who: "Chorus",
    act: "Prologue",
    themes: ["Fate & Free Will", "Family & Conflict", "Love & Death", "Honour & Violence"],
    keyQuote: {
      text: '"Two households, both alike in dignity, in fair Verona, where we lay our scene"',
      highlight: "dignity",
      note: "The Prologue's opening line establishes the symmetry of the feuding families and the ironic contrast between Verona's beauty and the violence it harbours.",
    },
    technique1: {
      title: "SONNET FORM / PROLEPTIC NARRATION",
      analysis:
        "The Prologue takes the form of a **sonnet** — a 14-line poem traditionally associated with love — yet its content details death and destruction. This **generic dissonance** (clash between form and content) foreshadows the play's central paradox: love and death are **inextricably** (inseparably) linked. The sonnet form promises romance; the content promises tragedy.",
      secondPoint:
        "The **proleptic** (anticipating future events) narration — 'From forth the fatal loins of these two foes / A pair of star-cross'd lovers take their life' — tells the audience the ending before the play begins. This radical act of **narrative spoiling** removes suspense and replaces it with **dramatic irony**: every moment of joy is shadowed by the audience's knowledge of inevitable death.",
      keyWords: [
        { word: "Sonnet", def: "A 14-line poem with a specific rhyme scheme, traditionally about love" },
        { word: "Generic dissonance", def: "A clash between the expected form or genre and the actual content" },
        { word: "Proleptic", def: "Anticipating and representing future events as if already decided" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The Chorus exists outside the action — a **static** narrative voice that frames the story without participating in it. Its stagnation is structural: like fate itself, it observes and reports but does not change. The Chorus's unchanging perspective mirrors the **immutable** (unchangeable) social structures — the feud, the patriarchy, the honour code — that will destroy the lovers.",
      keyWords: [
        { word: "Static", def: "Lacking change or development; fixed in position" },
        { word: "Immutable", def: "Unchanging over time; unable to be altered" },
      ],
    },
    technique2: {
      title: "OXYMORONIC STRUCTURE",
      analysis:
        "The phrase 'alike in dignity' suggests equality, yet the families are defined by conflict. This **oxymoronic** (combining contradictory ideas) logic pervades the entire play: love and hate, birth and death, fair and foul coexist in every line. Shakespeare establishes from the first words that this world operates through **paradox** — things that should be opposites collapse into each other.",
      secondPoint:
        "The adjective '**fair**' applied to Verona is bitterly ironic: the city is beautiful but violent, civil but savage. Shakespeare uses this **ironic epithet** (a descriptive term that contradicts reality) to signal that surface appearances in this play are always deceptive — beauty conceals brutality, love conceals death.",
      keyWords: [
        { word: "Oxymoronic", def: "Combining contradictory or opposite ideas in a single expression" },
        { word: "Paradox", def: "A seemingly contradictory statement that reveals a deeper truth" },
        { word: "Ironic epithet", def: "A descriptive label that contradicts the reality it describes" },
      ],
    },
    context: {
      points: [
        {
          label: "ITALIAN CITY-STATES",
          text: "Verona's warring families reflect the real factional violence of Italian city-states, where **vendetta** (a prolonged feud between families) was a recognised social institution. Elizabethan audiences associated Italy with both romance and danger — a land of passion, poison, and political intrigue.",
        },
        {
          label: "FATE & ELIZABETHAN BELIEF",
          text: "The phrase 'star-cross'd' invokes **astrology** — the Elizabethan belief that stars influenced human destiny. Shakespeare frames the lovers' fate as **predetermined** (decided in advance), raising the question of whether their deaths result from cosmic forces, social structures, or individual choices.",
        },
      ],
      keyWords: [
        { word: "Vendetta", def: "A prolonged, bitter feud between families involving retaliatory violence" },
        { word: "Predetermined", def: "Decided or established in advance; fated" },
        { word: "Star-cross'd", def: "Doomed by the stars; fated to end in disaster" },
      ],
    },
    wow: {
      title: "TRAGIC DETERMINISM (Aristotle / Hegel)",
      analysis:
        "Aristotle's **Poetics** defines tragedy as the fall of a noble figure through **hamartia** (tragic flaw or error). But Hegel refined this: tragedy occurs not from individual error but from the collision of two equally valid moral claims — here, love versus family loyalty. The Prologue frames the play as **Hegelian tragedy**: the lovers are destroyed not by personal failings but by the irreconcilable conflict between private desire and public duty. Neither the lovers nor the families are wholly wrong; the tragedy lies in the impossibility of reconciliation within the existing social order. Only death — the ultimate resolution — can end the feud, making the lovers' sacrifice both **futile** and **necessary**.",
      keyWords: [
        { word: "Hamartia", def: "A tragic flaw or error in judgment leading to a character's downfall" },
        { word: "Hegelian tragedy", def: "Tragedy arising from the collision of two equally valid moral claims" },
        { word: "Irreconcilable", def: "Impossible to resolve or make compatible" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "romeo-juliet",
    quote: "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun",
    who: "Romeo",
    act: "Act 2, Scene 2",
    themes: ["Love & Passion", "Light & Dark Imagery", "Fate & Free Will"],
    keyQuote: {
      text: '"But soft, what light through yonder window breaks? It is the east, and Juliet is the sun"',
      highlight: "sun",
      note: "Romeo's balcony soliloquy transforms Juliet into a celestial body — she is not merely beautiful but a source of light, warmth, and life itself.",
    },
    technique1: {
      title: "CELESTIAL METAPHOR / PETRARCHAN BLAZON",
      analysis:
        "Romeo employs a **Petrarchan blazon** (a poetic catalogue praising a lover's qualities through comparison) but transcends convention: Juliet is not merely beautiful — she IS the sun. This **metaphor** elevates her beyond human beauty to **cosmic** (universal, relating to the heavens) significance, suggesting that Romeo's love is not ordinary infatuation but a force of nature.",
      secondPoint:
        "The sun metaphor also carries a note of danger: the sun is life-giving but too intense to look at directly. Shakespeare embeds **foreshadowing** within the praise — this love illuminates but also burns. The **celestial imagery** connects to the Prologue's 'star-cross'd,' reminding the audience that heavenly beauty exists alongside heavenly fate.",
      keyWords: [
        { word: "Petrarchan blazon", def: "A poetic convention cataloguing a lover's beauties through comparisons" },
        { word: "Celestial", def: "Relating to the sky or heavens; divine" },
        { word: "Cosmic", def: "Relating to the universe; vast in scale or significance" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Romeo's language represents dramatic **progression** from his earlier artificial love for Rosaline (expressed in tired clichés) to genuine passion for Juliet (expressed in original, expansive imagery). The shift from **Petrarchan convention** to authentic feeling marks his emotional maturation — he has moved from performing love to experiencing it.",
      keyWords: [
        { word: "Maturation", def: "The process of becoming more emotionally or intellectually developed" },
        { word: "Authentic", def: "Genuine; arising from real feeling rather than imitation" },
      ],
    },
    technique2: {
      title: "LIGHT / DARK MOTIF",
      analysis:
        "The speech inaugurates the play's central **motif** (a recurring image or idea) of light versus dark: love is light, the feuding world is darkness. But Shakespeare complicates this: Romeo and Juliet can only meet at night, in secret. Their love, though described as light, exists in darkness — a **paradox** that mirrors their impossible situation: their brightest feeling must be hidden in shadows.",
      secondPoint:
        "The verb '**breaks**' suggests both dawn (light breaking through darkness) and destruction (breaking apart). This **semantic ambiguity** foreshadows the lovers' fate: their love breaks through the darkness of the feud but also breaks the social order — and ultimately breaks the lovers themselves.",
      keyWords: [
        { word: "Motif", def: "A recurring image, idea, or symbol that develops meaning throughout a text" },
        { word: "Semantic ambiguity", def: "A word or phrase carrying multiple possible meanings simultaneously" },
        { word: "Paradox", def: "A seemingly contradictory situation that reveals a truth" },
      ],
    },
    context: {
      points: [
        {
          label: "COURTLY LOVE TRADITION",
          text: "The **courtly love** tradition idealised distant, unattainable women as objects of male devotion. Romeo initially follows this convention with Rosaline but abandons it for Juliet, suggesting Shakespeare **critiques** (questions the value of) formulaic love in favour of genuine emotional connection.",
        },
        {
          label: "THE BALCONY AS THRESHOLD",
          text: "The balcony places Juliet above Romeo — physically and symbolically. She is elevated, almost divine, while he looks up from below. This spatial arrangement reflects Elizabethan gender dynamics where women were placed on **pedestals** (positions of idealised admiration) that simultaneously honoured and constrained them.",
        },
      ],
      keyWords: [
        { word: "Courtly love", def: "A medieval tradition of chivalric, idealised devotion to an unattainable woman" },
        { word: "Pedestal", def: "A position of idealised admiration that can also restrict freedom" },
        { word: "Threshold", def: "A boundary or transitional space between two states" },
      ],
    },
    wow: {
      title: "LIEBESTOD — THE LOVE-DEATH FUSION (Wagner / Freud)",
      analysis:
        "The concept of **Liebestod** ('love-death') — later central to Wagner's *Tristan und Isolde* — describes the merging of erotic passion with the death drive. Romeo's worship of Juliet as the sun contains the seeds of this fusion: to possess something so radiant is inherently dangerous. Freud theorised that **Eros** (the life/love drive) and **Thanatos** (the death drive) are fundamentally linked — we are most alive when closest to annihilation. Shakespeare dramatises this: Romeo and Juliet's love is most intense precisely because it is most threatened. The beauty of the balcony scene derives its power from the audience's knowledge that this love will end in a tomb.",
      keyWords: [
        { word: "Liebestod", def: "The union of love and death; the idea that ultimate love is inseparable from destruction" },
        { word: "Eros", def: "The life drive; the instinct toward love, connection, and creation" },
        { word: "Thanatos", def: "The death drive; the instinct toward destruction and dissolution" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "romeo-juliet",
    quote: "What's in a name? That which we call a rose by any other name would smell as sweet",
    who: "Juliet",
    act: "Act 2, Scene 2",
    themes: ["Identity & Names", "Family & Conflict", "Love & Passion", "Language & Meaning"],
    keyQuote: {
      text: '"What\'s in a name? That which we call a rose by any other name would smell as sweet"',
      highlight: "name",
      note: "Juliet's philosophical argument — that names are arbitrary labels, not essential truths — challenges the feudal identity system that makes their love forbidden.",
    },
    technique1: {
      title: "RHETORICAL QUESTION / PHILOSOPHICAL ARGUMENT",
      analysis:
        "Juliet's **rhetorical question** (a question posed for effect rather than an answer) opens a genuinely **philosophical** argument about the relationship between language and reality. She distinguishes between **signifier** (the word 'Montague') and **signified** (the person Romeo) — arguing that the label does not define the essence. This is intellectually sophisticated reasoning for a 13-year-old, positioning Juliet as the play's most rational voice.",
      secondPoint:
        "The **analogy** (comparison to illustrate a point) of the rose is elegantly persuasive: a rose's fragrance exists independently of its name. Juliet extends this logic to argue that Romeo's essential worth exists independently of his family name. But Shakespeare creates tragic irony: in Verona, names DO matter — they determine life and death.",
      keyWords: [
        { word: "Rhetorical question", def: "A question asked for effect rather than requiring an answer" },
        { word: "Signifier", def: "The word or symbol used to represent something" },
        { word: "Signified", def: "The actual thing or concept represented by a word or symbol" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Juliet demonstrates remarkable **intellectual progression**: while Romeo expresses love through poetic imagery, Juliet analyses the social structures that oppose them. She is not merely emotional but **analytical** (systematically examining the problem), attempting to reason her way past the feud. This positions her as the relationship's thinker — more practically intelligent than Romeo.",
      keyWords: [
        { word: "Analytical", def: "Relating to or using systematic logical examination" },
        { word: "Intellectual progression", def: "Growth in the depth and sophistication of thinking" },
      ],
    },
    technique2: {
      title: "DRAMATIC IRONY / TRAGIC FUTILITY",
      analysis:
        "Juliet's argument is intellectually **compelling** (convincingly forceful) but socially **futile** (incapable of producing results): in her world, names determine everything — who you marry, who you fight, who kills you. The **dramatic irony** is devastating: the audience knows that the lovers' attempt to transcend their names will fail, making Juliet's beautiful logic a prelude to tragedy rather than a solution.",
      secondPoint:
        "The speech also reveals Juliet's **naivety**: she believes that love can exist outside social structures, that two people can simply rename themselves and escape. Shakespeare presents this as both deeply admirable and tragically mistaken — the idealism of youth colliding with the immovable machinery of feudal society.",
      keyWords: [
        { word: "Futile", def: "Incapable of producing any useful result; pointless" },
        { word: "Compelling", def: "Evoking interest or admiration in a powerful, irresistible way" },
        { word: "Naivety", def: "A lack of experience or sophistication; innocent simplicity" },
      ],
    },
    context: {
      points: [
        {
          label: "PATRILINEAL IDENTITY",
          text: "In Elizabethan England, identity was **patrilineal** (inherited through the father's line): your surname determined your social position, alliances, and enemies. Juliet's attempt to separate Romeo from his name challenges the entire structure of **feudal** (relating to the medieval system of lords and vassals) identity — a revolutionary act within her society.",
        },
        {
          label: "WOMEN & NAMING",
          text: "Women in Elizabethan society changed their names upon marriage, moving from father's to husband's identity. Juliet's meditation on names carries a gendered dimension: as a woman, she understands that names are **imposed** (forced upon someone) rather than chosen. Her challenge to naming is implicitly a challenge to patriarchal control.",
        },
      ],
      keyWords: [
        { word: "Patrilineal", def: "Relating to inheritance or descent traced through the father's line" },
        { word: "Feudal", def: "Relating to the medieval system of social hierarchy based on land and loyalty" },
        { word: "Imposed", def: "Forced upon someone without their choice or consent" },
      ],
    },
    wow: {
      title: "NOMINALISM vs ESSENTIALISM (Saussure / Derrida)",
      analysis:
        "Juliet's argument anticipates the linguistic theory of **Ferdinand de Saussure**: the relationship between signifier (word) and signified (thing) is **arbitrary** (based on convention, not natural connection). A rose by any other name WOULD smell as sweet because names are social constructions, not natural truths. But **Derrida** would add a complication: we cannot escape language. Even Juliet's attempt to look past names requires language to articulate — she uses words to argue against the power of words. Shakespeare dramatises this philosophical paradox: the lovers' tragedy is that they understand the arbitrariness of names but live in a world that treats names as absolute. Knowledge of the constructed nature of social categories does not automatically free you from their power.",
      keyWords: [
        { word: "Nominalism", def: "The philosophical position that names and categories are human constructions, not natural truths" },
        { word: "Essentialism", def: "The belief that things have inherent, unchanging natures independent of how we name them" },
        { word: "Arbitrary", def: "Based on convention or random choice rather than natural or logical connection" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "romeo-juliet",
    quote: "A plague o' both your houses!",
    who: "Mercutio",
    act: "Act 3, Scene 1",
    themes: ["Honour & Violence", "Family & Conflict", "Fate & Free Will", "Death"],
    keyQuote: {
      text: '"A plague o\' both your houses!"',
      highlight: "plague",
      note: "Mercutio's dying curse — repeated three times — condemns both families equally, marking the play's turning point from comedy to tragedy.",
    },
    technique1: {
      title: "TRIPLED CURSE / PERFORMATIVE UTTERANCE",
      analysis:
        "Mercutio repeats this curse **three times** — a number associated with ritual, prophecy, and binding oaths. This **tripled** structure transforms his words from an expression of anger into a **performative utterance** (language that enacts what it describes): by the play's end, both houses ARE destroyed — Mercutio's curse becomes reality. Shakespeare positions language itself as a force that shapes events.",
      secondPoint:
        "The word '**plague**' invokes the most terrifying force in Elizabethan England — the bubonic plague that killed thousands. This is not a mild curse but an invocation of mass death. The **hyperbolic** (deliberately exaggerated) intensity reflects Mercutio's fury at dying for a feud that was never his.",
      keyWords: [
        { word: "Performative utterance", def: "Language that performs an action or creates reality through its speaking" },
        { word: "Tripled", def: "Repeated three times for emphasis, ritual significance, or binding force" },
        { word: "Hyperbolic", def: "Deliberately exaggerated for emphasis or dramatic effect" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Mercutio's death marks the play's catastrophic **regression** from comedy to tragedy. Before this scene, reconciliation was possible; after it, violence becomes **irreversible**. Mercutio himself regresses from the play's wittiest character to its most bitter — his dying curse replaces humour with fury, demonstrating how the feud's violence corrupts everything it touches, even the most light-hearted spirit.",
      keyWords: [
        { word: "Irreversible", def: "Unable to be undone or returned to a previous state" },
        { word: "Catastrophic", def: "Involving sudden, great disaster or complete failure" },
      ],
    },
    technique2: {
      title: "STRUCTURAL PIVOT / PERIPETEIA",
      analysis:
        "Mercutio's death functions as the play's **peripeteia** (the turning point in a tragedy where fortune reverses). Before this scene, the play has the structure of a comedy: young lovers outwit older authorities, wit and disguise drive the plot. Mercutio's death shatters this comic structure permanently — from this point, deaths accumulate relentlessly. Shakespeare physically destroys the comic world to build the tragic one.",
      secondPoint:
        "The phrase 'both your houses' refuses to assign blame to either family — **both** are equally guilty. This **balanced condemnation** mirrors the Prologue's 'both alike in dignity' and reinforces the play's moral architecture: the feud is a **systemic** evil, not caused by one side's aggression but sustained by both families' refusal to yield.",
      keyWords: [
        { word: "Peripeteia", def: "The turning point in a tragedy where the protagonist's fortune reverses" },
        { word: "Balanced condemnation", def: "Assigning equal blame to all parties rather than singling out one" },
        { word: "Systemic", def: "Relating to a system as a whole; embedded in structures rather than individuals" },
      ],
    },
    context: {
      points: [
        {
          label: "THE HONOUR CODE",
          text: "Elizabethan **honour culture** required men to defend their name through violence. Mercutio fights Tybalt partly to defend Romeo's honour after Romeo refuses to fight. The tragedy is that the honour code makes violence **obligatory** (required, not optional) — Mercutio dies not because he chooses to but because the social system demands it.",
        },
        {
          label: "PLAGUE IN ELIZABETHAN ENGLAND",
          text: "The **plague** was a constant threat: London theatres were regularly closed during outbreaks. Mercutio's curse invokes this real terror, and plague later becomes a literal plot mechanism — Friar John's letter is delayed because he is quarantined in a plague house. Shakespeare weaves real Elizabethan anxieties into the play's fabric.",
        },
      ],
      keyWords: [
        { word: "Honour culture", def: "A social system where personal and family reputation must be defended through action" },
        { word: "Obligatory", def: "Required by social or moral rules; not optional" },
        { word: "Quarantined", def: "Isolated to prevent the spread of disease" },
      ],
    },
    wow: {
      title: "SCAPEGOAT MECHANISM (Girard)",
      analysis:
        "René Girard's theory of the **scapegoat mechanism** argues that societies resolve internal violence by directing it onto a sacrificial victim. Mercutio — who belongs to neither house — becomes the scapegoat whose death exposes the true cost of the feud. His curse functions as the moment of **revelation**: it strips away the honour code's self-justification and reveals it as murderous stupidity. Girard would note that the play ultimately requires TWO more sacrifices (Romeo and Juliet) before the community can achieve reconciliation — the 'poor sacrifices of our enmity' that finally end the feud. Shakespeare demonstrates that social systems built on violence can only be reformed through the suffering of innocents — a profoundly disturbing insight into how societies consume their own members.",
      keyWords: [
        { word: "Scapegoat mechanism", def: "Girard's theory that communities resolve conflict by sacrificing an innocent victim" },
        { word: "Revelation", def: "The moment when a hidden truth is suddenly exposed or understood" },
        { word: "Sacrificial victim", def: "A person who suffers or dies to resolve the community's conflicts" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "romeo-juliet",
    quote: "O, I am fortune's fool!",
    who: "Romeo",
    act: "Act 3, Scene 1",
    themes: ["Fate & Free Will", "Honour & Violence", "Love & Death"],
    keyQuote: {
      text: '"O, I am fortune\'s fool!"',
      highlight: "fool",
      note: "After killing Tybalt, Romeo's anguished cry reveals his awareness that fate — or his own impulsive nature — has made him an instrument of destruction.",
    },
    technique1: {
      title: "EXCLAMATORY / ALLITERATIVE DESPAIR",
      analysis:
        "The **exclamatory** 'O' is a primal cry of despair — language reduced to pure sound. The **alliteration** (repetition of initial consonant sounds) of 'fortune's fool' creates a bitter, rhythmic phrase that sounds almost like a title — Romeo names himself not as a lover but as a plaything of fate. The harsh 'f' sounds give the phrase a **percussive** (sharp, striking) quality that mirrors Romeo's self-directed anger.",
      secondPoint:
        "The **possessive** construction — 'fortune's fool' — makes Romeo the property of fate, not a free agent. He belongs to fortune the way a jester belongs to a king: a servant, an entertainer, a figure of ridicule. This **self-diminishment** (reducing one's own status) reveals how completely Romeo has lost faith in his ability to control his own destiny.",
      keyWords: [
        { word: "Alliteration", def: "The repetition of initial consonant sounds in closely connected words" },
        { word: "Percussive", def: "Having a sharp, striking quality; resembling a beat or blow" },
        { word: "Self-diminishment", def: "The act of reducing one's own status, worth, or agency" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Romeo's **regression** is devastating: in a single scene he has moved from the joy of marriage to Juliet to the horror of killing her cousin. His progression as a lover is destroyed by his regression as a man of violence — the feud reclaims him just as he seemed to have escaped. The tragedy is that Romeo genuinely tried to avoid conflict; his regression is imposed by circumstances rather than chosen.",
      keyWords: [
        { word: "Imposed", def: "Forced upon someone by external circumstances rather than chosen" },
        { word: "Reclaimed", def: "Taken back by a force or system that previously held control" },
      ],
    },
    technique2: {
      title: "METATHEATRICAL SELF-AWARENESS",
      analysis:
        "The word '**fool**' carries **metatheatrical** (theatre aware of itself as theatre) resonance: the fool was a stock character in Elizabethan drama — a figure who speaks truth through apparent madness. Romeo, by naming himself 'fortune's fool,' acknowledges that he is a character in a larger story he cannot control. This creates a vertiginous moment where the character seems to glimpse the audience — recognising his existence as a dramatic figure rather than a free agent.",
      secondPoint:
        "The line also functions as **anagnorisis** (the moment of tragic recognition): Romeo suddenly understands his position in the play's moral universe. He is not the hero who will overcome obstacles but the victim of forces larger than himself. This **tragic self-knowledge** arrives too late to prevent the disaster but early enough to deepen his suffering.",
      keyWords: [
        { word: "Metatheatrical", def: "Theatre that is aware of itself as performance; breaking the dramatic illusion" },
        { word: "Anagnorisis", def: "The moment in a tragedy when the hero recognises the truth of their situation" },
        { word: "Tragic self-knowledge", def: "Understanding of one's own doomed position, arriving too late to change it" },
      ],
    },
    context: {
      points: [
        {
          label: "FORTUNE'S WHEEL",
          text: "The medieval concept of **Fortune's Wheel** — where fate randomly raises and lowers individuals — was still influential in Shakespeare's time. Romeo at the top of Fortune's Wheel (married to Juliet) is immediately cast to the bottom (exile for murder). Shakespeare uses this familiar image to question whether humans have genuine **agency** (the ability to act independently) or are merely passengers on fate's wheel.",
        },
        {
          label: "MASCULINITY & VIOLENCE",
          text: "Despite his desire for peace, Romeo kills Tybalt — revealing that Elizabethan **masculine honour** makes violence almost inevitable. Even a lover must become a fighter; gentleness is a luxury the honour code does not permit. Shakespeare critiques a culture where manhood is defined by the willingness to kill.",
        },
      ],
      keyWords: [
        { word: "Fortune's Wheel", def: "The medieval concept that fate randomly raises and lowers individuals" },
        { word: "Agency", def: "The capacity to act independently and make free choices" },
        { word: "Masculine honour", def: "The social expectation that men must defend their reputation through violence" },
      ],
    },
    wow: {
      title: "TRAGIC INEVITABILITY (Nietzsche)",
      analysis:
        "Nietzsche's **The Birth of Tragedy** argues that Greek tragedy emerged from the tension between the **Apollonian** (rational, ordered, individual) and the **Dionysian** (chaotic, passionate, collective). Romeo embodies this tension: his Apollonian desire for love and peace is overwhelmed by the Dionysian forces of violence and fate. His cry — 'fortune's fool' — is the moment the Apollonian self recognises its powerlessness against Dionysian chaos. Nietzsche argued that tragedy's purpose is not to depress but to affirm life by confronting suffering directly. Romeo's anguish, if witnessed fully by the audience, creates not despair but **catharsis** — the paradoxical sense that facing the worst of human experience reveals the depth of human feeling.",
      keyWords: [
        { word: "Apollonian", def: "Nietzsche's term for the rational, ordered, individual aspect of human nature" },
        { word: "Dionysian", def: "Nietzsche's term for the chaotic, passionate, instinctive aspect of human nature" },
        { word: "Catharsis", def: "The release of strong emotions through art, producing spiritual renewal" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "romeo-juliet",
    quote: "For never was a story of more woe, than this of Juliet and her Romeo",
    who: "Prince Escalus",
    act: "Act 5, Scene 3",
    themes: ["Love & Death", "Family & Conflict", "Fate & Free Will", "Social Order"],
    keyQuote: {
      text: '"For never was a story of more woe, than this of Juliet and her Romeo"',
      highlight: "woe",
      note: "The Prince's closing couplet — naming Juliet before Romeo — frames the play as Juliet's story and seals the lovers' tragedy with formal, public recognition.",
    },
    technique1: {
      title: "RHYMING COUPLET / FORMAL CLOSURE",
      analysis:
        "The **rhyming couplet** (two lines ending in rhyme) creates a sense of **formal closure** — the story is sealed, finished, complete. The regularity of the rhyme contrasts with the chaos of the preceding deaths, imposing **order** on tragedy. The Prince uses poetic form to contain and process grief, transforming raw suffering into structured narrative.",
      secondPoint:
        "The **superlative** 'never... more woe' makes the lovers' tragedy the worst in all of history — an **absolute** (total, without qualification) claim that elevates their suffering to the status of myth. Shakespeare ensures that Romeo and Juliet transcend their historical moment to become **archetypal** (universally representative) figures of doomed love.",
      keyWords: [
        { word: "Rhyming couplet", def: "Two successive lines of verse that rhyme with each other" },
        { word: "Formal closure", def: "The sense of completion and resolution created by literary structure" },
        { word: "Archetypal", def: "Representing a universal pattern or model; the original example" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "The Prince's final speech represents the only genuine **social progression** in the play: the feud ends. But this progress comes at devastating cost — two children's deaths. Shakespeare presents social change as achievable but only through sacrifice, raising the question of whether a society that requires the deaths of its youth to reform itself deserves reformation.",
      keyWords: [
        { word: "Social progression", def: "Positive change in the structures and values of a community" },
        { word: "Sacrifice", def: "The act of giving up something precious for a greater purpose" },
      ],
    },
    technique2: {
      title: "NAMING ORDER — 'JULIET AND HER ROMEO'",
      analysis:
        "Crucially, the Prince says '**Juliet** and her Romeo' — placing Juliet first and making Romeo grammatically 'hers.' This final act of naming **subverts** (reverses) patriarchal convention: throughout the play, women are defined by their relationship to men (Capulet's wife, Montague's son). In the last line, the man belongs to the woman. Shakespeare's final word on the subject privileges Juliet's perspective.",
      secondPoint:
        "The possessive '**her** Romeo' is also deeply poignant: in death, Juliet finally possesses Romeo freely — something she could never do in life within the constraints of patriarchal Verona. The grammar grants in death what society denied in life — ownership of one's own love.",
      keyWords: [
        { word: "Subvert", def: "To undermine or reverse the expected or established order" },
        { word: "Patriarchal convention", def: "Established social practices that privilege men over women" },
        { word: "Poignant", def: "Evoking a keen sense of sadness or regret" },
      ],
    },
    context: {
      points: [
        {
          label: "THE PRINCE AS STATE AUTHORITY",
          text: "Prince Escalus represents **civic authority** — the state's power to impose order on private feuds. His failure to prevent the tragedy despite earlier warnings reflects the limits of political authority in the face of entrenched social conflict. Shakespeare suggests that law alone cannot reform society; only catastrophe can break the cycle of violence.",
        },
        {
          label: "MEMORIALISATION",
          text: "The Prince's closing speech transforms private grief into **public memorialisation** — the lovers' story becomes a city's narrative. This mirrors the function of Shakespeare's play itself: art transforms individual suffering into shared cultural memory, giving death meaning by ensuring it is remembered.",
        },
      ],
      keyWords: [
        { word: "Civic authority", def: "The power of the state or government to enforce order and justice" },
        { word: "Memorialisation", def: "The act of preserving the memory of people or events for future generations" },
        { word: "Cultural memory", def: "The shared knowledge and stories that a community preserves over time" },
      ],
    },
    wow: {
      title: "THE PHARMAKOS — SACRIFICE AND RENEWAL (Girard)",
      analysis:
        "Girard's concept of the **pharmakos** (the sacred sacrifice whose death purifies the community) illuminates the play's ending: Romeo and Juliet function as **pharmakoi** — their deaths are the price the community pays for its own violence. The golden statues erected by the fathers are not merely memorials but acts of **expiation** (atonement for wrongdoing): the families acknowledge that their children's blood is on their hands. Shakespeare presents a society that can only learn through loss — the worst possible form of education. The play's enduring power lies in this question: must innocents always die before societies reform themselves? Three centuries of real-world evidence suggests Shakespeare's answer remains devastatingly accurate.",
      keyWords: [
        { word: "Pharmakos", def: "A sacred scapegoat whose sacrifice restores order to the community" },
        { word: "Expiation", def: "The act of making amends for guilt or wrongdoing" },
        { word: "Atonement", def: "Reparation for a wrong; making amends through suffering or sacrifice" },
      ],
    },
  },
];
