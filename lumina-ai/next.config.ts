import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify hosts static HTML/CSS/JS best; landing page has no backend needs.
  // This generates `out/` during build so Netlify can publish it directly.
  output: "export",
};

export default nextConfig;
