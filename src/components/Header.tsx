"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { TEXT_REGISTRY, TEXT_ICONS } from "@/data/text-registry";
import SearchModal from "./SearchModal";
import OnboardingModal from "./OnboardingModal";
import { useAuth } from "@/components/AuthProvider";
import { useStorage } from "@/hooks/useStorage";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

const GROUP_ICONS: Record<string, string> = {
  Shakespeare: "S",
  "19th Century Novel": "19",
  "Modern Text": "M",
  "Poetry Anthology": "P",
  "Unseen Poetry": "U",
};

const GROUP_COLOURS: Record<string, { bg: string; text: string }> = {
  Shakespeare: { bg: "bg-purple/10", text: "text-purple" },
  "19th Century Novel": { bg: "bg-blue/10", text: "text-blue" },
  "Modern Text": { bg: "bg-teal/10", text: "text-teal" },
  "Poetry Anthology": { bg: "bg-orange/10", text: "text-orange" },
  "Unseen Poetry": { bg: "bg-pink/10", text: "text-pink" },
};

const NAV_ITEMS = [
  { label: "Texts", href: "/texts", hasDropdown: true },
  { label: "AOs", href: "/aos" },
  { label: "Essay Structure", href: "/essay-structure" },
  { label: "Exam Practice", href: "/exam" },
  { label: "Flashcards", href: "/flashcards" },
  { label: "Vocab Quiz", href: "/vocab" },
];

