import type { Metadata } from "next";

const EBUYCLUB_AFFILIATE_LINK =
  "https://www.ebuyclub.com/inscription?parrain=docfox22";

export const metadata: Metadata = {
  title: "eBuyClub : cashback, parrainage et avis",
  description:
    "Découvrez eBuyClub, une plateforme de cashback pour économiser sur vos achats en ligne, en magasin et via bons d’achat. Avis, fonctionnement, avantages et lien de parrainage.",
  alternates: {
    canonical: "https://afflizen.com/cashback/ebuyclub",
  },
  openGraph: {
    title: "eBuyClub : cashback, parrainage et avis",
    description:
      "Notre fiche Afflizen sur eBuyClub : fonctionnement du cashback, avantages, points à vérifier et lien de parrainage.",
    url: "https://afflizen.com/cashback/ebuyclub",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "article",
  },
};

const highlights = [
  "Cashback sur de nombreux achats du quotidien",
  "Possibilité d’utiliser le service en ligne, en magasin ou via bons d’achat selon les offres disponibles",
  "Plateforme intéressante pour récupérer une partie de ses dépenses habituelles",
  "Programme de parrainage disponible",
];

const steps = [
  {
    title: "Créer un compte eBuyClub",
    description:
      "L’inscription permet d’accéder aux offres de cashback, aux marchands partenaires et aux éventuelles offres de bienvenue disponibles au moment de l’inscription.",
  },
  {
    title: "Passer par eBuyClub avant d’acheter",
    description:
      "Avant de commander chez un marchand partenaire, il faut activer l’offre depuis eBuyClub afin que l’achat puisse être suivi correctement.",
  },
  {
    title: "Attendre la validation du cashback",
    description:
      "Le cashback apparaît généralement dans la cagnotte après l’achat, puis il doit être validé selon les règles du marchand partenaire.",
  },
  {
    title: "Demander le paiement",
    description:
      "Une fois les conditions remplies, l’utilisateur peut récupérer ses gains selon les moyens de paiement proposés par eBuyClub.",
  },
];

const pros = [
  "Service simple à comprendre pour les achats du quotidien",
  "Peut permettre de récupérer de l’argent sur des dépenses déjà prévues",
  "Compatible avec plusieurs types d’achats selon les marchands",
  "Intéressant à combiner avec d’autres bons plans lorsque les conditions le permettent",
];

const cons = [
  "Les taux de cashback changent selon les marchands et les périodes",
  "Le cashback peut être refusé si les conditions ne sont pas respectées",
  "La validation peut prendre du temps selon les enseignes",
  "Il faut penser à passer par eBuyClub avant l’achat",
];

export default function EbuyclubPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Cashback
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            eBuyClub : cashback, bons plans et parrainage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            eBuyClub est une plateforme de cashback qui permet de récupérer une
            partie de ses achats chez des marchands partenaires. C’est une
            solution intéressante pour les utilisateurs qui veulent économiser
            sur leurs achats en ligne, certains achats en magasin ou des bons
            d’achat selon les offres disponibles.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={EBUYCLUB_AFFILIATE_LINK}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              S’inscrire sur eBuyClub
            </a>

            <a
              href="/cashback"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres sites cashback
            </a>
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-6 text-slate-500">
            Certains liens présents sur cette page peuvent être des liens de
            parrainage ou d’affiliation. Les conditions, montants et avantages
            peuvent évoluer. Vérifiez toujours les informations directement sur
            le site officiel avant de vous inscrire.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold leading-6 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-emerald-400">
            Fonctionnement
          </p>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold">
            Comment utiliser eBuyClub pour récupérer du cashback ?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  Étape {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">
              Points forts
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Pourquoi eBuyClub peut être intéressant
            </h2>

            <ul className="mt-6 space-y-4">
              {pros.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <p className="text-sm font-semibold text-amber-700">
              Points à vérifier
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Ce qu’il faut contrôler avant d’acheter
            </h2>

            <ul className="mt-6 space-y-4">
              {cons.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-emerald-600">
            Avis Afflizen
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Notre avis sur eBuyClub
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            eBuyClub peut être une bonne option pour les personnes qui achètent
            régulièrement en ligne ou qui souhaitent optimiser certaines
            dépenses du quotidien. Le service est surtout intéressant si l’on
            prend l’habitude de vérifier les offres disponibles avant chaque
            achat important.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Comme pour toutes les plateformes de cashback, il ne faut pas
            acheter uniquement pour obtenir une récompense. Le cashback doit
            rester un bonus sur une dépense déjà prévue, pas une raison de
            consommer davantage.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={EBUYCLUB_AFFILIATE_LINK}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Découvrir eBuyClub
            </a>

            <a
              href="/cashback/igraal"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Comparer avec iGraal
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une fiche d’information indépendante. Afflizen peut
            recevoir une commission ou un avantage si vous vous inscrivez via
            certains liens. Les offres, taux de cashback, conditions de
            parrainage et modalités de paiement peuvent changer à tout moment.
            Consultez toujours les conditions officielles d’eBuyClub avant toute
            inscription ou utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}