"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UseCaseHeroData } from "../types";

const ease = [0.22, 1, 0.36, 1] as const;

export function UseCaseHero({ data }: { data: UseCaseHeroData }) {
  return (
    <section className="w-full px-5 sm:px-8">
      <div className="mx-auto max-w-7xl pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              {data.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease }}
              className="mt-6 font-display text-[clamp(40px,5.5vw,64px)] font-bold leading-[1.05] tracking-tight text-foreground"
            >
              {data.headlineLine1}
              <br />
              {data.headlineLine2}{" "}
              <span className="font-serif-display italic text-accent">
                {data.headlineLine2Italic}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-6 max-w-[520px] text-base leading-relaxed text-muted-foreground"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button variant="ink" size="lg" asChild>
                <a href="/trupper">
                  Get started free <ArrowRight className="size-4" />
                </a>
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

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface"
          />
        </div>
      </div>
    </section>
  );
}
