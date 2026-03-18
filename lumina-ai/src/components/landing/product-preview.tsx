import Image from "next/image";
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
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl bg-[#0e0e14] p-2 ring-1 ring-white/10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%)]"
              />
              <Image
                src="/landing/dashboard-large.svg"
                alt="Lumina dashboard large preview"
                width={1400}
                height={900}
                className="relative h-auto w-full rounded-xl"
              />

              <FloatingLabel className="left-4 top-4" dot>
                Campaign Active
              </FloatingLabel>
              <FloatingLabel className="right-4 top-4">+3 Replies</FloatingLabel>
              <FloatingLabel className="bottom-4 left-4">
                <span className="text-primary">AI Reply</span>{" "}
                <span className="text-muted">suggested</span>
              </FloatingLabel>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function FloatingLabel({
  children,
  className = "",
  dot = false,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute hidden items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-medium text-foreground ring-1 ring-white/10 backdrop-blur sm:inline-flex ${className}`}
    >
      {dot ? <span className="h-1.5 w-1.5 rounded-full bg-primary" /> : null}
      {children}
    </div>
  );
}

