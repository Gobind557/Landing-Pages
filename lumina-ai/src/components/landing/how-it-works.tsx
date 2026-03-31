import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Add Prospects",
    description: "Add prospects in one place, ready for AI follow-ups.",
    pill: "Step 1",
    imageSrc: "/Porspects.png",
    helperText: "Takes ~30 seconds",
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
    description: "Launch AI-powered campaigns in seconds.",
    pill: "Step 2",
    imageSrc: "/Campaign.png",
    helperText: "Takes ~30 seconds",
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
    description: "Track and optimize replies automatically.",
    pill: "Step 3",
    imageSrc: "/Analytics.png",
    helperText: "Takes ~30 seconds",
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
    <Section id="how-it-works" glow="none">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent_70%)] md:h-96"
      />
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How Lumina Works"
            title="A workflow that turns outreach into replies"
            description="Add prospects, launch AI-powered campaigns, then track and optimize replies automatically."
            align="center"
          />
        </Reveal>

        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          {/* Subtle connectors between steps (desktop). */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden md:block"
            viewBox="0 0 1000 240"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lumina-connector" x1="0" y1="0" x2="1" y2="0">
                <stop
                  offset="0%"
                  stopColor="rgba(124,58,237,0)"
                />
                <stop
                  offset="50%"
                  stopColor="rgba(124,58,237,0.45)"
                />
                <stop
                  offset="100%"
                  stopColor="rgba(124,58,237,0)"
                />
              </linearGradient>
              <marker
                id="lumina-arrow"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path
                  d="M0,0 L6,3 L0,6 Z"
                  fill="rgba(124,58,237,0.55)"
                />
              </marker>
            </defs>
            <line
              x1="385"
              y1="96"
              x2="485"
              y2="96"
              stroke="url(#lumina-connector)"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#lumina-arrow)"
            />
            <line
              x1="515"
              y1="96"
              x2="615"
              y2="96"
              stroke="url(#lumina-connector)"
              strokeWidth="2"
              strokeLinecap="round"
              markerEnd="url(#lumina-arrow)"
            />
          </svg>

          {steps.map((s, idx) => (
            <Reveal key={s.title} delayMs={idx * 80}>
              <Card
                className={[
                  "group relative rounded-xl bg-white/5 p-5 ring-1 ring-white/10 shadow-none transition",
                  "duration-300 will-change-transform",
                  "hover:-translate-y-1 hover:bg-white/10",
                  "hover:ring-[rgba(124,58,237,0.40)]",
                  "hover:shadow-[0_20px_80px_-60px_rgba(124,58,237,0.55)]",
                  idx === 1
                    ? "z-10 scale-[1.02] border border-[rgba(124,58,237,0.55)] ring-[rgba(124,58,237,0.35)] before:pointer-events-none before:absolute before:-inset-2 before:rounded-2xl before:bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.40),transparent_60%)] before:opacity-80"
                    : "",
                ].join(" ")}
              >
                <div className="relative flex items-center justify-between">
                  <div
                    className={[
                      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1",
                      "ring-white/10",
                      "bg-white/5 text-muted",
                      idx === 1
                        ? "bg-[rgba(124,58,237,0.14)] ring-[rgba(124,58,237,0.28)] text-foreground"
                        : "",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-1.5 w-1.5 rounded-full",
                        idx === 1 ? "bg-primary" : "bg-white/40",
                      ].join(" ")}
                      aria-hidden
                    />
                    <span>{s.pill}</span>
                  </div>
                  <div
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-xl ring-1",
                      "ring-[rgba(124,58,237,0.24)]",
                      "bg-[rgba(124,58,237,0.14)] text-primary",
                      idx === 1
                        ? "bg-[rgba(124,58,237,0.18)] ring-[rgba(124,58,237,0.35)]"
                        : "",
                    ].join(" ")}
                  >
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.description}</p>

                <div className="mt-5 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                  <img
                    src={s.imageSrc}
                    alt={s.title}
                    className="h-44 w-full rounded-xl object-contain"
                  />
                </div>

                <p className="mt-3 text-xs text-muted">{s.helperText}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

