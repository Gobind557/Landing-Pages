import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-card ring-1 ring-border shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

