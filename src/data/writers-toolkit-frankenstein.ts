// ─── Writer's Toolkit — Frankenstein (Mary Shelley) ───

import type { WritersToolkit } from "./writers-toolkit-inspector-calls";

export const FRANKENSTEIN_TOOLKIT: WritersToolkit = {
  textSlug: "frankenstein",
  headerQuote: "I ought to be thy Adam, but I am rather the fallen angel.",
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
          label: "Sublime / elevated diction",
          example:
            '"The immense mountains and precipices that overhung me on every side — the sound of the river raging among the rocks, and the dashing of the waterfalls around, spoke of a power mighty as Omnipotence"',
          effect:
            "Shelley employs Romantic elevated diction to convey nature's overwhelming, almost divine power — the language positions Victor as insignificant before the natural world, reinforcing the Romantic idea that humanity should respect rather than seek to surpass nature's authority.",
        },
        {
          label: "Gothic imagery",
          example:
            '"By the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs"',
          effect:
            "The dim light, the lifeless eye, and the convulsive movement create a claustrophobic atmosphere of horror — Shelley makes the moment of creation repulsive rather than triumphant, immediately undermining Victor's scientific ambition with visceral disgust.",
        },
        {
          label: "Pathetic fallacy",
          example:
            '"the rain pattered dismally against the panes, and my candle was nearly burnt out" on the night of the Creature\'s creation',
          effect:
            "The dismal rain and dying candle externalise Victor's inner dread and moral darkness — Shelley uses the weather to signal that this act of creation is a perversion of the natural order, an event the world itself mourns.",
        },
        {
          label: "Simile",
          example:
            '"I wandered like an evil spirit, for I had committed deeds of mischief beyond description horrible"',
          effect:
            "Victor compares himself to a demonic figure, revealing his growing awareness that he — not the Creature — is the source of evil. The simile inverts the expected roles of creator and creation, positioning Victor as the morally fallen being.",
        },
        {
          label: "Metaphor",
          example:
            '"I bore a hell within me, and finding myself unsympathised with, wished to tear up the trees, spread havoc and destruction around me"',
          effect:
            "The Creature internalises his suffering as a literal hell — the metaphor draws on Milton's Satan ('myself am Hell') and reveals how social rejection has transformed innocent longing into destructive rage, placing blame on society rather than inherent monstrosity.",
        },
        {
          label: "Personification",
          example:
            '"the light of day invaded my closed eyelids" as the Creature first experiences the world',
          effect:
            "Light is personified as an aggressive force — even something as benign as daylight 'invades' the Creature, foreshadowing a world that will treat his very existence as an intrusion, hostile to him from the first moment of consciousness.",
        },
        {
          label: "Biblical / Miltonic allusions",
          example:
            '"I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed"',
          effect:
            "The Creature casts Victor as a negligent God and himself as a blameless Satan — the allusion to Paradise Lost reframes the novel's central conflict as a theological argument about the creator's responsibility for the suffering of the created.",
        },
        {
          label: "Promethean imagery",
          example:
            '"Like the archangel who aspired to omnipotence, I am chained in an eternal hell"',
          effect:
            "Victor's allusion to Prometheus/Satan connects his ambition to the mythic punishment of those who steal divine power — Shelley warns that transgressing the boundary between human and God leads not to enlightenment but to eternal suffering.",
        },
        {
          label: "Emotive language",
          example:
            '"Oh! no mortal could support the horror of that countenance. A mummy again endued with animation could not be so hideous as that wretch"',
          effect:
            "Victor's emotionally charged description reveals more about his own revulsion than about the Creature's actual nature — Shelley uses Victor's hyperbolic disgust to expose the superficiality of his judgement and his failure as a parent.",
        },
        {
          label: "Rhetorical questions",
          example:
            '"Have my murderous machinations deprived you also, my dearest Henry, of life?"',
          effect:
            "Victor's anguished question reveals his guilt and self-awareness — the rhetorical form dramatises his tortured conscience, as he already knows the answer but cannot bring himself to state it as fact, retreating into interrogative evasion.",
        },
        {
          label: "Sensory language",
          example:
            '"the light became more and more oppressive to me, and the heat wearying me as I walked, I sought a place where I could receive shade"',
          effect:
            "The Creature's account of his earliest sensory experiences creates empathy by showing his vulnerability — Shelley presents him as an infant overwhelmed by a world he does not yet understand, evoking sympathy before the reader can judge him.",
        },
        {
          label: "Scientific lexis",
          example:
            '"I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet"',
          effect:
            "The clinical, detached vocabulary — 'instruments', 'infuse', 'lifeless thing' — reveals Victor's dehumanising treatment of his creation even before it lives, reducing a being to an object and foreshadowing his inability to accept parental responsibility.",
        },
        {
          label: "Imagery of light and fire",
          example:
            '"I felt light, and hunger, and thirst, and darkness" / "I found a fire which had been left by some wandering beggars, and was overcome with delight at the warmth I experienced from it"',
          effect:
            "Light and fire symbolise both knowledge and danger throughout the novel — the Creature's discovery of fire parallels the Promethean myth, and Shelley uses this dual symbolism to argue that knowledge without moral guidance becomes destructive.",
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
          label: "Frame narrative (Walton's letters)",
          example:
            "The novel opens and closes with Captain Walton's letters to his sister Margaret Saville, framing the entire story",
          effect:
            "Walton's frame provides an external witness to Victor's tale — his letters to Margaret anchor the extraordinary events in a recognisable epistolary form, lending credibility while also inviting the reader to question how much is filtered through each narrator's perspective.",
        },
        {
          label: "Nested narration (Walton → Victor → Creature)",
          example:
            "Walton narrates Victor's story, which in turn contains the Creature's own first-person account of his experiences",
          effect:
            "The three-layered narration creates a Russian-doll structure in which the most marginalised voice (the Creature) is buried deepest — Shelley forces the reader to dig through layers of privilege and prejudice to reach the truth of the Creature's suffering.",
        },
        {
          label: "Non-linear timeline",
          example:
            "Victor tells Walton his story in retrospect; the Creature's narrative loops back to events before Victor's account resumes",
          effect:
            "The disrupted chronology mirrors the chaos Victor has unleashed — by hearing events out of order, the reader experiences the same disorientation and retrospective horror that characterises Victor's own guilt-ridden recollection.",
        },
        {
          label: "Dramatic irony",
          example:
            "Victor warns Walton against ambition — 'Learn from me, if not by my precepts, at least by my example' — yet Walton remains drawn to the same Promethean overreach",
          effect:
            "The reader recognises Victor's hypocrisy before Walton does — Victor's warning against ambition is undermined by his own continued refusal to take full responsibility, creating irony that deepens the novel's cautionary message.",
        },
        {
          label: "Parallel journeys",
          example:
            "Both Victor and the Creature travel across Europe in pursuit and flight; Walton's Arctic expedition mirrors Victor's quest for forbidden knowledge",
          effect:
            "The mirrored journeys suggest that creator and creation are bound together — Shelley structures the novel so that neither can escape the other, physically or morally, reinforcing the theme of inescapable parental responsibility.",
        },
        {
          label: "Doubling / mirroring",
          example:
            "Victor and the Creature progressively mirror each other — both become isolated, vengeful, and ultimately self-destructive",
          effect:
            "The structural doubling collapses the distinction between creator and monster — by the novel's end, Victor's obsessive pursuit is as monstrous as anything the Creature has done, forcing the reader to reconsider who the real monster is.",
        },
        {
          label: "Epistolary frame",
          example:
            '"You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings" — Walton\'s opening letter',
          effect:
            "The letter form creates intimacy and immediacy — Walton writes directly to his sister, drawing the reader into the position of confidant and making the extraordinary events feel personal rather than distant.",
        },
        {
          label: "Retrospective narration",
          example:
            '"I am by birth a Genevese, and my family is one of the most distinguished of that republic" — Victor begins his life story to Walton',
          effect:
            "Victor narrates with the hindsight of a ruined man — his retrospective awareness infuses every early memory with foreboding, and the reader must constantly assess whether his recollection is shaped by genuine insight or self-justifying distortion.",
        },
        {
          label: "Foreshadowing",
          example:
            '"Destiny was too potent, and her immutable laws had decreed my utter and terrible destruction"',
          effect:
            "Victor's fatalistic language prepares the reader for catastrophe — Shelley uses foreshadowing to create a sense of tragic inevitability, suggesting that once Victor transgressed natural boundaries, his destruction was inescapable.",
        },
        {
          label: "Climactic confrontation",
          example:
            "The Creature confronts Victor on the Mer de Glace, demanding that his creator hear his story and acknowledge his suffering",
          effect:
            "The Alpine confrontation is the novel's structural turning point — Shelley places it at the centre of the narrative so that the Creature's eloquent testimony rebalances the reader's sympathies and challenges Victor's authority as sole narrator.",
        },
        {
          label: "Arctic frame (opening / closing)",
          example:
            "The novel begins and ends in the Arctic — Walton's voyage opens the story, and Victor's death aboard Walton's ship closes it",
          effect:
            "The Arctic setting bookends the novel with images of sublime desolation and dangerous ambition — the frozen landscape symbolises both the barren consequences of overreach and the emotional coldness of a world that rejects the Creature.",
        },
        {
          label: "Shifting sympathy",
          example:
            "The reader's sympathy moves from Victor (the grieving scientist) to the Creature (the abandoned child) and back again as murders accumulate",
          effect:
            "Shelley deliberately engineers shifts in the reader's allegiance — by refusing to fix sympathy on one figure, she forces the reader to engage actively with questions of guilt, responsibility, and moral complexity rather than accepting a simple villain-hero binary.",
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
          label: "Multiple narrators",
          example:
            "Walton, Victor, and the Creature each narrate portions of the novel in their own voice",
          effect:
            "Three distinct perspectives prevent any single interpretation from dominating — Shelley democratises the narrative so that the Creature's voice carries as much authority as Victor's, challenging the reader to weigh competing claims to truth and sympathy.",
        },
        {
          label: "Unreliable narration (Victor)",
          example:
            '"I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on" — yet Victor also claims he acted from noble motives',
          effect:
            "Victor's account is riddled with self-pity and self-justification — he consistently blames fate, the Creature, and external forces while minimising his own failures, forcing the reader to read against his narration to uncover the truth.",
        },
        {
          label: "The Creature's eloquence",
          example:
            '"Shall each man find a wife for his bosom, and each beast have his mate, and I be alone? I had feelings of affection, and they were requited by detestation and scorn"',
          effect:
            "The Creature's articulate, emotionally powerful language contradicts his monstrous appearance — Shelley uses his eloquence to expose the prejudice of those who judge by surface, proving that monstrosity lies in rejection, not in the rejected.",
        },
        {
          label: "Letters as frame",
          example:
            "Walton's letters to Margaret Saville, Safie's letters to Felix, Elizabeth's letters to Victor",
          effect:
            "Letters pervade the novel at every level — they represent the human need for connection and communication, and their frequent failure to reach or persuade their recipients mirrors the novel's broader theme of isolation and failed understanding.",
        },
        {
          label: "Embedded narratives",
          example:
            "The Creature's account includes the De Lacey family's story, Safie's backstory, and his reading of Paradise Lost, Plutarch, and Sorrows of Werther",
          effect:
            "The nested stories-within-stories create a web of interconnected human experience — the De Lacey narrative provides a miniature model of the love, family, and acceptance the Creature craves but is denied, intensifying the pathos of his exclusion.",
        },
        {
          label: "Gothic atmosphere",
          example:
            '"It was on a dreary night of November, that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me"',
          effect:
            "Shelley builds Gothic tension through darkness, isolation, and psychological extremity — the 'dreary night' and Victor's agonised anticipation transform the creation scene from scientific triumph into a moment of dread and transgression.",
        },
        {
          label: "Sublime landscape descriptions",
          example:
            '"The abrupt sides of vast mountains were before me; the icy wall of the glacier overhung me... the thundering sound of the avalanche or the cracking, reverberated along the mountains"',
          effect:
            "The sublime Alpine landscapes dwarf human concerns and provide moments of awe that temporarily alleviate Victor's despair — Shelley uses Romantic nature descriptions to contrast the beauty of the natural world with the horror of Victor's unnatural creation.",
        },
        {
          label: "Confession narrative",
          example:
            '"Listen to my history, and you will perceive how irrevocably it is determined" — Victor to Walton',
          effect:
            "Victor's narrative takes the form of a confession — he addresses Walton as both audience and potential absolver, yet his confession is compromised by continued self-justification, raising the question of whether he truly repents or merely seeks sympathy.",
        },
        {
          label: "Testimony and witness",
          example:
            "Justine's trial and false confession; the Creature's testimony on the Mer de Glace; Walton as witness to Victor's dying words",
          effect:
            "The novel is structured around acts of testimony — characters plead their cases before listeners who may or may not believe them, reflecting Shelley's concern with justice, truth, and the power dynamics of who gets to speak and who is silenced.",
        },
        {
          label: "Dramatic irony",
          example:
            "Victor knows the Creature killed William but allows Justine to be executed, concealing his responsibility",
          effect:
            "The reader shares Victor's guilty knowledge while Justine and the Genevan court remain ignorant — this structural irony makes Victor complicit in Justine's death and forces the reader to judge him as morally culpable, not merely unfortunate.",
        },
        {
          label: "Intertextuality (Paradise Lost, Prometheus)",
          example:
            "The Creature reads Paradise Lost and identifies with both Adam and Satan; the novel's subtitle is 'The Modern Prometheus'",
          effect:
            "Shelley weaves classical and biblical narratives into the Creature's self-understanding — his reading of Milton gives him the language to articulate his suffering and to accuse his creator, transforming literary allusion into a weapon of moral argument.",
        },
        {
          label: "Shifting perspective",
          example:
            "The narrative moves from Walton's optimistic exploration to Victor's tortured confession to the Creature's anguished autobiography",
          effect:
            "Each perspective shift recontextualises what came before — the Creature's account in particular retroactively casts Victor in a harsher light, demonstrating that truth depends on who is permitted to tell their story.",
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
          label: "Gothic novel",
          example:
            "Isolated settings, transgressive science, supernatural horror, the doppelganger, and psychological terror pervade the novel",
          effect:
            "Shelley works within the Gothic tradition of Walpole and Radcliffe but pushes it into new territory — the horror comes not from ghosts or castles but from science and parental failure, modernising the Gothic for the industrial age.",
        },
        {
          label: "Science fiction (proto-)",
          example:
            "Victor uses galvanism and chemistry to animate dead matter — 'I succeeded in discovering the cause of generation and life; nay, more, I became myself capable of bestowing animation upon lifeless matter'",
          effect:
            "Shelley is widely regarded as a founder of science fiction — by grounding the Creature's creation in contemporary science rather than magic, she raises questions about technological ethics that remain urgent, making the novel prophetic as well as Gothic.",
        },
        {
          label: "Epistolary novel",
          example:
            "The novel's outer frame consists entirely of Walton's letters to his sister Margaret Saville",
          effect:
            "The epistolary form creates intimacy and immediacy — letters demand a specific reader (Margaret), and by extension the novel's audience becomes a private confidant, drawn into moral complicity with the events described.",
        },
        {
          label: "Romantic novel",
          example:
            "The sublime landscapes, intense emotion, solitary genius, and emphasis on individual feeling align with Romantic literary values",
          effect:
            "Shelley simultaneously celebrates and critiques Romanticism — Victor embodies the Romantic ideal of the solitary visionary, but his story exposes the dangers of unchecked individualism when it operates without empathy or social responsibility.",
        },
        {
          label: "Cautionary tale",
          example:
            '"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge"',
          effect:
            "Victor explicitly frames his story as a warning — Shelley positions the novel as a moral fable about the consequences of pursuing knowledge without ethical restraint, giving it a didactic purpose that addresses both Walton and the reader.",
        },
        {
          label: "Promethean myth retelling",
          example:
            "The novel's subtitle, 'The Modern Prometheus', directly invokes the Titan who stole fire from the gods and was eternally punished",
          effect:
            "Shelley recasts the Promethean myth for the scientific age — Victor's 'fire' is the spark of life itself, and his punishment (the destruction of everyone he loves) mirrors Prometheus's eternal torment, warning against human attempts to usurp divine creative power.",
        },
        {
          label: "Bildungsroman elements",
          example:
            "Both Victor's and the Creature's narratives trace a journey from innocence through education to disillusionment and despair",
          effect:
            "The dual coming-of-age structure creates a devastating parallel — both Victor and the Creature begin with idealism and curiosity, but where a traditional bildungsroman ends in maturity, Shelley's version ends in mutual destruction, subverting the genre's optimism.",
        },
        {
          label: "Frame narrative",
          example:
            "Three concentric narrative layers: Walton's letters enclose Victor's confession, which encloses the Creature's autobiography",
          effect:
            "The layered frame distances the reader from events while simultaneously drawing them deeper in — each narrator interprets the story differently, and the reader must navigate competing perspectives to construct their own moral judgement.",
        },
        {
          label: "Confession narrative",
          example:
            "Victor's account to Walton, and the Creature's account to Victor, both take the form of confessions seeking understanding if not absolution",
          effect:
            "The confessional mode invites sympathy while exposing self-deception — both Victor and the Creature present themselves as victims, and Shelley challenges the reader to determine where genuine suffering ends and self-serving rhetoric begins.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  5. SYMBOLISM AND MOTIFS
    // ══════════════════════════════════════════════════════════
    {
      title: "Symbolism and Motifs",
      colour: "red",
      columns: ["Symbol / Motif", "Meaning / Context", "Example"],
      rows: [
        {
          label: "Fire and ice",
          example:
            "Fire represents knowledge, ambition, and destruction; ice represents isolation, desolation, and the barren consequences of overreach",
          effect:
            "'I found a fire which had been left by some wandering beggars... I thrust my hand into the live embers, but quickly drew it out again with a cry of pain' — the Creature's discovery of fire mirrors the Promethean myth: knowledge illuminates but also burns.",
        },
        {
          label: "Light and darkness",
          example:
            "Light symbolises knowledge, hope, and discovery; darkness symbolises ignorance, despair, and moral blindness",
          effect:
            "'By the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open' — the creation scene takes place in near-darkness, suggesting that Victor's 'enlightenment' is really a descent into moral blindness.",
        },
        {
          label: "The Arctic",
          example:
            "The frozen wastes at the novel's opening and closing represent the ultimate isolation and the dangerous frontier of human ambition",
          effect:
            "Walton sails toward the pole seeking glory, just as Victor sought to conquer death — the Arctic symbolises the barren endpoint of unchecked ambition, a place of sublime beauty and lethal indifference where human pretensions are reduced to nothing.",
        },
        {
          label: "Mont Blanc / sublime nature",
          example:
            '"The immense mountains and precipices... the sound of the river raging among the rocks" — the Alpine landscape where Victor and the Creature confront each other',
          effect:
            "Mont Blanc represents nature's overwhelming power and indifference to human concerns — Shelley stages the novel's pivotal confrontation amid the sublime to remind both Victor and the reader that human ambition is dwarfed by forces far greater than itself.",
        },
        {
          label: "The Creature's appearance",
          example:
            '"His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness"',
          effect:
            "The Creature's hideous exterior conceals a sensitive, intelligent soul — his appearance becomes a symbol of society's superficial judgement, as every character (including Victor) rejects him on sight, proving that monstrosity is in the eye of the beholder.",
        },
        {
          label: "Paradise Lost (the fallen angel)",
          example:
            '"Like Adam, I was apparently united by no link to any other being in existence... Many times I considered Satan as the fitter emblem of my condition"',
          effect:
            "Milton's epic becomes the Creature's mirror — he oscillates between identifying with Adam (innocent, abandoned) and Satan (wronged, vengeful), and Shelley uses this literary doubling to argue that society's rejection creates the monsters it fears.",
        },
        {
          label: "Prometheus",
          example:
            "The subtitle 'The Modern Prometheus' frames Victor as the Titan who stole fire from the gods and suffered eternal punishment",
          effect:
            "Prometheus symbolises both the nobility and the catastrophe of overreach — Shelley invokes the myth to warn that seizing divine creative power without divine wisdom leads to suffering not just for the transgressor but for all those connected to him.",
        },
        {
          label: "Electricity / galvanism",
          example:
            '"I beheld a stream of fire issue from an old and beautiful oak... and so soon as the dazzling light vanished, the oak had disappeared" — young Victor witnesses lightning destroying a tree',
          effect:
            "Galvanism represents the dangerous intersection of nature and science — Shelley draws on contemporary experiments (Galvani, Aldini) to suggest that the power to animate matter exists but should not be wielded without moral responsibility.",
        },
        {
          label: "The De Lacey family",
          example:
            "The blind father, Felix, Agatha, and Safie represent the loving family unit the Creature desperately desires but can never join",
          effect:
            "The De Laceys symbolise everything the Creature lacks — domesticity, affection, and acceptance. Their violent rejection of him despite his months of secret kindness crystallises the novel's argument that society destroys what it refuses to understand.",
        },
        {
          label: "Birth and creation",
          example:
            '"I collected bones from charnel-houses and disturbed, with profane fingers, the tremendous secrets of the human frame"',
          effect:
            "Victor's creation parodies natural birth — he bypasses the female body entirely, assembling life from death in isolation. The grotesque 'birth' symbolises the dangers of creation without love, nurture, or maternal care.",
        },
        {
          label: "Letters and communication",
          example:
            "Walton's letters to Margaret, Elizabeth's letters to Victor, Safie's letters to Felix — communication pervades and structures the novel",
          effect:
            "Letters symbolise the human need for connection — yet they consistently fail to bridge the gaps between characters. Victor ignores Elizabeth's pleas, Walton cannot reach Margaret, and the Creature has no one to write to, embodying total communicative isolation.",
        },
        {
          label: "The locket / miniature",
          example:
            "The miniature portrait of Caroline Frankenstein worn by William, which the Creature places on the sleeping Justine",
          effect:
            "The locket symbolises maternal love and domestic innocence — its transfer from the murdered William to the framed Justine implicates both the Creature's longing for maternal affection and the injustice of a legal system that condemns the innocent on circumstantial evidence.",
        },
      ],
    },

    // ══════════════════════════════════════════════════════════
    //  6. HIGHER CONCEPTS
    // ══════════════════════════════════════════════════════════
    {
      title: "Higher Concepts",
      colour: "teal",
      columns: ["Concept", "Explanation / Example", "Application in Frankenstein"],
      rows: [
        {
          label: "Playing God",
          example:
            '"A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me"',
          effect:
            "Victor aspires to divine creative power but without divine wisdom or responsibility — Shelley argues that the desire to 'play God' is not inherently evil, but becomes catastrophic when the creator refuses to nurture, guide, and take responsibility for what he has made.",
        },
        {
          label: "The sublime",
          example:
            '"The weight upon my spirit was sensibly lightened as I plunged yet deeper in the ravine of Arve... the immense mountains and precipices that overhung me on every side"',
          effect:
            "Shelley draws on Burke's and Kant's theories of the sublime — nature's overwhelming grandeur temporarily relieves Victor's guilt, but also reminds the reader that human ambition is insignificant beside natural forces, reinforcing the Romantic critique of scientific hubris.",
        },
        {
          label: "Galvanism and science",
          example:
            "Shelley's 1831 introduction references galvanism as a means by which 'perhaps a corpse would be reanimated' — the novel engages directly with contemporary scientific debates",
          effect:
            "Galvanism embodies the Enlightenment promise that science could conquer even death — Shelley does not reject science outright but insists that knowledge without ethical frameworks is dangerous, anticipating modern debates about genetic engineering, AI, and biotechnology.",
        },
        {
          label: "Parental responsibility",
          example:
            '"I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on" — the Creature accuses Victor of abandoning his creation',
          effect:
            "The novel's central moral argument is that creators bear absolute responsibility for their creations — Victor's refusal to parent, educate, or love the Creature is presented as the original sin from which all subsequent tragedy flows.",
        },
        {
          label: "Nature vs nurture",
          example:
            '"I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous"',
          effect:
            "The Creature's declaration is Shelley's most direct statement on human nature — she aligns with Rousseau's argument that beings are born good and corrupted by society, suggesting that the Creature's violence is the product of neglect and rejection, not inherent evil.",
        },
        {
          label: "The double / doppelganger",
          example:
            "Victor and the Creature progressively mirror each other — both are isolated, consumed by obsession, and ultimately destroyed by their mutual fixation",
          effect:
            "The doppelganger motif collapses the boundary between creator and creation — Shelley suggests that the Creature is Victor's repressed self externalised, a physical manifestation of his guilt, ambition, and moral failure that he can neither accept nor escape.",
        },
        {
          label: "Monstrosity (who is the real monster?)",
          example:
            '"Abhorred monster! Fiend that thou art!" cries Victor — yet it is Victor who abandoned his creation, allowed Justine to die, and destroyed the female companion',
          effect:
            "Shelley systematically destabilises the category of 'monster' — the Creature's physical monstrosity is matched and exceeded by Victor's moral monstrosity, and the novel challenges the reader to recognise that society's definition of 'monster' reflects its own prejudices.",
        },
        {
          label: "Romantic individualism",
          example:
            '"So much has been done... more, far more, will I achieve; treading in the steps already marked, I will pioneer a new way, explore unknown powers"',
          effect:
            "Victor embodies the Romantic ideal of the solitary genius pursuing knowledge at all costs — Shelley critiques this ideal by showing that individualism without social responsibility leads to catastrophe, offering a feminist counterpoint to the masculine Romantic hero.",
        },
        {
          label: "Female erasure",
          example:
            "Caroline, Justine, and Elizabeth are all killed or sacrificed; Victor creates life without women; he destroys the female Creature before completing her",
          effect:
            "Shelley exposes a world in which women are systematically silenced, sacrificed, and excluded from creation — Victor's all-male act of creation and his destruction of the female Creature can be read as an indictment of patriarchal science that renders women redundant.",
        },
        {
          label: "Promethean overreach",
          example:
            '"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge, and how much happier that man is who believes his native town to be the world"',
          effect:
            "Victor's warning encapsulates the novel's central theme — the pursuit of knowledge beyond human limits brings not enlightenment but destruction. Shelley reframes the Promethean myth as a cautionary tale for the age of scientific revolution.",
        },
        {
          label: "Social rejection and prejudice",
          example:
            '"I am malicious because I am miserable. Am I not shunned and hated by all mankind?"',
          effect:
            "The Creature's argument is that society manufactures its own monsters through prejudice and exclusion — Shelley anticipates modern debates about marginalisation, arguing that those denied compassion and community will inevitably turn to violence as their only remaining form of agency.",
        },
        {
          label: "Walton as Victor's double",
          example:
            "Walton, like Victor, is an ambitious explorer willing to sacrifice others for glory — 'One man's life or death were but a small price to pay for the acquirement of the knowledge which I sought'",
          effect:
            "Walton mirrors Victor's Promethean ambition — his decision to turn his ship back at the novel's end is left ambiguous, and Shelley uses him to ask whether humanity can learn from cautionary tales or is doomed to repeat the same cycle of destructive overreach.",
        },
      ],
    },
  ],
};
