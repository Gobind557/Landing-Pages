import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductPreview() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="Built for Modern Sales Teams"
          description="Manage prospects, campaigns, and outreach automation from a single dashboard."
          align="center"
        />

        <div className="mt-10 rounded-3xl bg-card p-2 ring-1 ring-border shadow-sm">
          <Image
            src="/landing/dashboard-large.svg"
            alt="Lumina dashboard large preview"
            width={1400}
            height={900}
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </Container>
    </section>
  );
}

