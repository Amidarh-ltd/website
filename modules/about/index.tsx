"use client";

import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { AboutHero } from "./components/hero";
import { Mission } from "./components/mission";
import { Products } from "./components/products";
import { Values } from "./components/values";
import { AboutCta } from "./components/cta";

export function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <Mission />
      <Products />
      <Values />
      <AboutCta />
      <Footer />
    </main>
  );
}
