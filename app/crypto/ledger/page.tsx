import Link from "next/link";
import AffiliateButton from "../../../components/AffiliateButton";

const LEDGER_AFFILIATE_LINK =
  "https://shop.ledger.com/fr/pages/referral-program?referral_code=2AZ5DTSGZ2ZJ5";

export const metadata = {
  title: "Ledger avis 2026 : wallet crypto, sécurité, avantages et limites",
  description:
    "Notre avis sur Ledger : wallet physique, sécurité crypto, phrase de récupération, avantages, limites, risques et conseils avant d’acheter un portefeuille Ledger.",
  alternates: {
    canonical: "https://afflizen.com/crypto/ledger",
  },
};

const benefits = [
  {
    title: "Stocker ses clés hors ligne",
    description:
      "Un wallet physique Ledger permet de garder les clés privées séparées d’un ordinateur ou d’un smartphone connecté. C’est l’un des grands intérêts du stockage à froid.",
  },
  {
    title: "Un complément aux plateformes crypto",
    description:
      "Ledger peut être utile après l’achat de cryptos sur Coinbase, Binance, Kraken ou d’autres plateformes, surtout si l’objectif est de conserver ses actifs sur le long terme.",
  },
  {
    title: "Validation physique des transactions",
    description:
      "L’utilisateur doit valider les opérations depuis l’appareil. Cela ajoute une étape de contrôle importante par rapport à un simple compte en ligne.",
  },
  {
    title: "Gestion via l’application Ledger",
    description:
      "Ledger propose une application pour gérer ses actifs, consulter son portefeuille et utiliser différents services, tout en gardant l’importance de la sécurité personnelle.",
  },
];

const warnings = [
  "Un wallet Ledger ne supprime pas les risques crypto : la valeur des actifs peut fortement varier.",
  "La phrase de récupération doit être protégée hors ligne et ne doit jamais être partagée.",
  "Ne prends jamais ta phrase de récupération en photo et ne la stocke pas dans un cloud, un email ou une note numérique.",
  "Achète toujours via une source fiable pour éviter les appareils modifiés ou les fausses boutiques.",
  "Vérifie toujours l’adresse affichée avant de valider une transaction crypto.",
  "Si tu perds la phrase de récupération, tu peux perdre l’accès à tes cryptos.",
  "Un wallet physique demande de la rigueur : mauvaise manipulation, mauvaise adresse ou mauvais réseau peuvent entraîner une perte définitive.",
];

const steps = [
  {
    title: "1. Acheter Ledger depuis une source fiable",
    description:
      "Passe par le site officiel ou une source reconnue. Évite les vendeurs douteux, les appareils déjà ouverts ou les offres trop belles pour être vraies.",
  },
  {
    title: "2. Initialiser l’appareil toi-même",
    description:
      "La phrase de récupération doit être générée lors de ta configuration. N’utilise jamais une phrase fournie à l’avance par quelqu’un d’autre.",
  },
  {
    title: "3. Noter la phrase hors ligne",
    description:
      "Écris la phrase de récupération sur un support physique et conserve-la dans un endroit sûr. Ne la photographie pas et ne la tape pas sur un ordinateur.",
  },
  {
    title: "4. Faire un petit test avant de gros montants",
    description:
      "Avant de transférer une somme importante, teste avec un petit montant pour vérifier l’adresse, le réseau et la bonne réception des fonds.",
  },
];

const comparisons = [
  {
    title: "Ledger vs Coinbase",
    description:
      "Coinbase est une plateforme pour acheter, vendre et conserver des cryptos en ligne. Ledger est plutôt une solution de conservation personnelle pour reprendre le contrôle de ses clés privées.",
  },
  {
    title: "Ledger vs Binance",
    description:
      "Binance propose beaucoup de services crypto. Ledger intervient surtout après l’achat, pour sécuriser une partie de ses actifs hors plateforme.",
  },
  {
    title: "Ledger vs Kraken",
    description:
      "Kraken est un exchange sérieux pour acheter ou vendre des cryptos. Ledger est utile pour ceux qui veulent conserver leurs actifs eux-mêmes sur le long terme.",
  },
  {
    title: "Ledger vs wallet logiciel",
    description:
      "Un wallet logiciel est plus rapide à utiliser, mais il dépend davantage d’un appareil connecté. Un wallet physique ajoute une couche de protection, au prix de plus de rigueur.",
  },
];

