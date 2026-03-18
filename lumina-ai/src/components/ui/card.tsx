import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl bg-card ring-1 ring-border shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

