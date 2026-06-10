"use client";

import { Button } from "@/components/ui/button";
import { MarketingImage } from "@/components/ui/marketing-image";
import { Section, SectionHeader } from "@/core/design-system/section";
import { BRAND_IMAGES, TRUPPER_PATH } from "@/lib/constants/site";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  FileCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

const trupperBenefits = [
  {
    icon: BookOpen,
    title: "Course & curriculum",
    description:
      "Organize subjects, classes, and learning paths in one system.",
  },
  {
    icon: Users,
    title: "Student management",
    description: "Organize cohorts, results, and academic records with clarity.",
  },
  {
    icon: Calendar,
    title: "Academic scheduling",
    description: "Coordinate classes, terms, and exam windows without friction.",
  },
  {
    icon: FileCheck,
    title: "Exam management",
    description:
      "Create, deliver, and grade assessments as part of your LMS workflow.",
  },
];

export default function TrupperSpotlight() {
  return (
    <Section id="trupper">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-8">
          <SectionHeader
            align="left"
            eyebrow="Trupper"
            title="Learning management built for institutions"
            description="Trupper is Amidarh's learning management system for schools and universities—manage courses, students, and academic operations in one place, with powerful exam tools built in."
            className="mb-0"
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {trupperBenefits.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button size="xl" className="group" asChild>
            <Link href={TRUPPER_PATH}>
              Explore Trupper
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <MarketingImage
          src={BRAND_IMAGES.trupper.dashboard.src}
          alt={BRAND_IMAGES.trupper.dashboard.alt}
          fit="contain"
          containerClassName="aspect-[4/3] bg-muted/30 shadow-[0_24px_64px_rgba(15,23,42,0.12)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </Section>
  );
}
