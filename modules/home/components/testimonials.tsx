"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="w-full px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="rounded-2xl border border-border-soft bg-card px-6 py-16 sm:px-12 sm:py-20"
        >
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="font-serif-display text-[clamp(20px,2.5vw,28px)] italic leading-relaxed text-foreground">
              &ldquo;Trupper transformed how we run our academy. The exam engine
              and analytics save us hours every week.&rdquo;
            </p>
            <figcaption className="mt-8 flex flex-col items-center gap-3">
              <div className="size-10 rounded-full bg-surface" />
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">
                  Amaka Okonkwo
                </p>
                <p className="text-xs text-muted-foreground">
                  Academy Director, Trupper
                </p>
              </div>
            </figcaption>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
