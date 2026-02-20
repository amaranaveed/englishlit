// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 1, Section A — Christianity: Beliefs & Teachings (3.1.1)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const CHRISTIANITY_BELIEFS_TERMS: RSTerm[] = [
  // ── The nature of God ──
  {
    id: "rs-cb-monotheism",
    word: "Monotheism",
    def: "The belief that there is only one God. Christianity is a monotheistic religion — Christians believe in one God who is the creator and sustainer of all that exists.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-omnipotent",
    word: "Omnipotent",
    def: "All-powerful. Christians believe God is omnipotent — he has unlimited power and authority over everything in creation.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-omniscient",
    word: "Omniscient",
    def: "All-knowing. Christians believe God knows everything — past, present, and future — including all human thoughts and actions.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-omnibenevolent",
    word: "Omnibenevolent",
    def: "All-loving or all-good. Christians believe God is perfectly good and loving towards all of his creation, demonstrated through acts such as sending Jesus to save humanity.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-trinity",
    word: "Trinity",
    def: "The Christian belief that there is one God who exists as three persons — the Father, the Son (Jesus Christ), and the Holy Spirit. Each person is fully God, yet there is only one God. This is a central doctrine expressed in the Nicene Creed.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-holy-spirit",
    word: "Holy Spirit",
    def: "The third person of the Trinity. Christians believe the Holy Spirit is God's presence in the world today — guiding, comforting, and empowering believers. At Pentecost, the Holy Spirit descended on the apostles.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },

  // ── Creation ──
  {
    id: "rs-cb-creation",
    word: "Creation",
    def: "The act by which God brought the universe into existence. In Genesis 1, God creates the world in six days and rests on the seventh. Christians believe God is the creator and sustainer of all life.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },

  // ── Jesus Christ — life, death, and significance ──
  {
    id: "rs-cb-jesus-christ",
    word: "Jesus Christ",
    def: "The Son of God and second person of the Trinity. Christians believe Jesus is both fully human and fully divine. His life, teachings, death, and resurrection form the foundation of the Christian faith.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-incarnation",
    word: "Incarnation",
    def: "The belief that God took on human form as Jesus Christ (literally 'made flesh'). Through the incarnation, God entered the world as a human being, born to the Virgin Mary, to live among people and reveal God's nature.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },
  {
    id: "rs-cb-crucifixion",
    word: "Crucifixion",
    def: "The execution of Jesus by being nailed to a cross on Good Friday, ordered by the Roman governor Pontius Pilate. Christians believe Jesus' death was a sacrifice to atone for the sins of humanity and restore the relationship between God and people.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },
  {
    id: "rs-cb-resurrection",
    word: "Resurrection",
    def: "The belief that Jesus rose from the dead on the third day after his crucifixion (Easter Sunday). The resurrection is the foundation of Christian faith — it proves Jesus is the Son of God and gives Christians hope of eternal life.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },
  {
    id: "rs-cb-ascension",
    word: "Ascension",
    def: "The event, 40 days after the resurrection, when Jesus rose up to heaven in the presence of his disciples. The ascension shows that Jesus returned to God the Father and now sits 'at the right hand of God', where he reigns in glory.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },

  // ── Sin, salvation, and grace ──
  {
    id: "rs-cb-sin",
    word: "Sin (Original Sin)",
    def: "Any thought or action that separates humans from God. Original sin is the idea that all humans are born with a built-in tendency to sin, inherited from Adam and Eve's disobedience in the Garden of Eden (the Fall).",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-free-will",
    word: "Free Will",
    def: "The God-given ability to make one's own choices and decisions. Christians believe God gave humans free will, meaning they can choose to obey or disobey God. This makes genuine love and faith possible but also allows the possibility of sin.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-salvation",
    word: "Salvation",
    def: "Being saved from sin and its consequences, and being granted eternal life with God. Christians believe salvation was made possible through the life, death, and resurrection of Jesus Christ.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-atonement",
    word: "Atonement",
    def: "The reconciliation (at-one-ment) between God and humanity through the sacrificial death of Jesus on the cross. Jesus' death paid the price for human sin, restoring the broken relationship between people and God.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },
  {
    id: "rs-cb-redemption",
    word: "Redemption",
    def: "The idea of being 'bought back' or delivered from sin through Jesus' sacrifice. Christians believe that through his death and resurrection, Jesus redeemed humanity — freeing people from the power of sin and offering the gift of eternal life.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-grace",
    word: "Grace",
    def: "The free and undeserved love and favour of God given to humans. Christians believe grace cannot be earned — it is a gift from God. Grace enables people to be saved and to live according to God's will.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },

  // ── Afterlife and judgement ──
  {
    id: "rs-cb-afterlife",
    word: "Afterlife",
    def: "Life after death. Christians believe the soul lives on after the body dies. Most Christians believe in some form of judgement after death that determines whether a person spends eternity with God (heaven) or apart from God (hell).",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },
  {
    id: "rs-cb-heaven",
    word: "Heaven",
    def: "The state or place of eternal happiness in the presence of God. Christians believe heaven is the ultimate reward for those who have faith in God and live according to his will. It represents perfect peace, joy, and union with God.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-hell",
    word: "Hell",
    def: "The state or place of eternal separation from God, often described as a place of suffering or torment. Some Christians interpret hell literally as a place of fire; others see it as the anguish of being permanently separated from God's love.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-judgement",
    word: "Judgement",
    def: "The belief that God will judge every person on how they have lived. Christians believe in both individual judgement (at death) and the final/last judgement when Jesus returns at the end of time. The Parable of the Sheep and the Goats (Matthew 25) teaches about this.",
    topicSlug: "christianity-beliefs",
    category: "teaching",
  },

  // ── Denominations ──
  {
    id: "rs-cb-denomination",
    word: "Denomination",
    def: "A distinct branch or group within Christianity that has its own beliefs, practices, and organisation. Major denominations include Catholic, Protestant, and Orthodox. They share core beliefs but differ on matters such as the role of the Pope, the sacraments, and church authority.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-catholic",
    word: "Catholic",
    def: "The largest Christian denomination, led by the Pope in Rome. Catholics accept the authority of the Pope and Sacred Tradition alongside the Bible. Key distinctive beliefs include purgatory, the seven sacraments, and the importance of both faith and good works for salvation.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-protestant",
    word: "Protestant",
    def: "A branch of Christianity that emerged from the Reformation in the 16th century. Protestants emphasise the authority of the Bible alone (sola scriptura), salvation through faith alone (sola fide), and the individual's direct relationship with God without the need for a Pope or priest as intermediary.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
  {
    id: "rs-cb-evangelical",
    word: "Evangelical",
    def: "A movement within Protestant Christianity that emphasises the authority and literal truth of the Bible, the need for personal conversion ('born again' experience), sharing the gospel with others, and the centrality of Jesus' sacrificial death on the cross.",
    topicSlug: "christianity-beliefs",
    category: "key-term",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const CHRISTIANITY_BELIEFS_SCRIPTURE: ScriptureQuote[] = [
  // ── Creation ──
  {
    id: "rs-cb-sq-gen1-1",
    topicSlug: "christianity-beliefs",
    text: "In the beginning God created the heavens and the earth.",
    source: "Genesis 1:1",
    religion: "christianity",
    significance:
      "Establishes God as the sole creator of all that exists. This is the foundation of the Christian doctrine of creation and supports the belief that God is omnipotent.",
  },
  {
    id: "rs-cb-sq-gen1-27",
    topicSlug: "christianity-beliefs",
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
    source: "Genesis 1:27",
    religion: "christianity",
    significance:
      "Shows that all humans are created in God's image (imago Dei), giving every person inherent value, dignity, and worth. This is a key reason Christians believe in the sanctity of human life.",
  },
  {
    id: "rs-cb-sq-gen2-7",
    topicSlug: "christianity-beliefs",
    text: "Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.",
    source: "Genesis 2:7",
    religion: "christianity",
    significance:
      "Illustrates the personal, intimate nature of God's creation of humanity. God's 'breath of life' suggests each person has a God-given soul, which supports Christian beliefs about the afterlife and the sanctity of life.",
  },

  // ── The nature of God / Trinity ──
  {
    id: "rs-cb-sq-nicene",
    topicSlug: "christianity-beliefs",
    text: "We believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.",
    source: "Nicene Creed",
    religion: "christianity",
    significance:
      "The Nicene Creed (325 CE) is the statement of faith accepted by most Christian denominations. It formally defines the doctrine of the Trinity and confirms core beliefs about God, Jesus, and the Holy Spirit.",
  },
  {
    id: "rs-cb-sq-matt28-19",
    topicSlug: "christianity-beliefs",
    text: "Therefore go and make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit.",
    source: "Matthew 28:19",
    religion: "christianity",
    significance:
      "This is Jesus' Great Commission, spoken after his resurrection. It provides direct scriptural evidence for the Trinity by naming all three persons — Father, Son, and Holy Spirit — as one name (singular) in which to baptise.",
  },

  // ── Incarnation and the nature of Jesus ──
  {
    id: "rs-cb-sq-john1-1",
    topicSlug: "christianity-beliefs",
    text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    source: "John 1:1",
    religion: "christianity",
    significance:
      "Identifies Jesus ('the Word') as divine and eternal — he existed with God from the very beginning and is God. This supports the doctrine of the incarnation and Jesus' place within the Trinity.",
  },
  {
    id: "rs-cb-sq-john14-6",
    topicSlug: "christianity-beliefs",
    text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
    source: "John 14:6",
    religion: "christianity",
    significance:
      "A key teaching on salvation — Jesus declares that he is the only path to God. This quote is central to Christian beliefs about the unique role of Jesus in offering salvation and eternal life.",
  },

  // ── Atonement, salvation, and grace ──
  {
    id: "rs-cb-sq-john3-16",
    topicSlug: "christianity-beliefs",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    source: "John 3:16",
    religion: "christianity",
    significance:
      "One of the most famous verses in the Bible. It summarises the Christian message of salvation: God's love (omnibenevolence) led him to sacrifice Jesus so that believers could be saved from sin and receive eternal life.",
  },
  {
    id: "rs-cb-sq-rom5-8",
    topicSlug: "christianity-beliefs",
    text: "But God demonstrates his own love for us in this: while we were still sinners, Christ died for us.",
    source: "Romans 5:8",
    religion: "christianity",
    significance:
      "Shows that God's love and grace are unconditional — Jesus died for humanity even before people turned to God. This supports the concepts of grace, atonement, and God's omnibenevolent nature.",
  },
  {
    id: "rs-cb-sq-1cor15-3-4",
    topicSlug: "christianity-beliefs",
    text: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures.",
    source: "1 Corinthians 15:3\u20134",
    religion: "christianity",
    significance:
      "Summarises the core events of the Christian faith — the death, burial, and resurrection of Jesus. Paul presents this as the most important teaching, showing the resurrection as foundational to Christianity.",
  },

  // ── Afterlife and judgement ──
  {
    id: "rs-cb-sq-rev21-4",
    topicSlug: "christianity-beliefs",
    text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
    source: "Revelation 21:4",
    religion: "christianity",
    significance:
      "Describes the Christian hope of heaven and the afterlife — a place of perfect peace where all suffering ends. This gives Christians comfort and hope, and motivates them to live faithfully in this life.",
  },
  {
    id: "rs-cb-sq-matt25-31-46",
    topicSlug: "christianity-beliefs",
    text: "Then the King will say to those on his right, 'Come, you who are blessed by my Father; take your inheritance, the kingdom prepared for you since the creation of the world.'",
    source: "Matthew 25:31\u201346 (Parable of the Sheep and the Goats)",
    religion: "christianity",
    significance:
      "Jesus teaches that at the final judgement, people will be separated based on how they treated the needy. Those who helped others (the 'sheep') enter heaven; those who did not (the 'goats') are sent to eternal punishment. This shows that faith must be accompanied by action.",
  },
  {
    id: "rs-cb-sq-john11-25",
    topicSlug: "christianity-beliefs",
    text: "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die.'",
    source: "John 11:25",
    religion: "christianity",
    significance:
      "Jesus declares that belief in him leads to eternal life, even beyond physical death. This is a key text for Christian beliefs about the resurrection of the body and the promise of the afterlife.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const CHRISTIANITY_BELIEFS_VIEWS: DivergentView[] = [
  {
    id: "rs-cb-dv-creation",
    topicSlug: "christianity-beliefs",
    issue: "How should the Genesis creation account be understood?",
    views: [
      {
        label: "Literalist / Fundamentalist",
        position:
          "The Genesis account is historically and scientifically accurate. God created the world in six literal 24-hour days. The earth is relatively young (thousands of years old). Evolution is rejected.",
        evidence:
          "Genesis 1:1\u20132:3 is read as a factual record. Evangelical and fundamentalist Christians often hold this view, trusting in the Bible as the inerrant Word of God.",
      },
      {
        label: "Liberal / Non-literal",
        position:
          "The Genesis account is a myth or metaphor that communicates theological truths (God is the creator, creation has purpose) rather than scientific facts. The 'days' may represent long periods of time. Science and faith are compatible.",
        evidence:
          "Many Catholic and mainstream Protestant Christians accept scientific evidence for evolution and the Big Bang, seeing them as the method God used to create. Pope Francis has affirmed that evolution and the Big Bang are consistent with belief in God.",
      },
    ],
  },
  {
    id: "rs-cb-dv-afterlife",
    topicSlug: "christianity-beliefs",
    issue: "What happens after death — is there purgatory?",
    views: [
      {
        label: "Catholic",
        position:
          "After death, souls may go to heaven, hell, or purgatory. Purgatory is a state of purification where souls are cleansed of remaining sin before entering heaven. The living can pray for souls in purgatory to speed their journey to heaven.",
        evidence:
          "The Catholic Church teaches purgatory based on tradition and 2 Maccabees 12:46 ('it is a holy and wholesome thought to pray for the dead'). The doctrine was reaffirmed at the Council of Trent (1563).",
      },
      {
        label: "Protestant",
        position:
          "There is no purgatory. After death, a person goes directly to heaven or hell based on their faith in Jesus Christ. Since salvation is by grace through faith, no further purification is needed — Jesus' sacrifice was sufficient.",
        evidence:
          "Protestants reject purgatory because it is not explicitly taught in the Bible. They point to Luke 23:43, where Jesus tells the criminal on the cross, 'Today you will be with me in paradise,' suggesting immediate entry to heaven.",
      },
    ],
  },
  {
    id: "rs-cb-dv-trinity",
    topicSlug: "christianity-beliefs",
    issue: "How is the Trinity understood across denominations?",
    views: [
      {
        label: "Catholic / Orthodox",
        position:
          "The Trinity is a central mystery of faith formally defined at the Council of Nicaea (325 CE). The Father, Son, and Holy Spirit are three distinct persons sharing one divine substance (consubstantial). The Nicene Creed is recited at every Mass as an expression of Trinitarian belief.",
        evidence:
          "The Nicene Creed states the Son is 'of one Being with the Father' (homoousios). Catholic and Orthodox traditions emphasise the role of Sacred Tradition and Church Councils in defining the Trinity alongside Scripture.",
      },
      {
        label: "Protestant / Evangelical",
        position:
          "The Trinity is affirmed as biblical truth, but understanding comes primarily from Scripture rather than church tradition or creeds. Some Evangelical Christians place stronger emphasis on a personal relationship with each person of the Trinity, especially Jesus and the Holy Spirit.",
        evidence:
          "Matthew 28:19 and 2 Corinthians 13:14 are seen as direct scriptural evidence. Pentecostal and charismatic traditions particularly emphasise the active work of the Holy Spirit through gifts such as speaking in tongues and healing.",
      },
    ],
  },
  {
    id: "rs-cb-dv-salvation",
    topicSlug: "christianity-beliefs",
    issue: "Is salvation achieved through faith alone, or through faith and good works?",
    views: [
      {
        label: "Catholic",
        position:
          "Salvation requires both faith in God and good works. Christians must live out their faith through charitable actions, participation in the sacraments (especially the Eucharist and Confession), and obedience to Church teaching. Grace is received through the sacraments.",
        evidence:
          "James 2:26 — 'Faith without deeds is dead.' The Catholic Church teaches that the sacraments are channels of grace, and that believers must cooperate with God's grace through moral living and works of mercy.",
      },
      {
        label: "Protestant (Sola Fide)",
        position:
          "Salvation is by grace alone through faith alone (sola fide). Good works are the result of salvation, not the cause of it. No human action can earn salvation — it is an undeserved gift from God. Martin Luther championed this view during the Reformation.",
        evidence:
          "Ephesians 2:8\u20139 — 'For it is by grace you have been saved, through faith... not by works, so that no one can boast.' Luther argued that the Catholic emphasis on works and sacraments obscured the free gift of God's grace.",
      },
    ],
  },
];
