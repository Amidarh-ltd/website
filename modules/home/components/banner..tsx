"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FLOW_URL, UNSPLASH_IMAGES } from "@/lib/constants/site";
import { ArrowRight } from "lucide-react";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";

type BannerProps = {
  variant?: "flow" | "trupper";
};

export default function Banner({ variant = "flow" }: BannerProps) {
  const isTrupper = variant === "trupper";

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="container relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <Image
          src={UNSPLASH_IMAGES.cta.src}
          alt={UNSPLASH_IMAGES.cta.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center text-brand-foreground md:py-28">
          {isTrupper ? (
            <>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Be first to transform how your institution manages learning
              </h2>
              <p className="mt-4 max-w-xl text-lg text-brand-foreground/90">
                Sign up your institution on Trupper to get started with our
                learning management platform—with exams built in.
              </p>
              <InstitutionSignupButton size="xl" className="mt-8" />
            </>
          ) : (
            <>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Start learning smarter with Flow today
              </h2>
              <p className="mt-4 max-w-xl text-lg text-brand-foreground/90">
                Personalized courses, flashcards, and quizzes—built for
                how you actually study.
              </p>
              <Button
                size="xl"
                variant="secondary"
                className="mt-8 group bg-brand-foreground text-brand hover:bg-brand-foreground/90"
                asChild
              >
                <Link href={FLOW_URL} target="_blank" rel="noopener noreferrer">
                  Get started with Flow
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
