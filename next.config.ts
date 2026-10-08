import type { NextConfig } from "next";

// The home page and the booking page of the new site. Booking talks to the hospital's booking server through
// /api/*, which is forwarded from here (same origin, so no CORS or cookie set-up is needed).
const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    const target = (process.env.API_PROXY_TARGET ?? "https://chatbot-6lzw.onrender.com").replace(/\/$/, "");
    return [{ source: "/api/:path*", destination: `${target}/api/:path*` }];
  },
};

export default nextConfig;
