import { Header } from "@/core/navigation/header";
import { Hero } from "../components/hero";
import TrustBar from "../components/trust-bar";
import ValueHeadline from "../components/value-headline";
import FeatureCards from "../components/feature-cards";
import Features from "../components/features";
import DesktopApp from "../components/desktop-app";
import Pricing from "../components/pricing";
import Testimonial from "../components/testimonial";
import Security from "../components/security";
import Changelog from "../components/changelog";
import ClosingCta from "../components/closing-cta";
import TrupperFooter from "../components/trupper-footer";

export default function TrupperLayout() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <ValueHeadline />
      <FeatureCards />
      <Features />
      <DesktopApp />
      <Pricing />
      <Testimonial />
      <Security />
      <Changelog />
      <ClosingCta />
      <TrupperFooter />
    </main>
  );
}
