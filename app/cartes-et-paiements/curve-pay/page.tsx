import type { Metadata } from "next";

const CURVE_REFERRAL_URL = "https://www.curve.com/join/#N9XXP2LE";
const CURVE_REFERRAL_CODE = "N9XXP2LE";

export const metadata: Metadata = {
  title: "Curve Pay avis : carte, cashback, frais et parrainage | Afflizen",
  description:
    "Notre avis sur Curve Pay : fonctionnement, avantages, inconvénients, frais, cashback, Go Back in Time, paiements à l’étranger et lien de parrainage Afflizen.",
  alternates: {
    canonical: "https://afflizen.com/cartes-et-paiements/curve-pay",
  },
};

const avantages = [
  "Permet de regrouper plusieurs cartes bancaires dans une seule application",
  "Fonction Go Back in Time pour déplacer certaines dépenses vers une autre carte après paiement",
  "Utile pour mieux organiser ses paiements personnels",
  "Peut être intéressant pour les dépenses à l’étranger selon le plan utilisé",
  "Possibilité de cashback ou de récompenses selon les offres et abonnements disponibles",
  "Solution pratique pour les personnes qui utilisent plusieurs cartes au quotidien",
];

const inconvenients = [
  "Curve Pay n’est pas une banque complète ni un compte courant principal",
  "Les avantages dépendent fortement du plan choisi et des conditions en vigueur",
  "Certains frais peuvent s’appliquer selon l’usage, le type de carte, la devise ou le pays",
  "Le cashback n’est pas automatique sur toutes les dépenses",
  "La fonction Go Back in Time peut être limitée selon le plan et l’ancienneté de la transaction",
  "Les conditions peuvent évoluer rapidement : il faut toujours vérifier la grille officielle",
];

const pointsCles = [
  {
    label: "Type",
    value: "Carte & wallet",
  },
  {
    label: "Usage",
    value: "Regrouper ses cartes",
  },
  {
    label: "Fonction phare",
    value: "Go Back in Time",
  },
  {
    label: "Parrainage",
    value: CURVE_REFERRAL_CODE,
  },
];

const faq = [
  {
    question: "Curve Pay est-il une banque ?",
    answer:
      "Non. Curve Pay n’est pas une banque traditionnelle ni un compte courant principal. C’est plutôt une application de paiement et un portefeuille numérique qui permet d’utiliser plusieurs cartes depuis une seule carte ou application Curve.",
  },
  {
    question: "À quoi sert Curve Pay ?",
    answer:
      "Curve Pay sert principalement à regrouper plusieurs cartes bancaires dans une seule application, choisir quelle carte utiliser, gérer certaines dépenses, payer à l’étranger selon les limites du plan et utiliser des fonctionnalités comme Go Back in Time.",
  },
  {
    question: "Qu’est-ce que Go Back in Time sur Curve ?",
    answer:
      "Go Back in Time est une fonction qui permet de déplacer certaines transactions passées vers une autre carte enregistrée dans Curve, dans les limites prévues par le plan utilisé et les conditions Curve en vigueur.",
  },
  {
    question: "Curve Pay est-il gratuit ?",
    answer:
      "Curve propose un plan d’entrée et des plans payants avec davantage de limites ou d’avantages. Des frais peuvent toutefois s’appliquer selon l’usage, la devise, le type de transaction, le type de carte ou le plan utilisé.",
  },
  {
    question: "Comment utiliser le parrainage Curve Afflizen ?",
    answer:
      "Utilisez le lien de parrainage Afflizen ou le code N9XXP2LE lors de l’inscription si Curve le demande. Les avantages éventuels dépendent des conditions Curve en vigueur au moment de l’inscription.",
  },
  {
    question: "Afflizen touche-t-il une commission avec Curve ?",
    answer:
      "Oui. Cette page contient un lien de parrainage Curve. Si vous ouvrez un compte via ce lien, Afflizen peut recevoir une commission ou un avantage, sans coût supplémentaire direct pour vous.",
  },
];

