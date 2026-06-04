"use client";

import {
  BarChart3,
  ClipboardList,
  FileCheck,
  Lock,
  Settings,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "@/core/design-system/section";
import { WaitlistButton } from "@/core/commons/waitlist";

const features = [
  {
    icon: FileCheck,
    title: "Exam Management",
    description: "Manage exams, questions, and results with ease.",
  },
  {
    icon: ClipboardList,
    title: "Question Bank",
    description: "Create and organize question banks for every subject.",
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Track students, results, and academic progress in one place.",
  },
  {
    icon: BarChart3,
    title: "Report Generation",
    description: "Generate insightful reports for exams and cohorts.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Enterprise-grade controls to protect institutional data.",
  },
  {
    icon: Settings,
    title: "Customization",
    description: "Adapt exams, grading, and workflows to your policies.",
  },
];

export default function Features() {
  return (
    <Section variant="muted">
      <SectionHeader
        eyebrow="Features"
        title="Everything institutions need to run exams"
        description="Trupper brings exam operations into one reliable platform—from planning to results."
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
        <WaitlistButton size="xl" />
      </div>
    </Section>
  );
}