export default function Header() {
  const pathname = usePathname();
  const { user, loading: authLoading, profile } = useAuth();
  const { getDueCount } = useStorage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [flashcardsDue, setFlashcardsDue] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [textsOpen, setTextsOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [mobileTextsOpen, setMobileTextsOpen] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const textsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    getDueCount().then(setFlashcardsDue);
  }, [pathname, getDueCount]);

  async function handleSignIn() {
    const supabase = createClient();
    if (!supabase) return;
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  }

  async function handleSignOut() {
    const supabase = createClient();
    if (!supabase) return;
    await supabase.auth.signOut();
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Global Ctrl+K / Cmd+K to open search
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setTextsOpen(false);
    setExpandedGroup(null);
    setMobileOpen(false);
    setMobileTextsOpen(false);
    setMobileExpandedGroup(null);
    setSearchOpen(false);
  }, [pathname]);

  const openTexts = () => {
    if (textsTimeout.current) clearTimeout(textsTimeout.current);
    setTextsOpen(true);
  };
  const closeTexts = () => {
    textsTimeout.current = setTimeout(() => {
      setTextsOpen(false);
      setExpandedGroup(null);
    }, 200);
  };

  const isActive = (href: string) => pathname.startsWith(href);
  const isHome = pathname === "/";

  const activeGroups = TEXT_REGISTRY.filter(g =>
    g.texts.some(t => t.status === "active")
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? "bg-[var(--hero-bg)] border-b border-white/[0.06]"
          : scrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-border shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-surface/80 backdrop-blur-lg border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <span className={`w-9 h-9 rounded-xl font-display font-bold text-[16px] flex items-center justify-center transition-all duration-300 ${
              isHome && !scrolled
                ? "bg-white/20 text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                : "bg-purple text-white shadow-[0_2px_8px_rgba(140,84,244,0.3)]"
            } group-hover:scale-110`}>
              L
            </span>
            <span className="hidden sm:flex items-baseline gap-2">
              <span className={`font-display font-bold text-[16px] transition-colors duration-300 ${
                isHome && !scrolled ? "text-white" : "text-text"
              }`}>
                GCSE Literature
              </span>
              <span className={`text-[11px] font-ui font-semibold tracking-wider uppercase transition-colors duration-300 ${
                isHome && !scrolled ? "text-white/60" : "text-purple"
              }`}>
                AQA 8702
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 font-ui text-[14px] font-medium">
            {NAV_ITEMS.map((item) => (
              item.hasDropdown ? (
                /* ── Texts with two-level dropdown ─── */
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openTexts}
                  onMouseLeave={closeTexts}
                >
                  <Link
                    href={item.href}
                    className={`nav-link relative px-3.5 py-2 rounded-lg transition-all duration-200 inline-flex items-center gap-1 ${
                      isActive(item.href)
                        ? `nav-link-active font-semibold ${isHome && !scrolled ? "text-white" : "text-purple"}`
                        : `${isHome && !scrolled ? "text-white/75 hover:text-white" : "text-grey hover:text-text"}`
                    }`}
                  >
                    {item.label}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${textsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Link>

                  {/* Level 1: Genre groups */}
                  {textsOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="bg-bg border border-border rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] py-2 min-w-[240px] animate-slide-down">
                        {activeGroups.map((group) => {
                          const gc = GROUP_COLOURS[group.label] ?? { bg: "bg-purple/10", text: "text-purple" };
                          const icon = GROUP_ICONS[group.label] ?? "?";
                          const activeCount = group.texts.filter(t => t.status === "active").length;
                          const isExpanded = expandedGroup === group.label;

                          return (
                            <div key={group.label}>
                              <button
                                onClick={() => setExpandedGroup(isExpanded ? null : group.label)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 transition-all duration-150 hover:bg-surface-hover ${
                                  isExpanded ? "bg-surface-hover" : ""
                                }`}
                              >
                                <span className={`w-8 h-8 rounded-lg ${gc.bg} ${gc.text} font-display font-bold text-[12px] flex items-center justify-center shrink-0`}>
                                  {icon}
                                </span>
                                <div className="flex-1 text-left">
                                  <p className="text-[13px] font-semibold text-text">{group.label}</p>
                                  <p className="text-[11px] text-grey">{group.paper} {group.section} &middot; {activeCount} texts</p>
                                </div>
                                <svg className={`w-4 h-4 text-grey/40 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                              </button>

                              {/* Level 2: Individual texts */}
                              {isExpanded && (
                                <div className="border-t border-border-subtle bg-surface/50 py-1">
                                  {group.texts.filter(t => t.status === "active").map((t) => (
                                    <Link
                                      key={t.slug}
                                      href={`/texts/${t.slug}`}
                                      className={`flex items-center gap-2.5 px-5 pl-[52px] py-2 transition-all duration-150 ${
                                        pathname.startsWith(`/texts/${t.slug}`)
                                          ? "bg-purple-light text-purple font-semibold"
                                          : "text-text hover:bg-surface-hover"
                                      }`}
                                    >
                                      {TEXT_ICONS[t.slug] ? (
                                        <img src={TEXT_ICONS[t.slug]} alt="" className="w-5 h-5 rounded-full object-cover object-[center_30%] shrink-0" />
                                      ) : (
                                        <span className={`w-5 h-5 rounded ${gc.bg} ${gc.text} font-display font-bold text-[9px] flex items-center justify-center shrink-0`}>
                                          {t.title.charAt(0)}
                                        </span>
                                      )}
                                      <span className="text-[13px] truncate">{t.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {/* View all link */}
                        <div className="border-t border-border-subtle mt-1 pt-1 px-4 pb-1">
                          <Link href="/texts" className="flex items-center gap-2 px-0 py-2 text-[13px] font-semibold text-purple hover:text-purple-dark transition-colors">
                            View all texts
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* ── Regular nav link ─── */
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link relative px-3.5 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? `nav-link-active font-semibold ${isHome && !scrolled ? "text-white" : "text-purple"}`
                      : `${isHome && !scrolled ? "text-white/75 hover:text-white" : "text-grey hover:text-text"}`
                  }`}
                >
                  {item.label}
                  {item.label === "Flashcards" && flashcardsDue > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-orange text-[#1A1A2E] text-[10px] font-bold flex items-center justify-center shadow-[0_2px_6px_rgba(252,164,76,0.4)]">
                      {flashcardsDue}
                    </span>
                  )}
                </Link>
              )
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            {/* Search button */}
            <button
              onClick={() => { setSearchOpen(true); setMobileOpen(false); }}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isHome && !scrolled
                  ? "text-white/75 hover:text-white hover:bg-white/10"
                  : "text-grey hover:text-purple hover:bg-purple-light"
              }`}
              aria-label="Search (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Auth buttons */}
            {!authLoading && (
              user ? (
                <div className="hidden sm:flex items-center gap-1">
                  {/* Profile settings */}
                  {profile && (
                    <button
                      onClick={() => setProfileOpen(true)}
                      className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                        isHome && !scrolled
                          ? "text-white/75 hover:text-white hover:bg-white/10"
                          : "text-grey hover:text-purple hover:bg-purple-light"
                      }`}
                      title="Profile settings"
                    >
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  )}

                  {/* Sign out */}
                  <button
                    onClick={handleSignOut}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-ui text-sm transition-all duration-200 cursor-pointer ${
                      isHome && !scrolled
                        ? "text-white/75 hover:text-white hover:bg-white/10"
                        : "text-grey hover:text-text hover:bg-surface-hover"
                    }`}
                    title={user.email ?? "Sign out"}
                  >
                    {user.user_metadata?.avatar_url ? (
                      <img src={user.user_metadata.avatar_url} alt="" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="w-6 h-6 rounded-full bg-purple text-white text-[11px] font-bold flex items-center justify-center">
                        {(user.email?.[0] ?? "U").toUpperCase()}
                      </span>
                    )}
                    <span className="text-[13px]">Sign out</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-ui text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isHome && !scrolled
                      ? "bg-white/15 text-white hover:bg-white/25"
                      : "bg-purple text-white hover:bg-purple/90"
                  }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign in
                </button>
              )
            )}

            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
                isHome && !scrolled
                  ? "text-white/75 hover:text-white hover:bg-white/10"
                  : "text-grey hover:text-purple hover:bg-purple-light"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-surface/98 backdrop-blur-xl font-ui text-[15px] pb-3 animate-slide-down">
          {NAV_ITEMS.map((item) => (
            item.hasDropdown ? (
              <div key={item.href}>
                {/* Texts — toggles genre list */}
                <button
                  onClick={() => setMobileTextsOpen(!mobileTextsOpen)}
                  className={`w-full flex items-center justify-between px-6 py-3 transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-purple font-semibold bg-purple-light border-l-3 border-purple"
                      : "text-grey hover:text-text hover:bg-surface-hover"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${mobileTextsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Genre groups */}
                {mobileTextsOpen && (
                  <div className="bg-bg border-y border-border-subtle">
                    {activeGroups.map((group) => {
                      const gc = GROUP_COLOURS[group.label] ?? { bg: "bg-purple/10", text: "text-purple" };
                      const icon = GROUP_ICONS[group.label] ?? "?";
                      const activeCount = group.texts.filter(t => t.status === "active").length;
                      const isExpanded = mobileExpandedGroup === group.label;

                      return (
                        <div key={group.label}>
                          <button
                            onClick={() => setMobileExpandedGroup(isExpanded ? null : group.label)}
                            className={`w-full flex items-center gap-3 px-8 py-3 transition-colors ${
                              isExpanded ? "bg-surface-hover" : "hover:bg-surface-hover"
                            }`}
                          >
                            <span className={`w-7 h-7 rounded-lg ${gc.bg} ${gc.text} font-display font-bold text-[11px] flex items-center justify-center shrink-0`}>
                              {icon}
                            </span>
                            <div className="flex-1 text-left">
                              <p className="text-[14px] font-semibold text-text">{group.label}</p>
                              <p className="text-[11px] text-grey">{activeCount} texts</p>
                            </div>
                            <svg className={`w-4 h-4 text-grey/40 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </button>

                          {/* Individual texts */}
                          {isExpanded && (
                            <div className="bg-surface/50 border-t border-border-subtle py-1">
                              {group.texts.filter(t => t.status === "active").map((t) => (
                                <Link
                                  key={t.slug}
                                  href={`/texts/${t.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-2.5 px-8 pl-[72px] py-2.5 transition-colors ${
                                    pathname.startsWith(`/texts/${t.slug}`)
                                      ? "text-purple font-semibold bg-purple-light"
                                      : "text-text hover:bg-surface-hover"
                                  }`}
                                >
                                  {TEXT_ICONS[t.slug] ? (
                                    <img src={TEXT_ICONS[t.slug]} alt="" className="w-5 h-5 rounded-full object-cover object-[center_30%] shrink-0" />
                                  ) : (
                                    <span className={`w-5 h-5 rounded ${gc.bg} ${gc.text} font-display font-bold text-[9px] flex items-center justify-center shrink-0`}>
                                      {t.title.charAt(0)}
                                    </span>
                                  )}
                                  <span className="text-[14px]">{t.title}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    <Link
                      href="/texts"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-8 py-3 text-[13px] font-semibold text-purple hover:bg-surface-hover transition-colors border-t border-border-subtle"
                    >
                      View all texts
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-6 py-3 transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-purple font-semibold bg-purple-light border-l-3 border-purple"
                    : "text-grey hover:text-text hover:bg-surface-hover"
                }`}
              >
                <span>{item.label}</span>
                {item.label === "Flashcards" && flashcardsDue > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 rounded-full bg-orange text-[#1A1A2E] text-[11px] font-bold">
                    {flashcardsDue}
                  </span>
                )}
              </Link>
            )
          ))}

          {/* Mobile auth */}
          {!authLoading && (
            <div className="border-t border-border-subtle mt-1 pt-1 px-6 py-3">
              {user ? (
                <div className="space-y-2">
                  {/* Profile settings link */}
                  {profile && (
                    <button
                      onClick={() => { setProfileOpen(true); setMobileOpen(false); }}
                      className="w-full flex items-center gap-3 py-2 text-grey hover:text-text transition-colors"
                    >
                      <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[14px] font-semibold text-text">Profile settings</span>
                    </button>
                  )}

                  {/* Sign out */}
                  <button
                    onClick={() => { handleSignOut(); setMobileOpen(false); }}
                    className="w-full flex items-center gap-3 py-2 text-grey hover:text-text transition-colors"
                  >
                    {user.user_metadata?.avatar_url ? (
                      <img src={user.user_metadata.avatar_url} alt="" className="w-7 h-7 rounded-full" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="w-7 h-7 rounded-full bg-purple text-white text-[12px] font-bold flex items-center justify-center">
                        {(user.email?.[0] ?? "U").toUpperCase()}
                      </span>
                    )}
                    <div className="flex-1 text-left">
                      <p className="text-[14px] font-semibold text-text truncate">{user.user_metadata?.full_name ?? user.email}</p>
                      <p className="text-[11px] text-grey">Tap to sign out</p>
                    </div>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { handleSignIn(); setMobileOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-purple text-white font-ui text-[14px] font-semibold hover:bg-purple/90 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign in with Google
                </button>
              )}
            </div>
          )}
        </nav>
      )}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      {profileOpen && (
        <OnboardingModal editMode onClose={() => setProfileOpen(false)} />
      )}
    </header>
  );
}
