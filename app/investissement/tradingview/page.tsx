import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";

const TRADINGVIEW_AFFILIATE_LINK = "https://fr.tradingview.com/?aff_id=168402";

export const metadata: Metadata = {
  title: "TradingView : graphiques, analyse et suivi des marchés | Afflizen",
  description:
    "Découvrez TradingView, une plateforme de graphiques, alertes et analyse des marchés financiers. Avis Afflizen, points forts, limites, risques et lien d’affiliation.",
  alternates: {
    canonical: "https://afflizen.com/investissement/tradingview",
  },
  openGraph: {
    title: "TradingView : graphiques, analyse et suivi des marchés | Afflizen",
    description:
      "Découvrez TradingView, une plateforme de graphiques, alertes et analyse des marchés financiers. Avis Afflizen, points forts, limites, risques et lien d’affiliation.",
    url: "https://afflizen.com/investissement/tradingview",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Interface graphique claire pour suivre de nombreux marchés financiers.",
  "Outils d’analyse technique, indicateurs, dessins, alertes et listes de surveillance.",
  "Peut servir aux investisseurs, traders, utilisateurs crypto ou profils qui veulent simplement surveiller des actifs.",
  "Couverture large selon disponibilité : actions, ETF, indices, forex, crypto, matières premières, obligations et données économiques.",
  "Version gratuite et abonnements à comparer selon les besoins réels, les données voulues et la fréquence d’utilisation.",
];

const limits = [
  "TradingView n’est pas à présenter comme un courtier principal pour acheter des actifs.",
  "TradingView n’est pas un conseiller financier et ne fournit pas de recommandation personnalisée via Afflizen.",
  "Les données, abonnements, marchés, fonctionnalités, prix et conditions peuvent changer.",
  "Les idées publiées par la communauté ne doivent pas être suivies aveuglément.",
  "L’investissement et le trading comportent un risque de perte en capital.",
];

const useCases = [
  "Suivre des actions, ETF, indices ou obligations selon données disponibles.",
  "Observer le forex, les matières premières ou les données macroéconomiques.",
  "Créer des listes de surveillance et des alertes de prix.",
  "Analyser les cryptos avec graphiques, indicateurs et comparaisons de marché.",
];

const features = [
  "Graphiques avancés avec unités de temps, indicateurs, outils de dessin et comparaisons.",
  "Alertes configurables selon les prix, indicateurs ou conditions disponibles.",
  "Listes de surveillance pour regrouper actions, ETF, indices, crypto, devises ou matières premières.",
  "Scripts, indicateurs communautaires, idées de marché et outils à interpréter avec recul.",
];

const checks = [
  "Marchés et données disponibles pour votre pays, vos actifs et vos places boursières.",
  "Différences entre la version gratuite et les abonnements payants.",
  "Délai éventuel des données, limites d’alertes, nombre de graphiques et fonctionnalités avancées.",
  "Conditions officielles, prix, renouvellement, annulation, fiscalité éventuelle et risques de trading.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/finary",
    title: "Finary",
    text: "Un outil pour suivre son patrimoine, ses comptes et ses investissements.",
  },
  {
    href: "/investissement/interactive-brokers",
    title: "Interactive Brokers",
    text: "Un courtier international complet pour investisseurs autonomes.",
  },
  {
    href: "/investissement/saxo",
    title: "Saxo",
    text: "Un courtier en ligne international pour investisseurs autonomes.",
  },
  {
    href: "/investissement/degiro",
    title: "DEGIRO",
    text: "Un courtier en ligne orienté actions, ETF et marchés financiers.",
  },
  {
    href: "/crypto",
    title: "Crypto",
    text: "Comparer les plateformes et outils crypto suivis par Afflizen.",
  },
  {
    href: "/crypto/deblock",
    title: "Deblock",
    text: "Une application combinant euros, carte et crypto, à analyser avec prudence.",
  },
];

