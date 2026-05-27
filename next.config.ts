import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/Mytecsys-Website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
