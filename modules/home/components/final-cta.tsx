"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { FLOW_URL } from "@/lib/constants/site";
import { useStore } from "@/lib/utils/zustand/store";

export default function FinalCta() {
  const setInstitutionSignup = useStore((state) => state.setInstitutionSignup);

  return (
    <section className="w-full bg-ink px-5 py-24 sm:px-8 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-700 text-white">
          Pick the product that&apos;s right for you
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-[17px]">
          Whether you&apos;re learning on your own or running an institution,
          there&apos;s a place to start.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button
            size="xl"
            variant="trupper"
            onClick={() => window.open(FLOW_URL, "_blank")}
          >
            Start with Flow <ArrowRight className="size-4" />
          </Button>
          <Button
            size="xl"
            className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            onClick={() => setInstitutionSignup(true)}
          >
            Request institution access <ArrowRight className="size-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
