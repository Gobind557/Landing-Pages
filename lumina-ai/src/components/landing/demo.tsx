import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Demo() {
  return (
    <section id="demo" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Demo"
          title="See Lumina in Action"
          description="Watch how Lumina automates prospect outreach in under 60 seconds."
          align="center"
        />

        <div className="mt-10">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full bg-[linear-gradient(135deg,rgba(124,58,237,0.18),rgba(0,0,0,0)_55%),linear-gradient(0deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03))] dark:bg-[linear-gradient(135deg,rgba(167,139,250,0.18),rgba(0,0,0,0)_55%),linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04))]">
              <div className="grid h-full place-items-center p-6">
                <div className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-card ring-1 ring-border shadow-sm">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 8l6 4-6 4V8z"
                        fill="currentColor"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    Demo video placeholder
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Replace this with an embed (YouTube/Loom) when ready.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

