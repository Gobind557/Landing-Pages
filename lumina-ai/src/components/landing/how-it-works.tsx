import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

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
    <section id="how-it-works" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Workflow"
          title="How Lumina Works"
          description="A simple, repeatable system to scale outbound without scaling busywork."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-muted ring-1 ring-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{s.pill}</span>
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-2xl bg-[color-mix(in_oklab,var(--primary)_12%,transparent)] text-primary ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)]">
                  {s.icon}
                </div>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.description}</p>

              <div className="mt-5 rounded-2xl bg-background/60 p-4 ring-1 ring-border">
                <div className="h-2 w-24 rounded-full bg-black/[0.06] dark:bg-white/[0.12]" />
                <div className="mt-3 h-2 w-40 rounded-full bg-black/[0.06] dark:bg-white/[0.12]" />
                <div className="mt-3 h-2 w-32 rounded-full bg-black/[0.06] dark:bg-white/[0.12]" />
                <div className="mt-4 h-8 w-full rounded-xl bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)]" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

