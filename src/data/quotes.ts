import { Quote, ExamQuestion } from "./types";
import { MUCH_ADO_QUOTES } from "./quotes-much-ado";
import { PRIDE_PREJUDICE_QUOTES } from "./quotes-pride-prejudice";
import { MACBETH_QUOTES } from "./quotes-macbeth";
import { CHRISTMAS_CAROL_QUOTES } from "./quotes-christmas-carol";
import { INSPECTOR_CALLS_QUOTES } from "./quotes-inspector-calls";
import { JEKYLL_HYDE_QUOTES } from "./quotes-jekyll-hyde";
import { ROMEO_JULIET_QUOTES } from "./quotes-romeo-juliet";
import { TEMPEST_QUOTES } from "./quotes-tempest";
import { MERCHANT_VENICE_QUOTES } from "./quotes-merchant-venice";
import { JULIUS_CAESAR_QUOTES } from "./quotes-julius-caesar";
import { GREAT_EXPECTATIONS_QUOTES } from "./quotes-great-expectations";
import { FRANKENSTEIN_QUOTES } from "./quotes-frankenstein";
import { JANE_EYRE_QUOTES } from "./quotes-jane-eyre";
import { SIGN_OF_FOUR_QUOTES } from "./quotes-sign-of-four";
import { BLOOD_BROTHERS_QUOTES } from "./quotes-blood-brothers";
import { ANIMAL_FARM_QUOTES } from "./quotes-animal-farm";
import { LORD_OF_FLIES_QUOTES } from "./quotes-lord-of-flies";
import { TASTE_OF_HONEY_QUOTES } from "./quotes-taste-of-honey";
import { POWER_CONFLICT_QUOTES } from "./quotes-power-conflict";
import { LOVE_RELATIONSHIPS_QUOTES } from "./quotes-love-relationships";

// ─── All Quotes (combined) ───
export const ALL_QUOTES: Quote[] = [
  ...MUCH_ADO_QUOTES,
  ...PRIDE_PREJUDICE_QUOTES,
  ...MACBETH_QUOTES,
  ...CHRISTMAS_CAROL_QUOTES,
  ...INSPECTOR_CALLS_QUOTES,
  ...JEKYLL_HYDE_QUOTES,
  ...ROMEO_JULIET_QUOTES,
  ...TEMPEST_QUOTES,
  ...MERCHANT_VENICE_QUOTES,
  ...JULIUS_CAESAR_QUOTES,
  ...GREAT_EXPECTATIONS_QUOTES,
  ...FRANKENSTEIN_QUOTES,
  ...JANE_EYRE_QUOTES,
  ...SIGN_OF_FOUR_QUOTES,
  ...BLOOD_BROTHERS_QUOTES,
  ...ANIMAL_FARM_QUOTES,
  ...LORD_OF_FLIES_QUOTES,
  ...TASTE_OF_HONEY_QUOTES,
  ...POWER_CONFLICT_QUOTES,
  ...LOVE_RELATIONSHIPS_QUOTES,
];

export function getQuotesByText(textSlug: string): Quote[] {
  return ALL_QUOTES.filter((q) => q.textSlug === textSlug);
}

export function getQuoteById(textSlug: string, id: number): Quote | undefined {
  return ALL_QUOTES.find((q) => q.textSlug === textSlug && q.id === id);
}

