import type { Metadata } from "next";

const NEXO_REFERRAL_URL = "https://nexo.com/ref/hel1o3ivp2?src=ios-link";

export const metadata: Metadata = {
  title: "Nexo avis : intérêts crypto, carte, prêt et risques | Afflizen",
  description:
    "Notre avis sur Nexo : avantages, inconvénients, intérêts crypto, carte Nexo, crédit adossé aux cryptos, frais, sécurité et risques à connaître.",
  alternates: {
    canonical: "https://afflizen.com/crypto/nexo",
  },
};

const avantages = [
  "Plateforme crypto complète : achat, échange, rendement, carte et crédit crypto",
  "Interface moderne pensée pour gérer plusieurs services depuis une seule application",
  "Possibilité d’obtenir des rendements sur certains actifs numériques selon conditions",
  "Carte Nexo avec modes débit et crédit selon disponibilité et éligibilité",
  "Crédit adossé aux cryptos pour obtenir de la liquidité sans vendre directement ses actifs",
  "Programme de fidélité pouvant améliorer certains avantages selon le niveau du compte",
];

const inconvenients = [
  "Produits plus complexes qu’un simple achat de Bitcoin ou d’Ethereum",
  "Rendements variables, soumis à conditions et susceptibles d’évoluer",
  "Risque de contrepartie : les actifs sont confiés à une plateforme centralisée",
  "Le crédit crypto peut entraîner un risque de liquidation en cas de baisse du marché",
  "Certains services peuvent ne pas être disponibles dans tous les pays",
  "La détention du token NEXO peut influencer certains avantages, ce qui ajoute un risque supplémentaire",
];

const pointsCles = [
  {
    label: "Type",
    value: "Plateforme crypto centralisée",
  },
  {
    label: "Services",
    value: "Achat, échange, rendement, carte, crédit",
  },
  {
    label: "Profil",
    value: "Utilisateur crypto intermédiaire",
  },
  {
    label: "Affiliation",
    value: "Lien de parrainage Afflizen",
  },
];

const faq = [
  {
    question: "Nexo est-il adapté aux débutants ?",
    answer:
      "Nexo peut convenir à un utilisateur qui comprend déjà les bases de la crypto. Pour un débutant complet, la plateforme peut être plus difficile à appréhender qu’un simple exchange, car elle combine rendement, crédit, carte, token de fidélité et plusieurs mécanismes de risque.",
  },
  {
    question: "Peut-on gagner des intérêts avec Nexo ?",
    answer:
      "Nexo propose des solutions permettant de générer des intérêts sur certains actifs numériques, selon les conditions en vigueur, le pays, le niveau de fidélité, les actifs déposés et les règles applicables. Ces rendements ne sont pas garantis et peuvent évoluer.",
  },
  {
    question: "La carte Nexo est-elle intéressante ?",
    answer:
      "La carte Nexo peut être intéressante pour les utilisateurs qui veulent dépenser ou emprunter contre leurs actifs crypto. Il faut toutefois bien comprendre la différence entre le mode débit, le mode crédit, les frais éventuels, les limites et les risques liés à l’utilisation de crypto comme collatéral.",
  },
  {
    question: "Quels sont les risques avec Nexo ?",
    answer:
      "Les principaux risques sont la volatilité des cryptos, le risque de contrepartie lié à une plateforme centralisée, les changements de conditions, les risques réglementaires et le risque de liquidation si vous empruntez contre vos actifs crypto.",
  },
  {
    question: "Afflizen touche-t-il une commission avec Nexo ?",
    answer:
      "Oui. Cette page contient un lien de parrainage Nexo. Si vous ouvrez un compte via ce lien, Afflizen peut recevoir une commission ou un avantage, sans coût supplémentaire direct pour vous.",
  },
];

