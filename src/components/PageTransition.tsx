"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
