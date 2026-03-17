import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For founders getting consistent outbound.",
    features: ["1 mailbox", "Up to 1,000 prospects", "Basic sequences", "Open & reply tracking"],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    description: "For small teams scaling campaigns.",
    features: [
      "5 mailboxes",
      "Unlimited prospects",
      "AI follow-up timing",
      "A/B testing",
      "AI insights dashboard",
    ],
    cta: "Start Growth",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$199",
    period: "/mo",
    description: "For outbound teams that need control.",
    features: [
      "Unlimited mailboxes",
      "Team roles & permissions",
      "Advanced deliverability",
      "Custom analytics",
      "Priority support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free, upgrade when you’re ready to run more campaigns."
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`p-6 ${t.highlight ? "ring-2 ring-[color-mix(in_oklab,var(--primary)_40%,transparent)]" : ""}`}
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold text-foreground">{t.name}</div>
                {t.highlight ? (
                  <div className="rounded-full bg-[color-mix(in_oklab,var(--primary)_14%,transparent)] px-3 py-1 text-xs font-medium text-primary ring-1 ring-[color-mix(in_oklab,var(--primary)_26%,transparent)]">
                    Most popular
                  </div>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-muted">{t.description}</p>

              <div className="mt-5 flex items-end gap-1">
                <div className="text-4xl font-semibold tracking-tight text-foreground">
                  {t.price}
                </div>
                <div className="pb-1 text-sm text-muted">{t.period}</div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-muted">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-[color-mix(in_oklab,var(--primary)_14%,transparent)] text-primary ring-1 ring-[color-mix(in_oklab,var(--primary)_26%,transparent)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  href="#"
                  variant={t.highlight ? "primary" : "secondary"}
                  className="w-full"
                >
                  {t.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

