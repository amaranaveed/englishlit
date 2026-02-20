// ─── AQA GCSE Religious Studies A (8062) ───
// Paper 1, Section B — Islam: Beliefs & Teachings (3.1.3)

import type { RSTerm, ScriptureQuote, DivergentView } from "./types";

// ────────────────────────────────────────────────────────────
//  1. KEY TERMS, TEACHINGS & PRACTICES
// ────────────────────────────────────────────────────────────

export const ISLAM_BELIEFS_TERMS: RSTerm[] = [
  // ── The oneness of God & key concepts ──
  {
    id: "rs-ib-tawhid",
    word: "Tawhid",
    def: "The oneness and unity of Allah. The most important belief in Islam: there is only one God and He has no partners or equals. This is the foundation of the Islamic faith.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-shirk",
    word: "Shirk",
    def: "The sin of worshipping anything other than Allah or associating partners with Him. It is considered the greatest sin in Islam and the one sin Allah will not forgive.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-supremacy",
    word: "Supremacy of God's Will",
    def: "The belief that Allah is supreme over all creation. He is omnipotent (all-powerful), omniscient (all-knowing) and benevolent (all-loving). Nothing happens without His will.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },

  // ── Six Articles of Faith (Sunni) ──
  {
    id: "rs-ib-six-articles",
    word: "Six Articles of Faith (Sunni)",
    def: "The six core beliefs all Sunni Muslims must hold: belief in Allah (Tawhid), belief in angels (Malaikah), belief in holy books (Kutub), belief in prophets (Risalah), belief in the Day of Judgement (Akhirah) and belief in predestination (Al-Qadr).",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },

  // ── Five Roots of Usul ad-Din (Shi'a) ──
  {
    id: "rs-ib-five-roots",
    word: "Five Roots of Usul ad-Din (Shi'a)",
    def: "The five foundational beliefs of Shi'a Islam: Tawhid (oneness of God), Adalat (justice of God), Nubuwwah (prophethood), Imamate (succession of the Imams) and Mi'ad (the Day of Judgement and resurrection).",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-adalat",
    word: "Adalat (Justice of God)",
    def: "A key Shi'a belief that Allah is perfectly just and fair. He will not wrong anyone. Humans have free will to choose right or wrong, and Allah judges them fairly. This is one of the Five Roots of Usul ad-Din.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },

  // ── Prophethood (Risalah) ──
  {
    id: "rs-ib-risalah",
    word: "Risalah (Prophethood)",
    def: "The belief in the prophets (messengers) of Allah. Muslims believe Allah sent 124,000 prophets to guide humanity. Twenty-five are named in the Qur'an. All taught the same core message of Tawhid.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-muhammad",
    word: "Prophet Muhammad (PBUH)",
    def: "The final prophet and 'Seal of the Prophets' (Khatam an-Nabiyyin). He received the Qur'an from Allah through the angel Jibril. His life and teachings (the Sunnah) are a model for all Muslims to follow.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },
  {
    id: "rs-ib-ibrahim",
    word: "Prophet Ibrahim (Abraham)",
    def: "A key prophet in Islam known as the 'friend of Allah' (Khalilullah). He demonstrated total submission to God, including his willingness to sacrifice his son Isma'il. He rebuilt the Ka'bah in Makkah with Isma'il.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },
  {
    id: "rs-ib-isa",
    word: "Prophet Isa (Jesus)",
    def: "An important prophet in Islam, born to the virgin Maryam by a miracle of Allah. Muslims believe he was a prophet and messenger, not the Son of God. He was not crucified but was raised to heaven by Allah and will return before the Day of Judgement.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },

  // ── Angels (Malaikah) ──
  {
    id: "rs-ib-malaikah",
    word: "Malaikah (Angels)",
    def: "Beings created by Allah from light. They have no free will and carry out Allah's commands perfectly. Belief in angels is one of the Six Articles of Faith. They act as messengers between Allah and humanity.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-jibril",
    word: "Jibril (Gabriel)",
    def: "The most important angel in Islam. He revealed the Qur'an to Prophet Muhammad over 23 years, beginning on the Night of Power (Laylat al-Qadr). He also appeared to Maryam to announce the birth of Isa.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },
  {
    id: "rs-ib-miraj",
    word: "Mi'raj (Night Journey / Isra and Mi'raj)",
    def: "The miraculous night journey of Prophet Muhammad from Makkah to Jerusalem (Isra) and then through the heavens (Mi'raj), where he met previous prophets and received instructions for the five daily prayers.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },
  {
    id: "rs-ib-night-of-power",
    word: "Laylat al-Qadr (Night of Power)",
    def: "The night on which the Qur'an was first revealed to Muhammad through the angel Jibril. It falls within the last ten nights of Ramadan. The Qur'an says it is 'better than a thousand months' (Surah 97:3).",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },

  // ── Holy Books (Kutub) ──
  {
    id: "rs-ib-kutub",
    word: "Kutub (Holy Books)",
    def: "The belief in all the books revealed by Allah to His prophets, including the Tawrat (Torah to Musa), Zabur (Psalms to Dawud), Injil (Gospel to Isa) and the Qur'an (to Muhammad). Muslims believe only the Qur'an remains unchanged.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-quran",
    word: "Qur'an",
    def: "The holy book of Islam, believed to be the literal, unchanged word of Allah revealed in Arabic to Prophet Muhammad through the angel Jibril. It is the supreme authority in Islam and the final revelation, superseding all previous scriptures.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-sunnah",
    word: "Sunnah",
    def: "The practices, habits and sayings of Prophet Muhammad. It is the second most important source of authority in Islam after the Qur'an. Muslims try to follow the Sunnah in their daily lives as Muhammad is the perfect example.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-hadith",
    word: "Hadith",
    def: "A written record of the sayings, actions and approval of Prophet Muhammad, collected and verified after his death. The Hadith literature helps Muslims understand and apply the Qur'an and follow the Sunnah.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },

  // ── Imamate (Shi'a) ──
  {
    id: "rs-ib-imamate",
    word: "Imamate (Shi'a)",
    def: "The Shi'a belief that after Muhammad, leadership of the Muslim community should pass to divinely appointed Imams from the Prophet's family, beginning with Ali ibn Abi Talib. Imams are believed to be sinless and have special spiritual authority. This is one of the Five Roots.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },

  // ── Predestination (Al-Qadr) ──
  {
    id: "rs-ib-al-qadr",
    word: "Al-Qadr (Predestination)",
    def: "The belief that Allah knows and has already determined everything that will happen. Nothing occurs outside His will. It is the sixth Article of Faith for Sunni Muslims. Muslims must still make moral choices and will be judged on them.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },

  // ── Akhirah (Afterlife) ──
  {
    id: "rs-ib-akhirah",
    word: "Akhirah (Afterlife / Life after Death)",
    def: "The belief in life after death. Muslims believe this life is a test and that after death the soul waits in Barzakh until the Day of Judgement, when Allah will judge every person on their deeds and faith.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-day-of-judgement",
    word: "Yawm al-Din (Day of Judgement)",
    def: "The day when Allah will resurrect all people, judge their deeds and decide their eternal fate. Everyone will be shown their 'book of deeds'. Those whose good deeds outweigh the bad will enter Jannah; those whose bad deeds outweigh the good face Jahannam.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },
  {
    id: "rs-ib-jannah",
    word: "Jannah (Paradise)",
    def: "The Islamic concept of heaven or paradise. A place of eternal peace, happiness and closeness to Allah. It is described in the Qur'an with gardens, rivers and joy. Entry is determined by Allah's mercy and judgement of a person's faith and deeds.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-jahannam",
    word: "Jahannam (Hell)",
    def: "The Islamic concept of hell. A place of punishment and suffering for those who rejected Allah, committed shirk or whose bad deeds outweigh their good. The Qur'an describes it with fire and torment. Some scholars debate whether it is eternal for all or only for some.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-predestination",
    word: "Predestination and Free Will",
    def: "A key tension in Islamic theology. All Muslims believe Allah knows everything, but Sunnis tend to emphasise Al-Qadr (God's decree), while Shi'a emphasise Adalat (God's justice), stressing that humans have free will and God would not predetermine people to sin, as that would be unjust.",
    topicSlug: "islam-beliefs",
    category: "teaching",
  },
  {
    id: "rs-ib-khalifah",
    word: "Khalifah (Stewardship / Vicegerent)",
    def: "The belief that humans are God's stewards or trustees on earth, given the responsibility to look after the world. This role comes with accountability: on the Day of Judgement, people will answer for how they fulfilled this duty.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
  {
    id: "rs-ib-barzakh",
    word: "Barzakh",
    def: "The state or barrier between death and the Day of Judgement. After death, the soul enters Barzakh and waits for resurrection. It is mentioned in Surah 23:100 and is a stage of the afterlife, not the final destination.",
    topicSlug: "islam-beliefs",
    category: "key-term",
  },
];

// ────────────────────────────────────────────────────────────
//  2. KEY SCRIPTURE QUOTES
// ────────────────────────────────────────────────────────────

export const ISLAM_BELIEFS_SCRIPTURE: ScriptureQuote[] = [
  {
    id: "rs-ib-sq-ikhlas",
    topicSlug: "islam-beliefs",
    text: "Say, 'He is Allah, the One; Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'",
    source: "Surah 112:1-4 (Surah Al-Ikhlas)",
    religion: "islam",
    significance:
      "The definitive statement of Tawhid. This short surah sums up the entire Islamic concept of God's oneness and is often used in exams to support answers on the nature of Allah and the rejection of shirk.",
  },
  {
    id: "rs-ib-sq-ayat-kursi",
    topicSlug: "islam-beliefs",
    text: "Allah — there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
    source: "Surah 2:255 (Ayat al-Kursi — the Throne Verse)",
    religion: "islam",
    significance:
      "One of the most important verses in the Qur'an, emphasising Allah's eternal power, omnipotence and sovereignty over all creation. Useful for exam questions on the nature of God and Tawhid.",
  },
  {
    id: "rs-ib-sq-first-revelation",
    topicSlug: "islam-beliefs",
    text: "Read! In the name of your Lord who created — created man from a clinging substance. Read! And your Lord is the Most Generous.",
    source: "Surah 96:1-3 (Surah Al-Alaq — first revelation)",
    religion: "islam",
    significance:
      "The first words revealed to Prophet Muhammad by the angel Jibril in the Cave of Hira. Key for exam questions on the Night of Power, the role of Jibril and the origin of the Qur'an as revelation.",
  },
  {
    id: "rs-ib-sq-believe-all",
    topicSlug: "islam-beliefs",
    text: "O you who have believed, believe in Allah and His Messenger and the Book that He sent down upon His Messenger and the Scripture which He sent down before.",
    source: "Surah 4:136",
    religion: "islam",
    significance:
      "A direct command to believe in Allah, His prophets, the Qur'an and previous scriptures. This verse underpins several of the Six Articles of Faith and is excellent for answers on Risalah and Kutub.",
  },
  {
    id: "rs-ib-sq-messenger-believes",
    topicSlug: "islam-beliefs",
    text: "The Messenger has believed in what was revealed to him from his Lord, and so have the believers. All of them have believed in Allah and His angels and His books and His messengers.",
    source: "Surah 2:285",
    religion: "islam",
    significance:
      "Lists the core beliefs that Muhammad and all Muslims share: Allah, angels, holy books and messengers. This directly maps to the Six Articles of Faith and is a strong quote for any exam answer on core beliefs.",
  },
  {
    id: "rs-ib-sq-night-journey",
    topicSlug: "islam-beliefs",
    text: "Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs.",
    source: "Surah 17:1",
    religion: "islam",
    significance:
      "The Qur'anic basis for the Isra and Mi'raj (Night Journey). Key for exam questions on the significance of this event, the five daily prayers, and Muhammad's special status as the final prophet.",
  },
  {
    id: "rs-ib-sq-creation",
    topicSlug: "islam-beliefs",
    text: "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump of flesh, and We made from the lump bones, and We covered the bones with flesh; then We developed him into another creation.",
    source: "Surah 23:12-14",
    religion: "islam",
    significance:
      "Describes Allah as the Creator of human life in stages. Useful for exam questions on the nature of God as Creator, the sanctity of life and the relationship between science and Islamic teaching.",
  },
  {
    id: "rs-ib-sq-keys-unseen",
    topicSlug: "islam-beliefs",
    text: "And with Him are the keys of the unseen; none knows them except Him. And He knows what is on the land and in the sea. Not a leaf falls but that He knows it.",
    source: "Surah 6:59",
    religion: "islam",
    significance:
      "A powerful statement of Allah's omniscience and Al-Qadr (predestination). Key for exam questions on predestination, the nature of God and the idea that nothing is hidden from Allah.",
  },
  {
    id: "rs-ib-sq-every-soul",
    topicSlug: "islam-beliefs",
    text: "Every soul will taste death, and you will only be given your full compensation on the Day of Resurrection.",
    source: "Surah 3:185",
    religion: "islam",
    significance:
      "Establishes the certainty of death and the reality of Akhirah (afterlife). A key quote for exam answers on the Day of Judgement, resurrection and why Muslims believe this life is a test.",
  },
  {
    id: "rs-ib-sq-atoms-weight",
    topicSlug: "islam-beliefs",
    text: "So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.",
    source: "Surah 99:7-8 (Surah Az-Zalzalah)",
    religion: "islam",
    significance:
      "Emphasises that every action, no matter how small, is recorded and will be judged. Vital for exam answers on accountability, the Day of Judgement and why belief in Akhirah motivates Muslims to live morally.",
  },
  {
    id: "rs-ib-sq-khalifah",
    topicSlug: "islam-beliefs",
    text: "And when your Lord said to the angels, 'Indeed, I will make upon the earth a khalifah (vicegerent).'",
    source: "Surah 2:30",
    religion: "islam",
    significance:
      "The Qur'anic basis for human stewardship (khalifah). Key for exam questions on the role of humans on earth, environmental responsibility and the relationship between God and humanity.",
  },
  {
    id: "rs-ib-sq-hadith-brother",
    topicSlug: "islam-beliefs",
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    source: "Hadith (Sahih al-Bukhari 13, Sahih Muslim 45)",
    religion: "islam",
    significance:
      "One of the most famous Hadith, showing the importance of compassion, community and selflessness in Islam. Useful for exam answers on the Sunnah, the authority of Hadith and Islamic ethics.",
  },
  {
    id: "rs-ib-sq-no-compulsion",
    topicSlug: "islam-beliefs",
    text: "There shall be no compulsion in religion. The right course has become distinct from the wrong.",
    source: "Surah 2:256",
    religion: "islam",
    significance:
      "Often cited in discussions of free will and Adalat (justice of God). Supports the idea that God gives humans freedom to choose faith. Useful for exam questions on predestination vs free will and tolerance in Islam.",
  },
  {
    id: "rs-ib-sq-angels-recording",
    topicSlug: "islam-beliefs",
    text: "And indeed, over you are keepers, noble and recording; they know whatever you do.",
    source: "Surah 82:10-12",
    religion: "islam",
    significance:
      "Describes the role of recording angels (Kiraman Katibin) who write down every person's deeds. Key for exam answers on the role of Malaikah and the link between angels, accountability and the Day of Judgement.",
  },
];

// ────────────────────────────────────────────────────────────
//  3. DIVERGENT VIEWS
// ────────────────────────────────────────────────────────────

export const ISLAM_BELIEFS_VIEWS: DivergentView[] = [
  {
    id: "rs-ib-dv-authority-after-muhammad",
    topicSlug: "islam-beliefs",
    issue: "Who should have led the Muslim community after the death of Prophet Muhammad?",
    views: [
      {
        label: "Sunni",
        position:
          "Leadership should be decided by the community through consultation (shura). The first four 'Rightly Guided Caliphs' (Abu Bakr, Umar, Uthman and Ali) were chosen by consensus and are all legitimate leaders.",
        evidence:
          "Sunnis point to the community's agreement at the time and the Qur'anic principle of shura (consultation, Surah 42:38). They follow the Six Articles of Faith and accept the authority of the Hadith collections of al-Bukhari and Muslim.",
      },
      {
        label: "Shi'a",
        position:
          "Leadership should have passed directly to Ali ibn Abi Talib, Muhammad's cousin and son-in-law, and then to his descendants. These Imams are divinely appointed, sinless, and have special authority to interpret the Qur'an.",
        evidence:
          "Shi'a Muslims cite the event at Ghadir Khumm, where they believe Muhammad publicly designated Ali as his successor. Imamate is one of the Five Roots of Usul ad-Din. They follow the teachings of the twelve Imams alongside the Qur'an.",
      },
    ],
  },
  {
    id: "rs-ib-dv-predestination-free-will",
    topicSlug: "islam-beliefs",
    issue: "How much of human life is predestined by Allah, and how much free will do humans have?",
    views: [
      {
        label: "Sunni emphasis on Al-Qadr",
        position:
          "Al-Qadr (predestination) is the sixth Article of Faith. Allah has complete knowledge and control of everything that happens. Nothing occurs outside His will. Muslims should trust in Allah's plan (tawakkul) while still striving to do good.",
        evidence:
          "Surah 6:59 ('With Him are the keys of the unseen') and Surah 57:22 ('No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being'). The Hadith also states that the pen has been lifted and the ink has dried.",
      },
      {
        label: "Shi'a emphasis on Adalat",
        position:
          "While Allah knows everything, His perfect justice (Adalat) means He would not predetermine people to sin and then punish them for it. Humans genuinely have free will to make moral choices, and God judges them fairly based on those choices.",
        evidence:
          "Surah 2:256 ('There shall be no compulsion in religion') and the emphasis on Adalat as one of the Five Roots. Shi'a scholars argue that true justice requires genuine freedom, otherwise punishment for sin would be unjust.",
      },
    ],
  },
  {
    id: "rs-ib-dv-sources-authority",
    topicSlug: "islam-beliefs",
    issue: "What are the most important sources of authority in Islam after the Qur'an?",
    views: [
      {
        label: "Sunni",
        position:
          "After the Qur'an, the key sources are the Hadith and Sunnah of the Prophet, followed by ijma (scholarly consensus) and qiyas (analogical reasoning). The community of scholars collectively guides interpretation of Islamic law.",
        evidence:
          "Sunnis accept six major Hadith collections (especially Sahih al-Bukhari and Sahih Muslim) as highly authoritative. They look to the practice of the four Rightly Guided Caliphs and the consensus of scholars across history.",
      },
      {
        label: "Shi'a",
        position:
          "After the Qur'an, the key sources are the Hadith (including those narrated by the Prophet's family), the teachings and rulings of the twelve Imams, and the guidance of living senior scholars (ayatollahs). The Imams have divinely guided authority to interpret the faith.",
        evidence:
          "Shi'a Muslims have their own Hadith collections (e.g. Al-Kafi) and give special weight to narrations from Ali and the Ahl al-Bayt (the Prophet's household). The authority of the Imams is rooted in the doctrine of Imamate, one of the Five Roots.",
      },
    ],
  },
  {
    id: "rs-ib-dv-quran-interpretation",
    topicSlug: "islam-beliefs",
    issue: "Should the Qur'an be understood only literally, or is scholarly interpretation (ijtihad) needed?",
    views: [
      {
        label: "Literal / traditional",
        position:
          "The Qur'an is the literal, eternal and unchanging word of Allah, revealed in Arabic. It must be accepted as it is. The meaning is clear (muhkam) in most cases, and Muslims should not reinterpret God's words to suit modern ideas.",
        evidence:
          "Surah 6:115 ('The word of your Lord has been fulfilled in truth and justice. None can alter His words'). Many traditional scholars hold that the Qur'an's guidance is timeless and does not need reinterpretation for different eras.",
      },
      {
        label: "Scholarly interpretation (Ijtihad)",
        position:
          "While the Qur'an is the word of Allah, some verses require scholarly interpretation to be applied correctly in different times and contexts. Ijtihad (independent reasoning by qualified scholars) helps Muslims understand how Qur'anic principles apply to modern life.",
        evidence:
          "The Qur'an itself distinguishes between clear verses (muhkam) and allegorical ones (mutashabih) in Surah 3:7. Throughout Islamic history, scholars have used ijtihad to address new issues. Shi'a Islam particularly encourages ongoing scholarly interpretation through its senior scholars.",
      },
    ],
  },
];
