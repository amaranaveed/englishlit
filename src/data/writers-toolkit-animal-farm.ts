// ─── Writer's Toolkit — Animal Farm (George Orwell) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const ANIMAL_FARM_TOOLKIT: WritersToolkit = {
  textSlug: "animal-farm",
  headerQuote:
    "All animals are equal, but some animals are more equal than others.",
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
          label: "Simple / accessible diction",
          example:
            '"The work of teaching and organising the others fell naturally upon the pigs, who were generally recognised as being the cleverest of the animals"',
          effect:
            "Orwell's deliberately plain, unadorned prose mirrors the fable form and makes the political allegory accessible to all readers — the simplicity is itself a political act, democratising complex ideas about power and corruption.",
        },
        {
          label: "Propaganda language (Squealer)",
          example:
            '"Surely, comrades, you do not want Jones back?"',
          effect:
            "Squealer's rhetorical manipulation relies on fear and false binary choices — by framing every challenge to the pigs' authority as a return to human tyranny, he eliminates the possibility of legitimate dissent and silences opposition.",
        },
        {
          label: "Repetition",
          example:
            '"Four legs good, two legs bad" — later changed to "Four legs good, two legs better"',
          effect:
            "The sheep's mindless chanting demonstrates how repetition replaces thought — the slogan functions as a propaganda tool that drowns out debate, and its later reversal shows how easily manipulated language can be used to normalise contradiction.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Do you know what would happen if we pigs failed in our duty? Jones would come back!"',
          effect:
            "Squealer's rhetorical questions assume the answer and prevent genuine discussion — the technique mimics totalitarian rhetoric where questioning the leadership is reframed as betraying the collective.",
        },
        {
          label: "Imperative verbs",
          example:
            '"Now, comrades... forward to the overthrow of the human race!"',
          effect:
            "Old Major's stirring commands inspire collective action, but the same imperative mode is later co-opted by Napoleon to issue orders — Orwell shows how revolutionary language becomes the language of dictatorship.",
        },
        {
          label: "Emotive language",
          example:
            '"Boxer! Boxer! Boxer!" — the animals cry out as the knacker\'s van takes him away',
          effect:
            "The desperate, repeated cries of Boxer's name create intense pathos and expose the pigs' ultimate betrayal — selling their most loyal worker to the slaughterman reveals the regime's complete moral bankruptcy.",
        },
        {
          label: "Irony",
          example:
            '"All animals are equal, but some animals are more equal than others"',
          effect:
            "The absurd logical contradiction exposes the regime's hypocrisy — Orwell demonstrates how totalitarian language corrupts meaning itself, making equality simultaneously affirmed and destroyed in a single sentence.",
        },
        {
          label: "Euphemism",
          example:
            '"Readjustment" of rations (when they are actually reduced); Boxer sent to the "hospital" (actually the knacker)',
          effect:
            "The pigs consistently use euphemism to disguise unpleasant realities — 'readjustment' conceals deprivation, and 'hospital' conceals murder, demonstrating how controlled language prevents the animals from understanding their own exploitation.",
        },
        {
          label: "Commandments as slogans",
          example:
            '"No animal shall sleep in a bed — with sheets" / "No animal shall kill another animal — without cause"',
          effect:
            "The gradual addition of qualifying clauses to the Seven Commandments demonstrates how laws are corrupted from within — each amendment preserves the appearance of legality while gutting its substance, mirroring Stalinist constitutional manipulation.",
        },
        {
          label: 'Song ("Beasts of England")',
          example:
            '"Beasts of England, beasts of Ireland, / Beasts of every land and clime, / Hearken to my joyful tidings / Of the golden future time"',
          effect:
            "The revolutionary anthem inspires collective hope and solidarity, functioning as the animals' 'Internationale' — its later banning by Napoleon reveals the regime's need to suppress the original ideals of the revolution it claims to represent.",
        },
        {
          label: "Personification (animals as humans)",
          example:
            '"The pigs did not actually work, but directed and supervised the others"',
          effect:
            "By giving animals human traits — greed, ambition, cruelty, naivety — Orwell creates a satirical mirror for human political behaviour; the anthropomorphism makes the fable's critique of totalitarianism both universal and uncomfortably recognisable.",
        },
        {
          label: "Contrast in register",
          example:
            'Squealer\'s elaborate justifications vs Boxer\'s simple "Napoleon is always right"',
          effect:
            "The gap between Squealer's sophisticated rhetoric and Boxer's uncritical devotion exposes the relationship between intellectual manipulation and willing submission — the educated exploit the trusting through language the latter cannot challenge.",
        },
        {
          label: "Hyperbole",
          example:
            '"Napoleon was now never spoken of simply as \'Napoleon.\'  He was always referred to in formal style as \'our Leader, Comrade Napoleon\'"',
          effect:
            "The escalating titles and honorifics parody the cult of personality surrounding Stalin — the exaggerated reverence demonstrates how totalitarian regimes inflate their leaders into godlike figures to maintain obedience and suppress dissent.",
        },
        {
          label: "Statistics and figures",
          example:
            '"Squealer would read out to them lists of figures proving that the production of every class of foodstuff had increased by two hundred per cent, three hundred per cent, or five hundred per cent"',
          effect:
            "Fabricated statistics overwhelm the animals' ability to verify claims — Squealer weaponises numbers to create the illusion of prosperity, mirroring Soviet propaganda's reliance on inflated production figures to mask economic failure.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  2. STRUCTURAL TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Structural Techniques",
      colour: "orange",
      columns: ["Technique", "Example / Description", "Effect / Purpose"],
      rows: [
        {
          label: "Chronological progression",
          example:
            "The narrative follows a clear timeline from Old Major's speech through revolution, consolidation, and corruption to the final card game",
          effect:
            "The straightforward chronology mirrors a history textbook — Orwell shows the inevitable stages by which revolutions are betrayed: idealism, power struggle, purges, propaganda, and finally the restoration of the old order under new management.",
        },
        {
          label: "Cyclical structure (pigs become men)",
          example:
            '"The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which"',
          effect:
            "The ending mirrors the beginning — the farm returns to its pre-revolutionary state with new masters indistinguishable from the old ones, arguing that power itself corrupts regardless of ideology, and that revolutions merely replace one ruling class with another.",
        },
        {
          label: "The Seven Commandments (gradual corruption)",
          example:
            "The Commandments are progressively altered: 'No animal shall drink alcohol' becomes 'No animal shall drink alcohol to excess'",
          effect:
            "The Commandments function as a structural spine — their incremental corruption tracks the regime's moral decline, with each alteration marking a new stage of betrayal and providing the reader with a measurable scale of the pigs' hypocrisy.",
        },
        {
          label: "Parallel events (revolution mirrors what it replaced)",
          example:
            "The pigs move into the farmhouse, sleep in beds, drink whisky, and trade with humans — exactly what Jones did",
          effect:
            "Orwell structures the narrative so that every revolutionary prohibition is eventually violated by the new rulers — the parallelism makes the pigs' transformation into humans structurally inevitable rather than surprising.",
        },
        {
          label: "Escalating oppression",
          example:
            "From taking the milk and apples, to sleeping in beds, to executing dissenters, to walking on two legs",
          effect:
            "Each chapter introduces a greater abuse of power — the escalation is carefully paced so that each individual step seems small enough to rationalise, but the cumulative effect is the total reversal of the revolution's principles.",
        },
        {
          label: "Key turning points",
          example:
            "The Battle of the Cowshed (consolidation), the windmill debate (Napoleon's coup), the executions (terror), Boxer's death (ultimate betrayal)",
          effect:
            "Each turning point corresponds to a historical event in the Russian Revolution — the Battle of the Cowshed mirrors the Civil War, the executions mirror the Great Purge, and Boxer's death mirrors the betrayal of the proletariat.",
        },
        {
          label: "Foreshadowing",
          example:
            '"The milk had disappeared" — the very first sign of the pigs\' self-interest, occurring on the day of the revolution itself',
          effect:
            "The disappearance of the milk on day one signals that corruption begins at the moment of revolution, not gradually afterwards — Orwell foreshadows the entire trajectory of betrayal in this single, easily overlooked detail.",
        },
        {
          label: "Montage of time passing",
          example:
            '"The years passed. The seasons came and went, the short animal lives fled by"',
          effect:
            "Orwell compresses time to show how oppression becomes normalised — the montage technique means the animals (and the reader) lose track of how much has changed, mirroring the way populations acclimatise to gradually worsening tyranny.",
        },
        {
          label: "The transformation of rules",
          example:
            "The original Seven Commandments are reduced to a single maxim: 'All animals are equal, but some animals are more equal than others'",
          effect:
            "The structural reduction from seven laws to one corrupted slogan mirrors the simplification of ideology under totalitarianism — complexity and nuance are replaced by a single, paradoxical assertion of power.",
        },
        {
          label: "Climactic scene (pigs and men)",
          example:
            '"Twelve voices were shouting in anger, and they were all alike. No question, now, what had happened to the faces of the pigs"',
          effect:
            "The final scene serves as the novella's devastating climax — the card game between pigs and human farmers reveals that the revolution has completed its full circle, and the oppressed have become identical to their former oppressors.",
        },
        {
          label: "Symmetry (opening vs ending)",
          example:
            "Opens with animals oppressed by a human farmer; ends with animals oppressed by pigs indistinguishable from human farmers",
          effect:
            "The structural symmetry is Orwell's most powerful argument — by ending where it began, the novella suggests that the problem is not who holds power but the nature of power itself.",
        },
        {
          label: "Propaganda as structural tool",
          example:
            "Squealer's speeches punctuate each new betrayal, always providing justification after the fact",
          effect:
            "Propaganda is not merely a language technique but a structural rhythm — after every abuse (taking food, changing rules, executing animals), Squealer's explanation follows like a refrain, creating a pattern of violation-then-justification that the animals learn to accept.",
        },
        {
          label: "Removal of dissenting voices",
          example:
            "Snowball is expelled, the hens are starved into submission, dissenters are executed by the dogs",
          effect:
            "The systematic elimination of opposition structures the novella's middle section — each removal narrows the space for dissent until only obedience and silence remain, mirroring the consolidation of Stalinist power.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  3. NARRATIVE TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Narrative Techniques",
      colour: "green",
      columns: ["Technique", "Example / Description", "Purpose / Effect"],
      rows: [
        {
          label: "Third-person omniscient narrator",
          example:
            "The narrator reports events factually but rarely comments directly on them, allowing the reader to draw conclusions",
          effect:
            "The detached, reportorial tone creates devastating ironic distance — the narrator describes atrocities in the same calm register as everyday farm activities, forcing the reader to supply the moral outrage that the narrative deliberately withholds.",
        },
        {
          label: "Fable / fairy story framing",
          example:
            'The subtitle "A Fairy Story" sets up expectations of a simple moral tale with animal characters',
          effect:
            "The fairy story frame makes the political allegory accessible and universal — by disguising Soviet history as an animal fable, Orwell circumvents the reader's political defences and delivers his critique through narrative pleasure rather than polemic.",
        },
        {
          label: "Allegory",
          example:
            "Napoleon represents Stalin, Snowball represents Trotsky, Boxer represents the loyal proletariat, Old Major represents Marx/Lenin",
          effect:
            "The allegorical structure allows Orwell to condense decades of Soviet history into a short, readable narrative — each character and event maps onto a real historical counterpart, giving the fable documentary precision beneath its fictional surface.",
        },
        {
          label: "Ironic detachment",
          example:
            '"The animals were happy as they had never conceived it possible to be" — stated just as the pigs begin appropriating resources',
          effect:
            "The narrator's flat, unemotional delivery of obviously false statements creates profound irony — the gap between what is said and what is true mirrors the gap between propaganda and reality under totalitarianism.",
        },
        {
          label: "Understatement",
          example:
            '"They had come to a time when no one dared speak his mind, when fierce, growling dogs roamed everywhere"',
          effect:
            "The understated description of a reign of terror makes the horror more powerful — Orwell's restrained prose refuses melodrama, trusting the reader to recognise the enormity of what is being described in such measured language.",
        },
        {
          label: "Simple prose style",
          example:
            '"That evening Squealer explained privately to the other animals that Napoleon had never in reality been opposed to the windmill"',
          effect:
            "The plain, declarative sentences mirror the style of a children's story — this simplicity is strategic, as it exposes the absurdity of the pigs' lies by stating them in a form so clear that their dishonesty becomes self-evident.",
        },
        {
          label: "Animals as viewpoint (limited understanding)",
          example:
            '"Benjamin felt a nose nuzzling at his shoulder. He looked round. It was Clover. Her old eyes looked dimmer than ever"',
          effect:
            "The narrative is largely filtered through the animals' limited perspective — they cannot fully grasp what is happening to them, which creates dramatic irony and mirrors the way oppressed populations are kept ignorant of their own exploitation.",
        },
        {
          label: "Dramatic irony",
          example:
            "The reader understands that Boxer is being sent to the knacker while the animals are told he is going to the veterinary hospital",
          effect:
            "The gap between what the reader knows and what the animals believe creates the novella's most devastating emotional moments — dramatic irony positions the reader as a helpless witness to betrayal, unable to intervene.",
        },
        {
          label: "Propaganda speeches",
          example:
            '"Comrades... do you know who is responsible for this? Do you know the enemy who has come in the night and overthrown our windmill? SNOWBALL!"',
          effect:
            "Napoleon's speeches are embedded in the narrative as set-pieces of manipulation — the capitalized 'SNOWBALL' mimics the rhetorical climax of a demagogue's performance, showing how scapegoating functions through theatrical accusation.",
        },
        {
          label: 'The unreliable "official" narrative',
          example:
            '"It was given out that the battle would be called the Battle of the Windmill, and that Napoleon had created a new decoration, the Order of the Green Banner"',
          effect:
            "The passive voice ('it was given out') signals the official version imposed from above — Orwell repeatedly distinguishes between what happened and what the animals are told happened, dramatising historical revisionism as a narrative technique.",
        },
        {
          label: "Songs and slogans",
          example:
            '"Beasts of England" is replaced by a new anthem praising Napoleon: "Comrade Napoleon... Thou art the giver of / All that thy creatures love"',
          effect:
            "The replacement of revolutionary songs with hymns of personal worship tracks the shift from collective idealism to cult of personality — the new anthem's religious diction ('thou art the giver') deifies Napoleon in language that the animals absorb without question.",
        },
        {
          label: "Direct and indirect speech",
          example:
            "Squealer's propaganda is often reported in indirect speech, while Old Major's vision is given in direct speech",
          effect:
            "Old Major's direct speech preserves his words exactly, giving them the force of scripture — Squealer's indirect speech blurs his manipulations into the narrative, making it harder to challenge specific claims, just as propaganda merges with accepted truth over time.",
        },
        {
          label: "Selective focus and omission",
          example:
            "The narrator does not describe the executions in graphic detail but reports them with chilling brevity: 'they were all slain on the spot'",
          effect:
            "The narrative omission of graphic violence mirrors the way totalitarian regimes sanitise their own brutality — the brief, factual reporting of mass execution makes the horror more disturbing because it treats atrocity as routine.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. FORM AND GENRE
    // ══════════════════════════════════════════════════════════
    {
      title: "Form and Genre",
      colour: "blue",
      columns: ["Form / Technique", "Description", "Effect / Purpose"],
      rows: [
        {
          label: "Fable / fairy story",
          example:
            'Subtitled "A Fairy Story" — animals talk, think, and organise a society, following the conventions of Aesop and La Fontaine',
          effect:
            "The fable form allows Orwell to universalise his critique — by removing the story from a specific human context, the political message transcends the Soviet Union and applies to any revolution corrupted by power.",
        },
        {
          label: "Political allegory",
          example:
            "Every major character and event corresponds to a figure or moment in Soviet history: the revolution, the power struggle, the purges, the pact with capitalists",
          effect:
            "The allegorical structure gives the novella a dual readability — it functions as both a compelling animal story and a precise historical commentary, allowing readers of different levels to engage with its political argument.",
        },
        {
          label: "Satire",
          example:
            "The pigs' increasingly absurd justifications for their privileges — 'Milk and apples (this has been proved by Science, comrades) contain substances absolutely necessary to the well-being of a pig'",
          effect:
            "Orwell uses satirical exaggeration to expose the absurdity of totalitarian logic — the pseudo-scientific justification for hoarding food mocks the way ruling classes invent intellectual frameworks to legitimise their greed.",
        },
        {
          label: "Dystopian fiction",
          example:
            "Animal Farm becomes a surveillance state with the dogs as secret police, show trials, forced confessions, and rewritten history",
          effect:
            "The novella anticipates Orwell's fuller exploration of dystopia in Nineteen Eighty-Four — Animal Farm demonstrates in miniature how utopian aspirations are systematically dismantled to create a society built on fear, lies, and oppression.",
        },
        {
          label: "Beast fable (Aesop tradition)",
          example:
            "Animals embody specific human types: pigs (intellectuals/rulers), dogs (enforcers), sheep (unthinking masses), horses (loyal workers)",
          effect:
            "The beast fable tradition uses animal characteristics to satirise human nature — the choice of species is deliberate: pigs' proverbial greed, dogs' obedience to masters, sheep's herd mentality, and horses' strength become political archetypes.",
        },
        {
          label: "Parable",
          example:
            "The story teaches a clear moral lesson about the corruption of power and the dangers of political apathy",
          effect:
            "The parabolic form gives the novella the force of a moral argument — like Biblical parables, it uses narrative to make an abstract truth (power corrupts) concrete, memorable, and emotionally compelling.",
        },
        {
          label: "Cautionary tale",
          example:
            "The novella warns against blind trust in leaders, the surrender of critical thinking, and the failure to defend democratic principles",
          effect:
            "By showing the full trajectory from revolution to tyranny, Orwell creates a warning that extends beyond the Soviet context — the cautionary form insists that what happened in Russia can happen anywhere if citizens fail to remain vigilant.",
        },
        {
          label: "Novella",
          example:
            "At approximately 30,000 words, Animal Farm is deliberately concise — every scene and character serves the allegorical purpose",
          effect:
            "The compressed novella form mirrors the fable's economy — there is no wasted space, and the brevity makes the political argument more powerful by stripping it of complexity, nuance, or ambiguity that might dilute its impact.",
        },
        {
          label: "Allegory within realism",
          example:
            "Despite the fantastical premise of talking animals, the farm itself is described with precise, realistic agricultural detail",
          effect:
            "The grounding in realistic farming detail makes the allegorical world feel tangible — Orwell ensures the reader never forgets that these are real animals in a real landscape, which makes their suffering more concrete and the political critique more visceral.",
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
          label: "The windmill",
          example:
            "Represents industrialisation and the regime's grand projects — promised to improve life but ultimately serves only the pigs' power",
          effect:
            "The windmill is repeatedly built, destroyed, and rebuilt — it symbolises Stalin's Five-Year Plans, where enormous sacrifice by workers produced results that benefited only the ruling elite, while ordinary people saw no improvement in their lives.",
        },
        {
          label: "The farmhouse",
          example:
            "Originally a symbol of human oppression that the animals agree never to inhabit — the pigs eventually move in and sleep in Jones's bed",
          effect:
            "The farmhouse represents the seat of power — the pigs' occupation of it demonstrates that they have become the new ruling class, adopting the lifestyle and privileges of the humans they overthrew.",
        },
        {
          label: "The Seven Commandments",
          example:
            "Written on the barn wall as the founding principles of Animalism — systematically altered to justify the pigs' behaviour",
          effect:
            "The Commandments symbolise constitutional law and revolutionary ideals — their corruption mirrors the way totalitarian regimes manipulate legal and ideological frameworks to legitimise their power while claiming continuity with founding principles.",
        },
        {
          label: '"Beasts of England" (and its replacement)',
          example:
            "The revolutionary anthem is banned once Napoleon consolidates power and replaced with a song praising Napoleon personally",
          effect:
            "The banning of 'Beasts of England' symbolises the suppression of revolutionary idealism — the replacement anthem shifts loyalty from collective liberation to personal worship, marking the transition from revolution to dictatorship.",
        },
        {
          label: "The flag",
          example:
            "A green tablecloth with a hoof and horn — representing the animals' republic, later used merely as a symbol of Napoleon's authority",
          effect:
            "The flag mirrors the Soviet flag (hammer and sickle) — its transformation from a symbol of collective aspiration to an emblem of one pig's power demonstrates how revolutionary symbols are co-opted by the regimes that betray them.",
        },
        {
          label: "The dogs",
          example:
            '"Napoleon took them away from their mothers, saying that he would make himself responsible for their education"',
          effect:
            "The nine dogs raised by Napoleon symbolise the secret police (NKVD/KGB) — their removal as puppies and indoctrination from birth shows how totalitarian regimes create instruments of terror through ideological conditioning from childhood.",
        },
        {
          label: "Boxer's hooves / strength",
          example:
            '"I will work harder" and "Napoleon is always right" — Boxer\'s two personal mottos',
          effect:
            "Boxer's immense physical strength and unquestioning loyalty symbolise the exploited working class — his two mottos represent the twin pillars of proletarian exploitation: uncritical hard work and blind obedience to authority.",
        },
        {
          label: "Moses the raven (religion)",
          example:
            "Moses tells stories of Sugarcandy Mountain — a paradise where animals go after death — and is tolerated by the pigs",
          effect:
            "Moses represents organised religion and the Russian Orthodox Church — the pigs tolerate his stories because the promise of an afterlife makes the animals more willing to endure suffering in the present, functioning as Marx's 'opium of the people'.",
        },
        {
          label: "The whip",
          example:
            '"It was a pig walking on his hind legs... he carried a whip in his trotter"',
          effect:
            "The whip is Jones's instrument of oppression — when Napoleon's pigs carry whips, the symbol completes the novella's argument that the new rulers have become indistinguishable from the old, adopting not just their methods but their tools of control.",
        },
        {
          label: "Sugar Candy Mountain",
          example:
            '"Up there, comrades... just the other side of that dark cloud... there it lay, the big rock candy mountain"',
          effect:
            "Sugar Candy Mountain represents religious promises of paradise used to pacify the oppressed — the pigs initially reject Moses but later allow him to return, recognising that false hope serves the interests of those in power.",
        },
        {
          label: "The barn wall",
          example:
            "The wall where the Seven Commandments are painted — the only written record of the revolution's principles",
          effect:
            "The barn wall symbolises the constitution and collective memory — because most animals cannot read, the wall becomes a site of power where those who control literacy control truth itself.",
        },
        {
          label: "Alcohol",
          example:
            '"No animal shall drink alcohol" — later amended to "No animal shall drink alcohol to excess" after the pigs discover Jones\'s whisky',
          effect:
            "Alcohol symbolises the decadence and self-indulgence of the ruling class — the pigs' adoption of drinking mirrors the Soviet elite's luxurious lifestyle, and the amended Commandment demonstrates the regime's ability to reshape morality to suit its appetites.",
        },
        {
          label: "The card game",
          example:
            "Napoleon and Pilkington play cards in the final scene, quarrelling over an ace of spades — both have cheated",
          effect:
            "The card game symbolises diplomatic relations between totalitarian states and capitalist powers — both sides cheat, both are self-serving, and the animals watching through the window can no longer tell the difference between their oppressors.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Explanation / Example", "Application in Animal Farm"],
      rows: [
        {
          label: "Russian Revolution allegory",
          example:
            "Old Major = Marx/Lenin, Napoleon = Stalin, Snowball = Trotsky, Boxer = the proletariat, the dogs = the secret police, Frederick = Hitler, Pilkington = the Western Allies",
          effect:
            "Orwell maps the entire arc of the Russian Revolution onto the farm — from the idealistic origins through the power struggle, purges, and eventual betrayal of the working class, creating a compressed history that exposes the mechanisms of revolutionary failure.",
        },
        {
          label: "Totalitarianism",
          example:
            '"There was nothing there now except a single Commandment. It ran: ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS"',
          effect:
            "Orwell demonstrates that totalitarianism does not arrive suddenly but develops incrementally — each small concession to the pigs' authority builds toward total control, showing how democratic societies sleepwalk into tyranny through complacency and fear.",
        },
        {
          label: "Propaganda and manipulation",
          example:
            '"Squealer was so persuasive... that they accepted his explanation without further questions"',
          effect:
            "Squealer embodies the propaganda apparatus of a totalitarian state — his ability to 'turn black into white' demonstrates Orwell's argument that controlling language and information is more powerful than physical force in maintaining tyranny.",
        },
        {
          label: "Corruption of power",
          example:
            '"All that year the animals worked like slaves. But they were happy in their work... with the consciousness that everything they did was for the benefit of themselves"',
          effect:
            "The ironic juxtaposition of 'slaves' with 'happy' captures Orwell's central thesis — power corrupts not only those who hold it but also the ideals that brought them to power, until the language of liberation becomes the language of enslavement.",
        },
        {
          label: "Class struggle",
          example:
            "The pigs form a new ruling class, the dogs become an enforcer class, and the other animals remain an exploited working class",
          effect:
            "Orwell demonstrates that the revolution merely reshuffled the class hierarchy rather than abolishing it — the pigs replace the humans at the top, proving that class structures reassert themselves unless actively and continuously resisted.",
        },
        {
          label: "Cult of personality",
          example:
            '"Comrade Napoleon... Father of All Animals, Terror of Mankind, Protector of the Sheep-fold, Ducklings\' Friend"',
          effect:
            "The accumulation of absurd titles parodies Stalin's self-glorification — Orwell shows how cult of personality transforms a political leader into a quasi-religious figure whose authority becomes impossible to question without appearing to betray the community.",
        },
        {
          label: "Historical revisionism",
          example:
            '"Snowball had been openly fighting on Jones\'s side... the animals now remembered that at the critical moment of the battle Snowball had turned to flee"',
          effect:
            "Napoleon's rewriting of the Battle of the Cowshed mirrors Stalin's erasure of Trotsky from Soviet history — Orwell demonstrates that whoever controls the past controls the present, anticipating the fuller treatment of this theme in Nineteen Eighty-Four.",
        },
        {
          label: "Education and literacy as power",
          example:
            '"The pigs could already read and write perfectly. The dogs learned to read fairly well... Muriel the goat could read somewhat better... Benjamin could read as well as any pig, but never exercised his faculty"',
          effect:
            "The hierarchy of literacy directly mirrors the hierarchy of power — the animals' inability to read the Commandments for themselves allows the pigs to alter them at will, demonstrating that an uneducated populace is a vulnerable populace.",
        },
        {
          label: "Scapegoating",
          example:
            '"Whenever anything went wrong it became usual to attribute it to Snowball"',
          effect:
            "Snowball's transformation from revolutionary hero to invisible enemy mirrors Trotsky's demonisation by Stalin — Orwell shows how totalitarian regimes require a permanent external threat to justify their own failures and maintain social cohesion through fear.",
        },
        {
          label: "The failure of revolution",
          example:
            '"The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which"',
          effect:
            "The novella's devastating conclusion argues that revolution is inherently self-defeating when it concentrates power in an elite — Orwell does not reject the ideals of equality but demonstrates how easily those ideals are corrupted by the very structures meant to implement them.",
        },
        {
          label: "Complicity of the masses",
          example:
            '"The sheep — who were the chief offenders — broke into \'Four legs good, two legs bad\'... and put an end to any chance of discussion"',
          effect:
            "Orwell implicates the ordinary animals in their own oppression — the sheep's mindless chanting, Boxer's unquestioning loyalty, and Benjamin's cynical silence all enable tyranny, arguing that dictatorship requires not just evil leaders but passive citizens.",
        },
        {
          label: "Language as control",
          example:
            '"The Commandments were not violated, for there was good reason to believe they had never been otherwise"',
          effect:
            "Orwell's most prescient insight is that political power operates primarily through language — by controlling what words mean, what history says, and what can be spoken aloud, the pigs control reality itself, making resistance literally unthinkable.",
        },
        {
          label: "The betrayal of the working class",
          example:
            '"\'Alfred Simmonds, Horse Slaughterer and Glue Boiler\'... \'They are taking Boxer to the knacker\'s!\' ... The animals crowded round the van. \'Good-bye, Boxer!\' they chorused"',
          effect:
            "Boxer's fate is the novella's emotional and moral climax — the most loyal, hardest-working animal is sold for whisky money when he is no longer useful, exposing the regime's ultimate contempt for the class it claims to represent and protect.",
        },
      ],
    },
  ],
};
