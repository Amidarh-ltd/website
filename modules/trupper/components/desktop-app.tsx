"use client";

import { motion } from "framer-motion";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { Tag } from "@/core/design-system/tag";

const platforms: { name: string; detail: string; icon: IconType }[] = [
  { name: "macOS", detail: "Apple silicon & Intel", icon: FaApple },
  { name: "Windows", detail: "Windows 10 & 11", icon: FaWindows },
  { name: "Linux", detail: "deb & AppImage", icon: FaLinux },
];

export default function DesktopApp() {
  return (
    <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <Tag>Coming soon</Tag>
          <h2 className="mt-5 font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
            Trupper, right on your desktop
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            A native desktop app is on the way for macOS, Windows, and Linux —
            so you can teach, grade, and manage your classroom without a
            browser tab.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <motion.div
                key={platform.name}
                variants={fadeUp}
                className="relative flex flex-col items-center gap-3 rounded-xl border border-border-soft bg-surface px-6 py-8 text-center"
              >
                <span className="absolute top-3 right-3 rounded-pill bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                  Soon
                </span>
                <div className="flex size-12 items-center justify-center rounded-full bg-white text-ink shadow-[var(--shadow-card)]">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {platform.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-2">{platform.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-2"
        >
          Want to be notified the moment it ships? Reach out through your
          onboarding contact and we&apos;ll add you to the early access list.
        </motion.p>
      </div>
    </section>
  );
}
