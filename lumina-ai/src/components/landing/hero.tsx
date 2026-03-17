import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(124,58,237,0.12),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(124,58,237,0.10),transparent_55%)]"
      />
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-muted ring-1 ring-border">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            <span>AI-powered outreach & campaign automation</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Automate Your Cold Outreach With AI
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Lumina helps you manage prospects, launch automated email campaigns,
            and convert leads with AI-powered insights.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#pricing" className="w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button href="#demo" variant="secondary" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>

          <p className="mt-3 text-sm text-muted">No credit card required</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent)] blur-2xl" />
          <div className="rounded-3xl bg-card p-2 ring-1 ring-border shadow-sm">
            <Image
              src="/landing/dashboard-hero.svg"
              alt="Lumina AI dashboard preview"
              width={1200}
              height={760}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-muted">
            <span>Prospects • Campaigns • Insights</span>
            <span className="hidden sm:inline">Updated in real-time</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

