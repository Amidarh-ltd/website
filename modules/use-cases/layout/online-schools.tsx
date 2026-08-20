"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Zap,
  DollarSign,
  TrendingUp,
  Rocket,
  Palette,
  BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { OnlineSchoolsData } from "../types";

const ease = [0.22, 1, 0.36, 1] as const;

const benefitIcons: Record<string, typeof Zap> = {
  zap: Zap,
  "dollar-sign": DollarSign,
  "trending-up": TrendingUp,
  rocket: Rocket,
  palette: Palette,
  "bar-chart-2": BarChart2,
};

const statColors = {
  purple: "bg-accent-soft",
  green: "bg-flow-soft",
  amber: "bg-amber-50",
} as const;

// ─── Hero ─────────────────────────────────────────────────────────
function Hero({ data }: { data: OnlineSchoolsData["hero"] }) {
  return (
    <section className="w-full bg-background px-5 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center pt-28 pb-16 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-accent"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          {data.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
          className="mt-8 font-display text-[clamp(40px,5.5vw,56px)] font-bold leading-[1.1] tracking-tight text-foreground"
        >
          {data.headlineLine1}
          <br />
          <span className="text-accent">{data.headlineLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {data.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.36, ease }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          {data.trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-accent-soft">
                <Check className="size-3 text-accent" />
              </span>
              {badge}
            </div>
          ))}
        </motion.div>

        <motion.img
          src={data.image.src}
          alt={data.image.alt}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-12 aspect-[11/6] w-full max-w-[1100px] overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-lg"
        />
      </div>
    </section>
  );
}

// ─── Built For Tags ───────────────────────────────────────────────
function BuiltForTags({ tags }: { tags: string[] }) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto flex max-w-7xl flex-col items-center gap-6 py-16"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Built for modern schools
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-soft bg-background px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────
function StatsSection({ data }: { data: OnlineSchoolsData["stats"] }) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl py-20"
      >
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-accent"
          >
            {data.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(28px,4vw,36px)] font-bold tracking-tight text-foreground"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {data.cards.map((card) => (
            <motion.div
              key={card.label}
              variants={fadeUp}
              className={`rounded-2xl p-8 ${statColors[card.color]}`}
            >
              <p className="font-display text-5xl font-bold text-foreground">
                {card.value}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {card.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────
function HowItWorks({ data }: { data: OnlineSchoolsData["howItWorks"] }) {
  return (
    <section className="w-full bg-background px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl py-20"
      >
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-accent"
          >
            {data.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(28px,4vw,36px)] font-bold tracking-tight text-foreground"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-border-soft sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {data.steps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="p-6">
              <div className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Features Grid ────────────────────────────────────────────────
function FeaturesGrid({
  data,
}: {
  data: OnlineSchoolsData["featuresGrid"];
}) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl py-20"
      >
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-accent"
            >
              {data.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-[clamp(28px,4vw,36px)] font-bold leading-tight tracking-tight text-foreground"
            >
              {data.title}
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-muted-foreground lg:text-right"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="border-t border-border-soft" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature, i) => (
            <motion.div
              key={feature.number}
              variants={fadeUp}
              className={`p-7 ${
                i % 3 !== 0 ? "sm:border-l sm:border-border-soft" : ""
              } ${i < 6 ? "border-b border-border-soft" : ""}`}
            >
              <span className="text-sm font-bold text-accent/40">
                {feature.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────
function BenefitsSection({
  data,
}: {
  data: OnlineSchoolsData["benefits"];
}) {
  return (
    <section className="w-full bg-background px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl py-20"
      >
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-accent"
          >
            {data.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(28px,4vw,36px)] font-bold tracking-tight text-foreground"
          >
            {data.title}
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const Icon = benefitIcons[item.icon] ?? Zap;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-xl border border-border-soft bg-card p-7"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent-soft">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────
function ComparisonTable({
  data,
}: {
  data: OnlineSchoolsData["comparison"];
}) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-5xl py-20"
      >
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-accent"
          >
            {data.label}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(28px,4vw,36px)] font-bold tracking-tight text-foreground"
          >
            {data.title}
          </motion.h2>
        </div>

        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-2xl border border-border-soft"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-background">
            {["Feature", "Traditional", "With Trupper"].map((h) => (
              <div key={h} className="px-6 py-4 text-sm font-semibold text-foreground">
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {data.rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${
                i % 2 === 0 ? "bg-card" : "bg-background"
              }`}
            >
              <div className="px-6 py-3.5 text-sm font-medium text-foreground">
                {row.feature}
              </div>
              <div className="px-6 py-3.5 text-sm text-muted-foreground">
                {row.traditional}
              </div>
              <div className="flex items-center gap-2 px-6 py-3.5 text-sm text-foreground">
                <Check className="size-4 text-accent" />
                {row.withTrupper}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Testimonial ──────────────────────────────────────────────────
function Testimonial({ data }: { data: OnlineSchoolsData["testimonial"] }) {
  return (
    <section className="w-full bg-background px-5 sm:px-8">
      <div className="mx-auto max-w-7xl py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="rounded-2xl border border-border-soft bg-card px-8 py-16 sm:px-16"
        >
          <blockquote className="mx-auto max-w-3xl text-center">
            <span className="font-display text-6xl leading-none text-accent/20">
              &ldquo;
            </span>
            <p className="mt-2 text-lg leading-relaxed text-foreground sm:text-xl">
              {data.quote}
            </p>
            <footer className="mt-8">
              <p className="text-sm font-semibold text-foreground">
                {data.authorName}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {data.authorRole}
              </p>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Dark CTA ─────────────────────────────────────────────────────
function DarkCTA({ data }: { data: OnlineSchoolsData["closingCta"] }) {
  return (
    <section className="w-full px-5 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink px-8 py-24 text-center sm:px-16"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(32px,5vw,44px)] font-bold leading-tight tracking-tight text-white"
        >
          {data.headlineLine1}
          <br />
          <span className="text-accent">{data.headlineLine2}</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60"
        >
          {data.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="trupper" size="lg" asChild>
            <a href="/trupper">
              Get started free <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            variant="paper"
            size="lg"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a
              href="https://calendly.com/amidarh01/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Layout ───────────────────────────────────────────────────────
export function OnlineSchoolsLayout({ data }: { data: OnlineSchoolsData }) {
  return (
    <>
      <Hero data={data.hero} />
      <BuiltForTags tags={data.builtForTags} />
      <StatsSection data={data.stats} />
      <HowItWorks data={data.howItWorks} />
      <FeaturesGrid data={data.featuresGrid} />
      <BenefitsSection data={data.benefits} />
      <ComparisonTable data={data.comparison} />
      <Testimonial data={data.testimonial} />
      <DarkCTA data={data.closingCta} />
    </>
  );
}
