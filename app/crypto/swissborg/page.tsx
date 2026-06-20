import type { Metadata } from "next";

const SWISSBORG_REFERRAL_URL = "https://swissborg.com/fr/r";
const SWISSBORG_REFERRAL_CODE = "sebastMHKF8UCJ";

export const metadata: Metadata = {
  title: "SwissBorg avis : frais, Smart Engine, avantages et code | Afflizen",
  description:
    "Notre avis sur SwissBorg : avantages, inconvénients, frais, Smart Engine, crypto bundles, sécurité, risques et code de parrainage à utiliser.",
  alternates: {
    canonical: "https://afflizen.com/crypto/swissborg",
  },
};

const avantages = [
  "Application crypto moderne et simple à prendre en main",
  "Smart Engine pensé pour chercher une bonne exécution des ordres",
  "Accès à plusieurs cryptomonnaies depuis une seule application",
  "Interface claire pour suivre son portefeuille crypto",
  "Possibilité d’utiliser des fonctionnalités avancées comme les Crypto Bundles selon disponibilité",
  "Approche plus orientée gestion de patrimoine crypto qu’un simple exchange classique",
];

const inconvenients = [
  "Les frais peuvent varier selon le niveau Premium, le service utilisé et les conditions en vigueur",
  "SwissBorg peut être plus coûteux qu’un exchange très orienté trading actif",
  "Les fonctionnalités avancées demandent de bien comprendre les risques",
  "Les rendements ou avantages éventuels ne sont jamais garantis",
  "Les cryptomonnaies restent volatiles et peuvent entraîner une perte en capital",
  "Le code de parrainage doit être copié et utilisé correctement lors de l’inscription",
];

const pointsCles = [
  {
    label: "Type",
    value: "Application crypto",
  },
  {
    label: "Fonction phare",
    value: "Smart Engine",
  },
  {
    label: "Profil",
    value: "Débutant à intermédiaire",
  },
  {
    label: "Parrainage",
    value: "Code à copier",
  },
];

const faq = [
  {
    question: "SwissBorg est-il adapté aux débutants ?",
    answer:
      "SwissBorg peut convenir aux débutants qui veulent une application crypto plus simple et visuelle qu’une plateforme de trading avancée. Il faut toutefois prendre le temps de comprendre les frais, la volatilité des cryptomonnaies et les risques liés aux services proposés.",
  },
  {
    question: "À quoi sert le Smart Engine de SwissBorg ?",
    answer:
      "Le Smart Engine de SwissBorg est conçu pour rechercher une bonne exécution lors des achats, ventes ou échanges de cryptomonnaies en utilisant plusieurs sources de liquidité. Cela ne garantit pas un gain, mais peut aider à améliorer l’exécution d’un ordre.",
  },
  {
    question: "SwissBorg est-il gratuit ?",
    answer:
      "Non. Des frais peuvent s’appliquer selon les opérations : échange, retrait fiat, retrait crypto, services spécifiques ou niveau Premium. Les frais peuvent évoluer, il faut donc toujours vérifier la grille tarifaire officielle avant d’utiliser la plateforme.",
  },
  {
    question: "Comment utiliser le code de parrainage SwissBorg Afflizen ?",
    answer:
      "Il faut ouvrir le lien SwissBorg, créer son compte, puis copier le code de parrainage Afflizen sebastMHKF8UCJ au moment demandé pendant l’inscription ou dans le parcours prévu par SwissBorg.",
  },
  {
    question: "Afflizen touche-t-il une commission avec SwissBorg ?",
    answer:
      "Oui. Cette page contient un lien et un code de parrainage SwissBorg. Si vous utilisez ce lien ou ce code, Afflizen peut recevoir une commission ou un avantage, sans coût supplémentaire direct pour vous.",
  },
];

