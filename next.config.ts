import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgcdn.houssed.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