export default function NexoPage() {
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
            Crypto · Rendement · Carte · Crédit crypto
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Nexo : avis, avantages, risques et fonctionnement
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Nexo est une plateforme crypto centralisée qui permet d’acheter,
            échanger, faire travailler, utiliser ou emprunter contre des actifs
            numériques. Elle peut être intéressante pour les utilisateurs crypto
            déjà à l’aise, mais elle demande de bien comprendre les risques liés
            au rendement, au crédit crypto et à la conservation des fonds sur
            une plateforme tierce.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={NEXO_REFERRAL_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Découvrir Nexo
            </a>

            <a
              href="#avis"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Lire l’avis Afflizen
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
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Notre résumé sur Nexo
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Nexo se positionne comme une plateforme crypto tout-en-un. Elle
                ne sert pas uniquement à acheter des cryptomonnaies : elle ajoute
                des services de rendement, une carte crypto, un système de
                crédit adossé aux actifs numériques et un programme de fidélité.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                C’est précisément ce qui rend Nexo intéressant, mais aussi plus
                complexe. Un utilisateur qui cherche uniquement à acheter et
                conserver du Bitcoin ou de l’Ethereum peut préférer une approche
                plus simple. En revanche, une personne déjà familiarisée avec la
                crypto peut y trouver une plateforme plus complète.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Rappel important
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Les cryptomonnaies sont volatiles. Les rendements ne sont pas
                  garantis. Les services, taux, frais, avantages, limites et
                  conditions peuvent changer selon le pays, le niveau du compte,
                  les actifs utilisés et la réglementation applicable.
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
                Frais, taux et conditions
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Les frais et conditions Nexo peuvent dépendre de plusieurs
                éléments : actif utilisé, devise, pays de résidence, méthode de
                paiement, niveau de fidélité, utilisation de la carte, choix du
                mode débit ou crédit, et éventuelle utilisation du token NEXO.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Il faut donc éviter de raisonner uniquement avec les taux ou
                avantages affichés en marketing. Les mentions comme “jusqu’à”
                peuvent dépendre de conditions précises. Avant de déposer de
                l’argent ou des cryptos, il est préférable de vérifier les frais
                et les taux directement dans l’application ou sur le site
                officiel.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">
                  Points à vérifier avant d’utiliser Nexo
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Les frais d’achat, de vente et de conversion crypto.</li>
                  <li>• Les conditions exactes des rendements crypto.</li>
                  <li>• Les limites liées à la carte Nexo.</li>
                  <li>• Les frais ou intérêts en cas d’utilisation du crédit.</li>
                  <li>• Le risque de liquidation si vous empruntez contre vos cryptos.</li>
                  <li>• La disponibilité des services dans votre pays.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Rendement crypto : intéressant, mais à comprendre
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Nexo propose des solutions permettant de générer des intérêts
                sur certains actifs numériques. Ce type de service peut séduire
                les personnes qui ne veulent pas laisser leurs cryptos
                totalement inactives, mais il ne doit pas être confondu avec un
                livret bancaire garanti.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                En pratique, vous exposez vos actifs à une plateforme
                centralisée. Le rendement affiché peut varier, dépendre de
                conditions précises et ne garantit pas la valeur future de vos
                cryptomonnaies. Un rendement élevé ne compense pas toujours un
                risque mal compris.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Carte Nexo et crédit crypto
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                La carte Nexo peut fonctionner avec différentes logiques selon
                le mode utilisé. Le mode débit revient à dépenser des fonds
                disponibles, tandis que le mode crédit permet d’accéder à de la
                liquidité en utilisant des actifs crypto comme garantie.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Le crédit crypto peut être pratique pour éviter de vendre ses
                actifs immédiatement, mais il ajoute un risque important : si le
                marché baisse fortement, votre collatéral peut devenir
                insuffisant et entraîner des ventes automatiques ou des appels
                de marge selon les conditions applicables.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Sécurité et fiabilité
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Nexo met en avant une approche axée sur la sécurité, la
                conformité, la garde des actifs et les licences ou
                enregistrements dans plusieurs juridictions. Cela donne un cadre
                plus structuré qu’un projet crypto anonyme ou non régulé.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Cela ne supprime pas tous les risques. Nexo reste une plateforme
                centralisée : vous ne détenez pas vos actifs de la même manière
                qu’avec un portefeuille personnel dont vous contrôlez les clés
                privées. Pour des montants importants, il peut être prudent de
                ne pas concentrer toute son exposition crypto sur une seule
                plateforme.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Pour qui Nexo est-il adapté ?
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-semibold text-emerald-950">
                    Nexo peut convenir si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                    <li>• Vous connaissez déjà les bases de la crypto.</li>
                    <li>• Vous voulez centraliser plusieurs services crypto.</li>
                    <li>• Vous comprenez les risques du rendement crypto.</li>
                    <li>• Vous savez ce qu’est un crédit adossé à un collatéral.</li>
                    <li>• Vous acceptez le risque d’une plateforme centralisée.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Nexo est moins adapté si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <li>• Vous débutez totalement dans la crypto.</li>
                    <li>• Vous cherchez uniquement à acheter et conserver simplement.</li>
                    <li>• Vous ne comprenez pas le risque de liquidation.</li>
                    <li>• Vous recherchez un rendement garanti.</li>
                    <li>• Vous refusez de confier vos actifs à une plateforme tierce.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="avis"
              className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Avis Afflizen sur Nexo
              </h2>

              <p className="mt-5 leading-8 text-slate-200">
                Nexo est une plateforme crypto intéressante pour les utilisateurs
                qui veulent aller plus loin qu’un simple achat de cryptomonnaies.
                Sa force est de regrouper plusieurs usages : achat, échange,
                rendement, carte et crédit crypto.
              </p>

              <p className="mt-5 leading-8 text-slate-200">
                Notre avis est positif pour un profil intermédiaire ou avancé,
                capable de comprendre les frais, les conditions, les risques de
                contrepartie et les mécanismes de collatéral. Pour un débutant,
                Nexo peut être trop riche en fonctionnalités et donc plus facile
                à mal utiliser.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">
                  Verdict Afflizen
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Une plateforme crypto complète et puissante, à utiliser avec
                  prudence. Intéressante pour les utilisateurs autonomes, moins
                  adaptée aux débutants qui cherchent une solution très simple
                  pour acheter et conserver leurs cryptos.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                FAQ Nexo
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
                Plateforme crypto
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Découvrir Nexo
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Nexo peut être utile pour acheter, échanger, faire travailler ou
                utiliser des actifs numériques. Avant de vous inscrire, vérifiez
                les conditions applicables dans votre pays et n’investissez que
                ce que vous pouvez vous permettre de perdre.
              </p>

              <a
                href={NEXO_REFERRAL_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                S’inscrire sur Nexo
              </a>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Transparence Afflizen
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Ce bouton contient un lien de parrainage. Afflizen peut
                  recevoir une commission ou un avantage si vous ouvrez un compte
                  via ce lien. Notre avis reste indépendant et informatif.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Risque crypto
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-900">
                  Les cryptomonnaies sont volatiles. Les rendements ne sont pas
                  garantis. Le crédit crypto peut entraîner un risque de
                  liquidation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}