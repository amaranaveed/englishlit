// ─── Trait-Based Mind Map Data — The Strange Case of Dr Jekyll and Mr Hyde ───

import type { CharacterMindMap } from "./mindmaps-inspector-calls";

export const JEKYLL_HYDE_MINDMAPS: CharacterMindMap[] = [
  // ══════════════════════════════════════════════════════════
  //  1. DR JEKYLL
  // ══════════════════════════════════════════════════════════
  {
    name: "Dr Jekyll",
    textSlug: "jekyll-hyde",
    traits: [
      // ── respectable / dual-natured ──
      {
        trait: "respectable / dual-natured",
        colour: "teal",
        quotes: [
          {
            quote:
              "Man is not truly one, but truly two",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The **declarative assertion** rejects the Victorian assumption of a unified moral self — Jekyll's discovery is presented as a universal truth about **human duality**, not a personal failing.",
              "The **antithesis** of 'one' and 'two' structurally mirrors the novella's central theme of **doubling** — Stevenson embeds the split identity within the very grammar of the sentence.",
              "**AO3 context**: this challenges Victorian ideals of the **respectable gentleman** as a coherent, morally whole individual, reflecting anxieties about what lay beneath the polished surface of bourgeois masculinity.",
            ],
          },
          {
            quote:
              "I learned to recognise the thorough and primitive duality of man",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The adjective **'primitive'** links human duality to something pre-civilised and instinctual, connecting to **Darwinian anxieties** about the animal nature lurking beneath civilised behaviour.",
              "The verb **'learned'** implies a process of painful discovery — Jekyll does not stumble upon duality but arrives at it through scientific inquiry, reinforcing the novella's critique of **unchecked intellectual ambition**.",
            ],
          },
          {
            quote:
              "I was in no sense a hypocrite; both sides of me were in dead earnest",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "Jekyll's insistence that he is **'no hypocrite'** paradoxically exposes his self-deception — he fails to see that maintaining dual lives is the **definition** of Victorian hypocrisy.",
              "The phrase **'dead earnest'** carries an unintended **proleptic irony**: the word 'dead' foreshadows the fatal consequences of trying to sustain both identities simultaneously.",
              "**AO2 structure**: this confession in the final chapter reframes the entire novella — the reader realises every earlier appearance of the 'respectable' Jekyll was already a performance.",
            ],
          },
        ],
      },
      // ── ambitious / hubristic ──
      {
        trait: "ambitious / hubristic",
        colour: "purple",
        quotes: [
          {
            quote:
              "I felt younger, lighter, happier in body; within I was conscious of a heady recklessness",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The **tricolon** 'younger, lighter, happier' presents the transformation as exhilarating liberation — Stevenson initially seduces both Jekyll and the reader before revealing the horror, creating a **structural parallel** with addiction narratives.",
              "The adjective **'heady'** suggests intoxication and loss of rational control, while 'recklessness' implies a conscious disregard for consequences — Jekyll's **hubris** lies in believing he can manage what he has unleashed.",
            ],
          },
          {
            quote:
              "I began to be aware of a change in the temper of my thoughts, a greater boldness, a contempt of danger",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The **escalating noun phrase** 'boldness... contempt of danger' traces a psychological trajectory from confidence to recklessness — Stevenson charts Jekyll's gradual loss of moral boundaries through increasingly extreme language.",
              "**AO3 context**: Jekyll's pursuit of knowledge beyond moral limits echoes the **Promethean/Faustian archetype** — the scientist who overreaches and is destroyed by his own discovery, a key anxiety of the Victorian era.",
              "The phrase **'temper of my thoughts'** positions the mind itself as unstable, suggesting that the experiment has not merely released Hyde but has fundamentally **altered Jekyll's cognition**.",
            ],
          },
          {
            quote:
              "I had gone to bed Henry Jekyll, I had awakened Edward Hyde",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The **parallel syntax** of 'gone to bed... awakened' mirrors the simplicity of a fairy tale but describes a **nightmarish inversion** — the ordinary act of sleeping becomes a site of terror.",
              "This involuntary transformation marks the pivotal moment when Jekyll **loses control** of his experiment — the potion is no longer required, and the boundary between self and other collapses entirely.",
            ],
          },
        ],
      },
      // ── secretive ──
      {
        trait: "secretive",
        colour: "amber",
        quotes: [
          {
            quote:
              "If I am the chief of sinners, I am the chief of sufferers also",
            who: "Dr Jekyll",
            act: "Chapter 5: Incident of the Letter",
            points: [
              "The **balanced antithesis** of 'sinners' and 'sufferers' positions Jekyll as both perpetrator and victim — he uses his own pain to deflect moral accountability, a hallmark of **self-justifying secrecy**.",
              "The repetition of **'chief'** elevates his experience to superlative status — even in confession, Jekyll claims a kind of distinction, suggesting that his secrecy is entangled with **pride**.",
              "**AO3 context**: this echoes the Victorian culture of concealment, where gentlemen were expected to maintain **public propriety** regardless of private transgression — the sin is not the act but its exposure.",
            ],
          },
          {
            quote:
              "The moment I choose, I can be rid of Mr Hyde",
            who: "Dr Jekyll",
            act: "Chapter 3: Dr Jekyll Was Quite at Ease",
            points: [
              "The **confident declarative** reveals Jekyll's dangerous self-assurance — he believes he retains agency over Hyde, a belief the novella systematically dismantles.",
              "The verb **'choose'** implies free will and rational control, yet the reader eventually learns that Jekyll's 'choice' is an illusion — Stevenson uses **dramatic irony** to expose the gap between Jekyll's confidence and his actual powerlessness.",
            ],
          },
          {
            quote:
              "I have brought on myself a punishment and a danger that I cannot name",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The phrase **'cannot name'** resonates with the novella's pervasive atmosphere of the **unspeakable** — Jekyll's secret is so transgressive it resists articulation, reflecting Victorian anxieties about desires that could not be publicly acknowledged.",
              "The pairing of **'punishment and danger'** shifts the register from moral to physical — secrecy has become not merely a social strategy but a threat to Jekyll's very survival.",
              "**AO2 form**: the first-person confession in the final chapter forces the reader to reconstruct the entire narrative through Jekyll's hidden perspective, revealing how **unreliable** earlier accounts were.",
            ],
          },
        ],
      },
      // ── self-destructive ──
      {
        trait: "self-destructive",
        colour: "red",
        quotes: [
          {
            quote:
              "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The repeated adverb **'slowly'** conveys the insidious, creeping nature of Jekyll's deterioration — self-destruction is not a single dramatic act but a **gradual erosion** of identity.",
              "The **spatial metaphor** of 'losing hold' imagines the self as something physical that can slip away — Stevenson presents identity as precarious, not fixed, anticipating **Freudian** ideas about the fragmented psyche.",
              "The moral hierarchy of **'better'** and **'worse'** reveals that Jekyll never truly accepts duality as equal — he still clings to a Victorian moral framework even as that framework destroys him.",
            ],
          },
          {
            quote:
              "My devil had been long caged, he came out roaring",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The **bestial metaphor** of a caged animal directly links repression to violence — Stevenson suggests that the Victorian practice of suppressing desires does not eliminate them but makes their eventual release more **ferocious**.",
              "The verb **'roaring'** is viscerally animalistic, recalling Hyde's other **atavistic** descriptions — the 'devil' is not a supernatural entity but the repressed animal self demanding expression.",
              "**AO3 context**: this reflects **degeneration theory**, which posited that civilised humans could regress to a more primitive state — Jekyll's 'devil' is not external evil but his own evolutionary past.",
            ],
          },
          {
            quote:
              "I bring the life of that unhappy Henry Jekyll to an end",
            who: "Dr Jekyll",
            act: "Chapter 10: Henry Jekyll's Full Statement of the Case",
            points: [
              "The **third-person self-reference** ('that unhappy Henry Jekyll') signals complete dissociation — Jekyll no longer identifies with his own name, suggesting the self has already been destroyed before physical death.",
              "As the **final line of his confession**, this functions as both a suicide note and a literary closure — Stevenson denies the reader any hope of redemption, reinforcing the novella's **pessimistic vision** of human nature.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Jekyll's first direct appearance at the dinner party",
        act: "Chapter 3: Dr Jekyll Was Quite at Ease",
        points: [
          "Jekyll is introduced in a setting of **warmth and conviviality** — the title's phrase 'quite at ease' creates a stark contrast with the anxiety surrounding Hyde, establishing Jekyll's **respectable facade**.",
          "Stevenson delays Jekyll's appearance until Chapter 3, allowing Hyde and the mystery to dominate first — this **structural choice** means the reader encounters the monstrous before the respectable, subtly undermining Jekyll's credibility from the start.",
          "**AO3 context**: the gentlemen's dinner reflects the **homosocial world** of Victorian professional men — a world built on reputation and discretion, the very values Jekyll's experiment threatens to destroy.",
        ],
      },
      {
        type: "exit",
        moment: "Jekyll's final withdrawal and death behind the locked cabinet door",
        act: "Chapter 8: The Last Night",
        points: [
          "Jekyll's death occurs **offstage** — the reader never witnesses it directly but reconstructs it from Utterson's discovery and Jekyll's written confession, reflecting the novella's epistemological structure of **fragmented, secondhand knowledge**.",
          "The **locked door** functions as a powerful symbol of the barrier between public respectability and private transgression — even in death, Jekyll remains hidden behind a physical and metaphorical boundary.",
          "The discovery of Hyde's body in Jekyll's clothes creates a final moment of **Gothic horror** — the physical evidence of duality is laid bare, forcing Utterson (and the reader) to confront what had been concealed.",
        ],
      },
      {
        type: "absence",
        moment: "Jekyll's prolonged seclusion after Carew's murder",
        act: "Chapter 6: Remarkable Incident of Dr Lanyon",
        points: [
          "Jekyll's withdrawal from society mirrors his **psychological retreat** — as Hyde's dominance grows, Jekyll's social presence diminishes, creating a structural parallel between physical absence and loss of identity.",
          "The absence is noted by Utterson and Lanyon but never fully explained at this point — Stevenson uses **narrative gaps** to build suspense and model the way Victorian society avoided direct confrontation with uncomfortable truths.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  2. MR HYDE
  // ══════════════════════════════════════════════════════════
  {
    name: "Mr Hyde",
    textSlug: "jekyll-hyde",
    traits: [
      // ── violent / animalistic ──
      {
        trait: "violent / animalistic",
        colour: "teal",
        quotes: [
          {
            quote:
              "trampled calmly over the child's body",
            who: "Mr Enfield (describing Hyde)",
            act: "Chapter 1: Story of the Door",
            points: [
              "The **oxymoron** 'trampled calmly' is deeply unsettling — the violence of 'trampled' is contradicted by the composure of 'calmly', suggesting Hyde's cruelty is **instinctive** rather than passionate, making it far more disturbing.",
              "The victim is a **child**, the most innocent and vulnerable member of society — Stevenson immediately establishes Hyde as a figure who transgresses the most fundamental social and moral boundaries.",
              "**AO2 structure**: this is the novella's **opening incident**, meaning the reader's first encounter with Hyde is through an act of gratuitous violence — Stevenson ensures that Hyde is defined by cruelty before any other characteristic.",
            ],
          },
          {
            quote:
              "with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows",
            who: "Narrator (describing the Carew murder)",
            act: "Chapter 4: The Carew Murder Case",
            points: [
              "The simile **'ape-like fury'** directly invokes **Darwinian anxieties** — Hyde is presented as an evolutionary regression, a creature closer to animal than human, reflecting Victorian fears about degeneration and the thin veneer of civilisation.",
              "The **metaphor** 'hailing down a storm of blows' transforms violence into a natural disaster — it is uncontrollable, elemental, and beyond reason, removing any possibility of moral negotiation with Hyde.",
              "The repetition of **'trampling'** across chapters (the child in Chapter 1, Carew here) creates a **structural motif** — Hyde's violence escalates from assault to murder, charting a trajectory of increasing depravity.",
            ],
          },
          {
            quote:
              "the bones were audibly shattered and the body jumped upon the roadway",
            who: "Narrator (describing the Carew murder)",
            act: "Chapter 4: The Carew Murder Case",
            points: [
              "The adverb **'audibly'** shifts the horror from the visual to the **aural** — the reader is forced to imagine the sound of breaking bones, making the violence viscerally immediate.",
              "The verb **'jumped'** gives the dead body an uncanny animation — the corpse seems to react to the force of the blows, creating a moment of **Gothic grotesqueness** that disturbs natural physical expectations.",
            ],
          },
        ],
      },
      // ── repulsive ──
      {
        trait: "repulsive",
        colour: "purple",
        quotes: [
          {
            quote:
              "gave an impression of deformity without any nameable malformation",
            who: "Mr Utterson",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The paradox of deformity **without visible cause** is central to the novella's horror — Hyde's repulsiveness operates on an instinctive, almost **subconscious level**, defying rational categorisation.",
              "The adjective **'nameable'** connects to the novella's wider pattern of the **unspeakable** — Hyde embodies desires and truths that Victorian language cannot or will not articulate.",
              "**AO3 context**: this mirrors **physiognomy and Lombrosian criminology**, Victorian pseudo-sciences that believed moral character was visible in physical appearance — yet Hyde frustrates even this framework by being indefinably wrong.",
            ],
          },
          {
            quote:
              "pale and dwarfish, he gave an impression of deformity",
            who: "Mr Utterson",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The adjective **'dwarfish'** presents Hyde as physically diminished — Stevenson suggests that because Hyde represents only the evil part of Jekyll's nature, he is literally **smaller**, an incomplete human being.",
              "**AO3 context**: Hyde's small stature may reflect the idea that Jekyll's darker impulses have been **repressed and stunted** by years of Victorian self-discipline — evil has been kept 'small' but remains potent.",
            ],
          },
          {
            quote:
              "a disgustful curiosity",
            who: "Mr Enfield",
            act: "Chapter 1: Story of the Door",
            points: [
              "The **compound phrase** fuses repulsion with fascination — Enfield is simultaneously drawn to and revolted by Hyde, reflecting the novella's exploration of how **transgression** both horrifies and attracts.",
              "The word **'curiosity'** implicates the observer — Stevenson suggests that the desire to look upon evil is itself a form of complicity, challenging the reader's own voyeuristic engagement with Hyde's crimes.",
              "**AO2 language**: 'disgustful' is an unusual adjective choice (rather than 'disgusting'), lending the phrase a **formal, clinical quality** that distances the speaker from the raw emotion he is describing.",
            ],
          },
        ],
      },
      // ── amoral ──
      {
        trait: "amoral",
        colour: "amber",
        quotes: [
          {
            quote:
              "the man seems hardly human... something troglodytic",
            who: "Mr Utterson",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The adjective **'troglodytic'** (cave-dwelling) positions Hyde as a being from humanity's evolutionary past — Stevenson draws on **Darwinian theory** to suggest that amorality is not a choice but a reversion to a pre-moral state.",
              "The hedging phrase **'seems hardly human'** reveals the limits of rational discourse — Utterson, a lawyer trained in precise language, cannot fully articulate what Hyde is, reinforcing the theme of the **unknowable**.",
            ],
          },
          {
            quote:
              "really like Satan",
            who: "Mr Enfield",
            act: "Chapter 1: Story of the Door",
            points: [
              "The **biblical allusion** to Satan elevates Hyde from criminal to **embodiment of evil** — yet the simile 'like Satan' also reveals the inadequacy of available frameworks: Enfield reaches for religious language because secular vocabulary fails.",
              "**AO3 context**: the comparison reflects the tension between **religious and scientific** explanations of evil in the Victorian period — is Hyde a sinner or a specimen? The novella refuses to resolve this ambiguity.",
              "The adverb **'really'** attempts to authenticate the comparison, suggesting Enfield is not using hyperbole — this intensifier reveals how genuinely **shaken** the typically restrained gentleman has been by the encounter.",
            ],
          },
          {
            quote:
              "he had in his hand a heavy cane... and he broke out in a great flame of anger, stamping with his foot, brandishing the cane",
            who: "Narrator (describing Hyde with the maid's account)",
            act: "Chapter 4: The Carew Murder Case",
            points: [
              "The **kinetic verbs** 'stamping', 'brandishing', 'broke out' convey explosive, uncontrolled physicality — Hyde's violence erupts without provocation, confirming his complete absence of moral restraint.",
              "The metaphor **'flame of anger'** presents rage as elemental and consuming — Hyde does not experience anger as an emotion to be managed but as a force that **obliterates** rational thought entirely.",
            ],
          },
        ],
      },
      // ── primitive / atavistic ──
      {
        trait: "primitive / atavistic",
        colour: "red",
        quotes: [
          {
            quote:
              "the man trampled calmly... and left her screaming on the ground... it was hellish to see... it wasn't like a man; it was like some damned Juggernaut",
            who: "Mr Enfield",
            act: "Chapter 1: Story of the Door",
            points: [
              "The simile **'like some damned Juggernaut'** compares Hyde to an unstoppable, crushing force from Hindu mythology — Stevenson uses **orientalist imagery** to position Hyde as something alien to Western civilisation, reflecting Victorian **imperial anxieties** about the 'primitive other'.",
              "The declarative **'it wasn't like a man'** shifts the pronoun from 'he' to 'it', linguistically **dehumanising** Hyde — Enfield's grammar enacts the very reduction of Hyde from person to thing.",
              "**AO3 context**: the Juggernaut reference reflects Victorian Britain's encounter with cultures it deemed 'uncivilised' — yet the horror is that this primitive force emerges from within London's respectable streets, not from abroad.",
            ],
          },
          {
            quote:
              "particularly small and particularly wicked-looking",
            who: "Narrator",
            act: "Chapter 4: The Carew Murder Case",
            points: [
              "The repeated intensifier **'particularly'** emphasises both smallness and wickedness as Hyde's defining features — Stevenson pairs physical and moral attributes as though they are **inseparable**, engaging with Victorian physiognomic thinking.",
              "Hyde's **diminutive stature** symbolises the stunted, underdeveloped nature of pure evil when separated from the moral whole — he is literally a **lesser** version of the complete human being.",
            ],
          },
          {
            quote:
              "crying out with a great voice... the creature that was using Jekyll's body had nothing human",
            who: "Poole (paraphrased by narrator)",
            act: "Chapter 8: The Last Night",
            points: [
              "The noun **'creature'** definitively strips Hyde of human status — by the novella's climax, Hyde has devolved linguistically from 'man' to 'it' to 'creature', charting a **progressive dehumanisation** across the text.",
              "The phrase **'using Jekyll's body'** presents the body as a **vessel** occupied by something alien — Stevenson evokes **possession narratives** from the Gothic tradition, blurring science and the supernatural.",
              "**AO2 structure**: this description occurs in the penultimate chapter, building to maximum horror before the rational 'explanations' of the final two chapters — Stevenson manipulates **narrative pacing** to keep the reader in suspense.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Hyde's first appearance trampling the child",
        act: "Chapter 1: Story of the Door",
        points: [
          "Hyde enters the novella through an act of **violence against innocence** — his very first appearance defines him through cruelty, ensuring the reader's moral framework is established before any complexity is introduced.",
          "The incident is narrated **secondhand** by Enfield to Utterson — Stevenson's use of embedded narration means Hyde is always mediated through other perspectives, reinforcing his status as an **unknowable** figure.",
          "**AO2 structure**: as the opening event of the novella, this trampling functions as the **inciting incident** that sets Utterson's investigation in motion, establishing the detective-fiction framework that Stevenson will ultimately subvert.",
        ],
      },
      {
        type: "entrance",
        moment: "Hyde's transformation witnessed by Dr Lanyon",
        act: "Chapter 9: Dr Lanyon's Narrative",
        points: [
          "This is the only moment where a transformation is directly **witnessed and narrated** — Lanyon's account provides the empirical evidence the novella has withheld, making it the climactic revelation of the text.",
          "Lanyon's horrified reaction — leading to his death — demonstrates that the **truth itself is fatal** to those who hold conventional Victorian worldviews; knowledge of duality is incompatible with orthodox certainty.",
        ],
      },
      {
        type: "exit",
        moment: "Hyde found dead in Jekyll's cabinet wearing Jekyll's clothes",
        act: "Chapter 8: The Last Night",
        points: [
          "The discovery of Hyde's body in Jekyll's **oversized clothing** is the novella's most potent visual image of duality — the ill-fitting garments physically demonstrate that Hyde was always contained within, and smaller than, Jekyll.",
          "Hyde's death by **suicide** (implied self-administered poison) denies the reader and Utterson any confrontation or justice — the mystery is solved not through detection but through the **posthumous written confessions** that follow.",
          "**AO2 structure**: Stevenson places the dramatic climax (Chapter 8) before the explanatory chapters (9-10), meaning the reader experiences the **horror before the understanding** — this inverted structure is a hallmark of the Gothic genre.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  3. MR UTTERSON
  // ══════════════════════════════════════════════════════════
  {
    name: "Mr Utterson",
    textSlug: "jekyll-hyde",
    traits: [
      // ── rational / dutiful ──
      {
        trait: "rational / dutiful",
        colour: "teal",
        quotes: [
          {
            quote:
              "If he be Mr Hyde, I shall be Mr Seek",
            who: "Mr Utterson",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The **pun** on 'Hyde/hide' and 'Seek' transforms the investigation into a children's game — yet beneath the wordplay lies Utterson's determination to use **reason and persistence** to uncover the truth.",
              "The **conditional structure** ('If... I shall') reflects Utterson's legalistic mind — he approaches the mystery as a case to be built methodically, embodying the **rational Enlightenment values** that the novella ultimately calls into question.",
              "**AO2 structure**: this declaration positions Utterson as the novella's **detective figure**, establishing the investigative framework that drives the plot — yet unlike a conventional detective, Utterson consistently fails to see the truth that is right in front of him.",
            ],
          },
          {
            quote:
              "a man of a rugged countenance that was never lighted by a smile... cold, scanty and embarrassed in discourse",
            who: "Narrator (describing Utterson)",
            act: "Chapter 1: Story of the Door",
            points: [
              "The adjective **'rugged'** suggests durability and moral strength, while the absence of a smile implies rigid **emotional suppression** — Utterson embodies the ideal Victorian gentleman who subordinates feeling to duty.",
              "The tricolon **'cold, scanty and embarrassed'** describes his conversation style as deliberately restrained — Stevenson presents Utterson's reticence not as a flaw but as a **social performance** of respectability.",
              "**AO3 context**: Utterson's emotional austerity reflects the Victorian cult of **masculine self-control** — the 'good' man is defined not by warmth but by his ability to contain and suppress personal feeling.",
            ],
          },
          {
            quote:
              "he was austere with himself; drank gin when he was alone, to mortify a taste for vintages",
            who: "Narrator",
            act: "Chapter 1: Story of the Door",
            points: [
              "The verb **'mortify'** (literally 'to kill') reveals Utterson practising a form of **self-punishment** — he deliberately denies himself pleasure, mirroring Jekyll's repression but through discipline rather than science.",
              "The detail of drinking **gin instead of fine wine** is a quietly ironic form of self-denial — Utterson still drinks, but chooses the less pleasurable option, suggesting his virtue is performative and his desires are merely **managed, not eliminated**.",
            ],
          },
        ],
      },
      // ── loyal ──
      {
        trait: "loyal",
        colour: "purple",
        quotes: [
          {
            quote:
              "I incline to Cain's heresy... I let my brother go to the devil in his own way",
            who: "Mr Utterson",
            act: "Chapter 1: Story of the Door",
            points: [
              "The **biblical allusion** to Cain — who asked 'Am I my brother's keeper?' after murdering Abel — is deeply ironic: Utterson's loyalty expresses itself as a refusal to judge, yet this very tolerance allows Hyde's evil to go unchecked.",
              "The phrase **'go to the devil'** functions as both a colloquial expression and a literal foreshadowing — Jekyll's friends do indeed lose him to a devilish alter ego, making Utterson's casual idiom **darkly prophetic**.",
              "**AO3 context**: this non-interventionist philosophy reflects the **Victorian gentleman's code** — loyalty means discretion and privacy, not confrontation, even when silence enables harm.",
            ],
          },
          {
            quote:
              "if it came to that... I care nothing for your Mr Hyde; but for your friend Jekyll's sake, I would do a great deal",
            who: "Mr Utterson (to Hyde)",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The **antithesis** between 'nothing' (for Hyde) and 'a great deal' (for Jekyll) reveals that Utterson's loyalty is intensely **personal** — he acts not from abstract morality but from devotion to an individual.",
              "Utterson directly addresses Hyde as a threat to Jekyll, yet his loyalty prevents him from recognising their **identity** — dramatic irony pervades this scene as the reader senses what Utterson cannot conceive.",
            ],
          },
          {
            quote:
              "God forgive us, God forgive us",
            who: "Mr Utterson",
            act: "Chapter 8: The Last Night",
            points: [
              "The **repetition** of 'God forgive us' reveals the depth of Utterson's emotional collapse — this is the first moment where his stoic composure completely breaks, marking the failure of **rational self-control**.",
              "The **plural pronoun** 'us' extends guilt beyond Utterson alone — he instinctively recognises a collective failure, acknowledging that their discretion and loyalty may have enabled Jekyll's downfall.",
              "**AO2 language**: the shift to **religious exclamation** from a character defined by legal rationality signals that the events have exceeded the explanatory power of reason — only faith can respond to what reason cannot comprehend.",
            ],
          },
        ],
      },
      // ── repressed ──
      {
        trait: "repressed",
        colour: "amber",
        quotes: [
          {
            quote:
              "he was dreaming after his own fashion, and Mr Hyde grew before his mind's eye",
            who: "Narrator",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "Utterson's **dreams and nightmares** about Hyde reveal the failure of his waking rationality — the subconscious mind processes what the conscious mind refuses to acknowledge, reflecting the novella's broader theme of **repression and return**.",
              "The phrase **'his own fashion'** implies that even Utterson's dreams are characteristically restrained — Stevenson suggests that repression shapes not only waking behaviour but the very texture of the inner life.",
            ],
          },
          {
            quote:
              "with a sadness of the spirit, he put the paper in his pocket and went about his business",
            who: "Narrator (after Utterson reads Jekyll's will)",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The phrase **'sadness of the spirit'** elevates Utterson's distress beyond surface emotion to something deeply existential — yet he immediately returns to 'his business', demonstrating the Victorian imperative to **subordinate feeling to function**.",
              "**AO2 structure**: Stevenson repeatedly shows Utterson encountering disturbing evidence and then **deferring action** — this pattern of delayed response mirrors the novella's own structure of deferred revelation.",
              "The verb **'put... in his pocket'** is a subtle metaphor for repression — Utterson physically conceals the troubling document, just as he psychologically buries his anxieties rather than confronting them.",
            ],
          },
          {
            quote:
              "I have no desire to pry... but I confess I am uneasy about poor Jekyll",
            who: "Mr Utterson",
            act: "Chapter 6: Remarkable Incident of Dr Lanyon",
            points: [
              "The tension between **'no desire to pry'** and 'I confess I am uneasy' captures Utterson's central internal conflict — his gentleman's code demands discretion, but his genuine care for Jekyll creates an opposing moral pressure.",
              "The adjective **'poor'** reveals paternalistic concern — Utterson infantilises Jekyll, positioning himself as protector, which paradoxically blinds him to the possibility that Jekyll is the **source** of his own danger.",
            ],
          },
        ],
      },
      // ── investigative ──
      {
        trait: "investigative",
        colour: "red",
        quotes: [
          {
            quote:
              "if he shall be Mr Hyde... I shall be Mr Seek",
            who: "Mr Utterson",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "Utterson frames his investigation as a personal **quest** — the language of seeking positions him as a detective figure driven by loyalty as much as curiosity.",
              "**AO2 form**: Utterson's role as investigator drives the novella's **mystery structure** — yet his ultimate failure to solve the case through detection (he must rely on posthumous confessions) subverts the conventions of detective fiction that Stevenson's contemporary readers would have expected.",
            ],
          },
          {
            quote:
              "I shall consider it my duty to break in that door",
            who: "Mr Utterson",
            act: "Chapter 8: The Last Night",
            points: [
              "The noun **'duty'** transforms a violent act (breaking down a door) into a moral obligation — Utterson finally abandons his policy of non-interference, but only when framed as **professional responsibility** rather than emotional urgency.",
              "The physical act of **breaking the door** symbolises the collapse of the barriers between public and private that have sustained the novella's secrecy — Utterson's investigation literally forces open what Jekyll has kept locked away.",
              "**AO3 context**: this moment dramatises the tension between the Victorian gentleman's respect for **privacy** and his responsibility to intervene — Utterson can only act when privacy becomes dangerous.",
            ],
          },
          {
            quote:
              "we shall be in a position to bring the body of this poor self-destroyer to the knowledge of the police",
            who: "Mr Utterson",
            act: "Chapter 8: The Last Night",
            points: [
              "The phrase **'poor self-destroyer'** reveals that Utterson still does not understand the full truth — he pities Jekyll/Hyde as a suicide victim rather than recognising the duality, highlighting his **cognitive limitations**.",
              "The legalistic language of being **'in a position'** and involving 'the police' shows Utterson retreating to institutional frameworks — even at the crisis point, he instinctively reaches for the structures of **law and order**.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Utterson introduced as the novella's central consciousness",
        act: "Chapter 1: Story of the Door",
        points: [
          "Utterson opens the novella and functions as the reader's primary **focaliser** — Stevenson channels the narrative through this rational, reserved perspective, meaning the reader is constrained by Utterson's limited understanding.",
          "His introduction alongside Enfield during a **Sunday walk** establishes the world of respectable, routine Victorian masculinity — a world that Hyde's intrusion will systematically disrupt.",
          "**AO2 form**: by choosing a lawyer rather than a scientist or artist as his protagonist, Stevenson ensures that the narrative voice is defined by **caution and evidence**, making the eruption of the irrational all the more shocking.",
        ],
      },
      {
        type: "entrance",
        moment: "Utterson breaks down the cabinet door",
        act: "Chapter 8: The Last Night",
        points: [
          "This is Utterson's most **decisive action** in the entire novella — after seven chapters of restrained observation, he finally intervenes physically, marking the point where gentlemanly discretion fails.",
          "The discovery of Hyde's body forces Utterson to confront the limits of **rational explanation** — his investigation has led him to a truth that his worldview cannot accommodate.",
        ],
      },
      {
        type: "absence",
        moment: "Utterson absent from the final two chapters of confession",
        act: "Chapter 9: Dr Lanyon's Narrative",
        points: [
          "Utterson disappears as a narrative presence in the final two chapters, replaced by Lanyon's and Jekyll's **first-person accounts** — this structural shift acknowledges that Utterson's rational perspective is insufficient to explain the truth.",
          "**AO2 structure**: the novella's movement from Utterson's third-person investigation to first-person confessions mirrors the transition from **external observation to internal revelation** — the detective must yield to the testimony of those who experienced the horror directly.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  4. DR LANYON
  // ══════════════════════════════════════════════════════════
  {
    name: "Dr Lanyon",
    textSlug: "jekyll-hyde",
    traits: [
      // ── orthodox / conventional ──
      {
        trait: "orthodox / conventional",
        colour: "teal",
        quotes: [
          {
            quote:
              "I sometimes think if we knew all, we should be more glad to get away",
            who: "Dr Lanyon",
            act: "Chapter 6: Remarkable Incident of Dr Lanyon",
            points: [
              "The **conditional** 'if we knew all' presents complete knowledge as something **unbearable** — Lanyon's philosophy is built on the comfort of not knowing, which makes him uniquely vulnerable to the shattering revelation of Jekyll's experiment.",
              "The euphemism **'get away'** (meaning death) reveals a morbid undercurrent beneath Lanyon's conventional respectability — even before witnessing the transformation, he senses that reality contains horrors best left undiscovered.",
              "**AO3 context**: this reflects the Victorian tension between scientific **progress and ignorance** — Lanyon represents those who preferred the safety of established knowledge to the dangers of radical inquiry.",
            ],
          },
          {
            quote:
              "he began to go wrong, wrong in mind... such unscientific balderdash",
            who: "Dr Lanyon (speaking about Jekyll)",
            act: "Chapter 2: Search for Mr Hyde",
            points: [
              "The dismissive noun **'balderdash'** reveals Lanyon's intellectual rigidity — he cannot entertain ideas that fall outside orthodox scientific frameworks, positioning him as a foil to Jekyll's transgressive experimentation.",
              "The repetition of **'wrong, wrong'** intensifies Lanyon's condemnation — the doubling of the word ironically mirrors the very duality he refuses to accept.",
              "**AO3 context**: the dispute between Lanyon and Jekyll reflects the real Victorian debate between **established science and emerging fields** — Lanyon embodies the conservative establishment that resisted radical new theories.",
            ],
          },
        ],
      },
      // ── horrified ──
      {
        trait: "horrified",
        colour: "purple",
        quotes: [
          {
            quote:
              "I have had a shock and I shall never recover",
            who: "Dr Lanyon",
            act: "Chapter 6: Remarkable Incident of Dr Lanyon",
            points: [
              "The **absolute finality** of 'never recover' transforms a psychological experience into a death sentence — Lanyon's worldview is so rigid that its destruction is literally fatal, suggesting that **orthodoxy cannot survive** exposure to transgressive truth.",
              "The noun **'shock'** is clinically understated — Lanyon uses the language of medical diagnosis to describe his own spiritual devastation, revealing his inability to process the experience in any framework other than the **scientific**.",
              "**AO2 structure**: Lanyon's decline from this point is rapid — Stevenson compresses his deterioration into a few pages, using **narrative pace** to convey how swiftly the encounter with Hyde dismantles him.",
            ],
          },
          {
            quote:
              "my life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours",
            who: "Dr Lanyon",
            act: "Chapter 9: Dr Lanyon's Narrative",
            points: [
              "The **tricolon** of escalating horrors — shaken roots, sleeplessness, constant terror — creates a rhythm of mounting despair, each clause intensifying the psychological destruction.",
              "The metaphor **'shaken to its roots'** imagines Lanyon's identity as a tree being uprooted — the foundation of his entire worldview has been destroyed by witnessing the transformation, leaving nothing to anchor him.",
              "The **personification** of terror that 'sits by me' makes horror into a constant companion — Stevenson transforms Lanyon's psychological state into a Gothic image of being haunted by knowledge itself.",
            ],
          },
          {
            quote:
              "O God! I screamed, and O God! again and again",
            who: "Dr Lanyon",
            act: "Chapter 9: Dr Lanyon's Narrative",
            points: [
              "The **exclamatory repetition** breaks completely from Lanyon's usual measured, scientific register — this is the moment where rational language collapses into raw, inarticulate terror.",
              "The invocation of **God** by a man of science reveals that the transformation exceeds the explanatory power of the scientific worldview — Lanyon instinctively reaches for **religious language** when faced with the incomprehensible.",
            ],
          },
        ],
      },
      // ── principled ──
      {
        trait: "principled",
        colour: "amber",
        quotes: [
          {
            quote:
              "I wish to see or hear no more of Dr Jekyll... I am quite done with that person",
            who: "Dr Lanyon",
            act: "Chapter 6: Remarkable Incident of Dr Lanyon",
            points: [
              "The **imperative finality** of 'quite done' severs the relationship completely — Lanyon's principles are so absolute that friendship cannot survive a fundamental moral disagreement.",
              "The shift from **'Dr Jekyll'** to 'that person' enacts a deliberate dehumanisation — Lanyon strips Jekyll of his professional title and replaces it with a dismissive pronoun, linguistically excommunicating him from the fraternity of respectable men.",
              "**AO3 context**: this rupture dramatises the **irreconcilable divide** between conservative and progressive Victorian science — Lanyon sees Jekyll's work not as misguided but as morally contaminating.",
            ],
          },
          {
            quote:
              "the moral turpitude that man unveiled to me... I cannot bring my mind to set on paper",
            who: "Dr Lanyon",
            act: "Chapter 9: Dr Lanyon's Narrative",
            points: [
              "The phrase **'moral turpitude'** is a legal and theological term for extreme depravity — Lanyon reaches for the strongest possible language to condemn what he has witnessed, yet even this proves inadequate.",
              "The confession that he **'cannot bring my mind to set on paper'** reveals a second, deeper horror — not just the transformation itself but the impossibility of recording it, placing the experience beyond the reach of **documentation and reason**.",
            ],
          },
        ],
      },
      // ── tragic (destroyed by truth) ──
      {
        trait: "tragic",
        colour: "red",
        quotes: [
          {
            quote:
              "the rosy man had grown pale; his flesh had fallen away; he was visibly balder and older",
            who: "Narrator (describing Lanyon's deterioration)",
            act: "Chapter 6: Remarkable Incident of Dr Lanyon",
            points: [
              "The **physical transformation** of Lanyon mirrors Hyde's own deformity — knowledge of duality literally reshapes Lanyon's body, suggesting that **truth has a physical cost** in the novella's universe.",
              "The tricolon **'pale... fallen away... balder and older'** charts a rapid ageing process — Stevenson condenses what should take years into weeks, creating an almost supernatural deterioration that parallels the Gothic transformations elsewhere in the text.",
              "**AO2 structure**: Lanyon's visible decline provides external, physical evidence that something catastrophic has occurred — before any confession is read, his body tells the story his words cannot.",
            ],
          },
          {
            quote:
              "he had his death-warrant written legibly upon his face",
            who: "Narrator (describing Lanyon)",
            act: "Chapter 6: Remarkable Incident of Dr Lanyon",
            points: [
              "The metaphor of a **'death-warrant'** written on the face transforms Lanyon's body into a legal document — a death sentence that has been passed and cannot be appealed, blending **legal and medical imagery**.",
              "The adverb **'legibly'** implies that Lanyon's doom is clearly readable to any observer — yet no one, including Utterson, acts on this visible evidence, reinforcing the novella's theme of **wilful blindness** within Victorian society.",
            ],
          },
          {
            quote:
              "if ever I read Satan's signature upon a face, it is on that of your new friend",
            who: "Dr Lanyon (referring to Hyde before the full revelation)",
            act: "Chapter 9: Dr Lanyon's Narrative",
            points: [
              "The metaphor of **'Satan's signature'** blends the diabolic with the bureaucratic — evil has literally signed its name on Hyde's face, combining Gothic horror with the **legalistic language** that pervades the novella.",
              "This statement is rich with **dramatic irony** — Lanyon detects evil in Hyde's face without realising that Hyde is Jekyll, making his principled moral certainty simultaneously impressive and tragically limited.",
              "**AO3 context**: the reference to Satan reflects the Victorian tendency to understand moral transgression through **religious frameworks**, even among men of science — Lanyon's worldview mixes empiricism with biblical morality.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Lanyon witnesses Hyde's transformation into Jekyll",
        act: "Chapter 9: Dr Lanyon's Narrative",
        points: [
          "This is the novella's **pivotal revelation** — the only firsthand, narrated account of the transformation, providing the empirical evidence that the text has withheld until its penultimate chapter.",
          "Lanyon's role as **witness** is significant: he is the most orthodox, conventional character, meaning his testimony carries maximum credibility — if Lanyon, the sceptic, confirms the transformation, the reader must accept it.",
          "**AO2 structure**: by placing this revelation in a letter read posthumously, Stevenson ensures the truth arrives **too late to be acted upon** — knowledge comes only after the ability to intervene has passed.",
        ],
      },
      {
        type: "exit",
        moment: "Lanyon's death following the traumatic revelation",
        act: "Chapter 6: Remarkable Incident of Dr Lanyon",
        points: [
          "Lanyon's death is reported rather than dramatised — Stevenson keeps it offstage, allowing the reader to infer that knowledge itself was the **cause of death**, making truth the novella's most dangerous force.",
          "His death removes the only living witness to the transformation, ensuring that by the time Utterson reads the confessions, there is **no one left to corroborate** them — the truth is preserved only in writing.",
        ],
      },
      {
        type: "absence",
        moment: "Lanyon's estrangement from Jekyll before his death",
        act: "Chapter 6: Remarkable Incident of Dr Lanyon",
        points: [
          "Lanyon's refusal to see or speak to Jekyll creates a **social void** — the breakdown of this professional friendship signals to Utterson that something catastrophic has occurred, yet the cause remains hidden.",
          "**AO2 structure**: Lanyon's absence from Jekyll's life parallels Jekyll's increasing isolation — Stevenson uses the **disintegration of social bonds** as a structural metaphor for the disintegration of Jekyll's identity.",
          "**AO3 context**: in Victorian professional society, the severing of a long friendship between two doctors would have been deeply significant — it represents a breach of the **homosocial networks** that sustained gentlemanly reputation.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  5. POOLE
  // ══════════════════════════════════════════════════════════
  {
    name: "Poole",
    textSlug: "jekyll-hyde",
    traits: [
      // ── loyal / devoted ──
      {
        trait: "loyal / devoted",
        colour: "teal",
        quotes: [
          {
            quote:
              "I have been afraid for about a week... and I can bear it no more",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The **temporal specificity** 'about a week' grounds Poole's fear in sustained, daily experience — unlike the gentlemen who encounter Hyde in isolated incidents, Poole has lived with the horror continuously as part of his **domestic labour**.",
              "The phrase **'can bear it no more'** reveals that Poole's decision to seek help is an act of desperation, not impulsiveness — Stevenson shows a servant whose loyalty has been pushed to its absolute breaking point.",
              "**AO3 context**: a Victorian servant seeking outside help against his master's wishes was a profound transgression of the **class hierarchy** — Poole's action demonstrates that fear has overridden the social deference expected of his station.",
            ],
          },
          {
            quote:
              "twenty years I have served him",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The **length of service** establishes Poole's authority as an observer — after two decades, he knows Jekyll's habits, voice, and bearing intimately, making his testimony that something is wrong both credible and devastating.",
              "The verb **'served'** carries both professional and quasi-feudal connotations — Poole's devotion is defined by duty and hierarchy, yet his willingness to act against Jekyll's instructions reveals a loyalty that transcends mere **obedience**.",
            ],
          },
          {
            quote:
              "it is well done, Poole; we may save yet another life... it is our sad duty to open this door",
            who: "Mr Utterson (to Poole)",
            act: "Chapter 8: The Last Night",
            points: [
              "Utterson's praise **'it is well done'** acknowledges Poole's courage in crossing class boundaries — the lawyer validates the servant's judgement, creating a rare moment of **cross-class solidarity** united by shared concern.",
              "The phrase **'our sad duty'** uses the possessive 'our' to bind master-class and servant-class together in a shared obligation — Stevenson briefly dissolves the Victorian class hierarchy in the face of a greater moral imperative.",
            ],
          },
        ],
      },
      // ── observant ──
      {
        trait: "observant",
        colour: "purple",
        quotes: [
          {
            quote:
              "that thing was not my master",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The demonstrative **'that thing'** dehumanises whatever is behind the door — Poole's language instinctively denies it human status, mirroring the novella's broader linguistic dehumanisation of Hyde.",
              "The possessive **'my master'** reveals that Poole's powers of observation are sharpened by the intimacy of the servant-master relationship — he can detect changes that even Jekyll's close friends cannot, because he occupies the **domestic space** where pretence is hardest to maintain.",
              "**AO3 context**: the servant's testimony challenges the Victorian assumption that the lower classes lacked the perceptiveness of their social superiors — Poole's observation is more accurate than Utterson's rational analysis.",
            ],
          },
          {
            quote:
              "it was crying night and day for some sort of medicine... every time I brought the stuff back, there would be another paper telling me to return it, because it was not pure",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The detail of **rejected medicines** reveals Poole's meticulous attention to the practical details of his master's behaviour — he tracks the pattern of desperate requests and frustrated returns like a detective assembling evidence.",
              "The phrase **'crying night and day'** humanises the voice behind the door while simultaneously making it pathetic — Poole's observation strips away any remaining dignity from whatever Jekyll has become.",
              "**AO2 structure**: Poole's account of repeated, failed attempts to find the right chemical provides **concrete, physical evidence** of Jekyll's deterioration — it translates the abstract horror of duality into mundane, domestic reality.",
            ],
          },
          {
            quote:
              "I saw him at the far end of the garden... he was digging among the boxes... he gave a kind of cry, and whipped upstairs",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "Poole's **eyewitness account** places him in the position of surveillance — the servant who sees everything from the margins, an invisible observer within the household's power structure.",
              "The verb **'whipped'** conveys frantic, animal-like speed — through Poole's eyes, the reader sees Hyde's desperate, hunted behaviour, adding physical urgency to the chapter's mounting tension.",
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
              "Mr Utterson, sir, if that was my master, why had he a mask upon his face?",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The **rhetorical question** challenges Utterson's authority directly — Poole does not merely report his observations but constructs a logical argument, demonstrating an intellectual courage that transgresses his expected social role.",
              "The detail of the **mask** adds a layer of Gothic horror — the concealment of the face symbolises the broader concealment of identity that defines the novella, and Poole is the one who insists this concealment be confronted.",
              "**AO3 context**: a servant publicly questioning a gentleman's explanation would have been a significant breach of Victorian **social protocol** — Poole's courage lies not only in facing Hyde but in challenging the class hierarchy.",
            ],
          },
          {
            quote:
              "I have seen him! ... it was like a monkey... it went down the stairs like a rat",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The **animal similes** 'like a monkey... like a rat' place Poole's observations within the novella's pattern of **atavistic imagery** — even the servant instinctively reaches for animalistic comparisons when describing Hyde.",
              "The exclamatory **'I have seen him!'** carries the force of testimony — Poole speaks with the conviction of a witness, and his courage in reporting what he has seen drives the chapter's dramatic momentum toward the door-breaking climax.",
            ],
          },
          {
            quote:
              "we thought it was you, sir, so we all came out and took to our heels... all frightened",
            who: "Poole",
            act: "Chapter 8: The Last Night",
            points: [
              "The admission **'all frightened'** is honest and unashamed — Poole does not attempt to perform bravery, making his subsequent decision to confront the threat all the more courageous because it acknowledges the genuine fear he has overcome.",
              "The collective **'we all'** reveals that the entire servant household shares Poole's terror — Stevenson uses the servants as a communal voice of instinctive moral judgement, contrasting with the gentlemen's rationalising and prevarication.",
            ],
          },
        ],
      },
      // ── representative of the servant class ──
      {
        trait: "representative of servant class",
        colour: "red",
        quotes: [
          {
            quote:
              "the servants, men and women, stood huddled together like a flock of sheep",
            who: "Narrator",
            act: "Chapter 8: The Last Night",
            points: [
              "The **simile** 'like a flock of sheep' is ambiguous — it conveys both vulnerable innocence and the Victorian perception of servants as a collective, undifferentiated mass, reflecting **class-based assumptions** about individuality and agency.",
              "The verb **'huddled'** conveys physical fear and communal solidarity — the servants instinctively group together for protection, demonstrating a form of collective response unavailable to the isolated gentlemen of the novella.",
              "**AO3 context**: the presence of 'men and women' is notable in a novella otherwise dominated by **male characters** — the servant class is the only space where women appear, highlighting the gendered exclusions of the Victorian professional world.",
            ],
          },
          {
            quote:
              "when the servants heard a man's step in the cabinet, it was not the step of their master",
            who: "Narrator",
            act: "Chapter 8: The Last Night",
            points: [
              "The servants identify the imposter through **sound rather than sight** — their knowledge of Jekyll is embodied and sensory, rooted in daily domestic proximity rather than social or intellectual familiarity.",
              "The phrase **'their master'** reinforces the possessive, hierarchical nature of the servant-master relationship — yet it is precisely this closeness that gives the servants diagnostic powers the gentlemen lack.",
            ],
          },
          {
            quote:
              "Poole, with the kitchen poker in his hand",
            who: "Narrator",
            act: "Chapter 8: The Last Night",
            points: [
              "The **kitchen poker** is a weapon drawn from domestic labour — Poole cannot access a gentleman's walking cane or sword but improvises with the tools of his own class, making his courage both **practical and symbolically grounded** in his servant identity.",
              "**AO3 context**: the image of a servant armed with a household implement confronting his master's door is a quiet moment of **class transgression** — Poole temporarily assumes a role of authority that his social position normally forbids.",
              "**AO2 language**: Stevenson's specific mention of the poker is a carefully chosen detail that **characterises through objects** — Poole is defined by the implements of service even in his most heroic moment.",
            ],
          },
        ],
      },
    ],
    dramaticMoments: [
      {
        type: "entrance",
        moment: "Poole arrives at Utterson's door seeking help",
        act: "Chapter 8: The Last Night",
        points: [
          "Poole's arrival at Utterson's home **reverses the normal social direction** of visits — a servant coming to a gentleman's house uninvited signals extreme urgency and breaks the conventions of Victorian domestic protocol.",
          "This entrance initiates the novella's **climactic chapter** — Stevenson uses the servant's transgression of social boundaries to launch the final sequence of revelations, making Poole the catalyst for the narrative's resolution.",
          "**AO2 structure**: Poole does not appear significantly until Chapter 8, meaning his sudden prominence creates a structural shift — the novella's climax is driven not by the gentlemen but by the servant class.",
        ],
      },
      {
        type: "entrance",
        moment: "Poole leads the assault on Jekyll's cabinet door",
        act: "Chapter 8: The Last Night",
        points: [
          "Although Utterson gives the formal order to break the door, it is **Poole who wields the axe** — the physical action falls to the servant while the gentleman provides the legal and moral authorisation, reflecting the Victorian division between intellectual and manual labour.",
          "The breaking of the door is the novella's most dramatically **violent domestic act** — it shatters the boundary between the private and public spheres that the entire novella has been built around.",
        ],
      },
      {
        type: "absence",
        moment: "Poole absent from the novella before Chapter 8",
        act: "Chapter 1: Story of the Door",
        points: [
          "Poole is virtually invisible in the first seven chapters — his **absence from the narrative** mirrors the invisibility of the servant class in Victorian public life, despite their constant presence in domestic spaces.",
          "**AO2 structure**: Stevenson's decision to marginalise Poole until the climax mirrors the novella's broader strategy of **delayed revelation** — the most important witness is the one whose testimony comes last.",
          "**AO3 context**: the erasure of servants from the main narrative reflects the Victorian literary convention of treating domestic workers as part of the **furniture** rather than as individuals with agency — Poole's dramatic late entrance challenges this convention.",
        ],
      },
    ],
  },
];
