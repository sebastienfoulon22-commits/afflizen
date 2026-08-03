import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const BITPANDA_OFFICIAL_LINK = "https://www.bitpanda.com/fr";

export const metadata = createPageMetadata({
  title: "Bitpanda avis : broker crypto européen pour investir simplement",
  description: "Notre présentation de Bitpanda, broker européen pour investir dans les cryptos, actions, ETF, indices et métaux précieux : points forts, limites, frais et précautions.",
  path: "/crypto/bitpanda",
  type: "article",
});

const strengths = [
  "Broker européen connu dans l’univers crypto, avec une page officielle en français.",
  "Plateforme multi-actifs donnant accès aux cryptos, actions, ETF, indices crypto et métaux précieux selon disponibilité.",
  "Interface simple à prendre en main pour les utilisateurs francophones qui veulent comparer une solution européenne.",
  "Positionnement intéressant pour débuter prudemment, tout en gardant accès à plusieurs classes d’actifs.",
  "Disponible dans plusieurs pays européens, dont la Belgique selon la liste de pays supportés par Bitpanda.",
];

const limits = [
  "Les services disponibles peuvent varier selon le pays de résidence, le profil utilisateur et les conditions de la plateforme.",
  "Les crypto-actifs sont volatils et exposent à un risque de perte en capital.",
  "Les actions, ETF, indices, métaux précieux et autres produits peuvent avoir des conditions spécifiques.",
  "Les frais, spreads, restrictions géographiques, fiscalité et risques doivent être vérifiés directement sur le site officiel.",
  "Une interface simple ne rend pas l’investissement sans risque ni adapté à tous les profils.",
];

const beginnerPoints = [
  "Commencer par comprendre les frais, spreads et conditions applicables avant tout dépôt.",
  "Vérifier les produits réellement disponibles dans son pays de résidence.",
  "Éviter de multiplier les actifs si les risques, la fiscalité ou les frais ne sont pas compris.",
  "Ne jamais supposer qu’un produit est sans risque parce que l’interface paraît simple.",
];

const products = [
  "Cryptomonnaies disponibles selon pays, conditions et profil utilisateur.",
  "Actions et ETF sous forme de produits proposés par la plateforme selon disponibilité.",
  "Indices crypto et autres solutions d’exposition à vérifier dans les conditions officielles.",
  "Métaux précieux et actifs diversifiés avec frais, spreads et règles spécifiques.",
];

const relatedLinks = [
  {
    href: "/crypto",
    title: "Comparatif crypto Afflizen",
    text: "Revenir à la catégorie crypto pour comparer les plateformes suivies.",
  },
  {
    href: "/crypto/coinbase",
    title: "Coinbase",
    text: "Une plateforme crypto connue pour une expérience simple côté achat et conservation.",
  },
  {
    href: "/crypto/kraken",
    title: "Kraken",
    text: "Un exchange crypto reconnu à comparer pour les frais, la sécurité et les services.",
  },
  {
    href: "/crypto/kucoin",
    title: "KuCoin",
    text: "Un exchange international plus orienté trading, altcoins et produits avancés.",
  },
  {
    href: "/crypto/meria",
    title: "Meria",
    text: "Une plateforme crypto française à comparer pour les utilisateurs francophones.",
  },
  {
    href: "/crypto/ledger",
    title: "Ledger",
    text: "Un wallet physique utile pour comprendre la conservation personnelle des crypto-actifs.",
  },
  {
    href: "/investissement",
    title: "Comparatif investissement Afflizen",
    text: "Comparer aussi les plateformes d’investissement suivies par Afflizen.",
  },
  {
    href: "/investissement/etoro",
    title: "eToro",
    text: "Une plateforme d’investissement avec actions, ETF, crypto et copy trading.",
  },
  {
    href: "/investissement/robinhood",
    title: "Robinhood",
    text: "Une application d’investissement à surveiller pour actions tokenisées et crypto.",
  },
];