const faq = [
  {
    question: "Ledger est-il utile pour un débutant ?",
    answer:
      "Ledger peut être utile dès qu’un utilisateur commence à conserver des montants qu’il ne veut pas laisser sur une plateforme. Pour un débutant complet, il faut d’abord comprendre la phrase de récupération, les réseaux crypto et les risques de mauvaise manipulation.",
  },
  {
    question: "Ledger protège-t-il contre tous les risques ?",
    answer:
      "Non. Ledger aide à protéger les clés privées, mais il ne protège pas contre la baisse du marché, les erreurs d’adresse, les mauvais réseaux, les arnaques ou la perte de la phrase de récupération.",
  },
  {
    question: "Que se passe-t-il si je perds mon Ledger ?",
    answer:
      "Si tu perds l’appareil mais que tu as toujours ta phrase de récupération, tu peux restaurer l’accès à tes actifs sur un autre wallet compatible. Si tu perds aussi la phrase, l’accès peut être définitivement perdu.",
  },
  {
    question: "Faut-il partager sa phrase de récupération avec Ledger ?",
    answer:
      "Non. Il ne faut jamais partager sa phrase de récupération. Elle donne accès aux actifs liés au wallet et doit rester strictement privée.",
  },
  {
    question: "Afflizen dispose-t-il d’un lien de parrainage Ledger ?",
    answer:
      "Oui. Afflizen utilise un lien de parrainage Ledger. Les avantages éventuels dépendent des conditions Ledger en vigueur au moment de l’achat.",
  },
];

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

