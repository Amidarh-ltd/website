"use client";

import {
  BarChart3,
  BookOpen,
  Calendar,
  FileCheck,
  Lock,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "@/core/design-system/section";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";

const features = [
  {
    icon: BookOpen,
    title: "Course Management",
    description:
      "Organize subjects, classes, and curricula across your institution.",
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Track students, enrollments, and academic progress in one place.",
  },
  {
    icon: Calendar,
    title: "Academic Scheduling",
    description: "Coordinate classes, terms, and exam windows with ease.",
  },
  {
    icon: FileCheck,
    title: "Exam Management",
    description: "Create, deliver, and grade assessments within your LMS.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Generate insightful reports for learning outcomes and cohorts.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade controls to protect institutional data.",
  },
];

export default function Features() {
  return (
    <Section variant="muted">
      <SectionHeader
        eyebrow="Features"
        title="Everything institutions need to manage learning"
        description="Trupper brings learning operations into one reliable platform—from courses and students to exams and reporting."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="card-elevated p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)]"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <InstitutionSignupButton size="xl" />
      </div>
    </Section>
  );
}
