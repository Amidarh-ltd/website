"use client";

import { motion, useReducedMotion } from "framer-motion";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";
import { ProductBadge } from "@/core/design-system/tag";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-6 pb-20 sm:px-6 sm:pt-8 sm:pb-24 lg:px-8 lg:pt-10 lg:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% -5%, color-mix(in oklab, var(--accent) 35%, transparent), transparent 72%), radial-gradient(ellipse 55% 45% at 105% 15%, color-mix(in oklab, var(--accent-2) 26%, transparent), transparent 68%), radial-gradient(ellipse 55% 45% at -5% 100%, color-mix(in oklab, var(--flow) 18%, transparent), transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="grid-pattern absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-40"
      />

      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto flex max-w-[860px] flex-col items-center text-center"
      >
        <motion.div variants={fadeUp} className="w-full">
          <ProductBadge product="trupper" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 w-full font-display text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] text-ink"
        >
          The complete learning platform for schools, tutors, and companies
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 w-full max-w-[600px] text-lg leading-relaxed text-ink-2"
        >
          Trupper gives schools, online tutors, and companies full control
          over courses, live classes, books and resources, students or
          trainees, exams, and analytics — from one platform.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <InstitutionSignupButton size="lg" />
          <Button variant="ghost" size="lg" asChild>
            <a href="#features" className="min-h-[44px] text-ink-2">
              See features ↓
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
