import { WaitlistButton } from "@/core/commons/waitlist";

export function Hero() {
    return (
      <div className="w-full py-20">
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
            {/* Your Content/Components */}
          </div>
        <section className="container mx-auto px-4 py-16 md:py-30">
          <div className="flex flex-col justify-center items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 max-[800px]:flex max-[800px]:flex-col max-[800px]:justify-center max-[800px]:items-center text-center">
              <h1 className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                Exam Management System
                <br className="hidden sm:block" />
                <span className="block sm:inline">for institutions</span>
              </h1>
              <p className="text-xl text-gray-70">
                Trupper is a comprehensive exam management system designed to streamline the entire exam process for institutions.
              </p>

              <div className="pt-4">
                <WaitlistButton />
              </div>
            </div>

            <div className="relative mt-20 overflow-hidden w-full">
              <div className="aspect-video relative">
              <div
                style={{
                  position: "relative",
                  boxSizing: "content-box",
                  maxHeight: "80vh",
                  width: "100%",
                  aspectRatio: "1.968019680196802",
                  padding: "40px 0 40px 0",
                }}
              >
                <iframe
                  src="https://app.supademo.com/embed/cmel7yld10ng5v9kqerqwf9oa?embed_v=2&utm_source=embed"
                  loading="lazy"
                  title="Vercel Demo"
                  allow="clipboard-write"
                  frameBorder={0}
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: "none" }}
                ></iframe>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    )
}