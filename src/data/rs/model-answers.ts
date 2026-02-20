// ─── RS Model Answers Data: AQA GCSE Religious Studies A (8062) ───

export interface RsModelAnswerStep {
  label: string;
  text: string;
  colour: string;
}

export interface RsModelAnswer {
  id: string;
  topicSlug: string;
  question: string;
  marks: number;
  commandWord: string;
  grade: string;
  steps: RsModelAnswerStep[];
  examinerNotes: string[];
}

export const RS_MODEL_ANSWERS: RsModelAnswer[] = [
  // ─── Christianity Beliefs ───
  {
    id: "cb-nature-of-god-5",
    topicSlug: "christianity-beliefs",
    question:
      "Explain two Christian beliefs about the nature of God. Refer to scripture or another source of Christian belief in your answer. [5 marks]",
    marks: 5,
    commandWord: "Explain",
    grade: "9",
    steps: [
      {
        label: "Point 1",
        text: "One Christian belief about the nature of God is that God is omnipotent, meaning He is all-powerful. Christians believe there is nothing that God cannot do, and that His power is unlimited and beyond anything in creation.",
        colour: "blue",
      },
      {
        label: "Development 1",
        text: "This is important because it means Christians can trust God completely \u2014 if God is all-powerful, then He is able to answer prayers, perform miracles, and ultimately fulfil His promise of salvation. It also links to the belief in creation, since only an omnipotent God could bring the entire universe into existence from nothing (creatio ex nihilo).",
        colour: "sky",
      },
      {
        label: "Scripture reference",
        text: "This is supported in Genesis 1:1 \u2014 \u2018In the beginning God created the heavens and the earth\u2019 \u2014 which shows God\u2019s power over all of creation. The Nicene Creed also states that God is \u2018the Father Almighty, maker of heaven and earth\u2019, reinforcing that omnipotence is a core part of the Christian understanding of God\u2019s nature.",
        colour: "indigo",
      },
      {
        label: "Point 2",
        text: "A second belief is that God is a Trinity \u2014 one God in three persons: the Father, the Son (Jesus Christ), and the Holy Spirit. These are not three separate gods but three distinct persons who share one divine nature.",
        colour: "blue",
      },
      {
        label: "Development 2",
        text: "The Trinity matters because each person plays a different role in the life of a Christian. The Father is the creator and sustainer of all life, the Son became incarnate to save humanity from sin, and the Holy Spirit guides and strengthens believers today. In Matthew 28:19, Jesus instructs his disciples to baptise \u2018in the name of the Father, and of the Son, and of the Holy Spirit\u2019, showing that all three persons carry equal divine authority and have been part of Christian worship from the very beginning.",
        colour: "sky",
      },
    ],
    examinerNotes: [
      "Full 5 marks: two clearly distinct beliefs, each with developed explanation and a relevant scripture reference.",
      "Point 1 earns the first mark for identifying omnipotence, with a further mark for linking it to creation and trust in God.",
      "The Genesis 1:1 and Nicene Creed references satisfy the \u2018source of Christian belief\u2019 requirement for up to 1 mark.",
      "Point 2 earns a mark for identifying the Trinity, with a further mark for explaining the role of each person and supporting it with Matthew 28:19.",
      "The response uses precise theological language (creatio ex nihilo, incarnate) which is characteristic of the top band.",
    ],
  },
  {
    id: "cb-incarnation-12",
    topicSlug: "christianity-beliefs",
    question:
      "\u2018The incarnation is the most important Christian belief.\u2019 Evaluate this statement. [12 marks + 3 SPaG]",
    marks: 12,
    commandWord: "Evaluate",
    grade: "9",
    steps: [
      {
        label: "Introduction",
        text: "The incarnation \u2014 the belief that God became human in the person of Jesus Christ \u2014 is central to Christianity because it connects God directly to human experience. However, whether it is the single most important belief is debatable, since other doctrines such as the resurrection and salvation are equally fundamental to the faith.",
        colour: "blue",
      },
      {
        label: "Argument for",
        text: "Many Christians would argue that the incarnation is the most important belief because without God becoming human, none of the other key events of Christianity could have happened. John 1:14 states \u2018The Word became flesh and made his dwelling among us\u2019, showing that God chose to enter the world personally to reveal His nature and save humanity. The incarnation is the reason Christians celebrate Christmas, and it is affirmed in the Nicene Creed: \u2018For us and for our salvation he came down from heaven; he became incarnate from the Holy Spirit and the Virgin Mary.\u2019 Without the incarnation, there would be no crucifixion, no resurrection, and therefore no atonement for sin.",
        colour: "sky",
      },
      {
        label: "Counter-argument",
        text: "However, some Christians would argue that the resurrection is more important than the incarnation. St Paul writes in 1 Corinthians 15:17, \u2018If Christ has not been raised, your faith is futile; you are still in your sins.\u2019 This suggests that even if Jesus was God incarnate, it is the resurrection that actually defeats death and proves Jesus\u2019s divinity. Without the resurrection, the incarnation would simply be the story of a man who lived and died \u2014 it is the rising from the dead that gives Christianity its distinctive hope.",
        colour: "indigo",
      },
      {
        label: "Alternative view",
        text: "Others might argue that the belief in salvation is the most important overall, since it is the whole purpose of God\u2019s plan. Catholics emphasise that salvation comes through a combination of faith and good works (James 2:26 \u2014 \u2018faith without deeds is dead\u2019), while many Protestants follow the idea of salvation through grace alone (sola gratia), as taught by Martin Luther. From this perspective, the incarnation and the resurrection are both means to an end \u2014 the ultimate goal is that humanity can be reconciled with God and receive eternal life.",
        colour: "violet",
      },
      {
        label: "Sources of wisdom",
        text: "It is also worth considering that different Christian denominations place different weight on these beliefs. For example, Orthodox Christians emphasise theosis \u2014 the idea that through the incarnation, God made it possible for humans to share in the divine nature (2 Peter 1:4). For them, the incarnation is not just about saving people from sin but about transforming human nature itself. Meanwhile, evangelical Christians might focus more on the personal relationship with Jesus made possible through the resurrection and the work of the Holy Spirit.",
        colour: "blue",
      },
      {
        label: "Conclusion",
        text: "In conclusion, the incarnation is undeniably one of the most important Christian beliefs, since it is the foundation on which the crucifixion, resurrection, and salvation all depend. However, I would argue that no single belief can be called \u2018the most important\u2019 in isolation, because Christian theology works as an interconnected whole. The incarnation only has meaning because of the resurrection, and the resurrection only has meaning because of the incarnation. Together, they make salvation possible, which is the ultimate purpose of the Christian faith.",
        colour: "sky",
      },
    ],
    examinerNotes: [
      "Level 4 (10\u201312 marks): a well-argued, balanced response with a justified conclusion that directly addresses \u2018most important\u2019.",
      "Multiple scripture references used accurately (John 1:14, 1 Corinthians 15:17, James 2:26, 2 Peter 1:4) \u2014 these are woven into the argument rather than just listed.",
      "Shows awareness of divergent Christian views (Catholic vs Protestant on salvation, Orthodox theosis, evangelical emphasis) which is essential for the top band.",
      "The conclusion avoids simply agreeing or disagreeing and instead offers a sophisticated judgement about interconnected beliefs \u2014 this is what distinguishes a grade 9 from a grade 7.",
      "SPaG: theological vocabulary is used precisely (incarnation, atonement, sola gratia, theosis), paragraphs are clearly structured, and spelling and grammar are consistently accurate.",
    ],
  },

  // ─── Islam Beliefs ───
  {
    id: "ib-tawhid-5",
    topicSlug: "islam-beliefs",
    question:
      "Explain two Muslim beliefs about Tawhid (the oneness of God). Refer to scripture or another source of Muslim belief in your answer. [5 marks]",
    marks: 5,
    commandWord: "Explain",
    grade: "9",
    steps: [
      {
        label: "Point 1",
        text: "One Muslim belief about Tawhid is that Allah is absolutely one and unique \u2014 there is no other being that shares His nature or His power. This means Muslims reject any idea of God having partners, children, or equals, which is known as shirk (the greatest sin in Islam).",
        colour: "emerald",
      },
      {
        label: "Development 1",
        text: "This belief shapes every aspect of a Muslim\u2019s life. Because Allah alone is worthy of worship, Muslims pray only to Allah and do not use images or statues in worship, as this could lead to idolatry. Tawhid is the first part of the Shahadah \u2014 \u2018There is no god but Allah\u2019 \u2014 which is the most fundamental declaration of faith in Islam and the first of the Five Pillars.",
        colour: "teal",
      },
      {
        label: "Scripture reference",
        text: "This is supported by Surah 112 (Al-Ikhlas), which states: \u2018Say, He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.\u2019 This short surah is considered to summarise the entire concept of Tawhid and is one of the most recited chapters in Islamic worship.",
        colour: "cyan",
      },
      {
        label: "Point 2",
        text: "A second belief is that Tawhid means Allah is transcendent (beyond human understanding) and yet also immanent (close to all creation). Muslims believe that although no one can fully comprehend Allah\u2019s nature, He is aware of everything and is closer to each person than they realise.",
        colour: "emerald",
      },
      {
        label: "Development 2",
        text: "This is shown in Surah 2:255, the Ayat al-Kursi (Throne Verse), which states: \u2018His Kursi extends over the heavens and the earth, and their preservation tires Him not.\u2019 This teaches that Allah\u2019s knowledge and authority cover all of creation, yet He is not limited by it. The Qur\u2019an also says Allah is \u2018nearer to him than his jugular vein\u2019 (Surah 50:16), showing that Tawhid is not just about God being distant and powerful, but about God being personally present in the life of every Muslim.",
        colour: "teal",
      },
    ],
    examinerNotes: [
      "Full 5 marks: two distinct beliefs about Tawhid are clearly stated, developed, and supported with direct Qur\u2019anic references.",
      "Point 1 earns marks for defining Tawhid, linking it to shirk, and connecting it to the Shahadah and Five Pillars \u2014 showing wider understanding of how this belief functions in Islam.",
      "Surah 112 is an ideal reference for Tawhid and is quoted accurately, satisfying the scripture requirement.",
      "Point 2 demonstrates higher-level thinking by exploring the tension between transcendence and immanence, with two supporting Qur\u2019anic references (Surah 2:255 and Surah 50:16).",
      "The response uses specialist vocabulary throughout (Tawhid, shirk, Shahadah, transcendent, immanent, Ayat al-Kursi) which places it firmly in the top band.",
    ],
  },
  {
    id: "ib-akhirah-12",
    topicSlug: "islam-beliefs",
    question:
      "\u2018Belief in Akhirah (afterlife) is the most important of the six articles of faith in Sunni Islam.\u2019 Evaluate this statement. [12 marks + 3 SPaG]",
    marks: 12,
    commandWord: "Evaluate",
    grade: "9",
    steps: [
      {
        label: "Introduction",
        text: "The six articles of faith (Iman) in Sunni Islam are belief in Allah, the angels, the holy books, the prophets, the Day of Judgement, and predestination (Al-Qadr). Belief in Akhirah \u2014 the afterlife, including the Day of Judgement, paradise (Jannah), and hell (Jahannam) \u2014 is certainly significant, but whether it is the most important depends on how a Muslim understands the relationship between all six articles.",
        colour: "emerald",
      },
      {
        label: "Argument for",
        text: "There is a strong case that Akhirah is the most important article because it gives life its ultimate purpose. The Qur\u2019an repeatedly warns that every person will be judged: \u2018Whoever does an atom\u2019s weight of good will see it, and whoever does an atom\u2019s weight of evil will see it\u2019 (Surah 99:7\u20138). This motivates Muslims to live righteously, follow Shari\u2019ah law, and carry out good deeds in this life. Without belief in the afterlife, many Muslims would argue that the Five Pillars, charity (Zakah), and personal morality would lose their deeper meaning \u2014 if there is no judgement, why strive to live a good life?",
        colour: "teal",
      },
      {
        label: "Counter-argument",
        text: "However, most Muslim scholars would argue that belief in Allah (Tawhid) is the most important article of faith, because it is the foundation on which everything else rests. Without believing in one God, there can be no prophets, no holy books, no angels, and no afterlife. The Shahadah begins with \u2018There is no god but Allah\u2019, not with a statement about the afterlife. Shirk \u2014 associating partners with Allah \u2014 is described in the Qur\u2019an as the one unforgivable sin (Surah 4:48), which suggests that Tawhid holds a unique and supreme position among the articles of faith.",
        colour: "cyan",
      },
      {
        label: "Alternative view",
        text: "It could also be argued that belief in the prophets is the most important article, since it is through the prophets \u2014 especially Prophet Muhammad (PBUH), the Seal of the Prophets \u2014 that Muslims received the Qur\u2019an and learned how to worship Allah correctly. Surah 33:40 describes Muhammad as \u2018the Seal of the Prophets\u2019, meaning the final and most complete messenger. Without prophets, Muslims would have no guidance on how to understand Tawhid, prepare for Akhirah, or live according to Allah\u2019s will. The Sunnah of the Prophet provides the practical model for Islamic life that the Qur\u2019an alone does not always specify.",
        colour: "green",
      },
      {
        label: "Sources of wisdom",
        text: "Shi\u2019a Muslims offer a slightly different perspective. While they accept the importance of Akhirah, they emphasise the five roots of Usul ad-Din, which include Adalat (justice of God) and Imamah (leadership). For Shi\u2019a Muslims, the concept of divinely guided Imams is central to understanding how faith is practised in this life, not just the next. This shows that the relative importance of different beliefs can vary between Muslim traditions, and that no single article can be isolated from the others.",
        colour: "emerald",
      },
      {
        label: "Conclusion",
        text: "In conclusion, while belief in Akhirah is hugely important because it provides the moral framework and motivation for Islamic life, I would argue it is not the most important article on its own. Tawhid must come first, because without belief in Allah, the concept of Akhirah has no meaning. The six articles of faith are designed to work together as a complete system \u2014 Akhirah gives purpose, Tawhid gives foundation, the prophets give guidance, and the holy books preserve that guidance. A Muslim\u2019s faith is strongest when all six articles are held together, rather than when one is elevated above the rest.",
        colour: "teal",
      },
    ],
    examinerNotes: [
      "Level 4 (10\u201312 marks): a thorough and well-balanced evaluation that considers multiple perspectives and reaches a clear, justified conclusion.",
      "Qur\u2019anic evidence is used precisely and relevantly throughout (Surah 99:7\u20138, Surah 4:48, Surah 33:40), demonstrating strong knowledge of sources of wisdom and authority.",
      "The response considers Sunni and Shi\u2019a perspectives, which is a requirement of the AQA specification and is essential for accessing the top level.",
      "Each paragraph engages directly with the word \u2018most\u2019 in the statement, comparing Akhirah to other articles rather than simply describing what Akhirah is \u2014 this evaluative focus is what separates Level 4 from Level 3.",
      "SPaG: Arabic terminology is used accurately and consistently (Tawhid, Akhirah, Jannah, Jahannam, Shari\u2019ah, Sunnah, Usul ad-Din, Adalat, Imamah), with fluent written English throughout.",
    ],
  },

  // ─── Theme A: Relationships & Families ───
  {
    id: "ta-marriage-12",
    topicSlug: "theme-a-relationships",
    question:
      "\u2018Marriage is the only acceptable context for a sexual relationship.\u2019 Evaluate this statement. [12 marks + 3 SPaG]",
    marks: 12,
    commandWord: "Evaluate",
    grade: "8/9",
    steps: [
      {
        label: "Introduction",
        text: "The question of whether sexual relationships should only take place within marriage is one where religious and secular viewpoints often diverge sharply. Traditional religious teaching in both Christianity and Islam upholds marriage as the only proper context for sex, but many people in modern society \u2014 including some liberal religious believers \u2014 challenge this view.",
        colour: "indigo",
      },
      {
        label: "Argument for",
        text: "Most traditional Christians would agree with this statement. The Bible teaches that sex was created by God for marriage: Genesis 2:24 states, \u2018Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.\u2019 Sex within marriage is seen as a gift from God that unites husband and wife and provides the stable environment intended for raising children. St Paul warned against sexual immorality (fornication) in 1 Corinthians 6:18\u201320, writing, \u2018Flee from sexual immorality... your body is a temple of the Holy Spirit.\u2019 The Catholic Church teaches that sex has two purposes \u2014 unitive (bonding the couple) and procreative (creating new life) \u2014 and that both purposes can only be properly fulfilled within marriage.",
        colour: "violet",
      },
      {
        label: "Supporting religious view",
        text: "Islam takes a similar position. Sexual relationships outside marriage (zina) are considered haram (forbidden). The Qur\u2019an instructs believers: \u2018Do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way\u2019 (Surah 17:32). Marriage (nikah) is regarded as a sacred contract and the only lawful context for sexual intimacy. Prophet Muhammad (PBUH) encouraged marriage, saying, \u2018When a man marries, he has fulfilled half of his religion\u2019 (Hadith, Bayhaqi). This shows that both Christianity and Islam share the view that marriage provides the moral and spiritual framework for sexual relationships.",
        colour: "sky",
      },
      {
        label: "Counter-argument",
        text: "However, some would argue that this view is outdated and does not reflect the reality of modern relationships. Many couples today cohabit (live together) in loving, committed relationships without being married, and they may argue that their relationship is just as meaningful and stable as a marriage. In the UK, cohabitation is increasingly common and socially accepted. Some liberal Christians, such as those in the Quaker tradition, focus more on the quality of the relationship \u2014 whether it is loving, equal, and committed \u2014 rather than insisting on the legal status of marriage. They might point to Jesus\u2019s emphasis on love and compassion rather than rigid rules.",
        colour: "blue",
      },
      {
        label: "Alternative view",
        text: "A secular humanist would argue that the morality of a sexual relationship depends on mutual consent, honesty, and respect between the people involved, not on whether they are married. They would reject the idea that a religious institution has the authority to determine when sex is acceptable. Furthermore, some might argue that insisting on marriage before sex can lead to people marrying too quickly or for the wrong reasons, which could result in unhappy marriages or divorce. From this perspective, what matters is the ethical conduct within the relationship, not the formal institution surrounding it.",
        colour: "indigo",
      },
      {
        label: "Conclusion",
        text: "In conclusion, while traditional religious teaching from both Christianity and Islam clearly supports the view that marriage is the only acceptable context for sex, this position is increasingly challenged in modern secular society and even by some liberal religious groups. I would argue that the statement is too absolute. Marriage remains an important ideal for many believers, but the quality, love, and mutual respect within a relationship are ultimately more important than its legal or religious status. A nuanced religious response might affirm the value of marriage while acknowledging that not all sexual relationships outside marriage are inherently immoral.",
        colour: "violet",
      },
    ],
    examinerNotes: [
      "Level 4 (10\u201312 marks): a well-structured and balanced evaluation with clear engagement from both religious and non-religious perspectives, as required by AQA thematic studies questions.",
      "Scripture is used accurately and relevantly from both Christianity (Genesis 2:24, 1 Corinthians 6:18\u201320) and Islam (Surah 17:32, Hadith from Bayhaqi), satisfying the \u2018refer to religious teaching\u2019 requirement.",
      "The response addresses multiple viewpoints: traditional Christian, Islamic, liberal Christian (Quaker), and secular humanist \u2014 this range is essential for the top band.",
      "The conclusion avoids a simplistic agree/disagree and instead offers a qualified judgement, which is characteristic of a grade 8/9 response.",
      "SPaG: specialist vocabulary is used correctly throughout (fornication, unitive, procreative, zina, haram, nikah, cohabitation), with accurate spelling and clear paragraphing.",
    ],
  },

  // ─── Theme B: Religion & Life ───
  {
    id: "tb-stewardship-5",
    topicSlug: "theme-b-religion-life",
    question:
      "Explain two religious teachings about the environment and stewardship. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    commandWord: "Explain",
    grade: "8/9",
    steps: [
      {
        label: "Point 1",
        text: "One religious teaching about the environment is the Christian concept of stewardship. Christians believe that God created the world and entrusted it to humanity to look after responsibly, rather than to exploit or destroy. This means humans are caretakers of God\u2019s creation, not owners, and will be held accountable for how they treat the natural world.",
        colour: "indigo",
      },
      {
        label: "Development 1",
        text: "This is rooted in Genesis 2:15, which states that God \u2018took the man and put him in the Garden of Eden to work it and take care of it.\u2019 The word \u2018care\u2019 implies responsibility and protection, not domination. Many Christians today interpret this as a call to tackle environmental issues such as climate change, pollution, and deforestation. Organisations like Christian Aid and CAFOD campaign for environmental justice, arguing that damaging the planet disproportionately harms the poorest communities, which goes against Jesus\u2019s teaching to love your neighbour.",
        colour: "violet",
      },
      {
        label: "Scripture reference",
        text: "Pope Francis reinforced this in his encyclical Laudato Si\u2019 (2015), describing the Earth as \u2018our common home\u2019 and calling on all people to protect it. He wrote that \u2018the climate is a common good, belonging to all and meant for all,\u2019 emphasising that environmental stewardship is a moral duty, not an optional extra.",
        colour: "sky",
      },
      {
        label: "Point 2",
        text: "In Islam, the concept of Khalifah (stewardship/vicegerency) teaches that humans are trustees of the Earth on behalf of Allah. The Qur\u2019an states, \u2018It is He who has made you successors (khalifah) upon the earth\u2019 (Surah 6:165), meaning that Muslims have a God-given responsibility to maintain the balance of the natural world.",
        colour: "indigo",
      },
      {
        label: "Development 2",
        text: "This responsibility is taken seriously because Muslims believe that on the Day of Judgement (Akhirah) they will be questioned about how they treated Allah\u2019s creation. The Prophet Muhammad (PBUH) taught respect for the environment in many Hadith, including the saying, \u2018If the Day of Judgement comes and you have a seedling in your hand, plant it\u2019 (Hadith, Ahmad). This shows that environmental care is not just a practical concern in Islam but a spiritual obligation that carries eternal consequences.",
        colour: "blue",
      },
    ],
    examinerNotes: [
      "Full 5 marks: two clearly distinct teachings from different religious traditions, each with developed explanation and a relevant source of wisdom and authority.",
      "Point 1 earns marks for identifying Christian stewardship and developing it with Genesis 2:15 and the application to modern environmental campaigns (Christian Aid, CAFOD).",
      "The Laudato Si\u2019 reference counts as a valid \u2018source of wisdom and authority\u2019 beyond scripture, which AQA accepts and rewards.",
      "Point 2 earns marks for explaining Islamic Khalifah with Surah 6:165 and the Hadith about planting a seedling, linking it to accountability on the Day of Judgement.",
      "The response uses specialist terminology from both traditions (stewardship, Khalifah, Akhirah) and makes the practical implications clear, which is characteristic of the top band.",
    ],
  },

  // ─── Theme C: Existence of God & Revelation ───
  {
    id: "tc-evil-suffering-12",
    topicSlug: "theme-c-existence-god",
    question:
      "\u2018The existence of evil and suffering proves that God does not exist.\u2019 Evaluate this statement. [12 marks + 3 SPaG]",
    marks: 12,
    commandWord: "Evaluate",
    grade: "8/9",
    steps: [
      {
        label: "Introduction",
        text: "The problem of evil is one of the oldest and most powerful challenges to belief in God. If God is omnipotent (all-powerful), omniscient (all-knowing), and omnibenevolent (all-loving), then the existence of evil and suffering appears to be a logical contradiction. However, religious believers have developed a range of responses to this challenge, and many would argue that evil and suffering do not disprove God\u2019s existence at all.",
        colour: "indigo",
      },
      {
        label: "Argument for",
        text: "Atheists and some philosophers argue that the sheer scale of suffering in the world \u2014 natural disasters, disease, the suffering of innocent children \u2014 is incompatible with a loving and powerful God. This is known as the \u2018inconsistent triad\u2019: if God is all-powerful, He could prevent evil; if God is all-loving, He would want to prevent evil; but evil exists, so either God is not all-powerful, not all-loving, or does not exist at all. The philosopher David Hume expressed this powerfully: \u2018Is he willing to prevent evil, but not able? Then he is impotent. Is he able, but not willing? Then he is malevolent.\u2019 For many atheists, the existence of suffering \u2014 especially the suffering of innocent people \u2014 is the strongest evidence against God.",
        colour: "violet",
      },
      {
        label: "Counter-argument",
        text: "However, many Christians respond using the Free Will Defence, which argues that God gave humans free will as part of His creation, and that moral evil (evil caused by humans, such as murder and war) is the result of humans misusing this gift. Without free will, humans would be like robots, unable to choose to love or do good. Genesis 3 describes the Fall of Adam and Eve, who chose to disobey God, introducing sin and suffering into the world. St Augustine argued that evil is not a thing in itself but a \u2018privation of good\u2019 (privatio boni) \u2014 a lack of goodness that results from turning away from God. From this perspective, God is not responsible for evil; humans are.",
        colour: "sky",
      },
      {
        label: "Alternative view",
        text: "Another religious response is the Soul-Making Theodicy, associated with the philosopher John Hick, who drew on the ideas of St Irenaeus. This argues that suffering has a purpose: it helps humans to grow, develop virtues such as compassion and courage, and become the people God intended them to be. Without challenges and hardships, there would be no opportunity for moral and spiritual growth. Hick described the world as a \u2018vale of soul-making\u2019 rather than a finished paradise. Muslims offer a similar perspective: the Qur\u2019an teaches, \u2018We will certainly test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient\u2019 (Surah 2:155). In Islam, suffering is understood as a test from Allah, and enduring it with patience (sabr) brings spiritual reward.",
        colour: "blue",
      },
      {
        label: "Further religious perspectives",
        text: "Some believers also point to the example of the Book of Job in the Bible, where a righteous man suffers terribly but ultimately learns that God\u2019s purposes are beyond human understanding. Job\u2019s story teaches that demanding an explanation for suffering is itself a form of arrogance \u2014 humans cannot comprehend the full picture of God\u2019s plan. Additionally, many Christians find meaning in suffering through the example of Jesus, who himself suffered on the cross. The crucifixion shows that God does not stand apart from human suffering but enters into it, and that suffering can be redemptive.",
        colour: "indigo",
      },
      {
        label: "Conclusion",
        text: "In conclusion, while the problem of evil is a genuinely powerful challenge to the existence of God, I would argue that it does not \u2018prove\u2019 that God does not exist. The Free Will Defence and the Soul-Making Theodicy both offer coherent explanations for why an all-loving God might permit suffering. Furthermore, the argument from evil assumes a particular understanding of what God should be like, which may not match the way believers actually experience and understand God. While suffering remains a deeply troubling aspect of human existence, for many religious believers it is precisely through suffering that they find their deepest faith, meaning, and spiritual growth.",
        colour: "violet",
      },
    ],
    examinerNotes: [
      "Level 4 (10\u201312 marks): a sophisticated and well-balanced evaluation that engages with philosophical arguments (inconsistent triad, Hume) alongside religious responses (Free Will, Soul-Making, Job, the Cross).",
      "Both Christian and Islamic perspectives are included (Genesis 3, St Augustine, John Hick, Surah 2:155), demonstrating the breadth expected in thematic studies answers.",
      "The response distinguishes between moral evil and natural evil implicitly and addresses both, which shows depth of understanding.",
      "The conclusion directly addresses the key word \u2018proves\u2019 in the statement, arguing persuasively that the problem of evil challenges but does not disprove God\u2019s existence \u2014 this nuanced judgement is essential for the top band.",
      "SPaG: philosophical and theological terminology is used precisely (omnipotent, omniscient, omnibenevolent, privatio boni, theodicy, sabr, redemptive), with clearly structured paragraphs and accurate spelling throughout.",
    ],
  },

  // ─── Theme D: Religion, Peace & Conflict ───
  {
    id: "td-just-war-5",
    topicSlug: "theme-d-peace-conflict",
    question:
      "Explain two religious teachings about forgiveness and reconciliation. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    commandWord: "Explain",
    grade: "8/9",
    steps: [
      {
        label: "Point 1",
        text: "One important Christian teaching about forgiveness is that believers have a duty to forgive others, just as God forgives them. Jesus made this a central part of his message, teaching that forgiveness should be unlimited and unconditional, even towards enemies.",
        colour: "indigo",
      },
      {
        label: "Development 1",
        text: "In Matthew 18:21\u201322, when Peter asks Jesus how many times he should forgive someone, Jesus replies, \u2018Not seven times, but seventy-seven times.\u2019 This is not meant literally but indicates that forgiveness should have no limit. Furthermore, the Lord\u2019s Prayer includes the words \u2018Forgive us our sins, as we forgive those who sin against us\u2019 (Matthew 6:12), making forgiveness a condition of receiving God\u2019s own forgiveness. This teaching has inspired Christians such as the Amish community of Nickel Mines, Pennsylvania, who publicly forgave the man who killed five children in their school in 2006, demonstrating radical forgiveness in practice.",
        colour: "violet",
      },
      {
        label: "Scripture reference",
        text: "Jesus himself modelled forgiveness on the cross when he prayed, \u2018Father, forgive them, for they do not know what they are doing\u2019 (Luke 23:34). This is considered the ultimate example of forgiveness in Christianity and shows that even the most extreme wrongs can and should be forgiven.",
        colour: "sky",
      },
      {
        label: "Point 2",
        text: "In Islam, forgiveness (al-afw) and reconciliation are also highly valued. Allah is described in the Qur\u2019an as Al-Ghafur (the Most Forgiving) and Ar-Rahman (the Most Merciful), and Muslims are encouraged to reflect these qualities in their own lives by forgiving those who wrong them.",
        colour: "indigo",
      },
      {
        label: "Development 2",
        text: "The Qur\u2019an teaches, \u2018Let them pardon and overlook. Would you not like that Allah should forgive you?\u2019 (Surah 24:22), making a direct link between forgiving others and receiving Allah\u2019s forgiveness. The Prophet Muhammad (PBUH) modelled reconciliation when he forgave the people of Makkah after conquering the city in 630 CE, despite years of persecution. Rather than seeking revenge, he declared a general amnesty, saying, \u2018Go, you are free.\u2019 This act of mercy and reconciliation is seen as one of the greatest examples of Islamic forgiveness and is a model for Muslims today when resolving conflicts.",
        colour: "blue",
      },
    ],
    examinerNotes: [
      "Full 5 marks: two distinct teachings from Christianity and Islam, each clearly stated, developed with examples, and supported by scripture or sources of authority.",
      "Point 1 earns marks for identifying unlimited forgiveness as a Christian duty, supported by Matthew 18:21\u201322, the Lord\u2019s Prayer, and Luke 23:34. The Nickel Mines example shows application to real life.",
      "Point 2 earns marks for explaining Islamic forgiveness with Surah 24:22 and the historically accurate example of Muhammad\u2019s forgiveness of Makkah, which serves as both a scriptural and historical source of authority.",
      "The response uses appropriate specialist vocabulary (al-afw, Al-Ghafur, Ar-Rahman, amnesty, reconciliation) and connects theology to practice, which is essential for the top band.",
      "Both points demonstrate understanding that forgiveness is linked to receiving God\u2019s/Allah\u2019s own forgiveness, showing depth of theological reasoning.",
    ],
  },

  // ─── Theme E: Religion, Crime & Punishment ───
  {
    id: "te-death-penalty-12",
    topicSlug: "theme-e-crime-punishment",
    question:
      "\u2018The death penalty can never be justified from a religious point of view.\u2019 Evaluate this statement. [12 marks + 3 SPaG]",
    marks: 12,
    commandWord: "Evaluate",
    grade: "8/9",
    steps: [
      {
        label: "Introduction",
        text: "The death penalty (capital punishment) is one of the most debated moral issues in religious ethics. While many religious leaders and denominations today oppose it, the picture is more complex than a straightforward rejection, since some religious texts appear to permit or even require it in certain circumstances. Whether it can \u2018never\u2019 be justified depends on how believers interpret their scriptures and weigh the principles of justice, mercy, and the sanctity of life.",
        colour: "indigo",
      },
      {
        label: "Argument for",
        text: "Many Christians argue that the death penalty can never be justified because it contradicts the fundamental teaching of the sanctity of life \u2014 the belief that all human life is sacred because it is created by God. Genesis 1:27 states that humans are made \u2018in the image of God\u2019 (imago Dei), which means that taking a life, even as punishment, is an offence against God\u2019s creation. Jesus\u2019s teaching emphasises forgiveness and mercy over retribution: in John 8:7, when a woman caught in adultery was about to be stoned (the legal penalty), Jesus said, \u2018Let anyone among you who is without sin be the first to throw a stone.\u2019 This suggests that humans are not morally qualified to pass the ultimate judgement of death on another person. The Catholic Church formally declared the death penalty \u2018inadmissible\u2019 in 2018, stating that it attacks the dignity of the human person.",
        colour: "violet",
      },
      {
        label: "Supporting religious view",
        text: "Many Muslim scholars also oppose the death penalty in practice, even though Islamic law (Shari\u2019ah) permits it for certain offences such as murder and apostasy. The Qur\u2019an emphasises that mercy is always preferable: \u2018If anyone saved a life, it would be as if he saved the life of all mankind\u2019 (Surah 5:32). In cases of murder, the family of the victim has the right to demand the death penalty (qisas), but the Qur\u2019an encourages them to choose forgiveness instead, stating that \u2018to forgive is closer to righteousness\u2019 (Surah 2:237). Many progressive Muslim scholars argue that the extremely strict conditions required for the death penalty in Islamic law (multiple witnesses, absolute certainty of guilt) make it almost impossible to carry out justly, and that the spirit of the Qur\u2019an favours mercy over execution.",
        colour: "sky",
      },
      {
        label: "Counter-argument",
        text: "However, some religious believers argue that the death penalty can be justified in certain extreme circumstances. The Old Testament contains the principle of \u2018an eye for an eye\u2019 (lex talionis) in Exodus 21:23\u201325, and Genesis 9:6 states, \u2018Whoever sheds human blood, by humans shall their blood be shed.\u2019 Some conservative Christians, particularly in parts of the United States, use these texts to argue that God has given the state the authority to execute murderers as a form of justice. St Paul also wrote in Romans 13:4 that the governing authority \u2018does not bear the sword for nothing\u2019 and is \u2018God\u2019s servant, an agent of wrath to bring punishment on the wrongdoer,\u2019 which some interpret as divine endorsement of capital punishment by the state.",
        colour: "blue",
      },
      {
        label: "Alternative view",
        text: "From a non-religious perspective, the debate focuses on practical and ethical concerns. Supporters of the death penalty argue that it serves as the ultimate deterrent and protects society from the most dangerous criminals. However, opponents point to the risk of executing innocent people, the lack of evidence that it reduces crime rates, and the disproportionate way it is applied to minorities and the poor. Many human rights organisations, such as Amnesty International, campaign against the death penalty on the grounds that it is a \u2018cruel, inhuman, and degrading punishment\u2019 that violates the Universal Declaration of Human Rights (1948). A religious believer committed to justice might agree with these secular objections, arguing that a justice system that risks killing the innocent cannot reflect God\u2019s perfect justice.",
        colour: "indigo",
      },
      {
        label: "Conclusion",
        text: "In conclusion, I would largely agree with the statement that the death penalty can never be justified from a religious point of view, because the principles of the sanctity of life, forgiveness, and mercy are central to both Christianity and Islam and outweigh the case for retribution. While some scriptural passages appear to support capital punishment, these need to be read in their historical context, and the overwhelming trajectory of modern religious teaching \u2014 from the Catholic Church\u2019s 2018 declaration to the Qur\u2019an\u2019s emphasis on mercy \u2014 is towards abolition. However, I acknowledge that \u2018never\u2019 is a strong word, and some believers sincerely hold that extreme cases may warrant the ultimate penalty. Nonetheless, the risk of taking an innocent life, combined with the religious call to forgive, makes the death penalty extremely difficult to justify from a faith perspective.",
        colour: "violet",
      },
    ],
    examinerNotes: [
      "Level 4 (10\u201312 marks): a thorough and balanced evaluation that engages with multiple religious viewpoints and secular perspectives, with a clear and justified conclusion.",
      "Both Christian and Islamic perspectives are explored in depth, with accurate use of scripture (Genesis 1:27, John 8:7, Romans 13:4, Surah 5:32, Surah 2:237) and religious authority (Catholic Church 2018 declaration).",
      "The response distinguishes between different positions within the same religion (liberal vs conservative Christian, progressive vs traditional Muslim), which demonstrates the sophistication expected for the top level.",
      "The conclusion engages directly with the word \u2018never\u2019 in the statement, acknowledging its absoluteness while still reaching a clear judgement \u2014 this is exactly what examiners reward at Level 4.",
      "SPaG: specialist vocabulary is used precisely throughout (sanctity of life, imago Dei, qisas, lex talionis, Shari\u2019ah), paragraphing is logical, and spelling and grammar are consistently accurate.",
    ],
  },

  // ─── Theme F: Religion, Human Rights & Social Justice ───
  {
    id: "tf-wealth-poverty-5",
    topicSlug: "theme-f-human-rights",
    question:
      "Explain two religious teachings about wealth and the responsibility to help the poor. Refer to scripture or another source of wisdom and authority in your answer. [5 marks]",
    marks: 5,
    commandWord: "Explain",
    grade: "8/9",
    steps: [
      {
        label: "Point 1",
        text: "One Christian teaching is that wealth itself is not sinful, but the love of money and the failure to share with those in need is morally wrong. Christians are taught that material possessions are less important than spiritual riches and that they have a duty to use their wealth to help the poor and vulnerable.",
        colour: "indigo",
      },
      {
        label: "Development 1",
        text: "Jesus warned about the dangers of wealth in Mark 10:25, saying, \u2018It is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.\u2019 This does not mean that all wealthy people are condemned, but that attachment to wealth can become a barrier to following God. In the Parable of the Rich Man and Lazarus (Luke 16:19\u201331), Jesus tells of a wealthy man who ignored a beggar at his gate and suffered in the afterlife as a result. This parable teaches that God holds people accountable for how they use their resources and that indifference to poverty is a serious sin.",
        colour: "violet",
      },
      {
        label: "Scripture reference",
        text: "The Catholic Church teaches the principle of the \u2018preferential option for the poor\u2019, meaning that Christians should prioritise the needs of the most disadvantaged. Christian charities such as Christian Aid, CAFOD, and the Salvation Army put this into practice by providing food, shelter, and development aid worldwide. The Church of England also teaches that generosity is a Christian duty, reflected in the practice of tithing (giving a portion of income to the Church and charitable causes).",
        colour: "sky",
      },
      {
        label: "Point 2",
        text: "In Islam, helping the poor is not merely encouraged but is a religious obligation. Zakah (almsgiving), one of the Five Pillars of Islam, requires every Muslim who meets the wealth threshold (nisab) to donate 2.5% of their savings each year to those in need. This is not charity in the voluntary sense \u2014 it is a duty owed to Allah and to the community.",
        colour: "indigo",
      },
      {
        label: "Development 2",
        text: "The Qur\u2019an states, \u2018And establish prayer and give Zakah, and whatever good you put forward for yourselves \u2014 you will find it with Allah\u2019 (Surah 2:110), showing that giving to the poor is directly linked to spiritual reward. Beyond Zakah, Muslims are also encouraged to give Sadaqah (voluntary charity), and the Prophet Muhammad (PBUH) taught that \u2018The believer\u2019s shade on the Day of Judgement will be his charity\u2019 (Hadith, Tirmidhi). Islamic Relief, one of the world\u2019s largest Muslim charities, channels Zakah and Sadaqah donations to communities affected by poverty, conflict, and disaster, demonstrating how these teachings are applied in the modern world.",
        colour: "blue",
      },
    ],
    examinerNotes: [
      "Full 5 marks: two distinct teachings from Christianity and Islam, each with clear explanation, development, and accurate use of scripture or sources of authority.",
      "Point 1 earns marks for explaining Christian teaching on wealth using Mark 10:25 and the Parable of the Rich Man and Lazarus, with further development through the \u2018preferential option for the poor\u2019 and real-world examples (CAFOD, Christian Aid).",
      "Point 2 earns marks for explaining Zakah as a compulsory obligation, supported by Surah 2:110 and Hadith from Tirmidhi, with the distinction between Zakah and Sadaqah demonstrating depth of knowledge.",
      "The response connects theological principles to real-world charitable action (Islamic Relief, CAFOD), which shows the kind of applied understanding that examiners reward in the top band.",
      "Specialist vocabulary from both traditions is used accurately (tithing, nisab, Zakah, Sadaqah, preferential option for the poor), placing this firmly in the highest mark range.",
    ],
  },
];

// ─── Helpers ───

export function getRsModelAnswers(): RsModelAnswer[] {
  return RS_MODEL_ANSWERS;
}

export function getRsModelAnswerById(id: string): RsModelAnswer | undefined {
  return RS_MODEL_ANSWERS.find((ma) => ma.id === id);
}

export function getRsModelAnswersByTopic(topicSlug: string): RsModelAnswer[] {
  return RS_MODEL_ANSWERS.filter((ma) => ma.topicSlug === topicSlug);
}
