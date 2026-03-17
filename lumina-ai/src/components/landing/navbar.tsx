import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LuminaLogo } from "@/components/landing/logo";

const navLinks: Array<{ label: string; href: string }> = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-background/80 backdrop-blur dark:border-white/[0.10]">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="inline-flex items-center gap-2">
          <LuminaLogo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted hover:text-foreground transition"
          >
            GitHub
          </Link>
        </nav>

        <Button href="#pricing" size="sm">
          Get Started
        </Button>
      </Container>
    </header>
  );
}

