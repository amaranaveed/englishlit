import { Quote } from "./types";

// ─── PRIDE AND PREJUDICE — 29 Quotes ───

export const PRIDE_PREJUDICE_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "pride-prejudice",
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife",
    who: "Narrator",
    act: "Chapter 1, Opening Line",
    themes: ["Marriage & Economics", "Class & Social Mobility", "Appearance vs Reality"],
    keyQuote: {
      text: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"',
      highlight: "universally acknowledged",
      note: "Austen's iconic opening line uses devastating irony to expose Regency society's obsession with marriage as economic transaction, establishing the novel's satirical tone.",
    },
    technique1: {
      title: "FREE INDIRECT DISCOURSE / IRONIC NARRATORIAL VOICE",
      analysis:
        "**Free indirect discourse**: the narrator appears to state fact but actually ventriloquises society's **mercenary** (money-driven) assumptions. 'Universally acknowledged' is deeply ironic — what follows is not universal truth but narrow class-bound obsession. 'Must be in want' uses a modal verb of compulsion, as if wealthy men have no choice — **satirising** the **transactional** (exchange-based) marriage market.",
      secondPoint:
        "The sentence's elegant authority disguises the absurdity of its content. Austen uses the form of a truism to deliver social critique — the reader is invited to accept it as wisdom before recognising its irony.",
      keyWords: [
        { word: "Free indirect discourse", def: "A narrative technique blending the narrator's voice with a character's or society's thoughts" },
        { word: "Satirises", def: "Mocks or criticises through humour and exaggeration" },
        { word: "Mercenary", def: "Motivated by money rather than ethics or emotion" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The opening reveals social **stagnation**: Regency society is trapped in cyclical patterns of wealth and marriage. The 'truth' is actually a social construct that the novel will systematically dismantle through Elizabeth's journey of **self-knowledge**.",
      keyWords: [
        { word: "Stagnation", def: "A lack of growth or development" },
        { word: "Social construct", def: "An idea created and maintained by society rather than being natural" },
      ],
    },
    technique2: {
      title: "EPIGRAMMATIC STRUCTURE",
      analysis:
        "The **epigrammatic** (witty, concise) sentence structure mimics the **aphorisms** (wise sayings) of 18th-century essayists — inviting the reader to accept it as wisdom. **Syntactic balance** ('single man'/'good fortune'/'want of a wife') creates false authority — the elegant form disguises the absurdity of the content.",
      secondPoint:
        "This establishes Austen's **dual register**: surface politeness concealing devastating social critique. The entire novel operates on this principle — what appears mannered and gentle is in fact a scalpel.",
      keyWords: [
        { word: "Epigrammatic", def: "Witty, concise, and memorable in expression" },
        { word: "Aphorism", def: "A concise statement expressing a general truth" },
        { word: "Dual register", def: "Operating on two levels of meaning simultaneously" },
      ],
    },
    context: {
      points: [
        {
          label: "REGENCY MARRIAGE MARKET",
          text: "Women could not inherit property (**entailment**), enter professions, or maintain financial independence. Marriage was economic necessity, not romantic choice. The Bennet estate is entailed away to Mr Collins, making the daughters' marriages a matter of survival.",
        },
        {
          label: "CLASS HIERARCHY",
          text: "The landed gentry (Darcy: £10,000/year) and emerging trade wealth (Bingley's fortune from commerce) occupied distinct social tiers. Austen **interrogates** (critically examines) whether birth or character determines worth — a radical question in Regency England.",
        },
      ],
      keyWords: [
        { word: "Entailment", def: "A legal restriction preventing property being inherited by women" },
        { word: "Transactional", def: "Based on an exchange of goods, services, or value" },
      ],
    },
    wow: {
      title: "AUSTEN AS SOCIAL ANATOMIST",
      analysis:
        "Austen performs a literary autopsy on Regency society — the opening sentence is a scalpel disguised as a pleasantry. She anticipates Marx's analysis of the relationship between economic base and social superstructure: marriage is presented as the **ideological** (belief-system) machinery through which wealth is consolidated. The irony is **double-edged**: it mocks both fortune-hunting mothers AND the patriarchal system that makes such hunting necessary for survival. Feminist critic Mary Poovey argues Austen reveals how 'romantic love' is the acceptable face of **economic coercion** (using financial pressure to control behaviour).",
      keyWords: [
        { word: "Social anatomist", def: "One who dissects and examines the structures of society" },
        { word: "Ideological", def: "Relating to a system of ideas and beliefs that shape society" },
        { word: "Economic coercion", def: "Using financial pressure or necessity to force compliance" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "pride-prejudice",
    quote: "Your pride... his pride... for you are really proud of your defects in understanding",
    who: "Elizabeth",
    act: "Volume 3, Chapter 15",
    themes: ["Pride & Prejudice (Self-Knowledge)", "Moral Growth", "Family & Reputation", "Gender & Female Agency"],
    keyQuote: {
      text: '"Your pride... his pride... for you are really proud of your defects in understanding"',
      highlight: "defects",
      note: "Elizabeth criticises her own father — a radical act in Regency society — demonstrating her moral progression and willingness to see clearly without favouritism.",
    },
    technique1: {
      title: "LEXICAL REPETITION / SEMANTIC REFRAMING",
      analysis: "Repetition of 'pride' **reframes** the novel's central concept: Elizabeth redirects the word from Darcy to her own father. This **semantic** (relating to meaning) shift forces re-evaluation of who is truly 'proud' — not social arrogance but intellectual **complacency** (smug self-satisfaction).",
      secondPoint: "'Defects in understanding' is a devastating **polysyllabic** (many-syllabled) critique delivered in Austen's characteristically **restrained register** (controlled level of formality). The formal language makes the accusation all the more cutting.",
      keyWords: [
        { word: "Lexical repetition", def: "Deliberate reuse of a word to shift or deepen its meaning" },
        { word: "Semantic reframing", def: "Changing the meaning or application of a word in a new context" },
        { word: "Complacency", def: "Smug, uncritical satisfaction with oneself" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis: "Elizabeth demonstrates profound **moral progression**: she can now critique her own family with the same rigour she applied to Darcy. This moment shows she has overcome her own **prejudice** — she now sees clearly, without favouritism.",
      keyWords: [
        { word: "Moral progression", def: "Growth in ethical understanding and behaviour" },
        { word: "Rigour", def: "Thoroughness and accuracy in analysis" },
      ],
    },
    technique2: {
      title: "SUBVERSION OF PATERNAL AUTHORITY",
      analysis: "A daughter publicly criticising her father was radical in Regency context where **paternal authority** was near-absolute. Elizabeth's willingness to speak truth to parental power mirrors her refusal to defer to Lady Catherine — consistent **moral courage**.",
      secondPoint: "Austen uses Elizabeth to dismantle the assumption that social hierarchy (father > daughter) equals moral hierarchy. The most **perceptive** (insightful) character in the novel is the one with the least social power — a deliberate **subversion** (undermining) of patriarchal logic.",
      keyWords: [
        { word: "Paternal authority", def: "The absolute power and control held by fathers in a family" },
        { word: "Subversion", def: "Undermining or overthrowing an established system" },
        { word: "Deference", def: "Respectful submission to the judgment of another" },
      ],
    },
    context: {
      points: [
        { label: "FATHERHOOD", text: "Mr Bennet's neglect enabled Lydia's ruin. Regency fathers had absolute legal authority over daughters but Mr Bennet **abdicates** (gives up) this duty. His 'wit' is revealed as moral laziness — entertainment at his family's expense." },
        { label: "ENTAILMENT", text: "The Bennet estate is entailed to Mr Collins. Mr Bennet's failure to save money or discipline his daughters reflects **systemic** (built into the system) irresponsibility enabled by **patriarchal privilege** — the very system that will leave his daughters destitute." },
      ],
      keyWords: [
        { word: "Abdicates", def: "Gives up a responsibility or duty" },
        { word: "Patriarchal privilege", def: "Unearned advantages held by men within a male-dominated system" },
      ],
    },
    wow: {
      title: "THE BILDUNGSROMAN CLIMAX",
      analysis: "This moment completes Elizabeth's **Bildungsroman** (coming-of-age novel) arc: she achieves genuine **self-knowledge**. Unlike conventional Bildungsroman heroes, Elizabeth's growth is not about entering society but seeing through its facades. Austen prefigures the **psychological novel**: internal moral development is the true plot, not external events. By having Elizabeth critique **patriarchal failure**, Austen shows that women's moral vision can surpass men's institutional authority.",
      keyWords: [
        { word: "Bildungsroman", def: "A novel tracing a character's moral and psychological growth from youth to maturity" },
        { word: "Self-knowledge", def: "Understanding of one's own character, motivations, and flaws" },
        { word: "Psychological novel", def: "A novel focused on inner mental and emotional life rather than external events" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "pride-prejudice",
    quote: "In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you",
    who: "Mr Darcy",
    act: "Volume 2, Chapter 11 (First Proposal)",
    themes: ["Pride & Prejudice (Self-Knowledge)", "Class & Social Mobility", "Marriage & Economics", "Appearance vs Reality"],
    keyQuote: {
      text: '"In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you"',
      highlight: "struggled",
      note: "Darcy's first proposal reveals love framed as a battle against his own pride — he declares his feelings while simultaneously insulting Elizabeth's social standing.",
    },
    technique1: {
      title: "SEMANTIC FIELD OF CONFLICT / MILITARY METAPHOR",
      analysis: "'Struggled', '**repressed**' belong to a **semantic field** (group of related words) of warfare and internal conflict. Love is framed as a battle Darcy is losing. Modal verb 'must' suggests **compulsion** — as though love is an uncontrollable force overriding his rational judgment.",
      secondPoint: "'In vain' positions his own pride and class prejudice as the **adversary** (opponent). The irony is that he frames HIS struggle as the focus, not Elizabeth's feelings — revealing his **condescension** despite genuine emotion.",
      keyWords: [
        { word: "Semantic field", def: "A group of words related in meaning" },
        { word: "Repressed", def: "Held back or suppressed by force" },
        { word: "Compulsion", def: "An irresistible urge or force" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis: "Despite appearing to progress (declaring love), Darcy actually **stagnates**: his proposal is still rooted in class superiority. The word 'struggled' reveals he sees loving Elizabeth as **degrading** — his pride remains intact despite the declaration.",
      keyWords: [
        { word: "Condescension", def: "An attitude of patronising superiority" },
        { word: "Degrading", def: "Causing a loss of self-respect; humiliating" },
      ],
    },
    technique2: {
      title: "SYNTACTIC FRAGMENTATION",
      analysis: "Short, punctuated clauses ('It will not do.') mimic someone losing **composure** (self-control) — Darcy's usually controlled, elegant speech breaks down. The **fragmented syntax** contrasts with his social polish, revealing the eruption of genuine emotion through the cracks of his **performative persona** (public mask).",
      secondPoint: "Austen uses form to mirror content: just as Darcy's feelings break through repression, his language breaks through its usual structure. The most emotionally honest moment is also the most linguistically **fractured** — authenticity disrupts artifice.",
      keyWords: [
        { word: "Syntactic fragmentation", def: "Breaking sentences into short, disconnected clauses for dramatic effect" },
        { word: "Composure", def: "The state of being calm and in control" },
        { word: "Performative persona", def: "A constructed public identity designed to be seen by others" },
      ],
    },
    context: {
      points: [
        { label: "CLASS PREJUDICE", text: "Darcy's 'struggle' is against Elizabeth's inferior social standing and embarrassing family. His proposal reveals how class prejudice was **internalised** (absorbed into one's thinking) even by those capable of genuine feeling." },
        { label: "PROPOSALS & FEMALE AUTONOMY", text: "A woman's refusal of a wealthy man was almost unthinkable in Regency society. Elizabeth's rejection of Darcy — and earlier of Mr Collins — represents radical female **autonomy** (self-governance). She risks poverty to preserve her self-respect." },
      ],
      keyWords: [
        { word: "Internalised", def: "Absorbed beliefs so deeply they feel like one's own natural thoughts" },
        { word: "Autonomy", def: "The right or condition of self-governance; independence" },
      ],
    },
    wow: {
      title: "THE PANOPTICON OF CLASS (Foucault)",
      analysis: "Foucault's **panopticon** theory suggests social surveillance makes individuals **self-police** their behaviour. Darcy's 'struggle' is the panoptic effect of class ideology — he has internalised society's rules so deeply that loving across class lines feels like a moral transgression. Austen shows that class is not merely external hierarchy but psychological imprisonment — Darcy is both oppressor and victim of the system. Elizabeth's refusal breaks the panoptic power: she refuses to be grateful for his **condescension**, disrupting the expected script.",
      keyWords: [
        { word: "Panopticon", def: "A system of surveillance that makes people regulate their own behaviour" },
        { word: "Self-policing", def: "Monitoring and controlling one's own behaviour according to social norms" },
        { word: "Condescension", def: "An attitude of patronising superiority towards others" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "pride-prejudice",
    quote: "You are mistaken, Mr Darcy, if you suppose that the mode of your declaration affected me in any other way, than as it afforded me the fullest belief of your arrogance",
    who: "Elizabeth",
    act: "Volume 2, Chapter 11 (First Proposal Refusal)",
    themes: ["Gender & Female Agency", "Pride & Prejudice (Self-Knowledge)", "Class & Social Mobility", "Appearance vs Reality"],
    keyQuote: {
      text: '"You are mistaken, Mr Darcy, if you suppose that the mode of your declaration affected me in any other way, than as it afforded me the fullest belief of your arrogance"',
      highlight: "arrogance",
      note: "Elizabeth's devastating refusal of Darcy's first proposal — she mirrors his own elevated language to dismantle his assumptions, turning politeness into a weapon.",
    },
    technique1: {
      title: "FORMAL REGISTER AS WEAPON",
      analysis: "Elizabeth mirrors Darcy's own elevated register to dismantle his assumptions — she **weaponises** (turns into a weapon) his own **linguistic code** (style of speech) against him. 'Afforded me the fullest belief' is deliberately **polysyllabic** (many-syllabled), excessively formal phrasing that turns politeness into a blade.",
      secondPoint: "The controlled, precise syntax contrasts with Darcy's fragmented proposal — she is composed where he was undone. This verbal mastery positions Elizabeth as Darcy's **intellectual equal** — the very quality that will eventually make their love genuine.",
      keyWords: [
        { word: "Formal register", def: "A highly controlled, elevated level of language" },
        { word: "Weaponises", def: "Turns something into a tool of attack" },
        { word: "Linguistic code", def: "A particular style or system of language use" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis: "Elizabeth appears confident but her judgment is partly driven by Wickham's lies — she doesn't yet recognise her own **prejudice**. However, her refusal to be flattered by wealth marks moral progress from the **mercenary** (money-driven) values of her society.",
      keyWords: [
        { word: "Prejudice", def: "Preconceived opinion not based on reason or experience" },
        { word: "Mercenary", def: "Motivated by money rather than ethics" },
      ],
    },
    technique2: {
      title: "PARALLELISM & ANTITHESIS",
      analysis: "The sentence balances 'declaration' against 'arrogance' — **antithesis** (opposites placed together) where love should produce gratitude but instead produces contempt. **Parallelism** (matching grammatical structures) creates **rhetorical power**: Elizabeth structures her rejection as carefully as a legal argument.",
      secondPoint: "This verbal mastery positions Elizabeth as Darcy's intellectual equal. In Regency conduct books, women were taught to be grateful, modest, and accepting. Elizabeth's articulate, reasoned refusal demolishes the conduct book model of femininity entirely.",
      keyWords: [
        { word: "Parallelism", def: "Using similar grammatical structures for emphasis and balance" },
        { word: "Antithesis", def: "The direct opposite; placing contrasting ideas side by side" },
        { word: "Rhetorical power", def: "The persuasive force of language" },
      ],
    },
    context: {
      points: [
        { label: "FEMALE REFUSAL", text: "Mrs Bennet's horror at Elizabeth rejecting Collins ('I will never see you again') shows the material stakes. Elizabeth risks poverty to preserve her **autonomy** (independence). A woman refusing a wealthy man was almost an act of social rebellion." },
        { label: "CONDUCT LITERATURE", text: "Regency **conduct books** taught women to be grateful, modest, and accepting of male attention. Elizabeth's articulate, reasoned refusal demolishes the conduct book model of femininity — she is neither grateful nor submissive, but devastatingly **articulate**." },
      ],
      keyWords: [
        { word: "Conduct books", def: "Publications instructing women on proper behaviour and social expectations" },
        { word: "Agency", def: "The capacity to act independently and make one's own choices" },
      ],
    },
    wow: {
      title: "SPEECH ACT THEORY (J.L. Austin)",
      analysis: "J.L. Austin's **speech act** theory argues that words don't just describe — they DO things (**performative utterances**). Elizabeth's refusal is a transformative speech act: it fundamentally changes Darcy, forcing genuine self-examination for the first time. Her words shatter his assumption that wealth equals desirability, performing a radical **redistribution of power** in the scene. Austen shows that in a world where women lack legal or financial power, language becomes their most potent tool of **agency** (independent action).",
      keyWords: [
        { word: "Speech act", def: "An utterance that performs an action rather than merely describing something" },
        { word: "Performative utterance", def: "Language that creates change through being spoken" },
        { word: "Redistribution of power", def: "A shift in who holds authority or control in a relationship" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "pride-prejudice",
    quote: "Till this moment I never knew myself",
    who: "Elizabeth",
    act: "Volume 2, Chapter 13 (After Darcy's letter)",
    themes: ["Pride & Prejudice (Self-Knowledge)", "Moral Growth", "Appearance vs Reality"],
    keyQuote: {
      text: '"Till this moment I never knew myself"',
      highlight: "knew",
      note: "The pivotal moment of the entire novel — Elizabeth achieves the self-knowledge that both she and Darcy have lacked, recognising that her own prejudice was as distorting as his pride.",
    },
    technique1: {
      title: "ANAGNORISIS / EPIPHANIC MONOSYLLABLES",
      analysis: "**Anagnorisis** (moment of recognition) — the classical tragic/comic device where the protagonist achieves sudden self-knowledge. Almost entirely **monosyllabic**: 'Till this moment I never knew myself' — simple language carries maximum emotional weight.",
      secondPoint: "The verb 'knew' echoes the novel's **epistemological** (relating to knowledge) concern: how we know others and ourselves. The simplicity of the language is itself the point — the deepest truths require the plainest words.",
      keyWords: [
        { word: "Anagnorisis", def: "The moment in a story when a character makes a critical discovery about themselves" },
        { word: "Epiphanic", def: "Relating to a sudden, revelatory moment of understanding" },
        { word: "Epistemological", def: "Relating to the nature and limits of knowledge" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis: "The **pivotal** moment of the novel: Elizabeth recognises her own prejudice has been as distorting as Darcy's pride. This marks the transition from the novel's first half (misreading) to second half (genuine understanding).",
      keyWords: [
        { word: "Pivotal", def: "Of crucial importance; the point on which everything turns" },
        { word: "Intellectual courage", def: "The willingness to question one's own beliefs and assumptions" },
      ],
    },
    technique2: {
      title: "BREVITY AS STRUCTURAL VOLTA",
      analysis: "The sentence's **brevity** contrasts with Darcy's lengthy letter that precedes it — pages of evidence condensed into eight words. It functions as the structural **volta** (turning point) of the entire novel: everything before this is misperception, everything after is clarity.",
      secondPoint: "Austen's **restraint** mirrors Elizabeth's: rather than dramatic emotion, we get quiet devastation — the most powerful moment is the most **understated** (deliberately held back). Maximum impact through minimum expression.",
      keyWords: [
        { word: "Volta", def: "A turn or shift in thought, argument, or narrative direction" },
        { word: "Restraint", def: "Deliberate holding back of expression for greater effect" },
        { word: "Understated", def: "Presented with deliberate lack of emphasis for greater impact" },
      ],
    },
    context: {
      points: [
        { label: "SELF-KNOWLEDGE & THE ENLIGHTENMENT", text: "The Enlightenment valued rational self-examination. Elizabeth's failure to know herself critiques the limits of individual reason — even the most intelligent are vulnerable to **bias** (unfair prejudgment)." },
        { label: "THE LETTER AS PRIVATE TRUTH", text: "Darcy's letter is a uniquely private form of communication in a novel dominated by public performance. It allows truth to emerge outside social **surveillance** (observation and judgment). The letter becomes the instrument of transformation precisely because it bypasses society's distortions." },
      ],
      keyWords: [
        { word: "Enlightenment", def: "An 18th-century intellectual movement emphasising reason and individual thought" },
        { word: "Bias", def: "An unfair prejudgment or inclination that distorts understanding" },
      ],
    },
    wow: {
      title: "THE MIRROR STAGE (Lacan)",
      analysis: "Lacan's **mirror stage** describes the moment a subject recognises themselves as separate from their constructed **self-image**. Elizabeth's 'I never knew myself' is a literary mirror stage — she sees that her self-image as a rational judge was itself a construction. Austen anticipates psychoanalytic theory: identity is not fixed but a narrative we tell ourselves, vulnerable to disruption. The novel's title is itself a mirror: 'pride' and 'prejudice' apply equally to both protagonists, making the reader **complicit** (sharing involvement) in the same misreading.",
      keyWords: [
        { word: "Mirror stage", def: "The moment of recognising oneself as separate from one's constructed image" },
        { word: "Self-image", def: "The mental picture one has of oneself, often a construction rather than truth" },
        { word: "Constructed identity", def: "A sense of self built from social expectations rather than authentic self-knowledge" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "pride-prejudice",
    quote: "My good opinion once lost is lost for ever",
    who: "Mr Darcy",
    act: "Volume 1, Chapter 11",
    themes: ["Pride & Prejudice (Self-Knowledge)", "Moral Growth", "Appearance vs Reality"],
    keyQuote: {
      text: '"My good opinion once lost is lost for ever"',
      highlight: "for ever",
      note: "Darcy presents inflexibility as a virtue — but the novel will systematically disprove this statement, making it one of the most ironic lines in the text.",
    },
    technique1: {
      title: "EPIGRAM WITH ABSOLUTIST DICTION",
      analysis: "An **epigrammatic** (concise, witty) statement using **absolutist diction** (language allowing no exceptions): 'once' and 'for ever' frame his character as rigid and unforgiving. Darcy presents inflexibility as a virtue — he **conflates** (confuses/merges) stubbornness with moral integrity.",
      secondPoint: "The **declarative** (stated as fact) tone mirrors his social authority: he speaks as though his judgments are natural law, not personal opinion. This linguistic certainty reflects the certainty of his class position — both will be shaken.",
      keyWords: [
        { word: "Epigrammatic", def: "Expressed in a witty, concise, memorable way" },
        { word: "Absolutist diction", def: "Word choices that allow no exceptions or compromise" },
        { word: "Conflates", def: "Merges or confuses two different things inappropriately" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis: "Darcy at his most **stagnant**: he cannot yet see that rigid judgment is a flaw, not a strength. This statement will be tested and disproved by the novel itself — he WILL revise his opinion of Elizabeth's family.",
      keyWords: [
        { word: "Rigidity", def: "Inability or unwillingness to change or adapt" },
        { word: "Character flaw", def: "A weakness in personality that leads to poor decisions" },
      ],
    },
    technique2: {
      title: "DRAMATIC IRONY / PROLEPTIC REVERSAL",
      analysis: "**Dramatic irony**: the reader will watch Darcy systematically change every opinion he claims is permanent. This is a **proleptic reversal** (foreshadowing that hints at its own contradiction) — Darcy's **character arc** is the process of learning to revise, compromise, and grow.",
      secondPoint: "Elizabeth identifies this as a flaw ('**implacable** (unforgiving) resentment IS a shade in a character') — she sees what he cannot. The irony deepens when we realise Elizabeth is equally guilty of fixed opinions, making both characters mirrors of each other.",
      keyWords: [
        { word: "Proleptic reversal", def: "Foreshadowing that hints at the opposite of what is stated" },
        { word: "Implacable", def: "Unable to be appeased; relentlessly unforgiving" },
        { word: "Character arc", def: "The transformation a character undergoes throughout a narrative" },
      ],
    },
    context: {
      points: [
        { label: "ARISTOCRATIC PRIDE", text: "The landed gentry cultivated an image of unchanging moral authority. Darcy's rigidity reflects his class's resistance to social change and the emerging **meritocratic** (based on ability, not birth) values of the Regency period." },
        { label: "PREJUDICE AS SYSTEM", text: "Austen shows that prejudice is not merely individual bias but **systemic** — it is reinforced by wealth, education, and social position until it feels like natural judgment. Darcy's certainty is a product of privilege, not insight." },
      ],
      keyWords: [
        { word: "Meritocratic", def: "Based on individual ability and achievement rather than inherited status" },
        { word: "Systemic", def: "Embedded within the structures and institutions of society" },
      ],
    },
    wow: {
      title: "HEGELIAN DIALECTIC",
      analysis: "Hegel's **dialectic** describes a process where thesis (an idea) meets antithesis (its opposite) to produce synthesis (a new understanding). Darcy's certainty (pride) is the thesis; Elizabeth's challenge (prejudice) is the antithesis. Neither is complete without the other. Austen structures the entire novel as a dialectical process: both protagonists must abandon their fixed positions to reach genuine understanding. This makes Pride and Prejudice not merely a romance but a philosophical argument about the necessity of **intellectual humility** for **moral growth**.",
      keyWords: [
        { word: "Dialectic", def: "A process where opposing ideas clash to produce a new, higher understanding" },
        { word: "Intellectual humility", def: "The willingness to recognise the limits of one's own knowledge" },
        { word: "Moral growth", def: "The development of a deeper ethical understanding over time" },
      ],
    },
  },

  // ─── ELIZABETH — additional quote ───

  {
    id: 7,
    textSlug: "pride-prejudice",
    quote: "There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me",
    who: "Elizabeth",
    act: "Chapter 31",
    themes: ["Gender & Female Agency", "Pride & Prejudice (Self-Knowledge)", "Class & Social Mobility"],
    keyQuote: {
      text: '"There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me"',
      highlight: "courage always rises",
      note: "Elizabeth's self-declaration of independence — spoken to Lady Catherine's nephew Colonel Fitzwilliam, it defines her as a woman who resists social pressure through moral courage rather than social rank.",
    },
    technique1: {
      title: "DECLARATIVE SELF-CHARACTERISATION",
      analysis:
        "Elizabeth uses a **declarative** (stated as fact), assertive tone — 'there **is** a stubbornness' — presenting her defiance not as a choice but as a fundamental aspect of her character. The word '**stubbornness**' is self-deprecating: she reframes what society might call a female fault as a personal strength. This **semantic reclamation** (taking back a negative term and giving it positive meaning) is central to her character.",
      secondPoint:
        "The present tense — 'my courage **always rises**' — creates a sense of **habitual** (regular, repeated) action: this is not a one-off act of bravery but a defining behavioural pattern. The verb '**rises**' suggests emotional and moral elevation — Elizabeth ascends when others would submit.",
      keyWords: [
        { word: "Declarative", def: "A statement made firmly and as established fact" },
        { word: "Semantic reclamation", def: "Taking a negative term and reframing it with positive meaning" },
        { word: "Habitual", def: "Done regularly; forming part of a person's character" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "At this point Elizabeth's defiance is a **fixed trait** rather than a developed one — she has always responded this way. Her courage is genuine but not yet tested by self-knowledge: she resists external pressure but has not yet confronted her own **internal biases**. True moral growth will require turning this courage inward, as she does after reading Darcy's letter.",
      keyWords: [
        { word: "Fixed trait", def: "A characteristic that remains constant rather than developing" },
        { word: "Internal bias", def: "Prejudice within oneself that distorts judgment without conscious awareness" },
      ],
    },
    technique2: {
      title: "PROLEPTIC IRONY",
      analysis:
        "This declaration **foreshadows** Elizabeth's confrontation with Lady Catherine in Chapter 56, where she fulfils exactly this promise — her courage rises directly against aristocratic intimidation. Shakespeare-like, Austen creates **proleptic irony**: Elizabeth describes herself accurately, but the full significance of the statement will only become clear much later in the narrative.",
      secondPoint:
        "The phrase 'at the **will** of others' aligns Elizabeth with Enlightenment values of **individual autonomy** (self-governance) over social conformity. She positions herself against the entire system of deference that Regency society demanded — an implicitly **radical** (challenging fundamental structures) stance for a woman of her class.",
      keyWords: [
        { word: "Proleptic irony", def: "Irony that becomes apparent only later in the narrative" },
        { word: "Individual autonomy", def: "The right and ability to govern oneself independently" },
        { word: "Radical", def: "Challenging the fundamental structures of a system" },
      ],
    },
    context: {
      points: [
        {
          label: "GENDER & DEFIANCE",
          text: "In Regency England, women were expected to be **compliant** (willing to do what others wish) and deferential. Elizabeth's declaration of courage was socially transgressive — a woman openly proud of her stubbornness risked being labelled **impertinent** (rude, disrespectful). Austen frames this as a virtue precisely because it was considered a fault.",
        },
        {
          label: "CLASS & INTIMIDATION",
          text: "Elizabeth faces intimidation from characters above her in class: Lady Catherine, Darcy (initially), even Miss Bingley. Her refusal to be cowed demonstrates that moral courage is independent of social rank — Austen's **meritocratic** (based on ability rather than birth) vision of human worth.",
        },
      ],
      keyWords: [
        { word: "Compliant", def: "Willing to do what others wish; obedient" },
        { word: "Impertinent", def: "Not showing proper respect; rude" },
      ],
    },
    wow: {
      title: "WOLLSTONECRAFT'S VINDICATION",
      analysis:
        "Mary Wollstonecraft argued in *A Vindication of the Rights of Woman* (1792) that women's apparent weakness was not natural but **socially produced** — women were kept weak by being denied education and autonomy. Elizabeth embodies Wollstonecraft's ideal: a woman whose courage is not masculine imitation but genuinely **feminine strength** — rooted in moral conviction rather than physical power. Austen, writing twenty years after Wollstonecraft, creates a practical demonstration of the philosophical argument: Elizabeth proves through action what Wollstonecraft argued through polemic.",
      keyWords: [
        { word: "Socially produced", def: "Created by society rather than being natural or innate" },
        { word: "Feminine strength", def: "Power and resilience expressed through characteristically female modes" },
        { word: "Polemic", def: "A strong verbal or written argument against a belief or position" },
      ],
    },
  },

  // ─── MR DARCY — additional quotes ───

  {
    id: 8,
    textSlug: "pride-prejudice",
    quote: "You taught me a lesson, hard indeed at first, but most advantageous. By you, I was properly humbled",
    who: "Mr Darcy",
    act: "Chapter 58 (Second Proposal)",
    themes: ["Moral Growth", "Pride & Prejudice (Self-Knowledge)", "Class & Social Mobility", "Gender & Female Agency"],
    keyQuote: {
      text: '"You taught me a lesson, hard indeed at first, but most advantageous. By you, I was properly humbled"',
      highlight: "properly humbled",
      note: "Darcy's second proposal reverses the power dynamic of the first — he credits Elizabeth with teaching him to overcome his pride, acknowledging her as his moral educator.",
    },
    technique1: {
      title: "SEMANTIC FIELD OF EDUCATION",
      analysis:
        "The language of learning — '**taught**', '**lesson**', '**advantageous**' — positions Elizabeth as Darcy's **moral tutor**. This inverts the class hierarchy: the socially inferior woman educates the socially superior man. The word '**properly**' is significant — it implies that all previous attempts at humbling him (by society, by rank) were improper or insufficient. Only Elizabeth's challenge achieved genuine **transformation**.",
      secondPoint:
        "The concessive structure — 'hard indeed at first, **but** most advantageous' — enacts the process of growth within the sentence itself: initial pain leading to eventual improvement. Darcy's syntax mirrors his character arc, moving from resistance to acceptance.",
      keyWords: [
        { word: "Moral tutor", def: "A person who teaches another about ethical behaviour through example" },
        { word: "Concessive", def: "A grammatical structure that acknowledges a counterargument before proceeding" },
        { word: "Transformation", def: "A thorough change in form, appearance, or character" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "This represents Darcy's **ultimate progression** — the man who declared 'my good opinion once lost is lost for ever' now acknowledges that his opinions were wrong and that he was improved by being corrected. This is not merely emotional growth but **epistemological** (relating to knowledge) growth: he has learned that his way of knowing the world was flawed.",
      keyWords: [
        { word: "Epistemological growth", def: "Development in how one understands and acquires knowledge" },
        { word: "Self-correction", def: "The ability to recognise and remedy one's own errors" },
      ],
    },
    technique2: {
      title: "PASSIVE VOICE AS SURRENDER",
      analysis:
        "The **passive** construction — 'By **you**, I **was** properly humbled' — places Elizabeth as the active agent and Darcy as the one acted upon. The man who defined himself through certainty and control now **grammatically submits** to Elizabeth's influence. This represents a radical reversal of the Regency gender dynamic, where men were expected to be active agents and women passive recipients.",
      secondPoint:
        "The shift from his first proposal ('I have **struggled**', 'My feelings will **not** be repressed' — active, self-centred) to this second proposal ('By you, **I was** humbled' — passive, other-centred) tracks Darcy's entire moral journey in miniature. Austen uses syntax as **characterisation**: the grammar IS the growth.",
      keyWords: [
        { word: "Passive construction", def: "A sentence structure where the subject receives the action" },
        { word: "Grammatical submission", def: "Using sentence structure that places oneself as acted-upon" },
        { word: "Characterisation through syntax", def: "Using sentence structure to reveal character and development" },
      ],
    },
    context: {
      points: [
        {
          label: "PRIDE & HUMILITY",
          text: "The word 'humbled' directly echoes the novel's title: Darcy's **pride** has been replaced by genuine **humility**. In Regency society, for a man of £10,000 per year to acknowledge a woman of modest means as his moral superior was profoundly **counter-cultural** (going against the prevailing norms). Austen rewards this humility with the novel's happiest ending.",
        },
        {
          label: "MORAL GROWTH",
          text: "Darcy's acknowledgement that Elizabeth 'taught' him implies he views their relationship as **transformative** rather than merely romantic. This aligns with Austen's vision of the ideal marriage as a vehicle for mutual moral improvement — each partner makes the other better. Love here is inseparable from **ethical development**.",
        },
      ],
      keyWords: [
        { word: "Counter-cultural", def: "Going against the prevailing norms and values of society" },
        { word: "Ethical development", def: "Growth in moral understanding and behaviour" },
      ],
    },
    wow: {
      title: "THE PEDAGOGY OF LOVE (bell hooks)",
      analysis:
        "bell hooks argues that genuine love is inseparable from **growth** — to love is to be willing to change. Darcy's second proposal embodies this: his love for Elizabeth is proven not by grand gestures but by his willingness to learn, change, and acknowledge his own flaws. hooks distinguishes between **domination** (seeking to control the other) and **partnership** (mutual growth). Darcy's first proposal was domination ('despite your inferiority, I love you'); his second is partnership ('I was wrong, and you made me better'). Austen, two centuries before hooks, presents love as an **educational relationship** where both parties grow through honest confrontation.",
      keyWords: [
        { word: "Pedagogy of love", def: "The theory that genuine love involves mutual teaching and growth" },
        { word: "Domination", def: "Exercising control or power over another" },
        { word: "Partnership", def: "A relationship of equals working together for mutual benefit" },
      ],
    },
  },
  {
    id: 9,
    textSlug: "pride-prejudice",
    quote: "She is tolerable; but not handsome enough to tempt me",
    who: "Mr Darcy",
    act: "Chapter 3 (Meryton Ball)",
    themes: ["Pride & Prejudice (Self-Knowledge)", "Class & Social Mobility", "Appearance vs Reality", "Gender & Female Agency"],
    keyQuote: {
      text: '"She is tolerable; but not handsome enough to tempt me"',
      highlight: "tempt",
      note: "Darcy's dismissive assessment of Elizabeth at their first meeting — a single sentence that establishes his pride, sets Elizabeth's prejudice in motion, and creates the central dynamic of the entire novel.",
    },
    technique1: {
      title: "LITOTES / DAMNING UNDERSTATEMENT",
      analysis:
        "The adjective '**tolerable**' is devastatingly **dismissive** — it means 'barely acceptable', reducing Elizabeth from a person to a barely passing grade. The construction '**not** handsome **enough** to tempt me' is a **litotes** (understatement through negation) that positions Darcy as the arbiter (judge) of beauty, with Elizabeth failing to meet **his** standard. The comma after 'tolerable' creates a calculated pause before the rejection, as though he has considered the matter and found it wanting.",
      secondPoint:
        "The word '**tempt**' carries moral and even biblical connotations — as though Elizabeth's role is to **tempt** Darcy into lowering his standards, and she has failed even at this. Shakespeare associates female beauty with temptation; Austen's Darcy inherits this **patriarchal gaze** but the novel will systematically dismantle it.",
      keyWords: [
        { word: "Litotes", def: "Understatement through negation, used for ironic or dismissive effect" },
        { word: "Dismissive", def: "Treating something as unworthy of consideration" },
        { word: "Arbiter", def: "A person who judges or has authority to decide" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Darcy is at his most **stagnant** — completely enclosed within his pride and class prejudice. He cannot see Elizabeth clearly because his social assumptions function as a **filter**: she is measured against the standards of his class rather than valued as an individual. The irony is that she will become the most important person in his life — his first judgment will prove to be his most spectacularly wrong.",
      keyWords: [
        { word: "Filter", def: "A distorting lens through which reality is perceived selectively" },
        { word: "Class prejudice", def: "Bias against people based on their social or economic position" },
      ],
    },
    technique2: {
      title: "DRAMATIC IRONY / GENERATIVE INSULT",
      analysis:
        "The reader will watch this dismissal be disproved across the entire novel, creating sustained **dramatic irony**. This is a **generative** (producing consequences) insult: Elizabeth overhears it, and it shapes her entire attitude towards Darcy. The novel's central conflict — pride vs prejudice — is born in this moment. Austen makes a throwaway remark into the most consequential sentence in the text.",
      secondPoint:
        "The line is reported in **free indirect discourse** — the narrator adopts Darcy's voice without directly quoting him, blurring the line between his opinion and objective description. This technique is Austen's signature: she makes readers complicit in judgments they should be questioning.",
      keyWords: [
        { word: "Generative", def: "Having the power to produce future consequences or developments" },
        { word: "Free indirect discourse", def: "A narrative technique blending the narrator's voice with a character's thoughts" },
        { word: "Complicit", def: "Sharing involvement in an action, especially a questionable one" },
      ],
    },
    context: {
      points: [
        {
          label: "CLASS & FIRST IMPRESSIONS",
          text: "Regency society was structured by **first impressions** at public events — balls, assemblies, and social calls were arenas where reputations were established in minutes. Darcy's instant dismissal reflects a class system where worth was assessed through appearance, wealth, and connections rather than character. Austen's novel is itself a sustained argument against judging by first impressions.",
        },
        {
          label: "THE MERYTON BALL",
          text: "Balls were one of the few social spaces where men and women could interact freely. Darcy's refusal to dance — the primary form of cross-gender social interaction — signals his rejection of the community's social rituals. He positions himself as above the local society, a pride that the novel will methodically dismantle.",
        },
      ],
      keyWords: [
        { word: "First impressions", def: "Initial judgments made quickly based on surface information" },
        { word: "Social rituals", def: "Established practices through which community bonds are maintained" },
      ],
    },
    wow: {
      title: "THE HERMENEUTIC CODE (Barthes)",
      analysis:
        "Roland Barthes's **hermeneutic code** describes how narratives create **enigmas** (puzzles, mysteries) that drive the reader forward. Darcy's dismissal generates the novel's central enigma: how will these two people — divided by pride and prejudice — come together? This single sentence creates the **narrative tension** that sustains 60 chapters. Barthes argues that the pleasure of reading depends on the gradual resolution of such enigmas: Austen's genius is to generate maximal readerly desire from a single, casually cruel remark. Every subsequent scene is shaped by the reader's awareness of this initial misjudgment.",
      keyWords: [
        { word: "Hermeneutic code", def: "Narrative elements that pose questions the reader wants answered" },
        { word: "Enigma", def: "A puzzle or mystery that drives narrative forward" },
        { word: "Narrative tension", def: "The suspense created by unresolved conflicts or questions in a story" },
      ],
    },
  },

  // ─── MRS BENNET — 4 quotes ───

  {
    id: 10,
    textSlug: "pride-prejudice",
    quote: "A single man of large fortune; four or five thousand a year. What a fine thing for our girls!",
    who: "Mrs Bennet",
    act: "Chapter 1",
    themes: ["Marriage & Economics", "Family & Reputation", "Class & Social Mobility"],
    keyQuote: {
      text: '"A single man of large fortune; four or five thousand a year. What a fine thing for our girls!"',
      highlight: "fine thing for our girls",
      note: "Mrs Bennet's very first dialogue in the novel — she reduces Bingley to a financial figure and marriage to a transaction, establishing the economic anxiety that drives much of the plot.",
    },
    technique1: {
      title: "ECONOMIC QUANTIFICATION",
      analysis:
        "Mrs Bennet immediately **quantifies** (expresses numerically) Bingley's value — 'four or five **thousand** a year' — reducing a human being to an annual income. The semicolon creates a deliberate **appositive** (renaming) structure: 'large fortune' IS 'four or five thousand a year'. She treats wealth and identity as interchangeable. The exclamatory '**What a fine thing**!' expresses delight at a financial opportunity, not a romantic one.",
      secondPoint:
        "The possessive '**our** girls' reveals Mrs Bennet's view of her daughters as collective assets to be deployed in the marriage market. She does not specify which daughter — any will do, because the goal is family **financial security**, not individual happiness.",
      keyWords: [
        { word: "Quantifies", def: "Expresses something in numerical or measurable terms" },
        { word: "Appositive", def: "A noun placed beside another to rename or explain it" },
        { word: "Financial security", def: "The state of having stable and sufficient economic resources" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Mrs Bennet never changes — this opening declaration of mercenary interest is essentially the same perspective she holds at the novel's close. She is one of Austen's **static** characters, functioning as a satirical constant against which Elizabeth's growth can be measured. Her fixation on money is neither examined nor overcome.",
      keyWords: [
        { word: "Static character", def: "A character who does not undergo significant internal change" },
        { word: "Satirical constant", def: "An unchanging element used to highlight what does change around it" },
      ],
    },
    technique2: {
      title: "AUSTEN'S IRONIC FRAMING",
      analysis:
        "This line follows immediately after the novel's famous opening sentence about 'a single man in possession of a good fortune' needing a wife. Austen creates **structural irony**: the narrator's detached, mock-universal statement becomes Mrs Bennet's breathless personal application. The comedy arises from the gap between the narrator's **ironic distance** and Mrs Bennet's complete **lack of self-awareness**.",
      secondPoint:
        "Mrs Bennet takes the opening sentence's satire entirely at face value — she genuinely believes a rich single man exists to marry one of her daughters. This **dramatic irony** positions the reader as more perceptive than the character: we see through the social convention that Mrs Bennet embodies without question.",
      keyWords: [
        { word: "Structural irony", def: "Irony created by the arrangement and juxtaposition of narrative elements" },
        { word: "Ironic distance", def: "The gap between what is said and what is meant by the narrator" },
        { word: "Lack of self-awareness", def: "Inability to perceive how one appears to others" },
      ],
    },
    context: {
      points: [
        {
          label: "THE ENTAIL & ECONOMIC DESPERATION",
          text: "The Bennet estate is **entailed** (legally restricted) to the nearest male heir, Mr Collins. When Mr Bennet dies, his wife and daughters will lose their home and income. Mrs Bennet's obsession with marriage is therefore not merely comic but rooted in genuine **economic terror** — without wealthy husbands, her daughters face poverty. Austen invites us to laugh at her manner while recognising the system that makes it necessary.",
        },
        {
          label: "MARRIAGE AS MARKET",
          text: "In Regency England, marriage was the **primary economic institution** for women. With no right to inherit equally, own property independently (before marriage), or pursue professional careers, women were financially dependent on making advantageous matches. Mrs Bennet's mercenary approach reflects a brutal social reality beneath the comedy.",
        },
      ],
      keyWords: [
        { word: "Entailed", def: "Legally restricted in inheritance to a specific line of heirs" },
        { word: "Economic terror", def: "Fear driven by the threat of financial ruin" },
      ],
    },
    wow: {
      title: "BOURDIEU'S MARRIAGE MARKET",
      analysis:
        "Pierre Bourdieu describes marriage in pre-modern societies as a form of **economic exchange** — families trade **social capital** (status, connections) and **economic capital** (wealth) through their children's marriages. Mrs Bennet is a perfectly rational actor within Bourdieu's framework: she treats her daughters as bearers of whatever modest social capital the Bennet family possesses and seeks to convert it into economic security through marriage. Austen's satire works on two levels: Mrs Bennet is comic in her lack of **subtlety**, but the system she navigates is deeply serious.",
      keyWords: [
        { word: "Social capital", def: "The networks, relationships, and social status a person holds" },
        { word: "Economic exchange", def: "A transaction in which resources are traded between parties" },
        { word: "Subtlety", def: "The quality of being indirect, delicate, or understated" },
      ],
    },
  },
  {
    id: 11,
    textSlug: "pride-prejudice",
    quote: "If I can but see one of my daughters happily settled at Netherfield, and all the others equally well married, I shall have nothing to wish for",
    who: "Mrs Bennet",
    act: "Chapter 3",
    themes: ["Marriage & Economics", "Family & Reputation", "Gender & Female Agency"],
    keyQuote: {
      text: '"If I can but see one of my daughters happily settled at Netherfield, and all the others equally well married, I shall have nothing to wish for"',
      highlight: "settled",
      note: "Mrs Bennet's definition of maternal success — 'settled' means financially secured through marriage, revealing how the patriarchal system reduces women's life goals to a single transaction.",
    },
    technique1: {
      title: "EUPHEMISM & SEMANTIC EVASION",
      analysis:
        "The word '**settled**' is a **euphemism** (mild word for a harsh reality) — it avoids saying 'married off for money' while meaning exactly that. To be 'settled' implies **finality**: once a daughter is married, her story is over; she has reached her destination. The **passive** connotation (she is settled, not she settles) removes the daughter's agency from the equation entirely.",
      secondPoint:
        "The escalating scope — from '**one** of my daughters' to '**all** the others **equally** well married' — reveals Mrs Bennet's **insatiable** (never satisfied) ambition. One successful match immediately generates the desire for five. The word '**equally**' suggests she measures marriages comparatively, as though they are competing investments.",
      keyWords: [
        { word: "Euphemism", def: "A mild or indirect word used in place of a blunt or harsh one" },
        { word: "Semantic evasion", def: "Using language that avoids directly naming an uncomfortable truth" },
        { word: "Insatiable", def: "Impossible to satisfy; always wanting more" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Mrs Bennet's ambition remains entirely **external** — she measures happiness through social arrangements rather than emotional fulfilment. The phrase 'nothing to wish for' reveals a woman whose entire sense of purpose depends on her children's marriages. She is not incapable of love, but her love is expressed exclusively through the **economic grammar** of the marriage market.",
      keyWords: [
        { word: "External", def: "Coming from outside rather than from within; surface-level" },
        { word: "Economic grammar", def: "The underlying rules and logic of financial exchange" },
      ],
    },
    technique2: {
      title: "CONDITIONAL MOOD / MATERNAL WISH",
      analysis:
        "The **conditional** structure — '**If** I can but see..., I **shall** have nothing to wish for' — frames maternal happiness as contingent on her daughters' marriages. This is simultaneously touching and limiting: her love is genuine (she wants their happiness) but her definition of happiness is entirely **prescribed** (determined by social convention). The 'if/then' logic makes motherhood into a **contractual** arrangement with fate.",
      secondPoint:
        "Austen uses Mrs Bennet's conditional wish to expose a painful irony: a mother whose entire identity depends on events she cannot control — her daughters' desirability to wealthy men. Her anxiety and vulgarity are symptoms of this **structural powerlessness**, not merely personal failings.",
      keyWords: [
        { word: "Conditional", def: "Dependent on something else happening first" },
        { word: "Prescribed", def: "Determined in advance by rules or conventions" },
        { word: "Structural powerlessness", def: "Lack of power caused by the system rather than personal weakness" },
      ],
    },
    context: {
      points: [
        {
          label: "MATERNAL DUTY IN REGENCY",
          text: "A Regency mother's primary duty was the successful marriage of her daughters. Mrs Bennet's obsession reflects a society that measured maternal success through **matchmaking** — a mother who failed to marry off her daughters was considered negligent. Austen simultaneously satirises Mrs Bennet's methods and acknowledges the system that made them necessary.",
        },
        {
          label: "NETHERFIELD AS SYMBOL",
          text: "Netherfield Park represents **genteel wealth** and social elevation. Mrs Bennet doesn't care which daughter ends up there — the estate matters more than the match. This reveals how property and place functioned as markers of social value in Regency England.",
        },
      ],
      keyWords: [
        { word: "Matchmaking", def: "The practice of arranging marriages between suitable partners" },
        { word: "Genteel wealth", def: "Inherited or landed money associated with refined social status" },
      ],
    },
    wow: {
      title: "PERFORMATIVITY (Butler)",
      analysis:
        "Judith Butler argues that gender is **performative** — not an innate quality but a set of repeated **behaviours** that create the appearance of a natural identity. Mrs Bennet's relentless matchmaking is a performance of Regency motherhood: she performs the role of 'anxious mother' so completely that it becomes her entire identity. Butler would argue there is no 'real' Mrs Bennet behind the performance — the performance IS the identity. Austen reveals this by showing that Mrs Bennet's behaviour is a **compulsive repetition** of social scripts rather than a free choice.",
      keyWords: [
        { word: "Performative", def: "Creating reality through repeated actions rather than expressing a pre-existing truth" },
        { word: "Compulsive repetition", def: "An involuntary pattern of behaviour driven by underlying anxiety" },
        { word: "Social script", def: "An expected pattern of behaviour dictated by social norms" },
      ],
    },
  },
  {
    id: 12,
    textSlug: "pride-prejudice",
    quote: "You take delight in vexing me. You have no compassion for my poor nerves",
    who: "Mrs Bennet",
    act: "Chapter 1",
    themes: ["Marriage & Economics", "Family & Reputation", "Gender & Female Agency"],
    keyQuote: {
      text: '"You take delight in vexing me. You have no compassion for my poor nerves"',
      highlight: "poor nerves",
      note: "Mrs Bennet's famous complaint about her 'nerves' — a comic catchphrase that reveals the hyperbolic, self-dramatising nature of her character and the dysfunctional Bennet marriage.",
    },
    technique1: {
      title: "HYPERBOLE & SOMATISATION",
      analysis:
        "Mrs Bennet **externalises** her anxiety through her body — her '**poor nerves**' become a separate entity requiring pity. This **somatisation** (expressing emotional distress through physical symptoms) allows her to avoid examining her real fears: financial ruin and social failure. The adjective '**poor**' personifies her nerves as suffering victims, shifting blame onto Mr Bennet for causing her physical distress.",
      secondPoint:
        "The accusation 'You take **delight**' is **hyperbolic** (wildly exaggerated) — Mr Bennet is dry, not malicious. But Mrs Bennet's exaggeration reveals a real grievance: she feels unheard and unsupported by a husband who uses wit as a **defence mechanism** rather than engaging with her genuine concerns.",
      keyWords: [
        { word: "Somatisation", def: "Expressing emotional distress as physical symptoms" },
        { word: "Hyperbolic", def: "Wildly or deliberately exaggerated for effect" },
        { word: "Defence mechanism", def: "An unconscious psychological strategy to avoid confronting painful feelings" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The 'nerves' refrain recurs throughout the novel without development — Mrs Bennet is always anxious, always blaming others, never reflecting. Her **emotional vocabulary** is limited to complaint and exclamation. She functions as a comic constant: while Elizabeth and Darcy grow in self-knowledge, Mrs Bennet remains trapped in the same patterns.",
      keyWords: [
        { word: "Emotional vocabulary", def: "The range of words and expressions available to describe feelings" },
        { word: "Comic constant", def: "A character element that remains unchanged for humorous effect" },
      ],
    },
    technique2: {
      title: "THE BENNET MARRIAGE AS FOIL",
      analysis:
        "This exchange reveals the **dysfunctional** Bennet marriage — Mr Bennet provokes his wife for entertainment, she responds with theatrical distress. Their relationship functions as a **cautionary foil** to Elizabeth and Darcy's: it shows what happens when a clever man marries a foolish woman for beauty alone. Mr Bennet retreated into irony; Mrs Bennet retreated into nerves.",
      secondPoint:
        "Austen uses the repeated 'nerves' motif to expose gender imbalance in Regency marriage: Mrs Bennet has no real power, so she deploys **emotional manipulation** (conscious or unconscious) as her only available tool. Her 'nerves' are simultaneously comic and a genuine expression of a woman with no other form of influence.",
      keyWords: [
        { word: "Cautionary foil", def: "A contrasting relationship that warns against a particular outcome" },
        { word: "Dysfunctional", def: "Not operating normally; marked by unhealthy patterns" },
        { word: "Emotional manipulation", def: "Using displays of feeling to influence others' behaviour" },
      ],
    },
    context: {
      points: [
        {
          label: "NERVES & FEMININITY",
          text: "In the 18th and 19th centuries, 'nerves' were associated with female **sensibility** — women were believed to have more delicate nervous systems than men. Mrs Bennet's complaint draws on this gendered medical discourse: she claims physical fragility as a form of feminine authority. The irony is that she is actually one of the most **robust** (resilient) characters in the novel.",
        },
        {
          label: "COMIC OPENING",
          text: "Austen opens with dialogue — an unusual narrative choice that immediately dramatises the Bennet marriage dynamic. Mrs Bennet exists primarily through her **speech**, and her speech is characterised by complaint, exclamation, and hyperbole. Austen trusts readers to form judgments through direct observation rather than authorial instruction.",
        },
      ],
      keyWords: [
        { word: "Sensibility", def: "Delicate emotional and physical responsiveness" },
        { word: "Robust", def: "Strong, resilient, and capable of enduring difficulty" },
      ],
    },
    wow: {
      title: "FREUD'S HYSTERIA",
      analysis:
        "Freud's early work on **hysteria** argued that physical symptoms without organic cause (like Mrs Bennet's 'nerves') were expressions of **repressed** psychological distress. Mrs Bennet cannot articulate her real fears — the entail, poverty, social failure — so they emerge as physical complaints. Austen creates a pre-Freudian case study: a woman whose body speaks what her society forbids her mind to say directly. The comedy of Mrs Bennet's nerves conceals a **psychosomatic** truth about the cost of living within a system that offers women anxiety without agency.",
      keyWords: [
        { word: "Hysteria", def: "A historical diagnosis of physical symptoms caused by emotional distress" },
        { word: "Repressed", def: "Pushed out of conscious awareness due to being too painful or threatening" },
        { word: "Psychosomatic", def: "Physical symptoms caused or worsened by mental and emotional factors" },
      ],
    },
  },
  {
    id: 13,
    textSlug: "pride-prejudice",
    quote: "I am sure I cried for two days together when Colonel Miller's regiment went away. I thought I should have broken my heart",
    who: "Mrs Bennet",
    act: "Chapter 7",
    themes: ["Family & Reputation", "Marriage & Economics", "Moral Growth"],
    keyQuote: {
      text: '"I am sure I cried for two days together when Colonel Miller\'s regiment went away. I thought I should have broken my heart"',
      highlight: "broken my heart",
      note: "Mrs Bennet reveals that her obsession with officers and marriage spans her entire life — she was once Lydia, and her emotional immaturity has never developed beyond girlish enthusiasm for red coats.",
    },
    technique1: {
      title: "HYPERBOLE & ARRESTED DEVELOPMENT",
      analysis:
        "The claim of crying for '**two days together**' is characteristically **hyperbolic** — Mrs Bennet exaggerates her past distress as she exaggerates her present. The phrase '**broken my heart**' employs the language of romantic **melodrama** (exaggerated emotional writing) to describe a teenage attachment to soldiers. This **arrested development** (failure to mature beyond an early stage) connects her to Lydia: mother and youngest daughter share the same emotional register.",
      secondPoint:
        "The aside is triggered by Lydia's excitement about officers — creating a chilling **generational echo**. Mrs Bennet unknowingly reveals that Lydia is repeating her own life pattern: unchecked enthusiasm → impulsive attachment → a marriage without depth. Austen uses this moment as **prolepsis** (foreshadowing) of Lydia's elopement.",
      keyWords: [
        { word: "Arrested development", def: "Failure to mature beyond an early emotional or psychological stage" },
        { word: "Melodrama", def: "A dramatic style relying on exaggerated emotions and sensational events" },
        { word: "Generational echo", def: "A pattern of behaviour repeated across generations" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Mrs Bennet demonstrates that she has not matured beyond her youth — she speaks of officers with the same breathless excitement at forty as she felt at fifteen. This **emotional stasis** (lack of change) is her defining characteristic and explains why she cannot guide Lydia: she cannot correct behaviour she still unconsciously endorses.",
      keyWords: [
        { word: "Emotional stasis", def: "A state of no emotional development or change" },
        { word: "Unconsciously endorses", def: "Supports without being aware of doing so" },
      ],
    },
    technique2: {
      title: "AUSTEN'S INDIRECT FORESHADOWING",
      analysis:
        "Austen uses Mrs Bennet's nostalgic aside to **foreshadow** Lydia's disastrous elopement with Wickham — a man in a regiment. The parallel is never stated explicitly; the reader must infer it. This is Austen's characteristic **indirect** narrative method: she trusts the reader to notice patterns and draw conclusions without authorial commentary.",
      secondPoint:
        "The fact that Mrs Bennet sees nothing dangerous in this parallel — she tells the anecdote fondly — reveals her as an **unreliable moral compass**. She cannot protect her daughters because she shares their worst instincts. Mr Bennet's failure to intervene with Lydia is thus compounded by Mrs Bennet's active (if unwitting) encouragement.",
      keyWords: [
        { word: "Indirect foreshadowing", def: "Hinting at future events through parallel situations rather than direct statement" },
        { word: "Unreliable moral compass", def: "A character whose sense of right and wrong cannot be trusted" },
        { word: "Unwitting", def: "Not done on purpose; without conscious awareness" },
      ],
    },
    context: {
      points: [
        {
          label: "OFFICERS & REGENCY ROMANCE",
          text: "Military officers in Regency England were glamorous figures: their red coats, social dancing, and temporary postings created an atmosphere of romantic excitement. For families like the Bennets, officers represented potential husbands. But their **transience** (temporary presence) also made them dangerous — they could seduce and leave without consequence, exactly as Wickham does.",
        },
        {
          label: "FAMILY & MORAL FORMATION",
          text: "Austen consistently shows that children inherit their parents' moral frameworks. Lydia's recklessness mirrors Mrs Bennet's emotional immaturity; Elizabeth's independence mirrors (and improves upon) Mr Bennet's critical intelligence. The family is presented as the primary site of **moral formation** — and the Bennet family is deeply flawed in this regard.",
        },
      ],
      keyWords: [
        { word: "Transience", def: "The quality of lasting only a short time; temporary presence" },
        { word: "Moral formation", def: "The process by which a person's ethical character is shaped" },
      ],
    },
    wow: {
      title: "SOCIAL REPRODUCTION (Bourdieu)",
      analysis:
        "Pierre Bourdieu argues that families **reproduce** their social values across generations — children inherit not just wealth but **dispositions** (habitual tendencies) and **tastes**. Mrs Bennet's revelation that she was once like Lydia demonstrates Bourdieu's point precisely: Lydia has inherited her mother's **habitus** (internalised social behaviour) — the same emotional patterns, the same attraction to officers, the same inability to see beyond immediate pleasure. Austen shows that without intervention (which Mr Bennet fails to provide), social behaviour is **inherited** as surely as an estate — and the entail on behaviour is even harder to break.",
      keyWords: [
        { word: "Social reproduction", def: "The process by which social patterns are passed from generation to generation" },
        { word: "Habitus", def: "Deeply ingrained habits, skills, and dispositions acquired through life experience" },
        { word: "Dispositions", def: "Habitual inclinations or tendencies towards particular behaviours" },
      ],
    },
  },

  // ─── MR BENNET — 4 quotes ───

  {
    id: 14,
    textSlug: "pride-prejudice",
    quote: "For what do we live, but to make sport for our neighbours, and laugh at them in our turn?",
    who: "Mr Bennet",
    act: "Chapter 57",
    themes: ["Family & Reputation", "Moral Growth", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"For what do we live, but to make sport for our neighbours, and laugh at them in our turn?"',
      highlight: "make sport for our neighbours",
      note: "Mr Bennet's defining philosophy — life as mutual entertainment. This witty maxim conceals a deep cynicism born of marital disappointment and an abdication of paternal responsibility.",
    },
    technique1: {
      title: "RHETORICAL QUESTION AS PHILOSOPHY",
      analysis:
        "The **rhetorical question** ('For what do we live, but...') presents Mr Bennet's cynicism as though it were a universal truth. The word '**sport**' reduces human life to entertainment — neighbours exist to be laughed at, and we exist to be laughed at by them. This **reciprocal** (mutually exchanged) mockery becomes Mr Bennet's substitute for genuine engagement with the world.",
      secondPoint:
        "The balanced structure — 'make sport for... **and** laugh at **them** in **our** turn' — creates an **antithetical symmetry** (balanced opposing ideas). Life is a circle of mutual ridicule. This is elegantly expressed but morally **vacant** (empty): it offers no purpose beyond amusement. Mr Bennet uses wit as a shield against the vulnerability of caring.",
      keyWords: [
        { word: "Rhetorical question", def: "A question asked for effect, not expecting an answer" },
        { word: "Reciprocal", def: "Given and received in equal measure by both sides" },
        { word: "Morally vacant", def: "Lacking genuine ethical content or commitment" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Mr Bennet's philosophy has calcified into a **fixed worldview** — he uses irony to maintain emotional distance from everyone, including his own family. His wit is brilliant but **sterile** (producing nothing of value): it observes human folly without attempting to correct it. He has retreated from fatherhood into spectatorship.",
      keyWords: [
        { word: "Calcified", def: "Hardened; become rigid and resistant to change" },
        { word: "Sterile", def: "Unproductive; incapable of generating growth or change" },
      ],
    },
    technique2: {
      title: "IRONY AS EVASION",
      analysis:
        "Mr Bennet's epigram is delivered after Lydia's scandalous elopement — a crisis caused partly by his own neglect. His witty response to catastrophe reveals irony functioning as **evasion**: rather than confronting his failure as a father, he reframes the situation as comedy. Austen shows that wit without responsibility is a form of moral cowardice.",
      secondPoint:
        "The timing is crucial — this philosophical quip comes when his family most needs genuine leadership. Mr Bennet performs wisdom while evading accountability. Austen constructs him as the **inverse** (mirror opposite) of Mrs Bennet: she cares too much about appearances without reflecting; he reflects too much without caring enough to act.",
      keyWords: [
        { word: "Evasion", def: "The act of avoiding something by cleverness or trickery" },
        { word: "Accountability", def: "Being responsible for one's actions and their consequences" },
        { word: "Inverse", def: "The exact opposite or mirror image" },
      ],
    },
    context: {
      points: [
        {
          label: "THE FAILED PATRIARCH",
          text: "Mr Bennet's entertaining detachment has real consequences: Lydia's elopement could have ruined the entire family. Austen presents him as a **cautionary example** of Regency patriarchal failure — a man given absolute authority over his family who uses it only to amuse himself. His intelligence is wasted because it lacks moral application.",
        },
        {
          label: "WIT & CLASS",
          text: "Mr Bennet's style of irony is associated with gentlemanly **urbanity** (polished, refined humour). But Austen shows that urbanity without substance is morally inferior to Mrs Bennet's vulgar but genuine concern for her daughters. Class refinement does not guarantee moral quality.",
        },
      ],
      keyWords: [
        { word: "Cautionary example", def: "A case that warns against a particular behaviour or outcome" },
        { word: "Urbanity", def: "Suave, polished behaviour associated with sophisticated society" },
      ],
    },
    wow: {
      title: "THE SPECTATOR COMPLEX (Kierkegaard)",
      analysis:
        "Kierkegaard distinguishes between the **aesthetic** mode of existence (living as a detached observer of life's comedy) and the **ethical** mode (accepting responsibility and commitment). Mr Bennet lives entirely in the aesthetic mode: he observes, comments, and mocks, but never commits to changing anything. His wit is a form of what Kierkegaard calls **aesthetic despair** — the sophisticated misery of a person who has made detachment into a lifestyle. Austen dramatises the cost of the aesthetic life: while Mr Bennet laughs, Lydia falls.",
      keyWords: [
        { word: "Aesthetic mode", def: "Living as a detached observer, valuing entertainment over commitment" },
        { word: "Ethical mode", def: "Living with responsibility, commitment, and moral engagement" },
        { word: "Aesthetic despair", def: "The hidden misery of living without genuine commitment or purpose" },
      ],
    },
  },
  {
    id: 15,
    textSlug: "pride-prejudice",
    quote: "An unhappy alternative is before you, Elizabeth. From this day you must be a stranger to one of your parents. Your mother will never see you again if you do not marry Mr Collins, and I will never see you again if you do",
    who: "Mr Bennet",
    act: "Chapter 20",
    themes: ["Marriage & Economics", "Gender & Female Agency", "Family & Reputation"],
    keyQuote: {
      text: '"Your mother will never see you again if you do not marry Mr Collins, and I will never see you again if you do"',
      highlight: "I will never see you again if you do",
      note: "Mr Bennet's finest moment — using parallel structure and dry wit to support Elizabeth's independence against Mrs Bennet's mercenary pressure. A rare instance of his irony serving a genuinely protective purpose.",
    },
    technique1: {
      title: "ANTITHETICAL PARALLELISM",
      analysis:
        "The perfectly balanced structure — 'Your **mother** will never see you... if you **do not**... and **I** will never see you... if you **do**' — creates an elegant **parallelism** (identical grammatical structure with reversed meaning). The wit lies in the symmetry: both parents threaten to disown Elizabeth, but for opposite reasons. The effect is devastatingly comic because the form is identical but the substance is contradictory.",
      secondPoint:
        "The word '**stranger**' carries legal and emotional weight — to be a stranger to one's parent in Regency England meant genuine social severance. Mr Bennet uses this serious word within a comic structure, creating **bathos** (an anticlimax from serious to comic) that undercuts Mrs Bennet's melodramatic ultimatum.",
      keyWords: [
        { word: "Antithetical parallelism", def: "Identical grammatical structure used to express opposing ideas" },
        { word: "Bathos", def: "An anticlimax; a sudden shift from the serious to the trivial or comic" },
        { word: "Severance", def: "The state of being cut off or separated" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "This is one of Mr Bennet's few moments of genuine **paternal engagement** — he uses his wit not to evade responsibility but to protect Elizabeth's right to choose. His irony here is **constructive** (building something positive) rather than merely defensive. It shows what he could have been as a father if he applied his intelligence more consistently.",
      keyWords: [
        { word: "Paternal engagement", def: "Active involvement in a child's wellbeing and decisions" },
        { word: "Constructive irony", def: "Using wit to build or protect rather than merely to mock" },
      ],
    },
    technique2: {
      title: "COMIC INTERVENTION & POWER",
      analysis:
        "Mr Bennet's intervention demonstrates the absolute **patriarchal authority** of the Regency father — a single sentence from him overrules Mrs Bennet's sustained campaign. His power is so complete that he can exercise it through humour rather than force. The comedy disguises but does not diminish the power dynamic: Elizabeth is free because her father permits it, not because she has independent legal standing.",
      secondPoint:
        "Austen creates a complex moral moment: we applaud Mr Bennet's support for Elizabeth, but the scene simultaneously exposes the **arbitrary** (based on personal whim) nature of patriarchal power. Elizabeth's freedom depends entirely on having the right kind of father — a point reinforced by the contrast with Charlotte Lucas, whose father does not intervene in her marriage to Collins.",
      keyWords: [
        { word: "Patriarchal authority", def: "The father's power to make decisions for the family" },
        { word: "Arbitrary", def: "Based on personal whim rather than reason or justice" },
        { word: "Legal standing", def: "A person's position and rights under the law" },
      ],
    },
    context: {
      points: [
        {
          label: "MR COLLINS AS HEIR",
          text: "Mr Collins will inherit Longbourn when Mr Bennet dies, making the family homeless. Mrs Bennet's pressure on Elizabeth to accept Collins is therefore rooted in genuine economic fear — not merely snobbery. Mr Bennet's dismissal of this concern, while protecting Elizabeth's happiness, also reflects his characteristic refusal to plan for his family's financial future.",
        },
        {
          label: "THE MARRIAGE REFUSAL",
          text: "A woman refusing a proposal in Regency England was socially risky — she might not receive another. Elizabeth's refusal of Collins (and later of Darcy's first proposal) marks her as **unconventional**: she prioritises personal integrity over financial security, a luxury made possible only by her father's support.",
        },
      ],
      keyWords: [
        { word: "Unconventional", def: "Not following established customs or accepted standards" },
        { word: "Personal integrity", def: "Adherence to one's own moral principles regardless of external pressure" },
      ],
    },
    wow: {
      title: "BENEVOLENT PATRIARCHY (Wollstonecraft's Critique)",
      analysis:
        "Wollstonecraft warns that even **benevolent** patriarchy is still patriarchy — a system where women's freedom depends on men's goodwill is not genuine freedom. Mr Bennet's support for Elizabeth looks like liberation, but it is actually **licensed freedom** — freedom granted by a patriarch rather than claimed by right. Austen's brilliance is in making the reader cheer this scene while simultaneously embedding the critique: Elizabeth needs her father's permission to refuse a man. True equality would not require paternal intervention at all.",
      keyWords: [
        { word: "Benevolent patriarchy", def: "A patriarchal system exercised kindly but still maintaining male authority" },
        { word: "Licensed freedom", def: "Liberty that depends on permission from those in power" },
        { word: "Genuine freedom", def: "Liberty claimed by right, not granted by the goodwill of others" },
      ],
    },
  },
  {
    id: 16,
    textSlug: "pride-prejudice",
    quote: "I am heartily ashamed of myself, Lizzy. But don't despair — it will pass, and no doubt more quickly than it ought",
    who: "Mr Bennet",
    act: "Chapter 48 (After Lydia's Elopement)",
    themes: ["Moral Growth", "Family & Reputation", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"I am heartily ashamed of myself, Lizzy. But don\'t despair — it will pass, and no doubt more quickly than it ought"',
      highlight: "more quickly than it ought",
      note: "Mr Bennet's most self-aware moment — acknowledging his failure as a father while simultaneously predicting, with brutal honesty, that he will return to his habitual laziness. Confession and self-condemnation in one breath.",
    },
    technique1: {
      title: "SELF-AWARE BATHOS",
      analysis:
        "The sentence structure enacts Mr Bennet's character arc in miniature: genuine remorse ('heartily **ashamed**') followed immediately by comic deflection ('more quickly than it **ought**'). The pivot word is '**But**' — it marks the exact moment where self-knowledge collapses back into self-deprecation. He knows himself well enough to predict his own moral failure, yet this knowledge changes nothing.",
      secondPoint:
        "The adverb '**heartily**' initially suggests deep feeling — but 'heartily ashamed' is also a conventional phrase, a **formulaic** (following an established pattern) expression. Austen leaves deliberately ambiguous whether Mr Bennet's shame is genuinely felt or merely conventionally expressed. This ambiguity IS the character.",
      keyWords: [
        { word: "Self-aware bathos", def: "A deliberate anticlimax performed with full consciousness of what one is doing" },
        { word: "Formulaic", def: "Following an established pattern or convention rather than being spontaneous" },
        { word: "Pivot word", def: "A word that marks a turning point in a sentence or argument" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "This is paradoxically a moment of both insight and **regression** — Mr Bennet sees his flaw clearly but announces in advance that he will not correct it. Self-knowledge without self-improvement is the defining failure of his character. He regresses from moral accountability back to ironic detachment, making his confession simultaneously genuine and performative.",
      keyWords: [
        { word: "Regression", def: "A return to a less developed or responsible state" },
        { word: "Performative confession", def: "An admission of guilt that functions more as display than as genuine remorse" },
      ],
    },
    technique2: {
      title: "TRAGIC IRONY BENEATH COMEDY",
      analysis:
        "The comedy of Mr Bennet's self-prediction ('it will pass') carries a **tragic** undertone: he is admitting that he is incapable of sustained moral seriousness. Lydia's near-ruin was caused by his neglect, and he knows he will neglect again. Austen creates a character who has the intelligence to be a great father and the self-knowledge to recognise his failure, yet lacks the will to change — a portrait of **moral inertia** (the tendency to remain in a state of moral laziness).",
      secondPoint:
        "The address to '**Lizzy**' is significant — he shares this confession only with the daughter who most resembles him in intelligence. But where Elizabeth's intelligence leads to growth, Mr Bennet's leads to resignation. The intimate address highlights what they share and where they diverge.",
      keyWords: [
        { word: "Moral inertia", def: "The tendency to continue in a state of moral laziness or avoidance" },
        { word: "Resignation", def: "Acceptance of something undesirable because one feels unable to change it" },
        { word: "Tragic undertone", def: "A sense of inevitable sadness beneath a surface of comedy" },
      ],
    },
    context: {
      points: [
        {
          label: "LYDIA'S ELOPEMENT",
          text: "Lydia's elopement with Wickham threatens the entire Bennet family with social ruin — an unmarried girl living with a man would make her sisters unmarriageable. Mr Bennet had been warned by Elizabeth to restrain Lydia's behaviour and refused. His shame here is the direct consequence of a specific, identifiable **abdication** (giving up) of responsibility.",
        },
        {
          label: "FATHERHOOD IN AUSTEN",
          text: "Austen presents a spectrum of fathers: Mr Bennet (intelligent but neglectful), Sir Walter Elliot in Persuasion (vain and selfish), Mr Woodhouse in Emma (loving but infantile). Mr Bennet is perhaps the most **complex** because his failure is rooted in genuine intelligence turned to the wrong purposes — he could have been the best father and is instead merely the most entertaining one.",
        },
      ],
      keyWords: [
        { word: "Abdication", def: "The act of giving up a responsibility or duty" },
        { word: "Complex", def: "Having many interconnecting parts; not simple to categorise" },
      ],
    },
    wow: {
      title: "AKRASIA (Aristotle)",
      analysis:
        "Aristotle's concept of **akrasia** (weakness of will) describes a person who knows what is right but lacks the will to do it. Mr Bennet is Austen's most perfect akratic character: he sees clearly, judges accurately, and acts inadequately. Aristotle argues that akrasia is worse than simple ignorance — the person who doesn't know better has an excuse; the person who knows and fails does not. Mr Bennet's self-aware confession — 'it will pass, more quickly than it ought' — is a textbook description of akrasia: he narrates his own moral failure in real time, treating it as inevitable rather than choosing to resist it.",
      keyWords: [
        { word: "Akrasia", def: "Weakness of will; acting against one's own better judgment" },
        { word: "Akratic character", def: "A person who knows what is right but consistently fails to do it" },
        { word: "Moral failure", def: "The inability or refusal to act according to one's own ethical standards" },
      ],
    },
  },
  {
    id: 17,
    textSlug: "pride-prejudice",
    quote: "Your mother will never be easy till she has exposed herself in every town in England. Her nerves are his old friends — they will let him know anything",
    who: "Mr Bennet",
    act: "Chapter 41",
    themes: ["Marriage & Economics", "Family & Reputation", "Gender & Female Agency"],
    keyQuote: {
      text: '"Your mother will never be easy till she has exposed herself in every town in England"',
      highlight: "exposed herself",
      note: "Mr Bennet's sardonic assessment of Mrs Bennet — delivered as entertainment rather than concern. The image of national embarrassment reduces his wife's social anxieties to comedy while revealing his contempt for her.",
    },
    technique1: {
      title: "HYPERBOLE & CONTEMPT",
      analysis:
        "The exaggeration '**every town in England**' is deliberately **absurd** — it inflates Mrs Bennet's local embarrassments to a national scale. The verb '**exposed**' carries a double meaning: to embarrass oneself AND to reveal something private. Mr Bennet suggests that Mrs Bennet cannot help revealing her social inadequacy wherever she goes — exposure is her natural state.",
      secondPoint:
        "The phrase 'never be **easy**' ironically echoes Mrs Bennet's own complaints about her nerves. Mr Bennet turns her language back on her: she will never be comfortable because discomfort is her defining mode. This **parasitic wit** (humour that feeds on another's words) shows how the Bennet marriage operates: he converts her distress into his entertainment.",
      keyWords: [
        { word: "Parasitic wit", def: "Humour that feeds off and transforms another person's language or distress" },
        { word: "Absurd", def: "Wildly unreasonable or exaggerated to the point of being ridiculous" },
        { word: "Double meaning", def: "A word or phrase with two possible interpretations" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "This quote encapsulates the dead-end dynamic of the Bennet marriage: he mocks, she complains, nothing changes. Mr Bennet's contempt for his wife is so habitual that it has become **automatic** — he no longer considers whether his words are kind, only whether they are clever. The marriage has fossilised into a pattern of mutual dissatisfaction.",
      keyWords: [
        { word: "Automatic", def: "Done without conscious thought; habitual" },
        { word: "Fossilised", def: "Preserved in a rigid, unchanging form" },
      ],
    },
    technique2: {
      title: "MARITAL DYSFUNCTION AS SOCIAL COMMENTARY",
      analysis:
        "The Bennet marriage is Austen's most sustained study of **incompatibility** — a clever man married to a foolish woman for her beauty, now paying the price in lifelong boredom. Mr Bennet's mockery is the symptom of a marriage without mutual respect. Austen uses them as a **cautionary tale**: their relationship shows what happens when marriage is based on physical attraction and social convention rather than genuine compatibility.",
      secondPoint:
        "For Elizabeth, her parents' marriage is a constant negative example — she determines never to marry without both love and respect. The Bennet marriage thus functions as the **negative catalyst** for Elizabeth's own romantic standards. Every time Mr Bennet mocks Mrs Bennet, he unknowingly teaches Elizabeth what to avoid.",
      keyWords: [
        { word: "Incompatibility", def: "The state of being unable to exist together harmoniously" },
        { word: "Cautionary tale", def: "A story or example that warns against a particular course of action" },
        { word: "Negative catalyst", def: "Something that motivates change by showing what to avoid" },
      ],
    },
    context: {
      points: [
        {
          label: "THE BENNET MARRIAGE",
          text: "Austen describes how Mr Bennet married Mrs Bennet for her youth and beauty, then discovered too late that she was intellectually **vapid** (lacking substance). Unable to divorce (impossible in Regency England), he retreated into his library and his wit. The marriage is a lifelong prison for both: she is mocked by the man she depends on; he is bored by the woman he chose.",
        },
        {
          label: "MARRIAGE AS SOCIAL CONTRACT",
          text: "In Regency England, marriage was effectively **permanent** — divorce required an Act of Parliament and was available only to the wealthy. The Bennet marriage demonstrates the cruelty of this system: two fundamentally incompatible people locked together for life, creating a household that damages their children's emotional development.",
        },
      ],
      keyWords: [
        { word: "Vapid", def: "Offering nothing stimulating or challenging; insipid" },
        { word: "Permanent", def: "Lasting forever; unable to be dissolved or ended" },
      ],
    },
    wow: {
      title: "HABITUAL CONTEMPT (Gottman)",
      analysis:
        "Psychologist John Gottman identifies **contempt** as the single greatest predictor of relationship failure — more destructive than anger, criticism, or withdrawal. Mr Bennet's habitual mockery of Mrs Bennet is a textbook example of Gottman's 'contempt' indicator: he consistently positions himself as superior, treating her as a source of amusement rather than a partner. Austen's genius is in making this contempt entertaining for the reader while simultaneously presenting it as a moral failure. We laugh with Mr Bennet while Austen shows us we shouldn't.",
      keyWords: [
        { word: "Contempt", def: "The feeling that someone is beneath consideration; a lack of respect" },
        { word: "Predictor of failure", def: "A behaviour that reliably indicates a relationship will not survive" },
        { word: "Habitual mockery", def: "A pattern of making fun of someone that has become automatic" },
      ],
    },
  },

  // ─── MR COLLINS — 4 quotes ───

  {
    id: 18,
    textSlug: "pride-prejudice",
    quote: "You ought certainly to forgive them as a Christian, but never to admit them in your sight, or allow their names to be mentioned in your hearing",
    who: "Mr Collins",
    act: "Chapter 48 (Letter about Lydia)",
    themes: ["Family & Reputation", "Appearance vs Reality", "Moral Growth"],
    keyQuote: {
      text: '"You ought certainly to forgive them as a Christian, but never to admit them in your sight, or allow their names to be mentioned in your hearing"',
      highlight: "forgive them as a Christian, but never to admit them",
      note: "Collins's letter after Lydia's elopement — a masterpiece of moral hypocrisy. He recommends Christian forgiveness AND permanent banishment in the same sentence, revealing the gap between his religious professions and his actual values.",
    },
    technique1: {
      title: "OXYMORONIC MORAL LOGIC",
      analysis:
        "The conjunction '**but**' creates an **oxymoron** (self-contradiction) — forgiveness that includes permanent exclusion is not forgiveness at all. Collins uses the word '**certainly**' to present this absurd position as self-evident, revealing his characteristic **pomposity** (inflated self-importance). He adopts the language of Christian charity while recommending its exact opposite.",
      secondPoint:
        "The escalating severity — 'never to **admit** them in your sight, or allow their **names** to be mentioned' — moves from physical banishment to linguistic erasure. Collins doesn't merely recommend avoiding Lydia; he recommends pretending she doesn't exist. This extreme position, delivered in the calm tone of pastoral advice, creates deeply **satirical** comedy.",
      keyWords: [
        { word: "Oxymoron", def: "A figure of speech combining contradictory terms" },
        { word: "Pomposity", def: "An exaggerated sense of one's own importance expressed through language" },
        { word: "Linguistic erasure", def: "The act of making someone invisible by refusing to name them" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Collins never develops moral complexity — his advice is always a reflection of his patron Lady Catherine's values rather than genuine ethical thought. He is an **ideological mouthpiece** (a character who speaks someone else's beliefs), parroting social respectability without understanding its moral content. His Christianity is a costume, not a conviction.",
      keyWords: [
        { word: "Ideological mouthpiece", def: "A person who repeats others' beliefs without genuine understanding" },
        { word: "Social respectability", def: "The appearance of moral propriety according to social standards" },
      ],
    },
    technique2: {
      title: "EPISTOLARY SATIRE",
      analysis:
        "Collins's letter is Austen's finest example of **epistolary satire** (satire through letters). The letter form allows Collins to condemn himself through his own words without authorial comment. He writes with absolute sincerity, unaware that every sentence reveals his hypocrisy and cruelty. The reader sees what Collins cannot: that his advice is monstrous.",
      secondPoint:
        "The phrase 'the **death** of your daughter would have been a blessing in comparison' (from the same letter) intensifies the satire to near-Gothic extremes. Collins, a clergyman, declares that a child's death would be preferable to social disgrace. Austen uses his words to indict an entire moral system that values reputation above human life.",
      keyWords: [
        { word: "Epistolary satire", def: "Satirical comedy delivered through the letter form" },
        { word: "Self-condemning", def: "Revealing one's own moral failures through one's own words" },
        { word: "Indict", def: "To formally charge with a serious fault or crime" },
      ],
    },
    context: {
      points: [
        {
          label: "CLERGY & MORAL AUTHORITY",
          text: "In Regency England, clergymen were expected to provide **moral guidance** to their communities. Collins's absurd advice exposes the gap between clerical authority and genuine moral wisdom. Austen consistently satirises clergymen who use religion for social advancement rather than spiritual purpose — Collins embodies this failing perfectly.",
        },
        {
          label: "HONOUR & REPUTATION",
          text: "Lydia's elopement threatens the Bennet family's **reputation** — in Regency society, one sister's disgrace could make all others unmarriageable. Collins's extreme response reflects how seriously society treated female sexual honour, though his recommendation of permanent banishment shows the system's cruelty at its most explicit.",
        },
      ],
      keyWords: [
        { word: "Moral guidance", def: "Direction on ethical behaviour, traditionally provided by religious figures" },
        { word: "Reputation", def: "The beliefs and opinions held about a person by society" },
      ],
    },
    wow: {
      title: "PERFORMATIVE RELIGION (Žižek)",
      analysis:
        "Slavoj Žižek argues that much religious practice is **performative** rather than genuine — people follow rituals and repeat doctrines without believing in them at any deep level. Collins's Christianity is entirely performative: he uses religious vocabulary ('forgive them as a Christian') as a rhetorical ornament rather than a moral imperative. Žižek calls this **ideological cynicism** — knowing that one's stated values are hollow but continuing to profess them anyway. Collins may not be consciously cynical, but his religion functions as social currency rather than spiritual conviction.",
      keyWords: [
        { word: "Performative religion", def: "Religious practice as social display rather than genuine spiritual belief" },
        { word: "Ideological cynicism", def: "Professing beliefs one does not genuinely hold" },
        { word: "Social currency", def: "Beliefs or behaviours used to gain social advantage" },
      ],
    },
  },
  {
    id: 19,
    textSlug: "pride-prejudice",
    quote: "My reasons for marrying are, first, that I think it a right thing for every clergyman in easy circumstances to set the example of matrimony in his parish",
    who: "Mr Collins",
    act: "Chapter 19 (Proposal to Elizabeth)",
    themes: ["Marriage & Economics", "Gender & Female Agency", "Class & Social Mobility"],
    keyQuote: {
      text: '"My reasons for marrying are, first, that I think it a right thing for every clergyman... to set the example of matrimony"',
      highlight: "reasons for marrying",
      note: "Collins's proposal to Elizabeth — a numbered list of practical reasons for marriage that mentions neither love nor personal feeling. The proposal is a business pitch, not a declaration of emotion.",
    },
    technique1: {
      title: "ENUMERATION / CATALOGUE STRUCTURE",
      analysis:
        "The word '**first**' announces that marriage is a **list** — Collins has prepared numbered reasons like a sermon or parliamentary motion. This **enumeration** (listing in sequence) drains all emotion from what should be an intimate moment. He treats his proposal as a **logical argument** to be won through evidence rather than a question of the heart.",
      secondPoint:
        "The phrase '**right thing**' positions marriage as a moral duty rather than a personal desire. Collins does not want to marry Elizabeth specifically — he wants to marry, and she happens to be conveniently available. The generic language ('every clergyman', 'easy circumstances') reveals that his proposal is a **template** (pre-made form) rather than a personal address.",
      keyWords: [
        { word: "Enumeration", def: "The act of listing items one by one in sequence" },
        { word: "Template", def: "A pre-made format applied without personalisation" },
        { word: "Logical argument", def: "A structured case using reasons and evidence to persuade" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Collins is incapable of genuine emotional engagement — his proposal is a social performance, not a personal expression. He does not see Elizabeth as an individual but as a role to be filled: wife of clergyman. His **emotional illiteracy** (inability to read or express genuine feelings) is not a failure of intelligence but a consequence of a character entirely defined by social convention.",
      keyWords: [
        { word: "Emotional illiteracy", def: "Inability to recognise, understand, or express genuine feelings" },
        { word: "Social performance", def: "Behaviour designed to fulfil social expectations rather than express inner truth" },
      ],
    },
    technique2: {
      title: "DRAMATIC IRONY / COMIC BATHOS",
      analysis:
        "The audience expects a proposal scene to be romantic — Collins instead delivers a **committee report**. This creates **bathos** (anticlimax from the elevated to the mundane): the form of a proposal with the content of a business meeting. The humour derives from the gap between what the genre demands (passion, vulnerability) and what Collins provides (agenda items).",
      secondPoint:
        "Collins's three reasons — duty, Lady Catherine's recommendation, and his own happiness (mentioned last and briefly) — reveal his **priority hierarchy**: institutional obligation first, patron's wishes second, personal feeling a distant third. Elizabeth is not even mentioned by name in his reasons. Austen satirises a marriage system that could produce such a proposal.",
      keyWords: [
        { word: "Committee report", def: "A formal, impersonal summary of conclusions and recommendations" },
        { word: "Priority hierarchy", def: "The ordering of values from most to least important" },
        { word: "Genre expectations", def: "What audiences anticipate from a particular type of scene or text" },
      ],
    },
    context: {
      points: [
        {
          label: "THE ENTAIL & COLLINS",
          text: "Collins will inherit Longbourn — by proposing to Elizabeth, he offers a way to keep the estate in the family. His proposal is therefore partly **reparative** (intended to fix a problem): he sees himself as solving the entail crisis. This makes his proposal simultaneously practical (solving the family's financial problem) and absurd (delivered without any human warmth).",
        },
        {
          label: "LADY CATHERINE'S INFLUENCE",
          text: "Collins's second reason for marrying is that Lady Catherine 'has condescended to advise me to marry'. His patron's recommendation ranks above his own happiness. This reveals Collins as a man entirely defined by **deference** (submissive respect) to authority — he cannot make a personal decision without aristocratic permission.",
        },
      ],
      keyWords: [
        { word: "Reparative", def: "Intended to fix, repair, or make amends for something" },
        { word: "Deference", def: "Humble submission and respect towards a person of higher rank" },
      ],
    },
    wow: {
      title: "COMMODIFICATION OF MARRIAGE (Marx)",
      analysis:
        "Marx argues that capitalism transforms all human relationships into **commodity exchanges** — everything, including love, is reduced to its market value. Collins's proposal is a perfect example: he has commodified marriage into a list of practical advantages, stripping away its emotional, spiritual, and personal dimensions. Elizabeth becomes a commodity to be acquired (the right wife at the right price in the right location). Austen's satire anticipates Marx's critique by decades: she shows how a rigidly hierarchical, property-obsessed society produces people who cannot distinguish between a business transaction and an intimate human relationship.",
      keyWords: [
        { word: "Commodification", def: "The process of turning something into a commodity to be bought and sold" },
        { word: "Commodity exchange", def: "A transaction where items are traded based on their market value" },
        { word: "Market value", def: "The worth of something measured in economic rather than human terms" },
      ],
    },
  },
  {
    id: 20,
    textSlug: "pride-prejudice",
    quote: "Your portion is unhappily so small that it will in all likelihood undo the effects of your loveliness and amiable qualifications",
    who: "Mr Collins",
    act: "Chapter 19",
    themes: ["Marriage & Economics", "Gender & Female Agency", "Class & Social Mobility"],
    keyQuote: {
      text: '"Your portion is unhappily so small that it will in all likelihood undo the effects of your loveliness and amiable qualifications"',
      highlight: "undo the effects of your loveliness",
      note: "Collins tells Elizabeth she should accept him because her poverty makes her undesirable to anyone else — framing a devastating insult as a kindness. The cruelty is amplified by his total unawareness of how offensive he is being.",
    },
    technique1: {
      title: "BACKHANDED COMPLIMENT",
      analysis:
        "Collins constructs a **backhanded compliment** (a remark that seems to praise but actually insults): Elizabeth has 'loveliness and amiable qualifications' BUT these are negated by her small fortune. The verb '**undo**' is devastating — it means her personal qualities are literally cancelled by her poverty. Beauty and character count for nothing without money.",
      secondPoint:
        "The word '**unhappily**' pretends to sympathise while delivering a financial verdict. The formal diction — '**portion**', '**in all likelihood**', '**qualifications**' — gives the insult the tone of a legal assessment. Collins speaks like a **valuer** (a person who assesses worth) rather than a suitor, calculating Elizabeth's market value with cold precision.",
      keyWords: [
        { word: "Backhanded compliment", def: "A remark that appears to praise but actually insults" },
        { word: "Negated", def: "Made ineffective; cancelled out" },
        { word: "Valuer", def: "A person who assesses the worth or price of something" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Collins cannot perceive that he is being insulting because he operates entirely within an **economic logic** of marriage — to him, telling Elizabeth her fortune is too small is simply stating a fact, like informing someone the weather is bad. He lacks the emotional intelligence to understand that reducing a person to their financial worth is dehumanising.",
      keyWords: [
        { word: "Economic logic", def: "A way of thinking that evaluates everything in financial terms" },
        { word: "Dehumanising", def: "Treating a person as less than human; removing their dignity" },
      ],
    },
    technique2: {
      title: "AUSTEN'S SATIRICAL LENS",
      analysis:
        "Austen positions the reader to see what Collins cannot: that his 'generosity' in proposing despite Elizabeth's poverty is itself an insult. The satire operates through **perspectival irony** — Collins's perspective (I am doing her a favour) is completely at odds with the reader's (he is being appalling). Elizabeth's rejection is thus simultaneously a personal decision and a moral correction of his entire worldview.",
      secondPoint:
        "The passage also satirises the **marriage market** itself: Collins is not wrong that Elizabeth's small portion reduces her options. His cruelty lies not in the observation but in its delivery — he transforms a systemic injustice into a personal selling point. He exploits the very system that disadvantages Elizabeth.",
      keyWords: [
        { word: "Perspectival irony", def: "Irony created by the gap between a character's view and the reader's view" },
        { word: "Marriage market", def: "The social system treating courtship as an economic transaction" },
        { word: "Systemic injustice", def: "Unfairness built into the structure of society itself" },
      ],
    },
    context: {
      points: [
        {
          label: "DOWRIES & PORTIONS",
          text: "A woman's '**portion**' was her dowry — the money she brought to a marriage. The Bennet girls have only £1,000 each (about £50 per year in interest), which was modest by genteel standards. Collins's assessment is financially accurate but morally repugnant: he treats Elizabeth's worth as a sum to be calculated.",
        },
        {
          label: "THE ECONOMICS OF REFUSAL",
          text: "Elizabeth's refusal of Collins is socially radical: she rejects financial security in favour of personal integrity. Charlotte Lucas's subsequent acceptance of Collins shows how limited women's choices were — Charlotte marries without love because the alternative (permanent dependence on her family) is worse.",
        },
      ],
      keyWords: [
        { word: "Dowry", def: "Money or property a woman brings to her husband upon marriage" },
        { word: "Socially radical", def: "Acting in a way that challenges fundamental social conventions" },
      ],
    },
    wow: {
      title: "OBJECTIFICATION (Nussbaum)",
      analysis:
        "Martha Nussbaum identifies seven forms of **objectification** — treating a person as a thing. Collins's proposal commits at least three: **instrumentality** (treating Elizabeth as a tool for his purposes), **fungibility** (treating her as interchangeable with other possible wives), and **denial of subjectivity** (ignoring her feelings and perspective). His financial assessment of Elizabeth is objectification in its purest form: he literally calculates her **monetary value** and finds it wanting. Austen's satire is devastating because Collins doesn't know he's objectifying Elizabeth — he believes he's being helpful.",
      keyWords: [
        { word: "Objectification", def: "Treating a person as an object rather than a human being" },
        { word: "Instrumentality", def: "Treating someone as a tool or means to an end" },
        { word: "Fungibility", def: "Treating someone as interchangeable with others of the same type" },
      ],
    },
  },
  {
    id: 21,
    textSlug: "pride-prejudice",
    quote: "Lady Catherine de Bourgh... has condescended to advise me to marry as soon as I can, provided I choose with discretion",
    who: "Mr Collins",
    act: "Chapter 19",
    themes: ["Class & Social Mobility", "Marriage & Economics", "Appearance vs Reality"],
    keyQuote: {
      text: '"Lady Catherine de Bourgh... has condescended to advise me to marry as soon as I can, provided I choose with discretion"',
      highlight: "condescended to advise",
      note: "Collins cites Lady Catherine's permission as a reason for marriage — revealing a man who cannot make personal decisions without aristocratic authorisation. The word 'condescended' is used admiringly, exposing his complete internalisation of class hierarchy.",
    },
    technique1: {
      title: "DEFERENCE AS CHARACTER DEFINING",
      analysis:
        "The verb '**condescended**' means 'lowered herself' — Collins uses it as a **compliment**, grateful that a noblewoman stooped to advise him. He does not see the condescension as patronising but as proof of her gracious superiority. This reveals his complete **internalisation** (absorption into his own identity) of class hierarchy: he genuinely believes Lady Catherine is a higher form of being.",
      secondPoint:
        "The qualifier '**provided I choose with discretion**' shows that even Collins's marriage must meet Lady Catherine's standards. He exercises no independent judgment — his patron dictates his career, his housing, and now his wife. Collins is less a person than an **extension** (continuation) of Lady Catherine's will.",
      keyWords: [
        { word: "Internalisation", def: "Absorbing external beliefs so deeply they become part of one's identity" },
        { word: "Condescension", def: "An attitude of patronising superiority; lowering oneself to another's level" },
        { word: "Extension", def: "A continuation or expansion of something else" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Collins's subservience to Lady Catherine defines him entirely — he has no identity independent of his patron. He does not marry for love, for companionship, or even for self-interest, but because Lady Catherine told him to. His **agency** (ability to act independently) has been entirely surrendered to aristocratic authority.",
      keyWords: [
        { word: "Subservience", def: "Willingness to obey others unquestioningly" },
        { word: "Agency", def: "The capacity to act independently and make one's own choices" },
      ],
    },
    technique2: {
      title: "COMIC SATIRE OF PATRONAGE",
      analysis:
        "Austen satirises the **patronage system** — the practice of aristocrats controlling the careers and lives of lower-ranking dependents. Collins's living (his job as clergyman) was given to him by Lady Catherine, making him financially dependent on her approval. His proposal to Elizabeth is thus not really his proposal at all — it is Lady Catherine's, delivered through her proxy.",
      secondPoint:
        "The phrase 'as **soon** as I can' reveals an urgency driven by obedience, not desire. Collins treats Lady Catherine's suggestion as a **command** — 'condescended to advise' means 'ordered in genteel language'. The comedy lies in Collins's failure to recognise that advice from a patroness is not kindness but control.",
      keyWords: [
        { word: "Patronage system", def: "A system where powerful individuals control the careers of lower-ranking dependents" },
        { word: "Proxy", def: "A person authorised to act on behalf of another" },
        { word: "Command", def: "An order given by someone in authority" },
      ],
    },
    context: {
      points: [
        {
          label: "THE CHURCH & PATRONAGE",
          text: "Church livings in Regency England were often in the **gift** (power of appointment) of local landowners. Lady Catherine gave Collins his living at Hunsford, making him entirely dependent on her continued favour. This patronage system meant clergymen often served their patrons rather than serving God — a corruption Austen consistently satirises.",
        },
        {
          label: "CLASS DEFERENCE",
          text: "Collins represents the **extreme** of class deference — he worships Lady Catherine's rank rather than her character. Austen uses him to expose how class hierarchy distorts human relationships: Collins cannot see Lady Catherine clearly because her title functions as a **blinding light**, making genuine assessment impossible.",
        },
      ],
      keyWords: [
        { word: "Gift", def: "The power of appointment to a church position held by a patron" },
        { word: "Class deference", def: "Automatic respect shown to people of higher social rank" },
      ],
    },
    wow: {
      title: "FALSE CONSCIOUSNESS (Marx & Engels)",
      analysis:
        "Marx and Engels describe **false consciousness** as the condition of oppressed people who adopt the beliefs and values of their oppressors. Collins perfectly embodies this: he celebrates the very system that keeps him subordinate. He doesn't resent Lady Catherine's control — he venerates it. His gratitude for her 'condescension' shows how class hierarchy reproduces itself: the subordinated person **internalises** the values of the dominant class, making rebellion psychologically impossible. Austen shows that the most effective form of control is the one the controlled person welcomes.",
      keyWords: [
        { word: "False consciousness", def: "Accepting as natural or good the beliefs of those who oppress you" },
        { word: "Subordinated", def: "Placed in a lower or secondary position of power" },
        { word: "Venerates", def: "Regards with great respect, almost worship" },
      ],
    },
  },

  // ─── LADY CATHERINE DE BOURGH — 4 quotes ───

  {
    id: 22,
    textSlug: "pride-prejudice",
    quote: "I have been used to have my opinion consulted in all matters. I am not in the habit of brooking disappointment",
    who: "Lady Catherine",
    act: "Chapter 56 (Confrontation with Elizabeth)",
    themes: ["Class & Social Mobility", "Gender & Female Agency", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"I have been used to have my opinion consulted in all matters. I am not in the habit of brooking disappointment"',
      highlight: "brooking disappointment",
      note: "Lady Catherine at her most imperious — she declares her authority as absolute, unable to conceive that anyone might defy her. The word 'brooking' (tolerating) reveals a woman who has never been told 'no'.",
    },
    technique1: {
      title: "IMPERATIVE ABSOLUTISM",
      analysis:
        "The phrase '**all matters**' is an absurd claim — Lady Catherine positions herself as a universal authority, consulted on everything from marriage to music to gardening. The words '**used to**' present this tyranny as **normalised** (made to seem natural through repetition) habit rather than conscious power. She does not assert authority; she assumes it has always existed and always will.",
      secondPoint:
        "The archaic verb '**brooking**' (from Old English 'brūcan', to tolerate) gives her language a feudal grandeur — she speaks as though she were a medieval lord rather than a Regency noblewoman. This **anachronistic** (belonging to an earlier era) diction reveals that Lady Catherine's sense of power is rooted in an older, more absolute model of aristocratic authority.",
      keyWords: [
        { word: "Normalised", def: "Made to appear natural or standard through repeated practice" },
        { word: "Anachronistic", def: "Belonging to a time period other than the one being described" },
        { word: "Imperative", def: "Commanding; expressing an order that must be obeyed" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Lady Catherine represents **total stagnation** — she has never been challenged, never changed, never grown. Her character is defined by the absence of development: born into power, she has lived her entire life within its protective shell. Elizabeth's defiance will be the first genuine resistance she has ever encountered, and she is psychologically unequipped to process it.",
      keyWords: [
        { word: "Total stagnation", def: "A complete absence of change, growth, or development" },
        { word: "Psychologically unequipped", def: "Lacking the mental tools to handle a new situation" },
      ],
    },
    technique2: {
      title: "DRAMATIC IRONY — THE FAILED INTERVENTION",
      analysis:
        "Lady Catherine visits Elizabeth to prevent her marriage to Darcy — but her confrontation has the opposite effect. The **dramatic irony** is devastating: her attempt to intimidate Elizabeth reveals Elizabeth's strength of character to Darcy (who hears about it) and actually encourages him to propose again. Austen creates a perfect **peripeteia** (reversal of fortune): the action taken to prevent an outcome directly causes it.",
      secondPoint:
        "Lady Catherine's absolute certainty — 'I am not in the habit of brooking disappointment' — makes her defeat more complete. She cannot imagine being defied because she has never experienced it. Austen shows that **unchallenged authority** is a form of ignorance: those who have never been disagreed with cannot comprehend disagreement.",
      keyWords: [
        { word: "Peripeteia", def: "A sudden reversal of fortune; an action that produces the opposite of its intended effect" },
        { word: "Unchallenged authority", def: "Power that has never been questioned or resisted" },
        { word: "Confrontation", def: "A hostile meeting or face-to-face encounter" },
      ],
    },
    context: {
      points: [
        {
          label: "ARISTOCRATIC ENTITLEMENT",
          text: "Lady Catherine's behaviour reflects the **entitlement** of the landed aristocracy — the assumption that rank confers the right to govern other people's lives. In Regency England, great landowners did exercise enormous local power: they appointed clergymen, controlled tenants, and influenced magistrates. Lady Catherine's attitude is not purely comical but rooted in genuine social power.",
        },
        {
          label: "THE CONFRONTATION SCENE",
          text: "The confrontation between Lady Catherine and Elizabeth in Chapter 56 is the novel's climactic test of Elizabeth's independence. Lady Catherine arrives unannounced, demands Elizabeth refuse Darcy, and threatens social consequences. Elizabeth's calm refusal — 'I am only resolved to act in that manner, which will constitute my happiness' — is her definitive statement of moral autonomy.",
        },
      ],
      keyWords: [
        { word: "Entitlement", def: "The belief that one has an inherent right to privilege or authority" },
        { word: "Moral autonomy", def: "The right to make one's own ethical decisions" },
      ],
    },
    wow: {
      title: "SOFT POWER & HEGEMONY (Gramsci)",
      analysis:
        "Antonio Gramsci distinguishes between **coercive power** (control through force) and **hegemonic power** (control through the consent of the dominated). Lady Catherine exercises both: she has real social power (she controls Collins's living, influences local society) and assumes cultural authority (everyone should defer to her). Her confrontation with Elizabeth fails because Elizabeth refuses to **consent** to Lady Catherine's authority. Gramsci argues that hegemony breaks down when the dominated refuse to accept the dominant group's values as natural. Elizabeth's defiance is a hegemonic crisis in miniature.",
      keyWords: [
        { word: "Coercive power", def: "Control through force, threats, or punishment" },
        { word: "Hegemonic power", def: "Control achieved through cultural dominance and the consent of those dominated" },
        { word: "Hegemonic crisis", def: "The moment when the dominated refuse to accept the dominant group's authority" },
      ],
    },
  },
  {
    id: 23,
    textSlug: "pride-prejudice",
    quote: "Are the shades of Pemberley to be thus polluted?",
    who: "Lady Catherine",
    act: "Chapter 56",
    themes: ["Class & Social Mobility", "Family & Reputation", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"Are the shades of Pemberley to be thus polluted?"',
      highlight: "polluted",
      note: "Lady Catherine's most visceral objection to Elizabeth — the word 'polluted' reveals that she views the Bennet family as a contaminant, a biological threat to aristocratic purity. Marriage between classes is framed as environmental destruction.",
    },
    technique1: {
      title: "METAPHOR OF CONTAMINATION",
      analysis:
        "The verb '**polluted**' introduces a metaphor of **environmental contamination** — Elizabeth's family will poison Pemberley's purity like waste poisoning a river. The word dehumanises the Bennets: they are not people but a **toxin** (poisonous substance). Lady Catherine speaks as though class mixing were a form of biological threat, an attitude that borders on the **eugenic** (relating to selective breeding).",
      secondPoint:
        "The noun '**shades**' (meaning trees or grounds) personifies Pemberley itself — the estate becomes a living entity that can be harmed. Lady Catherine values property above people: Pemberley's 'shades' must be protected from Elizabeth's family. Austen exposes how aristocratic values prioritise land and lineage over human worth.",
      keyWords: [
        { word: "Contamination metaphor", def: "Describing something as a pollutant that poisons what it touches" },
        { word: "Eugenic", def: "Relating to the belief that breeding should be controlled for 'improvement'" },
        { word: "Personifies", def: "Gives human qualities to a non-human thing" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Lady Catherine's use of 'polluted' reveals deep-rooted **class prejudice** that she has never examined. She genuinely views Elizabeth's family as a contaminant — this is not strategic rhetoric but an authentic expression of aristocratic disgust. Her inability to see Elizabeth as a worthy individual demonstrates the **dehumanising** effect of rigid class consciousness.",
      keyWords: [
        { word: "Class prejudice", def: "Bias against people based on their social or economic position" },
        { word: "Class consciousness", def: "Awareness of and commitment to one's social class position" },
      ],
    },
    technique2: {
      title: "RHETORICAL QUESTION AS WEAPON",
      analysis:
        "The sentence is a **rhetorical question** expecting the answer 'No, of course not' — Lady Catherine assumes Elizabeth will be horrified by the idea of 'polluting' Pemberley and retreat. But Elizabeth does not play the expected role: she refuses to be ashamed. The rhetorical question, designed to close down discussion, instead opens it up. Austen shows that rhetorical dominance depends on the listener's compliance.",
      secondPoint:
        "The phrase '**to be thus**' gives the question a theatrical formality — Lady Catherine speaks as though delivering a verdict in court rather than having a conversation. Her language performs **judicial authority** (the power to judge and sentence), but Elizabeth recognises it as pure performance. The gap between Lady Catherine's assumed power and her actual impotence is the scene's central comedy.",
      keyWords: [
        { word: "Rhetorical question", def: "A question asked for effect, expecting no answer" },
        { word: "Rhetorical dominance", def: "Controlling a conversation through language and social power" },
        { word: "Judicial authority", def: "The power to make and enforce judgments" },
      ],
    },
    context: {
      points: [
        {
          label: "PEMBERLEY AS SYMBOL",
          text: "Pemberley represents the ideal English estate — orderly, beautiful, and morally serious (Darcy is a good landlord). Lady Catherine's claim to protect Pemberley is ironic: by trying to prevent Darcy from marrying Elizabeth, she is actually opposing his happiness and moral growth. The true 'pollution' would be a loveless marriage arranged for class purity.",
        },
        {
          label: "CLASS & PURITY",
          text: "The language of 'pollution' connects to Regency anxieties about **social contamination** — the fear that mixing classes would degrade aristocratic bloodlines and culture. This anxiety underlies much of the novel's conflict: Darcy initially struggles with Elizabeth's family connections, and Miss Bingley and Lady Catherine explicitly voice the class prejudice that Darcy must overcome.",
        },
      ],
      keyWords: [
        { word: "Social contamination", def: "The fear that mixing social classes will degrade the higher class" },
        { word: "Bloodline", def: "A person's ancestry or family lineage" },
      ],
    },
    wow: {
      title: "OTHERING & ABJECTION (Kristeva)",
      analysis:
        "Julia Kristeva argues that societies construct the **abject** (the rejected, disgusting Other) to define their own identity — 'we' are defined by what 'we' are not. Lady Catherine's use of 'polluted' performs abjection: the Bennet family is cast as the abject Other whose proximity threatens aristocratic identity. Kristeva argues that abjection always reveals more about the person who abjects than about the person abjected — Lady Catherine's disgust exposes her own **fragility**: her identity depends entirely on excluding others. Without someone to look down upon, her self-concept collapses.",
      keyWords: [
        { word: "Abjection", def: "The psychological process of casting out what is considered disgusting or threatening" },
        { word: "The Other", def: "A person or group defined as fundamentally different from oneself" },
        { word: "Fragility", def: "Vulnerability disguised as strength; a brittle sense of self" },
      ],
    },
  },
  {
    id: 24,
    textSlug: "pride-prejudice",
    quote: "I take no leave of you, Miss Bennet. I send no compliments to your mother. You deserve no such attention. I am most seriously displeased",
    who: "Lady Catherine",
    act: "Chapter 56",
    themes: ["Class & Social Mobility", "Gender & Female Agency", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"I take no leave of you, Miss Bennet. I send no compliments to your mother. You deserve no such attention. I am most seriously displeased"',
      highlight: "most seriously displeased",
      note: "Lady Catherine's exit — a series of curt, negative sentences that perform her displeasure through the withdrawal of social courtesy. The repetition of 'no' creates a rhythmic denial that is simultaneously threatening and absurdly childish.",
    },
    technique1: {
      title: "ANAPHORA OF NEGATION",
      analysis:
        "The repeated '**no**' / '**no**' / '**no**' creates an **anaphora** (repetition at the start of successive clauses) of negation — Lady Catherine asserts her power by removing things: leave, compliments, attention. But withholding courtesy is a hollow threat: Elizabeth does not need Lady Catherine's approval, making each 'no' increasingly impotent.",
      secondPoint:
        "The short, staccato sentences — each a single declarative blow — mimic the rhythm of a **judicial sentence** (a judge's ruling). Lady Catherine speaks in pronouncements rather than conversation. But the effect is comic rather than threatening because Elizabeth does not recognise her authority. The would-be judge has no court.",
      keyWords: [
        { word: "Anaphora", def: "The repetition of a word or phrase at the start of successive clauses" },
        { word: "Staccato", def: "Short, abrupt, and disconnected — like rapid strikes" },
        { word: "Impotent", def: "Lacking power or effectiveness" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Lady Catherine **regresses** under pressure — when her authority fails, she resorts to petulance (childish sulking). The withdrawal of courtesy is the aristocratic equivalent of a tantrum: 'if you won't obey me, I won't be nice to you'. Her response to failing to command Elizabeth reveals that her authority has no substance beyond social convention.",
      keyWords: [
        { word: "Petulance", def: "Childish sulkiness or bad temper" },
        { word: "Substance", def: "Real content or meaning behind an outward appearance" },
      ],
    },
    technique2: {
      title: "COMIC DEFLATION",
      analysis:
        "The final sentence — 'I am most **seriously** displeased' — is an anticlimax. After an entire scene of aristocratic fury, threats, and demands, Lady Catherine's parting shot is merely that she is 'displeased'. The word '**seriously**' is unintentionally comic: she needs to insist she is serious because the reader can see she has been entirely ineffective. Austen creates **comic deflation** — the gap between the character's sense of her own importance and her actual impact.",
      secondPoint:
        "The address '**Miss** Bennet' (not 'Elizabeth' or 'my dear') reasserts formal distance — Lady Catherine withdraws intimacy as a punishment. But the formality backfires: it reminds us that Lady Catherine never had a genuine relationship with Elizabeth to withdraw from. Her 'punishment' is the removal of a courtesy that was always performative.",
      keyWords: [
        { word: "Comic deflation", def: "The humorous gap between a character's self-importance and their actual impact" },
        { word: "Performative courtesy", def: "Politeness enacted as social ritual rather than genuine warmth" },
        { word: "Anticlimax", def: "A disappointing end to an exciting or impressive sequence" },
      ],
    },
    context: {
      points: [
        {
          label: "SOCIAL COURTESY AS CURRENCY",
          text: "In Regency society, social courtesies — leave-taking, compliments, calls — were a form of **social currency** whose withdrawal signalled disapproval. Lady Catherine's refusal to send compliments to Mrs Bennet is a deliberate public insult. But Austen shows the limits of this power: courtesy-as-weapon only works on people who value the courtesy. Elizabeth doesn't.",
        },
        {
          label: "THE POWER OF REFUSAL",
          text: "Elizabeth's calm refusal to submit to Lady Catherine demonstrates Austen's thesis: genuine authority comes from moral conviction, not social rank. Lady Catherine has title, wealth, and connections; Elizabeth has integrity. Austen makes clear which force is stronger — and more admirable.",
        },
      ],
      keyWords: [
        { word: "Social currency", def: "Social behaviours that function as a medium of exchange and power" },
        { word: "Moral conviction", def: "A deeply held belief in what is right, regardless of external pressure" },
      ],
    },
    wow: {
      title: "SYMBOLIC VIOLENCE (Bourdieu)",
      analysis:
        "Bourdieu's concept of **symbolic violence** describes how dominant groups maintain power through non-physical means — language, social rituals, cultural norms. Lady Catherine's withdrawal of courtesy is an act of symbolic violence: she punishes Elizabeth through social exclusion rather than physical force. But Bourdieu argues that symbolic violence only works when the dominated **accept the dominant group's rules**. Elizabeth's refusal to be hurt by Lady Catherine's displeasure is an act of **symbolic resistance** — she rejects the entire framework within which Lady Catherine's authority operates.",
      keyWords: [
        { word: "Symbolic violence", def: "The use of social and cultural power to dominate without physical force" },
        { word: "Symbolic resistance", def: "Rejecting the cultural framework that gives the dominant group its power" },
        { word: "Social exclusion", def: "Punishment through removal from a social group or its rituals" },
      ],
    },
  },
  {
    id: 25,
    textSlug: "pride-prejudice",
    quote: "She is a most charming young lady indeed. Lady Catherine herself says that in point of true beauty, Miss de Bourgh is far superior to the handsomest of her sex",
    who: "Lady Catherine (via Mr Collins)",
    act: "Chapter 14",
    themes: ["Class & Social Mobility", "Appearance vs Reality", "Family & Reputation"],
    keyQuote: {
      text: '"Lady Catherine herself says that in point of true beauty, Miss de Bourgh is far superior to the handsomest of her sex"',
      highlight: "Lady Catherine herself says",
      note: "Collins relays Lady Catherine's assessment of her own daughter's beauty — a self-serving judgment presented as objective fact. The absurdity of a mother declaring her sickly daughter the most beautiful woman alive reveals the delusions enabled by unchecked social power.",
    },
    technique1: {
      title: "UNRELIABLE TESTIMONY",
      analysis:
        "The authority cited — '**Lady Catherine herself says**' — is the person least qualified to give an objective assessment: the girl's own mother. Collins presents this **biased source** as though it were an independent authority, revealing his inability to distinguish between rank and truth. The phrase 'in point of **true** beauty' adds comic emphasis: Lady Catherine claims access to a higher, more authentic standard of beauty unavailable to ordinary people.",
      secondPoint:
        "The superlative '**far superior** to the handsomest of her sex' is an **absurd hyperbole** — Miss de Bourgh is described elsewhere as pale, thin, and sickly. The gap between Lady Catherine's claim and reality creates **bathos** (a comic fall from the elevated to the ridiculous). Austen lets the absurdity speak for itself — no narrator commentary is needed.",
      keyWords: [
        { word: "Unreliable testimony", def: "Evidence from a source too biased to provide objective information" },
        { word: "Superlative", def: "The highest degree of comparison, often used for exaggeration" },
        { word: "Bathos", def: "An anticlimax; a comic fall from the elevated to the ridiculous" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Lady Catherine's self-serving claims about her daughter reflect her own **narcissism** — she cannot distinguish between what she wants to be true and what is true. Miss de Bourgh's 'beauty' exists only in Lady Catherine's declarations. Austen shows how power creates its own reality: when no one dares contradict you, delusion becomes fact.",
      keyWords: [
        { word: "Narcissism", def: "Excessive self-admiration and self-centredness" },
        { word: "Delusion", def: "A false belief held despite contradicting evidence" },
      ],
    },
    technique2: {
      title: "SATIRICAL VENTRILOQUISM",
      analysis:
        "Collins does not express his own opinion about Miss de Bourgh — he **ventriloquises** (speaks through) Lady Catherine's words. He is a **transmission device** for aristocratic self-promotion. Austen satirises the entire chain of false authority: Lady Catherine makes a biased claim, Collins repeats it as fact, and the Bennets are expected to receive it as truth. The comedy lies in the system's transparency — everyone can see through it except Collins.",
      secondPoint:
        "The word '**charming**' (Collins's own addition) is generic praise that contrasts with the specificity of Lady Catherine's beauty claim. Collins has nothing original to say about Miss de Bourgh because he has never formed an independent thought about her. His admiration is entirely **derivative** (coming from someone else's opinion).",
      keyWords: [
        { word: "Ventriloquises", def: "Speaks through someone else, presenting their words as one's own" },
        { word: "Transmission device", def: "A mechanism that passes information without adding anything" },
        { word: "Derivative", def: "Based on another source rather than being original" },
      ],
    },
    context: {
      points: [
        {
          label: "MISS DE BOURGH & THE ARRANGED MATCH",
          text: "Lady Catherine intended Miss de Bourgh to marry Darcy — uniting two great estates. Her promotion of her daughter's 'beauty' is part of this **dynastic** (relating to powerful family succession) strategy. The irony is that Darcy is attracted to Elizabeth's vitality and intelligence — exactly what Miss de Bourgh (pale, silent, docile) lacks.",
        },
        {
          label: "APPEARANCE VS REALITY",
          text: "This quote embodies the novel's central theme: the gap between **appearance** (Lady Catherine's declaration of beauty) and **reality** (Miss de Bourgh's sickly pallor). Austen consistently shows that the people who insist most loudly on their own superiority — Lady Catherine, Collins, Wickham — are the least reliable judges of worth.",
        },
      ],
      keyWords: [
        { word: "Dynastic", def: "Relating to the succession and power of a ruling family" },
        { word: "Appearance vs reality", def: "The contrast between how things seem and how they actually are" },
      ],
    },
    wow: {
      title: "THE EMPEROR'S NEW CLOTHES (Andersen)",
      analysis:
        "Hans Christian Andersen's fable describes how an entire court pretends to see clothes that don't exist because no one dares contradict the emperor. Lady Catherine's declaration of Miss de Bourgh's beauty functions identically: everyone in her circle — Collins, the servants, the tenants — agrees that Miss de Bourgh is beautiful because disagreeing with Lady Catherine is socially impossible. Austen shows that **collective delusion** (a false belief maintained by social pressure) is not just a fairy-tale device but a constant feature of hierarchical societies. Truth becomes whatever the most powerful person says it is — until someone like Elizabeth refuses to play along.",
      keyWords: [
        { word: "Collective delusion", def: "A false belief maintained by a group because no individual dares challenge it" },
        { word: "Social pressure", def: "The influence of group norms and expectations on individual behaviour" },
        { word: "Hierarchical society", def: "A society organised into layers of power and status" },
      ],
    },
  },

  // ─── WICKHAM — 4 quotes ───

  {
    id: 26,
    textSlug: "pride-prejudice",
    quote: "Mr Darcy can please where he chooses. He does not want abilities. He can be a conversable companion if he thinks it worth his while",
    who: "Wickham",
    act: "Chapter 16 (First conversation with Elizabeth)",
    themes: ["Appearance vs Reality", "Pride & Prejudice (Self-Knowledge)", "Class & Social Mobility"],
    keyQuote: {
      text: '"He does not want abilities. He can be a conversable companion if he thinks it worth his while"',
      highlight: "if he thinks it worth his while",
      note: "Wickham's subtle manipulation — he appears generous in praising Darcy's abilities while inserting a poison qualifier that implies Darcy's social graces are calculated and conditional. The backhanded praise is designed to make Elizabeth trust Wickham's judgment precisely because he seems fair.",
    },
    technique1: {
      title: "STRATEGIC CONCESSION",
      analysis:
        "Wickham begins with apparent praise — 'can please where he **chooses**', 'does not **want** abilities' — before undermining it with the conditional '**if** he thinks it worth his while'. This is a **strategic concession** (appearing fair before delivering the criticism): by acknowledging Darcy's abilities, Wickham makes his subsequent attacks seem balanced and credible. A direct assault would seem biased; this calculated fairness disarms Elizabeth's critical faculties.",
      secondPoint:
        "The phrase '**worth his while**' is the poisoned needle — it reframes Darcy's social choices as **mercenary** (motivated by self-interest). Wickham implies that Darcy is pleasant only to those who can benefit him, turning genuine reserve into calculated snobbery. This subtle **distortion** (twisting of truth) is Wickham's characteristic technique: not lying outright, but presenting truth at a misleading angle.",
      keyWords: [
        { word: "Strategic concession", def: "Appearing to agree with the opposition before delivering a more effective critique" },
        { word: "Mercenary", def: "Motivated primarily by personal gain or self-interest" },
        { word: "Distortion", def: "A misrepresentation that twists the truth without directly lying" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Wickham is strategically skilled but morally static — he uses his intelligence exclusively for **manipulation** rather than growth. His ability to read people accurately (he knows precisely how to present himself to Elizabeth) makes his deception more culpable: he sees clearly but chooses to deceive. Unlike Darcy, who is prejudiced without knowing it, Wickham is consciously dishonest.",
      keyWords: [
        { word: "Manipulation", def: "Controlling or influencing someone unfairly for personal advantage" },
        { word: "Culpable", def: "Deserving blame because one knew what one was doing" },
      ],
    },
    technique2: {
      title: "UNRELIABLE NARRATOR DEVICE",
      analysis:
        "Wickham functions as an **unreliable narrator** — he tells Elizabeth a version of Darcy's story that is factually accurate but emotionally distorted. He was indeed denied the living promised by Darcy's father, but he omits his own dissolute behaviour that led to this. Austen uses Wickham to demonstrate how **selective truth-telling** can be more deceptive than outright lying.",
      secondPoint:
        "Elizabeth accepts Wickham's account partly because it confirms her existing **prejudice** against Darcy — she practices **confirmation bias** (accepting evidence that supports what she already believes). Austen creates a sophisticated epistemological trap: Elizabeth is intelligent enough to spot obvious lies but vulnerable to sophisticated distortions that align with her biases.",
      keyWords: [
        { word: "Unreliable narrator", def: "A storyteller whose version of events cannot be fully trusted" },
        { word: "Selective truth-telling", def: "Presenting only those facts that support a desired conclusion" },
        { word: "Confirmation bias", def: "The tendency to accept evidence that confirms existing beliefs" },
      ],
    },
    context: {
      points: [
        {
          label: "FIRST IMPRESSIONS",
          text: "Wickham's charm at their first meeting contrasts sharply with Darcy's coldness — creating a **false binary** in Elizabeth's mind. She judges both men by **first impressions** (the novel's original title), which is exactly Austen's point: surface charm is not a reliable guide to character. Wickham is the novel's embodiment of the danger of judging by appearances.",
        },
        {
          label: "THE MILITIA & SOCIAL PERFORMANCE",
          text: "Officers in the militia were expected to be charming, dancing, socially graceful additions to local society. Wickham performs this role perfectly — his charm is a **professional skill** developed through practice. Austen shows that **sociability** (ease in social situations) can be a form of deception as well as a genuine virtue.",
        },
      ],
      keyWords: [
        { word: "False binary", def: "A misleading choice presented as though there are only two options" },
        { word: "Sociability", def: "The quality of being friendly and easily engaging with others" },
      ],
    },
    wow: {
      title: "THE CON ARTIST (Goffman's Presentation of Self)",
      analysis:
        "Erving Goffman argues that all social interaction involves **impression management** — we all curate how others perceive us. But Goffman distinguishes between **sincere performers** (who believe in their own performance) and **cynical performers** (who know they are deceiving). Wickham is Goffman's perfect cynical performer: he consciously constructs a sympathetic persona (wronged young man, charming officer) to achieve specific goals (money, social acceptance, Elizabeth's trust). Austen shows that in a society obsessed with appearances, the best performer wins — regardless of their actual character.",
      keyWords: [
        { word: "Impression management", def: "The conscious effort to control how others perceive you" },
        { word: "Cynical performer", def: "A person who knowingly presents a false version of themselves" },
        { word: "Persona", def: "The social mask or role a person presents to the world" },
      ],
    },
  },
  {
    id: 27,
    textSlug: "pride-prejudice",
    quote: "A military life is not what I was intended for, but circumstances have now made it eligible",
    who: "Wickham",
    act: "Chapter 16",
    themes: ["Appearance vs Reality", "Class & Social Mobility", "Moral Growth"],
    keyQuote: {
      text: '"A military life is not what I was intended for, but circumstances have now made it eligible"',
      highlight: "circumstances",
      note: "Wickham positions himself as a victim of circumstance — the passive voice ('was intended for', 'have made it eligible') removes his own agency from the narrative. He presents his life as something that happened TO him rather than choices he made.",
    },
    technique1: {
      title: "PASSIVE CONSTRUCTION AS SELF-EXCULPATION",
      analysis:
        "The **passive voice** ('**was intended** for', '**have made** it eligible') systematically removes Wickham's agency — things happen to him; he never acts. '**Circumstances**' is a deliberately vague noun that avoids naming his own dissolute behaviour as the cause of his situation. This **self-exculpatory** (self-excusing) grammar is Wickham's signature: he constructs himself as passive victim rather than active agent.",
      secondPoint:
        "The word '**eligible**' (suitable, worth choosing) is ironic — it's the same word used throughout the novel to describe desirable marriage partners. Wickham applies it to a military career he joined out of necessity, not choice. The word's double resonance exposes his habit of dressing up necessity as selection: everything Wickham does by default he presents as a conscious, dignified choice.",
      keyWords: [
        { word: "Self-exculpatory", def: "Serving to excuse oneself from blame or responsibility" },
        { word: "Agency", def: "The capacity to act independently and make one's own choices" },
        { word: "Eligible", def: "Suitable; meeting the requirements to be chosen" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Wickham's refusal to accept responsibility for his own situation is a form of **moral stagnation** — he cannot grow because he never acknowledges his role in his own failures. His passive self-presentation is not just a deceptive strategy but a genuine feature of his psychology: he has deceived himself as thoroughly as he deceives others.",
      keyWords: [
        { word: "Moral stagnation", def: "Failure to develop ethically due to avoiding self-examination" },
        { word: "Self-deception", def: "The act of lying to oneself to avoid uncomfortable truths" },
      ],
    },
    technique2: {
      title: "VICTIM NARRATIVE",
      analysis:
        "Wickham constructs a coherent **victim narrative** — a story in which he is consistently wronged by powerful people (Darcy, fate, circumstance) while remaining blameless himself. This narrative is compelling because it has elements of truth: he WAS promised a living, and Darcy's father DID intend him for the church. But the narrative omits his gambling, his debts, and his attempt to elope with Georgiana Darcy for her fortune.",
      secondPoint:
        "Austen shows how **sympathy** can be weaponised: Wickham's victim story generates sympathy that he then converts into trust, social advantage, and eventually Elizabeth's partisan support against Darcy. The novel warns against automatic sympathy for apparent victims — not because victims don't exist, but because victimhood can be performed.",
      keyWords: [
        { word: "Victim narrative", def: "A story that positions oneself as consistently wronged and blameless" },
        { word: "Weaponised sympathy", def: "Using others' pity as a tool for personal advantage" },
        { word: "Partisan", def: "Strongly biased in favour of one side" },
      ],
    },
    context: {
      points: [
        {
          label: "THE CHURCH & THE ARMY",
          text: "In Regency England, the younger sons of gentlemen had three respectable career options: the **church**, the **law**, or the **military**. Wickham was intended for the church (an ironically inappropriate career for a man of his morals). His shift to the military signals a fall in social respectability — the militia was considered less distinguished than a church living.",
        },
        {
          label: "WICKHAM & DARCY",
          text: "Wickham and Darcy grew up together — Wickham was the son of Darcy's father's steward. Their different paths (Darcy inherits wealth and responsibility; Wickham squanders opportunities and blames others) create the novel's most direct moral contrast. Austen uses them as paired **foils**: same starting point, opposite moral trajectories.",
        },
      ],
      keyWords: [
        { word: "Foils", def: "Characters contrasted to highlight each other's qualities" },
        { word: "Moral trajectory", def: "The direction of a character's ethical development over time" },
      ],
    },
    wow: {
      title: "NARRATIVE IDENTITY (McAdams)",
      analysis:
        "Psychologist Dan McAdams argues that identity is a **story** we tell ourselves about ourselves — we select, arrange, and interpret events to create a coherent **life narrative**. Wickham's carefully constructed victimhood is a textbook example of a distorted life narrative: he selects events that support his role as wronged innocent and omits those that contradict it. McAdams argues that emotionally healthy people revise their narratives in light of new self-knowledge; unhealthy people rigidly maintain narratives that protect them from accountability. Wickham never revises — his story is fixed because revision would require admitting fault.",
      keyWords: [
        { word: "Narrative identity", def: "The story a person constructs about who they are and how they became that way" },
        { word: "Life narrative", def: "The ongoing story a person tells about their own life experiences" },
        { word: "Narrative revision", def: "The healthy process of updating one's self-story in light of new understanding" },
      ],
    },
  },
  {
    id: 28,
    textSlug: "pride-prejudice",
    quote: "Till I can forget his father, I can never defy or expose him",
    who: "Wickham",
    act: "Chapter 16",
    themes: ["Appearance vs Reality", "Family & Reputation", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"Till I can forget his father, I can never defy or expose him"',
      highlight: "never defy or expose",
      note: "Wickham claims loyalty to old Mr Darcy prevents him from publicly criticising Darcy — performing noble restraint while actually spreading his story to every willing listener. The statement is a performative contradiction: he claims discretion while being indiscreet.",
    },
    technique1: {
      title: "PERFORMATIVE CONTRADICTION",
      analysis:
        "Wickham claims he '**can never defy or expose**' Darcy — while CURRENTLY exposing Darcy's alleged wrongs to Elizabeth, a near-stranger, at a public event. This is a **performative contradiction** (an action that contradicts the statement being made). The claim of silence performs the opposite of silence: it frames the gossip as reluctant truth forced from a noble man, making it more credible.",
      secondPoint:
        "The invocation of 'his **father**' is strategic — Wickham appeals to filial loyalty (love for a parent figure), which Elizabeth values deeply (it's one of her defining traits). By claiming to honour old Mr Darcy's memory, Wickham positions himself within Elizabeth's moral framework: he presents himself as a man of the same values she holds.",
      keyWords: [
        { word: "Performative contradiction", def: "An action that contradicts the very statement being made" },
        { word: "Filial loyalty", def: "Faithfulness and devotion to a parent or father figure" },
        { word: "Moral framework", def: "The system of values a person uses to judge right and wrong" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Wickham's contradiction reveals that his morality is entirely **instrumental** — he uses moral language to achieve specific goals rather than expressing genuine beliefs. He does not value loyalty to old Mr Darcy; he uses the claim of loyalty as a tool to enhance his own credibility. His moral language is a **currency** he spends, not a principle he lives by.",
      keyWords: [
        { word: "Instrumental morality", def: "Using moral language as a tool rather than a genuine guide" },
        { word: "Moral currency", def: "Ethical claims used to gain social or personal advantage" },
      ],
    },
    technique2: {
      title: "AUSTEN'S IRONIC FORESHADOWING",
      analysis:
        "The words '**defy** or **expose**' ironically foreshadow what Darcy's letter will do to Wickham — expose his true character. The very vocabulary Wickham claims not to use against Darcy will be used against Wickham himself. Austen creates **lexical irony** (irony through specific word choices): Wickham's words predict his own unmasking.",
      secondPoint:
        "The conditional '**till I can forget**' implies a future in which Wickham might 'expose' Darcy — keeping the threat alive while performing restraint. This is a classic **manipulation technique**: the implicit threat dressed as noble sacrifice. Wickham lets Elizabeth imagine that he COULD destroy Darcy but chooses not to — making his restraint seem generous and his grievance seem legitimate.",
      keyWords: [
        { word: "Lexical irony", def: "Irony created through the specific words a character uses" },
        { word: "Implicit threat", def: "A danger suggested but not directly stated" },
        { word: "Noble sacrifice", def: "A performance of selfless restraint designed to increase social credit" },
      ],
    },
    context: {
      points: [
        {
          label: "PUBLIC VS PRIVATE",
          text: "Wickham tells his story at the Philips' party — a semi-public social event where gossip spreads rapidly. By claiming discretion in a public setting, he ensures the widest possible audience for his 'private' grievance. Austen shows that Regency social spaces (parties, balls, assemblies) functioned as **information networks** where reputation was made and destroyed through controlled gossip.",
        },
        {
          label: "DECEPTION & THE NOVEL'S STRUCTURE",
          text: "Wickham's deception of Elizabeth is structurally central: her belief in his story IS her prejudice against Darcy. When Darcy's letter reveals the truth in Chapter 35, Elizabeth must confront not just Wickham's lies but her own **credulity** (willingness to believe without evidence). The novel's turning point is an act of reading — Elizabeth reads Darcy's letter and re-reads her entire experience.",
        },
      ],
      keyWords: [
        { word: "Information network", def: "A system through which knowledge spreads within a social group" },
        { word: "Credulity", def: "A tendency to be too ready to believe something without proof" },
      ],
    },
    wow: {
      title: "MACHIAVELLIAN INTELLIGENCE",
      analysis:
        "Niccolò Machiavelli argued that the most effective ruler appears virtuous while acting strategically — the **appearance** of honesty is more useful than honesty itself. Wickham is Austen's Machiavellian character: he understands that in a society driven by appearances, performing virtue is more effective than being virtuous. His claim of discretion is a Machiavellian masterstroke: it makes him appear noble while achieving the opposite of discretion. Austen's novel can be read as a sustained argument against Machiavellian social strategy — ultimately, genuine virtue (Darcy's self-improvement, Elizabeth's honest self-examination) triumphs over strategic performance.",
      keyWords: [
        { word: "Machiavellian", def: "Using cunning and strategic deception to achieve one's goals" },
        { word: "Strategic performance", def: "Behaviour designed to achieve a specific outcome through calculated presentation" },
        { word: "Genuine virtue", def: "True moral goodness rather than the appearance of goodness" },
      ],
    },
  },
  {
    id: 29,
    textSlug: "pride-prejudice",
    quote: "I have been a selfish being all my life, in practice, though not in principle",
    who: "Wickham",
    act: "Chapter 52 (via Lydia's account)",
    themes: ["Appearance vs Reality", "Moral Growth", "Pride & Prejudice (Self-Knowledge)"],
    keyQuote: {
      text: '"I have been a selfish being all my life, in practice, though not in principle"',
      highlight: "in practice, though not in principle",
      note: "Wickham's self-assessment after the elopement — he admits selfishness while simultaneously excusing it through the distinction between 'practice' and 'principle'. Even his confession is a form of self-justification.",
    },
    technique1: {
      title: "THE EXCUSE WITHIN THE ADMISSION",
      analysis:
        "The distinction between '**practice**' (what he does) and '**principle**' (what he believes) is a masterful **self-exculpation** — Wickham admits to bad actions while claiming good intentions. This is more dangerous than simple denial: it acknowledges the fault while neutralising blame. The underlying logic is: 'I am not truly selfish because I know selfishness is wrong' — as though moral awareness excuses immoral behaviour.",
      secondPoint:
        "The phrase '**selfish being**' uses the language of confession — it sounds like genuine self-knowledge. But the qualifier '**though not in principle**' immediately evacuates the confession of its moral content. Wickham performs the shape of remorse without its substance. Austen shows that the language of moral reflection can itself be deployed as a tool of deception.",
      keyWords: [
        { word: "Self-exculpation", def: "The act of excusing oneself from blame" },
        { word: "Evacuates", def: "Empties out; removes the essential content from" },
        { word: "Performed remorse", def: "An expression of regret enacted for social effect rather than genuine feeling" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Even in apparent self-reflection, Wickham does not change. His 'confession' is structured to ensure he never has to change: if his principles are good, then his practice is merely a regrettable deviation from his true self. He constructs a permanent **alibi** (an excuse that places responsibility elsewhere) for all his behaviour: the real Wickham, he implies, is the principled one; the selfish one is merely a temporary aberration.",
      keyWords: [
        { word: "Alibi", def: "An excuse that shifts responsibility away from oneself" },
        { word: "Aberration", def: "A departure from what is normal or expected" },
      ],
    },
    technique2: {
      title: "CONTRAST WITH DARCY'S CONFESSION",
      analysis:
        "This line invites direct comparison with Darcy's confession: 'By you, I was properly **humbled**'. Where Darcy accepts blame without qualification, Wickham qualifies and excuses. Where Darcy credits Elizabeth with teaching him, Wickham credits himself with good principles. Austen creates a **moral litmus test**: genuine growth requires unconditional honesty; Wickham fails this test completely.",
      secondPoint:
        "The structural parallel — both Darcy and Wickham admit fault — highlights the difference between **genuine** and **performed** self-knowledge. Darcy changes his behaviour after his confession; Wickham changes nothing. Austen shows that the content of a confession matters less than its consequences: true remorse leads to changed behaviour; performed remorse leads to continued self-interest.",
      keyWords: [
        { word: "Moral litmus test", def: "A single action that reveals a character's true moral nature" },
        { word: "Genuine self-knowledge", def: "True understanding of one's own faults leading to change" },
        { word: "Structural parallel", def: "Similar scenes or statements used to highlight differences" },
      ],
    },
    context: {
      points: [
        {
          label: "WICKHAM'S ENDING",
          text: "Wickham's marriage to Lydia — forced by Darcy's financial intervention — is the novel's **anti-romance**: a union without love, respect, or moral growth. Austen describes their future marriage as one of declining affection and increasing financial dependence. Unlike Darcy and Elizabeth, whose marriage represents mutual growth, Wickham and Lydia represent the consequences of unchecked selfishness.",
        },
        {
          label: "PRINCIPLE VS PRACTICE",
          text: "Austen's novel argues that **practice** and **principle** cannot be separated — you ARE what you do, not what you believe. Elizabeth proves this by acting with integrity even when it costs her (refusing Collins, confronting Lady Catherine). Wickham proves the inverse: claiming good principles while practising selfishness makes the principles meaningless.",
        },
      ],
      keyWords: [
        { word: "Anti-romance", def: "A relationship that inverts or undermines the conventions of romantic love" },
        { word: "Declining affection", def: "Love or warmth that gradually fades over time" },
      ],
    },
    wow: {
      title: "BAD FAITH (Sartre)",
      analysis:
        "Jean-Paul Sartre's concept of **bad faith** (mauvaise foi) describes self-deception in which a person denies their own freedom and responsibility. Wickham's distinction between practice and principle is a textbook case: he claims to be principled (denying that his actions define him) while acting selfishly (denying that his principles should change his actions). Sartre argues that bad faith is the fundamental human temptation — we prefer to believe we are victims of circumstance rather than agents of our own choices. Wickham never escapes bad faith because doing so would require confronting his freedom — and therefore his responsibility — which is precisely what he has spent his entire life avoiding.",
      keyWords: [
        { word: "Bad faith", def: "Self-deception that denies one's own freedom and responsibility" },
        { word: "Mauvaise foi", def: "French for 'bad faith'; Sartre's term for self-deceptive denial of responsibility" },
        { word: "Responsibility", def: "The state of being accountable for one's freely chosen actions" },
      ],
    },
  },
];
