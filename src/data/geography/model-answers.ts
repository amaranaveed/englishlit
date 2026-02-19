// ─── Geography Model Answers Data ───

export interface ModelAnswerStep {
  label: string;
  text: string;
  colour: string;
}

export interface GeoModelAnswer {
  id: string;
  topicSlug: string;
  question: string;
  marks: number;
  commandWord: string;
  grade: string;
  steps: ModelAnswerStep[];
  examinerNotes: string[];
}

export const GEO_MODEL_ANSWERS: GeoModelAnswer[] = [
  // ─── Natural Hazards ───
  {
    id: "nh-describe-distribution",
    topicSlug: "natural-hazards",
    question: "Describe the distribution of earthquakes and volcanic eruptions around the world. [4 marks]",
    marks: 4,
    commandWord: "Describe",
    grade: "9",
    steps: [
      { label: "Main pattern", text: "Earthquakes and volcanic eruptions are found along plate boundaries, forming a distinct global pattern. The majority occur around the Pacific Ring of Fire, which stretches from New Zealand through Japan, across the Aleutian Islands and down the west coast of the Americas.", colour: "blue" },
      { label: "Supporting data", text: "Around 75% of the world\u2019s active volcanoes and 90% of earthquakes occur along the Ring of Fire. There is also a significant concentration along the mid-Atlantic ridge, where the Eurasian and North American plates diverge.", colour: "purple" },
      { label: "Anomalies", text: "However, some earthquakes occur away from plate boundaries \u2014 for example, the 1811 New Madrid earthquakes in central USA were caused by an intraplate fault. Hawaii\u2019s volcanoes are also located over a hotspot rather than a plate boundary.", colour: "orange" },
      { label: "Terminology", text: "The distribution is concentrated at convergent boundaries (e.g., the Andes), divergent boundaries (e.g., Iceland), and conservative boundaries (e.g., the San Andreas Fault in California).", colour: "teal" },
    ],
    examinerNotes: [
      "Full marks: identifies clear global pattern with named plate boundaries",
      "Uses specific data (75%, 90%) from the resource to support description",
      "Notes anomalies/exceptions \u2014 shows Level 2 depth",
      "Geographical terminology used precisely throughout",
    ],
  },
  {
    id: "nh-evaluate-tropical-storms",
    topicSlug: "natural-hazards",
    question: "\u2018The effects of tropical storms are worse in lower income countries.\u2019 To what extent do you agree with this statement? [9 marks + 3 SPaG]",
    marks: 9,
    commandWord: "Evaluate",
    grade: "9",
    steps: [
      { label: "Introduction", text: "Tropical storms affect both lower income countries (LICs) and higher income countries (HICs), but the severity of their effects often depends on a country\u2019s level of development, governance, and disaster preparedness rather than the physical strength of the storm alone.", colour: "teal" },
      { label: "FOR argument", text: "To a large extent, LICs suffer worse effects. Typhoon Haiyan (2013) struck the Philippines, killing over 6,000 people and displacing 4 million. Many homes were constructed from lightweight materials that could not withstand 315 km/h winds. Limited warning systems meant many coastal communities had no time to evacuate. The Philippines\u2019 GDP per capita of $2,800 meant recovery was slow \u2014 two years later, thousands still lived in temporary shelters.", colour: "purple" },
      { label: "AGAINST argument", text: "However, HICs are not immune to devastating effects. Hurricane Katrina (2005) killed 1,800 people in the USA, the world\u2019s richest country. The $125 billion in damages showed that wealth alone does not prevent destruction. The failure of the New Orleans levee system and the slow federal response demonstrated that governance and infrastructure failures can amplify the effects of tropical storms in any country.", colour: "orange" },
      { label: "Additional perspective", text: "Furthermore, the increasing frequency and intensity of tropical storms due to climate change may narrow the gap. HIC coastal cities like Miami and Houston face growing flood risk, while international aid and improved early warning systems (e.g., the Indian Ocean Tsunami Warning System established after 2004) are gradually improving LIC resilience.", colour: "blue" },
      { label: "Conclusion", text: "Overall, I agree to a large extent that LICs suffer worse effects, primarily because of poverty, poor infrastructure, and limited governance. However, the statement oversimplifies the issue \u2014 governance quality, warning systems, and individual storm characteristics also play crucial roles. The key factor is not simply wealth, but how effectively a country can prepare for, respond to, and recover from these events.", colour: "green" },
    ],
    examinerNotes: [
      "Level 3 (7\u20139 marks): thorough, balanced evaluation with supported conclusion",
      "Two contrasting case studies with specific facts and figures",
      "Clear chains of reasoning throughout (because \u2192 this means \u2192 therefore)",
      "Conclusion makes a nuanced judgement rather than simply agreeing or disagreeing",
      "SPaG: specialist terminology used accurately, well-structured paragraphs",
    ],
  },

  // ─── Rivers ───
  {
    id: "rivers-explain-valley",
    topicSlug: "rivers",
    question: "Explain how the shape of a river valley changes between the upper course and the lower course. [6 marks]",
    marks: 6,
    commandWord: "Explain",
    grade: "9",
    steps: [
      { label: "Point 1", text: "In the upper course, the river has a steep gradient and high potential energy, so vertical erosion dominates. The river cuts downwards through the bedrock using hydraulic action and abrasion, creating a narrow V-shaped valley with interlocking spurs.", colour: "purple" },
      { label: "Evidence", text: "As the river moves to the middle course, it gains more water from tributaries, increasing its discharge. The channel becomes wider and deeper, and lateral (sideways) erosion becomes more important. This creates a wider valley with a developing floodplain.", colour: "blue" },
      { label: "Explanation", text: "In the lower course, the river has maximum discharge and very low gradient. Lateral erosion is dominant, and the river meanders across a wide, flat floodplain. Deposition of alluvium during floods further widens the valley floor. Because the river has less energy to erode vertically, the valley becomes broad and flat.", colour: "orange" },
      { label: "Link", text: "Therefore, the change from a V-shaped to a wide, flat valley is caused by the shift from vertical to lateral erosion as gradient decreases and discharge increases downstream \u2014 this is known as the Bradshaw model.", colour: "teal" },
    ],
    examinerNotes: [
      "Level 2 (4\u20136 marks): clear explanation with linked chains of reasoning",
      "Uses geographical terminology precisely (hydraulic action, abrasion, alluvium)",
      "Shows understanding of cause and effect at each stage",
      "Links back to the question with the Bradshaw model reference",
    ],
  },
  {
    id: "rivers-evaluate-flooding",
    topicSlug: "rivers",
    question: "\u2018Hard engineering is the most effective way to manage the risk of flooding.\u2019 To what extent do you agree? [9 marks + 3 SPaG]",
    marks: 9,
    commandWord: "Evaluate",
    grade: "9",
    steps: [
      { label: "Introduction", text: "Flood management strategies can be divided into hard engineering (physical structures) and soft engineering (working with natural processes). While hard engineering can provide immediate protection, its long-term effectiveness and sustainability are debatable.", colour: "teal" },
      { label: "FOR argument", text: "Hard engineering such as flood walls and embankments can be highly effective. The Thames Barrier, completed in 1984 for \u00A3534 million, has been raised over 200 times to protect central London from tidal flooding. This demonstrates that large-scale hard engineering can protect major urban areas and the economic assets within them. Similarly, dams such as the Aswan Dam in Egypt regulate discharge and have virtually eliminated flooding in the lower Nile valley.", colour: "purple" },
      { label: "AGAINST argument", text: "However, hard engineering has significant drawbacks. It is extremely expensive \u2014 the Boscastle flood defences cost \u00A34.6 million for a small village. Hard structures can also transfer the problem downstream; straightening the River Mississippi with levees contributed to devastating flooding in New Orleans during Hurricane Katrina, as water was channelled faster downstream. Environmentally, concrete channels destroy habitats and prevent natural floodplain storage.", colour: "orange" },
      { label: "Additional perspective", text: "Soft engineering approaches are increasingly favoured. In Pickering, North Yorkshire, a \u00A32 million scheme using leaky dams, tree planting, and bunds reduced flood peaks by 15\u201320%. These are cheaper, more sustainable, and provide additional benefits such as improved biodiversity and water quality. Managed flood storage areas, such as the Jubilee River near the Thames, combine both approaches effectively.", colour: "blue" },
      { label: "Conclusion", text: "In conclusion, I disagree that hard engineering is the most effective approach on its own. While it is essential for protecting high-value urban areas, the most effective flood management uses an integrated approach combining hard and soft engineering. The Pickering example shows that working with natural processes can be just as effective at a fraction of the cost, while avoiding the environmental damage caused by purely hard engineering solutions.", colour: "green" },
    ],
    examinerNotes: [
      "Level 3 (7\u20139 marks): detailed, balanced evaluation with clear judgement",
      "Multiple named examples with specific costs and statistics",
      "Evaluates strengths AND weaknesses of both approaches",
      "Conclusion directly answers \u2018to what extent\u2019 with a nuanced position",
    ],
  },

  // ─── Coasts ───
  {
    id: "coasts-describe-spit",
    topicSlug: "coasts",
    question: "Describe the formation of a spit. [4 marks]",
    marks: 4,
    commandWord: "Describe",
    grade: "9",
    steps: [
      { label: "Process begins", text: "A spit forms where the coastline changes direction, such as at the mouth of a river or estuary. Longshore drift transports sediment (sand and shingle) along the beach in the direction of the prevailing wind.", colour: "blue" },
      { label: "Growth", text: "When the coastline changes direction, longshore drift continues to deposit sediment into the open water beyond the change in coastline. Over time, this builds up a narrow ridge of sand and shingle extending out from the coast.", colour: "purple" },
      { label: "Curved end", text: "The tip of the spit is often curved (recurved) because secondary winds or wave refraction push sediment inward. Multiple recurved ends can form, showing changes in wind direction over time.", colour: "orange" },
      { label: "Sheltered area", text: "Behind the spit, the sheltered low-energy environment allows mud and silt to accumulate, often forming a salt marsh. An example is Spurn Point on the Humber Estuary, which extends 5.5 km into the North Sea.", colour: "teal" },
    ],
    examinerNotes: [
      "Full marks: clear sequence of formation with correct geographical processes",
      "Uses specialist terminology (longshore drift, recurved, wave refraction)",
      "Named example with specific detail adds depth",
      "Describes the associated landform (salt marsh) behind the spit",
    ],
  },
  {
    id: "coasts-evaluate-managed-retreat",
    topicSlug: "coasts",
    question: "\u2018Managed retreat is the most sustainable approach to coastal management.\u2019 To what extent do you agree? [9 marks + 3 SPaG]",
    marks: 9,
    commandWord: "Evaluate",
    grade: "9",
    steps: [
      { label: "Introduction", text: "Managed retreat (also called managed realignment) involves allowing the sea to flood areas that were previously protected, rather than building or maintaining defences. While this is environmentally sustainable, it raises significant social and economic concerns.", colour: "teal" },
      { label: "FOR argument", text: "Managed retreat can be highly sustainable. At Medmerry in West Sussex, the Environment Agency spent \u00A328 million creating a managed realignment scheme in 2013, allowing the sea to flood 348 hectares of farmland. This created new salt marsh habitat, provided natural flood defence for 348 properties in Selsey, and is expected to save \u00A3300,000 per year in maintenance costs compared to the previous sea wall. The new wetland also stores carbon and supports biodiversity.", colour: "purple" },
      { label: "AGAINST argument", text: "However, managed retreat is socially devastating for affected communities. In Happisburgh, Norfolk, homeowners have lost properties worth hundreds of thousands of pounds as the government decided not to defend the eroding coastline. Unlike compulsory purchase for road building, there is no automatic compensation for coastal erosion, creating a \u2018postcode lottery\u2019 of protection. Communities lose not just homes but schools, businesses, and cultural heritage.", colour: "orange" },
      { label: "Additional perspective", text: "Alternative approaches may be more appropriate in certain contexts. At Holderness, the UK\u2019s fastest-eroding coastline (losing 2 metres per year on average), a combination of groynes, rock armour, and sea walls protects the economically important town of Hornsea while allowing less-populated stretches to erode naturally. This integrated coastal zone management (ICZM) approach balances economic, social, and environmental factors.", colour: "blue" },
      { label: "Conclusion", text: "Overall, I agree that managed retreat is the most environmentally sustainable approach, as it works with natural processes rather than against them. However, it cannot be the only approach \u2014 protecting high-value urban areas with hard engineering remains essential. The most sustainable strategy overall is ICZM, which uses managed retreat where appropriate, hard defences where the cost-benefit analysis justifies them, and soft engineering to reduce environmental impact.", colour: "green" },
    ],
    examinerNotes: [
      "Level 3 (7\u20139 marks): thorough evaluation with multiple named examples",
      "Considers social, economic, and environmental perspectives",
      "Uses specific data (\u00A328 million, 348 hectares, \u00A3300,000/year savings)",
      "Conclusion introduces ICZM as a nuanced, holistic answer",
    ],
  },

  // ─── Urban Issues ───
  {
    id: "urban-explain-challenges",
    topicSlug: "urban-issues",
    question: "Explain the social and economic challenges caused by rapid urbanisation in LICs or NEEs. [6 marks]",
    marks: 6,
    commandWord: "Explain",
    grade: "9",
    steps: [
      { label: "Point 1", text: "Rapid urbanisation in LICs and NEEs creates severe housing challenges. In Lagos, Nigeria \u2014 growing by 77 people per hour \u2014 over 60% of the population lives in slums such as Makoko, a floating shanty town on Lagos Lagoon. Because the city cannot build formal housing fast enough, informal settlements grow without clean water, sewage systems, or electricity.", colour: "purple" },
      { label: "Evidence", text: "This leads to significant health problems. In Makoko, waterborne diseases such as cholera and typhoid are common because sewage flows directly into the lagoon, which is also the community\u2019s water source. Life expectancy in Lagos slums is 15 years lower than in the city\u2019s wealthier areas.", colour: "blue" },
      { label: "Explanation", text: "Economically, rapid urbanisation causes both opportunities and challenges. While Lagos contributes 25% of Nigeria\u2019s GDP, the informal economy dominates \u2014 over 50% of workers lack formal employment, meaning no minimum wage, contracts, or job security. Traffic congestion costs the city an estimated $8 billion annually in lost productivity, as a typical commute takes 3\u20134 hours.", colour: "orange" },
      { label: "Link", text: "Therefore, rapid urbanisation creates a cycle where the economic opportunities that attract rural migrants are undermined by the social and infrastructure challenges caused by that same growth, making sustainable development extremely difficult without major investment.", colour: "teal" },
    ],
    examinerNotes: [
      "Level 2 (4\u20136 marks): detailed explanation with specific named example",
      "Case study used throughout with precise statistics",
      "Clear chains of reasoning showing cause and effect",
      "Addresses both social AND economic challenges as required",
    ],
  },
  {
    id: "urban-evaluate-regeneration",
    topicSlug: "urban-issues",
    question: "Using a named example, evaluate the effectiveness of an urban regeneration project in the UK. [9 marks + 3 SPaG]",
    marks: 9,
    commandWord: "Evaluate",
    grade: "9",
    steps: [
      { label: "Introduction", text: "Urban regeneration aims to reverse urban decline by improving the physical, social, and economic conditions of an area. The London Docklands regeneration, centred on Canary Wharf, is one of the UK\u2019s largest and most significant regeneration projects.", colour: "teal" },
      { label: "Economic success", text: "The London Docklands Development Corporation (LDDC), established in 1981, transformed 8.5 square miles of derelict dockland into a major financial centre. By 2020, Canary Wharf employed over 120,000 people in major banks including HSBC, Barclays, and JP Morgan. The Jubilee Line extension (\u00A33.5 billion) connected the area to central London. Property values increased from \u00A370 per square foot in 1981 to over \u00A31,600 per square foot by 2019, generating significant tax revenue.", colour: "purple" },
      { label: "Social concerns", text: "However, the regeneration has been criticised for failing the original community. The new jobs were primarily in finance, requiring qualifications that former dock workers did not have \u2014 local unemployment remained at 13% even as Canary Wharf boomed. The dramatic rise in property prices displaced working-class residents through gentrification. Social housing decreased from 90% to 30% of the housing stock, and the character of the community was fundamentally changed.", colour: "orange" },
      { label: "Environmental view", text: "Environmentally, the regeneration had mixed results. The LDDC cleaned up polluted waterways and created 17 hectares of open space, including ecological parks. However, the car-dependent design initially led to increased congestion and air pollution, though this has been partly addressed by the DLR and Jubilee Line. The concrete-dominated landscape lacks green infrastructure compared to more recent regeneration projects like the Olympic Park in Stratford.", colour: "blue" },
      { label: "Conclusion", text: "In conclusion, the Docklands regeneration was economically transformative but socially divisive. While it successfully created a world-class financial centre and generated billions in economic activity, it failed to include the existing community in its benefits. More recent UK regeneration projects, such as Salford Quays in Manchester, have learned from this by prioritising affordable housing and local employment alongside economic growth. The most effective regeneration must balance economic development with social inclusion.", colour: "green" },
    ],
    examinerNotes: [
      "Level 3 (7\u20139 marks): comprehensive evaluation covering economic, social, and environmental",
      "Single named example used in great depth with precise statistics",
      "Shows awareness of limitations and compares with other examples",
      "Conclusion evaluates \u2018effectiveness\u2019 with a clear, balanced judgement",
    ],
  },
];

// ─── Helpers ───

export function getGeoModelAnswers(): GeoModelAnswer[] {
  return GEO_MODEL_ANSWERS;
}

export function getGeoModelAnswerById(id: string): GeoModelAnswer | undefined {
  return GEO_MODEL_ANSWERS.find((ma) => ma.id === id);
}

export function getGeoModelAnswersByTopic(topicSlug: string): GeoModelAnswer[] {
  return GEO_MODEL_ANSWERS.filter((ma) => ma.topicSlug === topicSlug);
}
