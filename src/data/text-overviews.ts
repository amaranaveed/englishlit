// ─── Text overview metadata: themes, characters, context ───

export interface TextOverview {
  slug: string;
  themes: string[];
  characters: { name: string; role: string }[];
  contextSummary: string;
}

export const TEXT_OVERVIEWS: TextOverview[] = [
  {
    slug: "much-ado",
    themes: [
      "Deception & Appearance vs Reality",
      "Honour & Shame",
      "Gender & Power",
      "Love (Conventional vs Unconventional)",
      "Language & Wit",
      "Loyalty & Friendship",
      "Patriarchal Control",
    ],
    characters: [
      { name: "Beatrice", role: "Witty, independent niece of Leonato; rejects courtship conventions" },
      { name: "Benedick", role: "Proud soldier who mirrors Beatrice's resistance to love" },
      { name: "Hero", role: "Leonato's obedient daughter; embodies the ideal Elizabethan woman" },
      { name: "Claudio", role: "Young soldier; honourable but easily manipulated" },
      { name: "Don Pedro", role: "Prince of Aragon; orchestrates the gulling scenes" },
      { name: "Don John", role: "Illegitimate brother; the malcontent antagonist" },
      { name: "Leonato", role: "Governor of Messina; Hero's father, upholds patriarchal honour" },
      { name: "Dogberry", role: "Comically inept constable; uncovers the villainy" },
    ],
    contextSummary:
      "Set in Messina after a military campaign, the play explores Elizabethan anxieties about female virtue, patriarchal honour codes, and the tension between public reputation and private feeling. Shakespeare wrote it c.1598–99 during a period of comedic experimentation, drawing on Italian sources while interrogating gender norms of his own society.",
  },
  {
    slug: "pride-prejudice",
    themes: [
      "Pride & Prejudice (Self-Knowledge)",
      "Class & Social Mobility",
      "Marriage & Economics",
      "Gender & Female Agency",
      "Appearance vs Reality",
      "Moral Growth",
      "Family & Reputation",
    ],
    characters: [
      { name: "Elizabeth Bennet", role: "Quick-witted protagonist; challenges class and gender conventions" },
      { name: "Mr Darcy", role: "Proud, wealthy gentleman who must overcome social prejudice" },
      { name: "Jane Bennet", role: "Elizabeth's kind eldest sister; represents conventional feminine virtue" },
      { name: "Mr Bingley", role: "Amiable, wealthy bachelor; contrasts Darcy's reserve" },
      { name: "Mrs Bennet", role: "Comic matriarch obsessed with marrying off her daughters" },
      { name: "Mr Bennet", role: "Sardonic, detached father; retreats into irony" },
      { name: "Mr Collins", role: "Obsequious clergyman; embodies transactional marriage" },
      { name: "Lady Catherine de Bourgh", role: "Darcy's imperious aunt; enforces rigid class hierarchy" },
      { name: "Wickham", role: "Charming but deceitful; represents appearance vs reality" },
      { name: "Lydia Bennet", role: "Reckless youngest sister; brings family disgrace" },
    ],
    contextSummary:
      "Published in 1813 during the Regency period, the novel critiques the marriage market, entailment laws that excluded women from inheriting property, and the rigid class stratification of early 19th-century England. Austen uses free indirect discourse and irony to expose the gap between social performance and inner truth.",
  },
  {
    slug: "macbeth",
    themes: [
      "Ambition",
      "Guilt & Conscience",
      "Appearance vs Reality",
      "Supernatural",
      "Fate vs Free Will",
      "Gender & Power",
      "Moral Corruption",
      "Kingship & Tyranny",
    ],
    characters: [
      { name: "Macbeth", role: "Ambitious thane whose pursuit of power leads to tyranny and self-destruction" },
      { name: "Lady Macbeth", role: "Macbeth's wife; drives the murder plot but is ultimately destroyed by guilt" },
      { name: "The Witches", role: "Three supernatural figures whose prophecies ignite Macbeth's ambition" },
      { name: "Banquo", role: "Macbeth's fellow soldier; resists temptation and serves as his moral foil" },
      { name: "King Duncan", role: "The virtuous king whose murder disrupts the natural and divine order" },
      { name: "Macduff", role: "Noble thane who ultimately defeats Macbeth and restores legitimate rule" },
      { name: "Malcolm", role: "Duncan's son and rightful heir; represents the restoration of order" },
      { name: "Lady Macduff", role: "Her murder and her children's deaths demonstrate Macbeth's descent into tyranny" },
    ],
    contextSummary:
      "Written c.1606 for King James I (who had survived the Gunpowder Plot), Macbeth explores the catastrophic consequences of regicide through the lens of Jacobean beliefs about divine right, witchcraft, and the Great Chain of Being. Shakespeare drew on Holinshed's Chronicles but transformed the historical Macbeth into a study of ambition, guilt, and moral disintegration.",
  },
  {
    slug: "christmas-carol",
    themes: [
      "Greed & Generosity",
      "Social Responsibility",
      "Redemption",
      "Class & Poverty",
      "Family & Isolation",
      "Christmas & Community",
      "Education & Ignorance",
    ],
    characters: [
      { name: "Ebenezer Scrooge", role: "Miserly protagonist who transforms from cold-hearted capitalist to generous benefactor" },
      { name: "Bob Cratchit", role: "Scrooge's underpaid clerk; represents the exploited working class" },
      { name: "Tiny Tim", role: "Bob's disabled son; embodies the innocent victims of social neglect" },
      { name: "Jacob Marley", role: "Scrooge's dead partner; returns as a ghost to warn of damnation" },
      { name: "Ghost of Christmas Past", role: "Spirit revealing Scrooge's formative memories and lost innocence" },
      { name: "Ghost of Christmas Present", role: "Jovial spirit showing the reality of poverty and celebration in the present" },
      { name: "Ghost of Christmas Yet to Come", role: "Silent, hooded spirit showing the terrifying consequences of an unchanged life" },
      { name: "Fred", role: "Scrooge's cheerful nephew; represents family warmth and unconditional love" },
    ],
    contextSummary:
      "Published in 1843 during the height of industrialisation, the novella was Dickens' response to appalling poverty, exploitative child labour, and the punitive Poor Law of 1834. He chose fiction over polemic, believing stories could change hearts more effectively than pamphlets. The book helped shape the modern idea of Christmas as a time of generosity and social conscience.",
  },
  {
    slug: "inspector-calls",
    themes: [
      "Social Responsibility",
      "Class & Power",
      "Generational Divide",
      "Gender & Exploitation",
      "Morality & Judgement",
      "Socialism vs Capitalism",
      "Family & Dysfunction",
    ],
    characters: [
      { name: "Inspector Goole", role: "Mysterious investigator who exposes each family member's role in Eva Smith's death" },
      { name: "Mr Birling", role: "Wealthy industrialist; represents capitalist arrogance and moral blindness" },
      { name: "Mrs Birling", role: "Snobbish wife; refuses charity to Eva based on class prejudice" },
      { name: "Sheila Birling", role: "Daughter who undergoes genuine moral awakening and accepts responsibility" },
      { name: "Eric Birling", role: "Son whose drinking and exploitation of Eva is exposed; capable of change" },
      { name: "Gerald Croft", role: "Sheila's fiancé; had an affair with Eva that he frames as rescue" },
      { name: "Eva Smith / Daisy Renton", role: "Working-class woman destroyed by the Birlings; never appears on stage" },
    ],
    contextSummary:
      "Written in 1945 but set in 1912, the play exploits the gap between these dates to create devastating dramatic irony. Priestley — a committed socialist — wrote it as the 1945 Labour government was creating the welfare state. The play is a political argument for collective responsibility, using the Birling family as a microcosm of a class system that Priestley believed had to change.",
  },
  {
    slug: "jekyll-hyde",
    themes: [
      "Duality",
      "Appearance vs Reality",
      "Victorian Repression",
      "Science & Morality",
      "Moral Corruption",
      "Identity",
      "Secrecy & Concealment",
    ],
    characters: [
      { name: "Dr Henry Jekyll", role: "Respectable scientist who creates a potion to separate his good and evil natures" },
      { name: "Mr Edward Hyde", role: "Jekyll's alter ego; embodies pure evil, violence, and unrestrained desire" },
      { name: "Mr Utterson", role: "Jekyll's lawyer and friend; rational, loyal investigator of the mystery" },
      { name: "Dr Lanyon", role: "Jekyll's colleague; dies of shock after witnessing Hyde's transformation" },
      { name: "Mr Enfield", role: "Utterson's kinsman; first witness to Hyde's violence" },
      { name: "Poole", role: "Jekyll's loyal butler; raises the alarm about his master's transformation" },
    ],
    contextSummary:
      "Published in 1886, the novella reflects late-Victorian anxieties about evolution (Darwin), degeneration theory, and the rigid moral codes that demanded public respectability while concealing private vice. Set in London's fog-shrouded streets, it explores the duality of human nature through a Gothic lens, questioning whether civilisation's surface conceals a primitive self that science cannot control.",
  },
  {
    slug: "romeo-juliet",
    themes: [
      "Love (Romantic & Destructive)",
      "Fate & Destiny",
      "Conflict & Violence",
      "Family & Honour",
      "Youth vs Age",
      "Light & Dark",
      "Death & Sacrifice",
    ],
    characters: [
      { name: "Romeo", role: "Young Montague who falls passionately in love with Juliet; impulsive and poetic" },
      { name: "Juliet", role: "Capulet daughter who defies family loyalty for love; matures rapidly throughout the play" },
      { name: "Tybalt", role: "Juliet's fiery cousin; embodiment of the feud's destructive honour code" },
      { name: "Mercutio", role: "Romeo's witty friend; his death marks the play's turn from comedy to tragedy" },
      { name: "Friar Lawrence", role: "Well-meaning priest whose plan to reunite the lovers ultimately fails" },
      { name: "The Nurse", role: "Juliet's confidante; comic but ultimately abandons Juliet when it matters most" },
      { name: "Lord Capulet", role: "Juliet's father; exercises patriarchal control over her marriage" },
      { name: "Paris", role: "Noble suitor approved by Capulet; represents the conventional marriage Juliet rejects" },
    ],
    contextSummary:
      "Written c.1597, the play draws on Arthur Brooke's poem and explores Elizabethan tensions around arranged marriage, family honour, and youthful rebellion. Shakespeare subverts the Petrarchan love tradition while reflecting contemporary anxieties about patriarchal authority and street violence in rapidly growing cities.",
  },
  {
    slug: "tempest",
    themes: [
      "Power & Control",
      "Colonialism & Freedom",
      "Magic & the Supernatural",
      "Forgiveness & Reconciliation",
      "Nature vs Nurture",
      "Illusion & Reality",
      "Authority & Rebellion",
    ],
    characters: [
      { name: "Prospero", role: "Exiled Duke of Milan; uses magic to control the island and orchestrate his revenge" },
      { name: "Miranda", role: "Prospero's sheltered daughter; embodies innocence and compassion" },
      { name: "Ariel", role: "Airy spirit enslaved by Prospero; longs for freedom" },
      { name: "Caliban", role: "Native inhabitant of the island; colonised and enslaved by Prospero" },
      { name: "Ferdinand", role: "Prince of Naples; falls in love with Miranda and proves his worthiness" },
      { name: "Alonso", role: "King of Naples; complicit in Prospero's exile but ultimately repents" },
      { name: "Gonzalo", role: "Loyal old counsellor who helped Prospero survive his exile" },
      { name: "Trinculo & Stephano", role: "Comic drunkards who plot with Caliban; parody the main power struggle" },
    ],
    contextSummary:
      "Written c.1611 and considered Shakespeare's farewell to the stage, The Tempest engages with early colonial encounters in the New World. Written during the expansion of the Virginia Company, it reflects Jacobean debates about mastery, servitude, and the ethics of empire, while the metatheatrical epilogue sees Prospero relinquish his art — often read as Shakespeare's own farewell.",
  },
  {
    slug: "merchant-venice",
    themes: [
      "Justice & Mercy",
      "Prejudice & Discrimination",
      "Wealth & Greed",
      "Appearance vs Reality",
      "Love & Friendship",
      "Revenge & Forgiveness",
      "Outsiders & Belonging",
    ],
    characters: [
      { name: "Shylock", role: "Jewish moneylender; both villain and victim of Christian prejudice" },
      { name: "Portia", role: "Wealthy heiress who disguises as a lawyer; delivers the mercy speech" },
      { name: "Antonio", role: "The merchant who borrows from Shylock; melancholic and self-sacrificing" },
      { name: "Bassanio", role: "Antonio's friend who courts Portia; charming but financially reckless" },
      { name: "Jessica", role: "Shylock's daughter who elopes with Lorenzo; raises questions about loyalty" },
      { name: "Nerissa", role: "Portia's lady-in-waiting and confidante; mirrors her mistress's intelligence" },
      { name: "Gratiano", role: "Bassanio's outspoken friend; provides comic relief but also casual cruelty" },
    ],
    contextSummary:
      "Written c.1596–98, the play reflects Elizabethan England's complex attitudes toward Jews (expelled in 1290, not readmitted until 1656) and the growing tension between mercantile capitalism and older feudal values. Shakespeare draws on anti-Semitic source material but complicates it, giving Shylock the famous 'Hath not a Jew eyes?' speech that demands recognition of shared humanity.",
  },
  {
    slug: "julius-caesar",
    themes: [
      "Political Power & Ambition",
      "Loyalty & Betrayal",
      "Rhetoric & Persuasion",
      "Honour & Duty",
      "Fate vs Free Will",
      "Public vs Private Self",
      "Republic vs Tyranny",
    ],
    characters: [
      { name: "Brutus", role: "Noble Roman who joins the conspiracy out of duty to the republic; tragic hero" },
      { name: "Julius Caesar", role: "Powerful leader whose ambition threatens Roman democracy; assassinated at the Senate" },
      { name: "Mark Antony", role: "Caesar's loyal friend; masterful orator who turns the crowd against the conspirators" },
      { name: "Cassius", role: "Shrewd manipulator who recruits Brutus; driven by envy as much as principle" },
      { name: "Portia", role: "Brutus's wife; strong-willed woman who demands to share his burdens" },
      { name: "Calpurnia", role: "Caesar's wife; her prophetic dreams foreshadow his assassination" },
      { name: "Octavius", role: "Caesar's adopted heir; cold, calculating future emperor" },
    ],
    contextSummary:
      "Written in 1599, the play reflects Elizabethan anxieties about succession, political instability, and the ethics of deposing a ruler — topical concerns as the ageing, childless Elizabeth I neared the end of her reign. Shakespeare used Plutarch's Lives as his source, exploring how republican ideals can be corrupted by personal ambition and mob mentality.",
  },
  {
    slug: "great-expectations",
    themes: [
      "Social Class & Ambition",
      "Guilt & Redemption",
      "Identity & Self-Improvement",
      "Wealth & Moral Worth",
      "Crime & Justice",
      "Loyalty & Gratitude",
      "Appearance vs Reality",
    ],
    characters: [
      { name: "Pip", role: "Orphan narrator whose desire to become a gentleman leads to moral compromise" },
      { name: "Estella", role: "Miss Havisham's ward; raised to break men's hearts, struggles with her own emotions" },
      { name: "Miss Havisham", role: "Wealthy recluse frozen in time; manipulates Estella as revenge on men" },
      { name: "Abel Magwitch", role: "Convict and Pip's secret benefactor; challenges assumptions about class and worth" },
      { name: "Joe Gargery", role: "Pip's brother-in-law and moral compass; represents honest labour and loyalty" },
      { name: "Herbert Pocket", role: "Pip's best friend in London; kind, honest, and practical" },
      { name: "Jaggers", role: "Powerful lawyer who manages Pip's expectations; morally ambiguous" },
      { name: "Compeyson", role: "Gentleman criminal who jilted Miss Havisham; Magwitch's nemesis" },
    ],
    contextSummary:
      "Published as a serial in 1860–61, the novel reflects Dickens's critique of mid-Victorian class snobbery, the criminal justice system, and the false equation of wealth with worth. Drawing on his own experiences of poverty and social aspiration, Dickens examines how the desire to rise in class can corrupt moral values and sever genuine human connections.",
  },
  {
    slug: "frankenstein",
    themes: [
      "Dangerous Knowledge",
      "Creation & Responsibility",
      "Isolation & Alienation",
      "Nature vs Nurture",
      "Ambition & Hubris",
      "Monstrosity & Prejudice",
      "The Sublime & Gothic",
    ],
    characters: [
      { name: "Victor Frankenstein", role: "Ambitious scientist who creates life but abandons his creation" },
      { name: "The Creature", role: "Frankenstein's creation; intelligent and emotional but rejected by society" },
      { name: "Robert Walton", role: "Arctic explorer and narrator; mirrors Victor's dangerous ambition" },
      { name: "Elizabeth Lavenza", role: "Victor's adopted cousin and fiancée; victim of the Creature's revenge" },
      { name: "Henry Clerval", role: "Victor's loyal friend; represents the humane side of intellectual pursuit" },
      { name: "Justine Moritz", role: "Wrongly executed servant; demonstrates the failures of justice" },
    ],
    contextSummary:
      "Published in 1818 when Mary Shelley was just 20, the novel emerged from Romantic debates about galvanism, the limits of science, and the ethics of creation. Written during the Industrial Revolution and in the shadow of the French Revolution, it questions whether progress without moral responsibility creates monsters — both literal and metaphorical.",
  },
  {
    slug: "jane-eyre",
    themes: [
      "Gender & Independence",
      "Social Class & Inequality",
      "Love & Passion",
      "Religion & Morality",
      "The Gothic & Supernatural",
      "Identity & Self-Respect",
      "Colonialism & Race",
    ],
    characters: [
      { name: "Jane Eyre", role: "Orphaned protagonist who fights for independence, equality, and moral integrity" },
      { name: "Edward Rochester", role: "Byronic hero and Jane's employer; passionate but concealing a dark secret" },
      { name: "Bertha Mason", role: "Rochester's first wife, locked in the attic; represents the 'madwoman' and colonial exploitation" },
      { name: "St John Rivers", role: "Clergyman who proposes a loveless marriage; represents cold religious duty" },
      { name: "Mrs Reed", role: "Jane's cruel aunt who embodies class hypocrisy" },
      { name: "Helen Burns", role: "Jane's school friend; embodies patient Christian endurance" },
      { name: "Mr Brocklehurst", role: "Hypocritical clergyman who runs Lowood school with cruelty" },
    ],
    contextSummary:
      "Published in 1847 under the pseudonym Currer Bell, the novel challenged Victorian gender norms by presenting a plain, poor heroine who insists on equality in love and refuses to compromise her moral autonomy. Brontë drew on her own experiences at harsh boarding schools and as a governess to explore the intersections of class, gender, and religious hypocrisy in 19th-century England.",
  },
  {
    slug: "sign-of-four",
    themes: [
      "Justice & the Law",
      "Empire & Colonialism",
      "Greed & Treasure",
      "Science & Reason",
      "Duality & Addiction",
      "Class & Social Mobility",
      "Loyalty & Betrayal",
    ],
    characters: [
      { name: "Sherlock Holmes", role: "Brilliant detective driven by logic and reason; struggles with boredom and cocaine use" },
      { name: "Dr John Watson", role: "Holmes's loyal companion and narrator; represents Victorian moral values" },
      { name: "Mary Morstan", role: "The client who brings the case; independent, brave, and Watson's future wife" },
      { name: "Jonathan Small", role: "The villain; a complex figure shaped by colonial exploitation and betrayal" },
      { name: "Thaddeus Sholto", role: "Nervous, artistic twin who contacts Mary about her inheritance" },
      { name: "Tonga", role: "Small's companion from the Andaman Islands; exoticised by the narrative" },
    ],
    contextSummary:
      "Published in 1890, the novella reflects the height of the British Empire and Victorian anxieties about colonial wealth, racial otherness, and the darker consequences of imperialism. Conan Doyle uses the detective genre to explore how treasures plundered from India breed greed, violence, and moral corruption at home, while Holmes's cocaine habit hints at the ennui beneath Victorian respectability.",
  },
  {
    slug: "blood-brothers",
    themes: [
      "Social Class & Inequality",
      "Nature vs Nurture",
      "Fate & Superstition",
      "Motherhood & Sacrifice",
      "Friendship & Betrayal",
      "Unemployment & Poverty",
      "Identity & Belonging",
    ],
    characters: [
      { name: "Mrs Johnstone", role: "Working-class mother forced to give up one of her twins; warm, superstitious, and self-sacrificing" },
      { name: "Mickey", role: "Twin raised by Mrs Johnstone; spirited as a child but destroyed by poverty and unemployment" },
      { name: "Edward (Eddie)", role: "Twin raised by the Lyons family; privileged, confident, and well-educated" },
      { name: "Mrs Lyons", role: "Wealthy, neurotic woman who raises Edward; increasingly paranoid and manipulative" },
      { name: "Linda", role: "Mickey's childhood sweetheart and wife; trapped between loyalty and despair" },
      { name: "The Narrator", role: "Omniscient chorus figure who foreshadows doom and comments on fate and class" },
      { name: "Sammy", role: "Mickey's older brother; represents the criminal path poverty can force" },
    ],
    contextSummary:
      "First performed in 1983, the musical was written during Thatcher's Britain when mass unemployment, deindustrialisation, and the North-South divide were devastating working-class communities. Russell, himself from a Liverpool working-class background, uses the twin conceit to argue that class — not genetics — determines life outcomes, making it a powerful socialist parable.",
  },
  {
    slug: "animal-farm",
    themes: [
      "Power & Corruption",
      "Revolution & Betrayal",
      "Propaganda & Language",
      "Class & Inequality",
      "Education & Ignorance",
      "Leadership & Tyranny",
      "Idealism vs Reality",
    ],
    characters: [
      { name: "Napoleon", role: "Pig who seizes power; represents Stalin and the corruption of revolutionary ideals" },
      { name: "Snowball", role: "Intelligent pig expelled by Napoleon; represents Trotsky and lost idealism" },
      { name: "Boxer", role: "Loyal, hardworking horse; represents the exploited working class" },
      { name: "Squealer", role: "Napoleon's propagandist pig; manipulates language to control the animals" },
      { name: "Old Major", role: "Visionary boar who inspires the revolution; represents Marx/Lenin" },
      { name: "Benjamin", role: "Cynical donkey who sees through the pigs' lies but refuses to act" },
      { name: "Clover", role: "Gentle mare who senses injustice but lacks the words to challenge it" },
      { name: "Mr Jones", role: "The neglectful farmer overthrown by the animals; represents Tsar Nicholas II" },
    ],
    contextSummary:
      "Published in 1945, the novella is an allegory of the Russian Revolution and Stalin's betrayal of socialist ideals. Orwell, a democratic socialist disillusioned by Soviet totalitarianism, wrote it to expose how revolutions can be hijacked by those who seek power for its own sake. The fable form makes its political critique accessible while the final line — 'impossible to say which was which' — warns that all unchecked power systems converge.",
  },
  {
    slug: "lord-of-flies",
    themes: [
      "Civilisation vs Savagery",
      "Power & Leadership",
      "Fear & the Beast",
      "Innocence & Evil",
      "Order vs Chaos",
      "Mob Mentality",
      "The Darkness of Human Nature",
    ],
    characters: [
      { name: "Ralph", role: "Elected leader who represents democracy, order, and civilisation" },
      { name: "Jack", role: "Choirboy-turned-hunter who represents savagery, authoritarianism, and the desire for power" },
      { name: "Piggy", role: "Ralph's intellectual ally; represents reason and science but is marginalised and killed" },
      { name: "Simon", role: "Quiet, spiritual boy who discovers the truth about the beast; a Christ-like figure" },
      { name: "Roger", role: "Sadistic follower of Jack; represents the extreme of human cruelty when unchecked" },
      { name: "Sam and Eric", role: "Loyal twins who eventually succumb to Jack's regime under pressure" },
    ],
    contextSummary:
      "Published in 1954 in the shadow of World War II, the Holocaust, and the atomic bomb, the novel is Golding's response to the optimistic Victorian boys' adventure story. Having served in the Royal Navy and witnessed human brutality firsthand, Golding rejected the idea that children (or humans) are inherently good, arguing instead that civilisation is a fragile veneer over innate savagery.",
  },
  {
    slug: "taste-of-honey",
    themes: [
      "Class & Poverty",
      "Motherhood & Neglect",
      "Race & Prejudice",
      "Gender & Sexuality",
      "Youth & Independence",
      "Love & Rejection",
      "Home & Belonging",
    ],
    characters: [
      { name: "Jo", role: "Teenage protagonist; sharp, independent, and determined to escape her mother's mistakes" },
      { name: "Helen", role: "Jo's neglectful, hard-drinking mother; prioritises men over her daughter" },
      { name: "Peter", role: "Helen's brash, younger boyfriend; represents her escape from responsibility" },
      { name: "Jimmie (The Boy)", role: "Black sailor who has a brief relationship with Jo; challenges 1950s racial attitudes" },
      { name: "Geof", role: "Gay art student who cares for pregnant Jo; challenges 1950s gender and sexuality norms" },
    ],
    contextSummary:
      "Written in 1958 by 18-year-old Shelagh Delaney, the play is a landmark of the 'kitchen sink' realism movement. Set in the working-class terraces of Salford, it broke theatrical taboos by centring an interracial relationship, a gay character, and teenage pregnancy on a mainstream stage. Delaney wrote it after watching a Rattigan play and deciding she could do better — and she did, giving voice to communities and experiences that 1950s theatre largely ignored.",
  },
];

export function getTextOverview(slug: string): TextOverview | undefined {
  return TEXT_OVERVIEWS.find((t) => t.slug === slug);
}
