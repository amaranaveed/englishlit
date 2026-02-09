import { Quote } from "./types";

// ─── FRANKENSTEIN — 6 Quotes ───

export const FRANKENSTEIN_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "frankenstein",
    quote: "I ought to be thy Adam, but I am rather the fallen angel",
    who: "The Creature",
    act: "Chapter 10",
    themes: ["Creation & Responsibility", "Isolation & Rejection", "Religion & Science", "Identity"],
    keyQuote: {
      text: '"I ought to be thy Adam, but I am rather the fallen angel"',
      highlight: "fallen angel",
      note: "The Creature draws a devastating parallel between his own creation and Milton's Paradise Lost — he should be beloved but has been cast out, making him not the first man but Satan.",
    },
    technique1: {
      title: "MILTONIC ALLUSION / BIBLICAL TYPOLOGY",
      analysis:
        "The **allusion** (reference to another text) to Milton's *Paradise Lost* is precise and devastating: Adam was God's beloved creation; Satan was God's rejected one. The Creature identifies with both — he SHOULD be Adam (cherished by his creator) but IS Satan (abandoned and cast out). This **biblical typology** (interpreting through Biblical parallels) transforms the Creature's personal grievance into a cosmic narrative of creation, rejection, and fall.",
      secondPoint:
        "The modal verb '**ought**' creates moral obligation — it is not merely that the Creature WANTS to be Adam but that he has a RIGHT to be. The word transforms his complaint from self-pity into **ethical** accusation: Victor Frankenstein has violated the moral duty of a creator to love his creation. Shelley frames parental abandonment not as unfortunate but as sinful.",
      keyWords: [
        { word: "Allusion", def: "A reference to another text, event, or cultural work" },
        { word: "Biblical typology", def: "Interpreting events or characters through Biblical parallels" },
        { word: "Modal verb", def: "A verb expressing necessity, possibility, or obligation (ought, should, must)" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "The Creature **regresses** from potential Adam to actual Satan — from innocence to violence. But Shelley makes this regression Victor's fault, not the Creature's: the fall is CAUSED by the creator's abandonment. Without love, support, and guidance, even the most promising creation degenerates. The Creature's regression is a direct consequence of parental failure.",
      keyWords: [
        { word: "Degenerate", def: "To decline in quality, character, or condition; to deteriorate morally" },
        { word: "Parental failure", def: "The neglect of duties owed by a creator or parent to their offspring" },
      ],
    },
    technique2: {
      title: "ANTITHESIS — ADAM vs FALLEN ANGEL",
      analysis:
        "The **antithesis** of Adam (created in God's image, loved) and fallen angel (expelled, hated) creates a stark **binary** that maps onto the Creature's experience. But Shelley complicates this binary: the Creature is NEITHER purely innocent (Adam) nor purely evil (Satan) — he occupies an impossible position between them. His violence is reactionary, not innate, making him a more **morally complex** figure than either Biblical model.",
      secondPoint:
        "The first-person address — '**thy** Adam' — makes Victor the God figure in this analogy. This is a **subversive** (undermining established order) comparison: it positions a flawed, cowardly scientist as the Creator of the Universe, exposing the **hubris** of any human who presumes to play God. Victor is a terrible God — and the Creature's suffering is the proof.",
      keyWords: [
        { word: "Binary", def: "A system of two opposing categories" },
        { word: "Morally complex", def: "Possessing ethical dimensions that resist simple good/evil categorisation" },
        { word: "Hubris", def: "Excessive pride; the presumption of taking on a role beyond human capacity" },
      ],
    },
    context: {
      points: [
        {
          label: "PARADISE LOST",
          text: "Milton's *Paradise Lost* (1667) tells the story of Satan's rebellion against God and Adam's fall. The Creature reads this poem and identifies with its characters, finding in literature the emotional mirrors that human society denies him. Shelley positions reading as both **liberating** and **dangerous** — it gives the Creature self-awareness but also intensifies his sense of exclusion.",
        },
        {
          label: "THE ROMANTIC PROMETHEUS",
          text: "The novel's subtitle — 'The Modern Prometheus' — references the Titan who stole fire from the gods and was punished eternally. Victor, like Prometheus, steals the 'fire' of creation from God and suffers for it. The **Promethean** narrative frames scientific ambition as both heroic and transgressive.",
        },
      ],
      keyWords: [
        { word: "Promethean", def: "Boldly creative or daring; relating to Prometheus's theft of divine fire" },
        { word: "Transgressive", def: "Crossing or violating established boundaries, especially moral ones" },
        { word: "Self-awareness", def: "Consciousness of one's own identity, feelings, and position" },
      ],
    },
    wow: {
      title: "ABJECTION — THE REJECTED CREATION (Kristeva)",
      analysis:
        "Julia Kristeva's concept of **abjection** — the visceral rejection of that which blurs boundaries between self and other, human and non-human — illuminates Victor's response to his Creature. Victor does not merely dislike the Creature; he is **physically revolted** by it, experiencing the **uncanny** horror of something that is both human and not-human. Kristeva argues that abjection occurs when categorical boundaries (alive/dead, self/other, natural/unnatural) collapse. The Creature — assembled from dead body parts but alive, human in form but not in origin — embodies this categorical collapse. Victor's rejection is not rational but **pre-rational**: a gut-level response to something that threatens the very categories through which we understand the world. Shelley anticipates Kristeva by dramatising how the boundary between 'human' and 'monster' is policed not through reason but through disgust.",
      keyWords: [
        { word: "Abjection", def: "Kristeva's concept of visceral rejection of things that blur categorical boundaries" },
        { word: "Uncanny", def: "The disturbing feeling when something familiar becomes strange or threatening" },
        { word: "Pre-rational", def: "Operating before or beneath conscious reasoning; instinctive" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "frankenstein",
    quote: "I beheld the wretch — the miserable monster whom I had created",
    who: "Victor Frankenstein",
    act: "Chapter 5",
    themes: ["Creation & Responsibility", "Horror & Revulsion", "Science & Ethics", "Appearance vs Reality"],
    keyQuote: {
      text: '"I beheld the wretch — the miserable monster whom I had created"',
      highlight: "monster",
      note: "Victor's first response to his creation is disgust — not the proud joy of a parent but the horror of someone who has unleashed something they cannot face.",
    },
    technique1: {
      title: "DEHUMANISING LEXIS / DISTANCING LANGUAGE",
      analysis:
        "The nouns '**wretch**' and '**monster**' are **dehumanising** (removing human qualities through language): Victor refuses to call the Creature a person, a being, or even an 'it' — he immediately categorises it as **sub-human**. This linguistic violence precedes and enables physical abandonment: by labelling the Creature a monster, Victor gives himself permission to abandon it. Shelley shows how naming shapes moral responsibility.",
      secondPoint:
        "The **dash** between 'the wretch' and 'the miserable monster' creates a pause — a moment of horror where language fails and then restarts with even more revulsion. The dash performs Victor's psychological process: he looks, recoils, grasps for words, and finds only terms of disgust. Shelley uses punctuation to dramatise the gap between experience and expression.",
      keyWords: [
        { word: "Dehumanising", def: "Stripping a being of human qualities through language or treatment" },
        { word: "Sub-human", def: "Regarded as beneath or less than fully human" },
        { word: "Linguistic violence", def: "The use of language to harm, diminish, or dehumanise" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Victor **regresses** catastrophically at the moment that should be his greatest triumph: the animation of the Creature should be the crowning achievement of scientific genius, but Victor experiences it as horror. His regression is moral — he goes from dedicated scientist to terrified coward in an instant. Shelley suggests that ambition without moral preparation leads not to glory but to collapse.",
      keyWords: [
        { word: "Moral regression", def: "A decline in ethical behaviour or moral courage" },
        { word: "Ambition", def: "A strong desire to achieve something, often involving risk" },
      ],
    },
    technique2: {
      title: "POSSESSIVE SHAME — 'WHOM I HAD CREATED'",
      analysis:
        "The relative clause '**whom I had created**' is a reluctant admission of responsibility: Victor acknowledges authorship of the Creature even as he recoils from it. The **past perfect** tense — 'had created' — distances the act into the past, as if Victor is already trying to separate himself from his deed. But grammar betrays him: 'I' and 'created' are linked, and no amount of temporal distancing can break the connection between creator and creation.",
      secondPoint:
        "The verb '**beheld**' is elevated, almost **archaic** — a word from Biblical or epic literature rather than everyday speech. By using this heightened register, Victor unconsciously frames himself as a figure in a grand narrative — a God appalled by his own creation. Shelley's word choice reveals Victor's self-dramatisation: even in horror, he sees himself as the protagonist of a cosmic drama.",
      keyWords: [
        { word: "Past perfect", def: "A verb tense indicating an action completed before another past action" },
        { word: "Self-dramatisation", def: "The tendency to present one's experiences as exaggerated or heroic" },
        { word: "Archaic register", def: "The use of old-fashioned language to create elevated or formal tone" },
      ],
    },
    context: {
      points: [
        {
          label: "GALVANISM",
          text: "Luigi Galvani's experiments with **galvanism** (using electrical current to stimulate dead tissue) showed that electricity could make dead frog legs twitch. This discovery fuelled speculation that science might reanimate the dead. Shelley was aware of these experiments, and Victor's project reflects the era's genuine belief that science was approaching the boundary between life and death.",
        },
        {
          label: "THE BIRTH METAPHOR",
          text: "Many scholars read the creation scene as a **birth metaphor**: Victor, like a parent, brings a being into the world but recoils from its appearance. Shelley, who experienced the death of her first child shortly before writing the novel, may have embedded maternal anxieties — the fear of producing something 'wrong,' of failing as a creator.",
        },
      ],
      keyWords: [
        { word: "Galvanism", def: "The use of electrical current to stimulate muscles or nerves" },
        { word: "Reanimate", def: "To restore to life; to bring back from death" },
        { word: "Maternal anxiety", def: "A parent's fear of harm to, or failure regarding, their child" },
      ],
    },
    wow: {
      title: "THE GAZE & MONSTROSITY (Foucault / Mulvey)",
      analysis:
        "Foucault's concept of the **clinical gaze** — the medical/scientific way of looking that objectifies bodies and reduces persons to specimens — illuminates Victor's 'beholding.' He does not see a person; he sees a product, an experiment, a failure. Laura Mulvey's theory of the **scopophilic gaze** (the pleasure of looking) adds another dimension: Victor's gaze is the opposite of scopophilia — it is **scopophobia** (the horror of seeing). The Creature terrifies because it returns Victor's gaze — it LOOKS BACK. Shelley dramatises the moment when the objectified being refuses to remain an object and becomes a subject with its own perspective. The true horror is not the Creature's appearance but the fact that Victor is SEEN by his creation — forced to confront himself through the eyes of his abandoned child.",
      keyWords: [
        { word: "Clinical gaze", def: "Foucault's concept of the objectifying medical/scientific way of looking" },
        { word: "Scopophobia", def: "Fear or horror of being looked at or of seeing something disturbing" },
        { word: "Subject/object", def: "The distinction between a being who looks (subject) and what is looked at (object)" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "frankenstein",
    quote: "If I cannot inspire love, I will cause fear!",
    who: "The Creature",
    act: "Chapter 17",
    themes: ["Isolation & Rejection", "Revenge & Violence", "Love & Connection", "Power & Control"],
    keyQuote: {
      text: '"If I cannot inspire love, I will cause fear!"',
      highlight: "fear",
      note: "The Creature's ultimatum — love me or fear me — reveals the psychological mechanism by which rejection transforms potential love into certain violence.",
    },
    technique1: {
      title: "ANTITHETICAL CONDITIONAL / ULTIMATUM",
      analysis:
        "The **conditional** structure — 'If... I will' — creates an **ultimatum** (final demand with consequences): love or fear, acceptance or violence. The **antithesis** between 'love' and 'fear' is absolute — there is no middle ground, no negotiation. Shakespeare dramatises the binary logic of the rejected: when compassion is denied, only terror remains as a means of being acknowledged.",
      secondPoint:
        "The shift from '**inspire**' to '**cause**' is revealing: love cannot be forced, only inspired — it requires the other's willing response. But fear CAN be caused unilaterally through violence. The **lexical shift** from passive ('inspire' — hoping for a response) to active ('cause' — forcing one) charts the Creature's movement from **supplicant** to **aggressor**.",
      keyWords: [
        { word: "Ultimatum", def: "A final demand with the threat of consequences if not met" },
        { word: "Lexical shift", def: "A change in word choice that signals a shift in meaning or attitude" },
        { word: "Supplicant", def: "One who humbly asks or begs for something" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "The Creature **regresses** from eloquent philosopher (his earlier speeches demonstrate remarkable intelligence and empathy) to violent threat-maker. But Shelley frames this regression as **reactive** (caused by external forces) rather than innate: the Creature was not born violent — he was made violent by universal rejection. His regression is evidence for Shelley's argument that monstrosity is socially constructed, not biologically predetermined.",
      keyWords: [
        { word: "Reactive", def: "Occurring as a response to external stimuli rather than arising independently" },
        { word: "Socially constructed", def: "Created by social conditions and treatment rather than by nature" },
      ],
    },
    technique2: {
      title: "EXCLAMATION MARK — EMOTIONAL RUPTURE",
      analysis:
        "The **exclamation mark** intensifies the threat: this is not a calm statement of intent but an emotional eruption. The Creature's eloquence — his most humanising quality — is overwhelmed by raw feeling. Shelley shows the moment where reasoned argument gives way to **affect** (raw emotional force): the Creature has tried persuasion and failed; only violence remains. The punctuation performs the emotional breaking point.",
      secondPoint:
        "The first-person declarations — '**I** cannot,' '**I** will' — insist on the Creature's **subjectivity** (his existence as a thinking, choosing being). Even in threatening violence, the Creature asserts his personhood: he is not a mindless monster but a being who has DECIDED to cause fear. This distinction matters: deliberate violence is qualitatively different from instinctive aggression. The Creature's threat is a choice born of despair, not a revelation of innate savagery.",
      keyWords: [
        { word: "Affect", def: "Raw emotional force that operates before or beyond rational thought" },
        { word: "Subjectivity", def: "The quality of being a conscious, thinking, feeling agent" },
        { word: "Deliberate", def: "Done consciously and with full intention" },
      ],
    },
    context: {
      points: [
        {
          label: "ROUSSEAU & NATURAL GOODNESS",
          text: "Jean-Jacques Rousseau argued that humans are born naturally **good** and are corrupted by society. Shelley, whose parents were influenced by Rousseau, applies this theory to the Creature: he begins life with the capacity for love and is driven to violence by social rejection. The Creature's trajectory is Rousseau's nightmare — proof that society destroys what nature creates.",
        },
        {
          label: "THE FRENCH REVOLUTION",
          text: "The Creature's transformation from peaceful to violent mirrors anxieties about the **French Revolution** (1789): the oppressed masses, denied dignity and justice, eventually turned to violent revolution. Shelley warns that sustained injustice inevitably breeds violent rebellion — the Creature is revolutionary as well as monster.",
        },
      ],
      keyWords: [
        { word: "Natural goodness", def: "Rousseau's belief that humans are born virtuous and corrupted by society" },
        { word: "Corrupted", def: "Changed from a good condition to a bad one through external influence" },
        { word: "Revolutionary", def: "Relating to or engaged in radical, forceful change of social structures" },
      ],
    },
    wow: {
      title: "THE WRETCHED OF THE EARTH (Fanon)",
      analysis:
        "Frantz Fanon's *The Wretched of the Earth* argues that colonised peoples, denied recognition and subjected to persistent dehumanisation, may turn to **violence** as the only remaining means of asserting their existence. Fanon wrote: 'The colonised man finds his freedom in and through violence.' The Creature enacts Fanon's thesis: denied love, refused recognition, treated as sub-human, he discovers that causing fear is the only way to force the world to acknowledge him. Violence becomes not mere aggression but an act of **existential assertion** — proof that he exists, that he matters, that he cannot be ignored. Shelley, writing 140 years before Fanon, dramatises the same insight: sustained dehumanisation does not produce docile victims — it produces revolutionaries. The Creature's violence is not evidence of his monstrosity but of society's failure.",
      keyWords: [
        { word: "Existential assertion", def: "The act of forcefully claiming one's right to exist and be recognised" },
        { word: "Dehumanisation", def: "The systematic denial of another's human qualities and rights" },
        { word: "Docile", def: "Submissive, compliant; willing to accept control without resistance" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "frankenstein",
    quote: "Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge",
    who: "Victor Frankenstein",
    act: "Chapter 4",
    themes: ["Knowledge & Ambition", "Science & Ethics", "Warning & Prophecy", "Creation & Responsibility"],
    keyQuote: {
      text: '"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge"',
      highlight: "dangerous",
      note: "Victor's warning to Walton — learn from my failure — frames the entire novel as a cautionary tale about the pursuit of knowledge without ethical restraint.",
    },
    technique1: {
      title: "DIDACTIC ADDRESS / FRAME NARRATIVE FUNCTION",
      analysis:
        "The **imperative** 'Learn from me' positions Victor as a **didactic** (instructional, morally teaching) figure — a fallen expert warning the next generation. This speech occurs within the novel's **frame narrative** (a story within a story): Victor tells his story to Walton, who records it in letters to his sister. The nested narrative structure creates distance, turning personal tragedy into universal lesson — Shelley uses the frame to transform autobiography into moral instruction.",
      secondPoint:
        "The phrase '**if not by my precepts, at least by my example**' acknowledges that Victor's authority comes not from wisdom but from suffering. He has no theoretical knowledge to offer — only the scar tissue of lived mistakes. Shelley suggests that experience is a more powerful teacher than theory, but the cost of experiential learning can be catastrophic.",
      keyWords: [
        { word: "Didactic", def: "Intended to instruct or convey a moral lesson" },
        { word: "Frame narrative", def: "A story within a story; an outer narrative containing an inner one" },
        { word: "Precept", def: "A rule or general instruction for behaviour or moral conduct" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Victor demonstrates **intellectual progress** in this moment — he has moved from reckless ambition to sober reflection. But his progress is **retrospective** (looking back): he can diagnose his past errors but cannot undo them. Shelley presents the cruel paradox of belatedness: wisdom often arrives only after the damage is done. Victor's progress in understanding is worthless because it comes too late.",
      keyWords: [
        { word: "Retrospective", def: "Looking back on past events with the benefit of later knowledge" },
        { word: "Belatedness", def: "The quality of arriving or understanding too late" },
      ],
    },
    technique2: {
      title: "FAUST MOTIF — FORBIDDEN KNOWLEDGE",
      analysis:
        "Victor's warning invokes the **Faust** tradition — stories of scholars who pursue forbidden knowledge and are destroyed by it. Like Faust, Victor traded his soul (figuratively) for knowledge beyond human limits. Shelley positions science itself as potentially **Faustian** — capable of unlocking truths that destroy the seeker. The word '**dangerous**' is deliberately understated: Victor's acquisition of knowledge has resulted in multiple deaths, not merely danger.",
      secondPoint:
        "The noun '**acquirement**' (rather than 'pursuit' or 'love') treats knowledge as a **commodity** — something acquired, possessed, owned. This **mercantile** framing of knowledge connects Victor's scientific ambition to the wider culture of acquisition — the Enlightenment's drive to possess and control nature rather than understand and respect it.",
      keyWords: [
        { word: "Faustian", def: "Relating to the pursuit of forbidden knowledge at the cost of one's soul" },
        { word: "Commodity", def: "Something treated as a good to be acquired and possessed" },
        { word: "Mercantile framing", def: "Describing something through the language of trade and possession" },
      ],
    },
    context: {
      points: [
        {
          label: "THE ENLIGHTENMENT",
          text: "The 18th-century **Enlightenment** prioritised reason, science, and progress above tradition and superstition. Shelley, while sympathetic to Enlightenment ideals, warns that unchecked rationality — science without ethics — can produce horrors. *Frankenstein* is not anti-science but anti-**scientism** (the belief that science alone can answer all questions).",
        },
        {
          label: "SHELLEY'S CIRCLE",
          text: "Mary Shelley moved in radical intellectual circles — her husband Percy Shelley, Lord Byron, and William Godwin (her father) all championed knowledge and progress. Her novel serves as a corrective within this circle: a warning from one progressive to others that progress without moral constraint is self-destructive.",
        },
      ],
      keyWords: [
        { word: "Enlightenment", def: "The 18th-century intellectual movement prioritising reason and science" },
        { word: "Scientism", def: "The belief that science alone can provide all necessary knowledge" },
        { word: "Corrective", def: "Something offered to balance or counter an extreme position" },
      ],
    },
    wow: {
      title: "THE PRECAUTIONARY PRINCIPLE (Jonas)",
      analysis:
        "Hans Jonas's **imperative of responsibility** argues that as technological power increases, so must ethical caution. Jonas proposed a **precautionary principle**: when the consequences of an action are potentially catastrophic and irreversible, the burden of proof falls on those who wish to act, not those who urge restraint. Victor violated this principle absolutely: he pursued creation without considering consequences, without ethical review, and without any plan for what to do with his creation. Jonas would read *Frankenstein* as the foundational text for **technology ethics** — a 200-year-old argument that scientific capability must be governed by moral responsibility. Shelley's novel anticipates debates about genetic engineering, artificial intelligence, and nuclear technology: in each case, the question remains whether humanity can be trusted with the power it acquires.",
      keyWords: [
        { word: "Precautionary principle", def: "The ethical rule that potentially catastrophic actions require caution before proceeding" },
        { word: "Technology ethics", def: "The branch of philosophy examining the moral implications of technological development" },
        { word: "Imperative of responsibility", def: "Jonas's principle that power demands proportional ethical care" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "frankenstein",
    quote: "Was I, then, a monster, a blot upon the earth, from which all men fled and whom all men disowned?",
    who: "The Creature",
    act: "Chapter 13",
    themes: ["Identity & Self-Perception", "Isolation & Rejection", "Humanity & Monstrosity"],
    keyQuote: {
      text: '"Was I, then, a monster, a blot upon the earth, from which all men fled and whom all men disowned?"',
      highlight: "blot",
      note: "The Creature's anguished question — Am I really a monster? — reveals the devastating psychological impact of universal rejection: he begins to internalise society's perception of him.",
    },
    technique1: {
      title: "RHETORICAL QUESTION / SELF-INTERROGATION",
      analysis:
        "The **rhetorical question** is directed inward — the Creature interrogates himself, conducting a painful **self-examination**. The question form suggests uncertainty: unlike those around him, the Creature does NOT know whether he is a monster. This uncertainty is itself profoundly humanising — monsters do not question their nature; only humans agonise over identity. The very act of asking proves he is not what society calls him.",
      secondPoint:
        "The metaphor '**a blot upon the earth**' equates the Creature with a mistake — an inkblot, an error on an otherwise clean page. This **dehumanising metaphor** reduces a conscious being to a stain. The Creature has absorbed society's language about him and turned it against himself — an act of **internalised oppression** (accepting and applying the negative judgements of others to oneself).",
      keyWords: [
        { word: "Self-interrogation", def: "The painful process of questioning one's own nature and worth" },
        { word: "Internalised oppression", def: "Accepting and applying the negative judgements of others to oneself" },
        { word: "Dehumanising metaphor", def: "A comparison that reduces a person to a sub-human object" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "The Creature **regresses** from confident self-knowledge (his earlier narration demonstrates intelligence and emotional depth) to self-doubt under the pressure of universal rejection. This psychological regression — from self-acceptance to self-hatred — is the novel's most disturbing process: Shelley shows how sustained social rejection can destroy a person's sense of their own worth.",
      keyWords: [
        { word: "Self-doubt", def: "Lack of confidence in oneself and one's abilities or worth" },
        { word: "Self-hatred", def: "Intense dislike for or hostility toward oneself" },
      ],
    },
    technique2: {
      title: "UNIVERSAL QUANTIFIERS — 'ALL MEN'",
      analysis:
        "The repeated '**all men**' — 'all men fled,' 'all men disowned' — establishes the totality of rejection. This **universal quantifier** (a word indicating that something applies to every case) leaves no exceptions: not SOME people but ALL people. The Creature's isolation is **absolute** — there is no single person in the world who accepts him. Shelley makes the exclusion total to demonstrate that the Creature's subsequent violence is not a response to individual cruelty but to systemic, universal rejection.",
      secondPoint:
        "The verbs '**fled**' and '**disowned**' represent escalating rejection: people first run from the Creature (physical avoidance) and then deny any connection to him (social erasure). Fleeing is instinctive; disowning is deliberate. The progression from instinct to decision shows that the Creature's exclusion is reinforced at every level — visceral, intellectual, and institutional.",
      keyWords: [
        { word: "Universal quantifier", def: "A word like 'all' or 'every' indicating something applies without exception" },
        { word: "Systemic", def: "Embedded in the structures and systems of society rather than individual choices" },
        { word: "Social erasure", def: "The deliberate removal of someone from social recognition or connection" },
      ],
    },
    context: {
      points: [
        {
          label: "PHYSIOGNOMY",
          text: "The pseudo-science of **physiognomy** — reading character from facial features — was widely accepted in Shelley's era. The Creature is judged monstrous entirely on appearance; no one pauses to assess his character, intelligence, or morality. Shelley critiques a society that judges worth by surface rather than substance.",
        },
        {
          label: "THE OUTSIDER",
          text: "Romantic literature was fascinated by the **outsider** figure — the gifted individual excluded from society (Byron's heroes, Coleridge's Ancient Mariner). The Creature is the ultimate Romantic outsider: more eloquent, sensitive, and self-aware than those who reject him, yet permanently excluded by appearance alone.",
        },
      ],
      keyWords: [
        { word: "Physiognomy", def: "The pseudo-science of judging character from facial features" },
        { word: "Outsider", def: "A person who does not belong to a particular group; one who is excluded" },
        { word: "Romantic", def: "Relating to the literary movement emphasising emotion, individualism, and nature" },
      ],
    },
    wow: {
      title: "THE LOOKING-GLASS SELF (Cooley / Du Bois)",
      analysis:
        "Charles Horton Cooley's **looking-glass self** theory argues that our self-concept is formed by how we imagine others see us: we are mirrors reflecting the social gaze. The Creature's question — 'Was I a monster?' — demonstrates this process: he begins to see himself AS society sees him. W.E.B. Du Bois's related concept of **double consciousness** — 'always looking at one's self through the eyes of others' — adds a racial dimension: marginalised groups are forced to view themselves through the hostile gaze of the dominant culture. The Creature experiences double consciousness: he knows himself to be intelligent, sensitive, and capable of love, yet he is also aware that the world sees him as a monster. These two truths coexist in devastating tension. Shelley dramatises how social perception can become self-perception — how being CALLED a monster is the first step toward BECOMING one.",
      keyWords: [
        { word: "Looking-glass self", def: "Cooley's theory that self-concept is formed by imagining how others see us" },
        { word: "Double consciousness", def: "Du Bois's term for seeing oneself through the hostile eyes of the dominant group" },
        { word: "Social perception", def: "How others view and interpret an individual's identity" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "frankenstein",
    quote: "Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature",
    who: "Robert Walton",
    act: "Letter 4",
    themes: ["Nature & Sublime", "Science & Emotion", "Isolation & Connection", "Beauty & Suffering"],
    keyQuote: {
      text: '"Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature"',
      highlight: "broken",
      note: "Walton's description of Victor reveals the paradox of the Romantic genius: broken by his own ambition yet still capable of profound aesthetic sensitivity.",
    },
    technique1: {
      title: "CONCESSIVE CLAUSE / PARADOX",
      analysis:
        "The **concessive** clause ('Even broken in spirit **as he is**') acknowledges Victor's destruction before asserting his continuing sensitivity — creating a **paradox**: brokenness does not diminish aesthetic feeling but may actually deepen it. Shelley suggests that suffering enhances perception — the broken person sees beauty more intensely precisely because they understand fragility. This is the **Romantic** view of the artist: damaged, isolated, but more alive to beauty than ordinary people.",
      secondPoint:
        "The **superlative** 'no one can feel **more deeply**' isolates Victor at the extreme of human sensitivity — he is the most feeling person alive. This positions suffering as a credential: Victor's pain qualifies him to perceive beauty that others miss. Shelley presents a fundamentally **aristocratic** view of suffering — some people feel more than others, and their greater feeling is both their gift and their curse.",
      keyWords: [
        { word: "Concessive", def: "A clause acknowledging one point while asserting a contrasting one" },
        { word: "Superlative", def: "The highest degree of comparison; expressing the extreme" },
        { word: "Romantic genius", def: "The idea that artistic brilliance comes with emotional suffering and isolation" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Victor **stagnates** in a peculiar way: his aesthetic sensitivity survives his moral collapse. He can still FEEL beauty but cannot ACT ethically. This disconnection between feeling and doing is a form of moral stagnation — emotion without responsibility, sensitivity without action. Shelley questions whether aesthetic feeling without moral courage has any value.",
      keyWords: [
        { word: "Disconnection", def: "A lack of connection between elements that should be linked" },
        { word: "Moral stagnation", def: "The inability to grow or act ethically despite emotional awareness" },
      ],
    },
    technique2: {
      title: "THE SUBLIME — NATURE'S OVERWHELMING BEAUTY",
      analysis:
        "Shelley invokes the **Sublime** — the Romantic concept of beauty so overwhelming it produces awe, terror, and a sense of human insignificance. Victor's response to nature's beauties connects to **Edmund Burke's** distinction between the **beautiful** (pleasing, gentle, harmonious) and the **Sublime** (vast, terrifying, overwhelming). Victor's broken spirit responds to the Sublime because both share a quality of excess — both are too much for ordinary consciousness to contain.",
      secondPoint:
        "The phrase '**beauties of nature**' positions nature as an aesthetic object — something to be appreciated from outside. This **spectatorial** (relating to watching from a distance) relationship with nature contrasts with the Creature's more **immersive** engagement: the Creature lives IN nature while Victor admires it FROM a distance. Shelley subtly critiques Victor's Romantic aesthetic: it keeps nature at arm's length while claiming to feel it deeply.",
      keyWords: [
        { word: "Sublime", def: "Beauty so overwhelming that it inspires awe, terror, and humility" },
        { word: "Spectatorial", def: "Relating to observing from a distance rather than participating" },
        { word: "Immersive", def: "Deeply involved in or surrounded by an experience" },
      ],
    },
    context: {
      points: [
        {
          label: "THE ROMANTIC SUBLIME",
          text: "The Romantic poets — Wordsworth, Coleridge, Byron, Percy Shelley — saw nature as a source of spiritual renewal and philosophical insight. Mary Shelley both participates in and critiques this tradition: Victor's sensitivity to nature does not save him from moral failure, suggesting that aesthetic feeling alone is insufficient for ethical living.",
        },
        {
          label: "ARCTIC EXPLORATION",
          text: "The frame narrative is set during an **Arctic expedition** — Walton is exploring the North Pole. This setting invokes the Romantic fascination with extreme landscapes and the Sublime terror of nature's hostile beauty. The Arctic is both magnificent and lethal — the perfect Shelleyan landscape.",
        },
      ],
      keyWords: [
        { word: "Romantic", def: "The literary movement (c.1780–1850) emphasising emotion, nature, and individual experience" },
        { word: "Spiritual renewal", def: "The restoration of inner life through contact with nature or beauty" },
        { word: "Arctic expedition", def: "A journey to explore the extreme northern polar regions" },
      ],
    },
    wow: {
      title: "AESTHETIC MORALITY (Schiller / Kant)",
      analysis:
        "Schiller's *Letters on the Aesthetic Education of Man* argued that aesthetic experience — the contemplation of beauty — could bridge the gap between reason and feeling, producing moral improvement. Kant similarly suggested that the experience of the Sublime reveals the **noumenal** (beyond sense experience) dimension of reality. But Shelley's novel challenges both: Victor experiences beauty DEEPLY yet remains morally bankrupt — his aesthetic sensitivity has NOT made him a better person. This is a profound critique of Romantic aesthetics: the assumption that feeling beauty makes you good is exposed as a dangerous illusion. Victor's case proves that aesthetic sensitivity and moral responsibility are separate capacities — you can feel everything and still do nothing. Shelley thus complicates the central Romantic claim that beauty leads to goodness, presenting a character who demonstrates their complete independence.",
      keyWords: [
        { word: "Aesthetic education", def: "Schiller's idea that beauty can develop moral character" },
        { word: "Noumenal", def: "Kant's term for reality beyond sense experience; things as they truly are" },
        { word: "Moral bankruptcy", def: "Complete failure of ethical principles despite other capacities" },
      ],
    },
  },
];
