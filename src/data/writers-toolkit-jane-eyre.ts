// ─── Writer's Toolkit — Jane Eyre (Charlotte Brontë) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const JANE_EYRE_TOOLKIT: WritersToolkit = {
  textSlug: "jane-eyre",
  headerQuote:
    "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
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
          label: "First-person confessional voice",
          example:
            '"I could not help it: the restlessness was in my nature; it agitated me to pain sometimes"',
          effect:
            "The confessional 'I could not help it' establishes an intimate, honest relationship with the reader — Jane admits her own flaws and longings without apology, creating a narrator who demands empathy through vulnerability rather than perfection.",
        },
        {
          label: "Gothic diction",
          example:
            '"A corridor in some Bluebeard\'s castle" / "the air was quite still, as if it held its breath"',
          effect:
            "The allusion to Bluebeard's castle introduces a fairy-tale register of hidden horrors and forbidden knowledge — the personification of air 'holding its breath' creates suspense and signals that Thornfield conceals a dangerous secret.",
        },
        {
          label: "Pathetic fallacy",
          example:
            '"The rain beat strongly against the panes" / "a livid, vivid spark leapt out of a cloud"',
          effect:
            "The external storm mirrors Jane's internal turbulence — Brontë uses weather to externalise emotion, making the natural world a barometer of her protagonist's psychological state and moral crises.",
        },
        {
          label: "Simile",
          example:
            '"I am no bird; and no net ensnares me" / "like a wild, frantic bird that is rending its own plumage in its desperation"',
          effect:
            "The bird simile is Jane's defining image — it captures her oscillation between entrapment and freedom, showing that her struggle is not merely social but existential, a fight for the right to be a fully autonomous self.",
        },
        {
          label: "Metaphor",
          example:
            '"Women feel just as men feel" / "a ridge of lighted heath... would have been a meet emblem of my mind"',
          effect:
            "The landscape-as-mind metaphor collapses the boundary between inner and outer worlds — Brontë argues that Jane's emotional life is as vast and powerful as nature itself, refusing the Victorian reduction of women to domestic feeling.",
        },
        {
          label: "Imagery of fire and ice",
          example:
            '"I seemed to have laid me down in the dried-up bed of a great river" / Rochester as "fire" vs St John as "ice"',
          effect:
            "Fire represents passion, desire, and authentic selfhood; ice represents repression, duty without love, and spiritual death — Brontë structures Jane's central choice between Rochester and St John through this elemental opposition.",
        },
        {
          label: "Bird imagery",
          example:
            '"If I were a very small and plain bird" / "a caged thing" / "I am no bird"',
          effect:
            "Birds recur as symbols of Jane's spirit — caged birds represent her confinement by class and gender, while free birds represent the independence she claims; the imagery tracks her moral and emotional growth across the novel.",
        },
        {
          label: "Religious language",
          example:
            '"The human and fallible should not arrogate a power with which the divine and perfect alone can be safely entrusted"',
          effect:
            "Jane uses religious language to claim moral authority against her social superiors — she positions herself as God's equal creation, using theology to dismantle the class hierarchy that would silence her.",
        },
        {
          label: "Emotive language",
          example:
            '"Unjust! — unjust!" said my reason, forced by the agonising stimulus into precocious though transitory power"',
          effect:
            "The exclamatory repetition of 'Unjust!' captures childhood rage with adult precision — the oxymoron of 'precocious though transitory power' shows Jane already analysing the relationship between emotion and agency.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Who blames me? Many, no doubt; and I shall be called discontented"',
          effect:
            "Jane anticipates and pre-empts her critics — the rhetorical question challenges the reader directly, daring them to condemn a woman for wanting more than domestic servitude and enforced contentment.",
        },
        {
          label: "Direct reader address",
          example:
            '"Reader, I married him" / "Gentle reader, may you never feel what I then felt!"',
          effect:
            "The direct address collapses the boundary between narrator and audience — 'Reader, I married him' places Jane as the active agent of her own story, asserting that she chose Rochester rather than being chosen by him.",
        },
        {
          label: "Imperative verbs",
          example:
            '"Speak I must" / "I will hold to the principles received by me when I was sane, and not mad — as I am now"',
          effect:
            "Jane's imperatives are directed at herself as much as others — 'Speak I must' inverts normal syntax to foreground the compulsion to speak, demonstrating that self-expression is a moral imperative, not a social luxury.",
        },
        {
          label: "Sensory imagery",
          example:
            '"The red glare of the nursery fire" / "the long hall, which was now almost dark, only lighted by the bronze lamp"',
          effect:
            "Brontë builds scenes through precise sensory detail — colour, light, and temperature create an atmosphere that is simultaneously realistic and emotionally charged, making Gothic spaces feel physically oppressive.",
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
          label: "Bildungsroman structure (five locations)",
          example:
            "Gateshead → Lowood → Thornfield → Moor House → Ferndean — each location represents a stage in Jane's moral and emotional development",
          effect:
            "The five-part geographical structure maps Jane's journey from dependent orphan to independent woman — each move is both a physical displacement and a moral education, so that the novel's plot is also its argument.",
        },
        {
          label: "First-person retrospective narration",
          example:
            '"I am glad you are no relation of mine: I will never call you aunt again as long as I live"',
          effect:
            "The adult Jane narrates with the emotional immediacy of her younger self — this dual perspective creates dramatic irony, allowing the reader to see both the child's raw feeling and the mature woman's understanding of its significance.",
        },
        {
          label: "Parallel characters",
          example:
            "Bertha as Jane's double / Helen Burns vs Jane / Rochester vs St John Rivers",
          effect:
            "Each parallel character represents a path Jane could take — Bertha is passion without restraint, Helen is faith without resistance, St John is duty without love; Jane's identity is defined by what she refuses to become.",
        },
        {
          label: "Gothic interruptions",
          example:
            "Bertha's laugh, the torn veil, the fire — eruptions of chaos into the domestic order of Thornfield",
          effect:
            "Gothic disruptions function as the return of the repressed — Bertha's intrusions shatter the romance plot's progress, insisting that secrets, lies, and colonial violence cannot be contained by domestic comfort.",
        },
        {
          label: "The revelation (Bertha Mason)",
          example:
            '"That is my wife" — Rochester\'s forced confession at the aborted wedding',
          effect:
            "The central structural pivot of the novel — everything before it builds toward this moment, and everything after it is shaped by Jane's response; the revelation tests whether Jane's principles can survive the destruction of her happiness.",
        },
        {
          label: "Dramatic irony",
          example:
            "The reader suspects Thornfield's secret before Jane does — the mysterious laughter, the fire, Grace Poole's evasions",
          effect:
            "Brontë builds suspense through accumulating clues that Jane cannot interpret — the reader's superior knowledge creates tension and positions Thornfield as a Gothic space where surfaces conceal horrifying truths.",
        },
        {
          label: "Foreshadowing",
          example:
            '"The great horse-chestnut at the bottom of the orchard had been struck by lightning in the night, and half of it split away"',
          effect:
            "The split chestnut tree foreshadows the destruction of Jane and Rochester's first attempt at union — nature itself warns that their relationship, built on concealment, cannot stand.",
        },
        {
          label: "Cyclical return",
          example:
            "Jane returns to Rochester at Ferndean, but now as his equal — she has money, family, and independence",
          effect:
            "The return is not repetition but transformation — Jane comes back to the same man under fundamentally different conditions, proving that love requires equality and that her departure was morally necessary.",
        },
        {
          label: "The letter and inheritance",
          example:
            "Jane inherits twenty thousand pounds from her uncle John Eyre and discovers the Rivers siblings are her cousins",
          effect:
            "The inheritance resolves both the economic and emotional plots simultaneously — Jane gains financial independence and a family, ensuring that her return to Rochester is a free choice rather than economic necessity.",
        },
        {
          label: "Supernatural elements (Rochester's voice)",
          example:
            '"Jane! Jane! Jane!" — she hears Rochester\'s voice calling across the moors',
          effect:
            "The disembodied voice operates on the boundary between the supernatural and the psychological — it is either a genuine miracle or the externalisation of Jane's deepest desire, and Brontë deliberately refuses to resolve the ambiguity.",
        },
        {
          label: "Rising independence arc",
          example:
            "Dependent child → resilient student → employed governess → fled lover → independent heiress → equal wife",
          effect:
            "Each stage increases Jane's autonomy — the arc is carefully calibrated so that she never gains independence through compromise, only through principled action and self-respect.",
        },
        {
          label: "Dual proposal structure",
          example:
            "Rochester's first proposal (built on deception) fails; St John's proposal (built on duty without love) is refused; Rochester's second proposal (built on equality) succeeds",
          effect:
            "The three proposals structure the novel's argument about love — Brontë tests and rejects two inadequate models (passion without honesty, duty without feeling) before arriving at the synthesis of equals that Jane requires.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  3. NARRATIVE TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Narrative Techniques",
      colour: "green",
      columns: ["Technique", "Example / Description", "Purpose / Effect"],
      rows: [
        {
          label: "First-person retrospective",
          example:
            '"There was no possibility of taking a walk that day" — the novel opens with the adult Jane recounting her childhood',
          effect:
            "The retrospective voice provides both emotional immediacy and reflective distance — Jane can convey the raw feeling of the child she was while simultaneously analysing its significance with the wisdom of the woman she has become.",
        },
        {
          label: 'Direct reader address ("Reader, I married him")',
          example:
            '"Reader, I married him. A quiet wedding we had" — the novel\'s most famous sentence',
          effect:
            "The active construction places Jane as subject, not object — she marries Rochester, not the other way around; this single sentence overturns the conventional marriage plot by asserting female agency at the moment of apparent submission to patriarchal tradition.",
        },
        {
          label: "Gothic atmosphere",
          example:
            '"Something gurgled and moaned... a demoniac laugh — low, suppressed, and deep"',
          effect:
            "Brontë creates Gothic atmosphere through sound, shadow, and suggestion — the 'demoniac laugh' invades the domestic space of Thornfield, transforming the romance plot into a horror narrative and signalling that the house conceals unspeakable secrets.",
        },
        {
          label: "Interior monologue",
          example:
            '"Feeling... clamoured wildly. \'Oh, comply!\' it said... But... Conscience... held passion by the throat"',
          effect:
            "Jane's interior monologues dramatise the conflict between passion and principle — Brontë personifies Feeling and Conscience as warring forces, showing that Jane's moral choices are not cold calculations but agonising internal battles.",
        },
        {
          label: "Pathetic fallacy as narrative tool",
          example:
            '"A Christmas frost had come at midsummer; a white December storm had whirled over June"',
          effect:
            "Brontë deploys seasonal inversion to convey emotional devastation — the metaphor of winter in summer captures the unnatural destruction of Jane's happiness at the moment of Bertha's revelation.",
        },
        {
          label: "Dreams and visions",
          example:
            '"During the past week... I have been the prey of visions... always of an infant" — Jane dreams of a child before the wedding',
          effect:
            "Dreams function as prophetic warnings in the novel — the recurring infant in Jane's dreams foreshadows catastrophe, drawing on folk superstition to create anxiety and embedding the supernatural within Jane's psychological realism.",
        },
        {
          label: "Dialogue as characterisation",
          example:
            '"Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?" — Jane to Rochester',
          effect:
            "Jane's speech defines her character more than any description — the stacking of self-deprecating adjectives ('poor, obscure, plain, and little') is a rhetorical strategy that demolishes its own premise, proving that moral dignity has nothing to do with social status.",
        },
        {
          label: "Shifting settings as moral journey",
          example:
            "Each setting (Gateshead, Lowood, Thornfield, Moor House, Ferndean) corresponds to a stage of moral development",
          effect:
            "Geography is moral allegory — Brontë constructs a landscape in which physical movement is inseparable from spiritual growth, so that Jane's journey across England is simultaneously a journey toward selfhood.",
        },
        {
          label: "Confession narrative",
          example:
            '"I have told you, reader, that I had learnt to love Mr. Rochester" — Jane confesses her feelings directly',
          effect:
            "The confessional mode creates radical intimacy — Jane speaks to the reader as she would to a trusted confidante, collapsing the distance between narrator and audience and making her emotional truth feel urgent and personal.",
        },
        {
          label: "Social commentary",
          example:
            '"Women are supposed to be very calm generally: but women feel just as men feel"',
          effect:
            "Brontë interrupts the narrative to deliver direct social critique — this passage breaks the fictional frame to address Victorian gender ideology, insisting that women's inner lives are as complex and urgent as men's.",
        },
        {
          label: "Intertextuality",
          example:
            "References to Bunyan's Pilgrim's Progress, the Bible, Bluebeard, fairy tales, and Milton's Paradise Lost",
          effect:
            "Brontë situates Jane's story within a rich tradition of spiritual and literary narratives — the allusion to Pilgrim's Progress frames Jane's journey as a moral pilgrimage, while Bluebeard connects Rochester's secret to a tradition of male violence and female curiosity.",
        },
        {
          label: "Unreliable / subjective narration",
          example:
            "Jane admits she cannot be objective about Rochester: \"I could not, in those days, see God for His creature: of whom I had made an idol\"",
          effect:
            "Jane's honesty about her own subjectivity paradoxically increases her reliability — by acknowledging her biases, she earns the reader's trust, while simultaneously demonstrating that all narration is shaped by desire and perspective.",
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
          label: "Bildungsroman",
          example:
            "A coming-of-age novel tracing Jane's growth from abused orphan to independent woman across five distinct settings",
          effect:
            "The Bildungsroman form insists that identity is made, not given — Jane's character is forged through experience, conflict, and moral choice, arguing that women are as capable of self-formation as men.",
        },
        {
          label: "Gothic novel",
          example:
            "Thornfield's dark corridors, mysterious laughter, the madwoman in the attic, fire, and supernatural occurrences",
          effect:
            "The Gothic mode allows Brontë to explore what Victorian realism cannot — repressed desire, female rage, colonial violence, and the dark underside of domesticity; Bertha is the Gothic secret that the romance plot tries and fails to contain.",
        },
        {
          label: "Romance",
          example:
            "The central love story between Jane and Rochester, structured around obstacles, separation, and eventual union",
          effect:
            "Brontë transforms the romance genre by insisting that love requires equality — Jane refuses to be a conventional romantic heroine who sacrifices selfhood for love, rewriting the genre's rules from within.",
        },
        {
          label: "Social realism",
          example:
            "Detailed depictions of Lowood Institution, the governess's social position, and class prejudice",
          effect:
            "The realistic portrayal of institutional cruelty (Lowood) and class exploitation (the governess trade) grounds the novel's Gothic and romantic elements in material social conditions, giving the fantasy emotional and political weight.",
        },
        {
          label: "Autobiography / confession",
          example:
            'Subtitled "An Autobiography" and narrated in the first person as a direct confession to the reader',
          effect:
            "The autobiographical frame collapses the distance between author and character — the subtitle invites readers to treat Jane's story as truth, creating an intimacy that is simultaneously literary technique and feminist strategy.",
        },
        {
          label: "Fairy tale elements (Cinderella)",
          example:
            "The orphan girl, the cruel surrogate family, the wealthy suitor, the magical inheritance, the happily-ever-after ending",
          effect:
            "Brontë both uses and subverts fairy-tale conventions — Jane is a Cinderella figure who rescues herself; the 'prince' is maimed and humbled before the ending can be earned, insisting that the fairy tale must be rewritten on feminist terms.",
        },
        {
          label: "Spiritual autobiography",
          example:
            "Jane's moral journey echoes Bunyan's Pilgrim's Progress — she passes through trials (the red room, Lowood, temptation) toward spiritual maturity",
          effect:
            "The spiritual autobiography form gives Jane's personal struggles universal significance — her journey is not merely individual but exemplary, a model of how to navigate the competing claims of passion, duty, and self-respect.",
        },
        {
          label: "Proto-feminist novel",
          example:
            '"Women feel just as men feel" — Jane\'s direct challenge to Victorian gender ideology',
          effect:
            "The novel functions as a proto-feminist manifesto embedded within a romance — Brontë uses narrative form to argue that women's intellectual, emotional, and sexual lives are as complex and legitimate as men's.",
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
          label: "The red room",
          example:
            "The room where Mr Reed died — Jane is locked in it as punishment; red evokes blood, anger, passion, and the womb",
          effect:
            "The red room is the novel's originary trauma — it represents unjust imprisonment, the suppression of female anger, and the Gothic enclosure that Jane must escape; every subsequent imprisonment (Lowood, Thornfield, Moor House) echoes it.",
        },
        {
          label: "Fire",
          example:
            "Rochester is associated with fire — 'his flaming and flashing eyes' / Bertha literally sets Thornfield ablaze",
          effect:
            "Fire symbolises passion, desire, and destruction — Rochester's fire is attractive but dangerous, while Bertha's arson is the ultimate return of the repressed, destroying the house built on deception and colonial exploitation.",
        },
        {
          label: "Ice / cold",
          example:
            '"Cold as an iceberg" — St John Rivers / Jane nearly freezes on the moors after leaving Thornfield',
          effect:
            "Ice represents emotional repression and spiritual death — St John's cold religious fervour is as dangerous to Jane as Rochester's fire; the novel argues that both extremes destroy the self.",
        },
        {
          label: "Birds / caged birds",
          example:
            '"I am no bird; and no net ensnares me" / Jane compares herself to "a wild, frantic bird"',
          effect:
            "Birds symbolise the female spirit — caged birds represent patriarchal confinement, while free birds represent the independence Jane claims; the image recurs at every stage of her journey, tracking her progress toward autonomy.",
        },
        {
          label: "The chestnut tree",
          example:
            '"The great horse-chestnut... had been struck by lightning in the night, and half of it split away"',
          effect:
            "The tree struck by lightning on the night of Rochester's proposal foreshadows the destruction of their premature union — its later regrowth symbolises the possibility of renewal after suffering and honest reckoning.",
        },
        {
          label: "Bertha Mason (the madwoman)",
          example:
            "The first Mrs Rochester, hidden in the attic — she tears Jane's wedding veil and eventually burns Thornfield to the ground",
          effect:
            "Bertha is Jane's dark double — she represents the rage, passion, and sexuality that Victorian society forces women to repress; her imprisonment literalises the patriarchal containment of female power.",
        },
        {
          label: "Thornfield Hall",
          example:
            "Rochester's manor house — grand but concealing a terrible secret in the attic; eventually destroyed by fire",
          effect:
            "Thornfield represents the attractive surface of patriarchal domesticity — it is comfortable and alluring but built on lies and colonial wealth; its destruction is necessary before an honest relationship can be built.",
        },
        {
          label: "The moors",
          example:
            "The wild, open landscape surrounding Thornfield and Moor House — Jane walks across them alone after leaving Rochester",
          effect:
            "The moors represent both freedom and danger — they are the opposite of domestic enclosure, offering Jane limitless space but also exposing her to physical peril; they symbolise the cost and exhilaration of independence.",
        },
        {
          label: "Eyes and sight",
          example:
            '"His eye... was dark, irate, and piercing" / Rochester is blinded in the fire and later partially recovers his sight',
          effect:
            "Eyes symbolise knowledge, power, and moral insight — Rochester's blindness is both punishment and purgation, stripping away his patriarchal authority and forcing him to depend on Jane, creating the equality their relationship requires.",
        },
        {
          label: "The veil",
          example:
            "Bertha tears Jane's wedding veil in two the night before the ceremony",
          effect:
            "The torn veil symbolises the destruction of illusion — it foreshadows the revelation that the marriage cannot proceed, and literalises the rending of the false surface that Rochester has constructed to hide his secret.",
        },
        {
          label: "Paintings and drawings",
          example:
            "Jane's watercolour paintings depict drowning figures, desolate landscapes, and a veiled woman — Rochester examines them closely",
          effect:
            "Jane's art externalises her inner life — her paintings reveal psychological depths that her social position does not permit her to express in speech, functioning as a visual language of the unconscious.",
        },
        {
          label: "Weather",
          example:
            "Storms accompany crises (the lightning on proposal night); sunshine marks resolution (the morning at Ferndean)",
          effect:
            "Weather is a moral and emotional barometer throughout the novel — Brontë uses pathetic fallacy structurally, so that the natural world validates or warns against Jane's choices at every turning point.",
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
          label: "Female independence",
          example:
            '"I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself"',
          effect:
            "Jane's declaration of self-respect is the novel's moral centre — she refuses to sacrifice integrity for love or security, arguing that a woman's first duty is to her own conscience and dignity.",
        },
        {
          label: "The governess figure",
          example:
            "Jane occupies the liminal space between family and servant — too educated for the kitchen, too poor for the drawing room",
          effect:
            "The governess embodies Victorian class anxiety — she exposes the instability of a system that values birth over merit, and her ambiguous position allows Brontë to critique class hierarchy from within its own structures.",
        },
        {
          label: "The madwoman in the attic",
          example:
            "Bertha Mason, imprisoned in the third storey of Thornfield — hidden, silenced, and eventually self-destructive",
          effect:
            "Gilbert and Gubar's feminist reading argues that Bertha is Jane's repressed self — the rage, sexuality, and creative fury that Victorian patriarchy forces women to deny; her imprisonment is the logical endpoint of a society that pathologises female autonomy.",
        },
        {
          label: "Class and social mobility",
          example:
            '"Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless?"',
          effect:
            "Jane's challenge to Rochester demolishes the equation of class with human worth — the listing of social disadvantages ('poor, obscure, plain, and little') is systematic, proving that she has considered every way society diminishes her and rejected them all.",
        },
        {
          label: "Religion (Brocklehurst vs Helen vs St John)",
          example:
            "Brocklehurst's punitive Calvinism, Helen Burns's passive Christian endurance, St John Rivers's cold missionary zeal",
          effect:
            "Brontë tests three models of Christianity and rejects all three as inadequate — Jane forges her own spiritual path, one that balances duty with feeling and faith with self-respect, arguing that authentic religion must serve human dignity.",
        },
        {
          label: "Colonialism (Bertha / Jamaica)",
          example:
            "Bertha Mason is a Creole woman from Jamaica — Rochester's wealth derives from colonial plantation money; Bertha is brought to England and confined",
          effect:
            "Postcolonial readings reveal that Jane's happy ending depends on the erasure of colonial violence — Bertha's 'madness' can be read as the product of displacement, racism, and patriarchal imprisonment, and Thornfield's destruction as the revenge of the colonised.",
        },
        {
          label: "Gothic doubling",
          example:
            "Bertha as Jane's double — both are imprisoned women who resist patriarchal control, but Bertha's resistance is coded as madness while Jane's is coded as virtue",
          effect:
            "The Gothic double exposes the arbitrary boundary between acceptable and unacceptable female behaviour — the difference between Jane and Bertha is not character but circumstance, suggesting that any woman pushed far enough could become the madwoman in the attic.",
        },
        {
          label: "Passion vs reason",
          example:
            '"Conscience, turned tyrant, held Passion by the throat" — Jane resists Rochester after the revelation',
          effect:
            "The personification of Conscience and Passion as warring physical forces dramatises the central conflict of the novel — Jane must reconcile feeling with principle, and the novel's resolution proves that neither can be sacrificed without destroying the self.",
        },
        {
          label: "Plain vs beautiful",
          example:
            '"Do you think me handsome?" "No, sir" — Jane\'s honest reply to Rochester',
          effect:
            "Brontë's insistence on Jane's plainness is a radical narrative choice — it refuses the convention that heroines must be beautiful, arguing instead that moral courage and intellectual honesty are more attractive than physical appearance.",
        },
        {
          label: "Equality in love",
          example:
            '"I am my husband\'s life as fully as he is mine" / "To be together is for us to be at once as free as in solitude, as gay as in company"',
          effect:
            "The novel's final vision of marriage is revolutionary — Brontë imagines a partnership of absolute equals, where neither party dominates; Rochester's blindness and dependence are necessary to level the power imbalance that his wealth and gender had created.",
        },
        {
          label: "Patriarchal control",
          example:
            "Rochester's attempted bigamy, St John's coercive proposal, Brocklehurst's institutional tyranny, John Reed's childhood bullying",
          effect:
            "Every male authority figure in the novel attempts to control Jane — Brontë constructs a systematic critique of patriarchy by showing its operation at every level of society, from the nursery to the church to the marriage altar.",
        },
        {
          label: "Self-respect and dignity",
          example:
            '"I still possessed my soul, and with it the certainty of ultimate safety" / "Laws and principles are not for the times when there is no temptation"',
          effect:
            "Jane's insistence on self-respect is tested most severely at the moment of greatest temptation — her refusal to become Rochester's mistress proves that principles exist precisely for the moments when breaking them would be easiest and most pleasurable.",
        },
      ],
    },
  ],
};
