"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
  Globe,
  ShieldCheck,
  Lightbulb,
  Users,
  Zap,
  Heart,
} from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Accessibility First",
    description:
      "We design for the widest possible audience — low bandwidth, mobile-first, and affordable for learners everywhere.",
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description:
      "We use AI and modern technology not for hype, but to solve real problems in education delivery and access.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Privacy",
    description:
      "User data is sacred. We build with privacy by design and comply with regulations like the NDPR and GDPR.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Our roadmap is shaped by the educators and learners who use our tools every day. Their feedback drives what we build.",
  },
  {
    icon: Zap,
    title: "Simplicity",
    description:
      "Powerful doesn't have to mean complicated. We obsess over making complex workflows feel effortless.",
  },
  {
    icon: Heart,
    title: "Impact Over Metrics",
    description:
      "We measure success by the students who pass exams, the tutors who grow their business, and the schools that thrive.",
  },
];

export function Values() {
  return (
    <section className="w-full px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Our values
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground">
            What we stand for.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            These principles guide every product decision, every feature, and
            every interaction we have.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="group rounded-2xl border border-border-soft bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lift"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <value.icon className="size-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
