// ─── Trait-Based Mind Map Data — Much Ado About Nothing ───

import type { CharacterMindMap } from "./mindmaps-inspector-calls";

export const MUCH_ADO_MINDMAPS: CharacterMindMap[] = [
  // ══════════════════════════════════════════════════════════
  //  1. BEATRICE
  // ══════════════════════════════════════════════════════════
  {
    name: "Beatrice",
    textSlug: "much-ado",
    traits: [
      // ── witty ──
      {
        trait: "witty",
        colour: "teal",
        quotes: [
          {
            quote: "I pray you, is Signior Mountanto returned from the wars?",
            who: "Beatrice",
            act: "Act 1, Scene 1",
            points: [
              "The **mocking nickname** 'Mountanto' (a fencing term for an upward thrust) reduces Benedick to a theatrical pose — Beatrice defines their relationship through **verbal combat** from the very first line she speaks.",
              "Her opening question is about **Benedick**, not the war — Shakespeare reveals her preoccupation with him even as she pretends disdain, establishing the central irony of the 'merry war'.",
              "The **military metaphor** foreshadows how their wit functions as emotional armour — Beatrice attacks to avoid vulnerability.",
            ],
          },
          {
            quote:
              "I would rather hear my dog bark at a crow than a man swear he loves me.",
            who: "Beatrice",
            act: "Act 1, Scene 1",
            points: [
              "The **animal imagery** ('dog bark at a crow') deliberately degrades romantic love to bestial noise — Beatrice performs contempt for courtship conventions.",
              "**Hyperbole** is her signature rhetorical weapon: the comparison is deliberately absurd, entertaining the audience while deflecting genuine feeling.",
              "For a **Jacobean audience**, a woman who openly rejects male courtship transgresses gender expectations — Shakespeare presents Beatrice as both admirable and dangerously unconventional.",
            ],
          },
          {
            quote:
              "There was a star danced, and under that was I born.",
            who: "Beatrice",
            act: "Act 2, Scene 1",
            points: [
              "The **celestial imagery** of a dancing star aligns Beatrice with joy and movement — she defines herself through vitality rather than the **passivity** expected of Elizabethan women.",
              "Shakespeare uses this to contrast Beatrice with Hero: where Hero is earthbound and silent, Beatrice claims a **cosmic** origin for her spirited nature.",
            ],
          },
        ],
      },
      // ── independent ──
      {
        trait: "independent",
        colour: "purple",
        quotes: [
          {
            quote:
              "I had rather hear my dog bark at a crow than a man swear he loves me.",
            who: "Beatrice",
            act: "Act 1, Scene 1",
            points: [
              "Beatrice's rejection of male declarations of love asserts her **autonomy** in a society where women's value was defined by marriage — she refuses to be a passive object of courtship.",
              "The repetition of this sentiment across Act 1 establishes it as a **fixed position** — making her later transformation all the more dramatically powerful.",
            ],
          },
          {
            quote:
              "Would it not grieve a woman to be overmastered with a piece of valiant dust?",
            who: "Beatrice",
            act: "Act 2, Scene 1",
            points: [
              "The word **'overmastered'** directly names patriarchal control — Beatrice articulates the power dynamic of Elizabethan marriage with startling clarity.",
              "'Piece of valiant dust' reduces male heroism to **mortality** and insignificance — the biblical echo ('dust to dust') undercuts masculine pride with memento mori.",
              "Shakespeare gives Beatrice a **proto-feminist** voice: she analyses and resists the structures of gender inequality rather than simply accepting them.",
            ],
          },
          {
            quote: "I will even take sixpence in earnest of the berrord and lead his apes into hell.",
            who: "Beatrice",
            act: "Act 2, Scene 1",
            points: [
              "The Elizabethan proverb that unmarried women 'lead apes into hell' is turned into a **joke** — Beatrice reclaims the insult, preferring damnation to a loveless marriage.",
              "Her willingness to accept **social stigma** rather than compromise her independence shows genuine conviction beneath the comic surface.",
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
            quote: "Kill Claudio.",
            who: "Beatrice",
            act: "Act 4, Scene 1",
            points: [
              "The **two-word imperative** is the most shocking line in the play — its brevity and violence cut through the preceding romantic dialogue like a blade.",
              "Beatrice channels her fury at Hero's shaming into a demand for **action** — she cannot fight Claudio herself because of her gender, so she weaponises Benedick's love as a tool of justice.",
              "Shakespeare compresses the play's themes of **honour, gender, and love** into two words: Beatrice exposes that in a patriarchal society, a woman's only recourse against male violence is through another man.",
            ],
          },
          {
            quote:
              "O that I were a man! I would eat his heart in the market-place.",
            who: "Beatrice",
            act: "Act 4, Scene 1",
            points: [
              "The **exclamatory 'O'** and the visceral image of eating Claudio's heart express rage that cannot be contained by polite language or social convention.",
              "'In the **market-place**' demands a public act of justice — mirroring Claudio's public shaming of Hero. Beatrice insists the punishment must be as visible as the crime.",
              "The repeated cry 'O that I were a man' reveals the **structural frustration** of her position: Beatrice has the moral clarity and courage to act, but patriarchal society denies her the means.",
            ],
          },
          {
            quote:
              "O God, that I were a man! What, bear her in hand until they come to take hands; and then, with public accusation, uncovered slander, unmitigated rancour — O God, that I were a man!",
            who: "Beatrice",
            act: "Act 4, Scene 1",
            points: [
              "The **tricolon** 'public accusation, uncovered slander, unmitigated rancour' builds through intensifying abstractions — Beatrice dissects Claudio's cruelty with forensic precision.",
              "The phrase **'bear her in hand'** (lead her on) captures the calculated deception: Claudio waited until the most public moment to humiliate Hero, maximising the damage.",
            ],
          },
        ],
      },
      // ── loyal ──
      {
        trait: "loyal",
        colour: "red",
        quotes: [
          {
            quote:
              "Is he not approved in the height a villain, that hath slandered, scorned, dishonoured my kinswoman?",
            who: "Beatrice",
            act: "Act 4, Scene 1",
            points: [
              "The **tricolon** 'slandered, scorned, dishonoured' builds in severity — Beatrice catalogues every dimension of the wrong done to Hero, refusing to let any part of it go unnamed.",
              "The possessive **'my kinswoman'** grounds her fury in personal loyalty — this is not abstract morality but fierce protection of family.",
              "Shakespeare positions Beatrice as Hero's **champion** in a world where the men who should defend her (Leonato, Claudio, Don Pedro) have failed or attacked her.",
            ],
          },
          {
            quote:
              "I love you with so much of my heart that none is left to protest.",
            who: "Beatrice",
            act: "Act 4, Scene 1",
            points: [
              "This declaration is remarkable for its **completeness** — 'so much... that none is left' offers total, unreserved love from a character who spent three acts performing emotional self-sufficiency.",
              "The word **'protest'** acknowledges that her instinct is to resist and argue — love has disarmed her rhetorical defences, and she admits it openly.",
              "Placed immediately after 'Kill Claudio', this line fuses **love and justice** — Beatrice's affection and her moral demands are inseparable.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "First appearance — asking after Benedick",
        act: "Act 1, Scene 1",
        points: [
          "Beatrice's **first words** in the play are about Benedick — Shakespeare immediately signals that her performed indifference conceals genuine interest, establishing the central dramatic irony.",
          "She enters into a public space dominated by male soldiers returning from war and immediately **commands the conversation** with wit, overturning the expected gender hierarchy of the scene.",
          "Her entrance establishes the **'merry war'** with Benedick as the emotional centre of the play — even the returning army is secondary to their verbal combat.",
        ],
      },
      {
        type: "entrance",
        moment: "Emerges from hiding after the gulling scene",
        act: "Act 3, Scene 1",
        stageDirection: "She steps out after Hero and Ursula exit.",
        points: [
          "Beatrice's **soliloquy** after overhearing that Benedick loves her marks her only moment of unguarded speech — 'Contempt, farewell! And maiden pride, adieu!' strips away her rhetorical armour.",
          "The shift from **prose to verse** signals a genuine emotional transformation — Shakespeare reserves verse for Beatrice's moments of sincerity, distinguishing them from her witty prose performances.",
          "Her willingness to change — 'Benedick, love on; I will requite thee' — contrasts with characters like Don John who are **fixed** in their nature. Beatrice's capacity for growth is presented as a moral strength.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  2. BENEDICK
  // ══════════════════════════════════════════════════════════
  {
    name: "Benedick",
    textSlug: "much-ado",
    traits: [
      // ── witty ──
      {
        trait: "witty",
        colour: "teal",
        quotes: [
          {
            quote:
              "I would my horse had the speed of your tongue, and so good a continuer. But keep your way, i' God's name; I have done.",
            who: "Benedick",
            act: "Act 1, Scene 1",
            points: [
              "The **horse metaphor** compares Beatrice's wit to an unstoppable physical force — Benedick concedes defeat in their exchange while pretending to withdraw voluntarily.",
              "'I have done' is a comic **surrender** — the audience sees that Beatrice consistently wins their verbal battles, undermining Benedick's performed masculine confidence.",
              "Shakespeare uses their **skirmishes** to demonstrate intellectual equality between the sexes — Benedick's wit is matched and exceeded by a woman's, a radical proposition for Elizabethan audiences.",
            ],
          },
          {
            quote:
              "I do much wonder that one man, seeing how much another man is a fool when he dedicates his behaviours to love... will, after he hath laughed at such shallow follies in others, become the argument of his own scorn by falling in love.",
            who: "Benedick",
            act: "Act 2, Scene 3",
            points: [
              "The **dramatic irony** is delicious: Benedick describes exactly what is about to happen to him. Shakespeare lets the audience enjoy his lack of self-awareness.",
              "The word **'argument'** (subject/topic) reveals that Benedick understands love as a narrative of humiliation — he fears becoming the butt of the joke he has been telling.",
              "This speech functions as **self-prophecy**: by articulating the pattern so precisely, Benedick demonstrates that he already recognises it in himself.",
            ],
          },
        ],
      },
      // ── honourable ──
      {
        trait: "honourable",
        colour: "purple",
        quotes: [
          {
            quote: "Enough, I am engaged; I will challenge him.",
            who: "Benedick",
            act: "Act 4, Scene 1",
            points: [
              "The word **'engaged'** carries a double meaning — both 'committed' to the challenge and 'betrothed' to Beatrice. Love and honour become **inseparable** in this single word.",
              "Benedick accepts Beatrice's demand to kill his closest friend — this choice elevates **moral justice** over male solidarity, making him the play's most genuinely honourable man.",
              "Shakespeare structures this as Benedick's **defining moment**: he chooses correctly where Claudio, Don Pedro, and Leonato all failed Hero.",
            ],
          },
          {
            quote: "You are a villain; I jest not.",
            who: "Benedick to Claudio",
            act: "Act 5, Scene 1",
            points: [
              "The emphatic **'I jest not'** is devastating because Benedick has been the play's primary jester — his refusal to joke signals absolute moral seriousness.",
              "Calling Claudio a **'villain'** publicly realigns the play's moral framework: the returning war hero is now the antagonist, and the former bachelor-comedian is the champion of justice.",
              "This confrontation costs Benedick his **male friendships** — Shakespeare shows that doing what is right requires sacrifice, not just conviction.",
            ],
          },
        ],
      },
      // ── transformative ──
      {
        trait: "transformative",
        colour: "amber",
        quotes: [
          {
            quote: "When I said I would die a bachelor, I did not think I should live till I were married.",
            who: "Benedick",
            act: "Act 2, Scene 3",
            points: [
              "The comic **self-contradiction** is delivered with cheerful shamelessness — Benedick acknowledges his hypocrisy and simply accepts it, refusing to pretend consistency.",
              "Shakespeare uses this to argue that **change is natural**: Benedick's willingness to abandon a fixed position is presented as wisdom, not weakness.",
              "The joke structure (setup/reversal) mirrors the play's larger movement from **resistance to acceptance** — comedy rewards those who can adapt.",
            ],
          },
          {
            quote: "The world must be peopled!",
            who: "Benedick",
            act: "Act 2, Scene 3",
            points: [
              "This famous exclamation reframes marriage as **social duty** rather than romantic surrender — Benedick gives himself a noble reason to do what his heart already wants.",
              "The **exclamatory tone** reveals comic self-deception: Benedick pretends his change of heart is rational philosophy when it is clearly emotional capitulation.",
              "Shakespeare's audience would recognise the Elizabethan anxiety about **dynastic continuity** — but the line's comedy lies in Benedick's transparent attempt to disguise desire as duty.",
            ],
          },
          {
            quote: "I do love nothing in the world so well as you — is not that strange?",
            who: "Benedick",
            act: "Act 4, Scene 1",
            points: [
              "The appended question **'is not that strange?'** shows Benedick is still astonished by his own feelings — his self-awareness survives his transformation, distinguishing genuine growth from blind infatuation.",
              "The superlative **'nothing in the world so well'** is absolute — from a character who vowed eternal bachelorhood, this represents a complete reversal spoken with vulnerable sincerity.",
            ],
          },
        ],
      },
      // ── vulnerable ──
      {
        trait: "vulnerable",
        colour: "red",
        quotes: [
          {
            quote:
              "But it is certain I am loved of all ladies, only you excepted; and I would I could find in my heart that I had not a hard heart, for truly I love none.",
            who: "Benedick",
            act: "Act 1, Scene 1",
            points: [
              "The **double negative** 'I would I could find in my heart that I had not a hard heart' is deliberately tangled — Benedick's syntax betrays the emotional confusion his bravado tries to conceal.",
              "'Only **you** excepted' singles Beatrice out — the exception reveals she occupies a unique position in his emotional landscape, distinct from the 'all ladies' he dismisses.",
              "The admission 'truly I love **none**' protests too much — Shakespeare ensures the audience hears vulnerability beneath the performance of indifference.",
            ],
          },
          {
            quote:
              "Shall quips and sentences and these paper bullets of the brain awe a man from the career of his humour?",
            who: "Benedick",
            act: "Act 2, Scene 3",
            points: [
              "The metaphor **'paper bullets of the brain'** dismisses wit as harmless — but Benedick is talking himself into emotional risk, which reveals how much mockery genuinely frightens him.",
              "This rhetorical question is Benedick **giving himself permission** to be vulnerable — he must argue down his own fear of ridicule before he can allow himself to love.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Return from war — immediately engages Beatrice",
        act: "Act 1, Scene 1",
        points: [
          "Benedick arrives as a **soldier** — his identity is defined by masculine camaraderie and military success. Shakespeare establishes this so that his later transformation into Beatrice's champion is dramatically significant.",
          "His first exchange with Beatrice is a **public performance** of mutual disdain that entertains the entire company — the audience recognises the pattern of attraction disguised as antagonism.",
          "His entrance alongside **Claudio** establishes a friendship that will be tested and ultimately broken by the play's events — Shakespeare pairs them so their moral choices can be contrasted.",
        ],
      },
      {
        type: "exit",
        moment: "Withdraws from male company after challenging Claudio",
        act: "Act 5, Scene 1",
        points: [
          "Benedick **leaves Don Pedro and Claudio** after publicly calling Claudio a villain — this exit physically separates him from his former allegiances.",
          "His departure from the male group mirrors his **emotional departure** from bachelor culture — Shakespeare uses staging to visualise Benedick's moral realignment from male solidarity to justice.",
          "The scene's comic aftermath (Don Pedro and Claudio mock him) shows that the patriarchal world **cannot comprehend** a man who prioritises a woman's honour over male friendship.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  3. HERO
  // ══════════════════════════════════════════════════════════
  {
    name: "Hero",
    textSlug: "much-ado",
    traits: [
      // ── virtuous ──
      {
        trait: "virtuous",
        colour: "teal",
        quotes: [
          {
            quote:
              "Is it not Hero? Who can blot that name with any just reproach?",
            who: "Friar Francis",
            act: "Act 4, Scene 1",
            points: [
              "The **rhetorical question** asserts Hero's innocence through her very name — 'Hero' carries connotations of nobility and courage, making the slander against her seem linguistically impossible.",
              "The Friar is the only male authority figure who **reads Hero correctly** — Shakespeare uses his clerical authority to validate what the audience already knows: Hero is innocent.",
              "The verb **'blot'** suggests an ink stain on a clean page — Hero's virtue is presented as a written record that Claudio's accusation tries but fails to destroy.",
            ],
          },
          {
            quote:
              "O God defend me, how am I beset! What kind of catechising call you this?",
            who: "Hero",
            act: "Act 4, Scene 1",
            points: [
              "The **religious language** ('God defend me', 'catechising') is significant — Hero frames her public humiliation as a spiritual trial, appealing to divine truth against human accusation.",
              "The word **'beset'** means surrounded by enemies — Hero recognises that the men who should protect her have become her attackers. The isolation is complete.",
              "Her question — 'what kind of catechising call you this?' — **refuses to accept** the terms of her accusation. Even in her most powerless moment, Hero challenges the legitimacy of the process.",
            ],
          },
        ],
      },
      // ── silent ──
      {
        trait: "silent",
        colour: "purple",
        quotes: [
          {
            quote: "She speaks poniards, and every word stabs.",
            who: "Benedick (about Beatrice)",
            act: "Act 2, Scene 1",
            points: [
              "This quote about Beatrice functions as a **negative mirror** for Hero — where Beatrice's speech is weaponised ('poniards', 'stabs'), Hero's characteristic silence marks her as the 'ideal' woman by Elizabethan standards.",
              "Shakespeare deliberately contrasts the two cousins to expose how **patriarchal society rewards female silence**: Hero is praised for her quietness, while Beatrice is called 'Lady Disdain'.",
              "The irony is that Hero's silence — her supposed virtue — **cannot defend her** when she is falsely accused. Her 'ideal' femininity becomes her vulnerability.",
            ],
          },
          {
            quote:
              "Is my lord well that he doth speak so wide?",
            who: "Hero",
            act: "Act 4, Scene 1",
            points: [
              "Hero's bewildered question in response to Claudio's public accusation shows her **incomprehension** — she cannot even parse what is happening because the accusation is so alien to her experience.",
              "The phrase **'speak so wide'** (speak so wildly/off the mark) is a gentle correction — even in crisis, Hero's language is measured and modest, contrasting sharply with Claudio's violent rhetoric.",
            ],
          },
        ],
      },
      // ── objectified ──
      {
        trait: "objectified",
        colour: "amber",
        quotes: [
          {
            quote: "Can the world buy such a jewel?",
            who: "Claudio",
            act: "Act 1, Scene 1",
            points: [
              "The **commodity metaphor** ('buy', 'jewel') reduces Hero to a valuable object to be acquired — Claudio's love language reveals that he sees courtship as a **transaction** rather than a relationship.",
              "Shakespeare embeds the cause of the later disaster in this early metaphor: if Hero is a 'jewel', she can also be a **counterfeit** — and Claudio's love, based on surface value, is easily deceived.",
              "The question is addressed to **Benedick**, not to Hero — Claudio seeks male validation of his choice rather than engaging with Hero herself, reflecting the patriarchal marriage market.",
            ],
          },
          {
            quote:
              "Give not this rotten orange to your friend.",
            who: "Claudio",
            act: "Act 4, Scene 1",
            points: [
              "The metaphor shifts from **'jewel' to 'rotten orange'** — Hero's value in Claudio's eyes is entirely determined by her perceived sexual purity. She is never a person, always a commodity.",
              "The word **'rotten'** implies corruption hidden beneath a beautiful surface — this is the appearance vs reality theme weaponised against an innocent woman.",
              "Claudio addresses **Leonato**, not Hero — even in the act of rejection, Hero is excluded from the conversation about her own fate. She is an object transferred between men.",
            ],
          },
        ],
      },
      // ── resilient ──
      {
        trait: "resilient",
        colour: "red",
        quotes: [
          {
            quote:
              "One Hero died defiled, but I do live, and surely as I live, I am a maid.",
            who: "Hero",
            act: "Act 5, Scene 4",
            points: [
              "The **past tense** 'died defiled' acknowledges the death of her former social identity — Hero distinguishes between the falsely accused version of herself and the living, innocent reality.",
              "The emphatic **'surely as I live, I am a maid'** links her survival to her truth — Hero asserts that her identity and her virtue have endured the ordeal intact.",
              "This is Hero's **most powerful line** — after an entire play of near-silence, she claims her own narrative. Shakespeare gives her the final word on her own honour.",
            ],
          },
          {
            quote:
              "And when I lived, I was your other wife; and when you loved, you were my other husband.",
            who: "Hero",
            act: "Act 5, Scene 4",
            points: [
              "The **parallel structure** ('when I lived... when you loved') creates a symmetry that is both beautiful and unsettling — Hero frames their reunion as a second chance, but the past cannot be erased.",
              "The word **'other'** is haunting: it suggests that both Hero and Claudio have become different people. Shakespeare leaves open whether this transformation is redemptive or merely convenient.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "exit",
        moment: "Hero faints at the altar after public shaming",
        act: "Act 4, Scene 1",
        stageDirection: "Hero swoons.",
        points: [
          "Hero's collapse is the play's most violent moment — her body does what her **silenced voice** cannot, physically manifesting the destruction caused by Claudio's accusation.",
          "The **swoon** occupies the boundary between life and death, enabling the Friar's plan for a faked death. Shakespeare uses Hero's physical vulnerability to create the plot's turning point.",
          "Leonato's response — 'Do not live, Hero' — shows her own father wishes her dead rather than dishonoured. Her 'exit' from consciousness mirrors her **exit from patriarchal protection**.",
        ],
      },
      {
        type: "entrance",
        moment: "Hero revealed alive at the second wedding",
        act: "Act 5, Scene 4",
        stageDirection: "Hero unmasks.",
        points: [
          "Hero's **unmasking** visually reverses the play's central theme of deception — where all other unmaskings have revealed ugliness (Don John's plot, Claudio's cruelty), this one reveals **truth and innocence**.",
          "She is the last character to 'enter' the resolution — Shakespeare delays her appearance to maximise the dramatic impact and ensure the audience feels the weight of her absence.",
          "The moment requires Claudio to accept a woman sight unseen — he must now marry on **faith** rather than appearance, reversing the superficiality that caused the disaster.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  4. CLAUDIO
  // ══════════════════════════════════════════════════════════
  {
    name: "Claudio",
    textSlug: "much-ado",
    traits: [
      // ── romantic ──
      {
        trait: "romantic",
        colour: "teal",
        quotes: [
          {
            quote:
              "In mine eye she is the sweetest lady that ever I looked on.",
            who: "Claudio",
            act: "Act 1, Scene 1",
            points: [
              "The phrase **'in mine eye'** reveals that Claudio's love is entirely **visual** — he never praises Hero's character, intelligence, or speech. His affection is based on appearance alone.",
              "The superlative **'sweetest lady that ever I looked on'** is conventional Petrarchan language — Shakespeare signals that Claudio performs courtship by the book rather than from genuine emotional depth.",
              "This visual love is precisely what Don John will exploit: if love enters through the **eye**, it can be destroyed by what the eye is shown.",
            ],
          },
          {
            quote:
              "Silence is the perfectest herald of joy; I were but little happy if I could say how much.",
            who: "Claudio",
            act: "Act 2, Scene 1",
            points: [
              "Claudio's claim that **silence** expresses his deepest emotion ironically echoes Hero's own silence — both are trapped in a courtship culture that values appearance over honest communication.",
              "The **paradox** (speaking to praise silence) reveals Claudio's reliance on rhetorical convention rather than authentic feeling — he knows what a lover should say rather than what he truly feels.",
            ],
          },
        ],
      },
      // ── jealous ──
      {
        trait: "jealous",
        colour: "purple",
        quotes: [
          {
            quote:
              "Let every eye negotiate for itself and trust no agent.",
            who: "Claudio",
            act: "Act 2, Scene 1",
            points: [
              "Claudio's declaration after mistakenly believing Don Pedro has wooed Hero for himself reveals **instant jealousy** — he leaps to the worst conclusion without evidence.",
              "The commercial language ('negotiate', 'agent') reduces love to a **business transaction** that can be stolen — Shakespeare shows Claudio views Hero as property rather than a person.",
              "This moment **foreshadows** the wedding scene: Claudio's readiness to believe the worst about those closest to him is a consistent character flaw, not an aberration.",
            ],
          },
          {
            quote:
              "Out on thee, seeming! I will write against it. You seem to me as Dian in her orb... But you are more intemperate in your blood than Venus.",
            who: "Claudio",
            act: "Act 4, Scene 1",
            points: [
              "The **mythological contrast** between Diana (chastity) and Venus (lust) frames Hero's alleged crime in the starkest possible terms — Claudio sees only extremes, never complexity.",
              "'Seeming' becomes his key accusation — but **Claudio himself** has been deceived by seeming throughout the play. Shakespeare turns his accusation into unconscious self-indictment.",
              "The rhetorical sophistication of this speech is notable: Claudio has **prepared** this public denunciation. His cruelty is not impulsive but calculated and theatrical.",
            ],
          },
        ],
      },
      // ── immature ──
      {
        trait: "immature",
        colour: "amber",
        quotes: [
          {
            quote:
              "I would scarce trust myself, though I had sworn the contrary, if Hero would be my wife.",
            who: "Claudio",
            act: "Act 1, Scene 1",
            points: [
              "Claudio admits he **cannot trust his own judgement** — this self-doubt, presented as modesty, actually foreshadows his catastrophic failure to trust Hero when tested.",
              "He needs **Don Pedro** to woo on his behalf — this dependence on male authority figures shows Claudio cannot act independently in matters of the heart. He is a soldier who cannot fight his own romantic battles.",
            ],
          },
          {
            quote:
              "She's but the sign and semblance of her honour.",
            who: "Claudio",
            act: "Act 4, Scene 1",
            points: [
              "The words **'sign and semblance'** both mean 'mere appearance' — the doubling reveals Claudio's obsession with surface. He can only understand honour as something that looks right, not something that is right.",
              "Shakespeare makes Claudio's accusation **philosophically ironic**: a man who fell in love with an image now condemns a woman for being nothing but an image.",
              "The phrasing reduces Hero to a **hollow signifier** — she becomes a symbol without substance in Claudio's rhetoric, stripped of her humanity.",
            ],
          },
        ],
      },
      // ── honour-driven ──
      {
        trait: "honour-driven",
        colour: "red",
        quotes: [
          {
            quote:
              "Sweet Hero, now thy image doth appear in the rare semblance that I loved it first.",
            who: "Claudio",
            act: "Act 5, Scene 3",
            points: [
              "Even in mourning, Claudio speaks of Hero's **'image'** and **'semblance'** — he still cannot distinguish between the woman and his idea of her. His love remains stubbornly visual.",
              "The word **'rare'** (precious, unusual) attempts to restore Hero's value after he destroyed it — but Shakespeare's audience may question whether Claudio's repentance is as superficial as his love.",
            ],
          },
          {
            quote:
              "Done to death by slanderous tongues was the Hero that here lies.",
            who: "Claudio",
            act: "Act 5, Scene 3",
            points: [
              "The epitaph acknowledges that **language killed Hero** ('slanderous tongues') — but Claudio fails to name himself as the primary slanderer, deflecting blame onto abstract forces.",
              "Shakespeare structures the tomb scene as a **ritual of public penance** — Claudio performs mourning as visibly as he performed accusation, raising the question of whether either performance was genuine.",
              "The word 'Hero' in the epitaph is both name and concept — 'the Hero that here lies' simultaneously mourns a person and admits that **heroism itself has been destroyed** by the events of the play.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Returns from war as a young hero",
        act: "Act 1, Scene 1",
        points: [
          "Claudio arrives as a **celebrated soldier** — Don Pedro praises his valour, establishing the martial honour that will become the standard by which he judges Hero. Shakespeare links military and sexual honour from the start.",
          "His first significant action is to ask about Hero's **beauty** and wealth — the audience immediately sees that his priorities are superficial, even as the play's characters celebrate him.",
          "Shakespeare pairs Claudio's entrance with Benedick's — the contrast between the self-aware bachelor and the conventional romantic is established physically through their shared arrival.",
        ],
      },
      {
        type: "exit",
        moment: "Claudio's night vigil at Hero's tomb",
        act: "Act 5, Scene 3",
        stageDirection: "Now, unto thy bones good night! Yearly will I do this rite.",
        points: [
          "The **tomb scene** is Claudio's most solemn moment — he exits the world of comedy into a ritualistic space of mourning, surrounded by darkness, candles, and funeral rites.",
          "His promise to perform this rite **'yearly'** is a vow of permanent penance — but Shakespeare's audience knows Hero is alive, giving the scene an ironic double register of genuine grief and unnecessary suffering.",
          "The scene functions as Claudio's **symbolic death and rebirth** — he must undergo this ritual before he can re-enter the comic world of marriage and reconciliation.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  5. DON JOHN
  // ══════════════════════════════════════════════════════════
  {
    name: "Don John",
    textSlug: "much-ado",
    traits: [
      // ── villainous ──
      {
        trait: "villainous",
        colour: "teal",
        quotes: [
          {
            quote: "I am a plain-dealing villain.",
            who: "Don John",
            act: "Act 1, Scene 3",
            points: [
              "The **oxymoron** 'plain-dealing villain' — honesty paired with evil — is Shakespeare's most economical character introduction. Don John defines himself through paradox.",
              "The first-person declaration **'I am'** claims villainy as an essential identity rather than a chosen behaviour — Don John presents himself as fundamentally unchangeable, the opposite of Benedick's transformative capacity.",
              "Shakespeare's audience would recognise the **Vice figure** from medieval morality plays — Don John inherits this theatrical tradition of self-announcing evil, making him more a dramatic function than a psychological character.",
            ],
          },
          {
            quote:
              "If I can cross him any way, I bless myself every way.",
            who: "Don John",
            act: "Act 1, Scene 3",
            points: [
              "The verb **'cross'** (obstruct, thwart) paired with 'bless' creates a **perverse inversion** of Christian morality — Don John finds spiritual satisfaction in others' suffering.",
              "His motivation is strikingly **vague** — 'any way' and 'every way' suggest that the specific method matters less than the act of destruction itself. Shakespeare presents Don John as motivated by generalised malice rather than clear grievance.",
            ],
          },
        ],
      },
      // ── envious ──
      {
        trait: "envious",
        colour: "purple",
        quotes: [
          {
            quote:
              "I had rather be a canker in a hedge than a rose in his grace.",
            who: "Don John",
            act: "Act 1, Scene 3",
            points: [
              "The **natural imagery** contrasts a 'canker' (wild, diseased rose) with a cultivated rose — Don John rejects the social order that places him in Don Pedro's shadow, preferring authentic ugliness to dependent beauty.",
              "The metaphor reveals **self-awareness**: Don John knows he is destructive and chooses that identity over the alternative of grateful subservience.",
              "Shakespeare uses this image to connect Don John to the play's **appearance vs reality** theme — the canker looks like a rose but destroys from within, exactly like his plot against Hero.",
            ],
          },
          {
            quote:
              "That young start-up hath all the glory of my overthrow. If I can cross him any way, I bless myself every way.",
            who: "Don John",
            act: "Act 1, Scene 3",
            points: [
              "Calling Claudio a **'young start-up'** reveals class resentment — Don John, the illegitimate brother of the prince, sees Claudio's rising favour as a personal affront.",
              "The phrase 'glory of **my overthrow**' refers to Don John's recent rebellion against Don Pedro — his grudge against Claudio stems from military defeat, connecting personal humiliation to his desire for revenge.",
            ],
          },
        ],
      },
      // ── isolated ──
      {
        trait: "isolated",
        colour: "amber",
        quotes: [
          {
            quote:
              "I am not of many words, but I thank you.",
            who: "Don John",
            act: "Act 1, Scene 1",
            points: [
              "In a play driven by **verbal excess** — wit, slander, eavesdropping, deception — Don John's self-described silence marks him as a fundamental outsider.",
              "The brief courtesy **'I thank you'** is performed rather than felt — Don John's few words are always strategic, never spontaneous. His economy of language is itself a form of deception.",
              "Shakespeare positions Don John's silence against Beatrice and Benedick's verbal abundance — he represents the **dark underside** of the play's comic energy.",
            ],
          },
          {
            quote:
              "I cannot hide what I am: I must be sad when I have cause, and smile at no man's jests.",
            who: "Don John",
            act: "Act 1, Scene 3",
            points: [
              "The claim **'I cannot hide what I am'** is ironic given that his entire plot depends on hiding the truth — Don John's self-presentation as honest is itself the most fundamental deception.",
              "His refusal to **'smile at no man's jests'** excludes him from the comic community — in a comedy, the character who refuses laughter is effectively refusing the genre itself.",
              "Shakespeare presents Don John as **emotionally fixed** — where Beatrice and Benedick grow, and even Claudio undergoes ritual transformation, Don John remains static. His rigidity is his defining limitation.",
            ],
          },
        ],
      },
      // ── destructive ──
      {
        trait: "destructive",
        colour: "red",
        quotes: [
          {
            quote:
              "Any bar, any cross, any impediment will be medicinable to me.",
            who: "Don John",
            act: "Act 2, Scene 2",
            points: [
              "The **triple repetition** ('any bar, any cross, any impediment') builds obsessively — Don John feeds on obstruction the way the lovers feed on courtship.",
              "The word **'medicinable'** (healing) inverts the natural order: destruction is his medicine, others' happiness is his disease. Shakespeare presents envy as a pathological condition.",
              "This line reveals that Don John's villainy is not about achieving a specific goal but about **the act of destruction itself** — he is a force of negation in a play about creation (of relationships, marriages, community).",
            ],
          },
          {
            quote:
              "Go but with me tonight, you shall see her chamber window entered.",
            who: "Don John",
            act: "Act 3, Scene 2",
            points: [
              "The invitation to **'see'** exploits the play's recurring problem: characters believe what they see rather than what they know. Don John weaponises the visual against truth.",
              "The sexual overtone of **'chamber window entered'** deliberately corrupts Hero's private space — Don John's plot transforms her bedroom from a place of innocence into evidence of guilt.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Silent arrival alongside Don Pedro's company",
        act: "Act 1, Scene 1",
        points: [
          "Don John enters with the victorious soldiers but speaks only **one line** — his physical presence is overshadowed by Don Pedro and Claudio's celebrations. Shakespeare stages his marginality.",
          "He has recently **rebelled** against his brother and been defeated — his entrance is under the terms of a fragile reconciliation, making his presence in Messina a condition of forced submission rather than welcome.",
          "The audience's first impression is of a **silent, brooding figure** amid comic festivity — Shakespeare visually establishes the threat that will disrupt the comedy.",
        ],
      },
      {
        type: "exit",
        moment: "Don John flees Messina after plot is uncovered",
        act: "Act 5, Scene 4",
        points: [
          "Don John's flight happens **offstage** — he is not even granted the dramatic dignity of a confrontation or confession. Shakespeare dismisses him from the comedy rather than defeating him within it.",
          "His capture is reported rather than shown: 'your brother John is ta'en in flight' — the brevity of this report reduces the villain to a **footnote** in the comic resolution.",
          "Shakespeare ensures the play's ending focuses on **love and reconciliation** rather than punishment — Don John's exit is deliberately anticlimactic because the comedy refuses to give villainy the final word.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  6. DON PEDRO
  // ══════════════════════════════════════════════════════════
  {
    name: "Don Pedro",
    textSlug: "much-ado",
    traits: [
      // ── authoritative ──
      {
        trait: "authoritative",
        colour: "teal",
        quotes: [
          {
            quote:
              "I will in the interim undertake one of Hercules' labours, which is to bring Signior Benedick and the Lady Beatrice into a mountain of affection the one with the other.",
            who: "Don Pedro",
            act: "Act 2, Scene 1",
            points: [
              "The **classical allusion** to Hercules frames matchmaking as heroic labour — Don Pedro elevates social manipulation to the status of mythological achievement.",
              "The verb **'undertake'** asserts control — Don Pedro positions himself as the architect of others' love lives, reflecting both his princely authority and his need to direct events.",
              "Shakespeare casts Don Pedro as a **benevolent manipulator** — his gulling of Beatrice and Benedick parallels Don John's deception of Claudio, raising uncomfortable questions about whether 'good' deception is truly different from bad.",
            ],
          },
          {
            quote:
              "I will assume thy part in some disguise and tell fair Hero I am Claudio.",
            who: "Don Pedro",
            act: "Act 1, Scene 1",
            points: [
              "Don Pedro offers to **impersonate Claudio** — this well-intentioned deception immediately establishes that in Messina, identities are fluid and truth is performed rather than fixed.",
              "The plan requires Hero to fall in love with a **disguised prince** — Shakespeare shows that even 'honest' courtship in this world begins with deception, complicating any simple moral division between good and evil characters.",
            ],
          },
        ],
      },
      // ── benevolent ──
      {
        trait: "benevolent",
        colour: "purple",
        quotes: [
          {
            quote:
              "I shall see thee, ere I die, look pale with love.",
            who: "Don Pedro",
            act: "Act 1, Scene 1",
            points: [
              "The prophecy to Benedick reveals Don Pedro's investment in his friends' happiness — his role as **matchmaker** is motivated by genuine affection, not just social power.",
              "The image of looking **'pale with love'** associates love with sickness — Don Pedro sees romantic love as an inevitable affliction, foreshadowing his own isolation at the play's end.",
            ],
          },
          {
            quote:
              "She were an excellent wife for Benedick.",
            who: "Don Pedro",
            act: "Act 2, Scene 1",
            points: [
              "Don Pedro recognises the compatibility between Beatrice and Benedick that they cannot see themselves — he functions as the **audience's surrogate**, articulating what is dramatically obvious.",
              "His matchmaking impulse is both generous and controlling — Shakespeare shows that even well-intentioned **authority** struggles to distinguish between helping others and directing their lives.",
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
              "I will teach you how to humour your cousin that she shall fall in love with Benedick.",
            who: "Don Pedro",
            act: "Act 2, Scene 1",
            points: [
              "The verb **'teach'** positions Don Pedro as a master of social engineering — he instructs others in the art of emotional manipulation with the confidence of expertise.",
              "The word **'humour'** (manage, indulge) treats Beatrice as someone to be handled rather than respected — even Don Pedro's benevolence carries an undercurrent of patriarchal control.",
              "This plan structurally **mirrors** Don John's plot: both involve staged performances designed to change someone's beliefs about another person. Shakespeare collapses the moral distance between hero and villain.",
            ],
          },
          {
            quote:
              "Come, lady, come; you have lost the heart of Signior Benedick.",
            who: "Don Pedro (masked)",
            act: "Act 2, Scene 1",
            points: [
              "Don Pedro speaks to Beatrice while masked — **concealed identity** enables him to probe her feelings without social consequence, demonstrating his comfort with deception as a social tool.",
              "The phrase 'lost the heart' playfully suggests that Beatrice once had Benedick's love — Don Pedro plants seeds of romantic possibility even in casual conversation, always **orchestrating**.",
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
            quote: "Prince, thou art sad; get thee a wife, get thee a wife!",
            who: "Benedick",
            act: "Act 5, Scene 4",
            points: [
              "This final direction to Don Pedro is the play's most **poignant moment** — amid the double wedding, the prince who orchestrated everyone else's happiness stands alone.",
              "Benedick's command 'get thee a wife' echoes Don Pedro's earlier matchmaking — the **role reversal** highlights that the prince gave love to others but kept none for himself.",
              "Shakespeare ends the comedy with an unresolved note of **melancholy**: Don Pedro's isolation suggests that authority and emotional fulfilment may be incompatible. The matchmaker cannot match himself.",
            ],
          },
          {
            quote:
              "Will you have me, lady?",
            who: "Don Pedro (to Beatrice)",
            act: "Act 2, Scene 1",
            points: [
              "Whether this proposal is a **joke or genuine** is deliberately ambiguous — Shakespeare allows the possibility that Don Pedro's matchmaking conceals his own romantic loneliness.",
              "Beatrice's rejection — 'No, my lord, unless I might have another for working days' — treats the prince as suitable only for **Sundays**: impressive but impractical. Her wit gently exposes the gap between his public authority and his private isolation.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Arrives as the conquering prince with his company",
        act: "Act 1, Scene 1",
        points: [
          "Don Pedro enters as the **highest-ranking figure** in the play — his arrival organises the social world of Messina around his authority. Every character's status is defined in relation to him.",
          "He brings both **Claudio (the hero) and Don John (the villain)** in his retinue — Shakespeare stages the prince as the unwitting carrier of both the comedy's romantic potential and its destructive threat.",
          "Leonato's effusive welcome establishes a relationship of **host and guest** that structures the entire play — the comedy unfolds in the temporary, carnival-like space created by Don Pedro's visit.",
        ],
      },
      {
        type: "entrance",
        moment: "The masquerade ball — Don Pedro in disguise",
        act: "Act 2, Scene 1",
        points: [
          "Don Pedro enters the ball **masked** — the masquerade is the play's central symbol of how identity in Messina is always performed, always potentially false.",
          "He woos Hero while disguised as Claudio — this **substitution** literalises the play's theme that love in this world is never direct but always mediated through deception, disguise, or proxy.",
          "The confusion that follows (Claudio believes Don Pedro has stolen Hero) shows how even **well-intentioned deception** generates misunderstanding — Shakespeare uses Don Pedro's masking to trigger the play's first crisis of trust.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  7. LEONATO
  // ══════════════════════════════════════════════════════════
  {
    name: "Leonato",
    textSlug: "much-ado",
    traits: [
      // ── patriarchal ──
      {
        trait: "patriarchal",
        colour: "teal",
        quotes: [
          {
            quote:
              "Hath no man's dagger here a point for me?",
            who: "Leonato",
            act: "Act 4, Scene 1",
            points: [
              "Leonato's first response to Hero's alleged dishonour is to wish for his own **death** — his identity as a father is so bound to his daughter's chastity that her supposed fall destroys him.",
              "The request for a **'man's dagger'** reveals that Leonato processes this crisis entirely through masculine codes of honour — his suffering is about his reputation as a patriarch, not Hero's suffering as a person.",
              "Shakespeare shows how **patriarchal honour** victimises the patriarch himself: Leonato is trapped in a system that makes his daughter's body the measure of his worth.",
            ],
          },
          {
            quote:
              "Do not live, Hero; do not ope thine eyes.",
            who: "Leonato",
            act: "Act 4, Scene 1",
            points: [
              "A father telling his daughter **not to live** is the play's most shocking line from an authority figure — Leonato's honour-bound worldview makes a daughter's death preferable to her perceived dishonour.",
              "The **imperative** 'do not live' mirrors Beatrice's later 'Kill Claudio' — both express rage through commands of death, but Leonato targets the victim while Beatrice targets the perpetrator.",
              "Shakespeare uses this moment to expose the **violence inherent in patriarchy**: the father who should protect his daughter becomes her most dangerous accuser.",
            ],
          },
        ],
      },
      // ── honour-bound ──
      {
        trait: "honour-bound",
        colour: "purple",
        quotes: [
          {
            quote:
              "Being that I flow in grief, the smallest twine may lead me.",
            who: "Leonato",
            act: "Act 4, Scene 1",
            points: [
              "The metaphor of being **led by a twine** reveals Leonato's total emotional collapse — the patriarchal authority figure is reduced to helpless passivity by the crisis of honour.",
              "The word **'flow'** suggests grief as an overwhelming current — Leonato is drowning in an honour code that offers no mechanism for questioning accusations or defending daughters.",
              "The Friar's intervention at this moment is crucial: **religious authority** must step in where patriarchal authority has failed, suggesting that the honour system is fundamentally broken.",
            ],
          },
          {
            quote:
              "If they wrong her honour, the proudest of them shall well hear of it.",
            who: "Leonato",
            act: "Act 5, Scene 1",
            points: [
              "Leonato's **belated defence** of Hero comes only after the Friar's plan and Dogberry's evidence convince him of her innocence — he needed proof before he could believe his own daughter.",
              "The threat to 'the **proudest** of them' targets Don Pedro and Claudio by rank — Leonato finally turns the honour code against Hero's accusers, but only once he is certain it supports his position.",
            ],
          },
        ],
      },
      // ── emotional ──
      {
        trait: "emotional",
        colour: "amber",
        quotes: [
          {
            quote:
              "I pray thee, cease thy counsel, which falls into mine ears as profitless as water in a sieve.",
            who: "Leonato",
            act: "Act 5, Scene 1",
            points: [
              "The **simile** 'water in a sieve' conveys the futility of rational advice against overwhelming grief — Leonato's pain cannot be contained by the structures of reason.",
              "This line is addressed to Antonio, who counsels patience — Shakespeare shows that Leonato's emotional nature, usually suppressed beneath patriarchal composure, erupts violently when his honour is wounded.",
            ],
          },
          {
            quote:
              "I myself would, on the rearward of reproaches, strike at thy life.",
            who: "Leonato (to Claudio)",
            act: "Act 5, Scene 1",
            points: [
              "Leonato threatens to **kill Claudio** — the elderly father challenging a young soldier to combat is both brave and absurd, revealing the desperation of a man with no other recourse.",
              "The phrase **'rearward of reproaches'** (following up verbal attacks with violence) shows Leonato escalating from words to action — his patriarchal authority has been publicly humiliated, and only blood can restore it.",
              "Shakespeare presents this confrontation with **sympathy**: Leonato's rage is genuine even if his method is impractical. He is a flawed father trying to right an overwhelming wrong.",
            ],
          },
        ],
      },
      // ── vulnerable ──
      {
        trait: "vulnerable",
        colour: "red",
        quotes: [
          {
            quote:
              "I know what you would say: if I have known her, you will say she did embrace me as a husband, and so extenuate the forehand sin. No, Leonato, I never tempted her with word too large.",
            who: "Claudio (to Leonato)",
            act: "Act 4, Scene 1",
            points: [
              "Claudio pre-empts Leonato's defence by **anticipating and dismissing** his arguments — the father is denied even the opportunity to speak for his daughter.",
              "Leonato's **silence** during much of Claudio's accusation is devastating — Shakespeare shows the patriarch rendered speechless by the very system he represents. His authority collapses under pressure from a higher-ranking accuser.",
            ],
          },
          {
            quote:
              "Confirmed, confirmed! O, that is stronger made which was before barred up with ribs of iron!",
            who: "Leonato",
            act: "Act 4, Scene 1",
            points: [
              "The repetition **'confirmed, confirmed'** shows Leonato accepting the accusation against Hero — he believes Claudio and Don Pedro over his own daughter because male honour carries more authority than female truth.",
              "The metaphor of something **'barred up with ribs of iron'** being made even stronger suggests Leonato's worst fears have been fortified into certainty — his vulnerability is that he trusts the patriarchal system more than his parental instinct.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Leonato welcomes Don Pedro's company to Messina",
        act: "Act 1, Scene 1",
        points: [
          "Leonato's role as **host** defines his entire function in the play — he provides the domestic space where the comedy unfolds, but he does not control what happens within it.",
          "His opening exchanges are full of social pleasantries and **hospitality** — Shakespeare establishes Leonato as a man whose identity is built on social performance and maintaining appearances.",
          "He introduces Hero to the company with paternal pride — his identity is **inseparable** from his daughter's reputation, which makes the later accusation scene a destruction of his public self as much as hers.",
        ],
      },
      {
        type: "exit",
        moment: "Leonato carries the unconscious Hero from the church",
        act: "Act 4, Scene 1",
        points: [
          "The image of a father carrying his collapsed daughter from her own wedding is the play's most **devastating visual moment** — it inverts the tradition of a father leading his daughter to the altar.",
          "This 'exit' from the public space of the church into the private space of grief marks Leonato's transition from **proud patriarch to broken father** — his social identity is destroyed alongside Hero's.",
          "Shakespeare uses this staging to show that the **honour system** harms everyone it touches: the father, the daughter, and the community that watches in silence. The church — a space of sacred truth — has become a theatre of lies.",
        ],
      },
    ],
  },
];
