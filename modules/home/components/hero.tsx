"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tag } from "@/core/design-system/tag";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full px-4 pt-24 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8 lg:pt-32 lg:pb-28">
      <motion.div
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
        variants={staggerContainer}
        className="mx-auto flex max-w-[860px] flex-col items-center text-center"
      >
        <motion.div variants={fadeUp}>
          <Tag>EdTech · 2024</Tag>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-display text-[clamp(40px,7vw,80px)] font-bold leading-[1.05] text-ink"
        >
          Learn smarter.
          <br />
          <span className="relative inline-block">
            Run institutions better.
            <svg
              viewBox="0 0 320 14"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-accent sm:-bottom-3 sm:h-4"
              aria-hidden="true"
            >
              <path
                d="M2 9 C 50 1, 90 13, 140 6 C 190 -1, 230 13, 318 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[560px] text-lg leading-relaxed text-ink-2"
        >
          Amidarh is the company behind two independent products: Flow,
          AI-powered learning for individuals, and Trupper, a learning
          platform for schools, online tutors, and companies.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="xl"
            className="group min-h-[44px]"
            onClick={() => window.open(FLOW_URL, "_blank")}
          >
            Start learning free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Link
            href={TRUPPER_PATH}
            className="flex min-h-[44px] items-center text-[15px] font-medium text-accent transition-colors hover:text-accent-2"
          >
            For institutions →
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-stretch"
        >
          <motion.a
            href={FLOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full max-w-[280px] rounded-xl border-l-[3px] border-flow bg-flow-soft px-6 py-5 text-left transition-shadow hover:shadow-[var(--shadow-lift)] sm:mx-0"
          >
            <p className="font-display text-3xl font-bold text-flow">Flow</p>
            <p className="mt-1 text-[13px] text-flow/70">
              AI learning for everyone
            </p>
          </motion.a>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full max-w-[280px] sm:mx-0"
          >
            <Link
              href={TRUPPER_PATH}
              className="block rounded-xl border-l-[3px] border-accent bg-accent-soft px-6 py-5 text-left transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <p className="font-display text-3xl font-bold text-accent">
                Trupper
              </p>
              <p className="mt-1 text-[13px] text-accent/70">
                Courses, classes & training
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
