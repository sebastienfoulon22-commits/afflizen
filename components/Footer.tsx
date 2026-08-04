import Link from "next/link";

const footerSections = [
  {
    id: "afflizen",
    title: "Afflizen",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Méthodologie", href: "/methodologie" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "legal",
    title: "Informations légales",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      {
        label: "Politique de confidentialité",
        href: "/politique-de-confidentialite",
      },
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    links: [
      { label: "Crypto", href: "/crypto" },
      { label: "Banques en ligne", href: "/banques-en-ligne" },
      { label: "Investissement", href: "/investissement" },
      { label: "Cashback", href: "/cashback" },
      { label: "Hébergement web", href: "/hebergement-web" },
      { label: "Cartes et paiements", href: "/cartes-et-paiements" },
      { label: "E-commerce", href: "/e-commerce" },
      { label: "Outils IA", href: "/outils-ia" },
      { label: "Bons plans", href: "/bons-plans" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[1500px] px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <section aria-labelledby="footer-brand">
            <h2 id="footer-brand" className="text-2xl font-bold tracking-tight">
              Afflizen
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Afflizen compare des plateformes, services et outils destinés au
              public francophone. Certains liens peuvent être affiliés ou issus
              de programmes de parrainage, sans coût supplémentaire pour le
              visiteur.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Les informations présentées sont fournies à titre informatif et ne
              constituent pas un conseil financier, fiscal ou juridique
              personnalisé.
            </p>
          </section>

          <nav
            aria-label="Navigation de pied de page"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {footerSections.map((section) => (
              <section key={section.id} aria-labelledby={`footer-${section.id}`}>
                <h3
                  id={`footer-${section.id}`}
                  className="text-sm font-semibold uppercase tracking-wide text-emerald-300"
                >
                  {section.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex rounded-md py-1 transition hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {currentYear} Afflizen. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
