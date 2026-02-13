// ─── Writer's Toolkit — Dr Jekyll and Mr Hyde (R.L. Stevenson) ───
import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const JEKYLL_HYDE_TOOLKIT: WritersToolkit = {
  textSlug: "jekyll-hyde",
  headerQuote: "Man is not truly one, but truly two.",
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
          label: "Gothic diction",
          example:
            '"The fog still slept on the wing above the drowned city"',
          effect:
            "Creates an oppressive, nightmarish atmosphere — verbs like 'slept' and 'drowned' personify London as a place of death and concealment, reflecting the moral darkness hiding beneath the city's respectable surface.",
        },
        {
          label: "Simile",
          example:
            '"Like a district of some city in a nightmare"',
          effect:
            "Compares Soho to a hellish dreamscape — the simile blurs the boundary between reality and nightmare, suggesting that Hyde's world exists in a liminal space where the normal rules of civilisation do not apply.",
        },
        {
          label: "Metaphor",
          example:
            '"If he be Mr Hyde... I shall be Mr Seek"',
          effect:
            "Utterson frames the pursuit of truth as a children's game — the metaphor reveals Victorian gentlemen's dangerous tendency to treat evil as an intellectual puzzle rather than a genuine moral threat.",
        },
        {
          label: "Personification",
          example:
            '"The wind made talking among the trees" / "the fog lifted a little and showed him a dingy street"',
          effect:
            "The natural world is given agency and menace — personification turns London's landscape into an active participant in concealment and revelation, mirroring the novella's theme of hidden truth.",
        },
        {
          label: "Pathetic fallacy",
          example:
            '"A great chocolate-coloured pall lowered over heaven" / "the wind was continually charging and routing these embattled vapours"',
          effect:
            "Weather mirrors the moral atmosphere — the darkness and fog that shroud London reflect the secrecy and moral corruption hidden within its respectable inhabitants.",
        },
        {
          label: "Semantic field of secrecy/concealment",
          example:
            '"Concealed," "hidden," "sealed," "locked," "buried," "private"',
          effect:
            "Language of concealment saturates the novella — the pervasive vocabulary of secrecy reflects Victorian society's dependence on repression, and the catastrophic consequences when hidden truths finally surface.",
        },
        {
          label: "Animal/bestial imagery",
          example:
            '"Ape-like fury" / "hissing" / "like a monkey" / "snarled aloud into a savage laugh"',
          effect:
            "Dehumanises Hyde through association with animals — reflects Victorian fears of Darwinian degeneration, suggesting that beneath the civilised human lurks a primitive, pre-evolutionary creature.",
        },
        {
          label: "Religious language",
          example:
            '"If ever I read Satan\'s signature upon a face, it is on that of your new friend" / "the ghost of some old sin"',
          effect:
            "Associates Hyde with the Devil and damnation — religious diction frames Jekyll's experiment not merely as scientific error but as a profound spiritual transgression against God's natural order.",
        },
        {
          label: "Sensory language",
          example:
            '"A closet was filled with wine; the plate was of silver, the napery elegant" / "the bones were audibly shattered"',
          effect:
            "Creates vivid contrasts between luxury and violence — sensory detail forces the reader to experience both the seductive comfort of Jekyll's world and the visceral horror of Hyde's brutality.",
        },
        {
          label: "Euphemism",
          example:
            '"Particulars were few and startling" / "some of the matters... not to be named"',
          effect:
            "Characters refuse to name what they suspect — euphemism is the linguistic tool of Victorian repression, where the unspeakable is evaded rather than confronted, allowing evil to flourish unchallenged.",
        },
        {
          label: "Repetition",
          example:
            '"Downright detestable" / "really and indeed" / "never, never"',
          effect:
            "Intensifies emotion and emphasis — repetition reveals characters' struggle to articulate the indescribable wrongness they sense in Hyde, reflecting the novella's theme that evil resists rational description.",
        },
        {
          label: "Emotive language",
          example:
            '"Cried the maid, and broke into hysterical whimpering" / "crushed in the press of the crowd, fighting to get back"',
          effect:
            "Heightens the reader's emotional response to violence — graphic, distressing language pierces the novella's otherwise controlled, gentlemanly tone, forcing confrontation with the horror that propriety tries to suppress.",
        },
        {
          label: "Scientific/medical lexis",
          example:
            '"Transcendental medicine" / "a tincture" / "the compound" / "the drug" / "dissolving bonds"',
          effect:
            "Frames the transformation in the language of Victorian science — the clinical vocabulary lends a disturbing credibility to Jekyll's experiment while also reflecting anxieties about science exceeding moral boundaries.",
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
          label: "Non-linear narrative",
          example:
            "The story opens in medias res with Utterson hearing about Hyde; the full truth is only revealed retrospectively through Lanyon's and Jekyll's accounts",
          effect:
            "Mirrors the process of uncovering a hidden truth — the fragmented chronology forces the reader to piece together the mystery just as Utterson does, creating suspense and reflecting the theme of concealment.",
        },
        {
          label: "Multiple narrators",
          example:
            "Utterson's third-person perspective, Lanyon's letter, Jekyll's full statement of the case",
          effect:
            "No single narrator possesses the complete truth — the shifting perspectives reflect Victorian society's inability to see the whole picture, and argue that identity is too complex for any one viewpoint to capture.",
        },
        {
          label: "Embedded narratives (letters/documents)",
          example:
            '"Dr Lanyon\'s Narrative" and "Henry Jekyll\'s Full Statement of the Case" are letters read after their authors\' deaths',
          effect:
            "Truth arrives too late to save anyone — the epistolary structure creates dramatic irony, as the reader receives the explanation only after the tragedy is irrevocable, emphasising the cost of Victorian secrecy.",
        },
        {
          label: "Delayed revelation",
          example:
            "Jekyll and Hyde are not confirmed as the same person until the final chapter",
          effect:
            "Sustains the central mystery across the entire novella — the delay forces the reader to experience the same disbelief and horror as the characters, making the revelation psychologically devastating.",
        },
        {
          label: "Mystery structure",
          example:
            "Utterson investigates Hyde's identity like a detective, gathering clues from witnesses and documents",
          effect:
            "Engages the reader as a fellow investigator — the detective-fiction structure reflects Victorian faith in rational inquiry while ultimately proving that some truths exceed rational comprehension.",
        },
        {
          label: "Dual setting (respectable facade / dark underbelly)",
          example:
            "Jekyll's grand front entrance on the square vs Hyde's blistered, neglected back door in the side street",
          effect:
            "The architecture of the house physically embodies duality — the respectable facade and the sinister rear entrance are literally two faces of the same building, just as Jekyll and Hyde are two faces of one man.",
        },
        {
          label: "Gothic frame narrative",
          example:
            "The main narrative is framed by Utterson's limited third-person perspective, with embedded first-person accounts within",
          effect:
            "Creates layers of mediation between the reader and the truth — the frame distances us from direct experience, reflecting how Victorian society placed propriety between itself and uncomfortable reality.",
        },
        {
          label: "Chapter progression",
          example:
            "From 'Story of the Door' (external observation) to 'Henry Jekyll's Full Statement' (internal confession)",
          effect:
            "Moves from public surface to private depth — the structural journey from external to internal mirrors the novella's thematic movement from respectable appearance to hidden truth.",
        },
        {
          label: "Withholding information",
          example:
            'Enfield says "I don\'t ask" and Utterson agrees "let us never refer to this again"',
          effect:
            "Characters actively suppress inquiry — the narrative structure mirrors Victorian culture's complicity in concealment, showing how silence enables evil to operate unchecked.",
        },
        {
          label: "Dramatic tension building",
          example:
            "Poole's visit to Utterson, the breaking down of the cabinet door, the discovery of Hyde's body",
          effect:
            "Tension escalates toward a climactic confrontation — the pacing accelerates in the final chapters, creating an almost unbearable momentum toward the revelation the reader both dreads and desires.",
        },
        {
          label: "Final confession structure",
          example:
            '"Henry Jekyll\'s Full Statement of the Case" — the last chapter is Jekyll\'s posthumous confession',
          effect:
            "The confession comes from beyond the grave — Jekyll can only tell the truth after death, arguing that Victorian society made honest self-disclosure impossible during life.",
        },
        {
          label: "Foreshadowing",
          example:
            'Jekyll\'s comment "the moment I choose, I can be rid of Mr Hyde" proves tragically ironic as he loses control',
          effect:
            "Creates dramatic irony and a sense of tragic inevitability — early assurances of control foreshadow catastrophic loss of it, warning that the desire to master one's darker nature may itself be a form of hubris.",
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
          label: "Narrative perspective shifts",
          example:
            "Shifts from Utterson's limited third-person to Lanyon's first-person horror to Jekyll's confessional first-person",
          effect:
            "Each shift brings the reader closer to the truth — the progression from detached observation to intimate confession mirrors the stripping away of Victorian propriety to expose raw psychological reality.",
        },
        {
          label: "Suspense and withholding",
          example:
            '"I have brought on myself a punishment and a danger that I cannot name"',
          effect:
            "Jekyll's refusal to explain creates unbearable tension — the withholding of information is both a narrative technique and a thematic statement about Victorian culture's dependence on secrecy.",
        },
        {
          label: "Setting as atmosphere",
          example:
            '"The dismal quarter of Soho... with its muddy ways, and slatternly passengers, and its lamps, which had never been extinguished or had been kindled afresh to combat this mournful reinvasion of darkness"',
          effect:
            "Soho becomes an externalisation of Hyde's moral character — Stevenson uses the Gothic tradition of expressive setting to create an environment where depravity feels inevitable and inescapable.",
        },
        {
          label: "The locked door/cabinet",
          example:
            'Jekyll locks himself in his cabinet; Utterson and Poole must break down the door: "Utterson, for God\'s sake, have mercy!"',
          effect:
            "The locked door is both literal barrier and psychological symbol — it represents the desperate attempt to keep the private self hidden, and the violent breaking-in dramatises the forcible exposure of truth.",
        },
        {
          label: "Witness testimony",
          example:
            "The maid's account of the Carew murder: \"she became aware of an aged beautiful gentleman\" and watched the attack from her window",
          effect:
            "The reader receives events through secondary witnesses rather than direct experience — the mediated testimony reflects how Victorian society understood scandal: through rumour, fragments, and horrified observation from a distance.",
        },
        {
          label: "Letters as revelation",
          example:
            "Lanyon's letter marked \"not to be opened till the death or disappearance of Dr Henry Jekyll\" / Jekyll's full statement",
          effect:
            "Letters deliver truth posthumously — the epistolary device creates dramatic irony and argues that in Victorian society, the truth could only be spoken after the consequences of silence had already destroyed the speaker.",
        },
        {
          label: "Gothic tropes",
          example:
            "Mysterious transformations, a hidden laboratory, screams in the night, a corpse discovered in a locked room",
          effect:
            "Deploys familiar Gothic conventions to explore psychological and social anxieties — the supernatural transformation literalises the duality that Stevenson argues exists within every outwardly respectable Victorian gentleman.",
        },
        {
          label: "The mirror",
          example:
            '"I was conscious of no repugnance, rather of a leap of welcome. This, too, was myself"',
          effect:
            "The mirror forces Jekyll to confront his other self — the moment of recognition dramatises the novella's central horror: that Hyde is not an alien intruder but an authentic part of Jekyll's identity.",
        },
        {
          label: "Transformation scenes",
          example:
            '"He put the glass to his lips and drank at one gulp... he reeled, staggered, clutched at the table... and there before my eyes — pale and shaken, and half fainting — stood Henry Jekyll"',
          effect:
            "Lanyon's eyewitness account of the transformation is the novella's most visceral scene — the physical horror dramatises the violence of splitting the self and the impossibility of containing dual identity.",
        },
        {
          label: "Urban Gothic landscape",
          example:
            '"Street after street, all lighted up as if for a procession and all as empty as a church" / "a nocturnal city... glide more stealthily through sleeping houses"',
          effect:
            "London is reimagined as a Gothic labyrinth — the empty, lamplit streets create a dreamlike space where respectability and depravity coexist, reflecting Stevenson's vision of the city as a site of hidden transgression.",
        },
        {
          label: "Time and season",
          example:
            "Events occur predominantly at night and in winter; the Carew murder happens under a full moon; fog pervades the investigation",
          effect:
            "Darkness and winter create an atmosphere of moral and psychological obscurity — the nocturnal setting reflects Hyde's association with the hidden, repressed underside of Victorian daylight respectability.",
        },
        {
          label: "Unreliable narration",
          example:
            "Jekyll's confession is self-serving, minimising his own culpability: \"It was Hyde, after all, and Hyde alone, that was guilty\"",
          effect:
            "Even in his final confession, Jekyll deflects blame onto Hyde — the unreliable narration reveals that the desire to separate oneself from one's worst actions persists even in the face of death, undermining the very division the novella critiques.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. NARRATIVE AND FORM
    // ══════════════════════════════════════════════════════════
    {
      title: "Narrative and Form",
      colour: "blue",
      columns: ["Form / Technique", "Description", "Effect"],
      rows: [
        {
          label: "Gothic novella",
          example:
            "A compact prose narrative employing supernatural transformation, urban darkness, and psychological terror within a tightly controlled structure",
          effect:
            "The novella form concentrates horror and moral inquiry — its brevity mirrors the compressed, repressed psyche of its protagonist, where enormous forces are contained within a dangerously small space.",
        },
        {
          label: "Detective fiction elements",
          example:
            "Utterson investigates Hyde's identity, interviews witnesses, examines evidence, and follows trails of clues through London's streets",
          effect:
            "Engages the reader in rational inquiry that ultimately fails — the detective-fiction framework promises that reason will uncover truth, but the supernatural revelation exceeds rational explanation, questioning Enlightenment confidence.",
        },
        {
          label: "Epistolary elements",
          example:
            "The final two chapters consist entirely of letters: Lanyon's narrative and Jekyll's full statement",
          effect:
            "Private written testimony becomes the only vehicle for truth — the epistolary form reflects a society where men cannot speak openly and must confide their secrets to sealed documents read only after death.",
        },
        {
          label: "Multiple perspectives",
          example:
            "Enfield's anecdote, Utterson's investigation, the maid's witness account, Lanyon's letter, Jekyll's confession",
          effect:
            "The truth is assembled from fragments like a broken mirror — no single perspective is sufficient, arguing that identity is too complex and too contradictory to be captured by any one point of view.",
        },
        {
          label: "First-person confession",
          example:
            '"Henry Jekyll\'s Full Statement of the Case" — an extended self-examination written as Jekyll loses control permanently',
          effect:
            "The confessional mode creates intimacy and horror simultaneously — the reader is drawn into Jekyll's psychology at the very moment it is disintegrating, producing both sympathy and revulsion.",
        },
        {
          label: "Frame narrative",
          example:
            "Utterson's third-person narrative frames and contains the first-person accounts of Lanyon and Jekyll",
          effect:
            "The frame creates distance and control — Utterson's measured, lawyerly perspective contains the explosive revelations within, just as Victorian respectability tried to contain the dangerous truths it feared.",
        },
        {
          label: "Allegory",
          example:
            "The entire narrative functions as an allegory of the duality of human nature and the dangers of repression",
          effect:
            "Transforms a sensational story into a moral and philosophical argument — the allegorical reading elevates the novella from Gothic entertainment to a profound exploration of what it means to be human.",
        },
        {
          label: "Victorian sensation fiction",
          example:
            "Combines elements of scandal, mystery, shocking revelation, and bourgeois anxiety in the tradition of Wilkie Collins and Mary Braddon",
          effect:
            "The sensation genre allowed Stevenson to explore taboo subjects under the guise of entertainment — the thrilling plot delivers serious psychological and social critique to a mainstream Victorian readership.",
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
          label: "The door",
          example:
            '"The door, which was equipped with neither bell nor knocker, was blistered and distained"',
          effect:
            "The neglected back door is the entrance to Jekyll's hidden life — it symbolises the boundary between respectability and transgression, public facade and private truth, and the ease with which one can cross between them.",
        },
        {
          label: "The mirror",
          example:
            '"I stole through the corridors... and coming to my room, I saw for the first time the appearance of Edward Hyde"',
          effect:
            "The mirror forces self-confrontation — Jekyll's first sight of Hyde reflects the novella's insistence that we must look at what we truly are, not what we wish to appear.",
        },
        {
          label: "The potion/chemicals",
          example:
            '"The mixture, which was at first of a reddish hue, began... to brighten in colour, to effervesce audibly, and to throw off small fumes of vapour"',
          effect:
            "The potion symbolises the dangerous allure of science without moral constraint — its vivid, almost alchemical description blurs the line between rational chemistry and supernatural transformation.",
        },
        {
          label: "Hyde's appearance",
          example:
            '"He gives a strong feeling of deformity, although I couldn\'t specify the point" / "something troglodytic"',
          effect:
            "Hyde's indescribable wrongness symbolises evil's resistance to rational categorisation — the inability to pin down his deformity reflects Victorian anxiety that moral corruption might be invisible to the civilised eye.",
        },
        {
          label: "Jekyll's house (front vs back)",
          example:
            "The grand front door on the square faces a 'certain sinister block of building' at the rear — they are the same structure",
          effect:
            "The house is a physical map of duality — the respectable Georgian facade and the decayed laboratory entrance are architecturally one, just as Jekyll and Hyde are psychologically one.",
        },
        {
          label: "Fog/darkness",
          example:
            '"A great chocolate-coloured pall lowered over heaven... then the wind would... unveil the next moment a haggard shaft of daylight"',
          effect:
            "Fog represents moral obscurity and the concealment of truth — its intermittent lifting mirrors the partial, frustrating glimpses of truth that the characters and reader receive throughout the novella.",
        },
        {
          label: "The will/testament",
          example:
            'Jekyll\'s will leaving everything to Hyde "in case of Dr Jekyll\'s disappearance or unexplained absence for any period exceeding three calendar months"',
          effect:
            "The will is a legal document that formalises the impossible — it symbolises Jekyll's attempt to legitimise his double life through the very institutions (law, property) that his experiment transgresses.",
        },
        {
          label: "The cane",
          example:
            '"The stick with which the deed had been done... had broken in the middle under the stress of this insensate cruelty"',
          effect:
            "The broken cane — a gift from Utterson to Jekyll — symbolises the destruction of gentlemanly bonds through violence; its snapping in two mirrors the splitting of Jekyll's own identity.",
        },
        {
          label: "Windows",
          example:
            'Utterson sees Jekyll at his window: "the smile was struck out of his face and succeeded by an expression of such abject terror and despair"',
          effect:
            "Windows symbolise the boundary between public and private — Jekyll's appearance at the window is a moment of exposed interiority, where his carefully maintained facade cracks before witnesses.",
        },
        {
          label: "Night vs day",
          example:
            "Hyde operates almost exclusively at night; Jekyll maintains his public life during the day",
          effect:
            "The day/night division maps directly onto the Jekyll/Hyde split — darkness enables transgression while daylight demands respectability, reflecting Victorian society's dependence on what is seen and unseen.",
        },
        {
          label: "Keys and locks",
          example:
            '"The key was never out of his possession" / "the red baize door" between the house and the laboratory',
          effect:
            "Keys symbolise control over one's secret life — Jekyll's obsessive guarding of access to his laboratory reflects the desperate effort to maintain the boundary between his two selves.",
        },
        {
          label: "The laboratory",
          example:
            '"The theatre" or "dissecting rooms" — formerly a surgeon\'s workspace, now Jekyll\'s site of transformation',
          effect:
            "The laboratory symbolises the dangerous intersection of science and transgression — its theatrical name ('the theatre') suggests that Jekyll's experiment is a performance, a staged enactment of hidden desire.",
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
          label: "Duality of human nature",
          example:
            '"Man is not truly one, but truly two" — Jekyll\'s philosophical thesis',
          effect:
            "The novella's central argument: every individual contains contradictory moral impulses that cannot be separated without catastrophe. Stevenson challenges the Victorian belief that respectability equals goodness.",
        },
        {
          label: "Victorian repression",
          example:
            "Jekyll describes his respectable life as an 'imperious desire to carry my head high' that forced his pleasures underground",
          effect:
            "Stevenson argues that Victorian moral rigidity does not eliminate sin but drives it into secrecy — repression creates Hyde; the stricter the respectability, the more violent the eventual eruption.",
        },
        {
          label: "Atavism and degeneration",
          example:
            'Hyde is described as "troglodytic" and possessing "ape-like fury" — language drawn from contemporary degeneration theory',
          effect:
            "Reflects Victorian fears that evolution could reverse — Hyde embodies the terrifying possibility that civilisation is a thin veneer over an animalistic nature that can resurface at any moment.",
        },
        {
          label: "Freudian reading (id/ego/superego)",
          example:
            "Hyde as the id (primal desire), Jekyll as the ego (social self), and the demands of Victorian society as the superego",
          effect:
            "Though predating Freud, the novella anticipates psychoanalytic theory — the tripartite model illuminates how Jekyll's attempt to isolate and indulge his unconscious desires leads to the ego's destruction.",
        },
        {
          label: "Science vs religion",
          example:
            'Jekyll\'s experiment is called "transcendental" medicine; Lanyon dismisses it as "unscientific balderdash"',
          effect:
            "The novella dramatises the Victorian conflict between scientific ambition and moral-religious boundaries — Jekyll's transgression is both a scientific failure and a spiritual sin, crossing lines that both systems forbid.",
        },
        {
          label: "Gothic transgression",
          example:
            "Jekyll violates natural law by chemically separating good from evil — a modern Prometheus or Faustian figure",
          effect:
            "The Gothic tradition uses transgression to explore cultural anxieties — Jekyll's experiment, like Frankenstein's creation, reveals the catastrophic consequences of exceeding human limits and 'playing God'.",
        },
        {
          label: "The double/doppelganger",
          example:
            "Hyde is Jekyll's doppelganger — his dark twin, physically smaller (as the evil side was 'less exercised') but growing stronger",
          effect:
            "The doppelganger motif externalises internal conflict — Hyde's increasing dominance over Jekyll dramatises the psychological truth that repressed desires, once released, become progressively harder to control.",
        },
        {
          label: "Social hypocrisy",
          example:
            'Jekyll confesses: "many a man would have even blazoned such irregularities as I was guilty of; but... I concealed them"',
          effect:
            "Stevenson exposes the gap between Victorian public morality and private behaviour — Jekyll's sins are ordinary; it is the obsessive need to appear blameless that creates the monstrous Hyde.",
        },
        {
          label: "Darwinism",
          example:
            "Hyde's 'ape-like' qualities and association with primitive violence echo Darwin's theory of human descent from animals",
          effect:
            "The novella engages with the post-Darwinian anxiety that humanity is closer to animals than Victorians wished to believe — Hyde literalises the 'beast within' that evolution implies is part of every human.",
        },
        {
          label: "Urban anxiety",
          example:
            "London is depicted as a labyrinth of fog, gaslight, and hidden streets where violence occurs just yards from respectable homes",
          effect:
            "Stevenson channels late-Victorian anxieties about the modern city — London becomes a Gothic space where anonymity enables vice, class boundaries blur, and the familiar suddenly becomes threatening.",
        },
        {
          label: "Addiction",
          example:
            'Jekyll describes needing the potion with increasing desperation: "I had to double my dose" / "under the strain of the continuously threatened transfer"',
          effect:
            "The transformation reads as a metaphor for addiction — the initial pleasure, escalating dosage, loss of control, and final inability to stop mirror the trajectory of substance dependence.",
        },
        {
          label: "Secrecy and surveillance",
          example:
            "Utterson watches Jekyll's door; the maid observes the Carew murder from a window; characters constantly observe and are observed",
          effect:
            "The novella depicts a society structured by watching and being watched — surveillance is both a tool of social control and a means of discovering transgression, reflecting Victorian culture's obsessive policing of respectability.",
        },
      ],
    },
  ],
};
