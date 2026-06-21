import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hébergement web : comparatif Hostinger, OVHcloud et solutions web",
  description:
    "Comparez les solutions d’hébergement web suivies par Afflizen : Hostinger, OVHcloud, domaines, WordPress, prix, avantages et points à vérifier.",
  alternates: {
    canonical: "https://afflizen.com/hebergement-web",
  },
  openGraph: {
    title: "Hébergement web : comparatif Hostinger, OVHcloud et solutions web",
    description:
      "Découvrez les solutions d’hébergement web suivies par Afflizen pour créer un site, acheter un domaine ou lancer un projet en ligne.",
    url: "https://afflizen.com/hebergement-web",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "website",
  },
};

const platforms = [
  {
    name: "Hostinger",
    slug: "/hebergement-web/hostinger",
    description:
      "Solution d’hébergement web populaire pour créer un site, lancer WordPress, acheter un domaine ou démarrer un projet en ligne à prix accessible.",
    bonus: "Hébergement web",
  },
  {
    name: "OVHcloud",
    slug: "/hebergement-web/ovh",
    description:
      "Acteur européen de l’hébergement web, des noms de domaine, serveurs, emails et services cloud pour projets personnels ou professionnels.",
    bonus: "Domaine + cloud",
  },
];

export default function HebergementWebPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold text-emerald-600">
            Hébergement web
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Hébergement web, domaines et solutions pour lancer un site
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Comparez les solutions d’hébergement web suivies par Afflizen :
            prix, simplicité, performances, domaines, WordPress, support client
            et points importants à vérifier avant de lancer un projet en ligne.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-emerald-600">
                {platform.bonus}
              </p>

              <h2 className="mt-3 text-2xl font-bold">{platform.name}</h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {platform.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-slate-950">
                Voir la fiche →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Les prix, performances, conditions de renouvellement, services
            inclus, noms de domaine, emails, sauvegardes et options peuvent
            évoluer. Vérifiez toujours les informations directement sur les
            sites officiels avant de commander un hébergement web.
          </p>
        </div>
      </section>
    </main>
  );
}