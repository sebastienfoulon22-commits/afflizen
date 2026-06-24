import Link from "next/link";
import AffiliateButton from "../../../components/AffiliateButton";

const COINBASE_AFFILIATE_LINK =
  "https://coinbase.com/join/HRDF5VE?src=referral-link";

export const metadata = {
  title: "Coinbase avis 2026 : frais, sécurité, avantages et inconvénients",
  description:
    "Notre avis sur Coinbase : frais, sécurité, crypto disponibles, avantages, limites, lien de parrainage et conseils avant de créer un compte.",
  alternates: {
    canonical: "https://afflizen.com/crypto/coinbase",
  },
};

const benefits = [
  {
    title: "Une plateforme très connue",
    description:
      "Coinbase fait partie des plateformes crypto les plus connues du marché. Elle peut convenir aux débutants qui veulent une interface claire pour acheter, vendre, convertir ou conserver des cryptomonnaies.",
  },
  {
    title: "Interface simple pour débuter",
    description:
      "L’application et le site sont pensés pour rendre l’achat de crypto accessible, avec un parcours plus simple que certaines plateformes de trading avancé.",
  },
  {
    title: "Sécurité mise en avant",
    description:
      "Coinbase impose notamment la vérification en deux étapes pour accéder au compte. Cela ne supprime pas les risques, mais c’est un point important pour protéger l’accès.",
  },
  {
    title: "Coinbase Advanced pour aller plus loin",
    description:
      "Les utilisateurs plus expérimentés peuvent utiliser l’interface avancée pour passer des ordres plus précis et mieux surveiller les frais.",
  },
];

const warnings = [
  "Les cryptomonnaies sont volatiles : il est possible de perdre une partie ou la totalité du capital investi.",
  "Les frais, spreads et conditions peuvent varier selon le pays, le moyen de paiement, le type d’ordre et la transaction.",
  "Il faut toujours vérifier le récapitulatif de transaction avant d’acheter, vendre ou convertir une crypto.",
  "Coinbase est simple à utiliser, mais cette simplicité peut coûter plus cher que certaines plateformes plus orientées trading.",
  "Pour de gros montants, il peut être utile de comparer avec Coinbase Advanced ou d’autres plateformes.",
  "Ne laisse pas de gros montants sur une plateforme si tu ne comprends pas les risques de conservation.",
];

const steps = [
  {
    title: "1. Créer un compte Coinbase",
    description:
      "Clique sur le lien Afflizen, renseigne tes informations et suis les étapes de création de compte.",
  },
  {
    title: "2. Vérifier ton identité",
    description:
      "Comme les autres plateformes régulées, Coinbase peut demander une vérification d’identité avant d’autoriser certaines opérations.",
  },
  {
    title: "3. Sécuriser ton compte",
    description:
      "Active et configure sérieusement la double authentification, avec une méthode solide plutôt qu’une sécurité minimale.",
  },
  {
    title: "4. Comparer avant d’acheter",
    description:
      "Avant chaque achat, vérifie le prix final, les frais, le spread, le moyen de paiement utilisé et les conditions affichées.",
  },
];

const comparisons = [
  {
    title: "Coinbase vs Binance",
    description:
      "Coinbase est souvent perçu comme plus simple pour débuter, tandis que Binance propose généralement davantage d’outils, de produits et de fonctions avancées.",
  },
  {
    title: "Coinbase vs Kraken",
    description:
      "Kraken peut séduire les utilisateurs qui veulent une plateforme crypto sérieuse avec une approche plus orientée trading, tandis que Coinbase reste très accessible.",
  },
  {
    title: "Coinbase vs Crypto.com",
    description:
      "Crypto.com mise beaucoup sur son application, sa carte et son écosystème. Coinbase est plus centré sur l’achat, la vente, la conservation et l’accès simple aux cryptos.",
  },
  {
    title: "Coinbase vs Bitget",
    description:
      "Bitget attire davantage les utilisateurs intéressés par le trading avancé ou le copy trading. Coinbase est plus adapté à un usage simple et progressif.",
  },
];

