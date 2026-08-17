"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

const sections = [
  {
    number: "01",
    title: "Create courses your\nlearners will love",
    description:
      "Build structured courses with modules, lessons, videos, and documents. Add quizzes and assignments, then publish to your learners in one click. Duplicate courses or use templates to move fast.",
    capabilityLabel: "Course Creation",
    capabilities: [
      "Drag-and-Drop Builder",
      "Video & Document Uploads",
      "Module & Lesson Structure",
      "Quizzes & Assignments",
      "Progress Tracking",
      "Course Templates",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843431/flow_1_awn22i.png",
  },
  {
    number: "02",
    title: "Run live classes\nfrom your platform",
    description:
      "Schedule and host live classes directly inside Trupper. Share your screen, record sessions, track attendance, and let students ask questions — no Zoom or Google Meet needed.",
    capabilityLabel: "Live Classes",
    capabilities: [
      "Built-in Video Calls",
      "Screen Sharing & Recording",
      "Attendance Tracking",
      "Class Scheduling & Calendar",
      "Recurring Class Support",
      "Chat & Hand-Raise",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843744/cover_2_d8pzgl.png",
  },
  {
    number: "03",
    title: "Launch your institution\nin your own brand",
    description:
      "Go live with a branded platform — custom domain, your logo, your colors. Each institution gets its own isolated environment, instantly.",
    capabilityLabel: "Multitenancy",
    capabilities: [
      "Custom Domains",
      "Branded Themes",
      "Role-Based Access",
      "Data Isolation",
      "Bulk Onboarding",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786834532/branding_jimmtp.png",
  },
  {
    number: "04",
    title: "Run exams that\ncan't be gamed",
    description:
      "CBT engine with real-time proctoring signals, randomized questions, timed sessions, and instant auto-grading with detailed analytics.",
    capabilityLabel: "Exam Integrity",
    capabilities: [
      "Auto-Proctoring Signals",
      "Time Analytics",
      "Auto-Grading",
      "Result Exports",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835612/exams_xrhu6n.png",
  },
  {
    number: "05",
    title: "Let the AI assistant\ndo the admin work",
    description:
      '"Add 40 students to Class 3B." "Generate a quiz on photosynthesis." Your admin assistant understands natural language and executes multi-step tasks.',
    capabilityLabel: "Built for speed & teams of any size",
    capabilities: [
      "Wallet & Instant Withdrawal",
      "Google Workspace Export",
      "API Access",
      "Custom Roles & Permissions",
      "Offline-Friendly Exam Mode",
      "Domain Whitelisting",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835093/AI_Assistance_2_mqvmuh.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-0">
        {sections.map((section, index) => {
          const isReversed = index % 2 === 1;

          return (
            <motion.div
              key={section.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="border-t border-border-soft py-20 lg:py-24"
            >
              <div
                className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
                }`}
              >
                {/* Left — text content */}
                <div>
                  <p className="font-mono text-sm text-ink-3">
                    {section.number}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.1] text-ink whitespace-pre-line">
                    {section.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-2">
                    {section.description}
                  </p>
                </div>

                {/* Right — image */}
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  priority={index < 2}
                />
              </div>

              {/* Capabilities list */}
              <div className="mt-12 max-w-xl border-t border-border-soft pt-6 lg:mt-16">
                <p className="text-sm font-semibold text-ink">
                  {section.capabilityLabel}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-2">
                  {section.capabilities.map((cap) => (
                    <p key={cap} className="text-[14px] text-ink-3">
                      {cap}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
