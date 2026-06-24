import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://afflizen.com";

  const routes = [
    "",
    "/crypto",
    "/banques-en-ligne",
    "/investissement",
    "/cashback",
    "/hebergement-web",
    "/bons-plans",
    "/cartes-et-paiements",
    "/e-commerce",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",

    "/crypto/binance",
    "/crypto/bitget",
    "/crypto/crypto-com",
    "/crypto/coinbase",
    "/crypto/ledger",
    "/crypto/nexo",
    "/crypto/kraken",
    "/crypto/swissborg",
    "/crypto/waltio",

    "/investissement/trade-republic",

    "/banques-en-ligne/revolut",
    "/banques-en-ligne/n26",

    "/cashback/igraal",
    "/cashback/widilo",
    "/cashback/ebuyclub",

    "/hebergement-web/hostinger",
    "/hebergement-web/ovh",

    "/cartes-et-paiements/curve-pay",

    "/e-commerce/back-market",
    "/e-commerce/dealabs",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === ""
        ? 1
        : route.includes("/") && route.split("/").length > 2
          ? 0.7
          : 0.8,
  }));
}