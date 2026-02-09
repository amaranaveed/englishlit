import { Quote } from "./types";

// ─── GREAT EXPECTATIONS — 6 Quotes ───

export const GREAT_EXPECTATIONS_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "great-expectations",
    quote: "I took her hand in mine, and we went out of the ruined place... I saw no shadow of another parting from her",
    who: "Pip (narrator)",
    act: "Chapter 59 (Final Chapter)",
    themes: ["Love & Redemption", "Social Class", "Growth & Maturity", "Memory & Past"],
    keyQuote: {
      text: '"I took her hand in mine, and we went out of the ruined place... I saw no shadow of another parting from her"',
      highlight: "shadow",
      note: "The novel's ambiguous ending — Pip sees 'no shadow' of parting but does not state they stay together — leaves the reader suspended between hope and uncertainty.",
    },
    technique1: {
      title: "AMBIGUOUS CLOSURE / LITOTES",
      analysis:
        "The phrase 'I saw **no shadow** of another parting' is a masterful **litotes** (understatement through double negation): Pip does not say they stayed together — he says he saw no indication they wouldn't. This **negative construction** refuses definitive closure, leaving the reader to decide whether this is a happy ending or a self-deluding narrator. Dickens crafts hope through the absence of evidence for despair rather than the presence of evidence for joy.",
      secondPoint:
        "The word '**shadow**' carries metaphorical weight: throughout the novel, shadows represent the darkness of Pip's past — guilt, shame, social pretension. The absence of a shadow suggests Pip has finally emerged into light, but shadows are also things that might be missed. Dickens creates an ending that is simultaneously **optimistic** and **precarious** (unstable, uncertain).",
      keyWords: [
        { word: "Litotes", def: "A form of understatement using double negation to express a positive" },
        { word: "Ambiguous closure", def: "An ending that refuses to provide a single definitive interpretation" },
        { word: "Precarious", def: "Not securely held; dependent on uncertain circumstances" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Pip **progresses** from the selfish snob of the middle chapters to a man capable of genuine human connection. His hand-holding — a simple, physical gesture — replaces the grandiose social ambitions that defined his younger self. The progression is toward **humility**: Pip no longer seeks wealth, status, or Estella's admiration but simply her companionship. This is emotional growth through reduction — becoming less, not more.",
      keyWords: [
        { word: "Humility", def: "A modest view of one's own importance; freedom from arrogance" },
        { word: "Emotional growth", def: "The development of deeper understanding and maturity in feelings" },
      ],
    },
    technique2: {
      title: "SPATIAL SYMBOLISM — 'THE RUINED PLACE'",
      analysis:
        "Satis House — Miss Havisham's decayed mansion — functions as a **symbol** of arrested development: a space frozen in time, refusing change. Pip and Estella leaving the 'ruined place' together enacts a **symbolic departure** from the past's grip. The ruin is not only Miss Havisham's but Pip's — his ruined expectations, his ruined pride. By walking out, he walks away from the wreckage of his own illusions.",
      secondPoint:
        "The verb '**went out**' is notably plain — no dramatic exit, no flourish. Dickens employs deliberate **understatement** (expressing something with less intensity than expected) for the novel's conclusion, contrasting sharply with the Gothic excess of Satis House's interior. After 58 chapters of drama, the ending is quiet — suggesting that real life begins when the theatrical trappings of aspiration are left behind.",
      keyWords: [
        { word: "Spatial symbolism", def: "Using physical locations to represent psychological or thematic ideas" },
        { word: "Arrested development", def: "A state where emotional or psychological growth has stopped" },
        { word: "Understatement", def: "Deliberately expressing something with less emphasis than expected" },
      ],
    },
    context: {
      points: [
        {
          label: "THE TWO ENDINGS",
          text: "Dickens originally wrote a bleaker ending where Pip and Estella meet briefly and part. On the advice of Edward Bulwer-Lytton, he rewrote the ending to be more hopeful. This **editorial intervention** complicates interpretation: is the published ending the 'true' ending, or a commercial compromise?",
        },
        {
          label: "VICTORIAN CLASS MOBILITY",
          text: "The novel charts Pip's **social mobility** (movement between social classes) — but reveals it as largely illusory. His wealth comes from a convict, his education from a mad woman, his aspirations from snobbery. Dickens suggests that Victorian class mobility was more fantasy than reality.",
        },
      ],
      keyWords: [
        { word: "Editorial intervention", def: "Changes made to a text at the suggestion of editors or advisers" },
        { word: "Social mobility", def: "The ability to move between social classes" },
        { word: "Illusory", def: "Based on illusion; seeming real but actually false" },
      ],
    },
    wow: {
      title: "THE DEATH OF THE AUTHOR (Barthes)",
      analysis:
        "Roland Barthes's concept of the **death of the author** argues that once a text is published, the author's intentions become irrelevant — meaning is created by the READER, not the writer. The dual endings of *Great Expectations* provide a perfect case study: which ending is 'real'? Barthes would argue that both endings coexist as possibilities within the text, and the reader chooses which to accept. The ambiguity of 'I saw no shadow' is not a failure of authorial clarity but an invitation to **readerly participation** — the reader completes the text through interpretation. Dickens, perhaps accidentally through the revision process, created a text that embodies Barthes's theory: the author's original intention (bleak ending) was overwritten, yet the published ending retains enough ambiguity to preserve both readings. The 'meaning' of the ending is not in the text but in the reader's desire — or refusal — to believe in redemption.",
      keyWords: [
        { word: "Death of the author", def: "Barthes's idea that textual meaning is created by the reader, not the writer" },
        { word: "Readerly participation", def: "The reader's active role in creating meaning through interpretation" },
        { word: "Textual ambiguity", def: "A quality in writing that allows multiple valid interpretations" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "great-expectations",
    quote: "I loved her against reason, against promise, against peace, against hope, against happiness",
    who: "Pip (narrator)",
    act: "Chapter 29",
    themes: ["Love & Obsession", "Self-Destruction", "Social Class", "Identity"],
    keyQuote: {
      text: '"I loved her against reason, against promise, against peace, against hope, against happiness"',
      highlight: "against",
      note: "Pip's confession of love for Estella is structured as a catalogue of self-destruction — each repetition of 'against' acknowledges that this love opposes his own wellbeing.",
    },
    technique1: {
      title: "ANAPHORA / CUMULATIVE NEGATION",
      analysis:
        "The **anaphora** (repetition of 'against') creates a **cumulative** (building through repetition) rhythm that pounds like a heartbeat — or a list of charges in a courtroom. Each 'against' adds another reason Pip should NOT love Estella, yet the sentence continues. The effect is paradoxical: the very structure that catalogues reasons to stop loving simultaneously demonstrates the impossibility of stopping.",
      secondPoint:
        "The five items build from rational ('reason') through social ('promise') to emotional ('peace, hope, happiness'). This **descending trajectory** (moving from higher functions to lower) charts Pip's psychological collapse: his love overrides rationality first, then duty, then inner peace, then hope, and finally the capacity for happiness itself. By the end of the sentence, Pip has nothing left.",
      keyWords: [
        { word: "Anaphora", def: "Repetition of a word or phrase at the beginning of successive clauses" },
        { word: "Cumulative", def: "Increasing in force or significance through successive additions" },
        { word: "Descending trajectory", def: "A pattern of progressive decline or deterioration" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Pip **regresses** in this passage: his self-awareness is complete (he KNOWS this love is destructive) but powerless. This is regression through knowledge — understanding his condition does not free him from it. Dickens presents a grimly realistic view of obsessive love: insight without the power to change is the cruelest form of consciousness.",
      keyWords: [
        { word: "Obsessive", def: "Characterised by persistent, uncontrollable thoughts or feelings" },
        { word: "Impotent awareness", def: "Understanding a destructive pattern without being able to change it" },
      ],
    },
    technique2: {
      title: "FIRST-PERSON RETROSPECTIVE IRONY",
      analysis:
        "The **first-person retrospective** narration — older Pip describing younger Pip — creates **temporal irony** (the gap between past experience and present understanding). The adult narrator can articulate his youthful folly with devastating precision because he has survived it. But the retrospective form also creates sympathy: we hear the older voice's compassion for its younger, foolish self.",
      secondPoint:
        "The word '**loved**' in the past tense carries ambiguity: does Pip still love Estella when he writes this, or has the love ended? The **past tense** could indicate either recovered sanity or permanent damage — an old wound described from a safe distance, or an ongoing condition temporarily disguised by grammar.",
      keyWords: [
        { word: "Retrospective narration", def: "Telling a story from a later point in time, looking back" },
        { word: "Temporal irony", def: "Irony arising from the gap between past experience and present understanding" },
        { word: "Ambiguity", def: "The quality of being open to multiple interpretations" },
      ],
    },
    context: {
      points: [
        {
          label: "COURTLY LOVE CONVENTION",
          text: "Pip's obsessive devotion to an unattainable, cruel woman echoes the medieval **courtly love** tradition — where a knight devotes himself to a lady who may never reciprocate. Dickens both uses and critiques this convention: Pip's love is not noble but pathological, not ennobling but destructive.",
        },
        {
          label: "VICTORIAN MARRIAGE MARKET",
          text: "Victorian society treated marriage as an economic and social transaction — the **marriage market** — where women's value was measured by dowry and social position. Estella is explicitly trained by Miss Havisham to be a weapon in this market: a beautiful object designed to break hearts as revenge for Miss Havisham's own jilting.",
        },
      ],
      keyWords: [
        { word: "Courtly love", def: "A medieval tradition of idealised, devoted love for an unattainable woman" },
        { word: "Pathological", def: "Involving or caused by mental or emotional disorder; compulsive" },
        { word: "Marriage market", def: "The social system treating marriage as an economic transaction" },
      ],
    },
    wow: {
      title: "JOUISSANCE — PAINFUL PLEASURE (Lacan / Barthes)",
      analysis:
        "Lacan's concept of **jouissance** — a pleasure so intense it becomes painful, a desire that sustains itself through its own impossibility — perfectly describes Pip's love for Estella. Pip does not love Estella despite the suffering; he loves her THROUGH the suffering. The obstacles are not impediments to desire but its fuel — if Estella were available, the obsession might collapse. Barthes's **pleasure of the text** adds a literary dimension: readers, too, find pleasure in Pip's pain — the beauty of the sentence derives from the suffering it describes. Dickens creates a **masochistic** (finding satisfaction in suffering) aesthetic: the more Pip suffers, the more beautiful his prose becomes, and the more the reader enjoys it. This troubling alignment of beauty and pain is at the heart of the Victorian novel's appeal.",
      keyWords: [
        { word: "Jouissance", def: "Lacan's term for pleasure so intense it becomes painful; ecstatic suffering" },
        { word: "Masochistic", def: "Deriving satisfaction or meaning from one's own suffering" },
        { word: "Aesthetic", def: "Relating to the appreciation of beauty; a particular vision of what constitutes beauty" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "great-expectations",
    quote: "In a word, I was too cowardly to do what I knew to be right, as I had been too cowardly to avoid doing what I knew to be wrong",
    who: "Pip (narrator)",
    act: "Chapter 6",
    themes: ["Guilt & Conscience", "Moral Cowardice", "Social Class", "Growth & Maturity"],
    keyQuote: {
      text: '"In a word, I was too cowardly to do what I knew to be right, as I had been too cowardly to avoid doing what I knew to be wrong"',
      highlight: "cowardly",
      note: "Pip's unflinching self-analysis identifies moral cowardice — not ignorance — as his defining flaw: he always KNEW the right thing but lacked the courage to do it.",
    },
    technique1: {
      title: "CHIASMUS / SELF-ACCUSATION",
      analysis:
        "The sentence employs **chiasmus** (a reversed parallel structure: right/wrong, do/avoid doing) creating a grammatical mirror that traps Pip in his own logic. The **self-accusation** (blaming oneself without excuse) is remarkable for its honesty: Pip does not blame circumstances, other people, or fate — he names his flaw directly: cowardice. The word 'too' appears twice, suggesting not just cowardice but EXCESSIVE cowardice — more than is normal or forgivable.",
      secondPoint:
        "The phrase '**In a word**' promises brevity — summarising a complex moral failure in a single concept. But the sentence that follows is not brief; it is elaborately constructed. This **performative contradiction** (acting against what one says) mirrors Pip's character: he claims simplicity while demonstrating complexity, promises directness while delivering intricacy.",
      keyWords: [
        { word: "Chiasmus", def: "A rhetorical structure where the second part reverses the order of the first" },
        { word: "Self-accusation", def: "The act of openly blaming oneself without seeking excuses" },
        { word: "Performative contradiction", def: "When the form of an expression contradicts its content" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Paradoxically, this self-condemnation represents **progress**: the ability to identify one's own moral failures is itself a form of growth. The young Pip who stole food for the convict could not articulate his moral position; the older narrator who writes this sentence can. The progression is from **unreflective action** (doing without thinking) to **reflective understanding** (thinking about what was done) — even if the understanding comes too late to change the action.",
      keyWords: [
        { word: "Unreflective", def: "Acting without thinking about the moral implications" },
        { word: "Reflective understanding", def: "The ability to examine and evaluate one's own past actions" },
      ],
    },
    technique2: {
      title: "MORAL PARALYSIS — KNOWING BUT NOT DOING",
      analysis:
        "Dickens identifies a specifically moral form of **paralysis** (inability to act): Pip's problem is not ignorance but the gap between knowledge and action. He KNOWS what is right; he simply cannot DO it. This distinction — between moral knowledge and moral courage — is the novel's most psychologically penetrating insight. Dickens suggests that conscience without courage is useless.",
      secondPoint:
        "The repetition of '**I knew**' emphasises that Pip's failures are deliberate, not accidental. He cannot claim the excuse of ignorance or confusion. This makes his self-judgement more severe: a person who does wrong unknowingly can be forgiven; a person who does wrong knowingly is **culpable** (deserving of blame). Dickens refuses his protagonist the comfort of innocent error.",
      keyWords: [
        { word: "Paralysis", def: "The inability to act or move despite having the will or knowledge to do so" },
        { word: "Culpable", def: "Deserving blame; responsible for wrongdoing" },
        { word: "Deliberate", def: "Done consciously and intentionally; not accidental" },
      ],
    },
    context: {
      points: [
        {
          label: "VICTORIAN CONSCIENCE",
          text: "Victorian culture placed enormous emphasis on **conscience** — the inner moral voice. The evangelical Christian revival stressed individual moral responsibility, making characters like Pip who KNOW right but DON'T DO it particularly disturbing to Dickens's original readers.",
        },
        {
          label: "BILDUNGSROMAN",
          text: "As a **Bildungsroman** (a novel of education and growth), *Great Expectations* tracks Pip's moral development. This passage represents a key stage: the ability to name one's own flaws. The Bildungsroman tradition suggests that self-knowledge is the prerequisite for genuine growth — you must understand your errors before you can transcend them.",
        },
      ],
      keyWords: [
        { word: "Conscience", def: "The inner sense of what is morally right and wrong" },
        { word: "Bildungsroman", def: "A novel tracing a character's moral and psychological development from youth to maturity" },
        { word: "Self-knowledge", def: "Understanding of one's own character, motivations, and flaws" },
      ],
    },
    wow: {
      title: "WEAKNESS OF WILL — AKRASIA (Aristotle)",
      analysis:
        "Aristotle's concept of **akrasia** (weakness of will) — acting against one's own better judgement — describes Pip's condition precisely. Unlike ignorance (not knowing what is right) or vice (not caring), akrasia is the frustrating middle state where knowledge and action diverge. Pip is not bad; he is **akratic** — morally weak. Contemporary psychology confirms Aristotle's insight: knowing that something is wrong (smoking, procrastinating, betraying friends) does not automatically produce the willpower to stop. **Behavioural economics** calls this the 'intention-action gap' — the space between what we know we should do and what we actually do. Dickens's genius is to make this universal human weakness the foundation of an entire novel, forcing readers to recognise their own akrasia in Pip's failures.",
      keyWords: [
        { word: "Akrasia", def: "Aristotle's concept of acting against one's own better judgement; weakness of will" },
        { word: "Intention-action gap", def: "The difference between what people intend to do and what they actually do" },
        { word: "Akratic", def: "Characterised by weakness of will; acting against one's own moral knowledge" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "great-expectations",
    quote: "Suffering has been stronger than all other teaching... I have been bent and broken, but — I hope — into a better shape",
    who: "Estella",
    act: "Chapter 59",
    themes: ["Suffering & Growth", "Love & Redemption", "Gender & Power", "Identity"],
    keyQuote: {
      text: '"Suffering has been stronger than all other teaching... I have been bent and broken, but — I hope — into a better shape"',
      highlight: "broken",
      note: "Estella's final speech acknowledges that her emotional education came not from Miss Havisham's manipulation but from the suffering that followed — and that destruction can paradoxically lead to reconstruction.",
    },
    technique1: {
      title: "PARADOX / METAMORPHIC IMAGERY",
      analysis:
        "The **paradox** — broken into a BETTER shape — suggests that destruction can be constructive. The **metamorphic imagery** (images of transformation through force) invokes metalworking: objects must be broken to be reshaped. Estella frames her suffering not as pointless but as **transformative** (capable of fundamental change), giving meaning to pain by treating it as a necessary stage in growth.",
      secondPoint:
        "The parenthetical '**— I hope —**' is crucial: the dashes isolate 'hope' physically on the page, making it fragile, tentative, and separate from the certainties on either side. Estella does not claim to be better — she HOPES she is. Dickens captures the uncertainty of genuine change: you can never be sure whether suffering has improved you or merely damaged you differently.",
      keyWords: [
        { word: "Paradox", def: "A seemingly contradictory statement containing a deeper truth" },
        { word: "Metamorphic", def: "Relating to transformation through intense pressure or force" },
        { word: "Tentative", def: "Uncertain, hesitant; not fully confident or committed" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Estella's **progression** is the novel's most dramatic: from emotionally frozen weapon to feeling human being. Her capacity to acknowledge suffering — and to hope — represents a complete reversal of Miss Havisham's training. But Dickens makes this progression **costly**: Estella's growth comes only through an abusive marriage and years of unhappiness. The question is whether growth that requires such extreme suffering constitutes genuine progress or simply survival.",
      keyWords: [
        { word: "Reversal", def: "A complete change from one state or direction to its opposite" },
        { word: "Costly", def: "Achieved only through significant sacrifice or suffering" },
      ],
    },
    technique2: {
      title: "PASSIVE CONSTRUCTION — SUFFERED UPON",
      analysis:
        "The **passive construction** — 'I have been bent and broken' — positions Estella as the OBJECT of forces acting upon her, not their agent. She has been bent (by Miss Havisham), broken (by her husband Drummle), and possibly reshaped (by suffering). This grammar reflects women's position in Victorian society: things are done TO them; they are shaped by male and maternal authority rather than shaping themselves.",
      secondPoint:
        "Yet the final phrase — 'into a better shape' — quietly introduces **agency**: the 'better shape' is Estella's own assessment, her own judgement. Within the passive grammar, a core of active selfhood emerges. Dickens gives Estella her own voice precisely at the moment she acknowledges her powerlessness — a **paradox** that reflects the novel's complex view of freedom and constraint.",
      keyWords: [
        { word: "Passive construction", def: "A grammatical structure where the subject receives the action rather than performing it" },
        { word: "Agency", def: "The capacity to act independently and make choices" },
        { word: "Selfhood", def: "The quality of having a distinct individual identity" },
      ],
    },
    context: {
      points: [
        {
          label: "COVERTURE",
          text: "Under the Victorian law of **coverture**, a married woman's legal identity was absorbed into her husband's — she could not own property, sign contracts, or exist independently in law. Estella's 'bending and breaking' within marriage reflects the literal legal reality of Victorian women: marriage could be a form of destruction.",
        },
        {
          label: "FALLEN WOMEN & REDEMPTION",
          text: "Victorian culture was obsessed with the **redemption narrative**: the idea that suffering could purify and improve a person. Estella's speech engages with this convention but complicates it: she does not claim redemption as certain — only hopes for it.",
        },
      ],
      keyWords: [
        { word: "Coverture", def: "The legal doctrine that a married woman's identity was subsumed into her husband's" },
        { word: "Redemption narrative", def: "A story structure where suffering leads to moral improvement" },
        { word: "Purify", def: "To make clean, free from corruption; to improve through suffering" },
      ],
    },
    wow: {
      title: "KINTSUGI — THE ART OF GOLDEN REPAIR (Wabi-Sabi)",
      analysis:
        "The Japanese art of **kintsugi** — repairing broken pottery with gold, making the damage visible and beautiful rather than hiding it — provides a powerful framework for Estella's metaphor. She has been 'broken' but reshaped into something potentially 'better' — not by concealing the damage but by acknowledging it. The philosophy of **wabi-sabi** (finding beauty in imperfection) suggests that brokenness is not failure but authenticity: a repaired object tells the story of its own survival. Estella's 'better shape' is not a return to an earlier, undamaged self (which never existed — she was always Miss Havisham's creation) but a new form that incorporates damage as part of identity. Dickens anticipates the modern trauma-informed insight that healing does not mean erasing the past but integrating it — carrying wounds as evidence of survival rather than marks of defeat.",
      keyWords: [
        { word: "Kintsugi", def: "The Japanese art of repairing broken objects with gold, celebrating the damage" },
        { word: "Wabi-sabi", def: "The Japanese aesthetic of finding beauty in imperfection and transience" },
        { word: "Integrating", def: "Incorporating an experience into one's identity rather than suppressing it" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "great-expectations",
    quote: "I have been informed by a person named Abel Magwitch, that he is the benefactor",
    who: "Mr Jaggers (via Pip's narration)",
    act: "Chapter 39",
    themes: ["Social Class", "Deception & Truth", "Crime & Justice", "Identity"],
    keyQuote: {
      text: '"I have been informed by a person named Abel Magwitch, that he is the benefactor"',
      highlight: "Magwitch",
      note: "The revelation that Pip's wealth came from a convict — not Miss Havisham — shatters his entire social identity, exposing the criminal foundations of 'respectability.'",
    },
    technique1: {
      title: "PERIPETEIA / NARRATIVE REVERSAL",
      analysis:
        "This moment is the novel's **peripeteia** (the turning point where fortune reverses): Pip's entire understanding of his life is overturned in a single revelation. Everything he believed — that Miss Havisham was his patron, that he was destined for Estella, that his gentility was legitimate — collapses. Dickens uses the **dramatic reveal** to restructure the entire novel: every earlier scene must now be reinterpreted in light of this truth.",
      secondPoint:
        "The name '**Abel Magwitch**' carries symbolic weight: 'Abel' evokes the biblical Abel, the innocent victim murdered by his brother Cain, positioning Magwitch as a victim of social injustice. 'Magwitch' sounds sinister and foreign — the kind of name Victorian society would instinctively distrust. Dickens creates a name that embodies the tension between the man's moral innocence and society's prejudiced perception.",
      keyWords: [
        { word: "Peripeteia", def: "A sudden reversal of fortune or circumstances in a narrative" },
        { word: "Dramatic reveal", def: "A narrative moment where hidden truth is suddenly exposed" },
        { word: "Symbolic", def: "Representing something beyond its literal meaning" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "This revelation forces Pip into catastrophic **regression**: his social status, which he believed was his destiny, is revealed as the product of a convict's gratitude. His regression is in self-understanding: the gentleman he thought he was never existed. But this apparent regression is necessary for genuine growth — Pip must lose his false identity before he can build an authentic one.",
      keyWords: [
        { word: "False identity", def: "A self-image based on incorrect beliefs or external pressures" },
        { word: "Authentic", def: "True to one's own nature; genuine rather than constructed" },
      ],
    },
    technique2: {
      title: "IRONIC INVERSION — CONVICT AS CREATOR",
      analysis:
        "The deepest irony is structural: the convict Pip helped as a terrified child on the marshes has repaid that kindness by funding Pip's transformation into a gentleman. The **ironic inversion** (reversing expected relationships) makes the lowest member of society the creator of the highest — the convict fathers the gentleman. Dickens exposes the Victorian class system as artifice: 'gentility' is funded by crime, 'respectability' by a transported felon.",
      secondPoint:
        "Dickens also inverts the **benefactor** relationship: Pip believed he was the recipient of aristocratic patronage (Miss Havisham), the natural right of a talented boy climbing the social ladder. Instead, his wealth is a gift from below — from the class he has learned to despise. This **class inversion** forces Pip to confront his own snobbery: he is repulsed by the very person who made him what he is.",
      keyWords: [
        { word: "Ironic inversion", def: "The reversal of expected relationships or hierarchies" },
        { word: "Benefactor", def: "A person who provides financial or other help" },
        { word: "Class inversion", def: "The reversal of expected social hierarchies" },
      ],
    },
    context: {
      points: [
        {
          label: "TRANSPORTATION",
          text: "Magwitch was **transported** (sent to a penal colony) in Australia — a punishment for serious crimes in the 19th century. Transportation removed convicts from British society permanently; to return was punishable by death. Magwitch's secret support of Pip from Australia exposes the hypocrisy of a society that relies on convict labour while pretending convicts don't exist.",
        },
        {
          label: "SELF-MADE MEN",
          text: "Victorian society celebrated the **self-made man** — the individual who rose through talent and hard work. By revealing Pip's wealth as inherited from a criminal, Dickens dismantles this myth: Pip made himself nothing; everything was given to him. The 'self-made gentleman' is a fiction.",
        },
      ],
      keyWords: [
        { word: "Transportation", def: "The punishment of exile to a distant penal colony" },
        { word: "Self-made man", def: "The Victorian ideal of rising through personal effort and talent" },
        { word: "Hypocrisy", def: "Claiming beliefs or standards that one's actions contradict" },
      ],
    },
    wow: {
      title: "CLASS AS PERFORMANCE (Bourdieu)",
      analysis:
        "Bourdieu's concept of **cultural capital** — the education, manners, and tastes that signal social class — illuminates Pip's situation. Pip acquired cultural capital (gentleman's education, refined manners, London lifestyle) funded by criminal capital (Magwitch's money). Bourdieu would note that the 'legitimate' markers of gentility — clothing, speech, social connections — function as a **disguise** that conceals their origins. Pip's cultural capital is indistinguishable from that of a 'real' gentleman, exposing Bourdieu's central insight: class is not a natural category but a **performance** maintained through the accumulation and display of the right cultural markers. The revelation that Pip's performance is funded by a convict does not change his actual manners, education, or speech — it only changes others' willingness to accept them. Dickens exposes the arbitrary foundation of class distinction: the difference between gentleman and convict is not essence but context.",
      keyWords: [
        { word: "Cultural capital", def: "Bourdieu's term for education, manners, and tastes that signal social class" },
        { word: "Performance", def: "The ongoing enactment of social roles through behaviour, speech, and appearance" },
        { word: "Arbitrary", def: "Based on convention rather than nature; without inherent justification" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "great-expectations",
    quote: "Ask no questions, and you'll be told no lies",
    who: "Mrs Joe / Joe Gargery",
    act: "Chapter 2",
    themes: ["Secrets & Silence", "Power & Control", "Childhood & Innocence", "Social Class"],
    keyQuote: {
      text: '"Ask no questions, and you\'ll be told no lies"',
      highlight: "questions",
      note: "This proverb — used to silence young Pip's curiosity — establishes the novel's world as one built on concealment and enforced ignorance, where truth is a privilege denied to children and the powerless.",
    },
    technique1: {
      title: "PROVERBIAL AUTHORITY / SHUTTING DOWN ENQUIRY",
      analysis:
        "The **proverb** (a short, familiar saying expressing conventional wisdom) is weaponised: it uses the form of traditional wisdom to silence curiosity. By framing the suppression of questions as advice, the speaker transforms **censorship** (the suppression of speech or information) into guidance. Dickens exposes how folk wisdom can function as a tool of control — the proverb sounds helpful but actually forbids the child from understanding his own world.",
      secondPoint:
        "The **conditional structure** — 'ask no questions **and** you'll be told no lies' — creates a false **causal logic** (connecting cause to effect): it implies that questions CAUSE lies, making the questioner responsible for the dishonesty. This is **victim-blaming** through grammar: if Pip receives lies, it's because he asked. Dickens reveals how authority deflects accountability onto the powerless through linguistic sleight of hand.",
      keyWords: [
        { word: "Proverbial", def: "In the form of a familiar saying expressing conventional wisdom" },
        { word: "Censorship", def: "The suppression or prohibition of speech, information, or inquiry" },
        { word: "Victim-blaming", def: "Holding the victim responsible for the harm done to them" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The proverb enforces **stagnation**: by forbidding questions, it prevents growth. Pip is denied the information that would allow him to understand his situation — the secrecy about his dead parents, his benefactor, and his prospects. The adults who use this proverb choose the comfort of silence over the discomfort of truth, keeping Pip intellectually and emotionally frozen in ignorance.",
      keyWords: [
        { word: "Enforced ignorance", def: "The deliberate prevention of someone from learning the truth" },
        { word: "Intellectual stagnation", def: "The prevention of growth in understanding or knowledge" },
      ],
    },
    technique2: {
      title: "MICROCOSMIC TEXT — THE NOVEL IN MINIATURE",
      analysis:
        "This proverb functions as a **microcosm** (a small thing representing a larger whole) of the entire novel: *Great Expectations* is fundamentally about the gap between appearances and truth, between what people are told and what is actually happening. Every major plot development — Pip's benefactor, Estella's parentage, Miss Havisham's motives — is a truth concealed by lies. The proverb establishes the novel's epistemological framework: truth is always hidden, and those who seek it are punished for asking.",
      secondPoint:
        "Dickens places this proverb early in the novel as a **thematic seed** (an early element that grows into the work's major concerns): Pip's entire story is driven by questions — Who is my benefactor? Why does Miss Havisham help me? Who are Estella's parents? — that the adults around him refuse to answer. The novel validates Pip's curiosity against the proverb's suppression: the story proves that you SHOULD ask questions, because what you're told voluntarily is almost always a lie.",
      keyWords: [
        { word: "Microcosm", def: "A small thing that represents or contains the patterns of a larger whole" },
        { word: "Epistemological", def: "Relating to the nature and limits of knowledge" },
        { word: "Thematic seed", def: "An early detail that develops into the work's major themes" },
      ],
    },
    context: {
      points: [
        {
          label: "VICTORIAN CHILDHOOD",
          text: "Victorian children were expected to be '**seen and not heard**' — obedient, quiet, and respectful of adult authority. The proverb enforces this power dynamic: children's curiosity is reframed as impertinence. Dickens, who championed children's rights throughout his career, consistently critiques societies that silence the young.",
        },
        {
          label: "CLASS & KNOWLEDGE",
          text: "Access to information in Victorian England was determined by **class**: education, literacy, legal knowledge, and social awareness were privileges of the wealthy. By denying Pip information, the adults perpetuate his class position — keeping him ignorant keeps him powerless and dependent.",
        },
      ],
      keyWords: [
        { word: "Seen and not heard", def: "Victorian ideal that children should be quiet and obedient" },
        { word: "Impertinence", def: "Rudeness or disrespect, especially from a social inferior" },
        { word: "Class privilege", def: "Advantages available to people of higher social classes" },
      ],
    },
    wow: {
      title: "PEDAGOGY OF THE OPPRESSED (Freire)",
      analysis:
        "Paulo Freire's **Pedagogy of the Oppressed** argues that education systems often function as '**banking models**' — depositing approved knowledge into passive students while suppressing **critical consciousness** (the ability to question and analyse social structures). 'Ask no questions' is the banking model reduced to its essence: accept what you're told; don't think independently. Freire advocated instead for **problem-posing education** — learning through questioning, dialogue, and critical engagement with the world. Pip's entire journey can be read as a movement from banking education (accept your place, don't ask questions) to problem-posing education (who am I really? Who benefits from my ignorance? What is truly valuable?). Dickens anticipates Freire's insight: the suppression of questions is not protection but oppression — and genuine education begins only when the learner dares to ask the questions that authority forbids.",
      keyWords: [
        { word: "Banking model", def: "Freire's term for education that deposits knowledge into passive students" },
        { word: "Critical consciousness", def: "The ability to analyse and question social structures and power relations" },
        { word: "Problem-posing education", def: "Freire's model of learning through questioning and dialogue" },
      ],
    },
  },
];
