"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_ITEMS = [
  { label: "Texts", href: "/texts" },
  { label: "AOs", href: "/aos" },
  { label: "Essay Structure", href: "/essay-structure" },
  { label: "Exam Practice", href: "/exam" },
  { label: "Flashcards", href: "/flashcards" },
  { label: "Vocab Quiz", href: "/vocab" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [flashcardsDue, setFlashcardsDue] = useState(0);

  // Read due flashcards count from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("flashcards");
      if (raw) {
        const cards = JSON.parse(raw) as { nextReview: string }[];
        const now = new Date().toISOString();
        setFlashcardsDue(cards.filter((c) => c.nextReview <= now).length);
      }
    } catch {
      // ignore
    }
  }, [pathname]); // re-check on every route change

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo + title */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-8 h-8 rounded-lg bg-teal text-white font-display font-bold text-[15px] flex items-center justify-center">
              L
            </span>
            <span className="hidden sm:flex items-baseline gap-1.5">
              <span className="font-display font-bold text-[15px] text-text">
                GCSE Literature
              </span>
              <span className="text-[12px] font-ui text-grey">
                AQA 8702
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 font-ui text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-teal font-semibold bg-teal-light"
                    : "text-grey hover:text-text hover:bg-surface-hover"
                }`}
              >
                {item.label}
                {item.label === "Flashcards" && flashcardsDue > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-orange text-white text-[11px] font-semibold flex items-center justify-center">
                    {flashcardsDue}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-1">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md text-grey hover:text-text hover:bg-surface-hover transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-surface font-ui text-sm pb-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-2.5 transition-colors ${
                isActive(item.href)
                  ? "text-teal font-semibold bg-teal-light"
                  : "text-grey hover:text-text hover:bg-surface-hover"
              }`}
            >
              {item.label}
              {item.label === "Flashcards" && flashcardsDue > 0 && (
                <span className="ml-2 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-orange text-white text-[11px] font-semibold">
                  {flashcardsDue}
                </span>
              )}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
