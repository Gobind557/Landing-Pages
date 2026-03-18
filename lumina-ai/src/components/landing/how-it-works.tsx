import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Add Prospects",
    description: "Import leads manually or via CSV.",
    pill: "Step 1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Launch Campaigns",
    description: "Create automated email sequences.",
    pill: "Step 2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16v16H4V4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M4 7h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 11h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 15h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Track & Optimize",
    description: "Monitor replies and optimize campaigns with AI insights.",
    pill: "Step 3",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 12h6l3 8 4-16 2 8h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function HowItWorks() {
  return (
    <Section id="how-it-works" glow="right">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Workflow"
            title="A simple loop: ship messages, learn faster"
            description="Set up once, then let Lumina run follow-ups and surface what’s working—without losing your voice."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal key={s.title} delayMs={idx * 80}>
              <Card className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 shadow-none transition duration-300 hover:bg-white/10 hover:ring-[rgba(124,58,237,0.40)]">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted ring-1 ring-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{s.pill}</span>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[rgba(124,58,237,0.14)] text-(--color-primary) ring-1 ring-[rgba(124,58,237,0.24)]">
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.description}</p>

                <div className="mt-6 rounded-2xl bg-background/50 p-4 ring-1 ring-white/10">
                  <div className="h-2 w-24 rounded-full bg-white/10" />
                  <div className="mt-3 h-2 w-40 rounded-full bg-white/10" />
                  <div className="mt-3 h-2 w-32 rounded-full bg-white/10" />
                  <div className="mt-4 h-8 w-full rounded-xl bg-[rgba(124,58,237,0.12)] ring-1 ring-[rgba(124,58,237,0.22)]" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

