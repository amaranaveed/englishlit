import { Quote } from "./types";

// ─── MACBETH — 6 Quotes ───

export const MACBETH_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "macbeth",
    quote: "Fair is foul, and foul is fair",
    who: "The Witches",
    act: "Act 1, Scene 1",
    themes: ["Appearance vs Reality", "Supernatural", "Moral Corruption", "Fate vs Free Will"],
    keyQuote: {
      text: '"Fair is foul, and foul is fair"',
      highlight: "foul",
      note: "The Witches' opening incantation establishes the play's central paradox: moral boundaries are unstable, and what appears good may be evil. This sets the tone for Macbeth's entire tragic descent.",
    },
    technique1: {
      title: "CHIASMUS / ANTITHETICAL PARALLELISM",
      analysis:
        "Shakespeare employs **chiasmus** (a rhetorical structure where two phrases are reversed) — 'fair is foul' mirrors 'foul is fair' — creating a sense of moral **inversion** (turning upside down). The **antithetical** (directly opposing) pairing collapses the distinction between good and evil, suggesting that in this world moral categories are **arbitrary** (based on random choice rather than reason).",
      secondPoint:
        "The **trochaic tetrameter** (a rhythmic pattern of stressed-unstressed syllables, four per line) — distinct from the iambic pentameter used by human characters — marks the Witches as **otherworldly**. Their irregular rhythm mirrors the **disruption** they bring to the natural and moral order.",
      keyWords: [
        { word: "Chiasmus", def: "A rhetorical device where two phrases are reversed in structure" },
        { word: "Antithetical", def: "Directly opposite or contrasting" },
        { word: "Trochaic tetrameter", def: "A metre of four stressed-unstressed beats per line, creating a chanting rhythm" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The Witches exist outside the moral development of the play — they neither progress nor regress but represent a **static** (unchanging) force of chaos. Their **stagnation** is deliberate: they are catalysts for Macbeth's fall but remain unchanged themselves, functioning as **archetypal** (representing a universal pattern) agents of disorder.",
      keyWords: [
        { word: "Static", def: "Lacking movement or change" },
        { word: "Archetypal", def: "Representing a universal pattern or model" },
      ],
    },
    technique2: {
      title: "PROLEPTIC IRONY",
      analysis:
        "The line functions as **proleptic** (anticipating future events) irony: it foreshadows Macbeth's journey from 'fair' (brave warrior) to 'foul' (tyrannical murderer). Shakespeare plants the seed of the entire tragic arc in the play's first scene, creating a sense of **inevitability** (something that cannot be avoided) that haunts every subsequent decision.",
      secondPoint:
        "The plural verb — 'Fair IS foul' — presents moral collapse as a statement of fact, not possibility. This **declarative** (stating something as certain) mood strips away human agency, suggesting Macbeth's fate may already be sealed before he even appears on stage.",
      keyWords: [
        { word: "Proleptic", def: "Anticipating and representing a future event as if already happening" },
        { word: "Inevitability", def: "The quality of being certain to happen; unavoidable" },
        { word: "Declarative", def: "Making a statement presented as fact" },
      ],
    },
    context: {
      points: [
        {
          label: "JAMES I & WITCHCRAFT",
          text: "King James I wrote **Daemonologie** (1597), a treatise on witchcraft, and personally oversaw witch trials. Shakespeare's portrayal of the Witches directly flatters the King's interests while tapping into genuine **societal paranoia** (widespread irrational fear). The opening scene would have provoked real anxiety in a Jacobean audience who believed in demonic forces.",
        },
        {
          label: "THE GREAT CHAIN OF BEING",
          text: "Jacobean society believed in a **divinely ordained** (ordered by God) hierarchy — God, King, man, woman, animal. The Witches' inversion of moral categories threatens this entire structure, suggesting that the **cosmic order** itself can be disrupted. Regicide (killing a king) was not merely murder but an offence against God's design.",
        },
      ],
      keyWords: [
        { word: "Daemonologie", def: "King James I's 1597 treatise on witchcraft and the supernatural" },
        { word: "Divinely ordained", def: "Ordered or decreed by God" },
        { word: "Regicide", def: "The killing of a king" },
      ],
    },
    wow: {
      title: "DECONSTRUCTING BINARY OPPOSITIONS (Derrida)",
      analysis:
        "Jacques Derrida argued that Western thought relies on **binary oppositions** (paired concepts where one is privileged: good/evil, fair/foul) — and that these hierarchies are constructed, not natural. The Witches' incantation performs a **deconstructive** act: by equating 'fair' with 'foul', they collapse the moral binary that underpins social order. Shakespeare anticipates Derrida by four centuries, suggesting that the categories society depends on — good/evil, loyal/treacherous, natural/supernatural — are inherently **unstable**. This philosophical instability is what makes Macbeth's tragedy possible: if 'fair' can become 'foul', then a loyal thane can become a regicidal tyrant.",
      keyWords: [
        { word: "Binary opposition", def: "A pair of related concepts that are presented as opposite (good/evil, light/dark)" },
        { word: "Deconstruction", def: "A method of critical analysis that reveals how apparent certainties are built on unstable foundations" },
        { word: "Unstable", def: "Liable to change or collapse; not firmly established" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "macbeth",
    quote: "Look like th'innocent flower, but be the serpent under't",
    who: "Lady Macbeth",
    act: "Act 1, Scene 5",
    themes: ["Appearance vs Reality", "Gender & Power", "Moral Corruption", "Ambition"],
    keyQuote: {
      text: '"Look like th\'innocent flower, but be the serpent under\'t"',
      highlight: "serpent",
      note: "Lady Macbeth instructs her husband in the art of deception, using biblical imagery to reveal her willingness to embrace evil for the sake of ambition.",
    },
    technique1: {
      title: "BIBLICAL ALLUSION / EDENIC IMAGERY",
      analysis:
        "The **serpent** directly alludes to the serpent in the Garden of Eden — Satan's disguise when tempting Eve. By invoking this image, Lady Macbeth casts herself in a **diabolical** (devilish) role, consciously adopting the methods of evil. The **allusion** (indirect reference) positions the Macbeths' plot as a re-enactment of the Fall of Man, with Duncan as innocent Adam and the Macbeths as agents of **perdition** (eternal damnation).",
      secondPoint:
        "The **imperative** mood — 'Look... be' — reveals Lady Macbeth's dominance in this scene. She does not suggest but commands, assuming the role of **strategist** while positioning Macbeth as the instrument of her ambition. This **inversion** of expected gender dynamics was deeply shocking to a Jacobean audience.",
      keyWords: [
        { word: "Allusion", def: "An indirect reference to another text, event, or idea" },
        { word: "Diabolical", def: "Relating to the devil; extremely wicked" },
        { word: "Perdition", def: "Eternal damnation; complete ruin" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Lady Macbeth undergoes a clear **moral regression** in this moment: she actively chooses deception over virtue, embracing evil as a conscious strategy. Her **complicity** (involvement in wrongdoing) is not passive but deliberately engineered — she is the architect of Duncan's murder, making her regression more **culpable** (deserving of blame) than Macbeth's wavering.",
      keyWords: [
        { word: "Regression", def: "A return to a less developed or worse state" },
        { word: "Culpable", def: "Deserving of blame; guilty" },
      ],
    },
    technique2: {
      title: "JUXTAPOSITION / SEMANTIC FIELD OF CONCEALMENT",
      analysis:
        "The **juxtaposition** of 'innocent flower' and 'serpent' creates a **semantic field** (a group of words related by meaning) of concealment and duplicity. The flower represents the **facade** (false outward appearance) of hospitality and loyalty that the Macbeths must maintain as hosts, while the serpent represents the **latent** (hidden) violence beneath. This dual image encapsulates the play's central theme: the gap between appearance and reality.",
      secondPoint:
        "Shakespeare layers natural imagery with moral meaning — flowers and serpents belong to the natural world but are loaded with symbolic significance. This **pathetic fallacy** in reverse (nature used to describe human deception) suggests that the Macbeths' plot **corrupts** the natural order itself.",
      keyWords: [
        { word: "Semantic field", def: "A group of words related by meaning" },
        { word: "Facade", def: "A false outward appearance designed to conceal the truth" },
        { word: "Duplicity", def: "Deception; acting in two different ways to deceive" },
      ],
    },
    context: {
      points: [
        {
          label: "GENDER TRANSGRESSION",
          text: "Jacobean women were expected to be **submissive** (obedient, yielding) and nurturing. Lady Macbeth's commanding tone and strategic thinking **transgress** (violate, go beyond) these boundaries, aligning her with the unnatural forces of the Witches. Her later invocation — 'unsex me here' — makes this gender **transgression** explicit.",
        },
        {
          label: "DIVINE RIGHT OF KINGS",
          text: "Duncan is not merely a king but God's appointed representative on Earth. To murder him while a guest — violating both **regicide** and the sacred obligation of **hospitality** — is a double sin. Lady Macbeth's serpent imagery positions their act as Satanic rebellion against the **divine order**.",
        },
      ],
      keyWords: [
        { word: "Transgress", def: "To go beyond the limits of what is morally or socially acceptable" },
        { word: "Divine Right of Kings", def: "The belief that monarchs are chosen by God and answer only to Him" },
        { word: "Hospitality", def: "The sacred Jacobean duty of a host to protect their guest" },
      ],
    },
    wow: {
      title: "MACHIAVELLIAN REALPOLITIK",
      analysis:
        "Lady Macbeth's advice mirrors Niccolò Machiavelli's **The Prince** (1532): 'Everyone sees what you appear to be, few experience what you really are.' This **Machiavellian** (cunning, amoral, politically manipulative) counsel reduces morality to performance — virtue is merely a mask to be worn and discarded. Shakespeare explores a world where political success requires the **suppression** of conscience, anticipating Hannah Arendt's concept of the **banality of evil** — the idea that atrocity is enabled by ordinary people making calculated choices. Lady Macbeth's calm, rational instruction in evil is more terrifying than any emotional outburst.",
      keyWords: [
        { word: "Machiavellian", def: "Cunning, scheming, and unscrupulously manipulative in politics" },
        { word: "Realpolitik", def: "Politics based on practical power rather than moral principles" },
        { word: "Banality of evil", def: "The idea that evil acts are often committed by ordinary people following orders or calculations" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "macbeth",
    quote: "Is this a dagger which I see before me, the handle toward my hand?",
    who: "Macbeth",
    act: "Act 2, Scene 1",
    themes: ["Guilt & Conscience", "Supernatural", "Appearance vs Reality", "Fate vs Free Will"],
    keyQuote: {
      text: '"Is this a dagger which I see before me, the handle toward my hand?"',
      highlight: "dagger",
      note: "Macbeth's hallucination on the eve of Duncan's murder — the dagger soliloquy — reveals the psychological torment of a man teetering on the edge of irreversible evil.",
    },
    technique1: {
      title: "RHETORICAL QUESTION / SOLILOQUY",
      analysis:
        "The **rhetorical question** exposes Macbeth's fractured psyche: he cannot distinguish between reality and **hallucination** (perceiving something that is not there). The **soliloquy** (a speech delivered alone, revealing inner thoughts) grants the audience direct access to his disintegrating mind — Shakespeare uses this form to show that Macbeth is not a cold-blooded killer but a man in **psychological anguish** (severe mental suffering).",
      secondPoint:
        "The phrasing 'toward my hand' is deeply ambiguous: does the dagger invite him to grasp it, or does it merely point the way? This **ambiguity** (uncertainty of meaning) mirrors Macbeth's own uncertainty about whether he is being guided by fate or making a free choice.",
      keyWords: [
        { word: "Rhetorical question", def: "A question asked for effect, not requiring an answer" },
        { word: "Soliloquy", def: "A speech in which a character speaks their thoughts aloud while alone" },
        { word: "Ambiguity", def: "Having more than one possible meaning or interpretation" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "This soliloquy marks Macbeth's **regression** from loyal soldier to potential murderer. His conscience is still active — the hallucination represents his mind's desperate attempt to process the moral **enormity** (extreme wickedness) of what he is about to do. He has not yet crossed the line, making this the last moment where he could turn back.",
      keyWords: [
        { word: "Enormity", def: "The extreme scale or wickedness of something" },
        { word: "Conscience", def: "An inner sense of what is right and wrong" },
      ],
    },
    technique2: {
      title: "PATHETIC FALLACY / SENSORY DISINTEGRATION",
      analysis:
        "The dagger sequence extends into a **sensory disintegration** — Macbeth cannot trust his eyes ('Mine eyes are made the fools o'th'other senses') or his reason. Shakespeare uses this breakdown of perception as a **metaphor** (a comparison implying one thing is another) for moral collapse: when you can no longer see clearly, you can no longer act rightly.",
      secondPoint:
        "The later lines — 'Nature seems dead, and wicked dreams abuse the curtained sleep' — employ **pathetic fallacy** (attributing human emotions to nature) to externalise Macbeth's guilt. The entire natural world becomes a reflection of his corrupted inner state, suggesting his crime is not merely personal but **cosmic** (affecting the universal order).",
      keyWords: [
        { word: "Pathetic fallacy", def: "Attributing human emotions or qualities to nature or objects" },
        { word: "Metaphor", def: "A figure of speech declaring one thing is another, for comparison" },
        { word: "Cosmic", def: "Relating to the universe or universal order" },
      ],
    },
    context: {
      points: [
        {
          label: "JACOBEAN PSYCHOLOGY",
          text: "Jacobeans understood hallucinations as either divine warnings or demonic **temptation** (enticement to sin). Macbeth's dagger could be read as God's last warning — a chance to repent — or as a supernatural lure drawing him toward damnation. The audience must decide, mirroring Macbeth's own agonised uncertainty.",
        },
        {
          label: "SOLILOQUY CONVENTION",
          text: "In Elizabethan/Jacobean theatre, soliloquies represented **unmediated** (direct, without filter) truth — when a character speaks alone, they cannot lie. This convention means Macbeth's terror is genuine: he is not performing guilt for an audience but experiencing authentic moral crisis. Shakespeare exploits this trust to generate **empathy** (shared feeling) for a murderer.",
        },
      ],
      keyWords: [
        { word: "Temptation", def: "The desire to do something wrong or unwise" },
        { word: "Unmediated", def: "Direct; without anything in between to alter or filter" },
        { word: "Empathy", def: "The ability to understand and share another person's feelings" },
      ],
    },
    wow: {
      title: "FREUDIAN RETURN OF THE REPRESSED",
      analysis:
        "Sigmund Freud's concept of the **return of the repressed** argues that desires or fears pushed into the unconscious inevitably resurface in distorted forms — dreams, slips of the tongue, or hallucinations. The dagger is Macbeth's **repressed** guilt and desire manifesting as a visual hallucination: his conscious mind has decided to murder Duncan, but his unconscious rebels, producing an image that is simultaneously an invitation and a warning. Shakespeare anticipates psychoanalytic theory by three centuries, mapping the terrain of a mind in conflict with itself. The dagger is not supernatural but **psychosomatic** (originating in the mind but manifesting physically) — the body's protest against the soul's corruption.",
      keyWords: [
        { word: "Return of the repressed", def: "Freud's theory that suppressed thoughts or feelings resurface in disguised forms" },
        { word: "Psychosomatic", def: "A physical symptom caused by mental or emotional disturbance" },
        { word: "Unconscious", def: "The part of the mind containing thoughts and desires we are not aware of" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "macbeth",
    quote: "Will all great Neptune's ocean wash this blood clean from my hand?",
    who: "Macbeth",
    act: "Act 2, Scene 2",
    themes: ["Guilt & Conscience", "Supernatural", "Moral Corruption"],
    keyQuote: {
      text: '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
      highlight: "blood",
      note: "Immediately after murdering Duncan, Macbeth recognises the permanence of his guilt — no amount of water can cleanse the stain of regicide.",
    },
    technique1: {
      title: "HYPERBOLIC CLASSICAL ALLUSION",
      analysis:
        "The reference to **Neptune** (Roman god of the sea) elevates Macbeth's guilt to **mythological** (relating to ancient myths) proportions — even the entire ocean cannot cleanse his hands. This **hyperbole** (extreme exaggeration) reveals that Macbeth understands his crime is not merely legal but **metaphysical** (beyond the physical world) — he has stained his soul, not just his hands.",
      secondPoint:
        "The image creates a devastating **scale contrast**: the vastness of Neptune's ocean versus the smallness of a human hand. Yet the hand's guilt **outweighs** the ocean, inverting natural proportions and suggesting that moral corruption is more powerful than any natural force of purification.",
      keyWords: [
        { word: "Neptune", def: "The Roman god of the sea" },
        { word: "Hyperbole", def: "Deliberate exaggeration for emphasis or effect" },
        { word: "Metaphysical", def: "Beyond the physical; relating to abstract concepts of existence and reality" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Macbeth's **regression** deepens: he has crossed the irreversible threshold of murder. Yet paradoxically, his awareness of guilt demonstrates that his moral faculty has not been entirely destroyed — he can still recognise the enormity of his act. This creates **tragic pathos** (sorrowful pity): we witness a man who knows he has damned himself but cannot undo what he has done.",
      keyWords: [
        { word: "Tragic pathos", def: "A quality that evokes pity and sorrow in the audience" },
        { word: "Irreversible", def: "Unable to be undone or reversed" },
      ],
    },
    technique2: {
      title: "MOTIF OF BLOOD / EXTENDED METAPHOR",
      analysis:
        "Blood functions as an **extended metaphor** (a metaphor sustained throughout the text) for guilt across the entire play. Here it begins as literal (Duncan's blood on Macbeth's hands) but transforms into **symbolic** (representing something beyond its literal meaning) — the blood represents moral contamination that cannot be removed. This motif later transfers to Lady Macbeth ('Out, damned spot!'), creating a **structural parallel** between the couple's psychological disintegration.",
      secondPoint:
        "The answering line — 'this my hand will rather the **multitudinous** seas incarnadine, making the green one red' — extends the image: rather than the sea cleansing Macbeth, Macbeth will stain the sea. **Incarnadine** (to turn blood-red) is a rare, Latinate word that slows the line, forcing the audience to absorb its horror before the brutal simplicity of 'making the green one red'.",
      keyWords: [
        { word: "Extended metaphor", def: "A metaphor that is sustained and developed throughout a passage or text" },
        { word: "Incarnadine", def: "To turn something blood-red; to stain crimson" },
        { word: "Multitudinous", def: "Very numerous; vast in number" },
      ],
    },
    context: {
      points: [
        {
          label: "REGICIDE & DIVINE LAW",
          text: "Under the **Divine Right of Kings**, murdering a monarch was not merely a crime against the state but against God. Macbeth's sense that no natural element can cleanse him reflects the Jacobean belief that regicide creates a **spiritual stain** that only divine forgiveness — which Macbeth never seeks — could remove.",
        },
        {
          label: "LADY MACBETH'S CONTRASTING RESPONSE",
          text: "'A little water clears us of this deed' — Lady Macbeth's **dismissive** (treating something as unworthy of consideration) response creates a dramatic contrast. Her inability to see the moral weight of the murder foreshadows her later psychological collapse, when the blood she dismissed returns to haunt her in the sleepwalking scene.",
        },
      ],
      keyWords: [
        { word: "Spiritual stain", def: "A moral corruption believed to mark the soul permanently" },
        { word: "Dismissive", def: "Treating something as unworthy of serious consideration" },
        { word: "Foreshadow", def: "A warning or indication of a future event in a narrative" },
      ],
    },
    wow: {
      title: "EXISTENTIAL GUILT (Kierkegaard)",
      analysis:
        "Søren Kierkegaard's concept of **existential dread** describes the anxiety that accompanies awareness of one's own freedom to choose evil. Macbeth's ocean image captures this perfectly: he has exercised his freedom (choosing to murder) and now confronts the **irreversible consequence** of that choice. The guilt is not merely emotional but **ontological** (relating to the nature of being) — it has changed what Macbeth IS, not just what he has done. This aligns with Aristotle's concept of **hamartia** (tragic flaw/error): Macbeth's crime is not an accident but a choice that fundamentally alters his identity. Shakespeare presents guilt as existential transformation — the murderer is not the same person as the loyal thane; the act has created a new, damned self.",
      keyWords: [
        { word: "Existential dread", def: "Profound anxiety arising from awareness of one's freedom and responsibility" },
        { word: "Ontological", def: "Relating to the nature of existence and being" },
        { word: "Hamartia", def: "A tragic flaw or error in judgment that leads to a character's downfall" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "macbeth",
    quote: "Out, damned spot! Out, I say!",
    who: "Lady Macbeth",
    act: "Act 5, Scene 1",
    themes: ["Guilt & Conscience", "Gender & Power", "Appearance vs Reality", "Moral Corruption"],
    keyQuote: {
      text: '"Out, damned spot! Out, I say!"',
      highlight: "damned",
      note: "Lady Macbeth's sleepwalking scene reveals the complete psychological collapse of a woman who once dismissed guilt as easily washed away — the blood she denied has consumed her mind.",
    },
    technique1: {
      title: "EXCLAMATORY IMPERATIVES / FRAGMENTED SYNTAX",
      analysis:
        "The **exclamatory** (expressing strong emotion) **imperatives** (commands) — 'Out... Out' — reveal Lady Macbeth's desperate attempt to command away her guilt, as she once commanded Macbeth. But the **fragmented syntax** (broken sentence structure) contrasts sharply with her earlier eloquent manipulation, showing that guilt has **shattered** her linguistic control. The woman who wielded language as a weapon is now destroyed by its failure.",
      secondPoint:
        "The word '**damned**' carries both a physical curse ('cursed spot') and a **theological** (relating to religious belief) meaning — Lady Macbeth unconsciously acknowledges her own damnation. Shakespeare uses this **double entendre** (a word with two meanings) to collapse the physical and spiritual dimensions of her guilt.",
      keyWords: [
        { word: "Exclamatory", def: "Expressing strong emotion, often with an exclamation mark" },
        { word: "Fragmented syntax", def: "Broken, incomplete sentence structures reflecting mental disturbance" },
        { word: "Double entendre", def: "A word or phrase with two meanings, one often hidden or darker" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Lady Macbeth's **regression** is total: from the commanding strategist of Act 1 to the broken, sleepwalking figure of Act 5. Her trajectory is the play's most devastating character arc — the woman who said 'A little water clears us of this deed' is now **tormented** (suffering greatly) by the very blood she dismissed. This **ironic reversal** (when an outcome is the opposite of what was expected) demonstrates Shakespeare's moral architecture: guilt cannot be suppressed indefinitely.",
      keyWords: [
        { word: "Ironic reversal", def: "When the outcome is the direct opposite of what a character expected or planned" },
        { word: "Tormented", def: "Suffering severe mental or physical anguish" },
      ],
    },
    technique2: {
      title: "PROSE (NOT VERSE) / DRAMATIC FORM",
      analysis:
        "In this scene, Lady Macbeth speaks in **prose** rather than the **blank verse** (unrhymed iambic pentameter) she uses elsewhere. In Shakespeare, high-status characters typically speak in verse; the switch to prose signals her **psychological disintegration** (mental breakdown). Her language has been **demoted** from poetry to fragmented, repetitive speech — mirroring her loss of control, status, and sanity.",
      secondPoint:
        "The scene is observed by a Doctor and Gentlewoman, creating a **dramatic frame** — we watch them watching her. This layered observation transforms Lady Macbeth's private agony into a **clinical spectacle** (a medical display), emphasising her **vulnerability** and the helplessness of those around her. No one can help; the guilt is beyond medicine.",
      keyWords: [
        { word: "Blank verse", def: "Unrhymed poetry in iambic pentameter, used for noble characters" },
        { word: "Psychological disintegration", def: "The progressive breakdown of a person's mental stability" },
        { word: "Dramatic frame", def: "A narrative structure where one story is presented within another" },
      ],
    },
    context: {
      points: [
        {
          label: "WOMEN & MADNESS",
          text: "In Jacobean society, female madness was often attributed to **hysteria** (a diagnosis blaming emotional disturbance on women's biology). Shakespeare subverts this: Lady Macbeth's breakdown is not biological but moral — it is caused by guilt, not gender. Yet the male observers (Doctor, attendants) are powerless to help, exposing the **inadequacy** (insufficiency) of patriarchal systems of care.",
        },
        {
          label: "SLEEP & CONSCIENCE",
          text: "Jacobeans believed sleep was a period of spiritual **vulnerability** when the conscience could speak freely. Lady Macbeth's **somnambulism** (sleepwalking) reveals truths her waking mind suppresses — linking to Macbeth's earlier 'Macbeth does murder sleep.' The Macbeths have destroyed the natural order of sleep and wakefulness alongside the political order.",
        },
      ],
      keyWords: [
        { word: "Hysteria", def: "A historical diagnosis attributing emotional disturbance in women to biological causes" },
        { word: "Somnambulism", def: "Sleepwalking; performing actions while asleep" },
        { word: "Vulnerability", def: "The state of being exposed to harm or attack, whether physical or emotional" },
      ],
    },
    wow: {
      title: "THE ABJECT (Kristeva)",
      analysis:
        "Julia Kristeva's theory of **abjection** describes the horror we feel when confronted with the breakdown of boundaries — between self and other, clean and filthy, life and death. Lady Macbeth's obsessive handwashing enacts this horror: the blood (which should remain inside bodies) has crossed a boundary and now contaminates her permanently. The 'spot' is **abject** because it represents the collapse of the distinction between Lady Macbeth the respectable hostess and Lady Macbeth the murderer. Her psychological destruction occurs precisely because she cannot maintain the **facade** she once insisted upon — the gap between appearance and reality has closed, and what remains is pure, unmediated guilt. Shakespeare shows that the human psyche cannot indefinitely sustain the division between public performance and private truth.",
      keyWords: [
        { word: "Abjection", def: "Horror and disgust at the breakdown of boundaries between self and other" },
        { word: "Contamination", def: "The act of making something impure through contact" },
        { word: "Unmediated", def: "Direct; without filters or barriers between the person and the experience" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "macbeth",
    quote: "Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day",
    who: "Macbeth",
    act: "Act 5, Scene 5",
    themes: ["Fate vs Free Will", "Moral Corruption", "Guilt & Conscience", "Ambition"],
    keyQuote: {
      text: '"Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day"',
      highlight: "tomorrow",
      note: "Macbeth's final great soliloquy — spoken after learning of his wife's death — reveals his complete nihilistic despair: life itself has become meaningless.",
    },
    technique1: {
      title: "EPIZEUXIS / REPETITION",
      analysis:
        "The triple repetition of '**tomorrow**' — a device called **epizeuxis** (immediate repetition of a word for emphasis) — creates a slow, relentless rhythm that mirrors the **monotony** (tedious sameness) of Macbeth's existence. Each repetition drains the word of meaning, just as Macbeth's crimes have drained his life of purpose. Time, which was once urgent ('If it were done when 'tis done, then 'twere well it were done quickly'), has become an unbearable, **interminable** (endless) procession.",
      secondPoint:
        "The verb '**creeps**' personifies time as something **insidious** (proceeding in a harmful way that is not immediately obvious) and slow. Combined with 'petty pace', Shakespeare creates a devastating image of existence reduced to meaningless **incrementalism** — each day is tiny, insignificant, and identical to the last.",
      keyWords: [
        { word: "Epizeuxis", def: "The immediate repetition of a word for emphasis" },
        { word: "Monotony", def: "Lack of variety; tedious sameness" },
        { word: "Insidious", def: "Proceeding in a gradual, subtle way but with harmful effects" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Macbeth's **regression** is now complete and **irreversible**: he has moved from ambitious warrior to guilt-ridden murderer to **nihilistic** (believing that life is meaningless) shell. This final stage is worse than active evil — it is the absence of all feeling, a spiritual death that precedes his physical one. His inability to grieve his wife's death demonstrates the total **atrophy** (wasting away) of his humanity.",
      keyWords: [
        { word: "Nihilistic", def: "Believing that life has no meaning, purpose, or value" },
        { word: "Atrophy", def: "The gradual decline or wasting away of something" },
      ],
    },
    technique2: {
      title: "EXTENDED THEATRICAL METAPHOR",
      analysis:
        "Macbeth's subsequent lines — 'Life's but a walking shadow, a poor player that struts and frets his hour upon the stage' — create an **extended theatrical metaphor** that reduces all human existence to performance. The '**poor player**' is both an actor and a pitiable person; 'struts and frets' captures the absurd combination of arrogance ('struts') and anxiety ('frets') that defines human ambition.",
      secondPoint:
        "The speech culminates in 'a tale told by an idiot, full of sound and fury, signifying nothing.' This is Shakespeare's most **nihilistic** statement: life is noise without meaning, passion without purpose. Placing these words in the mouth of a character who has sacrificed everything for power creates devastating **dramatic irony** — Macbeth's ambition has proved the very meaninglessness he now perceives.",
      keyWords: [
        { word: "Extended theatrical metaphor", def: "A sustained comparison between life and theatre/performance" },
        { word: "Dramatic irony", def: "When the audience recognises a deeper significance that the character may not fully grasp" },
        { word: "Nihilism", def: "The philosophical belief that life has no inherent meaning or value" },
      ],
    },
    context: {
      points: [
        {
          label: "MEMENTO MORI",
          text: "The Jacobean tradition of **memento mori** ('remember you must die') encouraged reflection on death as a spiritual practice. But Macbeth's speech goes beyond this: he does not fear death but finds life itself contemptible. This exceeds Christian **pessimism** and approaches genuine **existential nihilism** — a philosophical position that would not be formally articulated until the 19th century.",
        },
        {
          label: "METATHEATRICALITY",
          text: "The 'poor player... upon the stage' is profoundly **metatheatrical** (theatre referring to itself): the actor playing Macbeth describes all life as acting, collapsing the boundary between the play's fictional world and the audience's reality. Shakespeare forces the audience to confront their own **mortality** (the fact of being subject to death) through the very medium of theatrical performance.",
        },
      ],
      keyWords: [
        { word: "Memento mori", def: "A reminder of the inevitability of death" },
        { word: "Metatheatrical", def: "Theatre that draws attention to its own nature as performance" },
        { word: "Existential nihilism", def: "The philosophical position that life has no inherent purpose or meaning" },
      ],
    },
    wow: {
      title: "THE ABSURD (Camus)",
      analysis:
        "Albert Camus defined **the Absurd** as the conflict between humanity's search for meaning and the universe's silent indifference. Macbeth's 'signifying nothing' articulates this condition four centuries before Camus: a man who has pursued power, murdered a king, destroyed his marriage, and lost everything, only to conclude that existence itself is a meaningless performance. Yet Shakespeare's genius lies in the **paradox**: this speech — one of the most profound statements in English literature — is itself 'full of sound and fury.' The very beauty and power of Macbeth's language contradicts his claim that life 'signifies nothing.' Art — even an art depicting meaninglessness — creates meaning. Shakespeare thus offers a **counter-argument** to nihilism embedded within the nihilistic speech itself: as long as language can express despair this perfectly, existence is not entirely devoid of significance.",
      keyWords: [
        { word: "The Absurd", def: "Camus' concept of the conflict between human desire for meaning and the universe's indifference" },
        { word: "Paradox", def: "A seemingly contradictory statement that reveals a deeper truth" },
        { word: "Counter-argument", def: "An argument or viewpoint that opposes and challenges another" },
      ],
    },
  },
];
