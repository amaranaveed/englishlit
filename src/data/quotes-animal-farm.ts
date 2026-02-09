import { Quote } from "./types";

// ─── ANIMAL FARM — 6 Quotes ───

export const ANIMAL_FARM_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "animal-farm",
    quote: "All animals are equal, but some animals are more equal than others",
    who: "The Pigs (commandment revision)",
    act: "Chapter 10",
    themes: ["Power & Corruption", "Equality & Hypocrisy", "Language & Manipulation", "Revolution & Betrayal"],
    keyQuote: {
      text: '"All animals are equal, but some animals are more equal than others"',
      highlight: "more equal",
      note: "The novel's most famous line — the final corruption of the Seven Commandments — exposes how revolutionary ideals are destroyed by the very leaders who claimed to champion them.",
    },
    technique1: {
      title: "OXYMORON / LOGICAL CONTRADICTION",
      analysis:
        "The phrase '**more equal**' is an **oxymoron** — equality, by definition, cannot have degrees. Something is either equal or it is not; there is no 'more equal.' This logical impossibility IS the point: the pigs have corrupted language to the point where contradiction passes as truth. The sentence sounds reasonable despite being nonsensical — demonstrating how **totalitarian language** works: it does not convince through logic but through repetition and authority.",
      secondPoint:
        "The **conjunctive** 'but' performs a devastating logical manoeuvre: it begins with a universal ('All animals ARE equal') and then immediately contradicts it ('BUT some are more equal'). The 'but' claims to ADD a qualification when it actually DESTROYS the original statement. This is the grammar of betrayal: pretending to extend a principle while actually abolishing it.",
      keyWords: [
        { word: "Oxymoron", def: "A figure of speech combining contradictory terms (e.g., 'more equal')" },
        { word: "Totalitarian language", def: "Language manipulated by authoritarian power to distort truth" },
        { word: "Conjunctive", def: "A connecting word (like 'but') that links clauses together" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "The revolution has **regressed** fully: the animals are now worse off than before because their oppression is disguised as liberation. Under Jones (the human farmer), oppression was visible and honest; under the pigs, oppression wears the mask of equality. The regression is not merely to the starting point but BEYOND it — to a state where even the LANGUAGE of freedom has been corrupted.",
      keyWords: [
        { word: "Regression", def: "Return to a previous, worse state — here, worse than the original" },
        { word: "Disguised oppression", def: "Domination hidden behind the language of freedom and equality" },
      ],
    },
    technique2: {
      title: "PALIMPSEST — OVERWRITING THE ORIGINAL",
      analysis:
        "This commandment is a **palimpsest** — a text written over an earlier, erased text. The original commandment was 'All animals are equal.' The pigs have not replaced it but ADDED to it, creating the illusion of continuity while reversing the meaning. This layering technique — the new meaning visible atop the ghost of the old — mirrors how totalitarian regimes rewrite history: they do not openly contradict the past but subtly REVISE it.",
      secondPoint:
        "The progressive erosion of the Seven Commandments throughout the novel — each one quietly altered — demonstrates the **incrementalism** of corruption: tyranny does not arrive suddenly but accumulates through small, seemingly reasonable changes. Each revision is minor enough to accept individually but devastating cumulatively. Orwell shows that oppression advances not through revolution but through **revision**.",
      keyWords: [
        { word: "Palimpsest", def: "A text written over an earlier, partially erased text" },
        { word: "Incrementalism", def: "Gradual change through small steps rather than sudden transformation" },
        { word: "Revision", def: "The act of altering or rewriting, especially to change meaning" },
      ],
    },
    context: {
      points: [
        {
          label: "THE RUSSIAN REVOLUTION",
          text: "Orwell's allegory directly mirrors the **Russian Revolution** (1917) and its betrayal by **Stalin**. The original Bolshevik promise of equality was progressively corrupted as the Communist Party elite created a new ruling class while maintaining the rhetoric of workers' liberation.",
        },
        {
          label: "PROPAGANDA & DOUBLETHINK",
          text: "In *Nineteen Eighty-Four*, Orwell would later name this phenomenon '**doublethink**' — the ability to hold two contradictory beliefs simultaneously. 'More equal' IS doublethink: it requires believing both that all animals are equal AND that some are superior, without recognising the contradiction.",
        },
      ],
      keyWords: [
        { word: "Allegory", def: "A story where characters and events represent broader political or moral ideas" },
        { word: "Doublethink", def: "Orwell's term for accepting contradictory beliefs simultaneously" },
        { word: "Rhetoric", def: "Language used to persuade, often concealing true intentions" },
      ],
    },
    wow: {
      title: "HEGEMONY (Gramsci)",
      analysis:
        "Antonio Gramsci's concept of **hegemony** — the process by which a ruling class maintains power not through force alone but through controlling ideology, culture, and 'common sense' — explains exactly how the pigs maintain control. They do not merely ENFORCE inequality; they make inequality seem natural, reasonable, even equal. Gramsci argued that the most effective domination is that which the dominated ACCEPT as legitimate. The animals accept 'more equal' because the pigs have established **hegemonic control** over language, education, and the interpretation of history. The animals cannot challenge the pigs' power because they cannot think outside the framework the pigs have constructed. Gramsci would argue that the true revolution would require not just removing the pigs but dismantling the entire ideological apparatus — the control of language, history, and knowledge — that makes their rule seem natural.",
      keyWords: [
        { word: "Hegemony", def: "Gramsci's concept of ruling-class control through ideology and 'common sense'" },
        { word: "Ideological apparatus", def: "The institutions and systems that transmit ruling-class ideas as normal" },
        { word: "Legitimate", def: "Accepted as rightful and proper by those who are governed" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "animal-farm",
    quote: "Four legs good, two legs bad",
    who: "The Sheep",
    act: "Chapter 3",
    themes: ["Propaganda & Simplification", "Language & Power", "Control of the Masses"],
    keyQuote: {
      text: '"Four legs good, two legs bad"',
      highlight: "good",
      note: "The sheep's mindless chant — later changed to 'Four legs good, two legs BETTER' — demonstrates how complex ideas are reduced to slogans that prevent thought rather than encourage it.",
    },
    technique1: {
      title: "BINARY SLOGAN / REDUCTIVE ANTITHESIS",
      analysis:
        "The **antithesis** (contrasting parallel structure) — 'good' vs 'bad,' 'four legs' vs 'two legs' — reduces complex political philosophy to a simple **binary** (two-option system). This reductivism IS the point: propaganda works by eliminating nuance, replacing thinking with repetition. The slogan does not need to be true; it only needs to be repeatable. Its rhythm — four beats, pause, four beats — makes it physically satisfying to chant, bypassing the mind entirely.",
      secondPoint:
        "The slogan is a deliberate **simplification** of Animalism's Seven Commandments — Snowball reduces complex principles to a memorable catchphrase 'for the stupider animals.' This condescension reveals how propaganda infantilises (treats as children) its audience: the masses are not trusted with complexity, so they receive slogans. The irony is that the slogan's simplicity makes it more dangerous, not less — its very memorability makes it resistant to questioning.",
      keyWords: [
        { word: "Antithesis", def: "Contrasting ideas placed in parallel structure for emphasis" },
        { word: "Binary", def: "A system reducing complexity to only two opposing options" },
        { word: "Infantilise", def: "To treat people as incapable of understanding complex ideas" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "The slogan marks the **regression** of revolutionary ideals into propaganda. Complex philosophy ('all animals are comrades') becomes a chant ('four legs good'). When the pigs later change it to 'four legs good, TWO LEGS BETTER,' the regression doubles: not only has philosophy been reduced to a slogan, but the slogan itself has been corrupted. Language regresses from meaning to noise.",
      keyWords: [
        { word: "Corruption", def: "The gradual distortion of something from its original, pure form" },
        { word: "Noise", def: "Meaningless sound that drowns out genuine communication" },
      ],
    },
    technique2: {
      title: "COMMUNAL CHANTING — THE MOB VOICE",
      analysis:
        "The sheep chant in **unison** (together, as one voice) — they do not discuss, debate, or question. This **communal chanting** replaces individual thought with collective noise: the sheep have no personal opinions, only shared slogans. Orwell shows how propaganda creates a **mob voice** — a single, rhythmic sound that drowns out dissent not through argument but through volume and repetition.",
      secondPoint:
        "The sheep are specifically chosen as the chanters: sheep are proverbially **docile** (easily led) and unintelligent. Orwell's choice is a deliberate **zoological metaphor** — sheep follow, they do not lead; they bleat, they do not speak. By giving the propaganda role to sheep, Orwell comments on the relationship between propaganda and its audience: effective propaganda requires willing sheep.",
      keyWords: [
        { word: "Unison", def: "Speaking or acting together as one, without individual variation" },
        { word: "Mob voice", def: "A collective noise that overwhelms individual thought and dissent" },
        { word: "Docile", def: "Easily led, controlled, or manipulated; lacking independence" },
      ],
    },
    context: {
      points: [
        {
          label: "STALINIST PROPAGANDA",
          text: "The Soviet Union under **Stalin** perfected propaganda techniques: simple slogans ('Workers of the world, unite!'), repeated through state media, education, and public events, replaced genuine political debate. Orwell witnessed similar techniques in the **Spanish Civil War** and recognised their power.",
        },
        {
          label: "MASS MEDIA & MANIPULATION",
          text: "Orwell anticipated the role of **mass media** in political manipulation: the sheep's chanting is an analogue for radio, television, and (now) social media, where simple, repeated messages overwhelm complex analysis.",
        },
      ],
      keyWords: [
        { word: "Propaganda", def: "Information spread to promote a political cause, often through simplification" },
        { word: "Mass media", def: "Communication channels reaching large audiences simultaneously" },
        { word: "Political debate", def: "Reasoned discussion of different political positions and ideas" },
      ],
    },
    wow: {
      title: "MANUFACTURING CONSENT (Chomsky & Herman)",
      analysis:
        "Noam Chomsky and Edward Herman's theory of **manufacturing consent** — the idea that mass media in democratic societies create the illusion of public agreement through systematic propaganda — is anticipated by Orwell's sheep. Chomsky argues that consent is not genuine agreement but a product manufactured by those who control information: through selection, emphasis, and repetition, media create the illusion that 'everyone agrees.' The sheep's chanting IS manufactured consent: the animals hear 'four legs good' repeated so often that it becomes unquestionable truth — not because it has been proven but because it has been **normalised** through repetition. Chomsky would note that the sheep are not consciously lying: they genuinely believe their chant because they have never been exposed to alternatives. This is the deepest form of propaganda — not the kind that deceives people who know the truth, but the kind that prevents them from ever encountering it.",
      keyWords: [
        { word: "Manufacturing consent", def: "Creating the illusion of public agreement through media manipulation" },
        { word: "Normalised", def: "Made to seem natural and unquestionable through repetition" },
        { word: "Systematic", def: "Operating through organised, structured methods rather than random acts" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "animal-farm",
    quote: "Napoleon is always right",
    who: "Boxer",
    act: "Chapter 5",
    themes: ["Loyalty & Exploitation", "Power & Corruption", "The Working Class", "Blind Obedience"],
    keyQuote: {
      text: '"Napoleon is always right"',
      highlight: "always",
      note: "Boxer's unquestioning devotion to Napoleon — despite increasing evidence of corruption — represents the tragedy of the loyal working class whose trust is exploited by the very leaders they serve.",
    },
    technique1: {
      title: "ABSOLUTE ASSERTION / FAITH AS ENSLAVEMENT",
      analysis:
        "The adverb '**always**' transforms a statement of political trust into an article of **faith**: 'always right' admits no exceptions, no errors, no possibility of criticism. This absolutism replaces political judgement with religious devotion — Napoleon is not evaluated but worshipped. The statement is grammatically identical to religious statements ('God is always good') and functions identically: it places the authority figure beyond question.",
      secondPoint:
        "Boxer's statement is technically **unfalsifiable** (incapable of being proven wrong): if Napoleon does something that appears wrong, Boxer's maxim instructs him to conclude that HE is mistaken, not Napoleon. This creates a closed logical system where no evidence can challenge the conclusion — the hallmark of totalitarian thinking.",
      keyWords: [
        { word: "Unfalsifiable", def: "A claim structured so that no evidence can prove it wrong" },
        { word: "Article of faith", def: "A belief held without question or evidence" },
        { word: "Totalitarian thinking", def: "A thought system that allows no questioning of authority" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Boxer's absolute loyalty represents intellectual **stagnation**: he cannot learn from experience because his maxim prevents him from interpreting experience critically. No matter what happens — purges, executions, broken promises — Boxer returns to the same conclusion: 'Napoleon is always right.' His mind is trapped in a loop, processing new information through a fixed filter that always produces the same result.",
      keyWords: [
        { word: "Intellectual stagnation", def: "Inability to develop new understanding or change conclusions" },
        { word: "Fixed filter", def: "A predetermined framework that distorts new information to fit existing beliefs" },
      ],
    },
    technique2: {
      title: "DRAMATIC IRONY — THE AUDIENCE'S KNOWLEDGE",
      analysis:
        "The reader experiences **dramatic irony**: we know Napoleon is corrupt, self-serving, and increasingly tyrannical, while Boxer continues to trust him absolutely. This gap between the reader's knowledge and Boxer's ignorance transforms Boxer's loyalty from admirable to tragic — his greatest virtue (loyalty) becomes his fatal flaw. The irony is excruciating because Boxer's eventual fate (sold to the knacker's yard) is the direct consequence of the trust he places in the leader who betrays him.",
      secondPoint:
        "Boxer's mantra reveals how **loyalty** and **stupidity** are deliberately confused by authoritarian regimes: the regime values Boxer's loyalty precisely because it is uninformed. Critical loyalty — loyalty that asks questions — would be dangerous. The regime needs the kind of loyalty that CANNOT question, and Boxer provides it perfectly.",
      keyWords: [
        { word: "Dramatic irony", def: "When the audience understands something a character does not" },
        { word: "Fatal flaw", def: "A character strength that, taken to excess, causes their downfall" },
        { word: "Critical loyalty", def: "Loyalty that retains the capacity to question and hold power accountable" },
      ],
    },
    context: {
      points: [
        {
          label: "THE STAKHANOVITE WORKER",
          text: "Boxer represents the **Stakhanovite** worker — named after Alexei Stakhanov, a Soviet miner celebrated for his extraordinary productivity. Stalin's regime glorified hard work while exploiting workers ruthlessly. Boxer's motto 'I will work harder' mirrors Stakhanovite culture: productivity as patriotic duty.",
        },
        {
          label: "THE KNACKER'S YARD",
          text: "Boxer's sale to the **knacker's yard** (a slaughterhouse for spent horses) is the novel's most emotionally devastating moment. It literalises the capitalist and Stalinist treatment of workers: useful when productive, discarded when spent. The regime extracts maximum labour and then destroys the labourer.",
        },
      ],
      keyWords: [
        { word: "Stakhanovite", def: "A model worker celebrated for exceptional productivity in Soviet culture" },
        { word: "Exploitation", def: "Using someone's labour or trust for another's benefit without fair return" },
        { word: "Discarded", def: "Thrown away when no longer useful; treated as disposable" },
      ],
    },
    wow: {
      title: "THE BANALITY OF EVIL (Arendt)",
      analysis:
        "Hannah Arendt's concept of the **banality of evil** — the idea that great evil is often perpetrated not by monsters but by ordinary people who follow orders without thinking — illuminates Boxer's tragedy. Boxer is not evil: he is kind, hardworking, and loyal. But his refusal to think critically makes him complicit in Napoleon's tyranny. By working harder, by never questioning, by always believing Napoleon is right, Boxer enables the very system that will destroy him. Arendt argued that Adolf Eichmann — the Nazi bureaucrat she studied — was terrifyingly ordinary: he did not hate Jews but simply followed orders without moral reflection. Boxer is Orwell's Eichmann: a decent individual whose intellectual surrender serves monstrous purposes. The banality of Boxer's faith — 'Napoleon is always right' — IS the banality of evil: not dramatic wickedness but quiet, unthinking obedience that enables others' wickedness to flourish.",
      keyWords: [
        { word: "Banality of evil", def: "Arendt's concept that great evil arises from ordinary, thoughtless obedience" },
        { word: "Complicit", def: "Involved in wrongdoing through passive participation or failure to resist" },
        { word: "Moral reflection", def: "The conscious evaluation of one's actions against ethical principles" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "animal-farm",
    quote: "The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which",
    who: "Narrator",
    act: "Chapter 10 (Final Line)",
    themes: ["Power & Corruption", "Revolution & Betrayal", "Cyclical History", "Oppression"],
    keyQuote: {
      text: '"The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which"',
      highlight: "impossible to say which was which",
      note: "The novel's devastating final image — the pigs and humans becoming indistinguishable — completes the revolution's tragedy: the oppressed have become the oppressors, identical to those they replaced.",
    },
    technique1: {
      title: "CHIASMUS / VISUAL TRANSFORMATION",
      analysis:
        "The **chiasmus** — 'pig to man, and from man to pig' — creates a pattern of REVERSAL: A-B-B-A. This crossing structure mirrors the crossing of identities: pigs become men, men become pigs. The rhetorical figure PERFORMS what it describes — the words swap places just as the characters swap roles. The chiasmus creates a visual and rhythmic sense of transformation happening before the reader's eyes.",
      secondPoint:
        "The phrase '**impossible to say which was which**' does not merely note resemblance but IDENTITY COLLAPSE: the two categories (pig/man, revolutionary/oppressor) have merged. This is more radical than saying 'the pigs resembled men' — Orwell says they are INDISTINGUISHABLE. The word '**impossible**' makes the collapse total: even a deliberate effort to differentiate cannot succeed.",
      keyWords: [
        { word: "Chiasmus", def: "A rhetorical pattern where elements are repeated in reverse order (A-B-B-A)" },
        { word: "Identity collapse", def: "The merging of two distinct identities into an indistinguishable whole" },
        { word: "Indistinguishable", def: "So similar that it is impossible to tell one from the other" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "The novel's final image completes the **regression** to a state WORSE than the beginning: before the revolution, at least the animals knew their enemies (humans). Now, the enemy wears their own face. The regression is circular — back to oppression — but ALSO degenerative, because the new oppression is camouflaged by revolutionary rhetoric. The revolution has not merely failed; it has produced a MORE insidious form of the original tyranny.",
      keyWords: [
        { word: "Circular regression", def: "Return to a starting point that proves the journey was futile" },
        { word: "Insidious", def: "Spreading harm gradually and subtly, in a way that is hard to notice" },
      ],
    },
    technique2: {
      title: "PERSPECTIVE — 'THE CREATURES OUTSIDE'",
      analysis:
        "The final scene is witnessed from **outside** the farmhouse, through the window — the animals observe the pigs dining with men from the position of excluded outsiders. This **perspective** is deliberately chosen: the ordinary animals are now separated from their leaders by glass, architecture, and social distance. The window functions as a **class barrier** — transparent but impenetrable.",
      secondPoint:
        "The word '**creatures**' — used for the observing animals — is dehumanising (or de-animalising): they are not named, not individualised, but reduced to generic 'creatures.' This linguistic demotion mirrors their political demotion: they have been returned to the status of nameless beasts, exactly where they started before the revolution. Even the narrative voice has absorbed the hierarchy.",
      keyWords: [
        { word: "Perspective", def: "The viewpoint from which events are observed and narrated" },
        { word: "Class barrier", def: "An obstacle separating social classes, whether physical or invisible" },
        { word: "Linguistic demotion", def: "Using language that reduces a subject's status or individuality" },
      ],
    },
    context: {
      points: [
        {
          label: "THE TEHRAN CONFERENCE",
          text: "The image of pigs and men dining together alludes to the **Tehran Conference** (1943), where Stalin met with Churchill and Roosevelt — communist and capitalist leaders cooperating despite ideological opposition. Orwell saw this as confirmation that the Soviet leadership had abandoned revolutionary principles in favour of power politics.",
        },
        {
          label: "CYCLICAL HISTORY",
          text: "Orwell's ending supports a **cyclical** view of history: revolutions do not produce progress but repetition. Each new ruling class eventually resembles the one it replaced. This pessimistic view challenges the Marxist belief in historical progress through revolution.",
        },
      ],
      keyWords: [
        { word: "Tehran Conference", def: "The 1943 meeting of Stalin, Roosevelt, and Churchill" },
        { word: "Cyclical history", def: "The view that history repeats in patterns rather than progressing" },
        { word: "Power politics", def: "Political action motivated by power rather than principle" },
      ],
    },
    wow: {
      title: "THE IRON LAW OF OLIGARCHY (Michels)",
      analysis:
        "Robert Michels's **Iron Law of Oligarchy** — the theory that ALL organisations, no matter how democratic, eventually become ruled by a small elite — is *Animal Farm*'s deep structural argument. Michels argued that leadership inevitably concentrates power: leaders develop expertise, control information, and become indispensable, gradually transforming democratic organisations into oligarchies (rule by the few). Orwell dramatises this 'iron law': the revolution begins with genuine collective decision-making (the animals vote, debate, and share power) but inevitably concentrates power in the pigs, who have the education, intelligence, and rhetorical skill to dominate. The final image — pigs indistinguishable from men — is Michels's iron law made visible: the revolutionary leaders have become a new oligarchy, structurally identical to the old one. Michels would argue that this is not a failure of the specific revolution but an inherent feature of ALL organised power. Revolutions change the personnel of the elite but not the STRUCTURE of elite rule.",
      keyWords: [
        { word: "Iron Law of Oligarchy", def: "Michels's theory that all organisations inevitably become ruled by a small elite" },
        { word: "Oligarchy", def: "A form of power structure in which a small group rules over the many" },
        { word: "Personnel", def: "The individuals who occupy positions of power — as opposed to the system itself" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "animal-farm",
    quote: "I will work harder!",
    who: "Boxer",
    act: "Chapter 3",
    themes: ["Labour & Exploitation", "Loyalty & Betrayal", "The Working Class", "False Hope"],
    keyQuote: {
      text: '"I will work harder!"',
      highlight: "harder",
      note: "Boxer's personal motto — his response to every crisis — demonstrates the tragic belief that individual effort can overcome systemic oppression, when in reality, his labour only enriches those who exploit him.",
    },
    technique1: {
      title: "EXCLAMATORY RESOLVE / SELF-EXPLOITATION",
      analysis:
        "The **exclamation mark** gives Boxer's statement the force of a vow — he is not merely observing that more work is needed but COMMITTING to it with passionate energy. This is **self-exploitation**: Boxer does not need to be forced to work harder because he forces HIMSELF. The most effective oppression is that which the oppressed impose on themselves — Boxer is his own taskmaster, saving Napoleon the trouble of compulsion.",
      secondPoint:
        "The comparative '**harder**' has no upper limit — there is always a harder to reach. This **infinite comparative** traps Boxer in escalating self-demand: however hard he works, he can always work HARDER. The structure ensures that 'enough' never arrives — Boxer can never rest because improvement is always possible. The word 'harder' is a grammatical treadmill.",
      keyWords: [
        { word: "Self-exploitation", def: "Imposing on oneself the demands that serve another's interests" },
        { word: "Infinite comparative", def: "A comparison with no upper limit, creating endless escalation" },
        { word: "Compulsion", def: "Being forced to do something by external pressure or authority" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Despite Boxer's effort, nothing changes — the farm does not improve for the animals, only for the pigs. Boxer's work harder produces **stagnation** for the working animals: they expend more energy but gain nothing. The harder Boxer works, the more the pigs benefit. His effort does not produce progress but redistributes its benefits upward. Stagnation is disguised as effort.",
      keyWords: [
        { word: "Redistribution upward", def: "The transfer of benefits from those who produce to those who control" },
        { word: "Effort without progress", def: "Activity that produces no improvement for the person making it" },
      ],
    },
    technique2: {
      title: "MODAL VERB — 'WILL' AS TRAGIC DETERMINATION",
      analysis:
        "The **modal verb** '**will**' expresses determination, future commitment, and personal agency. But the irony is devastating: Boxer's 'will' is exercised in the service of those who will destroy him. His determination — his strongest quality — is precisely what makes him exploitable. The modal verb that should express freedom (I WILL do this) instead expresses servitude (I will work for THEM harder).",
      secondPoint:
        "The pronoun '**I**' isolates Boxer: he does not say 'we will work harder' but 'I will.' His commitment is personal, individual, solitary. This reveals the atomisation (separation into isolated individuals) that prevents collective action: if every worker says 'I' instead of 'we,' solidarity is impossible and the workers defeat themselves through individual effort rather than collective resistance.",
      keyWords: [
        { word: "Modal verb", def: "A verb expressing determination, intention, or commitment" },
        { word: "Atomisation", def: "The separation of people into isolated individuals, preventing solidarity" },
        { word: "Collective resistance", def: "Organised opposition by a group rather than individual effort" },
      ],
    },
    context: {
      points: [
        {
          label: "THE PROTESTANT WORK ETHIC",
          text: "Max Weber identified the **Protestant work ethic** — the belief that hard work is morally virtuous and leads to success — as a foundation of capitalist culture. Boxer embodies this ethic: he works not because he is forced but because he believes working harder is inherently right. Orwell shows how this ethic serves the powerful while exhausting the workers.",
        },
        {
          label: "EXPLOITATION OF LABOUR",
          text: "Marx's theory of **surplus value** argues that workers produce more value than they receive in wages — the difference (surplus) is taken by the owner. Boxer is the purest example: he produces enormous value through his labour, but all the surplus goes to the pigs. His harder work means greater exploitation, not greater reward.",
        },
      ],
      keyWords: [
        { word: "Protestant work ethic", def: "The belief that hard work is morally virtuous and leads to reward" },
        { word: "Surplus value", def: "Marx's concept of the value workers produce beyond what they receive" },
        { word: "Work ethic", def: "A moral framework that makes hard work feel like a personal obligation" },
      ],
    },
    wow: {
      title: "DISCIPLINARY POWER (Foucault)",
      analysis:
        "Foucault's concept of **disciplinary power** — power that works not through external force but through the subject's **internalisation** of norms — explains how Boxer exploits himself. Foucault argues that modern power does not need to punish or threaten: it creates subjects who discipline THEMSELVES. Boxer does not need a whip or a guard because he has internalised the value of hard work so completely that he becomes his own overseer. Foucault's concept of the **panopticon** — a prison where inmates behave because they MIGHT be watched — finds its ultimate expression in Boxer: he works harder even when no one watches or demands it, because the demand has been planted inside his own mind. The most effective power, Foucault argues, is invisible — and Boxer demonstrates this invisibility perfectly. He cannot see his own exploitation because the mechanism of control IS his own conviction. 'I will work harder' is not a response to external pressure but an expression of internalised power: the regime has succeeded in making Boxer demand from himself what it would otherwise have to impose by force.",
      keyWords: [
        { word: "Disciplinary power", def: "Foucault's concept of power that operates through self-regulation" },
        { word: "Internalisation", def: "The absorption of external demands into one's own beliefs and behaviour" },
        { word: "Panopticon", def: "A system of control where subjects regulate themselves because they might be observed" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "animal-farm",
    quote: "No one believes more firmly than Comrade Napoleon that all animals are equal",
    who: "Squealer",
    act: "Chapter 5",
    themes: ["Propaganda & Lies", "Language & Manipulation", "Hypocrisy", "Power"],
    keyQuote: {
      text: '"No one believes more firmly than Comrade Napoleon that all animals are equal"',
      highlight: "more firmly",
      note: "Squealer's propaganda technique at its most insidious — claiming Napoleon believes in equality MORE than anyone else, precisely at the moment when equality is being abolished.",
    },
    technique1: {
      title: "SUPERLATIVE PROPAGANDA / THE BIG LIE",
      analysis:
        "The construction '**No one believes more firmly**' is a **superlative** claim — Napoleon's commitment to equality exceeds everyone else's. This is the technique of the **Big Lie** (telling a falsehood so enormous that people assume it must be true): the claim is so completely opposed to reality that the listener cannot process the contradiction. If Napoleon APPEARS to violate equality, the listener concludes they must be mistaken — because Squealer has pre-emptively established Napoleon as equality's greatest champion.",
      secondPoint:
        "The title '**Comrade**' — a term of socialist equality, implying all members are peers — is used for the leader who has destroyed equality. This **semantic inversion** (using a word to mean its opposite) is Squealer's characteristic technique: he does not avoid the language of equality but WEAPONISES it, using revolutionary vocabulary to defend counter-revolutionary action.",
      keyWords: [
        { word: "The Big Lie", def: "A propaganda technique of telling such large lies that they seem true" },
        { word: "Semantic inversion", def: "Using a word to mean its opposite; corrupting language" },
        { word: "Superlative", def: "Expressing the highest degree of a quality; the most extreme claim" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Squealer's propaganda represents the **regression** of language from communication to manipulation. Words no longer mean what they say — 'equal' means 'unequal,' 'comrade' means 'master,' 'believes' means 'pretends.' This linguistic regression parallels the political regression: as the revolution degrades, so does the language used to describe it. Truth and language decay together.",
      keyWords: [
        { word: "Linguistic regression", def: "The degradation of language from meaningful communication to noise" },
        { word: "Manipulation", def: "Controlling others through deception rather than honest persuasion" },
      ],
    },
    technique2: {
      title: "SQUEALER AS MEDIA",
      analysis:
        "Squealer functions as the farm's **media**: he delivers information from the leadership to the public. But his information is always distorted — facts are omitted, statistics are invented, and history is rewritten. Orwell uses Squealer to represent not just individual liars but the **institutional propaganda apparatus** — the newspaper, the radio, the school system — that mediates between power and public in totalitarian states.",
      secondPoint:
        "Squealer's effectiveness depends on the animals' inability to **verify** his claims: they cannot read the commandments (Squealer changes them at night), cannot remember the past accurately, and cannot access alternative information. Squealer succeeds not because his lies are convincing but because the animals have no way to check them. Propaganda flourishes in the absence of **independent verification**.",
      keyWords: [
        { word: "Propaganda apparatus", def: "The institutional systems through which a regime disseminates its narrative" },
        { word: "Independent verification", def: "The ability to check claims against separate, reliable sources" },
        { word: "Institutional", def: "Operating through organisations and systems rather than individual action" },
      ],
    },
    context: {
      points: [
        {
          label: "PRAVDA & SOVIET MEDIA",
          text: "**Pravda** ('Truth') — the Soviet Union's official newspaper — was notoriously full of lies. Orwell's Squealer directly parallels Pravda: a media organ whose NAME claims truth while its CONTENT produces falsehood. The irony of naming a propaganda tool 'Truth' mirrors Squealer's technique of using the language of equality to defend inequality.",
        },
        {
          label: "ORWELL & JOURNALISM",
          text: "Orwell worked as a **journalist** and broadcaster for the BBC. His experience with institutional media — its compromises, censorship, and propaganda functions — informed his portrayal of Squealer. Orwell understood from the INSIDE how truth is distorted by institutional pressures.",
        },
      ],
      keyWords: [
        { word: "Pravda", def: "The Soviet Union's official newspaper, meaning 'Truth' despite its propaganda content" },
        { word: "Censorship", def: "The suppression or alteration of information by authorities" },
        { word: "Institutional pressures", def: "Forces within organisations that shape and constrain what can be said" },
      ],
    },
    wow: {
      title: "SIMULACRA (Baudrillard)",
      analysis:
        "Jean Baudrillard's concept of **simulacra** — copies without originals, representations that have replaced the reality they once depicted — describes Squealer's propaganda precisely. Squealer does not merely LIE about equality (which would imply that equality exists somewhere as a truth to be distorted). Rather, Squealer creates a **simulation** of equality that has completely replaced the real thing. On the farm, 'equality' no longer refers to genuine equal treatment but to Squealer's narrative ABOUT equal treatment. The word has been severed from its referent: 'equality' is now a floating symbol that means whatever the pigs need it to mean. Baudrillard would argue that the animals do not live in a world of truth distorted by lies but in a world of **hyperreality** — a reality entirely constructed by representation. There is no 'real' equality hidden behind Squealer's lies; there is only Squealer's version, which IS reality for the animals. The simulation has consumed the real.",
      keyWords: [
        { word: "Simulacra", def: "Baudrillard's concept of copies that have replaced what they once represented" },
        { word: "Hyperreality", def: "A reality constructed entirely by representation, with no 'real' behind it" },
        { word: "Referent", def: "The actual thing that a word or symbol refers to in the real world" },
      ],
    },
  },
];
