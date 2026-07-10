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

function StepCard({
  product,
  steps,
  accent,
}: {
  product: "flow" | "trupper";
  steps: typeof flowSteps;
  accent: "flow" | "accent";
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex-1 rounded-2xl border border-border-soft bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <ProductBadge product={product} />
      <ol className="mt-7 space-y-6">
        {steps.map((item) => (
          <li key={item.step} className="flex gap-4">
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-600 ${
                accent === "flow"
                  ? "bg-flow-soft text-flow"
                  : "bg-accent-soft text-accent"
              }`}
            >
              {item.step}
            </span>
            <div>
              <h3 className="font-display text-[15px] font-600 text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
    <section className="w-full bg-card/30 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-700 text-foreground">
            How it works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Flow and Trupper are separate products, each with its own simple
            path to getting started.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-6 lg:flex-row lg:gap-8"
        >
          <StepCard product="flow" steps={flowSteps} accent="flow" />
          <StepCard product="trupper" steps={trupperSteps} accent="accent" />
        </motion.div>
      </div>
    </section>
  );
}
