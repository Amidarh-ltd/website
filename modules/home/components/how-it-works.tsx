"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const flowSteps = [
  {
    step: "1",
    title: "Type any topic",
    description:
      "Enter what you want to learn — a language, skill, or subject.",
  },
  {
    step: "2",
    title: "AI generates your course",
    description: "Lessons, quizzes, and flashcards are created instantly.",
  },
  {
    step: "3",
    title: "Learn and track mastery",
    description:
      "Study at your pace. Track progress and revisit weak areas.",
  },
];

const trupperSteps = [
  {
    step: "1",
    title: "Create your institution",
    description:
      "Set your brand, domain, and invite your team in minutes.",
  },
  {
    step: "2",
    title: "Add courses and learners",
    description:
      "Build your curriculum, upload materials, and enrol students.",
  },
  {
    step: "3",
    title: "Launch and grow",
    description:
      "Go live with classes, exams, payments, and analytics.",
  },
];

function StepCard({
  label,
  color,
  steps,
}: {
  label: string;
  color: "flow" | "accent";
  steps: typeof flowSteps;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex-1 rounded-2xl border border-border-soft bg-card p-8 sm:p-10"
    >
      <div className="flex items-center gap-2">
        <span
          className={`size-2 rounded-full ${
            color === "flow" ? "bg-flow" : "bg-accent"
          }`}
        />
        <span className="text-sm font-semibold text-foreground">{label}</span>
      </div>

      <div className="mt-8 space-y-6">
        {steps.map((item) => (
          <div key={item.step} className="flex gap-5">
            <span className="font-mono text-sm text-muted-foreground/50">
              {item.step}
            </span>
            <div>
              <p className="text-[15px] font-semibold text-foreground">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground">
            Pick your product. Start in minutes.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-6 lg:flex-row lg:gap-8"
        >
          <StepCard label="Flow" color="flow" steps={flowSteps} />
          <StepCard label="Trupper" color="accent" steps={trupperSteps} />
        </motion.div>
      </div>
    </section>
  );
}
