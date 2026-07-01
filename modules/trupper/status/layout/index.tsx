import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";
import StatusOverview from "../components/status-overview";

export default function StatusLayout() {
  return (
    <main className="min-h-screen bg-background">
      <Header isTrupper />

      <section className="w-full bg-surface px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
              Trupper system status
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
              Live health of the services that power Trupper, refreshed
              automatically every 45 seconds.
            </p>
          </div>

          <div className="mt-12">
            <StatusOverview />
          </div>

          <p className="mt-8 text-center text-[12px] text-ink-2">
            All times shown in your local timezone.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
