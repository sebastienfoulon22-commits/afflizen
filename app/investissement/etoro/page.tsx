import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";

const IGRAAL_AFFILIATE_LINK =
  "https://fr.igraal.com/parrainage?parrain=AG_5cec013713c0f&utm_medium=raf&utm_source=refer_friend";

const ETORO_OFFICIAL_LINK = "https://www.etoro.com/fr/";

export const metadata: Metadata = {
  title: "eToro avis 2026 : copy trading, actions, ETF, crypto et cashback iGraal",
  description:
    "Notre avis sur eToro en 2026 : fonctionnement, copy trading, actions, ETF, crypto, offre iGraal testée, cashback potentiel, avantages, limites et points de vigilance.",
  alternates: {
    canonical: "https://afflizen.com/investissement/etoro",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "eToro est-il adapté aux débutants ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eToro peut convenir aux débutants grâce à une interface simple, un compte démo et des fonctionnalités comme le CopyTrader. Cela ne supprime pas le risque de perte : il faut comprendre les produits utilisés, les frais, les spreads, la fiscalité et les conditions propres à son pays.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on obtenir du cashback sur eToro avec iGraal ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il peut être possible d’obtenir du cashback sur eToro en passant par iGraal si l’offre est disponible, activée correctement et si toutes les conditions sont respectées. Lors du test Afflizen, l’offre observée était de 50 euros pour 200 euros déposés, avec une période d’environ 3 mois sans retrait. Cette offre peut changer.",
      },
    },
    {
      "@type": "Question",
      name: "Les 200 euros déposés sur eToro peuvent-ils générer des intérêts ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "eToro affiche actuellement un taux annuel de 2,75 % sur le solde cash disponible en USD pour les résidents européens éligibles entre 1 dollar et 50 000 dollars. Ce taux peut varier et ne doit pas être confondu avec un investissement en actions, ETF ou crypto, qui peut monter ou baisser.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les principaux risques avec eToro ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les principaux risques sont la perte en capital, la volatilité des marchés, les frais ou spreads, les erreurs de choix d’actifs, le copy trading mal compris, les conditions variables selon le pays et la fiscalité. Les crypto-actifs et les produits à effet de levier sont particulièrement risqués.",
      },
    },
  ],
};

const strengths = [
  "Interface moderne et relativement simple à prendre en main.",
  "Accès à plusieurs univers : actions, ETF, crypto et trading selon les pays.",
  "Fonction CopyTrader pour observer ou copier d’autres investisseurs.",
  "Compte démo utile pour tester sans utiliser immédiatement de capital réel.",
  "Offre iGraal potentiellement intéressante si elle est disponible et correctement suivie.",
];

const limits = [
  "Les frais, spreads et conditions doivent être vérifiés avant chaque opération.",
  "Le copy trading ne garantit aucun résultat et peut entraîner des pertes.",
  "Les crypto-actifs restent très volatils et peuvent perdre fortement en valeur.",
  "Certains produits peuvent être limités ou indisponibles selon le pays.",
  "Le cashback dépend des conditions iGraal/eToro et peut prendre plusieurs mois à être validé.",
];

const igraalSteps = [
  {
    title: "1. Créer ou ouvrir son compte iGraal",
    text: "Le parcours testé par Afflizen commence par iGraal. L’idée est d’activer l’offre eToro depuis iGraal avant de créer le compte, afin que le cashback puisse être suivi.",
  },
  {
    title: "2. Chercher l’offre eToro dans iGraal",
    text: "Lors de notre test, l’offre affichée était de 50 € offerts pour une ouverture de compte validée avec 200 € déposés minimum. Cette offre peut évoluer : il faut relire les conditions iGraal au moment de l’inscription.",
  },
  {
    title: "3. Cliquer vers eToro depuis iGraal",
    text: "Il faut cliquer sur l’offre eToro depuis iGraal, puis poursuivre l’inscription sans changer d’appareil, sans ouvrir eToro dans un autre onglet et sans bloquer les cookies nécessaires au suivi.",
  },
  {
    title: "4. Déposer 200 € et respecter la période demandée",
    text: "Dans le parcours testé, le dépôt minimum était de 200 € et il fallait éviter tout retrait pendant environ 3 mois. C’est une condition importante : retirer trop tôt peut empêcher la validation du cashback.",
  },
  {
    title: "5. Suivre le cashback en attente",
    text: "Le cashback peut apparaître en attente après un certain délai, par exemple après 24 à 72 heures selon les cas, puis être validé plus tard si toutes les conditions sont respectées. La validation finale peut prendre plusieurs mois.",
  },
];