export default function SwissBorgPage() {
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
            Crypto · Application · Smart Engine
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            SwissBorg : avis, frais, avantages et code de parrainage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            SwissBorg est une application crypto qui vise à simplifier l’achat,
            la vente et la gestion d’actifs numériques. Elle se distingue
            notamment par son Smart Engine, son interface accessible et son
            positionnement plus orienté gestion de portefeuille crypto qu’un
            exchange de trading pur.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={SWISSBORG_REFERRAL_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Découvrir SwissBorg
            </a>

            <a
              href="#code"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Voir le code de parrainage
            </a>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
            Cette page contient un lien et un code de parrainage. Afflizen peut
            recevoir une commission ou un avantage si vous utilisez ce lien ou ce
            code, sans coût supplémentaire direct pour vous.
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
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Notre résumé sur SwissBorg
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                SwissBorg peut être une bonne option pour les utilisateurs qui
                veulent gérer leurs cryptomonnaies depuis une application claire,
                sans forcément passer par une interface de trading complexe. La
                plateforme met en avant une expérience plus guidée, avec un
                accent sur la simplicité, l’exécution des ordres et la gestion
                du portefeuille.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Elle reste toutefois une plateforme crypto centralisée. Cela
                signifie que l’utilisateur doit comprendre les frais, la
                volatilité du marché, les risques liés à la conservation des
                actifs et les conditions propres aux fonctionnalités utilisées.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Rappel important
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Les cryptomonnaies sont volatiles. Vous pouvez perdre une
                  partie ou la totalité du capital investi. Les frais,
                  fonctionnalités, récompenses, niveaux Premium et conditions de
                  parrainage peuvent changer à tout moment.
                </p>
              </div>
            </div>

            <div
              id="code"
              className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight text-emerald-950">
                Code de parrainage SwissBorg Afflizen
              </h2>

              <p className="mt-5 leading-8 text-emerald-950">
                Pour utiliser le parrainage SwissBorg Afflizen, ouvrez le lien
                ci-dessous puis copiez le code de parrainage au moment demandé
                pendant l’inscription.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-300 bg-white p-5">
                <p className="text-sm font-semibold text-slate-600">
                  Code à copier
                </p>

                <code className="mt-3 block rounded-xl border border-slate-200 bg-slate-950 px-5 py-4 text-center text-xl font-bold tracking-wide text-white">
                  {SWISSBORG_REFERRAL_CODE}
                </code>
              </div>

              <a
                href={SWISSBORG_REFERRAL_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Ouvrir SwissBorg
              </a>

              <p className="mt-4 text-sm leading-6 text-emerald-900">
                Le bonus ou l’avantage éventuel dépend des conditions SwissBorg
                en vigueur. Vérifiez toujours les règles officielles du
                parrainage avant de finaliser l’inscription.
              </p>
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
                Frais, prix et conditions
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Les frais SwissBorg peuvent dépendre du service utilisé, du
                niveau Premium, du type d’opération, de la devise, du retrait ou
                encore des fonctionnalités activées. Il ne faut donc pas se
                limiter à un seul chiffre affiché hors contexte.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                SwissBorg indique notamment que les frais d’échange varient
                selon le niveau Premium, que certains dépôts peuvent entraîner
                des frais selon le moyen de paiement, et que les retraits fiat
                ou crypto peuvent avoir leurs propres frais. Les conditions
                exactes doivent toujours être vérifiées sur la grille tarifaire
                officielle avant d’effectuer une opération.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">
                  À vérifier avant d’utiliser SwissBorg
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Les frais d’achat, de vente et d’échange crypto.</li>
                  <li>• Les frais liés au niveau Premium.</li>
                  <li>• Les frais de dépôt selon le moyen de paiement.</li>
                  <li>• Les frais de retrait fiat ou crypto.</li>
                  <li>• Les frais éventuels liés aux Crypto Bundles.</li>
                  <li>• Les conditions du code de parrainage.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Smart Engine : le point fort de SwissBorg
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Le Smart Engine est l’un des arguments principaux de SwissBorg.
                Son objectif est de rechercher une bonne exécution lors des
                échanges de cryptomonnaies en s’appuyant sur plusieurs sources
                de liquidité, plutôt que sur une seule place de marché.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                C’est un avantage intéressant pour un utilisateur qui veut une
                expérience plus automatisée. Il faut cependant garder en tête que
                cela ne transforme pas une opération crypto en placement garanti
                : le prix des actifs peut varier fortement, même avec une bonne
                exécution.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Sécurité et fiabilité
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                SwissBorg est une application connue dans l’écosystème crypto
                européen et met en avant une approche structurée autour de la
                simplicité, de la transparence et de la gestion des actifs
                numériques. Cela peut rassurer les utilisateurs qui veulent une
                application plus encadrée qu’un exchange très technique.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Malgré cela, SwissBorg reste une plateforme centralisée. Tant
                que vos cryptos sont conservées sur l’application, vous ne les
                détenez pas de la même manière qu’avec un portefeuille personnel
                dont vous contrôlez les clés privées. Pour des montants
                importants, il peut être utile de diversifier les solutions de
                conservation.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Pour qui SwissBorg est-il adapté ?
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-semibold text-emerald-950">
                    SwissBorg peut convenir si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                    <li>• Vous voulez une application crypto simple et moderne.</li>
                    <li>• Vous préférez une expérience moins technique qu’un exchange avancé.</li>
                    <li>• Vous voulez gérer votre portefeuille depuis mobile.</li>
                    <li>• Vous êtes intéressé par le Smart Engine.</li>
                    <li>• Vous comprenez les risques liés aux cryptomonnaies.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    SwissBorg est moins adapté si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <li>• Vous cherchez les frais les plus bas pour du trading intensif.</li>
                    <li>• Vous voulez une plateforme de trading très avancée.</li>
                    <li>• Vous ne voulez pas comparer les frais avant d’agir.</li>
                    <li>• Vous refusez de confier vos actifs à une plateforme centralisée.</li>
                    <li>• Vous pensez que les rendements crypto sont garantis.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="avis"
              className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Avis Afflizen sur SwissBorg
              </h2>

              <p className="mt-5 leading-8 text-slate-200">
                SwissBorg est une plateforme intéressante pour les utilisateurs
                qui veulent investir en crypto avec une application claire,
                plutôt qu’avec une interface de trading complexe. Son Smart
                Engine, son design et son approche orientée portefeuille en font
                une option à étudier pour un profil débutant sérieux ou
                intermédiaire.
              </p>

              <p className="mt-5 leading-8 text-slate-200">
                Notre avis est plus réservé pour les utilisateurs qui veulent
                faire du trading actif avec les frais les plus bas possible. Il
                faut aussi rester prudent sur les fonctionnalités avancées, les
                niveaux Premium, les bundles et les éventuels rendements, car les
                conditions peuvent évoluer.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">
                  Verdict Afflizen
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  SwissBorg est une bonne application crypto à étudier pour
                  investir simplement et gérer un portefeuille depuis mobile.
                  Elle reste à utiliser avec prudence, en vérifiant toujours les
                  frais, les conditions et les risques avant chaque opération.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                FAQ SwissBorg
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
                Application crypto
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Découvrir SwissBorg
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Ouvrez SwissBorg puis copiez le code de parrainage Afflizen lors
                de l’inscription si le champ est proposé.
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Code de parrainage
                </p>

                <code className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-lg font-bold text-slate-950">
                  {SWISSBORG_REFERRAL_CODE}
                </code>
              </div>

              <a
                href={SWISSBORG_REFERRAL_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Aller sur SwissBorg
              </a>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Transparence Afflizen
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Ce bouton et ce code peuvent permettre à Afflizen de recevoir
                  une commission ou un avantage si vous ouvrez un compte via ce
                  parcours. Notre avis reste informatif.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Risque crypto
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-900">
                  Les cryptomonnaies sont volatiles. Les frais, fonctionnalités
                  et conditions peuvent évoluer. N’investissez pas de l’argent
                  dont vous pourriez avoir besoin à court terme.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}