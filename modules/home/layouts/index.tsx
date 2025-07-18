import Features from "../components/features";
import { Hero } from "../components/hero";
import Stats from "../components/stats";
import { Footer } from "@/core/navigation/footer";
import { Header } from "@/core/navigation/header";
import ProductsSection from "../components/products";
import { Specs } from "../components/specs";
import Banner from "../components/banner.";
import Solution from "../components/solution";

export function HomeLayout() {
    return (
      <main>
        <Header/>
        <Hero/>
        <Stats/>
        <Solution/>
        {/* <UnifiedSolution/> */}
        <Features/>
        <div className="flex justify-center items-center">
          <Specs/>
        </div>
        <ProductsSection/>
        <Banner text="Education" product="Amidarh"/>
        <Footer/>
      </main>
    );
  }