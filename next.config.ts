import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/bons-plans/back-market",
        destination: "/e-commerce/back-market",
        permanent: true,
      },
      {
        source: "/confidentialite",
        destination: "/politique-de-confidentialite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;