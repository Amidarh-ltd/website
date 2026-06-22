"use client";

import { motion } from "framer-motion";
import { ProductBadge } from "@/core/design-system/tag";
import { fadeUp, staggerContainer } from "@/lib/motion";

const flowSteps = [
  {
    step: "01",
    title: "Pick a topic",
    description: "Tell Flow what you want to learn — any subject, any level.",
  },
  {
    step: "02",
    title: "Get a course instantly",
    description:
      "AI builds a structured course with flashcards and quizzes in seconds.",
  },
  {
    step: "03",
    title: "Track your mastery",
    description: "See your progress and exactly what to review next.",
  },
];

const trupperSteps = [
  {
    step: "01",
    title: "Set up your institution",
    description: "Onboard your courses, cohorts, and admin accounts.",
  },
  {
    step: "02",
    title: "Run your academic year",
    description: "Manage curriculum, scheduling, and student records.",
  },
  {
    step: "03",
    title: "Deliver exams & grade automatically",
    description: "The built-in exam engine handles delivery and grading.",
  },
];

function StepColumn({
  product,
  steps,
  accent,
}: {
  product: "flow" | "trupper";
  steps: typeof flowSteps;
  accent: "flow" | "accent";
}) {
  return (
    <motion.div variants={fadeUp} className="flex-1">
      <ProductBadge product={product} />
      <ol className="mt-6 space-y-6">
        {steps.map((item) => (
          <li key={item.step} className="flex gap-4">
            <span
              className={
                accent === "flow"
                  ? "flex size-9 shrink-0 items-center justify-center rounded-md bg-flow-soft font-display text-sm font-semibold text-flow"
                  : "flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-soft font-display text-sm font-semibold text-accent"
              }
            >
              {item.step}
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-2">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
            How it works
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            Flow and Trupper are separate products, each with its own simple
            path to getting started.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-12 sm:flex-row sm:gap-16"
        >
          <StepColumn product="flow" steps={flowSteps} accent="flow" />
          <StepColumn product="trupper" steps={trupperSteps} accent="accent" />
        </motion.div>
      </div>
    </section>
  );
}
