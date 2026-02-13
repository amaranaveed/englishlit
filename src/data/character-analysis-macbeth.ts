import type { CharacterAnalysis } from "./types";

export const MACBETH_CHARACTERS: CharacterAnalysis[] = [
  {
    name: "Macbeth",
    textSlug: "macbeth",
    overview:
      "Macbeth begins as a valiant warrior, praised as 'brave Macbeth' and 'Bellona's bridegroom', but his encounter with the Witches ignites an ambition that consumes him. Shakespeare charts a devastating moral decline: from loyal thane to regicide, from regicide to tyrant, from tyrant to isolated, paranoid figure who has 'supp'd full with horrors'. His tragedy lies in the gap between what he knows is right and what he chooses to do — he is never unaware of his crimes, only unable to stop himself.",
    themes: [
      {
        name: "Ambition",
        link: "Macbeth's ambition is the engine of his destruction — present before the Witches speak, it drives every murder from Duncan to Banquo to Macduff's family.",
      },
      {
        name: "Guilt & Conscience",
        link: "Macbeth is never free of guilt; his hallucinations (the dagger, Banquo's Ghost) and sleeplessness reveal a conscience that torments him even as he continues to kill.",
      },
      {
        name: "Appearance vs Reality",
        link: "He hides his 'black and deep desires' behind the mask of a loyal subject and gracious host, performing innocence while planning regicide.",
      },
      {
        name: "Fate vs Free Will",
        link: "The Witches prophecy his rise but never command him to act — his tragedy is that he chooses to fulfil their words, making his downfall a product of free will, not destiny.",
      },
      {
        name: "Moral Corruption",
        link: "His moral decay is charted structurally: from agonised soliloquy before Duncan's murder to the casual ordering of Banquo's death to the massacre of Macduff's family without hesitation.",
      },
      {
        name: "Kingship & Tyranny",
        link: "Macbeth's reign is the anti-model of kingship — where Duncan ruled through trust and generosity, Macbeth rules through fear, surveillance, and murder.",
      },
    ],
    arc: {
      label: "TRAGIC DECLINE",
      stages: [
        {
          title: "The Loyal Warrior",
          act: "Act 1, Scenes 1–3",
          description:
            "Introduced through the bleeding Captain's report as 'brave Macbeth', he is a celebrated war hero who has just defeated the rebel Macdonwald. He is trusted by King Duncan, rewarded with the title Thane of Cawdor, and appears the model of feudal loyalty.",
        },
        {
          title: "The Tempted Mind",
          act: "Act 1, Scenes 3–7",
          description:
            "The Witches' prophecy ('All hail, Macbeth, that shalt be king hereafter') triggers an internal conflict. His 'horrible imaginings' show ambition already present, but he hesitates — it takes Lady Macbeth's goading to push him past his moral objections in the 'dagger' soliloquy.",
        },
        {
          title: "The Regicide",
          act: "Act 2, Scenes 1–2",
          description:
            "Murders Duncan in his sleep, immediately consumed by guilt: 'Will all great Neptune's ocean wash this blood / Clean from my hand?' He cannot say 'Amen' and is horrified by what he has done, yet the irrevocable act sets him on a path from which there is no return.",
        },
        {
          title: "The Paranoid Tyrant",
          act: "Acts 3–4",
          description:
            "Secures the throne but cannot secure his mind. Orders Banquo's murder without consulting Lady Macbeth, revealing his increasing isolation and autonomy in evil. Haunted by Banquo's ghost at the feast, he descends into paranoia and returns to the Witches for reassurance.",
        },
        {
          title: "The Despairing Nihilist",
          act: "Act 5",
          description:
            "Stripped of all human connection — Lady Macbeth is dead, his thanes have abandoned him, and he recognises the meaninglessness of his actions: 'Life's but a walking shadow.' He fights on not from hope but from stubborn defiance, killed by Macduff and branded a 'dead butcher'.",
        },
      ],
    },
    keyQuotes: [
      {
        quote: "Stars, hide your fires; / Let not light see my black and deep desires.",
        act: "Act 1, Scene 4",
        analysis:
          "The imperative 'hide' reveals Macbeth is already concealing murderous ambition. The contrast of 'light' and 'black' connects to the play's motif of darkness concealing evil, while 'deep desires' suggests ambition is innate, not planted by the Witches.",
        themes: [
          {
            name: "Ambition",
            link: "The phrase 'black and deep desires' reveals that Macbeth's ambition is already present and powerful before Lady Macbeth or the Witches push him — it is innate and self-generated.",
          },
          {
            name: "Appearance vs Reality",
            link: "The imperative 'hide your fires' shows Macbeth consciously constructing a false exterior, asking the cosmos itself to help him conceal his true murderous intent.",
          },
          {
            name: "Moral Corruption",
            link: "That Macbeth must ask the stars to hide his desires proves he knows they are wrong — his corruption is conscious, not ignorant, making it all the more damning.",
          },
        ],
      },
      {
        quote: "Is this a dagger which I see before me, / The handle toward my hand?",
        act: "Act 2, Scene 1",
        analysis:
          "The hallucinated dagger externalises Macbeth's internal conflict. The interrogative form shows his fractured psyche — he cannot distinguish reality from imagination. The handle pointing toward him suggests fate (or his own ambition) is directing him toward the murder.",
        themes: [
          {
            name: "Guilt & Conscience",
            link: "The hallucination reveals Macbeth's psyche fracturing under the weight of what he is about to do — his conscience manifests physically as a vision he cannot control.",
          },
          {
            name: "Fate vs Free Will",
            link: "The handle pointing toward his hand suggests an external force directing him, yet Macbeth must still choose to grasp it — the dagger embodies the ambiguity between destiny and choice.",
          },
          {
            name: "Appearance vs Reality",
            link: "Macbeth cannot determine whether the dagger is real or imaginary, mirroring the play's wider collapse of the boundary between what is true and what is performed.",
          },
        ],
      },
      {
        quote: "I am in blood / Stepp'd in so far that, should I wade no more, / Returning were as tedious as go o'er.",
        act: "Act 3, Scene 4",
        analysis:
          "The extended metaphor of wading through blood presents murder as a journey past the point of no return. 'Tedious' is chillingly casual — killing has become routine. This marks the transition from guilt-ridden murderer to calculating tyrant.",
        themes: [
          {
            name: "Moral Corruption",
            link: "The word 'tedious' reduces mass murder to inconvenience, showing how completely Macbeth's moral sense has eroded — killing is now routine rather than horrifying.",
          },
          {
            name: "Guilt & Conscience",
            link: "The blood metaphor externalises Macbeth's guilt as a physical substance he is wading through, yet he no longer tries to wash it away — he accepts it as his element.",
          },
          {
            name: "Ambition",
            link: "Macbeth frames continued killing as the path of least resistance, revealing that ambition has replaced conscience as his guiding principle.",
          },
        ],
      },
      {
        quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage.",
        act: "Act 5, Scene 5",
        analysis:
          "Macbeth's nihilistic soliloquy, triggered by Lady Macbeth's death, reduces life to meaningless performance. The metatheatrical metaphor ('poor player', 'stage') collapses the boundary between play and reality. 'Struts and frets' suggests self-importance is always temporary and hollow.",
        themes: [
          {
            name: "Ambition",
            link: "The speech exposes the ultimate emptiness of ambition: Macbeth achieved the crown and found it meaningless, reducing all human striving to a 'tale told by an idiot'.",
          },
          {
            name: "Fate vs Free Will",
            link: "Macbeth's nihilism implies that neither fate nor free will matters — life is random and purposeless, a despairing conclusion that denies meaning to his own choices.",
          },
          {
            name: "Kingship & Tyranny",
            link: "The 'poor player' who 'struts and frets' is an image of hollow kingship — Macbeth has the title but none of the substance, performing royalty without legitimacy.",
          },
        ],
      },
    ],
    relationships: [
      {
        character: "Lady Macbeth",
        nature: "Catalyst & Mirror",
        analysis:
          "She provides the resolve he lacks in Act 1, questioning his masculinity to drive him to action. Their relationship inverts: she begins dominant and ends broken, while he begins hesitant and ends hardened. By Act 3 he acts alone, and by Act 5 her death barely registers — 'She should have died hereafter.'",
      },
      {
        character: "Banquo",
        nature: "Foil",
        analysis:
          "Both hear the Witches' prophecy, but Banquo resists temptation while Macbeth surrenders to it. Banquo's moral restraint exposes Macbeth's choice — the supernatural is not to blame, Macbeth's ambition is. The Ghost of Banquo at the feast is the physical manifestation of Macbeth's guilt.",
      },
      {
        character: "The Witches",
        nature: "Catalysts",
        analysis:
          "They prophecy but never command — 'All hail, Macbeth' is a greeting, not an instruction. Shakespeare leaves ambiguous whether they create Macbeth's ambition or merely reveal it. James I's audience would have read them as agents of the devil, making Macbeth's willingness to trust them a damning moral choice.",
      },
      {
        character: "Duncan",
        nature: "Victim & Ideal",
        analysis:
          "Duncan represents everything Macbeth destroys: legitimate kingship, trust, divine order. Macbeth himself acknowledges Duncan's virtues — 'hath borne his faculties so meek' — making the murder not ignorant but fully conscious, and therefore worse.",
      },
    ],
    writersMethods:
      "Shakespeare uses **soliloquies** to expose Macbeth's inner turmoil, creating a tragic protagonist the audience understands even as they condemn. The play's **imagery of blood, darkness, and sleep** tracks his psychological disintegration. **Dramatic irony** pervades — the audience sees Macbeth's guilt while other characters see a king — and the **iambic pentameter** fractures as Macbeth's mind deteriorates, with increasingly broken and fragmented verse in Act 5.",
    wow: "A Freudian reading sees Macbeth's hallucinations (the dagger, Banquo's Ghost) as the return of the repressed — his unconscious guilt erupting into consciousness. The play can also be read through Aristotle's concept of *hamartia*: Macbeth's tragic flaw is not ambition alone but his *awareness* of evil combined with his inability to resist it, making him more culpable than a character who acts in ignorance.",
    keyWords: [
      { word: "Hamartia", def: "A tragic flaw or error of judgement that leads to the hero's downfall" },
      { word: "Hubris", def: "Excessive pride or self-confidence, especially in defying the gods or fate" },
      { word: "Regicide", def: "The killing of a king — the ultimate crime in the Jacobean worldview" },
      { word: "Soliloquy", def: "A speech delivered alone on stage, revealing inner thoughts to the audience" },
      { word: "Catharsis", def: "Emotional purging the audience experiences through pity and fear for the tragic hero" },
      { word: "Nihilism", def: "The belief that life is meaningless — reflected in Macbeth's 'tomorrow' speech" },
    ],
    examTip:
      "Always link Macbeth's decline to Shakespeare's **purpose**: writing for James I, Shakespeare presents regicide as an offence against God and nature, warning that ambition unchecked by morality leads to self-destruction. Show you understand that Macbeth *chooses* evil — the Witches tempt, but he acts.",
  },
  {
    name: "Lady Macbeth",
    textSlug: "macbeth",
    overview:
      "Lady Macbeth is one of Shakespeare's most complex female characters. She is introduced reading Macbeth's letter and immediately takes charge of the murder plot, calling on dark spirits to 'unsex' her — to strip away the compassion associated with femininity. She is the driving force behind Duncan's murder, but her psychological collapse in Act 5 reveals that the guilt she suppressed cannot be contained. Her sleepwalking scene is one of the most powerful representations of a guilty conscience in English literature.",
    themes: [
      {
        name: "Gender & Power",
        link: "Lady Macbeth can only access power by rejecting her femininity ('unsex me') and channelling ambition through her husband, exposing how patriarchal structures deny women direct political agency.",
      },
      {
        name: "Guilt & Conscience",
        link: "Her arc is defined by the return of suppressed guilt — the confident dismissal of 'a little water' in Act 2 becomes the obsessive hand-washing of Act 5, proving that conscience cannot be silenced.",
      },
      {
        name: "Ambition",
        link: "Her ambition matches or exceeds Macbeth's, yet it must be expressed vicariously through him; she is the architect of the murder plan and the force that overcomes his hesitation.",
      },
      {
        name: "Appearance vs Reality",
        link: "She instructs Macbeth to 'look like th' innocent flower / But be the serpent under't', and performs the role of gracious hostess while orchestrating Duncan's murder.",
      },
      {
        name: "Supernatural",
        link: "Her invocation of dark spirits to 'unsex' her aligns her with the Witches and the demonic, suggesting she willingly opens herself to evil forces to achieve her ambitions.",
      },
      {
        name: "Moral Corruption",
        link: "She actively corrupts both herself (suppressing natural compassion) and Macbeth (weaponising his masculinity to goad him into murder), making her a co-agent of the play's moral disintegration.",
      },
    ],
    arc: {
      label: "TRAGIC COLLAPSE",
      stages: [
        {
          title: "The Ambitious Wife",
          act: "Act 1, Scene 5",
          description:
            "Reads Macbeth's letter and immediately resolves on murder, fearing he is 'too full o' th' milk of human kindness'. Her soliloquy invokes dark spirits to 'unsex' her, revealing both her determination and the fact that she must actively suppress her femininity to act.",
        },
        {
          title: "The Manipulator",
          act: "Act 1, Scene 7",
          description:
            "When Macbeth wavers, she deploys devastating psychological manipulation: questioning his masculinity ('When you durst do it, then you were a man') and invoking the horrific image of dashing her own baby's brains out. She is the architect of the murder plan.",
        },
        {
          title: "The Composed Accomplice",
          act: "Act 2, Scenes 2–3",
          description:
            "Takes practical control after the murder, returning the daggers Macbeth was too shaken to replace. Her dismissive 'A little water clears us of this deed' contrasts starkly with Macbeth's anguished guilt — but this line is devastatingly ironic given her later obsessive hand-washing.",
        },
        {
          title: "The Sidelined Queen",
          act: "Acts 3–4",
          description:
            "As Macbeth takes control and orders Banquo's murder without her knowledge, she is progressively marginalised. At the banquet she must cover for his breakdown, but her power over him has evaporated. She vanishes from the play for almost two acts.",
        },
        {
          title: "The Broken Mind",
          act: "Act 5, Scene 1",
          description:
            "Re-emerges in the sleepwalking scene, compulsively washing imaginary blood from her hands: 'Out, damned spot!' The guilt she suppressed in Act 2 has consumed her. Her fragmented prose (she no longer speaks in verse) mirrors her shattered psyche. She dies offstage — possibly by suicide.",
        },
      ],
    },
    keyQuotes: [
      {
        quote: "Come, you spirits / That tend on mortal thoughts, unsex me here.",
        act: "Act 1, Scene 5",
        analysis:
          "The imperative 'unsex me' reveals the link between femininity and compassion in the Jacobean worldview — she must renounce her womanhood to commit murder. The invocation of 'spirits' aligns her with the Witches and the supernatural, suggesting she is willing to transgress natural and divine order.",
        themes: [
          {
            name: "Gender & Power",
            link: "The plea to be 'unsexed' exposes the Jacobean assumption that femininity and murderous ambition are incompatible — she must literally renounce womanhood to access the power she craves.",
          },
          {
            name: "Supernatural",
            link: "By invoking dark spirits she voluntarily opens herself to demonic influence, mirroring the Witches' communion with evil and placing herself outside the natural Christian order.",
          },
          {
            name: "Ambition",
            link: "The speech reveals ambition so consuming that she is willing to sacrifice her very identity — her gender, her compassion, her humanity — to achieve the crown.",
          },
        ],
      },
      {
        quote: "Look like th' innocent flower, / But be the serpent under 't.",
        act: "Act 1, Scene 5",
        analysis:
          "The flower/serpent imagery directly echoes the Biblical fall (the serpent in Eden), associating Lady Macbeth with Eve and original sin. It also encapsulates the play's central theme of appearance vs reality — she instructs Macbeth to perform innocence while concealing murderous intent.",
        themes: [
          {
            name: "Appearance vs Reality",
            link: "The flower/serpent antithesis is the play's most concentrated image of deception — innocence as a performed surface concealing deadly intent beneath.",
          },
          {
            name: "Moral Corruption",
            link: "The Biblical serpent allusion associates Lady Macbeth with the tempter in Eden, casting her as the agent who corrupts Macbeth and causes the 'fall' of Scotland's moral order.",
          },
          {
            name: "Gender & Power",
            link: "She takes the role of strategic instructor, directing her husband's public performance — her power operates through manipulation rather than direct action, the only route available to her within patriarchal constraints.",
          },
        ],
      },
      {
        quote: "A little water clears us of this deed.",
        act: "Act 2, Scene 2",
        analysis:
          "Her dismissive tone contrasts Macbeth's horror and establishes her as the psychologically stronger partner — at this point. The dramatic irony is devastating: in Act 5, no amount of water can remove the imaginary blood. Shakespeare shows that guilt cannot be rationalised away.",
        themes: [
          {
            name: "Guilt & Conscience",
            link: "The line's confident dismissal of guilt is devastatingly ironic — in Act 5, she will compulsively wash her hands, proving that the guilt she rationalised away has merely been suppressed, not removed.",
          },
          {
            name: "Appearance vs Reality",
            link: "She believes guilt can be managed as easily as a physical stain, confusing the external appearance of clean hands with genuine moral innocence — a delusion the play systematically destroys.",
          },
          {
            name: "Moral Corruption",
            link: "Her casual reduction of regicide to a 'deed' that water can clear reveals how deeply she has corrupted her own moral framework, treating the ultimate crime as a practical inconvenience.",
          },
        ],
      },
      {
        quote: "Out, damned spot! Out, I say!",
        act: "Act 5, Scene 1",
        analysis:
          "The exclamatory, fragmented prose (not verse) signals her mental collapse. 'Damned' carries both its colloquial and theological weight — she is spiritually condemned. The compulsive hand-washing inverts her earlier confidence, and the word 'spot' reduces Duncan's murder to an indelible stain on her conscience.",
        themes: [
          {
            name: "Guilt & Conscience",
            link: "The compulsive hand-washing is the physical eruption of repressed guilt — the 'little water' of Act 2 has become an endless, futile ritual, proving conscience cannot be silenced through willpower.",
          },
          {
            name: "Supernatural",
            link: "The spirits she invited in Act 1 have, in a sense, answered: her madness can be read as demonic possession or divine punishment, the supernatural consequences of her willing transgression.",
          },
          {
            name: "Gender & Power",
            link: "Her collapse can be read as the patriarchal order reasserting itself — the woman who dared to 'unsex' herself and seize masculine power is punished with madness and death, a gendered cautionary tale.",
          },
        ],
      },
    ],
    relationships: [
      {
        character: "Macbeth",
        nature: "Co-Conspirator & Inverse Arc",
        analysis:
          "Their arcs are symmetrical inversions: she begins strong and ends broken; he begins hesitant and ends hardened. In Act 1 she drives the action; by Act 3 he excludes her. Their final separation — she dies offstage while he barely reacts — is the ultimate measure of how ambition has destroyed their partnership.",
      },
      {
        character: "The Witches",
        nature: "Parallel",
        analysis:
          "Lady Macbeth's invocation of spirits ('Come, you spirits') parallels the Witches' supernatural power. Shakespeare creates a deliberate echo: all the female figures in the play are associated with the transgression of natural order, reflecting Jacobean anxieties about women who wielded power outside patriarchal structures.",
      },
      {
        character: "Duncan",
        nature: "Victim",
        analysis:
          "She claims she would have killed Duncan herself, 'Had he not resembled / My father as he slept' — revealing a crack in her resolve that foreshadows her collapse. Even in her most ruthless moment, she cannot fully suppress her humanity.",
      },
    ],
    writersMethods:
      "Shakespeare uses Lady Macbeth to explore **Jacobean gender anxieties**. Her 'unsex me' speech disrupts the natural order, and her punishment — madness and death — can be read as the patriarchal reassertion of femininity's 'proper' place. The **shift from verse to prose** in the sleepwalking scene is a masterful structural device: verse = control, prose = disintegration. The **hand-washing motif** creates a structural arc across the whole play (from confidence to compulsion).",
    wow: "A feminist reading (e.g. Janet Adelman) sees Lady Macbeth as trapped: she can only access power by channelling it through her husband and by rejecting her own identity ('unsex me'). Her destruction is not just guilt but the impossibility of being a powerful woman within a patriarchal system. The play punishes her ambition more than Macbeth's — he dies fighting, she dies broken — revealing a gendered double standard even within tragedy.",
    keyWords: [
      { word: "Patriarchal", def: "A system where men hold primary power; women are subordinate" },
      { word: "Transgression", def: "Violation of a social, moral, or natural boundary" },
      { word: "Femme fatale", def: "An archetype of a seductive, dangerous woman who leads men to ruin" },
      { word: "Psychosomatic", def: "Physical symptoms caused by mental distress — e.g. the imagined blood" },
      { word: "Dramatic irony", def: "When the audience knows something a character does not — e.g. 'A little water'" },
    ],
    examTip:
      "Always link Lady Macbeth's collapse to **Shakespeare's message about guilt**: no matter how much a person rationalises evil, the conscience cannot be silenced. Top-band answers explore how her arc critiques both gender norms *and* the human cost of ambition.",
  },
  {
    name: "The Witches",
    textSlug: "macbeth",
    overview:
      "The three Witches (or 'Weird Sisters') open the play and set its tone of moral inversion: 'Fair is foul, and foul is fair.' They prophecy Macbeth's rise but never explicitly command him to act — their power lies in suggestion, not compulsion. For a Jacobean audience familiar with James I's *Daemonologie* (1597), they would have been genuinely terrifying agents of the devil. Shakespeare uses them to raise the play's central question: does fate control Macbeth, or does he choose his own destruction?",
    themes: [
      {
        name: "Supernatural",
        link: "The Witches are the play's primary embodiment of supernatural evil, operating outside natural and divine law to tempt mortals toward damnation.",
      },
      {
        name: "Fate vs Free Will",
        link: "Their prophecies raise the central question of whether Macbeth's future is predetermined or whether they merely reveal possibilities that he chooses to act on.",
      },
      {
        name: "Appearance vs Reality",
        link: "Their motto 'Fair is foul, and foul is fair' establishes the play's world of inverted values, where nothing can be trusted and every truth conceals a deception.",
      },
      {
        name: "Ambition",
        link: "They do not create Macbeth's ambition but ignite it through suggestion — their prophecies act as a catalyst that transforms latent desire into murderous action.",
      },
      {
        name: "Moral Corruption",
        link: "They are agents of moral corruption who work by equivocation, using half-truths to lead Macbeth into a false sense of security that accelerates his moral disintegration.",
      },
    ],
    arc: {
      label: "STATIC (CATALYSTS)",
      stages: [
        {
          title: "The Opening Inversion",
          act: "Act 1, Scene 1",
          description:
            "Appear in thunder and lightning, establishing the play's atmosphere of moral chaos. Their chant — 'Fair is foul, and foul is fair' — introduces the theme of inverted values that pervades the entire tragedy.",
        },
        {
          title: "The Prophecy",
          act: "Act 1, Scene 3",
          description:
            "Greet Macbeth with three titles: Thane of Glamis (present), Thane of Cawdor (imminent), and 'king hereafter' (future). They also tell Banquo he will be 'lesser than Macbeth, and greater.' The prophecies are ambiguous, equivocal — designed to tempt, not to instruct.",
        },
        {
          title: "The Second Prophecy",
          act: "Act 4, Scene 1",
          description:
            "Macbeth seeks them out voluntarily. They show three apparitions delivering riddling prophecies: 'none of woman born / Shall harm Macbeth' and 'Macbeth shall never vanquish'd be until / Great Birnam Wood to high Dunsinane Hill / Shall come.' These equivocations give false confidence that leads to his downfall.",
        },
      ],
    },
    keyQuotes: [
      {
        quote: "Fair is foul, and foul is fair.",
        act: "Act 1, Scene 1",
        analysis:
          "This chiasmus inverts moral categories — good is evil, evil is good. It establishes the play's central theme that appearances deceive and natural order has been corrupted. Macbeth unconsciously echoes this ('So foul and fair a day'), suggesting he is already aligned with the Witches' worldview.",
        themes: [
          {
            name: "Appearance vs Reality",
            link: "The chiasmus collapses the distinction between good and evil at the play's very opening, establishing a world where no surface can be trusted and all moral categories are inverted.",
          },
          {
            name: "Supernatural",
            link: "The chant functions as an incantation that corrupts the natural moral order, marking the Witches as agents of chaos who operate outside the divine framework of good and evil.",
          },
          {
            name: "Moral Corruption",
            link: "By declaring foulness fair, the Witches articulate the moral inversion that will infect Macbeth and, through him, all of Scotland — evil disguised as good becomes the play's governing principle.",
          },
        ],
      },
      {
        quote: "All hail, Macbeth, that shalt be king hereafter!",
        act: "Act 1, Scene 3",
        analysis:
          "The prophecy is a greeting, not a command — 'hail' not 'go and kill Duncan.' This ambiguity is crucial: Shakespeare ensures Macbeth's downfall comes from his own interpretation of the prophecy, not from supernatural compulsion, preserving his moral agency and culpability.",
        themes: [
          {
            name: "Fate vs Free Will",
            link: "The prophecy predicts but does not prescribe — 'shalt be' states a future but does not instruct Macbeth how to reach it, leaving the moral choice entirely in his hands.",
          },
          {
            name: "Ambition",
            link: "The prophecy ignites Macbeth's ambition by making the crown seem attainable; his 'horrible imaginings' immediately after prove the desire for power was already present, waiting for a spark.",
          },
          {
            name: "Supernatural",
            link: "The Witches' foreknowledge raises the question of whether they see a fixed future or create one — their supernatural insight is the mechanism through which temptation operates.",
          },
        ],
      },
      {
        quote: "Double, double toil and trouble; / Fire burn and cauldron bubble.",
        act: "Act 4, Scene 1",
        analysis:
          "The incantatory trochaic tetrameter (stressed-unstressed rhythm) inverts the play's usual iambic pentameter, creating a sense of supernatural disorder. The 'double' motif connects to the play's theme of duplicity and the equivocation of their prophecies.",
        themes: [
          {
            name: "Supernatural",
            link: "The ritual incantation with its inverted rhythm and grotesque ingredients creates the play's most concentrated scene of occult power, marking the cauldron as a source of demonic knowledge.",
          },
          {
            name: "Appearance vs Reality",
            link: "The word 'double' encapsulates the Witches' method of equivocation — everything they say has a double meaning, and the prophecies that emerge from this scene will deceive Macbeth through their apparent clarity.",
          },
          {
            name: "Fate vs Free Will",
            link: "Macbeth now seeks the Witches voluntarily, inverting the Act 1 encounter; his free choice to pursue supernatural knowledge deepens his entrapment in a fate he is actively constructing.",
          },
        ],
      },
    ],
    relationships: [
      {
        character: "Macbeth",
        nature: "Tempters",
        analysis:
          "They provide the spark but not the fuel — Macbeth's ambition is his own. In Act 1 he is disturbed by the prophecy; by Act 4 he seeks them out willingly. Shakespeare shows that evil works by exploiting existing weaknesses, not by creating them.",
      },
      {
        character: "Banquo",
        nature: "Test / Contrast",
        analysis:
          "Banquo receives a prophecy too ('thou shalt get kings') but does not act on it, proving that the supernatural does not compel action. His restraint exposes Macbeth's choice to succumb.",
      },
      {
        character: "Lady Macbeth",
        nature: "Parallel",
        analysis:
          "Both the Witches and Lady Macbeth are female figures associated with transgression and the subversion of natural order. Lady Macbeth's 'unsex me' speech echoes the Witches' gender ambiguity (Banquo notes they have beards), linking all the play's powerful women to the disruption of patriarchal norms.",
      },
    ],
    writersMethods:
      "Shakespeare uses the Witches to create **dramatic ambiguity**: the audience can never be sure if they cause Macbeth's actions or merely predict them. Their **rhyming couplets and trochaic metre** set them apart from the iambic pentameter of the court, marking them as agents of disorder. The **equivocation** of their prophecies (saying one thing while meaning another) reflected a topical concern — the Gunpowder Plotters had been trained in equivocation by Jesuits, and the word carried dangerous political overtones in 1606.",
    wow: "New Historicist readings connect the Witches to James I's obsession with witchcraft — he personally interrogated suspected witches and wrote *Daemonologie*. Shakespeare's play can be seen as both flattering the king's interests *and* subtly questioning them: if the Witches' prophecies come true regardless, does prosecuting witches achieve anything? The play's refusal to clarify the Witches' power is itself a form of dramatic equivocation.",
    keyWords: [
      { word: "Equivocation", def: "Deliberately ambiguous language that misleads without technically lying" },
      { word: "Chiasmus", def: "A rhetorical pattern where ideas are reversed: 'fair is foul, foul is fair'" },
      { word: "Trochaic tetrameter", def: "A stressed-unstressed rhythm — the opposite of the play's normal iambic metre" },
      { word: "Supernatural", def: "Forces beyond the natural world — associated with evil in the Jacobean worldview" },
      { word: "Fatalism", def: "The belief that events are predetermined and humans have no free will" },
    ],
    examTip:
      "Avoid saying the Witches 'made' Macbeth do anything — this removes his moral responsibility and weakens your argument. Instead, argue they **reveal** or **exploit** his pre-existing ambition, and link this to Shakespeare's Jacobean context where free will vs predestination was a live theological debate.",
  },
  {
    name: "Banquo",
    textSlug: "macbeth",
    overview:
      "Banquo serves as Macbeth's moral mirror. Both soldiers hear the Witches' prophecy, but where Macbeth acts on it, Banquo restrains himself, warning that 'the instruments of darkness tell us truths / Win us with honest trifles, to betray's / In deepest consequence.' His murder in Act 3 — ordered by Macbeth to prevent the prophecy of Banquo's royal descendants — transforms him from a living foil into a haunting symbol of Macbeth's guilt. Historically, Banquo was believed to be an ancestor of James I, which shaped Shakespeare's sympathetic portrayal.",
    themes: [
      {
        name: "Fate vs Free Will",
        link: "Banquo receives the same supernatural prophecy as Macbeth but chooses not to act on it, proving that the Witches do not compel action and that moral choice remains available.",
      },
      {
        name: "Loyalty & Honour",
        link: "He embodies feudal loyalty and honour as a soldier who fights alongside Macbeth yet refuses to pursue power through treachery, serving as the play's benchmark for noble conduct.",
      },
      {
        name: "Guilt & Conscience",
        link: "As a Ghost, Banquo becomes the physical manifestation of Macbeth's guilt — his silent presence at the banquet shatters the tyrant's composure and publicly exposes his fractured conscience.",
      },
      {
        name: "Ambition",
        link: "Banquo is not immune to ambition — he dreams of the Witches and silently notes Macbeth 'played'st most foully' — but he restrains himself, making him ambition's foil rather than its victim.",
      },
      {
        name: "Supernatural",
        link: "His Ghost's appearance at the banquet is the play's most dramatic supernatural intrusion, raising questions about whether it represents genuine haunting, divine justice, or Macbeth's psychological collapse.",
      },
    ],
    arc: {
      label: "MORAL STEADFASTNESS (CUT SHORT)",
      stages: [
        {
          title: "The Loyal Soldier",
          act: "Act 1",
          description:
            "Fights alongside Macbeth and hears the same prophecy. Unlike Macbeth, he is cautious and sceptical, recognising that evil may use truth as bait. He represents the road Macbeth could have taken.",
        },
        {
          title: "The Suspicious Friend",
          act: "Acts 2–3",
          description:
            "After Duncan's murder, Banquo privately suspects Macbeth: 'Thou played'st most foully for't.' Yet he does not act on this suspicion — possibly because the prophecy promised the throne to his own descendants. This moral ambiguity makes him human rather than saintly.",
        },
        {
          title: "The Murdered Innocent & Ghost",
          act: "Act 3",
          description:
            "Murdered by Macbeth's hired killers, but his son Fleance escapes — ensuring the prophecy of Banquo's royal line survives. His Ghost appears at the banquet, visible only to Macbeth, serving as an externalisation of guilt that publicly exposes the tyrant's fractured mind.",
        },
      ],
    },
    keyQuotes: [
      {
        quote: "The instruments of darkness tell us truths, / Win us with honest trifles, to betray's / In deepest consequence.",
        act: "Act 1, Scene 3",
        analysis:
          "Banquo recognises the Witches' strategy: they use small truths to build trust before the ultimate betrayal. This perceptive warning encapsulates the play's theme of equivocation and proves Banquo's moral clarity — he understands the danger that Macbeth ignores.",
        themes: [
          {
            name: "Supernatural",
            link: "Banquo identifies the Witches as 'instruments of darkness' — agents of the devil who use truth as bait — demonstrating the theological awareness that Macbeth fatally lacks.",
          },
          {
            name: "Fate vs Free Will",
            link: "By recognising the Witches' method of temptation, Banquo exercises the rational free will that could resist fate's pull — the very faculty Macbeth surrenders.",
          },
          {
            name: "Loyalty & Honour",
            link: "His warning to Macbeth reflects the honour of a true friend and loyal subject — he tries to steer Macbeth away from danger, placing moral duty above personal gain.",
          },
        ],
      },
      {
        quote: "Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou played'st most foully for't.",
        act: "Act 3, Scene 1",
        analysis:
          "The list structure ('King, Cawdor, Glamis, all') mirrors the Witches' original prophecy, showing Banquo has been watching and thinking. 'Played'st most foully' is a direct accusation, yet Banquo does not act — a silence that some critics read as complicity through inaction.",
        themes: [
          {
            name: "Guilt & Conscience",
            link: "Banquo's suspicion creates a moral dilemma: he suspects murder but does not speak, raising the question of whether silence in the face of evil constitutes a form of guilt.",
          },
          {
            name: "Ambition",
            link: "His inaction may be partly motivated by self-interest — if Macbeth's prophecy came true, perhaps Banquo's will too, giving him reason to stay silent rather than challenge the new king.",
          },
          {
            name: "Fate vs Free Will",
            link: "The list structure echoing the prophecy shows fate apparently fulfilled, yet Banquo's word 'played'st' insists Macbeth acted by choice — the tension between destiny and agency remains unresolved.",
          },
        ],
      },
    ],
    relationships: [
      {
        character: "Macbeth",
        nature: "Foil",
        analysis:
          "Their parallel experiences with the prophecy create a moral experiment: same stimulus, opposite responses. Macbeth's decision to murder Banquo is motivated by both fear (the prophecy) and envy (Banquo's integrity), revealing how far he has fallen.",
      },
      {
        character: "Fleance",
        nature: "Legacy",
        analysis:
          "Fleance's escape ensures Banquo's line continues, fulfilling the prophecy and symbolising that Macbeth's tyranny cannot erase the future. For James I's audience, Fleance represented the origin of the Stuart dynasty — making Banquo's virtue politically significant.",
      },
    ],
    writersMethods:
      "Shakespeare uses Banquo as a **dramatic foil** to isolate Macbeth's moral choices. The **Ghost scene** (Act 3, Scene 4) is a masterpiece of stagecraft: Banquo's silent presence — visible to Macbeth but not the court — forces the audience to see through the tyrant's public mask. Historically, Shakespeare softened Banquo from Holinshed's Chronicles (where he was Macbeth's accomplice) to flatter James I, who claimed descent from him.",
    wow: "The Ghost can be staged two ways — as a physical presence or as an empty chair only Macbeth reacts to. Each choice carries interpretive weight: a visible Ghost suggests supernatural justice; an invisible one suggests Macbeth's guilt is entirely internal, making his destruction self-inflicted rather than divinely imposed. This staging ambiguity mirrors the play's larger refusal to resolve the fate vs free will question.",
    keyWords: [
      { word: "Foil", def: "A character who contrasts with another to highlight their qualities" },
      { word: "Moral compass", def: "A character who represents ethical behaviour against which others are measured" },
      { word: "Dramatic irony", def: "When the audience knows something characters on stage do not" },
      { word: "Complicity", def: "Involvement in or knowledge of wrongdoing without acting to prevent it" },
    ],
    examTip:
      "Don't treat Banquo as simply 'good' — note his silence after Duncan's murder and his possible self-interest in the prophecy. Examiners reward **nuanced** readings that acknowledge complexity rather than presenting characters as purely virtuous or purely evil.",
  },
  {
    name: "Macduff",
    textSlug: "macbeth",
    overview:
      "Macduff is the play's agent of justice and restoration. His discovery of Duncan's body, his flight to England, and his anguished response to the slaughter of his family ('All my pretty ones? / Did you say all?') establish him as the moral and emotional counterpoint to Macbeth's tyranny. His killing of Macbeth in the final act is both personal revenge and the restoration of divine order — he is the instrument through which Scotland is healed.",
    themes: [
      {
        name: "Kingship & Tyranny",
        link: "Macduff is the character who most clearly articulates the difference between legitimate rule and tyranny, refusing to attend Macbeth's coronation and ultimately killing the tyrant to restore rightful kingship.",
      },
      {
        name: "Loyalty & Honour",
        link: "His loyalty to Scotland over personal safety drives him to flee to England and raise an army, and Malcolm's loyalty test in Act 4 confirms that Macduff's patriotism is genuine and selfless.",
      },
      {
        name: "Guilt & Conscience",
        link: "He is tormented by guilt for leaving his family unprotected — 'Sinful Macduff, / They were all struck for thee' — showing that even the play's most honourable character carries the weight of conscience.",
      },
      {
        name: "Gender & Power",
        link: "His declaration 'I must also feel it as a man' redefines masculinity as emotional honesty, offering a direct counter-model to the toxic, violent masculinity that Lady Macbeth weaponises and Macbeth embodies.",
      },
      {
        name: "Fate vs Free Will",
        link: "His Caesarean birth fulfils the Witches' equivocal prophecy ('none of woman born'), making him fate's chosen instrument — yet his choice to fight Macbeth is driven by personal will and moral conviction.",
      },
    ],
    arc: {
      label: "RISING AVENGER",
      stages: [
        {
          title: "The Discoverer",
          act: "Act 2, Scene 3",
          description:
            "Discovers Duncan's body and raises the alarm with genuine horror: 'O horror, horror, horror!' His instinctive emotional response contrasts with Macbeth's performed grief, establishing Macduff's authenticity early in the play.",
        },
        {
          title: "The Suspicious Exile",
          act: "Act 3–4",
          description:
            "Refuses to attend Macbeth's coronation and flees to England, signalling his distrust of the new regime. His absence, however, leaves his family unprotected — a decision that haunts him and that Malcolm tests him on.",
        },
        {
          title: "The Grieving Father",
          act: "Act 4, Scene 3",
          description:
            "Learns of his family's massacre and responds with raw, unperformed grief. When Malcolm tells him to 'Dispute it like a man', Macduff responds: 'I shall do so; / But I must also *feel* it as a man.' This redefines masculinity as emotional honesty, not suppression.",
        },
        {
          title: "The Avenger",
          act: "Act 5",
          description:
            "Kills Macbeth in single combat, revealing that he was 'from his mother's womb / Untimely ripp'd' — born by Caesarean section, not 'of woman born.' He fulfils the Witches' prophecy and restores legitimate rule by presenting Macbeth's head to Malcolm.",
        },
      ],
    },
    keyQuotes: [
      {
        quote: "I must also feel it as a man.",
        act: "Act 4, Scene 3",
        analysis:
          "This line directly challenges the toxic masculinity that Lady Macbeth weaponised in Act 1. Macduff redefines manhood as the capacity to feel grief, not to suppress it. Shakespeare offers an alternative model of masculinity to Macbeth's violent, emotionally stunted version.",
        themes: [
          {
            name: "Gender & Power",
            link: "Macduff redefines masculinity by insisting that true manhood includes emotional vulnerability, directly countering Lady Macbeth's equation of masculinity with violence and suppression.",
          },
          {
            name: "Guilt & Conscience",
            link: "His willingness to feel grief openly — rather than suppress it — demonstrates a healthy conscience, contrasting the repression that destroyed Lady Macbeth and the numbing that consumed Macbeth.",
          },
          {
            name: "Loyalty & Honour",
            link: "The line reveals that Macduff's honour is rooted in authentic feeling rather than performance — he will fight as a man, but he will also grieve as one, because true honour requires emotional honesty.",
          },
        ],
      },
      {
        quote: "O horror, horror, horror! Tongue nor heart / Cannot conceive nor name thee!",
        act: "Act 2, Scene 3",
        analysis:
          "The triple repetition of 'horror' and the assertion that language fails ('cannot conceive nor name') presents Duncan's murder as beyond human expression. This sincere response contrasts with Macbeth's elaborate, performative grief, allowing the audience to distinguish authentic emotion from acted guilt.",
        themes: [
          {
            name: "Kingship & Tyranny",
            link: "Macduff's inexpressible horror at the king's murder reflects the Jacobean belief that regicide is a crime against God's order itself — so monstrous that language cannot contain it.",
          },
          {
            name: "Appearance vs Reality",
            link: "His genuine, unscripted horror contrasts sharply with Macbeth's calculated, rhetorical grief, allowing the audience to distinguish authentic emotion from guilty performance.",
          },
          {
            name: "Guilt & Conscience",
            link: "Macduff's reaction is the response of an innocent conscience confronting evil — his horror is pure because he bears no guilt, unlike Macbeth whose performed grief masks culpability.",
          },
        ],
      },
    ],
    relationships: [
      {
        character: "Macbeth",
        nature: "Nemesis",
        analysis:
          "Macduff is the instrument of Macbeth's destruction, but he is also his mirror — both are soldiers, both are husbands, both suffer loss. The difference is moral: Macbeth causes suffering, Macduff endures it. Their final combat is not just political but deeply personal.",
      },
      {
        character: "Malcolm",
        nature: "Ally",
        analysis:
          "Malcolm tests Macduff's loyalty by pretending to be unfit for kingship. Macduff's despairing response ('O Scotland, Scotland!') proves his patriotism is genuine. Together they represent the legitimate order that will replace Macbeth's tyranny.",
      },
    ],
    writersMethods:
      "Shakespeare uses Macduff to present an **alternative masculinity** — one that embraces emotional honesty. His grief scene (Act 4, Scene 3) is often cited as one of the most moving passages in Shakespeare, precisely because it refuses the stoicism that the play's other male characters perform. The 'not of woman born' reveal uses the Witches' **equivocation** against Macbeth, showing that fate's language is always double-edged.",
    wow: "Macduff's Caesarean birth makes him literally *unnatural* in the Jacobean worldview — born outside the normal process. Paradoxically, it is this 'unnatural' man who restores natural order. Shakespeare suggests that defeating tyranny requires something extraordinary, and that rigid categories (natural/unnatural, man/not-of-woman-born) collapse under the weight of political necessity.",
    keyWords: [
      { word: "Nemesis", def: "An agent of retribution or downfall; the force that punishes the tragic hero" },
      { word: "Pathos", def: "A quality that evokes pity and sadness — central to Macduff's grief scene" },
      { word: "Masculinity", def: "Socially constructed ideas about what it means to be a man" },
      { word: "Restoration", def: "The re-establishment of legitimate order after tyranny" },
    ],
    examTip:
      "Macduff's 'feel it as a man' line is one of the most quotable in the play for essays on gender. Use it to argue that Shakespeare presents **multiple versions of masculinity** — Macbeth's violent ambition, Lady Macbeth's weaponised masculinity, and Macduff's emotionally honest manhood — and that the play values the latter.",
  },
  {
    name: "King Duncan",
    textSlug: "macbeth",
    overview:
      "Duncan is the ideal monarch: generous, trusting, and divinely appointed. His murder is the play's inciting catastrophe — the act that disrupts the Great Chain of Being and unleashes chaos across Scotland. Shakespeare deliberately presents Duncan as virtuous to maximise the horror of regicide; he is less a fully developed character than a symbol of the order that Macbeth destroys.",
    themes: [
      {
        name: "Kingship & Tyranny",
        link: "Duncan embodies ideal, divinely sanctioned kingship — generous, trusting, and meek in power — serving as the benchmark against which Macbeth's tyranny is measured and condemned.",
      },
      {
        name: "Appearance vs Reality",
        link: "Duncan is tragically unable to read deception, admitting 'There's no art to find the mind's construction in the face', and his trusting nature makes him fatally vulnerable to those who perform loyalty while plotting murder.",
      },
      {
        name: "Moral Corruption",
        link: "Duncan himself is uncorrupted, but his murder is the act that corrupts everything around it — Scotland's political order, Macbeth's soul, and the natural world itself all unravel from this single crime.",
      },
      {
        name: "Guilt & Conscience",
        link: "Though Duncan never experiences guilt himself, his murder generates guilt in others — he is the source of the blood that Macbeth and Lady Macbeth can never wash from their hands or minds.",
      },
    ],
    arc: {
      label: "STATIC (SACRIFICIAL SYMBOL)",
      stages: [
        {
          title: "The Generous King",
          act: "Acts 1–2",
          description:
            "Rewards Macbeth with the title Thane of Cawdor, calls him 'valiant cousin', and stays at his castle in complete trust. His generosity and openness make him admirable but also vulnerable — he admits he cannot read treachery in faces: 'There's no art / To find the mind's construction in the face.'",
        },
        {
          title: "The Murdered Sovereign",
          act: "Act 2, Scene 2",
          description:
            "Killed offstage in his sleep — the most defenceless state possible. His murder is described through its effects (Macbeth's guilt, the unnatural omens) rather than shown directly, preserving his dignity and emphasising the cosmic horror of regicide.",
        },
      ],
    },
    keyQuotes: [
      {
        quote: "There's no art / To find the mind's construction in the face.",
        act: "Act 1, Scene 4",
        analysis:
          "Devastating dramatic irony: Duncan says this about the *previous* Thane of Cawdor's betrayal, unaware that the *new* Thane of Cawdor (Macbeth) is already plotting his murder. It encapsulates the play's theme that appearances can never be trusted.",
        themes: [
          {
            name: "Appearance vs Reality",
            link: "Duncan articulates the play's central problem — that outward appearance reveals nothing of inner intent — yet tragically fails to apply this lesson to the very man standing before him.",
          },
          {
            name: "Kingship & Tyranny",
            link: "The line reveals both Duncan's virtue (he trusts because he is trustworthy) and his vulnerability as king — his openness, admirable in a person, is a political weakness that a tyrant like Macbeth will exploit.",
          },
          {
            name: "Moral Corruption",
            link: "Duncan's inability to detect corruption reflects his own moral purity, but it also shows that goodness alone cannot protect against evil — the corrupt will always exploit the trusting.",
          },
        ],
      },
      {
        quote: "This castle hath a pleasant seat; the air / Nimbly and sweetly recommends itself.",
        act: "Act 1, Scene 6",
        analysis:
          "Duncan's appreciation of Macbeth's castle is laced with dramatic irony — the audience knows Lady Macbeth is inside planning his murder. The gentle language ('pleasant', 'sweetly') contrasts with the violence to come, and the image of welcoming domesticity concealing death reinforces the theme of appearance vs reality.",
        themes: [
          {
            name: "Appearance vs Reality",
            link: "The castle appears 'pleasant' and its air 'sweet', but the audience knows it conceals murder — Duncan's senses are completely deceived by the hospitable surface hiding lethal intent.",
          },
          {
            name: "Kingship & Tyranny",
            link: "Duncan's trusting arrival as a guest under Macbeth's roof invokes the sacred bond of hospitality, making the planned murder a triple violation: of kinship, of subject-king loyalty, and of the host-guest relationship.",
          },
          {
            name: "Guilt & Conscience",
            link: "Duncan's innocent appreciation deepens the guilt of his murder — Macbeth kills not a tyrant or a stranger but a trusting guest who praised his home, amplifying the moral horror that will haunt him.",
          },
        ],
      },
    ],
    relationships: [
      {
        character: "Macbeth",
        nature: "King & Subject",
        analysis:
          "Duncan trusts Macbeth completely, making the betrayal a violation of every bond: kinsman, subject, host. Macbeth himself catalogues these obligations in his Act 1 soliloquy, proving he murders with full awareness of the moral enormity.",
      },
      {
        character: "Malcolm",
        nature: "Heir",
        analysis:
          "Duncan names Malcolm as his successor (Prince of Cumberland), which Macbeth sees as an obstacle. Malcolm's eventual restoration completes a structural arc: legitimate kingship is temporarily disrupted but ultimately reasserted.",
      },
    ],
    writersMethods:
      "Shakespeare keeps Duncan **offstage during his murder** — we never see the act, only its aftermath. This choice preserves the sacral quality of kingship (the audience doesn't witness the violation of God's anointed) and focuses attention on the psychological effects on Macbeth. Duncan's **dramatic irony** — trusting the very people who will kill him — makes the audience complicit: we watch, knowing what he cannot, creating tension and moral discomfort.",
    wow: "Duncan embodies the medieval concept of the **king's two bodies** (theorised by Ernst Kantorowicz): the mortal body that can be killed and the political/divine body that represents cosmic order. His murder destroys the mortal body but cannot destroy the principle — which is why Malcolm's restoration at the end is inevitable. Macbeth's crime is not just murder but an assault on the divine order itself, which is why nature responds with 'unnatural' omens (darkness at noon, horses eating each other).",
    keyWords: [
      { word: "Regicide", def: "The killing of a king — the ultimate crime in the Jacobean worldview" },
      { word: "Divine right", def: "The belief that monarchs are appointed by God and answerable only to Him" },
      { word: "Great Chain of Being", def: "The Elizabethan/Jacobean hierarchy: God → King → Man → Animals → Plants" },
      { word: "Dramatic irony", def: "When the audience knows something a character does not" },
    ],
    examTip:
      "Duncan is best used in essays about **kingship** or **appearance vs reality**. Don't spend too long on him as a character — instead use him as a benchmark: his ideal kingship makes Macbeth's tyranny measurable. The contrast between Duncan's trust and Macbeth's paranoia is a powerful structural argument.",
  },
];
