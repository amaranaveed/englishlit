// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 2, Theme D — Religion, Peace & Conflict (3.2.4)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const THEME_D_PEACE_CONFLICT_TERMS: RSTerm[] = [
  // ── Violence and protest ──
  {
    id: "rs-td-violence",
    word: "Violence",
    def: "The use of physical force intended to hurt, damage, or kill. Most religious believers oppose violence, but some accept it may be necessary in extreme circumstances such as self-defence or protecting the innocent.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-violent-protest",
    word: "Violent Protest",
    def: "Using violence such as rioting, armed resistance, or destruction of property to bring about political or social change. Most Christians and Muslims oppose violent protest, though some argue it may be a last resort against severe injustice.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-terrorism",
    word: "Terrorism",
    def: "The unlawful use of violence and intimidation, especially against civilians, to achieve political or ideological aims. All mainstream Christian and Muslim teachings condemn terrorism as immoral and a violation of the sanctity of life.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },

  // ── War ──
  {
    id: "rs-td-war",
    word: "War",
    def: "Armed conflict between two or more nations or groups. Reasons for war may include self-defence, protecting the weak, retaliation, or fighting injustice. Religious traditions set strict conditions for when war may be justified.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-just-war",
    word: "Just War Theory",
    def: "A set of criteria originally developed by Thomas Aquinas to determine when going to war is morally acceptable. Conditions include: it must be declared by a legitimate authority, there must be a just cause, it must be a last resort, the force used must be proportional, and civilians must not be targeted.",
    topicSlug: "theme-d-peace-conflict",
    category: "teaching",
  },
  {
    id: "rs-td-holy-war",
    word: "Holy War",
    def: "A war fought for a religious cause or authorised by a religious leader. In Christianity, the Crusades were considered holy wars. In Islam, some forms of jihad may be understood as holy war, though the concept is debated.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-jihad",
    word: "Jihad",
    def: "An Arabic term meaning 'struggle' or 'striving'. Greater jihad is the inner spiritual struggle to live as a good Muslim. Lesser jihad is the physical struggle to defend Islam, which must follow strict rules — it must be a last resort, authorised by a legitimate authority, and must not harm civilians.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-greater-jihad",
    word: "Greater Jihad",
    def: "The inner, personal struggle to overcome selfishness and to live as Allah intends. This includes striving to follow the Five Pillars, resisting temptation, and becoming a better Muslim. Most Muslims consider this the most important form of jihad.",
    topicSlug: "theme-d-peace-conflict",
    category: "teaching",
  },
  {
    id: "rs-td-lesser-jihad",
    word: "Lesser Jihad",
    def: "The outward, physical struggle to defend Islam and the Muslim community (ummah) when under attack. It must be fought in self-defence, as a last resort, authorised by a religious authority, and must not target innocents or destroy the environment.",
    topicSlug: "theme-d-peace-conflict",
    category: "teaching",
  },

  // ── Weapons of mass destruction ──
  {
    id: "rs-td-wmd",
    word: "Weapons of Mass Destruction (WMDs)",
    def: "Weapons capable of killing large numbers of people and causing widespread devastation, including nuclear, biological, and chemical weapons. Most religious believers oppose WMDs because they cause indiscriminate suffering and cannot distinguish between combatants and civilians.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-nuclear-weapons",
    word: "Nuclear Weapons",
    def: "The most powerful WMDs, capable of destroying entire cities and causing long-term radiation damage. Arguments for nuclear deterrence suggest they prevent war; arguments against say they violate the sanctity of life, are indiscriminate, and breach just war principles.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-nuclear-deterrence",
    word: "Nuclear Deterrence",
    def: "The strategy of possessing nuclear weapons to discourage other nations from attacking, based on the threat of mutually assured destruction (MAD). Some argue deterrence has kept peace since 1945; others say it is morally wrong to threaten mass killing.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },

  // ── Peace and pacifism ──
  {
    id: "rs-td-pacifism",
    word: "Pacifism",
    def: "The belief that all violence and war are wrong and that disputes should be settled by peaceful means. Christian pacifists include the Quakers (Religious Society of Friends), who refuse to fight in any war. Many Muslims also emphasise peace as central to Islam.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-peace",
    word: "Peace",
    def: "The absence of conflict and the presence of justice, harmony, and well-being. Both Christianity and Islam teach that peace is a gift from God and that believers should work actively to promote it.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-peacemaking",
    word: "Peacemaking",
    def: "Active efforts to bring about peace and to resolve conflict, including diplomacy, negotiation, mediation, and protest. Both Christianity and Islam regard peacemaking as a religious duty.",
    topicSlug: "theme-d-peace-conflict",
    category: "practice",
  },

  // ── Forgiveness and reconciliation ──
  {
    id: "rs-td-forgiveness",
    word: "Forgiveness",
    def: "Choosing to pardon someone for a wrong they have committed, letting go of anger and the desire for revenge. Jesus taught Christians to forgive unconditionally; Islam also values forgiveness, though justice must be maintained.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-reconciliation",
    word: "Reconciliation",
    def: "The restoration of friendly relations after conflict or disagreement. Religious organisations often work to bring reconciliation between opposing sides, for example the Coventry Cathedral ministry of reconciliation after World War II.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-justice",
    word: "Justice",
    def: "Fairness and the principle that all people should be treated equally and have their rights upheld. Both Christianity and Islam teach that God demands justice, and that working for justice is a religious duty.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },

  // ── Victims of war ──
  {
    id: "rs-td-refugees",
    word: "Refugees",
    def: "People who have been forced to flee their home country due to war, persecution, or natural disaster. Both Christianity and Islam teach the duty to welcome and care for refugees and those in need.",
    topicSlug: "theme-d-peace-conflict",
    category: "key-term",
  },
  {
    id: "rs-td-sanctity-of-life",
    word: "Sanctity of Life",
    def: "The belief that all life is holy and belongs to God, so only God has the right to give and take life. This principle underpins religious opposition to war, terrorism, and the use of WMDs.",
    topicSlug: "theme-d-peace-conflict",
    category: "teaching",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const THEME_D_PEACE_CONFLICT_SCRIPTURE: ScriptureQuote[] = [
  // ── Christian: Peace and peacemaking ──
  {
    id: "rs-td-sq-matt5-9",
    topicSlug: "theme-d-peace-conflict",
    text: "Blessed are the peacemakers, for they will be called children of God.",
    source: "Matthew 5:9",
    religion: "christianity",
    significance:
      "One of the Beatitudes from Jesus' Sermon on the Mount. It teaches that working for peace is a central Christian duty and that peacemakers have a special relationship with God.",
  },
  {
    id: "rs-td-sq-matt5-39",
    topicSlug: "theme-d-peace-conflict",
    text: "But I tell you, do not resist an evil person. If anyone slaps you on the right cheek, turn to them the other cheek also.",
    source: "Matthew 5:39",
    religion: "christianity",
    significance:
      "Jesus teaches non-retaliation and non-violence. This is a key text for Christian pacifists, including Quakers, who argue that Jesus' teaching rules out all violence and war.",
  },
  {
    id: "rs-td-sq-matt26-52",
    topicSlug: "theme-d-peace-conflict",
    text: "Put your sword back in its place, for all who draw the sword will die by the sword.",
    source: "Matthew 26:52",
    religion: "christianity",
    significance:
      "Jesus rebukes his disciple who used violence to resist his arrest. This teaching warns that violence leads to further violence and supports the case for pacifism.",
  },

  // ── Christian: Forgiveness ──
  {
    id: "rs-td-sq-matt6-14-15",
    topicSlug: "theme-d-peace-conflict",
    text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you. But if you do not forgive others their sins, your Father will not forgive your sins.",
    source: "Matthew 6:14\u201315",
    religion: "christianity",
    significance:
      "Part of the Sermon on the Mount, this teaching makes forgiveness a condition of receiving God's own forgiveness. It underpins the Christian call to forgive enemies and work towards reconciliation after conflict.",
  },

  // ── Christian: Justice and the vulnerable ──
  {
    id: "rs-td-sq-rom13-4",
    topicSlug: "theme-d-peace-conflict",
    text: "For the one in authority is God's servant for your good. But if you do wrong, be afraid, for rulers do not bear the sword for no reason.",
    source: "Romans 13:4",
    religion: "christianity",
    significance:
      "Paul teaches that governing authorities are appointed by God and have the right to use force to maintain justice and order. This is used to support just war theory and the state's duty to protect its citizens.",
  },

  // ── Islamic: Peace ──
  {
    id: "rs-td-sq-quran8-61",
    topicSlug: "theme-d-peace-conflict",
    text: "If they incline to peace, then incline to it also, and put your trust in Allah.",
    source: "Qur'an 8:61",
    religion: "islam",
    significance:
      "Teaches Muslims to always choose peace when the opportunity arises. This demonstrates that Islam fundamentally favours peace over conflict and that war should only ever be a last resort.",
  },
  {
    id: "rs-td-sq-quran5-32",
    topicSlug: "theme-d-peace-conflict",
    text: "Whoever kills a soul — it is as if he had slain mankind entirely. And whoever saves one — it is as if he had saved mankind entirely.",
    source: "Qur'an 5:32",
    religion: "islam",
    significance:
      "One of the most important Qur'anic verses on the sanctity of life. It is used to condemn terrorism and the killing of innocent people, showing that Islam places the highest value on human life.",
  },

  // ── Islamic: Jihad and self-defence ──
  {
    id: "rs-td-sq-quran22-39",
    topicSlug: "theme-d-peace-conflict",
    text: "Permission to fight has been given to those who are being fought, because they were wronged. And indeed, Allah is competent to give them victory.",
    source: "Qur'an 22:39",
    religion: "islam",
    significance:
      "This verse permits Muslims to fight in self-defence when they have been attacked or oppressed. It establishes that lesser jihad is only permissible as a defensive response, not as aggression.",
  },
  {
    id: "rs-td-sq-quran2-190",
    topicSlug: "theme-d-peace-conflict",
    text: "Fight in the way of Allah those who fight you but do not transgress. Indeed, Allah does not like transgressors.",
    source: "Qur'an 2:190",
    religion: "islam",
    significance:
      "Sets strict limits on warfare in Islam — Muslims may only fight those who fight them and must not exceed what is necessary. This rules out targeting civilians, using disproportionate force, and acts of terrorism.",
  },

  // ── Islamic: Forgiveness ──
  {
    id: "rs-td-sq-quran42-40",
    topicSlug: "theme-d-peace-conflict",
    text: "The reward of an evil deed is its equivalent. But whoever pardons and seeks reconciliation, then their reward is with Allah.",
    source: "Qur'an 42:40",
    religion: "islam",
    significance:
      "While justice permits equal retaliation, the Qur'an teaches that forgiveness and reconciliation are superior and will be rewarded by Allah. This supports Islamic peacemaking and forgiveness after conflict.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const THEME_D_PEACE_CONFLICT_VIEWS: DivergentView[] = [
  {
    id: "rs-td-dv-pacifism-vs-just-war",
    topicSlug: "theme-d-peace-conflict",
    issue: "Is war ever morally justified, or should all violence be rejected?",
    views: [
      {
        label: "Pacifist (e.g. Quakers)",
        position:
          "All war and violence are morally wrong. Disputes must always be settled by peaceful means. Jesus taught non-violence and love for enemies. The sanctity of life means killing can never be justified. Quakers have refused to fight in all wars since the 17th century.",
        evidence:
          "Matthew 5:39 — 'Turn the other cheek.' Matthew 5:44 — 'Love your enemies.' The Quaker Peace Testimony (1660) declares: 'We utterly deny all outward wars and strife and fightings with outward weapons, for any end or under any pretence whatsoever.'",
      },
      {
        label: "Just War Supporter",
        position:
          "War is terrible but sometimes necessary to protect innocent people, resist evil, or defend a nation. Just war theory provides moral criteria to ensure war is only fought for the right reasons and in the right way. Doing nothing in the face of grave injustice can also be immoral.",
        evidence:
          "Thomas Aquinas' just war criteria: legitimate authority, just cause, right intention, last resort, proportionality, reasonable chance of success. Romans 13:4 supports the authority's right to use force. The Catechism of the Catholic Church (2309) outlines conditions for legitimate defence.",
      },
      {
        label: "Islamic Perspective on Lesser Jihad",
        position:
          "Fighting is permitted only in self-defence or to protect the oppressed, and only as a last resort. Strict rules apply: no targeting civilians, no destruction of crops or trees, no forced conversion. Peace must always be preferred when possible.",
        evidence:
          "Qur'an 22:39 — permission to fight is given to those who are wronged. Qur'an 2:190 — 'Do not transgress.' Qur'an 8:61 — if the enemy inclines to peace, accept it. The Prophet Muhammad set rules of engagement forbidding harm to non-combatants.",
      },
    ],
  },
  {
    id: "rs-td-dv-nuclear-weapons",
    topicSlug: "theme-d-peace-conflict",
    issue: "Can the possession or use of nuclear weapons ever be justified?",
    views: [
      {
        label: "In Favour of Deterrence",
        position:
          "Nuclear weapons have prevented major wars since 1945 through mutually assured destruction (MAD). Possessing them deters aggressors and protects a nation's citizens. Unilateral disarmament would leave a country vulnerable. Deterrence keeps the peace without actually using the weapons.",
        evidence:
          "The Cold War ended without direct conflict between the USA and USSR, arguably because of nuclear deterrence. Some argue that governments have a duty to protect their citizens using all available means (Romans 13:4).",
      },
      {
        label: "Christian / Muslim Opposition",
        position:
          "Nuclear weapons are fundamentally immoral because they cause indiscriminate destruction, killing millions of civilians and causing long-term environmental damage. Their use can never meet just war criteria (proportionality, protection of civilians). The sanctity of life forbids weapons designed for mass killing.",
        evidence:
          "Pope Francis has stated that not only the use but the mere possession of nuclear weapons is immoral. The Qur'an 5:32 teaches that killing one innocent person is like killing all of humanity. Nuclear weapons cannot distinguish between combatants and civilians, violating both Christian and Islamic principles.",
      },
    ],
  },
  {
    id: "rs-td-dv-forgiveness",
    topicSlug: "theme-d-peace-conflict",
    issue: "Should victims of conflict always forgive their persecutors?",
    views: [
      {
        label: "Christian: Forgiveness Is Essential",
        position:
          "Jesus commands unconditional forgiveness, even of enemies. Forgiveness breaks the cycle of violence and hatred, and is necessary for reconciliation. Christians believe God forgives them, so they must forgive others. Examples such as Desmond Tutu's Truth and Reconciliation Commission in South Africa show forgiveness can heal societies.",
        evidence:
          "Matthew 6:14\u201315 — forgiveness from God depends on forgiving others. Luke 23:34 — Jesus on the cross said, 'Father, forgive them, for they do not know what they are doing.' The Lord's Prayer includes 'forgive us our trespasses, as we forgive those who trespass against us.'",
      },
      {
        label: "Islamic: Forgiveness with Justice",
        position:
          "Islam encourages forgiveness and teaches it is superior to revenge, but it also upholds the right to seek justice. Victims are not obligated to forgive if justice has not been served. Forgiveness should be balanced with accountability so that wrongdoers are held responsible.",
        evidence:
          "Qur'an 42:40 — pardoning and reconciliation are rewarded by Allah, but proportional justice is also permitted. Qur'an 16:126 — 'If you punish, then punish with the equivalent of what you were harmed with. But if you are patient — it is better for the patient.'",
      },
      {
        label: "Secular / Victim-centred",
        position:
          "Forgiveness is a deeply personal choice and should never be forced on victims of conflict or atrocity. Some suffering is so severe that expecting forgiveness places an unfair burden on victims. Justice and accountability must come first; forgiveness, if it comes at all, must be voluntary.",
        evidence:
          "Psychologists note that pressuring forgiveness can cause further harm to victims. War crimes tribunals (e.g. the International Criminal Court) prioritise justice and accountability, recognising that forgiveness cannot replace legal accountability for serious crimes.",
      },
    ],
  },
  {
    id: "rs-td-dv-terrorism",
    topicSlug: "theme-d-peace-conflict",
    issue: "Can terrorism ever be justified as a form of protest or resistance?",
    views: [
      {
        label: "Religious Condemnation (Christian & Muslim)",
        position:
          "Terrorism is always morally wrong. It deliberately targets innocent civilians, causes terror and suffering, and violates the sanctity of life. No political or religious cause can justify the killing of innocents. Both Christianity and Islam unequivocally condemn acts of terrorism.",
        evidence:
          "The Qur'an 5:32 forbids the killing of innocents. The Ten Commandments (Exodus 20:13) state 'You shall not murder.' Pope Francis and Muslim leaders worldwide have jointly condemned terrorism. The Muslim Council of Britain has repeatedly stated that terrorism has no basis in Islam.",
      },
      {
        label: "Counter-argument: Last Resort Against Oppression",
        position:
          "While terrorism is widely condemned, some argue that when all peaceful options have been exhausted and a people face severe oppression, violent resistance may be the only remaining option. Historical examples (e.g. resistance movements in World War II) show that violence was sometimes used against unjust regimes.",
        evidence:
          "Some liberation theology thinkers argued that the oppressed may be justified in using force against structural injustice. However, mainstream religious teaching maintains a firm distinction between armed resistance in war (which may meet just war criteria) and terrorism (which targets civilians and is never justified).",
      },
    ],
  },
];
