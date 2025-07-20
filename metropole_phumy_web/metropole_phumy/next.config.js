import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts')
import bundleAnalyzer from '@next/bundle-analyzer'
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
  ? `https://${process.env.NEXT_PUBLIC_SERVER_URL}`
  : 'http://localhost:3000'

const IMAGE_SERVER = process.env.API_DOMAIN || "http://localhost:1337";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  /* config options here */
  distDir: "build",
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.optimization.splitChunks = 30000
  //   }
  //   return config
  // },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL, IMAGE_SERVER].map((item) => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", ""),
        };
      }),
    ],
  },
  //reactStrictMode: true,
  redirects,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withBundleAnalyzer(withNextIntl(nextConfig))
