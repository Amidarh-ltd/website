import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { Hero } from "../components/hero";
import Features from "../components/features";
import AccessFaq from "../components/access-faq";

export default function TrupperLayout() {
  return (
    <main className="min-h-screen bg-background">
      <Header isTrupper />
      <Hero />
      <Features />
      <AccessFaq />
      <Footer />
    </main>
  );
}
