// ─── Trait-Based Mind Map Data — Romeo and Juliet ───

import type { CharacterMindMap } from "./mindmaps-inspector-calls";

export const ROMEO_JULIET_MINDMAPS: CharacterMindMap[] = [
  // ══════════════════════════════════════════════════════════
  //  1. ROMEO
  // ══════════════════════════════════════════════════════════
  {
    name: "Romeo",
    textSlug: "romeo-juliet",
    traits: [
      // ── impulsive ──
      {
        trait: "impulsive",
        colour: "teal",
        quotes: [
          {
            quote: "O, I am fortune's fool!",
            who: "Romeo",
            act: "Act 3, Scene 1",
            points: [
              "The **exclamatory** cry immediately after killing Tybalt reveals Romeo's pattern of acting before thinking — he recognises the consequences only **after** the irreversible deed, not before.",
              "The word **'fool'** carries a double meaning: he is both fortune's plaything and a jester in a tragedy, suggesting Shakespeare frames impulsiveness as a form of self-inflicted fate.",
              "**AO3 context**: the Elizabethan belief in Fortune's wheel — a force that raises and destroys mortals — positions Romeo as a figure whose lack of restraint invites the wheel's downward turn.",
            ],
          },
          {
            quote: "Then I defy you, stars!",
            who: "Romeo",
            act: "Act 5, Scene 1",
            points: [
              "The **imperative** 'I defy' attempts to assert free will against cosmic destiny, yet the very act of defiance — rushing to Juliet's tomb — is precisely what fulfils the **'star-cross'd'** prophecy of the Prologue.",
              "Shakespeare creates profound **dramatic irony**: Romeo's most impulsive moment is disguised as his most decisive, and the audience knows his haste will destroy him.",
              "The shift from 'fortune's fool' (Act 3) to active defiance marks a tragic escalation — Romeo moves from passive victimhood to reckless agency, accelerating the catastrophe.",
            ],
          },
          {
            quote:
              "Tybalt, the reason that I have to love thee doth much excuse the appertaining rage to such a greeting",
            who: "Romeo",
            act: "Act 3, Scene 1",
            points: [
              "Romeo's cryptic refusal to fight — grounded in his secret marriage — demonstrates how his **impulsive secrecy** creates the conditions for tragedy; had he revealed the marriage, the duel might have been averted.",
              "The abstract noun **'reason'** is vague and private, leaving Tybalt and Mercutio without understanding — Shakespeare shows that Romeo's impulsive decisions to act alone consistently produce fatal miscommunication.",
            ],
          },
        ],
      },
      // ── romantic / idealistic ──
      {
        trait: "romantic / idealistic",
        colour: "purple",
        quotes: [
          {
            quote:
              "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.",
            who: "Romeo",
            act: "Act 2, Scene 2",
            points: [
              "The **celestial metaphor** elevating Juliet to the sun transforms her from a person into a cosmic force — Shakespeare presents Romeo's love as worshipful, bordering on **idolatry**, which the Elizabethan audience would recognise as spiritually dangerous.",
              "The verb **'breaks'** suggests both dawn and the shattering of Romeo's previous melancholy over Rosaline — Juliet does not merely appear but ruptures his entire emotional reality.",
              "**AO2 structure**: the balcony scene is positioned immediately after the Capulet feast, compressing falling in love and declaring it into a single night — Shakespeare's accelerated timeline mirrors Romeo's headlong romanticism.",
            ],
          },
          {
            quote:
              "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night.",
            who: "Romeo",
            act: "Act 1, Scene 5",
            points: [
              "The **rhetorical question** dismisses his passion for Rosaline in an instant, revealing that Romeo's idealism attaches to images rather than individuals — his love is intense but dangerously transferable.",
              "The **rhyming couplet** ('sight'/'night') lends the declaration an almost **Petrarchan** polish, suggesting Romeo is performing the role of a lover as much as feeling genuine emotion — Shakespeare subtly critiques courtly love conventions.",
              "**AO3 context**: the Petrarchan sonnet tradition that Romeo echoes was a literary fashion Elizabeth audiences would recognise — Shakespeare both uses and questions this tradition to complicate the audience's view of Romeo's sincerity.",
            ],
          },
          {
            quote:
              "O, she doth teach the torches to burn bright! It seems she hangs upon the cheek of night like a rich jewel in an Ethiope's ear",
            who: "Romeo",
            act: "Act 1, Scene 5",
            points: [
              "The **hyperbolic simile** comparing Juliet to a jewel elevates her beauty to something rare and precious, yet also frames her as an object to be admired — Shakespeare hints at the way Romeo's idealism **objectifies** its subject.",
              "The **light/dark antithesis** ('torches'/'night') introduces the play's central imagery pattern: love and beauty exist in opposition to the surrounding darkness of feud and death.",
            ],
          },
        ],
      },
      // ── passionate ──
      {
        trait: "passionate",
        colour: "amber",
        quotes: [
          {
            quote:
              "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite",
            who: "Juliet (to Romeo)",
            act: "Act 2, Scene 2",
            points: [
              "Although Juliet speaks these words, they are prompted by Romeo's equally passionate declarations — together the lovers build a **shared rhetoric of infinity** that redefines love as limitless and self-replenishing.",
              "The **sea metaphor** links love to an elemental, uncontrollable force of nature — Shakespeare foreshadows that passion this vast cannot be contained within the social structures of Verona.",
            ],
          },
          {
            quote:
              "Here's to my love! O true apothecary, thy drugs are quick. Thus with a kiss I die.",
            who: "Romeo",
            act: "Act 5, Scene 3",
            points: [
              "The **juxtaposition** of 'love' and 'die' in Romeo's final breath fuses Eros and Thanatos — Shakespeare makes literal the play's recurring equation of passionate love with death.",
              "The word **'quick'** means both 'fast' and 'alive', creating a bitter **pun**: the poison that kills Romeo is paradoxically the most vital thing left to him, because it reunites him with Juliet.",
              "**AO2 form**: Romeo's death speech is notably brief compared to his earlier rhetorical excess — Shakespeare strips away the Petrarchan flourishes, leaving only raw emotional directness at the moment of death.",
            ],
          },
          {
            quote:
              "O, let us hence! I stand on sudden haste.",
            who: "Romeo",
            act: "Act 2, Scene 3",
            points: [
              "Romeo's demand that Friar Lawrence marry them immediately encapsulates his defining quality: passion that **refuses delay** — the verb 'stand on' suggests haste is not a mood but a principle.",
              "This line directly contradicts the Friar's counsel to go 'wisely and slow', establishing the central dramatic tension between **youthful passion** and **cautious wisdom** that structures the entire play.",
            ],
          },
        ],
      },
      // ── fatalistic ──
      {
        trait: "fatalistic",
        colour: "red",
        quotes: [
          {
            quote:
              "I fear, too early; for my mind misgives some consequence yet hanging in the stars",
            who: "Romeo",
            act: "Act 1, Scene 4",
            points: [
              "The **proleptic metaphor** of 'consequence hanging in the stars' introduces the play's **astral fate imagery** — Romeo senses the trajectory of tragedy before it begins, positioning himself as both aware of and helpless against destiny.",
              "The verb **'misgives'** suggests an intuitive, bodily knowledge that precedes rational thought — Shakespeare presents fate not as an abstract concept but as a felt, physical premonition.",
              "**AO2 structure**: placed immediately before the Capulet feast where Romeo meets Juliet, this speech functions as a **dramatic prologue** that frames the love story within the language of doom from its inception.",
            ],
          },
          {
            quote:
              "Is it e'en so? Then I defy you, stars!",
            who: "Romeo",
            act: "Act 5, Scene 1",
            points: [
              "The shift from fearful fatalism (Act 1) to active defiance encapsulates Romeo's tragic arc — he moves from **sensing** fate to **challenging** it, but his rebellion is itself fated.",
              "Shakespeare creates a devastating **paradox**: the moment Romeo claims agency is the moment he most completely fulfils the Prologue's prophecy of the 'star-cross'd lovers' taking their lives.",
            ],
          },
          {
            quote:
              "O, I am fortune's fool!",
            who: "Romeo",
            act: "Act 3, Scene 1",
            points: [
              "The **alliterative** 'fortune's fool' binds fate and foolishness together, suggesting Romeo's tragedy is not merely cosmic bad luck but a collaboration between destiny and his own flawed character.",
              "This line sits at the exact **structural midpoint** of the play — Tybalt's death is the peripeteia that transforms the comedy of the first half into the tragedy of the second, and Romeo's cry marks the turning point.",
              "**AO3 context**: the Elizabethan concept of the **wheel of Fortune** — an unpredictable, amoral force — underpins Romeo's fatalism, but Shakespeare complicates this by making Romeo's own choices the mechanism through which fortune operates.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Romeo gatecrashes the Capulet feast",
        act: "Act 1, Scene 5",
        stageDirection: "Enter Romeo and others, maskers",
        points: [
          "Romeo enters his enemy's house **masked**, immediately establishing the theme of **concealed identity** that will define his relationship with Juliet — love begins in disguise and secrecy.",
          "The dramatic entrance places Romeo physically inside Capulet territory, making the forbidden nature of the love affair a **spatial reality** on stage, not just a social abstraction.",
          "Tybalt recognises Romeo by his voice ('This, by his voice, should be a Montague'), creating the first instance of the **recognition/concealment** pattern that drives the plot toward catastrophe.",
        ],
      },
      {
        type: "exit",
        moment: "Romeo's banishment — departure from Juliet's balcony",
        act: "Act 3, Scene 5",
        stageDirection: "He goeth down",
        points: [
          "The stage direction 'he goeth down' from the balcony is a visual **descent** that mirrors Romeo's fall from the height of marital joy to exile — Shakespeare makes the architecture of the stage express emotional trajectory.",
          "Juliet's line 'Methinks I see thee, now thou art so low, as one dead in the bottom of a tomb' provides devastating **foreshadowing** — she will next see Romeo exactly thus, dead in the Capulet tomb.",
          "This exit reverses the balcony scene of Act 2: where Romeo once climbed **up** toward love, he now climbs **down** toward separation, creating a structural mirror that tracks the play's shift from comedy to tragedy.",
        ],
      },
      {
        type: "exit",
        moment: "Romeo's death in the Capulet tomb",
        act: "Act 5, Scene 3",
        stageDirection: "Romeo dies",
        points: [
          "Romeo dies beside Juliet believing her dead — the ultimate **dramatic irony** of the play rests on this moment of tragic mistiming, where seconds separate death from reunion.",
          "By dying in the **Capulet** tomb, Romeo's body literally crosses the family boundary in death that he could never fully cross in life — Shakespeare makes the tomb a space where the feud's boundaries dissolve too late.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  2. JULIET
  // ══════════════════════════════════════════════════════════
  {
    name: "Juliet",
    textSlug: "romeo-juliet",
    traits: [
      // ── innocent (initially) ──
      {
        trait: "innocent (initially)",
        colour: "teal",
        quotes: [
          {
            quote:
              "It is an honour that I dream not of.",
            who: "Juliet",
            act: "Act 1, Scene 3",
            points: [
              "Juliet's response to her mother's discussion of marriage reveals genuine **naivety** — she has not yet begun to imagine herself as a romantic or sexual being, placing her firmly within the patriarchal expectation of a dutiful daughter.",
              "The verb **'dream'** is significant: by Act 5, Juliet will dream of and execute plans far beyond anything her parents conceived — Shakespeare uses this early innocence to measure the scale of her transformation.",
              "**AO3 context**: for an Elizabethan audience, a thirteen-year-old girl's obedience would be unremarkable — Shakespeare initially presents Juliet within social norms before progressively showing her transgress every one of them.",
            ],
          },
          {
            quote:
              "My only love sprung from my only hate! Too early seen unknown, and known too late!",
            who: "Juliet",
            act: "Act 1, Scene 5",
            points: [
              "The **antithesis** of 'love'/'hate' and 'early'/'late' captures Juliet's loss of innocence in a single couplet — she discovers simultaneously that she loves and that love is forbidden.",
              "The passive construction **'sprung from'** presents love as involuntary, organic, and beyond her control — Shakespeare positions Juliet's awakening as something that happens **to** her, marking the boundary between innocence and experience.",
            ],
          },
          {
            quote:
              "Go ask his name.—If he be married, my grave is like to be my wedding bed.",
            who: "Juliet",
            act: "Act 1, Scene 5",
            points: [
              "The **proleptic irony** is devastating: Juliet's grave will indeed be her wedding bed, fulfilling this throwaway line with tragic literalness — Shakespeare seeds the ending into the beginning.",
              "The shift from innocent curiosity ('go ask his name') to the morbid image of a **grave as wedding bed** signals the speed of Juliet's emotional acceleration — innocence is already giving way to the play's fusion of love and death.",
            ],
          },
        ],
      },
      // ── courageous ──
      {
        trait: "courageous",
        colour: "purple",
        quotes: [
          {
            quote:
              "What's in a name? That which we call a rose by any other word would smell as sweet.",
            who: "Juliet",
            act: "Act 2, Scene 2",
            points: [
              "Juliet's famous **philosophical challenge** to the power of names is intellectually radical — she questions the entire feudal system of inherited identity that governs Verona, showing extraordinary courage for a girl of thirteen.",
              "The **rose metaphor** argues that essence is independent of labels, a position that subverts **patrilineal identity** and, by extension, the authority of her father — Shakespeare gives Juliet the play's most progressive argument.",
              "**AO3 context**: in a society where a family name determined social standing, legal rights, and marriage prospects, Juliet's dismissal of naming is a profound act of **social rebellion** that an Elizabethan audience would find both thrilling and dangerous.",
            ],
          },
          {
            quote:
              "O, think'st thou we shall ever meet again?",
            who: "Juliet",
            act: "Act 3, Scene 5",
            points: [
              "Despite her fear, Juliet does not beg Romeo to stay or abandon the plan — her courage lies in **accepting the necessary separation** while fully aware of its dangers.",
              "The **interrogative** form reveals Juliet's vulnerability without diminishing her resolve — Shakespeare shows that true courage coexists with fear, not in the absence of it.",
            ],
          },
          {
            quote:
              "O happy dagger! This is thy sheath; there rust, and let me die.",
            who: "Juliet",
            act: "Act 5, Scene 3",
            points: [
              "The **apostrophe** to the dagger as 'happy' transforms a weapon into an instrument of reunion — Juliet's final courage redefines death itself as an act of love rather than destruction.",
              "Where Romeo needed poison purchased from another, Juliet seizes the dagger **herself** with decisive immediacy — Shakespeare makes her death more active, brave, and self-determined than Romeo's.",
              "The **sexual metaphor** of the body as 'sheath' for the dagger fuses consummation with death in a final instance of the play's persistent **Eros/Thanatos** motif.",
            ],
          },
        ],
      },
      // ── mature / pragmatic ──
      {
        trait: "mature / pragmatic",
        colour: "amber",
        quotes: [
          {
            quote:
              "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite.",
            who: "Juliet",
            act: "Act 2, Scene 2",
            points: [
              "While this line is romantic, its underlying logic is remarkably **sophisticated**: love as an infinite, self-renewing resource challenges the economic language of marriage as transaction that dominates the adult world of the play.",
              "The measured **parallelism** ('as boundless… as deep') gives the speech a rhetorical control that contrasts with Romeo's more extravagant imagery — Shakespeare consistently gives Juliet the more balanced, mature voice.",
              "**AO2 form**: Juliet's use of a sustained, coherent **conceit** (the sea metaphor) contrasts with Romeo's tendency to pile up disconnected images — her linguistic maturity mirrors her emotional depth.",
            ],
          },
          {
            quote:
              "If that thy bent of love be honourable, thy purpose marriage, send me word tomorrow.",
            who: "Juliet",
            act: "Act 2, Scene 2",
            points: [
              "While Romeo floats in poetic abstraction, Juliet anchors the relationship in **practical action** — she demands clarity of intention, a specific timeline, and a commitment to marriage.",
              "The **conditional** 'if… be honourable' shows Juliet testing Romeo's sincerity rather than blindly accepting it — Shakespeare gives her the agency and caution that Romeo conspicuously lacks.",
            ],
          },
          {
            quote:
              "Conceit, more rich in matter than in words, brags of his substance, not of ornament.",
            who: "Juliet",
            act: "Act 2, Scene 6",
            points: [
              "Juliet explicitly critiques excessive verbal display, preferring **substance over style** — this is a remarkably self-aware comment in a play saturated with poetic language.",
              "Shakespeare uses Juliet to articulate a **literary-critical** position: genuine feeling does not need ornamental language. This implicitly critiques Romeo's Petrarchan excesses and aligns Juliet with emotional authenticity.",
            ],
          },
        ],
      },
      // ── isolated ──
      {
        trait: "isolated",
        colour: "red",
        quotes: [
          {
            quote:
              "Is there no pity sitting in the clouds that sees into the bottom of my grief?",
            who: "Juliet",
            act: "Act 3, Scene 5",
            points: [
              "The **rhetorical question** addressed to the heavens reveals Juliet's absolute isolation — with Romeo banished, her parents hostile, and the Nurse's loyalty about to fail, she has no human ally left.",
              "The **personification** of 'pity sitting in the clouds' suggests Juliet is reaching beyond the mortal world for compassion she cannot find within it — Shakespeare foreshadows her turn to the supernatural solution of the Friar's potion.",
              "**AO2 structure**: this line comes immediately before the Nurse advises Juliet to marry Paris, completing her isolation from every support — Shakespeare systematically removes every lifeline in a single scene.",
            ],
          },
          {
            quote:
              "Thou and my bosom henceforth shall be twain.",
            who: "Juliet",
            act: "Act 3, Scene 5",
            points: [
              "Juliet's dismissal of the Nurse ('thou and my bosom… shall be twain') is a decisive **severing** of her last remaining confidante — the word 'twain' (meaning 'divided in two') enacts the separation within the language itself.",
              "This moment marks Juliet's transition from a supported girl to a solitary woman who must navigate crisis alone — Shakespeare makes her isolation the crucible in which her maturity and courage are forged.",
            ],
          },
          {
            quote:
              "I'll to the Friar to know his remedy. If all else fail, myself have power to die.",
            who: "Juliet",
            act: "Act 3, Scene 5",
            points: [
              "The **couplet** that closes the scene is chillingly pragmatic: Juliet weighs the Friar's help against suicide as two rational options — Shakespeare shows her isolation has transformed her from innocent girl to someone capable of contemplating self-destruction.",
              "The phrase **'myself have power'** reclaims agency from a world that has denied her all choice — even the power to die becomes an assertion of autonomy, inverting the patriarchal control that surrounds her.",
              "**AO3 context**: a woman claiming 'power' over her own body — including the power to end her life — was a radical assertion in a society where women were legally the property of fathers and husbands.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Juliet appears on the balcony",
        act: "Act 2, Scene 2",
        stageDirection: "Juliet appears above at a window",
        points: [
          "Juliet's entrance **above** Romeo creates a vertical staging that physically represents their social separation — she is elevated, unreachable, and associated with celestial imagery ('the sun'), while he stands below in the earthly darkness.",
          "She enters **unaware** of Romeo's presence, speaking her private thoughts aloud — Shakespeare uses the convention of the soliloquy overheard to create dramatic irony and give the audience access to her genuine feelings before any performance for a lover.",
          "The balcony scene's staging — two lovers separated by physical space, reaching toward each other — becomes the play's defining **visual metaphor** for love that cannot fully bridge the divide of family and society.",
        ],
      },
      {
        type: "absence",
        moment: "Juliet's apparent death (the potion sleep)",
        act: "Act 4, Scene 5",
        points: [
          "Juliet's 'absence' through feigned death is the play's most consequential act of **concealment** — the entire catastrophe flows from the gap between appearance (death) and reality (sleep).",
          "The Capulet household's grief is both genuine and **dramatically ironic**: they mourn a daughter who is alive, while they themselves have driven her to this desperate measure through their patriarchal tyranny.",
          "**AO2 structure**: Juliet is absent from the stage for a prolonged stretch during Act 5, during which Romeo receives false news and makes fatal decisions — Shakespeare weaponises her absence as the engine of tragic mistiming.",
        ],
      },
      {
        type: "exit",
        moment: "Juliet's death in the tomb",
        act: "Act 5, Scene 3",
        stageDirection: "She stabs herself and falls",
        points: [
          "Juliet's final exit is a decisive, physical act — 'she stabs herself' — that contrasts with Romeo's slower death by poison. Shakespeare gives Juliet the more violent, active death, subverting gendered expectations of feminine passivity.",
          "Juliet dies with Romeo's dagger, not his words — her final moment is **action** rather than rhetoric, completing her arc from obedient girl to autonomous agent who determines her own fate, even in death.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  3. TYBALT
  // ══════════════════════════════════════════════════════════
  {
    name: "Tybalt",
    textSlug: "romeo-juliet",
    traits: [
      // ── aggressive / volatile ──
      {
        trait: "aggressive / volatile",
        colour: "teal",
        quotes: [
          {
            quote:
              "What, drawn, and talk of peace? I hate the word, as I hate hell, all Montagues, and thee.",
            who: "Tybalt",
            act: "Act 1, Scene 1",
            points: [
              "Tybalt's very first line establishes his character in a single breath — the **tricolon** 'hell, all Montagues, and thee' escalates from the abstract to the personal, revealing hatred as his defining emotional register.",
              "The verb **'hate'** is repeated twice, creating a rhetorical hammering that mirrors Tybalt's physical aggression — Shakespeare makes his language as combative as his swordplay.",
              "**AO2 structure**: placing this line in the opening scene sets the play's violent register from the start — Tybalt functions as the embodiment of the feud, and his aggression is the first thing the audience encounters after the Prologue.",
            ],
          },
          {
            quote:
              "Boy, this shall not excuse the injuries that thou hast done me; therefore turn and draw.",
            who: "Tybalt",
            act: "Act 3, Scene 1",
            points: [
              "The dismissive address **'Boy'** is designed to provoke — Tybalt uses language as a weapon to force Romeo into combat, understanding that honour culture demands a response to such an insult.",
              "The **imperative** 'turn and draw' leaves no room for negotiation — Shakespeare presents Tybalt as someone for whom violence is the only acceptable resolution to perceived dishonour.",
              "**AO3 context**: in Elizabethan culture, calling a man 'boy' publicly was a severe insult to his manhood and social standing — Tybalt weaponises the honour code to engineer the confrontation he desires.",
            ],
          },
        ],
      },
      // ── honour-obsessed ──
      {
        trait: "honour-obsessed",
        colour: "purple",
        quotes: [
          {
            quote:
              "This, by his voice, should be a Montague. Fetch me my rapier, boy.",
            who: "Tybalt",
            act: "Act 1, Scene 5",
            points: [
              "Tybalt's immediate instinct upon detecting a Montague at the feast is to reach for his **weapon** — Shakespeare shows that for Tybalt, the presence of an enemy is an automatic trigger for violence, bypassing all social context.",
              "The **imperative** 'Fetch me my rapier' reveals a character who sees the Capulet feast not as a celebration but as territory to be defended — honour demands violent response even at a party.",
              "The detail that Tybalt recognises Romeo **by voice alone** suggests a level of obsessive attention to the enemy that borders on surveillance — his identity is entirely constructed around opposition to the Montagues.",
            ],
          },
          {
            quote:
              "Now, by the stock and honour of my kin, to strike him dead I hold it not a sin.",
            who: "Tybalt",
            act: "Act 1, Scene 5",
            points: [
              "The **rhyming couplet** ('kin'/'sin') gives Tybalt's murderous intent a chilling formality — Shakespeare frames his violence as a **principled position**, not mere hot-headedness.",
              "Tybalt invokes 'the stock and honour of my kin' as moral justification for killing — Shakespeare exposes how **honour culture** transforms murder into duty and makes family pride indistinguishable from bloodlust.",
              "**AO3 context**: the concept of family honour as a justification for violence reflects the real culture of **vendetta** in Renaissance Italy that Shakespeare's audience associated with the play's Verona setting.",
            ],
          },
          {
            quote:
              "Uncle, this is a Montague, our foe, a villain that is hither come in spite, to scorn at our solemnity this night.",
            who: "Tybalt",
            act: "Act 1, Scene 5",
            points: [
              "Tybalt interprets Romeo's presence as deliberate provocation ('come in spite') — he is incapable of imagining a Montague acting from any motive other than hostility, revealing how the feud has **distorted his perception** of reality.",
              "The noun **'villain'** applied to Romeo is ironic given that Tybalt himself is the play's most destabilising aggressive force — Shakespeare shows how honour-obsession projects its own violence onto others.",
            ],
          },
        ],
      },
      // ── hateful ──
      {
        trait: "hateful",
        colour: "amber",
        quotes: [
          {
            quote:
              "I hate the word, as I hate hell, all Montagues, and thee.",
            who: "Tybalt",
            act: "Act 1, Scene 1",
            points: [
              "The **abstract hatred** of the word 'peace' itself — not merely conflict with a specific person — reveals Tybalt as someone whose identity is **constituted by enmity**; without hatred, he would have no sense of self.",
              "Placing 'hell' alongside 'all Montagues' in the tricolon equates the enemy family with **damnation** itself — Shakespeare shows that the feud has acquired a quasi-religious intensity in Tybalt's mind.",
            ],
          },
          {
            quote:
              "Patience perforce with wilful choler meeting makes my flesh tremble in their different greeting.",
            who: "Tybalt",
            act: "Act 1, Scene 5",
            points: [
              "The **personification** of 'patience' and 'choler' as warring forces within his body reveals Tybalt's hatred as a physical, uncontrollable compulsion — restraint causes him literal, somatic distress.",
              "Lord Capulet forces Tybalt to suppress his rage at the feast, but the verb **'tremble'** signals that this is a temporary containment, not a resolution — Shakespeare foreshadows the explosion of violence in Act 3.",
              "**AO3 context**: the reference to **'choler'** invokes the Elizabethan theory of the four humours — Tybalt is characterised as choleric (hot and dry), meaning his aggression is presented as a fundamental imbalance of temperament, not a choice.",
            ],
          },
          {
            quote:
              "Romeo, the love I bear thee can afford no better term than this: thou art a villain.",
            who: "Tybalt",
            act: "Act 3, Scene 1",
            points: [
              "The sarcastic use of **'love'** to introduce an insult is deliberately provocative — Tybalt perverts the language of affection into a vehicle for aggression, mirroring how the feud corrupts all forms of human connection.",
              "The declaration 'thou art a villain' is a formal challenge in Elizabethan terms — Shakespeare shows Tybalt using the **rituals of honour** to create conditions for justified violence.",
            ],
          },
        ],
      },
      // ── catalytic ──
      {
        trait: "catalytic",
        colour: "red",
        quotes: [
          {
            quote:
              "What, art thou drawn among these heartless hinds? Turn thee, Benvolio; look upon thy death.",
            who: "Tybalt",
            act: "Act 1, Scene 1",
            points: [
              "Tybalt **escalates** the servants' brawl into a gentleman's duel with a single challenge — Shakespeare shows him as the catalyst who transforms low-stakes conflict into life-threatening violence.",
              "The threat 'look upon thy death' is both a command and a prophecy — Tybalt's role throughout the play is to accelerate events toward their fatal conclusion, making him the feud's most active agent.",
            ],
          },
          {
            quote:
              "A plague o' both your houses! They have made worms' meat of me.",
            who: "Mercutio (dying because of Tybalt)",
            act: "Act 3, Scene 1",
            points: [
              "Although Mercutio speaks these words, it is **Tybalt's blade** that produces them — Tybalt's killing of Mercutio is the single most catalytic event in the play, converting a comedy of love into a tragedy of death.",
              "The curse 'a plague o' both your houses' implicates both families equally, but it is Tybalt who **enacts** the feud's violence most consistently — Shakespeare makes him the mechanism through which the ancient grudge claims its victims.",
              "**AO2 structure**: Mercutio's death at Tybalt's hand is the play's **peripeteia** — the turning point after which reversal is inevitable, making Tybalt the structural catalyst of the entire tragedy.",
            ],
          },
          {
            quote:
              "Alive in triumph, and Mercutio slain! Away to heaven, respective lenity, and fire-eyed fury be my conduct now!",
            who: "Romeo (responding to Tybalt's killing of Mercutio)",
            act: "Act 3, Scene 1",
            points: [
              "Tybalt's killing of Mercutio catalyses Romeo's transformation from **lover to killer** — the phrase 'fire-eyed fury' marks the moment Romeo abandons 'respective lenity' (considerate gentleness) and adopts Tybalt's own language of violence.",
              "Shakespeare shows that Tybalt's aggression is **contagious**: it infects Romeo, who then kills Tybalt, triggering banishment, which triggers the potion plan, which triggers the double suicide — a chain of catastrophe with Tybalt as its first link.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Tybalt arrives seeking Romeo for a duel",
        act: "Act 3, Scene 1",
        stageDirection: "Enter Tybalt and others",
        points: [
          "Tybalt's entrance transforms a scene of comic banter between Mercutio and Benvolio into an arena of lethal tension — Shakespeare uses his physical arrival to shift the play's **genre** from comedy to tragedy in real time.",
          "Benvolio's warning that 'the Capulets are abroad' builds anticipation before Tybalt appears — Shakespeare stages the entrance as a threat that materialises, creating maximum dramatic impact.",
          "The contrast between Mercutio's witty wordplay and Tybalt's deadly seriousness creates a tonal collision that makes the audience aware the play is about to cross an irreversible threshold.",
        ],
      },
      {
        type: "exit",
        moment: "Tybalt's death at Romeo's hands",
        act: "Act 3, Scene 1",
        stageDirection: "Tybalt falls",
        points: [
          "Tybalt's exit from the play via death is the structural **hinge** of the entire tragedy — every subsequent disaster flows from this single moment of violence.",
          "The stage direction 'Tybalt falls' is starkly minimal for such a pivotal death — Shakespeare does not grant Tybalt a death speech, denying him the eloquence he never possessed in life and reinforcing the **sudden, brutal** nature of the play's violence.",
          "**AO2 structure**: Tybalt is removed from the play at its exact midpoint, yet his death reverberates through every remaining scene — Shakespeare demonstrates that a character can be more powerful as a **absent catalyst** than as a living presence.",
        ],
      },
      {
        type: "absence",
        moment: "Tybalt's unseen letter challenging Romeo",
        act: "Act 2, Scene 4",
        points: [
          "Tybalt sends a letter of challenge to Romeo's house while Romeo is secretly with Juliet — this **offstage action** creates dramatic irony as the audience knows violence is approaching while the lovers remain oblivious.",
          "The letter represents Tybalt's aggression operating at a distance, extending his threat beyond his physical presence — Shakespeare shows the feud's violence as something that **pursues** Romeo even into his moments of happiness.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  4. MERCUTIO
  // ══════════════════════════════════════════════════════════
  {
    name: "Mercutio",
    textSlug: "romeo-juliet",
    traits: [
      // ── witty / irreverent ──
      {
        trait: "witty / irreverent",
        colour: "teal",
        quotes: [
          {
            quote:
              "If love be rough with you, be rough with love; prick love for pricking, and you beat love down.",
            who: "Mercutio",
            act: "Act 1, Scene 4",
            points: [
              "The relentless **sexual punning** on 'prick' and 'beat love down' reduces Romeo's romantic agony to physical comedy — Mercutio uses bawdy wit as a deliberate strategy to puncture Petrarchan posturing.",
              "The **imperative** mood ('be rough', 'prick', 'beat') presents love as something to be conquered through action rather than suffered through poetry — Mercutio offers a masculine, physical counter-philosophy to Romeo's passive melancholy.",
              "**AO2 form**: Mercutio's prose-inflected, rapid-fire wit contrasts with Romeo's verse — Shakespeare uses register to dramatise the clash between two fundamentally different worldviews.",
            ],
          },
          {
            quote:
              "Nay, I am the very pink of courtesy.",
            who: "Mercutio",
            act: "Act 2, Scene 4",
            points: [
              "The **pun** on 'pink' (meaning both 'perfection' and a decorative hole in a shoe) is characteristic of Mercutio's compulsive wordplay — he cannot resist turning any word into a joke, even at the expense of coherence.",
              "The scene of verbal sparring with Romeo in Act 2, Scene 4 is the only time the two friends are genuinely happy together — Shakespeare makes their wit-combat a display of **male friendship at its most joyful**, which intensifies the grief when Mercutio dies.",
            ],
          },
          {
            quote:
              "A sail, a sail! ... Good Peter, to hide her face; for her fan's the fairer face.",
            who: "Mercutio",
            act: "Act 2, Scene 4",
            points: [
              "Mercutio's mockery of the Nurse's appearance is cruel but characteristic — his wit recognises no boundaries of decorum, age, or social propriety, making him a force of **anarchic disruption** in Verona's ordered society.",
              "The irreverence toward the Nurse — Juliet's surrogate mother — foreshadows how Mercutio's unchecked energy will disrupt matters far more serious than social niceties, culminating in the fatal duel.",
            ],
          },
        ],
      },
      // ── loyal ──
      {
        trait: "loyal",
        colour: "purple",
        quotes: [
          {
            quote:
              "O calm, dishonourable, vile submission! Alla stoccata carries it away.",
            who: "Mercutio",
            act: "Act 3, Scene 1",
            points: [
              "Mercutio fights Tybalt not for his own honour but because he cannot bear to see Romeo humiliated — the **tricolon** 'calm, dishonourable, vile' reveals his disgust at what he perceives as Romeo's cowardice.",
              "The loyalty that drives Mercutio to fight is **tragically misguided**: Romeo's 'submission' is actually motivated by his secret marriage to a Capulet, but Mercutio's ignorance transforms love into apparent dishonour.",
              "Shakespeare presents loyalty as a **double-edged** quality: Mercutio's devotion to Romeo directly causes his own death and, by extension, the entire tragic chain of events that follows.",
            ],
          },
          {
            quote:
              "Why the devil came you between us? I was hurt under your arm.",
            who: "Mercutio",
            act: "Act 3, Scene 1",
            points: [
              "The accusation directed at Romeo is raw and immediate — Mercutio's loyalty does not prevent him from recognising that Romeo's intervention caused his death, creating a moment of **bitter irony**.",
              "The physical detail **'under your arm'** makes Romeo literally complicit in Mercutio's death — Shakespeare stages the killing so that Romeo's attempt at peacemaking becomes the mechanism of destruction, indicting good intentions as well as bad.",
            ],
          },
        ],
      },
      // ── cynical about love ──
      {
        trait: "cynical about love",
        colour: "amber",
        quotes: [
          {
            quote:
              "O, then I see Queen Mab hath been with you. She is the fairies' midwife.",
            who: "Mercutio",
            act: "Act 1, Scene 4",
            points: [
              "The Queen Mab speech begins as playful mockery of Romeo's lovesick dreams but escalates into a **dark vision** of human desire as fundamentally delusional — Mab delivers not truth but fantasies tailored to each sleeper's appetites.",
              "By attributing love to a fairy's mischief, Mercutio reduces Romeo's grand passion to a **neurological trick** — Shakespeare uses the speech to offer a materialist counter-argument to romantic idealism.",
              "**AO2 form**: the speech's length and escalating intensity — from tiny fairy to visions of war and corruption — mirrors Mercutio's own inability to control his verbal energy, revealing a character whose wit is both his gift and his compulsion.",
            ],
          },
          {
            quote:
              "Romeo! Humours! Madman! Passion! Lover! Appear thou in the likeness of a sigh.",
            who: "Mercutio",
            act: "Act 2, Scene 1",
            points: [
              "The **staccato listing** of nouns ('Humours! Madman! Passion! Lover!') reduces Romeo to a catalogue of lovesick cliches — Mercutio's cynicism operates by stripping romance of its individuality and exposing it as a generic condition.",
              "The mocking invocation to 'appear' parodies both conjuring spells and Petrarchan love poetry — Shakespeare positions Mercutio as the play's internal **critic of romanticism**, a voice of sceptical realism.",
            ],
          },
          {
            quote:
              "Now is he for the numbers that Petrarch flowed in. Laura to his lady was a kitchen-wench.",
            who: "Mercutio",
            act: "Act 2, Scene 4",
            points: [
              "The direct reference to **Petrarch** makes explicit what Shakespeare implies throughout: Romeo's love rhetoric is a literary performance derived from conventions, not spontaneous feeling.",
              "Calling Petrarch's Laura a **'kitchen-wench'** by comparison is both hyperbolic and deflating — Mercutio simultaneously mocks Romeo's idealisation of Juliet and the entire tradition of courtly love poetry.",
              "**AO3 context**: Shakespeare's audience, educated in Petrarchan conventions, would recognise Mercutio's critique as genuinely insightful — he voices the play's own sophisticated awareness of its literary heritage.",
            ],
          },
        ],
      },
      // ── prophetic ──
      {
        trait: "prophetic",
        colour: "red",
        quotes: [
          {
            quote:
              "A plague o' both your houses! They have made worms' meat of me.",
            who: "Mercutio",
            act: "Act 3, Scene 1",
            points: [
              "The repeated **curse** ('a plague o' both your houses') — spoken three times as Mercutio dies — functions as a prophetic judgement on both families that is fulfilled by the double suicide of Romeo and Juliet.",
              "The phrase **'worms' meat'** strips death of all nobility, reducing the human body to food for decay — Mercutio's final words reject the honour culture that killed him, exposing its violence as meaningless waste.",
              "**AO2 structure**: Mercutio's curse operates as a structural **pivot**: it reframes the play from a story about love to a story about the destructive consequences of feuding, aligning with the Prologue's emphasis on 'ancient grudge'.",
            ],
          },
          {
            quote:
              "Ask for me tomorrow, and you shall find me a grave man.",
            who: "Mercutio",
            act: "Act 3, Scene 1",
            points: [
              "The **pun** on 'grave' (meaning both 'serious' and 'dead') is Mercutio's final joke — he uses his characteristic wit even as he dies, suggesting that language and performance define him to his last breath.",
              "The prediction 'ask for me tomorrow' acknowledges death is imminent yet frames it as a future social appointment — Shakespeare shows Mercutio's irrepressible wit functioning as a defence mechanism even against mortality.",
            ],
          },
          {
            quote:
              "True, I talk of dreams, which are the children of an idle brain, begot of nothing but vain fantasy.",
            who: "Mercutio",
            act: "Act 1, Scene 4",
            points: [
              "Mercutio's dismissal of dreams as 'vain fantasy' is **ironically prophetic** — Romeo's premonitory dream earlier in the scene ('my mind misgives some consequence yet hanging in the stars') will prove tragically accurate.",
              "The characterisation of dreams as 'children of an idle brain' anticipates modern psychology's understanding of dreams as projections — yet Shakespeare shows that in this play, dreams and premonitions carry genuine predictive power, undermining Mercutio's rationalism.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Mercutio's Queen Mab speech",
        act: "Act 1, Scene 4",
        points: [
          "Mercutio enters the play with the longest and most virtuosic speech in Act 1 — Shakespeare immediately establishes him as a linguistic force whose energy dominates every scene he inhabits.",
          "The Queen Mab speech transitions from whimsy to darkness, ending with nightmares of suffocation and violence — this tonal shift foreshadows Mercutio's own trajectory from comic vitality to violent death.",
          "Romeo must interrupt Mercutio to stop the speech ('Peace, peace, Mercutio, peace!'), revealing that Mercutio's verbal energy is **uncontrollable** — a quality that will prove fatal when he cannot restrain himself from fighting Tybalt.",
        ],
      },
      {
        type: "exit",
        moment: "Mercutio's death",
        act: "Act 3, Scene 1",
        stageDirection: "Mercutio is carried out",
        points: [
          "Mercutio dies offstage — he is carried out wounded and his death is reported — denying the audience a visible death scene and creating a moment of **uncertainty** that mirrors the characters' own confusion about the wound's severity.",
          "The removal of Mercutio from the play removes its primary source of **comic energy** — the play's tonal landscape shifts permanently after his exit, as if his death drains the colour from Verona.",
          "**AO2 structure**: Mercutio belongs to neither Montague nor Capulet, making his death a consequence of a feud he has no stake in — Shakespeare uses his exit to indict the feudal system by showing it destroys even the innocent bystanders.",
        ],
      },
      {
        type: "absence",
        moment: "The play after Mercutio's death",
        act: "Act 3, Scene 2 onwards",
        points: [
          "After Mercutio's death, the play has no comic voice of comparable power — his **absence** is felt as a tonal void that darkens every subsequent scene.",
          "Shakespeare structures the play so that Mercutio and Tybalt — the two most volatile characters — are both removed at the midpoint, leaving the lovers without either the wit or the danger that propelled the first half, replaced by the slower mechanisms of parental tyranny and miscommunication.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  5. FRIAR LAWRENCE
  // ══════════════════════════════════════════════════════════
  {
    name: "Friar Lawrence",
    textSlug: "romeo-juliet",
    traits: [
      // ── well-intentioned ──
      {
        trait: "well-intentioned",
        colour: "teal",
        quotes: [
          {
            quote:
              "In one respect I'll thy assistant be; for this alliance may so happy prove to turn your households' rancour to pure love.",
            who: "Friar Lawrence",
            act: "Act 2, Scene 3",
            points: [
              "The Friar agrees to marry Romeo and Juliet not for romantic reasons but as a **political strategy** to end the feud — Shakespeare shows that his good intentions are grounded in civic responsibility rather than personal sentiment.",
              "The conditional **'may so happy prove'** reveals the Friar's awareness that his plan is a gamble — he proceeds despite uncertainty, establishing the pattern of **well-meaning recklessness** that defines his character.",
              "**AO3 context**: as a Franciscan friar, Lawrence occupies a position of spiritual authority and community trust — Shakespeare explores how good intentions combined with institutional power can produce catastrophic outcomes.",
            ],
          },
          {
            quote:
              "Wisely and slow. They stumble that run fast.",
            who: "Friar Lawrence",
            act: "Act 2, Scene 3",
            points: [
              "The **proverbial wisdom** of this couplet is the Friar's characteristic mode of speech — he deals in aphorisms and moral maxims, positioning himself as a voice of experience and moderation.",
              "The irony is devastating: the Friar counsels patience but then devises a plan (the fake death) that requires split-second timing and leaves no margin for error — Shakespeare shows that **his own actions contradict his philosophy**.",
            ],
          },
          {
            quote:
              "Come, come with me, and we will make short work; for, by your leaves, you shall not stay alone till Holy Church incorporate two in one.",
            who: "Friar Lawrence",
            act: "Act 2, Scene 6",
            points: [
              "The phrase **'make short work'** carries an unintentional double meaning — the marriage will indeed be short-lived, and the Friar's haste mirrors the very impulsiveness he warned against.",
              "The Friar's eagerness to proceed quickly undermines his earlier counsel of caution — Shakespeare reveals that even the play's voice of wisdom is susceptible to the urgency that drives the plot toward catastrophe.",
            ],
          },
        ],
      },
      // ── secretive / reckless ──
      {
        trait: "secretive / reckless",
        colour: "purple",
        quotes: [
          {
            quote:
              "Holy Saint Francis, what a change is here! Is Rosaline, that thou didst love so dear, so soon forsaken?",
            who: "Friar Lawrence",
            act: "Act 2, Scene 3",
            points: [
              "The Friar **correctly diagnoses** Romeo's fickleness — his exclamation reveals genuine surprise at Romeo's sudden shift from Rosaline to Juliet, suggesting he recognises the relationship's instability.",
              "Despite this insight, the Friar proceeds with the marriage anyway — Shakespeare creates a devastating gap between the Friar's **analytical intelligence** and his willingness to act on that analysis, establishing his recklessness.",
            ],
          },
          {
            quote:
              "Take thou this vial, being then in bed, and this distilling liquor drink thou off.",
            who: "Friar Lawrence",
            act: "Act 4, Scene 1",
            points: [
              "The Friar's potion plan is extraordinarily **dangerous and complex**: it requires Juliet to feign death, relies on a letter reaching Romeo in Mantua, and depends on precise timing in a tomb — Shakespeare exposes the recklessness beneath the Friar's calm exterior.",
              "The **imperative** verbs ('take', 'drink') position the Friar as someone who gives orders to a desperate girl — Shakespeare subtly critiques the power dynamic in which an adult authority figure asks a child to risk her life for his scheme.",
              "**AO3 context**: a friar dispensing potions that simulate death would have carried associations with **alchemy and forbidden knowledge** for an Elizabethan audience — Shakespeare hints that Lawrence's learning crosses the boundary between spiritual guidance and dangerous experimentation.",
            ],
          },
          {
            quote:
              "I'll send a friar with speed to Mantua, with my letters to thy lord.",
            who: "Friar Lawrence",
            act: "Act 4, Scene 1",
            points: [
              "The entire plan hinges on a **single letter** reaching Romeo in time — the Friar's failure to build any redundancy into his scheme reveals a recklessness that belies his philosophical composure.",
              "Shakespeare ensures that this specific element — the undelivered letter — is what collapses the plan, making the Friar's **secretive approach** (relying on private channels rather than public disclosure) the direct cause of the tragedy.",
            ],
          },
        ],
      },
      // ── philosophical ──
      {
        trait: "philosophical",
        colour: "amber",
        quotes: [
          {
            quote:
              "These violent delights have violent ends and in their triumph die, like fire and powder, which, as they kiss, consume.",
            who: "Friar Lawrence",
            act: "Act 2, Scene 6",
            points: [
              "The **simile** of 'fire and powder' which 'kiss' and 'consume' fuses love and destruction in a single image — the Friar articulates the play's central thesis that passion and annihilation are inseparable.",
              "The verb **'consume'** suggests mutual destruction: fire needs powder as powder needs fire — Shakespeare presents the lovers' passion as a chemical reaction that requires both participants and destroys both.",
              "**AO2 structure**: this warning is spoken moments before the marriage — Shakespeare positions the Friar's most prophetic insight at the exact point where it could still change the outcome, creating unbearable dramatic tension when it is ignored.",
            ],
          },
          {
            quote:
              "The earth that's nature's mother is her tomb; what is her burying grave, that is her womb.",
            who: "Friar Lawrence",
            act: "Act 2, Scene 3",
            points: [
              "The **paradox** of the earth as both 'tomb' and 'womb' anticipates the play's final image — the Capulet tomb as a space where death and love coexist, where the lovers' burial generates the rebirth of civic peace.",
              "The Friar's botanical philosophy, delivered while gathering herbs, establishes his dual nature as a man of **science and spirit** — he understands that good and evil, healing and poison, coexist in all natural things.",
              "**AO3 context**: the Renaissance concept of **natural philosophy** — the study of nature as a path to understanding God — positions the Friar as an intellectual figure whose knowledge of nature's duality makes him uniquely equipped (and uniquely dangerous) as an intermediary.",
            ],
          },
          {
            quote:
              "Virtue itself turns vice, being misapplied, and vice sometime by action dignified.",
            who: "Friar Lawrence",
            act: "Act 2, Scene 3",
            points: [
              "This **chiasmus** (virtue/vice reversed to vice/virtue) encapsulates the Friar's moral philosophy — and also prophesies his own trajectory, as his virtuous intentions produce vicious outcomes.",
              "Shakespeare gives the Friar the intellectual tools to understand that good intentions can produce evil results — yet he remains unable to apply this insight to his own increasingly reckless actions, creating a form of **intellectual dramatic irony**.",
            ],
          },
        ],
      },
      // ── complicit ──
      {
        trait: "complicit",
        colour: "red",
        quotes: [
          {
            quote:
              "Come, I'll dispose of thee among a sisterhood of holy nuns.",
            who: "Friar Lawrence",
            act: "Act 5, Scene 3",
            points: [
              "In the tomb, with Romeo dead, the Friar's immediate instinct is to **remove Juliet** from the scene — Shakespeare exposes the Friar's priorities: concealing his own involvement takes precedence over protecting the girl he has endangered.",
              "The suggestion of a **nunnery** — permanent enclosure — reveals the Friar's willingness to dispose of Juliet much as her father wished to dispose of her in marriage; for all his wisdom, he defaults to **patriarchal control** when under pressure.",
            ],
          },
          {
            quote:
              "Come, go, good Juliet. I dare no longer stay.",
            who: "Friar Lawrence",
            act: "Act 5, Scene 3",
            points: [
              "The Friar **flees the tomb** when he hears the Watch approaching, abandoning Juliet beside Romeo's corpse — Shakespeare makes his cowardice the final enabling act that allows Juliet to take her own life.",
              "The phrase 'I dare no longer stay' is a confession of **moral failure** disguised as pragmatism — the man who counselled others to be brave cannot find the courage to remain at the scene of his own scheme's catastrophic conclusion.",
              "**AO3 context**: the Friar's flight from the tomb would have confirmed Elizabethan suspicions about **Catholic clergy** — Shakespeare's Protestant audience may have read his complicity as a critique of the institutional Church's claim to moral authority.",
            ],
          },
          {
            quote:
              "I am the greatest, able to do least, yet most suspected, as the time and place doth make against me, of this direful murder.",
            who: "Friar Lawrence",
            act: "Act 5, Scene 3",
            points: [
              "The Friar's confession acknowledges his **complicity** but frames it in terms of ability ('able to do least') rather than responsibility — Shakespeare shows him still deflecting blame even in his moment of supposed honesty.",
              "The word **'suspected'** reveals the Friar's preoccupation with how he will be perceived — his concern is reputational as much as moral, suggesting that institutional self-preservation shapes his actions throughout the play.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Friar Lawrence's first appearance gathering herbs",
        act: "Act 2, Scene 3",
        stageDirection: "Enter Friar Lawrence alone, with a basket",
        points: [
          "The Friar enters alone with a basket of herbs at dawn — Shakespeare introduces him as a **solitary, contemplative figure** removed from Verona's violence, establishing his philosophical character through staging.",
          "His opening soliloquy on the dual nature of plants ('poison hath residence and medicine power') establishes the play's central metaphor: the same substance can **heal or kill** depending on its application — a truth that will define his own role in the tragedy.",
          "The basket of herbs is a visual **prop** that immediately associates the Friar with knowledge of natural potions, foreshadowing the sleeping draught that will set the final catastrophe in motion.",
        ],
      },
      {
        type: "exit",
        moment: "Friar Lawrence flees the Capulet tomb",
        act: "Act 5, Scene 3",
        stageDirection: "Exit Friar Lawrence",
        points: [
          "The Friar's exit from the tomb is a moment of **abandonment** — he leaves Juliet alone with Romeo's corpse, and in his absence she kills herself. Shakespeare makes the Friar's cowardice the final link in the chain of tragedy.",
          "His flight contrasts sharply with Juliet's courage: she stays and dies, while the adult authority figure runs — Shakespeare inverts the expected dynamic of protection to create a devastating indictment of the Friar's complicity.",
        ],
      },
      {
        type: "entrance",
        moment: "Friar Lawrence's confession to the Prince",
        act: "Act 5, Scene 3",
        points: [
          "The Friar re-enters the scene voluntarily to confess, and his lengthy speech recounts the entire plot from his perspective — Shakespeare uses this narration to ensure the audience (and the Prince) understands the full chain of events.",
          "The Prince's response ('We still have known thee for a holy man') pardons the Friar, but the audience is left to judge whether his good intentions mitigate his reckless actions — Shakespeare deliberately leaves the Friar's moral status **ambiguous**.",
          "**AO2 structure**: the Friar's confession functions as a **dramatic epilogue** that reframes the entire play through the lens of his involvement, forcing the audience to reassess every scene in which he participated.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  6. THE NURSE
  // ══════════════════════════════════════════════════════════
  {
    name: "The Nurse",
    textSlug: "romeo-juliet",
    traits: [
      // ── maternal / bawdy ──
      {
        trait: "maternal / bawdy",
        colour: "teal",
        quotes: [
          {
            quote:
              "Thou wast the prettiest babe that e'er I nursed. An I might live to see thee married once, I have my wish.",
            who: "The Nurse",
            act: "Act 1, Scene 3",
            points: [
              "The **superlative** 'prettiest babe' reveals genuine maternal tenderness — the Nurse's love for Juliet is grounded in physical care (nursing, bathing, feeding) rather than the formal, distanced love offered by Lady Capulet.",
              "Her wish to see Juliet married expresses a simple, heartfelt desire for Juliet's happiness — Shakespeare positions the Nurse as Juliet's **emotional mother** in contrast to Lady Capulet's role as her social and biological one.",
            ],
          },
          {
            quote:
              "Yea, quoth he, 'Dost thou fall upon thy face? Thou wilt fall backward when thou hast more wit.'",
            who: "The Nurse (quoting her husband)",
            act: "Act 1, Scene 3",
            points: [
              "The Nurse's anecdote about Juliet falling as a toddler and her husband's **sexual joke** about 'falling backward' is bawdy comedy that reveals the Nurse's world — earthy, physical, and unconcerned with propriety.",
              "She tells this story in front of Lady Capulet, who is visibly uncomfortable — the contrast between the Nurse's **frank physicality** and Lady Capulet's aristocratic restraint dramatises the class divide within the household.",
              "**AO3 context**: the Nurse's bawdy speech aligns her with the **comic lower-class characters** of Elizabethan drama, where sexual frankness was associated with social rank — Shakespeare uses her register to mark her position in the household hierarchy.",
            ],
          },
          {
            quote:
              "His name is Romeo, and a Montague, the only son of your great enemy.",
            who: "The Nurse",
            act: "Act 1, Scene 5",
            points: [
              "The Nurse delivers the devastating revelation of Romeo's identity with characteristic bluntness — there is no softening or preparation, just the stark fact.",
              "Her role as **information-bearer** between the lovers begins here and will continue throughout the play — Shakespeare establishes the Nurse as the essential intermediary whose loyalty makes the secret relationship possible.",
            ],
          },
        ],
      },
      // ── pragmatic ──
      {
        trait: "pragmatic",
        colour: "purple",
        quotes: [
          {
            quote:
              "Then hie you hence to Friar Lawrence' cell; there stays a husband to make you a wife.",
            who: "The Nurse",
            act: "Act 2, Scene 5",
            points: [
              "The Nurse actively facilitates the secret marriage, transitioning from messenger to **co-conspirator** — her pragmatic nature leads her to support Juliet's desires without considering the long-term consequences.",
              "The simple language ('husband', 'wife') contrasts with the lovers' elaborate poetry — the Nurse's pragmatism operates at the level of **practical arrangement** rather than romantic ideal, making her an effective accomplice.",
            ],
          },
          {
            quote:
              "I think it best you married with the County. O, he's a lovely gentleman! Romeo's a dishclout to him.",
            who: "The Nurse",
            act: "Act 3, Scene 5",
            points: [
              "The Nurse's advice to marry Paris after Romeo's banishment reveals a **transactional** view of marriage — she evaluates husbands on their availability and social standing rather than on love or loyalty.",
              "The dismissive **metaphor** 'Romeo's a dishclout to him' (a dishcloth compared to Paris) shocks Juliet precisely because it reduces her profound love to a question of comparative value — the Nurse cannot comprehend love that transcends practical calculation.",
              "**AO3 context**: the Nurse's pragmatism reflects the **economic reality** of marriage for women in both Elizabethan England and Renaissance Verona — a husband's material worth was often more important than romantic attachment, especially for women without independent means.",
            ],
          },
          {
            quote:
              "Go, girl, seek happy nights to happy days.",
            who: "The Nurse",
            act: "Act 1, Scene 3",
            points: [
              "This closing couplet, with its emphasis on 'happy nights', carries a **sexual innuendo** that the Nurse delivers with cheerful frankness — she views marriage primarily as a source of physical pleasure and comfort.",
              "The Nurse's pragmatic equation of happiness with physical satisfaction offers a **foil** to the spiritual, idealised love that Romeo and Juliet will develop — Shakespeare uses her perspective to highlight the uniqueness of the protagonists' passion.",
            ],
          },
        ],
      },
      // ── disloyal ──
      {
        trait: "disloyal",
        colour: "amber",
        quotes: [
          {
            quote:
              "I think it best you married with the County.",
            who: "The Nurse",
            act: "Act 3, Scene 5",
            points: [
              "This single line represents the Nurse's **betrayal** of Juliet — having facilitated the secret marriage to Romeo, she now advises Juliet to commit bigamy, revealing that her loyalty is conditional on convenience.",
              "The casual phrasing **'I think it best'** frames betrayal as reasonable advice — the Nurse does not recognise the enormity of what she is suggesting because her pragmatic worldview cannot accommodate the concept of unconditional love.",
              "**AO2 structure**: this moment is the **turning point** in the Nurse's relationship with Juliet — it triggers Juliet's decision to seek the Friar's help alone, directly leading to the potion plan and the catastrophe that follows.",
            ],
          },
          {
            quote:
              "Your first is dead, or 'twere as good he were, as living here and you no use of him.",
            who: "The Nurse",
            act: "Act 3, Scene 5",
            points: [
              "The Nurse's declaration that Romeo is as good as dead because he is banished reveals a **utilitarian** view of relationships — if a husband cannot be physically present, he has no value.",
              "The phrase **'no use of him'** reduces Romeo from a beloved husband to a defunct commodity — Shakespeare exposes the Nurse's inability to understand love that persists beyond physical proximity and practical benefit.",
            ],
          },
          {
            quote:
              "Faith, here it is. Romeo is banished; and all the world to nothing, that he dares ne'er come back to challenge you.",
            who: "The Nurse",
            act: "Act 3, Scene 5",
            points: [
              "The Nurse presents Romeo's banishment as a **settled fact** that closes the chapter on Juliet's first marriage — her certainty that Romeo will never return shows a lack of understanding of both Romeo's passion and Juliet's devotion.",
              "Shakespeare uses the Nurse's defection to complete Juliet's **isolation**: having lost Romeo to banishment and now losing the Nurse to pragmatism, Juliet is left with no allies except the Friar — the very figure whose reckless scheme will destroy her.",
            ],
          },
        ],
      },
      // ── comic relief ──
      {
        trait: "comic relief",
        colour: "red",
        quotes: [
          {
            quote:
              "I am aweary, give me leave awhile. Fie, how my bones ache! What a jaunce have I!",
            who: "The Nurse",
            act: "Act 2, Scene 5",
            points: [
              "The Nurse's breathless complaints about her aching bones after running to find Romeo create **comic frustration** — Juliet (and the audience) are desperate for news, but the Nurse delays with physical grievances.",
              "Shakespeare uses the Nurse's body as a source of **physical comedy** that contrasts with the lovers' ethereal language — her world is one of bones, backs, and breathlessness, grounding the love story in corporeal reality.",
            ],
          },
          {
            quote:
              "Lord, Lord, she will be a joyful woman.",
            who: "The Nurse",
            act: "Act 3, Scene 5",
            points: [
              "The Nurse's cheerful announcement of Lord Capulet's arrangement for Juliet to marry Paris is delivered with comic obliviousness to Juliet's horror — the dramatic irony generates both humour and pathos.",
              "Shakespeare uses the Nurse's **tonal misjudgement** — celebrating what Juliet experiences as a catastrophe — to reveal the growing gap between them; the Nurse's comic register is increasingly at odds with the play's darkening trajectory.",
            ],
          },
          {
            quote:
              "O Lord, I could have stayed here all the night to hear good counsel. O, what learning is!",
            who: "The Nurse",
            act: "Act 3, Scene 3",
            points: [
              "The Nurse's awe at Friar Lawrence's learning — expressed with exaggerated, almost child-like admiration — provides **comic bathos** in a scene of intense emotional distress (Romeo's despair after banishment).",
              "Her instinct to praise 'learning' at a moment of crisis reveals the Nurse's characteristic pattern of responding to surfaces rather than depths — she is impressed by the form of wisdom without grasping its content.",
              "**AO2 form**: Shakespeare places the Nurse's comic interjections within the darkest scenes to create **tonal relief**, but also to emphasise the gap between the gravity of the situation and the understanding of those involved.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "The Nurse's long-winded first speech about Juliet's childhood",
        act: "Act 1, Scene 3",
        points: [
          "The Nurse's entrance into the conversation dominates the scene — her rambling anecdote about Juliet's weaning and her husband's bawdy joke establishes her as a character whose verbal energy is **impossible to control**.",
          "Lady Capulet's repeated attempts to stop the Nurse ('Enough of this; I pray thee, hold thy peace!') create a comic power dynamic where the servant overwhelms the mistress — Shakespeare uses staging to show that social hierarchy cannot contain the Nurse's personality.",
          "**AO3 context**: the Nurse's detailed knowledge of Juliet's childhood (weaning date, first steps, first words) contrasts with Lady Capulet's distance, reflecting the Elizabethan practice of **wet-nursing** in which lower-class women formed the primary emotional bond with aristocratic children.",
        ],
      },
      {
        type: "entrance",
        moment: "The Nurse arrives with news of Tybalt's death",
        act: "Act 3, Scene 2",
        stageDirection: "Enter Nurse, with cords",
        points: [
          "The Nurse enters carrying the rope ladder (intended for Romeo's wedding night) — this **prop** visually represents the marriage now endangered by Tybalt's death, making the Nurse a bearer of both practical tools and devastating news.",
          "Her incoherent grief ('He's dead, he's dead, he's dead!') initially leads Juliet to believe Romeo is dead — Shakespeare uses the Nurse's **verbal confusion** as a structural device to create temporary misunderstanding that amplifies the audience's emotional experience.",
        ],
      },
      {
        type: "absence",
        moment: "The Nurse's absence from the final scenes",
        act: "Act 5",
        points: [
          "The Nurse is entirely **absent** from Act 5 — she does not appear at the tomb, does not mourn Juliet's real death, and is not present for the reconciliation of the families.",
          "Her absence from the ending mirrors her emotional absence after Act 3, Scene 5 — once she advised Juliet to marry Paris, she effectively exited Juliet's inner world. Shakespeare makes her physical disappearance from the play a structural echo of her **emotional betrayal**.",
          "**AO2 structure**: by removing the Nurse from the catastrophe, Shakespeare suggests that her pragmatic worldview cannot accommodate tragedy — she belongs to the **comic mode** of the play's first half and has no place in its devastating conclusion.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  7. LORD CAPULET
  // ══════════════════════════════════════════════════════════
  {
    name: "Lord Capulet",
    textSlug: "romeo-juliet",
    traits: [
      // ── patriarchal ──
      {
        trait: "patriarchal",
        colour: "teal",
        quotes: [
          {
            quote:
              "My child is yet a stranger in the world; she hath not seen the change of fourteen years.",
            who: "Lord Capulet",
            act: "Act 1, Scene 2",
            points: [
              "Capulet's initial reluctance to marry Juliet off appears **protective** — the metaphor of a 'stranger in the world' suggests he values her youth and innocence.",
              "However, the possessive **'my child'** frames Juliet as property to be disposed of at the father's discretion — his 'protection' is ultimately an expression of ownership, not respect for her autonomy.",
              "**AO3 context**: in Elizabethan law, daughters were legally their father's property until transferred to a husband through marriage — Capulet's language reflects a system where paternal love and paternal control were inseparable.",
            ],
          },
          {
            quote:
              "An you be mine, I'll give you to my friend; an you be not, hang, beg, starve, die in the streets.",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The **conditional** 'an you be mine' reduces the father-daughter relationship to a question of possession — Juliet's value is entirely contingent on her obedience; disobedience makes her worthless.",
              "The brutal **asyndetic list** 'hang, beg, starve, die' accelerates through four fates without pause, conveying Capulet's rage as a torrent that allows no space for Juliet's response or agency.",
              "The verb **'give'** explicitly treats Juliet as a commodity to be transferred between men — Shakespeare exposes the patriarchal marriage market in its most undisguised form.",
            ],
          },
          {
            quote:
              "God's bread! It makes me mad. Day, night, hour, tide, time, work, play, alone, in company, still my care hath been to match her.",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The **extended enumeration** ('day, night, hour, tide, time') creates a rhythm of obsessive control — Capulet presents his matchmaking as ceaseless labour, reframing Juliet's resistance as ingratitude for his efforts.",
              "The oath **'God's bread'** (the Eucharist) is a blasphemous exclamation that reveals the depth of Capulet's fury — Shakespeare shows patriarchal authority as a force that, when challenged, abandons all decorum.",
            ],
          },
        ],
      },
      // ── volatile ──
      {
        trait: "volatile",
        colour: "purple",
        quotes: [
          {
            quote:
              "Hang thee, young baggage! Disobedient wretch! I tell thee what: get thee to church o' Thursday, or never after look me in the face.",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The **imperatives** ('hang thee', 'get thee') and insults ('baggage', 'wretch') reveal a man whose authority operates through verbal violence — Capulet's language is a form of assault that prefigures physical threat.",
              "The **ultimatum** ('or never after look me in the face') offers Juliet only two options: total submission or total exile — Shakespeare dramatises patriarchal power as an all-or-nothing system that cannot accommodate negotiation.",
              "**AO3 context**: while Elizabethan fathers had legal authority to determine their children's marriages, the violence of Capulet's outburst would have disturbed even a contemporary audience — Shakespeare pushes patriarchal authority to its most extreme expression to expose its inherent cruelty.",
            ],
          },
          {
            quote:
              "How, how, how, how — chopped logic! What is this?",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The **repetition** of 'how' four times is a sputtering, incoherent eruption of rage — Shakespeare renders Capulet almost inarticulate with fury, showing that his authority depends on unquestioning obedience and collapses when challenged.",
              "The accusation of **'chopped logic'** (meaning specious reasoning) dismisses Juliet's arguments as illegitimate wordplay — Capulet cannot conceive that his daughter might have a rational basis for refusal, so he frames her objections as a verbal trick.",
            ],
          },
          {
            quote:
              "Wife, we scarce thought us blest that God had lent us but this only child; but now I see this one is one too much.",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The shift from 'blest' to 'one too much' in a single sentence encapsulates Capulet's volatility — parental love and parental rejection coexist within the same breath, separated only by Juliet's disobedience.",
              "The verb **'lent'** (God 'lent' them Juliet) frames the child as God's property temporarily in the father's care — yet Capulet's rage at Juliet's autonomy contradicts this theological humility, revealing his true sense of absolute ownership.",
            ],
          },
        ],
      },
      // ── controlling ──
      {
        trait: "controlling",
        colour: "amber",
        quotes: [
          {
            quote:
              "Sir Paris, I will make a desperate tender of my child's love. I think she will be ruled in all respects by me.",
            who: "Lord Capulet",
            act: "Act 3, Scene 4",
            points: [
              "Capulet offers Juliet to Paris without her knowledge or consent — the phrase **'desperate tender'** frames the arrangement as a business transaction conducted under pressure, with Juliet as the commodity being traded.",
              "The confidence that she 'will be ruled in all respects' reveals total **assumption of control** — Capulet does not even consider the possibility that Juliet might refuse, because his worldview admits no such option.",
              "**AO2 structure**: this scene occurs while Juliet is in bed with Romeo on their wedding night — the dramatic irony is devastating: Capulet plans Juliet's second marriage while she consummates her first.",
            ],
          },
          {
            quote:
              "But fettle your fine joints 'gainst Thursday next, to go with Paris to Saint Peter's Church, or I will drag thee on a hurdle thither.",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The threat to **'drag thee on a hurdle'** — the frame on which traitors were dragged to execution — equates Juliet's disobedience with treason against the state, revealing how Capulet sees the family as a **political hierarchy** with himself as sovereign.",
              "The instruction to 'fettle your fine joints' is grotesquely physical, treating Juliet's body as a mechanism to be prepared for transfer — Shakespeare makes the violence of patriarchal control explicit through the language of bodily compulsion.",
            ],
          },
          {
            quote:
              "Thursday is near; lay hand on heart, advise. An you be mine, I'll give you to my friend.",
            who: "Lord Capulet",
            act: "Act 3, Scene 5",
            points: [
              "The instruction to 'lay hand on heart, advise' is a **mock invitation** to reflection — Capulet offers the appearance of choice while making clear that only one answer is acceptable.",
              "The parallel between 'be mine' and 'give you' makes the transactional nature of patriarchal marriage explicit: Juliet's selfhood exists only as something to be **owned** and **transferred** between men.",
            ],
          },
        ],
      },
      // ── performative ──
      {
        trait: "performative",
        colour: "red",
        quotes: [
          {
            quote:
              "Death lies on her like an untimely frost upon the sweetest flower of all the field.",
            who: "Lord Capulet",
            act: "Act 4, Scene 5",
            points: [
              "Capulet's grief at Juliet's 'death' is expressed in elaborate **pastoral simile** — the image of frost on a flower is poetically polished but emotionally generic, suggesting a performance of grief rather than raw feeling.",
              "The metaphor echoes Paris's earlier floral comparisons to Juliet — Shakespeare aligns Capulet's language with the **suitor's** rhetoric, implying that his relationship to his daughter is as much about social display as genuine love.",
              "**AO2 form**: the stylised quality of Capulet's mourning contrasts with Juliet's unadorned cry of 'O happy dagger!' at her real death — Shakespeare distinguishes between **performed** and **genuine** emotion through differences in rhetorical register.",
            ],
          },
          {
            quote:
              "Welcome, gentlemen! Ladies that have their toes unplagued with corns will walk a bout with you.",
            who: "Lord Capulet",
            act: "Act 1, Scene 5",
            points: [
              "Capulet plays the role of **jovial host** at the feast with practised ease — his bawdy joke about corns and his nostalgic reminiscences about his own dancing days present him as warm, generous, and welcoming.",
              "This public persona contrasts violently with the private tyrant of Act 3, Scene 5 — Shakespeare uses the feast scene to establish that Capulet's geniality is a **social performance** that masks the authoritarian reality beneath.",
            ],
          },
          {
            quote:
              "O brother Montague, give me thy hand. This is my daughter's jointure, for no more can I demand.",
            who: "Lord Capulet",
            act: "Act 5, Scene 3",
            points: [
              "Capulet's reconciliation with Montague and his offer to raise a golden statue of Romeo is a grand public gesture — yet the language of **'jointure'** (a marriage settlement) frames even grief as a financial transaction.",
              "The final reconciliation is performed before the Prince and the assembled citizens — Shakespeare suggests that Capulet's peacemaking, like his hosting and his mourning, is partly an act of **public theatre** designed to maintain his social standing.",
              "**AO3 context**: the golden statues promised by both fathers are displays of **competitive wealth** — even in grief, the patriarchs channel their emotions through material expenditure, raising the question of whether the feud's end is genuine transformation or merely another performance.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Lord Capulet enters the brawl in his nightgown",
        act: "Act 1, Scene 1",
        stageDirection: "Enter old Capulet in his gown, and his Wife",
        points: [
          "Capulet enters demanding his sword while still in his nightgown — the **comic visual** of an old man in bedclothes calling for a weapon immediately characterises him as someone whose aggression outstrips his physical capability.",
          "Lady Capulet's retort ('A crutch, a crutch! Why call you for a sword?') publicly undermines his martial posturing — Shakespeare introduces the gap between Capulet's **self-image** as a warrior and the reality of his ageing body from the very first scene.",
        ],
      },
      {
        type: "entrance",
        moment: "Lord Capulet's rage at Juliet's refusal to marry Paris",
        act: "Act 3, Scene 5",
        stageDirection: "Enter Capulet and Nurse",
        points: [
          "Capulet enters expecting gratitude for the Paris match and encounters refusal — the **gap between expectation and reality** triggers the most violent speech in the play, revealing the fragility of patriarchal authority when it meets resistance.",
          "Shakespeare stages the confrontation with Lady Capulet, the Nurse, and Juliet all present — Capulet's rage is a **public performance** of authority, directed as much at maintaining control over the household as at punishing Juliet specifically.",
          "The scene's staging traps Juliet physically between hostile forces on every side — her father's rage, her mother's coldness, and (soon) the Nurse's pragmatic betrayal leave her with no spatial or emotional escape route.",
        ],
      },
      {
        type: "absence",
        moment: "Lord Capulet is absent from Juliet's final moments",
        act: "Act 5, Scene 3",
        points: [
          "Capulet does not witness Juliet's real death — he arrives only to discover her body, having been absent at every critical moment when his intervention might have changed the outcome.",
          "His absence from the tomb mirrors his absence from Juliet's emotional life: throughout the play, he has been present only to **command, threaten, and perform**, never to listen or understand — Shakespeare makes his physical absence a metaphor for his failure as a father.",
        ],
      },
    ],
  },
];
