"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  BookOpen,
  Layers,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductBadge } from "@/core/design-system/tag";
import { FeatureCard } from "@/core/design-system/feature-card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { FLOW_URL } from "@/lib/constants/site";
import { useStore } from "@/lib/utils/zustand/store";

const flowFeatures = [
  {
    icon: Sparkles,
    title: "Generate any course",
    description:
      "Turn any topic into a structured course with AI in seconds.",
  },
  {
    icon: Layers,
    title: "Flashcards & quizzes",
    description: "Active recall tools that reinforce what you've learned.",
  },
  {
    icon: TrendingUp,
    title: "Track mastery",
    description: "See exactly where you're strong and what needs more work.",
  },
];

const trupperFeatures = [
  {
    icon: BookOpen,
    title: "Courses & resources",
    description:
      "Build course catalogs with lessons, books, and study materials.",
  },
  {
    icon: Video,
    title: "Live classes",
    description: "Host live sessions and virtual classrooms for your learners.",
  },
  {
    icon: BarChart,
    title: "Trainee management & analytics",
    description:
      "Track students or staff trainees and their progress across all courses.",
  },
];

export default function Features() {
  const setInstitutionSignup = useStore((state) => state.setInstitutionSignup);

  return (
    <>
      <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <ProductBadge product="flow" />
            <h2 className="mt-5 font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
              Learning that adapts to you
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
              Flow turns any topic into a structured course with AI, then
              helps you retain it with flashcards and quizzes. Track your
              mastery as you go, so you always know what to study next.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {flowFeatures.map((feature) => (
              <FeatureCard key={feature.title} accent="flow" {...feature} />
            ))}
          </motion.div>

          <div className="mt-10">
            <Button
              variant="accent"
              size="lg"
              onClick={() => window.open(FLOW_URL, "_blank")}
            >
              Try Flow free →
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <ProductBadge product="trupper" />
            <h2 className="mt-5 font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
              A learning platform for every kind of educator
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
              Schools and universities, online tutors running live classes,
              and companies training staff all use Trupper for courses,
              content, exams, and analytics — in one platform.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {trupperFeatures.map((feature) => (
              <FeatureCard key={feature.title} accent="accent" {...feature} />
            ))}
          </motion.div>

          <div className="mt-10">
            <Button size="lg" onClick={() => setInstitutionSignup(true)}>
              Request access →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
