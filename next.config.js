/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Ignore TypeScript errors in production builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
