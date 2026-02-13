// ─── Writer's Toolkit — Romeo and Juliet (William Shakespeare) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const ROMEO_JULIET_TOOLKIT: WritersToolkit = {
  textSlug: "romeo-juliet",
  headerQuote: "These violent delights have violent ends.",
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
          label: "Oxymoron",
          example:
            '"O brawling love, O loving hate... O heavy lightness, serious vanity"',
          effect:
            "Romeo's accumulation of contradictions in Act 1 exposes the artificiality of his infatuation with Rosaline — love and hate are linguistically inseparable, foreshadowing the play's central paradox that the lovers' passion is born from their families' hatred.",
        },
        {
          label: "Light/dark imagery",
          example:
            '"But soft, what light through yonder window breaks? / It is the east, and Juliet is the sun"',
          effect:
            "Romeo casts Juliet as a celestial light source that conquers darkness — the metaphor elevates their love to a cosmic plane, but also foreshadows its fragility: light is always surrounded by, and eventually consumed by, darkness.",
        },
        {
          label: "Religious imagery (sonnet/pilgrim)",
          example:
            '"If I profane with my unworthiest hand / This holy shrine... My lips, two blushing pilgrims, ready stand"',
          effect:
            "Romeo and Juliet's first exchange takes the form of a shared sonnet suffused with religious language — by casting their kiss as a pilgrim's devotion at a holy shrine, Shakespeare elevates their love to the sacred while simultaneously hinting at its idolatrous danger.",
        },
        {
          label: "Death imagery",
          example:
            '"My grave is like to be my wedding bed"',
          effect:
            "Juliet's casual prophecy fuses marriage and death into a single image — Shakespeare uses proleptic irony to ensure the audience feels the shadow of the tomb over every moment of joy, reinforcing the Prologue's promise of doom.",
        },
        {
          label: "Metaphor",
          example:
            '"It is the east, and Juliet is the sun" / "Death, that hath sucked the honey of thy breath"',
          effect:
            "Shakespeare consistently uses metaphor to link love with celestial beauty and death with predatory consumption — Romeo's metaphors reveal his tendency to idealise and to see the world in absolutes, a trait that ultimately destroys him.",
        },
        {
          label: "Simile",
          example:
            '"Is love a tender thing? It is too rough, / Too rude, too boisterous, and it pricks like thorn"',
          effect:
            "Romeo's simile compares love to a thorn, introducing pain and danger beneath the conventional beauty — Shakespeare signals from the outset that love in Verona is inseparable from violence and suffering.",
        },
        {
          label: "Personification",
          example:
            '"Come, gentle night, come, loving black-browed night, / Give me my Romeo"',
          effect:
            "Juliet personifies night as a gentle, loving companion who will deliver Romeo to her — the epithalamium transforms darkness from a threat into an ally of the lovers, creating a private world that exists only outside the hostile daylight of Verona.",
        },
        {
          label: "Hyperbole",
          example:
            '"My bounty is as boundless as the sea, / My love as deep"',
          effect:
            "Juliet's hyperbolic comparison of her love to the infinite ocean conveys the overwhelming intensity of adolescent passion — the boundlessness also suggests a love that cannot be contained or controlled, foreshadowing its destructive excess.",
        },
        {
          label: "Puns/wordplay",
          example:
            '"Ask for me tomorrow, and you shall find me a grave man"',
          effect:
            "Mercutio's dying pun on 'grave' (serious/burial place) is characteristic of his wit but also darkly prophetic — Shakespeare uses wordplay to blur the line between comedy and tragedy, demonstrating how quickly laughter turns to grief in Verona.",
        },
        {
          label: "Foreshadowing language",
          example:
            '"I fear too early, for my mind misgives / Some consequence yet hanging in the stars"',
          effect:
            "Romeo voices a premonition before the Capulet ball that fate has a deadly design — Shakespeare gives the protagonist an intuitive awareness of his own doom, deepening tragic irony because Romeo attends the ball despite his foreboding.",
        },
        {
          label: "Imperative verbs",
          example:
            '"Stand, ho! / Give me my long sword, ho!" / "Part, fools! / Put up your swords"',
          effect:
            "The patriarchs and the Prince use imperatives to assert authority and control — the commands reveal Verona as a world governed by masculine aggression and rigid hierarchy, in which the lovers' private desire has no legitimate voice.",
        },
        {
          label: "Rhyming couplets",
          example:
            '"For never was a story of more woe / Than this of Juliet and her Romeo"',
          effect:
            "The Prince's closing couplet provides formal closure to the tragedy — the neat rhyme imposes order on chaos, but its sing-song quality also reduces the lovers' complex suffering to a civic lesson, questioning whether Verona has truly understood their sacrifice.",
        },
        {
          label: "Antithesis",
          example:
            '"My only love sprung from my only hate! / Too early seen unknown, and known too late!"',
          effect:
            "Juliet's antithetical pairing of love and hate, early and late, captures the central paradox of the play — her love is structurally impossible because it originates in the very enmity that will destroy it.",
        },
        {
          label: "Emotive language",
          example:
            '"O, I am fortune\'s fool!" / "Then I defy you, stars!"',
          effect:
            "Romeo's exclamations express raw emotional extremity — his language swings between passive despair ('fortune's fool') and reckless defiance ('defy you, stars'), revealing the impulsiveness that repeatedly escalates private feeling into public catastrophe.",
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
          label: "Prologue (sonnet)",
          example:
            '"Two households, both alike in dignity... A pair of star-crossed lovers take their life"',
          effect:
            "The Prologue's sonnet form announces the entire plot in advance — by revealing the lovers' deaths before the play begins, Shakespeare transforms the audience from passive spectators into anguished witnesses who see every moment of joy shadowed by inevitable doom.",
        },
        {
          label: "Five-act tragedy structure",
          example:
            "Exposition (Act 1), rising action (Act 2), climax (Act 3), falling action (Act 4), catastrophe (Act 5)",
          effect:
            "The classical five-act structure creates a symmetrical arc — Acts 1-2 build hope and love, Act 3 shatters them with Mercutio's and Tybalt's deaths, and Acts 4-5 descend into grief and death, giving the tragedy its sense of inevitable, ordered destruction.",
        },
        {
          label: "Dramatic irony",
          example:
            "The audience knows Juliet is alive in the tomb, but Romeo believes she is dead",
          effect:
            "The Prologue's revelation ensures the audience possesses knowledge the characters lack throughout — every declaration of love becomes simultaneously beautiful and heartbreaking because we know it leads to death.",
        },
        {
          label: "Parallel scenes",
          example:
            "Act 1, Scene 1 (public brawl) mirrors Act 3, Scene 1 (Mercutio/Tybalt deaths); the wedding night mirrors the tomb",
          effect:
            "Shakespeare structures the play around deliberate echoes — the repetition of public violence bookending private love demonstrates that the feud is inescapable and will always intrude upon the lovers' world.",
        },
        {
          label: "Accelerating pace",
          example:
            "The entire love story — from meeting to marriage to death — takes place over just four days",
          effect:
            "The compressed timeframe creates breathless urgency — Shakespeare denies the lovers (and the audience) any pause for reflection, making their reckless decisions feel inevitable rather than merely foolish.",
        },
        {
          label: "Turning point (Mercutio/Tybalt deaths)",
          example:
            "Act 3, Scene 1: Mercutio is killed under Romeo's arm; Romeo kills Tybalt in revenge and is banished",
          effect:
            "The double killing is the play's structural hinge — before it, comedy and love dominate; after it, the play plunges irreversibly into tragedy. Romeo's involvement transforms him from lover to killer, making reconciliation impossible.",
        },
        {
          label: "Rising/falling action",
          example:
            "Rising: lovers meet, marry, consummate. Falling: banishment, Juliet's potion, miscommunication, double suicide",
          effect:
            "The rising action builds hope that love can transcend the feud; the falling action systematically destroys that hope — the structural symmetry suggests that the forces of destruction were always stronger than the forces of love.",
        },
        {
          label: "Juxtaposition of comedy and tragedy",
          example:
            "The Nurse's bawdy humour and Mercutio's wit exist alongside violent death and suicidal despair",
          effect:
            "Shakespeare places laughter directly beside grief to heighten the emotional impact of both — the comedic elements in the first half make the tragic turn feel more sudden and devastating by contrast.",
        },
        {
          label: "Time compression",
          example:
            "Sunday: meet. Monday: marry. Tuesday: banishment and Juliet's potion. Wednesday: death",
          effect:
            "The relentless compression of time mirrors the impulsiveness of youth — Shakespeare argues structurally that the tragedy results not from malice but from haste, as every character acts before thinking.",
        },
        {
          label: "Foreshadowing",
          example:
            '"Some consequence yet hanging in the stars" / "My grave is like to be my wedding bed"',
          effect:
            "Shakespeare saturates the play with premonitions that alert the audience to approaching disaster — the characters sense their doom intuitively but proceed regardless, creating a tension between free will and fate that drives the tragedy.",
        },
        {
          label: "Cyclical structure (feud ends where it began)",
          example:
            "The play opens with a street brawl between the families and closes with the Prince standing over their dead children, demanding peace",
          effect:
            "The cyclical return to public grief demonstrates that the feud has consumed the very thing it claimed to protect — the families' children. The ending mirrors the beginning but with devastating cost, forcing the question of whether Verona's peace is worth its price.",
        },
        {
          label: "Dual timeline (public/private)",
          example:
            "Public scenes (brawls, the Prince's decrees, Capulet's feast) alternate with private scenes (the balcony, the bedroom, the tomb)",
          effect:
            "Shakespeare structures the play around the collision between public duty and private desire — the lovers can only exist in stolen, private moments because the public world of Verona is governed by honour, violence, and patriarchal authority.",
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
            '"Gallop apace, you fiery-footed steeds" — Juliet\'s epithalamium (Act 3, Scene 2)',
          effect:
            "Juliet's soliloquy reveals her private desire and impatience for night — Shakespeare gives the female protagonist an extended, passionate voice that defies the patriarchal silence expected of Elizabethan women, making her an active agent of her own desire.",
        },
        {
          label: "Dramatic irony",
          example:
            "Romeo says of Juliet in the tomb: 'Death, that hath sucked the honey of thy breath, / Hath had no power yet upon thy beauty' — she is actually alive",
          effect:
            "The audience knows the truth Romeo cannot see — the devastating irony transforms his beautiful tribute into an unbearable near-miss, making his suicide seconds before her waking the ultimate expression of tragic timing.",
        },
        {
          label: "Aside",
          example:
            '"Shall I hear more, or shall I speak at this?" — Romeo overhearing Juliet on the balcony',
          effect:
            "Romeo's aside creates intimacy with the audience and reveals his inner debate — Shakespeare uses the convention to give the audience privileged access to both lovers' unguarded thoughts, building emotional investment before they even speak to each other.",
        },
        {
          label: "Chorus/Prologue",
          example:
            '"From forth the fatal loins of these two foes / A pair of star-crossed lovers take their life"',
          effect:
            "The Chorus functions as a framing device that establishes fate as a governing force — by announcing the tragedy in advance, Shakespeare shifts the dramatic question from 'what happens?' to 'how and why?', focusing the audience on cause rather than surprise.",
        },
        {
          label: "Stage directions",
          example:
            '"They fight. Tybalt falls" / "Romeo opens the tomb" / "Juliet stabs herself"',
          effect:
            "Shakespeare's sparse stage directions concentrate dramatic force into physical action — the economy of 'Juliet stabs herself' makes the violence feel sudden, irreversible, and shockingly real after the elaborate poetry that precedes it.",
        },
        {
          label: "Prose vs verse",
          example:
            "Mercutio and the Nurse speak in prose; Romeo and Juliet speak in verse, especially when alone together",
          effect:
            "The distinction between prose and verse marks the boundary between the earthly, bawdy world and the elevated, idealised world of the lovers — Shakespeare uses form itself to separate vulgar reality from romantic transcendence.",
        },
        {
          label: "Sonnet form within dialogue",
          example:
            "Romeo and Juliet's first conversation (Act 1, Scene 5) forms a perfect Shakespearean sonnet shared between them",
          effect:
            "The shared sonnet dramatises the lovers' instant compatibility — they complete each other's lines, rhymes, and conceits as though they share a single poetic mind, making their connection feel predestined and organic rather than arbitrary.",
        },
        {
          label: "Balcony scene staging",
          example:
            "Juliet appears above, Romeo below — the vertical staging creates physical separation between the lovers",
          effect:
            "The spatial arrangement symbolises the social and familial barriers separating the lovers — they can speak and see each other but cannot easily touch, making the balcony a visual metaphor for love that is visible but inaccessible.",
        },
        {
          label: "Fight choreography",
          example:
            "The opening brawl (Act 1, Scene 1), Mercutio vs Tybalt (Act 3, Scene 1), Romeo vs Paris (Act 5, Scene 3)",
          effect:
            "The escalating violence of the fight scenes mirrors the escalating consequences — the first brawl is almost comic, Mercutio's death is shocking, and Paris's killing is desperately futile, tracking the play's descent from comedy to catastrophe.",
        },
        {
          label: "Comic relief (Nurse/Mercutio)",
          example:
            '"The bawdy hand of the dial is now upon the prick of noon" — Mercutio\'s innuendo',
          effect:
            "Mercutio's wordplay and the Nurse's garrulous bawdiness provide humour that makes the tragedy hit harder by contrast — their deaths or irrelevance in the second half removes all levity, leaving the audience with unrelieved grief.",
        },
        {
          label: "Dual scenes (public brawl vs private love)",
          example:
            "Act 1 alternates between the public street brawl and Romeo's private lovesickness; Act 3 places Tybalt's death immediately before the wedding night",
          effect:
            "Shakespeare juxtaposes public violence with private tenderness to demonstrate that the lovers exist in a world that will not permit their happiness — the structure insists that every private joy is purchased at the cost of public bloodshed.",
        },
        {
          label: "Pathetic fallacy",
          example:
            '"More light and light, more dark and dark our woes" — Romeo at dawn after the wedding night',
          effect:
            "The arrival of daylight, normally associated with hope, becomes a threat that drives Romeo into exile — Shakespeare inverts the natural symbolism so that dawn represents separation and danger while night represents safety and love.",
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
          label: "Tragedy",
          example:
            "The play follows two noble lovers whose fatal flaw — impulsive passion — leads to their mutual destruction and the belated reconciliation of their families",
          effect:
            "As a tragedy, the play argues that the lovers' deaths are both inevitable and meaningful — their sacrifice is the price Verona pays for peace, aligning individual suffering with social redemption in the classical tragic tradition.",
        },
        {
          label: "Sonnet form",
          example:
            "The Prologue is a sonnet; Romeo and Juliet's first exchange is a shared sonnet; the second Prologue (Act 2) is a sonnet",
          effect:
            "The sonnet — the supreme form of love poetry — is embedded within the play's dramatic structure, fusing the lyric tradition with theatrical action and signalling that Romeo and Juliet's love story is the literary archetype of romantic devotion.",
        },
        {
          label: "Star-crossed lovers convention",
          example:
            '"A pair of star-crossed lovers take their life" — the Prologue establishes the lovers as doomed by fate from the outset',
          effect:
            "The 'star-crossed' convention frames the lovers as victims of cosmic forces beyond their control — this fatalistic framework raises the question of whether their deaths result from destiny, social structures, or their own impulsive choices.",
        },
        {
          label: "De casibus tragedy",
          example:
            "The lovers rise to the height of joy (marriage, consummation) before falling to catastrophe (banishment, double suicide)",
          effect:
            "The de casibus pattern — a fall from prosperity to ruin — structures the audience's emotional experience around the gap between what the lovers achieve and what they lose, maximising the pathos of their destruction.",
        },
        {
          label: "Petrarchan love vs real love",
          example:
            "Romeo's artificial Petrarchan sighing for Rosaline (Act 1) contrasts with his genuine, mutual love for Juliet",
          effect:
            "Shakespeare critiques the literary convention of unrequited courtly love by replacing it with reciprocal, passionate, physically consummated love — the play argues that authentic emotion transcends poetic posturing.",
        },
        {
          label: "Comic elements in tragedy",
          example:
            "The Nurse's bawdy humour, Mercutio's wit, the preparations for Juliet's wedding to Paris played for dark irony",
          effect:
            "The first two acts read almost as romantic comedy — Shakespeare deliberately raises the audience's expectation of a happy ending before shattering it in Act 3, making the generic shift from comedy to tragedy feel violent and disorienting.",
        },
        {
          label: "Chorus function",
          example:
            "The Chorus appears in the Prologue and (in some editions) at the start of Act 2, framing the action with epic, narrative distance",
          effect:
            "The Chorus creates a tension between fate and free will — by narrating the story from above, it imposes a deterministic frame on characters who believe they are making free choices, deepening the play's tragic irony.",
        },
        {
          label: "Social commentary",
          example:
            "The play exposes the destructive consequences of patriarchal authority, honour culture, and hereditary feuding",
          effect:
            "Shakespeare uses the tragedy to critique a society in which masculine honour and parental control override individual desire and compassion — the lovers' deaths indict the social structures that made their love impossible.",
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
          label: "Light and darkness",
          example:
            "Love is associated with light (stars, sun, lightning) while the feud and death are linked to darkness and night",
          effect:
            "'O, she doth teach the torches to burn bright!' — Romeo's first sight of Juliet casts her as a source of illumination that outshines artificial light, but the lovers can only meet in darkness, revealing that their love exists in opposition to Verona's daylit world of violence.",
        },
        {
          label: "Stars/fate",
          example:
            "The stars represent destiny, cosmic order, and the forces that govern human lives beyond individual control",
          effect:
            "'Then I defy you, stars!' — Romeo's defiance of fate after learning of Juliet's death is both heroic and futile; the stars have already determined the outcome, and his rebellion only hastens the catastrophe the Prologue promised.",
        },
        {
          label: "Poison",
          example:
            "Poison functions as both a literal plot device and a metaphor for the corrupting influence of the feud on Verona",
          effect:
            "'The world is not thy friend, nor the world's law' — the Apothecary sells Romeo poison out of poverty, linking the lovers' deaths to social inequality; the feud itself is a poison that contaminates everything it touches, from families to lovers to civic order.",
        },
        {
          label: "The balcony",
          example:
            "The elevated staging of the balcony scene physically separates the lovers — Juliet above, Romeo below",
          effect:
            "The balcony symbolises the social and familial barriers between the lovers — they can communicate across the divide but cannot bridge it in the daylit world, making the balcony a visual metaphor for love that is tantalizingly close yet structurally impossible.",
        },
        {
          label: "Names",
          example:
            "The lovers' surnames — Montague and Capulet — define their identities and doom their love",
          effect:
            "'What's in a name? That which we call a rose / By any other word would smell as sweet' — Juliet's philosophical questioning reveals that names are arbitrary labels, yet in Verona they carry the full weight of ancestral hatred, making identity a prison.",
        },
        {
          label: "Death and love intertwined",
          example:
            "Love and death are linguistically and dramatically inseparable throughout the play — to love is to risk death, and death is the only space where their love can exist undisturbed",
          effect:
            "'My grave is like to be my wedding bed' — Juliet's unwitting prophecy fuses the two most significant rites of passage; the tomb becomes their bridal chamber, and the play's final image of the lovers lying together in death is simultaneously horrifying and beautiful.",
        },
        {
          label: "The tomb",
          example:
            "The Capulet tomb is the final setting — a space of death that becomes the lovers' only private refuge",
          effect:
            "'For here lies Juliet, and her beauty makes / This vault a feasting presence full of light' — Romeo transforms the tomb from a place of decay into a space of radiant beauty, but the transformation is delusional; the tomb represents the only world in which their love can survive — death.",
        },
        {
          label: "Day vs night",
          example:
            "The lovers meet, marry, and consummate their love at night; violence, separation, and discovery occur in daylight",
          effect:
            "'More light and light, more dark and dark our woes' — Shakespeare inverts conventional symbolism so that day represents danger and exposure while night represents safety and intimacy, reflecting a world so corrupt that natural order is reversed.",
        },
        {
          label: "Roses",
          example:
            "The rose symbolises beauty, love, and the natural world that exists beneath the artificial constructs of family identity",
          effect:
            "'That which we call a rose / By any other word would smell as sweet' — the rose represents essential nature versus imposed identity; Juliet argues that Romeo's intrinsic worth exists independently of his name, but the play proves that Verona cannot separate the two.",
        },
        {
          label: "Swords/violence",
          example:
            "Swords represent masculine honour, the feud, and the constant threat of violence that governs public life in Verona",
          effect:
            "'Draw thy tool! Here comes two of the house of Montagues' — even servants carry weapons, demonstrating that violence permeates every level of Veronese society; the sword is the antithesis of the kiss, and the play dramatises their irreconcilable conflict.",
        },
        {
          label: "Marriage",
          example:
            "Marriage functions simultaneously as an act of love, a social contract, and a weapon — Juliet faces forced marriage to Paris while secretly wed to Romeo",
          effect:
            "The contrast between Juliet's secret, loving marriage and the arranged, patriarchal marriage to Paris exposes how the institution serves male power rather than female desire — Shakespeare critiques a society that treats daughters as commodities.",
        },
        {
          label: "The Queen Mab speech",
          example:
            "Mercutio's extended fantasy about a fairy queen who delivers dreams to sleepers, growing increasingly dark and frantic",
          effect:
            "'She is the fairies' midwife... she gallops night by night / Through lovers' brains, and then they dream of love' — the speech begins as whimsy but darkens into a vision of desire corrupted by violence, mirroring the play's own trajectory from comedy to tragedy and exposing the dangerous power of fantasy.",
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
          label: "Hamartia",
          example:
            "The tragic hero's fatal flaw — the characteristic that makes their destruction inevitable",
          effect:
            "Romeo's hamartia is his impulsive passion — he loves too quickly, kills too quickly, and dies too quickly. Each catastrophic decision (attending the ball, killing Tybalt, buying poison) stems from the same inability to pause and reflect, making his virtues and his flaws identical.",
        },
        {
          label: "Catharsis",
          example:
            "The audience's emotional purging through pity and fear, achieved by witnessing the lovers' destruction",
          effect:
            "The final scene in the tomb delivers catharsis — the audience's accumulated dread is released through the simultaneous horror of the deaths and the relief of the families' reconciliation, fulfilling Aristotle's definition of tragedy's purpose.",
        },
        {
          label: "Peripeteia",
          example:
            "A sudden reversal of fortune that transforms the trajectory of the action",
          effect:
            "Mercutio's death in Act 3, Scene 1 is the play's peripeteia — Romeo's attempt to make peace causes his friend's death, which triggers his killing of Tybalt, which causes his banishment. A single moment of peacekeeping becomes the catalyst for catastrophe, demonstrating tragic irony at its purest.",
        },
        {
          label: "Fate vs free will",
          example:
            "The play sustains an unresolved tension between the lovers' predetermined doom ('star-crossed') and their individual choices",
          effect:
            "Shakespeare never settles the question — the Prologue declares fate, but each death results from specific human decisions (Friar Laurence's plan, the Nurse's betrayal, Romeo's impulsiveness). The tragedy gains its power from the impossibility of determining whether the lovers were doomed or simply unlucky.",
        },
        {
          label: "Patriarchal society",
          example:
            "Verona is governed by fathers — Lord Capulet controls Juliet's marriage, and the feud is maintained by male heads of household",
          effect:
            "'An you be mine, I'll give you to my friend; / An you be not, hang, beg, starve, die in the streets' — Capulet's ultimatum reveals that daughters are property to be given away; Juliet's only escape from patriarchal control is death, indicting a system that leaves women with no legitimate autonomy.",
        },
        {
          label: "Courtly love vs real love",
          example:
            "Romeo's formulaic Petrarchan devotion to Rosaline is replaced by his passionate, reciprocal love for Juliet",
          effect:
            "Shakespeare deliberately contrasts artificial literary convention with genuine emotional experience — Romeo's cliched sighing in Act 1 gives way to the shared sonnet in Act 1, Scene 5, where love is dialogic rather than monologic, mutual rather than unrequited, and embodied rather than abstract.",
        },
        {
          label: "Dramatic irony as structural principle",
          example:
            "The Prologue ensures the audience knows the ending before the play begins, creating irony in every subsequent scene",
          effect:
            "Because the audience possesses knowledge the characters lack, every moment of hope becomes simultaneously joyful and painful — the balcony scene, the wedding, and the wedding night are all shadowed by the foreknowledge of death, making dramatic irony the play's dominant emotional mode.",
        },
        {
          label: "Oxymoron as structural device",
          example:
            "The play is built on fundamental contradictions: love/hate, life/death, light/dark, youth/age, public/private",
          effect:
            "Oxymoron is not merely a rhetorical figure in Romeo and Juliet but the play's structural principle — the tragedy exists in the space between irreconcilable opposites, and the lovers are destroyed because Verona cannot hold contradictions that poetry can.",
        },
        {
          label: "Proleptic irony",
          example:
            "Characters unknowingly predict their own fates through casual speech and metaphor",
          effect:
            "'My grave is like to be my wedding bed' — Juliet's throwaway line becomes literally true; throughout the play, characters speak more truth than they know, creating a pattern of unconscious prophecy that reinforces the sense of inescapable fate governing every action.",
        },
        {
          label: "The Liebestod (love-death)",
          example:
            "The Romantic and operatic tradition in which love can only be consummated or perfected through death",
          effect:
            "Romeo and Juliet's double suicide in the tomb is the archetypal Liebestod — their love, impossible in life, achieves permanence and perfection only through death. The tomb becomes their bridal chamber, and dying together is presented as the ultimate act of devotion, fusing Eros and Thanatos.",
        },
        {
          label: "Social hierarchy",
          example:
            "The play's world is rigidly stratified: Prince Escalus at the top, then the noble houses, then servants — with women subordinate at every level",
          effect:
            "The lovers' tragedy is produced by social hierarchy — Romeo and Juliet are destroyed not by personal failings but by a system that values family honour over individual happiness and treats marriage as a political alliance rather than a union of hearts.",
        },
        {
          label: "Youth vs age",
          example:
            "The play dramatises a generational conflict between the passionate, idealistic young and the rigid, controlling old",
          effect:
            "The adults — Lord Capulet, the Nurse, Friar Laurence — all fail the young lovers through rigidity, self-interest, or cowardice. Shakespeare argues that the older generation's inability to change or forgive creates the conditions in which the young must die to achieve what their elders could not: peace.",
        },
      ],
    },
  ],
};
