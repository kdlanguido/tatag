import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s9mdf5zeyq.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "tc31mgmta0.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
      
    ],
  },
};
export default nextConfig;
