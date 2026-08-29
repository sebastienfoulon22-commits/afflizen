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
    path: "/cartes-et-paiements",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/cartes-et-paiements/wise",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/cartes-et-paiements/monese",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/cartes-et-paiements/mypos",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/cartes-et-paiements/american-express-belgique",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/e-commerce",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/outils-ia",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/bons-plans",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/bonus",
    priority: 0.7,
    changeFrequency: "weekly",
  },

  // Crypto
  {
    path: "/crypto/binance",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/kucoin",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/bitpanda",
    priority: 0.8,
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
  {
    path: "/crypto/meria",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/crypto/deblock",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Investissement
  {
    path: "/investissement/trade-republic",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/tradingview",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/simply-wall-st",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/invvest",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/monefit",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/lendermarket",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/inrento",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/bullionvault",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/veracash",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/gold-avenue",
    priority: 0.8,
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
  {
    path: "/investissement/degiro",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/interactive-brokers",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/saxo",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/investissement/robinhood",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Banques en ligne
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
    path: "/banques-en-ligne/qonto",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/banques-en-ligne/hello-bank",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/banques-en-ligne/green-got",
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
    path: "/cashback/poulpeo",
    priority: 0.8,
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

  // Cartes & paiements
  {
    path: "/cartes-et-paiements/curve-pay",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/cartes-et-paiements/sumup",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // E-commerce
  {
    path: "/e-commerce/back-market",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/e-commerce/dealabs",
    priority: 0.75,
    changeFrequency: "monthly",
  },

  // Outils IA
  {
    path: "/outils-ia/elevenlabs",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/outils-ia/make",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/outils-ia/n8n",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/outils-ia/gamma",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Pages légales et information
  {
    path: "/a-propos",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/methodologie",
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
