// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 2, Theme C — Existence of God & Revelation (3.2.3)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ─────────────────────────────────────────────────────────────
//  KEY TERMS
// ─────────────────────────────────────────────────────────────

export const THEME_C_EXISTENCE_GOD_TERMS: RSTerm[] = [
  // ── Arguments for the existence of God ──
  {
    id: "rs-tc-design-argument",
    word: "Design Argument (Teleological)",
    def: "The argument that the universe shows evidence of being designed for a purpose, and therefore a designer (God) must exist. William Paley compared the universe to a watch — just as a watch implies a watchmaker, the complexity of the world implies an intelligent creator.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-first-cause",
    word: "First Cause Argument (Cosmological)",
    def: "The argument that everything in the universe has a cause, so the universe itself must have a first cause — which is God. Thomas Aquinas argued that there cannot be an infinite chain of causes; something must have started it all.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-william-paley",
    word: "William Paley",
    def: "An 18th-century theologian who put forward the 'watchmaker analogy' as a form of the design argument. He argued that if you found a watch on a heath, you would conclude it had a designer — likewise, the complexity and order of nature point to God as designer.",
    topicSlug: "theme-c-existence-god",
    category: "teaching",
  },
  {
    id: "rs-tc-thomas-aquinas",
    word: "Thomas Aquinas",
    def: "A 13th-century Catholic philosopher who developed the 'Five Ways' to prove God's existence. His cosmological argument (the First Cause or 'Unmoved Mover') is central to the AQA specification.",
    topicSlug: "theme-c-existence-god",
    category: "teaching",
  },

  // ── Miracles ──
  {
    id: "rs-tc-miracle",
    word: "Miracle",
    def: "An event that appears to break the laws of nature and is attributed to God's intervention. Examples include Jesus healing the sick and Muhammad's Night Journey (Isra and Mi'raj). Miracles are used as evidence for God's existence.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },

  // ── Religious experience ──
  {
    id: "rs-tc-religious-experience",
    word: "Religious Experience",
    def: "A personal encounter or event in which an individual feels they have had direct contact with God or the divine. Types include visions, prayer experiences, conversion experiences, and the numinous.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-numinous",
    word: "Numinous",
    def: "A feeling of awe and wonder in the presence of something greater than oneself, which may be experienced in nature, worship, or sacred places. The numinous is often described as a sense of the divine that goes beyond words.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-vision",
    word: "Vision",
    def: "A religious experience in which a person sees or perceives something supernatural, often a message from God. Biblical examples include Moses and the burning bush; Islamic examples include Muhammad's revelations from the angel Jibril.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-prayer",
    word: "Prayer",
    def: "Communication with God, either individually or in a group. For Christians and Muslims, prayer is a way to develop a relationship with God and may result in a sense of God's presence or guidance.",
    topicSlug: "theme-c-existence-god",
    category: "practice",
  },

  // ── Problem of evil and suffering ──
  {
    id: "rs-tc-problem-of-evil",
    word: "Problem of Evil",
    def: "The argument that the existence of evil and suffering in the world is evidence against the existence of an omnipotent, omnibenevolent God. If God is all-powerful and all-loving, why does he allow suffering?",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-natural-evil",
    word: "Natural Evil",
    def: "Suffering caused by natural events that are not the fault of humans, such as earthquakes, floods, disease, and tsunamis. Natural evil raises difficult questions about why God allows innocent people to suffer.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-moral-evil",
    word: "Moral Evil",
    def: "Suffering caused by the deliberate actions of human beings, such as murder, theft, war, and cruelty. Religious believers often explain moral evil as the result of humans misusing their God-given free will.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-free-will-defence",
    word: "Free Will Defence",
    def: "The argument that God allows evil because he gave humans free will — the ability to choose between right and wrong. Without free will, genuine love and goodness would be impossible. Moral evil is caused by humans, not God.",
    topicSlug: "theme-c-existence-god",
    category: "teaching",
  },
  {
    id: "rs-tc-soul-making",
    word: "Soul-making Theodicy",
    def: "The argument (associated with Irenaeus and John Hick) that God allows suffering because it helps humans grow and develop virtues such as courage, compassion, and faith. The world is a place of 'soul-making' where people become morally mature.",
    topicSlug: "theme-c-existence-god",
    category: "teaching",
  },
  {
    id: "rs-tc-theodicy",
    word: "Theodicy",
    def: "An argument that attempts to justify or explain why God allows evil and suffering in the world while remaining omnipotent and omnibenevolent. Major theodicies include the free will defence and the soul-making argument.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },

  // ── Revelation ──
  {
    id: "rs-tc-general-revelation",
    word: "General Revelation",
    def: "Knowledge of God that is available to all people through the natural world, conscience, and human reason. By observing the beauty and order of creation, people can come to know that God exists.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-special-revelation",
    word: "Special Revelation",
    def: "Knowledge of God that is revealed directly to specific individuals or communities, such as through scripture, prophets, visions, or the person of Jesus Christ. In Islam, the Qur'an revealed to Muhammad through Jibril is the supreme special revelation.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-enlightenment",
    word: "Enlightenment (Spiritual)",
    def: "A deep spiritual understanding or awareness of God and truth. In Islam, this is linked to fitrah (the natural disposition to know God) and the guidance received through prophets and the Qur'an.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-fitrah",
    word: "Fitrah",
    def: "The Islamic belief that every human being is born with an innate knowledge of God and a natural inclination towards submission to him. This built-in awareness means that belief in God is the natural state of humanity.",
    topicSlug: "theme-c-existence-god",
    category: "key-term",
  },
  {
    id: "rs-tc-prophethood",
    word: "Prophethood (Risalah)",
    def: "The Islamic belief that God communicates his guidance to humanity through chosen prophets (including Ibrahim, Musa, Isa, and Muhammad). Prophets are the channel of special revelation in Islam, with Muhammad as the Seal of the Prophets.",
    topicSlug: "theme-c-existence-god",
    category: "teaching",
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY SCRIPTURE QUOTES
// ─────────────────────────────────────────────────────────────

export const THEME_C_EXISTENCE_GOD_SCRIPTURE: ScriptureQuote[] = [
  // ── Christian: Design and creation ──
  {
    id: "rs-tc-sq-ps19-1",
    topicSlug: "theme-c-existence-god",
    text: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    source: "Psalm 19:1",
    religion: "christianity",
    significance:
      "Supports the design argument and general revelation — the beauty and order of the natural world reveal God's existence and power to all people.",
  },
  {
    id: "rs-tc-sq-rom1-20",
    topicSlug: "theme-c-existence-god",
    text: "For since the creation of the world God's invisible qualities — his eternal power and divine nature — have been clearly seen, being understood from what has been made, so that people are without excuse.",
    source: "Romans 1:20",
    religion: "christianity",
    significance:
      "Paul argues that God's existence is evident through creation (general revelation). No one can claim ignorance of God because the evidence is visible in the natural world.",
  },

  // ── Christian: Revelation and Jesus ──
  {
    id: "rs-tc-sq-john1-14",
    topicSlug: "theme-c-existence-god",
    text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.",
    source: "John 1:14",
    religion: "christianity",
    significance:
      "Shows Jesus as the ultimate special revelation of God — God made himself known by becoming human. Christians believe Jesus reveals God's nature more fully than any other form of revelation.",
  },
  {
    id: "rs-tc-sq-john20-29",
    topicSlug: "theme-c-existence-god",
    text: "Then Jesus told him, 'Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.'",
    source: "John 20:29",
    religion: "christianity",
    significance:
      "Jesus speaks to Thomas after the resurrection, affirming the value of faith without direct evidence. This is relevant to debates about whether God's existence can or should be proven.",
  },

  // ── Christian: Evil and suffering ──
  {
    id: "rs-tc-sq-job1-21",
    topicSlug: "theme-c-existence-god",
    text: "The Lord gave and the Lord has taken away; may the name of the Lord be praised.",
    source: "Job 1:21",
    religion: "christianity",
    significance:
      "Job maintains his faith despite extreme suffering, demonstrating that believers can trust in God's plan even when they do not understand the reason for their suffering.",
  },

  // ── Islamic: Design and creation ──
  {
    id: "rs-tc-sq-quran51-47",
    topicSlug: "theme-c-existence-god",
    text: "We built the heavens with great might, and We are certainly expanding it.",
    source: "Qur'an 51:47",
    religion: "islam",
    significance:
      "Used to support the design argument from an Islamic perspective — the vastness and expansion of the universe point to Allah as the all-powerful creator.",
  },
  {
    id: "rs-tc-sq-quran2-164",
    topicSlug: "theme-c-existence-god",
    text: "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day... are signs for a people who use reason.",
    source: "Qur'an 2:164",
    religion: "islam",
    significance:
      "The Qur'an teaches that the natural world contains signs (ayat) of Allah's existence. Muslims are encouraged to use reason and observation of creation as a path to faith — supporting general revelation.",
  },

  // ── Islamic: Fitrah and revelation ──
  {
    id: "rs-tc-sq-quran30-30",
    topicSlug: "theme-c-existence-god",
    text: "So direct your face toward the religion, inclining to truth. Adhere to the fitrah of Allah upon which He has created all people. No change should there be in the creation of Allah.",
    source: "Qur'an 30:30",
    religion: "islam",
    significance:
      "Establishes the concept of fitrah — every human being is born with a natural inclination to worship Allah. This innate knowledge of God is seen as evidence for his existence.",
  },
  {
    id: "rs-tc-sq-quran96-1",
    topicSlug: "theme-c-existence-god",
    text: "Read! In the name of your Lord who created.",
    source: "Qur'an 96:1",
    religion: "islam",
    significance:
      "The first word revealed to Muhammad by the angel Jibril in the cave of Hira. This is the beginning of the special revelation of the Qur'an and the foundation of Muhammad's prophethood.",
  },

  // ── Islamic: Suffering and God's plan ──
  {
    id: "rs-tc-sq-quran2-155",
    topicSlug: "theme-c-existence-god",
    text: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient.",
    source: "Qur'an 2:155",
    religion: "islam",
    significance:
      "Muslims believe suffering is a test from Allah. Those who remain patient (sabr) and faithful during hardship will be rewarded. This is a key Islamic response to the problem of evil.",
  },
];

// ─────────────────────────────────────────────────────────────
//  DIVERGENT VIEWS
// ─────────────────────────────────────────────────────────────

export const THEME_C_EXISTENCE_GOD_VIEWS: DivergentView[] = [
  {
    id: "rs-tc-dv-design",
    topicSlug: "theme-c-existence-god",
    issue: "Does the design of the universe prove God exists?",
    views: [
      {
        label: "Theist / Religious Believer",
        position:
          "The complexity, beauty, and order of the universe — from DNA to the orbits of planets — point clearly to an intelligent designer. The universe is too intricate to have come about by chance. William Paley's watchmaker analogy demonstrates this effectively.",
        evidence:
          "Psalm 19:1 — 'The heavens declare the glory of God.' Qur'an 2:164 refers to the signs of Allah in creation. The fine-tuning of the universe (e.g. the precise conditions needed for life) supports the design argument.",
      },
      {
        label: "Atheist / Scientific",
        position:
          "The appearance of design can be explained by natural selection and evolution without the need for a designer. Charles Darwin showed that complex organisms develop through random mutation and survival of the fittest, not by design. Apparent flaws in nature (e.g. natural disasters, disease) count against the idea of a perfect designer.",
        evidence:
          "Richard Dawkins argues in 'The Blind Watchmaker' that evolution explains complexity without God. David Hume criticised the design argument by noting the universe could be the result of chance, and that we cannot compare the universe to a human-made object like a watch.",
      },
    ],
  },
  {
    id: "rs-tc-dv-evil",
    topicSlug: "theme-c-existence-god",
    issue: "Does the existence of evil and suffering disprove God?",
    views: [
      {
        label: "Atheist / Sceptic",
        position:
          "The existence of evil and suffering, especially the suffering of innocent people and children, is strong evidence that an omnipotent, omnibenevolent God does not exist. A loving and all-powerful God would not allow pointless suffering.",
        evidence:
          "The 'inconsistent triad' (God is all-powerful, God is all-loving, evil exists — all three cannot be true). The scale of suffering from events like the Holocaust or natural disasters challenges belief in a caring God.",
      },
      {
        label: "Christian Response",
        position:
          "God allows suffering because humans have free will and must be free to make moral choices. Suffering can also lead to spiritual growth (soul-making). God's plan is beyond human understanding, and suffering in this life will be overcome in the afterlife.",
        evidence:
          "The free will defence: moral evil results from human choice, not God's will. Job 1:21 shows faithfulness despite suffering. Romans 8:28 — 'In all things God works for the good of those who love him.'",
      },
      {
        label: "Muslim Response",
        position:
          "Suffering is a test (ibtila) from Allah to strengthen faith and develop patience (sabr). Allah does not burden a soul beyond what it can bear. Life is temporary, and those who endure with faith will be rewarded in the afterlife (Akhirah).",
        evidence:
          "Qur'an 2:155 — Allah promises to test believers but gives good tidings to the patient. Qur'an 2:286 — 'Allah does not burden a soul beyond that it can bear.' Suffering is seen as part of Allah's divine wisdom.",
      },
    ],
  },
  {
    id: "rs-tc-dv-miracles",
    topicSlug: "theme-c-existence-god",
    issue: "Do miracles prove that God exists?",
    views: [
      {
        label: "Religious Believer",
        position:
          "Miracles are direct evidence of God's power and intervention in the world. Events like Jesus' resurrection, healings at Lourdes, or Muhammad's Night Journey demonstrate that God acts in the world and break the laws of nature in ways that only God can.",
        evidence:
          "The resurrection of Jesus is the central miracle of Christianity (1 Corinthians 15:14). In Islam, the Qur'an itself is considered the greatest miracle — its literary perfection proves it could only come from Allah.",
      },
      {
        label: "Sceptic / Atheist",
        position:
          "Miracles have natural explanations or are based on coincidence, exaggeration, or misunderstanding. David Hume argued it is always more likely that the testimony about a miracle is mistaken than that the laws of nature were actually broken.",
        evidence:
          "Hume's argument: a wise person proportions belief to evidence, and the evidence for the laws of nature will always outweigh testimony for a miracle. Science can explain many events once considered miraculous (e.g. medical recoveries).",
      },
    ],
  },
  {
    id: "rs-tc-dv-revelation",
    topicSlug: "theme-c-existence-god",
    issue: "Is revelation from God a reliable source of knowledge?",
    views: [
      {
        label: "Christian Perspective",
        position:
          "God reveals himself through the Bible (special revelation), through Jesus Christ as the incarnation of God, and through the natural world (general revelation). Scripture is inspired by God and is a trustworthy guide to truth, though denominations differ on whether it should be read literally or interpreted.",
        evidence:
          "2 Timothy 3:16 — 'All Scripture is God-breathed.' John 1:14 — 'The Word became flesh.' Catholics also accept Sacred Tradition alongside the Bible; Protestants hold to sola scriptura (the Bible alone).",
      },
      {
        label: "Muslim Perspective",
        position:
          "The Qur'an is the literal, unchanged word of Allah, revealed to Muhammad through the angel Jibril over 23 years. It is the final and most complete revelation, superseding previous scriptures. Fitrah (innate knowledge of God) also provides every person with awareness of Allah.",
        evidence:
          "Qur'an 96:1 — the first revelation. Qur'an 30:30 — the concept of fitrah. Muslims believe the Qur'an has been perfectly preserved in its original Arabic, making it the most reliable form of special revelation.",
      },
      {
        label: "Non-religious / Secular",
        position:
          "Religious revelation is subjective and cannot be verified. Different religions claim contradictory revelations, so they cannot all be correct. What people interpret as divine revelation may be psychological, cultural, or the result of heightened emotion.",
        evidence:
          "Neuroscience suggests religious experiences may be linked to brain activity rather than the supernatural. The existence of many conflicting holy texts undermines the claim that any single one is the unique word of God.",
      },
    ],
  },
];
