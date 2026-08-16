"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Testimonial() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-surface px-8 py-16 text-center sm:px-16 lg:py-20">
        <blockquote className="mx-auto max-w-2xl font-[var(--font-serif-display)] text-[clamp(20px,2.5vw,28px)] italic leading-relaxed text-ink">
          &ldquo;Every hour spent chasing admin work is time away from teaching.
          Trupper gives our team time to focus on what actually matters.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="size-10 rounded-full bg-surface-2" />
          <div className="text-left">
            <p className="text-sm font-semibold text-ink">
              Mrs. Adebayo Funke
            </p>
            <p className="text-sm text-ink-3">
              Principal, Greenfield Academy
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
