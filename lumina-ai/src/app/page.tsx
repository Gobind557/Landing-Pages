import { Demo } from "@/components/landing/demo";
import { Features } from "@/components/landing/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { ProductPreview } from "@/components/landing/product-preview";
import { SocialProof } from "@/components/landing/social-proof";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(124,58,237,0.10),transparent_55%)]" />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:ring-1 focus:ring-border"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        <HowItWorks />
        <Demo />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
