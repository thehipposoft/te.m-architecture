import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "admin.temarqui.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;