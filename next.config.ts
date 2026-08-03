import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/banques-en-ligne/trade-republic",
        destination: "/investissement/trade-republic",
        permanent: true,
      },
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
