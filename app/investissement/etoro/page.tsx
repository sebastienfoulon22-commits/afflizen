import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";

const IGRAAL_AFFILIATE_LINK =
  "https://fr.igraal.com/parrainage?parrain=AG_5cec013713c0f&utm_medium=raf&utm_source=refer_friend";

const ETORO_OFFICIAL_LINK = "https://www.etoro.com/fr/";

export const metadata = createPageMetadata({
  title: "eToro avis 2026 : copy trading, actions, ETF, crypto et cashback iGraal",
  description: "Notre avis sur eToro en 2026 : fonctionnement, copy trading, actions, ETF, crypto, disponibilité éventuelle via iGraal, avantages, limites et points de vigilance.",
  path: "/investissement/etoro",
  type: "article",
});

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
        text: "Une offre eToro peut parfois être proposée via une plateforme de cashback comme iGraal. Sa présence, son montant, son dépôt minimum, ses délais de suivi et ses conditions de validation peuvent évoluer. Il faut vérifier l’offre réellement affichée dans son compte iGraal avant toute inscription ou dépôt.",
      },
    },
    {
      "@type": "Question",
      name: "Le solde non investi sur eToro peut-il générer des intérêts ?",
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
  "Possibilité de vérifier si une offre eToro est proposée dans son compte iGraal.",
];

const limits = [
  "Les frais, spreads et conditions doivent être vérifiés avant chaque opération.",
  "Le copy trading ne garantit aucun résultat et peut entraîner des pertes.",
  "Les crypto-actifs restent très volatils et peuvent perdre fortement en valeur.",
  "Certains produits peuvent être limités ou indisponibles selon le pays.",
  "La présence d’une offre et ses délais de suivi ou de validation doivent être vérifiés dans iGraal.",
];

const igraalSteps = [
  {
    title: "1. Créer ou ouvrir son compte iGraal",
    text: "Connectez-vous à iGraal afin de vérifier les offres réellement disponibles dans votre compte.",
  },
  {
    title: "2. Chercher l’offre eToro dans iGraal",
    text: "La présence d’eToro chez iGraal n’est pas garantie. Si une offre apparaît, lisez son montant, son dépôt éventuel, son éligibilité et ses conditions avant de poursuivre.",
  },
  {
    title: "3. Lire les conditions affichées",
    text: "Vérifiez notamment les actions demandées, les exclusions, les délais de suivi et les règles de validation propres à l’offre visible dans votre compte.",
  },
  {
    title: "4. Suivre uniquement le parcours indiqué",
    text: "Si l’offre vous convient, démarrez depuis iGraal et suivez les instructions affichées sans supposer qu’une ancienne condition reste valable.",
  },
  {
    title: "5. Contrôler le suivi et la validation",
    text: "Consultez votre compte iGraal pour connaître le statut du suivi. Les délais et la validation dépendent exclusivement des conditions alors affichées.",
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
              copy trading. Une offre eToro peut parfois être proposée via une
              plateforme de cashback comme iGraal, mais sa présence et ses
              conditions doivent être vérifiées au moment de la consultation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AffiliateButton
                href={IGRAAL_AFFILIATE_LINK}
                platform="etoro"
                category="investissement"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Vérifier les offres sur iGraal
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
              Une offre eToro peut parfois être proposée via une plateforme de
              cashback comme iGraal. Son montant, son dépôt minimum, ses délais
              de suivi et ses conditions de validation peuvent évoluer. Vérifiez
              toujours l’offre réellement affichée dans votre compte iGraal
              avant toute inscription ou dépôt. La présence d’eToro chez iGraal
              n’est pas garantie.
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
                <p className="font-semibold text-slate-950">
                  Disponibilité de l’offre
                </p>
                <p>
                  À vérifier dans le compte iGraal avant toute inscription ou
                  dépôt.
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
              La présence d’eToro chez iGraal n’est pas garantie. Si une offre
              est affichée, son montant, son dépôt éventuel, son parcours de
              suivi et ses conditions de validation doivent être lus avant
              toute inscription.
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
                Ce qu’Afflizen peut confirmer
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Les anciennes conditions observées par Afflizen ne permettent
                pas de décrire une offre actuelle. Seules les informations
                affichées dans le compte iGraal au moment du parcours doivent
                être utilisées pour décider de poursuivre.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Une éventuelle offre de cashback reste distincte des services
                d’investissement et des fonctionnalités proposées par eToro.
                Elle ne garantit ni gain, ni rendement, ni validation du
                cashback.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Toute somme investie dans une action, un ETF, une crypto ou un
                autre actif peut monter ou baisser. Une offre éventuelle ne doit
                jamais justifier à elle seule un dépôt ou un investissement.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-slate-950">
                Important avant de déposer
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Il ne faut pas déposer uniquement pour obtenir un cashback.
                Vérifiez l’offre visible, les conditions demandées, les risques
                des produits envisagés et votre capacité à supporter une perte.
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
              Vérifier les offres sur iGraal
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
              Si une offre eToro apparaît dans votre compte iGraal, lisez toutes
              ses conditions et vérifiez qu’elles correspondent à votre
              situation avant de commencer le parcours.
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
                  vérifier d’abord iGraal, rechercher une éventuelle offre eToro,
                  puis s’inscrire seulement si les conditions actuellement
                  affichées sont compréhensibles et adaptées. Afflizen ne
                  garantit ni la présence de l’offre ni son avantage.
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
                  Vérifier les offres sur iGraal
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
