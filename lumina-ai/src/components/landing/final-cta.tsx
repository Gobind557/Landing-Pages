import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_0%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(900px_circle_at_100%_50%,rgba(124,58,237,0.12),transparent_55%)]"
          />
          <div className="relative">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Ready to Automate Your Outreach?
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-muted">
              Start using Lumina AI today and scale your outbound campaigns.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#pricing" className="w-full sm:w-auto">
                Get Started Free
              </Button>
              <Button href="#demo" variant="secondary" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

