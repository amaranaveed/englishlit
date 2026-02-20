// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 2 — Thematic Studies: Theme B — Religion & Life (3.2.2)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const THEME_B_RELIGION_LIFE_TERMS: RSTerm[] = [
  // ── Origins of the universe ──
  {
    id: "rs-tb-big-bang",
    word: "Big Bang Theory",
    def: "The scientific theory that the universe began approximately 13.8 billion years ago from an extremely hot, dense point that rapidly expanded. Some religious believers accept it as the mechanism God/Allah used to create the universe.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-creation",
    word: "Creation",
    def: "The act by which God/Allah brought the universe and everything in it into existence. Christians refer to the Genesis accounts; Muslims believe Allah created the heavens and the earth in six periods (Qur'an 7:54).",
    topicSlug: "theme-b-religion-life",
    category: "teaching",
  },

  // ── Environment ──
  {
    id: "rs-tb-stewardship",
    word: "Stewardship",
    def: "The belief that humans have a God-given responsibility to care for the world on God's behalf. Christians teach that God appointed humans as stewards (caretakers) of creation, and they will be held accountable for how they treat it.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-dominion",
    word: "Dominion",
    def: "The idea that God gave humans authority and control over the earth and its creatures (Genesis 1:28). Some interpret this as the right to use nature for human benefit; others argue it means responsible management, not exploitation.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-khalifah",
    word: "Khalifah",
    def: "An Arabic term meaning 'steward' or 'trustee'. Muslims believe Allah has appointed humans as khalifah (trustees) of the earth, giving them the duty to look after creation and preserve it for future generations.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-amanah",
    word: "Amanah",
    def: "An Arabic term meaning 'trust'. Muslims believe the earth is a trust (amanah) given to humans by Allah. They must care for it responsibly and will be accountable on the Day of Judgement for how they treated the environment.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },

  // ── Use and abuse of the environment ──
  {
    id: "rs-tb-pollution",
    word: "Pollution",
    def: "The contamination of the natural environment with harmful substances, such as chemicals, waste, or emissions. Religious believers argue that pollution is a failure of stewardship/khalifah and damages the world God/Allah created.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-sustainability",
    word: "Sustainability",
    def: "Using natural resources in a way that meets present needs without compromising the ability of future generations to meet their own needs. Both Christianity and Islam support sustainable living as part of responsible stewardship.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },

  // ── Animals ──
  {
    id: "rs-tb-animal-experimentation",
    word: "Animal Experimentation",
    def: "The use of animals in scientific research and testing. Views are divided — some argue it is justified if it leads to medical advances that save human lives; others say it causes unnecessary suffering to sentient creatures.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-factory-farming",
    word: "Factory Farming",
    def: "Intensive farming methods where animals are kept in confined conditions to maximise production and profit. Many religious believers oppose factory farming as it causes animal suffering and fails to treat animals with the respect owed to God's/Allah's creatures.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },

  // ── Origins of human life ──
  {
    id: "rs-tb-evolution",
    word: "Evolution",
    def: "The scientific theory, proposed by Charles Darwin, that all living organisms developed gradually over millions of years through natural selection. Some religious believers accept evolution as compatible with belief in God; others reject it.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },

  // ── Sanctity of life ──
  {
    id: "rs-tb-sanctity-of-life",
    word: "Sanctity of Life",
    def: "The belief that all human life is sacred and holy because it is created by God/Allah. This principle underpins religious arguments against abortion, euthanasia, and the death penalty — no human has the right to take a life that God/Allah has given.",
    topicSlug: "theme-b-religion-life",
    category: "teaching",
  },
  {
    id: "rs-tb-quality-of-life",
    word: "Quality of Life",
    def: "The extent to which life is meaningful, comfortable, and free from pain or suffering. Some argue that quality of life should be considered when making ethical decisions about abortion and euthanasia, even if it conflicts with the sanctity of life principle.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },

  // ── Abortion ──
  {
    id: "rs-tb-abortion",
    word: "Abortion",
    def: "The deliberate termination of a human pregnancy. Legal in England and Wales up to 24 weeks under the Abortion Act (1967), if two doctors agree that continuing the pregnancy poses a risk. Religious views are divided on when life begins and whether abortion can ever be justified.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },

  // ── Euthanasia ──
  {
    id: "rs-tb-euthanasia",
    word: "Euthanasia",
    def: "The painless killing of a patient suffering from an incurable and painful disease, sometimes called 'mercy killing'. Euthanasia is illegal in the UK. Most religious traditions oppose it on the grounds that only God/Allah has the right to end life.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-voluntary-euthanasia",
    word: "Voluntary Euthanasia",
    def: "Euthanasia carried out at the request of the person who wishes to die, usually because they are suffering from a terminal illness. It is illegal in the UK but legal in some countries, such as the Netherlands and Belgium.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-non-voluntary-euthanasia",
    word: "Non-Voluntary Euthanasia",
    def: "Ending the life of a person who is unable to give their consent (e.g. because they are in a coma or are severely brain-damaged). The decision is typically made by relatives or medical professionals.",
    topicSlug: "theme-b-religion-life",
    category: "key-term",
  },
  {
    id: "rs-tb-hospice",
    word: "Hospice Movement",
    def: "Specialist care for people who are terminally ill, focusing on pain relief, comfort, and dignity rather than curing the disease. Founded by Dame Cicely Saunders, a Christian. Many religious believers support hospice care as an alternative to euthanasia.",
    topicSlug: "theme-b-religion-life",
    category: "practice",
  },

  // ── Afterlife ──
  {
    id: "rs-tb-akhirah",
    word: "Akhirah",
    def: "The Islamic belief in life after death. Muslims believe that after death, the soul enters Barzakh (a state of waiting) until the Day of Judgement, when Allah will judge every person and send them to Jannah (paradise) or Jahannam (hell).",
    topicSlug: "theme-b-religion-life",
    category: "teaching",
  },
  {
    id: "rs-tb-resurrection",
    word: "Resurrection",
    def: "The belief that the body will be raised from death to life. Christians believe in the resurrection of the body based on Jesus' own resurrection. Muslims believe in bodily resurrection on the Day of Judgement (Yawm al-Qiyamah).",
    topicSlug: "theme-b-religion-life",
    category: "teaching",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const THEME_B_RELIGION_LIFE_SCRIPTURE: ScriptureQuote[] = [
  // ── Christian — Creation and stewardship ──
  {
    id: "rs-tb-sq-gen1-28",
    topicSlug: "theme-b-religion-life",
    text: "God blessed them and said to them, 'Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground.'",
    source: "Genesis 1:28",
    religion: "christianity",
    significance:
      "God gives humans dominion over the earth and its creatures. This verse is debated — some use it to justify using nature for human purposes, while others argue 'rule over' implies responsible stewardship rather than exploitation.",
  },
  {
    id: "rs-tb-sq-gen2-15",
    topicSlug: "theme-b-religion-life",
    text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it.",
    source: "Genesis 2:15",
    religion: "christianity",
    significance:
      "Shows that God placed humans in the world with a duty to care for creation. The command to 'take care of it' is a key text supporting the Christian concept of stewardship — humans are caretakers, not owners, of the earth.",
  },
  {
    id: "rs-tb-sq-psalm24-1",
    topicSlug: "theme-b-religion-life",
    text: "The earth is the Lord's, and everything in it, the world, and all who live in it.",
    source: "Psalm 24:1",
    religion: "christianity",
    significance:
      "Declares that the earth belongs to God, not to humans. This supports the view that humans are stewards who must care for God's creation responsibly and will be held accountable for how they treat the world.",
  },
  {
    id: "rs-tb-sq-jer1-5",
    topicSlug: "theme-b-religion-life",
    text: "Before I formed you in the womb I knew you, before you were born I set you apart.",
    source: "Jeremiah 1:5",
    religion: "christianity",
    significance:
      "Suggests that God knows and values each person even before birth, supporting the sanctity of life from conception. This verse is frequently cited in Christian arguments against abortion.",
  },
  {
    id: "rs-tb-sq-job1-21",
    topicSlug: "theme-b-religion-life",
    text: "The Lord gave and the Lord has taken away; may the name of the Lord be praised.",
    source: "Job 1:21",
    religion: "christianity",
    significance:
      "Teaches that life is a gift from God and only God has the authority to give and take life. This is used in arguments against euthanasia — humans should not play God by ending life prematurely.",
  },

  // ── Islamic — Creation and stewardship ──
  {
    id: "rs-tb-sq-quran7-54",
    topicSlug: "theme-b-religion-life",
    text: "Indeed, your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne.",
    source: "Qur'an 7:54",
    religion: "islam",
    significance:
      "Affirms Allah as the sole creator of the heavens and the earth. The 'six days' are often interpreted by Muslim scholars as six long periods of time rather than literal 24-hour days, allowing compatibility with scientific evidence.",
  },
  {
    id: "rs-tb-sq-quran2-30",
    topicSlug: "theme-b-religion-life",
    text: "And when your Lord said to the angels, 'Indeed, I will make upon the earth a khalifah (successive authority).'",
    source: "Qur'an 2:30",
    religion: "islam",
    significance:
      "Establishes that Allah appointed humans as khalifah (trustees/stewards) of the earth. This gives humans a divinely ordained duty to care for the environment and all living creatures on Allah's behalf.",
  },
  {
    id: "rs-tb-sq-quran5-32",
    topicSlug: "theme-b-religion-life",
    text: "Whoever kills a soul unless for a soul or for corruption in the land — it is as if he had slain mankind entirely. And whoever saves one — it is as if he had saved mankind entirely.",
    source: "Qur'an 5:32",
    religion: "islam",
    significance:
      "Powerfully affirms the sanctity of human life in Islam. Taking one innocent life is equivalent to killing all of humanity, and saving one life is like saving all. This verse is central to Islamic arguments against abortion and euthanasia.",
  },
  {
    id: "rs-tb-sq-quran23-12-14",
    topicSlug: "theme-b-religion-life",
    text: "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump, and We made from the lump bones, and We covered the bones with flesh; then We developed him into another creation.",
    source: "Qur'an 23:12\u201314",
    religion: "islam",
    significance:
      "Describes the stages of human development in the womb. Many Muslim scholars teach that ensoulment occurs at 120 days, which is relevant to Islamic discussions of abortion — most scholars permit abortion before ensoulment only for serious medical reasons.",
  },
  {
    id: "rs-tb-sq-quran6-38",
    topicSlug: "theme-b-religion-life",
    text: "There is no creature on earth, nor any bird that flies with its wings, but they are communities like you.",
    source: "Qur'an 6:38",
    religion: "islam",
    significance:
      "Teaches that animals are communities like humans, with their own value and purpose in Allah's creation. This supports the Islamic teaching that animals should be treated with kindness and not subjected to unnecessary cruelty.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const THEME_B_RELIGION_LIFE_VIEWS: DivergentView[] = [
  {
    id: "rs-tb-dv-origins",
    topicSlug: "theme-b-religion-life",
    issue: "How did the universe and human life originate — through creation, science, or both?",
    views: [
      {
        label: "Literalist / Creationist",
        position:
          "God created the universe and all life exactly as described in scripture. The Genesis account (Christianity) or Qur'anic account (Islam) is scientifically and historically accurate. Evolution is rejected. The earth is relatively young.",
        evidence:
          "Genesis 1:1\u20132:3 describes creation in six days. Some evangelical Christians and some Muslims take this literally. Young Earth Creationists argue that scientific evidence can be interpreted to support a young earth.",
      },
      {
        label: "Liberal / Compatibilist",
        position:
          "Science and religion are compatible. The Big Bang and evolution are the mechanisms God/Allah used to create the universe and life. The creation accounts communicate theological truths (God is the creator, life has purpose) rather than scientific facts.",
        evidence:
          "Pope Francis stated: 'The Big Bang, which today we hold to be the origin of the world, does not contradict the intervention of the divine creator but rather requires it.' Many Muslim scientists similarly argue that the Qur'an's descriptions are compatible with scientific discovery.",
      },
      {
        label: "Scientific / Secular",
        position:
          "The universe originated from the Big Bang and life evolved through natural selection. There is no need for a divine explanation. Science provides testable, evidence-based explanations that do not require belief in a creator.",
        evidence:
          "The scientific evidence for the Big Bang (cosmic microwave background radiation, expansion of the universe) and evolution (fossil record, DNA evidence) is widely accepted. Richard Dawkins argues that evolution removes the need for a designer.",
      },
    ],
  },
  {
    id: "rs-tb-dv-abortion",
    topicSlug: "theme-b-religion-life",
    issue: "Is abortion morally acceptable? When, if ever, can it be justified?",
    views: [
      {
        label: "Catholic",
        position:
          "Abortion is always wrong from the moment of conception because life is sacred and begins at fertilisation. The embryo has a soul from conception and is a person with the right to life. There are no circumstances in which abortion is morally acceptable.",
        evidence:
          "The Catholic Catechism (2270\u20132271) states that human life must be respected from conception. Jeremiah 1:5 ('Before I formed you in the womb I knew you') is cited. The Doctrine of Double Effect may apply if a mother's life-saving treatment indirectly causes the death of the foetus.",
      },
      {
        label: "Protestant (varied)",
        position:
          "Abortion is generally wrong but may be the 'lesser of two evils' in certain circumstances, such as when the mother's life is at risk, in cases of rape, or when the child would be severely disabled. The situation should be considered compassionately.",
        evidence:
          "The Church of England states that abortion is 'gravely contrary to the moral law' but recognises that there can be 'strictly limited conditions' under which it may be morally preferable. The principle of situation ethics — choosing the most loving outcome — is sometimes applied.",
      },
      {
        label: "Islamic",
        position:
          "Abortion is generally haram (forbidden) but may be permitted before 120 days (when ensoulment is believed to occur) if there is a valid reason, such as a serious threat to the mother's life. After 120 days, abortion is only allowed to save the mother's life.",
        evidence:
          "Qur'an 5:32 affirms the sanctity of life. The Hadith describes ensoulment at 120 days (Sahih Bukhari). Most scholars agree the mother's life takes priority, as she is an established life with existing responsibilities. Some scholars use a 40-day threshold instead.",
      },
    ],
  },
  {
    id: "rs-tb-dv-euthanasia",
    topicSlug: "theme-b-religion-life",
    issue: "Should euthanasia be legalised? Is it ever morally right to end a life to relieve suffering?",
    views: [
      {
        label: "Christian (traditional)",
        position:
          "Euthanasia is wrong because life is a sacred gift from God, and only God has the right to decide when life ends. Suffering can have spiritual value, and Christians should support people through suffering with compassion and palliative care rather than ending life.",
        evidence:
          "Job 1:21 — 'The Lord gave and the Lord has taken away.' The sanctity of life principle means no human should 'play God'. The hospice movement, founded by the Christian Dame Cicely Saunders, provides an alternative to euthanasia by offering pain relief and dignified end-of-life care.",
      },
      {
        label: "Islamic",
        position:
          "Euthanasia is haram (forbidden). Life belongs to Allah, and only Allah decides when a person dies. Muslims should endure suffering with patience (sabr), as it can be a test from Allah and a means of purifying sins. However, withdrawing futile treatment may be permissible.",
        evidence:
          "Qur'an 5:32 forbids the taking of innocent life. A hadith states: 'None of you should wish for death because of a calamity befalling him' (Sahih Bukhari). The Islamic Medical Association has stated that switching off life support when brain death is confirmed is not considered euthanasia.",
      },
      {
        label: "Pro-euthanasia / Secular",
        position:
          "People should have the right to die with dignity and to choose when to end unbearable suffering. Autonomy (the right to make decisions about one's own body) is a fundamental human right. Strict safeguards can prevent abuse.",
        evidence:
          "Organisations like Dignity in Dying campaign for a change in UK law. Countries such as the Netherlands, Belgium, and Canada have legalised forms of assisted dying with safeguards. The quality of life argument holds that a life of unrelievable suffering may not be worth living.",
      },
    ],
  },
  {
    id: "rs-tb-dv-animals",
    topicSlug: "theme-b-religion-life",
    issue: "Is it morally acceptable to use animals for food, experimentation, and other human purposes?",
    views: [
      {
        label: "Christian (mainstream)",
        position:
          "Animals can be used for human benefit (food, medical research) as God gave humans dominion over animals. However, this dominion comes with responsibility — animals should not be treated cruelly and their welfare must be considered.",
        evidence:
          "Genesis 1:28 — God gives humans dominion over animals. Genesis 9:3 — 'Everything that lives and moves about will be food for you.' However, Proverbs 12:10 states: 'The righteous care for the needs of their animals.' Christians should avoid unnecessary cruelty.",
      },
      {
        label: "Islamic",
        position:
          "Animals may be used for food (if slaughtered according to halal rules) and for genuine human need. However, causing unnecessary suffering is haram. Animal experimentation is permitted only if there is no alternative and it leads to significant benefit for humans.",
        evidence:
          "The Prophet Muhammad taught kindness to animals — a hadith tells of a woman who was punished in hell for starving a cat (Sahih Bukhari), and a man was forgiven his sins for giving water to a thirsty dog. Animals must be treated as part of Allah's creation with their own rights.",
      },
      {
        label: "Animal rights / Vegetarian",
        position:
          "Animals have rights and should not be used as means to human ends. Factory farming, animal experimentation, and hunting cause unnecessary suffering. Some religious believers adopt vegetarianism or veganism as a compassionate response to animal suffering.",
        evidence:
          "Peter Singer's 'Animal Liberation' argues that speciesism (valuing humans above animals) is a form of prejudice. Some Christians point to the vegetarian diet in Eden (Genesis 1:29) as God's ideal. The Quaker tradition emphasises compassion towards all creatures.",
      },
    ],
  },
];
