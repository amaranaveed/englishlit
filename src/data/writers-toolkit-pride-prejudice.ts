// ─── Writer's Toolkit — Pride and Prejudice (Jane Austen) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const PRIDE_PREJUDICE_TOOLKIT: WritersToolkit = {
  textSlug: "pride-prejudice",
  headerQuote:
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
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
          label: "Irony",
          example:
            '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"',
          effect:
            "Austen's opening line is the novel's defining ironic statement — the 'universal truth' is immediately undercut because it is not the man who wants a wife but the neighbourhood mothers who want him for their daughters. Irony becomes Austen's primary moral instrument, exposing the gap between social performance and genuine feeling.",
        },
        {
          label: "Free indirect discourse",
          example:
            '"She is tolerable; but not handsome enough to tempt me" — Darcy\'s words filtered through Elizabeth\'s wounded consciousness',
          effect:
            "Austen blends the narrator's voice with Elizabeth's perspective, allowing the reader to experience events through Elizabeth's prejudice without the narrator explicitly endorsing it. This technique creates intimacy while preserving ironic distance, inviting the reader to question whose judgement they are trusting.",
        },
        {
          label: "Wit / epigram",
          example:
            '"For what do we live, but to make sport for our neighbours, and laugh at them in our turn?"',
          effect:
            "Mr Bennet's epigrammatic wit encapsulates Austen's comedic worldview — social life is a performance to be observed and satirised. However, his detached amusement also reveals his failure as a father, suggesting that wit without responsibility is morally insufficient.",
        },
        {
          label: "Dialogue",
          example:
            '"You are too generous to trifle with me. If your feelings are still what they were last April, tell me so at once. My affections and wishes are unchanged"',
          effect:
            "Austen uses dialogue as the primary vehicle for character revelation — Darcy's second proposal replaces the arrogance of his first with vulnerable directness. The shift in his speech patterns from commanding to tentative measures the full arc of his moral growth.",
        },
        {
          label: "Hyperbole",
          example:
            '"She is the most beautiful creature I ever beheld!" — Bingley on Jane at the Meryton ball',
          effect:
            "Bingley's immediate superlatives reveal his warm but impressionable nature — his feelings are genuine but lack the depth of considered judgement. Austen uses hyperbole throughout to distinguish superficial enthusiasm from the harder-won appreciation that defines true understanding.",
        },
        {
          label: "Antithesis",
          example:
            '"I could easily forgive his pride, if he had not mortified mine" — Elizabeth on Darcy',
          effect:
            "The balanced opposition of 'his pride' and 'mine' reveals that Elizabeth's judgement of Darcy is driven by personal affront rather than objective assessment. Austen's antithetical structures consistently expose the self-interest that masquerades as moral reasoning.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"And this is all the reply which I am to have the honour of expecting! I might, perhaps, wish to be informed why, with so little endeavour at civility, I am thus rejected?"',
          effect:
            "Darcy's rhetorical questions during his first proposal betray his astonishment that anyone could refuse him — the formal politeness of 'honour' and 'civility' barely conceals his wounded pride. His inability to imagine rejection reveals how class privilege has insulated him from self-awareness.",
        },
        {
          label: "Understatement",
          example:
            '"I have been a selfish being all my life, in practice, though not in principle" — Darcy',
          effect:
            "Darcy's understated confession of lifelong selfishness is more powerful than any dramatic declaration — Austen rewards restraint over excess. The distinction between 'practice' and 'principle' captures the novel's central argument that good intentions without self-examination are worthless.",
        },
        {
          label: "Satirical tone",
          example:
            '"Mr Collins was not a sensible man, and the deficiency of nature had been but little assisted by education or society"',
          effect:
            "The narrator's devastating assessment demolishes Collins in a single sentence, using polite diction to deliver savage judgement. Austen's satirical tone consistently targets those who lack self-awareness — her comedy is a moral instrument that punishes pretension and rewards sincerity.",
        },
        {
          label: "Formal register",
          example:
            '"In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you"',
          effect:
            "Darcy's first proposal is couched in elaborate formal diction that reveals how class consciousness distorts genuine emotion — his language of struggle and repression frames love as a battle against his own superiority. The formality creates distance at the very moment he seeks intimacy.",
        },
        {
          label: "Letters as characterisation",
          example:
            '"Be not alarmed, Madam, on receiving this letter" — the opening of Darcy\'s letter at Hunsford',
          effect:
            "Darcy's letter is the novel's pivotal moment of revelation — the written form allows him to present evidence methodically, bypassing the emotional volatility of face-to-face encounter. Letters in the novel function as spaces where characters reveal truths they cannot speak aloud.",
        },
        {
          label: "Repetition",
          example:
            '"She is tolerable; but not handsome enough to tempt me" — repeated and recalled throughout the novel by Elizabeth',
          effect:
            "Elizabeth's repeated return to Darcy's initial slight reveals how deeply first impressions embed themselves — the phrase becomes a refrain that structures her prejudice. Austen uses repetition to show how memory selectively reinforces existing biases rather than allowing reassessment.",
        },
        {
          label: "Metaphor",
          example:
            '"My good opinion once lost is lost for ever" — Darcy describes his resentment as an irreversible judgement',
          effect:
            "Darcy's metaphor of permanent loss reveals his inflexibility — he presents stubbornness as a virtue, dressing up pride as principled consistency. Elizabeth's response, calling this a 'propensity to hate every body', reframes his metaphor as moral failure, demonstrating how language can be used to dignify or expose character flaws.",
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
          label: "Dual protagonist structure",
          example:
            "The novel traces both Elizabeth's overcoming of prejudice and Darcy's overcoming of pride — neither character's journey is complete without the other",
          effect:
            "Austen creates a symmetrical moral architecture in which both protagonists must change before they can unite. The dual structure argues that successful relationships require mutual growth — neither party is solely right or wrong.",
        },
        {
          label: "Three-volume structure",
          example:
            "Volume I ends with Darcy's growing attraction at Netherfield; Volume II pivots on his letter; Volume III resolves through Pemberley and Lydia's crisis",
          effect:
            "The three-volume form creates a pattern of misunderstanding, revelation, and resolution that mirrors Elizabeth's psychological journey from confident misjudgement through painful reassessment to mature understanding.",
        },
        {
          label: "Parallel courtships",
          example:
            "Elizabeth and Darcy are paralleled with Jane and Bingley, Lydia and Wickham, Charlotte and Collins, and the Gardiners",
          effect:
            "Each courtship offers a different model of marriage — romantic, pragmatic, reckless, or companionate — allowing Austen to examine the institution from multiple angles. The parallels invite the reader to measure each relationship against the others and consider what constitutes a good marriage.",
        },
        {
          label: "Dramatic irony",
          example:
            "The reader suspects Wickham's dishonesty before Elizabeth does; the reader perceives Darcy's growing regard while Elizabeth remains blind to it",
          effect:
            "Austen creates dramatic irony by giving the reader access to information and perspectives that Elizabeth lacks, generating tension between what Elizabeth believes and what the reader suspects. This structural gap is the engine of the novel's comedy and its moral argument about the danger of premature judgement.",
        },
        {
          label: "Reversal (Darcy's letter)",
          example:
            "Darcy's letter in Chapter 35 overturns Elizabeth's understanding of both Darcy and Wickham, forcing her to reassess every previous judgement",
          effect:
            "The letter is the novel's structural fulcrum — everything before it is shaped by Elizabeth's prejudice, and everything after it is shaped by her painful recognition of error. Austen places the reversal at the exact centre of the novel, making the architecture itself embody the theme of transformation.",
        },
        {
          label: "Rising action through social events (balls and visits)",
          example:
            "The Meryton assembly, Netherfield ball, Lady Catherine's visits, and Pemberley tour each advance the plot through social encounter",
          effect:
            "Austen structures her novel around the social calendar of Regency life, using balls, dinners, and visits as the settings in which characters reveal themselves. Social events function as dramatic set-pieces where private feelings collide with public performance.",
        },
        {
          label: "Denouement",
          example:
            "Lady Catherine's confrontation with Elizabeth inadvertently encourages Darcy to propose again; the resolution unfolds through a series of clarifying conversations",
          effect:
            "The denouement demonstrates Austen's structural irony — the character who most opposes the match becomes the catalyst for its success. Resolution comes not through dramatic action but through honest conversation, affirming the novel's faith in rational communication.",
        },
        {
          label: "Epistolary elements",
          example:
            "Darcy's letter, Jane's letters about Lydia's elopement, Mr Collins's letters of condolence and congratulation, Mr Gardiner's updates from London",
          effect:
            "Letters function as structural hinges that deliver crucial information, shift the reader's understanding, and reveal character through prose style. The epistolary elements allow Austen to introduce distant events, maintain narrative pace, and show characters in their most unguarded written voices.",
        },
        {
          label: "Symmetry and mirroring",
          example:
            "Two proposals from Darcy mirror each other — the first arrogant and rejected, the second humble and accepted; Elizabeth visits Pemberley as Darcy once visited Longbourn",
          effect:
            "Structural symmetry reinforces the theme of reciprocal growth — the mirrored proposals measure how far both characters have travelled. Austen uses symmetry to argue that genuine change is demonstrated through repeated situations that produce different outcomes.",
        },
        {
          label: "Coincidence as plot device",
          example:
            "Elizabeth happens to visit Pemberley when Darcy returns unexpectedly; Lydia happens to elope with the one man whose history Darcy knows intimately",
          effect:
            "Austen uses coincidence sparingly but strategically to create situations that test characters under pressure. The Pemberley encounter allows Elizabeth to see Darcy in his natural environment, while Lydia's elopement creates the crisis that proves Darcy's reformed character through action.",
        },
        {
          label: "Social calendar structure",
          example:
            "The novel follows the rhythm of the social season — assemblies, visits, militia stationed in Meryton, Brighton, summer touring in Derbyshire",
          effect:
            "Austen anchors her narrative in the seasonal rhythms of Regency social life, making the marriage market feel both natural and constraining. The social calendar determines when and where characters meet, emphasising how women's lives are structured by forces beyond their control.",
        },
        {
          label: "Shifting perspectives",
          example:
            "The novel's first half is dominated by Elizabeth's perspective; after the letter, the narrative increasingly incorporates other viewpoints and information sources",
          effect:
            "The gradual widening of perspective mirrors Elizabeth's own expanding understanding — as she learns to question her own judgement, the narrative opens up to include evidence she previously ignored. Austen uses shifting focalization to demonstrate that moral maturity requires the ability to see beyond one's own viewpoint.",
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
          label: "Free indirect discourse",
          example:
            '"She grew absolutely ashamed of herself. Of neither Darcy nor Wickham could she think, without feeling that she had been blind, partial, prejudiced, absurd"',
          effect:
            "The narrator adopts Elizabeth's vocabulary and emotional rhythm without direct quotation, creating an intimate blend of character and narrator. This technique allows the reader to experience Elizabeth's humiliation from within while the narrator's ironic framing reminds us that self-knowledge, however painful, is a form of moral progress.",
        },
        {
          label: "Omniscient narrator with ironic distance",
          example:
            '"Mr Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three and twenty years had been insufficient to make his wife understand his character"',
          effect:
            "The narrator observes characters with amused detachment, delivering judgements that appear objective but are laced with irony. This narrative voice establishes the novel's moral framework — characters are measured by their capacity for self-awareness, and the narrator's wit models the discriminating intelligence the novel values.",
        },
        {
          label: "Dialogue-driven narrative",
          example:
            "The opening chapter is almost entirely dialogue between Mr and Mrs Bennet, establishing character, conflict, and theme through conversation alone",
          effect:
            "Austen advances plot and reveals character primarily through what people say to each other, making the novel feel dramatic and immediate. Dialogue allows the reader to judge characters directly by their speech patterns — Mrs Bennet's breathless repetitions, Collins's obsequious formality, Elizabeth's quick wit.",
        },
        {
          label: "Letters as revelation",
          example:
            "Darcy's letter reveals Wickham's true history and his own motivations for separating Bingley from Jane, transforming Elizabeth's understanding",
          effect:
            "Letters function as narrative devices that deliver information impossible to convey in face-to-face conversation — Darcy can present his case methodically, without the emotional interference of Elizabeth's presence. The letter form also creates privacy within the narrative, giving the reader access to intimate communication.",
        },
        {
          label: "Reported speech",
          example:
            "Mrs Bennet's account of the Meryton assembly, Wickham's backstory as told to Elizabeth, Mrs Gardiner's warnings about Wickham",
          effect:
            "Austen uses reported speech to filter events through unreliable intermediaries, forcing the reader to question the accuracy of second-hand accounts. This technique reinforces the novel's theme that information is always shaped by the teller's perspective and biases.",
        },
        {
          label: "Shifting focalization",
          example:
            "The novel begins closely aligned with Elizabeth's perspective but gradually incorporates the viewpoints of Jane, Darcy (through his letter), and the Gardiners",
          effect:
            "The broadening of narrative perspective mirrors Elizabeth's own moral education — as she learns to see beyond her initial prejudices, the reader gains access to viewpoints that complicate and correct her earlier judgements.",
        },
        {
          label: "Dramatic scenes (proposals)",
          example:
            "Darcy's first proposal at Hunsford and his second at Longbourn are rendered as fully dramatised scenes with dialogue, gesture, and emotional intensity",
          effect:
            "Austen reserves her most fully dramatised scenes for moments of maximum emotional and thematic significance. The contrast between the two proposals — one formal and offensive, the other humble and tentative — provides the structural evidence of Darcy's transformation.",
        },
        {
          label: "Social gatherings as set-pieces",
          example:
            "The Meryton assembly, the Netherfield ball, Lady Catherine's dinner at Rosings, the Pemberley visit",
          effect:
            "Social gatherings function as narrative arenas where characters perform, observe, and judge each other under public scrutiny. Austen uses these set-pieces to reveal the tension between private feeling and social expectation that defines Regency life.",
        },
        {
          label: "Interior thought",
          example:
            '"How despicably have I acted!" she cried. "I, who have prided myself on my discernment!"',
          effect:
            "Austen grants the reader access to Elizabeth's interior life at moments of crisis, creating emotional intimacy and demonstrating the novel's central argument that self-knowledge requires painful honesty. Elizabeth's self-reproach models the moral courage the novel values above all other virtues.",
        },
        {
          label: "Unreliable first impressions",
          example:
            "Elizabeth's first impressions of both Darcy (proud and disagreeable) and Wickham (charming and wronged) prove fundamentally mistaken",
          effect:
            "The novel's original title, 'First Impressions', signals Austen's structural commitment to demonstrating their unreliability. By building the entire first half of the novel on Elizabeth's confident misjudgements, Austen forces the reader to experience the same uncomfortable process of reassessment.",
        },
        {
          label: "Gossip as information",
          example:
            "The neighbourhood's gossip about Darcy's wealth ('ten thousand a year'), Wickham's grievances spread through Meryton, the scandal of Lydia's elopement",
          effect:
            "Gossip functions as the primary information network in Austen's world, shaping reputations and driving plot. Austen uses gossip to demonstrate how public opinion forms quickly, spreads unreliably, and proves difficult to correct — a social mechanism that both creates and destroys.",
        },
        {
          label: "Authorial commentary",
          example:
            '"Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us"',
          effect:
            "The narrator occasionally steps back from the story to offer direct moral commentary, establishing the philosophical framework within which characters are to be judged. These interventions function as interpretive guides, teaching the reader to make the fine discriminations the novel demands.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  4. FORM AND GENRE
    // ══════════════════════════════════════════════════════════
    {
      title: "Form and Genre",
      colour: "blue",
      columns: ["Form / Technique", "Description", "Effect"],
      rows: [
        {
          label: "Novel of manners",
          example:
            "The novel meticulously depicts the social customs, etiquette, and hierarchies of Regency England, from morning calls to ball protocols",
          effect:
            "By embedding her moral drama within the minutiae of social convention, Austen demonstrates that the most significant human dramas unfold not on battlefields but in drawing rooms. The novel of manners form argues that how people behave in ordinary social situations reveals their deepest character.",
        },
        {
          label: "Domestic fiction",
          example:
            "The entire novel takes place within the domestic sphere — family homes, neighbourhood visits, and private conversations about marriage and money",
          effect:
            "Austen claims the domestic sphere as a space of serious literary and moral inquiry, challenging the assumption that only public or heroic subjects merit novelistic treatment. The domestic setting makes the universal themes of pride, prejudice, and self-knowledge feel immediate and personal.",
        },
        {
          label: "Comedy of manners",
          example:
            "Mrs Bennet's vulgarity, Mr Collins's obsequiousness, Lady Catherine's condescension, and Lydia's recklessness all provide comic material rooted in social behaviour",
          effect:
            "Austen uses comedy to expose social pretension and moral failure — laughter becomes a form of judgement. The comedy of manners form allows her to critique Regency society's obsession with rank, propriety, and wealth while maintaining the light, ironic tone that makes the critique palatable.",
        },
        {
          label: "Bildungsroman elements",
          example:
            "Elizabeth's journey from confident prejudice through painful self-recognition to mature understanding follows the pattern of a coming-of-age narrative",
          effect:
            "The bildungsroman structure centres the novel on Elizabeth's moral education, arguing that growing up means learning to question one's own judgement. Her development from witty certainty to chastened wisdom provides the emotional and philosophical core of the novel.",
        },
        {
          label: "Epistolary elements",
          example:
            "Letters from Darcy, Jane, Mr Collins, and Mr Gardiner punctuate the narrative and deliver crucial plot information and character revelation",
          effect:
            "The epistolary elements connect the novel to the eighteenth-century tradition of Richardson and Burney while allowing Austen to present multiple voices and perspectives without abandoning her third-person narration. Letters create spaces of privacy and honesty within the social performance of the main narrative.",
        },
        {
          label: "Romantic comedy",
          example:
            "The novel follows the romantic comedy pattern: initial antagonism between lovers, obstacles to union, misunderstandings resolved, and a happy ending in marriage",
          effect:
            "Austen both employs and elevates the romantic comedy form — the happy ending is earned through genuine moral change rather than mere plot convenience. The romance is satisfying precisely because both Elizabeth and Darcy have confronted their flaws and grown, making their union feel like a moral achievement rather than a genre obligation.",
        },
        {
          label: "Satire",
          example:
            "Mr Collins's proposal, Lady Catherine's interrogation of Elizabeth, Mrs Bennet's nerves, and the entail of Longbourn all function as satirical targets",
          effect:
            "Austen's satire targets the absurdities of a society that values wealth over worth, rank over character, and propriety over honesty. The satirical mode allows her to critique patriarchal institutions — particularly the marriage market and inheritance law — without resorting to polemic.",
        },
        {
          label: "Social realism",
          example:
            "The novel precisely depicts the economic realities of Regency gentry life — income levels, entailment, dowries, and the financial desperation that drives marriage decisions",
          effect:
            "Austen grounds her comedy in the economic facts of her world, ensuring that the reader understands the material pressures that constrain her characters. Charlotte's acceptance of Collins and Wickham's pursuit of heiresses are not merely comic — they are realistic responses to a system that offers women few alternatives.",
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
          label: "Pemberley (estate as character)",
          example:
            '"She had never seen a place for which nature had done more, or where natural beauty had been so little counteracted by an awkward taste"',
          effect:
            "Pemberley symbolises Darcy's true character — its harmonious blend of natural beauty and tasteful cultivation reflects the qualities Elizabeth discovers beneath his proud exterior. The estate functions as visual proof that Darcy is a man of genuine worth, not merely wealth.",
        },
        {
          label: "Balls and dances",
          example:
            "The Meryton assembly where Darcy slights Elizabeth, the Netherfield ball where they dance together with charged tension",
          effect:
            "Dances symbolise courtship and social harmony — the physical coordination of dancing mirrors the emotional coordination required in relationships. Darcy and Elizabeth's dance at Netherfield, full of verbal sparring, foreshadows the combative path their courtship will take before they can move in step.",
        },
        {
          label: "Letters",
          example:
            "Darcy's letter at Hunsford, Jane's letters about Lydia's elopement, Mr Gardiner's letters updating Elizabeth from London",
          effect:
            "Letters symbolise truth and revelation — they are spaces where characters can speak honestly, freed from the social pressures of face-to-face interaction. Darcy's letter is the novel's most important single document, the written word that dismantles Elizabeth's entire framework of prejudice.",
        },
        {
          label: "First impressions",
          example:
            '"His character was decided. He was the proudest, most disagreeable man in the world, and every body hoped that he would never come there again" — after the Meryton ball',
          effect:
            "First impressions function as a motif that structures the entire novel — the original title was 'First Impressions'. Austen demonstrates that snap judgements, however confident, are shaped by vanity, social pressure, and incomplete information, and that revising one's first impressions is a moral achievement.",
        },
        {
          label: "Money and income",
          example:
            '"A single man of large fortune; four or five thousand a year" — Bingley; "ten thousand a year" — Darcy; "scarcely anything" — Wickham',
          effect:
            "Precise income figures recur as a motif, reminding the reader that the marriage market is an economic system. Austen does not condemn the consideration of money in marriage — she condemns making it the only consideration, as Mrs Bennet does, or pretending it is irrelevant, as no one honestly can.",
        },
        {
          label: "Entailment",
          example:
            '"Mr Bennet\'s property consisted almost entirely in an estate of two thousand a year, which, unfortunately for his daughters, was entailed, in default of heirs male, on a distant relation"',
          effect:
            "The entailment of Longbourn symbolises the patriarchal legal system that renders women financially dependent on marriage. It is the structural injustice that underlies the entire plot — without the entail, the Bennet daughters would not need to marry for security, and Mrs Bennet's desperation would be unnecessary.",
        },
        {
          label: "Travel and distance",
          example:
            "Elizabeth travels from Longbourn to Hunsford (Kent), then to Pemberley (Derbyshire) — each journey brings greater understanding",
          effect:
            "Physical journeys mirror Elizabeth's psychological journey from prejudice to understanding. The increasing distance from Longbourn represents her growing independence from the narrow perspectives of her family and neighbourhood, culminating at Pemberley where she sees Darcy and herself most clearly.",
        },
        {
          label: "Rain",
          example:
            "Jane rides to Netherfield in the rain and falls ill, forcing Elizabeth to stay and deepening her acquaintance with Darcy and Bingley",
          effect:
            "Rain functions as a plot device that creates opportunities for intimacy by disrupting social plans. Jane's illness from the rain brings Elizabeth into prolonged contact with Darcy at Netherfield — nature intervenes to override social convention, forcing characters into proximity they would not otherwise choose.",
        },
        {
          label: "Windows",
          example:
            "Elizabeth frequently looks out of windows or is observed through them — at Netherfield, at Hunsford, at Pemberley",
          effect:
            "Windows symbolise the boundary between interior life and social observation — characters look outward to observe others and inward to reflect on themselves. The window motif reinforces the novel's preoccupation with the relationship between seeing and understanding.",
        },
        {
          label: "Accomplished women",
          example:
            '"A woman must have a thorough knowledge of music, singing, drawing, dancing, and the modern languages" — Miss Bingley\'s list of accomplishments',
          effect:
            "The 'accomplished woman' motif satirises the Regency ideal of feminine perfection as a performance designed to attract a husband rather than develop genuine ability. Elizabeth's refusal to perform on demand and Darcy's addition of 'something more substantial, in the improvement of her mind by extensive reading' distinguish superficial display from real intelligence.",
        },
        {
          label: "The pianoforte",
          example:
            "Elizabeth plays the pianoforte at Rosings and acknowledges she does not practise enough; Mary performs poorly at the Netherfield ball",
          effect:
            "The pianoforte symbolises female accomplishment and the social pressure to perform — Elizabeth's admission that she does not practise enough becomes a metaphor for her willingness to be honest about her limitations. Her playing contrasts with Miss Bingley's competitive display, distinguishing authenticity from social performance.",
        },
        {
          label: "Walking",
          example:
            '"I do not want to avoid the walk. The distance is nothing, when one has a motive" — Elizabeth walks three miles to Netherfield through muddy fields',
          effect:
            "Walking symbolises Elizabeth's independence, vitality, and refusal to conform to genteel feminine passivity. Her willingness to walk through mud scandalises Miss Bingley but attracts Darcy, suggesting that natural energy and genuine care for others are more appealing than conventional propriety.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Explanation", "Application in Pride and Prejudice"],
      rows: [
        {
          label: "Pride vs prejudice",
          example:
            "Darcy's pride in his social position and Elizabeth's prejudice against him are the twin flaws that must be overcome before the protagonists can unite",
          effect:
            "Austen refuses to assign one flaw to one character — Darcy is prejudiced against Elizabeth's family, and Elizabeth is proud of her own judgement. The novel argues that pride and prejudice are universal human tendencies that distort perception, and that self-knowledge requires recognising both in oneself.",
        },
        {
          label: "Class and social mobility",
          example:
            "Elizabeth's marriage to Darcy crosses a significant class boundary; Lady Catherine's horror at the match reveals the rigidity of class expectations; the Gardiners, though 'in trade', prove the most morally admirable characters",
          effect:
            "Austen interrogates Regency class hierarchy by demonstrating that moral worth does not correlate with social rank. The Gardiners' intelligence and generosity expose Lady Catherine's pretensions, while Elizabeth's marriage to Darcy suggests that class boundaries, though powerful, can be transcended by individual merit.",
        },
        {
          label: "Marriage market",
          example:
            '"It is a truth universally acknowledged" — the opening sentence frames marriage as an economic transaction; Charlotte accepts Collins for security; Wickham pursues Miss King for her fortune',
          effect:
            "Austen depicts the marriage market with unflinching realism, showing how economic necessity shapes romantic choices. She does not condemn Charlotte for choosing security, but she insists that the ideal marriage — exemplified by Elizabeth and Darcy — combines material comfort with genuine mutual respect and intellectual companionship.",
        },
        {
          label: "Patriarchal property law (entailment)",
          example:
            "The entail of Longbourn means the Bennet daughters will be homeless when their father dies; this legal fact drives Mrs Bennet's desperation and shapes every marriage decision in the novel",
          effect:
            "Austen exposes the injustice of a legal system that treats women as dependents rather than individuals. The entail is not a minor plot detail but the structural foundation of the entire narrative — it demonstrates how patriarchal law creates the conditions in which women must trade autonomy for security.",
        },
        {
          label: "Female agency",
          example:
            "Elizabeth refuses two proposals (Collins and Darcy's first), defies Lady Catherine, and insists on marrying for love rather than convenience",
          effect:
            "Elizabeth's repeated exercise of choice within a system designed to deny women choice is Austen's most radical argument. Her refusal of Collins and of Darcy's first proposal are acts of extraordinary courage given her economic vulnerability — she risks poverty to preserve her moral integrity.",
        },
        {
          label: "Appearance vs reality",
          example:
            "Wickham appears charming and honest but is deceitful and mercenary; Darcy appears proud and disagreeable but proves generous and principled; Collins appears devout but is sycophantic and self-serving",
          effect:
            "The novel systematically dismantles the equation between appearance and character, arguing that surfaces are unreliable and that genuine knowledge of another person requires time, evidence, and the willingness to revise one's initial judgement.",
        },
        {
          label: "Irony as moral tool",
          example:
            "The narrator uses irony to expose Mrs Bennet's vulgarity, Collins's obsequiousness, and Lady Catherine's condescension while rewarding characters capable of self-irony, like Elizabeth and Mr Bennet",
          effect:
            "Austen's irony functions as a moral discriminator — characters who understand irony demonstrate intelligence and self-awareness, while those who do not (Collins, Mrs Bennet, Lady Catherine) reveal their limitations. The ability to perceive the gap between appearance and reality is, for Austen, a form of moral intelligence.",
        },
        {
          label: "Austen's feminism",
          example:
            "Elizabeth's intellectual equality with Darcy, Charlotte's pragmatic analysis of women's limited options, the narrator's critique of entailment, and the contrast between passive femininity (Jane) and active intelligence (Elizabeth)",
          effect:
            "Austen does not use the language of political feminism, but her novel is a sustained argument for women's intellectual and moral equality. She demonstrates that women are capable of the same rational judgement, moral growth, and independent thought as men, while exposing the social structures that deny them the opportunity to exercise these capacities.",
        },
        {
          label: "Regency social codes",
          example:
            "The elaborate rules governing introductions, dances, visits, mourning, and correspondence structure every interaction in the novel",
          effect:
            "Austen depicts social codes as both constraining and revealing — they limit women's freedom of action while simultaneously providing a framework within which character is displayed. A character's relationship to social convention — whether they observe it sincerely, exploit it cynically, or defy it courageously — becomes a measure of their moral worth.",
        },
        {
          label: "Nature vs nurture",
          example:
            "Darcy attributes his faults to upbringing: 'I was given good principles, but left to follow them in pride and conceit'; the five Bennet sisters, raised identically, develop radically different characters",
          effect:
            "Austen explores the tension between inherited disposition and social formation, suggesting that character is shaped by both but ultimately determined by individual moral choice. Darcy's transformation proves that even deeply ingrained habits of pride can be overcome through self-awareness and the desire to be worthy of another person's respect.",
        },
        {
          label: "Individual vs society",
          example:
            "Elizabeth defies Lady Catherine's demand that she refuse Darcy; she resists her mother's pressure to accept Collins; she maintains her own judgement against neighbourhood opinion of Wickham",
          effect:
            "Austen consistently champions individual moral judgement over collective social pressure, but she does not celebrate isolation — Elizabeth's independence is valuable precisely because it leads her toward genuine connection rather than away from it. The novel argues that the individual's duty is not to conform to society but to improve it through principled action.",
        },
        {
          label: "Rational vs emotional",
          example:
            "Elizabeth's wit and reason are contrasted with Lydia's impulsiveness and Mrs Bennet's hysteria; Darcy's rationality conflicts with his growing emotional attachment to Elizabeth; Jane's emotional generosity leads her to misjudge Wickham",
          effect:
            "Austen does not privilege reason over emotion but argues for their integration — Elizabeth's purely rational dismissal of Darcy is as flawed as Lydia's purely emotional attachment to Wickham. The ideal, embodied in Elizabeth and Darcy's final union, combines rational self-awareness with genuine emotional depth.",
        },
      ],
    },
  ],
};
