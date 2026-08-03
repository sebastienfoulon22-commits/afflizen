import { createPageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import Link from "next/link";

const DEBLOCK_OFFICIAL_LINK = "https://deblock.com/fr-FR";

export const metadata = createPageMetadata({
  title: "Deblock : compte crypto, carte Visa et IBAN",
  description: "Découvrez Deblock, une application combinant compte en euros, IBAN, carte Visa et crypto. Avis Afflizen, points forts, limites, risques et lien officiel provisoire.",
  path: "/crypto/deblock",
  type: "article",
});

const strengths = [
  "Application moderne combinant compte en euros, IBAN, cartes Visa et services liés aux crypto-actifs.",
  "Positionnement hybride pour les utilisateurs qui veulent centraliser argent classique et crypto.",
  "Peut intéresser les profils qui veulent gérer euros, carte et actifs numériques dans une seule interface.",
  "Communication claire autour de la carte, de l’IBAN et de l’accès aux crypto-actifs.",
  "Solution à comparer avec les plateformes crypto, banques mobiles et wallets selon les besoins.",
];

const limits = [
  "Deblock ne doit pas être présenté comme une banque traditionnelle complète.",
  "Les crypto-actifs comportent un risque de perte en capital et peuvent fortement varier.",
  "Les fonctionnalités, frais, conditions, taux éventuels, pays éligibles et avantages peuvent évoluer.",
  "Les services liés aux crypto-actifs demandent de comprendre les risques, les transferts, la sécurité et la fiscalité.",
  "Afflizen utilise pour l’instant un lien officiel provisoire, sans code Ambassador ni parrainage exploitable.",
];

const useCases = [
  "Gérer un compte en euros et un IBAN dans une application moderne.",
  "Utiliser une carte Visa selon les conditions et l’offre disponible.",
  "Accéder à des services crypto depuis la même interface.",
  "Comparer une solution hybride avec une banque mobile ou un exchange crypto classique.",
];

const products = [
  "Compte en euros et IBAN à vérifier selon pays, éligibilité et conditions d’ouverture.",
  "Cartes Visa virtuelles ou physiques selon les fonctionnalités disponibles.",
  "Gestion, échange ou transfert de crypto-actifs selon les services proposés et les restrictions applicables.",
  "Fonctionnalités ou rémunérations éventuelles à vérifier directement sur le site officiel, sans les considérer comme garanties.",
];

const checks = [
  "Frais de compte, carte, change, retraits, crypto, transferts et services premium éventuels.",
  "Taux, rémunérations ou avantages affichés, qui peuvent changer et dépendre des conditions du moment.",
  "Pays éligibles, documents demandés, limites d’usage, sécurité du compte et support client.",
  "Fiscalité, risques crypto, conservation des actifs et responsabilités de l’utilisateur.",
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
    text: "Une plateforme connue pour acheter et gérer ses premières cryptomonnaies.",
  },
  {
    href: "/crypto/kraken",
    title: "Kraken",
    text: "Un exchange reconnu à comparer pour les frais, la sécurité et l’expérience utilisateur.",
  },
  {
    href: "/crypto/ledger",
    title: "Ledger",
    text: "Un wallet physique pour comprendre la conservation personnelle des crypto-actifs.",
  },
  {
    href: "/crypto/waltio",
    title: "Waltio",
    text: "Un assistant fiscal crypto pour organiser ses transactions et déclarations.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Comparer les solutions de cartes, paiements et comptes en ligne.",
  },
  {
    href: "/investissement",
    title: "Investissement",
    text: "Explorer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "Deblock est-il une banque classique ?",
    answer:
      "Non. Deblock doit plutôt être présenté comme une application hybride combinant compte en euros, IBAN, carte et services liés aux crypto-actifs. Il ne faut pas le présenter comme une banque traditionnelle complète.",
  },
  {
    question: "Deblock propose-t-il un IBAN ?",
    answer:
      "Deblock met en avant un compte en euros avec IBAN. Les conditions d’éligibilité, les limites, les pays disponibles et les documents demandés doivent être vérifiés directement sur le site officiel.",
  },
  {
    question: "Peut-on utiliser Deblock avec une carte ?",
    answer:
      "Oui, Deblock met en avant des cartes Visa. Les caractéristiques, frais, plafonds, conditions et fonctionnalités disponibles peuvent évoluer et doivent être vérifiés avant inscription.",
  },
  {
    question: "Deblock permet-il de gérer des crypto-actifs ?",
    answer:
      "Oui, Deblock propose des services liés aux crypto-actifs. Ces actifs sont risqués, peuvent perdre de la valeur et nécessitent de comprendre les frais, la sécurité, les transferts et la fiscalité.",
  },
  {
    question: "Quels sont les risques à connaître ?",
    answer:
      "Les principaux risques concernent la perte en capital, la volatilité des crypto-actifs, les frais, la fiscalité, la sécurité du compte, les erreurs de transfert et l’évolution des conditions du service.",
  },
  {
    question: "Existe-t-il un lien de parrainage Deblock sur Afflizen ?",
    answer:
      "Deblock dispose d’un programme Ambassador, mais Afflizen n’utilise pas encore de code ou lien Ambassador Deblock. Le bouton renvoie donc pour l’instant vers le site officiel.",
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

function DeblockOfficialButton({
  location,
  className,
  children,
}: {
  location: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={DEBLOCK_OFFICIAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-platform="Deblock"
      data-category="crypto"
      data-location={location}
      data-link-url={DEBLOCK_OFFICIAL_LINK}
      className={className}
    >
      {children}
    </a>
  );
}

export default function DeblockPage() {
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
              Crypto
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Deblock : compte crypto, carte Visa et IBAN dans une seule
              application
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Une application moderne pour gérer euros, carte et crypto, avec
              une approche à analyser prudemment avant de s’inscrire. Deblock
              peut intéresser les utilisateurs qui cherchent une solution hybride
              entre argent classique, IBAN, carte Visa et services liés aux
              crypto-actifs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <DeblockOfficialButton
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Voir Deblock
              </DeblockOfficialButton>

              <a
                href="#avis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Lire l’avis Afflizen
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-950">
                Lien officiel provisoire, sans partenariat Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Le bouton renvoie vers le site officiel Deblock. Il n’est pas
                présenté comme un partenariat, un parrainage, une offre Afflizen,
                un code promo, une prime, un cashback ou un avantage garanti.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-semibold text-emerald-300">
              Résumé Afflizen
            </p>

            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Deblock
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                Une application hybride qui réunit compte en euros, IBAN, cartes
                Visa et services crypto dans une même interface.
              </p>

              <p>
                À utiliser avec prudence : les crypto-actifs comportent des
                risques, et les frais, taux éventuels et conditions doivent être
                vérifiés directement.
              </p>
            </div>

            <DeblockOfficialButton
              location="sidebar"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Site officiel Deblock
            </DeblockOfficialButton>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Compte + crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Usage</p>
            <p className="mt-2 font-semibold text-slate-950">
              Euros et crypto
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Carte</p>
            <p className="mt-2 font-semibold text-slate-950">Visa</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Afflizen</p>
            <p className="mt-2 font-semibold text-slate-950">
              Aucun code pour le moment
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Présentation rapide de Deblock
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Deblock est une application qui mélange compte en euros, IBAN,
              cartes Visa et services liés aux crypto-actifs. Elle se positionne
              comme une solution moderne pour les utilisateurs qui veulent gérer
              leur argent classique et leurs actifs numériques dans un même
              environnement.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Cette promesse doit être analysée avec prudence. Deblock ne doit
              pas être présenté comme une banque traditionnelle complète, et les
              services crypto nécessitent de comprendre les risques, les frais,
              la fiscalité, la sécurité et les conditions d’utilisation.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              À qui s’adresse Deblock ?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Deblock peut intéresser les utilisateurs qui veulent centraliser
              euros, carte et crypto sans multiplier les applications. La
              solution parle surtout aux profils déjà sensibles aux actifs
              numériques, ou aux personnes qui veulent tester une approche plus
              moderne que la banque mobile classique.
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

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Limites et risques à connaître
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
              Compte, IBAN, carte et crypto : ce qu’il faut comprendre
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              L’intérêt de Deblock vient de son approche combinée : compte en
              euros, IBAN, cartes Visa et services crypto. Cette combinaison peut
              être pratique, mais elle oblige à bien distinguer l’argent en euros
              des actifs numériques, dont la valeur peut varier fortement.
            </p>

            <div className="mt-6 grid gap-4">
              {products.map((item) => (
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
                Risque crypto
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-950">
                Les crypto-actifs comportent un risque de perte en capital.
                Avant toute utilisation, il faut comprendre le fonctionnement
                des actifs, les transferts, les frais, la sécurité du compte et
                les conséquences fiscales possibles.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">
              Frais, taux et conditions : à vérifier sur le site officiel
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Deblock peut mettre en avant certaines fonctionnalités,
              rémunérations ou avantages selon les conditions du moment. Ces
              éléments peuvent changer et doivent être vérifiés directement sur
              le site officiel. Afflizen ne les présente pas comme des promesses
              ni comme des garanties.
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

          <section className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">
              Deblock est-il adapté aux utilisateurs francophones ?
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Deblock propose une page en français et peut intéresser les
              utilisateurs francophones qui cherchent une solution moderne pour
              gérer euros, carte et crypto. Il faut toutefois vérifier les pays
              éligibles, les services disponibles, les frais, les conditions et
              les risques directement sur le site officiel.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-emerald-300">
                Prudence Afflizen
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Ne choisissez pas Deblock uniquement parce que l’application
                réunit plusieurs usages. Comparez avec une banque mobile, un
                exchange crypto, un wallet personnel et vos besoins réels.
              </p>
            </div>
          </section>

          <section
            id="avis"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-3xl font-bold text-slate-950">
              Avis Afflizen sur Deblock
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Deblock est une fiche intéressante pour Afflizen parce qu’elle se
              situe entre deux univers : le compte du quotidien et la crypto.
              L’application peut être pertinente pour un utilisateur déjà à
              l’aise avec les actifs numériques, ou pour quelqu’un qui veut
              comparer une solution plus moderne qu’un compte classique.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Notre avis reste très prudent : le mélange euros, carte, IBAN et
              crypto peut être pratique, mais il augmente aussi le nombre de
              points à vérifier. Frais, sécurité, fiscalité, conditions, taux
              éventuels, pays éligibles et risques crypto doivent être compris
              avant toute inscription.
            </p>

            <div className="mt-8">
              <DeblockOfficialButton
                location="avis"
                className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir Deblock
              </DeblockOfficialButton>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-950">FAQ Deblock</h2>

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
              <DeblockOfficialButton
                location="faq"
                className="inline-flex rounded-full bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                Voir Deblock
              </DeblockOfficialButton>
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              À vérifier avant d’utiliser Deblock
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>• Les frais de compte, carte, crypto et transferts.</li>
              <li>• Les conditions liées à l’IBAN et aux cartes Visa.</li>
              <li>• Les pays éligibles et documents demandés.</li>
              <li>• Les risques des crypto-actifs et de la volatilité.</li>
              <li>• Les conditions des taux ou avantages éventuellement affichés.</li>
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
            conseil financier, fiscal ou juridique personnalisé. Les
            crypto-actifs sont volatils et comportent un risque de perte en
            capital. Les frais, taux, fonctionnalités, pays éligibles,
            conditions et risques peuvent évoluer. Vérifiez toujours les
            informations officielles Deblock avant toute inscription, opération
            ou décision d’utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}
