import Features from "../components/features";
import { Hero } from "../components/hero";
import { Footer } from "@/core/navigation/footer";
import { Header } from "@/core/navigation/header";
import ProductsSection from "../components/products";
import { Specs } from "../components/specs";
import Banner from "../components/banner.";
import Solution from "../components/solution";
import FlowSpotlight from "../components/flow-spotlight";
import TrupperSpotlight from "../components/trupper-spotlight";

export function HomeLayout() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FlowSpotlight />
      <TrupperSpotlight />
      <Solution />
      <Features />
      <Specs />
      <ProductsSection />
      <Banner />
      <Footer />
    </main>
  );
}
