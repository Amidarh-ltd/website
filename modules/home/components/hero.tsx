"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Hero() {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push("/signup");
    };

    return (
      <div className="w-full pt-20">
        {/* Main Hero Section */}
        <div className="min-h-screen w-full bg-white fixed top-0 left-0 right-0 bottom-0 -z-1">
          {/* Magenta Orb Grid Background */}
          <div
          className="absolute inset-0 z-0"
          style={{
            background: "white",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
            `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
          />
          </div>
        <section className="container mx-auto px-4 py-16 md:py-30">
          <div className="flex justify-center items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 max-[800px]:flex max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center text-center">
              <h1 className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Empowering <span className="text-blue-600">Education</span>
                <br />
                at Every Step
              </h1>
              <p className="text-xl text-gray-70">
                  Bringing together the best tools to make Learning a super experience.
              </p>

              <div className="pt-4">
                <Button className="bg-primary hover:bg-[#24216A] text-white px-8 py-6 text-lg rounded-3xl"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* <div className="relative bg-gray-600 rounded-2xl overflow-hidden">
              <div className="aspect-video relative">

              </div>
            </div> */}
          </div>
        </section>
      </div>

    )
}