const relatedLinks = [
  {
    href: "/investissement/trade-republic",
    title: "Trade Republic",
    text: "Une alternative simple pour actions, ETF et plans d’investissement.",
  },
  {
    href: "/crypto/coinbase",
    title: "Coinbase",
    text: "Une plateforme crypto connue, plutôt orientée débutants.",
  },
  {
    href: "/crypto/binance",
    title: "Binance",
    text: "Une plateforme crypto très complète, mais plus dense à prendre en main.",
  },
  {
    href: "/cashback/igraal",
    title: "iGraal",
    text: "À consulter avant de s’inscrire sur une plateforme éligible au cashback.",
  },
];

export default function EToroPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Investissement · Actions · ETF · Crypto · Copy trading
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              eToro avis 2026 : une plateforme simple pour investir, copier et
              découvrir les marchés
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              eToro est une plateforme d’investissement connue pour son
              interface accessible, son univers multi-actifs et sa fonction de
              copy trading. Sur Afflizen, nous l’avons surtout testée via un
              parcours concret : passer par iGraal, activer l’offre eToro,
              déposer 200 € minimum, puis conserver le dépôt pendant environ 3
              mois sans retrait afin de respecter les conditions de validation
              du cashback.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AffiliateButton
                href={IGRAAL_AFFILIATE_LINK}
                platform="etoro"
                category="investissement"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Passer par iGraal puis chercher eToro
              </AffiliateButton>

              <a
                href={ETORO_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Voir le site officiel eToro
              </a>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-500">
              Lors de notre test, l’offre affichée était de 50 € offerts pour
              200 € déposés, avec une période d’environ 3 mois sans retrait.
              Cette offre peut changer : il faut toujours vérifier les
              conditions iGraal et eToro au moment exact de l’inscription. Le
              cashback reste soumis au tracking, au respect des conditions et à
              la validation finale.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Résumé Afflizen
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-950">Profil idéal</p>
                <p>
                  Débutant ou investisseur curieux qui veut une interface
                  simple.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point fort</p>
                <p>Copy trading, compte démo et plateforme multi-actifs.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Point faible</p>
                <p>Frais, spreads et conditions à vérifier avant d’investir.</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Offre testée</p>
                <p>
                  50 € de cashback potentiel pour 200 € déposés, sous
                  conditions et avec environ 3 mois sans retrait.
                </p>
              </div>
            </div>

            <AffiliateButton
              href={IGRAAL_AFFILIATE_LINK}
              platform="etoro"
              category="investissement"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Vérifier l’offre eToro sur iGraal
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Catégorie</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Investissement
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              eToro se place davantage dans l’investissement et le trading que
              dans la banque en ligne classique.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">À vérifier</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Frais et spreads
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Les frais peuvent varier selon l’actif, le pays, le type de
              position et les conditions en vigueur.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Cashback</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Passage par iGraal
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Le bon réflexe est de vérifier iGraal avant de créer un compte
              eToro, car l’offre peut être conditionnée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Avis Afflizen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Notre avis sur eToro
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              eToro est intéressant pour une personne qui veut découvrir
              plusieurs marchés depuis une seule interface : actions, ETF,
              crypto et fonctionnalités sociales. La plateforme est plus
              accessible visuellement que certains courtiers traditionnels, mais
              cette simplicité ne doit pas faire oublier les risques.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Son gros avantage marketing est le CopyTrader : tu peux observer
              d’autres investisseurs et, dans certains cas, copier leurs
              positions. C’est pratique pour comprendre des stratégies, mais ce
              n’est pas un raccourci magique. Copier quelqu’un ne garantit aucun
              résultat, et une bonne performance passée peut se retourner.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Pour Afflizen, eToro devient surtout intéressant si l’inscription
              peut être combinée avec une offre iGraal. Dans ce cas, l’objectif
              n’est pas seulement de s’inscrire vite, mais de suivre proprement
              le parcours : iGraal d’abord, eToro ensuite, puis respect strict
              des conditions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                Les avantages
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">Les limites</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {limits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Cashback iGraal
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Comment tenter le cashback eToro avec iGraal ?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
              Le parcours doit être propre. Le cashback peut être refusé si
              l’offre n’est pas activée correctement, si les conditions ne sont
              pas respectées, si un bloqueur gêne le suivi, si l’inscription a
              commencé ailleurs ou si le dépôt demandé n’est pas maintenu assez
              longtemps.
            </p>

            <div className="mt-8 space-y-5">
              {igraalSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">
                Retour d’expérience Afflizen
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Lors de notre test depuis la Belgique, le parcours iGraal vers
                eToro affichait une offre de 50 € offerts pour un dépôt minimum
                de 200 €. Le point important est la période de conservation :
                les 200 € déposés ne doivent pas être retirés trop vite, car
                l’offre demandait de les laisser sur le compte pendant environ 3
                mois.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Pendant cette période, l’argent peut rester disponible sur le
                compte eToro ou être utilisé selon les possibilités de la
                plateforme. Il faut cependant distinguer deux choses : si le
                solde reste non investi en USD et que l’option d’intérêt est
                disponible et activée, eToro affiche actuellement un taux annuel
                de 2,75 % pour les résidents européens éligibles sur la première
                tranche de solde. Ce taux peut varier.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Si les 200 € sont investis dans une action, un ETF, une crypto
                ou un autre actif, ce n’est plus un simple rendement d’intérêt :
                la valeur peut monter ou baisser. Le cashback doit donc être vu
                comme un bonus potentiel, pas comme une garantie de gain.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Important avant de déposer
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                L’offre peut sembler très intéressante : 50 € offerts pour 200 €
                déposés représente un bonus élevé si toutes les conditions sont
                validées. Mais il ne faut pas déposer uniquement pour le
                cashback. Il faut vérifier l’offre du jour, comprendre la
                période sans retrait, tenir compte du taux d’intérêt variable
                éventuel sur le solde non investi en USD, et accepter que tout
                investissement comporte un risque de perte.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-950">
              Parcours recommandé
            </h3>
            <ol className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <li>1. Lire l’offre iGraal du jour.</li>
              <li>2. Cliquer vers eToro depuis iGraal.</li>
              <li>3. Créer le compte sans changer de parcours.</li>
              <li>4. Déposer le montant demandé.</li>
              <li>5. Ne pas retirer avant la période indiquée.</li>
              <li>6. Attendre le suivi puis la validation.</li>
            </ol>

            <AffiliateButton
              href={IGRAAL_AFFILIATE_LINK}
              platform="etoro"
              category="investissement"
              location="cashback"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Passer par iGraal
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Risques
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Ce qu’il faut comprendre avant d’utiliser eToro
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              eToro est simple à utiliser, mais les produits proposés peuvent
              rester risqués. Les actions peuvent baisser, les ETF peuvent
              perdre de la valeur, les crypto-actifs sont très volatils et le
              copy trading ne transforme pas automatiquement un débutant en bon
              investisseur.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Perte en capital</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Investir implique toujours un risque. Il ne faut pas engager de
                l’argent dont tu peux avoir besoin à court terme.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Crypto volatile</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les crypto-actifs peuvent monter ou baisser très fortement. Ils
                ne bénéficient pas des mêmes protections que les dépôts
                bancaires.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Conditions locales</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Les produits disponibles, les frais, les règles fiscales et les
                restrictions peuvent varier selon le pays de résidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Pour qui ?
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            eToro peut convenir si...
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu veux une plateforme simple
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              eToro peut être intéressant si tu veux une interface claire pour
              découvrir les marchés, observer des portefeuilles et tester avec
              un compte démo avant de placer de l’argent réel.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu veux tenter un parcours cashback
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Si une offre iGraal est active, eToro peut être intéressant à
              condition de suivre le parcours correctement, de respecter le
              dépôt minimum et de ne pas retirer trop tôt.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu acceptes de vérifier les frais
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Avant toute opération, il faut regarder le prix final, le spread,
              les frais éventuels, le type d’actif et les conditions propres au
              compte.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Tu ne cherches pas une garantie de rendement
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              eToro reste une plateforme d’investissement. Elle ne garantit ni
              gain, ni rendement, ni succès avec le copy trading. Le cashback et
              les intérêts éventuels doivent rester des bonus potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Verdict
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  eToro est intéressant, mais à utiliser avec méthode
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  eToro mérite une place dans la catégorie investissement
                  d’Afflizen parce que la plateforme est connue, simple à
                  comprendre et différente d’un courtier classique grâce à son
                  approche sociale. Mais la bonne approche reste prudente :
                  vérifier les frais, commencer petit, éviter les produits mal
                  compris et ne pas copier aveuglément d’autres investisseurs.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Pour le parcours Afflizen, le meilleur angle est clair :
                  vérifier d’abord iGraal, lire l’offre eToro, puis s’inscrire
                  seulement si les conditions sont compréhensibles et adaptées.
                  Lors de notre test, l’offre de 50 € pour 200 € déposés avec 3
                  mois sans retrait était particulièrement intéressante, mais
                  elle doit être revérifiée avant chaque inscription.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <AffiliateButton
                  href={IGRAAL_AFFILIATE_LINK}
                  platform="etoro"
                  category="investissement"
                  location="avis"
                  className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Vérifier eToro via iGraal
                </AffiliateButton>

                <Link
                  href="/investissement"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  Voir la catégorie investissement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            À lire aussi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Comparer avant de choisir
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}