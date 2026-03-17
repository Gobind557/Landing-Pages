import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const logos = ["Arc", "Northwind", "Cobalt", "Atlas", "Nova", "Keystone"] as const;

export function SocialProof() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Social proof"
          title="Trusted by Modern Sales Teams"
          description="Teams use Lumina to keep pipelines warm, follow up consistently, and learn what converts."
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center justify-center rounded-2xl bg-card text-sm font-semibold text-muted ring-1 ring-border"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card className="p-6 md:col-span-2">
            <p className="text-pretty text-base leading-7 text-foreground">
              “Lumina helped us automate our outbound pipeline and double our reply
              rates.”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[color-mix(in_oklab,var(--primary)_18%,transparent)] ring-1 ring-[color-mix(in_oklab,var(--primary)_24%,transparent)]" />
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Sales Ops Lead
                </div>
                <div className="text-sm text-muted">B2B SaaS • 30-person team</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-foreground">
              Typical uplift
            </div>
            <div className="mt-4 grid gap-3">
              <Stat label="Reply rate" value="+2.1×" />
              <Stat label="Time saved" value="6 hrs/wk" />
              <Stat label="Follow-up coverage" value="92%" />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-background/60 px-4 py-3 ring-1 ring-border">
      <div className="text-sm text-muted">{label}</div>
      <div className="text-sm font-semibold text-foreground">{value}</div>
    </div>
  );
}

