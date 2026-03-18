import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_10%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(124,58,237,0.12),transparent_55%)]"
      />
      <Container className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            <span>AI-powered outreach & campaign automation</span>
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Turn Cold Outreach Into Warm Conversations
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Manage prospects, launch campaigns, automate follow-ups, and track replies
            — all in one clean AI-first workflow.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#early-access" className="w-full sm:w-auto">
              Get Early Access
            </Button>
            <Button href="#demo" variant="secondary" className="w-full sm:w-auto">
              Watch Demo
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted">
            Currently in early access — shaping the future of AI outreach
          </p>
        </Reveal>

        <Reveal delayMs={120} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.22),transparent_70%)] blur-2xl" />
          <div className="relative rounded-2xl bg-[#0e0e14] p-2 ring-1 ring-white/10 shadow-[0_20px_80px_-50px_rgba(124,58,237,0.55)]">
            <Image
              src="/landing/dashboard-hero.svg"
              alt="Lumina AI dashboard preview"
              width={1200}
              height={760}
              className="h-auto w-full rounded-2xl"
              priority
            />

            <div className="pointer-events-none absolute left-4 top-4 hidden items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-white/10 backdrop-blur sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span>Campaign Active</span>
            </div>
            <div className="pointer-events-none absolute right-4 top-4 hidden rounded-full bg-background/60 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-white/10 backdrop-blur sm:inline-flex">
              +3 Replies
            </div>
            <div className="pointer-events-none absolute bottom-4 left-4 hidden items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-white/10 backdrop-blur sm:inline-flex">
              <span className="text-primary">AI Reply</span>
              <span className="text-muted">drafted</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-muted">
            <span>Prospects • Campaigns • Insights</span>
            <span className="hidden sm:inline">Updated in real-time</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

