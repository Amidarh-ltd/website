"use client";

import { motion } from "framer-motion";
import { Shield, Database } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import Link from "next/link";

export default function Security() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-2xl bg-surface px-8 py-12 sm:px-12 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Left — headline */}
          <div className="border-r-0 pr-0 lg:border-r lg:border-border-soft lg:pr-10">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-3">
              Security
            </p>
            <h3 className="mt-3 font-display text-[clamp(24px,3vw,32px)] font-bold leading-[1.15] text-ink">
              Secure by design.
            </h3>
            <p className="font-display text-[clamp(24px,3vw,32px)] font-bold leading-[1.15] text-ink-3">
              Safe by default.
            </p>
            <Link
              href="/privacy"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
            >
              Learn more <span aria-hidden="true">&gt;</span>
            </Link>
          </div>

          {/* NDPR */}
          <div>
            <Shield className="size-8 text-ink-3" />
            <h4 className="mt-4 font-display text-lg font-semibold text-ink">
              NDPR Alignment
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
              Data processing follows NDPR guidelines. Privacy policy and DPA
              provided to every institution.
            </p>
          </div>

          {/* Data Residency */}
          <div>
            <Database className="size-8 text-ink-3" />
            <h4 className="mt-4 font-display text-lg font-semibold text-ink">
              Data Residency
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
              All institution data stored within Nigeria, with configurable
              residency for international institutions.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
