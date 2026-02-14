"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { getSearchIndex, type SearchItem, type SearchCategory } from "@/data/search-index";

const CATEGORY_ORDER: SearchCategory[] = ["text", "quote", "character", "theme", "vocab"];
const MAX_PER_CATEGORY = 4;
const DEBOUNCE_MS = 200;

export interface GroupedResults {
  category: SearchCategory;
  label: string;
  items: SearchItem[];
  totalCount: number;
}

const CATEGORY_LABELS: Record<SearchCategory, string> = {
  text: "Texts",
  quote: "Quotes",
  character: "Characters",
  theme: "Themes",
  vocab: "Vocabulary",
};

export function useSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateQuery = useCallback((value: string) => {
    setQuery(value);
    setActiveIndex(-1);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedQuery(value.trim());
    }, DEBOUNCE_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const grouped: GroupedResults[] = useMemo(() => {
    if (debouncedQuery.length < 2) return [];
    const words = debouncedQuery.toLowerCase().split(/\s+/).filter(Boolean);
    const index = getSearchIndex();

    const matches = index.filter((item) =>
      words.every((w) => item.searchText.includes(w))
    );

    return CATEGORY_ORDER
      .map((cat) => {
        const catMatches = matches.filter((m) => m.category === cat);
        return {
          category: cat,
          label: CATEGORY_LABELS[cat],
          items: catMatches.slice(0, MAX_PER_CATEGORY),
          totalCount: catMatches.length,
        };
      })
      .filter((g) => g.items.length > 0);
  }, [debouncedQuery]);

  const flatItems = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  const totalResults = useMemo(
    () => grouped.reduce((sum, g) => sum + g.totalCount, 0),
    [grouped]
  );

  return {
    query,
    updateQuery,
    grouped,
    flatItems,
    activeIndex,
    setActiveIndex,
    totalResults,
    hasResults: grouped.length > 0,
    isSearching: debouncedQuery.length >= 2,
  };
}
