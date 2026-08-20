import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { useCases } from "@/modules/use-cases/data";

export const metadata: Metadata = {
  title: "Use Cases - See How Teams Use Trupper | Amidarh",
  description:
    "Discover how schools, partner training programs, and CBT centers use Trupper to manage courses, exams, live classes, and more.",
  openGraph: {
    title: "Use Cases - See How Teams Use Trupper | Amidarh",
    description:
      "Discover how schools, partner training programs, and CBT centers use Trupper to manage courses, exams, live classes, and more.",
    url: "https://amidarh.com/use-cases",
    siteName: "Amidarh",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://amidarh.com/use-cases",
  },
};

const useCaseCards = Object.values(useCases).map((uc) => {
  const hero = uc.hero;
  const isOnlineSchools = uc.slug === "online-schools";
  return {
    slug: uc.slug,
    title: isOnlineSchools
      ? "Online Schools"
      : hero.badge.replace("Use Case -- ", ""),
    headline: isOnlineSchools
      ? `${hero.headlineLine1} ${hero.headlineLine2}`
      : `${hero.headlineLine1} ${hero.headlineLine2} ${"headlineLine2Italic" in hero ? hero.headlineLine2Italic : ""}`,
    description: hero.description.replace(/--/g, "\u2014"),
  };
});

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="w-full px-5 sm:px-8">
          <div className="mx-auto max-w-7xl pt-32 pb-20 sm:pt-40">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Use Cases
              </p>
              <h1 className="mt-3 font-display text-[clamp(36px,5vw,56px)] font-bold leading-tight tracking-tight text-foreground">
                Built for how{" "}
                <span className="font-serif-display italic">you</span> teach.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Whether you run an online school, train distribution partners,
                or operate a CBT center, Trupper adapts to your workflow.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCaseCards.map((card) => (
                <Link
                  key={card.slug}
                  href={`/use-cases/${card.slug}`}
                  className="group flex flex-col rounded-2xl border border-border-soft bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lift"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {card.title}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-bold text-foreground">
                    {card.headline}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-foreground">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
