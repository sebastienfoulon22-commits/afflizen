import type { Metadata } from "next";
import Script from "next/script";
import BackHomeButton from "../components/BackHomeButton";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-FYS51DRQTG";

export const metadata: Metadata = {
  metadataBase: new URL("https://afflizen.com"),
  title: {
    default:
      "Afflizen - Comparatifs crypto, banques en ligne et plateformes d’investissement",
    template: "%s | Afflizen",
  },
  description:
    "Afflizen aide les particuliers francophones à comparer les plateformes crypto, banques en ligne, solutions d’investissement, cashback, cartes de paiement, hébergement web et bons plans financiers.",
  keywords: [
    "Afflizen",
    "crypto",
    "banque en ligne",
    "investissement",
    "cashback",
    "cartes de paiement",
    "paiement",
    "comparatif crypto",
    "plateforme crypto",
    "hébergement web",
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
      "Comparez les meilleures plateformes crypto, banques en ligne, solutions d’investissement, cashback, cartes de paiement, hébergement web et bons plans financiers.",
    url: "https://afflizen.com",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afflizen - Comparatifs finance, crypto et cashback",
    description:
      "Le média francophone pour comparer les plateformes financières, crypto, banques en ligne, cartes de paiement et bons plans.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navigation = [
  {
    name: "Crypto",
    href: "/crypto",
  },
  {
    name: "Banques en ligne",
    href: "/banques-en-ligne",
  },
  {
    name: "Investissement",
    href: "/investissement",
  },
  {
    name: "Cashback",
    href: "/cashback",
  },
  {
    name: "Hébergement web",
    href: "/hebergement-web",
  },
  {
    name: "Cartes & paiements",
    href: "/cartes-et-paiements",
  },
  {
    name: "Bons plans",
    href: "/bons-plans",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-2xl font-bold tracking-tight text-slate-950"
              >
                Afflizen
              </a>

              <BackHomeButton />
            </div>

            <nav
              aria-label="Navigation principale"
              className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}