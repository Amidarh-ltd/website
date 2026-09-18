"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-soft"
          >
            Contact us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
            className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl"
          >
            Let&apos;s{" "}
            <span className="font-serif-display italic">talk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Have a question, need support, or want to explore a partnership?
            We&apos;d love to hear from you.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
