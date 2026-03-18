import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

function classesForVariant(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return "bg-primary text-primary-foreground shadow-sm shadow-[rgba(124,58,237,0.18)] hover:opacity-95";
    case "secondary":
      return "bg-white/5 text-foreground ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/15";
    case "ghost":
      return "bg-transparent text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06]";
  }
}

function classesForSize(size: ButtonSize) {
  switch (size) {
    case "sm":
      return "h-9 px-3 text-sm";
    case "md":
      return "h-10 px-4 text-sm";
  }
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  target?: "_blank" | "_self";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]";

  const rel = target === "_blank" ? "noreferrer noopener" : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${classesForVariant(variant)} ${classesForSize(size)} ${className}`}
    >
      {children}
    </Link>
  );
}

