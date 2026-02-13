// ─── Writer's Toolkit — The Tempest (William Shakespeare) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const TEMPEST_TOOLKIT: WritersToolkit = {
  textSlug: "tempest",
  headerQuote:
    "We are such stuff as dreams are made on, and our little life is rounded with a sleep.",
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
          label: "Imperatives",
          example:
            '"Hag-seed, hence! / Fetch us in fuel" — Prospero commands Caliban',
          effect:
            "Prospero's imperatives establish his absolute authority on the island — the blunt, clipped commands reduce Caliban to a servant whose only function is obedience, revealing the master-slave dynamic that underpins their relationship.",
        },
        {
          label: "Magical / elemental imagery",
          example:
            '"I have bedimmed / The noontide sun, called forth the mutinous winds, / And \'twixt the green sea and the azured vault / Set roaring war"',
          effect:
            "Prospero's language positions him as a figure who commands the elements themselves — the grand scale of his imagery (sun, winds, sea, sky) presents his magic as godlike power, raising questions about whether such control is righteous or hubristic.",
        },
        {
          label: "Music and sound imagery",
          example:
            '"The isle is full of noises, / Sounds and sweet airs, that give delight and hurt not"',
          effect:
            "Caliban's lyrical description of the island's music reveals an unexpected sensitivity and wonder — Shakespeare complicates the 'savage' label by giving Caliban the play's most beautiful poetry, suggesting his connection to the island runs deeper than Prospero's.",
        },
        {
          label: "Natural imagery",
          example:
            '"Full fathom five thy father lies; / Of his bones are coral made; / Those are pearls that were his eyes"',
          effect:
            "Ariel's song transforms death into something rich and strange — the natural imagery of coral and pearl presents drowning not as destruction but as metamorphosis, reflecting the play's wider theme that suffering can lead to renewal.",
        },
        {
          label: "Metaphor",
          example:
            '"Our revels now are ended. These our actors, / As I foretold you, were all spirits and / Are melted into air, into thin air"',
          effect:
            "Prospero's extended metaphor equates life with a theatrical performance that must end — the dissolution of the masque becomes a meditation on mortality, with 'melted into air' suggesting the fragility and impermanence of all human achievement.",
        },
        {
          label: "Simile",
          example:
            '"My affections / Are then most humble; I have no ambition / To see a goodlier man" — Miranda on Ferdinand, comparing him implicitly to all other men she has known',
          effect:
            "Miranda's language reveals her innocence and the limited scope of her experience — her superlatives are sincere but also naive, since Ferdinand is essentially the first young man she has ever seen, raising questions about whether her love is genuine choice or simply lack of alternatives.",
        },
        {
          label: "Personification",
          example:
            '"The still-vexed Bermoothes" — the Bermudas are personified as perpetually agitated',
          effect:
            "Shakespeare gives the natural world emotional qualities — the 'vexed' Bermudas suggest that nature itself is restless and troubled, mirroring the turbulence of the characters' situations and linking geography to emotional states.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Have I not reason, brawlers? Where is the master?" — the Boatswain during the storm',
          effect:
            "The Boatswain's rhetorical question challenges the nobles' assumed authority — in a storm, social rank is meaningless, and his defiant question establishes the play's opening theme that true power is not simply a matter of birth or title.",
        },
        {
          label: "Repetition",
          example:
            '"Freedom, high-day! High-day, freedom!" — Caliban celebrates his anticipated liberation',
          effect:
            "The ecstatic repetition of 'freedom' and 'high-day' reveals Caliban's desperate longing for autonomy — the irony is that he is merely exchanging one master (Prospero) for another (Stephano), mistaking servility for liberation.",
        },
        {
          label: "Prose vs verse",
          example:
            "Stephano and Trinculo speak in prose; Prospero, Ariel, and Ferdinand speak in verse",
          effect:
            "Shakespeare uses the prose/verse distinction to encode social hierarchy — the comic, drunken plotters speak in disordered prose that mirrors their low ambitions, while the verse of Prospero and the lovers reflects elevated thought and moral seriousness.",
        },
        {
          label: "Puns / wordplay",
          example:
            '"Ban, Ban, Cacaliban / Has a new master — get a new man!" — Caliban\'s drunken song',
          effect:
            "Caliban's wordplay and self-naming in his celebratory song reveals a raw, anarchic energy — his punning on his own name shows a playful intelligence that resists the 'brutish' label Prospero assigns him.",
        },
        {
          label: "Bestial language (for Caliban)",
          example:
            '"A freckled whelp, hag-born — not honoured with / A human shape" — Prospero describes Caliban',
          effect:
            "Prospero's dehumanising language strips Caliban of humanity — terms like 'whelp' and 'hag-born' categorise him as subhuman, justifying colonial subjugation by denying the colonised subject's basic humanity. Shakespeare invites the audience to question whether this language reflects reality or Prospero's prejudice.",
        },
        {
          label: "Classical allusions",
          example:
            '"His art is of such power, / It would control my dam\'s god, Setebos" — Caliban references the Patagonian deity; Prospero alludes to Medea in his farewell to magic',
          effect:
            "Shakespeare weaves together classical and New World references to create a richly layered world — Prospero's echo of Ovid's Medea elevates his magic to the level of classical sorcery, while Caliban's Setebos grounds the island in the age of colonial exploration.",
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
          label: "Unity of time, place, and action",
          example:
            "The play unfolds in approximately three hours of real time on a single island, with one central plot driven by Prospero's plan",
          effect:
            "Shakespeare's adherence to the classical unities creates a concentrated, pressurised drama — everything happens within the span of the performance itself, giving the audience the sense that they are witnessing events as they unfold in real time.",
        },
        {
          label: "The masque (Act 4)",
          example:
            "Prospero stages an elaborate masque featuring Iris, Ceres, and Juno to celebrate Ferdinand and Miranda's betrothal",
          effect:
            "The masque-within-the-play adds a layer of performance — it demonstrates Prospero's artistic power, celebrates fertility and harmony, but its abrupt interruption when Prospero remembers Caliban's conspiracy reveals the fragility of art against the threat of disorder.",
        },
        {
          label: "Epilogue (Prospero addresses audience)",
          example:
            '"Now my charms are all o\'erthrown, / And what strength I have\'s mine own, / Which is most faint"',
          effect:
            "Prospero breaks the theatrical frame entirely, speaking directly to the audience as both character and actor — the epilogue transforms the play's themes of power and release into a literal plea for the audience's applause (freedom), collapsing the boundary between fiction and reality.",
        },
        {
          label: "Parallel plots",
          example:
            "Three overlapping conspiracies: Antonio and Sebastian plot to kill Alonso; Caliban, Stephano, and Trinculo plot to kill Prospero; Prospero orchestrates everyone",
          effect:
            "The parallel plots mirror and comment on each other — the 'noble' conspiracy of Antonio echoes Caliban's 'base' conspiracy, suggesting that the desire for illegitimate power transcends social class and undermines the distinction between 'civilised' and 'savage'.",
        },
        {
          label: "Play-within-a-play",
          example:
            "Prospero directs the tempest, the banquet, the masque, and the lovers' meeting — effectively staging scenes within the play",
          effect:
            "Prospero functions as an internal dramatist, controlling other characters as an author controls his creations — this metatheatrical structure invites the audience to see Shakespeare himself in Prospero, and to reflect on the nature of artistic power.",
        },
        {
          label: "Non-linear exposition (Act 1 backstory)",
          example:
            "Prospero narrates twelve years of backstory to Miranda in Act 1, Scene 2, repeatedly asking 'Dost thou attend me?'",
          effect:
            "The lengthy exposition delays the action while establishing the moral framework — Prospero's insistent questions to Miranda test her attention and engage the audience, transforming backstory into a dramatic scene about authority, memory, and the need to be heard.",
        },
        {
          label: "Dramatic irony",
          example:
            "The audience knows Prospero controls the storm and all events on the island, while most characters believe events are natural or accidental",
          effect:
            "Pervasive dramatic irony makes the audience complicit with Prospero — we share his godlike perspective, watching characters react to situations we know are manufactured, which simultaneously entertains and raises uncomfortable questions about manipulation and consent.",
        },
        {
          label: "Reversals of power",
          example:
            "Prospero was overthrown by Antonio in Milan; on the island, he becomes the absolute ruler; in the epilogue, he is powerless before the audience",
          effect:
            "The repeated inversions of power demonstrate its instability — Shakespeare structures the play as a chain of usurpations and restorations, suggesting that authority is always conditional and that those who hold power must eventually relinquish it.",
        },
        {
          label: "Resolution and reconciliation",
          example:
            "Act 5 gathers all characters together; Prospero forgives his enemies, frees Ariel, and acknowledges Caliban",
          effect:
            "The convergent structure of Act 5 enacts the play's movement toward harmony — Shakespeare brings every plot thread to resolution in a single scene, creating a sense of completeness that affirms the possibility of forgiveness even after great betrayal.",
        },
        {
          label: "Foreshadowing",
          example:
            '"In the morning / I will bring you to your ship, and so to Naples" — Prospero hints early at the journey home',
          effect:
            "Prospero's references to future events create a sense of inevitability — because the audience knows he is orchestrating everything, his hints function as both prophecy and stage direction, reinforcing the theme of art's power to shape reality.",
        },
        {
          label: "Storms as structural frame",
          example:
            "The play opens with a violent tempest and closes with the promise of 'calm seas, auspicious gales'",
          effect:
            "The movement from storm to calm provides the play's overarching structure — the tempest represents disorder, betrayal, and vengeance, while the promise of fair weather at the close signals reconciliation, forgiveness, and the restoration of natural harmony.",
        },
        {
          label: "Prospero's manipulation of events",
          example:
            "Prospero orchestrates every encounter: he directs the shipwreck, arranges Ferdinand and Miranda's meeting, foils the conspiracies, and stages the masque",
          effect:
            "The entire plot is, in effect, a performance directed by Prospero — this totalising control raises questions about benevolence versus tyranny; his manipulation may achieve a happy ending, but it does so by denying every other character genuine autonomy.",
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
          label: "Soliloquy",
          example:
            '"Ye elves of hills, brooks, standing lakes, and groves... I\'ll break my staff, / Bury it certain fathoms in the earth" — Prospero\'s farewell to magic (Act 5)',
          effect:
            "Prospero's soliloquy reveals his inner conflict between power and renunciation — by cataloguing his magical achievements before vowing to abandon them, Shakespeare dramatises the emotional cost of letting go, and invites the audience to see this as Shakespeare's own farewell to the stage.",
        },
        {
          label: "Aside",
          example:
            '"Poor worm, thou art infected! / This visitation shows it" — Prospero aside, watching Ferdinand and Miranda fall in love',
          effect:
            "Prospero's asides position him (and the audience) as observers of his own staged drama — the intimate address reveals his tenderness beneath his stern exterior, while the word 'infected' subtly compares love to a disease he has deliberately introduced.",
        },
        {
          label: "Dramatic irony",
          example:
            "Ferdinand believes his father is dead; the audience knows Alonso is alive and on the island. Miranda believes Ferdinand is the first man she has seen; Prospero has arranged the encounter",
          effect:
            "Layered dramatic irony pervades the play — the audience's superior knowledge creates both comedy and pathos, as characters grieve, plot, and fall in love within a framework they do not know is entirely controlled by Prospero.",
        },
        {
          label: "Spectacle and magic",
          example:
            "The opening shipwreck, Ariel's appearances, the vanishing banquet, the masque of goddesses, Prospero's magic circle",
          effect:
            "Shakespeare exploits the full resources of the Jacobean stage — the visual spectacle of magic serves both to entertain and to embody the play's central theme that what we experience may be illusion, raising questions about the nature of reality itself.",
        },
        {
          label: "Masque tradition",
          example:
            "The Act 4 masque featuring Iris, Ceres, and Juno, performed by spirits under Prospero's direction",
          effect:
            "The masque form, associated with courtly celebration and idealised harmony, is embedded within the play — its interruption by Prospero's sudden anger reveals that perfect order is always vulnerable to the 'base' realities (Caliban's plot) that art tries to exclude.",
        },
        {
          label: "Comic subplot (Stephano / Trinculo)",
          example:
            "Stephano and Trinculo discover Caliban, get drunk, and plot to murder Prospero and become kings of the island",
          effect:
            "The comic subplot parodies the serious political conspiracies of Antonio and Sebastian — by mirroring noble treachery in a farcical register, Shakespeare suggests that the desire for illegitimate power is universal, and that the distinction between 'civilised' and 'savage' plotting is merely one of style.",
        },
        {
          label: "Metatheatre",
          example:
            '"The cloud-capped towers, the gorgeous palaces, / The solemn temples, the great globe itself, / Yea, all which it inherit, shall dissolve"',
          effect:
            "Prospero's reference to 'the great globe' puns on the Globe Theatre — Shakespeare collapses the distinction between the play's fictional world and the audience's reality, suggesting that all of life, like theatre, is a temporary performance that must eventually end.",
        },
        {
          label: "Stage directions (shipwreck)",
          example:
            '"A tempestuous noise of thunder and lightning heard" — the play opens with a dramatic storm scene',
          effect:
            "The opening stage direction immediately plunges the audience into chaos — before any exposition, Shakespeare creates visceral, physical theatre that establishes the tempest as both a literal event and a metaphor for the political and emotional turmoil that drives the plot.",
        },
        {
          label: "Prose vs verse",
          example:
            "Caliban speaks verse when describing the island's beauty but is addressed in prose by Stephano and Trinculo; the Boatswain speaks prose while nobles speak verse",
          effect:
            "The fluid movement between prose and verse encodes shifting power dynamics — Caliban's verse elevates him above the comic drunkards, while the Boatswain's prose in the storm scene undermines the nobles' assumed superiority, showing that rank is irrelevant against nature's power.",
        },
        {
          label: "Music as dramatic device",
          example:
            "Ariel's songs ('Come unto these yellow sands', 'Full fathom five', 'Where the bee sucks') guide, deceive, and enchant characters throughout the play",
          effect:
            "Music functions as Prospero's primary tool of control — Ariel's songs charm characters into specific emotional states, luring Ferdinand to Miranda and leading conspirators astray. The music embodies the seductive, manipulative power of art itself.",
        },
        {
          label: "Breaking the fourth wall (epilogue)",
          example:
            '"Now I want / Spirits to enforce, art to enchant; / And my ending is despair / Unless I be relieved by prayer"',
          effect:
            "Prospero directly addresses the audience, begging for applause as a form of release — the fourth-wall break transforms the audience into active participants, making them the final arbiters of power. Without their 'prayer' (applause), Prospero remains trapped on stage.",
        },
        {
          label: "Tableau / visual staging",
          example:
            "The discovery of Ferdinand and Miranda playing chess in Act 5 — revealed behind a curtain by Prospero",
          effect:
            "The chess tableau is a carefully staged visual moment — the lovers are literally framed as a picture of harmonious partnership, but the game of chess also symbolises political strategy and power, hinting that even love exists within structures of competition and control.",
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
          label: "Romance genre",
          example:
            "The Tempest features separation, wandering, magical transformation, and eventual reunion — hallmarks of the romance tradition",
          effect:
            "The romance genre allows Shakespeare to explore themes of loss and restoration without the finality of tragedy — characters undergo suffering and transformation but are ultimately reunited, suggesting that redemption and renewal are possible even after great betrayal.",
        },
        {
          label: "Tragicomedy",
          example:
            "The play contains elements of tragedy (usurpation, betrayal, conspiracy to murder) alongside comedy (Stephano and Trinculo, the love plot, the happy resolution)",
          effect:
            "The blend of tragic and comic registers reflects the play's moral complexity — Shakespeare refuses to settle into a single mode, mirroring life's mixture of suffering and joy and suggesting that forgiveness, not punishment, is the more courageous and difficult response to wrongdoing.",
        },
        {
          label: "Pastoral elements",
          example:
            "The island setting, with its natural beauty, fertility, and distance from the corrupt court, echoes the pastoral tradition of idealised rural retreats",
          effect:
            "The pastoral setting allows Shakespeare to contrast the 'natural' world of the island with the political corruption of Milan and Naples — however, the island is no simple paradise; it is also a site of enslavement and conspiracy, complicating the pastoral ideal.",
        },
        {
          label: "Masque tradition",
          example:
            "The Act 4 entertainment featuring classical goddesses, performed by spirits, celebrating the betrothal of Ferdinand and Miranda",
          effect:
            "By embedding a masque within the play, Shakespeare pays tribute to a courtly art form beloved by James I — but by having Prospero abruptly end it, he also signals that idealised art is fragile and cannot fully contain or control the messy realities of human nature.",
        },
        {
          label: "Colonial narrative",
          example:
            "Prospero arrives on an island already inhabited by Caliban, claims authority over it, teaches Caliban his language, and forces him into servitude",
          effect:
            "The play's structure mirrors the colonial encounter — the coloniser arrives, imposes his culture, and subjugates the indigenous population. Shakespeare may not critique this explicitly, but the form itself invites post-colonial readings that question Prospero's legitimacy and sympathise with Caliban's dispossession.",
        },
        {
          label: "Epilogue convention",
          example:
            "Prospero's epilogue directly solicits the audience's approval and 'gentle breath' (applause) to set him free",
          effect:
            "The conventional epilogue is transformed into a thematic climax — Prospero's plea for freedom mirrors Ariel's and Caliban's, and the audience's power to release him with applause makes them the ultimate authority, democratising the power that Prospero has monopolised throughout the play.",
        },
        {
          label: "Metatheatrical self-reflection",
          example:
            '"These our actors, / As I foretold you, were all spirits and / Are melted into air, into thin air" — Prospero reflects on the nature of performance',
          effect:
            "The play constantly draws attention to its own artifice — Prospero is simultaneously a character and a playwright-figure, and his reflections on the transience of performance invite the audience to consider theatre itself as a form of magic: powerful, transformative, but ultimately temporary.",
        },
        {
          label: "Revenge play subversion",
          example:
            '"The rarer action is / In virtue than in vengeance" — Prospero chooses forgiveness over revenge in Act 5',
          effect:
            "Shakespeare sets up the expectation of a revenge plot (Prospero has the power to destroy his enemies) but then subverts it — by choosing mercy, Prospero redefines heroism as the capacity to forgive, rejecting the revenge tragedy tradition that dominated Jacobean drama.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  5. SYMBOLISM AND MOTIFS
    // ══════════════════════════════════════════════════════════
    {
      title: "Symbolism and Motifs",
      colour: "red",
      columns: ["Symbol / Motif", "Meaning / Context", "Example"],
      rows: [
        {
          label: "The tempest / storm",
          example:
            "Chaos, upheaval, and the disruption of established order — but also the catalyst for transformation and renewal",
          effect:
            "'A tempestuous noise of thunder and lightning heard' — the storm opens the play as both a literal event and a metaphor for political upheaval; it destroys the old order so that reconciliation can eventually emerge from the wreckage.",
        },
        {
          label: "The island",
          example:
            "A liminal space between the civilised world and the unknown — simultaneously a prison, a paradise, a laboratory, and a stage",
          effect:
            "'This island's mine, by Sycorax my mother, / Which thou tak'st from me' — Caliban's claim reveals that the island's meaning depends on perspective; for Prospero it is a place of power and art, for Caliban a stolen homeland, and for the shipwrecked nobles a purgatorial testing ground.",
        },
        {
          label: "Prospero's books",
          example:
            "The source of Prospero's magical power — his devotion to study in Milan led to his overthrow, and on the island his books grant him mastery",
          effect:
            "'I'll drown my book' — Prospero's books symbolise knowledge as both empowerment and danger; they gave him the power to control the island but also distracted him from political responsibility in Milan. His promise to drown them signals his acceptance that knowledge must be tempered by engagement with the real world.",
        },
        {
          label: "Prospero's staff",
          example:
            "The physical instrument through which Prospero channels his magic — a symbol of authority, control, and artistic power",
          effect:
            "'I'll break my staff, / Bury it certain fathoms in the earth' — breaking the staff represents the voluntary surrender of power. Unlike the books (knowledge), the staff represents active command, and its destruction signals Prospero's acceptance of human limitation.",
        },
        {
          label: "Music and sound",
          example:
            "A pervasive motif — Ariel's songs enchant, guide, and manipulate; the island hums with mysterious sounds",
          effect:
            "'The isle is full of noises, / Sounds and sweet airs, that give delight and hurt not' — music symbolises the benign, seductive power of art itself. It can heal (Alonso's grief), deceive (leading conspirators astray), and inspire wonder (Ferdinand's enchantment), embodying art's moral ambiguity.",
        },
        {
          label: "The masque",
          example:
            "Prospero's staged entertainment of goddesses symbolises harmony, fertility, and the ideal order he wishes to bestow upon the young lovers",
          effect:
            "'Our revels now are ended' — the masque represents the dream of perfect order, but its abrupt dissolution shows that such perfection is unsustainable. The beautiful vision vanishes the moment real-world threats (Caliban's plot) intrude, symbolising the tension between art's ideals and life's chaos.",
        },
        {
          label: "Chess game",
          example:
            "Ferdinand and Miranda are discovered playing chess in Act 5 — a game of strategy, intellect, and controlled conflict",
          effect:
            "'Sweet lord, you play me false' / 'No, my dearest love, / I would not for the world' — the chess game symbolises both harmonious partnership and political strategy. Miranda's playful accusation of cheating hints that even love involves power dynamics and negotiation.",
        },
        {
          label: "Ariel (air / freedom)",
          example:
            "Ariel is associated with air, flight, music, and transformation — a spirit who longs for liberty",
          effect:
            "'All hail, great master! Grave sir, hail! I come / To answer thy best pleasure' — Ariel embodies the tension between service and freedom. As an air spirit, he is naturally free and formless, yet bound by obligation to Prospero; his eventual release symbolises the necessary end of all systems of control.",
        },
        {
          label: "Caliban (earth / nature)",
          example:
            "Caliban is associated with earth, physicality, labour, and the body — the 'natural' counterpart to Ariel's ethereality",
          effect:
            "'This thing of darkness I / Acknowledge mine' — Caliban represents the earthy, instinctual side of human nature that civilisation tries to suppress. Prospero's acknowledgement of him can be read as accepting responsibility for colonialism or as recognising the 'darkness' within himself.",
        },
        {
          label: "Sleep and dreams",
          example:
            "Characters are repeatedly put to sleep by Prospero's magic; the play itself is likened to a dream",
          effect:
            "'We are such stuff / As dreams are made on, and our little life / Is rounded with a sleep' — sleep symbolises both vulnerability (characters are manipulated while unconscious) and the dreamlike nature of existence itself. Prospero's philosophy collapses the distinction between waking life and illusion.",
        },
        {
          label: "Clothing",
          example:
            "The courtiers' garments remain miraculously fresh after the shipwreck; Stephano and Trinculo are distracted by gaudy clothing hung on a line as a trap",
          effect:
            "'Let it alone, thou fool; it is but trash' — clothing symbolises the superficial trappings of rank and status. Caliban recognises the 'trash' for what it is while the European clowns are seduced by it, inverting assumptions about who is truly 'civilised'.",
        },
        {
          label: "The sea",
          example:
            "The sea surrounds and defines the island; it separates the characters from their former lives and facilitates transformation",
          effect:
            "'Nothing of him that doth fade / But doth suffer a sea-change / Into something rich and strange' — the sea symbolises transformative power, dissolving old identities and creating new ones. It is both destructive (the tempest) and regenerative (the promise of safe passage home).",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Explanation", "Application"],
      rows: [
        {
          label: "Colonialism and power",
          example:
            "Prospero's arrival on the island, subjugation of Caliban, and imposition of European language and culture mirrors the colonial encounter of the early seventeenth century",
          effect:
            "'You taught me language, and my profit on't / Is I know how to curse' — Caliban's bitter retort exposes the violence embedded in 'civilising' missions. Language, ostensibly a gift, becomes a tool of domination; Caliban's only use for it is to articulate his own oppression.",
        },
        {
          label: "The noble savage",
          example:
            "Gonzalo's vision of an ideal commonwealth ('no sovereignty') echoes Montaigne's essay 'Of Cannibals', which argued that 'savage' peoples were morally superior to Europeans",
          effect:
            "Shakespeare engages with the contemporary debate about whether indigenous peoples are inherently noble or inherently savage — Caliban embodies both perspectives, capable of extraordinary poetic beauty ('the isle is full of noises') and of plotting murder, resisting any single interpretation.",
        },
        {
          label: "Metatheatre",
          example:
            "Prospero functions as a playwright-director within the play, staging events, directing 'actors' (spirits), and reflecting on the nature of performance",
          effect:
            "'The great globe itself... shall dissolve' — the play constantly draws attention to its own theatricality. By making Prospero a figure for the artist, Shakespeare explores the power and limitations of art: it can transform perception, create wonder, and prompt moral reflection, but it cannot permanently alter reality.",
        },
        {
          label: "Art vs nature",
          example:
            "Prospero's learned magic (art) is contrasted with Caliban's innate connection to the island (nature); Miranda's educated virtue is set against Caliban's 'natural' impulses",
          effect:
            "'A devil, a born devil, on whose nature / Nurture can never stick' — Prospero insists that Caliban cannot be improved by education, but the play complicates this view. Caliban's poetic language and genuine love for the island suggest that 'nature' possesses its own dignity that 'art' cannot fully comprehend or contain.",
        },
        {
          label: "Freedom vs servitude",
          example:
            "Every character exists on a spectrum of freedom and bondage: Ariel serves Prospero in exchange for eventual liberty; Caliban is enslaved; Ferdinand willingly submits to labour for love; Prospero himself is bound by his need for revenge",
          effect:
            "'Thou shalt be as free / As mountain winds' — Prospero's promise to Ariel frames freedom as the ultimate reward, yet the play reveals that freedom is always relational and conditional. Even Prospero, the most powerful figure, is not truly free until he forgives his enemies and relinquishes control.",
        },
        {
          label: "Forgiveness vs revenge",
          example:
            "Prospero has the power to destroy his enemies but chooses mercy — 'The rarer action is / In virtue than in vengeance'",
          effect:
            "The play systematically builds toward revenge, then subverts the expectation — Prospero's choice to forgive redefines strength as restraint rather than punishment. However, the forgiveness is ambiguous; Antonio never apologises, and Caliban is merely 'acknowledged', raising questions about whether true reconciliation has been achieved.",
        },
        {
          label: "Legitimate vs illegitimate power",
          example:
            "Antonio's usurpation of Prospero mirrors Sebastian's plot against Alonso and Caliban's plot against Prospero — each is an attempt to seize power unlawfully",
          effect:
            "The repetition of usurpation plots across different social registers demonstrates that illegitimate ambition is a universal human failing — Shakespeare questions what makes power legitimate at all, since Prospero's own authority over the island was itself established through dispossession of Caliban.",
        },
        {
          label: "Patriarchal control",
          example:
            "Prospero controls Miranda's knowledge, her relationships, and her marriage — he orchestrates her love for Ferdinand while warning Ferdinand against premarital intimacy",
          effect:
            "'I have given you here a third of mine own life' — Prospero defines Miranda as his possession and her marriage as a political transaction. Shakespeare reflects Jacobean patriarchal norms but also exposes their restrictiveness; Miranda's famous line 'O brave new world' reveals both her wonder and her sheltered naivety.",
        },
        {
          label: "Magic and illusion",
          example:
            "Prospero's magic creates storms, banquets, masques, and enchantments — all of which are explicitly revealed to be illusions",
          effect:
            "'These our actors... were all spirits and / Are melted into air' — the play draws a sustained parallel between magic and theatre. Both create convincing illusions that affect audiences emotionally, but both must end. Shakespeare suggests that the power of art lies not in permanence but in the transformative experience it provides.",
        },
        {
          label: "The farewell to theatre",
          example:
            "Widely regarded as Shakespeare's last solo play, The Tempest is often read as his personal farewell to the stage, with Prospero as a self-portrait of the retiring playwright",
          effect:
            "'Now my charms are all o'erthrown, / And what strength I have's mine own' — Prospero's renunciation of magic mirrors Shakespeare laying down his pen. The epilogue becomes a meditation on the artist's relationship with the audience: without their continued engagement ('your good hands'), the artist's life's work simply vanishes.",
        },
        {
          label: "Civilisation vs savagery",
          example:
            "The play appears to distinguish between 'civilised' Europeans and the 'savage' Caliban, but repeatedly undermines this binary",
          effect:
            "'He is as disproportioned in his manners / As in his shape' — yet Antonio and Sebastian's treachery is arguably worse than anything Caliban does. Shakespeare destabilises the civilised/savage opposition by showing that European 'civilisation' produces its own forms of savagery, making the label a tool of power rather than a description of reality.",
        },
        {
          label: "Providence and fate",
          example:
            "Prospero attributes the shipwreck to 'providence divine' and claims that 'bountiful Fortune' has brought his enemies to the island",
          effect:
            "'By Providence divine' — the play raises the question of whether events are controlled by fate, by Prospero's magic, or by mere chance. Prospero presents himself as an instrument of destiny, but the audience knows he is actively manipulating events, blurring the line between divine providence and human agency.",
        },
      ],
    },
  ],
};
