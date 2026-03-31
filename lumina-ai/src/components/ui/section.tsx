import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  divider = true,
  glow = "none",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  glow?: "none" | "left" | "right" | "both";
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 ${className}`}
    >
      {/* Prevent decorative glow/blur layers from creating horizontal scroll. */}
      {glow !== "none" ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {glow === "left" || glow === "both" ? (
            <div className="absolute -top-24 -left-48 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.18),transparent_70%)] blur-3xl" />
          ) : null}
          {glow === "right" || glow === "both" ? (
            <div className="absolute top-10 -right-48 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.14),transparent_72%)] blur-3xl" />
          ) : null}
        </div>
      ) : null}

      {children}

      {divider ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]"
        />
      ) : null}
    </section>
  );
}