const faq = [
  {
    question: "Bitpanda est-il un broker crypto européen ?",
    answer:
      "Oui, Bitpanda est présenté comme un broker européen connu dans l’univers crypto. La plateforme propose une page officielle en français et des services multi-actifs selon disponibilité.",
  },
  {
    question: "Bitpanda est-il disponible en Belgique ?",
    answer:
      "Bitpanda indique être disponible dans plusieurs pays européens, dont la Belgique selon sa liste de pays supportés. Les services accessibles peuvent toutefois varier selon le pays, le profil et les conditions applicables.",
  },
  {
    question: "Quels actifs peut-on trouver sur Bitpanda ?",
    answer:
      "Bitpanda peut donner accès aux cryptos, actions, ETF, indices crypto, métaux précieux et autres produits selon disponibilité. Il faut vérifier les conditions officielles, les frais, les spreads et les risques avant d’investir.",
  },
  {
    question: "Bitpanda est-il adapté aux débutants ?",
    answer:
      "Bitpanda peut convenir à des débutants prudents grâce à une interface simple, mais l’investissement reste risqué. Les crypto-actifs sont volatils et les produits proposés peuvent avoir des conditions spécifiques.",
  },
  {
    question: "Le lien Bitpanda sur Afflizen est-il affilié ?",
    answer:
      "Non. Le lien utilisé sur cette page est un lien officiel français vers Bitpanda. Il n’est pas présenté comme un lien affilié, partenaire ou sponsorisé.",
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

export default function BitpandaPage() {
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
              Broker crypto européen
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Bitpanda : un broker européen pour investir dans les cryptos et
              d’autres actifs
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Bitpanda est un broker européen connu dans l’univers crypto. La
              plateforme permet d’accéder à différents actifs selon
              disponibilité : cryptomonnaies, actions, ETF, indices crypto et
              métaux précieux. Elle peut intéresser les utilisateurs
              francophones qui veulent une interface simple, tout en gardant une
              approche prudente face aux frais, aux spreads, à la fiscalité et
              au risque de perte en capital.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={BITPANDA_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Accéder au site officiel de Bitpanda
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
                Lien officiel français, sans affiliation pour le moment
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le lien utilisé sur cette page renvoie vers le site officiel
                français de Bitpanda. Il n’est pas présenté comme un lien
                affilié, partenaire, sponsorisé, parrainage, bonus ou offre de
                bienvenue.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Bitpanda
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Un broker européen multi-actifs à comparer pour les cryptos,
                actions, ETF, indices crypto et métaux précieux selon
                disponibilité.
              </p>

              <p>
                À utiliser avec prudence : la simplicité de l’interface ne
                supprime ni la volatilité, ni les frais, ni le risque de perte en
                capital.
              </p>
            </div>

            <a
              href={BITPANDA_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Bitpanda
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Broker crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Zone</p>
            <p className="mt-2 font-semibold text-slate-950">
              Europe
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Univers</p>
            <p className="mt-2 font-semibold text-slate-950">
              Multi-actifs
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
              À qui s’adresse Bitpanda ?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Bitpanda peut intéresser les utilisateurs francophones qui veulent
              une plateforme européenne avec une interface simple et une offre
              multi-actifs. La plateforme peut convenir à des débutants
              prudents, mais aussi à des investisseurs plus autonomes qui veulent
              comparer cryptos, actions, ETF, indices et métaux précieux depuis
              un même environnement.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Le bon réflexe reste de vérifier les produits disponibles dans son
              pays, les frais, les spreads, les restrictions, la fiscalité et les
              risques directement sur le site officiel avant toute décision.
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
              Bitpanda est-il adapté aux débutants ?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Bitpanda peut être adapté à des débutants prudents qui veulent une
              interface claire et une page officielle en français. Cela ne rend
              pas les produits sans risque : les crypto-actifs sont volatils, les
              actifs financiers peuvent baisser, et chaque produit peut avoir ses
              propres frais, conditions ou règles fiscales.
            </p>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {beginnerPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Cryptos, actions, ETF, indices et métaux précieux
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Le positionnement de Bitpanda dépasse l’achat simple de crypto :
              la plateforme met en avant plusieurs familles d’actifs selon
              disponibilité. Cette diversité peut être pratique, mais elle
              demande aussi de comprendre la nature exacte des produits, les
              frais, les spreads, les risques de marché et les règles propres à
              chaque pays.
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
              Notre avis sur Bitpanda
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Bitpanda est une plateforme intéressante à comparer pour un public
              francophone qui recherche un broker européen, une interface simple
              et une offre multi-actifs. Sa page française et sa présence dans
              plusieurs pays européens peuvent rassurer certains utilisateurs,
              mais cela ne dispense pas de lire les conditions officielles.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Notre lecture reste prudente : Bitpanda peut être une option à
              étudier, pas une recommandation personnalisée. Les frais, spreads,
              restrictions, conditions, risques et conséquences fiscales doivent
              être vérifiés avant toute inscription ou opération.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              FAQ Bitpanda
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
              À vérifier avant d’utiliser Bitpanda
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Produits disponibles selon votre pays de résidence.</li>
              <li>• Frais, spreads, conditions, fiscalité et restrictions.</li>
              <li>• Nature exacte des produits actions, ETF, indices et métaux.</li>
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
            conseil financier personnalisé. Les crypto-actifs sont volatils et
            les investissements de marché comportent un risque de perte en
            capital. Les frais, spreads, conditions, fiscalité, restrictions
            géographiques et risques doivent être vérifiés directement sur le
            site officiel de Bitpanda avant toute décision.
          </p>
        </div>
      </section>
    </main>
  );
}
