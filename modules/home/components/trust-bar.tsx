"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function TrustBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="w-full px-5 py-10 sm:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <span className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
          Trusted by learners and institutions
        </span>
        <span className="text-[15px] font-medium text-muted-foreground/60">
          40,000+ learners
        </span>
        <span className="text-[15px] font-medium text-muted-foreground/60">
          120+ institutions
        </span>
        <span className="text-[15px] font-medium text-muted-foreground/60">
          West Africa
        </span>
      </div>
    </motion.section>
  );
}
