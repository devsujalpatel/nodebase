// next.config.ts
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const baseConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/workflows",
        permanent: false,
      },
    ];
  },
};

// Only wrap with Sentry in production builds
const isProd = process.env.NODE_ENV === "production";

export default isProd
  ? withSentryConfig(baseConfig, {
      org: "sujal-patel",
      project: "nodebase",
      silent: !process.env.CI,
      widenClientFileUpload: true,
      tunnelRoute: "/monitoring",
      disableLogger: true,
      automaticVercelMonitors: true,
    })
  : baseConfig;
