"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";

const cards = [
  {
    number: "01",
    title: "Launch courses in minutes",
    description:
      "Trupper handles branding, domains, and payment setup — so you can start enrolling students from day one.",
    image: "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835970/courses_mmr6nl.png",
  },
  {
    number: "02",
    title: "Run classes and exams live",
    description:
      "Video classrooms, screen-proctored CBT exams, auto-graded assessments — everything runs inside the platform.",
    image: "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835612/exams_xrhu6n.png",
  },
  {
    number: "03",
    title: "Automate revenue and reports",
    description:
      "Instant payouts to your bank. AI-generated progress reports. Revenue dashboards that update in real time.",
    image: "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786834549/revenue_cpz4z5.png",
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full bg-white px-4 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.div key={card.number} variants={fadeUp} className="flex flex-col">
            {/* Image placeholder */}
            <Image src={card.image} alt={card.title} width={1000} height={1000} className="w-full h-full object-cover rounded-2xl" priority />

            <p className="mt-5 font-mono text-sm text-ink-3">{card.number}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
