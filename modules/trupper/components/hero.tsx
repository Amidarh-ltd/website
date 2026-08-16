"use client";

import { motion, useReducedMotion } from "framer-motion";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-white px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Left — headline */}
        <motion.div variants={fadeUp}>
          <h1 className="font-display text-[clamp(40px,5.5vw,72px)] font-bold leading-[1.05] tracking-tight text-ink">
            Run your institution
            <br />
            without the{" "}
            <span className="font-[var(--font-serif-display)] italic">
              chaos
            </span>
          </h1>
          {/* Hero image placeholder for mobile */}
          <div className="mt-8 aspect-[16/9] w-full rounded-2xl bg-surface lg:hidden" />
        </motion.div>

        {/* Right — description + CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col items-start lg:items-end">
          <div className="max-w-md lg:text-right">
            <p className="text-[17px] leading-relaxed text-ink-2">
              Trupper empowers schools, tutors, and institutions with a
              multitenant LMS — CBT exams, instant payments, and AI-powered
              administration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 lg:justify-end">
              <InstitutionSignupButton
                size="lg"
                variant="outline"
                label="Get Early Access"
              />
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://calendly.com/amidarh01/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a demo
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero image placeholder for desktop */}
      <div className="mx-auto mt-16 hidden max-w-7xl lg:block">
        {/* <div className="aspect-[16/7] w-full rounded-2xl bg-surface" /> */}

        <Image src="https://res.cloudinary.com/dl5dyntsp/image/upload/v1786832820/cover2_tzfpeo.png" alt="Trupper" width={1000} height={1000} className="w-full h-full object-cover rounded-2xl" priority />
      </div>
    </section>
  );
}
