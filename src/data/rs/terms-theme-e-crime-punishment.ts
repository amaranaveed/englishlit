// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 2 — Theme E: Religion, Crime & Punishment (3.2.5)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const THEME_E_CRIME_PUNISHMENT_TERMS: RSTerm[] = [
  // ── Reasons for crime ──
  {
    id: "rs-te-crime",
    word: "Crime",
    def: "An act that breaks the law of the land, for which a person can be punished by the legal system. What counts as a crime can vary between countries and may change over time.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-poverty-cause",
    word: "Poverty (as a cause of crime)",
    def: "A lack of money or material possessions. Some people turn to crime such as theft because they cannot afford basic necessities, though Christians and Muslims teach that poverty does not justify breaking the law.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-addiction",
    word: "Addiction",
    def: "A physical or psychological dependence on a substance or activity, such as drugs, alcohol, or gambling. Addiction can drive people to commit crimes to fund their habit.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },

  // ── Types of crime ──
  {
    id: "rs-te-hate-crime",
    word: "Hate Crime",
    def: "A criminal offence motivated by hostility or prejudice towards a person's race, religion, sexuality, disability, or gender identity. Both Christianity and Islam condemn hatred and prejudice.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-murder",
    word: "Murder",
    def: "The unlawful, deliberate killing of another person. Both Christianity and Islam consider the intentional taking of innocent life to be one of the gravest sins.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-theft",
    word: "Theft",
    def: "The act of stealing another person's property. Theft is forbidden in both Christianity (the eighth commandment) and Islam, where it is considered a sin against God and the victim.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },

  // ── Aims of punishment ──
  {
    id: "rs-te-retribution",
    word: "Retribution",
    def: "Punishment that makes the offender pay for what they have done — 'an eye for an eye.' It aims to give the criminal a punishment proportionate to the crime committed.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-deterrence",
    word: "Deterrence",
    def: "Punishment intended to discourage the offender and others from committing crime. Harsh sentences are designed to put people off breaking the law.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-reformation",
    word: "Reformation",
    def: "Punishment that aims to change the criminal's behaviour so they do not reoffend. It focuses on rehabilitating the offender through education, therapy, or community programmes.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-protection",
    word: "Protection of Society",
    def: "Punishment that aims to keep the public safe by removing dangerous criminals from society, for example through imprisonment or electronic tagging.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },

  // ── Types of punishment ──
  {
    id: "rs-te-prison",
    word: "Prison",
    def: "A secure institution where offenders are confined as punishment. Prison removes the criminal's liberty and can serve all four aims of punishment — retribution, deterrence, reformation, and protection.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-community-service",
    word: "Community Service",
    def: "Unpaid work that an offender must carry out in the community as an alternative to prison. It aims to reform the offender and benefit society while keeping them out of the prison system.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },

  // ── Death penalty, forgiveness, and treatment of criminals ──
  {
    id: "rs-te-death-penalty",
    word: "Death Penalty (Capital Punishment)",
    def: "The legal execution of a person as punishment for a serious crime such as murder or treason. It has been abolished in the UK but remains in some countries. Christians and Muslims hold a range of views on its use.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-forgiveness",
    word: "Forgiveness",
    def: "Choosing to pardon someone for a wrongdoing and letting go of anger or desire for revenge. Christianity and Islam both teach that forgiveness is a virtue, though they also uphold justice.",
    topicSlug: "theme-e-crime-punishment",
    category: "teaching",
  },
  {
    id: "rs-te-restorative-justice",
    word: "Restorative Justice",
    def: "A system that brings victims and offenders together so the criminal can understand the impact of their actions, apologise, and make amends. It focuses on healing rather than punishment alone.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-corporal-punishment",
    word: "Corporal Punishment",
    def: "Physical punishment inflicted on the body, such as flogging or amputation. Some Muslim-majority countries apply corporal punishments under Shari'ah law for specific offences. Most Christians oppose it.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },

  // ── Good and evil ──
  {
    id: "rs-te-evil",
    word: "Evil",
    def: "That which is profoundly immoral, wicked, or harmful. Christians and Muslims recognise both moral evil (caused by human choices) and natural evil (suffering caused by natural events such as earthquakes).",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-devil-iblis",
    word: "The Devil / Iblis",
    def: "In Christianity, the Devil (Satan) is a fallen angel who tempts humans to sin. In Islam, Iblis is a jinn who refused to bow to Adam and was cast out by Allah; he tempts people away from the straight path.",
    topicSlug: "theme-e-crime-punishment",
    category: "teaching",
  },
  {
    id: "rs-te-free-will",
    word: "Free Will",
    def: "The ability to make one's own choices. Both Christians and Muslims believe God gave humans free will, making people morally responsible for their actions, including the choice to commit crime.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
  {
    id: "rs-te-justice",
    word: "Justice",
    def: "Ensuring that what is fair and right is done. Both Christianity and Islam teach that God is just and that humans have a duty to uphold justice in society, including through the fair treatment of criminals.",
    topicSlug: "theme-e-crime-punishment",
    category: "key-term",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const THEME_E_CRIME_PUNISHMENT_SCRIPTURE: ScriptureQuote[] = [
  // ── Christian sources ──
  {
    id: "rs-te-sq-exod21-24",
    topicSlug: "theme-e-crime-punishment",
    text: "Eye for eye, tooth for tooth, hand for hand, foot for foot.",
    source: "Exodus 21:24",
    religion: "christianity",
    significance:
      "An Old Testament teaching on proportionate retribution — punishment should fit the crime, no more and no less. Many Christians argue Jesus' later teachings replaced this approach with forgiveness.",
  },
  {
    id: "rs-te-sq-matt5-38-39",
    topicSlug: "theme-e-crime-punishment",
    text: "You have heard that it was said, 'Eye for eye, and tooth for tooth.' But I tell you, do not resist an evil person. If anyone slaps you on the right cheek, turn to them the other cheek also.",
    source: "Matthew 5:38\u201339",
    religion: "christianity",
    significance:
      "Jesus overturns the Old Testament law of retribution and teaches forgiveness and non-retaliation. This is a key text for Christians who oppose the death penalty and favour reformation over revenge.",
  },
  {
    id: "rs-te-sq-matt6-14-15",
    topicSlug: "theme-e-crime-punishment",
    text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you. But if you do not forgive others their sins, your Father will not forgive your sins.",
    source: "Matthew 6:14\u201315",
    religion: "christianity",
    significance:
      "Jesus teaches that receiving God's forgiveness depends on a willingness to forgive others. This motivates Christians to forgive criminals and supports the principles of restorative justice.",
  },
  {
    id: "rs-te-sq-rom13-1-4",
    topicSlug: "theme-e-crime-punishment",
    text: "Let everyone be subject to the governing authorities, for there is no authority except that which God has established... For the one in authority is God's servant for your good. But if you do wrong, be afraid, for rulers do not bear the sword for no reason.",
    source: "Romans 13:1\u20134",
    religion: "christianity",
    significance:
      "Paul teaches that the state has God-given authority to uphold law and punish wrongdoers. Some Christians use this to support the death penalty; others see it as endorsing lawful punishment in general, not any specific type.",
  },
  {
    id: "rs-te-sq-john8-7",
    topicSlug: "theme-e-crime-punishment",
    text: "Let any one of you who is without sin be the first to throw a stone at her.",
    source: "John 8:7",
    religion: "christianity",
    significance:
      "Jesus challenges those about to execute a woman caught in adultery, suggesting no human is morally perfect enough to judge others to death. This is a key text used by Christians who oppose capital punishment.",
  },

  // ── Islamic sources ──
  {
    id: "rs-te-sq-quran5-32",
    topicSlug: "theme-e-crime-punishment",
    text: "Whoever kills a soul unless for a soul or for corruption in the land — it is as if he had slain mankind entirely. And whoever saves one — it is as if he had saved mankind entirely.",
    source: "Qur'an 5:32",
    religion: "islam",
    significance:
      "Affirms the supreme value of human life in Islam. Murder is among the gravest sins. This verse also implies that lawful execution (for murder or serious corruption) may be permitted under strict conditions.",
  },
  {
    id: "rs-te-sq-quran5-38",
    topicSlug: "theme-e-crime-punishment",
    text: "As for the thief, both male and female, cut off their hands. It is the reward of their own deeds, an exemplary punishment from Allah.",
    source: "Qur'an 5:38",
    religion: "islam",
    significance:
      "Prescribes corporal punishment for theft under Shari'ah law. In practice, very strict conditions of evidence must be met, and many Muslim scholars argue it should rarely be carried out. It demonstrates the deterrence aim of Islamic punishment.",
  },
  {
    id: "rs-te-sq-quran42-40",
    topicSlug: "theme-e-crime-punishment",
    text: "The recompense for an injury is an injury equal thereto; but if a person forgives and makes reconciliation, his reward is due from Allah.",
    source: "Qur'an 42:40",
    religion: "islam",
    significance:
      "Allows proportionate retribution but actively encourages forgiveness, stating that those who forgive will be rewarded by Allah. This supports both justice and mercy in the Islamic approach to crime.",
  },
  {
    id: "rs-te-sq-quran2-178",
    topicSlug: "theme-e-crime-punishment",
    text: "O you who have believed, prescribed for you is legal retribution for those murdered... But whoever overlooks from his brother anything, then there should be a suitable follow-up and payment to him with good conduct.",
    source: "Qur'an 2:178",
    religion: "islam",
    significance:
      "Establishes the principle of qisas (equal retaliation) for murder but encourages the victim's family to show mercy and accept compensation (diyyah) instead. This balances justice with the Islamic value of forgiveness.",
  },
  {
    id: "rs-te-sq-hadith-mercy",
    topicSlug: "theme-e-crime-punishment",
    text: "Show mercy to those on earth, and the One above the heavens will show mercy to you.",
    source: "Hadith (al-Tirmidhi 1924)",
    religion: "islam",
    significance:
      "The Prophet Muhammad teaches that showing mercy to others leads to receiving Allah's mercy. This hadith supports Muslims who argue for reformation and forgiveness in the treatment of criminals.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const THEME_E_CRIME_PUNISHMENT_VIEWS: DivergentView[] = [
  {
    id: "rs-te-dv-death-penalty",
    topicSlug: "theme-e-crime-punishment",
    issue: "Should the death penalty be used?",
    views: [
      {
        label: "Christian — Against",
        position:
          "Most Christians, including the Catholic Church, oppose the death penalty. Life is sacred (sanctity of life) and only God has the right to take it. Jesus taught forgiveness and mercy, not revenge. There is always the risk of executing an innocent person.",
        evidence:
          "Jesus said 'Let any one of you who is without sin be the first to throw a stone' (John 8:7). In 2018, Pope Francis declared the death penalty 'inadmissible' in all cases. The commandment 'You shall not murder' (Exodus 20:13) applies to the state as well as individuals.",
      },
      {
        label: "Christian — For (minority view)",
        position:
          "Some Christians, particularly in the USA, support the death penalty for the most serious crimes. They argue the state has God-given authority to punish wrongdoers and that it serves as a deterrent and protects society.",
        evidence:
          "Romans 13:4 says rulers 'do not bear the sword for no reason.' Genesis 9:6 states 'Whoever sheds human blood, by humans shall their blood be shed.' The Old Testament prescribes death for certain offences.",
      },
      {
        label: "Islamic — Permitted under Shari'ah",
        position:
          "Islam permits the death penalty for the most serious crimes (e.g. murder, spreading corruption) under strict Shari'ah conditions, but forgiveness is encouraged. A fair trial is required and the burden of evidence is very high.",
        evidence:
          "Qur'an 5:32 allows taking life 'for a soul or for corruption in the land.' Qur'an 2:178 permits qisas (retribution) for murder but encourages the victim's family to forgive. The Prophet Muhammad pardoned many people who had wronged him.",
      },
    ],
  },
  {
    id: "rs-te-dv-corporal-punishment",
    topicSlug: "theme-e-crime-punishment",
    issue: "Is corporal punishment an acceptable form of justice?",
    views: [
      {
        label: "Christian view",
        position:
          "Most Christians oppose corporal punishment as it is degrading and violates human dignity. Jesus taught love, mercy, and turning the other cheek. Physical punishment does not help to reform the offender.",
        evidence:
          "Jesus' teaching in Matthew 5:38\u201339 overturns 'an eye for an eye' with non-retaliation. The Christian emphasis on the sanctity of life and human dignity (Genesis 1:27 — made in God's image) opposes deliberately causing physical harm.",
      },
      {
        label: "Islamic view — Shari'ah perspective",
        position:
          "Some Muslims accept corporal punishment (e.g. flogging for certain offences) as divinely commanded in the Qur'an. It is seen as a deterrent that benefits society. Strict conditions must be met: the punishment must be carried out humanely, and the burden of proof is very high.",
        evidence:
          "Qur'an 5:38 prescribes amputation for theft; Qur'an 24:2 prescribes flogging for adultery. Many Muslim scholars argue these are maximum punishments rarely applied, and that judges should seek alternatives. Some Muslim-majority countries do not apply corporal punishments.",
      },
    ],
  },
  {
    id: "rs-te-dv-forgiveness-justice",
    topicSlug: "theme-e-crime-punishment",
    issue: "Should criminals always be forgiven?",
    views: [
      {
        label: "Christian — Forgiveness is essential",
        position:
          "Christians are taught to always forgive, as God forgives them. Jesus forgave those who crucified him. However, forgiveness does not mean there should be no punishment — justice and forgiveness can work together through restorative justice.",
        evidence:
          "Jesus said 'Father, forgive them, for they do not know what they are doing' (Luke 23:34). The Lord's Prayer asks God to 'forgive us our sins, as we forgive those who sin against us.' Matthew 18:21\u201322 — Jesus says forgive 'seventy times seven' times.",
      },
      {
        label: "Islamic — Forgiveness is encouraged but justice must be served",
        position:
          "Islam strongly encourages forgiveness and mercy, and those who forgive are promised reward from Allah. However, victims also have the right to seek justice. The balance between mercy and justice is central to the Islamic approach.",
        evidence:
          "Qur'an 42:40 — 'if a person forgives and makes reconciliation, his reward is due from Allah.' The Prophet Muhammad forgave the people of Makkah after conquering the city despite years of persecution. Allah is described as Al-Ghafur (the Most Forgiving) and Al-Adl (the Just).",
      },
    ],
  },
  {
    id: "rs-te-dv-good-evil",
    topicSlug: "theme-e-crime-punishment",
    issue: "What is the origin of evil and suffering?",
    views: [
      {
        label: "Christian view",
        position:
          "Evil entered the world through the Fall — Adam and Eve's disobedience in the Garden of Eden (original sin). The Devil (Satan), a fallen angel, tempts humans to sin. Humans have free will and are responsible for their moral choices.",
        evidence:
          "Genesis 3 — the serpent tempts Eve to eat the forbidden fruit. Romans 5:12 — 'sin entered the world through one man.' Christians believe Satan is real but that God is ultimately more powerful (1 John 4:4).",
      },
      {
        label: "Islamic view",
        position:
          "There is no concept of original sin in Islam. Evil exists because Allah gave humans free will, and Iblis (a jinn, not a fallen angel) tempts people to disobey Allah. Suffering can be a test from Allah. Humans are born pure (fitrah) and are accountable for their own choices.",
        evidence:
          "Qur'an 7:11\u201318 — Iblis refuses to bow to Adam and is granted respite to lead humans astray. Qur'an 2:286 — 'Allah does not burden a soul beyond that it can bear.' Muslims believe everyone will be judged on the Day of Judgement for their own actions.",
      },
    ],
  },
];
