// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 2 — Theme F: Religion, Human Rights & Social Justice (3.2.6)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const THEME_F_HUMAN_RIGHTS_TERMS: RSTerm[] = [
  // ── Human rights and social justice ──
  {
    id: "rs-tf-human-rights",
    word: "Human Rights",
    def: "The basic rights and freedoms to which all people are entitled, such as the right to life, freedom of speech, and freedom of religion. The UN Universal Declaration of Human Rights (1948) sets out 30 fundamental rights.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-social-justice",
    word: "Social Justice",
    def: "Ensuring that society treats all people fairly and that the benefits and responsibilities of living in a society are shared equally. Both Christianity and Islam teach that working for social justice is a duty.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-prejudice",
    word: "Prejudice",
    def: "Holding a biased, unfounded opinion about a person or group based on characteristics such as race, gender, or religion, without proper knowledge. Both Christianity and Islam condemn prejudice.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-discrimination",
    word: "Discrimination",
    def: "Actions or behaviour that treat people unfairly because of prejudice towards their race, gender, religion, sexuality, age, or disability. Discrimination puts prejudice into practice.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-equality",
    word: "Equality",
    def: "The state of being equal in status, rights, and opportunities. Christians and Muslims believe all people are equal before God/Allah because all are created by him.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },

  // ── Racism ──
  {
    id: "rs-tf-racism",
    word: "Racism",
    def: "Prejudice or discrimination against a person or group based on their race or ethnicity. Both Christianity and Islam teach that racism is wrong because all people are created equal by God.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-mlk",
    word: "Martin Luther King Jr",
    def: "A Baptist minister and civil rights leader who campaigned against racial segregation in the USA using non-violent protest, inspired by Christian teachings on love and equality. He was assassinated in 1968.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-malcolm-x",
    word: "Malcolm X",
    def: "An American Muslim civil rights activist who initially advocated black separatism through the Nation of Islam, but after his Hajj pilgrimage embraced racial equality under mainstream Islam. He was assassinated in 1965.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },

  // ── Religious freedom ──
  {
    id: "rs-tf-religious-freedom",
    word: "Religious Freedom",
    def: "The right to practise, change, or have no religion without persecution. It is protected by Article 18 of the UN Declaration of Human Rights and valued by both Christians and Muslims.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-blasphemy",
    word: "Blasphemy",
    def: "Speech or actions that show disrespect or contempt for God or sacred things. In Islam, blasphemy against Allah or the Prophet Muhammad is considered a serious offence. Some Christians also regard it as sinful.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },

  // ── Sexism and the status of women ──
  {
    id: "rs-tf-sexism",
    word: "Sexism",
    def: "Prejudice or discrimination against a person based on their sex or gender. Both Christianity and Islam affirm the equal value of men and women before God, though they differ on specific gender roles.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-ordination-women",
    word: "Ordination of Women",
    def: "The practice of allowing women to become priests or ministers. The Church of England and many Protestant churches ordain women; the Catholic and Orthodox churches do not, reserving priesthood for men.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },

  // ── Homophobia ──
  {
    id: "rs-tf-homophobia",
    word: "Homophobia",
    def: "Prejudice, hostility, or discrimination against people who are homosexual. While some religious believers oppose homosexual acts, most agree that bullying and hatred towards LGBTQ+ people is wrong.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },

  // ── Wealth and poverty ──
  {
    id: "rs-tf-wealth",
    word: "Wealth",
    def: "A large amount of money or valuable possessions. Neither Christianity nor Islam forbids wealth, but both teach that it must be earned honestly and used responsibly, including sharing with those in need.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-poverty",
    word: "Poverty",
    def: "The state of being extremely poor and lacking the basic necessities of life. Christians and Muslims believe they have a duty to help those in poverty and to work to remove its causes.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-zakat",
    word: "Zakat",
    def: "The third Pillar of Islam — an obligatory charitable donation of 2.5% of a Muslim's annual savings given to those in need. It purifies wealth and helps to reduce inequality in society.",
    topicSlug: "theme-f-human-rights",
    category: "practice",
  },
  {
    id: "rs-tf-tithe",
    word: "Tithe",
    def: "The Christian practice of giving a tenth (10%) of one's income to the Church or to charity. It is based on Old Testament teaching and reflects the belief that all wealth ultimately belongs to God.",
    topicSlug: "theme-f-human-rights",
    category: "practice",
  },
  {
    id: "rs-tf-sadaqah",
    word: "Sadaqah",
    def: "Voluntary charitable giving in Islam, beyond the compulsory zakat. It can include any act of kindness or generosity and is highly encouraged as it pleases Allah.",
    topicSlug: "theme-f-human-rights",
    category: "practice",
  },

  // ── Exploitation and fair trade ──
  {
    id: "rs-tf-exploitation",
    word: "Exploitation of the Poor",
    def: "Taking advantage of vulnerable people for personal gain, such as through unfair wages, sweatshop labour, or excessive interest (usury). Both Christianity and Islam condemn the exploitation of the poor.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
  {
    id: "rs-tf-fair-trade",
    word: "Fair Trade",
    def: "A movement that ensures producers in developing countries receive a fair price for their goods. It is supported by many Christians and Muslims as a way of promoting justice and opposing exploitation.",
    topicSlug: "theme-f-human-rights",
    category: "key-term",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const THEME_F_HUMAN_RIGHTS_SCRIPTURE: ScriptureQuote[] = [
  // ── Christian sources ──
  {
    id: "rs-tf-sq-gen1-27",
    topicSlug: "theme-f-human-rights",
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
    source: "Genesis 1:27",
    religion: "christianity",
    significance:
      "All humans are made in God's image (imago Dei), giving every person equal dignity and worth regardless of race, gender, or status. This is the foundation for Christian beliefs about human rights and equality.",
  },
  {
    id: "rs-tf-sq-gal3-28",
    topicSlug: "theme-f-human-rights",
    text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.",
    source: "Galatians 3:28",
    religion: "christianity",
    significance:
      "Paul teaches that in Christ all social, racial, and gender divisions are overcome. This verse is used to argue against racism and sexism and to support equality in the Church, including the ordination of women.",
  },
  {
    id: "rs-tf-sq-matt19-24",
    topicSlug: "theme-f-human-rights",
    text: "Again I tell you, it is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.",
    source: "Matthew 19:24",
    religion: "christianity",
    significance:
      "Jesus warns that attachment to wealth can prevent people from following God. Christians should not make wealth their priority but should use it generously to help others and support the poor.",
  },
  {
    id: "rs-tf-sq-amos5-24",
    topicSlug: "theme-f-human-rights",
    text: "But let justice roll on like a river, righteousness like a never-failing stream!",
    source: "Amos 5:24",
    religion: "christianity",
    significance:
      "The prophet Amos demands social justice and condemns the exploitation of the poor. This was a key verse for Martin Luther King Jr in his campaign for civil rights, showing the biblical mandate to fight injustice.",
  },
  {
    id: "rs-tf-sq-luke10-27",
    topicSlug: "theme-f-human-rights",
    text: "Love your neighbour as yourself.",
    source: "Luke 10:27",
    religion: "christianity",
    significance:
      "Jesus' command to love one's neighbour is the basis for Christian action against prejudice, discrimination, and poverty. The Parable of the Good Samaritan (Luke 10:25\u201337) shows that 'neighbour' means everyone, regardless of background.",
  },

  // ── Islamic sources ──
  {
    id: "rs-tf-sq-quran49-13",
    topicSlug: "theme-f-human-rights",
    text: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.",
    source: "Qur'an 49:13",
    religion: "islam",
    significance:
      "Affirms that all humans are created equal and that racial or tribal differences exist for mutual understanding, not superiority. The only distinction before Allah is righteousness (taqwa). This is a key verse against racism.",
  },
  {
    id: "rs-tf-sq-quran4-135",
    topicSlug: "theme-f-human-rights",
    text: "O you who have believed, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives.",
    source: "Qur'an 4:135",
    religion: "islam",
    significance:
      "Commands Muslims to uphold justice at all times, even when it goes against their own interests or family. This establishes justice as a fundamental Islamic value that underpins human rights and social responsibility.",
  },
  {
    id: "rs-tf-sq-quran2-177",
    topicSlug: "theme-f-human-rights",
    text: "Righteousness is not that you turn your faces toward the east or the west, but true righteousness is in one who believes in Allah... and gives wealth, in spite of love for it, to relatives, orphans, the needy, the traveller, those who ask, and for freeing slaves.",
    source: "Qur'an 2:177",
    religion: "islam",
    significance:
      "Defines true righteousness as including charitable giving to those in need. Faith alone is not enough — Muslims must act justly and generously. This supports the obligation of zakat and sadaqah.",
  },
  {
    id: "rs-tf-sq-hadith-farewell",
    topicSlug: "theme-f-human-rights",
    text: "All mankind is from Adam and Eve. An Arab has no superiority over a non-Arab, nor does a non-Arab have any superiority over an Arab; a white has no superiority over a black, nor does a black have any superiority over a white — except by piety and good action.",
    source: "Hadith (Prophet Muhammad's Farewell Sermon)",
    religion: "islam",
    significance:
      "The Prophet Muhammad's final sermon is one of the most powerful statements of racial equality in Islamic history. It confirms that no race or nationality is superior — only good character and faith distinguish people before Allah.",
  },
  {
    id: "rs-tf-sq-quran4-1",
    topicSlug: "theme-f-human-rights",
    text: "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women.",
    source: "Qur'an 4:1",
    religion: "islam",
    significance:
      "Teaches that all humanity descends from a single soul, establishing the equality and common origin of men and women. This is used to argue for gender equality and against sexism in Islam.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const THEME_F_HUMAN_RIGHTS_VIEWS: DivergentView[] = [
  {
    id: "rs-tf-dv-gender-roles",
    topicSlug: "theme-f-human-rights",
    issue: "Should women have equal roles to men in religion?",
    views: [
      {
        label: "Liberal Christian view",
        position:
          "Men and women are fully equal and should have equal roles in the Church, including ordination as priests and bishops. Gender should not be a barrier to any form of ministry. The Church of England ordained its first female bishop in 2015.",
        evidence:
          "Galatians 3:28 — 'There is neither... male and female, for you are all one in Christ Jesus.' Jesus treated women with respect and included them among his followers (e.g. Mary Magdalene). The Quakers have always had gender equality in ministry.",
      },
      {
        label: "Catholic / Orthodox view",
        position:
          "Men and women are equal in dignity before God but have different, complementary roles. Only men can be ordained as priests because Jesus chose twelve male apostles and the priesthood has always been male. Women serve God in other important ways.",
        evidence:
          "1 Timothy 2:12 — 'I do not permit a woman to teach or to assume authority over a man.' The Catholic Church teaches that Jesus' choice of male apostles was deliberate and binding. Pope John Paul II declared the matter 'definitively' closed in 1994.",
      },
      {
        label: "Islamic view",
        position:
          "Men and women are equal before Allah in spiritual status but have different roles and responsibilities. Women are not expected to lead mixed-gender prayers. Islam gave women rights to own property, inherit, and divorce long before Western societies did.",
        evidence:
          "Qur'an 4:1 — both men and women come from 'one soul.' Qur'an 33:35 — righteous men and women are equally promised forgiveness and reward. The Prophet Muhammad said 'The best of you are those who are best to their women' (Hadith, al-Tirmidhi).",
      },
    ],
  },
  {
    id: "rs-tf-dv-homosexuality",
    topicSlug: "theme-f-human-rights",
    issue: "How should religious believers respond to homosexuality?",
    views: [
      {
        label: "Liberal Christian view",
        position:
          "God loves all people equally. Same-sex relationships should be accepted and celebrated. The Bible's apparent condemnations of homosexuality must be understood in their historical context and do not apply to loving, committed same-sex relationships today.",
        evidence:
          "Jesus never mentioned homosexuality. The Quakers and the United Reformed Church welcome same-sex marriage. The overriding commandment is to 'love your neighbour as yourself' (Luke 10:27).",
      },
      {
        label: "Conservative Christian / Catholic view",
        position:
          "Homosexual acts are sinful according to Scripture, though homosexual people must be treated with respect and compassion. The Catholic Church teaches that marriage is only between a man and a woman and that sex should be open to procreation.",
        evidence:
          "Leviticus 18:22 — 'Do not have sexual relations with a man as one does with a woman.' Romans 1:26\u201327 describes same-sex relations as unnatural. Genesis 2:24 — 'a man leaves his father and mother and is united to his wife' defines marriage as male-female.",
      },
      {
        label: "Islamic view",
        position:
          "Homosexual acts are considered haram (forbidden) in Islam. The Qur'an references the story of the people of Lut (Lot) as a warning against homosexual behaviour. However, LGBTQ+ Muslims should not face hatred or violence — Islam forbids bullying and oppression.",
        evidence:
          "Qur'an 7:80\u201381 — the people of Lut are condemned for approaching men with desire. The majority of Islamic scholars consider homosexual acts sinful. However, some progressive Muslim scholars are re-examining these texts in a modern context.",
      },
    ],
  },
  {
    id: "rs-tf-dv-wealth-poverty",
    topicSlug: "theme-f-human-rights",
    issue: "Is it acceptable for religious believers to be wealthy?",
    views: [
      {
        label: "Christian — Wealth must be used responsibly",
        position:
          "Wealth itself is not sinful, but the love of money is. Christians should use wealth generously, give to charity, and avoid materialism. Liberation theology emphasises that the Church should prioritise the poor and challenge systems that cause poverty.",
        evidence:
          "1 Timothy 6:10 — 'The love of money is a root of all kinds of evil.' Matthew 19:21 — Jesus told the rich young man, 'Go, sell your possessions and give to the poor.' The Parable of the Rich Man and Lazarus (Luke 16:19\u201331) warns against ignoring the poor.",
      },
      {
        label: "Islamic — Wealth is a blessing but carries obligations",
        position:
          "Wealth is a gift from Allah and can be enjoyed, but Muslims must pay zakat (2.5% of savings annually) and are encouraged to give sadaqah (voluntary charity). Hoarding wealth and refusing to help the poor is sinful. Riba (interest/usury) is forbidden.",
        evidence:
          "Qur'an 2:177 — true righteousness includes giving wealth to the needy. Qur'an 2:275 — 'Allah has permitted trade and has forbidden interest (riba).' The Prophet Muhammad said 'He is not a believer whose stomach is filled while the neighbour to his side goes hungry' (Hadith, al-Bayhaqi).",
      },
    ],
  },
  {
    id: "rs-tf-dv-racism",
    topicSlug: "theme-f-human-rights",
    issue: "How should religious believers respond to racism?",
    views: [
      {
        label: "Christian response — Non-violent activism",
        position:
          "Christians should actively oppose racism through peaceful means. Martin Luther King Jr's Christian faith inspired his non-violent civil rights movement. Racism contradicts the belief that all are made in God's image and the command to love one's neighbour.",
        evidence:
          "Galatians 3:28 — 'there is neither Jew nor Gentile.' The Parable of the Good Samaritan (Luke 10:25\u201337) teaches love across racial boundaries. Archbishop Desmond Tutu used Christian principles to fight apartheid in South Africa.",
      },
      {
        label: "Islamic response — Equality before Allah",
        position:
          "Islam teaches that racism is completely incompatible with faith. The ummah (worldwide Muslim community) includes all races and nationalities as equals. Malcolm X's Hajj pilgrimage transformed his views when he saw Muslims of all races worshipping together as equals.",
        evidence:
          "Qur'an 49:13 — 'the most noble of you in the sight of Allah is the most righteous.' The Prophet's Farewell Sermon declared no race has superiority over another. Bilal ibn Rabah, a freed Ethiopian slave, was chosen by the Prophet as the first muezzin (caller to prayer).",
      },
    ],
  },
];
