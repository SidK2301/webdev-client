import type { NextConfig } from "next";

const expressOrigin = process.env.NEXT_PUBLIC_HTTP_SERVER ??
  (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "");

const nextConfig: NextConfig = {
  async rewrites() {
    if (!expressOrigin) return [];
    return [{
      source: "/api/kambaz/:path*",
      destination: `${expressOrigin.replace(/\/$/, "")}/api/:path*`,
    }];
  },
};

export default nextConfig;
