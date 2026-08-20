"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { UseCaseMetric } from "../types";

export function UseCaseMetrics({ metrics }: { metrics: UseCaseMetric[] }) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl py-16"
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className={`flex flex-col items-center text-center ${
                index < metrics.length - 1
                  ? "lg:border-r lg:border-border-soft"
                  : ""
              }`}
            >
              <p className="font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
