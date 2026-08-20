"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { UseCaseTestimonial } from "../types";

export function UseCaseTestimonialSection({
  testimonial,
}: {
  testimonial: UseCaseTestimonial;
}) {
  return (
    <section className="w-full px-5 sm:px-8">
      <div className="mx-auto max-w-7xl py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="rounded-2xl border border-border-soft bg-card px-8 py-16 sm:px-16 lg:px-[290px]"
        >
          <blockquote className="text-center">
            <p className="font-serif-display text-lg leading-relaxed text-foreground italic sm:text-xl lg:text-2xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-sm font-semibold text-foreground">
                {testimonial.authorName}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {testimonial.authorRole}
              </p>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
