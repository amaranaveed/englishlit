// ─── Writer's Toolkit — The Merchant of Venice (William Shakespeare) ───
import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const MERCHANT_VENICE_TOOLKIT: WritersToolkit = {
  textSlug: "merchant-venice",
  headerQuote: "If you prick us, do we not bleed?",
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
          label: "Legal language",
          example:
            '"Is it so nominated in the bond?" / "The pound of flesh which I demand of him / Is dearly bought; \'tis mine, and I will have it"',
          effect:
            "Shylock's insistence on the precise legal wording of the bond reveals his reliance on the letter of the law as his only protection in a society that denies him other forms of justice. It also foreshadows Portia's eventual defeat of him through the same rigid literalism.",
        },
        {
          label: "Commercial / mercantile imagery",
          example:
            '"My ventures are not in one bottom trusted" / "I am a tainted wether of the flock, / Meetest for death"',
          effect:
            "Venice is saturated with the language of trade, profit, and risk. Antonio's commercial metaphors reveal a world where human relationships are transactional — love, friendship, and marriage are all measured in economic terms.",
        },
        {
          label: "Religious language",
          example:
            '"The quality of mercy is not strained; / It droppeth as the gentle rain from heaven" / "The devil can cite Scripture for his purpose"',
          effect:
            "Both Christians and Shylock invoke religion to justify their positions. Portia's mercy speech draws on Christian theology, while Antonio's dismissal of Shylock as devilish exposes the way religion is weaponised to exclude and persecute the outsider.",
        },
        {
          label: "Metaphor",
          example:
            '"All that glisters is not gold" / "I hold the world but as the world, Gratiano; / A stage where every man must play a part, / And mine a sad one"',
          effect:
            "Shakespeare uses metaphor to explore the gap between appearance and reality — the casket inscription warns against superficial judgement, while Antonio's theatrical metaphor reveals his melancholy and sense of performing a role rather than living authentically.",
        },
        {
          label: "Simile",
          example:
            '"How like a fawning publican he looks!" / "The moon shines bright. In such a night as this, / When the sweet wind did gently kiss the trees"',
          effect:
            "Shylock's bitter simile reveals his contempt for Antonio's outward piety, seeing hypocrisy beneath the surface. In contrast, Lorenzo's lyrical similes in Act 5 create the harmonious Belmont world that Shylock is permanently excluded from.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?" / "If you poison us, do we not die?"',
          effect:
            "Shylock's devastating sequence of rhetorical questions forces the audience to confront the humanity they share with him. The questions are unanswerable — their very simplicity exposes the irrationality of prejudice.",
        },
        {
          label: "Repetition",
          example:
            '"My daughter! O my ducats! O my daughter!" / "I\'ll have my bond. Speak not against my bond"',
          effect:
            "Shylock's repetitions reveal his obsessive grief and determination. The intertwining of 'daughter' and 'ducats' has been used to mock him, but also reveals the depth of his loss — Jessica has taken both his wealth and his identity as a father.",
        },
        {
          label: "Antithesis",
          example:
            '"The quality of mercy is not strained" vs "My deeds upon my head! I crave the law" / "To bait fish withal; if it will feed nothing else, it will feed my revenge"',
          effect:
            "Shakespeare structures the play's central conflict through antithesis — mercy vs justice, love vs hate, Christian vs Jew, Belmont vs Venice. These oppositions drive the drama but also reveal that the boundaries between them are less clear than the Christian characters assume.",
        },
        {
          label: "Puns / wordplay",
          example:
            '"In sooth, I know not why I am so sad" (sooth = truth) / "Who chooseth me shall get as much as he deserves" / Portia\'s "gentle" punning on "Gentile"',
          effect:
            "Shakespeare's wordplay operates on multiple levels — Portia's pun on 'gentle/Gentile' when praising Bassanio subtly reinforces the play's religious divisions even in moments of apparent romance, revealing how deeply anti-Semitism is embedded in the language itself.",
        },
        {
          label: "Imperative verbs",
          example:
            '"Tarry a little; there is something else" / "Go in, Nerissa; / Give order to my servants" / "Proceed to judgement"',
          effect:
            "Commands reveal power dynamics — Portia's imperatives in the trial scene demonstrate her control over the courtroom and over Shylock's fate. Shylock's own imperatives ('Proceed to judgement') are those of a man who believes the law is on his side, making his defeat more devastating.",
        },
        {
          label: "Emotive language",
          example:
            '"You take my house when you do take the prop / That doth sustain my house; you take my life / When you do take the means whereby I live"',
          effect:
            "Shylock's emotionally charged language in the trial scene forces the audience to feel the weight of what is being taken from him. The escalating structure — house, life, means — reveals that the Christians' 'mercy' is in practice a systematic destruction of his entire existence.",
        },
        {
          label: "Prose vs verse",
          example:
            "Shylock often speaks in prose when conducting business; Portia and Bassanio speak verse in romantic scenes; Shylock shifts to verse in his 'Hath not a Jew eyes?' speech",
          effect:
            "Shakespeare uses the shift between prose and verse to signal emotional register. Shylock's move into verse during his most passionate speeches elevates his suffering to the level of tragic poetry, demanding the audience's empathy despite the play's comic framework.",
        },
        {
          label: "Irony",
          example:
            '"The Jew shall have all justice" / "Is that the law?" / Portia disguised as Balthasar: "Which is the merchant here, and which the Jew?"',
          effect:
            "Portia's ironic praise of justice to Shylock is devastating because she already knows how she will use the law against him. Her question about distinguishing merchant from Jew is deeply ironic — it suggests an equality that the play's society refuses to grant.",
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
          label: "Parallel plots (caskets / bond)",
          example:
            "The casket plot in Belmont and the bond plot in Venice run simultaneously and intersect when Portia intervenes in the trial",
          effect:
            "The two plots mirror each other thematically — both test the ability to see beyond surfaces. Bassanio must choose the humble lead casket; Portia must look beyond the letter of the law. The convergence in Act 4 fuses romance and justice into a single dramatic climax.",
        },
        {
          label: "Trial scene as climax",
          example:
            "Act 4, Scene 1 — the longest scene in the play, where all major conflicts converge in the courtroom",
          effect:
            "Shakespeare positions the trial as the structural and thematic centrepiece. Every tension — mercy vs justice, Christian vs Jew, letter vs spirit of the law — is resolved here. Its placement near the end leaves Act 5 to deal with the emotional aftermath.",
        },
        {
          label: "Dramatic irony",
          example:
            "The audience knows Portia is disguised as Balthasar, but Bassanio and Shylock do not; the audience knows the casket riddle's answer before each suitor chooses",
          effect:
            "Creates tension and complicity between audience and playwright — we watch Shylock walk into Portia's legal trap with full knowledge of what is coming, and our awareness deepens the scene's cruelty as well as its cleverness.",
        },
        {
          label: "Five-act structure",
          example:
            "Act 1: exposition (bond proposed); Act 2: complication (caskets, Jessica's flight); Act 3: crisis (Antonio's ships lost); Act 4: climax (trial); Act 5: resolution (Belmont reunion)",
          effect:
            "The classical five-act structure gives the play formal balance, but Shakespeare disrupts it — Shylock's devastating defeat in Act 4 casts a shadow over Act 5's comedy, making the resolution feel uneasy rather than triumphant.",
        },
        {
          label: "Belmont vs Venice contrast",
          example:
            "Scenes alternate between Venice's commercial, masculine world and Belmont's romantic, feminine space throughout Acts 1-3",
          effect:
            "The structural alternation establishes two opposed worlds — Venice is governed by law, commerce, and male competition; Belmont by love, music, and female wit. Yet the boundary is porous: Portia brings Belmont's values into Venice's courtroom.",
        },
        {
          label: "Rising tension",
          example:
            "Antonio's ships are reported lost one by one across Acts 2-3, while Shylock's rage intensifies after Jessica's elopement",
          effect:
            "Shakespeare builds tension incrementally — each report of lost ships tightens the bond's noose around Antonio, while Jessica's betrayal transforms Shylock from a wronged father into a figure seeking absolute revenge.",
        },
        {
          label: "Comic resolution",
          example:
            "Act 5 reunites the lovers in Belmont with the ring plot resolved through revelation and forgiveness",
          effect:
            "The comic ending formally fulfils the genre's requirements — marriages are confirmed, deceptions revealed, harmony restored. Yet Shylock's absence haunts the scene; the comedy is built on his exclusion, making the resolution deliberately incomplete.",
        },
        {
          label: "Ring plot",
          example:
            "Portia and Nerissa give rings to Bassanio and Gratiano, then reclaim them in disguise during the trial, creating a test of fidelity resolved in Act 5",
          effect:
            "The ring plot provides a comic counterpoint to the trial's gravity and allows Portia to demonstrate her power a second time — she controls the romantic resolution just as she controlled the legal one, proving her intellectual and moral superiority.",
        },
        {
          label: "Interwoven storylines",
          example:
            "Shylock's bond, the casket contest, Jessica and Lorenzo's elopement, and Launcelot's comic subplot all intersect and influence each other",
          effect:
            "The interlocking plots create a dense social world where every action has consequences for others — Jessica's theft fuels Shylock's vengeance, Bassanio's need for money creates the bond, and Portia's wealth ultimately resolves everything.",
        },
        {
          label: "Reversals",
          example:
            "Shylock goes from accuser to accused in the trial scene; Portia shifts from obedient daughter to controlling legal authority; Antonio moves from condemned man to victor",
          effect:
            "Shakespeare structures the play around sudden reversals of fortune — peripeteia — that expose the instability of power. Shylock's reversal is the most devastating: his demand for justice becomes the instrument of his own destruction.",
        },
        {
          label: "The letter device",
          example:
            "Letters report Antonio's lost ships and summon Bassanio back to Venice; Portia sends a letter revealing the truth about Balthasar",
          effect:
            "Letters function as structural pivots that redirect the plot — they carry news across the Belmont/Venice divide, creating urgency and forcing characters to make choices that reveal their true priorities.",
        },
        {
          label: "Act 5 pastoral resolution",
          example:
            '"In such a night as this" — Lorenzo and Jessica trade mythological references in moonlit Belmont, followed by music and the ring revelation',
          effect:
            "Act 5 shifts the play into pastoral mode, deliberately distancing the audience from the trial's violence. Yet the mythological lovers Lorenzo and Jessica reference — Troilus and Cressida, Pyramus and Thisbe — are all tragic, subtly undermining the harmony.",
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
            '"Hath not a Jew eyes?" (3.1) — Shylock speaks directly to the audience about his shared humanity and his motivation for revenge',
          effect:
            "Shylock's soliloquy is the play's most powerful moment of direct audience address. It bypasses the other characters' prejudice and forces a one-to-one confrontation between Shylock's humanity and the audience's assumptions, creating profound moral discomfort.",
        },
        {
          label: "Dramatic irony",
          example:
            "The audience knows Portia is Balthasar; Bassanio says he would sacrifice his wife to save Antonio while his disguised wife stands beside him: \"Your wife would give you little thanks for that\"",
          effect:
            "Creates layers of meaning — Portia's aside is simultaneously comic and revelatory. Bassanio's willingness to sacrifice his wife for Antonio exposes the homoerotic tensions in male friendship that the play both explores and contains.",
        },
        {
          label: "Disguise",
          example:
            "Portia disguises herself as the lawyer Balthasar; Nerissa as his clerk; Jessica disguises herself as a boy to elope with Lorenzo",
          effect:
            "Disguise allows women to exercise power in a patriarchal world — Portia can only enter the courtroom and wield legal authority by becoming male. The disguise reveals that gender is performed, not innate, and that women's exclusion from public life is arbitrary.",
        },
        {
          label: "Trial scene rhetoric",
          example:
            "Portia's mercy speech uses accumulation, metaphor, and appeals to divine authority: \"It is an attribute to God himself; / And earthly power doth then show likest God's / When mercy seasons justice\"",
          effect:
            "Portia's rhetoric is deliberately structured to seem like a genuine appeal for mercy before revealing itself as a legal trap. The beauty of the language makes the audience complicit in admiring a speech that is ultimately deployed to destroy Shylock.",
        },
        {
          label: "Casket test",
          example:
            "Three caskets — gold, silver, lead — each bearing an inscription. Morocco and Arragon choose wrongly; Bassanio chooses lead: \"Who chooseth me must give and hazard all he hath\"",
          effect:
            "The casket device dramatises the theme of appearance vs reality. The test rewards humility and the willingness to risk everything — qualities that mirror the play's moral argument but sit uneasily alongside Bassanio's materially motivated courtship.",
        },
        {
          label: "Comic relief",
          example:
            "Launcelot Gobbo's debate between his conscience and the devil about leaving Shylock's service (2.2); the confusion with his blind father Old Gobbo",
          effect:
            "Launcelot's comedy provides relief from the bond plot's tension but also mirrors its themes in a lower register — his moral debate parodies the play's serious ethical conflicts, and his treatment of Shylock casually reinforces the prejudice the play elsewhere questions.",
        },
        {
          label: "Prose vs verse",
          example:
            "Shylock speaks prose in business dealings but verse in emotional moments; the lovers speak verse in Belmont; Launcelot speaks prose throughout",
          effect:
            "The shift between prose and verse signals status, emotion, and dramatic register. Shakespeare grants Shylock verse at his most eloquent, ensuring the audience cannot dismiss him as merely a comic villain — his language rises to match his suffering.",
        },
        {
          label: "Asides",
          example:
            "Shylock: \"How like a fawning publican he looks! / I hate him for he is a Christian\" (1.3) / Portia on her suitors: \"God made him, and therefore let him pass for a man\" (1.2)",
          effect:
            "Asides create intimacy between character and audience, revealing true feelings concealed from other characters. Shylock's asides expose the hatred beneath his business manner; Portia's reveal her wit and judgement beneath her obedient-daughter persona.",
        },
        {
          label: "Audience address",
          example:
            '"If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge?"',
          effect:
            "Shylock's direct address breaks the boundary between stage and audience, implicating the viewers in the prejudice he describes. The escalating logic — from sympathy to revenge — forces the audience to follow his reasoning even as they may resist his conclusion.",
        },
        {
          label: "The bond as dramatic device",
          example:
            "The pound of flesh bond is agreed in Act 1 and hangs over the entire play, creating sustained tension until its resolution in Act 4",
          effect:
            "The bond functions as a dramatic time bomb — the audience knows it must be resolved, creating suspense that drives the plot forward. Its grotesque specificity (a pound of flesh from near the heart) makes the abstract conflict between mercy and justice viscerally physical.",
        },
        {
          label: "Cross-dressing (Portia / Nerissa)",
          example:
            "Portia and Nerissa adopt male identities to enter the Venetian courtroom, with Portia becoming the lawyer who determines the trial's outcome",
          effect:
            "Cross-dressing was a convention of Elizabethan theatre (where boys played women playing men), but Shakespeare uses it thematically — Portia's male disguise exposes the absurdity of excluding women from law and governance when she proves more capable than any man present.",
        },
        {
          label: "Public vs private spaces",
          example:
            "Venice's streets, Rialto, and courtroom are public, masculine spaces; Belmont's gardens and rooms are private, feminine spaces; the trial is the play's most intensely public moment",
          effect:
            "Shakespeare uses the contrast between public and private to explore power — Shylock's humiliation is deliberately public, maximising his shame. Belmont's privacy allows emotional honesty, but its exclusivity also represents privilege closed off from the wider world.",
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
          label: "Romantic comedy",
          example:
            "The play ends with three marriages (Portia/Bassanio, Nerissa/Gratiano, Jessica/Lorenzo), the reuniting of lovers, and the restoration of harmony in Belmont",
          effect:
            "The romantic comedy framework demands a happy ending — marriages, reconciliation, festivity. But Shylock's forced conversion and total loss complicate the genre: the comedy's happiness is built on the suffering of the outsider, forcing the audience to question what 'comedy' means.",
        },
        {
          label: "Problem play",
          example:
            "The play resists easy moral categorisation — Shylock is both villain and victim; the Christians are both merciful and cruel; the 'happy ending' is shadowed by injustice",
          effect:
            "Critics classify The Merchant of Venice as a 'problem play' because its moral ambiguity resists the neat resolution that comedy requires. The audience is left uncertain whether to celebrate or mourn, making the play a site of ongoing ethical debate.",
        },
        {
          label: "Tragicomic elements",
          example:
            "Shylock's trial scene has tragic weight — loss of daughter, wealth, religion, identity — embedded within the comic structure of the casket and ring plots",
          effect:
            "Shakespeare blends tragedy and comedy to create moral complexity. Shylock's story has the structure of tragedy (hubris, reversal, suffering), but it is contained within a comedy that denies him tragic dignity, making his treatment all the more disturbing.",
        },
        {
          label: "Trial / legal drama",
          example:
            "Act 4 is structured as a courtroom drama with prosecution, defence, judge, and a dramatic legal reversal when Portia invokes the 'alien' law",
          effect:
            "The trial scene borrows the conventions of legal drama — evidence, argument, verdict — but subverts them. The 'justice' delivered is legally dubious and morally questionable, exposing the law as an instrument of power rather than fairness.",
        },
        {
          label: "Fairy tale (casket plot)",
          example:
            "Three suitors, three caskets, a beautiful heiress, a test of worthiness — the casket plot follows the folk-tale pattern of three choices with the correct answer being the least obvious",
          effect:
            "The fairy-tale structure suggests a moral universe where virtue is rewarded and appearances are deceptive. But Shakespeare complicates it — Bassanio's 'virtue' is questionable given his financial motives, and Portia's father controls her from beyond the grave.",
        },
        {
          label: "City comedy",
          example:
            "Venice is a bustling mercantile city where commerce, law, and social status govern all relationships — the Rialto, the court, and the marketplace are central settings",
          effect:
            "The city comedy genre places money at the centre of human relationships. Shakespeare uses Venice's reputation as a cosmopolitan trading hub to explore how commerce shapes morality — in this world, even love and friendship have a price.",
        },
        {
          label: "Revenge narrative subversion",
          example:
            "Shylock pursues revenge through the legal system rather than through violence, and is ultimately defeated not by a hero but by a legal technicality",
          effect:
            "Shakespeare subverts the revenge tragedy convention — Shylock's revenge is legalistic, not violent, and his defeat comes through the law he trusted. This makes the Christians' victory feel less heroic and more like an exercise of institutional power against an individual.",
        },
        {
          label: "Pastoral (Belmont)",
          example:
            "Belmont is presented as an idyllic world of music, moonlight, love, and harmony, particularly in Act 5: \"How sweet the moonlight sleeps upon this bank!\"",
          effect:
            "Belmont functions as a pastoral retreat from Venice's commercial brutality. But the pastoral is idealised and exclusive — it is funded by inherited wealth, governed by a dead father's will, and accessible only to those who pass its tests. Its beauty conceals its privilege.",
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
          label: "The pound of flesh",
          example:
            '"A pound of man\'s flesh taken from a man / Is not so estimable, profitable neither, / As flesh of muttons, beefs, or goats"',
          effect:
            "The pound of flesh symbolises the dehumanising logic of commerce taken to its extreme — reducing a human body to a commodity. It also literalises the metaphorical violence that Antonio's contempt has inflicted on Shylock, making prejudice physically tangible.",
        },
        {
          label: "Caskets (gold / silver / lead)",
          example:
            "Gold: \"Who chooseth me shall gain what many men desire\"; Silver: \"Who chooseth me shall get as much as he deserves\"; Lead: \"Who chooseth me must give and hazard all he hath\"",
          effect:
            "The three caskets symbolise the theme of appearance vs reality. Gold represents superficial desire, silver represents self-regarding merit, and lead represents genuine sacrifice. The correct choice requires looking beyond surfaces — the play's central moral lesson.",
        },
        {
          label: "Rings",
          example:
            '"I give them with this ring, / Which when you part from, lose, or give away, / Let it presage the ruin of your love"',
          effect:
            "The rings symbolise fidelity, the binding nature of promises, and female power within marriage. Portia's ring test in Act 5 parallels the bond plot — both involve promises that must be kept. The rings give Portia ongoing power over Bassanio even within the patriarchal institution of marriage.",
        },
        {
          label: "Music and harmony",
          example:
            '"The man that hath no music in himself, / Nor is not moved with concord of sweet sounds, / Is fit for treasons, stratagems, and spoils"',
          effect:
            "Music symbolises cosmic and social harmony. Lorenzo's speech associates musicality with moral goodness and its absence with treachery. Belmont is filled with music; Venice is not. Significantly, Shylock says \"I am not bid for love\" — he is excluded from this harmony.",
        },
        {
          label: "Blood",
          example:
            '"If you prick us, do we not bleed?" / The bond demands flesh near Antonio\'s heart — blood is the implicit consequence',
          effect:
            "Blood symbolises shared humanity across religious and racial divides. Shylock's appeal to bleeding as proof of common humanity is the play's most powerful argument against prejudice. Portia's insistence that Shylock may take flesh but not blood exposes the law's capacity for cruel literalism.",
        },
        {
          label: "Money and usury",
          example:
            '"He lends out money gratis and brings down / The rate of usance here with us in Venice" / "I\'ll not answer that; / But say it is my humour"',
          effect:
            "Money permeates every relationship in the play — Bassanio needs it to woo Portia, Antonio borrows it for friendship, Shylock lends it for business. Usury (lending at interest) was condemned by Christians but practised by Jews who were barred from other professions, creating the economic basis for the play's anti-Semitism.",
        },
        {
          label: "The bond / contract",
          example:
            '"Go with me to a notary, seal me there / Your single bond; and, in a merry sport, / If you repay me not on such a day..."',
          effect:
            "The bond symbolises the tension between legal and moral obligation. Shylock's insistence on the contract's literal fulfilment mirrors a world governed by commercial agreements rather than human compassion. The bond also represents the social contract that Venice has broken with Shylock through years of abuse.",
        },
        {
          label: "Mercy vs justice",
          example:
            '"The quality of mercy is not strained; / It droppeth as the gentle rain from heaven / Upon the place beneath" vs "I crave the law, / The penalty and forfeit of my bond"',
          effect:
            "The central thematic opposition of the play. Portia argues that mercy transcends justice; Shylock demands strict legal enforcement. But the resolution is deeply ironic — the Christians show Shylock no mercy even as they preach it, exposing the gap between their rhetoric and their practice.",
        },
        {
          label: "Belmont vs Venice",
          example:
            "Venice: the Rialto, courtroom, commercial streets. Belmont: gardens, moonlight, music — \"In such a night / Did Jessica steal from the wealthy Jew\"",
          effect:
            "Venice and Belmont symbolise two worlds — commerce and romance, law and love, masculine competition and feminine grace. But the division is not clean: Belmont's wealth comes from commerce, and Venice's bonds are entangled with Belmont's marriages.",
        },
        {
          label: "Masks / disguise",
          example:
            "Jessica disguises herself to elope; Portia and Nerissa disguise themselves as men; the masque in Act 2 provides cover for Jessica's escape",
          effect:
            "Masks and disguise symbolise the gap between appearance and reality that runs through every level of the play. Characters must conceal their true identities to act freely, suggesting that Venice's social order suppresses authenticity and forces performance.",
        },
        {
          label: "The turquoise ring",
          example:
            '"It was my turquoise; I had it of Leah when I was a bachelor. I would not have given it for a wilderness of monkeys"',
          effect:
            "Shylock's turquoise ring — a gift from his dead wife Leah — is the play's most intimate symbol. Jessica's casual trading of it for a monkey reveals her cruelty and makes Shylock's grief deeply personal. It humanises him in a way the play's comedy tries to resist.",
        },
        {
          label: "Sight and blindness",
          example:
            '"All that glisters is not gold" / "O hell! What have we here? / A carrion Death, within whose empty eye / There is a written scroll" / Old Gobbo\'s literal blindness',
          effect:
            "The play is structured around acts of seeing and misjudging. Morocco is dazzled by gold; Arragon is blinded by self-worth; Old Gobbo cannot recognise his son. True sight — the ability to see beyond surfaces — is the quality the casket test rewards and the play demands of its audience.",
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
          label: "Mercy vs justice",
          example:
            "The play's central philosophical opposition — dramatised through Portia's mercy speech and Shylock's demand for legal enforcement of the bond",
          effect:
            "Shakespeare presents mercy and justice as irreconcilable in a prejudiced society. Portia's eloquent case for mercy is undermined by the Christians' refusal to extend it to Shylock — they preach divine mercy while practising human cruelty, exposing the hypocrisy at the play's heart.",
        },
        {
          label: "Anti-Semitism (Elizabethan context)",
          example:
            "Antonio spits on Shylock, calls him \"misbeliever, cut-throat dog\" and \"the devil\"; Shylock is forced to convert to Christianity as part of his 'merciful' punishment",
          effect:
            "The play both reflects and interrogates Elizabethan anti-Semitism. Shakespeare gives Shylock the most eloquent defence of Jewish humanity in Renaissance literature, yet also deploys anti-Semitic stereotypes. Modern audiences must grapple with whether the play critiques or perpetuates prejudice.",
        },
        {
          label: "Appearance vs reality",
          example:
            "The casket test, Portia's disguise, Jessica's conversion, Antonio's generosity masking control — throughout the play, surfaces conceal truths",
          effect:
            "Nothing in the play is what it seems. Gold caskets contain death, mercy speeches conceal legal traps, friendship masks possessiveness, and comedy contains cruelty. Shakespeare demands that audiences look beneath the surface — the same skill the casket test rewards.",
        },
        {
          label: "Patriarchal control",
          example:
            "Portia is bound by her dead father's will: \"I may neither choose who I would nor refuse who I dislike; so is the will of a living daughter curbed by the will of a dead father\"",
          effect:
            "Women in the play are controlled by fathers and husbands — Portia by her father's casket test, Jessica by Shylock's authority. Both women must use deception (disguise, elopement) to exercise agency, revealing that the patriarchal order forces women into subversion rather than granting them freedom.",
        },
        {
          label: "Outsider figure",
          example:
            "Shylock is an outsider by religion, profession, and social status — he is tolerated in Venice for his economic usefulness but excluded from its community: \"Sufferance is the badge of all our tribe\"",
          effect:
            "Shakespeare uses Shylock to explore the psychology of exclusion. The outsider is simultaneously essential to the society (its economy depends on him) and despised by it. Shylock's rage is the product of systematic dehumanisation — his villainy, the play implies, is Venice's creation.",
        },
        {
          label: "Wealth vs worth",
          example:
            "Bassanio is poor but chooses lead; Morocco is a prince but chooses gold; Portia's wealth attracts suitors but her worth lies in her intelligence and moral sense",
          effect:
            "The play repeatedly distinguishes between monetary value and human worth, but also reveals how inseparable they are. Bassanio's 'worthiness' is enabled by Antonio's money; Portia's power comes from her father's wealth. Shakespeare shows that in a mercantile society, worth cannot be separated from wealth.",
        },
        {
          label: "Christian hypocrisy",
          example:
            "Antonio preaches love but spits on Shylock; Portia preaches mercy but shows none; the Christians force conversion as an act of 'kindness': \"He is well paid that is well satisfied\"",
          effect:
            "Shakespeare systematically exposes the gap between Christian rhetoric and Christian practice. The characters who invoke divine mercy are the same ones who humiliate, dispossess, and forcibly convert Shylock — making their Christianity an instrument of power rather than compassion.",
        },
        {
          label: "Legal vs moral justice",
          example:
            "Shylock's bond is legally valid but morally monstrous; Portia's legal technicality is morally dubious but legally effective; the 'alien' law punishes Shylock for seeking legal redress",
          effect:
            "The play reveals that legal and moral justice are not the same thing. The law can be used to destroy as easily as to protect, and those with power shape the law to serve their interests. Shylock trusts the law because he has nothing else — its betrayal of him is the play's most devastating irony.",
        },
        {
          label: "Comedy and cruelty",
          example:
            "The play is formally a comedy — it ends in marriages and reunions — but its comic resolution depends on Shylock's humiliation, forced conversion, and total dispossession",
          effect:
            "Shakespeare forces the audience to confront the cruelty embedded in comedy itself. Laughter requires an object — someone must be excluded for others to celebrate. The play's comic structure becomes a critique of comedy, asking whether happiness built on another's suffering can be genuine.",
        },
        {
          label: "Otherness",
          example:
            "Shylock is marked as 'other' by his religion, his gaberdine, his profession, and his language; Morocco is dismissed partly for his complexion: \"Let all of his complexion choose me so\"",
          effect:
            "The play dramatises how societies construct otherness to define themselves. Venice needs Shylock to be 'other' so that it can define itself as Christian, generous, and civilised — but the play reveals that Venice's treatment of its others exposes its own moral failings.",
        },
        {
          label: "Assimilation and identity",
          example:
            "Jessica converts to Christianity and elopes with Lorenzo; Shylock is forced to convert at the trial: \"I am content\" — his final, ambiguous words",
          effect:
            "The play asks whether outsiders can truly be absorbed into the dominant culture or whether assimilation is always a form of erasure. Jessica's conversion costs her father and heritage; Shylock's forced conversion strips him of the identity that defines him. Neither assimilation is presented as liberation.",
        },
        {
          label: "Elizabethan attitudes to money-lending",
          example:
            "Antonio lends money interest-free as a Christian duty; Shylock charges interest (usury) as his livelihood: \"Thrift is blessing, if men steal it not\"",
          effect:
            "Shakespeare reflects the Elizabethan tension between the theological prohibition on usury and the economic necessity of credit. Antonio's 'generosity' in lending without interest is also a form of economic aggression that threatens Shylock's livelihood, revealing that even charity can be a weapon.",
        },
      ],
    },
  ],
};
