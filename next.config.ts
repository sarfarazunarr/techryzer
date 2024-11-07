import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Allows all paths on res.cloudinary.com
      },
    ],
  },
  // Other config options can go here
};

export default nextConfig;
