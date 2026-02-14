"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearch } from "./useSearch";
import SearchHighlight from "./SearchHighlight";
import type { SearchCategory } from "@/data/search-index";

const CATEGORY_STYLE: Record<SearchCategory, { icon: string; bg: string; text: string }> = {
  text:      { icon: "T",  bg: "bg-purple/10", text: "text-purple" },
  quote:     { icon: "Q",  bg: "bg-teal/10",   text: "text-teal" },
  character: { icon: "C",  bg: "bg-orange/10",  text: "text-orange" },
  theme:     { icon: "Th", bg: "bg-blue/10",    text: "text-blue" },
  vocab:     { icon: "V",  bg: "bg-pink/10",    text: "text-pink" },
};

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const {
    query, updateQuery, grouped, flatItems,
    activeIndex, setActiveIndex, totalResults, hasResults, isSearching,
  } = useSearch();

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      updateQuery("");
    }
  }, [open, updateQuery]);

  // Body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const navigateTo = useCallback((href: string) => {
    onClose();
    router.push(href);
  }, [onClose, router]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev: number) => Math.min(prev + 1, flatItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev: number) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0 && activeIndex < flatItems.length) {
      e.preventDefault();
      navigateTo(flatItems[activeIndex].href);
    }
  }, [activeIndex, setActiveIndex, flatItems, navigateTo]);

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex < 0) return;
    const el = listRef.current?.querySelector(`[data-search-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  let flatIdx = 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] sm:pt-[12vh] px-4">
        <div
          className="w-full max-w-xl bg-bg border border-border rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] animate-scale-in overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Search revision content"
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border-subtle">
            <svg className="w-5 h-5 text-grey shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search texts, quotes, characters, themes, vocab…"
              className="flex-1 bg-transparent text-[15px] font-ui text-text placeholder:text-grey/50 outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-surface text-[11px] font-ui font-medium text-grey border border-border-subtle">
              Esc
            </kbd>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-[50vh] overflow-y-auto overscroll-contain">
            {/* Empty state */}
            {!isSearching && (
              <div className="px-5 py-10 text-center">
                <svg className="w-10 h-10 text-grey/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p className="text-[14px] font-ui text-grey">
                  Type at least 2 characters to search across all revision content
                </p>
              </div>
            )}

            {/* No results */}
            {isSearching && !hasResults && (
              <div className="px-5 py-10 text-center">
                <p className="text-[15px] font-ui font-medium text-text mb-1">No results found</p>
                <p className="text-[13px] font-ui text-grey">
                  Try a different spelling or search for a text, quote, character, theme, or vocab word
                </p>
              </div>
            )}

            {/* Grouped results */}
            {grouped.map((group) => (
              <div key={group.category}>
                <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-[12px] font-ui font-semibold tracking-wider uppercase text-grey">
                    {group.label}
                  </span>
                  <span className="text-[11px] font-ui text-grey/60">
                    {group.totalCount} result{group.totalCount !== 1 ? "s" : ""}
                  </span>
                </div>

                {group.items.map((item) => {
                  const idx = flatIdx++;
                  const style = CATEGORY_STYLE[item.category];
                  const isActive = idx === activeIndex;

                  return (
                    <Link
                      key={`${item.category}-${item.href}-${idx}`}
                      href={item.href}
                      data-search-index={idx}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-5 py-2.5 transition-colors duration-100 ${
                        isActive ? "bg-purple-light" : "hover:bg-surface-hover"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg ${style.bg} ${style.text} font-display font-bold text-[11px] flex items-center justify-center shrink-0`}>
                        {style.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-[14px] font-ui font-medium truncate ${isActive ? "text-purple" : "text-text"}`}>
                          <SearchHighlight text={item.title} query={query} />
                        </p>
                        <p className="text-[12px] font-ui text-grey truncate">
                          {item.subtitle}
                        </p>
                      </div>
                      {isActive && (
                        <svg className="w-4 h-4 text-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer */}
          {isSearching && hasResults && (
            <div className="px-5 py-3 border-t border-border-subtle bg-surface/50 flex items-center justify-between">
              <span className="text-[12px] font-ui text-grey">
                {totalResults} result{totalResults !== 1 ? "s" : ""}
              </span>
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-ui text-grey">
                <kbd className="inline-flex items-center px-1.5 py-0.5 rounded bg-bg border border-border-subtle font-medium">↑↓</kbd>
                <span>navigate</span>
                <kbd className="inline-flex items-center px-1.5 py-0.5 rounded bg-bg border border-border-subtle font-medium ml-2">↵</kbd>
                <span>open</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
