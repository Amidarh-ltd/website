"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-image";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative bottom-[50px]">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left - Copy */}
          <div className="pt-4">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-600 uppercase tracking-[0.16em] text-muted-foreground shadow-soft"
            >
              <Sparkles className="size-3.5 text-flow" /> Edtech &middot; 2024
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease }}
              className="mt-6 font-display text-5xl font-700 leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Learn smarter.
              <br />
              Run institutions{" "}
              <span className="underline-squiggle">better.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Amidarh is the company behind two independent products:{" "}
              <span className="font-600 text-foreground">Flow</span>, AI-powered
              learning for individuals, and{" "}
              <span className="font-600 text-foreground">Trupper</span>, a
              learning platform for schools, online tutors, and companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button variant="ink" size="xl" asChild>
                <a href="#flow">
                  Start learning free <ArrowRight className="size-4" />
                </a>
              </Button>
              <a
                href="#trupper"
                className="group inline-flex items-center gap-1.5 text-sm font-600 text-trupper transition-colors hover:text-foreground"
              >
                For institutions
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <p className="font-display text-2xl font-700 text-foreground">40k+</p>
                <p className="text-xs text-muted-foreground">Active learners</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-700 text-foreground">120+</p>
                <p className="text-xs text-muted-foreground">Institutions</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-700 text-foreground">2</p>
                <p className="text-xs text-muted-foreground">Focused products</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Image Collage Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="relative"
          >
            <div className="grid grid-cols-5 grid-rows-6 gap-3 [aspect-ratio:5/6]">
              {/* Primary image - top-left, large */}
              <div className="relative col-span-3 row-span-4 overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={images.heroPrimary}
                  alt="People learning together"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                {/* Flow badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-600 shadow-lift"
                >
                  <span className="size-2 rounded-full bg-flow" /> Flow
                </motion.div>
              </div>

              {/* Secondary image - top-right, shorter */}
              <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={images.heroSecondary}
                  alt="Study notes and planning"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tertiary image - bottom-right */}
              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-2xl shadow-lift">
                <img
                  src={images.heroTertiary}
                  alt="Reading in a library"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Trupper badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.6 }}
                  className="absolute right-3 bottom-3 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-600 shadow-lift"
                >
                  <span className="size-2 rounded-full bg-trupper" /> Trupper
                </motion.div>
              </div>

              {/* Dark card - bottom-left */}
              <div className="col-span-3 row-span-2 flex flex-col justify-center rounded-2xl bg-ink p-6 text-ink-foreground shadow-ink">
                <p className="font-display text-xs font-600 uppercase tracking-[0.14em] text-ink-foreground/50">
                  One company
                </p>
                <p className="mt-1 font-display text-lg font-600 leading-snug">
                  Two products, built to work the way you learn and teach.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