const faq = [
  {
    question: "TradingView est-il un courtier ?",
    answer:
      "Non. TradingView doit être présenté comme une plateforme de graphiques, d’analyse, d’alertes et de suivi des marchés. Ce n’est pas un courtier à présenter comme solution principale d’achat d’actifs sur Afflizen.",
  },
  {
    question: "TradingView est-il utile pour les débutants ?",
    answer:
      "TradingView peut aider un débutant à visualiser les marchés et à apprendre les bases des graphiques. Il faut toutefois éviter de confondre outil d’analyse et conseil financier, et ne pas suivre des signaux sans comprendre les risques.",
  },
  {
    question: "Peut-on suivre les cryptos avec TradingView ?",
    answer:
      "Oui, TradingView permet de suivre de nombreuses cryptomonnaies et données crypto selon les sources disponibles. Les crypto-actifs restent volatils et peuvent entraîner une perte en capital.",
  },
  {
    question: "Peut-on suivre les actions et ETF avec TradingView ?",
    answer:
      "Oui, TradingView permet de suivre des actions, ETF, indices et autres données de marché selon les places, les données disponibles et les conditions de la plateforme.",
  },
  {
    question: "TradingView est-il gratuit ?",
    answer:
      "TradingView propose une version gratuite et des abonnements. Les fonctionnalités, limites, prix, données disponibles et conditions peuvent changer : il faut vérifier les détails sur le site officiel.",
  },
  {
    question: "Le lien TradingView sur Afflizen est-il affilié ?",
    answer:
      "Oui. Le lien TradingView présent sur Afflizen est un lien d’affiliation/parrainage. Cela peut permettre à Afflizen de recevoir une commission ou une récompense si vous utilisez TradingView, sans modifier notre approche éditoriale.",
  },
];

