// ─── Writer's Toolkit — An Inspector Calls (J.B. Priestley) ───

export interface ToolkitRow {
  label: string;
  example: string;
  effect: string;
}

export interface ToolkitSection {
  title: string;
  colour: string;
  columns: [string, string, string];
  rows: ToolkitRow[];
}

export interface WritersToolkit {
  textSlug: string;
  headerQuote: string;
  sections: ToolkitSection[];
}

export const INSPECTOR_CALLS_TOOLKIT: WritersToolkit = {
  textSlug: "inspector-calls",
  headerQuote:
    "We don't live alone. We are members of one body. We are responsible for each other.",
  sections: [
    // ══════════════════════════════════════════════════════════
    //  1. LANGUAGE
    // ══════════════════════════════════════════════════════════
    {
      title: "Language",
      colour: "purple",
      columns: ["Technique", "Example", "What It Reveals"],
      rows: [
        {
          label: "Diction (word choice)",
          example: '"A man has to mind his own business"',
          effect:
            "Shows Birling's selfish capitalist values — the possessive 'his own' draws a tight circle of responsibility around the individual, excluding the wider community.",
        },
        {
          label: "Adjectives / adverbs",
          example: '"Sharp ring of a front door bell"',
          effect:
            "Suggests intrusion and moral awakening — the adjective 'sharp' implies the Inspector's arrival cuts through the comfortable atmosphere like a blade.",
        },
        {
          label: "Repetition",
          example: '"We are members of one body. We are responsible for each other"',
          effect:
            "Reinforces moral responsibility — the anaphoric 'We are' creates an inescapable collectivist message, refusing to let any individual exclude themselves.",
        },
        {
          label: "Imperatives",
          example: '"Don\'t interfere" / "Stop it, you two"',
          effect:
            "Assert power and control — Birling uses commands to silence dissent within his own family, policing moral feeling as well as behaviour.",
        },
        {
          label: "Rhetorical questions",
          example: '"Why — you fool — he knows!"',
          effect:
            "Heighten tension and dramatic irony — Sheila's exasperation exposes others' failure to see what she considers obvious about the Inspector's omniscience.",
        },
        {
          label: "Euphemism",
          example: '"Discharged her" / "Got into trouble"',
          effect:
            "Hides uncomfortable truths and moral hypocrisy — sanitised language distances the Birlings from the real human consequences of their actions.",
        },
        {
          label: "Colloquialism",
          example: '"Rubbish!" / "Rot!"',
          effect:
            "Reveals arrogance and dismissiveness — Birling's blunt exclamations silence Eric's tentative sympathy, actively enforcing indifference in others.",
        },
        {
          label: "Emotive language",
          example: '"Burnt her inside out" / "Fire and blood and anguish"',
          effect:
            "Creates shock and guilt in audience — graphic, visceral diction forces confrontation with the physical reality of suffering that the Birlings try to abstract away.",
        },
        {
          label: "Metaphor / imagery",
          example:
            '"A girl of that class" vs "we helped to kill her"',
          effect:
            "Divides between denial and acceptance — the contrast between dehumanising class language and the direct accusation of killing exposes the gap between evasion and truth.",
        },
        {
          label: "Contrast / juxtaposition",
          example:
            '"The Titanic — unsinkable, absolutely unsinkable"',
          effect:
            "Dramatic irony exposing Birling's ignorance — the intensifier 'absolutely' amplifies the irony; his certainty is inversely proportional to his understanding.",
        },
        {
          label: "Irony",
          example:
            '"Clothes mean something quite different to a woman"',
          effect:
            "Highlights condescension and gender roles — Birling's patronising remark reveals the patriarchal assumptions that allow the family to exploit Eva without guilt.",
        },
        {
          label: "Polysyndeton / listing",
          example:
            '"their lives, their hopes and fears, their suffering and chance of happiness"',
          effect:
            "Humanises the working class by accumulating emotions and aspirations — the Inspector's list counteracts the Birlings' tendency to reduce workers to statistics.",
        },
        {
          label: "Short, abrupt sentences",
          example: '"A girl died tonight" / "No, wait a minute"',
          effect:
            "Increase tension and urgency — declarative simplicity refuses the Birlings' tendency to complicate and deflect from moral truth.",
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
          label: "Cyclical structure",
          example: "Ends with another phone call announcing a real Inspector is on his way",
          effect:
            "Suggests history repeats unless lessons are learned — refuses the audience comfortable closure, insisting that the moral question remains open.",
        },
        {
          label: "Three-act structure",
          example:
            "Each act heightens tension and moral conflict, building toward revelation",
          effect:
            "Builds dramatic momentum — Act 1 establishes complacency, Act 2 deepens guilt, Act 3 delivers moral reckoning and tests whether change is possible.",
        },
        {
          label: "Cliff-hanger endings",
          example:
            '"A police inspector is on his way here" — final line',
          effect:
            "Sustains tension and moral reflection beyond each act — the audience is denied resolution, forcing continued engagement with the play's moral questions.",
        },
        {
          label: "Gradual revelation",
          example:
            "Inspector reveals each character's guilt step by step, one at a time",
          effect:
            "Forces audience to face collective responsibility — the chain of guilt builds link by link, proving that Eva's destruction was systemic, not individual.",
        },
        {
          label: "Change in lighting",
          example:
            '"Pink and intimate" → "brighter and harder" when the Inspector arrives',
          effect:
            "Symbolic exposure of truth — the lighting is a metaphor for the transition from complacent self-delusion to uncomfortable moral scrutiny.",
        },
        {
          label: "Entrances and exits",
          example:
            "Inspector's arrival interrupts Birling's capitalist speech mid-sentence",
          effect:
            "Controls the pace of moral revelation — Priestley literally silences capitalism with the arrival of social conscience.",
        },
        {
          label: "Shifts in tone",
          example:
            "From complacency → panic → realisation across the three acts",
          effect:
            "Mirrors the moral journey Priestley demands of his audience — the emotional arc of the play is the arc of awakening.",
        },
        {
          label: "Turning points",
          example: "Eva's suicide revealed / Mrs Birling condemns the father / final phone call",
          effect:
            "Pivot points of moral consequence — each turning point forces characters (and the audience) to confront a deeper level of culpability.",
        },
        {
          label: "Parallel structure",
          example:
            "Each family member is linked to Eva through a separate act of exploitation",
          effect:
            "Shows chains of guilt — the parallel structure argues that Eva's destruction was not one person's fault but a systemic failure of the entire class.",
        },
        {
          label: "Foreshadowing",
          example:
            '"They\'ll be taught it in fire and blood and anguish"',
          effect:
            "Prophetic tricolon carries apocalyptic weight — the 1945 audience knows this prophecy was literally fulfilled through two World Wars.",
        },
        {
          label: "Real-time unfolding",
          example:
            "Events play out continuously in a single evening without time jumps",
          effect:
            "Heightens realism and tension — the audience experiences the moral pressure in real time, with no escape or relief.",
        },
        {
          label: "Interrupted speeches",
          example:
            '"a man has to mind his own business and look after himself and his own — and —" (doorbell)',
          effect:
            "Birling's philosophy is never allowed to reach its conclusion — Priestley structurally silences the ideology the play exists to dismantle.",
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
          label: "Dramatic irony",
          example:
            "Birling's confident predictions about the Titanic and war — the 1945 audience knows he is catastrophically wrong",
          effect:
            "Exposes arrogance of capitalism — destroys Birling's credibility before the Inspector arrives, ensuring the audience distrusts his entire worldview.",
        },
        {
          label: "Stage directions",
          example:
            '"Heavily comfortable" home / Inspector creates "an impression of massiveness, solidity and purposefulness"',
          effect:
            "Symbolise wealth and complacency vs moral authority — Priestley uses physical description to establish the ideological conflict before any dialogue.",
        },
        {
          label: "Lighting",
          example:
            'Becomes "brighter and harder" when the Inspector enters',
          effect:
            "Represents truth and moral exposure — the Inspector's presence literally changes the world of the play from comfortable illusion to harsh reality.",
        },
        {
          label: "Props",
          example: "Photograph, engagement ring, telephone",
          effect:
            "Objects as catalysts for truth or symbolism — the photograph forces recognition, the ring symbolises the broken social contract, the telephone delivers the final moral reckoning.",
        },
        {
          label: "The Inspector's timing",
          example:
            "Arrives exactly when Birling states his anti-social philosophy; leaves immediately after his prophetic speech",
          effect:
            "Controls moral revelation with surgical precision — his timing is so exact it suggests supernatural or allegorical purpose rather than realistic police procedure.",
        },
        {
          label: "Role reversal",
          example:
            'Sheila judges her parents: "I\'m ashamed of you as well — yes both of you"',
          effect:
            "Inverts the family hierarchy — moral authority is earned through conscience, not inherited through age or class, arguing that the young must lead change.",
        },
        {
          label: "The photograph device",
          example: "Inspector shows the photograph one person at a time, preventing comparison",
          effect:
            "Creates structural ambiguity about whether all characters saw the same woman — controls information and forces individual confession rather than collective evasion.",
        },
        {
          label: "Breaking the fourth wall",
          example:
            'Inspector\'s final speech addresses the audience as much as the Birlings: "We are responsible for each other"',
          effect:
            "Functions as a Brechtian alienation effect — forces the audience out of passive entertainment into active moral reflection and political commitment.",
        },
        {
          label: "Naturalistic dialogue",
          example:
            "Characters speak in realistic Edwardian register with interruptions, hesitations, and class-specific diction",
          effect:
            "Mirrors 1912 class dynamics — the realistic speech patterns make the social critique feel authentic and grounded rather than abstract.",
        },
        {
          label: "The unseen character (Eva Smith)",
          example:
            "Eva never appears on stage — her story is reconstructed entirely through others' accounts",
          effect:
            "Forces the audience to construct Eva from self-serving accounts — her absence keeps her universal (she IS every exploited worker) and dramatises the silencing of the powerless.",
        },
        {
          label: "Dramatic tension",
          example:
            "Mrs Birling unknowingly condemns her own son: \"he should be made an example of\"",
          effect:
            "Creates devastating ironic trap — the audience watches with dread as Mrs Birling builds the case against Eric, proving the Inspector's method of giving them 'rope to hang themselves'.",
        },
        {
          label: "Moral proxy characters",
          example:
            "Sheila and Eric function as audience surrogates who model the correct moral response",
          effect:
            "Guides the audience's moral journey — the younger generation's transformation provides a path the 1945 audience is invited to follow.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. FORM AND GENRE
    // ══════════════════════════════════════════════════════════
    {
      title: "Form and Genre",
      colour: "blue",
      columns: ["Form / Technique", "Description", "Effect"],
      rows: [
        {
          label: "Morality play",
          example:
            "Each character faces moral testing — their response reveals their virtue or vice",
          effect:
            "Exposes vices of pride, greed, and hypocrisy — the Inspector functions as a morality figure who tests each soul and pronounces judgement.",
        },
        {
          label: "Didactic structure",
          example:
            "Clear moral purpose delivered through the Inspector's speeches and the play's resolution",
          effect:
            "Teaches audience social responsibility directly — Priestley instrumentalises the play as a political manifesto for the 1945 welfare state.",
        },
        {
          label: "Well-made play",
          example:
            "Builds to a climactic twist with the final phone call reversing the false resolution",
          effect:
            "Keeps audience engaged and reflective — the structural satisfaction of the twist forces the moral lesson to land with maximum dramatic impact.",
        },
        {
          label: "Detective genre inversion",
          example:
            "The Inspector investigates morality, not crime — there is no legal case, only a moral one",
          effect:
            'Makes audience "detectives" of conscience — by inverting the genre, Priestley shifts the investigation from whodunit to who-is-responsible.',
        },
        {
          label: "Real-time setting",
          example:
            "Events unfold continuously in a single evening within the Birling dining room",
          effect:
            "Heightens realism and tension — the unity of time and place creates a pressure-cooker atmosphere with no escape from moral scrutiny.",
        },
        {
          label: "Naturalistic dialogue",
          example:
            "Socially realistic speech patterns reflecting Edwardian class distinctions",
          effect:
            "Mirrors 1912 class dynamics — makes the social hierarchy visible through language, from Birling's 'provincial' speech to the Inspector's measured authority.",
        },
        {
          label: "Social commentary form",
          example:
            "Political theatre written in 1945 within a post-war socialist context",
          effect:
            "Urges collective change — the play is designed to persuade the audience to vote Labour and support the welfare state, functioning as dramatic propaganda for social justice.",
        },
        {
          label: "Drawing-room drama",
          example:
            "Confined to the Birling dining room — a private, bourgeois domestic space",
          effect:
            "The private space is invaded by public accountability — Priestley argues that actions taken behind closed doors have social consequences that cannot be contained.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  5. SYMBOLISM AND MOTIFS
    // ══════════════════════════════════════════════════════════
    {
      title: "Symbolism and Motifs",
      colour: "red",
      columns: ["Symbol / Motif", "Meaning / Context", "Example Use"],
      rows: [
        {
          label: "The Inspector",
          example:
            "Moral conscience, collective voice, possibly supernatural — 'Goole' puns on 'ghoul'",
          effect:
            "Challenges each character's morality and functions as Priestley's mouthpiece for social responsibility.",
        },
        {
          label: "Eva Smith / Daisy Renton",
          example:
            "The exploited working class, everywoman figure — 'Eva' echoes 'Eve' (all women), 'Smith' is the most common English surname",
          effect:
            "Exposes social inequality — her multiple names suggest she represents not one woman but an entire class destroyed by the system.",
        },
        {
          label: "The engagement ring",
          example:
            "Symbol of the social contract between upper-class families — a transaction, not a romance",
          effect:
            "Represents false security and broken promises — Sheila's return of the ring signals that the old social arrangements cannot survive moral scrutiny.",
        },
        {
          label: "The telephone",
          example:
            "Communication, exposure, and cyclical warning — delivers both the false reprieve and the final reckoning",
          effect:
            "The final phone call creates the cyclical structure — history repeats, and the moral test will come again until it is passed.",
        },
        {
          label: "Lighting",
          example:
            'From "pink and intimate" (warm, comfortable) to "brighter and harder" (exposure, truth)',
          effect:
            "Symbol of interrogation and truth — the lighting shift is a visual metaphor for the play's central movement from ignorance to moral awareness.",
        },
        {
          label: "Names",
          example:
            '"Birling" suggests burning/boiling arrogance; "Eva" echoes Biblical Eve (universal humanity); "Goole" puns on ghoul',
          effect:
            "Symbolic of creation and downfall — Priestley embeds meaning in names to signal each character's thematic function.",
        },
        {
          label: "The 1912 time setting",
          example:
            "Set two years before WWI but performed in 1945 — the gap creates devastating dramatic irony",
          effect:
            "Warns the 1945 audience not to repeat the mistakes of the past — every complacent Edwardian certainty has been proved catastrophically wrong.",
        },
        {
          label: "War references",
          example:
            '"Fire and blood and anguish" — the Inspector\'s prophetic tricolon',
          effect:
            "Contextual warning of the consequences of greed and social irresponsibility — the 1945 audience knows this prophecy was already fulfilled.",
        },
        {
          label: "Class and gender divisions",
          example:
            "Upper vs working class, men vs women — every relationship in the play is structured by power imbalance",
          effect:
            "Embody Priestley's critique of patriarchy and capitalism — the play argues that both systems dehumanise the vulnerable for the comfort of the powerful.",
        },
        {
          label: "Youth as renewal",
          example:
            "Sheila and Eric's genuine remorse vs their parents' stubborn denial",
          effect:
            "Symbolises post-war social hope — the younger generation represents Britain's chance to build a more just society if they choose conscience over comfort.",
        },
        {
          label: "The dining table",
          example:
            "The family gathered around a celebratory dinner that is progressively destroyed",
          effect:
            "Symbol of bourgeois comfort and family unity — the Inspector's investigation dismantles both, exposing the rot beneath the surface.",
        },
        {
          label: "The photograph",
          example:
            "Shown one person at a time — a controlled, rationed revelation of truth",
          effect:
            "Eva's only physical presence on stage — functions as a moral mirror; each character's reaction reveals their guilt.",
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
          label: "Anagnorisis",
          example:
            "Moment of recognition or moral awakening",
          effect:
            "Sheila's transformation from naive socialite to moral authority — she recognises the truth the Inspector reveals and cannot 'unsee' it.",
        },
        {
          label: "Hubris",
          example:
            "Excessive pride or self-confidence leading to downfall",
          effect:
            "Birling's arrogance — his Titanic prediction and capitalist philosophy are systematically demolished, proving that certainty without wisdom is dangerous.",
        },
        {
          label: "Allegory",
          example:
            "A story with a hidden moral or political meaning",
          effect:
            "The play functions as a moral allegory for post-war Britain — the Birling household represents the old order that must be replaced by collective responsibility.",
        },
        {
          label: "Catharsis",
          example:
            "Audience's emotional release at recognition of truth",
          effect:
            "The final phone call delivers catharsis — the audience's tension is released through the confirmation that the moral lesson was real and inescapable.",
        },
        {
          label: "Social Realism",
          example:
            "Authentic portrayal of class dynamics and social inequality",
          effect:
            "Priestley uses realistic 1912 class dynamics to expose the mechanisms of exploitation — the naturalistic setting makes the political argument feel grounded.",
        },
        {
          label: "Temporal irony",
          example:
            "1912 setting written and performed in 1945",
          effect:
            "The dual time frame is Priestley's most powerful structural device — every Edwardian certainty has been disproved by history, giving the audience godlike knowledge.",
        },
        {
          label: "Didactic tone",
          example:
            "Priestley teaches a moral/social lesson directly through the Inspector's speeches",
          effect:
            "The play abandons dramatic subtlety for direct political instruction — the Inspector's final speech is a manifesto, not a character moment.",
        },
        {
          label: "Collective responsibility motif",
          example:
            '"We are members of one body" — organic metaphor echoing 1 Corinthians 12:27',
          effect:
            "Priestley's central thesis given religious and universal authority — society is a single living organism, not a collection of competing individuals.",
        },
        {
          label: "Circular narrative",
          example:
            "The ending repeats the beginning — another Inspector is coming",
          effect:
            "Warns of repeated mistakes — the cyclical structure insists that moral reckoning cannot be avoided, only postponed.",
        },
        {
          label: "Foreshadowing of war / judgement",
          example:
            "Inspector's prophetic tricolon: \"fire and blood and anguish\"",
          effect:
            "Moral prophecy through the Inspector's speech — for the 1945 audience, this is not prediction but devastating retrospective truth.",
        },
        {
          label: "Dramatic unity",
          example:
            "Unity of time, place, and action — single evening, single room, single investigation",
          effect:
            "Creates an inescapable moral pressure-cooker — no character (and no audience member) can leave until the truth has been fully exposed.",
        },
        {
          label: "Brechtian alienation",
          example:
            "The Inspector breaks naturalistic convention to address the audience directly",
          effect:
            "Forces the audience out of passive entertainment into active moral and political engagement — the play demands a response, not just appreciation.",
        },
      ],
    },
  ],
};
