import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import CryptoAvailabilityNotice from "../../../components/CryptoAvailabilityNotice";

const MERIA_OFFICIAL_LINK = "https://www.meria.com/";

export const metadata = createPageMetadata({
  title: "Meria avis : plateforme crypto française, staking et investissement",
  description: "Notre présentation de Meria, plateforme crypto française anciennement Just Mining : achat, vente, conservation, staking, points forts, limites et précautions avant d’investir.",
  path: "/crypto/meria",
  type: "article",
});

const strengths = [
  "Plateforme crypto française, pensée pour les utilisateurs francophones.",
  "Meria est l’ancien nom commercial de Just Mining, repositionné sur les services crypto.",
  "Services orientés achat, vente, échange, conservation et investissement crypto long terme.",
  "Positionnement intéressant pour comparer une plateforme française avec Coinbase, Kraken ou d’autres acteurs internationaux.",
  "Approche utile pour les profils qui veulent prendre le temps de comprendre les frais, la conservation et le staking.",
];

const limits = [
  "Les crypto-actifs restent volatils et exposent à un risque de perte en capital.",
  "L’agrément réglementaire ne garantit pas la performance, la sécurité absolue ni l’absence de risque.",
  "Les frais, services disponibles, actifs proposés et restrictions doivent être vérifiés directement sur Meria.",
  "Le staking ou les services de rendement crypto peuvent comporter des risques spécifiques.",
  "La conservation sur une plateforme centralisée reste différente d’un wallet personnel dont vous contrôlez les clés.",
];

const beginnerPoints = [
  "Commencer par comprendre les frais avant toute opération.",
  "Vérifier les actifs disponibles et les conditions de conservation.",
  "Éviter de chercher un rendement rapide ou garanti.",
  "Sécuriser son compte avec un mot de passe unique et une double authentification.",
];

const relatedLinks = [
  {
    href: "/crypto",
    title: "Comparatif crypto Afflizen",
    text: "Revenir à la catégorie crypto pour comparer toutes les plateformes suivies.",
  },
  {
    href: "/crypto/coinbase",
    title: "Coinbase",
    text: "Une plateforme internationale connue pour débuter simplement dans l’achat de crypto.",
  },
  {
    href: "/crypto/kraken",
    title: "Kraken",
    text: "Un exchange reconnu à comparer pour les frais, la sécurité et l’expérience utilisateur.",
  },
  {
    href: "/crypto/ledger",
    title: "Ledger",
    text: "Un wallet physique à étudier pour mieux comprendre la conservation personnelle.",
  },
  {
    href: "/crypto/waltio",
    title: "Waltio",
    text: "Un outil fiscal crypto utile pour organiser ses transactions et déclarations.",
  },
];

