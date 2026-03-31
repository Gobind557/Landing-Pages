import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function ProductPreview() {
  return (
    <Section glow="both">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Product"
            title="A dashboard built for outbound focus"
            description="One place to manage prospects, run campaigns, and let AI handle follow-ups without losing control."
            align="center"
          />
        </Reveal>

        <Reveal delayMs={120} className="mt-12">
          <div className="relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl bg-[#0e0e14] p-2 ring-1 ring-white/10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%)]"
              />
              <img
                src="/Dashboard.png"
                alt="Lumina dashboard preview"
                className="relative h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

