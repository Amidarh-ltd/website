"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = "accent",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: "accent" | "flow";
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-lg border border-border-soft bg-surface p-7 shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-md",
          accent === "flow" ? "bg-flow-soft text-flow" : "bg-accent-soft text-accent",
        )}
      >
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 font-display text-[18px] font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
        {description}
      </p>
    </motion.div>
  );
}
