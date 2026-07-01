"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/utils/zustand/store";
import type { Plan } from "../services/plans";

export default function PricingCards({ plans }: { plans: Plan[] }) {
  const setInstitutionSignup = useStore((state) => state.setInstitutionSignup);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="mt-14 grid gap-6 lg:grid-cols-4"
    >
      {plans.map((plan) => (
        <motion.div
          key={plan.id}
          variants={fadeUp}
          className={cn(
            "relative flex flex-col rounded-xl border bg-white p-8",
            plan.popular
              ? "border-accent shadow-[var(--shadow-card)]"
              : "border-border-soft",
          )}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-accent px-3 py-1 text-xs font-semibold tracking-[0.08em] text-accent-foreground uppercase">
              Most popular
            </span>
          )}

          <h3 className="font-display text-xl font-semibold text-ink">
            {plan.name}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
            {plan.description}
          </p>

          <div className="mt-6 flex items-baseline gap-1.5">
            <span className="font-display text-3xl font-bold text-ink">
              {plan.priceLabel}
            </span>
            <span className="text-sm text-ink-2">{plan.period}</span>
          </div>
          {plan.priceUsd !== null && (
            <p className="mt-1 text-[13px] text-ink-2">
              {plan.priceUsdLabel} USD equivalent
            </p>
          )}

          <Button
            variant={plan.popular ? "accent" : "outline"}
            size="lg"
            className="mt-7 w-full"
            onClick={() => setInstitutionSignup(true)}
          >
            Get started
          </Button>

          <ul className="mt-8 flex flex-col gap-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-[14px] leading-relaxed text-ink-2"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