const faq = [
  {
    question: "Meria est-elle une plateforme crypto française ?",
    answer:
      "Oui, Meria est présentée comme une plateforme crypto française, anciennement connue sous le nom Just Mining. Elle s’adresse notamment aux utilisateurs francophones qui veulent comparer une solution française avec d’autres plateformes crypto.",
  },
  {
    question: "Meria est-elle l’ancien Just Mining ?",
    answer:
      "Oui, Meria est l’évolution de Just Mining. Le positionnement s’est déplacé vers des services crypto comme l’achat, la vente, la conservation, le staking et l’investissement en actifs numériques.",
  },
  {
    question: "Meria est-elle agréée par l’AMF ?",
    answer:
      "Oui. Meria SAS est agréée comme prestataire de services sur crypto-actifs par l’AMF sous le numéro A2026-020 depuis le 22 juin 2026. Cet agrément ne supprime ni les risques liés aux crypto-actifs ni le risque de perte en capital.",
  },
  {
    question: "Meria est-elle adaptée aux débutants ?",
    answer:
      "Meria peut intéresser un débutant francophone qui veut une plateforme française, mais il faut rester prudent : comprendre les frais, les services disponibles, la conservation, le staking et les risques avant d’investir.",
  },
  {
    question: "Le lien Meria sur Afflizen est-il affilié ?",
    answer:
      "Non. Le lien utilisé sur cette page est un lien officiel provisoire vers le site de Meria. Il n’est pas présenté comme un lien affilié, partenaire ou parrainage.",
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

export default function MeriaPage() {
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
              Plateforme crypto française
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Meria : plateforme crypto française pour acheter, conserver et
              faire travailler ses cryptos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Meria est une plateforme crypto française, anciennement Just
              Mining, orientée achat, vente, échange, conservation d’actifs
              numériques, staking et investissement crypto long terme. Elle peut
              intéresser les utilisateurs francophones qui veulent étudier une
              solution française, tout en gardant une approche prudente face aux
              risques des crypto-actifs.
            </p>

            <CryptoAvailabilityNotice
              title="Agrément CASP actuel"
              level="verification"
            >
              <p>
                Meria SAS est agréée comme prestataire de services sur
                crypto-actifs par l’Autorité des marchés financiers sous le
                numéro A2026-020 depuis le 22 juin 2026. Les services autorisés
                sont accessibles en France et en Belgique dans le cadre européen.
              </p>
              <p>
                Le staking et les produits de rendement restent soumis à leurs
                propres conditions, à la disponibilité des actifs et à des
                risques de protocole, de contrepartie et de perte en capital.
              </p>
            </CryptoAvailabilityNotice>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={MERIA_OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Accéder au site officiel de Meria
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
                Meria. Il n’est pas présenté comme un lien affilié, partenaire,
                parrainage, bonus ou offre de bienvenue.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">Meria</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une plateforme crypto française à comparer pour l’achat, la
                conservation et certains services d’investissement crypto.
              </p>

              <p>
                À utiliser avec prudence : les crypto-actifs sont volatils, les
                frais doivent être vérifiés et aucun rendement ne doit être
                considéré comme garanti.
              </p>
            </div>

            <a
              href={MERIA_OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Meria
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Plateforme crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Origine</p>
            <p className="mt-2 font-semibold text-slate-950">France</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Ancien nom</p>
            <p className="mt-2 font-semibold text-slate-950">Just Mining</p>
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
              À qui s’adresse Meria ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Meria peut intéresser les utilisateurs francophones qui veulent
              étudier une plateforme crypto française, plutôt qu’un acteur
              uniquement international. La plateforme s’adresse surtout aux
              personnes qui veulent acheter, vendre, conserver ou faire
              travailler des actifs numériques dans une logique de long terme.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Elle n’est pas pour autant une solution sans risque. Comme toute
              plateforme crypto, Meria demande de comprendre les frais, les
              actifs proposés, les règles de conservation, les conditions de
              staking et les restrictions éventuelles avant d’investir.
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
              Meria est-elle adaptée aux débutants ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Meria peut convenir à un débutant qui veut une plateforme
              française et qui accepte de prendre le temps de comprendre les
              bases : achat, vente, conservation, volatilité, fiscalité, frais
              et sécurité du compte. Le fait qu’une interface soit francophone
              ou plus proche du marché français ne remplace pas cette prudence.
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

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Notre avis sur Meria
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Meria est une plateforme intéressante à surveiller pour les
              utilisateurs francophones qui veulent comparer une solution crypto
              française. Son historique avec Just Mining, son orientation vers
              l’investissement crypto long terme et son positionnement autour de
              l’achat, de la conservation et du staking en font une fiche utile
              dans le comparatif Afflizen.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre approche reste prudente : avant d’utiliser Meria, il faut
              vérifier directement sur le site officiel les frais, les services
              disponibles, les actifs proposés, les conditions de staking, les
              restrictions éventuelles et les informations réglementaires
              actualisées.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="font-semibold text-slate-950">Verdict Afflizen</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Meria peut être pertinente pour un utilisateur qui cherche une
                plateforme crypto française, mais elle doit être comparée avec
                d’autres solutions et utilisée sans promesse de rendement ni
                précipitation.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ Meria</h2>

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
              À vérifier avant d’utiliser Meria
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les frais d’achat, de vente, d’échange et de retrait.</li>
              <li>• Les actifs numériques disponibles.</li>
              <li>• Les conditions de staking ou services associés.</li>
              <li>• Les restrictions selon le pays ou le profil utilisateur.</li>
              <li>• Les règles de conservation et de sécurité du compte.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              Pages liées
            </h2>

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
            informations officielles de Meria avant toute inscription, opération
            ou décision d’investissement.
          </p>
        </div>
      </section>
    </main>
  );
}
