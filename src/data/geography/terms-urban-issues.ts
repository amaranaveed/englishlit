import type { GeographyTerm, CaseStudy } from "./types";

export const URBAN_ISSUES_TERMS: GeographyTerm[] = [
  // ─── Key Terms ───
  { id: "geo-urban-urbanisation", word: "Urbanisation", def: "The increase in the proportion of people living in towns and cities.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-megacity", word: "Megacity", def: "A city with a population of over 10 million people.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-rural-urban-migration", word: "Rural-urban migration", def: "The movement of people from the countryside to cities, often in search of jobs and better services.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-natural-increase", word: "Natural increase", def: "When the birth rate exceeds the death rate, causing population growth.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-push-factors", word: "Push factors", def: "Reasons why people leave an area, e.g. poverty, lack of jobs, natural disasters, poor healthcare.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-pull-factors", word: "Pull factors", def: "Reasons why people move to an area, e.g. better jobs, education, healthcare, higher wages.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-squatter-settlement", word: "Squatter settlement", def: "An area of housing (often illegal) built on land the residents do not own, typically with poor conditions.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-informal-economy", word: "Informal economy", def: "Work that is not officially registered or taxed, e.g. street selling, waste picking. Common in LICs.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-cbd", word: "CBD (Central Business District)", def: "The commercial centre of a city with the highest land values, tallest buildings, and most shops and offices.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-inner-city", word: "Inner city", def: "The area surrounding the CBD, often characterised by older housing, industry, and deprivation.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-suburbs", word: "Suburbs", def: "Residential areas on the outskirts of a city, typically with semi-detached and detached housing.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-rural-urban-fringe", word: "Rural-urban fringe", def: "The boundary zone where the city meets the countryside, often under pressure from urban sprawl.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-urban-sprawl", word: "Urban sprawl", def: "The unplanned, outward spread of a city into surrounding rural areas.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-brownfield-site", word: "Brownfield site", def: "Previously developed land (e.g. old factories) that can be cleared and reused for new development.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-greenfield-site", word: "Greenfield site", def: "Land that has not been built on before, usually on the rural-urban fringe.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-regeneration", word: "Urban regeneration", def: "The improvement of an urban area through investment, new buildings, better services, and job creation.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-gentrification", word: "Gentrification", def: "The process where wealthier people move into a poorer area, raising house prices and changing the character.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-deprivation", word: "Deprivation", def: "A lack of access to basic needs and services such as housing, education, income, and healthcare.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-sustainability", word: "Sustainable urban living", def: "Managing a city so that it meets the needs of people today without damaging the environment for future generations.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-green-space", word: "Green space", def: "Parks, gardens, and natural areas within cities that improve quality of life and reduce pollution.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-traffic-congestion", word: "Traffic congestion", def: "Overcrowding of roads with vehicles, causing delays, pollution, and economic costs.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-counter-urbanisation", word: "Counter-urbanisation", def: "The movement of people from cities to rural areas, often enabled by improved transport and remote working.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-de-industrialisation", word: "De-industrialisation", def: "The decline of manufacturing industry in an area, leading to job losses and economic decline.", topicSlug: "urban-issues", category: "key-term" },
  { id: "geo-urban-social-inequality", word: "Social inequality", def: "The unequal distribution of resources, opportunities, and wealth within a city or society.", topicSlug: "urban-issues", category: "key-term" },
];

export const URBAN_ISSUES_CASE_STUDIES: CaseStudy[] = [
  {
    id: "geo-urban-cs-rio",
    topicSlug: "urban-issues",
    name: "Rio de Janeiro Urban Growth",
    location: "Rio de Janeiro, Brazil (NEE)",
    facts: [
      "Population of over 13 million in the metropolitan area",
      "Around 22% of the population live in favelas (squatter settlements)",
      "Hosted the 2016 Olympics and 2014 World Cup",
    ],
    causes: [
      "Rapid rural-urban migration from the dry north-east seeking jobs",
      "Natural increase due to high birth rates",
      "Economic opportunities in industry, tourism, and services",
    ],
    effects: [
      "Growth of favelas like Rocinha (over 70,000 residents) on steep hillsides",
      "Poor sanitation, lack of clean water, and overcrowding in favelas",
      "Crime and drug trafficking in some areas",
      "Traffic congestion and air pollution from rapid car ownership growth",
      "Environmental damage: deforestation, sewage polluting Guanabara Bay",
    ],
    responses: [
      "Favela Bairro Project: improved water, sewage, roads, and community centres in 253 favelas",
      "UPP (Pacifying Police Units) aimed to reduce gang control in favelas",
      "Self-help schemes: residents given building materials to improve homes",
      "New bus rapid transit (BRT) system to reduce congestion",
      "Cable cars and funiculars built to connect hillside favelas to the city",
    ],
  },
  {
    id: "geo-urban-cs-london",
    topicSlug: "urban-issues",
    name: "London Urban Regeneration",
    location: "London, UK (HIC)",
    facts: [
      "Population of over 9 million — the largest city in the UK",
      "One of the world's leading financial centres",
      "Huge wealth inequality between boroughs",
    ],
    causes: [
      "International migration and natural increase driving population growth",
      "De-industrialisation of East London (closure of docks in the 1960s-80s)",
      "Need to regenerate deprived inner-city areas",
    ],
    effects: [
      "Housing crisis: average house price over 14x average salary",
      "Congestion: average speed in central London is under 10 mph",
      "Social inequality between wealthy west and deprived east",
      "Pressure on green belt land from urban sprawl",
      "Air quality issues — exceeding legal limits on pollution",
    ],
    responses: [
      "London Docklands regeneration (1980s-present): Canary Wharf transformed from derelict docks",
      "2012 Olympic Park regeneration of Stratford, East London",
      "Congestion charge zone to reduce traffic in central London",
      "Crossrail (Elizabeth Line) to improve east-west transport links",
      "Ultra Low Emission Zone (ULEZ) to improve air quality",
    ],
  },
];