// ─── Exam Questions ───
export const EXAM_QUESTIONS: ExamQuestion[] = [
  // Much Ado About Nothing
  { textSlug: "much-ado", question: "How does Shakespeare present the relationship between Beatrice and Benedick?", modelParagraph: "Shakespeare presents the relationship between Beatrice and Benedick as one defined by intellectual parity and combative wit, which paradoxically conceals a deep, latent affection. From the outset, their exchanges are characterised by sharp repartee: Beatrice declares she would \"rather hear my dog bark at a crow than a man swear he loves me,\" employing a hyperbolic simile that reduces romantic declarations to something repugnant and animalistic. The deliberate bathetic comparison — juxtaposing the elevated language of love with the base imagery of barking dogs — subverts Petrarchan conventions of courtship, where women were expected to receive male devotion passively. Shakespeare creates potent dramatic irony here, as the audience recognises that her vehement protestations foreshadow the very capitulation she denies. Crucially, Shakespeare keeps Beatrice and Benedick's most intimate exchanges in prose rather than the verse assigned to Claudio and Hero, a significant choice of linguistic register: prose suggests authenticity and naturalism, while verse can imply artificiality. When Benedick finally confesses \"I do love nothing in the world so well as you — is not that strange?\", the litotes (understatement through negation) and the self-interrogative tag question reveal a love that is tentative, self-aware, and psychologically authentic — far more convincing than Claudio's performative declarations. Shakespeare thus presents their relationship as a model of companionate love — a partnership of equals built on mutual intellectual respect — which was a remarkably progressive vision in Elizabethan England, where marriage was primarily a financial and dynastic transaction." },
  { textSlug: "much-ado", question: "How does Shakespeare present ideas about honour and shame?", modelParagraph: "Shakespeare presents honour and shame as a destructive social mechanism that is weaponised against women while simultaneously enabling male cruelty to go unpunished. This is most powerfully dramatised in the church scene (Act 4, Scene 1), where Claudio publicly rejects Hero at the altar, demanding \"Give not this rotten orange to your friend.\" The metaphor of the \"rotten orange\" reduces Hero from a person to a commodity — beautiful on the surface but corrupt within — revealing how the Elizabethan honour code commodified women's bodies, equating a woman's entire worth with her sexual purity. Claudio's choice to stage this rejection as a public spectacle — in a sacred space, before the entire community — exposes that his concern is not genuine moral outrage but performative self-preservation; his own honour, not Hero's welfare, drives his actions. Shakespeare further underscores the gendered violence of the honour system through Leonato's response: rather than defending his daughter, he cries \"Do not live, Hero, do not ope thine eyes,\" wishing his own child dead rather than face the shame of her alleged unchastity. This reaction reveals how deeply patriarchal honour codes were internalised, to the point where a father's social reputation outweighed paternal love. Shakespeare thus exposes a corrosive double standard at the heart of Elizabethan society: women's honour is fragile, permanent, and policed by men, while male dishonour is temporary and easily absolved." },
  { textSlug: "much-ado", question: "How does Shakespeare present attitudes to women and marriage?", modelParagraph: "Shakespeare presents a deeply critical examination of Elizabethan attitudes to women and marriage, exposing the patriarchal structures that rendered women voiceless commodities. The Hero-Claudio courtship exemplifies the transactional model: Claudio's first response upon seeing Hero is to ask \"Can the world buy such a jewel?\", a metaphor that explicitly commodifies her as an object to be purchased and possessed. Significantly, Claudio negotiates the marriage not with Hero herself but through Don Pedro, reducing the union to a homosocial transaction between men from which the bride is entirely excluded. Hero's near-silence throughout her own courtship is not a failure of characterisation but Shakespeare's deliberate dramatisation of how patriarchal structures silenced women. In stark contrast, Beatrice declares \"I will not have a husband till God make men of some other metal than earth,\" employing the polysemic word \"metal/mettle\" to simultaneously critique both men's substance and their courage. Contextually, marriage in Elizabethan England was a woman's only route to financial security, making Beatrice's resistance genuinely radical. However, Shakespeare complicates his critique by ultimately marrying Beatrice off — Benedick silences her with \"Peace! I will stop your mouth\" — leaving the audience to question whether even the most independent woman can escape the patriarchal structures that define her world." },
  { textSlug: "much-ado", question: "How does Shakespeare use deception as a dramatic device?", modelParagraph: "Shakespeare uses deception as the play's central dramatic engine, employing it to explore the unstable boundary between appearance and reality and to expose the fragility of trust within a patriarchal society. The two gulling scenes — where Don Pedro and his companions trick Benedick and then Beatrice into believing the other is in love — operate through metatheatrical layers: the characters perform a play-within-a-play for an eavesdropping audience, while the real audience watches both. This creates a sophisticated mise en abyme that draws attention to theatre's own reliance on deception. Significantly, these benevolent deceptions succeed precisely because they reveal truths the characters have been hiding from themselves. However, Don John's manipulation of Claudio through the staged window scene demonstrates deception's devastating potential. Claudio accepts the visual \"evidence\" without question, declaring \"O, what men dare do! What men may do! What men daily do, not knowing what they do!\" The anaphoric tricolon builds in rhetorical intensity, yet the dramatic irony is savage: it is Claudio himself who \"knows not what he does\" in condemning an innocent woman. Shakespeare strategically places Balthasar's song — \"Sigh no more, ladies, sigh no more, / Men were deceivers ever\" — immediately before Benedick's gulling scene, creating a proleptic choric commentary that warns the audience of deception's consequences even as they enjoy its comic application." },
  { textSlug: "much-ado", question: "How does Shakespeare present Beatrice as a powerful female character?", modelParagraph: "Shakespeare presents Beatrice as a formidably powerful character whose linguistic dexterity and moral authority consistently exceed those of the men around her, while simultaneously exposing the structural limitations that patriarchal society imposes upon even its most exceptional women. Beatrice's power is primarily located in her wit: her declaration \"I was born to speak all mirth and no matter\" ostensibly dismisses her own speech as trivial, yet Shakespeare employs dramatic irony, as Beatrice's words consistently carry more \"matter\" — substance and moral weight — than any other character's. She is the first to recognise Hero's innocence in the church scene, displaying unwavering moral clarity while the men fail catastrophically. However, Shakespeare's most devastating presentation comes precisely at the moment she confronts her limits. Her exclamation \"O God, that I were a man! I would eat his heart in the marketplace\" deploys visceral, cannibalistic imagery from a semantic field of savagery entirely at odds with her witty composure. The subjunctive mood (\"that I were\") grammatically encapsulates her predicament — she has the will, the intellect, and the moral authority to act, but is structurally excluded by her gender. Her command \"Kill Claudio\" — two stark, monosyllabic imperatives — represents the play's most powerful moment: a woman channelling her agency through the only avenue available. Contextually, Elizabethan women were entirely excluded from the martial honour system, making Beatrice both the play's most powerful voice and its most eloquent testimony to gendered oppression." },
  { textSlug: "much-ado", question: "How does Shakespeare present the theme of appearance versus reality?", modelParagraph: "Shakespeare presents appearance versus reality as a pervasive and destabilising force that permeates every level of the play, ultimately questioning whether stable truth is achievable in a society built on performance and surveillance. The play's very title encodes this theme: \"Nothing\" was Elizabethan slang for \"noting\" (observing), suggesting that the entire drama arises from acts of observation that misinterpret what they see. The masquerade ball in Act 2 literalises the theme: characters adopt physical masks, yet Shakespeare suggests that social life in Messina is itself a perpetual masquerade. Don Pedro woos Hero while disguised as Claudio, collapsing the distinction between self and performance in a scene that foreshadows the more dangerous identity confusion to come. The church scene represents the catastrophic consequence: Claudio witnesses Margaret at the window disguised as Hero and accepts visual appearance as absolute proof, never questioning the reality beneath. His confidence in surface observation — \"Are our eyes our own?\" — is presented with savage dramatic irony, as the audience knows his eyes have been systematically deceived. Shakespeare structurally reinforces this by paralleling benevolent and malicious deceptions: the gulling scenes and Don John's window trick both exploit \"noting\" yet produce opposite outcomes, forcing the audience to confront the uncomfortable truth that the same mechanisms of perception underpin both comedy and tragedy." },
  // Pride and Prejudice
  { textSlug: "pride-prejudice", question: "How does Austen present the theme of pride?", modelParagraph: "Austen presents pride as a multifaceted and morally ambiguous quality, exploring its destructive social manifestations while ultimately distinguishing between vanity and legitimate self-respect. Darcy's declaration at the Meryton ball that Elizabeth is \"not handsome enough to tempt me\" demonstrates how aristocratic pride functions as a mechanism of social exclusion, with the dismissive auxiliary \"enough\" reducing Elizabeth to an object of insufficient worth. Austen's use of free indirect discourse throughout the novel complicates our understanding of pride, as the narrative voice frequently merges with Elizabeth's own prejudiced perspective, implicating the reader in the very fault they condemn in Darcy. Significantly, Mary Bennet's pedantic distinction — \"pride relates more to our opinion of ourselves, vanity to what we would have others think of us\" — operates ironically, since the least socially aware character articulates the novel's central thematic concern. Austen thereby suggests that intellectual understanding of pride is insufficient without the experiential self-knowledge that both Elizabeth and Darcy must painfully acquire. In the context of Regency society, where rank and breeding were considered innate markers of superiority, Austen's presentation is quietly radical: she does not condemn pride entirely but insists it must be tempered by moral accountability. Darcy's eventual acknowledgement that he was \"properly humbled\" uses the adverb with characteristic Austenian precision, implying that true gentility lies not in birth but in the willingness to subject one's pride to ethical scrutiny." },
  { textSlug: "pride-prejudice", question: "How does Austen present Elizabeth as an unconventional heroine?", modelParagraph: "Austen constructs Elizabeth Bennet as a heroine who defies the passive, compliant femininity valorised in Regency conduct literature, instead foregrounding her intellectual independence and moral courage. Elizabeth's rejection of Mr Collins — \"You could not make me happy\" — is structurally radical, since the emphasised pronoun \"me\" asserts an individual female subjectivity that the entailment system was designed to suppress; a woman without fortune was expected to accept any economically viable proposal. Furthermore, her refusal of Darcy's first proposal, in which she condemns his \"arrogance\" and \"conceit,\" inverts the conventional power dynamic of the courtship novel, as the socially inferior woman assumes the role of moral judge over the wealthy male. Austen employs free indirect discourse to grant Elizabeth a richness of interior life unusual for female characters of the period, yet simultaneously uses this technique to expose her fallibility — her confident assertion that Wickham's \"countenance, voice, and manner had established him at once\" reveals her susceptibility to superficial charm, an ironic echo of the very shallowness she criticises in others. In a society where female worth was measured by accomplishment and docility, Elizabeth's muddy petticoat at Netherfield — which \"shewed a most country-town indifference to decorum\" — positions her as Austen's challenge to patriarchal norms. Crucially, Austen does not idealise Elizabeth: her unconventionality is compelling precisely because it coexists with genuine error, making her journey toward self-knowledge the novel's moral centre." },
  { textSlug: "pride-prejudice", question: "How does Austen present attitudes to marriage and social class?", modelParagraph: "Austen presents marriage as the primary institution through which Regency society negotiated the competing demands of economic security, social status, and personal fulfilment, using a spectrum of marriages to interrogate the values of her class. The novel's celebrated opening — \"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife\" — deploys irony at the level of syntax, since the passive construction \"universally acknowledged\" masks the economic desperation that drives the marriage market, while \"must\" conflates social compulsion with natural law. Charlotte Lucas's pragmatic acceptance of Mr Collins — \"I am not romantic, you know; I never was. I ask only a comfortable home\" — presents marriage as a rational economic contract, and Austen's refusal to condemn Charlotte outright reflects an awareness that, for women without independent wealth, matrimony was less a choice than a survival strategy. The antithesis between the Gardiners' companionate marriage and the Bennets' dysfunctional union structurally reinforces Austen's argument that class origin matters less than moral character: the Gardiners, despite their Cheapside address, model the mutual respect that Mr Bennet's genteel marriage conspicuously lacks. Austen thus subtly destabilises the rigid class hierarchy, suggesting through Elizabeth and Darcy's union that genuine merit can transcend social boundaries." },
  { textSlug: "pride-prejudice", question: "How does Austen present the relationship between Elizabeth and Darcy?", modelParagraph: "Austen presents the Elizabeth-Darcy relationship as a dialectical process of mutual correction, in which both characters must overcome their titular flaws to achieve a union founded on intellectual equality and moral growth. Their initial antagonism is established through contrasting registers: Darcy's formal, Latinate diction at the Meryton ball (\"tolerable, but not handsome enough to tempt me\") conveys aristocratic detachment, while Elizabeth's witty riposte — her determination to \"laugh at\" the slight — demonstrates the combative verbal energy that distinguishes their relationship from conventional courtship. The letter scene constitutes the novel's structural and moral pivot, as Darcy's epistolary self-defence forces Elizabeth into the devastating recognition that \"till this moment I never knew myself.\" Austen's use of the letter form is methodologically significant: it removes the mediating narrative voice, compelling both Elizabeth and the reader to confront Darcy's perspective without the protective filter of free indirect discourse. The spatial symbolism of Pemberley is equally deliberate — Elizabeth's growing attraction to Darcy becomes inseparable from her admiration of his estate, and Mrs Reynolds's testimony that \"I have never had a cross word from him\" provides the objective external validation that Elizabeth's prejudice had prevented her from perceiving. Austen thus presents their relationship as a model of Enlightenment rationalism: love is not a coup de foudre but an earned, reflective judgment." },
  { textSlug: "pride-prejudice", question: "How does Austen use irony to comment on Regency society?", modelParagraph: "Austen deploys irony — verbal, dramatic, and structural — as her principal satirical instrument, exposing the contradictions between Regency society's professed values and its actual practices. The novel's opening sentence operates simultaneously on multiple ironic levels: while ostensibly asserting a social \"truth,\" the word \"universally\" is immediately undermined by the narrow, provincial world of Meryton, and the sentence's real meaning — that it is mothers of unmarried daughters who are \"in want\" — is precisely inverted. This technique of semantic inversion pervades the narrative: when Miss Bingley catalogues the \"accomplished\" woman who must possess \"a thorough knowledge of music, singing, drawing, dancing, and the modern languages,\" Austen ironically exposes how female education was reduced to a performative display designed to attract husbands rather than cultivate genuine intellect. Dramatic irony functions most powerfully through Wickham, whose \"appearance was greatly in his favour\" and whose social charm makes him universally trusted — Austen thereby indicts a society that privileges surface gentility over substantive virtue. Mr Bennet's sardonic detachment represents a darker irony: his wit, which initially aligns him with the reader, is ultimately revealed as a negligent retreat from paternal responsibility, as when he remarks that Wickham is \"a pleasant fellow\" who will \"jilt\" Lydia \"creditably.\" Austen's irony is therefore never merely comic; it is a moral technology that demands active, critical reading." },
  { textSlug: "pride-prejudice", question: "How does Austen present ideas about prejudice and self-knowledge?", modelParagraph: "Austen presents prejudice not merely as a social failing but as an epistemological problem — a fundamental error in how individuals interpret the world — and positions self-knowledge as the painful but necessary corrective. Elizabeth's initial assessment of Darcy as possessing \"a most forbidding, disagreeable countenance\" reveals how prejudice operates through the language of physiognomy, a pseudo-science popular in the Regency period that claimed moral character was legible in physical appearance. The novel's original title, First Impressions, underscores Austen's concern with the unreliability of immediate judgement, and Elizabeth's confident declaration that Wickham has \"truth in his looks\" demonstrates how prejudice masquerades as perceptive discernment. The anagnorisis that follows Darcy's letter — \"How despicably have I acted! ... Till this moment I never knew myself\" — is the novel's emotional and thematic climax, and Austen's use of the exclamatory sentence, rare in Elizabeth's typically measured idiom, conveys the visceral shock of genuine self-recognition. Significantly, Austen distributes the burden of self-knowledge equally: Darcy's admission that he was \"given good principles, but left to follow them in pride and conceit\" echoes Elizabeth's own reckoning, creating a structural parallelism that reinforces their intellectual compatibility. In the context of Enlightenment philosophy, Austen's presentation is both orthodox and radical: she endorses the Lockean principle that knowledge is acquired through experience and reflection, yet locates this project within the domestic sphere." },
  // Macbeth
  { textSlug: "macbeth", question: "How does Shakespeare present Macbeth as a tragic hero?" },
  { textSlug: "macbeth", question: "How does Shakespeare present the theme of ambition?" },
  { textSlug: "macbeth", question: "How does Shakespeare present Lady Macbeth as a powerful character?" },
  { textSlug: "macbeth", question: "How does Shakespeare present the theme of guilt?" },
  { textSlug: "macbeth", question: "How does Shakespeare use the supernatural to create dramatic tension?" },
  { textSlug: "macbeth", question: "How does Shakespeare present the relationship between Macbeth and Lady Macbeth?" },
  // A Christmas Carol
  { textSlug: "christmas-carol", question: "How does Dickens present Scrooge's transformation?" },
  { textSlug: "christmas-carol", question: "How does Dickens present the theme of social responsibility?" },
  { textSlug: "christmas-carol", question: "How does Dickens use the character of Tiny Tim?" },
  { textSlug: "christmas-carol", question: "How does Dickens criticise Victorian attitudes to the poor?" },
  { textSlug: "christmas-carol", question: "How does Dickens use the supernatural to convey his message?" },
  { textSlug: "christmas-carol", question: "How does Dickens present the importance of family and community?" },
  // An Inspector Calls
  { textSlug: "inspector-calls", question: "How does Priestley present the theme of social responsibility?" },
  { textSlug: "inspector-calls", question: "How does Priestley present the character of Mr Birling?" },
  { textSlug: "inspector-calls", question: "How does Priestley use the character of the Inspector?" },
  { textSlug: "inspector-calls", question: "How does Priestley present the differences between the older and younger generations?" },
  { textSlug: "inspector-calls", question: "How does Priestley present Sheila's development throughout the play?" },
  { textSlug: "inspector-calls", question: "How does Priestley explore ideas about class and gender?" },
  // Dr Jekyll and Mr Hyde
  { textSlug: "jekyll-hyde", question: "How does Stevenson present the theme of duality?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson create a sense of mystery and suspense?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson present Hyde as a frightening outsider?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson explore the theme of repression in Victorian society?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson use setting to reflect the duality of human nature?" },
  { textSlug: "jekyll-hyde", question: "How does Stevenson present the dangers of unchecked scientific ambition?" },
  // Romeo and Juliet
  { textSlug: "romeo-juliet", question: "How does Shakespeare present the theme of love in Romeo and Juliet?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare use the feud between the Montagues and Capulets?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare present Romeo as a tragic hero?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare present Juliet as a strong female character?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare explore the theme of fate and destiny?" },
  { textSlug: "romeo-juliet", question: "How does Shakespeare use light and dark imagery in the play?" },
  // The Tempest
  { textSlug: "tempest", question: "How does Shakespeare present Prospero as a complex character?" },
  { textSlug: "tempest", question: "How does Shakespeare explore the theme of power and control?" },
  { textSlug: "tempest", question: "How does Shakespeare present the relationship between Prospero and Caliban?" },
  { textSlug: "tempest", question: "How does Shakespeare explore ideas about colonialism and freedom?" },
  { textSlug: "tempest", question: "How does Shakespeare use magic and the supernatural in The Tempest?" },
  { textSlug: "tempest", question: "How does Shakespeare present the theme of forgiveness and reconciliation?" },
  // The Merchant of Venice
  { textSlug: "merchant-venice", question: "How does Shakespeare present Shylock as a complex character?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare explore the theme of justice and mercy?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare present attitudes to prejudice and discrimination?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare present Portia as a powerful female character?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare explore the relationship between wealth and love?" },
  { textSlug: "merchant-venice", question: "How does Shakespeare use the casket plot to explore appearance vs reality?" },
  // Julius Caesar
  { textSlug: "julius-caesar", question: "How does Shakespeare present Brutus as a tragic hero?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare explore the theme of political power and ambition?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare present the power of rhetoric and persuasion?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare present the theme of loyalty and betrayal?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare explore the conflict between public duty and private conscience?" },
  { textSlug: "julius-caesar", question: "How does Shakespeare use omens and the supernatural to create tension?" },
  // Great Expectations
  { textSlug: "great-expectations", question: "How does Dickens present Pip's moral development?" },
  { textSlug: "great-expectations", question: "How does Dickens explore the theme of social class and ambition?" },
  { textSlug: "great-expectations", question: "How does Dickens present Miss Havisham as a memorable character?" },
  { textSlug: "great-expectations", question: "How does Dickens explore the theme of guilt and redemption?" },
  { textSlug: "great-expectations", question: "How does Dickens use Magwitch to challenge ideas about class and criminality?" },
  { textSlug: "great-expectations", question: "How does Dickens present the relationship between wealth and moral character?" },
  // Frankenstein
  { textSlug: "frankenstein", question: "How does Shelley present Victor Frankenstein as a flawed protagonist?" },
  { textSlug: "frankenstein", question: "How does Shelley explore the theme of dangerous knowledge?" },
  { textSlug: "frankenstein", question: "How does Shelley present the Creature as a sympathetic character?" },
  { textSlug: "frankenstein", question: "How does Shelley explore the theme of isolation and alienation?" },
  { textSlug: "frankenstein", question: "How does Shelley use the Gothic to explore ideas about creation and responsibility?" },
  { textSlug: "frankenstein", question: "How does Shelley present the relationship between creator and creation?" },
  // Jane Eyre
  { textSlug: "jane-eyre", question: "How does Brontë present Jane as an independent and resilient character?" },
  { textSlug: "jane-eyre", question: "How does Brontë explore the theme of social class and inequality?" },
  { textSlug: "jane-eyre", question: "How does Brontë present the relationship between Jane and Rochester?" },
  { textSlug: "jane-eyre", question: "How does Brontë explore the theme of religion and morality?" },
  { textSlug: "jane-eyre", question: "How does Brontë use Gothic elements to create tension and meaning?" },
  { textSlug: "jane-eyre", question: "How does Brontë present attitudes to gender and women's independence?" },
  // The Sign of Four
  { textSlug: "sign-of-four", question: "How does Conan Doyle present Sherlock Holmes as an unconventional hero?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle explore the theme of justice and the law?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle use the narrative structure to create mystery?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle present attitudes to empire and colonialism?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle explore the theme of greed and its consequences?" },
  { textSlug: "sign-of-four", question: "How does Conan Doyle present the relationship between Holmes and Watson?" },
  // Blood Brothers
  { textSlug: "blood-brothers", question: "How does Russell present the theme of social class and inequality?" },
  { textSlug: "blood-brothers", question: "How does Russell use the character of Mrs Johnstone to explore ideas about motherhood?" },
  { textSlug: "blood-brothers", question: "How does Russell present the differences between Mickey and Edward?" },
  { textSlug: "blood-brothers", question: "How does Russell explore the theme of fate and superstition?" },
  { textSlug: "blood-brothers", question: "How does Russell use the Narrator to create dramatic tension?" },
  { textSlug: "blood-brothers", question: "How does Russell present the impact of unemployment and poverty?" },
  // Animal Farm
  { textSlug: "animal-farm", question: "How does Orwell present the theme of power and corruption?" },
  { textSlug: "animal-farm", question: "How does Orwell use the character of Napoleon to explore tyranny?" },
  { textSlug: "animal-farm", question: "How does Orwell present Boxer as a tragic figure?" },
  { textSlug: "animal-farm", question: "How does Orwell explore the role of propaganda and language in controlling others?" },
  { textSlug: "animal-farm", question: "How does Orwell present the failure of revolution and idealism?" },
  { textSlug: "animal-farm", question: "How does Orwell use allegory to comment on political systems?" },
  // Lord of the Flies
  { textSlug: "lord-of-flies", question: "How does Golding present the theme of civilisation versus savagery?" },
  { textSlug: "lord-of-flies", question: "How does Golding use the character of Jack to explore the desire for power?" },
  { textSlug: "lord-of-flies", question: "How does Golding present Ralph as a leader and symbol of order?" },
  { textSlug: "lord-of-flies", question: "How does Golding explore the theme of fear and the beast?" },
  { textSlug: "lord-of-flies", question: "How does Golding use Simon to explore ideas about good and evil?" },
  { textSlug: "lord-of-flies", question: "How does Golding present the island as a microcosm of society?" },
  // A Taste of Honey
  { textSlug: "taste-of-honey", question: "How does Delaney present the relationship between Jo and Helen?" },
  { textSlug: "taste-of-honey", question: "How does Delaney explore the theme of class and poverty?" },
  { textSlug: "taste-of-honey", question: "How does Delaney present attitudes to race and sexuality in 1950s Britain?" },
  { textSlug: "taste-of-honey", question: "How does Delaney present Jo as an unconventional female character?" },
  { textSlug: "taste-of-honey", question: "How does Delaney use Geof to challenge gender stereotypes?" },
  { textSlug: "taste-of-honey", question: "How does Delaney explore the theme of motherhood and neglect?" },
  // Power & Conflict Anthology
  { textSlug: "power-conflict", question: "Compare how poets present the power of nature in 'Storm on the Island' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present the effects of conflict on individuals in 'Remains' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present ideas about memory in 'Poppies' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present attitudes to power in 'Ozymandias' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present the reality of war in 'Exposure' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present ideas about identity in 'Checking Out Me History' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present loss and absence in 'The Emigrée' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present the abuse of power in 'My Last Duchess' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present ideas about pride and human arrogance in 'Ozymandias' and one other poem from the anthology." },
  { textSlug: "power-conflict", question: "Compare how poets present the psychological impact of conflict in 'War Photographer' and one other poem from the anthology." },
  // Love & Relationships Anthology
  { textSlug: "love-relationships", question: "Compare how poets present the pain of lost love in 'When We Two Parted' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present desire and longing in 'Love's Philosophy' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present the power of memory in 'Eden Rock' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present the parent-child relationship in 'Follower' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present ideas about distance in relationships in 'Letters from Yorkshire' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present attitudes to love in 'Sonnet 29' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present the theme of letting go in 'Walking Away' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present obsessive or possessive love in 'Porphyria's Lover' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present the breakdown of a relationship in 'Neutral Tones' and one other poem from the anthology." },
  { textSlug: "love-relationships", question: "Compare how poets present joyful, celebratory love in 'Singh Song!' and one other poem from the anthology." },
];

export function getExamQuestions(textSlug: string): ExamQuestion[] {
  return EXAM_QUESTIONS.filter((q) => q.textSlug === textSlug);
}
