import type { Metadata } from "next";

const BACK_MARKET_URL = "https://www.backmarket.fr/fr-fr";
const BACK_MARKET_CODE = "ffcb15bb420025aa";

export const metadata: Metadata = {
  title: "Back Market code promo : 10 € offerts sur le reconditionné | Afflizen",
  description:
    "Profitez de 10 € offerts sur Back Market avec le code Afflizen. Avis, avantages, inconvénients, garantie, conditions et bons plans reconditionnés.",
  alternates: {
    canonical: "https://afflizen.com/bons-plans/back-market",
  },
};

const avantages = [
  "Large choix de smartphones, ordinateurs, tablettes, consoles et accessoires reconditionnés",
  "Prix souvent plus bas que le neuf selon les modèles et l’état choisi",
  "Garantie commerciale de 12 mois minimum selon les conditions Back Market",
  "Retour possible sous 30 jours selon les règles en vigueur",
  "Alternative plus économique et plus responsable que l’achat neuf",
  "Code Afflizen permettant de profiter de 10 € offerts selon les conditions applicables",
];

const inconvenients = [
  "Le stock dépend des vendeurs et peut changer rapidement",
  "L’état esthétique varie selon le grade choisi",
  "Les prix peuvent fluctuer selon la demande, le modèle et la disponibilité",
  "Les conditions du code peuvent évoluer ou être limitées à certains comptes ou achats",
  "Tous les produits reconditionnés ne se valent pas : il faut lire les fiches attentivement",
  "Le service après-vente peut dépendre du vendeur et des conditions Back Market",
];

const pointsCles = [
  {
    label: "Type",
    value: "Tech reconditionnée",
  },
  {
    label: "Avantage",
    value: "10 € offerts",
  },
  {
    label: "Code",
    value: BACK_MARKET_CODE,
  },
  {
    label: "Catégorie",
    value: "Bons plans",
  },
];

const faq = [
  {
    question: "Quel est le code Back Market Afflizen ?",
    answer:
      "Le code Back Market Afflizen est ffcb15bb420025aa. Il permet de profiter de 10 € offerts selon les conditions Back Market en vigueur.",
  },
  {
    question: "Comment utiliser le code Back Market ?",
    answer:
      "Copiez le code ffcb15bb420025aa, ouvrez Back Market, choisissez votre produit reconditionné, puis ajoutez le code au moment du paiement si le champ est proposé et si l’offre est encore valable.",
  },
  {
    question: "Back Market vend-il du neuf ?",
    answer:
      "Back Market est surtout connu pour les appareils tech reconditionnés : smartphones, ordinateurs, tablettes, consoles, accessoires et autres produits électroniques remis en état par des professionnels.",
  },
  {
    question: "Les produits Back Market sont-ils garantis ?",
    answer:
      "Back Market indique proposer une garantie commerciale de 12 mois minimum sur les appareils achetés sur sa plateforme. Les garanties légales et commerciales peuvent dépendre du pays, du vendeur et des conditions applicables.",
  },
  {
    question: "Afflizen touche-t-il une commission avec Back Market ?",
    answer:
      "Cette page contient un code promotionnel ou de parrainage Back Market. Si vous utilisez ce code, Afflizen peut recevoir un avantage ou une commission, sans coût supplémentaire direct pour vous.",
  },
];

