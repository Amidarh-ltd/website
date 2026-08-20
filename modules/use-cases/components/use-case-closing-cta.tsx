"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import type { UseCaseClosingCTAData } from "../types";

export function UseCaseClosingCTA({ data }: { data: UseCaseClosingCTAData }) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl py-20 lg:py-24"
      >
        <div className="flex flex-col items-center text-center">
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(32px,5vw,52px)] font-bold leading-tight tracking-tight text-foreground"
          >
            {data.line1}
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="font-display text-[clamp(32px,5vw,52px)] font-bold leading-tight tracking-tight"
          >
            {data.line2}{" "}
            <span className="font-serif-display italic text-accent">
              {data.line2Italic}
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="ink" size="lg" asChild>
              <a href="/trupper">Get started free</a>
            </Button>
            <Button variant="paper" size="lg" asChild>
              <a
                href="https://calendly.com/amidarh01/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
