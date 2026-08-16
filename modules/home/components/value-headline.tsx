"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

function VerbPill({ word, number }: { word: string; number: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-accent-soft px-2 py-0.5">
      <span className="font-semibold text-foreground">{word}</span>
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
      className="w-full px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-[clamp(28px,4vw,44px)] leading-[1.3] text-muted-foreground">
          Amidarh <VerbPill word="builds" number="01" /> tools that{" "}
          <VerbPill word="teach" number="02" />{" "}
          <VerbPill word="manage" number="03" /> and{" "}
          <VerbPill word="scale" number="04" /> education from anywhere.
        </p>
      </div>
    </motion.section>
  );
}
