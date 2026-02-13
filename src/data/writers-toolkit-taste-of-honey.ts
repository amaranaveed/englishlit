// ─── Writer's Toolkit — A Taste of Honey (Shelagh Delaney) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const TASTE_OF_HONEY_TOOLKIT: WritersToolkit = {
  textSlug: "taste-of-honey",
  headerQuote: "We don't ask for life, we have it thrust upon us.",
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
          label: "Northern dialect / colloquial speech",
          example:
            '"What\'s the matter with you? What\'s wrong?" — Jo and Helen speak in Salford dialect throughout',
          effect:
            "Authentic working-class voice — Delaney refuses to translate Northern speech into Standard English, insisting that working-class language is valid dramatic speech. The dialect roots every character in Salford's specific geography and class position.",
        },
        {
          label: "Sharp wit and humour",
          example:
            '"I\'d sooner be dead than working in a shop"',
          effect:
            "Dark comedy as survival strategy — Helen converts economic desperation into entertainment, refusing to let poverty produce only misery. The wit gives working-class characters intellectual energy that middle-class drama typically denied them.",
        },
        {
          label: "Sarcasm",
          example:
            '"You packed \'em in, didn\'t you?" — Jo about Helen\'s many men',
          effect:
            "Jo uses sarcasm as a weapon against Helen's lifestyle, exposing her mother's failures through biting mockery rather than earnest confrontation. The sarcasm conceals genuine hurt beneath a surface of hostile comedy.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"What would you do? Throw her out?"',
          effect:
            "Forces the listener (and audience) to confront moral choices without the comfort of easy answers. The rhetorical question exposes the gap between social judgement and practical reality — condemnation is easy when you are not the one facing the situation.",
        },
        {
          label: "Short / clipped sentences",
          example:
            '"The dream\'s gone but the baby\'s real enough"',
          effect:
            "Brutal economy of expression — Jo compresses an entire narrative arc (romance, abandonment, pregnancy) into eleven words. Short sentences reflect a working-class aesthetic where people too busy surviving speak with devastating brevity.",
        },
        {
          label: "Repetition",
          example:
            '"I\'m not just somebody\'s mother. I\'m me. I\'m me"',
          effect:
            "The repeated 'I'm me' insists on selfhood with increasing urgency — Jo hammers the pronoun until it cannot be ignored. Repetition transforms a quiet statement of identity into a defiant assertion of autonomous existence.",
        },
        {
          label: "Metaphor",
          example:
            '"You\'re just a bad smell to me" — Jo to Helen',
          effect:
            "Reduces Helen to something repulsive and pervasive — a smell that invades the senses and cannot be easily escaped. The metaphor captures how Helen's influence lingers even when Jo wants her gone.",
        },
        {
          label: "Simile",
          example:
            '"Like a weasel" — Helen describing herself',
          effect:
            "Self-deprecating animal imagery acknowledges Helen's predatory survivalism — she is cunning, quick, and self-interested. Helen's willingness to compare herself to a weasel reveals her lack of pretension and her dark self-knowledge.",
        },
        {
          label: "Irony",
          example:
            '"It\'s a bit old-fashioned, isn\'t it? The colour bar"',
          effect:
            "Jo dismisses centuries of racial oppression as merely 'old-fashioned' — a devastating understatement that simultaneously trivialises racism and condemns it as outdated. The irony operates at multiple levels: naively optimistic yet quietly radical.",
        },
        {
          label: "Direct / blunt diction",
          example:
            '"You\'re nothing to me. I feel sorry for you"',
          effect:
            "Monosyllabic directness creates maximum emotional impact — each short word lands like a blow. Jo refuses the softening and qualification that polite speech demands, choosing clarity over comfort.",
        },
        {
          label: "Imperative verbs",
          example:
            '"Get out! Get out and leave me alone!" — Jo to Helen',
          effect:
            "Commands assert control over domestic space — Jo claims the flat as her territory and expels Helen from it. The imperatives reverse the parent-child power dynamic: the daughter orders the mother to leave.",
        },
        {
          label: "Understatement",
          example:
            '"We don\'t ask for life, we have it thrust upon us"',
          effect:
            "Jo understates the violence of her circumstances — 'thrust' carries physical force but the tone remains philosophical and measured. The understatement gives Jo intellectual dignity: she does not wail but observes, turning suffering into insight.",
        },
        {
          label: "Emotive language",
          example:
            '"I\'ll bash its brains out! I\'ll kill it!" — Helen about children',
          effect:
            "Helen's hyperbolic violence about children reveals her genuine terror of maternal responsibility. The emotive language shocks the audience but also reveals the raw fear beneath Helen's comic exterior — motherhood is not a joy but a threat.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  2. STRUCTURAL TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Structural Techniques",
      colour: "orange",
      columns: ["Technique", "Example / Description", "What It Does"],
      rows: [
        {
          label: "Two-act structure",
          example:
            "Act One establishes Jo's world; Act Two shows the consequences of her choices and Helen's abandonment",
          effect:
            "The two-act division creates a clear before/after structure — Act One is possibility and Act Two is consequence. The simpler structure (compared to three or five acts) mirrors the directness of working-class life: no elaborate build-up, just cause and effect.",
        },
        {
          label: "Cyclical structure (Jo repeats Helen's pattern)",
          example:
            "Jo ends pregnant, unmarried, and abandoned — mirroring Helen's own history with Jo's father",
          effect:
            "Suggests that working-class women are trapped in cycles of deprivation that repeat across generations. Jo's intelligence and self-awareness are not enough to break the pattern — structural poverty reproduces itself regardless of individual qualities.",
        },
        {
          label: "Seasonal progression",
          example:
            "The play moves from autumn through winter to summer — from darkness toward light, yet the ending remains ambiguous",
          effect:
            "The seasonal arc creates a framework of natural change against which the characters' emotional stagnation becomes more visible. Nature progresses; the social conditions do not.",
        },
        {
          label: "Episodic scenes",
          example:
            "Scenes flow in and out of each other without formal divisions — conversations end and new ones begin organically",
          effect:
            "Reflects the formlessness of real working-class life — there are no neat dramatic divisions, just one thing following another. The episodic structure resists the well-made play tradition that dominated middle-class theatre.",
        },
        {
          label: "Jazz music interludes",
          example:
            "A jazz band plays between scenes and during transitions, providing commentary and atmosphere",
          effect:
            "Jazz — improvised, free, associated with Black culture — becomes the play's emotional language. The music bridges scenes, comments on the action, and connects the play to a wider cultural world beyond the cramped flat.",
        },
        {
          label: "Entrances and exits as structural device",
          example:
            "Characters arrive and leave the flat constantly — Helen leaves, Peter arrives, the Boy comes and goes, Geoffrey moves in, Helen returns",
          effect:
            "The revolving door of the flat mirrors the instability of Jo's life — relationships are transient, and every arrival foreshadows an eventual departure. The flat is a space people pass through, never permanently inhabit.",
        },
        {
          label: "Dramatic irony",
          example:
            "The audience knows Jo's romantic dream with the Boy will end in abandonment before Jo does",
          effect:
            "Creates a dual perspective — the audience watches Jo's naive optimism with painful foreknowledge. The dramatic irony generates sympathy: we want to warn Jo but cannot, trapped in the helplessness of spectatorship.",
        },
        {
          label: "Parallel mother-daughter journeys",
          example:
            "Helen's past (young, pregnant, abandoned by Jo's father) mirrors Jo's present (young, pregnant, abandoned by the Boy)",
          effect:
            "The parallel structure argues that Jo's fate is not personal but systemic — the same conditions produce the same outcomes across generations. Delaney makes a structural argument about class that no single scene could achieve alone.",
        },
        {
          label: "The flat as constant setting",
          example:
            "Almost all action takes place within a single rented flat — a confined, claustrophobic domestic space",
          effect:
            "The unchanging setting becomes a metaphor for entrapment — the characters may change but the cramped flat remains, insisting that environment shapes destiny. The physical space IS the social condition.",
        },
        {
          label: "Shifting domestic arrangements",
          example:
            "Helen and Jo → Jo alone → Jo and the Boy → Jo and Geoffrey → Jo and Helen again",
          effect:
            "The constantly changing household reflects the instability of working-class domestic life where 'family' is improvised rather than fixed. Each new arrangement brings hope; each dissolution brings further evidence that stability is elusive.",
        },
        {
          label: "Time jumps",
          example:
            "Significant periods of time pass between scenes — Jo's pregnancy progresses offstage",
          effect:
            "The gaps force the audience to fill in what happened between scenes, making them active participants in constructing the narrative. The jumps also suggest that the 'boring bits' of daily survival are too mundane for dramatisation.",
        },
        {
          label: "Open / ambiguous ending",
          example:
            "The play ends with Helen leaving to get a drink and Jo alone, in labour — no resolution is provided",
          effect:
            "Delaney refuses to provide comfort or closure — the audience leaves uncertain whether Jo will cope, whether Helen will return, whether the cycle will continue. The open ending insists that real life does not resolve neatly.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  3. DRAMATIC TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Dramatic Techniques",
      colour: "green",
      columns: ["Technique", "Example / Description", "Purpose / Effect"],
      rows: [
        {
          label: "Kitchen sink realism",
          example:
            "The play is set in a shabby rented flat with real domestic details — gas stoves, bare light bulbs, peeling wallpaper",
          effect:
            "Brings working-class domestic reality onto a stage previously dominated by drawing-room elegance. The mundane physical details insist that ordinary life is worthy of dramatic attention — the kitchen sink IS the drama.",
        },
        {
          label: "Direct address to audience",
          example:
            "Characters occasionally speak directly to the audience, breaking the naturalistic frame",
          effect:
            "Creates intimacy between characters and audience — Jo and Helen invite the audience into their world rather than performing behind the fourth wall. The direct address also functions as a Brechtian device, reminding the audience they are watching a play.",
        },
        {
          label: "Jazz band on stage",
          example:
            "Musicians are visibly present on stage, playing between and during scenes",
          effect:
            "The visible band breaks theatrical illusion — the audience can see the mechanics of the production. The jazz band also creates an emotional soundtrack that comments on the action, functioning like a Greek chorus in musical form.",
        },
        {
          label: "Brechtian alienation",
          example:
            "The combination of direct address, visible musicians, and non-naturalistic elements prevents complete emotional absorption",
          effect:
            "Forces the audience to THINK about what they are watching rather than merely feeling it. Delaney wants the audience to leave the theatre questioning social conditions, not simply feeling sorry for Jo.",
        },
        {
          label: "Naturalistic dialogue",
          example:
            '"Oh! It\'s you. Where did you get that from?" — Helen discovering Jo has new possessions',
          effect:
            "Characters speak as real people speak — with interruptions, non-sequiturs, half-finished thoughts, and overlapping conversations. The naturalistic dialogue gives working-class speech the dignity of dramatic language.",
        },
        {
          label: "Physical staging (cramped flat)",
          example:
            "Characters are physically close in the small space — proximity creates tension and intimacy simultaneously",
          effect:
            "The cramped staging makes the audience feel the physical reality of overcrowded housing. Bodies in a small space cannot avoid each other — the staging enacts the impossibility of privacy in poverty.",
        },
        {
          label: "Humour as defence mechanism",
          example:
            '"I\'d sooner be dead than working in a shop" — Helen converting desperation into comedy',
          effect:
            "Comedy prevents emotional collapse — both the characters and the audience are protected from unrelieved despair. The humour is not escapism but a survival strategy: laughing at terrible situations because the alternative is unbearable.",
        },
        {
          label: "Monologue",
          example:
            "Jo's extended reflections on life, identity, and her future when alone in the flat",
          effect:
            "Gives Jo intellectual depth beyond her circumstances — her monologues reveal a philosophical mind trapped in a situation that offers no outlet for her intelligence. The monologues are where Jo is most fully herself.",
        },
        {
          label: "Audience engagement",
          example:
            "The play's informal, conversational tone creates the feeling that the audience is visiting the flat, not watching a performance",
          effect:
            "Breaks down the barrier between audience and working-class experience — the play insists that the audience enter Jo's world rather than observing it from a comfortable distance.",
        },
        {
          label: "Props (drawings, bulb)",
          example:
            "Jo's drawings represent her artistic ambition; the flower bulb Geoffrey gives her symbolises hope and nurture",
          effect:
            "Everyday objects carry symbolic weight — the drawings are Jo's escape into creativity, the bulb is Geoffrey's gentle care made physical. Props ground abstract themes (ambition, nurture) in tangible, working-class reality.",
        },
        {
          label: "Song and music",
          example:
            "Characters sing snatches of popular songs — Helen hums and Jo sings nursery rhymes",
          effect:
            "Music provides emotional release that dialogue cannot — singing bypasses the characters' defensive wit and reveals feelings they would never articulate directly. The songs also root the play in a specific cultural moment.",
        },
        {
          label: "Lighting changes",
          example:
            "Lighting shifts to mark changes in mood, time of day, and emotional atmosphere within the flat",
          effect:
            "Creates visual poetry within the naturalistic setting — the same cramped flat looks different under warm or cold light. Lighting transforms the unchanging physical space, suggesting that perception and mood alter reality.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. FORM AND GENRE
    // ══════════════════════════════════════════════════════════
    {
      title: "Form and Genre",
      colour: "blue",
      columns: ["Form / Genre", "Description", "Effect"],
      rows: [
        {
          label: "Kitchen sink drama",
          example:
            "Set in a working-class flat with domestic realism — peeling wallpaper, gas stoves, and cramped living conditions",
          effect:
            "Rejects the middle-class drawing-room tradition — the play insists that working-class domestic life contains as much dramatic truth as any aristocratic tragedy. The kitchen sink IS the stage.",
        },
        {
          label: "Social realism",
          example:
            "Depicts poverty, single motherhood, interracial relationships, and homosexuality without sentimentality or moral judgement",
          effect:
            "Confronts the audience with social realities that 1950s theatre typically avoided or condemned. Delaney's non-judgemental presentation is itself a political act — refusing to moralise about the lives of the marginalised.",
        },
        {
          label: "Angry Young Woman theatre",
          example:
            "Written by an 18-year-old working-class woman from Salford — a direct challenge to the male-dominated literary establishment",
          effect:
            "Delaney's voice — female, young, Northern, working-class — was unprecedented in British theatre. The play's form IS its politics: a young woman claiming the stage for voices that had never been heard there.",
        },
        {
          label: "Working-class drama",
          example:
            "All characters are working-class; there is no middle-class perspective offered as 'normal' or aspirational",
          effect:
            "Refuses to present working-class life through a middle-class lens — the audience must meet these characters on their own terms. No character apologises for their class position or aspires to be middle-class.",
        },
        {
          label: "Domestic drama",
          example:
            "The play's conflicts are rooted in the home — mother-daughter tensions, pregnancy, cohabitation, and the question of who belongs in the flat",
          effect:
            "Elevates domestic life to the status of serious drama — the personal IS political. The home is not a private retreat from the world but the site where social forces (class, gender, race) are most intensely felt.",
        },
        {
          label: "Tragicomedy",
          example:
            "The play alternates between painful emotional honesty and sharp, often hilarious comedy — sometimes within a single line",
          effect:
            "Reflects the texture of real working-class life where tragedy and comedy coexist. The audience laughs and is moved in rapid succession, denied the comfort of settling into a single emotional register.",
        },
        {
          label: "Political theatre",
          example:
            "Addresses class inequality, racism, homophobia, and gender oppression — presenting marginalised lives with dignity and complexity",
          effect:
            "The play does not preach but politicises through representation — simply showing these lives on stage is a political act in 1958 Britain. Delaney's politics are embedded in form, not imposed through speeches.",
        },
        {
          label: "Slice-of-life",
          example:
            "No conventional plot arc — the play follows Jo through a period of her life without imposing narrative structure or resolution",
          effect:
            "Resists the artificial neatness of well-made plays — life does not have three acts and a tidy resolution. The slice-of-life form argues that working-class existence deserves to be shown as it is, not shaped into middle-class dramatic conventions.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  5. SYMBOLISM AND MOTIFS
    // ══════════════════════════════════════════════════════════
    {
      title: "Symbolism and Motifs",
      colour: "red",
      columns: ["Symbol / Motif", "Meaning / Context", "Example / Significance"],
      rows: [
        {
          label: "The flat / bedsit",
          example:
            '"And this is the place" — Helen\'s deflated introduction to their new home',
          effect:
            "The shabby flat symbolises the limits of working-class aspiration — it is not a home but a temporary shelter, always rented, never owned. The flat is simultaneously prison (trapping its inhabitants) and stage (the only space these lives are allowed to occupy).",
        },
        {
          label: "The flower bulb",
          example:
            "Geoffrey gives Jo a flower bulb to plant — a quiet gesture of care and optimism",
          effect:
            "The bulb symbolises potential life, nurture, and patience — it needs care to grow, just as Jo and her unborn child do. Geoffrey's gift represents the kind of steady, unglamorous love that the play suggests is most valuable.",
        },
        {
          label: "Children's drawings",
          example:
            "Jo's drawings and artistic ambitions — she wants to be an artist but lacks the means to pursue it",
          effect:
            "The drawings symbolise wasted potential — Jo's creativity has no outlet beyond sketches in a rented flat. They represent the talent that poverty buries: not lack of ability but lack of opportunity.",
        },
        {
          label: "Jazz music",
          example:
            "The jazz band plays throughout the production, providing transitions and emotional commentary",
          effect:
            "Jazz symbolises freedom, improvisation, and Black cultural expression — qualities that contrast with the characters' constrained lives. The music offers the liberation the characters cannot achieve: spontaneous, unscripted, and unconstrained by class.",
        },
        {
          label: "Christmas",
          example:
            "Helen and Jo spend Christmas in the flat — a festival of family warmth rendered hollow by their dysfunctional relationship",
          effect:
            "Christmas ironically highlights what the characters lack — warmth, stability, family unity. The seasonal celebration exposes the distance between cultural ideals (the happy family Christmas) and working-class reality.",
        },
        {
          label: "The taste of honey (sweetness in hardship)",
          example:
            '"We don\'t ask for life, we have it thrust upon us" — yet moments of sweetness persist within the hardship',
          effect:
            "The title symbolises the rare moments of joy, connection, and tenderness within otherwise difficult lives. The 'taste' is fleeting — not a meal but a taste, not sustained happiness but a brief experience of sweetness that makes the rest endurable.",
        },
        {
          label: "Pregnancy",
          example:
            "Jo's pregnancy dominates Act Two — her growing body becomes the play's central physical reality",
          effect:
            "Pregnancy symbolises consequence, continuation, and the cyclical nature of working-class women's lives. Jo's body enacts what the play argues: that the past (Helen's pattern) reproduces itself in the present, and that consequences are inescapable.",
        },
        {
          label: "Motherhood",
          example:
            '"I\'m not just somebody\'s mother. I\'m me" — Jo resists being defined by her maternal role',
          effect:
            "Motherhood is presented not as natural fulfilment but as a contested identity — something imposed by circumstance rather than chosen. The play challenges the 1950s idealisation of motherhood by showing its costs and contradictions.",
        },
        {
          label: "The gas stove",
          example:
            "The broken or inadequate gas stove in the flat — a mundane domestic object with symbolic weight",
          effect:
            "The stove symbolises the basic necessities that poverty makes unreliable — warmth, food, comfort. Its presence (or dysfunction) is a constant reminder that domestic survival requires resources these characters do not have.",
        },
        {
          label: "Helen's fur coat",
          example:
            "Helen wears a fur coat despite living in poverty — an aspirational accessory that contradicts her actual circumstances",
          effect:
            "The fur coat symbolises Helen's refusal to accept her class position — she dresses above her station, performing a prosperity she does not possess. The coat is both pathetic (self-deception) and defiant (refusing to look poor).",
        },
        {
          label: "The river / docks area",
          example:
            "The flat is located near the Salford docks — an industrial, working-class landscape",
          effect:
            "The docks symbolise the transient, industrial world these characters inhabit — ships come and go (like the Boy, a sailor), workers are temporary, and nothing is permanent. The landscape mirrors the instability of the characters' lives.",
        },
        {
          label: "Light and darkness",
          example:
            "The flat is often described as dark, with inadequate lighting — Jo and Geoffrey try to brighten it",
          effect:
            "Light symbolises hope, clarity, and the effort to improve one's circumstances; darkness represents despair, ignorance, and the conditions that working-class people are forced to endure. The struggle for light is the struggle for a better life.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Conceptual Method", "Description", "Example / Application"],
      rows: [
        {
          label: "Class and poverty",
          example:
            '"We don\'t ask for life, we have it thrust upon us" — Jo articulates working-class fatalism',
          effect:
            "Poverty is not background but foreground — the play argues that class determines every aspect of these characters' lives: their housing, relationships, opportunities, and futures. Delaney presents poverty as a structural condition, not a personal failure.",
        },
        {
          label: "Race in 1950s Britain",
          example:
            '"It\'s a bit old-fashioned, isn\'t it? The colour bar" — Jo dismisses racism as outdated',
          effect:
            "Delaney presents an interracial relationship and a mixed-race pregnancy without moral judgement in post-Windrush, post-Notting Hill riots Britain. The play's quiet normalisation of racial diversity was radical for 1958.",
        },
        {
          label: "Gender expectations",
          example:
            '"I\'m not just somebody\'s mother. I\'m me" — Jo refuses to be defined by motherhood alone',
          effect:
            "The play systematically dismantles 1950s gender expectations: Helen rejects domesticity, Jo rejects maternal identity, and Geoffrey challenges masculine norms. Delaney argues that gender roles constrain rather than fulfil.",
        },
        {
          label: "Single motherhood",
          example:
            "Both Helen and Jo face pregnancy and parenting alone — without stable partners or financial security",
          effect:
            "Delaney presents single motherhood without condemnation, challenging the stigma that 1950s society attached to unmarried mothers. The play asks the audience to see the courage, not the scandal, in these women's situations.",
        },
        {
          label: "LGBTQ+ representation (Geoffrey)",
          example:
            '"I\'d rather be dead than away from you" — Geoffrey\'s devotion to Jo is constant and selfless',
          effect:
            "Geoffrey — implied to be gay — is the play's most caring, nurturing character. Delaney inverts 1950s assumptions: the homosexual man (illegal and stigmatised in 1958) is presented as the most competent parent figure, challenging homophobic prejudice through quiet dramatic demonstration.",
        },
        {
          label: "The welfare state",
          example:
            "The characters exist on the margins of post-war welfare provision — Jo does not appear to receive adequate support despite her vulnerability",
          effect:
            "The play implicitly questions whether the welfare state reaches those who need it most. Jo's pregnancy, youth, and poverty should trigger support, yet she relies on informal networks (Geoffrey, reluctantly Helen) rather than state provision.",
        },
        {
          label: "Kitchen sink realism as concept",
          example:
            "The play belongs to the late-1950s movement that brought working-class domestic life to the stage",
          effect:
            "Kitchen sink realism is not merely a style but an argument: that working-class lives are as dramatically significant as aristocratic ones. By choosing this form, Delaney makes a political statement about whose stories matter.",
        },
        {
          label: "Unconventional family",
          example:
            "Jo and Geoffrey form an alternative domestic unit — a pregnant teenager and a gay man creating a household based on mutual care",
          effect:
            "Delaney argues that family is defined by care, not by blood or convention. The Jo-Geoffrey household — queer, unmarried, improvised — is the play's most functional domestic arrangement, quietly demolishing the nuclear family ideal.",
        },
        {
          label: "Cyclical deprivation",
          example:
            "Jo repeats Helen's pattern: young pregnancy, absent partner, economic insecurity — the cycle continues across generations",
          effect:
            "The play's cyclical structure argues that poverty reproduces itself — not because the poor are morally deficient but because structural conditions limit choices. Jo's intelligence cannot overcome circumstances that the system refuses to change.",
        },
        {
          label: "Female independence",
          example:
            '"You\'re nothing to me. I feel sorry for you" — Jo declares emotional independence from Helen',
          effect:
            "Both Jo and Helen pursue independence on their own terms — Helen through men, Jo through self-reliance. The play presents female independence as both necessary (these women cannot depend on institutions) and costly (it comes at the price of isolation and vulnerability).",
        },
        {
          label: "Youthful resilience",
          example:
            '"The dream\'s gone but the baby\'s real enough" — Jo faces reality without self-pity or collapse',
          effect:
            "Jo's resilience is not cheerful optimism but pragmatic endurance — she survives not because she is hopeful but because she refuses to be defeated. Delaney presents youth as a source of strength: Jo bends under pressure but does not break.",
        },
        {
          label: "1950s social attitudes",
          example:
            "The play confronts attitudes toward race, sexuality, class, and gender that 1958 audiences would have held as normal and unquestionable",
          effect:
            "Delaney uses the stage as a mirror — by presenting marginalised lives with dignity and complexity, she forces the audience to examine their own prejudices. The play does not lecture; it demonstrates, trusting the audience to recognise injustice when they see it clearly.",
        },
      ],
    },
  ],
};
