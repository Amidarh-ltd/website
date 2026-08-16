"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const cards = [
  {
    number: "01",
    title: "AI-powered course generation",
    description:
      "Flow turns any topic into a structured course with lessons, quizzes, and flashcards — all generated in seconds by AI.",
  },
  {
    number: "02",
    title: "Manage entire institutions",
    description:
      "Trupper gives schools and tutors a white-label LMS with courses, live classes, exams, payments, and analytics built in.",
  },
  {
    number: "03",
    title: "Scale without the overhead",
    description:
      "From one learner to thousands — both products handle growth automatically. No servers to manage, no dev team required.",
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full px-5 pb-24 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.div key={card.number} variants={fadeUp} className="flex flex-col">
            <div className="aspect-[4/3] w-full rounded-xl bg-surface" />
            <p className="mt-5 font-mono text-sm text-muted-foreground">
              {card.number}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
