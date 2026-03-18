import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function SocialProof() {
  return (
    <Section id="built-in-public" glow="left">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Built in public"
              title="Built in Public. Improving Every Week."
              description="Lumina is early access by design: ship fast, listen closely, and evolve the workflow with real users."
            >
              <ul className="mt-6 space-y-3 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>Actively shipping new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>Feedback-driven development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>AI workflows evolving with users</span>
                </li>
              </ul>
            </SectionHeading>
          </Reveal>

          <Reveal delayMs={120}>
            <Card className="relative overflow-hidden rounded-xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_25px_120px_-90px_rgba(124,58,237,0.45)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_70%_0%,rgba(124,58,237,0.16),transparent_60%)]"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold tracking-tight text-foreground">
                    Weekly changelog
                  </div>
                  <div className="rounded-full bg-[rgba(124,58,237,0.14)] px-3 py-1 text-xs font-medium text-(--color-primary) ring-1 ring-[rgba(124,58,237,0.24)]">
                    Early access
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <ChangelogItem
                    title="Follow-up timing suggestions"
                    tag="AI"
                    meta="This week"
                  />
                  <ChangelogItem
                    title="Reply classification + inbox triage"
                    tag="Workflow"
                    meta="Last week"
                  />
                  <ChangelogItem
                    title="Campaign health + deliverability checks"
                    tag="Quality"
                    meta="2 weeks ago"
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-background/50 px-4 py-3 ring-1 ring-white/10">
                  <div className="text-xs font-medium text-foreground">
                    Want influence?
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    Join early access and help shape the roadmap.
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ChangelogItem({
  title,
  tag,
  meta,
}: {
  title: string;
  tag: string;
  meta: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-background/50 px-4 py-3 ring-1 ring-white/10">
      <div>
        <div className="text-sm font-medium text-foreground">{title}</div>
        <div className="mt-1 text-xs text-muted">{meta}</div>
      </div>
      <div className="mt-0.5 rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-white/10">
        {tag}
      </div>
    </div>
  );
}
