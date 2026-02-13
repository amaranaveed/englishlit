// ─── Writer's Toolkit — A Christmas Carol (Charles Dickens) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const CHRISTMAS_CAROL_TOOLKIT: WritersToolkit = {
  textSlug: "christmas-carol",
  headerQuote: "Mankind was my business.",
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
          label: "Diction (word choice)",
          example:
            '"Hard and sharp as flint, from which no steel had ever struck out generous fire"',
          effect:
            "The mineral imagery reduces Scrooge to something inhuman and geological — he is presented as incapable of warmth or generosity, defined entirely by coldness and resistance.",
        },
        {
          label: "Simile",
          example: '"Solitary as an oyster"',
          effect:
            "Suggests Scrooge is closed off, sealed inside a hard shell of self-imposed isolation — but an oyster may contain a pearl, foreshadowing the hidden goodness within him.",
        },
        {
          label: "Metaphor",
          example:
            '"The cold within him froze his old features"',
          effect:
            "Dickens presents Scrooge's miserliness as an internal condition that physically manifests — his emotional coldness literally shapes his appearance, blurring the boundary between character and body.",
        },
        {
          label: "Personification",
          example:
            '"The fog came pouring in at every chink and keyhole"',
          effect:
            "The fog is given agency, actively invading private spaces — it symbolises the moral blindness and spiritual suffocation that pervade Scrooge's London.",
        },
        {
          label: "Contrast / Juxtaposition",
          example:
            'Scrooge\'s cold, dark counting-house vs the Cratchits\' warm, joyful home with "Bob\'s weak punch"',
          effect:
            "Highlights that wealth does not guarantee happiness — the Cratchits possess emotional richness that Scrooge's material wealth cannot buy, reinforcing Dickens's moral argument.",
        },
        {
          label: "Repetition",
          example:
            '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge!"',
          effect:
            "The exclamatory repetition of Scrooge's defining qualities creates a relentless catalogue of miserliness — the narrator seems to delight in stacking up evidence of his subject's faults.",
        },
        {
          label: "Dialogue (register)",
          example:
            '"Are there no prisons? Are there no workhouses?"',
          effect:
            "Scrooge's cold, clipped register echoes the callous Malthusian rhetoric of the Victorian establishment — he reduces human suffering to an administrative question.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Are these the shadows of the things that Will be, or are they shadows of things that May be, only?"',
          effect:
            "Scrooge's desperate questions mark his moral awakening — the shift from passive acceptance to active interrogation shows he now understands that the future can be changed.",
        },
        {
          label: "Emotive language",
          example:
            '"The chubby little hand of Tiny Tim" and "the child\'s plaintive little voice"',
          effect:
            "Dickens deliberately sentimentalises Tiny Tim to provoke pathos and guilt — the diminutive adjectives make the reader feel protective, amplifying the horror of his potential death.",
        },
        {
          label: "Hyperbole",
          example:
            '"Old Marley was as dead as a door-nail"',
          effect:
            "The exaggerated assertion establishes the narrator's chatty, humorous tone from the opening line — while also insisting on a factual foundation that makes the supernatural visitation all the more shocking.",
        },
        {
          label: "Imagery of light and warmth",
          example:
            'The Ghost of Christmas Present appears amid a "blaze of ruddy light" surrounded by a feast',
          effect:
            "Light and warmth consistently symbolise generosity, community, and the Christmas spirit — they are set against the cold and darkness of Scrooge's isolation.",
        },
        {
          label: "Symbolic weather imagery",
          example:
            '"It was cold, bleak, biting weather: foggy withal"',
          effect:
            "Pathetic fallacy mirrors Scrooge's emotional state — the hostile, impenetrable weather externalises his internal condition of spiritual isolation and moral blindness.",
        },
        {
          label: "Alliteration / sound patterning",
          example:
            '"Secret, and self-contained, and solitary as an oyster"',
          effect:
            "The sibilant alliteration creates a hissing, closed sound that aurally enacts Scrooge's shut-off nature — the repeated 's' sounds mimic the sealing of his shell against humanity.",
        },
        {
          label: "Religious lexis",
          example:
            '"God bless us, every one!" and Marley\'s "Mankind was my business"',
          effect:
            "Christian vocabulary reinforces Dickens's moral framework — charity and compassion are presented as religious duties, and Scrooge's transformation is framed as a spiritual redemption.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  2. STRUCTURAL TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Structural Techniques",
      colour: "orange",
      columns: ["Technique", "Example / Description", "Effect / Purpose"],
      rows: [
        {
          label: "Five-stave structure",
          example:
            "The novella is divided into five 'staves' (musical terms for sections of a song) rather than chapters",
          effect:
            "Reinforces the Christmas carol metaphor — the text itself is structured as a song of redemption, with each stave building toward a harmonious moral resolution.",
        },
        {
          label: "Cyclical structure",
          example:
            "Opens with Scrooge as a cold miser and closes with him as a generous benefactor, both scenes set on Christmas",
          effect:
            "Demonstrates the completeness of Scrooge's transformation — the return to the same setting with a transformed character proves that change is possible within the structures of everyday life.",
        },
        {
          label: "Transformation arc",
          example:
            "Scrooge progresses from isolation and cruelty through fear and regret to joy and generosity across the five staves",
          effect:
            "Provides a clear moral trajectory that models the change Dickens demands of his readers — the arc argues that even the most hardened miser can be redeemed.",
        },
        {
          label: "Contrast of settings",
          example:
            "Scrooge's dark, cold counting-house vs the Cratchits' cramped but warm and loving home",
          effect:
            "Physical settings embody moral conditions — wealth without love produces darkness, while poverty with love produces light, inverting the expected social hierarchy.",
        },
        {
          label: "Chronological progression (Past / Present / Yet to Come)",
          example:
            "Three ghosts show Scrooge his past, present, and potential future in sequence",
          effect:
            "Creates a logical chain of cause and consequence — Scrooge sees how his choices shaped his present and will determine his future, making moral responsibility inescapable.",
        },
        {
          label: "Narrative voice (omniscient, humorous, moralising)",
          example:
            '"There is no doubt that Marley was dead. This must be distinctly understood, or nothing wonderful can come of the story I am going to relate"',
          effect:
            "The intrusive narrator establishes a direct, confiding relationship with the reader — the chatty, humorous tone disarms the audience before delivering serious moral lessons.",
        },
        {
          label: "Foreshadowing",
          example:
            'Marley\'s ghost warns "You will be haunted by Three Spirits" and the Ghost of Christmas Present reveals Ignorance and Want beneath his robe',
          effect:
            "Creates anticipation and dread — foreshadowing builds moral tension by warning both Scrooge and the reader that consequences are approaching.",
        },
        {
          label: "Juxtaposition",
          example:
            "Fred's warm Christmas party is placed immediately after Scrooge's cold refusal of his invitation",
          effect:
            "Sharpens the moral contrast by forcing direct comparison — the reader experiences both rejection and generosity in quick succession, making Scrooge's choice feel actively harmful.",
        },
        {
          label: "Circular ending",
          example:
            'Scrooge wakes on Christmas morning and declares "I don\'t know what day of the month it is! I don\'t know how long I have been among the Spirits"',
          effect:
            "Returns to the beginning with transformation complete — the circular structure suggests rebirth and renewal, framing Scrooge's change as a second chance at life.",
        },
        {
          label: "Interwoven moral commentary",
          example:
            'The narrator interrupts the story to comment: "Oh! But he was a tight-fisted hand at the grindstone"',
          effect:
            "Ensures the reader cannot passively consume the story without engaging with its moral message — Dickens uses the narrator to direct interpretation and prevent moral evasion.",
        },
        {
          label: "Narrator directly addresses reader",
          example:
            '"You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail"',
          effect:
            "Breaks the fictional frame to create intimacy and shared understanding — the reader becomes a companion whom the narrator guides through the moral journey.",
        },
        {
          label: "Climactic structure of the ghosts",
          example:
            "Each ghost is progressively more frightening: Past is gentle, Present is imposing, Yet to Come is silent and terrifying",
          effect:
            "Escalating fear mirrors escalating moral stakes — the increasing dread parallels Scrooge's growing awareness that his choices have fatal consequences.",
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
          label: "Narrative perspective (omniscient narrator)",
          example:
            "The narrator knows Scrooge's thoughts, feelings, and future — and shares them selectively with the reader",
          effect:
            "Creates dramatic irony — the reader often understands the moral significance of events before Scrooge does, generating tension and anticipation.",
        },
        {
          label: "Allegory",
          example:
            "Scrooge's journey represents the moral redemption available to all of Victorian society if it chooses compassion over greed",
          effect:
            "Elevates a personal story to a universal moral argument — Scrooge is not just one man but a symbol of an entire class that Dickens urges to change.",
        },
        {
          label: "Morality tale structure",
          example:
            "Scrooge is tested by supernatural agents and must choose between damnation (continuing his ways) and salvation (transformation)",
          effect:
            "Draws on the medieval morality play tradition — the reader understands that Scrooge's choice carries universal moral weight, not just personal consequences.",
        },
        {
          label: "Social and emotional contrast",
          example:
            "The Cratchits' joyful Christmas dinner with their meagre goose vs Scrooge eating alone in his dark rooms",
          effect:
            "Forces the reader to recognise that human connection, not wealth, produces happiness — the contrast is designed to provoke guilt in affluent Victorian readers.",
        },
        {
          label: "Ghosts as moral teachers",
          example:
            "Each ghost reveals a different dimension of Scrooge's moral failure: lost innocence, present neglect, and future consequence",
          effect:
            "The ghosts function as didactic devices — they embody different modes of moral instruction (nostalgia, confrontation, terror) to ensure the lesson reaches Scrooge.",
        },
        {
          label: "First-person plural address",
          example:
            '"Let any man reply to it who can" and the narrator including the reader in moral judgements',
          effect:
            "Implicates the reader in the moral argument — the inclusive address prevents the reader from distancing themselves from the story's social critique.",
        },
        {
          label: "Direct reader engagement",
          example:
            'The narrator\'s conversational asides: "Mind! I don\'t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail"',
          effect:
            "Creates a warm, personal relationship between narrator and reader — the humour disarms resistance to the moral message that follows.",
        },
        {
          label: "Symbolic staging of visions",
          example:
            "The Ghost of Christmas Yet to Come shows Scrooge his own neglected grave in a churchyard choked with weeds",
          effect:
            "The visual tableaux function like dramatic scenes — each vision is staged for maximum emotional and moral impact, forcing Scrooge (and the reader) to witness consequences.",
        },
        {
          label: "Dialogue as characterisation",
          example:
            'Scrooge\'s "Bah! Humbug!" vs Bob Cratchit\'s toast: "Mr Scrooge! I\'ll give you Mr Scrooge, the Founder of the Feast!"',
          effect:
            "Speech reveals character and values instantly — Scrooge's dismissive exclamation contrasts with Bob's extraordinary generosity toward his oppressor.",
        },
        {
          label: "Suspense and revelation",
          example:
            "The Ghost of Christmas Yet to Come remains silent, pointing, refusing to answer Scrooge's desperate questions",
          effect:
            "Silence is more terrifying than speech — the ghost's refusal to communicate forces Scrooge to interpret the moral meaning himself, making his awakening active rather than passive.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. NARRATIVE AND FORM
    // ══════════════════════════════════════════════════════════
    {
      title: "Narrative and Form",
      colour: "blue",
      columns: ["Method / Form", "Description", "Effect / Purpose"],
      rows: [
        {
          label: "Morality tale structure",
          example:
            "A sinner is visited by supernatural agents who show him the consequences of his behaviour, leading to repentance and redemption",
          effect:
            "Places the novella in a tradition stretching back to medieval drama — Dickens gives his social critique the authority of religious and literary tradition.",
        },
        {
          label: "Allegory",
          example:
            "Scrooge's personal transformation allegorises the change Dickens demands of Victorian society — from Malthusian neglect to Christian charity",
          effect:
            "The story operates on two levels simultaneously — it is both an entertaining ghost story and a serious political argument for social reform.",
        },
        {
          label: "Novella form",
          example:
            "A short prose narrative designed to be read quickly — originally published as a single affordable volume at Christmas 1843",
          effect:
            "The compact form ensures accessibility — Dickens deliberately chose a format that working and middle-class readers could afford and finish in one sitting.",
        },
        {
          label: "Narrative voice (omniscient intrusive narrator)",
          example:
            "The narrator comments, jokes, moralises, and directly addresses the reader throughout the text",
          effect:
            "Creates a fireside storytelling atmosphere — the narrator functions as a moral guide, ensuring the reader interprets events correctly and cannot evade the social message.",
        },
        {
          label: "Chatty, humorous, moralising tone",
          example:
            '"Marley was as dead as a door-nail" followed by a digression on why door-nails are considered particularly dead',
          effect:
            "The humour makes the moral medicine palatable — Dickens entertains his audience into moral awareness rather than lecturing them, though the lectures come too.",
        },
        {
          label: "Ghost story genre",
          example:
            "Marley's ghost appears with clanking chains, and three supernatural spirits visit Scrooge through the night",
          effect:
            "The supernatural framework allows Dickens to compress an entire moral education into a single night — the ghost story convention makes the impossible timeline dramatically acceptable.",
        },
        {
          label: "Social commentary",
          example:
            'Dickens exposes the conditions of the poor: "decrepit shirts were hung out to dry" in the vision of Old Joe\'s shop',
          effect:
            "The novella functions as campaigning journalism in fictional form — Dickens makes the invisible poor visible to his middle-class readership, demanding that they acknowledge and act.",
        },
        {
          label: 'First-person plural ("we")',
          example:
            'The narrator includes himself and the reader: "let it be said that Scrooge knew how to keep Christmas well, if any man alive possessed the knowledge"',
          effect:
            "Creates collective moral responsibility — the inclusive pronoun prevents the reader from treating the story as entertainment about someone else's failings.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  5. SYMBOLISM AND MOTIFS
    // ══════════════════════════════════════════════════════════
    {
      title: "Symbolism and Motifs",
      colour: "red",
      columns: ["Symbol / Motif", "Meaning / Function", "Example"],
      rows: [
        {
          label: "Light / Fire / Warmth",
          example:
            'The Ghost of Christmas Present sits in a room with a "mighty blaze" and carries a glowing torch that sprinkles generosity on all it touches',
          effect:
            "Symbolises generosity, human connection, and the Christmas spirit — warmth is consistently associated with love, community, and moral goodness throughout the novella.",
        },
        {
          label: "Cold / Darkness / Fog",
          example:
            '"No warmth could warm, no wintry weather chill him" — Scrooge is beyond the reach of external temperature',
          effect:
            "Represents emotional isolation, moral blindness, and spiritual death — Scrooge's internal coldness is more extreme than any winter weather, suggesting a sickness of the soul.",
        },
        {
          label: "Chains (Marley's ghost)",
          example:
            '"I wear the chain I forged in life. I made it link by link, and yard by yard"',
          effect:
            "Symbolise the accumulated burden of selfishness — each act of cruelty or neglect adds another link, making Marley's punishment a visible record of moral failure.",
        },
        {
          label: "The Ghosts",
          example:
            "Past (gentle light), Present (jolly giant with torch), Yet to Come (silent, shrouded figure)",
          effect:
            "Each ghost embodies a mode of moral instruction — nostalgia and regret, confrontation with present reality, and terror of future consequences.",
        },
        {
          label: "The Cratchits",
          example:
            'The family celebrates Christmas with "a very small pudding" and genuine joy despite their poverty',
          effect:
            "Represent the deserving poor — their warmth, love, and gratitude despite deprivation are designed to shame wealthy readers into charitable action.",
        },
        {
          label: "Tiny Tim",
          example:
            '"God bless us, every one!" — his blessing includes even Scrooge, who is responsible for his suffering',
          effect:
            "Symbolises the innocent victims of social neglect — his potential death is the most powerful emotional weapon in Dickens's argument for charity and social reform.",
        },
        {
          label: "Fred (Scrooge's nephew)",
          example:
            'Fred laughs at Scrooge\'s miserliness and repeatedly invites him to Christmas dinner: "I mean to give him the same chance every year, whether he likes it or not"',
          effect:
            "Represents unconditional generosity and the redemptive power of family — Fred's persistent kindness models the forgiveness that makes Scrooge's reintegration into society possible.",
        },
        {
          label: "Feast imagery",
          example:
            'The Ghost of Christmas Present sits among "turkeys, geese, great joints of meat, sucking-pigs, long wreaths of sausages"',
          effect:
            "Abundance symbolises generosity and shared joy — the overflowing feast represents the communal spirit of Christmas that Scrooge has excluded himself from.",
        },
        {
          label: "Weather imagery",
          example:
            'Christmas morning brings "clear, bright, jovial, stirring, cold" weather after Scrooge\'s transformation',
          effect:
            "Pathetic fallacy tracks Scrooge's moral state — the oppressive fog and darkness of Stave One give way to crisp, invigorating clarity once he is redeemed.",
        },
        {
          label: "Door / threshold motif",
          example:
            "Marley's face appears on Scrooge's door knocker; the ghosts pass through closed doors; Scrooge opens his door to the world in Stave Five",
          effect:
            "Doors represent the boundary between isolation and community — Scrooge's transformation is enacted through his willingness to open doors he had previously kept shut.",
        },
        {
          label: "Christmas setting",
          example:
            "The entire novella is set during the Christmas period, a time culturally associated with charity, family, and spiritual renewal",
          effect:
            "Christmas provides the moral framework — the season's emphasis on giving and togetherness makes Scrooge's selfishness appear not just unkind but sacrilegious.",
        },
        {
          label: "Ignorance and Want",
          example:
            'Two wretched children hidden beneath the Ghost of Christmas Present\'s robe: "This boy is Ignorance. This girl is Want. Beware them both"',
          effect:
            "Allegorical figures representing the consequences of social neglect — Dickens warns that society's failure to educate and feed the poor will destroy civilisation itself.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Explanation / Example", "Application in A Christmas Carol"],
      rows: [
        {
          label: "Allegory",
          example:
            "A narrative in which characters, events, and settings represent abstract moral or political ideas beneath the surface story",
          effect:
            "Scrooge's journey from miser to philanthropist allegorises the transformation Dickens demands of Victorian society — from Malthusian neglect to active Christian charity.",
        },
        {
          label: "Motif",
          example:
            "A recurring image, symbol, or idea that develops thematic significance through repetition across the text",
          effect:
            "Light and warmth recur throughout the novella as markers of moral goodness — their consistent association with generosity creates a symbolic language the reader instinctively understands.",
        },
        {
          label: "Didacticism",
          example:
            "Writing that is explicitly designed to teach a moral or social lesson rather than simply entertain",
          effect:
            "Dickens is openly didactic — the novella's purpose is to change behaviour, not just tell a story, and the narrator frequently interrupts to ensure the moral is understood.",
        },
        {
          label: "Pathetic fallacy",
          example:
            "The use of weather and environment to reflect or amplify a character's emotional or moral state",
          effect:
            "Fog, cold, and darkness mirror Scrooge's spiritual blindness in Stave One, while the bright, clear Christmas morning of Stave Five reflects his joyful redemption.",
        },
        {
          label: "Foil",
          example:
            "A character whose qualities contrast with and therefore highlight those of another character",
          effect:
            "Fred serves as Scrooge's foil — his warmth, generosity, and love of Christmas throw Scrooge's coldness into sharp relief and model the man Scrooge could become.",
        },
        {
          label: "Symbolic characterisation",
          example:
            "Characters designed to represent ideas or social groups rather than functioning as psychologically realistic individuals",
          effect:
            "Tiny Tim is not a fully rounded character but a symbol of innocent suffering — his function is to embody the human cost of neglect and provoke the reader's compassion.",
        },
        {
          label: "Anagnorisis",
          example:
            "A moment of critical recognition or discovery, typically when a character passes from ignorance to knowledge",
          effect:
            "Scrooge's anagnorisis occurs when he reads his own name on the gravestone — the recognition that he is the dead man whose death is celebrated triggers his complete moral transformation.",
        },
        {
          label: "Pathos",
          example:
            "The quality in writing that evokes pity, sympathy, or sorrow in the reader",
          effect:
            "Tiny Tim's death in the Ghost of Christmas Yet to Come's vision is engineered for maximum pathos — Dickens weaponises the reader's grief to argue for social reform.",
        },
        {
          label: "Irony",
          example:
            "A contrast between appearance and reality, or between what is expected and what actually occurs",
          effect:
            "Scrooge's insistence that the poor should go to prisons and workhouses is bitterly ironic — he condemns others to suffering while claiming moral respectability.",
        },
        {
          label: "Moral inversion",
          example:
            "The reversal of expected moral values — what society considers respectable is revealed to be morally bankrupt, and vice versa",
          effect:
            "The Cratchits, despite their poverty, are morally superior to Scrooge — Dickens inverts the Victorian assumption that wealth signals virtue and poverty signals vice.",
        },
        {
          label: "Transformation motif",
          example:
            "A pattern of radical change in a character's nature, values, or behaviour that carries thematic significance",
          effect:
            "Scrooge's overnight transformation from miser to philanthropist embodies Dickens's belief that moral change is always possible — redemption is available to anyone who chooses it.",
        },
        {
          label: "Contrastive tone",
          example:
            "Dickens shifts between humorous, Gothic, sentimental, and morally urgent registers, sometimes within a single paragraph",
          effect:
            "The tonal variety prevents the reader from settling into passive consumption — comic passages disarm, Gothic passages frighten, and sentimental passages move, keeping the reader emotionally engaged.",
        },
        {
          label: "Narrative intrusion",
          example:
            "The narrator breaks into the story to comment directly on characters, events, or moral truths, addressing the reader in the second person",
          effect:
            "Dickens's intrusive narrator refuses to let the reader interpret freely — moral meaning is explicitly directed, ensuring that entertainment serves the didactic purpose of the text.",
        },
      ],
    },
  ],
};
