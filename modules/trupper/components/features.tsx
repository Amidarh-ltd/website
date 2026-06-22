"use client";

import { motion } from "framer-motion";
import {
  BarChart2,
  BookOpen,
  FileText,
  type LucideIcon,
  Users,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { MarketingImage } from "@/components/ui/marketing-image";
import { UNSPLASH_IMAGES } from "@/lib/constants/site";

const sections: {
  icon: LucideIcon;
  title: string;
  description: string;
  image: { src: string; alt: string };
}[] = [
  {
    icon: BookOpen,
    title: "Courses & Resources",
    description:
      "Build course catalogs with modules, lessons, books, and study materials. Assign to cohorts or individual learners. Control who sees what with role-based permissions.",
    image: UNSPLASH_IMAGES.trupperFeatures.courses,
  },
  {
    icon: Video,
    title: "Live Classes",
    description:
      "Host live sessions and virtual classrooms — whether you're a school running a term, a tutor teaching one-on-one, or a company training staff remotely.",
    image: UNSPLASH_IMAGES.trupperFeatures.liveClasses,
  },
  {
    icon: FileText,
    title: "Exam Engine",
    description:
      "Create exams with question banks, time limits, and auto-grading. Support for MCQ, theory, and CBT formats. Anti-cheat built in.",
    image: UNSPLASH_IMAGES.trupperFeatures.examEngine,
  },
  {
    icon: Users,
    title: "Student & Trainee Records",
    description:
      "Manage enrollment, attendance, schedules, and records in one view — for students, course participants, or staff trainees. Export to CSV anytime.",
    image: UNSPLASH_IMAGES.trupperFeatures.records,
  },
  {
    icon: BarChart2,
    title: "Performance Analytics",
    description:
      "Real-time dashboards for administrators and trainers. Track cohort progress, identify at-risk learners, and generate reports.",
    image: UNSPLASH_IMAGES.trupperFeatures.analytics,
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const reversed = index % 2 === 1;

          return (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(reversed && "lg:order-2")}>
                <div className="flex size-11 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {section.title}
                </h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-2">
                  {section.description}
                </p>
              </div>

              <MarketingImage
                src={section.image.src}
                alt={section.image.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName={cn(
                  "aspect-[4/3] border border-border-soft shadow-[var(--shadow-card)]",
                  reversed && "lg:order-1",
                )}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
