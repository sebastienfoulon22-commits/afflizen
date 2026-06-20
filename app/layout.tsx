import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afflizen.com"),
  title: {
    default: "Afflizen - Comparatifs crypto, banques en ligne et plateformes d’investissement",
    template: "%s | Afflizen",
  },
  description:
    "Afflizen aide les particuliers francophones à comparer les plateformes crypto, banques en ligne, solutions d’investissement, cashback et bons plans financiers.",
  keywords: [
    "Afflizen",
    "crypto",
    "banque en ligne",
    "investissement",
    "cashback",
    "comparatif crypto",
    "plateforme crypto",
    "Belgique",
    "France",
    "Luxembourg",
    "Suisse",
  ],
  authors: [{ name: "Afflizen" }],
  creator: "Afflizen",
  publisher: "Afflizen",
  alternates: {
    canonical: "https://afflizen.com",
  },
  openGraph: {
    title: "Afflizen - Comparatifs crypto, banques en ligne et investissement",
    description:
      "Comparez les meilleures plateformes crypto, banques en ligne, solutions d’investissement, cashback et bons plans financiers.",
    url: "https://afflizen.com",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afflizen - Comparatifs finance, crypto et cashback",
    description:
      "Le média francophone pour comparer les plateformes financières, crypto, banques en ligne et bons plans.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}