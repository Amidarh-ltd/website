"use client";

import { motion } from "framer-motion";
import { ProductBadge } from "@/core/design-system/tag";
import { fadeUp, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "Flow turned a topic I knew nothing about into a course I could actually follow. The flashcards made revision painless.",
    name: "Amaka O.",
    role: "Flow user",
    product: "flow" as const,
  },
  {
    quote:
      "We moved our entire exam process onto Trupper in under two weeks. Grading that used to take days now happens automatically.",
    name: "Dr. Bello",
    role: "Academic Director",
    product: "trupper" as const,
  },
  {
    quote:
      "I use Flow to study between classes — generating a quiz on a topic takes seconds and it actually tests what I don't know.",
    name: "Tunde A.",
    role: "Flow user",
    product: "flow" as const,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-700 text-foreground">
            What people are saying
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="flex flex-col justify-between rounded-2xl border border-border-soft bg-card p-7 shadow-[var(--shadow-card)]"
            >
              {/* Quote mark */}
              <div>
                <span className="font-display text-3xl leading-none text-muted-foreground/30">
                  &ldquo;&ldquo;
                </span>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-600 text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <ProductBadge product={t.product} />
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
