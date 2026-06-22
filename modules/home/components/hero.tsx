"use client";

import { Button } from "@/components/ui/button";
import { MarketingImage } from "@/components/ui/marketing-image";
import { FLOW_URL, TRUPPER_PATH, UNSPLASH_IMAGES } from "@/lib/constants/site";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="mesh-hero w-full pt-28 md:pt-32">
      <section className="container mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
              <Sparkles className="size-4 text-accent" />
              AI-powered learning · Learning management
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-[3.5rem] xl:leading-[1.1]">
              Learn smarter.
              <br />
              Run institutions better.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Amidarh brings together Flow for personalized AI learning and
              Trupper for institutional learning management—built for students, educators,
              and institutions.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="xl"
                className="group"
                onClick={() => window.open(FLOW_URL, "_blank")}
              >
                Start with Flow
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href={TRUPPER_PATH}>Explore Trupper</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Trusted approach for learners and institutions scaling digital
              education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <MarketingImage
              src={UNSPLASH_IMAGES.hero.src}
              alt={UNSPLASH_IMAGES.hero.alt}
              priority
              containerClassName="aspect-[4/3] shadow-[0_24px_64px_rgba(36,33,106,0.18)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border/60 bg-card/95 p-4 shadow-lg backdrop-blur-sm md:block">
              <p className="text-sm font-semibold text-foreground">Flow</p>
              <p className="text-xs text-muted-foreground">
                Courses · Flashcards · Quiz · Progress
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
