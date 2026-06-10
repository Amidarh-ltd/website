"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Section, SectionHeader } from "@/core/design-system/section";
import {
  BRAND_IMAGES,
  FLOW_URL,
  TRUPPER_PATH,
} from "@/lib/constants/site";

const products = [
  {
    id: "trupper",
    href: TRUPPER_PATH,
    title: "Trupper",
    badge: "Live",
    description:
      "Exam management system for schools at every level—scheduling, delivery, grading, and reporting.",
    image: BRAND_IMAGES.trupper.dashboard,
    external: false,
    comingSoon: false,
  },
  {
    id: "flow",
    href: FLOW_URL,
    title: "Flow",
    badge: "Live",
    description:
      "AI-powered learning with generated courses, flashcards, quizzes, and progress tracking.",
    image: BRAND_IMAGES.flow,
    external: true,
    comingSoon: false,
  },
  {
    id: "cbt",
    href: "#",
    title: "Amidarh CBT",
    badge: "Coming soon",
    description:
      "Practice makes perfect—prepare for exams with a dedicated computer-based testing experience.",
    image: BRAND_IMAGES.note,
    external: false,
    comingSoon: true,
  },
] as const;

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const imageBlock = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          className="object-contain object-center bg-muted/40 p-4 transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
          {product.comingSoon ? (
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" />
              {product.badge}
            </span>
          ) : (
            product.badge
          )}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="mt-2 flex-1 text-muted-foreground leading-relaxed">
          {product.description}
        </p>
        {!product.comingSoon ? (
          <span className="mt-6 inline-flex items-center gap-1 font-semibold text-primary group-hover:text-accent">
            Try it out
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </div>
    </>
  );

  if (product.comingSoon) {
    return (
      <div className="card-elevated flex flex-col overflow-hidden opacity-90">
        {imageBlock}
      </div>
    );
  }

  if (product.external) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="card-elevated group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)]"
      >
        {imageBlock}
      </a>
    );
  }

  return (
    <Link
      href={product.href}
      className="card-elevated group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.12)]"
    >
      {imageBlock}
    </Link>
  );
}

export default function ProductsSection() {
  return (
    <Section id="products" variant="muted">
      <SectionHeader
        eyebrow="Products"
        title="Get started with Amidarh"
        description="Choose the product that fits your journey—personal learning with Flow or institutional exams with Trupper."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
