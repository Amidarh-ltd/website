"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-image";

export default function ClosingCta() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="relative w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-surface"
        style={{ backgroundImage: `url('${images.closingCta}')` }}
      />
      <div aria-hidden className="absolute inset-0 bg-white/75" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(36px,5vw,60px)] font-bold leading-[1.1] text-ink"
        >
          Run your institution
          <br />
          without the{" "}
          <span className="font-[var(--font-serif-display)] italic">chaos</span>
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <InstitutionSignupButton
            size="lg"
            variant="outline"
            label="Get Early Access"
          />
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://calendly.com/amidarh01/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a demo
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
