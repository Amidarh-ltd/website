"use client";

import { motion, useReducedMotion } from "framer-motion";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";
import { ProductBadge } from "@/core/design-system/tag";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="grid-pattern w-full px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8 lg:pt-32 lg:pb-28">
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-[860px] flex-col items-center text-center"
      >
        <motion.div variants={fadeUp}>
          <ProductBadge product="trupper" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] text-ink"
        >
          The complete learning platform for schools, tutors, and companies
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[600px] text-lg leading-relaxed text-ink-2"
        >
          Trupper gives schools, online tutors, and companies full control
          over courses, live classes, books and resources, students or
          trainees, exams, and analytics — from one platform.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
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
