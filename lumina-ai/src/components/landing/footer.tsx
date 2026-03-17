import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LuminaLogo } from "@/components/landing/logo";

const links = [
  { label: "Product", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "Docs", href: "#" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-10 dark:border-white/[0.10]">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <LuminaLogo />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="text-sm text-muted hover:text-foreground transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-sm text-muted">© Lumina AI</div>
      </Container>
    </footer>
  );
}

