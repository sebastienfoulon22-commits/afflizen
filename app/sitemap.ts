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
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}