export function LuminaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm"
        aria-hidden
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l1.6 6.1L20 12l-6.4 3.9L12 22l-1.6-6.1L4 12l6.4-3.9L12 2z"
            fill="currentColor"
            opacity="0.95"
          />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        Lumina <span className="text-muted">AI</span>
      </span>
    </div>
  );
}

