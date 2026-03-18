import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Demo() {
  return (
    <Section id="demo" glow="both">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Demo"
            title="See Lumina in action"
            description="A quick walkthrough of the AI-powered workflow—from prospect to reply."
            align="center"
          />
        </Reveal>

        <Reveal delayMs={120} className="mt-12">
          <Card className="group overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 shadow-[0_25px_120px_-80px_rgba(124,58,237,0.55)]">
            <div className="relative aspect-video w-full">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_10%,rgba(124,58,237,0.22),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%)]"
              />

              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="relative text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-background/60 ring-1 ring-white/10 backdrop-blur transition duration-300 group-hover:scale-105">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 8l6 4-6 4V8z"
                        fill="currentColor"
                        opacity="0.92"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Demo video placeholder
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Swap this area with a Loom/YouTube embed when ready.
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 transition duration-300 group-hover:scale-[1.01]" />
            </div>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

