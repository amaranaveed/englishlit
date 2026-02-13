// ─── Writer's Toolkit — Much Ado About Nothing (William Shakespeare) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const MUCH_ADO_TOOLKIT: WritersToolkit = {
  textSlug: "much-ado",
  headerQuote:
    "I do love nothing in the world so well as you — is not that strange?",
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
          label: "Wit and wordplay (puns)",
          example:
            '"Are you yet determined today to marry with my brother\'s daughter?" — "I\'ll hold my mind, were she an Ethiope"',
          effect:
            "Shakespeare uses constant punning and rapid-fire wit to characterise Beatrice and Benedick's relationship as one built on intellectual equality — their verbal sparring masks genuine attraction beneath a performance of hostility.",
        },
        {
          label: "Prose vs verse",
          example:
            "Beatrice and Benedick speak almost entirely in prose, while Claudio and Hero frequently use verse",
          effect:
            "The distinction signals contrasting approaches to love — prose suggests naturalness, directness, and wit, while verse implies formality and romantic convention, hinting that Claudio's love may be more performative.",
        },
        {
          label: "Metaphor",
          example:
            '"She speaks poniards, and every word stabs"',
          effect:
            "Benedick's military metaphor equates Beatrice's speech with weaponry, revealing how her wit genuinely wounds his pride while also betraying his fascination with her verbal power.",
        },
        {
          label: "Simile",
          example:
            '"I stood like a man at a mark, with a whole army shooting at me"',
          effect:
            "Benedick compares himself to a target under fire, exaggerating his suffering at Beatrice's hands while the comedic hyperbole reveals his preoccupation with her — he protests too much.",
        },
        {
          label: "Hyperbole",
          example:
            '"I would eat his heart in the marketplace"',
          effect:
            "Beatrice's violent exaggeration after Hero's shaming reveals the depth of her fury and her frustration at being unable to act as a woman in a patriarchal society — her language exceeds what her gender permits her to do.",
        },
        {
          label: "Irony (dramatic and verbal)",
          example:
            '"I thank God and my cold blood, I am of your humour for that: I had rather hear my dog bark at a crow than a man swear he loves me"',
          effect:
            "Beatrice's verbal irony creates dramatic irony when she later falls for Benedick — Shakespeare invites the audience to enjoy the gap between her stated position and her true feelings.",
        },
        {
          label: "Malapropism (Dogberry)",
          example:
            '"Our watch, sir, have indeed comprehended two auspicious persons" (for apprehended / suspicious)',
          effect:
            "Dogberry's comic misuse of language creates humour through absurdity, but also generates dramatic irony — he possesses the truth that could save Hero, yet his incompetence with words delays justice.",
        },
        {
          label: "Military / battle imagery",
          example:
            '"In our last conflict four of his five wits went halting off" / "There is a kind of merry war betwixt Signior Benedick and her"',
          effect:
            "The language of warfare applied to courtship suggests love and conflict are intertwined in Messina — relationships are power struggles, and wit is the chosen weapon.",
        },
        {
          label: "Imagery of cuckoldry / horns",
          example:
            '"Pluck off the bull\'s horns and set them in my forehead" / "In time the savage bull doth bear the yoke"',
          effect:
            "Pervasive horn imagery reflects the male anxiety about female infidelity that drives the central conflict — Claudio's readiness to believe Hero unfaithful is rooted in this cultural fear.",
        },
        {
          label: "Animal imagery",
          example:
            '"If her breath were as terrible as her terminations, there were no living near her; she would infect to the North Star"',
          effect:
            "Animal and disease imagery used to describe women reveals the misogynistic undercurrent beneath the comedy — even witty characters casually dehumanise women through language.",
        },
        {
          label: "Emotive language",
          example:
            '"O, on my soul, my cousin is belied!" / "Is he not approved in the height a villain?"',
          effect:
            "Beatrice's passionate defence of Hero uses oaths and emotionally charged diction to contrast sharply with Claudio's cold, public denunciation — her loyalty is instinctive where his love proves conditional.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Is he not approved in the height a villain, that hath slandered, scorned, dishonoured my kinswoman?"',
          effect:
            "Beatrice's barrage of rhetorical questions in the church scene demands action from Benedick, testing whether his love will translate into loyalty — the questions are commands in disguise.",
        },
        {
          label: "Antithesis",
          example:
            '"I do love nothing in the world so well as you — is not that strange?"',
          effect:
            "Benedick's pairing of 'love' and 'nothing' in the same declaration captures the play's central paradox — the couple who professed to love nothing discover that nothing has become everything.",
        },
        {
          label: "Repetition",
          example:
            '"Kill Claudio" — repeated as a blunt demand after Benedick\'s declaration of love',
          effect:
            "The shocking brevity and repetition of 'Kill Claudio' shatters the romantic mood, revealing that for Beatrice, love must prove itself through action — affection without loyalty is worthless.",
        },
        {
          label: "Imperatives",
          example:
            '"Go to, I\'ll no more of thee" / "Come, bid me do anything for thee"',
          effect:
            "Commands pervade the dialogue, reflecting the constant negotiation of power — imperatives reveal who holds authority at any given moment and how relationships shift between dominance and submission.",
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
          label: "Parallel plots (Beatrice-Benedick / Hero-Claudio)",
          example:
            "Two courtships run simultaneously — one built on wit and resistance, the other on convention and appearance",
          effect:
            "The parallel structure invites comparison: Beatrice and Benedick's relationship, founded on honest exchange, proves more resilient than Claudio and Hero's, which collapses at the first deception.",
        },
        {
          label: "Eavesdropping / overhearing scenes",
          example:
            "Benedick overhears Don Pedro, Leonato, and Claudio praising Beatrice's love for him (Act 2, Scene 3); Beatrice overhears Hero and Ursula (Act 3, Scene 1)",
          effect:
            "These symmetrical gulling scenes are the structural engine of the comic plot — Shakespeare makes eavesdropping both the source of delight and the source of disaster, depending on who controls the information.",
        },
        {
          label: "Five-act comedy structure",
          example:
            "Exposition (arrival in Messina), rising action (gulling scenes), crisis (church scene), falling action (Dogberry's revelation), resolution (double wedding)",
          effect:
            "Shakespeare follows the classical five-act pattern but subverts audience expectations by pushing the comedy dangerously close to tragedy in Act 4 before restoring comic harmony.",
        },
        {
          label: "Rising action toward crisis (church scene)",
          example:
            "Tension builds through Don John's scheming until it erupts in Claudio's public shaming of Hero at the wedding altar (Act 4, Scene 1)",
          effect:
            "The church scene is the structural climax — it concentrates every theme (honour, appearance, deception, gender) into a single devastating moment that transforms the play's tone.",
        },
        {
          label: "Comic resolution and reconciliation",
          example:
            "The play ends with a double wedding, dancing, and the news of Don John's capture",
          effect:
            "The comic resolution restores social harmony but leaves questions unresolved — Claudio is never truly held accountable, suggesting the patriarchal order reasserts itself despite its failures.",
        },
        {
          label: "Dramatic irony (audience knows truth)",
          example:
            "The audience knows Hero is innocent while Claudio believes she is unfaithful; the audience knows Beatrice and Benedick are being gulled",
          effect:
            "Dramatic irony creates dual engagement — comedy in the gulling scenes (we enjoy watching characters fall for tricks) and anguish in the slander plot (we watch injustice unfold powerlessly).",
        },
        {
          label: "Deception as structural device",
          example:
            "Benevolent deception (gulling Beatrice and Benedick) mirrors malevolent deception (Don John's slander of Hero)",
          effect:
            "Shakespeare structures the entire play around deception to argue that the act itself is morally neutral — what matters is intention, making the play a study of how truth and lies function in society.",
        },
        {
          label: "Contrast and juxtaposition",
          example:
            "The joyful masked ball (Act 2) is juxtaposed with the devastating church scene (Act 4); Dogberry's comic incompetence runs alongside genuine tragedy",
          effect:
            "Juxtaposition heightens both comedy and pathos — the contrast prevents the audience from settling into one emotional register, creating the tonal instability that defines the play.",
        },
        {
          label: "Shift from comedy to near-tragedy",
          example:
            "The play pivots sharply in Act 4, Scene 1 when Claudio denounces Hero at the altar and she collapses",
          effect:
            "The generic shift forces the audience to confront the real consequences of the patriarchal honour code — what seemed like harmless romantic comedy reveals its capacity for genuine cruelty.",
        },
        {
          label: "Denouement (unmasking)",
          example:
            "Hero is revealed to be alive at the final wedding; Beatrice and Benedick's love poems are exposed",
          effect:
            "The final unmasking resolves the play's central preoccupation with appearance and reality — identity is revealed, truth is restored, and the masks both literal and figurative are removed.",
        },
        {
          label: "Messina as enclosed setting",
          example:
            "All action takes place within Leonato's household and its immediate surroundings in the Sicilian town of Messina",
          effect:
            "The enclosed setting creates a hothouse atmosphere where gossip, rumour, and overhearing become inevitable — Messina is a world where nothing stays private and reputation is constantly at risk.",
        },
        {
          label: "Interwoven subplots (Watch / Dogberry)",
          example:
            "The bumbling Watch accidentally discovers Don John's plot but cannot communicate the truth effectively until Act 5",
          effect:
            "The comic subplot delays the revelation of truth, prolonging the dramatic tension — Shakespeare uses Dogberry's incompetence to show that justice depends not just on evidence but on the ability to be heard.",
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
            "The audience watches Benedick hide in the arbour while Don Pedro, Claudio, and Leonato stage a conversation about Beatrice's 'hidden' love",
          effect:
            "Creates comic pleasure as the audience enjoys superior knowledge — we watch Benedick's resistance crumble in real time, knowing he is being deliberately manipulated by his friends.",
        },
        {
          label: "Asides and soliloquies",
          example:
            '"This can be no trick... they have the truth of this from Hero" — Benedick\'s soliloquy after the gulling scene (Act 2, Scene 3)',
          effect:
            "Soliloquies grant direct access to characters' shifting inner thoughts — Benedick's self-persuasion reveals how easily certainty dissolves when vanity is flattered.",
        },
        {
          label: "Eavesdropping scenes",
          example:
            "Borachio and Claudio at Hero's window (Act 3, Scene 3); the gulling of Benedick and Beatrice",
          effect:
            "Eavesdropping is the play's primary dramatic mechanism — Shakespeare stages scenes within scenes, making the audience watchers of watchers and collapsing the boundary between performance and reality.",
        },
        {
          label: "Prose vs blank verse",
          example:
            "Hero and Claudio shift to verse in formal or emotional moments; Beatrice and Benedick almost never leave prose",
          effect:
            "The choice of prose or verse signals emotional register — prose conveys wit, spontaneity, and authenticity, while verse can suggest either genuine feeling or rehearsed social performance.",
        },
        {
          label: "Stage directions and physical comedy",
          example:
            "Benedick hides 'in the arbour' to eavesdrop; Beatrice hides among the honeysuckle — both are visible to the audience while 'hidden' from other characters",
          effect:
            "Physical staging creates visual comedy that reinforces the theme of perception — characters who believe themselves unseen are in fact fully exposed, both to their friends and to the audience.",
        },
        {
          label: "Physical comedy (Dogberry and the Watch)",
          example:
            "Dogberry instructs the Watch to avoid confrontation: 'If you meet a thief, you may suspect him... to be no true man'",
          effect:
            "Dogberry's absurd instructions produce comic relief while creating frustrating dramatic irony — the characters best placed to prevent injustice are comically incapable of effective action.",
        },
        {
          label: "The masque / masked ball",
          example:
            "The masked dance in Act 2, Scene 1, where identities are hidden and characters speak freely under disguise",
          effect:
            "The masque dramatises the play's central concern with appearance versus reality — masks liberate characters to speak truths they otherwise suppress, revealing that disguise can paradoxically enable honesty.",
        },
        {
          label: "Public vs private speech",
          example:
            "Claudio denounces Hero publicly at the altar; Beatrice and Benedick confess love privately in the church",
          effect:
            "The contrast between public performance and private sincerity is structurally central — Claudio's public cruelty exposes the violence of patriarchal honour, while private confession enables genuine emotional truth.",
        },
        {
          label: "Overhearing as manipulation",
          example:
            "Don John orchestrates Claudio's observation of the window scene, controlling what Claudio sees and interprets",
          effect:
            "Shakespeare shows that seeing is not believing — perception can be staged and manipulated, warning the audience that evidence without context is unreliable.",
        },
        {
          label: "Double meanings and misunderstanding",
          example:
            "Margaret is mistaken for Hero at the window; Claudio misidentifies the masked Beatrice at the ball",
          effect:
            "Persistent misidentification reinforces the play's argument that surfaces are unreliable — characters repeatedly mistake appearance for truth, with consequences ranging from comic to devastating.",
        },
        {
          label: "The church scene as theatrical climax",
          example:
            "Act 4, Scene 1 — the longest and most emotionally intense scene, moving from public denunciation to private confession",
          effect:
            "Shakespeare concentrates the play's themes into a single dramatic set-piece — the church, a place of sacred truth, becomes the stage for the play's greatest lie and its most sincere declaration of love.",
        },
        {
          label: "Contrasting modes of comedy",
          example:
            "Witty verbal comedy (Beatrice and Benedick) runs alongside slapstick (Dogberry) and romantic comedy (Hero and Claudio)",
          effect:
            "Multiple comic registers prevent tonal monotony and allow Shakespeare to explore different social registers — wit belongs to the aristocratic characters, malapropism to the lower classes.",
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
          label: "Shakespearean comedy",
          example:
            "The play follows comic convention: confusion and conflict resolved through marriage, reconciliation, and the restoration of social order",
          effect:
            "The comic form promises resolution, but Shakespeare tests its limits — the church scene pushes so close to tragedy that the eventual reconciliation feels fragile rather than fully triumphant.",
        },
        {
          label: "Romantic comedy conventions",
          example:
            "Love at first sight (Claudio), witty antagonists who fall in love (Beatrice and Benedick), obstacles overcome, and a wedding ending",
          effect:
            "Shakespeare both employs and critiques romantic convention — Claudio's conventional love proves shallow, while Beatrice and Benedick's unconventional path proves more durable and honest.",
        },
        {
          label: "Tragicomic elements",
          example:
            "Hero's public shaming, her 'death', and Leonato's grief introduce genuinely tragic potential into the comic framework",
          effect:
            "The tragicomic blend forces the audience to reckon with real suffering within a comic world — Shakespeare refuses to let comedy excuse cruelty or make injustice merely entertaining.",
        },
        {
          label: "Pastoral setting (Messina)",
          example:
            "The Sicilian setting is idyllic and removed from the soldiers' battlefield — a place of leisure, feasting, and courtship",
          effect:
            "The pastoral setting creates an apparent paradise where the real dangers are social rather than military — the move from battlefield to garden shifts conflict from swords to words.",
        },
        {
          label: "Comic resolution through marriage",
          example:
            "The play concludes with two marriages: Hero and Claudio reunited, Beatrice and Benedick finally united",
          effect:
            "Marriage conventionally signals comic harmony restored, but the audience may question whether Claudio has earned his reconciliation — the resolution fulfils genre expectations while leaving moral questions open.",
        },
        {
          label: "The Watch as comic subplot",
          example:
            "Dogberry, Verges, and the Watch provide low-comedy scenes that run parallel to the main aristocratic plots",
          effect:
            "The Watch subplot creates both comic relief and dramatic irony — their accidental discovery of the truth contrasts with the aristocratic characters' deliberate manipulation of it.",
        },
        {
          label: "Masque tradition",
          example:
            "The masked ball in Act 2 and the masked wedding in Act 5 draw on the Renaissance court masque tradition of disguise and revelation",
          effect:
            "The masque tradition frames the play's exploration of identity — masks simultaneously conceal and reveal, suggesting that social performance is itself a kind of disguise that everyone wears.",
        },
        {
          label: "Social comedy of manners",
          example:
            "The play satirises aristocratic courtship rituals, male honour codes, and the social performance of wit",
          effect:
            "Shakespeare uses the comedy of manners to expose how social conventions — particularly around gender and honour — can become instruments of cruelty when appearance matters more than truth.",
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
          label: "Noting / Nothing (the pun in the title)",
          example:
            '"Nothing" was pronounced "noting" in Elizabethan English — the title puns on observation, eavesdropping, and the idea that fuss is made over nothing',
          effect:
            "The title encapsulates the entire play: characters make 'much ado' based on what they 'note' (observe), but their observations are frequently wrong — the greatest conflicts arise from misperception.",
        },
        {
          label: "Masks and disguise",
          example:
            "The masked ball (Act 2), Hero's veiled 'replacement' at the final wedding, and the metaphorical masks of wit worn by Beatrice and Benedick",
          effect:
            "Masks symbolise the gap between appearance and reality — characters hide behind physical and verbal disguises, and the play asks whether removing the mask reveals truth or simply another performance.",
        },
        {
          label: "The window / balcony",
          example:
            "Margaret appears at Hero's window, impersonating her and deceiving Claudio into believing Hero is unfaithful",
          effect:
            "The window becomes a symbol of deceptive appearances — what is seen from the outside does not reflect the truth within, dramatising the danger of judging by surfaces alone.",
        },
        {
          label: "Military imagery",
          example:
            '"There is a kind of merry war betwixt Signior Benedick and her" / "He hath borne himself beyond the promise of his age, doing in the figure of a lamb the feats of a lion"',
          effect:
            "Military language pervades the play because the men arrive from war — their martial habits of conquest and honour are transferred to courtship, where they prove destructive.",
        },
        {
          label: "Horns / cuckoldry",
          example:
            '"In time the savage bull doth bear the yoke" / "Pluck off the bull\'s horns and set them in my forehead"',
          effect:
            "The cuckold's horns symbolise male sexual anxiety and the fear of female betrayal — this obsessive motif reveals that patriarchal honour depends entirely on controlling women's bodies.",
        },
        {
          label: "The wedding",
          example:
            "Two weddings frame the play — the aborted wedding (Act 4) and the restored double wedding (Act 5)",
          effect:
            "The wedding symbolises social order — its disruption represents the breakdown of trust and honour, while its restoration signals (however imperfectly) the recovery of communal harmony.",
        },
        {
          label: "Hero's 'death' and resurrection",
          example:
            'The Friar proposes that Hero be reported dead: "Come, lady, die to live" — she is later \'reborn\' at the final wedding',
          effect:
            "Hero's symbolic death and resurrection echo religious imagery of sacrifice and redemption — she must 'die' to the false version of herself created by slander before she can be restored to truth.",
        },
        {
          label: "Overhearing / eavesdropping",
          example:
            "Characters repeatedly hide to listen — Benedick in the arbour, Beatrice behind the honeysuckle, Borachio observed by the Watch",
          effect:
            "Eavesdropping is both motif and mechanism — it represents the play's world of surveillance, gossip, and unstable knowledge, where truth depends entirely on the reliability of what is overheard.",
        },
        {
          label: "Light and dark",
          example:
            "Don John's villainy operates at night (the window scene occurs in darkness); the comedic gulling scenes take place in daylight gardens",
          effect:
            "Light and dark symbolise truth and deception — benevolent tricks happen in sunlight while malicious deception requires the cover of darkness, visually encoding the play's moral distinctions.",
        },
        {
          label: "The garden",
          example:
            "Both gulling scenes are set in Leonato's garden — an Edenic space of natural beauty and orchestrated deception",
          effect:
            "The garden evokes both paradise and the Fall — it is a place where characters are tempted into new knowledge about love, echoing the Garden of Eden where truth and deception first intertwined.",
        },
        {
          label: "Honour",
          example:
            "Leonato laments: 'Hath no man\'s dagger here a point for me?' — his honour depends entirely on his daughter's perceived chastity",
          effect:
            "Honour functions as a destructive social currency — it is gendered (men possess it, women embody it through chastity) and fragile, capable of being destroyed by mere accusation without evidence.",
        },
        {
          label: "Wit as weapon",
          example:
            '"Thou and I are too wise to woo peaceably" — Benedick acknowledges their verbal combat as a form of courtship',
          effect:
            "Wit symbolises both defence and connection — Beatrice and Benedick use language as armour against vulnerability, but their shared intelligence is ultimately what draws them together.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Explanation", "Application in Much Ado"],
      rows: [
        {
          label: "Noting vs Nothing",
          example:
            "The Elizabethan pun conflates observation ('noting') with insignificance ('nothing'), suggesting that perception creates meaning from emptiness",
          effect:
            "The entire plot arises from acts of noting — correct and incorrect observation drives every conflict, arguing that reality is not fixed but constructed by those who claim to witness it.",
        },
        {
          label: "Patriarchal honour",
          example:
            "Male honour in Messina depends on the sexual purity of female relatives — a woman's chastity is male property",
          effect:
            "Claudio's violent public rejection of Hero demonstrates how patriarchal honour codes reduce women to bearers of male reputation — Leonato's first response to the accusation is to wish Hero dead, not to defend her.",
        },
        {
          label: "Gender expectations (Elizabethan)",
          example:
            "Hero is praised for silence and modesty; Beatrice is considered 'too curst' and unfeminine for her outspokenness",
          effect:
            "Shakespeare contrasts two models of femininity to expose the double bind women face — Hero's obedient silence leaves her defenceless, while Beatrice's defiance is socially punished, yet ultimately both are constrained by patriarchal expectations.",
        },
        {
          label: "Appearance vs reality",
          example:
            "Don John's deception makes Hero appear guilty; the gulling scenes make Beatrice and Benedick appear loved; Dogberry appears foolish but holds the truth",
          effect:
            "Shakespeare systematically demonstrates that appearances are unreliable — every major plot development depends on the gap between what seems true and what is true, warning against hasty judgement.",
        },
        {
          label: "Social performance",
          example:
            "Beatrice and Benedick perform indifference to mask attraction; Claudio performs the role of Petrarchan lover; Don Pedro performs as matchmaker",
          effect:
            "Messina is a society of constant performance — Shakespeare suggests that social identity is theatrical, and the question is not whether we perform but whether our performances contain any truth.",
        },
        {
          label: "Comic catharsis",
          example:
            "The final scene releases accumulated tension through revelation, reconciliation, music, and dance",
          effect:
            "The comic catharsis provides emotional relief but is deliberately imperfect — Claudio's easy forgiveness and Don John's offstage capture leave the audience questioning whether justice has truly been served.",
        },
        {
          label: "Dramatic irony as audience power",
          example:
            "The audience consistently knows more than the characters — we know Hero is innocent, we know the gulling is staged, we know Dogberry has evidence",
          effect:
            "Shakespeare grants the audience godlike knowledge to generate both pleasure and frustration — superior awareness makes us complicit in the comedy while powerless to prevent the injustice.",
        },
        {
          label: "Metatheatre",
          example:
            "Characters constantly stage performances for each other — the gulling scenes, the masked ball, the window deception, and Hero's staged 'death' are all plays-within-the-play",
          effect:
            "Shakespeare draws attention to the constructed nature of all social interaction — if life in Messina is a series of staged performances, the audience is invited to question what is genuine in their own world.",
        },
        {
          label: "Wit as power",
          example:
            "Beatrice uses wit to claim intellectual space denied to women; Benedick uses it to resist social pressure to marry",
          effect:
            "Language is the primary currency of power in Messina — those who command words command attention, and Beatrice's wit is a radical act of female self-assertion in a patriarchal society.",
        },
        {
          label: "Convention vs subversion",
          example:
            "Hero and Claudio follow romantic convention (love at first sight, parental approval, formal courtship); Beatrice and Benedick subvert it at every turn",
          effect:
            "Shakespeare uses the conventional couple to expose the fragility of convention — obedience to social norms leaves Hero vulnerable, while Beatrice and Benedick's subversion produces a more resilient bond.",
        },
        {
          label: "Male honour code",
          example:
            "Claudio's challenge to fight, Leonato's challenge to Claudio, and Beatrice's demand 'Kill Claudio' all invoke the honour code",
          effect:
            "The male honour code demands violent action in response to perceived insult — Shakespeare critiques this system by showing how it escalates personal grievance into public destruction, threatening the entire community.",
        },
        {
          label: "Deception as both harm and help",
          example:
            "Benevolent deception unites Beatrice and Benedick; malevolent deception nearly destroys Hero; the Friar's deception (Hero's 'death') restores order",
          effect:
            "Shakespeare refuses to condemn deception outright, instead arguing that the morality of a lie depends on its purpose — the same mechanism that causes the play's greatest harm also produces its greatest joy.",
        },
      ],
    },
  ],
};