export default function CurvePayPage() {
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
          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              ← Retour à l’accueil
            </a>

            <a
              href="/cartes-et-paiements"
              className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Cartes & paiements
            </a>
          </div>

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Cartes & paiements · Wallet · Cashback
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Curve Pay : avis, avantages, frais et parrainage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Curve Pay est une application de paiement qui permet de regrouper
            plusieurs cartes bancaires dans un seul wallet. Son intérêt est de
            simplifier la gestion des cartes, d’utiliser certaines fonctions
            pratiques comme Go Back in Time et de profiter d’avantages selon le
            plan choisi, le pays et les conditions en vigueur.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={CURVE_REFERRAL_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Découvrir Curve Pay
            </a>

            <a
              href="#code"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Voir le code de parrainage
            </a>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            Cette page contient un lien de parrainage. Afflizen peut recevoir
            une commission ou un avantage si vous ouvrez un compte via ce lien,
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
                Code de parrainage Curve Afflizen
              </h2>

              <p className="mt-5 leading-8 text-emerald-950">
                Pour utiliser le parrainage Curve Afflizen, ouvrez le lien
                ci-dessous. Si Curve demande un code pendant l’inscription,
                utilisez le code suivant.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-300 bg-white p-5">
                <p className="text-sm font-semibold text-slate-600">
                  Code à copier
                </p>

                <code className="mt-3 block rounded-xl border border-slate-200 bg-slate-950 px-5 py-4 text-center text-xl font-bold tracking-wide text-white">
                  {CURVE_REFERRAL_CODE}
                </code>
              </div>

              <a
                href={CURVE_REFERRAL_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Ouvrir Curve Pay
              </a>

              <p className="mt-4 text-sm leading-6 text-emerald-900">
                Les avantages de parrainage éventuels dépendent des conditions
                Curve en vigueur : pays, éligibilité, inscription, utilisation
                du compte, plan choisi ou campagne active.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Notre résumé sur Curve Pay
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Curve Pay est utile si vous utilisez plusieurs cartes bancaires
                et que vous voulez les gérer depuis une seule application. Au
                lieu de choisir physiquement une carte différente à chaque achat,
                vous pouvez centraliser vos cartes dans Curve et sélectionner la
                carte à débiter.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Le service peut aussi être intéressant pour les personnes qui
                voyagent, qui veulent mieux organiser leurs paiements ou qui
                souhaitent profiter de fonctionnalités comme Go Back in Time. En
                revanche, Curve ne remplace pas une vraie banque principale :
                c’est plutôt une couche de paiement au-dessus de vos cartes
                existantes.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Rappel important
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Les frais, limites, plans, avantages, cashback, retraits,
                  conversions de devises et conditions de parrainage peuvent
                  évoluer. Vérifiez toujours les informations officielles Curve
                  avant d’ouvrir un compte ou de choisir un abonnement.
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
                Frais, plans et conditions
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Curve propose généralement un plan d’entrée et plusieurs plans
                payants avec davantage de limites ou d’avantages. Les différences
                peuvent concerner la fonction Go Back in Time, les paiements à
                l’étranger, les retraits, le cashback, les règles intelligentes
                ou certains services supplémentaires.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Il faut rester prudent avec les frais : selon l’usage, des frais
                peuvent s’appliquer sur certaines cartes commerciales, certaines
                opérations en devise, certains retraits, certains paiements ou
                certains services. Les limites exactes dépendent du plan choisi
                et peuvent changer.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Go Back in Time : la fonction qui distingue Curve
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Go Back in Time est l’une des fonctions les plus intéressantes
                de Curve. Elle permet de déplacer certaines transactions déjà
                effectuées vers une autre carte enregistrée dans l’application,
                dans les limites prévues par votre plan.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Cette fonction peut être utile si vous avez payé avec la mauvaise
                carte, si vous voulez mieux organiser vos dépenses ou si vous
                souhaitez optimiser la carte utilisée pour une transaction
                passée. Il faut toutefois vérifier les délais et limites exacts
                selon le plan Curve utilisé.
              </p>
            </div>

            <div
              id="avis"
              className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Avis Afflizen sur Curve Pay
              </h2>

              <p className="mt-5 leading-8 text-slate-200">
                Curve Pay est une solution intéressante pour les personnes qui
                utilisent plusieurs cartes et veulent simplifier leur gestion au
                quotidien. La fonction Go Back in Time, les règles de paiement
                et les avantages liés aux dépenses peuvent apporter une vraie
                valeur si vous utilisez réellement ces fonctionnalités.
              </p>

              <p className="mt-5 leading-8 text-slate-200">
                Notre avis est plus réservé pour les utilisateurs qui cherchent
                simplement une carte bancaire classique ou un compte principal.
                Curve est surtout utile comme outil d’optimisation, pas comme
                remplacement complet d’une banque en ligne.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Verdict Afflizen</p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Curve Pay est pertinent si vous avez plusieurs cartes, si vous
                  voyagez ou si vous aimez optimiser vos paiements. À éviter si
                  vous cherchez uniquement une banque simple ou si vous ne voulez
                  pas surveiller les frais, limites et conditions.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                FAQ Curve Pay
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
                Carte & paiements
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Découvrir Curve Pay
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Curve Pay peut être utile si vous voulez regrouper plusieurs
                cartes, mieux gérer vos paiements et tester des fonctions comme
                Go Back in Time.
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Code de parrainage
                </p>

                <code className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-lg font-bold text-slate-950">
                  {CURVE_REFERRAL_CODE}
                </code>
              </div>

              <a
                href={CURVE_REFERRAL_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                S’inscrire sur Curve
              </a>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Transparence Afflizen
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Ce bouton contient un lien de parrainage. Afflizen peut
                  recevoir une commission ou un avantage si vous ouvrez un compte
                  via ce lien. Notre avis reste informatif.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}