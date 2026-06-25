"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function BlogHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, color-mix(in oklab, var(--accent) 28%, transparent), transparent 72%)",
        }}
      />

      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.1] text-ink"
        >
          Notes on learning &amp; building Amidarh
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2"
        >
          Product updates, engineering deep dives, and stories from schools,
          tutors, and teams using Trupper and Flow.
        </motion.p>
      </motion.div>
    </section>
  );
}
