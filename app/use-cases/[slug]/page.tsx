import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { UseCaseLayout } from "@/modules/use-cases/layout";
import { OnlineSchoolsLayout } from "@/modules/use-cases/layout/online-schools";
import { useCases, useCaseSlugs, onlineSchools } from "@/modules/use-cases/data";
import type { UseCaseData } from "@/modules/use-cases/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = useCases[slug];
  if (!data) return {};

  const badge =
    slug === "online-schools"
      ? "Online Schools"
      : data.hero.badge.replace("Use Case -- ", "");
  const title = `${badge} - Trupper Use Case | Amidarh`;
  const description =
    slug === "online-schools"
      ? onlineSchools.hero.description
      : (data as UseCaseData).hero.description.replace(/--/g, "\u2014");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://amidarh.com/use-cases/${slug}`,
      siteName: "Amidarh",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://amidarh.com/use-cases/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const data = useCases[slug];
  if (!data) notFound();

  return (
    <>
      <Header />
      <main>
        {slug === "online-schools" ? (
          <OnlineSchoolsLayout data={onlineSchools} />
        ) : (
          <UseCaseLayout data={data as UseCaseData} />
        )}
      </main>
      <Footer />
    </>
  );
}
