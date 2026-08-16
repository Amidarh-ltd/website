"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

function VerbPill({ word, number }: { word: string; number: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-accent-soft px-2 py-0.5">
      <span className="font-semibold text-ink">{word}</span>
      <sup className="font-mono text-[11px] text-accent">{number}</sup>
    </span>
  );
}

export default function ValueHeadline() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-[clamp(28px,4vw,44px)] leading-[1.3] text-ink-3">
          Trupper <VerbPill word="launches" number="01" /> your courses,{" "}
          <VerbPill word="runs" number="02" /> live classes and exams, and{" "}
          <VerbPill word="automates" number="03" /> revenue from first signup
          to graduation.
        </p>
      </div>
    </motion.section>
  );
}
