import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        {/* ── Top row: columns ─────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-[15px] text-text mb-2">
              Straight Nines
            </p>
            <p className="font-ui text-[13px] text-grey leading-relaxed">
              Free GCSE English Literature revision for AQA 8702. Quotes, essays, flashcards&nbsp;&amp;&nbsp;more.
            </p>
          </div>

          {/* Study */}
          <div>
            <p className="font-ui text-[13px] font-semibold text-text mb-3 uppercase tracking-wide">
              Study
            </p>
            <ul className="space-y-2">
              {[
                { href: "/texts", label: "Set Texts" },
                { href: "/aos", label: "Assessment Objectives" },
                { href: "/essay-structure", label: "Essay Structure" },
                { href: "/flashcards", label: "Flashcards" },
                { href: "/vocab", label: "Vocab Quiz" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-ui text-[13px] text-grey hover:text-purple transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-ui text-[13px] font-semibold text-text mb-3 uppercase tracking-wide">
              Legal
            </p>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/cookies", label: "Cookie Policy" },
                { href: "/accessibility", label: "Accessibility" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-ui text-[13px] text-grey hover:text-purple transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-ui text-[13px] font-semibold text-text mb-3 uppercase tracking-wide">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="font-ui text-[13px] text-grey hover:text-purple transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@straightnines.co.uk"
                  className="font-ui text-[13px] text-grey hover:text-purple transition-colors"
                >
                  hello@straightnines.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────── */}
        <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-ui text-[12px] text-grey/70">
            &copy; {new Date().getFullYear()} Straight Nines. All rights reserved. Not affiliated with AQA.
          </span>
          <span className="font-ui text-[12px] text-grey/40">
            Made with love for Kinza
          </span>
        </div>
      </div>
    </footer>
  );
}
