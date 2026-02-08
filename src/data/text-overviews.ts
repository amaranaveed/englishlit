// ─── Text overview metadata: themes, characters, context ───

export interface TextOverview {
  slug: string;
  themes: string[];
  characters: { name: string; role: string }[];
  contextSummary: string;
}

export const TEXT_OVERVIEWS: TextOverview[] = [
  {
    slug: "much-ado",
    themes: [
      "Deception & Appearance vs Reality",
      "Honour & Shame",
      "Gender & Power",
      "Love (Conventional vs Unconventional)",
      "Language & Wit",
      "Loyalty & Friendship",
      "Patriarchal Control",
    ],
    characters: [
      { name: "Beatrice", role: "Witty, independent niece of Leonato; rejects courtship conventions" },
      { name: "Benedick", role: "Proud soldier who mirrors Beatrice's resistance to love" },
      { name: "Hero", role: "Leonato's obedient daughter; embodies the ideal Elizabethan woman" },
      { name: "Claudio", role: "Young soldier; honourable but easily manipulated" },
      { name: "Don Pedro", role: "Prince of Aragon; orchestrates the gulling scenes" },
      { name: "Don John", role: "Illegitimate brother; the malcontent antagonist" },
      { name: "Leonato", role: "Governor of Messina; Hero's father, upholds patriarchal honour" },
      { name: "Dogberry", role: "Comically inept constable; uncovers the villainy" },
    ],
    contextSummary:
      "Set in Messina after a military campaign, the play explores Elizabethan anxieties about female virtue, patriarchal honour codes, and the tension between public reputation and private feeling. Shakespeare wrote it c.1598–99 during a period of comedic experimentation, drawing on Italian sources while interrogating gender norms of his own society.",
  },
  {
    slug: "pride-prejudice",
    themes: [
      "Pride & Prejudice (Self-Knowledge)",
      "Class & Social Mobility",
      "Marriage & Economics",
      "Gender & Female Agency",
      "Appearance vs Reality",
      "Moral Growth",
      "Family & Reputation",
    ],
    characters: [
      { name: "Elizabeth Bennet", role: "Quick-witted protagonist; challenges class and gender conventions" },
      { name: "Mr Darcy", role: "Proud, wealthy gentleman who must overcome social prejudice" },
      { name: "Jane Bennet", role: "Elizabeth's kind eldest sister; represents conventional feminine virtue" },
      { name: "Mr Bingley", role: "Amiable, wealthy bachelor; contrasts Darcy's reserve" },
      { name: "Mrs Bennet", role: "Comic matriarch obsessed with marrying off her daughters" },
      { name: "Mr Bennet", role: "Sardonic, detached father; retreats into irony" },
      { name: "Mr Collins", role: "Obsequious clergyman; embodies transactional marriage" },
      { name: "Lady Catherine de Bourgh", role: "Darcy's imperious aunt; enforces rigid class hierarchy" },
      { name: "Wickham", role: "Charming but deceitful; represents appearance vs reality" },
      { name: "Lydia Bennet", role: "Reckless youngest sister; brings family disgrace" },
    ],
    contextSummary:
      "Published in 1813 during the Regency period, the novel critiques the marriage market, entailment laws that excluded women from inheriting property, and the rigid class stratification of early 19th-century England. Austen uses free indirect discourse and irony to expose the gap between social performance and inner truth.",
  },
];

export function getTextOverview(slug: string): TextOverview | undefined {
  return TEXT_OVERVIEWS.find((t) => t.slug === slug);
}