const faqJsonLd = {
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

function TradingViewButton({
  location,
  className,
  children,
}: {
  location: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <AffiliateButton
      href={TRADINGVIEW_AFFILIATE_LINK}
      platform="TradingView"
      category="investissement"
      location={location}
      className={className}
    >
      {children}
    </AffiliateButton>
  );
}

export default function TradingViewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
          <div>
            <Link
              href="/investissement"
              className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Voir la catégorie investissement
            </Link>

            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Investissement
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              TradingView : graphiques, alertes et analyse des marchés
              financiers
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Un outil complet pour suivre les actions, ETF, crypto, indices,
              devises et autres marchés depuis une interface claire et puissante.
              TradingView sert avant tout à visualiser, analyser et surveiller
              les marchés : ce n’est pas une recommandation d’investissement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <TradingViewButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir TradingView
              </TradingViewButton>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Lien affilié Afflizen, sans bonus promis
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le bouton TradingView utilise un lien d’affiliation/parrainage.
                Afflizen peut recevoir une commission ou une récompense si vous
                utilisez TradingView, sans promettre de réduction, code promo,
                gain financier ou avantage garanti.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              TradingView
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme de graphiques, alertes, listes de surveillance et
                analyse des marchés financiers.
              </p>

              <p>
                À utiliser comme outil d’aide à l’analyse, pas comme conseiller
                financier. Investir ou trader comporte un risque de perte en
                capital.
              </p>
            </div>

            <TradingViewButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site TradingView
            </TradingViewButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Analyse de marchés
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Outils</p>
            <p className="mt-2 font-semibold text-slate-950">
              Graphiques et alertes
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Marchés</p>
            <p className="mt-2 font-semibold text-slate-950">
              Actions, ETF, crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Affiliation</p>
            <p className="mt-2 font-semibold text-slate-950">
              Lien sponsorisé
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation rapide de TradingView
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              TradingView est une plateforme d’analyse des marchés financiers,
              de graphiques, d’indicateurs, d’alertes, de listes de surveillance
              et de suivi de nombreux actifs. Elle peut être utilisée pour
              observer les actions, ETF, indices, forex, crypto, matières
              premières, obligations ou autres données de marché selon
              disponibilité.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Sur Afflizen, TradingView est présenté comme un outil d’analyse et
              de visualisation. Ce n’est pas un courtier principal, pas un
              conseiller financier et pas une promesse de performance.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À quoi sert TradingView ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              TradingView sert à suivre les marchés, comparer des actifs,
              construire des graphiques, placer des alertes, créer des listes de
              surveillance et utiliser des indicateurs. Il peut aider à mieux
              organiser son analyse, mais l’outil ne décide pas à la place de
              l’utilisateur.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Pour quels profils TradingView peut être utile ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              TradingView peut intéresser les investisseurs long terme qui
              veulent surveiller des actions ou ETF, les utilisateurs crypto qui
              suivent plusieurs actifs, les traders qui ont besoin d’alertes et
              d’indicateurs, ou les curieux qui veulent comprendre la lecture
              graphique des marchés.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              L’outil reste à utiliser avec méthode : un graphique propre, une
              alerte ou un indicateur populaire ne supprime jamais le risque de
              perte ni l’incertitude des marchés.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Graphiques, alertes, listes de surveillance et indicateurs
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              TradingView est surtout connu pour ses graphiques et sa couche
              d’outils : indicateurs techniques, alertes, listes, scripts,
              comparaisons et idées de marché. Ces fonctionnalités peuvent
              améliorer l’organisation, mais elles ne remplacent pas une analyse
              personnelle, une gestion du risque ni la vérification des sources.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              TradingView pour actions, ETF, crypto, forex et indices
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La plateforme peut suivre de nombreuses classes d’actifs selon les
              données accessibles : actions, ETF, indices, devises, crypto,
              matières premières, obligations, contrats à terme ou indicateurs
              économiques. La disponibilité exacte dépend des marchés, des
              sources de données et de l’abonnement éventuel.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Version gratuite et abonnements : rester prudent
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              TradingView propose une version gratuite et des abonnements. Les
              limites, fonctionnalités, prix, données de marché, alertes,
              graphiques, renouvellements et conditions peuvent évoluer. Il faut
              vérifier directement les offres sur le site officiel avant de
              choisir une formule.
            </p>

            <div className="mt-6 grid gap-4">
              {checks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">
                Points forts potentiels
              </h2>

              <ul className="mt-5 space-y-3">
                {strengths.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-emerald-950"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-amber-950">
                Limites et points à vérifier
              </h2>

              <ul className="mt-5 space-y-3">
                {limits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-amber-950"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-red-950">
              Risques liés au trading et à l’investissement
            </h2>

            <p className="mt-4 text-base leading-7 text-red-950">
              Investir ou trader comporte un risque de perte en capital. Les
              marchés peuvent être volatils, les signaux peuvent être trompeurs,
              les données peuvent être retardées ou incomplètes, et les produits
              à effet de levier peuvent amplifier les pertes. TradingView ne doit
              pas être utilisé comme une promesse de gain ni comme substitut à
              une décision réfléchie.
            </p>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur TradingView
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              TradingView est une plateforme très utile à comparer pour suivre
              les marchés, structurer une analyse, créer des alertes et garder
              une vision claire de plusieurs actifs. Elle peut compléter un
              courtier ou une application d’investissement, sans les remplacer.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre approche reste prudente : TradingView ne donne pas de
              conseil financier personnalisé via Afflizen, ne garantit aucun
              résultat et ne doit pas encourager le trading risqué. Le lien
              Afflizen est affilié, mais cela ne change pas notre lecture
              éditoriale : l’utilisateur doit vérifier les offres, prix,
              données, abonnements et risques directement sur TradingView.
            </p>

            <div className="mt-8">
              <TradingViewButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir TradingView
              </TradingViewButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ TradingView
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

            <div className="mt-8">
              <TradingViewButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir TradingView
              </TradingViewButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser TradingView
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les marchés et données disponibles.</li>
              <li>• Les limites de la version gratuite.</li>
              <li>• Les prix, abonnements et conditions officielles.</li>
              <li>• Les risques de trading, de volatilité et de perte.</li>
              <li>• Le fait que TradingView n’est pas un conseiller financier.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Pages liées</h2>

            <div className="mt-5 space-y-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-300 hover:bg-white"
                >
                  <p className="font-semibold text-slate-950">{link.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {link.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-amber-950">
              Lien affilié
            </h2>
            <p className="mt-3 text-sm leading-6 text-amber-950">
              Les CTA TradingView de cette page utilisent un lien
              d’affiliation/parrainage Afflizen. Aucun bonus, code promo ou gain
              financier n’est promis.
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation éditoriale et ne constitue pas un
            conseil financier personnalisé. TradingView est présenté comme un
            outil de visualisation et d’analyse des marchés, pas comme un
            courtier ou un conseiller financier. L’investissement et le trading
            comportent des risques de perte en capital. Les offres, abonnements,
            données, fonctionnalités, prix et conditions peuvent évoluer.
            Vérifiez toujours les informations officielles TradingView avant
            toute inscription ou décision.
          </p>
        </div>
      </section>
    </main>
  );
}
