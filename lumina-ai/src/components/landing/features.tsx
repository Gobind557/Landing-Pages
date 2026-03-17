import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "AI-Powered Campaigns",
    description:
      "Launch multi-step email campaigns that adapt based on replies and engagement.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 11V7a4 4 0 014-4h2a4 4 0 014 4v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 11h14v6a4 4 0 01-4 4H9a4 4 0 01-4-4v-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Prospect Management",
    description:
      "Organize leads, import prospects, and track outreach activity in one place.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 11a4 4 0 100-8 4 4 0 000 8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M22 21v-2a4 4 0 00-3-3.87"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Smart Follow-Ups",
    description:
      "Automatically send follow-ups at the perfect time without manual effort.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 12a9 9 0 11-3-6.7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 3v6h-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Analytics & AI Insights",
    description:
      "Track open rates, replies, and performance with actionable insights.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19V5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 19H4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 15l3-4 3 2 4-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function Features() {
  return (
    <section id="features" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need for AI-Driven Outreach"
          description="From prospect management to automated follow-ups and AI insights—Lumina is built to help you ship more meetings."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[color-mix(in_oklab,var(--primary)_12%,transparent)] text-primary ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)]">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {f.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

