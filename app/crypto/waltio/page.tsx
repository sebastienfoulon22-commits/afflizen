import type { Metadata } from "next";

const WALTIO_AFFILIATE_LINK = "https://m.waltio.com/HiTQKirPqd";

export const metadata: Metadata = {
  title: "Waltio : fiscalité crypto, déclaration et avis",
  description:
    "Découvrez Waltio, un assistant fiscal crypto pour suivre ses transactions, calculer ses plus-values et préparer sa déclaration. Avis, avantages, limites et lien de parrainage.",
  alternates: {
    canonical: "https://afflizen.com/crypto/waltio",
  },
  openGraph: {
    title: "Waltio : fiscalité crypto, déclaration et avis",
    description:
      "Notre fiche Afflizen sur Waltio : fonctionnement, fiscalité crypto, pays pris en charge, avantages, limites et lien de parrainage.",
    url: "https://afflizen.com/crypto/waltio",
    siteName: "Afflizen",
    locale: "fr_BE",
    type: "article",
  },
};

const highlights = [
  "Assistant spécialisé dans la fiscalité crypto",
  "Utile pour centraliser ses transactions crypto",
  "Aide à préparer des rapports fiscaux selon les pays pris en charge",
  "Intéressant pour les utilisateurs actifs sur plusieurs plateformes",
];

const steps = [
  {
    title: "Créer un compte Waltio",
    description:
      "L’utilisateur crée un compte afin d’accéder à l’interface Waltio et de commencer à centraliser ses informations crypto.",
  },
  {
    title: "Ajouter ses plateformes et wallets",
    description:
      "Waltio permet de connecter ou d’importer les données issues de plateformes d’échange, wallets et autres sources crypto selon les intégrations disponibles.",
  },
  {
    title: "Vérifier les transactions",
    description:
      "Une fois les données importées, il faut contrôler les transactions, corriger les éventuelles erreurs et s’assurer que les opérations sont bien catégorisées.",
  },
  {
    title: "Préparer sa déclaration",
    description:
      "Waltio peut ensuite aider à calculer les éléments utiles à la déclaration fiscale, selon le pays, le volume de transactions et l’offre choisie.",
  },
];

const pros = [
  "Très utile pour les utilisateurs qui ont beaucoup de transactions crypto",
  "Permet de gagner du temps par rapport à un suivi manuel sur tableur",
  "Peut aider à mieux comprendre ses plus-values, pertes et opérations imposables",
  "Interface pensée pour accompagner les particuliers dans leur suivi fiscal crypto",
];

const cons = [
  "Ne remplace pas un expert-comptable, un fiscaliste ou l’administration fiscale",
  "La prise en charge dépend du pays de résidence fiscale",
  "Les résultats dépendent de la qualité des données importées",
  "Un contrôle manuel reste nécessaire avant toute déclaration officielle",
];

const useCases = [
  {
    title: "Investisseur crypto occasionnel",
    description:
      "Waltio peut aider à regrouper les opérations et à comprendre ce qui doit être vérifié avant la déclaration.",
  },
  {
    title: "Utilisateur de plusieurs exchanges",
    description:
      "La plateforme devient plus intéressante lorsque les transactions sont réparties entre plusieurs comptes, wallets ou services crypto.",
  },
  {
    title: "Utilisateur DeFi ou staking",
    description:
      "Les opérations plus complexes demandent souvent un suivi plus rigoureux. Waltio peut aider à organiser les données, mais elles doivent être vérifiées.",
  },
];

export default function WaltioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Crypto
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Waltio : fiscalité crypto, déclaration et suivi des transactions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Waltio est un assistant fiscal crypto conçu pour aider les
            utilisateurs à centraliser leurs transactions, calculer certains
            éléments fiscaux et préparer leur déclaration selon les pays pris en
            charge. C’est une solution particulièrement utile pour les personnes
            qui utilisent plusieurs plateformes crypto, wallets ou services liés
            aux actifs numériques.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={WALTIO_AFFILIATE_LINK}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Découvrir Waltio
            </a>

            <a
              href="/crypto"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes crypto
            </a>
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-6 text-slate-500">
            Certains liens présents sur cette page peuvent être des liens de
            parrainage ou d’affiliation. Afflizen peut recevoir une commission
            ou un avantage si vous utilisez ces liens. Waltio ne remplace pas un
            conseiller fiscal. Vérifiez toujours les informations auprès des
            sources officielles ou d’un professionnel qualifié avant toute
            déclaration.
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
            Comment Waltio peut aider à préparer sa fiscalité crypto
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
              Pourquoi Waltio peut être intéressant
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
              Les limites à connaître avant de l’utiliser
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-emerald-600">
            Pour quel profil ?
          </p>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold">
            Waltio s’adresse surtout aux utilisateurs crypto qui veulent éviter
            le suivi manuel
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-emerald-600">
            Avis Afflizen
          </p>

          <h2 className="mt-3 text-3xl font-bold">Notre avis sur Waltio</h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Waltio est une solution pertinente pour les utilisateurs crypto qui
            veulent mieux organiser leurs transactions et préparer leur fiscalité
            sans tout gérer manuellement. L’intérêt augmente fortement dès que
            l’on utilise plusieurs exchanges, plusieurs wallets ou des opérations
            plus complexes comme le staking, la DeFi ou les transferts fréquents.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Le point essentiel reste la vérification. Même avec un outil
            spécialisé, les données importées doivent être contrôlées et la
            déclaration finale doit être validée selon la situation fiscale de
            l’utilisateur. Pour les cas complexes, il est préférable de demander
            l’avis d’un professionnel.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={WALTIO_AFFILIATE_LINK}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Essayer Waltio
            </a>

            <a
              href="/crypto"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Comparer avec les autres fiches crypto
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une fiche d’information indépendante. Elle ne
            constitue pas un conseil fiscal, juridique ou financier. La fiscalité
            crypto dépend du pays de résidence, du profil de l’utilisateur, du
            volume d’opérations et de la nature des transactions. Consultez
            toujours les sources officielles ou un professionnel qualifié avant
            toute déclaration.
          </p>
        </div>
      </section>
    </main>
  );
}