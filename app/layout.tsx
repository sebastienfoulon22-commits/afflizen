import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afflizen - Comparatifs finance, crypto, banques et bonus",
  description:
    "Afflizen compare les plateformes crypto, banques en ligne, investissement, cashback, hébergement web et offres de bienvenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <a href="/" className="text-2xl font-bold text-slate-950">
              Afflizen
            </a>

            <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
              <a href="/crypto" className="hover:text-emerald-700">
                Crypto
              </a>
              <a href="/investissement" className="hover:text-emerald-700">
                Investissement
              </a>
              <a href="/banques" className="hover:text-emerald-700">
                Banques
              </a>
              <a href="/cashback" className="hover:text-emerald-700">
                Cashback
              </a>
              <a href="/hebergement" className="hover:text-emerald-700">
                Hébergement
              </a>
              <a href="/bonus" className="hover:text-emerald-700">
                Bonus
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Afflizen. Tous droits réservés.</p>

            <nav className="flex flex-wrap gap-4">
              <a href="/a-propos" className="hover:text-emerald-700">
                À propos
              </a>
              <a href="/mentions-legales" className="hover:text-emerald-700">
                Mentions légales
              </a>
              <a href="/confidentialite" className="hover:text-emerald-700">
                Confidentialité
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}