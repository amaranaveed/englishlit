"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        {/* ── Top row: columns ─────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={staggerItem}>
            <p className="font-display font-bold text-[15px] text-text mb-2">
              Straight Nines
            </p>
            <p className="font-ui text-[13px] text-grey leading-relaxed">
              Free GCSE revision for AQA English Literature, Geography &amp; Religious Studies.
            </p>
          </motion.div>

          {/* Study */}
          <motion.div variants={staggerItem}>
            <p className="font-ui text-[13px] font-semibold text-text mb-3 uppercase tracking-wide">
              Study
            </p>
            <ul className="space-y-2">
              {[
                { href: "/englishlit/texts", label: "English Literature" },
                { href: "/geography/topics", label: "Geography" },
                { href: "/rs/topics", label: "Religious Studies" },
                { href: "/englishlit/flashcards", label: "Flashcards" },
                { href: "/englishlit/exam", label: "Exam Practice" },
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
          </motion.div>

          {/* Legal */}
          <motion.div variants={staggerItem}>
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
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
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
                  href="mailto:hello@straightnines.com"
                  className="font-ui text-[13px] text-grey hover:text-purple transition-colors"
                >
                  hello@straightnines.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Divider ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <span className="font-ui text-[12px] text-grey/70">
            &copy; {new Date().getFullYear()} Straight Nines. All rights reserved. Not affiliated with AQA. Images are AI-generated.
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-ui text-[12px] text-grey/40"
          >
            Made with love for Kinza
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
}