export default function LedgerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link
                href="/crypto"
                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Voir la catégorie crypto
              </Link>
            </div>

            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              Crypto · Wallet physique · Sécurité
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Ledger avis 2026 : wallet crypto, sécurité, avantages et limites
              avant d’acheter
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Ledger est une solution de wallet physique pensée pour mieux
              protéger ses clés privées et conserver ses cryptomonnaies avec plus
              d’autonomie. C’est un complément naturel aux plateformes comme
              Coinbase, Binance ou Kraken, mais cela demande de bien comprendre
              la phrase de récupération et les risques de mauvaise manipulation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AffiliateButton
                href={LEDGER_AFFILIATE_LINK}
                platform="ledger"
                category="crypto"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Ledger
              </AffiliateButton>

              <a
                href="#avis-ledger"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Ce lien peut être un lien de parrainage. Afflizen peut recevoir un
              avantage si tu passes par ce lien, sans surcoût pour toi. Vérifie
              toujours les conditions officielles avant achat.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl lg:w-80">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Ledger
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Utile pour ceux qui veulent conserver eux-mêmes une partie de
                leurs cryptos plutôt que tout laisser sur une plateforme.
              </p>

              <p>
                Très bon outil si tu es rigoureux. Mauvais choix si tu ne veux
                pas gérer la phrase de récupération avec sérieux.
              </p>
            </div>

            <AffiliateButton
              href={LEDGER_AFFILIATE_LINK}
              platform="ledger"
              category="crypto"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Ouvrir Ledger
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section
            id="avis-ledger"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Ledger
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Ledger est l’un des noms les plus connus dans l’univers des wallets
              physiques. Son intérêt principal est simple : ne pas dépendre
              uniquement d’une plateforme crypto pour conserver ses actifs. Quand
              on commence à accumuler des cryptomonnaies, la question de la
              conservation devient importante.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Le point fort de Ledger est la sécurité des clés privées. Le point
              faible, c’est que cette autonomie donne aussi plus de
              responsabilité à l’utilisateur. Si tu perds ta phrase de
              récupération, si tu la partages ou si tu envoies des cryptos sur le
              mauvais réseau, Ledger ne pourra pas simplement annuler l’erreur.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Sécurité crypto
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Le point central : la phrase de récupération
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La phrase de récupération est la clé de secours de ton wallet. Elle
              permet de restaurer l’accès à tes actifs si ton appareil est perdu,
              cassé ou remplacé. Elle doit donc être protégée avec autant de
              sérieux qu’un coffre-fort.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-xl font-bold text-amber-900">
                Règle absolue
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                Ne partage jamais ta phrase de récupération. Ne la prends pas en
                photo. Ne la stocke pas dans un cloud. Ne la tape pas dans un
                site web, une application inconnue ou un formulaire reçu par
                email.
              </p>
            </div>

            <div className="mt-6">
              <AffiliateButton
                href={LEDGER_AFFILIATE_LINK}
                platform="ledger"
                category="crypto"
                location="securite"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir les wallets Ledger
              </AffiliateButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse Ledger ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Ledger n’est pas forcément indispensable pour quelqu’un qui teste
              la crypto avec une toute petite somme. En revanche, dès que tu
              commences à conserver des montants plus importants ou que tu veux
              garder tes cryptos plusieurs années, la question du stockage
              devient beaucoup plus sérieuse.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-bold text-emerald-900">
                  Ledger peut être adapté si…
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
                  <li>• Tu conserves des cryptos sur le moyen ou long terme.</li>
                  <li>• Tu veux réduire ta dépendance aux exchanges.</li>
                  <li>• Tu es prêt à protéger sérieusement ta phrase de récupération.</li>
                  <li>• Tu comprends les bases des réseaux crypto et des adresses.</li>
                  <li>• Tu veux apprendre la self-custody progressivement.</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-900">
                  Ledger peut ne pas être adapté si…
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950">
                  <li>• Tu ne veux pas gérer une phrase de récupération.</li>
                  <li>• Tu risques de perdre tes documents importants.</li>
                  <li>• Tu débutes sans comprendre les transferts crypto.</li>
                  <li>• Tu penses qu’un wallet annule tous les risques.</li>
                  <li>• Tu veux une solution sans aucune responsabilité personnelle.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Comment bien démarrer avec Ledger ?
            </h2>

            <div className="mt-6 grid gap-4">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Ledger face aux plateformes crypto
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Ledger ne remplace pas totalement une plateforme crypto. Coinbase,
              Binance ou Kraken servent surtout à acheter, vendre ou convertir.
              Ledger sert plutôt à conserver ses cryptos avec plus d’autonomie
              une fois l’achat effectué.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {comparisons.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Les points à vérifier avant d’acheter Ledger
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Ledger est un outil de sécurité, mais il ne fonctionne bien que si
              l’utilisateur adopte les bons réflexes. Avant d’acheter un wallet
              physique, vérifie les points suivants.
            </p>

            <ul className="mt-6 space-y-3">
              {warnings.map((warning) => (
                <li
                  key={warning}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Avantages et inconvénients de Ledger
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-bold text-emerald-900">
                  Avantages
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
                  <li>• Meilleur contrôle de ses clés privées.</li>
                  <li>• Conservation hors plateforme crypto.</li>
                  <li>• Validation physique des transactions.</li>
                  <li>• Bon complément à Coinbase, Binance ou Kraken.</li>
                  <li>• Adapté à une stratégie long terme si bien utilisé.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-900">
                  Inconvénients
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950">
                  <li>• Demande plus de responsabilité personnelle.</li>
                  <li>• Risque de perte si la phrase de récupération est perdue.</li>
                  <li>• Mauvaise adresse ou mauvais réseau = perte possible.</li>
                  <li>• Coût d’achat du wallet physique.</li>
                  <li>• Courbe d’apprentissage pour les débutants.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Verdict Afflizen
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Ledger est une page importante pour Afflizen, car elle complète
              parfaitement les fiches Coinbase, Binance, Kraken et autres
              plateformes crypto. Acheter de la crypto est une chose ; savoir la
              conserver correctement en est une autre.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Notre conseil : Ledger peut être très pertinent si tu veux
              sécuriser une partie de tes actifs crypto sur le long terme. Mais
              avant d’acheter, prends le temps de comprendre la phrase de
              récupération, les transferts, les réseaux et les erreurs à éviter.
            </p>

            <div className="mt-6">
              <AffiliateButton
                href={LEDGER_AFFILIATE_LINK}
                platform="ledger"
                category="crypto"
                location="avis"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Ledger
              </AffiliateButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Questions fréquentes
            </h2>

            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-bold text-slate-950">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Résumé rapide
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Ledger
            </h2>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-500">Catégorie</dt>
                <dd className="mt-1 font-bold text-slate-950">
                  Crypto · Wallet physique
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">Point fort</dt>
                <dd className="mt-1 text-slate-700">
                  Meilleur contrôle de ses clés privées et conservation hors
                  plateforme.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">À surveiller</dt>
                <dd className="mt-1 text-slate-700">
                  Phrase de récupération, transferts, réseaux, adresses et
                  phishing.
                </dd>
              </div>
            </dl>

            <AffiliateButton
              href={LEDGER_AFFILIATE_LINK}
              platform="ledger"
              category="crypto"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Ouvrir Ledger
            </AffiliateButton>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Les cryptomonnaies sont risquées. Ledger aide à sécuriser les clés,
              mais ne protège pas contre les erreurs, les arnaques ou la baisse
              du marché.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}