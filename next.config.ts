import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["localhost:3001", "localhost:3000", "127.0.0.1:3001", "127.0.0.1:3000"],
  cacheComponents: true,
  partialPrefetching: true,
  serverExternalPackages: ["@browserbasehq/stagehand"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
