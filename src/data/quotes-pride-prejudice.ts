import { Quote } from "./types";

// ─── PRIDE AND PREJUDICE — 6 Quotes ───

export const PRIDE_PREJUDICE_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "pride-prejudice",
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife",
    who: "Narrator",
    act: "Chapter 1, Opening Line",
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
];
