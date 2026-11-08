import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a deployable site to ./out
  // (works on GitHub Pages, Netlify, Cloudflare Pages, Firebase Hosting…).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
