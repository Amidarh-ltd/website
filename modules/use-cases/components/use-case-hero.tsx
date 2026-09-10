"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { UseCaseHeroData } from "../types";

const ease = [0.22, 1, 0.36, 1] as const;

function DefaultHero({ data }: { data: UseCaseHeroData }) {
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

function CenteredHero({ data }: { data: UseCaseHeroData }) {
  return (
    <section className="w-full pt-20 sm:pt-24">
      {/* Purple background block — inset with rounded corners + curved bottom */}
      <div className="mx-auto max-w-[1280px] px-3 sm:px-5">
        <div className="relative overflow-hidden rounded-3xl bg-accent px-5 pt-16 pb-40 sm:rounded-[2rem] sm:px-8 sm:pt-20 sm:pb-48 md:pb-56 lg:pb-64">
          {/* Subtle radial glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,transparent_60%)]" />

          {/* Curved bottom edge */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0">
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              preserveAspectRatio="none"
              className="block h-10 w-full sm:h-14 md:h-20"
            >
              <path
                d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z"
                fill="var(--background)"
              />
            </svg>
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-sm font-medium tracking-wide text-white/70"
            >
              {data.badge.replace(/--/g, "\u2014")}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease }}
              className="mt-5 font-display text-[clamp(36px,5.5vw,60px)] font-bold leading-[1.08] tracking-tight text-white"
            >
              {data.headlineLine1}
              <br />
              {data.headlineLine2}{" "}
              <span className="font-serif-display italic text-white/90">
                {data.headlineLine2Italic}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease }}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              {data.description.replace(/--/g, "\u2014")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <Button
                size="lg"
                className="min-w-[200px] bg-white text-accent hover:bg-white/90 font-semibold shadow-lg"
                asChild
              >
                <a href="/trupper">
                  Get started free <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              {data.ctaNote && (
                <span className="text-sm text-white/50">{data.ctaNote}</span>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dashboard image — overlaps the purple section */}
      {data.heroImage && (
        <div className="relative z-10 mx-auto -mt-28 max-w-4xl px-5 sm:-mt-36 sm:px-8 md:-mt-44 lg:-mt-52">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="overflow-hidden rounded-xl border border-border/40 bg-white shadow-[0_25px_80px_-16px_rgba(0,0,0,0.18)]"
          >
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              width={1200}
              height={750}
              className="block w-full"
              priority
            />
          </motion.div>
        </div>
      )}

      {/* Trust bar */}
      {data.trustLogos && data.trustLogos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mx-auto max-w-5xl px-5 pt-14 pb-4 sm:px-8 sm:pt-16"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {data.trustLogos.map((name) => (
              <span
                key={name}
                className="text-base font-bold tracking-tight text-muted-foreground/40 sm:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

export function UseCaseHero({ data }: { data: UseCaseHeroData }) {
  if (data.variant === "centered") {
    return <CenteredHero data={data} />;
  }
  return <DefaultHero data={data} />;
}
