import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import CryptoAvailabilityNotice, {
  SuspendedRegistrationMessage,
} from "@/components/CryptoAvailabilityNotice";

export const metadata = createPageMetadata({
  title: "KuCoin en Belgique et en France : disponibilité en 2026",
  description: "Informations sur KuCoin EU en 2026 : licence MiCA, interdiction de commencer les opérations, retraits et précautions.",
  path: "/crypto/kucoin",
  type: "article",
});

const strengths = [
  "Exchange crypto international avec de nombreux actifs numériques selon disponibilité.",
  "Plateforme complète pour le spot, le trading, les futures, la marge, Earn, staking, lending et bots selon les profils.",
  "Intéressante pour comparer les altcoins et les outils avancés avec Binance, Bitget, Bybit ou HTX.",
  "Historique utile pour comprendre l’offre de la plateforme avant l’interdiction de démarrer KuCoin EU.",
  "Fiche maintenue pour documenter la situation réglementaire de KuCoin EU.",
];

const limits = [
  "Plateforme potentiellement moins simple qu’une application débutant très grand public.",
  "Les futures, la marge, le lending, les bots et certains produits Earn sont plus risqués que l’achat simple de crypto.",
  "Les frais, restrictions géographiques, obligations KYC et services disponibles doivent être vérifiés sur KuCoin.",
  "La FMA interdit encore à KuCoin EU de commencer ses opérations malgré la licence accordée.",
  "Les crypto-actifs sont volatils et exposent à un risque de perte en capital.",
];

const beginnerPoints = [
  "Ne pas ouvrir de nouveau compte tant que les opérations de KuCoin EU restent interdites.",
  "Vérifier les frais, les retraits et les conditions KYC avant tout dépôt.",
  "Éviter futures, marge, bots ou lending si leur fonctionnement n’est pas maîtrisé.",
  "Ne jamais investir un montant que l’on ne peut pas se permettre de perdre.",
];

const advancedProducts = [
  "Trading spot pour acheter, vendre ou échanger des crypto-actifs.",
  "Futures et marge, réservés aux profils qui comprennent le levier et les liquidations.",
  "Earn, staking ou lending selon disponibilité, avec des risques et conditions spécifiques.",
  "Trading bot et outils automatisés à utiliser uniquement avec une bonne compréhension des paramètres.",
];

const relatedLinks = [
  {
    href: "/crypto",
    title: "Comparatif crypto Afflizen",
    text: "Revenir à la catégorie crypto pour comparer les plateformes suivies.",
  },
  {
    href: "/crypto/binance",
    title: "Binance",
    text: "Une plateforme crypto très complète à comparer avec KuCoin.",
  },
  {
    href: "/crypto/bitget",
    title: "Bitget",
    text: "Un exchange orienté trading, copy trading et fonctionnalités avancées.",
  },
  {
    href: "/crypto/bybit",
    title: "Bybit",
    text: "Une plateforme européenne distincte, à consulter sans lien affilié.",
  },
  {
    href: "/crypto/htx",
    title: "HTX",
    text: "Un exchange crypto avancé à étudier avec prudence.",
  },
  {
    href: "/crypto/ledger",
    title: "Ledger",
    text: "Un wallet physique utile pour comprendre la conservation personnelle.",
  },
  {
    href: "/crypto/waltio",
    title: "Waltio",
    text: "Un assistant fiscal crypto pour organiser ses transactions.",
  },
];

