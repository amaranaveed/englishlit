// ─── Trait-Based Mind Map Data — An Inspector Calls ───

export interface MindMapQuotePoint {
  quote: string;
  who: string; // who says it or who is it about
  act: string;
  points: string[]; // 2-3 bullet points of analysis
}

export interface MindMapTrait {
  trait: string; // e.g. "ignorant", "uncaring", "avaricious"
  colour: string; // tailwind colour key: "teal", "purple", "amber", "red"
  quotes: MindMapQuotePoint[];
}

export interface MindMapDramaticMoment {
  type: "entrance" | "exit" | "absence"; // kind of stagecraft
  moment: string; // e.g. "Inspector's arrival"
  act: string;
  stageDirection?: string; // direct quote from stage directions
  points: string[]; // 2-3 bullets of analysis
}

export interface CharacterMindMap {
  name: string;
  textSlug: string;
  traits: MindMapTrait[];
  dramaticMoments: MindMapDramaticMoment[];
}

export const INSPECTOR_CALLS_MINDMAPS: CharacterMindMap[] = [
  // ══════════════════════════════════════════════════════════
  //  1. INSPECTOR GOOLE
  // ══════════════════════════════════════════════════════════
  {
    name: "Inspector Goole",
    textSlug: "inspector-calls",
    traits: [
      // ── omniscient ──
      {
        trait: "omniscient",
        colour: "teal",
        quotes: [
          {
            quote: "I already knew. All I did was to find Mr Birling in amongst a lot of others.",
            who: "Inspector Goole",
            act: "Act 1",
            points: [
              "**Past tense** 'already knew' implies **pre-existing knowledge** that no ordinary police officer would possess — blurring the boundary between detective and supernatural force.",
              "Priestley positions the Inspector as an **all-seeing moral conscience**, not a realistic character — he functions as a **dramatic device** who already holds the truth.",
              "Links to **AO3 context**: the 1945 audience, knowing the outcome of two world wars, mirrors this omniscience — they too 'already know' what the Birlings refuse to see.",
            ],
          },
          {
            quote: "It's the way I like to go to work. One person and one line of inquiry at a time.",
            who: "Inspector Goole",
            act: "Act 1",
            points: [
              "**Imperative tone** reveals total control over the interrogation — he dictates pace, structure, and revelation to every character on stage.",
              "His 'method' is actually **Priestley's dramatic structure**: each character is exposed sequentially, building the **chain of responsibility** link by link.",
              "'Otherwise there's a muddle' — dismisses Birling's interruptions with **deliberate simplicity**, asserting moral clarity over social rank.",
            ],
          },
          {
            quote: "You see, we have to share something. If there's nothing else, we'll have to share our guilt.",
            who: "Inspector Goole",
            act: "Act 3",
            points: [
              "The **first-person plural** 'we' implicates not just the Birlings but the **audience** — the Inspector speaks beyond the fourth wall.",
              "**Conditional structure** ('if there's nothing else') strips away every excuse until only **guilt** remains — a relentless logical narrowing.",
            ],
          },
        ],
      },
      // ── authoritative ──
      {
        trait: "authoritative",
        colour: "purple",
        quotes: [
          {
            quote:
              "He creates at once an impression of massiveness, solidity and purposefulness.",
            who: "Stage direction — Inspector's entrance",
            act: "Act 1",
            points: [
              "**Tricolon** of abstract nouns ('massiveness, solidity and purposefulness') establishes the Inspector as an **immovable force** before he speaks a single word.",
              "Contrasts with Birling's 'rather provincial' stage direction — Priestley physically **diminishes** the capitalist and **elevates** the moral examiner.",
              "The word **'purposefulness'** signals that his visit is not routine but **deliberate** — every question serves a thesis.",
            ],
          },
          {
            quote: "Don't stammer and yammer at me again, man. I'm losing all patience with you people.",
            who: "Inspector Goole to Mr Birling",
            act: "Act 3",
            points: [
              "The **imperative** 'don't' combined with the dismissive **'man'** inverts the class hierarchy — an inspector commands a wealthy industrialist.",
              "'You people' broadens the accusation from individual to **class** — the Birlings represent an entire social stratum Priestley is indicting.",
              "His **impatience** signals that the time for polite middle-class evasion has ended — reflects Priestley's own **urgency** for post-war social reform.",
            ],
          },
          {
            quote: "A girl died tonight. A pretty, lively sort of girl, who never did anybody any harm. And she died in misery and agony — hating life.",
            who: "Inspector Goole",
            act: "Act 3",
            points: [
              "**Short declarative** 'A girl died tonight' is devastatingly simple — refuses the Birlings' tendency to complicate and deflect.",
              "The **dash** before 'hating life' forces a pause, compelling both the characters and the audience to **absorb** the full horror of Eva's death.",
              "Priestley uses the Inspector's authority to **re-centre Eva** as a human being whenever the Birlings attempt to reduce her to an abstraction.",
            ],
          },
          {
            quote: "I've had enough of all this.",
            who: "Inspector Goole",
            act: "Act 2",
            points: [
              "**Blunt monosyllabic diction** cuts through Mrs Birling's elaborate social performance — moral authority expressed through **simplicity**.",
              "Signals the Inspector's refusal to operate within upper-class codes of **politeness** and **deference** — he answers to a higher moral standard.",
            ],
          },
        ],
      },
      // ── moralistic ──
      {
        trait: "moralistic",
        colour: "amber",
        quotes: [
          {
            quote:
              "We don't live alone. We are members of one body. We are responsible for each other.",
            who: "Inspector Goole",
            act: "Act 3",
            points: [
              "**Tricolon** builds from negative ('don't live alone') through collective identity ('one body') to **moral imperative** ('responsible for each other') — a structured argument disguised as a speech.",
              "'One body' echoes **1 Corinthians 12:12–27** — Priestley borrows religious rhetoric to give his **socialist message** transcendent authority.",
              "This is the **thesis statement** of the entire play, delivered as the Inspector's final judgement — everything preceding it has been evidence for this conclusion.",
            ],
          },
          {
            quote:
              "And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish.",
            who: "Inspector Goole",
            act: "Act 3",
            points: [
              "**Prophetic triad** 'fire and blood and anguish' carries apocalyptic, almost **biblical** weight — the Inspector speaks as a prophet, not a policeman.",
              "**Dramatic irony** is devastating: the 1945 audience has lived through both world wars and knows this prophecy was **literally fulfilled**.",
              "The **conditional** ('if men will not learn') offers a choice — Priestley insists social catastrophe is **avoidable** if society embraces collective responsibility.",
            ],
          },
          {
            quote: "Public men, Mr Birling, have responsibilities as well as privileges.",
            who: "Inspector Goole",
            act: "Act 1",
            points: [
              "**Antithesis** between 'responsibilities' and 'privileges' directly challenges Birling's belief that wealth entitles him to **exemption** from accountability.",
              "Priestley invokes the concept of **noblesse oblige** only to surpass it — the Inspector demands responsibility from **everyone**, not just the aristocracy.",
              "The formal address **'Mr Birling'** is deliberately ironic — the Inspector uses politeness as a weapon, maintaining decorum while delivering moral condemnation.",
            ],
          },
        ],
      },
      // ── enigmatic ──
      {
        trait: "enigmatic",
        colour: "red",
        quotes: [
          {
            quote:
              "Was it a hoax?... There was no Inspector Goole on the police force.",
            who: "Gerald Croft (reporting)",
            act: "Act 3",
            points: [
              "Gerald's discovery that no such inspector exists opens the play's central **ambiguity** — ghost, conscience, time-traveller, or divine agent?",
              "Priestley deliberately **refuses to resolve** the Inspector's identity because the MESSAGE matters more than the messenger — if he were simply a policeman, the family could dismiss the lesson.",
              "The name **'Goole'** puns on 'ghoul' — a spectral association that keeps the supernatural reading permanently available.",
            ],
          },
          {
            quote:
              "Lighting changes from pink and intimate to brighter and harder.",
            who: "Stage direction — Inspector's entrance",
            act: "Act 1",
            points: [
              "The lighting shift is a **metaphor** for the transition from complacent self-delusion ('pink') to uncomfortable moral scrutiny ('harder').",
              "Priestley uses **stagecraft** rather than dialogue to signal the Inspector's transformative effect — his very **presence** changes the world of the play.",
              "The word **'harder'** implies both brightness and difficulty — the truth the Inspector brings is not comfortable but it is necessary.",
            ],
          },
          {
            quote:
              "Massiveness, solidity and purposefulness... need not be a big man but creates this impression.",
            who: "Stage direction",
            act: "Act 1",
            points: [
              "'Need not be a big man' — his authority is **not physical** but existential. Priestley separates the Inspector's power from anything materially explicable.",
              "The word **'impression'** suggests something projected or performed — the Inspector may be constructing himself as much as he is investigating the Birlings.",
            ],
          },
          {
            quote: "Goole. G-O-O-L-E.",
            who: "Inspector Goole",
            act: "Act 1",
            points: [
              "The **deliberate spelling out** of his name draws attention to its strangeness — Priestley plants the clue in plain sight from the Inspector's first moments.",
              "Phonetically identical to **'ghoul'** — an entity associated with death, suggesting the Inspector may be an emissary from beyond the grave or from Eva herself.",
              "This small detail rewards **close reading** and re-reading — on a second viewing the audience recognises the clue they missed, deepening the play's mystery.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "The Inspector's arrival",
        act: "Act 1",
        stageDirection: "The Inspector need not be a big man but he creates at once an impression of massiveness, solidity and purposefulness.",
        points: [
          "His entrance **interrupts** Birling's capitalist speech mid-flow — Priestley physically cuts off the ideology the play will dismantle.",
          "The **lighting change** from 'pink and intimate' to 'brighter and harder' transforms the stage itself — his presence forces uncomfortable moral scrutiny onto a complacent household.",
          "He enters through the **front door** of Birling's home — the private space of the capitalist family is **invaded** by public moral accountability, symbolising Priestley's argument that private actions have social consequences.",
        ],
      },
      {
        type: "exit",
        moment: "The Inspector's departure",
        act: "Act 3",
        stageDirection: "He walks straight out... They stare guiltily... not daring to look at each other.",
        points: [
          "He leaves **immediately** after his prophetic speech — no pause, no farewell, no opportunity for rebuttal. The abruptness gives his words the finality of a **verdict**.",
          "The stage direction 'not daring to look at each other' shows his exit creates a moral **vacuum** — without his presence, the family is left alone with their guilt and must choose whether to accept or deny it.",
          "His departure triggers the play's **structural turning point**: the older Birlings immediately begin dismantling the lesson, while Sheila and Eric fight to preserve it. The Inspector's exit tests whether his message can survive without its messenger.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  2. MR BIRLING
  // ══════════════════════════════════════════════════════════
  {
    name: "Mr Birling",
    textSlug: "inspector-calls",
    traits: [
      // ── ignorant ──
      {
        trait: "ignorant",
        colour: "teal",
        quotes: [
          {
            quote:
              "the Titanic — she sails next week... unsinkable, absolutely unsinkable",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "**Superlative repetition** ('absolutely unsinkable') reveals dangerous overconfidence dressed as expertise — Birling speaks with total certainty about something he is totally wrong about.",
              "**Dramatic irony** is Priestley's most powerful weapon here: the 1945 audience knows the Titanic sank on its maiden voyage, instantly **destroying Birling's credibility** before the Inspector even arrives.",
              "Priestley ensures the audience **cannot trust** Birling's worldview — every subsequent claim about society, war, and responsibility is pre-emptively discredited.",
            ],
          },
          {
            quote:
              "the Germans don't want war. Nobody wants war, except some half-civilized folks in the Balkans.",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "**Xenophobic generalisation** ('half-civilized folks') exposes Birling's prejudice alongside his ignorance — he is wrong morally AND factually.",
              "The 1945 audience has survived **two world wars** — Birling's confident prediction becomes Priestley's most sustained piece of **dramatic irony**.",
              "Priestley links **political ignorance to moral failure**: a man who cannot see the world clearly cannot take responsibility for others.",
            ],
          },
          {
            quote:
              "There isn't a chance of war. The world's developing so fast that it'll make war impossible.",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The **declarative certainty** ('there isn't a chance') is absolute — leaving no room for doubt, which makes the ironic reversal total.",
              "Birling conflates **technological progress** with moral progress — a fundamental error Priestley exposes throughout the play.",
            ],
          },
        ],
      },
      // ── uncaring ──
      {
        trait: "uncaring",
        colour: "purple",
        quotes: [
          {
            quote: "I can't accept any responsibility.",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "**Modal verb** 'can't' frames his refusal as inability rather than choice — Birling presents moral bankruptcy as though it were a rational impossibility.",
              "The determiner **'any'** is absolute — not partial denial but **total** rejection of accountability, the precise opposite of the Inspector's thesis.",
              "Structurally, this refusal contrasts with Sheila's immediate acceptance — Priestley positions the **older generation** as irredeemably resistant to change.",
            ],
          },
          {
            quote:
              "If you don't come down sharply on some of these people, they'd soon be asking for the earth.",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "**Conditional threat** ('if you don't come down sharply') reveals that Birling sees industrial relations as a **war** in which workers must be suppressed.",
              "'These people' creates a dehumanising **othering** — Eva and her fellow workers are not individuals but a threatening mass to be controlled.",
              "The **hyperbole** 'asking for the earth' dismisses a modest pay rise as greed — Priestley exposes how the powerful reframe reasonable demands as dangerous excess.",
            ],
          },
          {
            quote: "Still, I can't accept any responsibility. If we were all responsible for everything that happened to everybody we'd had anything to do with, it would be very awkward, wouldn't it?",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The **rhetorical question** seeks agreement from Gerald and the audience — Birling assumes everyone shares his selfish worldview.",
              "The word **'awkward'** is revealingly trivial — he reduces collective moral responsibility to a matter of minor social inconvenience.",
              "Priestley constructs this line so the Inspector's message directly **contradicts** it — the entire play is the answer to Birling's dismissive question.",
            ],
          },
          {
            quote: "Rubbish! If you don't come down sharply on some of these people, they'd soon be asking for the earth.",
            who: "Mr Birling (to Eric)",
            act: "Act 1",
            points: [
              "The **exclamatory** 'Rubbish!' silences Eric's tentative sympathy for the workers — Birling polices moral feeling within his own family.",
              "Priestley shows that Birling's uncaring nature is not passive but **actively enforced** — he demands that others share his indifference.",
            ],
          },
        ],
      },
      // ── avaricious ──
      {
        trait: "avaricious",
        colour: "amber",
        quotes: [
          {
            quote:
              "a man has to mind his own business and look after himself and his own",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "**Declarative** presents selfishness as universal law — 'a man has to' implies there is no alternative, naturalising greed as necessity.",
              "The repetition of **'his own'** draws a tight circle of responsibility around the individual and family, deliberately excluding the wider community.",
              "This is the **capitalist thesis** the entire play exists to destroy — Priestley gives Birling the stage to condemn himself in his own words.",
            ],
          },
          {
            quote:
              "lower costs and higher prices",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The **antithetical pairing** reveals the core logic of exploitation — 'lower costs' means lower wages; 'higher prices' means greater profit at the consumer's expense.",
              "Priestley distils the capitalist equation into its simplest form so the audience **cannot miss** the injustice embedded in Birling's business model.",
            ],
          },
          {
            quote:
              "It's my duty to keep labour costs down.",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The word **'duty'** is a calculated rhetorical move — Birling moralises greed, reframing exploitation as an **obligation** rather than a choice.",
              "Priestley exposes how **capitalist language** disguises self-interest as virtue — 'labour costs' dehumanises workers into line items on a balance sheet.",
              "Links to **AO3 context**: the 1945 welfare-state audience would recognise this as precisely the attitude the Beveridge Report sought to dismantle.",
            ],
          },
        ],
      },
      // ── pretentious ──
      {
        trait: "pretentious",
        colour: "red",
        quotes: [
          {
            quote:
              "I was an alderman for years — and Lord Mayor two years ago — and I'm still on the Bench.",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "**List structure** piles up civic titles in an attempt to intimidate the Inspector — each item is a social **credential** wielded as a weapon.",
              "The **dashes** create a breathless, boastful rhythm — Birling cannot stop himself from name-dropping, revealing deep **insecurity** beneath the bluster.",
              "The Inspector is entirely unmoved — Priestley demonstrates that **moral authority** cannot be bought with social rank.",
            ],
          },
          {
            quote:
              "I speak as a hard-headed practical man of business",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The **self-characterisation** 'hard-headed practical man' is intended as a compliment but reads as **wilful emotional illiteracy** — he is proud of his inability to feel.",
              "Priestley positions this self-description immediately before Birling's catastrophically wrong predictions — the 'practical man' is the most impractical person in the room.",
            ],
          },
          {
            quote:
              "there's a very good chance of a knighthood — so long as we behave ourselves",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The **conditional** 'so long as we behave ourselves' reveals that Birling's morality is entirely governed by **reputation** rather than principle.",
              "'Behave ourselves' frames ethics as **performance** for an audience of social superiors — goodness is not intrinsic but instrumental.",
              "The **dramatic irony** is layered: the audience knows the evening will expose the family's behaviour as anything but deserving of honour.",
            ],
          },
          {
            quote: "I'm a public man—",
            who: "Mr Birling",
            act: "Act 1",
            points: [
              "The **em-dash** marks the Inspector's interruption — Birling's attempt to assert status is literally **cut short** by moral authority.",
              "Priestley repeatedly has Birling invoke his public position, only for it to carry **no weight** — the play systematically strips social rank of its power.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Birling dominates the stage before the Inspector arrives",
        act: "Act 1",
        stageDirection: "Arthur Birling is a heavy-looking, rather portentous man in his middle fifties but rather provincial in his speech.",
        points: [
          "Birling **opens the play** holding court at his own dinner table — Priestley gives him the stage precisely to expose him. His long speeches about the Titanic, war, and business function as a **dramatic trap**: the more he says, the more wrong he is.",
          "The adjective **'portentous'** (self-importantly pompous) in the stage direction signals that Birling's authority is performative, not genuine — Priestley undermines him before he speaks a word.",
          "His presence at the start establishes the **comfortable capitalist world** the Inspector will shatter — Birling's entrance creates the normality that the play exists to destroy.",
        ],
      },
      {
        type: "exit",
        moment: "Birling rushes out to find Eric",
        act: "Act 2 / Act 3 transition",
        stageDirection: "Birling turns to go... the curtain falls quickly.",
        points: [
          "Birling leaves the stage at the act break to search for Eric — his **exit** is driven not by concern for Eva but by fear of **scandal**. Even in crisis, his priority is reputation.",
          "The curtain falling on his departure creates a **cliffhanger** that shifts power from Birling to the Inspector — when the next act opens, Birling returns to a room he no longer controls.",
          "Priestley uses the exit to show Birling's **impotence**: a man who began the play commanding the household now scrambles after consequences he cannot contain. Links to the theme of **class power collapsing** under moral scrutiny.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  3. SHEILA BIRLING
  // ══════════════════════════════════════════════════════════
  {
    name: "Sheila Birling",
    textSlug: "inspector-calls",
    traits: [
      // ── remorseful ──
      {
        trait: "remorseful",
        colour: "teal",
        quotes: [
          {
            quote: "I'll never, never do it again to anybody.",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "**Repetition** of 'never' intensifies the vow beyond social courtesy into genuine **emotional commitment** — this is not a polite apology but a life-altering promise.",
              "The phrase is **unconditional and forward-looking**: Sheila does not make excuses or qualify her guilt, making her the **model response** Priestley wants the audience to emulate.",
              "Contrasts structurally with her father's 'I can't accept any responsibility' — Priestley uses the **generational divide** to show who is capable of moral growth.",
            ],
          },
          {
            quote: "If I could help her now, I would—",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "The **conditional** 'if I could' acknowledges that remorse alone cannot undo harm — Priestley shows that genuine guilt includes recognising the **irreversibility** of consequences.",
              "The **em-dash** suggests she is overwhelmed by emotion mid-sentence — Sheila's grief is too large for language, contrasting with her parents' composed denial.",
            ],
          },
          {
            quote: "It was my own fault... I was in a furious temper.",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "**Self-accusation** ('my own fault') is immediate and unqualified — she does not deflect blame onto Eva, the shop, or circumstances.",
              "Priestley rewards Sheila's honesty by giving her **moral clarity** later in the play — accepting guilt is the first step toward becoming the Inspector's surrogate.",
            ],
          },
        ],
      },
      // ── perceptive ──
      {
        trait: "perceptive",
        colour: "purple",
        quotes: [
          {
            quote:
              "He's giving us the rope — so that we'll hang ourselves.",
            who: "Sheila Birling",
            act: "Act 2",
            points: [
              "**Colloquial idiom** reveals sharp intelligence hidden beneath her earlier naivety — Sheila sees the Inspector's strategy before any other character.",
              "The metaphor of **self-destruction** implies the Birlings' guilt is self-evident — the Inspector merely creates conditions for them to expose themselves.",
              "Priestley uses Sheila as a **bridge** between the Inspector and the audience: she articulates what the audience is already thinking.",
            ],
          },
          {
            quote: "You mustn't try to build up a kind of wall between us and that girl.",
            who: "Sheila Birling (to Mrs Birling)",
            act: "Act 2",
            points: [
              "The metaphor of a **'wall'** identifies her parents' strategy as deliberate **separation** — they construct barriers between their class and Eva's humanity.",
              "The **imperative** 'you mustn't' marks the moment Sheila assumes moral authority over her own mother — a radical **inversion** of the family hierarchy.",
              "Priestley signals that Sheila's perception has evolved into **active resistance** — she is no longer just understanding the Inspector's lesson but enforcing it.",
            ],
          },
          {
            quote: "No, he's giving us the rope — so that we'll hang ourselves.",
            who: "Sheila Birling",
            act: "Act 2",
            points: [
              "The opening **'No'** is a direct contradiction of Gerald's attempt to manage the situation — Sheila refuses to accept comfortable interpretations.",
              "Her ability to read the Inspector's method demonstrates **intellectual equality** with him — she is the only character who fully comprehends what is happening in real time.",
            ],
          },
          {
            quote: "Why — you fool — he knows. Of course he knows.",
            who: "Sheila Birling (to Gerald)",
            act: "Act 1",
            points: [
              "The **dashes** create a staccato, exasperated rhythm — Sheila is frustrated by Gerald's failure to see what she considers obvious.",
              "**'Of course'** implies the Inspector's omniscience is self-evident — Sheila has already accepted a truth the others will resist for two more acts.",
            ],
          },
        ],
      },
      // ── courageous ──
      {
        trait: "courageous",
        colour: "amber",
        quotes: [
          {
            quote:
              "You're pretending everything's just as it was before.",
            who: "Sheila Birling",
            act: "Act 3",
            points: [
              "The **accusatory 'you're'** directly challenges both parents — Sheila refuses the comfortable fiction that the evening can be erased.",
              "'Pretending' exposes their strategy as **self-conscious performance** rather than genuine belief — Sheila names the denial for what it is.",
              "Priestley positions this line as the play's moral verdict: the Inspector may have left, but his lesson **persists** in Sheila's refusal to go back.",
            ],
          },
          {
            quote:
              "I tell you — whoever that Inspector was, it was anything but a joke.",
            who: "Sheila Birling",
            act: "Act 3",
            points: [
              "The **subordinate clause** 'whoever that Inspector was' concedes the factual uncertainty while insisting on the moral certainty — the identity doesn't matter; the truth does.",
              "Priestley demonstrates that genuine moral awakening **survives** the removal of its catalyst — Sheila does not need the Inspector to be real to remain changed.",
            ],
          },
          {
            quote: "These girls aren't cheap labour — they're people.",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "The **dash** creates a dramatic correction — Sheila rejects her father's economic framing and insists on **shared humanity**.",
              "**Simple diction** ('they're people') carries enormous moral weight precisely because of its plainness — Priestley shows that moral clarity requires no elaborate language.",
              "This line marks Sheila's transition from passive guilt to **active advocacy** — she begins to speak FOR the working class, adopting the Inspector's function.",
            ],
          },
        ],
      },
      // ── empathetic ──
      {
        trait: "empathetic",
        colour: "red",
        quotes: [
          {
            quote:
              "But these girls aren't cheap labour — they're people.",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "The conjunction **'but'** signals resistance to her father's worldview — Sheila interrupts the capitalist narrative with a **humanist** counter-argument.",
              "Priestley gives Sheila the language of **empathy** that her parents lack — she can see Eva as a person, not a 'cost' or a 'case'.",
            ],
          },
          {
            quote: "I know I'm to blame — and I'm desperately sorry.",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "The **intensifier** 'desperately' elevates her apology beyond social convention into genuine emotional pain — Sheila FEELS Eva's suffering.",
              "The **conjunction** 'and' links knowledge to emotion — for Sheila, understanding guilt and feeling sorrow are **inseparable**, unlike her parents who understand but refuse to feel.",
            ],
          },
          {
            quote: "So I'm really responsible?",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "The **interrogative** shows Sheila actively seeking the truth rather than avoiding it — she ASKS for responsibility while her parents deny it.",
              "The adverb **'really'** reveals both shock and a willingness to confront an uncomfortable reality — Sheila's empathy makes her **receptive** to guilt in a way her parents are not.",
              "Priestley structures this as a question because Sheila's journey begins with **honest inquiry** — the opposite of Birling's closed declaratives.",
            ],
          },
          {
            quote:
              "I felt rotten about it at the time and now I feel a lot worse.",
            who: "Sheila Birling",
            act: "Act 1",
            points: [
              "**Comparative** 'a lot worse' shows that Sheila's empathy **deepens** with knowledge — the more she learns, the more she feels, contrasting with her parents whose knowledge triggers only defensiveness.",
              "The colloquial **'rotten'** is unguarded and authentic — Sheila speaks without rhetorical polish because her emotion is genuine.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Sheila enters showing off her engagement ring",
        act: "Act 1",
        stageDirection: "Sheila: (excited) Oh — it's wonderful! Look — Mummy — isn't it a beauty?",
        points: [
          "Sheila's first appearance frames her as **sheltered and materialistic** — she is defined by her engagement ring, a symbol of the patriarchal transaction between Birling and Gerald's families.",
          "The exclamatory, breathless tone ('Oh — it's wonderful!') establishes the **naivety** that the Inspector will strip away — Priestley shows who she is BEFORE the moral awakening to maximise the contrast.",
          "Her entrance focuses on a **private celebration** that will be destroyed by public accountability — Priestley structures the play so that personal happiness is interrupted by collective responsibility.",
        ],
      },
      {
        type: "exit",
        moment: "Sheila runs offstage crying after seeing the photograph",
        act: "Act 1",
        stageDirection: "Sheila gives a half-stifled sob, and then runs out.",
        points: [
          "Her exit is **emotional and involuntary** — she cannot contain her guilt and physically removes herself, contrasting with her parents who stay and deflect. Her body betrays what her parents' composure conceals.",
          "The **'half-stifled sob'** is key: she tries to suppress her reaction (the Birling instinct) but fails — Priestley shows that genuine guilt cannot be controlled, foreshadowing the play's thesis that conscience will out.",
          "She is the **first character to leave the stage in distress**, establishing her as the most emotionally receptive Birling — the one most capable of moral transformation. Links to the **generational divide** theme.",
        ],
      },
      {
        type: "entrance",
        moment: "Sheila returns and stays for the rest of the play",
        act: "Act 1 / Act 2",
        points: [
          "Unlike Gerald (who leaves) and Eric (who flees), Sheila **comes back and stays** — her return signals courage and a willingness to face the full truth, however painful.",
          "When she re-enters, she has already accepted her guilt — she now functions as the Inspector's **ally**, warning her mother and Gerald that concealment is futile.",
          "Priestley uses her return to mark the **structural turning point** from passive witness to active moral agent — Sheila re-enters the room as a fundamentally different person from the one who left it.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  4. MRS BIRLING
  // ══════════════════════════════════════════════════════════
  {
    name: "Mrs Birling",
    textSlug: "inspector-calls",
    traits: [
      // ── cold ──
      {
        trait: "cold",
        colour: "teal",
        quotes: [
          {
            quote: "I did nothing I'm ashamed of.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "**Declarative negation** treats shame as a weakness to be avoided rather than a moral signal — Mrs Birling's emotional vocabulary has no room for guilt.",
              "The line functions as a **structural refrain**: she repeats versions of this throughout, and each repetition makes her seem colder as the audience learns more about Eva's suffering.",
              "Priestley presents this as moral **bankruptcy disguised as dignity** — Mrs Birling's composure is not strength but an absence of human feeling.",
            ],
          },
          {
            quote: "She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "The adjective **'absurd'** denies working-class people the right to moral feeling — Mrs Birling believes dignity is a **class privilege**.",
              "'Fine feelings and scruples' are qualities she would praise in her own class — the **hypocrisy** is that she recognises these virtues but denies them to Eva on the basis of social rank.",
              "Priestley exposes the mechanism of **dehumanisation**: if the poor cannot feel, they need not be treated with compassion.",
            ],
          },
          {
            quote: "As if a girl of that sort would ever refuse money!",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "The **exclamatory** registers genuine disbelief — Mrs Birling literally cannot conceive of a working-class woman having pride or principles.",
              "'That sort' reduces Eva to a **type** rather than an individual — language that categorises and dismisses simultaneously.",
            ],
          },
        ],
      },
      // ── prejudiced ──
      {
        trait: "prejudiced",
        colour: "purple",
        quotes: [
          {
            quote: "Girls of that class—",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "The **unfinished sentence** is arguably the most efficient exposure of prejudice in the play — the dash says everything Mrs Birling does not need to articulate.",
              "Prejudice operates as **reflex**, not conscious choice — the phrase is so automatic that she does not even register it as an opinion; it is simply how the world IS to her.",
              "The Inspector's **interruption** refuses to let the statement stand unchallenged — Priestley dramatises the importance of confronting casual bigotry.",
            ],
          },
          {
            quote: "She was giving herself ridiculous airs. She was claiming elaborate fine feelings.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "The **parallelism** ('she was giving... she was claiming') builds a prosecutorial case against Eva — Mrs Birling treats the working-class woman as the one on trial.",
              "The adjectives **'ridiculous'** and **'elaborate'** frame Eva's dignity as performance — Mrs Birling cannot accept that a poor woman's feelings could be genuine.",
              "Priestley reverses the courtroom dynamic: Mrs Birling thinks she is the judge, but the audience sees her as the **accused**.",
            ],
          },
          {
            quote: "I didn't like her manner. She'd impertinently made use of our name.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "**'Impertinently'** frames Eva's use of the Birling name as a class transgression — the real offence is that a working-class woman dared to claim connection to the upper class.",
              "Priestley shows that Mrs Birling's prejudice is so deep that the **name itself** becomes a property to be guarded — identity is a class possession.",
            ],
          },
          {
            quote: "Please don't contradict me like that.",
            who: "Mrs Birling (to the Inspector)",
            act: "Act 2",
            points: [
              "The **imperative** reveals that Mrs Birling is accustomed to being obeyed — she treats disagreement itself as a breach of social protocol.",
              "Priestley demonstrates that her **prejudice extends beyond class** to anyone who challenges her authority — even a figure of moral law.",
            ],
          },
        ],
      },
      // ── hypocritical ──
      {
        trait: "hypocritical",
        colour: "amber",
        quotes: [
          {
            quote:
              "Go and look for the father of the child. It's his responsibility.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "**Imperative** 'go and look' is devastatingly direct — she is demanding the punishment of her own son without knowing it, constructing the **dramatic irony trap** Priestley has built across an entire act.",
              "The word **'responsibility'** in Mrs Birling's mouth is deeply ironic — she who refuses ALL responsibility for Eva's death insists that 'the father' accept his.",
              "Priestley engineers this as the play's most **structurally sophisticated irony**: Mrs Birling's confidence in her own righteousness is the mechanism of her exposure.",
            ],
          },
          {
            quote: "he should be made an example of. If the girl's death is due to anybody, then it's due to him.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "**'Made an example of'** echoes punitive language — Mrs Birling demands harsh justice for the father while refusing even mild accountability for herself.",
              "The conditional **'if... then'** constructs a logical argument that will collapse upon her when Eric is revealed — her own rhetoric becomes her **trap**.",
            ],
          },
          {
            quote: "Secondly, I blame the young man who was the father of the child... he ought to be dealt with very severely—",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "The ordinal **'secondly'** reveals she has been building a formal case — Mrs Birling approaches Eva's death as a matter of procedure, not compassion.",
              "**'Very severely'** intensifies the ironic punishment she is unknowingly prescribing for her own son — Priestley ensures the audience feels the horror of her self-condemnation.",
              "The em-dash marks the moment Sheila or the Inspector interrupts — even the play's structure will not allow Mrs Birling's hypocrisy to stand unchecked.",
            ],
          },
        ],
      },
      // ── obstinate ──
      {
        trait: "obstinate",
        colour: "red",
        quotes: [
          {
            quote:
              "I was the only one of you who didn't give in to him.",
            who: "Mrs Birling",
            act: "Act 3",
            points: [
              "Mrs Birling reframes **stubbornness as virtue** — 'didn't give in' casts the Inspector as an aggressor and herself as a heroic resister.",
              "The boast is deeply ironic: her refusal to 'give in' means she is the character who learns **nothing** — Priestley positions this as a failure, not a triumph.",
              "Structurally, this line places Mrs Birling alongside Mr Birling as the **unreformable older generation** — Priestley's warning that some will never change.",
            ],
          },
          {
            quote: "I accept no blame for it at all.",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "The structure mirrors her husband's 'I can't accept any responsibility' — Priestley uses **parallel phrasing** across the older generation to show their united front of denial.",
              "'At all' is emphatic and **absolute** — there is no crack in her certainty through which remorse might enter.",
            ],
          },
          {
            quote: "You have no power to make me change my mind.",
            who: "Mrs Birling (to Inspector)",
            act: "Act 2",
            points: [
              "The word **'power'** reveals that Mrs Birling frames the entire exchange as a contest of **authority** rather than a moral question.",
              "Priestley shows that for the obstinate, morality is not about right and wrong but about **who has the right to compel** — Mrs Birling will only yield to a force greater than herself, and the Inspector is not one she recognises.",
              "Links to **AO3 context**: the entrenched resistance of the ruling class to social reform was precisely what the 1945 Labour landslide sought to overcome.",
            ],
          },
          {
            quote: "I don't suppose for a moment that we can understand why the girl committed suicide. Girls of that class—",
            who: "Mrs Birling",
            act: "Act 2",
            points: [
              "'I don't suppose' dismisses the possibility of understanding before even attempting it — her obstinacy is **pre-emptive** and total.",
              "The return to **'girls of that class'** shows that neither the Inspector's evidence nor Eva's death has shifted her position by a single degree — Priestley demonstrates the terrifying **immovability** of class prejudice.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Mrs Birling enters the investigation late",
        act: "Act 2",
        stageDirection: "Mrs Birling enters, briskly and self-confidently, quite out of key with the little scene that has just taken place.",
        points: [
          "Her entrance is deliberately **out of sync** — she arrives 'quite out of key' with the emotional tone, signalling that she exists in a different moral register from the characters who have already been exposed.",
          "The adverb **'briskly'** suggests she treats the Inspector's visit as an interruption to be dealt with efficiently — she enters the room expecting to dominate it, just as she dominates her charity committee.",
          "'Self-confidently' establishes the **arrogance** the Inspector will exploit — Mrs Birling's total certainty in her own righteousness is the very quality that leads her to condemn her own son. Links to **class & power** and **hypocrisy**.",
        ],
      },
      {
        type: "exit",
        moment: "Mrs Birling's reaction when Eric is revealed as the father",
        act: "Act 2 / Act 3",
        stageDirection: "Mrs Birling (agitated): No — Eric — please — I didn't know — I didn't understand—",
        points: [
          "Mrs Birling does not physically leave, but she undergoes a **dramatic collapse** from authority to agitation — the stage directions mark her emotional exit from control.",
          "The **dashes** fragment her speech, shattering the composed syntax she maintained throughout Act 2. Her language breaks down at the exact moment her class certainty is destroyed — the woman who spoke in **complete, confident sentences** is reduced to fragments.",
          "Priestley structures the play so that Mrs Birling's own words ('the father should be made an example of') become the instrument of her **humiliation** — her dramatic undoing is self-inflicted, proving the Inspector's method of giving them 'rope to hang themselves'.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  5. ERIC BIRLING
  // ══════════════════════════════════════════════════════════
  {
    name: "Eric Birling",
    textSlug: "inspector-calls",
    traits: [
      // ── troubled ──
      {
        trait: "troubled",
        colour: "teal",
        quotes: [
          {
            quote: "not quite at ease, half shy, half assertive",
            who: "Stage direction — Eric's first appearance",
            act: "Act 1",
            points: [
              "The **antithetical pairing** 'half shy, half assertive' signals internal conflict before Eric speaks a word — Priestley embeds dysfunction in the stage directions.",
              "'Not quite at ease' is a masterful **understatement**: the audience will later learn that Eric carries the guilt of assault, theft, and an unwanted pregnancy — his discomfort is the visible surface of hidden trauma.",
              "Priestley signals that the Birling family was **already broken** before the Inspector arrived — Eric's trouble predates the investigation.",
            ],
          },
          {
            quote: "I was in that state when a chap easily turns nasty.",
            who: "Eric Birling",
            act: "Act 3",
            points: [
              "**Euphemism** — 'that state' avoids directly naming drunkenness, revealing Eric's inability to confront his own behaviour honestly even in confession.",
              "The word **'chap'** normalises male violence by making it casual and gendered — 'easily' reveals how little it takes for privilege to become **predatory**.",
              "Priestley refuses to let Eric's genuine remorse fully excuse his actions — the language of this confession exposes the **entitlement** that enabled the assault.",
            ],
          },
          {
            quote: "I wasn't in love with her or anything — but I liked her — she was pretty and a good sport—",
            who: "Eric Birling",
            act: "Act 3",
            points: [
              "The **dashes** create a fragmented, defensive rhythm — Eric is constructing justifications in real time, stumbling through an explanation he knows is inadequate.",
              "'Good sport' reduces Eva to a source of entertainment — Priestley shows how even Eric's 'kindness' is filtered through **male entitlement** and objectification.",
            ],
          },
        ],
      },
      // ── entitled ──
      {
        trait: "entitled",
        colour: "purple",
        quotes: [
          {
            quote:
              "I insisted — it seems. I'm not very clear about it. But I was.",
            who: "Eric Birling",
            act: "Act 3",
            points: [
              "The verb **'insisted'** is a euphemism for coercion — Eric uses vague language to distance himself from the reality of what he did to Eva.",
              "The parenthetical **'it seems'** and 'I'm not very clear' attempt to blur responsibility through claims of drunken amnesia — but the final 'But I was' reluctantly **confirms** his agency.",
              "Priestley refuses to allow alcohol to function as an excuse — Eric's **class position** gave him the power to 'insist', and his gender gave him the impunity.",
            ],
          },
          {
            quote:
              "I got it — from the office—",
            who: "Eric Birling (about the stolen money)",
            act: "Act 3",
            points: [
              "The **dashes** mark hesitation — Eric knows that confessing to theft will destroy him in his father's eyes, yet he presses on.",
              "Priestley shows that Eric's entitlement extends beyond personal relationships to **financial** assumptions — he takes money from his father's business as though it were his by right.",
            ],
          },
          {
            quote: "She didn't want me to marry her. Said I didn't love her — and all that.",
            who: "Eric Birling",
            act: "Act 3",
            points: [
              "The dismissive **'and all that'** trivialises Eva's emotional insight — she understood the relationship more clearly than Eric did.",
              "Priestley inverts the power dynamic: **Eva** has the moral clarity to refuse a loveless marriage, while Eric assumes marriage would 'fix' everything — his solution is paternalistic, not loving.",
            ],
          },
        ],
      },
      // ── anguished ──
      {
        trait: "anguished",
        colour: "amber",
        quotes: [
          {
            quote:
              "You killed her — and the child she'd have had too — my child — your own grandchild",
            who: "Eric Birling (to Mrs Birling)",
            act: "Act 3",
            points: [
              "**Accumulation** forces progressively closer connection: 'her' → 'the child' → 'my child' → 'your own grandchild' — each phrase collapses the distance between the Birlings and Eva.",
              "By the time he reaches **'your own grandchild'**, the class barrier has been completely destroyed — Eva is no longer 'a girl of that class' but family.",
              "This is the play's most **emotionally devastating line**: Priestley reserves it for Eric because his anguish is the most visceral and personal of all the characters.",
            ],
          },
          {
            quote: "My God — I'm not likely to forget.",
            who: "Eric Birling",
            act: "Act 3",
            points: [
              "The **exclamatory oath** 'My God' signals raw, uncontrolled emotion — Eric has moved beyond the measured confessions of the earlier acts into genuine anguish.",
              "**'Not likely to forget'** commits Eric to permanent change through trauma rather than intellectual understanding — his moral awakening is seared into him.",
            ],
          },
          {
            quote:
              "And I say the girl's dead and we all helped to kill her — and that's what matters—",
            who: "Eric Birling",
            act: "Act 3",
            points: [
              "The **collective pronoun** 'we all' distributes guilt across the family — Eric refuses to let anyone escape the chain of responsibility.",
              "**'That's what matters'** echoes the Inspector's priorities — Eric has internalised the lesson so completely that he now speaks in the Inspector's moral register.",
              "Priestley allies Eric with Sheila as the **younger generation** who accept the truth, forming a generational opposition to their parents' denial.",
            ],
          },
        ],
      },
      // ── awakened ──
      {
        trait: "awakened",
        colour: "red",
        quotes: [
          {
            quote:
              "Why shouldn't they try for higher wages? We try for the highest possible prices.",
            who: "Eric Birling",
            act: "Act 1",
            points: [
              "**Parallel structure** exposes Birling's double standard with devastating simplicity — workers seeking fair pay are 'troublemakers', but employers seeking profit are 'businessmen'.",
              "This early line proves Eric possesses an **instinctive sense of fairness** that his father dismisses — the seed of his moral awakening exists before the Inspector arrives.",
              "Priestley demonstrates that the younger generation's capacity for change is **inherent**, not merely a response to the Inspector — Eric was already questioning the system.",
            ],
          },
          {
            quote:
              "I don't see why she should have been sacked just because she'd a bit more spirit than the others.",
            who: "Eric Birling",
            act: "Act 1",
            points: [
              "The colloquial **'a bit more spirit'** reframes Eva's strike action as a positive quality — Eric instinctively admires what his father punishes.",
              "Priestley plants these early sympathies to show that Eric's later awakening is **consistent** with his character, not a sudden conversion.",
            ],
          },
          {
            quote:
              "(nearly at breaking point) Then — you killed her. She came to you to protect me — and you turned her away — yes, and you killed her.",
            who: "Eric Birling (to Mrs Birling)",
            act: "Act 3",
            points: [
              "The stage direction **'nearly at breaking point'** makes Eric's emotional state explicit — his awakening is inseparable from anguish.",
              "The **repetition** of 'you killed her' at the beginning and end creates an accusatory frame that Mrs Birling cannot escape — Eric uses the Inspector's own rhetorical strategy of **relentless confrontation**.",
              "Priestley shows that awakening has a **cost**: Eric's moral growth comes through the destruction of his relationship with his mother and the knowledge that his own actions contributed to Eva's death.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "exit",
        moment: "Eric suddenly leaves the room",
        act: "Act 1",
        stageDirection: "Eric suddenly guffaws... then goes out quickly.",
        points: [
          "Eric's abrupt exit is **unexplained** at the time — the audience (and the characters) do not yet understand why he is so agitated. Priestley uses the exit to plant **dramatic foreshadowing** of Eric's hidden guilt.",
          "The verb **'guffaws'** (an involuntary, nervous laugh) reveals Eric's psychological instability — he cannot control his reactions, hinting at the alcoholism and guilt that will be exposed in Act 3.",
          "His departure leaves a **gap** in the family unit — Priestley physically removes Eric to signal that he is already separated from the family's comfortable self-image. His absence foreshadows the revelation that will shatter the family permanently.",
        ],
      },
      {
        type: "entrance",
        moment: "Eric re-enters to face his guilt",
        act: "Act 3",
        stageDirection: "Eric enters, looking extremely pale and distressed. He meets their stares.",
        points: [
          "Eric's return is the play's most **dramatically charged entrance** — every character (and the audience) now knows he is the father. He walks into a room full of people who have been discussing him in his absence.",
          "The stage direction **'extremely pale and distressed'** makes his guilt **visible** — unlike his parents who can mask their feelings, Eric's body betrays his conscience. Priestley contrasts surface composure (Mr & Mrs Birling) with authentic emotional response.",
          "He **'meets their stares'** — he does not avoid or deflect. This small detail signals that Eric, unlike his parents, will face his guilt directly. His entrance begins his painful awakening and links to the theme of **social responsibility**: he will be the one to say 'we all helped to kill her'.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  6. GERALD CROFT
  // ══════════════════════════════════════════════════════════
  {
    name: "Gerald Croft",
    textSlug: "inspector-calls",
    traits: [
      // ── charming ──
      {
        trait: "charming",
        colour: "teal",
        quotes: [
          {
            quote:
              "She was young and pretty and warm-hearted — and intensely grateful.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "The **list** of qualities reduces Eva to attributes that pleased Gerald — she is defined by how she made HIM feel, not by who she was.",
              "'Intensely grateful' reveals the power dynamic at the heart of the relationship — Eva's gratitude was born of **desperation**, not equality, and Gerald found that gratitude attractive.",
              "Priestley exposes how **charm** can disguise exploitation: Gerald's language sounds romantic, but the underlying dynamic is one of total dependency.",
            ],
          },
          {
            quote:
              "I became at once the most important person in her life.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "The superlative **'most important'** reveals Gerald's enjoyment of the power he held over Eva — he is flattered by her need rather than troubled by it.",
              "Priestley exposes the psychology of **paternalistic 'rescue'**: Gerald's charm functions because it makes dependency feel like devotion.",
            ],
          },
          {
            quote:
              "I want you to understand that I didn't install her there so that I could make love to her.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "The **defensive negation** ('I didn't... so that I could') is a pre-emptive denial that ironically draws attention to exactly what the audience suspects.",
              "Gerald's need to frame the relationship as **selfless** reveals his awareness that it could be read as exploitation — his charm includes the ability to narrate his own actions favourably.",
            ],
          },
          {
            quote: "Everything's all right now, Sheila. What about this ring?",
            who: "Gerald Croft",
            act: "Act 3",
            points: [
              "The **declarative** 'everything's all right now' assumes the evening can be erased — Gerald's charm operates through the confident assertion of normality.",
              "Offering the ring is an attempt to **restore the pre-Inspector world** through a symbolic gesture — Sheila's refusal is the play's verdict on Gerald's superficial resolution.",
            ],
          },
        ],
      },
      // ── paternalistic ──
      {
        trait: "paternalistic",
        colour: "purple",
        quotes: [
          {
            quote:
              "I didn't feel about her as she felt about me.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "A rare moment of **honest admission** — Gerald acknowledges the emotional imbalance but does not connect it to wider questions of power and responsibility.",
              "Priestley shows that **self-awareness** without moral commitment is insufficient — Gerald KNOWS the relationship was unequal but treats this as a fact, not a problem.",
            ],
          },
          {
            quote:
              "I suppose it was inevitable. She was young and pretty and warm-hearted — and intensely grateful.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "'Inevitable' removes Gerald's **agency** — he frames the affair as something that happened to him rather than a choice he made, absolving himself through deterministic language.",
              "Priestley critiques the upper-class male habit of presenting **exploitation as romance** — 'inevitable' suggests Gerald sees himself as a passive beneficiary of Eva's gratitude.",
            ],
          },
          {
            quote:
              "She told me she'd been happier than she'd ever been before — but that she knew it couldn't last.",
            who: "Gerald Croft (about Eva)",
            act: "Act 2",
            points: [
              "Gerald reports Eva's words to cast himself in a **flattering light** — he was the source of her greatest happiness, even if he was also the source of her abandonment.",
              "The clause **'she knew it couldn't last'** is devastating: Eva understood the transience of Gerald's paternalism better than he did — she was the more perceptive of the two.",
              "Priestley shows that paternalistic relationships have a built-in **expiry date** — kindness on the powerful person's terms always ends when it becomes inconvenient.",
            ],
          },
        ],
      },
      // ── evasive ──
      {
        trait: "evasive",
        colour: "amber",
        quotes: [
          {
            quote: "I don't come into this suicide business.",
            who: "Gerald Croft",
            act: "Act 1",
            points: [
              "The word **'business'** reduces Eva's death to a transaction or affair — language that distances and depersonalises the tragedy.",
              "**'I don't come into'** is a spatial metaphor of exclusion — Gerald tries to position himself outside the chain of responsibility before the Inspector even challenges him.",
              "Priestley establishes Gerald's evasive instinct from his first reaction — he will spend the play trying to stay outside the circle of guilt.",
            ],
          },
          {
            quote:
              "She was free to do what she liked.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "The word **'free'** is bitterly ironic — a destitute young woman with no income, no home, and no social network is not 'free' in any meaningful sense.",
              "Priestley exposes the **libertarian fallacy**: Gerald uses the language of freedom to absolve himself of the consequences of ending the relationship.",
            ],
          },
          {
            quote:
              "I think it's quite possible that, for some reason or other, the girl changed her name.",
            who: "Gerald Croft",
            act: "Act 3",
            points: [
              "Gerald's post-Inspector investigation focuses entirely on **disproving** the Inspector's identity rather than engaging with the moral lesson.",
              "The qualified language ('quite possible', 'some reason or other') is deliberately **vague** — Gerald constructs a counter-narrative built on uncertainty to create doubt.",
              "Priestley shows that **intelligence without moral commitment** enables sophisticated evasion — Gerald is clever enough to find loopholes in the argument but not brave enough to accept the truth.",
            ],
          },
          {
            quote: "That man wasn't a police inspector at all.",
            who: "Gerald Croft",
            act: "Act 3",
            points: [
              "The emphasis on the Inspector's **identity** rather than his message is Gerald's core evasive strategy — if the messenger is false, the message can be dismissed.",
              "Priestley structures the play so that Gerald's debunking creates a **false resolution** — essential to the dramatic impact of the final phone call, which shatters this comfortable escape.",
            ],
          },
        ],
      },
      // ── uncommitted ──
      {
        trait: "uncommitted",
        colour: "red",
        quotes: [
          {
            quote:
              "She knew it couldn't last — hadn't expected it to last.",
            who: "Gerald Croft (reporting Eva's words)",
            act: "Act 2",
            points: [
              "Gerald uses Eva's **own acceptance** of the relationship's end to justify his abandonment — her resignation becomes his alibi.",
              "Priestley shows that the uncommitted person always finds evidence that the other party 'understood' — a self-serving narrative that erases **culpability**.",
            ],
          },
          {
            quote: "I broke it off definitely before I went.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "The adverb **'definitely'** suggests Gerald values clean endings — the relationship was managed and concluded on HIS schedule, not Eva's.",
              "Priestley exposes the **privilege of mobility**: Gerald can leave, travel, return to his life. Eva cannot — her options narrow while his remain open.",
            ],
          },
          {
            quote: "I was sorry for her.",
            who: "Gerald Croft",
            act: "Act 2",
            points: [
              "**Simple past tense** — 'was sorry' locates the emotion safely in the past. Gerald's pity had a **time limit** that coincided with his convenience.",
              "Priestley distinguishes between **pity** (which Gerald felt) and **empathy** (which would require lasting commitment) — Gerald's feelings are genuine but shallow.",
              "The brevity of the sentence mirrors the brevity of Gerald's commitment — Priestley uses **form to reflect meaning**.",
            ],
          },
          {
            quote: "What about this ring?",
            who: "Gerald Croft (to Sheila)",
            act: "Act 3",
            points: [
              "The **interrogative** treats the engagement ring as a practical matter to be resolved — Gerald cannot see that the ring now symbolises a **moral contract** Sheila has outgrown.",
              "Priestley uses the ring as a **structural symbol**: its return is not a romantic setback but proof that the old social arrangements cannot survive moral scrutiny.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "exit",
        moment: "Gerald asks to leave for a walk",
        act: "Act 2",
        stageDirection: "Gerald: I'd like to go out for a walk... Sheila: Yes, go on, Gerald. But just remember...",
        points: [
          "Gerald is the **only character who leaves voluntarily** during the investigation — his exit is a calculated retreat, not an emotional response. He chooses distance when the pressure becomes personal.",
          "Sheila's permission ('yes, go on') combined with her warning ('but just remember') signals that she sees through his evasion — Gerald's exit is granted but not forgiven.",
          "Priestley uses the exit to show Gerald's **privilege of mobility**: he can physically walk away from the consequences in a way Eva never could. His freedom to leave is itself an expression of **class power** and **uncommitment**.",
        ],
      },
      {
        type: "entrance",
        moment: "Gerald returns with 'evidence' disproving the Inspector",
        act: "Act 3",
        stageDirection: "Gerald comes in, jaunty and triumphant.",
        points: [
          "The adverbs **'jaunty and triumphant'** reveal that Gerald has used his absence to construct an escape — he returns not with remorse but with a counter-argument. His entrance is the entrance of a man who has **solved** the problem rather than accepted the lesson.",
          "He brings 'proof' that the Inspector was not a real policeman — Priestley structures this as a **false resolution** that the older Birlings seize upon. Gerald's re-entrance creates the play's most dangerous moment: the temptation to forget everything.",
          "Priestley uses Gerald's triumphant return to test the audience: do they feel relief (aligning with the older Birlings) or unease (aligning with Sheila and Eric)? His entrance forces a **moral choice** that mirrors the play's central question about responsibility.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  7. EVA SMITH
  // ══════════════════════════════════════════════════════════
  {
    name: "Eva Smith",
    textSlug: "inspector-calls",
    traits: [
      // ── exploited ──
      {
        trait: "exploited",
        colour: "teal",
        quotes: [
          {
            quote:
              "She'd had a lot to say — far too much — so she had to go.",
            who: "Mr Birling (about Eva)",
            act: "Act 1",
            points: [
              "The **em-dashes** isolate 'far too much' as Birling's real objection — Eva's crime was not poor work but **speaking up** for fair wages.",
              "Priestley exposes the mechanism of **economic exploitation**: workers who advocate for themselves are redefined as problems to be removed.",
              "The casual finality of **'she had to go'** normalises the destruction of a livelihood — Birling frames firing as an inevitable, almost natural process.",
            ],
          },
          {
            quote:
              "She'd swallowed a lot of strong disinfectant. Burnt her inside out, of course.",
            who: "Inspector Goole (about Eva)",
            act: "Act 1",
            points: [
              "The **clinical detail** forces the audience to confront the physical reality of Eva's death — Priestley refuses to let the Birlings (or the audience) look away.",
              "**'Of course'** is devastatingly casual — the Inspector implies that such deaths are routine for the exploited class, that this suffering is so common it barely warrants surprise.",
              "Priestley uses **graphic language as a moral weapon**: the comfortable drawing room is invaded by the brutal reality of working-class death.",
            ],
          },
          {
            quote: "A nice little promising life there... and a nasty mess somebody's made of it.",
            who: "Inspector Goole (about Eva)",
            act: "Act 1",
            points: [
              "The **antithesis** between 'nice little promising life' and 'nasty mess' frames Eva's destruction as something **manufactured**, not accidental.",
              "'Somebody' distributes blame collectively — not one person but a **system** destroyed her. Priestley's argument is structural, not individual.",
            ],
          },
          {
            quote: "After all, y'know, we're respectable citizens and not criminals.",
            who: "Mr Birling (about his treatment of Eva)",
            act: "Act 1",
            points: [
              "Priestley's deepest irony: the Birlings ARE criminals in moral terms, but their **class position** protects them from legal consequence.",
              "The colloquial **'y'know'** appeals to shared class assumptions — Birling expects the Inspector to agree that respectability and morality are the same thing.",
            ],
          },
        ],
      },
      // ── voiceless ──
      {
        trait: "voiceless",
        colour: "purple",
        quotes: [
          {
            quote:
              "She kept a rough sort of diary.",
            who: "Inspector Goole (about Eva)",
            act: "Act 3",
            points: [
              "The **adjective 'rough'** signals the limited resources available to a working-class woman for self-expression — Eva's diary is the only trace of her interior life.",
              "Priestley makes the diary visible only through the Inspector's report — even Eva's **private thoughts** reach the audience second-hand, filtered through authority.",
              "The diary symbolises the working class's **desire to be heard** despite a system that structurally silences them.",
            ],
          },
          {
            quote:
              "She felt there'd be a kind of wrong in it.",
            who: "Inspector Goole (reporting Eva's refusal of Eric's stolen money)",
            act: "Act 3",
            points: [
              "Eva's **moral sense** is communicated only through the Inspector's paraphrase — she is denied the right to articulate her own ethics directly to the audience.",
              "The phrase **'a kind of wrong'** reveals a sophisticated moral consciousness that Mrs Birling claimed was 'absurd in a girl in her position' — Priestley vindicates Eva indirectly.",
              "Eva's voicelessness is structural: she has moral clarity but **no platform** from which to express it — her absence from the stage IS the political statement.",
            ],
          },
          {
            quote:
              "She didn't blame the young man at all and didn't want him to be responsible for her.",
            who: "Inspector Goole (reporting Eva about Eric)",
            act: "Act 3",
            points: [
              "Eva's **generosity** toward Eric is reported, not dramatised — Priestley denies the audience direct access to her compassion, forcing them to feel the injustice of her voicelessness.",
              "The double negative **'didn't blame... didn't want'** reveals Eva as more morally sophisticated than any Birling — yet she has no power to shape the narrative about her own life.",
            ],
          },
        ],
      },
      // ── resilient ──
      {
        trait: "resilient",
        colour: "amber",
        quotes: [
          {
            quote:
              "she'd had a lot to say — far too much — so she had to go.",
            who: "Mr Birling (about Eva leading the strike)",
            act: "Act 1",
            points: [
              "Eva **organised collective action** for fair wages — Priestley positions her as a proto-trade-unionist, linking her to the broader **labour movement**.",
              "Birling's irritation at Eva having 'a lot to say' confirms that her resilience was **effective** — she was not fired for incompetence but for being dangerously persuasive.",
              "Links to **AO3 context**: the 1945 audience, having just elected a Labour government, would recognise Eva's actions as morally legitimate and Birling's response as oppressive.",
            ],
          },
          {
            quote:
              "she'd been taken on in a good position at Milwards.",
            who: "Inspector Goole (about Eva)",
            act: "Act 1",
            points: [
              "After being fired by Birling, Eva **rebuilt her life** — Priestley shows her resilience in the gap between one exploitation and the next.",
              "The phrase **'good position'** implies skill and effort — Eva earned her place at Milwards, countering any suggestion that she was passive or helpless.",
            ],
          },
          {
            quote: "She refused to take any more money from him.",
            who: "Inspector Goole (about Eva refusing Eric's stolen money)",
            act: "Act 3",
            points: [
              "Eva's **refusal** of financial help demonstrates moral strength that none of the Birlings possess — she would rather face destitution than accept stolen money.",
              "Priestley positions Eva's resilience as **principled** rather than merely stubborn — her moral compass is more reliable than that of anyone in the Birling household.",
              "This detail transforms Eva from victim to **moral exemplar** — her resilience is ethical, not just practical.",
            ],
          },
          {
            quote:
              "she changed her name to Daisy Renton",
            who: "Inspector Goole",
            act: "Act 1",
            points: [
              "The name change represents an attempt to **reinvent herself** — Eva exercises the only agency available to her: control over her own identity.",
              "Priestley uses the multiple names to show Eva's **adaptability** in a hostile world — each name marks a new attempt to survive after the previous life was destroyed.",
            ],
          },
        ],
      },
      // ── symbolic ──
      {
        trait: "symbolic",
        colour: "red",
        quotes: [
          {
            quote:
              "there are millions and millions and millions of Eva Smiths and John Smiths still left with us",
            who: "Inspector Goole",
            act: "Act 3",
            points: [
              "The **triple repetition** of 'millions' expands Eva from an individual into a **representative** of the entire exploited working class.",
              "'Eva Smith' and 'John Smith' are the most **common English names** — Priestley deliberately chose names that signify everywoman and everyman, making her story universal.",
              "The phrase **'still left with us'** implies ongoing responsibility — the problem has not ended with Eva's death; it persists and demands action.",
            ],
          },
          {
            quote:
              "Eva Smith / Daisy Renton / 'Mrs Birling'",
            who: "Eva's multiple names across the play",
            act: "Acts 1–3",
            points: [
              "The **multiple identities** create deliberate ambiguity: if she is one person, the tragedy is individual; if she is several, the exploitation is **systemic** — either way, Priestley's argument holds.",
              "Each name corresponds to a different Birling's version of events — Eva exists only as a **construction** of those who exploited her, never as herself.",
              "The name 'Mrs Birling' (used at the charity) is the most symbolically charged — Eva tried to claim **connection** to the family that destroyed her, and was rejected for it.",
            ],
          },
          {
            quote:
              "One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths",
            who: "Inspector Goole",
            act: "Act 3",
            points: [
              "The structure of **loss followed by continuation** ('one... gone — but... millions') insists that Eva's death is not an ending but a **recurring pattern**.",
              "Priestley transforms a private tragedy into a **political argument**: the play is not about one girl but about the system that produces and destroys girls like her endlessly.",
            ],
          },
          {
            quote:
              "She'd had a lot to make her happy. But she'd also had a lot to make her unhappy.",
            who: "Inspector Goole (about Eva)",
            act: "Act 3",
            points: [
              "The **parallel structure** ('a lot to make her happy... a lot to make her unhappy') presents Eva's life as a balance sheet in which **exploitation always outweighed opportunity**.",
              "Priestley uses Eva's story as a **microcosm** of the working-class experience in Edwardian England — individual happiness is always vulnerable to the cruelty of those with power.",
              "Eva's symbolic function requires that she remain **absent** from the stage — if she appeared, she would become a specific person; her absence keeps her universal.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "absence",
        moment: "Eva never appears on stage",
        act: "Acts 1–3",
        points: [
          "Eva's **total absence** from the stage is the play's most radical dramatic choice — the central figure around whom every revelation orbits is never seen, never heard, never given a voice.",
          "Her absence forces the audience to **construct** Eva from the Birlings' self-serving accounts — Priestley makes the audience experience the same process by which the powerful define the powerless. We never hear Eva's version.",
          "If Eva appeared, she would become an individual and the play would become a personal tragedy. Her absence keeps her **universal**: she IS every exploited worker, every voiceless woman, every person destroyed by a system that refuses to see them. Links to **social responsibility** and **class & power**.",
        ],
      },
      {
        type: "entrance",
        moment: "Eva 'enters' through the Inspector's photograph",
        act: "Acts 1–2",
        stageDirection: "He shows her a photograph... She looks at it closely, recognises it with a little cry.",
        points: [
          "The photograph is Eva's only **physical presence** on stage — a frozen image that each character responds to differently. Priestley uses a prop to substitute for a person, reinforcing her reduction to an **object** in the Birlings' world.",
          "The Inspector shows the photograph **one person at a time**, preventing comparison — this creates the play's structural ambiguity about whether all characters saw the same woman. Eva's 'entrance' through the photograph is controlled and rationed, just as her story is.",
          "Each character's reaction to the photograph reveals their guilt: Sheila cries, Gerald turns away, Mr Birling deflects. Eva's silent image functions as a **moral mirror** — what the characters see in the photo tells us who THEY are.",
        ],
      },
      {
        type: "exit",
        moment: "The final phone call confirms a girl has died",
        act: "Act 3",
        stageDirection: "Mr Birling (on phone): A girl has just died... a police inspector is on his way here—",
        points: [
          "Eva's 'exit' from the world — her death — is confirmed in the play's **final moments**, shattering the comfortable fiction the Birlings had constructed. She dies offstage, reported second-hand, voiceless to the last.",
          "The phone call creates a **cyclical structure**: the play seems to be starting again, suggesting that Eva's story will repeat endlessly unless society changes. Her exit is not an ending but a **warning**.",
          "Priestley ensures Eva's death has the **last word** — after all the Birlings' evasion, denial, and self-congratulation, the reality of a dead girl silences them all. Her exit from life becomes the play's final, irrefutable moral argument.",
        ],
      },
    ],
  },
];
