import Features from "../components/features";
import { Hero } from "../components/hero";
import TrustBar from "../components/trust-bar";
import ValueHeadline from "../components/value-headline";
import FeatureCards from "../components/feature-cards";
import HowItWorks from "../components/how-it-works";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import FinalCta from "../components/final-cta";
import { Footer } from "@/core/navigation/footer";
import { Header } from "@/core/navigation/header";

export function HomeLayout() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBar />
      <ValueHeadline />
      <FeatureCards />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
