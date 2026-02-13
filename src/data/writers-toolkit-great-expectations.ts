// ─── Writer's Toolkit — Great Expectations (Charles Dickens) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const GREAT_EXPECTATIONS_TOOLKIT: WritersToolkit = {
  textSlug: "great-expectations",
  headerQuote:
    "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
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
          label: "First-person retrospective voice",
          example:
            '"I think my sister must have had some general idea that I was a young offender whom an Accoucheur Policeman had taken up"',
          effect:
            "The older Pip narrates with ironic self-awareness, creating a dual perspective — the naive child's confusion and the adult's wry understanding coexist, allowing Dickens to critique Pip's younger self while generating sympathy for the boy he was.",
        },
        {
          label: "Gothic diction",
          example:
            '"The cold wind seemed to blow colder there, than outside the gate; and it made a shrill noise in howling in and out at the open sides of the brewery"',
          effect:
            "The Gothic vocabulary surrounding Satis House — cold, shrill, howling — establishes it as a site of emotional decay and psychological danger, foreshadowing the destructive influence Miss Havisham will have on Pip.",
        },
        {
          label: "Pathetic fallacy",
          example:
            '"It was a rimy morning, and very damp. I had seen the damp lying on the outside of my little window, as if some goblin had been crying there all night"',
          effect:
            "The damp, cold marshland mirrors Pip's emotional desolation and guilt after helping the convict — the supernatural simile ('some goblin') blends childhood imagination with genuine fear, establishing the landscape as a projection of Pip's inner turmoil.",
        },
        {
          label: "Simile",
          example:
            '"She was dressed in rich materials — satins, and lace, and silks — all of white. Her shoes were white. And she had a long white veil... But, I saw that everything within my view which ought to be white, had been white long ago, and had lost its lustre, and was faded and yellow"',
          effect:
            "The extended description of Miss Havisham's bridal attire shifts from apparent grandeur to revealed decay — what 'ought to be white' has yellowed, mirroring her transformation from bride to living corpse and the corruption of her once-hopeful expectations.",
        },
        {
          label: "Metaphor",
          example:
            '"I was a blacksmith\'s boy but yesterday; I am — what shall I say I am — to-day?"',
          effect:
            "Pip's inability to name what he has become reveals the identity crisis at the novel's heart — he can define what he was (a blacksmith's boy) but not what he is, exposing the hollowness of his social transformation.",
        },
        {
          label: "Personification",
          example:
            '"The marshes were just a long black horizontal line then, as I stopped to look after him; and the river was just another horizontal line, not nearly so broad nor yet so black; and the sky was just a row of long angry red lines and dense black lines intermixed"',
          effect:
            "The 'angry red lines' of the sky personify the threatening landscape, reflecting Pip's guilt and fear after encountering Magwitch — the stark horizontal lines reduce the world to prison-bar imagery, foreshadowing the themes of crime and imprisonment.",
        },
        {
          label: "Repetition",
          example:
            '"I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be"',
          effect:
            "The anaphoric repetition of 'against' creates a relentless accumulation of obstacles, emphasising that Pip's love for Estella is an act of self-destruction — each repetition adds another rational objection that his heart refuses to hear.",
        },
        {
          label: "Dialogue / dialect",
          example:
            '"Which I meantersay, Pip, it were that there your father as were your father too" — Joe',
          effect:
            "Joe's grammatically incorrect dialect marks his lack of education but also his warmth and sincerity — Dickens uses his speech patterns to highlight the gap between Joe's natural goodness and Pip's acquired but empty gentility.",
        },
        {
          label: "Irony",
          example:
            '"Miss Havisham was going to make my fortune on a grand scale" — Pip wrongly assumes his benefactor is Miss Havisham',
          effect:
            "Dramatic irony pervades Pip's narration — the reader may suspect, and the older narrator certainly knows, that these assumptions are catastrophically wrong, creating tension between Pip's confident expectations and the reality that will eventually shatter them.",
        },
        {
          label: "Hyperbole",
          example:
            '"She had been struck with a white terror, there was not a finger of her hand that was not white, not a bone of her face that was not sharp"',
          effect:
            "The exaggerated physical description amplifies emotional reality — the hyperbolic whiteness and sharpness transform a human face into something skeletal and spectral, making Miss Havisham's psychological damage visible on her body.",
        },
        {
          label: "Sensory language",
          example:
            '"There was a frosty rime upon the stones and grass; and in the air, the hot sun beat, upon the white wall of the old brewery, that there was a mouldy smell in that empty house"',
          effect:
            "Dickens layers visual, tactile, and olfactory detail to immerse the reader in Pip's world — the mouldy smell of Satis House makes its decay visceral rather than abstract, connecting environment to moral and emotional atmosphere.",
        },
        {
          label: "Imagery of decay",
          example:
            '"The most prominent object was a long table with a tablecloth spread on it, as if a feast had been in preparation when the house and the clocks in it had all stopped together. An epergne or centre-piece of some kind was in the middle of this cloth; it was so heavily overhung with cobwebs that its form was quite undistinguishable"',
          effect:
            "The rotting wedding feast embodies Miss Havisham's arrested existence — time has continued around her frozen moment of betrayal, and the cobwebs and decay reveal the impossibility of stopping the world, no matter how great one's grief or wealth.",
        },
        {
          label: "Animal imagery",
          example:
            '"He ate in a ravenous way that was very disagreeable, and all his actions were uncouth, noisy, and greedy" — Pip describing Magwitch; later Estella calls Pip "a common labouring-boy" with "coarse hands" and "thick boots"',
          effect:
            "Animal and bestial imagery is used to dehumanise characters across class lines — Magwitch is presented as animalistic through his eating, while Pip is reduced to coarse material by Estella, revealing how class prejudice strips people of their humanity from every direction.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  2. STRUCTURAL TECHNIQUES
    // ══════════════════════════════════════════════════════════
    {
      title: "Structural Techniques",
      colour: "orange",
      columns: ["Technique", "Example / Description", "What It Does"],
      rows: [
        {
          label: "Three-stage Bildungsroman structure",
          example:
            "Stage 1 (Chapters 1-19): Pip's childhood on the marshes. Stage 2 (Chapters 20-39): Pip as a gentleman in London. Stage 3 (Chapters 40-59): Pip's moral reckoning and redemption",
          effect:
            "The tripartite structure mirrors Pip's moral arc — innocence, corruption, and redemption — creating a clear framework for his spiritual journey and allowing the reader to measure his moral progress against each stage.",
        },
        {
          label: "First-person retrospective narration",
          example:
            '"I know I was often very miserable there; I know I often hated myself, and despised myself; I know I was cowardly, and yet I had no more power to stop than the tide"',
          effect:
            "The older Pip narrates with painful self-knowledge, creating a confessional tone — the repetition of 'I know' insists on accountability, refusing to excuse his younger self while acknowledging the forces that shaped him.",
        },
        {
          label: "Dramatic irony (older Pip reflecting)",
          example:
            '"That was a memorable day to me, for it made great changes in me. But, it is the same with any life. Imagine one selected day struck out of it, and think how different its course would have been"',
          effect:
            "The older narrator's philosophical interjections create dramatic irony — the reader understands that Pip's 'great expectations' are built on false foundations before the character does, generating suspense and moral tension.",
        },
        {
          label: "Parallel characters",
          example:
            "Pip and Estella are both manipulated children: Pip by Miss Havisham's false generosity, Estella by Miss Havisham's deliberate emotional engineering — both are weapons in her revenge",
          effect:
            "The structural parallels between Pip and Estella deepen the novel's critique of class — both are shaped and damaged by the same woman, revealing that wealth and social engineering destroy the manipulator's tools as surely as they destroy their targets.",
        },
        {
          label: "Revelation / reversal (Magwitch as benefactor)",
          example:
            '"Yes, Pip, dear boy, I\'ve made a gentleman on you! It\'s me wot has done it! I swore that time, sure as ever I earned a guinea, that guinea should go to you"',
          effect:
            "The revelation that Magwitch, not Miss Havisham, is Pip's benefactor is the novel's devastating structural pivot — it demolishes Pip's entire understanding of his life, forcing him (and the reader) to re-evaluate everything that came before.",
        },
        {
          label: "Circular structure (return to marshes)",
          example:
            "The novel begins and ends on the marshes — Pip returns to the forge and to the churchyard where he first met Magwitch",
          effect:
            "The circular return suggests that Pip's moral journey brings him back to the values he abandoned — the marshes represent authenticity and honest labour, and his return signals the recovery of his true self after the corruption of false gentility.",
        },
        {
          label: "Foreshadowing",
          example:
            '"Since that time, which is far enough away now, I have often thought that few people know what secrecy there is in the young, under terror"',
          effect:
            "The older narrator's anticipatory comments create a web of foreshadowing — hints about secrecy and terror prepare the reader for later revelations, building suspense while reinforcing the novel's concern with hidden truths and deferred consequences.",
        },
        {
          label: "Coincidence",
          example:
            "Magwitch turns out to be Estella's father; Molly (Jaggers's housekeeper) is Estella's mother; the second convict on the marshes is Compeyson, who jilted Miss Havisham",
          effect:
            "The dense web of coincidence connects every character to every other, arguing that in Dickens's moral universe no one is truly separate — the coincidences insist that crime, class, love, and punishment are all part of one interconnected social fabric.",
        },
        {
          label: "Dual endings",
          example:
            "Dickens originally wrote a bleak ending where Pip and Estella part; he revised it at Bulwer-Lytton's suggestion to the ambiguous ending: 'I saw no shadow of another parting from her'",
          effect:
            "The existence of two endings creates structural ambiguity — the revised ending can be read as hopeful or ironic, and the original ending's bleakness haunts the revision, refusing to let the reader settle into comfortable resolution.",
        },
        {
          label: "Cliff-hangers (serialisation)",
          example:
            "Each weekly instalment ended at a moment of tension — Magwitch's return at the end of Chapter 39 (the end of Stage 2) is the most dramatic cliff-hanger",
          effect:
            "The serialised publication format shaped the novel's structure — cliff-hangers at instalment boundaries maintained reader engagement and created a rhythm of tension and release that propels the narrative forward.",
        },
        {
          label: "Rising and falling fortunes",
          example:
            "Pip rises from blacksmith's apprentice to London gentleman, then falls into debt, illness, and moral crisis before achieving genuine (not financial) redemption",
          effect:
            "The rise-and-fall pattern inverts the expected success story — true moral growth comes through loss and suffering rather than through wealth and status, arguing that genuine gentility has nothing to do with money.",
        },
        {
          label: "Interwoven subplots",
          example:
            "Miss Havisham's revenge, Orlick's violence, Wemmick's double life, Magwitch's escape — all subplots connect to Pip's central journey of self-discovery",
          effect:
            "The interlocking subplots create a dense narrative web that mirrors the interconnectedness of Victorian society — no character exists in isolation, and every storyline illuminates a different facet of the novel's themes of class, guilt, and identity.",
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
          label: "Retrospective first-person narration",
          example:
            '"My first most vivid and broad impression of the identity of things, seems to me to have been gained on a memorable raw afternoon towards evening"',
          effect:
            "The adult Pip reconstructs his childhood with both tenderness and self-criticism — the retrospective stance allows Dickens to layer innocence with experience, creating a narrative voice that simultaneously relives and judges the past.",
        },
        {
          label: "Dramatic irony",
          example:
            "Pip believes Miss Havisham is his benefactress and that he is destined to marry Estella — the reader suspects, and the narrator knows, that neither is true",
          effect:
            "The gap between what Pip believes and what is actually true generates suspense and moral tension — dramatic irony forces the reader into the position of watching someone walk toward disaster, powerless to intervene.",
        },
        {
          label: "Unreliable narrator (young Pip's perspective)",
          example:
            '"She said it tauntingly, and she laughed contemptuously. It was very much against the grain, but I told the whole truth" — yet Pip has just told enormous lies to Mrs Joe and Pumblechook about Satis House',
          effect:
            "Young Pip's perspective is unreliable because of his shame, fear, and desire — he misreads situations, invents fantasies, and suppresses truths, requiring the reader to look beyond his narration to understand events accurately.",
        },
        {
          label: "Gothic atmosphere",
          example:
            '"In a word, I was too cowardly to do what I knew to be right, as I had been too cowardly to avoid doing what I knew to be wrong"',
          effect:
            "Gothic elements — the decaying mansion, the spectral bride, the convict on the marshes — create an atmosphere of psychological menace that externalises Pip's internal guilt and moral confusion.",
        },
        {
          label: "Comic characterisation",
          example:
            '"Wopsle had a Roman nose, and his forehead was large, and bald, and shining... And he punished the Amens tremendously"',
          effect:
            "Dickens uses comic caricature to satirise social pretension and pomposity — Wopsle's theatrical ambitions, Pumblechook's self-importance, and Mrs Joe's domestic tyranny are all rendered with savage humour that entertains while exposing vanity.",
        },
        {
          label: "Bildungsroman voice",
          example:
            '"It is a most miserable thing to feel ashamed of home" — Pip admits his growing snobbery with painful honesty',
          effect:
            "The Bildungsroman voice tracks Pip's moral and emotional growth through his own evolving language — as he matures, his narration becomes more self-aware, more critical, and ultimately more compassionate toward the people he once despised.",
        },
        {
          label: "Setting as mood",
          example:
            '"So, the mist had all solemnly risen now, and the world lay spread before me" — the final paragraph of Stage 1, as Pip leaves for London',
          effect:
            "Setting consistently reflects and amplifies emotional states — the lifting mist as Pip departs for London creates false optimism, while the reader understands that the mist obscures rather than reveals, foreshadowing the delusions that await him.",
        },
        {
          label: "Serialisation pacing",
          example:
            "Weekly instalments required each chapter to build to a compelling moment, creating a rhythm of revelation and suspense across the novel's 59 chapters",
          effect:
            "The serialised format creates a distinctive narrative rhythm — each instalment is a miniature narrative arc with its own tension and partial resolution, producing a novel that is both episodic and cumulative in its effect.",
        },
        {
          label: "Embedded stories",
          example:
            "Herbert tells Pip Miss Havisham's backstory: 'She was a spoilt child — her mother died when she was a baby, and her father denied her nothing'",
          effect:
            "Characters narrate other characters' histories, creating layers of storytelling within the main narrative — these embedded stories deepen understanding while demonstrating how identities are constructed from the stories others tell about us.",
        },
        {
          label: "Character doubles",
          example:
            "Pip and Orlick (both love Biddy, both connected to the forge); Pip and Estella (both manipulated children); Miss Havisham and Magwitch (both use Pip as an instrument of revenge or vindication)",
          effect:
            "Doubling creates structural mirrors that deepen thematic meaning — Orlick represents the violence Pip represses, Estella reflects his emotional imprisonment, and the Havisham-Magwitch parallel reveals that manipulation destroys across class boundaries.",
        },
        {
          label: "Social commentary through narrative",
          example:
            '"In the little world in which children have their existence, whosoever brings them up, there is nothing so finely perceived and so finely felt, as injustice"',
          effect:
            "The older Pip uses his retrospective position to embed social criticism within personal narrative — observations about childhood, class, and justice carry the authority of lived experience, making abstract social arguments feel emotionally urgent.",
        },
        {
          label: "Symbolism in description",
          example:
            '"It was then I began to understand that everything in the room had stopped, like the watch and the clock, a long time ago. I noticed that Miss Havisham put down the jewel exactly on the spot from which she had taken it up"',
          effect:
            "Dickens loads physical description with symbolic significance — the stopped clocks, the compulsive repetition, and the frozen room all objectify Miss Havisham's psychological state, making her trauma visible in the material world around her.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. FORM AND GENRE
    // ══════════════════════════════════════════════════════════
    {
      title: "Form and Genre",
      colour: "blue",
      columns: ["Form / Genre", "Description", "Effect"],
      rows: [
        {
          label: "Bildungsroman",
          example:
            "A coming-of-age novel tracing the protagonist's moral, psychological, and social development from childhood to maturity",
          effect:
            "The Bildungsroman form structures Pip's journey as a moral education — his 'great expectations' are gradually revealed to be false, and true maturity comes through suffering, humility, and the painful recognition of his own failings.",
        },
        {
          label: "Gothic novel elements",
          example:
            "Satis House with its decaying wedding feast, Miss Havisham as spectral bride, the convict on the tombstone-strewn marshes, Orlick's attack in the limekiln",
          effect:
            "Gothic elements externalise psychological and moral states — the decaying mansion embodies corrupted love, the marshes embody guilt, and the convict embodies the repressed violence of the class system, giving abstract themes visceral, terrifying form.",
        },
        {
          label: "Social realism",
          example:
            "Dickens depicts the criminal justice system (Newgate), child labour (Pip's apprenticeship), the class system (Pip's shame at the forge), and urban poverty (London's streets and courts)",
          effect:
            "Social realism grounds the novel's moral argument in observable Victorian life — the reader cannot dismiss Pip's experiences as fantasy because they reflect documented social conditions, giving the novel the authority of testimony as well as fiction.",
        },
        {
          label: "Serialised fiction",
          example:
            "Published in weekly instalments in Dickens's journal All the Year Round from December 1860 to August 1861",
          effect:
            "Serialisation shaped the novel's structure — each instalment needed to hook the reader, creating the cliff-hangers, revelations, and rhythmic pacing that give the novel its distinctive momentum and episodic energy.",
        },
        {
          label: "First-person confession",
          example:
            '"It is a most miserable thing to feel ashamed of home... I had believed in the forge as the glowing road to manhood and independence. Within a single year, all this was changed"',
          effect:
            "The confessional mode creates intimacy and moral honesty — Pip's willingness to expose his worst impulses (shame, snobbery, ingratitude) invites the reader's compassion rather than condemnation, modelling the self-knowledge Dickens values.",
        },
        {
          label: "Fairy tale elements (Miss Havisham)",
          example:
            "Miss Havisham as the enchantress or wicked fairy godmother; Estella as the unattainable princess; Pip as the boy chosen for transformation; Satis House as the enchanted castle",
          effect:
            "Fairy tale patterns create expectations that the novel systematically subverts — Pip expects the fairy godmother plot (rags to riches through Miss Havisham's patronage), but the truth is darker and more complex, critiquing the fantasy of effortless social elevation.",
        },
        {
          label: "Detective / mystery elements",
          example:
            "The identity of Pip's benefactor, the identity of Estella's parents, Compeyson's connection to Miss Havisham, and Molly's hidden past all function as interlocking mysteries",
          effect:
            "Mystery elements drive the plot and mirror Pip's journey of self-discovery — as he uncovers others' secrets, he simultaneously discovers uncomfortable truths about himself, making detection a metaphor for moral introspection.",
        },
        {
          label: "Moral fable",
          example:
            "The novel's central moral — that true gentility lies in kindness and loyalty, not wealth and status — is demonstrated through Pip's painful education",
          effect:
            "The moral fable structure gives the novel a clear didactic purpose — Joe and Biddy embody the virtues Pip must learn to recognise, and his suffering is presented as the necessary cost of acquiring genuine moral wisdom.",
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
          label: "The marshes",
          example:
            '"Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea"',
          effect:
            "The marshes represent Pip's origins, his conscience, and the raw authenticity he tries to escape — they are bleak and threatening but also honest, and his return to them signals his moral recovery and acceptance of his true self.",
        },
        {
          label: "Satis House",
          example:
            '"Satis House. Which is Greek, or Latin, or Hebrew, or all three — or all one to me — for enough" — but it is never enough for those who enter',
          effect:
            "Satis House ironically means 'enough,' yet it is a place of perpetual dissatisfaction — Miss Havisham's frozen grief, Estella's inability to love, and Pip's insatiable longing all demonstrate that the house breeds only want, never satisfaction.",
        },
        {
          label: "Miss Havisham's wedding dress",
          example:
            '"She was dressed in rich materials... all of white... But, I saw that everything... which ought to be white, had been white long ago, and had lost its lustre, and was faded and yellow"',
          effect:
            "The decaying wedding dress symbolises corrupted love and the impossibility of freezing time — Miss Havisham's attempt to preserve her moment of betrayal only produces rot, demonstrating that grief without resolution destroys from within.",
        },
        {
          label: "The forge",
          example:
            '"Joe was a mild, good-natured, sweet-tempered, easy-going, dear fellow" who works at the forge with dignity and contentment',
          effect:
            "The forge symbolises honest labour, moral warmth, and genuine human connection — its fire is creative and life-sustaining, in direct contrast to the cold, dead hearth of Satis House, making it the novel's moral centre.",
        },
        {
          label: "Chains / shackles",
          example:
            '"The man, after looking at me for a moment, turned me upside down, and emptied my pockets... He held me by the arms, in an iron grip"',
          effect:
            "Chains and shackles connect Pip to the convict world from the novel's opening — they symbolise the hidden bonds of guilt, obligation, and class that link characters across social boundaries, insisting that no one is free from connection to others.",
        },
        {
          label: "Mist / fog",
          example:
            '"The mist was heavier yet when I got out upon the marshes, so that instead of my running at everything, everything seemed to run at me"',
          effect:
            "Mist symbolises moral confusion, obscured truth, and self-deception — Pip literally cannot see clearly on the marshes, just as he cannot see the truth about his benefactor, his values, or himself until the mist of false expectations lifts.",
        },
        {
          label: "Stars",
          example:
            '"And then I looked at the stars, and considered how awful it would be for a man to turn his face up to them as he froze to death"',
          effect:
            "Stars represent the vast indifference of the universe and the distance between aspiration and reality — Pip looks up at them in moments of moral crisis, and their cold beauty reflects the gap between his dreams and his circumstances.",
        },
        {
          label: "The pale young gentleman (Herbert)",
          example:
            '"Come and fight" — Herbert challenges Pip in the garden of Satis House, then becomes his closest friend and moral compass in London',
          effect:
            "Herbert's transformation from comic opponent to loyal friend mirrors Pip's own potential for change — Herbert represents what a true gentleman looks like: generous, kind, and honourable despite his modest means.",
        },
        {
          label: "The convict's leg iron",
          example:
            '"A file and some wittles" — Pip steals food and a file for Magwitch, and the leg iron later becomes the weapon Orlick uses to attack Mrs Joe',
          effect:
            "The leg iron physically connects Pip's act of compassion to the violence that follows — it symbolises the way guilt and consequence travel through the novel, linking seemingly separate events in an inescapable chain of cause and effect.",
        },
        {
          label: "Fire",
          example:
            '"I saw her running at me, shrieking, with a whirl of fire blazing all about her" — Miss Havisham catches fire in her decaying wedding dress',
          effect:
            "Fire is both creative (the forge) and destructive (Satis House burning) — Miss Havisham's immolation is simultaneously her punishment and her purification, as the fire that destroys her dress also finally releases her from her frozen grief.",
        },
        {
          label: "The river Thames",
          example:
            '"Old London Bridge was soon passed, and old Billingsgate market with its oyster-boats... and then the tiers of shipping"',
          effect:
            "The Thames represents the flow of time, commerce, and escape — Pip and Magwitch's attempt to flee down the river is both a literal escape plan and a symbolic journey toward truth, as the river carries them toward the confrontation that will determine both their fates.",
        },
        {
          label: "Food and feasting",
          example:
            '"He was gobbling mincemeat, meatbone, bread, cheese, and pork pie, all at once" — Magwitch eating on the marshes; later the cold, formal dinners in London',
          effect:
            "Food marks class boundaries throughout the novel — Magwitch's desperate animal eating, Mrs Joe's punitive feeding of Pip, the Pocket family's chaotic meals, and the elaborate but joyless London dinners all reveal how class determines even the most basic human experiences.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Conceptual Method", "Description", "Example / Application"],
      rows: [
        {
          label: "Social class and mobility",
          example:
            "Pip's journey from blacksmith's apprentice to London gentleman exposes the mechanisms and costs of social climbing in Victorian England",
          effect:
            "Dickens critiques the belief that changing class changes character — Pip gains wealth and manners but loses kindness and loyalty, proving that social mobility without moral growth produces only a more refined form of unhappiness.",
        },
        {
          label: "Gentleman vs gentility",
          example:
            '"No varnish can hide the grain of the wood; and... the more varnish you put on, the more the grain will express itself" — Joe is the true gentleman despite his lack of polish',
          effect:
            "The novel systematically dismantles the equation of wealth with virtue — Joe, who cannot read, possesses more genuine gentility than Pip or Compeyson, arguing that true gentlemanliness is a quality of character, not class.",
        },
        {
          label: "Crime and punishment",
          example:
            "Magwitch is transported to Australia for his crimes but is punished far more harshly than his partner Compeyson, who is a gentleman — 'He had been to a public boarding-school and had learnt... to put a good face upon it'",
          effect:
            "The criminal justice system punishes the poor more severely than the rich for the same crimes — Dickens exposes class bias in the law, arguing that Compeyson's education and appearance protect him from the consequences that fall disproportionately on Magwitch.",
        },
        {
          label: "Guilt and redemption",
          example:
            '"In a word, I was too cowardly to do what I knew to be right, as I had been too cowardly to avoid doing what I knew to be wrong"',
          effect:
            "Guilt drives Pip throughout the novel — from his childhood theft for Magwitch to his adult shame at Joe's visit — and redemption comes only through acknowledging that guilt and making amends, not through wealth or social status.",
        },
        {
          label: "Nature vs nurture",
          example:
            "Estella is raised to be heartless by Miss Havisham but is the biological daughter of Magwitch and Molly — her nature and nurture pull in different directions",
          effect:
            "Dickens explores whether character is determined by birth or upbringing — Estella's case suggests that nurture is the more powerful force, but the novel's dual endings leave open whether its damage can ever be fully undone.",
        },
        {
          label: "Victorian class system",
          example:
            '"He calls the knaves, Jacks, this boy!" — Estella\'s contempt for Pip\'s common language at their first meeting reveals how class is inscribed in the smallest details of speech and behaviour',
          effect:
            "Dickens maps the class system in granular detail — from vocabulary to table manners to clothing — showing how it produces shame in those below and contempt in those above, damaging everyone it touches regardless of their position.",
        },
        {
          label: "Moral growth",
          example:
            '"That poor dream, as I once used to call it, has all gone by, Biddy, all gone by!" — Pip finally accepts the loss of his false expectations and values genuine human connection',
          effect:
            "The novel argues that moral growth requires the destruction of false expectations — Pip must lose everything he thought he wanted before he can recognise the value of what he already had: Joe's love, Biddy's wisdom, and honest work.",
        },
        {
          label: "The self-made man myth",
          example:
            "Pip believes he has been singled out for greatness by Miss Havisham — in reality, his wealth comes from a convict, and his social elevation is funded by crime and transportation",
          effect:
            "Dickens demolishes the Victorian myth of meritocratic self-improvement — Pip's 'great expectations' are not earned but given, and the source of his wealth exposes the hypocrisy of a society that celebrates gentility while ignoring its origins in exploitation.",
        },
        {
          label: "Empire and transportation",
          example:
            '"I was made a gentleman! A dunghill dog! A convict\'s dog!" — but Magwitch made his fortune in the colonies and used it to create Pip',
          effect:
            "Transportation to Australia is presented as both punishment and opportunity — Magwitch's colonial wealth funds Pip's English gentility, revealing the uncomfortable truth that the British class system was sustained by the exploitation of the empire's penal colonies.",
        },
        {
          label: "Child labour / poverty",
          example:
            '"I struggled through the alphabet as if it had been a bramble-bush; getting considerably worried and scratched by every letter" — Pip\'s education at Wopsle\'s great-aunt\'s school is almost useless',
          effect:
            "Dickens depicts the inadequacy of education and opportunity available to working-class children — Pip's early life of hard labour and poor schooling exposes the systemic neglect of the poor, while his later education comes only through wealth, not merit.",
        },
        {
          label: "Appearance vs reality",
          example:
            "Miss Havisham appears to be Pip's benefactress but is actually using him; Estella appears to be a high-born lady but is actually a convict's daughter; Compeyson appears gentlemanly but is a criminal",
          effect:
            "The novel relentlessly exposes the gap between surface and truth — every character who appears respectable conceals a darker reality, arguing that Victorian society's obsession with appearances actively hides the moral truth about its members.",
        },
        {
          label: "Gratitude and loyalty",
          example:
            '"God bless this gentle Christian man!" — Pip at Magwitch\'s deathbed, finally recognising his benefactor\'s love and sacrifice',
          effect:
            "Pip's moral education culminates in learning gratitude — his initial horror at Magwitch gives way to genuine love, and his loyalty at the deathbed proves he has finally become the gentleman Magwitch always believed him to be, not in class but in character.",
        },
      ],
    },
  ],
};
