import Link from "next/link";

export const metadata = {
  title: "E-commerce : codes parrainage, bons plans et achats malins",
  description:
    "Découvrez les plateformes e-commerce sélectionnées par Afflizen : reconditionné, bons plans, codes promo, parrainages et conseils avant d’acheter.",
  alternates: {
    canonical: "https://afflizen.com/e-commerce",
  },
};

const availablePlatforms = [
  {
    name: "Back Market",
    href: "/e-commerce/back-market",
    category: "Reconditionné",
    description:
      "Acheter des smartphones, ordinateurs, tablettes et appareils tech reconditionnés avec un code parrainage à utiliser selon les conditions en vigueur.",
    badge: "Disponible",
  },
];

const upcomingPlatforms = [
  {
    name: "Dealabs",
    category: "Bons plans communautaires",
    description:
      "Repérer les promotions partagées par la communauté et comparer les offres avant d’acheter.",
  },
  {
    name: "Vavabid",
    category: "Enchères & loisirs",
    description:
      "Analyser les offres, les frais et les conditions avant de participer à des enchères ou bons plans loisirs.",
  },
  {
    name: "Coosub",
    category: "Abonnements partagés",
    description:
      "Comparer les solutions de partage d’abonnements avec prudence sur les conditions, les limites et la sécurité.",
  },
];

const advice = [
  "Comparer le prix final avec d’autres sites avant d’acheter.",
  "Vérifier les frais de livraison, de retour et les conditions de garantie.",
  "Lire les conditions des codes promo, parrainages ou offres spéciales.",
  "Éviter d’acheter uniquement parce qu’une réduction semble importante.",
  "Vérifier la fiabilité du vendeur, les avis et l’état exact du produit.",
];

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            E-commerce · Codes · Parrainages · Bons plans
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            E-commerce : codes parrainage, bons plans et achats malins
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            La catégorie e-commerce d’Afflizen regroupe les plateformes utiles
            pour acheter moins cher, utiliser des codes de parrainage, repérer
            des bons plans ou comparer des offres avant de commander.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            L’objectif n’est pas de pousser à l’achat, mais d’aider à vérifier
            les conditions, les frais, les garanties, les retours et le vrai prix
            final avant de passer commande.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Plateformes disponibles
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Les pages ci-dessous sont déjà disponibles sur Afflizen avec un
                avis détaillé, les avantages, les limites, les conditions à
                vérifier et les éventuels codes de parrainage.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {availablePlatforms.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-emerald-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold text-emerald-700">
                        {platform.category}
                      </p>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                        {platform.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-950 group-hover:text-emerald-700">
                      {platform.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {platform.description}
                    </p>

                    <span className="mt-5 inline-flex text-sm font-bold text-emerald-700">
                      Voir la page →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Plateformes à ajouter plus tard
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Ces plateformes pourront être ajoutées progressivement, après
                vérification des liens, codes, programmes de parrainage ou
                possibilités d’affiliation.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {upcomingPlatforms.map((platform) => (
                  <article
                    key={platform.name}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-sm font-semibold text-emerald-700">
                      {platform.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      {platform.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {platform.description}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">
                      À venir
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Conseils avant d’acheter en ligne
              </h2>

              <ul className="mt-6 space-y-3">
                {advice.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Catégorie Afflizen
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              E-commerce
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Cette catégorie regroupe les plateformes d’achat en ligne, de
              reconditionné, de bons plans et de codes parrainage.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">
                Première page disponible
              </p>
              <Link
                href="/e-commerce/back-market"
                className="mt-3 inline-flex font-bold text-emerald-700 hover:text-emerald-800"
              >
                Back Market →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}