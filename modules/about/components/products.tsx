"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";

const products = [
  {
    name: "Flow",
    tagline: "AI-powered learning for individuals",
    description:
      "Generate structured courses on any topic, study with flashcards, take quizzes, and track your learning progress — all powered by AI that adapts to how you learn.",
    color: "bg-flow" as const,
    colorSoft: "bg-flow-soft" as const,
    textColor: "text-flow" as const,
    href: FLOW_URL,
    features: [
      "AI course generation",
      "Smart flashcards",
      "Adaptive quizzes",
      "Progress tracking",
    ],
  },
  {
    name: "Trupper",
    tagline: "Learning management for institutions",
    description:
      "A complete LMS for schools, online tutors, and companies. Manage courses, live classes, exams, payments, student records, and analytics — all from one platform.",
    color: "bg-trupper" as const,
    colorSoft: "bg-accent-soft" as const,
    textColor: "text-trupper" as const,
    href: TRUPPER_PATH,
    features: [
      "Course management",
      "Live classes",
      "Exam engine",
      "Payment & analytics",
    ],
  },
];

export function Products() {
  return (
    <section className="w-full bg-surface px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Our products
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground">
            Two products, one mission.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re learning on your own or running an institution,
            we have a product built for you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {products.map((product) => (
            <motion.a
              key={product.name}
              href={product.href}
              variants={fadeUp}
              className="group relative flex flex-col rounded-2xl border border-border-soft bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-lift sm:p-10"
            >
              {/* Product dot + name */}
              <div className="flex items-center gap-3">
                <span className={`size-3 rounded-full ${product.color}`} />
                <span className="font-display text-xl font-semibold text-foreground">
                  {product.name}
                </span>
              </div>

              <p className={`mt-1 text-sm font-medium ${product.textColor}`}>
                {product.tagline}
              </p>

              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Feature pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className={`rounded-full ${product.colorSoft} px-3 py-1 text-xs font-medium ${product.textColor}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
