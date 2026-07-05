import type { NextConfig } from "next";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const bundleAnalyzer =
  process.env.ANALYZE === "true" ? require("@next/bundle-analyzer") : undefined;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fapomenplacqfjluabrj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

const withAnalyzer = bundleAnalyzer
  ? bundleAnalyzer({ enabled: true })
  : (config: NextConfig) => config;

export default withAnalyzer(nextConfig);
