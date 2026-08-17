"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
  BookOpen,
  Video,
  FileText,
  BarChart3,
  Palette,
  Users,
} from "lucide-react";

const sections = [
  {
    number: "01",
    icon: BookOpen,
    title: "Create and manage courses with ease",
    description:
      "Build structured courses with modules, lessons, and resources. Upload videos, documents, and quizzes — then publish to your learners in one click.",
    capabilities: [
      "Drag-and-drop course builder",
      "Video & document uploads",
      "Module and lesson structure",
      "Quizzes & assignments",
      "Progress tracking per learner",
      "Course duplication & templates",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843431/flow_1_awn22i.png",
  },
  {
    number: "02",
    icon: Video,
    title: "Run live classes from your platform",
    description:
      "Schedule and host live classes directly inside Trupper. Share screens, record sessions, and manage attendance — no third-party tools needed.",
    capabilities: [
      "Built-in video conferencing",
      "Screen sharing & recording",
      "Attendance tracking",
      "Class scheduling & calendar",
      "Recurring class support",
      "Chat & hand-raise",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786843744/cover_2_d8pzgl.png",
  },
  {
    number: "03",
    icon: FileText,
    title: "Exams that can't be gamed",
    description:
      "CBT engine with real-time proctoring signals, randomized questions, timed sessions, and instant auto-grading with detailed analytics.",
    capabilities: [
      "Question bank management",
      "Randomized question order",
      "Timed exam sessions",
      "Auto-grading & results",
      "Anti-cheat proctoring signals",
      "Result export & analytics",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835612/exams_xrhu6n.png",
  },
  {
    number: "04",
    icon: Palette,
    title: "Your brand, your platform",
    description:
      "Launch a fully branded LMS with your logo, colors, and custom domain. Each institution gets its own isolated environment, ready in minutes.",
    capabilities: [
      "Custom domain & branding",
      "Logo & color themes",
      "Role-based access control",
      "Data isolation per tenant",
      "Bulk student onboarding",
      "White-label experience",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786834532/branding_jimmtp.png",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Analytics that drive decisions",
    description:
      "Track student progress, course completion rates, exam performance, and revenue — all from a single dashboard with exportable reports.",
    capabilities: [
      "Student progress dashboards",
      "Course completion rates",
      "Exam performance analytics",
      "Revenue & payment reports",
      "Exportable CSV reports",
      "Real-time activity feed",
    ],
    image:
      "https://res.cloudinary.com/dl5dyntsp/image/upload/v1786835093/AI_Assistance_2_mqvmuh.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isReversed = index % 2 === 1;

          return (
            <motion.div
              key={section.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="border-t border-border-soft py-16 lg:py-20"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
                }`}
              >
                {/* Text */}
                <motion.div variants={fadeUp} className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-accent-soft">
                      <Icon className="size-5 text-accent" />
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {section.number}
                    </p>
                  </div>
                  <h3 className="mt-5 font-display text-[clamp(24px,3vw,36px)] font-bold leading-tight text-foreground">
                    {section.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2.5">
                    {section.capabilities.map((cap) => (
                      <p
                        key={cap}
                        className="text-sm text-muted-foreground before:mr-2 before:text-accent before:content-['✓']"
                      >
                        {cap}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={fadeUp}
                  className="overflow-hidden rounded-2xl bg-surface"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
