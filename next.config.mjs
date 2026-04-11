/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vriendenvan.bravisziekenhuis.nl",
      },
      {
        protocol: "https",
        hostname: "www.bravisziekenhuis.nl",
      },
    ],
  },
  async headers() {
    return [
      {
        // Cache all external images aggressively
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
