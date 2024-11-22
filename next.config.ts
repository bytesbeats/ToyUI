import { i18n } from "./next-i18next.config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n,
  trailingSlash: false,
  pageExtensions: ["ts", "tsx"],
};

export default nextConfig;
