import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <Section divider={false}>
      <Container>
        <Reveal>
          <Card
            id="early-access"
            className="relative overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 shadow-[0_35px_140px_-110px_rgba(124,58,237,0.65)] sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_0%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(900px_circle_at_100%_60%,rgba(124,58,237,0.12),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%)]"
            />
            <div className="relative">
              <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                Ready to Get More Replies From Your Outreach?
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-muted">
                Start using Lumina AI and automate your outbound workflow today.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#early-access" className="w-full sm:w-auto">
                  Get Early Access
                </Button>
                <Button
                  href="#demo"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

