"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/motion";

const entries = [
  {
    date: "AUG 12, 2026",
    title: "AI bulk enrollment",
    description:
      "Tell the assistant to enroll students from CSV or by class. Handles duplicates automatically.",
  },
  {
    date: "JUL 28, 2026",
    title: "Offline exam mode",
    description:
      "Exams continue when internet drops. Responses sync automatically when connectivity returns.",
  },
  {
    date: "JUL 15, 2026",
    title: "Instant withdrawal",
    description:
      "Withdraw wallet funds to any Nigerian bank account in under 60 seconds. No minimum balance.",
  },
];

export default function Changelog() {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-3">
            Changelog
          </p>
          <h3 className="mt-3 font-display text-[clamp(28px,3.5vw,40px)] font-bold text-ink">
            The Latest
          </h3>
        </motion.div>

        <div className="mt-8 border-t border-border-soft" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-8 lg:grid-cols-3"
        >
          {entries.map((entry) => (
            <motion.div key={entry.title} variants={fadeUp}>
              <p className="font-mono text-xs text-ink-3">{entry.date}</p>
              <h4 className="mt-3 font-display text-base font-semibold text-ink">
                {entry.title}
              </h4>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="mt-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
          >
            See all releases <span aria-hidden="true">&gt;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
