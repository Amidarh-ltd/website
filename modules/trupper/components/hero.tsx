"use client";

import { MarketingImage } from "@/components/ui/marketing-image";
import { WaitlistButton } from "@/core/commons/waitlist";
import { BRAND_IMAGES } from "@/lib/constants/site";
import { motion } from "framer-motion";
import { BookOpen, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <div className="mesh-hero w-full pt-28 md:pt-32">
      <section className="container mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-center lg:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Trupper
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Manage learning.
              <br />
              At any scale.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Trupper helps schools and universities run learning end to
              end—courses, students, scheduling, and reporting—with exam
              management built in when you need it.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="size-4 text-accent" />
                Courses & students
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="size-4 text-accent" />
                Faster operations
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="size-4 text-accent" />
                Secure by design
              </div>
            </div>
            <WaitlistButton size="xl" />
          </motion.div>

          <MarketingImage
            src={BRAND_IMAGES.trupper.dashboard.src}
            alt={BRAND_IMAGES.trupper.dashboard.alt}
            fit="contain"
            priority
            containerClassName="aspect-[4/3] bg-muted/30 shadow-[0_24px_64px_rgba(15,23,42,0.12)]"
          />
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              src="https://app.supademo.com/embed/cmel7yld10ng5v9kqerqwf9oa?embed_v=2&utm_source=embed"
              loading="lazy"
              title="Trupper product demo"
              allow="clipboard-write"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
