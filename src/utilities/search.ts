export interface SearchItem {
  title: string;
  href: string;
  type: string;
  text: string;
}

export interface RankedSearchItem extends SearchItem {
  score: number;
}

export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function searchLocal(
  items: SearchItem[],
  query: string,
  synonyms: Record<string, string[]> = {},
  limit = 40
): RankedSearchItem[] {
  const normalizedQuery = normalizeSearch(query);
  if (normalizedQuery.length < 2) return [];
  const terms = [
    normalizedQuery,
    ...(synonyms[normalizedQuery] ?? []).map(normalizeSearch)
  ];

  return items
    .map((item) => {
      const title = normalizeSearch(item.title);
      const haystack = normalizeSearch(`${item.title} ${item.text}`);
      const score = terms.reduce(
        (total, term) => total + (haystack.includes(term) ? (title.includes(term) ? 5 : 1) : 0),
        0
      );
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}

