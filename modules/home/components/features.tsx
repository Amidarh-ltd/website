"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { images } from "@/lib/site-image";

const flowCapabilities = [
  ["Course Generation", "Adaptive Quizzes"],
  ["Smart Flashcards", "Progress Tracking"],
  ["Topic Explorer"],
];

const trupperCapabilities = [
  ["Course Builder", "Live Classes"],
  ["CBT Exam Engine", "Payment Gateway"],
  ["Custom Branding", "AI Admin Assistant"],
];

function CapabilitiesGrid({
  title,
  capabilities,
}: {
  title: string;
  capabilities: string[][];
}) {
  return (
    <div className="mt-auto max-w-md">
      <div className="mb-3 h-px bg-border" />
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <div className="mt-3 space-y-2">
        {capabilities.map((row, i) => (
          <div key={i} className="grid grid-cols-2 gap-x-4">
            {row.map((item) => (
              <p key={item} className="text-sm text-muted-foreground">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <>
      {/* Flow Section */}
      <section id="flow" className="w-full px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-[1fr_1.6fr]"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
              <p className="font-mono text-sm text-muted-foreground">01</p>
              <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,36px)] font-bold leading-tight text-foreground">
                Learn anything with AI-generated courses
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Flow turns any topic into structured lessons, quizzes, and
                flashcards — powered by AI. Just type what you want to learn,
                and your personal course is ready in seconds.
              </p>

              <div className="mt-10">
                <CapabilitiesGrid
                  title="AI-Powered Learning"
                  capabilities={flowCapabilities}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-2xl bg-surface"
            >
              <img
                src={images.flow}
                alt="Flow AI-powered learning"
                className="h-full w-full object-cover aspect-[856/360]"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trupper Section */}
      <section id="trupper" className="w-full px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-[1fr_1.6fr]"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
              <p className="font-mono text-sm text-muted-foreground">02</p>
              <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,36px)] font-bold leading-tight text-foreground">
                Run your institution from one dashboard
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Trupper is a multitenant LMS built for schools, online tutors,
                and companies. Launch courses, run live classes, administer CBT
                exams, and collect payments — all branded to you.
              </p>

              <div className="mt-10">
                <CapabilitiesGrid
                  title="Institution Management"
                  capabilities={trupperCapabilities}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-2xl bg-surface"
            >
              <img
                src={images.trupper}
                alt="Trupper institution management"
                className="h-full w-full object-cover aspect-[856/360]"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