const faq = [
  {
    question: "Coinbase est-il adapté aux débutants ?",
    answer:
      "Oui, Coinbase peut convenir aux débutants grâce à son interface simple. Il faut toutefois comprendre les risques des cryptomonnaies, vérifier les frais et ne pas investir d’argent que l’on ne peut pas se permettre de perdre.",
  },
  {
    question: "Coinbase est-il sans frais ?",
    answer:
      "Non. Les frais, spreads et conditions peuvent varier selon la transaction, le moyen de paiement, le pays et le type d’ordre. Il faut toujours vérifier l’écran récapitulatif avant de valider une opération.",
  },
  {
    question: "Coinbase est-il sécurisé ?",
    answer:
      "Coinbase met en avant plusieurs outils de sécurité, dont la vérification en deux étapes. Cela ne supprime pas tous les risques : l’utilisateur doit aussi protéger son mot de passe, ses appareils et ses méthodes d’authentification.",
  },
  {
    question: "Faut-il utiliser Coinbase ou Coinbase Advanced ?",
    answer:
      "Pour un débutant, l’interface classique peut être plus simple. Pour un utilisateur plus expérimenté, Coinbase Advanced peut être intéressant afin de mieux contrôler les ordres et les frais.",
  },
  {
    question: "Afflizen dispose-t-il d’un lien de parrainage Coinbase ?",
    answer:
      "Oui. Afflizen utilise un lien de parrainage Coinbase. Les avantages éventuels dépendent des conditions Coinbase en vigueur au moment de l’inscription.",
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

export default function CoinbasePage() {
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
              Crypto · Plateforme d’achat · Débutants
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Coinbase avis 2026 : frais, sécurité, avantages et limites avant
              de créer un compte
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Coinbase est une plateforme crypto très connue, souvent choisie
              pour sa simplicité. Elle peut être intéressante pour débuter, mais
              il faut comparer les frais, le spread, les conditions de
              transaction et les alternatives avant d’acheter des cryptomonnaies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AffiliateButton
                href={COINBASE_AFFILIATE_LINK}
                platform="coinbase"
                category="crypto"
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Créer un compte Coinbase
              </AffiliateButton>

              <a
                href="#avis-coinbase"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Ce lien peut être un lien de parrainage. Afflizen peut recevoir un
              avantage si tu t’inscris via ce lien, sans surcoût pour toi. Les
              conditions Coinbase peuvent changer : vérifie toujours les
              informations officielles avant inscription.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl lg:w-80">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Coinbase
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme connue et accessible pour acheter, vendre et
                conserver des cryptomonnaies.
              </p>

              <p>
                À utiliser avec prudence : vérifie toujours les frais, le spread
                et le prix final avant de valider une opération.
              </p>
            </div>

            <AffiliateButton
              href={COINBASE_AFFILIATE_LINK}
              platform="coinbase"
              category="crypto"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Ouvrir Coinbase
            </AffiliateButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section
            id="avis-coinbase"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Coinbase
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Coinbase est une bonne porte d’entrée pour découvrir les
              cryptomonnaies sans se retrouver immédiatement face à une interface
              trop complexe. Son principal avantage est la simplicité : créer un
              compte, acheter une crypto, suivre son portefeuille et vendre reste
              assez accessible.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Son principal point faible est souvent le coût perçu des
              transactions simples. Avant d’acheter, il faut regarder le prix
              affiché, les frais éventuels, le spread, le moyen de paiement
              utilisé et comparer avec d’autres plateformes si le montant devient
              important.
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
              Frais et spread
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Coinbase est-il cher ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Coinbase peut être très pratique, mais il faut être attentif aux
              frais et au spread. Sur certaines opérations simples, le spread est
              inclus dans le prix affiché. Les frais peuvent aussi varier selon
              le type de transaction, le montant, le moyen de paiement et le pays.
            </p>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-xl font-bold text-amber-900">
                Réflexe important
              </h3>

              <p className="mt-3 text-sm leading-6 text-amber-950">
                Avant de valider une transaction, regarde toujours le
                récapitulatif Coinbase : prix d’achat ou de vente, frais,
                montant reçu, spread éventuel et moyen de paiement utilisé.
              </p>
            </div>

            <div className="mt-6">
              <AffiliateButton
                href={COINBASE_AFFILIATE_LINK}
                platform="coinbase"
                category="crypto"
                location="frais"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Comparer les frais sur Coinbase
              </AffiliateButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Sécurité : les bons réflexes
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Coinbase met en avant plusieurs outils de sécurité, mais la
              sécurité dépend aussi de l’utilisateur. Un compte crypto doit être
              protégé avec un mot de passe unique, une double authentification
              sérieuse et une vigilance constante face aux emails ou faux sites.
            </p>

            <div className="mt-6 grid gap-4">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-950">
                  Active une double authentification solide
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Évite autant que possible les méthodes faibles. Une application
                  d’authentification ou une clé de sécurité est généralement un
                  meilleur réflexe qu’un simple SMS.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-950">
                  Méfie-toi du phishing
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ne clique pas sur un lien reçu par email ou message si tu as un
                  doute. Passe toujours par l’adresse officielle et vérifie le
                  domaine avant de te connecter.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold text-slate-950">
                  Réfléchis à la conservation long terme
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Pour de gros montants ou une conservation longue durée, il peut
                  être pertinent d’apprendre à utiliser un wallet personnel ou
                  une solution de stockage à froid.
                </p>
              </article>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Comment créer un compte Coinbase ?
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
              Coinbase face aux autres plateformes crypto
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Coinbase n’est pas forcément la plateforme la moins chère ni la
              plus complète, mais elle reste intéressante pour ceux qui veulent
              une expérience simple et connue. Selon ton profil, d’autres
              plateformes peuvent être plus adaptées.
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
              Les points à vérifier avant d’utiliser Coinbase
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Coinbase peut être une bonne plateforme pour commencer, mais il ne
              faut pas confondre simplicité et absence de risque. Avant
              d’investir, vérifie les points suivants.
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
              Avantages et inconvénients de Coinbase
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-bold text-emerald-900">
                  Avantages
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
                  <li>• Interface simple pour commencer.</li>
                  <li>• Plateforme très connue dans l’univers crypto.</li>
                  <li>• Application mobile claire.</li>
                  <li>• Possibilité d’utiliser une interface avancée.</li>
                  <li>• Mesures de sécurité importantes à activer.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-900">
                  Inconvénients
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-950">
                  <li>• Frais et spread à surveiller attentivement.</li>
                  <li>• Moins d’outils que certaines plateformes spécialisées.</li>
                  <li>• Vérification d’identité nécessaire.</li>
                  <li>• Risque crypto toujours présent.</li>
                  <li>• Conservation sur plateforme à comprendre avant usage.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Verdict Afflizen
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Coinbase est une plateforme intéressante pour débuter dans la
              crypto grâce à son interface simple et connue. Elle peut convenir à
              un utilisateur qui veut acheter progressivement, découvrir les
              cryptomonnaies et éviter une interface trop complexe au départ.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Notre conseil : utilise Coinbase pour sa simplicité, mais ne valide
              jamais une transaction sans vérifier les frais, le spread et le prix
              final. Pour des montants plus importants, compare aussi Coinbase
              Advanced, Binance, Kraken ou d’autres plateformes.
            </p>

            <div className="mt-6">
              <AffiliateButton
                href={COINBASE_AFFILIATE_LINK}
                platform="coinbase"
                category="crypto"
                location="avis"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Créer un compte Coinbase
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
              Coinbase
            </h2>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-slate-500">Catégorie</dt>
                <dd className="mt-1 font-bold text-slate-950">
                  Crypto · Débutants
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">Point fort</dt>
                <dd className="mt-1 text-slate-700">
                  Interface simple et plateforme très connue.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-500">À surveiller</dt>
                <dd className="mt-1 text-slate-700">
                  Frais, spread, moyen de paiement, sécurité et conservation des
                  cryptos.
                </dd>
              </div>
            </dl>

            <AffiliateButton
              href={COINBASE_AFFILIATE_LINK}
              platform="coinbase"
              category="crypto"
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Ouvrir Coinbase
            </AffiliateButton>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Les cryptomonnaies sont risquées et volatiles. Vérifie toujours
              les conditions officielles avant d’investir.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}