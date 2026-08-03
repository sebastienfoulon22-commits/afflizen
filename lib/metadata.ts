import type { Metadata } from "next";

const siteUrl = "https://afflizen.com";

const siteName = "Afflizen";

const defaultSocialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Afflizen - comparatifs, bons plans et plateformes utiles",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
};

export function removeBrandSuffix(title: string) {
  return title.replace(/\s*\|\s*Afflizen\s*$/i, "").trim();
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataOptions): Metadata {
  const cleanTitle = removeBrandSuffix(title);
  const url = absoluteUrl(path);

  return {
    title: cleanTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: cleanTitle,
      description,
      url,
      siteName,
      locale: "fr_BE",
      type,
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [defaultSocialImage.url],
    },
  };
}