export default function BackMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Bons plans · Tech reconditionnée · Code promo
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Back Market : 10 € offerts avec le code Afflizen
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Profitez de 10 € offerts sur Back Market avec le code Afflizen.
            Des milliers d’appareils tech reconditionnés par des professionnels,
            garantis au minimum 12 mois, avec des prix pouvant aller jusqu’à
            70 % moins cher que le neuf selon les produits et les offres
            disponibles.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={BACK_MARKET_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Aller sur Back Market
            </a>

            <a
              href="#code"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Copier le code
            </a>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            Cette page contient un code promotionnel ou de parrainage. Afflizen
            peut recevoir une commission ou un avantage si vous utilisez ce code,
            sans coût supplémentaire direct pour vous.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {pointsCles.map((point) => (
            <div
              key={point.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{point.label}</p>
              <p className="mt-2 font-semibold text-slate-950">
                {point.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div
              id="code"
              className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950">
                Code Back Market Afflizen
              </h2>

              <p className="mt-5 leading-8 text-emerald-950">
                Copiez ce code, ouvrez Back Market, choisissez votre appareil
                reconditionné, puis ajoutez le code au moment du paiement si le
                champ est proposé.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-300 bg-white p-5">
                <p className="text-sm font-semibold text-slate-600">
                  Code à copier
                </p>

                <code className="mt-3 block rounded-xl border border-slate-200 bg-slate-950 px-5 py-4 text-center text-xl font-bold tracking-wide text-white">
                  {BACK_MARKET_CODE}
                </code>
              </div>

              <a
                href={BACK_MARKET_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Utiliser le code sur Back Market
              </a>

              <p className="mt-4 text-sm leading-6 text-emerald-900">
                L’avantage de 10 € peut dépendre des conditions Back Market en
                vigueur : pays, compte, montant minimum, disponibilité de
                l’offre ou règles propres au programme.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Notre résumé sur Back Market
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Back Market est une plateforme spécialisée dans la tech
                reconditionnée. On y retrouve notamment des smartphones,
                ordinateurs, tablettes, consoles, écouteurs, montres connectées
                et autres appareils remis en état par des professionnels.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                L’intérêt principal est de pouvoir acheter un appareil moins
                cher que le neuf, tout en bénéficiant d’un cadre plus rassurant
                qu’un achat d’occasion entre particuliers. Il faut toutefois
                comparer les prix, vérifier l’état esthétique, lire les
                conditions de garantie et s’assurer que le produit correspond
                bien à vos besoins.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Rappel important
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Les prix, stocks, garanties, délais, conditions de retour et
                  codes promotionnels peuvent évoluer. Vérifiez toujours les
                  informations affichées sur Back Market avant de finaliser une
                  commande.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
                <h2 className="text-2xl font-bold text-emerald-950">
                  Avantages
                </h2>

                <ul className="mt-5 space-y-3">
                  {avantages.map((avantage) => (
                    <li
                      key={avantage}
                      className="flex gap-3 text-sm leading-6 text-emerald-950"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      <span>{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Inconvénients
                </h2>

                <ul className="mt-5 space-y-3">
                  {inconvenients.map((inconvenient) => (
                    <li
                      key={inconvenient}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                      <span>{inconvenient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Prix, garantie et conditions
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Back Market met en avant des appareils reconditionnés pouvant
                coûter jusqu’à 70 % moins cher que le neuf selon les produits,
                les modèles, les catégories et les offres disponibles. Cette
                réduction n’est pas automatique sur tous les articles : il faut
                comparer avec le prix du neuf et vérifier l’état du produit.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Back Market indique également proposer une garantie commerciale
                de 12 mois minimum sur les appareils achetés sur la plateforme.
                Les conditions exactes peuvent dépendre du vendeur, du produit,
                du pays et des garanties légales applicables.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">
                  À vérifier avant d’acheter
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• L’état esthétique : correct, bon, très bon, parfait.</li>
                  <li>• La capacité de stockage et la batterie, surtout sur smartphone.</li>
                  <li>• Le vendeur et les avis disponibles.</li>
                  <li>• Les conditions de garantie et de retour.</li>
                  <li>• Le prix comparé au neuf et à l’occasion classique.</li>
                  <li>• Les conditions d’utilisation du code promo.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Pour qui Back Market est-il intéressant ?
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-semibold text-emerald-950">
                    Back Market peut convenir si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                    <li>• Vous voulez payer moins cher qu’un appareil neuf.</li>
                    <li>• Vous cherchez un smartphone, PC, MacBook ou iPad reconditionné.</li>
                    <li>• Vous voulez éviter l’achat d’occasion entre particuliers.</li>
                    <li>• Vous êtes à l’aise avec un produit qui peut avoir de légères traces.</li>
                    <li>• Vous voulez une garantie plus claire qu’une simple annonce d’occasion.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Back Market est moins adapté si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <li>• Vous voulez absolument un produit neuf scellé.</li>
                    <li>• Vous refusez toute trace d’usage, même légère.</li>
                    <li>• Vous ne voulez pas comparer les vendeurs et les états.</li>
                    <li>• Vous cherchez toujours le prix le plus bas du marché.</li>
                    <li>• Vous voulez acheter un modèle très récent avec une grosse réduction garantie.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="avis"
              className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Avis Afflizen sur Back Market
              </h2>

              <p className="mt-5 leading-8 text-slate-200">
                Back Market est un bon réflexe pour acheter de la tech moins
                chère, surtout pour les smartphones, ordinateurs portables,
                tablettes et consoles. Le principal avantage est de combiner un
                prix plus accessible avec un cadre plus structuré qu’un achat
                d’occasion classique.
              </p>

              <p className="mt-5 leading-8 text-slate-200">
                Notre avis est positif pour les acheteurs qui comparent les
                prix, lisent les fiches produit et choisissent soigneusement
                l’état de l’appareil. Le code Afflizen permet d’ajouter une
                réduction supplémentaire si les conditions Back Market sont
                remplies.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Verdict Afflizen</p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Une plateforme intéressante pour acheter de la tech
                  reconditionnée à meilleur prix, à condition de comparer les
                  offres et de vérifier les conditions. Le code Afflizen ajoute
                  un avantage simple à mettre en avant sur la page.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                FAQ Back Market
              </h2>

              <div className="mt-6 space-y-5">
                {faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-semibold text-slate-950">
                      {item.question}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Code promo
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                10 € offerts sur Back Market
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Copiez le code Afflizen, ouvrez Back Market, choisissez votre
                appareil reconditionné, puis collez le code au moment du
                paiement si l’offre est disponible.
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Code à copier
                </p>

                <code className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-lg font-bold text-slate-950">
                  {BACK_MARKET_CODE}
                </code>
              </div>

              <a
                href={BACK_MARKET_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Aller sur Back Market
              </a>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Transparence Afflizen
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Ce code peut permettre à Afflizen de recevoir une commission
                  ou un avantage si vous l’utilisez. Notre avis reste informatif
                  et les conditions doivent être vérifiées sur Back Market.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Conditions variables
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-900">
                  Les codes promo, stocks, garanties, prix et conditions peuvent
                  évoluer. Vérifiez toujours le montant final avant paiement.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}