const faq = [
  {
    question: "KuCoin est-il un exchange crypto international ?",
    answer:
      "Oui, KuCoin est présenté comme un exchange crypto international avec de nombreux actifs numériques et plusieurs services de trading selon disponibilité, pays et profil utilisateur.",
  },
  {
    question: "KuCoin est-il adapté aux débutants ?",
    answer:
      "Cette question ne se pose pas actuellement pour une nouvelle utilisation européenne : KuCoin EU n’est pas autorisée à commencer ses opérations et ses services ne sont pas rétablis.",
  },
  {
    question: "Quels sont les risques avec KuCoin ?",
    answer:
      "Les principaux risques sont la volatilité des crypto-actifs, la perte en capital, les frais, les produits complexes mal compris, les restrictions selon le pays, la marge, les futures, le lending ou les bots.",
  },
  {
    question: "Le lien KuCoin sur Afflizen est-il un lien de parrainage ?",
    answer:
      "L’ancien lien était affilié. Il est désormais suspendu et aucun parcours d’inscription KuCoin n’est proposé depuis cette fiche.",
  },
  {
    question: "KuCoin propose-t-il du staking ou des produits Earn ?",
    answer:
      "KuCoin présente habituellement ces services, mais ils ne sont pas proposés comme accessibles via KuCoin EU tant que le début des opérations reste interdit.",
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

export default function KucoinPage() {
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
              href="/crypto"
              className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Voir la catégorie crypto
            </Link>

            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Exchange crypto international
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              KuCoin : une plateforme crypto complète pour trader, investir et
              explorer les altcoins
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              KuCoin est une plateforme crypto internationale qui donne accès à
              de nombreux actifs numériques et à plusieurs services selon les
              pays : achat, vente, trading spot, futures, marge, Earn, staking,
              lending et trading bot. Cette richesse peut être intéressante pour
              explorer l’univers crypto, mais elle demande une vraie prudence,
              surtout avec les produits complexes.
            </p>

            <CryptoAvailabilityNotice
              title="Les opérations de KuCoin EU ne sont pas autorisées à commencer"
              level="unavailable"
            >
              <p>
                La FMA autrichienne indique qu’une licence MiCA a été accordée à
                KuCoin EU Exchange GmbH le 27 novembre 2025, mais que le début de
                ses activités reste interdit. Une licence accordée ne signifie
                donc pas que les services sont ouverts.
              </p>
              <p>
                KuCoin précise que les services européens n’ont pas repris et
                maintient seulement les retraits pour les comptes concernés.
                Afflizen suspend tous ses liens d’inscription vers KuCoin.
              </p>
            </CryptoAvailabilityNotice>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <SuspendedRegistrationMessage />

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Inscription suspendue
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Aucun lien affilié ou parcours de nouvelle inscription n’est
                proposé sur cette fiche tant que KuCoin EU n’est pas autorisée à
                commencer ses opérations.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">KuCoin</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Un exchange crypto international, plutôt complet, avec de
                nombreux actifs et outils avancés selon disponibilité.
              </p>

              <p>
                À utiliser avec prudence : les produits comme futures, marge,
                bots, lending ou Earn ne conviennent pas à tous les profils.
              </p>
            </div>

            <SuspendedRegistrationMessage className="mt-6" />
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Exchange crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Profil</p>
            <p className="mt-2 font-semibold text-slate-950">
              Intermédiaire à avancé
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Univers</p>
            <p className="mt-2 font-semibold text-slate-950">
              Trading et altcoins
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Lien</p>
            <p className="mt-2 font-semibold text-slate-950">
              Inscription suspendue
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse KuCoin ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Avant la suspension des services européens, KuCoin s’adressait
              surtout aux utilisateurs souhaitant explorer de nombreux actifs et
              des outils avancés. Cette description est conservée pour présenter
              l’offre historique, pas pour encourager une nouvelle inscription.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              KuCoin EU n’est actuellement pas autorisée à commencer ses
              opérations. Les résidents belges et français ne doivent pas déduire
              de l’accessibilité d’un domaine que les services sont ouverts.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-emerald-950">
                Points forts
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

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Limites et points de vigilance
              </h2>

              <ul className="mt-5 space-y-3">
                {limits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              KuCoin est-il adapté aux débutants ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Cette question ne se pose pas actuellement pour une nouvelle
              utilisation européenne : KuCoin EU n’est pas autorisée à commencer
              ses opérations et ses services ne sont pas rétablis.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {beginnerPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Trading, staking et produits avancés
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              KuCoin présente habituellement plusieurs services crypto au-delà
              de l’achat simple. Ils sont listés ici à titre informatif, mais ne
              doivent pas être considérés comme accessibles via KuCoin EU tant
              que le début des opérations reste interdit.
            </p>

            <div className="mt-6 grid gap-4">
              {advancedProducts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-xl font-bold text-amber-950">
                Point de prudence
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-950">
                Les produits avancés peuvent entraîner des pertes rapides,
                notamment avec l’effet de levier, les liquidations, le lending ou
                une stratégie de bot mal paramétrée. Ils ne doivent jamais être
                utilisés sans compréhension claire du risque.
              </p>
            </div>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur KuCoin
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              KuCoin est un exchange historiquement orienté trading et altcoins.
              Notre avis actuel porte d’abord sur KuCoin EU : la licence accordée
              ne permet pas encore à l’entité de commencer ses opérations.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Afflizen suspend donc toute recommandation de nouvelle inscription
              depuis la Belgique ou la France. Les comptes concernés par la
              suspension doivent se limiter aux modalités officielles de retrait.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="font-semibold text-slate-950">Verdict Afflizen</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Aucun lien affilié KuCoin n’est actif. Une nouvelle inscription
                n’est pas recommandée tant que la FMA interdit le commencement
                des opérations de KuCoin EU.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ KuCoin</h2>

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
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier concernant KuCoin EU
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• L’autorisation effective de commencer les opérations.</li>
              <li>• Les obligations KYC et restrictions géographiques.</li>
              <li>• Les frais de trading, dépôt, retrait et conversion.</li>
              <li>• Les risques des futures, de la marge, du lending et des bots.</li>
              <li>• Les modalités officielles de retrait pour les comptes concernés.</li>
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
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation éditoriale et ne constitue pas un
            conseil financier personnalisé. Les crypto-actifs sont volatils et
            comportent un risque de perte en capital. Vérifiez toujours les
            informations officielles de KuCoin EU et de la FMA avant toute
            démarche ou décision d’investissement.
          </p>
        </div>
      </section>
    </main>
  );
}
