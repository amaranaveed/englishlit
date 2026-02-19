"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode, ComponentProps } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ─── Page wrapper: fades in and slides up the whole page content ─── */
export function AnimatedPage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section: fades in when scrolled into view ─── */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  custom,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  custom?: number;
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={custom ?? delay / 0.1}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Div: same as section but renders a div ─── */
export function AnimatedDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger grid: container that staggers its children ─── */
export function StaggerGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger item: used inside StaggerGrid ─── */
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Card with hover lift ─── */
export function AnimatedCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Link card with hover lift (wraps an anchor) ─── */
export function AnimatedLinkCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Heading: slides in from left ─── */
export function AnimatedHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Tag className={className}>{children}</Tag>
    </motion.div>
  );
}

/* ─── Breadcrumb: fade in from left ─── */
export function AnimatedBreadcrumb({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className={className}
    >
      {children}
    </motion.nav>
  );
}

/* ─── Button with tap animation ─── */
export function AnimatedButton({
  children,
  className = "",
  onClick,
  disabled,
  type = "button",
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ─── Badge/pill with pop-in animation ─── */
export function AnimatedBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* ─── Hero banner: scale + fade ─── */
export function AnimatedHero({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Expandable content: AnimatePresence wrapper ─── */
export function AnimatedExpand({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── List item that slides in from left with stagger ─── */
export function AnimatedListItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: EASE, delay: index * 0.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Table row fade in ─── */
export function AnimatedTableRow({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: EASE, delay: index * 0.04 }}
      className={className}
    >
      {children}
    </motion.tr>
  );
}

/* ─── Score card counter animation ─── */
export function AnimatedCounter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Icon/emoji with spring bounce on scroll ─── */
export function AnimatedIcon({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 400, damping: 15, delay }}
      whileHover={{ scale: 1.2, rotate: 8 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* ─── Scale-in from center on scroll ─── */
export function AnimatedScaleIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Slide in from right ─── */
export function AnimatedSlideRight({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Continuous floating element ─── */
export function FloatingElement({
  children,
  className = "",
  duration = 5,
  distance = 8,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated progress bar that fills on view ─── */
export function AnimatedProgressBar({
  percentage,
  className = "",
  barClassName = "bg-teal",
  delay = 0,
}: {
  percentage: number;
  className?: string;
  barClassName?: string;
  delay?: number;
}) {
  return (
    <div className={`overflow-hidden rounded-full ${className}`}>
      <motion.div
        className={`h-full rounded-full ${barClassName}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      />
    </div>
  );
}

/* ─── Animated blockquote with border reveal ─── */
export function AnimatedBlockquote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20, borderLeftColor: "transparent" }}
      whileInView={{ opacity: 1, x: 0, borderLeftColor: "currentColor" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
    >
      {children}
    </motion.blockquote>
  );
}

/* ─── Stagger list container (vertical) ─── */
export function StaggerList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Glow badge that pulses ─── */
export function AnimatedGlowBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 350, damping: 15, delay }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(79,82,195,0.3)" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* ─── Card with scale + rotate micro-interaction on hover ─── */
export function AnimatedInteractiveCard({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Timeline dot with pulse ─── */
export function AnimatedTimelineDot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className={className}
    >
      <motion.div
        animate={{ boxShadow: ["0 0 0 0 currentColor", "0 0 0 6px transparent"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        className="w-full h-full rounded-full"
      />
    </motion.div>
  );
}

/* ─── Pill/nav button with hover & tap ─── */
export function AnimatedPill({
  children,
  className = "",
  onClick,
  active = false,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ─── Bounce-in for numbers/stats ─── */
export function AnimatedBounceIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 400, damping: 12, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Shimmer/reveal line ─── */
export function AnimatedRevealLine({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      style={{ transformOrigin: "left" }}
      className={className}
    />
  );
}

/* ─── Hover-wiggle icon wrapper ─── */
export function AnimatedWiggle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      whileHover={{ rotate: 8, scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

/* Re-export for convenience */
export { motion, AnimatePresence, EASE, fadeUp, staggerContainer, staggerItem };
