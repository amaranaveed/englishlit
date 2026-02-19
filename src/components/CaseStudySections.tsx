"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface SectionProps {
  title: string;
  items: string[];
  colour?: { bg: string; text: string; dot: string; border: string };
  delay?: number;
}

const DEFAULT_COLOUR = { bg: "bg-gray-50", text: "text-gray-700", dot: "bg-gray-500", border: "border-gray-200" };

export function CaseStudySection({ title, items, colour = DEFAULT_COLOUR, delay = 0 }: SectionProps) {
  if (!items || items.length === 0) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={`rounded-xl border ${colour.border} ${colour.bg} p-5`}
    >
      <h3 className={`font-ui text-xs font-bold uppercase tracking-wider ${colour.text} mb-3`}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE, delay: delay + i * 0.04 }}
            className="font-ui text-sm text-text flex gap-2.5"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${colour.dot} shrink-0 mt-1.5`} />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export const SECTION_COLOURS = {
  facts: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", border: "border-amber-200" },
  causes: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500", border: "border-red-200" },
  effects: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500", border: "border-orange-200" },
  responses: { bg: "bg-green-50", text: "text-green-700", dot: "bg-green-500", border: "border-green-200" },
} as const;
