import type { MetadataRoute } from "next";

const baseUrl = "https://afflizen.com";

const routes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
  },

  // Pages principales
  {
    path: "/crypto",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/banques-en-ligne",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/investissement",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/cashback",
    priority: 0.85,
    changeFrequency: "weekly",
  },
  {
    path: "/hebergement-web",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/bons-plans",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/cartes-et-paiements",
    priority: 0.8,
    changeFrequency: "weekly",
  },

  // Crypto
  {
    path: "/crypto/binance",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/bitget",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/crypto-com",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/coinbase",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/ledger",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/nexo",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/kraken",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/swissborg",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/waltio",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/bybit",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/htx",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/ascendex",
    priority: 0.75,
    changeFrequency: "monthly",
  },

  // Investissement
  {
    path: "/investissement/trade-republic",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/etoro",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/finary",
    priority: 0.85,
    changeFrequency: "monthly",
  },

  // Banques en ligne / courtiers
  {
    path: "/banques-en-ligne/revolut",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/banques-en-ligne/n26",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/degiro",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Cashback
  {
    path: "/cashback/igraal",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/cashback/widilo",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/cashback/ebuyclub",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Hébergement web
  {
    path: "/hebergement-web/hostinger",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/hebergement-web/ovh",
    priority: 0.75,
    changeFrequency: "monthly",
  },

  // Bons plans / e-commerce
  {
    path: "/e-commerce/back-market",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/bons-plans/dealabs",
    priority: 0.75,
    changeFrequency: "monthly",
  },

  // Cartes & paiements
  {
    path: "/cartes-et-paiements/curve-pay",
    priority: 0.75,
    changeFrequency: "monthly",
  },

  // Pages légales et information
  {
    path: "/a-propos",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/contact",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/mentions-legales",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/politique-de-confidentialite",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}