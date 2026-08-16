"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const institutions = [
  "Covenant University",
  "LASU",
  "Greensprings",
  "NIIT Nigeria",
  "Redeemers",
];

export default function TrustBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="w-full bg-white px-4 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <span className="rounded-full border border-border-soft px-4 py-1.5 text-sm text-ink-2">
          Trusted and funded by
        </span>
        {institutions.map((name) => (
          <span
            key={name}
            className="text-[15px] font-medium text-ink-3"
          >
            {name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
