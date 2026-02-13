// ─── Trait-Based Mind Map Data — Macbeth ───

import type { CharacterMindMap } from "./mindmaps-inspector-calls";

export const MACBETH_MINDMAPS: CharacterMindMap[] = [
  // ══════════════════════════════════════════════════════════
  //  1. MACBETH
  // ══════════════════════════════════════════════════════════
  {
    name: "Macbeth",
    textSlug: "macbeth",
    traits: [
      // ── ambitious ──
      {
        trait: "ambitious",
        colour: "teal",
        quotes: [
          {
            quote:
              "Stars, hide your fires; let not light see my black and deep desires",
            who: "Macbeth",
            act: "Act 1, Scene 4",
            points: [
              "The **imperative** addressed to the stars personifies the cosmos as a potential witness — Macbeth instinctively understands that his ambition must be concealed, linking to the theme of **appearance vs reality**.",
              "The adjectives **'black and deep'** form a descending metaphor, suggesting desires that are both morally corrupt ('black') and psychologically buried ('deep') — Shakespeare presents ambition as something Macbeth himself fears.",
              "The **antithesis** between 'fires' (light/goodness) and 'black' (darkness/evil) establishes the play's central **light/dark motif**, foreshadowing how ambition will drag Macbeth from honour into moral darkness.",
            ],
          },
          {
            quote:
              "I have no spur to prick the sides of my intent, but only vaulting ambition, which o'erleaps itself and falls on th'other",
            who: "Macbeth",
            act: "Act 1, Scene 7",
            points: [
              "The **equestrian metaphor** of 'vaulting ambition' imagines a rider overreaching and tumbling — Shakespeare foreshadows Macbeth's tragic fall through the very language he uses to diagnose himself.",
              "The verb **'o'erleaps'** captures the excess inherent in unchecked ambition — it does not merely reach but overshoots, suggesting self-destruction is built into the drive for power.",
              "Critically, Macbeth acknowledges he has **no moral justification** ('no spur') for killing Duncan, only naked ambition — this self-awareness makes his subsequent choice a deliberate moral transgression, intensifying his guilt.",
            ],
          },
          {
            quote:
              "If chance will have me king, why, chance may crown me without my stir",
            who: "Macbeth",
            act: "Act 1, Scene 3",
            points: [
              "The **conditional** 'if chance will have me' momentarily entertains a passive route to power — Macbeth briefly considers letting fate take its course, revealing the tension between **fate and free will**.",
              "The word **'stir'** minimises the enormity of murder to a mere movement — Shakespeare shows Macbeth already engaging in the euphemistic language that will later allow him to act.",
            ],
          },
        ],
      },
      // ── guilt-ridden ──
      {
        trait: "guilt-ridden",
        colour: "purple",
        quotes: [
          {
            quote:
              "Will all great Neptune's ocean wash this blood clean from my hand?",
            who: "Macbeth",
            act: "Act 2, Scene 2",
            points: [
              "The **rhetorical question** implies its own negative answer — no amount of water can cleanse moral guilt. Shakespeare uses the **hyperbole** of an entire ocean to convey the infinite weight of regicide.",
              "The **classical allusion** to Neptune elevates the imagery to cosmic proportions — Macbeth's guilt is not a private feeling but a stain upon the natural order itself, linking to the **Great Chain of Being**.",
              "This line directly contrasts with Lady Macbeth's dismissive 'a little water clears us of this deed' — Shakespeare uses the couple's opposing responses to blood imagery to foreshadow the **reversal** of their psychological states.",
            ],
          },
          {
            quote:
              "Is this a dagger which I see before me, the handle toward my hand?",
            who: "Macbeth",
            act: "Act 2, Scene 1",
            points: [
              "The **interrogative** opening reveals Macbeth's fractured psychological state — he cannot distinguish hallucination from reality, suggesting his conscience is already rebelling against his intent.",
              "The detail that the handle faces **'toward my hand'** implies the dagger invites him to act — Shakespeare externalises Macbeth's internal conflict as a **supernatural vision**, blurring the boundary between guilt and temptation.",
              "This soliloquy functions as a pivotal **dramatic device**: the audience watches Macbeth wrestle with his conscience in real time, creating intense dramatic tension before the offstage murder.",
            ],
          },
          {
            quote:
              "Methought I heard a voice cry 'Sleep no more! Macbeth does murder sleep'",
            who: "Macbeth",
            act: "Act 2, Scene 2",
            points: [
              "The **personification** of sleep as something that can be 'murdered' extends Macbeth's violence beyond Duncan to the abstract concept of innocence and rest — he has killed not just a king but his own capacity for peace.",
              "The disembodied **'voice'** may be supernatural judgement or psychological projection — Shakespeare deliberately leaves the source ambiguous, reflecting Macbeth's inability to separate external reality from internal torment.",
            ],
          },
        ],
      },
      // ── violent ──
      {
        trait: "violent",
        colour: "amber",
        quotes: [
          {
            quote:
              "I am in blood stepp'd in so far that, should I wade no more, returning were as tedious as go o'er",
            who: "Macbeth",
            act: "Act 3, Scene 4",
            points: [
              "The **extended metaphor** of wading through a river of blood presents violence as a physical journey from which there is no return — Macbeth recognises he has passed a moral point of no return.",
              "The word **'tedious'** is chillingly understated — Shakespeare shows that Macbeth has become so desensitised to violence that murder is now merely inconvenient, not horrifying. This marks a key stage in his **moral corruption**.",
              "The image links to the play's pervasive **blood motif**: what began as guilt on his hands (Act 2) has become an entire landscape of gore, tracking his descent into tyranny.",
            ],
          },
          {
            quote:
              "From this moment the very firstlings of my heart shall be the firstlings of my hand",
            who: "Macbeth",
            act: "Act 4, Scene 1",
            points: [
              "The **parallelism** between 'heart' and 'hand' collapses the gap between impulse and action — Macbeth vows to act on violent thoughts immediately, abandoning all moral deliberation.",
              "This marks a critical shift from the hesitant figure of Act 1 who needed Lady Macbeth's persuasion — Shakespeare shows that tyranny is a **progressive condition** in which violence becomes reflexive.",
              "The decision to slaughter Macduff's family follows immediately, demonstrating that Macbeth's violence is now **indiscriminate** — it no longer serves ambition but has become an end in itself.",
            ],
          },
          {
            quote:
              "The castle of Macduff I will surprise, seize upon Fife, give to th'edge o'th'sword his wife, his babes",
            who: "Macbeth",
            act: "Act 4, Scene 1",
            points: [
              "The **list structure** ('wife, his babes') reduces human lives to targets — Shakespeare shows Macbeth's language has been stripped of the moral complexity that characterised his earlier soliloquies.",
              "The verb **'surprise'** carries connotations of ambush and treachery — this is not battlefield courage but the cowardly violence of a tyrant who strikes at the defenceless.",
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
              "Life's but a walking shadow, a poor player that struts and frets his hour upon the stage, and then is heard no more",
            who: "Macbeth",
            act: "Act 5, Scene 5",
            points: [
              "The **theatrical metaphor** ('poor player', 'stage') is deeply self-referential — Shakespeare has his tragic hero describe life as a performance, collapsing the boundary between the character and the medium. This is the ultimate expression of **nihilistic fatalism**.",
              "The phrase **'walking shadow'** reduces existence to an insubstantial echo of something real — Macbeth's fatalism strips all meaning from human action, including his own crimes.",
              "Delivered upon hearing of Lady Macbeth's death, this soliloquy reveals that Macbeth has moved beyond guilt into **total emotional exhaustion** — he cannot even grieve, suggesting tyranny has hollowed him out entirely.",
            ],
          },
          {
            quote:
              "It is a tale told by an idiot, full of sound and fury, signifying nothing",
            who: "Macbeth",
            act: "Act 5, Scene 5",
            points: [
              "The **metaphor** of life as a meaningless story told by a fool represents the endpoint of Macbeth's spiritual journey — from a man who believed in prophecy and destiny to one who believes in nothing at all.",
              "The phrase **'sound and fury'** acknowledges the violence and passion of his reign while simultaneously declaring it pointless — Shakespeare presents fatalism as the psychological consequence of unchecked tyranny.",
              "The word **'nothing'** echoes throughout Shakespeare's tragedies as a marker of existential crisis — here it signals Macbeth's complete disconnection from the moral universe he once inhabited.",
            ],
          },
          {
            quote:
              "I 'gin to be aweary of the sun, and wish th'estate o'th'world were now undone",
            who: "Macbeth",
            act: "Act 5, Scene 5",
            points: [
              "The **weariness** with the sun — the source of life and the symbol of legitimate kingship — reveals that Macbeth has grown tired of existence itself, not merely of fighting.",
              "The desire for the world to be **'undone'** extends his fatalism from personal nihilism to cosmic destruction — Macbeth would rather the universe collapsed than face the consequences of his choices.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Macbeth's entrance as a returning war hero",
        act: "Act 1, Scene 2",
        stageDirection:
          "Enter Macbeth and Banquo",
        points: [
          "Macbeth is introduced **before he appears** through the Captain's account of his battlefield valour — Shakespeare establishes him as a heroic figure so that his subsequent fall carries maximum tragic weight.",
          "The description of Macbeth carving his way through enemies until he 'unseam'd' Macdonwald **'from the nave to th'chops'** presents extreme violence as honourable service — Shakespeare deliberately blurs the line between sanctioned and unsanctioned killing from the very start.",
          "Duncan's praise ('O valiant cousin! Worthy gentleman!') creates **dramatic irony** — the king rewards the man who will murder him, establishing the theme of **appearance vs reality** and the fragility of trust.",
        ],
      },
      {
        type: "entrance",
        moment: "Macbeth's soliloquy before Duncan's murder",
        act: "Act 2, Scene 1",
        stageDirection:
          "Enter Macbeth",
        points: [
          "Macbeth enters alone to deliver the **'Is this a dagger'** soliloquy — Shakespeare uses the solitary entrance to give the audience unmediated access to his psychological torment, creating intense dramatic intimacy.",
          "The stage is dark, typically lit only by a torch — the **visual darkness** mirrors Macbeth's moral state and links to the play's sustained **light/dark imagery** pattern.",
          "This entrance marks the transition from deliberation to action — when Macbeth exits this scene, he will have committed regicide. Shakespeare positions the soliloquy as the last moment of moral hesitation before the point of no return.",
        ],
      },
      {
        type: "exit",
        moment: "Macbeth's death at Macduff's hands",
        act: "Act 5, Scene 8",
        stageDirection:
          "Enter fighting, and Macbeth slain",
        points: [
          "Macbeth dies **in combat**, not by suicide or capture — Shakespeare grants him a warrior's death that partially restores the martial heroism of Act 1, creating a **cyclical structure** to his tragic arc.",
          "The stage direction is blunt and minimal ('Macbeth slain'), denying the tyrant any final eloquence — after the grandeur of 'Life's but a walking shadow', Shakespeare lets the violence speak for itself.",
          "Macduff re-enters carrying Macbeth's severed head, mirroring how Macbeth himself was described unseaming Macdonwald — the **parallel** reinforces the theme of cyclical violence and the restoration of legitimate order through bloodshed.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  2. LADY MACBETH
  // ══════════════════════════════════════════════════════════
  {
    name: "Lady Macbeth",
    textSlug: "macbeth",
    traits: [
      // ── manipulative ──
      {
        trait: "manipulative",
        colour: "teal",
        quotes: [
          {
            quote:
              "Look like th'innocent flower, but be the serpent under't",
            who: "Lady Macbeth",
            act: "Act 1, Scene 5",
            points: [
              "The **imperative** verb 'look' and 'be' instruct Macbeth in the art of deception — Lady Macbeth functions as a director, staging a performance of innocence to mask murderous intent.",
              "The **biblical allusion** to the serpent in the Garden of Eden casts Lady Macbeth in the role of tempter and associates Duncan's murder with **original sin** — Shakespeare invokes the fall of man to elevate the crime's significance.",
              "The antithesis between **'flower'** and **'serpent'** encapsulates the play's central theme of **appearance vs reality** — Lady Macbeth understands that power requires the ability to perform virtue while practising evil.",
            ],
          },
          {
            quote:
              "Was the hope drunk wherein you dress'd yourself? Hath it slept since?",
            who: "Lady Macbeth",
            act: "Act 1, Scene 7",
            points: [
              "The **personification** of 'hope' as a drunkard who has sobered up mocks Macbeth's hesitation by comparing his ambition to a hangover — Lady Macbeth uses contempt as a weapon to shame him into action.",
              "The **rhetorical questions** deny Macbeth the space to answer — her manipulation operates through relentless interrogation that frames his moral doubt as personal weakness.",
              "Shakespeare presents Lady Macbeth's manipulation as psychologically sophisticated: she attacks not Macbeth's logic but his **self-image**, understanding that his identity as a warrior is the lever that will move him.",
            ],
          },
          {
            quote:
              "When you durst do it, then you were a man; and to be more than what you were, you would be so much more the man",
            who: "Lady Macbeth",
            act: "Act 1, Scene 7",
            points: [
              "Lady Macbeth exploits **toxic masculinity** by equating manhood with the willingness to kill — Shakespeare exposes how gender expectations can be weaponised to override moral conscience.",
              "The **comparative structure** ('more than what you were... so much more the man') creates an escalating challenge that ties Macbeth's sense of masculine identity directly to the act of murder.",
              "This line links to the broader theme of **gender and power** — Lady Macbeth manipulates the patriarchal value system she herself is constrained by, using its own logic against her husband.",
            ],
          },
        ],
      },
      // ── ambitious ──
      {
        trait: "ambitious",
        colour: "purple",
        quotes: [
          {
            quote:
              "Unsex me here, and fill me from the crown to the toe top-full of direst cruelty",
            who: "Lady Macbeth",
            act: "Act 1, Scene 5",
            points: [
              "The **imperative** 'unsex me' is a direct appeal to supernatural forces to strip away femininity — Shakespeare presents Lady Macbeth's ambition as so extreme it requires the abandonment of her own gendered identity.",
              "The phrase **'crown to the toe'** creates a head-to-toe image of transformation — Lady Macbeth demands that cruelty replace every aspect of her nature, suggesting she views feminine compassion as an obstacle to power.",
              "Links to **AO3 context**: a Jacobean audience would have found a woman rejecting her 'natural' role deeply disturbing — Shakespeare uses Lady Macbeth to interrogate the relationship between **gender, power, and ambition** in a patriarchal society.",
            ],
          },
          {
            quote:
              "Come, you spirits that tend on mortal thoughts, unsex me here",
            who: "Lady Macbeth",
            act: "Act 1, Scene 5",
            points: [
              "The invocation of **'spirits'** deliberately echoes the Witches' supernatural power — Shakespeare parallels Lady Macbeth with the Weird Sisters, both operating outside the natural order to influence Macbeth's fate.",
              "The phrase **'mortal thoughts'** carries a double meaning: both 'deadly thoughts' and 'human thoughts' — Lady Macbeth asks to transcend the moral limitations of humanity itself.",
            ],
          },
          {
            quote:
              "Come to my woman's breasts, and take my milk for gall",
            who: "Lady Macbeth",
            act: "Act 1, Scene 5",
            points: [
              "The **grotesque inversion** of nurturing breast milk into poisonous gall transforms the symbol of maternal care into a vessel for destruction — Shakespeare presents Lady Macbeth's ambition as a perversion of natural femininity.",
              "The specificity of **'woman's breasts'** makes the rejection of womanhood viscerally physical — Lady Macbeth does not simply want power; she wants to be fundamentally remade at the level of the body.",
              "This imagery foreshadows her later psychological collapse — the femininity and conscience she tries to suppress in Act 1 return with devastating force in the sleepwalking scene, suggesting that nature cannot be permanently overridden.",
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
              "Leave all the rest to me",
            who: "Lady Macbeth",
            act: "Act 1, Scene 5",
            points: [
              "The **imperative** 'leave' combined with the possessive 'to me' establishes Lady Macbeth as the architect of Duncan's murder — she assumes total control of the conspiracy, relegating Macbeth to the role of executioner.",
              "The brevity and confidence of the line — just six words — convey absolute assurance. Shakespeare shows that Lady Macbeth's power lies in her **decisiveness**, which contrasts starkly with Macbeth's tortured deliberation.",
              "This line is the high point of Lady Macbeth's agency — ironically, her control diminishes from this moment onward as Macbeth increasingly acts alone, culminating in her complete loss of control in the sleepwalking scene.",
            ],
          },
          {
            quote:
              "A little water clears us of this deed",
            who: "Lady Macbeth",
            act: "Act 2, Scene 2",
            points: [
              "The **dismissive minimiser** 'a little' reduces regicide to a matter of basic hygiene — Lady Macbeth's controlling nature manifests as an attempt to manage even the psychological aftermath of murder.",
              "This line directly contrasts with Macbeth's 'Will all great Neptune's ocean wash this blood clean from my hand?' — the **juxtaposition** reveals their fundamentally different responses to guilt and foreshadows their eventual reversal.",
              "The cruel **dramatic irony** becomes apparent in Act 5 when Lady Macbeth obsessively washes her hands in the sleepwalking scene — the very metaphor she dismissed as trivial becomes the vehicle of her psychological destruction.",
            ],
          },
          {
            quote:
              "Are you a man?",
            who: "Lady Macbeth",
            act: "Act 3, Scene 4",
            points: [
              "The **interrogative** challenges Macbeth's masculinity during the banquet scene — Lady Macbeth attempts to control his public breakdown by returning to the same manipulation she used before Duncan's murder.",
              "Shakespeare shows this tactic **failing** for the first time — Macbeth is now haunted by visions Lady Macbeth cannot see or manage, marking the moment her control begins to disintegrate.",
            ],
          },
        ],
      },
      // ── fragile ──
      {
        trait: "fragile",
        colour: "red",
        quotes: [
          {
            quote:
              "Out, damned spot! Out, I say!",
            who: "Lady Macbeth",
            act: "Act 5, Scene 1",
            points: [
              "The **exclamatory repetition** of 'out' reveals a mind trapped in compulsive ritual — Lady Macbeth, who once dismissed guilt with 'a little water', now cannot escape the imaginary blood on her hands.",
              "The adjective **'damned'** carries both its colloquial meaning (frustration) and its theological meaning (condemned to hell) — Shakespeare layers her psychological collapse with the weight of divine judgement.",
              "The sleepwalking scene inverts every quality Lady Macbeth displayed in Act 1: control becomes compulsion, decisiveness becomes repetition, and commanding speech becomes fragmented **prose** — Shakespeare uses the shift from verse to prose to signal her mental disintegration.",
            ],
          },
          {
            quote:
              "Hell is murky",
            who: "Lady Macbeth",
            act: "Act 5, Scene 1",
            points: [
              "This brief, haunting **declarative** suggests Lady Macbeth is experiencing a vision of damnation — the woman who invoked dark spirits in Act 1 now finds herself trapped in the darkness she summoned.",
              "The simplicity of the language contrasts with her earlier elaborate rhetoric — Shakespeare strips Lady Macbeth's speech to its barest elements, reflecting a mind reduced to fundamental terrors.",
            ],
          },
          {
            quote:
              "What, will these hands ne'er be clean?",
            who: "Lady Macbeth",
            act: "Act 5, Scene 1",
            points: [
              "The **rhetorical question** echoes Macbeth's 'Will all great Neptune's ocean wash this blood clean from my hand?' — Shakespeare creates a devastating **structural parallel** in which Lady Macbeth arrives at the same despairing conclusion she once mocked.",
              "The adverb **'ne'er'** (never) signals hopelessness — Lady Macbeth now understands that guilt is permanent, reversing her earlier certainty that 'a little water' would suffice.",
              "The fragility of this moment links to the theme of **conscience** — Shakespeare suggests that the human capacity for guilt cannot be permanently suppressed, no matter how powerful the will that attempts it.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Lady Macbeth's 'unsex me' invocation",
        act: "Act 1, Scene 5",
        stageDirection:
          "Enter Lady Macbeth, reading a letter",
        points: [
          "Lady Macbeth's first appearance shows her **reading Macbeth's letter** — Shakespeare introduces her through her husband's words before giving her her own, establishing the partnership that will drive the murder plot.",
          "Her immediate transition from reading the letter to invoking dark spirits demonstrates a **terrifying decisiveness** — while Macbeth agonises across multiple scenes, Lady Macbeth resolves to act within moments of learning the prophecy.",
          "The 'unsex me' speech that follows her entrance is one of the most shocking soliloquies in Shakespeare — her first extended address to the audience is a prayer for the removal of her humanity, establishing her as a figure who transgresses **natural and gender boundaries** simultaneously.",
        ],
      },
      {
        type: "entrance",
        moment: "The sleepwalking scene",
        act: "Act 5, Scene 1",
        stageDirection:
          "Enter Lady Macbeth, with a taper",
        points: [
          "Lady Macbeth enters carrying a candle — the **taper** she insists on having by her symbolises her terror of the darkness she once invoked ('Come, thick night'), revealing the complete collapse of her earlier bravado.",
          "She enters in a state of **somnambulism**, neither fully asleep nor awake — Shakespeare uses her liminal state to dramatise the boundary between conscious control and unconscious guilt, suggesting that suppressed conscience will always resurface.",
          "The Doctor and Gentlewoman who observe her function as an **internal audience**, mirroring the real audience's horror — Shakespeare structures the scene so that Lady Macbeth is simultaneously a patient, a performer, and a warning about the psychological cost of moral transgression.",
        ],
      },
      {
        type: "absence",
        moment: "Lady Macbeth's death reported offstage",
        act: "Act 5, Scene 5",
        points: [
          "Lady Macbeth dies **offstage**, her death communicated only through a cry and Seyton's blunt report ('The Queen, my lord, is dead') — Shakespeare denies her the dignity of an on-stage death, reflecting how she has been progressively marginalised from the play's action since Act 3.",
          "Her absence at the moment of death mirrors the play's broader pattern of **significant offstage events** (Duncan's murder, Banquo's killing) — the most devastating moments in Macbeth happen where the audience cannot see them, forcing imaginative engagement.",
          "Macbeth's response — 'She should have died hereafter' — is ambiguous: it could mean 'she would have died eventually' or 'she should have died at a more convenient time'. Either reading reveals a man so consumed by tyranny that he cannot properly **grieve**, linking her death to the theme of moral corruption's cost.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  3. THE WITCHES
  // ══════════════════════════════════════════════════════════
  {
    name: "The Witches",
    textSlug: "macbeth",
    traits: [
      // ── supernatural ──
      {
        trait: "supernatural",
        colour: "teal",
        quotes: [
          {
            quote: "Fair is foul, and foul is fair, hover through the fog and filthy air",
            who: "The Witches",
            act: "Act 1, Scene 1",
            points: [
              "The **antithetical chiasmus** ('fair is foul, and foul is fair') collapses moral categories from the play's opening line — Shakespeare announces that in this world, good and evil are indistinguishable, establishing the theme of **appearance vs reality**.",
              "The **trochaic tetrameter** with its falling rhythm gives the chant an incantatory, spell-like quality that distinguishes the Witches' speech from the iambic pentameter of mortal characters — Shakespeare uses **metre as a dramatic device** to mark the supernatural.",
              "The alliterative **'fog and filthy'** creates a soundscape of corruption — Shakespeare makes the audience feel the Witches' world through auditory texture before any plot has been established.",
            ],
          },
          {
            quote:
              "All hail, Macbeth, that shalt be king hereafter!",
            who: "Third Witch",
            act: "Act 1, Scene 3",
            points: [
              "The **declarative prophecy** uses 'shalt be' rather than 'may be' — the Witches speak with the certainty of fate, raising the central question of whether Macbeth's actions are predetermined or freely chosen.",
              "The greeting **'All hail'** parodies the language of royal address, conferring a false legitimacy on a title Macbeth has not yet earned — Shakespeare shows how the supernatural can corrupt by offering what appears to be divine endorsement.",
              "Links to **AO3 context**: James I, who wrote 'Daemonologie', believed in witchcraft as a real threat to sovereign power — Shakespeare's audience would have viewed this prophecy as genuinely dangerous, not merely theatrical.",
            ],
          },
          {
            quote:
              "By the pricking of my thumbs, something wicked this way comes",
            who: "Second Witch",
            act: "Act 4, Scene 1",
            points: [
              "The **rhyming couplet** with its nursery-rhyme simplicity makes the sinister content more disturbing — Shakespeare exploits the contrast between innocent-sounding form and malevolent meaning.",
              "Critically, the Witches call **Macbeth** 'wicked' — the moral hierarchy has shifted so that even the agents of evil recognise Macbeth as corrupt. Shakespeare suggests that Macbeth has descended below the Witches themselves.",
            ],
          },
        ],
      },
      // ── ambiguous ──
      {
        trait: "ambiguous",
        colour: "purple",
        quotes: [
          {
            quote:
              "Lesser than Macbeth, and greater. Not so happy, yet much happier",
            who: "First Witch (to Banquo)",
            act: "Act 1, Scene 3",
            points: [
              "The **paradoxical structure** ('lesser... greater', 'not so happy... happier') is deliberately contradictory — Shakespeare gives the Witches language that resists interpretation, forcing characters and audience to impose their own meaning.",
              "The ambiguity functions as a **dramatic device**: the prophecy can be read positively or negatively depending on the listener's desires, demonstrating how equivocal language enables self-deception.",
              "This mirrors the broader strategy of the Witches: they never directly instruct Macbeth to kill — they present possibilities and let human ambition do the rest, raising questions about **moral responsibility**.",
            ],
          },
          {
            quote:
              "None of woman born shall harm Macbeth",
            who: "Second Apparition",
            act: "Act 4, Scene 1",
            points: [
              "The prophecy appears to guarantee invulnerability but contains a **hidden loophole** — Macduff, delivered by caesarean section, was technically not 'born' of woman. Shakespeare demonstrates how the Witches' language is designed to deceive through precision.",
              "The ambiguity tests whether Macbeth will interrogate the prophecy or accept it at face value — his eagerness to believe reveals that the Witches exploit **confirmation bias**, telling people what they want to hear.",
            ],
          },
          {
            quote:
              "Macbeth shall never vanquish'd be until Great Birnam Wood to high Dunsinane Hill shall come against him",
            who: "Third Apparition",
            act: "Act 4, Scene 1",
            points: [
              "The prophecy describes an apparent **impossibility** — a moving forest — which Macbeth interprets as a guarantee of safety. Shakespeare structures the equivocation so that its literal fulfilment (camouflaged soldiers) is simultaneously natural and seemingly supernatural.",
              "The Witches' ambiguity here serves the theme of **fate vs free will**: the prophecies come true, but only because human agents make them true — Malcolm orders the soldiers to cut branches, not because fate compels him.",
              "Shakespeare shows that the Witches' power lies not in controlling events but in controlling **interpretation** — they shape how Macbeth reads his own future, and his misreading destroys him.",
            ],
          },
        ],
      },
      // ── manipulative ──
      {
        trait: "manipulative",
        colour: "amber",
        quotes: [
          {
            quote:
              "Double, double toil and trouble; fire burn, and cauldron bubble",
            who: "The Witches",
            act: "Act 4, Scene 1",
            points: [
              "The **repetition** of 'double' and the incantatory rhythm create a spell-like quality — Shakespeare uses the chant to establish a ritualistic atmosphere that draws Macbeth deeper into dependence on the supernatural.",
              "The word **'double'** carries a thematic resonance with the play's pervasive **duplicity** — the Witches' world is one of doubling, equivocation, and things that are simultaneously two things at once.",
              "The **domestic imagery** of fire and cauldron grotesquely parodies cooking — Shakespeare transforms the hearth, a symbol of home and nurture, into a site of demonic manufacture, linking to the play's corruption of natural order.",
            ],
          },
          {
            quote:
              "Show his eyes, and grieve his heart; come like shadows, so depart",
            who: "First Witch",
            act: "Act 4, Scene 1",
            points: [
              "The stated intention to **'grieve his heart'** reveals that the apparitions are designed to torment, not inform — the Witches' manipulation is deliberate and sadistic.",
              "The simile **'like shadows'** connects the apparitions to Macbeth's later description of life as 'a walking shadow' — Shakespeare seeds the language of fatalism in the Witches' own speech, suggesting they are the architects of Macbeth's nihilistic despair.",
            ],
          },
          {
            quote:
              "A drum, a drum! Macbeth doth come",
            who: "Third Witch",
            act: "Act 1, Scene 3",
            points: [
              "The Witches announce Macbeth's arrival as though they have been **expecting** him — Shakespeare implies that the encounter is not accidental but orchestrated, deepening the question of whether Macbeth is agent or victim.",
              "The **childlike rhyme** ('drum... come') creates an unsettling juxtaposition between innocent form and predatory intent — the Witches treat Macbeth's approach as a game they have already won.",
              "Links to **AO3 context**: the debate over whether the Witches cause or merely predict Macbeth's fall was central to Jacobean discussions of predestination — Shakespeare deliberately refuses to resolve this theological question.",
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
              "All hail, Macbeth! Hail to thee, Thane of Glamis! / All hail, Macbeth! Hail to thee, Thane of Cawdor! / All hail, Macbeth, that shalt be king hereafter!",
            who: "The Three Witches",
            act: "Act 1, Scene 3",
            points: [
              "The **tripartite structure** (Glamis, Cawdor, King) creates an ascending hierarchy that maps Macbeth's trajectory — each prophecy fulfilled makes the next seem more inevitable, establishing a momentum that Macbeth mistakes for fate.",
              "The **anaphoric repetition** of 'All hail' mimics a coronation ceremony — Shakespeare uses liturgical form to give the prophecy a false authority that Macbeth treats as divine endorsement.",
              "The first prophecy (Glamis) is already true; the second (Cawdor) is verified almost immediately — this pattern of confirmation is the Witches' most effective manipulation, as it encourages Macbeth to believe the third prophecy requires no action on his part, while simultaneously inflaming his desire to act.",
            ],
          },
          {
            quote:
              "Thou shalt get kings, though thou be none",
            who: "Third Witch (to Banquo)",
            act: "Act 1, Scene 3",
            points: [
              "The prophecy that Banquo's descendants will be kings is the reason Macbeth orders his murder — Shakespeare shows how prophecy creates the very violence it appears merely to predict, complicating the **fate vs free will** debate.",
              "Links to **AO3 context**: James I claimed descent from Banquo — Shakespeare flatters his patron by presenting the Stuart line as divinely ordained, while simultaneously dramatising the terrible cost of the prophecy that enabled it.",
            ],
          },
          {
            quote:
              "Beware Macduff; beware the Thane of Fife",
            who: "First Apparition",
            act: "Act 4, Scene 1",
            points: [
              "The **repetition** of 'beware' creates urgency — this is the one unambiguous prophecy the Witches deliver, and it is the one Macbeth both heeds and mishandles, choosing to attack Macduff's family rather than Macduff himself.",
              "The prophecy proves accurate (Macduff does kill Macbeth), but Macbeth's response to it — slaughtering an innocent family — demonstrates that foreknowledge without moral wisdom leads to **greater** evil, not less.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "The Witches open the play with 'Fair is foul'",
        act: "Act 1, Scene 1",
        stageDirection:
          "Thunder and lightning. Enter three Witches",
        points: [
          "The play begins not with the protagonist but with the **supernatural** — Shakespeare establishes from the first stage direction that this is a world where the natural order has already been disrupted, before any human character appears.",
          "**Thunder and lightning** create a sensory assault that would have been genuinely alarming in the open-air Globe Theatre — Shakespeare uses stagecraft to establish an atmosphere of chaos and foreboding that infects the entire play.",
          "The scene is only thirteen lines long — its brevity makes it function as an **epigraph** or overture rather than a full scene, setting the moral and thematic parameters ('fair is foul') within which all subsequent action will take place.",
        ],
      },
      {
        type: "entrance",
        moment: "The apparitions scene",
        act: "Act 4, Scene 1",
        stageDirection:
          "Thunder. Enter the three Witches",
        points: [
          "The Witches' second major entrance is marked by their most elaborate ritual — the cauldron scene with its catalogue of grotesque ingredients establishes a **parody of creation**, as though the Witches are manufacturing Macbeth's fate from corrupted matter.",
          "The **apparitions** (armed head, bloody child, crowned child, procession of kings) function as theatrical spectacle that overwhelms Macbeth's critical faculties — Shakespeare uses visual drama to show how the supernatural dazzles reason into submission.",
          "This scene is Macbeth's last encounter with the Witches — their final manipulation equips him with the false confidence that will lead to his death, completing their role as catalysts of his destruction.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  4. BANQUO
  // ══════════════════════════════════════════════════════════
  {
    name: "Banquo",
    textSlug: "macbeth",
    traits: [
      // ── loyal ──
      {
        trait: "loyal",
        colour: "teal",
        quotes: [
          {
            quote:
              "So I lose none in seeking to augment it, but still keep my bosom franchis'd and my allegiance clear",
            who: "Banquo",
            act: "Act 2, Scene 1",
            points: [
              "The **conditional** 'so I lose none' sets a moral boundary — Banquo will listen to Macbeth's proposal only if it does not compromise his honour, demonstrating that loyalty to principle takes precedence over loyalty to a friend.",
              "The metaphor of a **'franchis'd' bosom** (a free heart) presents moral integrity as a form of liberty — Shakespeare contrasts Banquo's psychological freedom with Macbeth's increasing mental imprisonment.",
              "This line functions as a **dramatic foil**: spoken the night before Duncan's murder, it establishes exactly the moral standard Macbeth is about to violate, sharpening the audience's sense of Macbeth's transgression.",
            ],
          },
          {
            quote:
              "In the great hand of God I stand, and thence against the undivulg'd pretence I fight of treasonous malice",
            who: "Banquo",
            act: "Act 2, Scene 3",
            points: [
              "The **religious language** ('great hand of God') positions Banquo as an agent of divine justice — Shakespeare aligns loyalty with godliness, implicitly condemning Macbeth's treason as an offence against heaven.",
              "The phrase **'undivulg'd pretence'** (hidden purpose) reveals that Banquo suspects foul play even before the truth emerges — his loyalty to Duncan survives the king's death and transforms into a commitment to uncovering the truth.",
            ],
          },
        ],
      },
      // ── cautious ──
      {
        trait: "cautious",
        colour: "purple",
        quotes: [
          {
            quote:
              "The instruments of darkness tell us truths, win us with honest trifles, to betray's in deepest consequence",
            who: "Banquo",
            act: "Act 1, Scene 3",
            points: [
              "Banquo's **metaphor** of the Witches as 'instruments of darkness' immediately identifies them as agents of evil — where Macbeth is seduced, Banquo maintains critical distance. Shakespeare uses Banquo to articulate the **correct** response to supernatural temptation.",
              "The phrase **'honest trifles'** reveals a sophisticated understanding of manipulation: small truths (the Cawdor prophecy) are bait for greater deceptions — Banquo perceives the strategy that Macbeth is blind to.",
              "The verb **'betray's'** (betray us) is prophetic — Banquo accurately predicts that the prophecies will lead to destruction, making him the play's moral compass and Macbeth's **dramatic foil** on the question of how to respond to temptation.",
            ],
          },
          {
            quote:
              "Merciful powers, restrain in me the cursed thoughts that nature gives way to in repose",
            who: "Banquo",
            act: "Act 2, Scene 1",
            points: [
              "The invocation of **'merciful powers'** contrasts with Lady Macbeth's invocation of 'spirits that tend on mortal thoughts' — Shakespeare creates a precise moral opposition between Banquo's prayers for restraint and Lady Macbeth's prayers for cruelty.",
              "The admission that he too has **'cursed thoughts'** humanises Banquo — he is not immune to temptation but chooses to resist it, making his virtue a matter of moral will rather than natural goodness.",
              "Shakespeare uses this moment to explore the theme of **fate vs free will**: Banquo and Macbeth receive the same prophecy but make opposite moral choices, proving that the Witches do not compel action.",
            ],
          },
          {
            quote:
              "I fear thou play'dst most foully for't",
            who: "Banquo",
            act: "Act 3, Scene 1",
            points: [
              "The **pun** on 'foully' / 'fair is foul' connects Banquo's suspicion directly to the Witches' opening pronouncement — Shakespeare shows Banquo perceiving the moral reality that Macbeth's reign was born from murder.",
              "The verb **'fear'** reveals that Banquo suspects the truth but has not acted on it — Shakespeare creates moral complexity by showing that even the virtuous character is paralysed by the implications of what he knows.",
            ],
          },
        ],
      },
      // ── moral ──
      {
        trait: "moral",
        colour: "amber",
        quotes: [
          {
            quote:
              "Thou played'st most foully for't",
            who: "Banquo",
            act: "Act 3, Scene 1",
            points: [
              "The adverb **'most foully'** is a direct moral judgement — Banquo does not equivocate or soften his assessment. Shakespeare gives him the language of clear moral vision that Macbeth has lost.",
              "The **second-person address** ('thou') makes this an accusation spoken to Macbeth's face — Banquo's morality includes the courage to confront wrongdoing, even when the wrongdoer is the king.",
              "This directness is what makes Banquo dangerous to Macbeth and precipitates his murder — Shakespeare shows that in a corrupt regime, moral clarity is itself a threat to power, linking to the theme of **tyranny vs legitimate kingship**.",
            ],
          },
          {
            quote:
              "Let us not be dainty of leave-taking, but shift away",
            who: "Banquo",
            act: "Act 2, Scene 3",
            points: [
              "In the chaos following Duncan's murder, Banquo's instinct is to **act prudently** rather than posture — Shakespeare contrasts his practical morality with Macbeth's theatrical displays of grief.",
              "The verb **'shift'** suggests strategic withdrawal — Banquo understands that in a world where kings are murdered in their beds, survival requires alertness, not ceremony.",
            ],
          },
        ],
      },
      // ── haunting ──
      {
        trait: "haunting",
        colour: "red",
        quotes: [
          {
            quote:
              "Thou canst not say I did it. Never shake thy gory locks at me",
            who: "Macbeth (to Banquo's ghost)",
            act: "Act 3, Scene 4",
            points: [
              "The **denial** 'thou canst not say I did it' is technically true — Macbeth hired assassins rather than killing Banquo himself — but the desperation of the defence reveals that guilt cannot be outsourced. Shakespeare shows that moral responsibility persists regardless of the physical means.",
              "The image of **'gory locks'** makes the ghost viscerally physical — Banquo's haunting is not a subtle psychological phenomenon but a blood-drenched, accusatory presence that disrupts the public performance of kingship.",
              "Banquo's ghost never speaks — his silence is more powerful than any accusation, forcing Macbeth to condemn himself through his own panicked reactions. Shakespeare uses **dramatic irony** as the banquet guests witness a king arguing with an empty chair.",
            ],
          },
          {
            quote:
              "The time has been that, when the brains were out, the man would die, and there an end",
            who: "Macbeth (about Banquo's ghost)",
            act: "Act 3, Scene 4",
            points: [
              "Macbeth's complaint that the dead should **stay dead** reveals his expectation that murder could be a clean transaction — Shakespeare exposes the naivety of believing violence has no supernatural or psychological consequences.",
              "The phrase **'and there an end'** yearns for a world without conscience or afterlife — Macbeth wants a purely material universe where killing solves problems permanently, but the ghost proves that moral reality cannot be murdered.",
            ],
          },
          {
            quote:
              "It will have blood, they say; blood will have blood",
            who: "Macbeth (after seeing Banquo's ghost)",
            act: "Act 3, Scene 4",
            points: [
              "The **proverbial structure** ('blood will have blood') frames retribution as a natural law — Macbeth recognises that violence breeds violence but cannot stop the cycle he has initiated.",
              "The impersonal **'it'** and vague **'they say'** suggest Macbeth is grasping at folk wisdom because rational thought has failed him — Banquo's haunting has shattered his ability to reason clearly.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Banquo encounters the Witches alongside Macbeth",
        act: "Act 1, Scene 3",
        stageDirection:
          "Enter Macbeth and Banquo",
        points: [
          "Banquo and Macbeth enter **together** — Shakespeare stages them as equals who will be divided by their responses to the same prophecy. Their joint entrance makes their divergent paths more dramatically powerful.",
          "Banquo is the first to speak to the Witches ('what are these, so wither'd and so wild in their attire?') — his **questioning, analytical response** contrasts with Macbeth's rapt silence, establishing the moral difference between them from the first encounter.",
          "The shared entrance creates the play's central **dramatic foil**: Banquo and Macbeth are both brave soldiers, both promised greatness, both tempted — but only one chooses murder. Shakespeare uses their parallel starting point to isolate **free will** as the variable.",
        ],
      },
      {
        type: "entrance",
        moment: "Banquo's ghost at the banquet",
        act: "Act 3, Scene 4",
        stageDirection:
          "Enter the Ghost of Banquo, and sits in Macbeth's place",
        points: [
          "The ghost sits in **Macbeth's own seat** — Shakespeare makes the haunting a direct challenge to Macbeth's claim to the throne. Banquo in death occupies the very position Macbeth murdered to obtain, creating a powerful visual symbol of **usurped legitimacy**.",
          "Only Macbeth can see the ghost — the audience witnesses his public unravelling while the thanes see only a king raving at an empty chair. Shakespeare exploits the **dramatic irony** to show how guilt destroys the performance of authority.",
          "The banquet scene is the turning point of the play: Macbeth's inability to maintain composure reveals his guilt to the court and marks the beginning of the thanes' disaffection. Banquo's ghost achieves in death what Banquo alive could not — the **exposure** of the tyrant.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  5. MACDUFF
  // ══════════════════════════════════════════════════════════
  {
    name: "Macduff",
    textSlug: "macbeth",
    traits: [
      // ── honourable ──
      {
        trait: "honourable",
        colour: "teal",
        quotes: [
          {
            quote:
              "O horror, horror, horror! Tongue nor heart cannot conceive nor name thee!",
            who: "Macduff",
            act: "Act 2, Scene 3",
            points: [
              "The **triple repetition** of 'horror' reflects a mind overwhelmed — Macduff's response to Duncan's murder is instinctive moral revulsion, contrasting with Macbeth's performed grief and Lady Macbeth's calculated fainting.",
              "The claim that the crime exceeds what 'tongue nor heart' can express invokes an **inexpressibility topos** — Shakespeare signals that regicide is an offence beyond language, linking to the theme of **kingship as sacred**.",
              "Macduff's honour is revealed through his emotional authenticity — in a play saturated with performance and deception, his horror is one of the few genuine reactions, establishing him as a figure of **moral integrity**.",
            ],
          },
          {
            quote:
              "Not in the legions of horrid hell can come a devil more damn'd in evils to top Macbeth",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "The **hyperbole** of comparing Macbeth unfavourably to devils in hell elevates the condemnation to cosmic proportions — Macduff frames the fight against Macbeth as a battle between good and evil, not merely a political dispute.",
              "Shakespeare uses Macduff as the voice of **moral absolutism** — where other characters equivocate or compromise, Macduff names evil directly and commits to opposing it.",
            ],
          },
          {
            quote:
              "Bleed, bleed, poor country!",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "The **exclamatory personification** of Scotland as a bleeding body transforms political critique into visceral imagery — Shakespeare makes Macbeth's tyranny a wound in the nation's flesh, linking to the theme of **kingship and tyranny**.",
              "The repetition of **'bleed'** creates a rhythmic lament that connects Macduff's patriotism to physical pain — his honour extends beyond personal loyalty to encompass a duty to the entire nation.",
            ],
          },
        ],
      },
      // ── patriotic ──
      {
        trait: "patriotic",
        colour: "purple",
        quotes: [
          {
            quote:
              "O Scotland, Scotland!",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "The **vocative repetition** is a cry of anguish addressed to the nation itself — Shakespeare gives Macduff a relationship with Scotland that is almost parental, contrasting with Macbeth's relationship of **ownership and exploitation**.",
              "This exclamation comes during the testing scene with Malcolm — Macduff's patriotic despair when he believes Malcolm to be corrupt proves that his commitment is to Scotland, not to any individual claimant. Shakespeare uses the scene to verify Macduff's integrity.",
            ],
          },
          {
            quote:
              "Each new morn new widows howl, new orphans cry, new sorrows strike heaven on the face",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "The **anaphoric repetition** of 'new' emphasises the relentless, daily toll of Macbeth's tyranny — each sunrise brings fresh suffering, suggesting the regime is a wound that never stops bleeding.",
              "The **personification** of heaven being struck 'on the face' elevates Scotland's suffering to a cosmic offence — Macduff frames resistance as not merely political but morally and spiritually necessary.",
              "Shakespeare uses Macduff's patriotic rhetoric to build the case for Macbeth's overthrow as an act of **justice** rather than mere rebellion — linking to the theme of legitimate kingship vs tyranny.",
            ],
          },
          {
            quote:
              "Front to front bring thou this fiend of Scotland and myself",
            who: "Macduff",
            act: "Act 5, Scene 3",
            points: [
              "The designation **'fiend of Scotland'** reduces Macbeth from king to demon — Macduff's patriotism redefines the tyrant as Scotland's enemy rather than its ruler.",
              "The demand for a **face-to-face** confrontation ('front to front') reveals that Macduff seeks personal accountability, not merely military victory — Shakespeare frames the final battle as a moral reckoning.",
            ],
          },
        ],
      },
      // ── grief-stricken ──
      {
        trait: "grief-stricken",
        colour: "amber",
        quotes: [
          {
            quote:
              "All my pretty ones? Did you say all? O hell-kite! All?",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "The **repetition** of 'all' three times in rapid succession reflects a mind unable to absorb the totality of loss — Shakespeare dramatises the moment when grief exceeds comprehension.",
              "The endearment **'pretty ones'** is devastatingly intimate — Macduff's language shifts from public rhetoric to private tenderness, revealing the father beneath the warrior and making the audience feel the human cost of tyranny.",
              "The compound **'hell-kite'** (a bird of prey from hell) transforms Macbeth from a political enemy into a predatory monster — Macduff's grief converts sorrow into the moral fuel for revenge.",
            ],
          },
          {
            quote:
              "I must also feel it as a man",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "This line **redefines masculinity** — where Lady Macbeth equated manhood with suppressing emotion, Macduff insists that authentic manhood includes the capacity to grieve. Shakespeare offers a direct counter-model to the toxic masculinity that drives the play's violence.",
              "The modal verb **'must'** presents grief as a moral obligation, not a weakness — Macduff treats feeling as a duty, contrasting with Macbeth's progressive emotional numbing.",
              "Links to the theme of **gender and power**: Shakespeare uses Macduff to challenge the patriarchal assumption that 'real men' do not cry, proposing instead that emotional authenticity is a form of strength.",
            ],
          },
          {
            quote:
              "He has no children",
            who: "Macduff",
            act: "Act 4, Scene 3",
            points: [
              "This enigmatic line — possibly referring to Macbeth or to Malcolm — expresses the **impossibility of adequate revenge** or consolation. If Macbeth has no children, he can never understand what he has taken; if Malcolm has none, his advice to grieve 'like a man' rings hollow.",
              "The brevity is devastating — four words carry an ocean of grief. Shakespeare strips Macduff's language to its barest essence, proving that the deepest emotions resist elaboration.",
            ],
          },
        ],
      },
      // ── vengeful ──
      {
        trait: "vengeful",
        colour: "red",
        quotes: [
          {
            quote:
              "Turn, hell-hound, turn!",
            who: "Macduff",
            act: "Act 5, Scene 8",
            points: [
              "The **imperative** 'turn' demands that Macbeth face his reckoning — Macduff insists on a confrontation that is simultaneously personal vengeance and public justice.",
              "The epithet **'hell-hound'** dehumanises Macbeth, casting him as a creature of the underworld — Shakespeare shows how grief has transformed Macduff's honour into a righteous fury that mirrors the play's supernatural register.",
              "This line completes Macduff's arc from grief to action — Shakespeare structures his journey so that vengeance is not cold-blooded calculation but the direct emotional consequence of devastating loss.",
            ],
          },
          {
            quote:
              "I have no words: my voice is in my sword, thou bloodier villain than terms can give thee out",
            who: "Macduff",
            act: "Act 5, Scene 8",
            points: [
              "The **metonymy** of 'my voice is in my sword' replaces speech with violence — Macduff has moved beyond language into physical action, completing the transition from articulate patriot to warrior avenger.",
              "The claim that Macbeth is **'bloodier... than terms can give thee out'** echoes Macduff's earlier inexpressibility at Duncan's murder — Shakespeare bookends the play's violence with moments where language fails in the face of moral enormity.",
            ],
          },
          {
            quote:
              "Macduff was from his mother's womb untimely ripp'd",
            who: "Macduff",
            act: "Act 5, Scene 8",
            points: [
              "The revelation that Macduff was delivered by **caesarean section** shatters the Witches' equivocal prophecy — Shakespeare constructs the plot so that Macbeth's false confidence is destroyed by a technicality, demonstrating the danger of trusting ambiguous language.",
              "The violent verb **'ripp'd'** associates Macduff's birth with violence — Shakespeare implies that the man fated to destroy Macbeth was marked by trauma from the moment of his arrival in the world.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Macduff discovers Duncan's body",
        act: "Act 2, Scene 3",
        stageDirection:
          "Enter Macduff",
        points: [
          "Macduff enters Duncan's chamber and emerges with the cry **'O horror, horror, horror!'** — his entrance from the murder scene functions as the play's most dramatic revelation, converting offstage violence into onstage anguish.",
          "Shakespeare chooses Macduff — not Lennox, not a servant — to discover the body, planting the seed of the personal connection between Macduff and Duncan's murder that will drive the play's resolution.",
          "The contrast between Macduff's genuine horror and Macbeth's performed grief ('O, yet I do repent me of my fury') creates **dramatic irony** — the audience can see authentic versus false emotion side by side, deepening their complicity in the knowledge of who the real murderer is.",
        ],
      },
      {
        type: "entrance",
        moment: "The 'he has no children' grief scene",
        act: "Act 4, Scene 3",
        points: [
          "Macduff receives the news of his family's murder from Ross — Shakespeare stages the revelation as a **progressive disclosure** ('Your castle is surprised; your wife and babes / Savagely slaughter'd') that Macduff must absorb in real time before an audience.",
          "Malcolm's advice to 'dispute it like a man' prompts Macduff's redefining response ('I must also feel it as a man') — Shakespeare uses the exchange to stage a debate about **masculinity and grief** that is central to the play's gender politics.",
          "This scene transforms Macduff from a secondary character into the instrument of the play's moral resolution — his grief gives the final battle a **personal and emotional** dimension that elevates it beyond mere political regime change.",
        ],
      },
      {
        type: "exit",
        moment: "Macduff kills Macbeth and exits with his head",
        act: "Act 5, Scene 8",
        stageDirection:
          "Enter Macduff, with Macbeth's head",
        points: [
          "Macduff re-enters carrying Macbeth's severed head — the **visual spectacle** would have been shocking on the Jacobean stage and functions as the definitive symbol of tyranny's overthrow.",
          "His cry of **'Hail, King of Scotland!'** to Malcolm directly echoes the Witches' 'All hail, Macbeth, that shalt be king' — Shakespeare creates a structural rhyme in which the language of false prophecy is redeemed through legitimate succession.",
          "Macduff's final act is to step aside in favour of Malcolm — having achieved vengeance, he does not claim power for himself, confirming his role as an instrument of **justice** rather than ambition. His exit from the play's power structure is as morally significant as his entrance into its violence.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  6. KING DUNCAN
  // ══════════════════════════════════════════════════════════
  {
    name: "King Duncan",
    textSlug: "macbeth",
    traits: [
      // ── trusting ──
      {
        trait: "trusting",
        colour: "teal",
        quotes: [
          {
            quote:
              "There's no art to find the mind's construction in the face",
            who: "King Duncan",
            act: "Act 1, Scene 4",
            points: [
              "The **aphorism** acknowledges that appearances are unreliable — Duncan articulates the theme of **appearance vs reality** but proves unable to apply his own insight, making this one of Shakespeare's most devastating pieces of dramatic irony.",
              "He speaks this line about the traitorous Thane of Cawdor, moments before bestowing the same title on Macbeth — Shakespeare structures the scene so that Duncan's wisdom becomes the instrument of his own destruction.",
              "The word **'art'** (skill or method) implies that reading faces is impossible for anyone — Duncan generalises his own failure into a universal human limitation, which simultaneously excuses his trust and dooms him to repeat the error.",
            ],
          },
          {
            quote:
              "He was a gentleman on whom I built an absolute trust",
            who: "King Duncan (about the previous Thane of Cawdor)",
            act: "Act 1, Scene 4",
            points: [
              "The adjective **'absolute'** reveals that Duncan's trust knows no moderation — he invests completely in those around him, which makes him both an ideal Christian king and a fatally vulnerable one.",
              "Shakespeare creates a devastating **pattern of repetition**: Duncan was betrayed by one Thane of Cawdor and is about to be betrayed by the next, suggesting that his trusting nature is a structural weakness, not a one-time error.",
            ],
          },
          {
            quote:
              "This castle hath a pleasant seat; the air nimbly and sweetly recommends itself unto our gentle senses",
            who: "King Duncan",
            act: "Act 1, Scene 6",
            points: [
              "The sensory language of pleasure (**'nimbly and sweetly'**) creates a vision of harmony and natural beauty — Duncan perceives Macbeth's castle as a place of welcome, demonstrating a trust so complete it overrides the danger the audience already knows about.",
              "The dramatic irony is crushing: Duncan praises the **'pleasant seat'** of the castle where he will be murdered — Shakespeare makes the audience complicit witnesses, aware of what Duncan cannot see.",
              "The gentle, lyrical quality of Duncan's verse contrasts with the harsh, violent language surrounding him — Shakespeare uses **register** to distinguish Duncan's world of grace from the world of murder that is about to engulf it.",
            ],
          },
        ],
      },
      // ── generous ──
      {
        trait: "generous",
        colour: "purple",
        quotes: [
          {
            quote:
              "I have begun to plant thee, and will labour to make thee full of growing",
            who: "King Duncan (to Macbeth)",
            act: "Act 1, Scene 4",
            points: [
              "The **horticultural metaphor** ('plant', 'growing') presents kingship as nurturing cultivation — Duncan sees his role as fostering the growth of his subjects, embodying the ideal of a **benevolent monarch**.",
              "The verb **'labour'** implies effort and dedication — Duncan's generosity is not casual but committed, making Macbeth's betrayal of this investment all the more monstrous.",
              "Shakespeare uses this metaphor to contrast with the play's pervasive imagery of **unnatural growth and corruption** — what Duncan plants with care, Macbeth will uproot with violence.",
            ],
          },
          {
            quote:
              "More is thy due than more than all can pay",
            who: "King Duncan (to Macbeth)",
            act: "Act 1, Scene 4",
            points: [
              "The **hyperbole** of a debt beyond payment presents Duncan as infinitely grateful — Shakespeare constructs a king whose generosity knows no bounds, making his murder an act of supreme ingratitude.",
              "Duncan's generosity creates a **paradox of obligation** — by declaring he can never repay Macbeth sufficiently, he inadvertently highlights the gap between what Macbeth receives and what he desires, feeding the very ambition that will destroy the giver.",
            ],
          },
          {
            quote:
              "Only I have left to say, more is thy due than more than all can pay",
            who: "King Duncan",
            act: "Act 1, Scene 4",
            points: [
              "Duncan **publicly praises** Macbeth before the entire court — his generosity is not private but performed, which means Macbeth's treachery will be a violation not just of personal trust but of public honour.",
              "Shakespeare ensures the audience sees Duncan's goodness in full before it is destroyed — the generous king must be **visible** so that his absence is felt as a wound in the moral fabric of the play.",
            ],
          },
        ],
      },
      // ── vulnerable ──
      {
        trait: "vulnerable",
        colour: "amber",
        quotes: [
          {
            quote:
              "This castle hath a pleasant seat",
            who: "King Duncan",
            act: "Act 1, Scene 6",
            points: [
              "Duncan walks willingly into the site of his own murder — his vulnerability is not merely physical but **epistemological**: he lacks the information the audience possesses, making his every word saturated with dramatic irony.",
              "The adjective **'pleasant'** could not be more wrong — Shakespeare makes Duncan's vulnerability a function of his perceptual innocence. He literally cannot see the danger because his moral framework does not accommodate such betrayal.",
              "Links to the theme of **hospitality and kingship**: Duncan arrives as a guest, trusting in the sacred bond between host and guest that Macbeth will violate — this transgression of **feudal obligation** would have horrified a Jacobean audience.",
            ],
          },
          {
            quote:
              "He's here in double trust: first, as I am his kinsman and his subject... then, as his host",
            who: "Macbeth (about Duncan)",
            act: "Act 1, Scene 7",
            points: [
              "Macbeth himself enumerates the reasons Duncan should be safe — the **list** of obligations (kinsman, subject, host) that should protect Duncan instead catalogues the bonds Macbeth is about to shatter.",
              "The word **'double'** echoes the Witches' 'double, double toil and trouble' — Shakespeare links Duncan's vulnerability to the play's supernatural framework, suggesting that the forces of chaos target the most trusting.",
            ],
          },
        ],
      },
      // ── symbolic ──
      {
        trait: "symbolic",
        colour: "red",
        quotes: [
          {
            quote:
              "His silver skin lac'd with his golden blood",
            who: "Macbeth (describing Duncan's body)",
            act: "Act 2, Scene 3",
            points: [
              "The **precious metal imagery** ('silver', 'golden') elevates Duncan's body from human remains to a sacred artefact — even in death, Duncan symbolises the **divine right of kings** and the sanctity of legitimate rule.",
              "The oxymoronic beauty of the description (blood described as 'golden') creates dissonance — Macbeth's attempt to perform grief produces language so artful it inadvertently reveals the depth of what has been lost.",
              "Shakespeare uses Duncan's symbolic body to represent the entire concept of **legitimate order** — his murder is not merely the death of a man but the destruction of a principle, which is why the natural world responds with storms and unnatural darkness.",
            ],
          },
          {
            quote:
              "The Lord's anointed temple",
            who: "Macduff (describing Duncan's body)",
            act: "Act 2, Scene 3",
            points: [
              "The **religious metaphor** of the king's body as God's 'temple' invokes the doctrine of the **divine right of kings** — Duncan's murder is simultaneously regicide and sacrilege.",
              "Shakespeare draws on the Jacobean belief that the monarch's body was sacred — Duncan functions less as a realistic character than as a **symbol of divinely ordained order** whose destruction unleashes chaos.",
            ],
          },
          {
            quote:
              "Renown and grace is dead; the wine of life is drawn",
            who: "Macbeth (after Duncan's death)",
            act: "Act 2, Scene 3",
            points: [
              "The **abstract nouns** 'renown and grace' personify the qualities Duncan embodied — Shakespeare uses Macbeth's performed eulogy to articulate a truth the murderer does not feel: that Duncan's death has drained meaning from the world.",
              "The metaphor of **'the wine of life'** being 'drawn' (drained) transforms Duncan into a life-giving force — his symbolic role extends beyond kingship to represent vitality, goodness, and natural order themselves.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Duncan's arrival at Macbeth's castle",
        act: "Act 1, Scene 6",
        stageDirection:
          "Hautboys and torches. Enter King Duncan, Malcolm, Donalbain, Banquo, Lennox, Macduff, Ross, Angus, and Attendants",
        points: [
          "Duncan's entrance is accompanied by **'hautboys'** (oboes) — the ceremonial music signals a formal royal visit, creating an atmosphere of honour and trust that Shakespeare will brutally subvert within hours of stage time.",
          "He enters surrounded by his court, including the very men who will fight to avenge him — Shakespeare stages the scene as a **tableau of legitimate order** that the audience knows is about to be destroyed, maximising the dramatic irony.",
          "Duncan's first words praise the castle's pleasant air — his entrance is characterised by **sensory openness and pleasure**, contrasting with the closed, dark, suffocating atmosphere that will follow his murder. Shakespeare uses Duncan's arrival to establish a baseline of grace against which Macbeth's reign of terror will be measured.",
        ],
      },
      {
        type: "absence",
        moment: "Duncan's murder happens offstage",
        act: "Act 2, Scene 2",
        points: [
          "Shakespeare makes the most important event of the play **invisible** — Duncan's murder occurs offstage, heard only through Macbeth's anguished report and the cries of sleeping grooms. This decision forces the audience to imagine the horror, which is always worse than what can be shown.",
          "The offstage murder preserves Duncan's **dignity and symbolic status** — if the audience saw an old man bleeding, he would become pitiable; unseen, he remains the sacred 'Lord's anointed temple' whose desecration is an offence against the cosmic order.",
          "The focus remains on Macbeth and Lady Macbeth's **psychological responses** rather than the physical act — Shakespeare is interested in the moral and mental consequences of murder, not the mechanics, reinforcing that this is a play about **conscience** rather than violence.",
        ],
      },
      {
        type: "absence",
        moment: "Duncan's continued absence after death shapes the rest of the play",
        act: "Acts 3-5",
        points: [
          "Duncan never appears again, not even as a ghost — unlike Banquo, he does not return to haunt his murderer. Shakespeare's choice to keep Duncan permanently **absent** suggests that true goodness, once destroyed, cannot be recovered; it can only be avenged.",
          "His absence creates a moral vacuum that Macbeth's tyranny fills — every act of violence in the play's second half can be traced back to the void Duncan's death created, making his absence a structural driver of the plot.",
          "The play ends with Malcolm's restoration of order, but Duncan himself is **irrecoverable** — Shakespeare implies that while justice can be restored, innocence once lost cannot be, adding a note of permanent loss to the play's apparently hopeful conclusion.",
        ],
      },
    ],
  },
];
