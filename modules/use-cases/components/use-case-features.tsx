"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { UseCaseFeature } from "../types";

function FeatureSection({
  feature,
  index,
}: {
  feature: UseCaseFeature;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="border-t border-border-soft py-16 lg:py-20"
    >
      <div
        className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
          isReversed ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
        }`}
      >
        {/* Text */}
        <motion.div variants={fadeUp} className="flex flex-col">
          <p className="font-mono text-sm text-muted-foreground">
            {feature.number}
          </p>
          <h3 className="mt-4 font-display text-[clamp(24px,3vw,36px)] font-bold leading-tight text-foreground">
            {feature.title}
          </h3>
          <p className="mt-4 max-w-[460px] text-[15px] leading-relaxed text-muted-foreground">
            {feature.description}
          </p>

          {/* Capabilities */}
          <div className="mt-8">
            <div className="border-t border-border-soft pt-4">
              <p className="text-sm font-medium text-foreground">
                {feature.categoryLabel}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-12 gap-y-1.5">
                {feature.capabilities.map(([left, right]) => (
                  <CapabilityRow key={left} items={[left, right]} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeUp}
          className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface"
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CapabilityRow({ items }: { items: [string, string] }) {
  return (
    <>
      <p className="text-sm text-muted-foreground">{items[0]}</p>
      <p className="text-sm text-muted-foreground">{items[1]}</p>
    </>
  );
}

export function UseCaseFeatures({
  features,
}: {
  features: UseCaseFeature[];
}) {
  return (
    <section className="w-full px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.number}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
