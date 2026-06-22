"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";
import { useStore } from "@/lib/utils/zustand/store";

export default function FinalCta() {
  const setInstitutionSignup = useStore((state) => state.setInstitutionSignup);

  return (
    <section className="w-full bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-semibold text-white">
          Pick the product that's right for you
        </h2>
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/65">
          Whether you're learning on your own or running an institution,
          there's a place to start.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button
            size="xl"
            variant="accent"
            className="min-h-[44px]"
            onClick={() => window.open(FLOW_URL, "_blank")}
          >
            Start with Flow →
          </Button>
          <Button
            size="xl"
            className="min-h-[44px] bg-white text-ink hover:bg-white/90"
            onClick={() => setInstitutionSignup(true)}
          >
            Request institution access →
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
