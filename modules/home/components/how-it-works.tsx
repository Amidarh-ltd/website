"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const institutionSteps = [
  {
    step: "1",
    title: "Create your platform",
    description:
      "Set up your branded LMS with your logo, colors, and custom domain.",
  },
  {
    step: "2",
    title: "Build your curriculum",
    description:
      "Create courses, upload materials, schedule live classes, and set exams.",
  },
  {
    step: "3",
    title: "Launch and grow",
    description:
      "Enrol students, accept payments, and track progress with built-in analytics.",
  },
];

const learnerSteps = [
  {
    step: "1",
    title: "Join your institution",
    description:
      "Sign up on your school or tutor's platform in seconds.",
  },
  {
    step: "2",
    title: "Access your courses",
    description:
      "Browse courses, join live classes, and take exams — all in one place.",
  },
  {
    step: "3",
    title: "Track your progress",
    description:
      "See your scores, certificates, and learning progress over time.",
  },
];

function StepCard({
  label,
  steps,
}: {
  label: string;
  steps: typeof institutionSteps;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex-1 rounded-2xl border border-border-soft bg-card p-8 sm:p-10"
    >
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-accent" />
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
            Get started with Trupper in three simple steps.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-6 lg:flex-row lg:gap-8"
        >
          <StepCard label="For Institutions" steps={institutionSteps} />
          <StepCard label="For Learners" steps={learnerSteps} />
        </motion.div>
      </div>
    </section>
  );
}
