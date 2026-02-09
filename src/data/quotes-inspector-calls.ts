import { Quote } from "./types";

// ─── AN INSPECTOR CALLS — 6 Quotes ───

export const INSPECTOR_CALLS_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "inspector-calls",
    quote: "We are members of one body. We are responsible for each other",
    who: "Inspector Goole",
    act: "Act 3",
    themes: ["Social Responsibility", "Class & Power", "Morality & Judgement", "Socialism vs Capitalism"],
    keyQuote: {
      text: '"We are members of one body. We are responsible for each other"',
      highlight: "responsible",
      note: "The Inspector's final speech — Priestley's central moral thesis — directly addresses both the Birling family and the audience, asserting collective social responsibility as the foundation of a just society.",
    },
    technique1: {
      title: "DECLARATIVE STATEMENTS / ANAPHORA",
      analysis:
        "The **anaphoric** (beginning successive clauses with the same word) repetition of 'We are' creates a **collectivist** (emphasising group responsibility) message: the repeated pronoun refuses to allow any individual to exclude themselves. These are not opinions but **declarative** (stated as fact) truths delivered with the authority of a moral **imperative** (a command that must be obeyed).",
      secondPoint:
        "The phrase 'one body' uses **organic metaphor** — comparing society to a single living organism — to argue that harming one member damages the whole. This deliberately echoes the Christian concept of the **Body of Christ** (1 Corinthians 12:27), giving the Inspector's socialist message religious authority and universality.",
      keyWords: [
        { word: "Anaphora", def: "The repetition of a word or phrase at the beginning of successive clauses" },
        { word: "Collectivist", def: "Prioritising the group's welfare over individual interests" },
        { word: "Organic metaphor", def: "Comparing society to a living organism where all parts are interconnected" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The Inspector himself does not develop — he arrives with complete moral clarity and departs unchanged. His **stagnation** is intentional: he represents an **immutable** (unchanging) moral standard against which the other characters are measured. He functions as a moral **touchstone** (a standard by which something is judged) — fixed, certain, and unyielding.",
      keyWords: [
        { word: "Immutable", def: "Unchanging; unable to be altered" },
        { word: "Touchstone", def: "A standard or criterion by which something is judged" },
      ],
    },
    technique2: {
      title: "PRIESTLEY AS VENTRILOQUIST / MOUTHPIECE",
      analysis:
        "The Inspector is Priestley's **mouthpiece** (a character used to express the author's views directly). His final speech breaks the conventions of naturalistic drama: it is not a character speaking but a **political manifesto** delivered from the stage. Priestley **instrumentalises** (uses as a tool) the dramatic form to deliver a socialist message to a post-war audience deciding the future shape of British society.",
      secondPoint:
        "The speech's conclusion — 'if men will not learn that lesson, then they will be taught it in fire and blood and anguish' — shifts from moral argument to **prophecy**. Written in 1945 but set in 1912, Priestley lets the audience know that the 'fire and blood' has already happened — two World Wars. This **dramatic irony** makes the warning retrospective and urgent: we know the cost of ignoring this lesson.",
      keyWords: [
        { word: "Mouthpiece", def: "A character through whom the author expresses their own views" },
        { word: "Political manifesto", def: "A public declaration of beliefs, intentions, and planned actions" },
        { word: "Prophecy", def: "A prediction of future events, often with moral implications" },
      ],
    },
    context: {
      points: [
        {
          label: "1945 — THE WELFARE STATE",
          text: "Priestley wrote the play in 1945, the year Labour won a **landslide** election promising the **welfare state** — the NHS, social security, state education. The play is a dramatic argument FOR this collective vision and AGAINST the individualist capitalism represented by Mr Birling. Priestley wanted audiences to vote for social responsibility.",
        },
        {
          label: "1912 SETTING — DRAMATIC IRONY",
          text: "By setting the play in 1912 — before two World Wars, the sinking of the Titanic, and the collapse of the class system — Priestley creates **dramatic irony** on a massive scale. The audience knows that the Birlings' complacent world is about to be destroyed, making their selfishness seem not just immoral but catastrophically **naive** (showing a lack of experience or understanding).",
        },
      ],
      keyWords: [
        { word: "Welfare state", def: "A system where the government provides healthcare, education, and social security for all citizens" },
        { word: "Landslide", def: "An overwhelming victory, especially in an election" },
        { word: "Dramatic irony", def: "When the audience knows something the characters do not" },
      ],
    },
    wow: {
      title: "BRECHTIAN EPIC THEATRE",
      analysis:
        "Bertolt Brecht's **Epic Theatre** argued that drama should not merely entertain but provoke **critical thinking** about social structures. The Inspector's final speech functions as a Brechtian **Verfremdungseffekt** (alienation effect): it breaks the naturalistic illusion, directly addresses the audience's political conscience, and demands action beyond the theatre. Priestley, like Brecht, believes that art must be **didactic** (teaching) — its purpose is not to create catharsis (emotional release) but to create **engagement** (active involvement in social change). The play does not resolve comfortably: the final phone call reopens the moral question, refusing the audience the comfort of closure and insisting they carry the Inspector's message into their own lives.",
      keyWords: [
        { word: "Epic Theatre", def: "Brecht's dramatic theory using alienation to provoke critical social thinking" },
        { word: "Verfremdungseffekt", def: "Alienation effect — making the familiar strange to encourage critical analysis" },
        { word: "Didactic", def: "Intended to teach a moral or political lesson" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "inspector-calls",
    quote: "The Titanic — she sails next week... unsinkable, absolutely unsinkable",
    who: "Mr Birling",
    act: "Act 1",
    themes: ["Capitalism vs Socialism", "Dramatic Irony", "Class & Power", "Arrogance & Ignorance"],
    keyQuote: {
      text: '"The Titanic — she sails next week... unsinkable, absolutely unsinkable"',
      highlight: "unsinkable",
      note: "Birling's confident proclamation about the Titanic — which the 1945 audience knows sank — establishes him as a figure of catastrophic arrogance whose every prediction will prove wrong.",
    },
    technique1: {
      title: "DRAMATIC IRONY / PROLEPTIC ABSURDITY",
      analysis:
        "Priestley creates devastating **dramatic irony**: every audience member knows the Titanic sank on its maiden voyage in April 1912. Birling's certainty — 'absolutely unsinkable' — becomes **proleptic** (anticipating the future) absurdity, undermining everything else he will say. If he is this catastrophically wrong about the Titanic, his confident predictions about 'no war' and 'steady progress' are equally **discredited** (shown to be unreliable).",
      secondPoint:
        "The intensifier '**absolutely**' amplifies the irony: Birling does not merely suggest the Titanic is safe but declares it with total certainty. This **hyperbolic** confidence reveals a man whose self-assurance is inversely proportional to his understanding — the more certain he is, the more wrong he proves to be.",
      keyWords: [
        { word: "Dramatic irony", def: "When the audience possesses knowledge that characters do not" },
        { word: "Proleptic", def: "Anticipating future events; relating to what will happen later" },
        { word: "Discredited", def: "Shown to be untrustworthy or unreliable" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Mr Birling represents ideological **stagnation**: he is incapable of learning, adapting, or questioning his assumptions. His confidence in the Titanic mirrors his confidence in capitalism — both are based on blind faith in **material progress** rather than genuine understanding. Throughout the play, Birling refuses to change, making his stagnation not just personal but representative of his entire class.",
      keyWords: [
        { word: "Material progress", def: "Advancement measured by wealth, technology, and industrial development" },
        { word: "Representative", def: "Serving as a typical example of a group or class" },
      ],
    },
    technique2: {
      title: "THE UNRELIABLE AUTHORITY FIGURE",
      analysis:
        "Birling is established as an **unreliable authority** (someone whose opinions cannot be trusted despite their social position). He speaks with the tone of expertise — pompous, declarative, certain — but the content is consistently wrong. Priestley uses this technique to **dismantle** (take apart, destroy) the assumption that wealth and social status equate to wisdom or moral authority.",
      secondPoint:
        "By placing Birling's wrong predictions at the play's opening, Priestley ensures that the audience approaches everything he says with **scepticism** (doubt). When Birling later dismisses responsibility for Eva Smith, the audience has already been primed to distrust his judgment — a brilliant structural strategy that makes the Inspector's opposing view more persuasive by contrast.",
      keyWords: [
        { word: "Unreliable authority", def: "A figure whose social position suggests expertise but whose views prove wrong" },
        { word: "Dismantle", def: "To take apart; to systematically destroy an argument or assumption" },
        { word: "Scepticism", def: "A doubting or questioning attitude toward claims or assumptions" },
      ],
    },
    context: {
      points: [
        {
          label: "EDWARDIAN HUBRIS",
          text: "1912 was the height of Edwardian **hubris** (excessive pride leading to downfall): the British Empire seemed invincible, technology was advancing rapidly, and the upper classes believed their position was permanent and deserved. The Titanic became a **symbol** of this false confidence — the 'unsinkable' ship that sank, just as the 'stable' pre-war world was about to collapse.",
        },
        {
          label: "PRIESTLEY'S TIME MANIPULATION",
          text: "By writing in 1945 about 1912, Priestley gives the audience **hindsight** (understanding after the event) that the characters lack. This structural choice transforms every confident statement into irony and every moral failure into a warning: 'You knew what happened. Now ask yourself: are you repeating these mistakes?'",
        },
      ],
      keyWords: [
        { word: "Hubris", def: "Excessive pride or self-confidence, often leading to downfall" },
        { word: "Hindsight", def: "Understanding of a situation only after it has occurred" },
        { word: "Symbol", def: "Something that represents or stands for a broader idea or concept" },
      ],
    },
    wow: {
      title: "HEGEMONIC IDEOLOGY (Gramsci)",
      analysis:
        "Antonio Gramsci's concept of **cultural hegemony** describes how the ruling class maintains power not through force but through making their worldview seem like common sense. Birling's speech is a perfect example: he presents capitalist optimism as obvious truth — 'everybody says so.' His authority derives not from evidence but from his class position. Priestley exposes this hegemony by having history itself contradict Birling's 'common sense.' The Titanic's sinking, the World Wars, and the collapse of Empire all prove that the ruling class's confident narrative was **ideological construction** (beliefs manufactured to serve power) rather than reality. The audience, armed with hindsight, can see through the hegemony that the characters cannot — and is challenged to identify similar blind spots in their own era.",
      keyWords: [
        { word: "Cultural hegemony", def: "The dominance of one class's worldview, accepted as common sense by society" },
        { word: "Ideological construction", def: "A belief system manufactured to maintain existing power structures" },
        { word: "Ruling class", def: "The social class that holds the most power and influence in a society" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "inspector-calls",
    quote: "But these girls aren't cheap labour — they're people",
    who: "Sheila Birling",
    act: "Act 1",
    themes: ["Social Responsibility", "Class & Power", "Gender", "Generational Divide"],
    keyQuote: {
      text: '"But these girls aren\'t cheap labour — they\'re people"',
      highlight: "people",
      note: "Sheila's assertion marks the moment she begins to see Eva Smith as a human being, not a disposable economic unit — the first step in her moral awakening.",
    },
    technique1: {
      title: "ANTITHESIS / SEMANTIC OPPOSITION",
      analysis:
        "The **antithesis** (direct contrast between two opposing ideas) of 'cheap labour' and 'people' exposes the **dehumanisation** (stripping away human dignity) inherent in capitalist language. 'Cheap labour' reduces human beings to a commodity with a price tag; 'people' reasserts their **intrinsic** (belonging to something by its very nature) worth. Sheila's simple statement performs a radical act of **semantic resistance** — refusing to accept the language of economics as adequate for describing human lives.",
      secondPoint:
        "The **dash** creates a dramatic pause that separates the two worldviews — the capitalist view (cheap labour) and the humanist view (people). This **typographical caesura** (a break created by punctuation) forces the reader to choose between them, making the moral choice explicit and unavoidable.",
      keyWords: [
        { word: "Antithesis", def: "The direct contrast between two opposing ideas placed side by side" },
        { word: "Dehumanisation", def: "Treating people as less than human; stripping away dignity" },
        { word: "Intrinsic worth", def: "Value that belongs to something by its very nature, not assigned by others" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Sheila demonstrates significant **moral progression**: she moves from the privileged naivety of her engagement party to recognising the humanity of working-class women. Unlike her parents, Sheila allows the Inspector's revelations to change her — she represents the younger generation's capacity for **empathetic growth** (developing the ability to feel and understand others' suffering).",
      keyWords: [
        { word: "Moral progression", def: "Growth in ethical understanding, empathy, and responsible behaviour" },
        { word: "Empathetic growth", def: "The development of a deeper capacity to understand and share others' feelings" },
      ],
    },
    technique2: {
      title: "GENERATIONAL CONTRAST",
      analysis:
        "Sheila's statement directly challenges her father's view of workers as **expendable** (replaceable and disposable) economic units. Priestley uses the **generational divide** between Sheila and Mr Birling to structure the play's moral argument: the older generation (Birling, Mrs Birling) cannot change; the younger generation (Sheila, Eric) can. This positions the 1945 audience to see themselves reflected in the younger characters — capable of building a better society.",
      secondPoint:
        "Sheila's language is notably simpler than the Inspector's or her father's: 'they're people' is an unpretentious statement of basic humanity. This **stylistic simplicity** suggests that moral truth is not complex — it is the older generation's elaborate justifications for inequality that are complicated. Goodness, Priestley implies, is straightforward; evil requires explanation.",
      keyWords: [
        { word: "Generational divide", def: "The difference in values and attitudes between older and younger people" },
        { word: "Expendable", def: "Considered replaceable or disposable; not valued as permanent" },
        { word: "Stylistic simplicity", def: "Using plain, direct language to convey a powerful message" },
      ],
    },
    context: {
      points: [
        {
          label: "WOMEN WORKERS IN 1912",
          text: "Working-class women in 1912 had no union protection, no minimum wage, and could be dismissed at will. **Sweated labour** (exploitative work for very low pay in poor conditions) was rampant, particularly in textile and manufacturing industries. Eva Smith represents the millions of women whose labour sustained upper-class comfort while they lived in poverty.",
        },
        {
          label: "SHEILA AS HOPE",
          text: "Priestley constructs Sheila as a figure of **hope**: she begins as a spoiled daughter of privilege but ends the play as a morally awakened young woman who refuses to return to ignorance. For the 1945 audience, Sheila represents the possibility that the post-war generation could choose differently from their parents — rejecting class prejudice in favour of social justice.",
        },
      ],
      keyWords: [
        { word: "Sweated labour", def: "Exploitative work for very low pay in poor conditions" },
        { word: "Class prejudice", def: "Discrimination or bias based on a person's social class" },
        { word: "Social justice", def: "Fair distribution of opportunities, rights, and resources across society" },
      ],
    },
    wow: {
      title: "RECOGNITION OF THE OTHER (Levinas)",
      analysis:
        "Emmanuel Levinas argued that ethics begins with the **recognition of the Other** — seeing another person as a genuine human being with their own experience, not as an object for our use. Sheila's statement enacts this Levinasian moment: she sees Eva Smith's **face** (Levinas' term for the irreducible humanity of the Other) for the first time. Before this, Eva was invisible — a 'girl' dismissed for asking for a living wage. After this, she is a person with **moral claims** on Sheila's conscience. Priestley dramatises the ethical insight that Levinas would later theorise: justice is not an abstract principle but begins in the concrete act of recognising another person's humanity and accepting responsibility for their welfare.",
      keyWords: [
        { word: "The Other", def: "Levinas' concept of the irreducible humanity of another person" },
        { word: "Recognition", def: "The act of acknowledging another person's full humanity and rights" },
        { word: "Moral claims", def: "The ethical demands that other people's suffering makes on our conscience" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "inspector-calls",
    quote: "If you're easy with me, I'm easy with you",
    who: "Eva Smith (as reported)",
    act: "Act 2",
    themes: ["Class & Power", "Gender", "Morality & Judgement", "Exploitation"],
    keyQuote: {
      text: '"If you\'re easy with me, I\'m easy with you"',
      highlight: "easy",
      note: "Eva Smith's reported words to Gerald reveal her dignity, pragmatism, and the impossible choices facing working-class women — she negotiates from a position of powerlessness with striking self-possession.",
    },
    technique1: {
      title: "CONDITIONAL SYNTAX / RECIPROCAL STRUCTURE",
      analysis:
        "The **conditional** ('if... then') structure creates an illusion of **reciprocity** (a mutual exchange between equals): Eva appears to negotiate on equal terms with Gerald. But the **power imbalance** (unequal distribution of authority) is enormous — she is destitute, he is wealthy. What appears to be a free choice is actually **constrained agency** (freedom of action limited by circumstances): Eva 'chooses' Gerald because the alternative is starvation.",
      secondPoint:
        "The repetition of '**easy**' is deeply ironic: the word suggests lightness and comfort, but the situation is neither. Eva must make herself 'easy' — **compliant** (willing to go along with others' wishes) and undemanding — to survive. Priestley exposes how economic desperation forces working-class women to perform a version of ease that conceals their suffering.",
      keyWords: [
        { word: "Reciprocity", def: "A mutual exchange between equals; give and take" },
        { word: "Constrained agency", def: "The ability to make choices, but only within severely limited options" },
        { word: "Compliant", def: "Willing to go along with others' wishes, often out of necessity" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Eva's situation represents continued **regression**: from factory worker to shop assistant to the streets to Gerald's kept woman. Each stage involves a further loss of **autonomy** (self-governance, independence). Yet paradoxically, her dignity remains intact — she negotiates terms, maintains her self-respect, and ultimately leaves Gerald when her conscience demands it. Her moral character **progresses** even as her social position regresses.",
      keyWords: [
        { word: "Autonomy", def: "The right or condition of self-governance and independence" },
        { word: "Paradox", def: "A seemingly contradictory situation that reveals a deeper truth" },
      ],
    },
    technique2: {
      title: "REPORTED SPEECH / ABSENT PRESENCE",
      analysis:
        "Eva Smith never appears on stage — she exists only through others' accounts. This **absent presence** (being central to the story while physically absent) is Priestley's most powerful structural device: Eva represents all the invisible working-class people whose lives are shaped by the decisions of the powerful. Her words reach us filtered through Gerald's memory, raising questions about **reliability** and **perspective** — do we hear Eva's real voice or Gerald's self-serving reconstruction?",
      secondPoint:
        "By denying Eva a stage presence, Priestley mirrors her social invisibility: the working class are talked about, acted upon, and disposed of, but never given a platform to speak for themselves. This structural choice IS the political argument — the form of the play enacts the injustice it describes.",
      keyWords: [
        { word: "Absent presence", def: "A character or force that is physically absent but central to the narrative" },
        { word: "Structural device", def: "A technique in the construction of a text that conveys meaning" },
        { word: "Reliability", def: "The extent to which an account can be trusted as accurate" },
      ],
    },
    context: {
      points: [
        {
          label: "WOMEN & ECONOMIC DEPENDENCE",
          text: "In 1912, women — especially working-class women — had virtually no economic independence. Without family support, education, or legal protections, women like Eva were forced into **exploitative** (taking unfair advantage) relationships for survival. Eva's arrangement with Gerald is not a free choice but an act of **economic coercion** (control through financial power).",
        },
        {
          label: "THE DOUBLE STANDARD",
          text: "Edwardian society applied a **sexual double standard**: men like Gerald could have affairs without social consequences, while women like Eva were condemned as immoral. Priestley exposes this **hypocrisy** (pretending to have beliefs or standards one does not actually follow) by presenting Eva's behaviour as dignified and Gerald's as exploitative, despite Eva bearing the social stigma.",
        },
      ],
      keyWords: [
        { word: "Economic coercion", def: "Controlling someone's behaviour through financial power or economic pressure" },
        { word: "Double standard", def: "Applying different moral rules to different groups, especially by gender" },
        { word: "Hypocrisy", def: "The practice of claiming to have moral standards that one's own behaviour contradicts" },
      ],
    },
    wow: {
      title: "SUBALTERN SILENCE (Spivak)",
      analysis:
        "Gayatri Spivak's essay *Can the Subaltern Speak?* argues that marginalised people are systematically denied a voice within dominant power structures — even when they speak, their words are filtered, distorted, or ignored by those in power. Eva Smith is the **subaltern** (a person of inferior status whose voice is suppressed): she never speaks directly to the audience, her words are reported by those who have wronged her, and her life story is reconstructed by the very class that destroyed her. Priestley's structural choice — keeping Eva offstage — enacts Spivak's theory decades before it was written. The play's moral challenge is precisely this: can we hear Eva's humanity through the distorting filters of class, gender, and power? Or do we, like the Birlings, only hear what confirms our own comfort?",
      keyWords: [
        { word: "Subaltern", def: "A marginalised person or group whose voice is suppressed by dominant power structures" },
        { word: "Voice", def: "The ability to speak, be heard, and have one's perspective acknowledged" },
        { word: "Power structures", def: "The established systems by which authority and influence are distributed in society" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "inspector-calls",
    quote: "You're not the kind of father a chap could go to when he's in trouble",
    who: "Eric Birling",
    act: "Act 3",
    themes: ["Generational Divide", "Family & Dysfunction", "Class & Power", "Social Responsibility"],
    keyQuote: {
      text: '"You\'re not the kind of father a chap could go to when he\'s in trouble"',
      highlight: "father",
      note: "Eric's accusation strikes at the heart of the Birling family — exposing Mr Birling's failure as a father and, by extension, the failure of the older generation to provide moral guidance.",
    },
    technique1: {
      title: "DIRECT ACCUSATION / COLLOQUIAL REGISTER",
      analysis:
        "Eric's use of the **colloquial** (informal, everyday) word 'chap' contrasts with the formal register of his parents' speech, marking his statement as emotionally raw rather than rhetorically polished. The **direct accusation** — 'You're not the kind of father' — strips away the social performance the Birlings have maintained throughout the play, exposing the reality beneath the respectable surface.",
      secondPoint:
        "The phrase 'when he's in trouble' uses **third person** ('a chap', 'he') rather than first person ('I'), creating emotional **distance** — Eric cannot bring himself to say 'I needed you and you weren't there.' This **displaced self-reference** reveals the depth of his hurt while maintaining a defensive barrier, suggesting that Birling's emotional failure has taught Eric to hide his vulnerability.",
      keyWords: [
        { word: "Colloquial", def: "Everyday, informal language used in conversation" },
        { word: "Register", def: "The level of formality in language, adapted to the social context" },
        { word: "Displaced self-reference", def: "Referring to oneself indirectly through third person to create emotional distance" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Eric's accusation represents **moral progression**: he has moved from drinking, lying, and sexual exploitation to confronting his family's — and his own — failures. Unlike his parents, Eric accepts responsibility for his actions and recognises that the family system itself is dysfunctional. His willingness to speak uncomfortable truth marks him, alongside Sheila, as capable of genuine **redemptive change** (transformation that makes amends for past wrongs).",
      keyWords: [
        { word: "Redemptive change", def: "Transformation that involves acknowledging past wrongs and committing to better behaviour" },
        { word: "Dysfunctional", def: "Not operating normally or healthily; failing to serve its intended purpose" },
      ],
    },
    technique2: {
      title: "MICROCOSM / FAMILY AS SOCIETY",
      analysis:
        "The Birling family functions as a **microcosm** (a small-scale representation) of Edwardian society: the father (patriarchal authority), the mother (social propriety), the daughter (emerging conscience), the son (inherited privilege and its failures). Eric's accusation that his father has failed is also Priestley's accusation that the **patriarchal capitalist class** has failed to provide moral leadership for society.",
      secondPoint:
        "By locating the play's climactic confrontation within a family dinner, Priestley transforms a **domestic** (relating to the home and family) scene into a **political allegory** (a story where personal events represent broader social truths). The private breakdown of the Birling family mirrors the public breakdown of the class system — what fails in the dining room fails in the nation.",
      keyWords: [
        { word: "Microcosm", def: "A small-scale representation of something much larger" },
        { word: "Domestic", def: "Relating to the home and family" },
        { word: "Political allegory", def: "A narrative where private events represent broader political or social truths" },
      ],
    },
    context: {
      points: [
        {
          label: "PATRIARCHAL FAILURE",
          text: "Mr Birling represents the Edwardian patriarch who wields absolute authority but provides no emotional support or moral guidance. His obsession with reputation — 'a public scandal' — over genuine care for his son exposes **patriarchal failure**: the system gives men power but does not require them to exercise it responsibly.",
        },
        {
          label: "THE YOUNGER GENERATION (1945)",
          text: "For the 1945 audience, Eric and Sheila represent the post-war generation who must rebuild society. Their willingness to accept responsibility contrasts with their parents' refusal, mirroring the real **generational shift** happening in Britain: young soldiers returning from war demanded a fairer society, leading to the creation of the welfare state.",
        },
      ],
      keyWords: [
        { word: "Patriarchal failure", def: "The inability of male authority figures to provide adequate moral or emotional leadership" },
        { word: "Generational shift", def: "A significant change in attitudes and values between older and younger people" },
        { word: "Public scandal", def: "A disgraceful event that becomes widely known and damages reputation" },
      ],
    },
    wow: {
      title: "THE FAILING FATHER (Lacan)",
      analysis:
        "Jacques Lacan's concept of the **Name-of-the-Father** describes the paternal function that establishes law, order, and moral structure within the family. When the father fails in this symbolic role, the result is psychological and social disorder. Eric's accusation reveals that Mr Birling has failed the **symbolic function** of fatherhood: he has provided economic security but not moral authority, material comfort but not emotional safety. Priestley suggests that the crisis of Edwardian society is fundamentally a crisis of **paternal authority** — the ruling class (the 'fathers' of the nation) have failed to provide moral leadership, leaving the younger generation to construct their own ethical framework from the wreckage.",
      keyWords: [
        { word: "Name-of-the-Father", def: "Lacan's concept of paternal authority as the foundation of social and moral order" },
        { word: "Symbolic function", def: "The role a figure plays in establishing meaning, order, and identity" },
        { word: "Paternal authority", def: "The moral and social power traditionally invested in the father figure" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "inspector-calls",
    quote: "I'm ashamed of you as well — yes both of you",
    who: "Sheila Birling",
    act: "Act 3",
    themes: ["Generational Divide", "Social Responsibility", "Morality & Judgement", "Family & Dysfunction"],
    keyQuote: {
      text: '"I\'m ashamed of you as well — yes both of you"',
      highlight: "ashamed",
      note: "Sheila confronts both her parents, reversing the moral hierarchy of the family — the child judges the parents, and finds them wanting.",
    },
    technique1: {
      title: "ROLE REVERSAL / INVERTED HIERARCHY",
      analysis:
        "Sheila performs a dramatic **role reversal**: instead of the parents judging the child, the child judges the parents. This **inverted hierarchy** (turning the normal order upside down) is Priestley's most radical structural move — he argues that moral authority does not follow social authority. The person with the least power (a young woman in a patriarchal family) possesses the greatest moral clarity.",
      secondPoint:
        "The intensifier '**as well**' and the emphatic '**yes both of you**' refuse to let either parent escape judgment. The **inclusive** address (targeting both parents equally) rejects the possibility that one parent is more guilty than the other — they are a **complicit** (jointly responsible) unit, and must be judged as such.",
      keyWords: [
        { word: "Role reversal", def: "When normal positions of authority and subordination are switched" },
        { word: "Inverted hierarchy", def: "The reversal of the expected order of power or authority" },
        { word: "Complicit", def: "Involved with others in wrongdoing; jointly responsible" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Sheila's **progression** culminates here: from spoiled socialite to moral authority. She has moved through recognition (seeing Eva's humanity), guilt (accepting her own role), and now judgment (holding others accountable). This arc mirrors the journey Priestley wants his audience to take — from comfortable ignorance to active moral engagement. Sheila's progression is the play's **emotional thesis** (the moral argument carried by feeling rather than logic).",
      keyWords: [
        { word: "Moral authority", def: "The right to make ethical judgments, earned through integrity rather than social position" },
        { word: "Accountability", def: "Being answerable for one's actions and their consequences" },
      ],
    },
    technique2: {
      title: "SHAME AS POLITICAL EMOTION",
      analysis:
        "The word '**ashamed**' is politically loaded: shame implies the violation of a code — but whose code? Sheila is not ashamed by her parents' standards (reputation, propriety) but by the Inspector's standards (compassion, responsibility). She has **internalised** (made part of her own belief system) a new moral framework and is now applying it to her own family.",
      secondPoint:
        "Priestley deploys shame as a **transformative** (causing fundamental change) emotion, distinct from mere guilt. Guilt says 'I did a bad thing'; shame says 'I am connected to people who do bad things and I refuse to accept it.' Sheila's shame is therefore a form of **moral agency** — she chooses to be ashamed because she has chosen to care.",
      keyWords: [
        { word: "Internalised", def: "Absorbed into one's own belief system or sense of identity" },
        { word: "Moral agency", def: "The capacity to make ethical decisions and take responsibility for them" },
        { word: "Transformative", def: "Causing a fundamental, thorough change in character or outlook" },
      ],
    },
    context: {
      points: [
        {
          label: "WOMEN'S VOICES IN 1912 vs 1945",
          text: "In 1912, a daughter publicly shaming her parents would be almost unthinkable. By 1945, women had gained the vote, entered the workforce during wartime, and demanded greater equality. Sheila's statement bridges these eras — she acts with the moral courage the 1945 audience would recognise, even within the constraints of the 1912 setting.",
        },
        {
          label: "THE FINAL PHONE CALL",
          text: "After Sheila's declaration, the play ends with a phone call announcing that a real inspector is coming. This **cyclical structure** (returning to the beginning) suggests that moral lessons, if ignored, will be repeated until learned. The older Birlings, who have dismissed the evening's events, must now face the same reckoning again — proving that Sheila's shame was justified.",
        },
      ],
      keyWords: [
        { word: "Cyclical structure", def: "A narrative pattern that returns to its beginning, suggesting repetition" },
        { word: "Reckoning", def: "A calculation or judgment of consequences; a time of accountability" },
        { word: "Moral courage", def: "The bravery to do what is right despite social pressure or personal cost" },
      ],
    },
    wow: {
      title: "THE PEDAGOGY OF THE OPPRESSED (Freire)",
      analysis:
        "Paulo Freire argued that genuine education is not the transfer of knowledge from teacher to student but a process of **conscientization** — developing critical awareness of social injustice and the courage to act against it. Sheila undergoes conscientization during the play: she moves from **naive consciousness** (accepting the world as it is) to **critical consciousness** (seeing the structures of inequality and refusing to accept them). Her shame is not passive guilt but active rejection — she sees the truth and refuses to pretend otherwise. Priestley's play itself functions as a Freirean educational tool: it aims not merely to inform the audience about social injustice but to transform their consciousness, exactly as the Inspector transforms Sheila's.",
      keyWords: [
        { word: "Conscientization", def: "The process of developing critical awareness of social and political injustice" },
        { word: "Critical consciousness", def: "The ability to perceive and challenge social injustice and inequality" },
        { word: "Naive consciousness", def: "An uncritical acceptance of the world as it appears, without questioning power structures" },
      ],
    },
  },
];
