"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-soft"
          >
            About Amidarh
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
            className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Making education{" "}
            <span className="font-serif-display italic">accessible</span> for
            everyone.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            We build tools that empower learners and educators across Africa
            and beyond. From AI-powered personal learning to full-scale
            institutional management, Amidarh is shaping the future of
            education technology.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-14 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
          >
            {[
              { value: "40k+", label: "Active learners" },
              { value: "120+", label: "Institutions" },
              { value: "2", label: "Products" },
              { value: "2024", label: "Founded" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
