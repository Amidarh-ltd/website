import { Metadata } from "next";
import { ContactPage } from "@/modules/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Amidarh team. Reach out for support, partnerships, demos, or general inquiries.",
  alternates: {
    canonical: "https://amidarh.com/contact",
  },
  openGraph: {
    title: "Contact Us | Amidarh",
    description:
      "Get in touch with the Amidarh team. Reach out for support, partnerships, demos, or general inquiries.",
    url: "https://amidarh.com/contact",
    siteName: "Amidarh",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ContactPage />;
}
