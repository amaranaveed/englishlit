import type { GeographyTerm, CaseStudy } from "./types";

export const COAST_TERMS: GeographyTerm[] = [
  // ─── Key Terms ───
  { id: "geo-coasts-coastline", word: "Coastline", def: "The boundary between the land and the sea.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-wave", word: "Wave", def: "A ripple of energy passing through water, caused by wind blowing over the sea surface.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-fetch", word: "Fetch", def: "The distance of open water over which the wind blows to create waves. Longer fetch = bigger waves.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-constructive-wave", word: "Constructive wave", def: "A low, long wave with a strong swash and weak backwash that builds up the beach by depositing material.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-destructive-wave", word: "Destructive wave", def: "A tall, steep wave with a strong backwash that removes material from the beach through erosion.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-swash", word: "Swash", def: "The forward movement of a wave up the beach.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-backwash", word: "Backwash", def: "The backward movement of water down the beach back towards the sea.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-headland", word: "Headland", def: "A section of hard rock that juts out into the sea because it is more resistant to erosion.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-bay", word: "Bay", def: "An indent in the coastline formed where softer rock has been eroded more quickly than surrounding harder rock.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-cliff", word: "Cliff", def: "A steep, high rock face formed by wave erosion at the base undercutting the rock above.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-wave-cut-platform", word: "Wave-cut platform", def: "A flat area of rock at the base of a cliff, exposed at low tide, formed as the cliff retreats.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-wave-cut-notch", word: "Wave-cut notch", def: "An indent at the base of a cliff caused by wave erosion, which eventually causes the cliff to collapse.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-cave", word: "Cave", def: "A hollow at the base of a cliff formed when waves erode a weakness such as a crack or fault.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-arch", word: "Arch", def: "A bridge of rock formed when two caves on either side of a headland erode through and join up.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-stack", word: "Stack", def: "A pillar of rock left standing in the sea after the top of an arch collapses.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-stump", word: "Stump", def: "A short remaining piece of rock left after a stack is eroded and collapses.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-spit", word: "Spit", def: "A narrow finger of sand or shingle that extends from the coast, formed by longshore drift depositing material.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-bar", word: "Bar", def: "A ridge of sand or shingle that extends across a bay, sometimes trapping a lagoon behind it.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-tombolo", word: "Tombolo", def: "A spit that has grown to connect an island to the mainland.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-beach", word: "Beach", def: "An area of sand or shingle deposited by waves along the coast.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-sand-dunes", word: "Sand dunes", def: "Hills of sand formed by wind deposition along the coast, often stabilised by marram grass.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-concordant", word: "Concordant coastline", def: "A coastline where rock types run parallel to the sea, producing a smooth, straight coast.", topicSlug: "coasts", category: "key-term" },
  { id: "geo-coasts-discordant", word: "Discordant coastline", def: "A coastline where bands of different rock types run at right angles to the sea, creating headlands and bays.", topicSlug: "coasts", category: "key-term" },

  // ─── Processes ───
  { id: "geo-coasts-hydraulic-action", word: "Hydraulic action", def: "The force of waves compressing air into cracks in the rock, causing them to widen and the rock to break apart.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-abrasion", word: "Abrasion", def: "Waves hurl rocks and pebbles against the cliff face, wearing it away like sandpaper.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-attrition", word: "Attrition", def: "Rocks and pebbles carried by waves smash into each other, becoming smaller and rounder.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-solution", word: "Solution", def: "Slightly acidic seawater dissolves soluble rocks like chalk and limestone.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-longshore-drift", word: "Longshore drift", def: "The movement of sediment along a coast by waves approaching the beach at an angle. Swash carries material up the beach at an angle; backwash carries it straight back.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-weathering", word: "Weathering", def: "The breakdown of rock at the coast by physical (freeze-thaw), chemical (acid rain), or biological (plant roots) processes.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-mass-movement", word: "Mass movement", def: "The downhill movement of material under gravity at the coast, including rockfalls, landslides, and slumping.", topicSlug: "coasts", category: "process" },
  { id: "geo-coasts-deposition", word: "Deposition", def: "The dropping of material carried by waves when they lose energy, building up features like beaches and spits.", topicSlug: "coasts", category: "process" },
];

export const COAST_CASE_STUDIES: CaseStudy[] = [
  {
    id: "geo-coasts-cs-holderness",
    topicSlug: "coasts",
    name: "Holderness Coast Erosion",
    location: "Holderness, East Yorkshire, UK",
    facts: [
      "The fastest eroding coastline in Europe at 1-2 metres per year",
      "Made of soft boulder clay deposited by glaciers",
      "Since Roman times, over 30 villages have been lost to the sea",
    ],
    causes: [
      "Soft boulder clay is easily eroded by hydraulic action and abrasion",
      "Strong prevailing winds from the north-east create powerful destructive waves",
      "Long fetch across the North Sea gives waves more energy",
      "Narrow beaches at the cliff base provide little protection",
      "Longshore drift moves material south, starving beaches of sediment",
    ],
    effects: [
      "Loss of farmland, homes, and businesses — properties lose value",
      "Villages like Mappleton, Skipsea, and Withernsea are under threat",
      "Gas terminal at Easington is at risk",
      "Coastal footpaths and roads regularly collapse",
      "Material deposited at Spurn Head spit further south",
    ],
    responses: [
      "Rock armour (rip-rap) placed at Mappleton and other key locations",
      "Groynes built to trap sediment and build up beaches",
      "Sea walls at Withernsea and Hornsea",
      "Managed retreat at some locations — allowing the sea to erode naturally",
      "Debate over protecting some areas and not others (cost-benefit analysis)",
    ],
  },
];
