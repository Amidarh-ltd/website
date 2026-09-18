"use client";

import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { ContactHero } from "./components/hero";
import { ContactForm } from "./components/form";
import { ContactChannels } from "./components/channels";
import { ContactFaq } from "./components/faq";

export function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <div className="w-full px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 pb-24 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            <ContactForm />
            <ContactChannels />
          </div>
        </div>
      </div>
      <ContactFaq />
      <Footer />
    </main>
  );
}
