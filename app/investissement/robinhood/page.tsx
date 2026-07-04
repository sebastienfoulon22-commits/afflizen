import type { Metadata } from "next";
import Link from "next/link";

const ROBINHOOD_OFFICIAL_LINK = "https://robinhood.com/eu/fr/";

export const metadata: Metadata = {
  title: "Robinhood avis : application d’investissement, actions tokenisées et crypto",
  description:
    "Notre présentation de Robinhood en Europe : application d’investissement avec actions tokenisées, crypto, produits dérivés, points forts, limites, frais, disponibilité et précautions.",
  alternates: {
    canonical: "https://afflizen.com/investissement/robinhood",
  },
  openGraph: {
    title:
      "Robinhood avis : application d’investissement, actions tokenisées et crypto",
    description:
      "Notre présentation de Robinhood en Europe : application d’investissement avec actions tokenisées, crypto, produits dérivés, points forts, limites, frais, disponibilité et précautions.",
    url: "https://afflizen.com/investissement/robinhood",
    siteName: "Afflizen",
    locale: "fr_FR",
    type: "article",
  },
};

const strengths = [
  "Application d’investissement connue à l’international avec une expérience moderne.",
  "Mise en avant en Europe des actions tokenisées et des cryptomonnaies selon disponibilité.",
  "Interface pensée pour un accès simple aux marchés et aux produits numériques.",
  "Peut intéresser les utilisateurs francophones qui veulent comparer Robinhood avec d’autres plateformes d’investissement.",
  "Approche utile pour découvrir une offre mêlant investissement, crypto et produits plus avancés.",
];

const limits = [
  "Les services disponibles peuvent varier selon le pays de résidence.",
  "Les actions tokenisées ne sont pas des actions détenues directement : ce sont des produits dérivés liés à des actions ou ETP sous-jacents.",
  "Les produits dérivés, actions tokenisées, produits à effet de levier, contrats perpétuels ou futures sont complexes et ne conviennent pas à tous les profils.",
  "Les crypto-actifs sont volatils et peuvent entraîner une perte en capital.",
  "Les frais, conditions, restrictions géographiques, fiscalité et risques doivent être vérifiés directement sur le site officiel.",
];

const beginnerPoints = [
  "Commencer par comprendre la différence entre action classique, action tokenisée, crypto-actif et produit dérivé.",
  "Vérifier si les services Robinhood sont disponibles dans son pays de résidence.",
  "Lire les frais, conditions, restrictions et documents de risque avant toute inscription.",
  "Éviter les produits complexes ou à effet de levier si leur fonctionnement n’est pas parfaitement compris.",
];

const products = [
  "Actions tokenisées liées à des actions ou ETP sous-jacents selon disponibilité.",
  "Cryptomonnaies et services crypto mis en avant dans l’offre européenne.",
  "Produits avancés ou dérivés selon pays, conditions et profil utilisateur.",
  "Frais, fiscalité, restrictions géographiques et risques à vérifier sur le site officiel.",
];

const relatedLinks = [
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Revenir à la catégorie investissement pour comparer les plateformes suivies.",
  },
  {
    href: "/investissement/interactive-brokers",
    title: "Interactive Brokers",
    text: "Un courtier international complet pour les investisseurs autonomes.",
  },
  {
    href: "/investissement/etoro",
    title: "eToro",
    text: "Une plateforme d’investissement avec actions, ETF, crypto et copy trading.",
  },
  {
    href: "/investissement/degiro",
    title: "DEGIRO",
    text: "Un courtier en ligne orienté actions, ETF et marchés financiers.",
  },
  {
    href: "/crypto",
    title: "Comparatif crypto Afflizen",
    text: "Comparer les plateformes crypto suivies par Afflizen.",
  },
  {
    href: "/crypto/coinbase",
    title: "Coinbase",
    text: "Une plateforme crypto connue pour acheter, vendre et conserver des crypto-actifs.",
  },
  {
    href: "/crypto/ledger",
    title: "Ledger",
    text: "Une solution à connaître pour la conservation personnelle de crypto-actifs.",
  },
];

