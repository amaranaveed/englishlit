"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PageBanner({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative rounded-2xl overflow-hidden mb-8 bg-[#1a1b3a]"
    >
      <div className="relative h-44 sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="1200px"
          priority
        />
        <div className="absolute inset-0 bg-[#1a1b3a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b3a]/80 via-[#1a1b3a]/40 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center px-8 sm:px-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl font-bold text-white mb-1"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.35 }}
              className="font-ui text-[14px] sm:text-[15px] text-white/70 max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
