import Link from "next/link";

export const metadata = {
  title: "E-commerce : codes parrainage, bons plans et achats malins",
  description:
    "Découvrez les plateformes e-commerce sélectionnées par Afflizen : reconditionné, codes promo, parrainages, bons plans et conseils avant d’acheter.",
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
    points: [
      "Produits tech reconditionnés",
      "Code parrainage disponible",
      "Prix, état et garantie à vérifier",
    ],
  },
];

const categoryBlocks = [
  {
    title: "Reconditionné",
    description:
      "Des plateformes pour acheter des appareils remis en état : smartphones, ordinateurs, tablettes, consoles ou accessoires tech.",
  },
  {
    title: "Codes et parrainages",
    description:
      "Des pages qui regroupent les codes utiles, les conditions à vérifier et les avantages potentiels avant de commander.",
  },
  {
    title: "Bons plans e-commerce",
    description:
      "Des conseils pour repérer les offres intéressantes sans acheter trop vite ni se laisser piéger par une fausse promotion.",
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
            pour acheter en ligne de manière plus intelligente : reconditionné,
            codes parrainage, bons plans, avantages clients et conseils avant
            commande.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            L’objectif est simple : t’aider à comparer les prix, vérifier les
            conditions, éviter les mauvaises surprises et utiliser les codes
            disponibles quand ils sont réellement intéressants.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Plateformes e-commerce sélectionnées
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Chaque page présente les avantages, les limites, les conditions à
                vérifier et les éventuels codes de parrainage ou liens utiles.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {availablePlatforms.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.href}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-emerald-300 hover:bg-white hover:shadow-md"
                  >
                    <p className="text-sm font-semibold text-emerald-700">
                      {platform.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold text-slate-950 group-hover:text-emerald-700">
                      {platform.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {platform.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {platform.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="mt-5 inline-flex text-sm font-bold text-emerald-700">
                      Voir la page →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Ce que vous trouverez dans cette catégorie
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Cette catégorie sert à regrouper les pages liées aux achats en
                ligne, aux codes disponibles et aux plateformes qui peuvent aider
                à mieux acheter sans se précipiter.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {categoryBlocks.map((block) => (
                  <article
                    key={block.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="text-xl font-bold text-slate-950">
                      {block.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {block.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-3xl font-bold text-slate-950">
                Conseils avant d’acheter en ligne
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Un bon plan n’est intéressant que si le prix final, la garantie,
                les conditions de retour et la fiabilité du vendeur sont corrects.
              </p>

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
              reconditionné, de codes parrainage et de bons plans utiles.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">
                Page disponible
              </p>

              <Link
                href="/e-commerce/back-market"
                className="mt-3 inline-flex font-bold text-emerald-700 hover:text-emerald-800"
              >
                Back Market →
              </Link>
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-800">
                À retenir
              </p>

              <p className="mt-2 text-sm leading-6 text-emerald-950">
                Avant d’utiliser un code ou de commander, vérifie toujours le prix
                final, les conditions, les retours et la garantie.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}