// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 2 — Thematic Studies: Theme A — Relationships & Families (3.2.1)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const THEME_A_RELATIONSHIPS_TERMS: RSTerm[] = [
  // ── Human sexuality ──
  {
    id: "rs-ta-heterosexual",
    word: "Heterosexual",
    def: "Being sexually attracted to members of the opposite sex. Most Christians and Muslims teach that heterosexual relationships within marriage are part of God's/Allah's plan for humanity.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-homosexual",
    word: "Homosexual",
    def: "Being sexually attracted to members of the same sex. Views on homosexuality vary widely across and within religions — some accept it fully, others consider homosexual acts sinful while affirming the dignity of the person.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },

  // ── Sexual relationships ──
  {
    id: "rs-ta-celibacy",
    word: "Celibacy",
    def: "Choosing to abstain from all sexual activity, often for religious reasons. Catholic priests and nuns take vows of celibacy. In Islam, celibacy is generally discouraged as marriage is considered a religious duty.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-chastity",
    word: "Chastity",
    def: "Not having sexual relations before marriage, or remaining sexually pure according to one's state of life. Both Christianity and Islam teach that sexual intimacy should be reserved for marriage.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-adultery",
    word: "Adultery",
    def: "A sexual act between a married person and someone who is not their spouse. Adultery is condemned in both Christianity and Islam — it is forbidden by the Ten Commandments and is a major sin (haram) in Islam.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-fornication",
    word: "Fornication",
    def: "Sexual intercourse between two people who are not married to each other. Traditional Christian and Islamic teaching forbids sex before marriage, regarding it as sinful.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },

  // ── Contraception ──
  {
    id: "rs-ta-contraception",
    word: "Contraception",
    def: "Methods used to prevent pregnancy. Views differ: the Catholic Church forbids artificial contraception (only natural family planning is permitted), while most Protestants and many Muslims accept it within marriage.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-natural-family-planning",
    word: "Natural Family Planning",
    def: "A method of birth control approved by the Catholic Church that involves tracking a woman's natural fertility cycle to avoid pregnancy without using artificial devices or hormones.",
    topicSlug: "theme-a-relationships",
    category: "practice",
  },

  // ── Marriage ──
  {
    id: "rs-ta-marriage",
    word: "Marriage",
    def: "A legal and/or religious union between two people. Christians see marriage as a sacrament or covenant before God; Muslims see nikah (marriage) as a sacred contract and a religious duty that fulfils half of one's faith.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-cohabitation",
    word: "Cohabitation",
    def: "Living together in a sexual relationship without being married. Most traditional Christian and Islamic teachings disapprove of cohabitation, as sex is considered only appropriate within marriage.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-civil-partnership",
    word: "Civil Partnership",
    def: "A legal union between two people of the same sex (or opposite sex since 2019 in the UK) that grants similar rights to marriage. Some Christian denominations support this; Islam does not recognise same-sex unions.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-same-sex-marriage",
    word: "Same-Sex Marriage",
    def: "Marriage between two people of the same sex, legal in England and Wales since 2014. Views are divided: some liberal Christians support it, the Catholic Church and most evangelical Christians oppose it, and Islam forbids it.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-nikah",
    word: "Nikah",
    def: "The Islamic marriage contract. It is a formal agreement between the bride and groom (or their representatives) witnessed by two adult Muslims, involving the agreement of mahr (a gift from the groom to the bride).",
    topicSlug: "theme-a-relationships",
    category: "practice",
  },

  // ── Divorce ──
  {
    id: "rs-ta-divorce",
    word: "Divorce",
    def: "The legal ending of a marriage. Christians are divided — Catholics teach marriage is indissoluble (annulment is possible but not divorce), while most Protestants allow divorce as a last resort. Islam permits divorce but considers it the most disliked of permissible things.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-annulment",
    word: "Annulment",
    def: "A declaration by the Catholic Church that a marriage was never valid in the first place (e.g. due to lack of consent or understanding). Unlike divorce, annulment means the marriage bond never truly existed.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-remarriage",
    word: "Remarriage",
    def: "Marrying again after divorce. The Catholic Church does not allow remarriage after divorce (only after annulment). Most Protestant churches permit remarriage. In Islam, remarriage is allowed after divorce and the iddah (waiting period).",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },

  // ── Families ──
  {
    id: "rs-ta-nuclear-family",
    word: "Nuclear Family",
    def: "A family unit consisting of two parents and their children living together. Traditionally seen by many Christians as the ideal family structure, though other forms are also valued.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-extended-family",
    word: "Extended Family",
    def: "A family that includes grandparents, aunts, uncles, and cousins as well as the nuclear family. Extended families are particularly important in Islam, where caring for elderly relatives is a religious duty.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-procreation",
    word: "Procreation",
    def: "The act of producing children. Both Christianity and Islam teach that one of the main purposes of marriage is to have children and raise them within a stable, loving, faith-based family.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },

  // ── Gender equality ──
  {
    id: "rs-ta-gender-equality",
    word: "Gender Equality",
    def: "The belief that men and women should have equal rights and opportunities. Both Christianity and Islam teach that men and women are equal in the sight of God/Allah, though they may have different but complementary roles.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
  {
    id: "rs-ta-gender-discrimination",
    word: "Gender Discrimination",
    def: "Treating people unfairly because of their gender. The UK Equality Act (2010) makes gender discrimination illegal. Many religious believers argue that having different roles does not mean inequality.",
    topicSlug: "theme-a-relationships",
    category: "key-term",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const THEME_A_RELATIONSHIPS_SCRIPTURE: ScriptureQuote[] = [
  // ── Christian — Marriage and relationships ──
  {
    id: "rs-ta-sq-gen2-24",
    topicSlug: "theme-a-relationships",
    text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh.",
    source: "Genesis 2:24",
    religion: "christianity",
    significance:
      "Establishes the Christian understanding of marriage as a union between a man and a woman, becoming 'one flesh'. Used to support the belief that marriage is ordained by God and is the proper context for sexual relationships.",
  },
  {
    id: "rs-ta-sq-mark10-9",
    topicSlug: "theme-a-relationships",
    text: "Therefore what God has joined together, let no one separate.",
    source: "Mark 10:9",
    religion: "christianity",
    significance:
      "Jesus teaches that marriage is a permanent bond made by God. This is a key text used by Catholics to argue that divorce is wrong and that marriage is indissoluble.",
  },
  {
    id: "rs-ta-sq-1cor7-2",
    topicSlug: "theme-a-relationships",
    text: "But since sexual immorality is occurring, each man should have sexual relations with his own wife, and each woman with her own husband.",
    source: "1 Corinthians 7:2",
    religion: "christianity",
    significance:
      "Paul teaches that marriage is the proper context for sexual relationships, supporting the Christian teaching against fornication and adultery.",
  },
  {
    id: "rs-ta-sq-gal3-28",
    topicSlug: "theme-a-relationships",
    text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.",
    source: "Galatians 3:28",
    religion: "christianity",
    significance:
      "Paul declares the fundamental equality of all people in Christ. This verse is widely used by Christians who support gender equality, arguing that in God's eyes men and women are of equal value and status.",
  },
  {
    id: "rs-ta-sq-eph5-25",
    topicSlug: "theme-a-relationships",
    text: "Husbands, love your wives, just as Christ loved the church and gave himself up for her.",
    source: "Ephesians 5:25",
    religion: "christianity",
    significance:
      "Paul teaches that husbands should love their wives sacrificially. While this passage also speaks of wives submitting to husbands (5:22), the emphasis on self-giving love is central to the Christian understanding of marriage.",
  },

  // ── Islamic — Marriage and relationships ──
  {
    id: "rs-ta-sq-quran30-21",
    topicSlug: "theme-a-relationships",
    text: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has put love and mercy between your hearts.",
    source: "Qur'an 30:21",
    religion: "islam",
    significance:
      "Teaches that marriage is a sign of Allah's creation, designed to bring love, mercy, and tranquillity. This is a key verse supporting the Islamic belief that marriage is an essential part of faith and human life.",
  },
  {
    id: "rs-ta-sq-quran4-1",
    topicSlug: "theme-a-relationships",
    text: "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women.",
    source: "Qur'an 4:1",
    religion: "islam",
    significance:
      "Establishes that men and women were created from the same soul, affirming their spiritual equality before Allah. This verse is used to support the Islamic teaching on the equal worth and dignity of both genders.",
  },
  {
    id: "rs-ta-sq-quran2-228",
    topicSlug: "theme-a-relationships",
    text: "Women have rights similar to those against them in a just manner, and men have a degree above them.",
    source: "Qur'an 2:228",
    religion: "islam",
    significance:
      "Acknowledges that women have rights in marriage and divorce, while also suggesting that men have a degree of responsibility (often interpreted as the duty to provide for and protect the family). Interpretations vary between traditional and progressive Muslims.",
  },
  {
    id: "rs-ta-sq-quran2-229",
    topicSlug: "theme-a-relationships",
    text: "Divorce is twice. Then, either keep her in an acceptable manner or release her with good treatment.",
    source: "Qur'an 2:229",
    religion: "islam",
    significance:
      "Sets out the Islamic rules for divorce — it can be pronounced twice with the possibility of reconciliation, and a third time makes it final. Divorce must be conducted with kindness and fairness, protecting the rights of both parties.",
  },
  {
    id: "rs-ta-sq-hadith-marriage",
    topicSlug: "theme-a-relationships",
    text: "When a man marries, he has fulfilled half of his religion, so let him fear Allah regarding the remaining half.",
    source: "Hadith (al-Bayhaqi)",
    religion: "islam",
    significance:
      "A well-known hadith emphasising the importance of marriage in Islam. It shows that marriage is not just a social contract but a religious act of worship that brings a Muslim closer to Allah.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const THEME_A_RELATIONSHIPS_VIEWS: DivergentView[] = [
  {
    id: "rs-ta-dv-homosexuality",
    topicSlug: "theme-a-relationships",
    issue: "Is homosexuality acceptable? What do religions teach about same-sex relationships?",
    views: [
      {
        label: "Liberal Christian",
        position:
          "Homosexuality is part of God's creation and same-sex relationships should be accepted and celebrated, including through marriage. The Bible's teachings must be understood in their historical context, and the core message of Christianity is love and acceptance.",
        evidence:
          "Liberal Anglicans, Quakers, and the United Reformed Church support same-sex marriage. They emphasise Jesus' commandment to 'love your neighbour' (Mark 12:31) and argue that the Bible's references to homosexuality are culturally specific, not universal moral laws.",
      },
      {
        label: "Conservative Christian / Catholic",
        position:
          "Homosexual acts are sinful, though people with same-sex attraction should be treated with respect and compassion. Marriage can only be between a man and a woman. The Catholic Church teaches to 'hate the sin, love the sinner'.",
        evidence:
          "Leviticus 18:22 and Romans 1:26\u201327 are cited as condemning homosexual acts. The Catholic Catechism (2357\u20132359) calls homosexual acts 'intrinsically disordered' but insists people with same-sex attraction must be treated with dignity.",
      },
      {
        label: "Islamic",
        position:
          "Homosexual acts are haram (forbidden). Islam teaches that sexual relationships are only permitted within marriage between a man and a woman. However, some progressive Muslims argue for greater acceptance of LGBTQ+ individuals.",
        evidence:
          "The story of the Prophet Lut (Lot) in the Qur'an (7:80\u201381) is cited as condemning homosexual acts. Traditional Islamic scholarship unanimously considers homosexual acts sinful, though some modern Muslim scholars distinguish between orientation and actions.",
      },
    ],
  },
  {
    id: "rs-ta-dv-contraception",
    topicSlug: "theme-a-relationships",
    issue: "Is the use of artificial contraception morally acceptable?",
    views: [
      {
        label: "Catholic",
        position:
          "Artificial contraception is morally wrong because it interferes with God's purpose for sex — the potential to create new life. Only natural family planning (monitoring the fertility cycle) is permitted. Every sexual act must be open to the possibility of procreation.",
        evidence:
          "Pope Paul VI's encyclical Humanae Vitae (1968) reaffirmed the ban on artificial contraception. Catholics argue that sex has two inseparable purposes: unitive (bonding the couple) and procreative (openness to children). Separating these is against natural law.",
      },
      {
        label: "Protestant",
        position:
          "Most Protestant denominations accept the use of contraception within marriage. Responsible family planning is seen as a wise and loving decision that allows couples to care properly for the children they already have.",
        evidence:
          "The Church of England accepted contraception at the Lambeth Conference in 1930. Protestants argue that the unitive (loving) purpose of sex is as important as the procreative, and that responsible planning reflects good stewardship.",
      },
      {
        label: "Islamic",
        position:
          "Most Muslim scholars permit contraception within marriage, provided both spouses agree and it does not cause permanent harm. Temporary methods are generally accepted; permanent sterilisation is usually discouraged unless medically necessary.",
        evidence:
          "The Prophet Muhammad knew of the practice of coitus interruptus (al-azl) and did not forbid it (Sahih Muslim). However, some scholars caution that contraception should not be used to avoid having children altogether, as children are a blessing from Allah.",
      },
    ],
  },
  {
    id: "rs-ta-dv-divorce",
    topicSlug: "theme-a-relationships",
    issue: "Is divorce ever acceptable, and can divorced people remarry?",
    views: [
      {
        label: "Catholic",
        position:
          "Divorce is not recognised by the Catholic Church — marriage is a lifelong sacrament that cannot be dissolved. However, an annulment may be granted if the marriage was never valid. Divorced Catholics who remarry without annulment cannot receive Communion.",
        evidence:
          "Mark 10:9 — 'What God has joined together, let no one separate.' The Catholic Church views marriage as an unbreakable covenant. An annulment declares that a true marriage never existed (e.g. due to lack of free consent).",
      },
      {
        label: "Protestant",
        position:
          "Divorce is regrettable but sometimes necessary, for example in cases of adultery or abuse. Most Protestant churches allow divorce as a last resort and permit remarriage, believing in God's forgiveness and the possibility of a fresh start.",
        evidence:
          "Matthew 19:9 — Jesus allows divorce in cases of 'marital unfaithfulness' (the Matthean exception). The Church of England has allowed the remarriage of divorced people in church since 2002, at the discretion of the vicar.",
      },
      {
        label: "Islamic",
        position:
          "Divorce (talaq) is permitted in Islam but is strongly discouraged — it is described as the most disliked of permissible things. There is a process involving a waiting period (iddah) to allow for reconciliation. Both men and women have the right to seek divorce.",
        evidence:
          "A hadith states: 'Of all the lawful acts, the most detestable to Allah is divorce' (Abu Dawud). Women can seek divorce through khul' (by returning the mahr). The Qur'an (2:229) sets out rules for fair and kind treatment during divorce.",
      },
    ],
  },
  {
    id: "rs-ta-dv-gender-equality",
    topicSlug: "theme-a-relationships",
    issue: "Should men and women have identical roles in religion and family life?",
    views: [
      {
        label: "Traditional Christian / Catholic",
        position:
          "Men and women are equal in dignity but have different, complementary roles given by God. Women cannot be ordained as priests in the Catholic and Orthodox churches. Within the family, the husband is traditionally seen as the head of the household.",
        evidence:
          "1 Timothy 2:12 — 'I do not permit a woman to teach or to assume authority over a man.' The Catholic Church teaches that only men can be ordained because Jesus chose twelve male apostles. Pope John Paul II confirmed this in Ordinatio Sacerdotalis (1994).",
      },
      {
        label: "Liberal Christian",
        position:
          "Men and women are fully equal and should have the same roles in both the church and the family. Women can and should be ordained as ministers, priests, and bishops. Gender should not determine one's role in religious life.",
        evidence:
          "Galatians 3:28 — 'There is neither male nor female, for you are all one in Christ Jesus.' The Church of England ordained its first female priests in 1994 and its first female bishop (Libby Lane) in 2015. Quakers have always practised gender equality.",
      },
      {
        label: "Islamic",
        position:
          "Men and women are spiritually equal before Allah but have different roles and responsibilities. Men are expected to provide financially for the family; women have the primary role in nurturing children, though they may also work. Women cannot lead mixed-gender prayers.",
        evidence:
          "Qur'an 4:34 — 'Men are the protectors and maintainers of women.' However, the Prophet Muhammad said: 'Women are the twin halves of men' (Abu Dawud), and Khadijah, the Prophet's wife, was a successful businesswoman, showing that women can be active in public life.",
      },
    ],
  },
];
