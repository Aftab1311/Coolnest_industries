import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: { root: process.cwd() },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.coolnestindustries.com" }],
      destination: "https://coolnestindustries.com/:path*",
      permanent: true,
    }];
  },
};
export default nextConfig;
