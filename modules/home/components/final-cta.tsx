"use client";

import { motion } from "framer-motion";
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
        <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-tight text-white">
          Pick the product
        </h2>
        <p className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-tight text-white">
          that&apos;s right for{" "}
          <span className="font-serif-display italic">you.</span>
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button
            size="xl"
            className="bg-white text-ink hover:bg-white/90"
            onClick={() => window.open(FLOW_URL, "_blank")}
          >
            Start with Flow
          </Button>
          <Button
            size="xl"
            className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            onClick={() => setInstitutionSignup(true)}
          >
            Request institution access
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