const faq = [
  {
    question: "Robinhood est-il disponible en Europe ?",
    answer:
      "Robinhood met en avant une offre européenne, mais les services disponibles peuvent varier selon les pays. Il faut vérifier directement sur le site officiel si l’inscription et les produits proposés sont disponibles pour son pays de résidence.",
  },
  {
    question: "Les actions tokenisées Robinhood sont-elles de vraies actions ?",
    answer:
      "Non, les actions tokenisées ne sont pas des actions détenues directement. Ce sont des produits dérivés liés à des actions ou ETP sous-jacents, avec des risques spécifiques à lire attentivement avant toute utilisation.",
  },
  {
    question: "Robinhood convient-il aux débutants ?",
    answer:
      "Robinhood peut sembler simple d’accès, mais certains produits comme les actions tokenisées, la crypto, les produits dérivés, les futures ou les contrats perpétuels sont complexes. Un débutant doit rester prudent et éviter ce qu’il ne comprend pas.",
  },
  {
    question: "Peut-on acheter des cryptos avec Robinhood ?",
    answer:
      "Robinhood met en avant des services crypto en Europe selon disponibilité. Les crypto-actifs restent volatils et peuvent entraîner une perte en capital.",
  },
  {
    question: "Le lien Robinhood sur Afflizen est-il affilié ?",
    answer:
      "Non. Le lien utilisé sur cette page est un lien officiel provisoire vers Robinhood. Il n’est pas présenté comme un lien affilié, partenaire ou sponsorisé.",
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

export default function RobinhoodPage() {
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
              Application d’investissement
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Robinhood : une application d’investissement moderne avec actions
              tokenisées et crypto
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Robinhood est une application d’investissement et de trading connue
              à l’international. En Europe, la plateforme met notamment en avant
              les actions tokenisées, les cryptomonnaies et certains produits
              avancés selon disponibilité. Sur Afflizen, nous la présentons avec
              prudence : les services, frais, restrictions et risques doivent
              toujours être vérifiés directement sur le site officiel.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={ROBINHOOD_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Accéder au site officiel de Robinhood
              </a>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Lien officiel provisoire, sans affiliation pour le moment
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le lien utilisé sur cette page renvoie vers le site officiel de
                Robinhood. Il n’est pas présenté comme un lien affilié,
                partenaire, sponsorisé, parrainage, bonus ou offre de bienvenue.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Robinhood
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une application d’investissement moderne, connue à
                l’international, avec une offre européenne à vérifier selon le
                pays de résidence.
              </p>

              <p>
                À utiliser avec prudence : les actions tokenisées, la crypto et
                les produits dérivés comportent des risques importants et ne
                conviennent pas à tous les profils.
              </p>
            </div>

            <a
              href={ROBINHOOD_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Robinhood
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Application d’investissement
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Produits</p>
            <p className="mt-2 font-semibold text-slate-950">
              Tokenisé, crypto, dérivés
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Disponibilité</p>
            <p className="mt-2 font-semibold text-slate-950">
              Selon pays
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Affiliation</p>
            <p className="mt-2 font-semibold text-slate-950">
              Aucune pour le moment
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse Robinhood ?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Robinhood peut intéresser les utilisateurs francophones qui veulent
              découvrir une application d’investissement moderne, comparer une
              offre internationale avec les courtiers disponibles en Europe, ou
              explorer des produits comme les actions tokenisées et les
              crypto-actifs. La plateforme n’est toutefois pas à considérer comme une
              solution universelle : l’utilisateur doit vérifier la disponibilité
              dans son pays, les conditions d’accès, les risques et les frais.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">
                Points forts
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-emerald-950">
                {strengths.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Limites et points de vigilance
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {limits.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Robinhood est-il adapté aux débutants ?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Robinhood peut donner une impression de simplicité, mais les
              produits disponibles ne sont pas toujours simples. Les actions
              tokenisées, la crypto, les produits dérivés, les produits à effet
              de levier, les contrats perpétuels ou les futures demandent une
              vraie compréhension des risques. Un débutant devrait avancer
              lentement et ne pas utiliser un produit qu’il ne comprend pas.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {beginnerPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Actions tokenisées, crypto et produits disponibles
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              En Europe, Robinhood met en avant les actions tokenisées et les
              cryptomonnaies. Les actions tokenisées ne sont pas des actions
              détenues directement : ce sont des produits dérivés liés à des
              actions ou ETP sous-jacents. Elles peuvent comporter un risque
              élevé et ne conviennent pas à tous les investisseurs.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {products.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Robinhood
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Robinhood est une plateforme intéressante à surveiller pour les
              utilisateurs européens qui veulent comparer les nouvelles
              applications d’investissement, les actions tokenisées et les offres
              crypto. Son positionnement est moderne, mais il impose une lecture
              attentive des risques : produits dérivés, volatilité, restrictions
              pays, fiscalité et frais peuvent changer l’expérience réelle.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Notre approche reste prudente : Robinhood peut être une piste de
              comparaison, pas une recommandation personnalisée. Avant toute
              inscription, vérifiez directement les conditions officielles, la
              disponibilité dans votre pays et l’adéquation des produits avec
              votre profil.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ Robinhood
            </h2>

            <div className="mt-6 space-y-5">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0"
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
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Robinhood
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Disponibilité réelle selon votre pays de résidence.</li>
              <li>• Frais, conditions, fiscalité et restrictions.</li>
              <li>• Nature exacte des actions tokenisées et produits dérivés.</li>
              <li>• Risque de perte en capital sur les marchés et crypto-actifs.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">Pages liées</h2>

            <div className="mt-5 space-y-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <span className="font-semibold text-slate-950">
                    {link.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    {link.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation générale et ne constitue pas un
            conseil financier personnalisé. Les actions tokenisées, produits
            dérivés, produits à effet de levier, contrats perpétuels, futures,
            crypto-actifs et investissements de marché comportent des risques,
            dont un risque de perte en capital. Vérifiez toujours les
            informations officielles, les frais, la fiscalité, les restrictions
            et l’adéquation des produits avec votre profil avant toute décision.
          </p>
        </div>
      </section>
    </main>
  );
}
