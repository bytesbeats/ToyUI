import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  output: "standalone",
};

export default nextConfig;
