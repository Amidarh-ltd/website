import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import { Hero } from "../components/hero";
import Features from "../components/features";
import Banner from "@/modules/home/components/banner.";

export default function TrupperLayout() {
  return (
    <main>
      <Header isTrupper={true} />
      <Hero />
      <Features />
      <div className="my-20">
        <Banner product="Trupper" text="Exam Management" />
      </div>
      <Footer />
    </main>
  );
}
