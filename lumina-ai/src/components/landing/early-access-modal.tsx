"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function EarlyAccessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check initial hash on mount
    if (window.location.hash === "#join") {
      setIsOpen(true);
      // Clean up the hash so it doesn't linger
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }

    // Since Next.js <Link> intercepts hash navigation and prevents native 'hashchange' events,
    // we use a global click delegation to intercept clicks on early access links.
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.getAttribute("href") === "#join") {
        e.preventDefault(); // Prevent Next.js router navigation
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  const closeModal = () => {
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    setIsOpen(false);
    setTimeout(() => {
      if (status === "success") setStatus("idle");
    }, 500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      role: formData.get("role"),
      emailsPerWeek: formData.get("emailsPerWeek"),
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to join waitlist");
      }

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20">
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      />
      
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#0e0e14] ring-1 ring-white/10 shadow-[0_20px_80px_-20px_rgba(124,58,237,0.55)] p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgba(124,58,237,0.2),transparent_100%)] blur-2xl pointer-events-none" />

        <button 
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-white/5 hover:text-foreground transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span className="sr-only">Close</span>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in zoom-in-95 duration-300">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#gradient-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="gradient-success" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c4b5fd" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">You're on the list!</h3>
            <p className="mt-3 text-sm text-muted">
              We'll be in touch soon with your early access invite.
            </p>
            <Button onClick={closeModal} variant="secondary" className="mt-8 w-full">
              Done
            </Button>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-300 relative z-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Get Early Access</h2>
              <p className="mt-2 text-sm text-muted">
                Join the waitlist to shape the future of AI outreach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Work Email <span className="text-primary">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="you@company.com"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-white/20 focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium text-foreground">
                  Your Role
                </label>
                <input 
                  type="text" 
                  id="role" 
                  name="role" 
                  placeholder="e.g. Founder, Head of Sales"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-white/20 focus:bg-white/10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="emailsPerWeek" className="text-sm font-medium text-foreground">
                  Outreach Volume <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <select 
                    id="emailsPerWeek" 
                    name="emailsPerWeek" 
                    required
                    defaultValue=""
                    className="flex h-10 w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-white/20 focus:bg-[#1a1a24] cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0e0e14] text-muted-foreground">Select emails sent per week</option>
                    <option value="0-50" className="bg-[#0e0e14]">0 - 50</option>
                    <option value="50-200" className="bg-[#0e0e14]">50 - 200</option>
                    <option value="200-1000" className="bg-[#0e0e14]">200 - 1,000</option>
                    <option value="1000+" className="bg-[#0e0e14]">1,000+</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {errorMessage && (
                <p className="text-sm font-medium text-red-500">{errorMessage}</p>
              )}

              <Button 
                type="submit"
                disabled={status === "loading"}
                className="mt-4 w-full" 
              >
                {status === "loading" ? "Saving..." : "Request Access"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
