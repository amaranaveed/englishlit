import { Quote } from "./types";

// ─── THE SIGN OF FOUR — 6 Quotes ───

export const SIGN_OF_FOUR_QUOTES: Quote[] = [
  {
    id: 1,
    textSlug: "sign-of-four",
    quote: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth",
    who: "Sherlock Holmes",
    act: "Chapter 6",
    themes: ["Reason & Logic", "Science & Method", "Appearance vs Reality"],
    keyQuote: {
      text: '"When you have eliminated the impossible, whatever remains, however improbable, must be the truth"',
      highlight: "eliminated",
      note: "Holmes's most famous axiom encapsulates his deductive method — truth is reached not by finding what IS but by removing what CANNOT be. Logic operates through elimination, not intuition.",
    },
    technique1: {
      title: "LOGICAL SYLLOGISM / CONDITIONAL STRUCTURE",
      analysis:
        "The sentence follows a strict **conditional** ('When... whatever... must') that mirrors the logical structure it describes. The 'when... must' framework presents deduction as **inevitable** (unavoidable): once the impossible is removed, truth is not discovered but revealed — it was always there, hidden behind false possibilities. The grammatical inevitability mirrors logical inevitability.",
      secondPoint:
        "The concessive clause '**however improbable**' is crucial: Holmes acknowledges that truth may be surprising, uncomfortable, or counter-intuitive. This anticipates a key scientific principle — that evidence determines conclusions, not expectations. The word '**improbable**' admits emotional resistance while the verb '**must**' overrides it with logical necessity.",
      keyWords: [
        { word: "Syllogism", def: "A form of logical reasoning where a conclusion follows necessarily from premises" },
        { word: "Conditional", def: "A statement that depends on a specified condition being met" },
        { word: "Concessive clause", def: "A clause that acknowledges a counter-argument before overriding it" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Holmes **progresses** through each case by systematically narrowing possibilities. His method is progressive by definition: each eliminated impossibility brings him closer to truth. The detective narrative IS a narrative of progress — from mystery to solution, ignorance to knowledge, chaos to order.",
      keyWords: [
        { word: "Systematic", def: "Following a methodical, step-by-step approach" },
        { word: "Epistemological", def: "Relating to the theory of knowledge and how we know things" },
      ],
    },
    technique2: {
      title: "EPISTEMOLOGICAL APHORISM",
      analysis:
        "This statement functions as an **aphorism** — a concise, memorable expression of a general truth. Its power comes from its apparent universality: Holmes claims not just a personal method but a universal law of reasoning. The statement aspires to the status of a mathematical theorem — permanently and universally true. Doyle positions Holmes not merely as a clever detective but as a philosopher of knowledge.",
      secondPoint:
        "The verb '**eliminated**' is violent — it means not just 'removed' but 'destroyed.' Holmes does not gently set aside impossibilities; he **eliminates** them. This aggressive language reveals the combative nature of Victorian rationalism: reason is not contemplative but militant, actively destroying error to reveal truth.",
      keyWords: [
        { word: "Aphorism", def: "A concise statement expressing a general truth or principle" },
        { word: "Universality", def: "Applying to all cases without exception" },
        { word: "Militant rationalism", def: "An aggressive approach to reason that actively destroys error" },
      ],
    },
    context: {
      points: [
        {
          label: "VICTORIAN EMPIRICISM",
          text: "Doyle wrote during the peak of **empiricism** — the belief that knowledge comes from observation and evidence. Holmes embodies the Victorian faith in science and reason as the ultimate tools for understanding the world, reflecting the influence of Darwin, Huxley, and Comte.",
        },
        {
          label: "THE DETECTIVE AS SCIENTIST",
          text: "The detective genre emerged alongside **forensic science**: Holmes's methods — examining traces, testing substances, logical deduction — mirror the developing forensic techniques of the 1880s. Holmes is explicitly a scientist: he runs experiments, publishes monographs, and approaches crime as a research problem.",
        },
      ],
      keyWords: [
        { word: "Empiricism", def: "The theory that knowledge comes from sensory experience and evidence" },
        { word: "Forensic science", def: "Scientific methods applied to the investigation of crime" },
        { word: "Monograph", def: "A detailed, scholarly study of a single specialised subject" },
      ],
    },
    wow: {
      title: "LOGOCENTRISM (Derrida)",
      analysis:
        "Derrida's concept of **logocentrism** — Western culture's privileging of reason and logic as the ultimate sources of truth — finds its most celebrated literary expression in Holmes. Holmes assumes that logic can solve ALL problems, that truth is ALWAYS accessible to reason, and that the rational mind is the supreme instrument of knowledge. Derrida would argue that Holmes's confidence in elimination reveals the **binary** structure of logocentric thinking: truth/falsehood, possible/impossible, rational/irrational. These binaries suppress the ambiguity, uncertainty, and undecidability that Derrida sees as inherent in all systems of meaning. Holmes's method works brilliantly in fiction — but Derrida would ask whether real-world problems can ever be resolved through such clean elimination, or whether the 'impossible' and 'improbable' constantly bleed into each other, resisting the neat categories Holmes imposes.",
      keyWords: [
        { word: "Logocentrism", def: "The privileging of reason and logic as the foundation of truth (Derrida)" },
        { word: "Binary", def: "A system of two opposing categories (e.g., true/false, good/evil)" },
        { word: "Undecidability", def: "Derrida's concept that meaning resists final, determinate resolution" },
      ],
    },
  },
  {
    id: 2,
    textSlug: "sign-of-four",
    quote: "My mind rebels at stagnation. Give me problems, give me work",
    who: "Sherlock Holmes",
    act: "Chapter 1",
    themes: ["Addiction & Stimulation", "Reason & Obsession", "The Divided Self"],
    keyQuote: {
      text: '"My mind rebels at stagnation. Give me problems, give me work"',
      highlight: "rebels",
      note: "Holmes's desperate need for intellectual stimulation — which drives him to cocaine when cases are absent — reveals his brilliant mind as both gift and curse, a relentless engine that destroys itself without fuel.",
    },
    technique1: {
      title: "PERSONIFICATION OF THE MIND / IMPERATIVE DEMAND",
      analysis:
        "Holmes **personifies** his mind as a separate entity that 'rebels' — it has its own will, its own demands. This **dissociation** (separation of self from mind) suggests that Holmes does not fully control his own intellect: it controls him. His mind is not a tool he uses but a master he serves. The **imperative** 'Give me' is a demand, not a request — Holmes needs stimulation the way the body needs food.",
      secondPoint:
        "The **anaphora** (repetition of 'Give me... give me') creates rhythmic urgency — the repetition mimics the relentless, repetitive craving of addiction. This structural echo connects Holmes's intellectual need to his cocaine habit: both involve compulsive demand for stimulation and intolerance of emptiness.",
      keyWords: [
        { word: "Personification", def: "Attributing human qualities (in this case, rebellion) to abstract concepts" },
        { word: "Dissociation", def: "The separation of one aspect of the self from the conscious whole" },
        { word: "Anaphora", def: "The deliberate repetition of a word or phrase at the start of successive clauses" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Holmes explicitly names what he most fears: **stagnation**. Without work, his extraordinary mind turns destructive — consuming itself through boredom and cocaine. This is the paradox of genius: the same quality that makes Holmes exceptional also makes him vulnerable to self-destruction. Stagnation for Holmes is not merely discomfort but existential crisis.",
      keyWords: [
        { word: "Existential crisis", def: "A moment of deep questioning about one's purpose and meaning" },
        { word: "Self-destruction", def: "Actions that damage oneself, often driven by internal compulsion" },
      ],
    },
    technique2: {
      title: "SEMANTIC FIELD OF CONFLICT",
      analysis:
        "The verb '**rebels**' belongs to a **semantic field** (group of related words) of conflict and warfare. Holmes frames the relationship between his mind and inactivity as a **battle** — his intellect fights against boredom as a soldier fights against an enemy. This militaristic language elevates intellectual engagement to a matter of survival: for Holmes, thinking is not leisure but combat.",
      secondPoint:
        "The word '**stagnation**' — from the Latin for 'standing water' — implies not just stillness but **corruption**: standing water breeds disease, and a standing mind breeds addiction and despair. The metaphor suggests that minds, like water, must flow to remain pure. Holmes's need for stimulation is presented not as vanity but as a health requirement.",
      keyWords: [
        { word: "Semantic field", def: "A group of words related in meaning that create a thematic pattern" },
        { word: "Corruption", def: "Decay or deterioration caused by neglect or misuse" },
        { word: "Stagnation", def: "Absence of growth or movement; mental or physical standstill" },
      ],
    },
    context: {
      points: [
        {
          label: "COCAINE IN VICTORIAN SOCIETY",
          text: "**Cocaine** was legal and widely available in 1890: it was sold in pharmacies and advertised as a cure for fatigue. Doyle, himself a medical doctor, understood its effects and dangers. Holmes's cocaine use reflects genuine Victorian medical culture, not modern sensationalism.",
        },
        {
          label: "THE VICTORIAN GENIUS",
          text: "Victorian culture romanticised the **tortured genius** — the idea that exceptional ability comes at the price of suffering. Holmes fits this pattern: his brilliance is inseparable from his restlessness, his isolation, and his self-destructive behaviour.",
        },
      ],
      keyWords: [
        { word: "Tortured genius", def: "The idea that exceptional ability comes at the price of personal suffering" },
        { word: "Self-medication", def: "Using substances to manage one's own psychological distress" },
        { word: "Romanticised", def: "Presented in an idealised, appealing way that obscures harsh realities" },
      ],
    },
    wow: {
      title: "THE PLEASURE PRINCIPLE (Freud)",
      analysis:
        "Freud's **pleasure principle** argues that the psyche seeks stimulation and avoids unpleasure — the mind fundamentally drives toward engagement and away from emptiness. Holmes's 'rebellion at stagnation' is a dramatic illustration: his psyche cannot tolerate the absence of stimulation and will find it through work or, failing that, through drugs. Freud would identify Holmes's cocaine use as a **displacement** — a substitute satisfaction when the primary source (intellectual work) is unavailable. But Freud would also note the **death drive** lurking beneath Holmes's restlessness: his compulsive need for stimulation, pushed far enough, becomes self-destructive. The seven-per-cent solution is not just a substitute for work but a flirtation with annihilation — Holmes risks destroying the very mind he is trying to feed. The genius who cannot stop thinking finds, in cocaine, a way to think himself into oblivion.",
      keyWords: [
        { word: "Pleasure principle", def: "Freud's theory that the psyche seeks stimulation and avoids unpleasure" },
        { word: "Displacement", def: "A substitute satisfaction when the primary source is unavailable" },
        { word: "Death drive", def: "Freud's concept of the unconscious compulsion toward self-destruction" },
      ],
    },
  },
  {
    id: 3,
    textSlug: "sign-of-four",
    quote: "It is the unofficial force — the Baker Street irregulars",
    who: "Sherlock Holmes",
    act: "Chapter 8",
    themes: ["Social Class", "Crime & Society", "The Marginalised", "Justice"],
    keyQuote: {
      text: '"It is the unofficial force — the Baker Street irregulars"',
      highlight: "unofficial",
      note: "Holmes's network of street children — the Baker Street Irregulars — reveals both his pragmatism and the novel's engagement with Victorian London's invisible underclass of homeless youths.",
    },
    technique1: {
      title: "OXYMORON / MILITARY METAPHOR",
      analysis:
        "The phrase '**unofficial force**' is an **oxymoron** — a force is by definition organised and official; an 'unofficial' force contradicts this. The contradiction reveals Holmes's subversive relationship with authority: he operates alongside the police but outside their rules, using resources and people the official system ignores. The **military metaphor** ('force,' 'irregulars') elevates the street children to soldiers — giving them dignity while acknowledging their unconventional status.",
      secondPoint:
        "The term '**irregulars**' has a specific military meaning: irregular forces are fighters who operate outside the formal army structure — guerrillas, partisans, scouts. By naming his street children 'irregulars,' Holmes both legitimises them (they serve a purpose) and acknowledges their marginality (they are not part of the regular system). The name captures their double status: useful to the system but not included in it.",
      keyWords: [
        { word: "Oxymoron", def: "A figure of speech combining contradictory terms for effect" },
        { word: "Military metaphor", def: "Using language of warfare to describe non-military situations" },
        { word: "Irregular forces", def: "Fighters operating outside formal military structures" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "The Irregulars themselves **stagnate** — they live on the streets, excluded from education, social mobility, or institutional protection. Their usefulness to Holmes does not change their social position: they remain homeless, invisible, and expendable. Holmes pays them but does not rescue them. The social system that produces street children remains unchanged by their participation in detection.",
      keyWords: [
        { word: "Social mobility", def: "The ability to move between social classes through effort or opportunity" },
        { word: "Expendable", def: "Considered unimportant enough to be sacrificed or used up" },
      ],
    },
    technique2: {
      title: "IRONIC NAMING — INSTITUTIONALISING THE MARGINALISED",
      analysis:
        "Giving the street children a **formal name** ('The Baker Street Irregulars') is ironic: naming them institutionalises (brings into a system) those who exist precisely because institutions have failed them. The name parodies official organisations — police forces, army regiments — by applying their language to the most unofficial group imaginable: homeless children. This **parody** (humorous imitation) simultaneously dignifies the children and critiques the society that abandoned them.",
      secondPoint:
        "Holmes's relationship with the Irregulars mirrors his relationship with the police: he uses both for information but belongs to neither world. Holmes exists in the **liminal** (in-between) space between official and unofficial, respectable and criminal, genius and addict. The Irregulars are his mirror: like Holmes himself, they are useful precisely because they do not belong.",
      keyWords: [
        { word: "Parody", def: "An imitation that exposes the absurdity of the original" },
        { word: "Liminal", def: "Occupying the threshold between two categories; belonging to neither" },
        { word: "Institutionalise", def: "To bring something into a formal system or structure" },
      ],
    },
    context: {
      points: [
        {
          label: "STREET CHILDREN IN VICTORIAN LONDON",
          text: "An estimated **30,000 homeless children** lived on London's streets in the 1880s — orphans, runaways, and abandoned youths surviving through begging, petty crime, and casual labour. The Irregulars reflect this real social crisis, which reformers like Dr Barnardo were struggling to address.",
        },
        {
          label: "SURVEILLANCE & THE CITY",
          text: "Holmes uses the Irregulars as a **surveillance** network — they can go everywhere adults cannot, observe without being noticed, and report back. This anticipates modern surveillance culture: information is power, and those who watch without being watched hold the greatest advantage.",
        },
      ],
      keyWords: [
        { word: "Surveillance", def: "The systematic observation of people or places for information" },
        { word: "Social crisis", def: "A widespread problem threatening the wellbeing of a community" },
        { word: "Casual labour", def: "Irregular, poorly paid work without job security" },
      ],
    },
    wow: {
      title: "BARE LIFE (Agamben)",
      analysis:
        "Giorgio Agamben's concept of **bare life** — life stripped of political rights and reduced to mere biological survival — describes the Irregulars precisely. They exist within London but are not citizens of it: they have no legal protections, no social identity, no political voice. They are '**homo sacer**' — beings who can be used, exploited, or discarded without legal consequence. Holmes's use of the Irregulars, however well-intentioned, replicates the logic of sovereign power: he treats them as instruments, paying them for services but never integrating them into his world or advocating for their rights. Agamben would argue that the Irregulars represent the structural violence of Victorian society: a system that produces disposable people while congratulating itself on its civilisation.",
      keyWords: [
        { word: "Bare life", def: "Agamben's concept of life stripped of political and social rights" },
        { word: "Homo sacer", def: "A person who can be used or discarded without legal consequence" },
        { word: "Structural violence", def: "Harm caused by the way a society is organised, not by individual acts" },
      ],
    },
  },
  {
    id: 4,
    textSlug: "sign-of-four",
    quote: "I never guess. It is a shocking habit — destructive to the logical faculty",
    who: "Sherlock Holmes",
    act: "Chapter 1",
    themes: ["Reason & Logic", "Science & Method", "Arrogance & Certainty"],
    keyQuote: {
      text: '"I never guess. It is a shocking habit — destructive to the logical faculty"',
      highlight: "never",
      note: "Holmes elevates methodical reasoning above all other cognitive approaches, condemning guesswork — and by extension, intuition, emotion, and ordinary human inference — as intellectual corruption.",
    },
    technique1: {
      title: "ABSOLUTE NEGATION / HYPERBOLIC CONDEMNATION",
      analysis:
        "The **absolute** 'I **never** guess' admits no exceptions — Holmes presents himself as a machine of logic that operates without uncertainty. This absolutism is characteristic of his personality: Holmes does not merely prefer logic; he ONLY uses logic. The **hyperbolic** (exaggerated) condemnation of guessing as 'shocking' and 'destructive' treats an ordinary cognitive habit as a moral failing, revealing the intensity of Holmes's intellectual purism.",
      secondPoint:
        "The adjective '**destructive**' is violent and physical — guessing does not merely impair the 'logical faculty' but DESTROYS it. Holmes treats the mind as an instrument that can be damaged by misuse, like a blade dulled by improper sharpening. This **mechanistic** (treating the mind as a machine) view reflects Victorian scientific materialism: the brain is an organ that functions optimally only when used correctly.",
      keyWords: [
        { word: "Absolutism", def: "The holding of principles without exception or compromise" },
        { word: "Hyperbolic", def: "Deliberately exaggerated for emphasis or effect" },
        { word: "Mechanistic", def: "Treating complex systems (including the mind) as machines" },
      ],
    },
    rad: {
      label: "STAGNATE",
      analysis:
        "Holmes's absolute refusal to guess actually represents intellectual **stagnation** — rigidity posing as principle. His certainty that logic alone suffices prevents him from developing other forms of knowledge: emotional intelligence, intuition, social understanding. Holmes's method is brilliant but incomplete, and his refusal to acknowledge its limits is itself a form of intellectual stagnation disguised as progress.",
      keyWords: [
        { word: "Rigidity", def: "Inability or unwillingness to change or adapt one's approach" },
        { word: "Emotional intelligence", def: "The ability to understand and manage emotions in self and others" },
      ],
    },
    technique2: {
      title: "SCIENTIFIC REGISTER — THE MIND AS LABORATORY",
      analysis:
        "The phrase '**logical faculty**' uses a **scientific register** (specialised vocabulary associated with a field of knowledge): 'faculty' is a term from Victorian psychology meaning a distinct mental capacity. Holmes speaks about his own mind as if describing laboratory equipment — objectively, technically, without sentiment. This **clinical detachment** from his own cognition is both impressive and unsettling.",
      secondPoint:
        "The dash — 'It is a shocking habit **—** destructive to the logical faculty' — separates the emotional reaction ('shocking') from the rational explanation ('destructive to the logical faculty'). Holmes moves from feeling (shock) to analysis (destruction of faculty) within a single sentence, performing in real time the dominance of reason over emotion that he advocates.",
      keyWords: [
        { word: "Scientific register", def: "Specialised vocabulary associated with scientific discourse" },
        { word: "Clinical detachment", def: "An emotionally distant, objective approach to analysis" },
        { word: "Faculty", def: "A distinct mental capacity or power (Victorian psychology term)" },
      ],
    },
    context: {
      points: [
        {
          label: "POSITIVISM",
          text: "Auguste Comte's **positivism** — the belief that only scientifically verifiable knowledge is valid — deeply influenced Victorian intellectual culture. Holmes embodies positivist confidence: he trusts only what can be observed, measured, and logically deduced, dismissing all other forms of knowledge as inferior.",
        },
        {
          label: "DOYLE THE DOCTOR",
          text: "Conan Doyle studied medicine at Edinburgh under **Dr Joseph Bell**, whose diagnostic method — observing patients' appearance to deduce their occupation, habits, and illness — inspired Holmes's deductive approach. Holmes's scientific method has real medical origins.",
        },
      ],
      keyWords: [
        { word: "Positivism", def: "The belief that only scientifically verifiable knowledge is valid" },
        { word: "Diagnostic method", def: "A systematic approach to identifying problems through observation" },
        { word: "Deductive approach", def: "Reasoning from general principles to specific conclusions" },
      ],
    },
    wow: {
      title: "INSTRUMENTAL REASON (Horkheimer & Adorno)",
      analysis:
        "Max Horkheimer and Theodor Adorno's concept of **instrumental reason** — reason reduced to a tool for achieving specific goals, divorced from ethical or emotional considerations — describes Holmes's intellectual project. Holmes uses reason as a pure instrument: it serves the goal of solving crimes but has no connection to broader human values, relationships, or moral reflection. Horkheimer and Adorno warn that instrumental reason, pushed to its extreme, becomes **domination**: reason controls and classifies the world rather than understanding it. Holmes's refusal to guess — his insistence on total rational control — illustrates this danger: his method masters the world but impoverishes his experience of it. The detective who 'never guesses' also never wonders, never doubts, never experiences the productive uncertainty that leads to genuine insight. His reason is powerful but **reductive** — it sees only what can be logically processed and dismisses everything else as noise.",
      keyWords: [
        { word: "Instrumental reason", def: "Reason used as a tool for goals, divorced from ethical context" },
        { word: "Domination", def: "The use of reason to control rather than understand the world" },
        { word: "Reductive", def: "Oversimplifying complex phenomena by focusing only on measurable aspects" },
      ],
    },
  },
  {
    id: 5,
    textSlug: "sign-of-four",
    quote: "Miss Morstan has done me the honour to accept me as a husband in prospective",
    who: "Dr Watson",
    act: "Chapter 12",
    themes: ["Love & Romance", "Gender & Marriage", "The Rational vs The Emotional"],
    keyQuote: {
      text: '"Miss Morstan has done me the honour to accept me as a husband in prospective"',
      highlight: "honour",
      note: "Watson's formal, awkward announcement of his engagement contrasts sharply with Holmes's cold indifference — revealing the divide between emotion and reason at the heart of the novel.",
    },
    technique1: {
      title: "FORMAL REGISTER / PASSIVE CONSTRUCTION",
      analysis:
        "Watson's announcement uses absurdly **formal register**: 'done me the honour,' 'accept me AS a husband,' 'in prospective.' The formality performs Victorian social convention — marriage must be discussed in dignified, elevated language, never as personal desire. The **passive construction** is revealing: Watson does not say 'I proposed to Mary' but that SHE 'accepted me' — even in announcing their engagement, Watson grammatically subordinates himself, following the social convention that the woman's acceptance is the significant act.",
      secondPoint:
        "The phrase '**in prospective**' (meaning 'expected in the future') adds temporal distance — the marriage is not immediate but anticipated. This circumlocution (using many words where few would do) delays the emotional reality: Watson cannot simply say 'we're getting married' but must dress the fact in layers of formal language that distance him from his own feelings.",
      keyWords: [
        { word: "Formal register", def: "Language that is official, ceremonial, and emotionally restrained" },
        { word: "Passive construction", def: "A sentence structure where the subject receives the action" },
        { word: "Circumlocution", def: "Using more words than necessary to avoid directness" },
      ],
    },
    rad: {
      label: "PROGRESS",
      analysis:
        "Watson **progresses** by choosing love and ordinary human connection over the extraordinary but emotionally isolated life Holmes offers. Watson's engagement represents a different kind of progress from Holmes's: not intellectual advancement but **emotional fulfilment**. Watson moves toward the domestic — marriage, partnership, ordinary happiness — while Holmes remains frozen in intellectual isolation.",
      keyWords: [
        { word: "Emotional fulfilment", def: "Satisfaction gained through meaningful human relationships" },
        { word: "Domestic", def: "Relating to home, family, and ordinary daily life" },
      ],
    },
    technique2: {
      title: "FOIL — WATSON AS EMOTIONAL COUNTERPART",
      analysis:
        "Watson functions as Holmes's **foil** — a character whose qualities contrast and illuminate the protagonist. Where Holmes is cold, Watson is warm; where Holmes values logic, Watson values love; where Holmes avoids attachment, Watson embraces it. Watson's engagement crystallises this contrast: the two men respond to the same stimulation (the case, Mary Morstan's presence) with opposite conclusions — Holmes sees data, Watson sees a woman he loves.",
      secondPoint:
        "Holmes's response to Watson's announcement —  his famous coldness — reveals the cost of pure rationality: Holmes cannot share Watson's joy because his emotional faculties have **atrophied** (wasted away through disuse). Watson's awkward formality, though socially conventional, contains genuine feeling; Holmes's brilliant analysis contains none. The passage asks: which man is actually impoverished?",
      keyWords: [
        { word: "Foil", def: "A character who contrasts with the protagonist to highlight certain qualities" },
        { word: "Atrophied", def: "Wasted away through lack of use or neglect" },
        { word: "Crystallise", def: "To make something clear and definite by bringing it into focus" },
      ],
    },
    context: {
      points: [
        {
          label: "VICTORIAN MARRIAGE PROPOSALS",
          text: "Victorian marriage conventions required elaborate **formality**: the man sought the father's permission, used formal language, and the woman 'accepted' — never 'agreed' or 'said yes.' Watson's stilted language reflects real Victorian practice, where genuine emotion was systematically disguised by social convention.",
        },
        {
          label: "HOMOSOCIAL BONDS",
          text: "Eve Kosofsky Sedgwick's theory of **homosociality** — intense same-sex bonds structured around but distinct from romance — illuminates the Holmes-Watson relationship. Watson's engagement threatens to break the homosocial bond that structures their partnership, explaining Holmes's cold response.",
        },
      ],
      keyWords: [
        { word: "Homosociality", def: "Intense same-sex bonds that structure social and professional life" },
        { word: "Formality", def: "Strict adherence to social conventions in language and behaviour" },
        { word: "Stilted", def: "Unnaturally formal, stiff, and constrained in expression" },
      ],
    },
    wow: {
      title: "LOOKING-GLASS SELF (Cooley)",
      analysis:
        "Charles Horton Cooley's theory of the **looking-glass self** — our self-concept is formed by how we imagine others perceive us — illuminates why Watson uses such formal language. Watson constructs his announcement not around how he feels but around how he imagines Holmes will perceive him. His formality is a performance for his audience: he anticipates Holmes's rational, clinical response and adjusts his language accordingly, burying his genuine emotion beneath social convention. Cooley would argue that Watson cannot simply express his joy because his self-concept in Holmes's presence is shaped by Holmes's values — logic, detachment, precision. In Holmes's 'looking glass,' emotional expression appears weak, and so Watson performs the self he imagines Holmes expects: formal, controlled, almost apologetic. The passage thus reveals how **internalised social expectations** distort authentic self-expression: Watson cannot be himself because he is too busy being who he thinks Holmes wants him to be.",
      keyWords: [
        { word: "Looking-glass self", def: "Cooley's theory that self-concept is shaped by how others perceive us" },
        { word: "Performance", def: "The presentation of self shaped for a specific audience" },
        { word: "Internalised expectations", def: "Social norms absorbed into one's own self-concept and behaviour" },
      ],
    },
  },
  {
    id: 6,
    textSlug: "sign-of-four",
    quote: "It is my curse to see everything in terms of a problem",
    who: "Sherlock Holmes",
    act: "Chapter 6",
    themes: ["Reason & Obsession", "The Divided Self", "Isolation", "The Cost of Genius"],
    keyQuote: {
      text: '"It is my curse to see everything in terms of a problem"',
      highlight: "curse",
      note: "Holmes admits that his analytical mind is a 'curse' — acknowledging for a rare, unguarded moment that his intellectual gift isolates him from ordinary human experience and connection.",
    },
    technique1: {
      title: "SELF-AWARENESS / TRAGIC REGISTER",
      analysis:
        "The word '**curse**' invokes the **tragic register** — the language of fate, destiny, and inescapable suffering. A curse is not chosen but imposed; one cannot remove it through effort or will. By calling his analytical nature a 'curse,' Holmes frames his genius not as an achievement but a **condition** — something that happens TO him rather than something he does. This is a moment of rare vulnerability beneath the usual veneer of rational control.",
      secondPoint:
        "The phrase '**everything in terms of a problem**' reveals the totalising nature of Holmes's perspective: he cannot selectively apply his analytical mind. Beauty, love, friendship — all are reduced to 'problems' to be solved rather than experiences to be lived. The preposition '**in terms of**' suggests translation: Holmes does not perceive the world directly but converts it into a different language (logical analysis), losing something essential in the translation.",
      keyWords: [
        { word: "Tragic register", def: "Language associated with fate, inescapable suffering, and inevitable doom" },
        { word: "Totalising", def: "All-encompassing; affecting every aspect of experience without exception" },
        { word: "Vulnerability", def: "A moment of emotional openness that reveals hidden weakness" },
      ],
    },
    rad: {
      label: "REGRESS",
      analysis:
        "Holmes **regresses** by recognising his limitations without being able to change them. This self-awareness without capacity for change is the essence of tragic consciousness: Holmes sees his prison clearly but cannot escape it. His intellectual progression — ever-sharper analysis — simultaneously produces emotional regression — ever-deeper isolation.",
      keyWords: [
        { word: "Tragic consciousness", def: "The painful awareness of unavoidable limitations or suffering" },
        { word: "Isolation", def: "Separation from human connection, whether chosen or imposed" },
      ],
    },
    technique2: {
      title: "PRONOUN SHIFT — 'MY' CURSE",
      analysis:
        "The possessive '**my** curse' is crucial: Holmes does not say 'a curse' or 'the curse' but '**my** curse' — claiming it as personal property. This personalisation makes the curse intimate and inescapable: it belongs to Holmes specifically, not to detectives in general. The pronoun '**my**' also implies long familiarity — Holmes has lived with this curse, has accommodated it, has made it part of his identity. The curse is not an affliction he hopes to cure but a companion he has learned to endure.",
      secondPoint:
        "The impersonal construction — '**It is** my curse' — begins the sentence with 'It' rather than 'I,' creating emotional distance. Even in his most vulnerable confession, Holmes cannot say 'I am cursed' (which would admit personal suffering directly) but only 'It is my curse' (which presents the suffering as an external fact). The grammar performs the emotional avoidance it describes.",
      keyWords: [
        { word: "Personalisation", def: "Making something specific and individual rather than general" },
        { word: "Emotional avoidance", def: "The systematic deflection of genuine feeling through indirect expression" },
        { word: "Impersonal construction", def: "A grammatical structure that avoids naming the person affected" },
      ],
    },
    context: {
      points: [
        {
          label: "THE ROMANTIC GENIUS",
          text: "The **Romantic genius** tradition — from Byron to Shelley to Poe — presented exceptional minds as inherently tormented: the price of seeing more clearly than others was suffering more deeply. Holmes inherits this tradition: his genius is inseparable from his alienation.",
        },
        {
          label: "NEURODIVERSITY",
          text: "Modern readers often identify in Holmes characteristics consistent with **autism spectrum** traits: intense focus on specific interests, difficulty with social conventions, preference for logic over emotion. The 'curse' he describes may be read as an early, pre-diagnostic description of a **neurodiverse** mind navigating a neurotypical world.",
        },
      ],
      keyWords: [
        { word: "Romantic genius", def: "The tradition linking exceptional ability with inevitable suffering" },
        { word: "Neurodiverse", def: "Having cognitive functioning that differs from the typical norm" },
        { word: "Alienation", def: "Estrangement from others and from ordinary human experience" },
      ],
    },
    wow: {
      title: "HEIDEGGER'S ENFRAMING (Gestell)",
      analysis:
        "Martin Heidegger's concept of **Enframing** (*Gestell*) — the modern tendency to see everything as a resource to be exploited or a problem to be solved — perfectly captures Holmes's 'curse.' Heidegger argues that modern technology and scientific thinking **enframe** the world: we cannot see a river without thinking of hydroelectric power, or a forest without thinking of lumber. Holmes enframes everything as a 'problem': people become clues, emotions become data, relationships become cases. Heidegger warns that enframing is the 'supreme danger' (*höchste Gefahr*) because it prevents us from experiencing the world's **mystery** — its irreducibility to categories and solutions. Holmes's confession — 'it is my curse' — is a Heideggerian insight: he recognises that his way of seeing, though powerful, has closed off other ways of being. He sees the world clearly but cannot wonder at it. This is the price of total rationality: the world becomes legible but ceases to be meaningful.",
      keyWords: [
        { word: "Enframing", def: "Heidegger's concept of seeing everything as a problem to be solved or resource to exploit" },
        { word: "Irreducibility", def: "The quality of being too complex to reduce to simple categories" },
        { word: "Mystery", def: "That which exceeds rational explanation and demands wonder rather than analysis" },
      ],
    },
  },
];
