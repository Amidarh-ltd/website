import { Header } from "@/core/navigation/header";
import { Footer } from "@/core/navigation/footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <header className="mb-12">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </header>
        <div className="legal-content space-y-8 text-base leading-relaxed text-ink/80">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}
