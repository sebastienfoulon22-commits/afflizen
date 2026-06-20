import type { Metadata } from "next";

const DEGIRO_OFFICIAL_URL = "https://www.degiro.fr/";

export const metadata: Metadata = {
  title: "DEGIRO avis : frais, avantages et inconvénients | Afflizen",
  description:
    "Notre avis sur DEGIRO : frais, avantages, inconvénients, sécurité, fonctionnement et profil d’investisseur adapté.",
  alternates: {
    canonical: "https://afflizen.com/investissement/degiro",
  },
};

const avantages = [
  "Courtier en ligne reconnu en Europe",
  "Accès à de nombreuses actions, ETF, obligations et autres produits financiers",
  "Tarifs généralement compétitifs par rapport aux banques traditionnelles",
  "Pas de frais d’inactivité annoncés sur la grille tarifaire DEGIRO",
  "Plateforme adaptée aux investisseurs autonomes",
  "Compte accessible depuis ordinateur et application mobile",
];

const inconvenients = [
  "Interface moins accompagnante qu’une application très simplifiée pour débutants",
  "Les frais peuvent varier selon le produit, la place boursière, la devise et le pays",
  "Pas de conseil personnalisé en investissement",
  "Certains produits financiers peuvent être complexes ou risqués",
  "Pas de lien de parrainage Afflizen disponible pour le moment",
];

const faq = [
  {
    question: "DEGIRO est-il adapté aux débutants ?",
    answer:
      "DEGIRO peut convenir à un débutant sérieux qui souhaite investir lui-même en actions ou ETF, à condition de comprendre les risques, les frais et les produits utilisés. Pour un débutant complet, il vaut mieux commencer simplement, par exemple avec des ETF diversifiés, et éviter les produits complexes.",
  },
  {
    question: "Peut-on acheter des ETF avec DEGIRO ?",
    answer:
      "Oui, DEGIRO permet d’investir dans de nombreux ETF. Certains ETF peuvent bénéficier de conditions tarifaires spécifiques selon la sélection, la place boursière et les règles en vigueur. Il faut toujours vérifier les frais avant de passer un ordre.",
  },
  {
    question: "DEGIRO est-il gratuit ?",
    answer:
      "Non. Même si DEGIRO met en avant des tarifs compétitifs, des frais peuvent s’appliquer : frais de transaction, frais de gestion externes, frais de change, frais de connexion à certaines places boursières ou coûts liés aux produits. Les conditions peuvent évoluer.",
  },
  {
    question: "Y a-t-il un parrainage DEGIRO sur Afflizen ?",
    answer:
      "Non. À ce jour, Afflizen ne dispose pas de lien de parrainage ou d’affiliation DEGIRO. Le bouton présent sur cette page renvoie vers le site officiel de DEGIRO.",
  },
];

export default function DegiroPage() {
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

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Investissement · Courtier en ligne
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            DEGIRO : avis, frais, avantages et inconvénients
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            DEGIRO est un courtier en ligne européen permettant d’investir dans
            des actions, ETF, obligations et autres produits financiers. Son
            principal intérêt repose sur des frais souvent compétitifs, mais il
            s’adresse surtout aux investisseurs autonomes capables de comprendre
            les risques et les conditions tarifaires.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={DEGIRO_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Découvrir DEGIRO
            </a>

            <a
              href="#avis"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Lire l’avis Afflizen
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Aucun lien d’affiliation ou de parrainage n’est utilisé sur cette
            page pour le moment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Type</p>
            <p className="mt-2 font-semibold text-slate-950">
              Courtier en ligne
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Produits</p>
            <p className="mt-2 font-semibold text-slate-950">
              Actions, ETF, obligations
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Profil</p>
            <p className="mt-2 font-semibold text-slate-950">
              Investisseur autonome
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Affiliation</p>
            <p className="mt-2 font-semibold text-slate-950">
              Non disponible
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Notre résumé sur DEGIRO
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                DEGIRO est une solution intéressante pour investir en bourse
                sans passer par une banque traditionnelle. La plateforme vise
                surtout les investisseurs qui veulent gérer eux-mêmes leurs
                ordres, comparer les frais et construire progressivement un
                portefeuille d’actions ou d’ETF.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Son positionnement est clair : donner accès à de nombreux
                marchés avec une structure tarifaire généralement compétitive.
                En revanche, DEGIRO n’est pas une application de conseil
                financier. L’utilisateur reste responsable de ses choix, de sa
                diversification, de sa fiscalité et de sa gestion du risque.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">
                  Rappel important
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Investir comporte un risque de perte en capital. Les frais,
                  promotions, produits disponibles et conditions peuvent changer
                  selon le pays, le profil du compte et la réglementation.
                  Vérifiez toujours les informations officielles avant
                  d’ouvrir un compte ou de passer un ordre.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
                <h2 className="text-2xl font-bold text-emerald-950">
                  Avantages
                </h2>

                <ul className="mt-5 space-y-3">
                  {avantages.map((avantage) => (
                    <li
                      key={avantage}
                      className="flex gap-3 text-sm leading-6 text-emerald-950"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      <span>{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Inconvénients
                </h2>

                <ul className="mt-5 space-y-3">
                  {inconvenients.map((inconvenient) => (
                    <li
                      key={inconvenient}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                      <span>{inconvenient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Frais, prix et conditions
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                DEGIRO met en avant une tarification compétitive, mais il ne
                faut pas résumer la plateforme à une promesse de gratuité. Selon
                les opérations, plusieurs frais peuvent exister : frais de
                transaction, frais de gestion externes, frais de change, frais
                de connexion à certaines places boursières, spreads ou coûts
                internes aux produits financiers comme les ETF.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Certains frais dépendent du marché utilisé, du type de produit,
                de la devise et du pays du client. Avant d’investir, il est donc
                préférable de consulter la grille tarifaire officielle et de
                simuler le coût réel d’un ordre.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">
                  À vérifier avant d’ouvrir un compte
                </p>

                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>• Les frais de courtage selon la place boursière.</li>
                  <li>• Les frais de change si vous investissez en devise étrangère.</li>
                  <li>• Les frais de connexion aux marchés étrangers.</li>
                  <li>• Les frais propres aux ETF, fonds ou produits complexes.</li>
                  <li>• La fiscalité applicable dans votre pays de résidence.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Sécurité et fiabilité
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                DEGIRO fait partie du groupe flatexDEGIRO. Les liquidités non
                investies sont détenues sur un compte espèces personnel lié au
                compte d’investissement. Les fonds non investis peuvent être
                couverts, sous conditions, par le système allemand de garantie
                des dépôts.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Cela ne supprime pas le risque de marché : si vos actions, ETF
                ou autres produits financiers baissent, la perte reste à votre
                charge. La protection des liquidités et la protection contre les
                pertes d’investissement sont deux sujets différents.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                Pour qui DEGIRO est-il adapté ?
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-semibold text-emerald-950">
                    DEGIRO peut convenir si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-950">
                    <li>• Vous voulez investir vous-même en bourse.</li>
                    <li>• Vous cherchez une alternative aux banques classiques.</li>
                    <li>• Vous comprenez les risques liés aux marchés financiers.</li>
                    <li>• Vous voulez construire un portefeuille d’ETF ou d’actions.</li>
                    <li>• Vous êtes prêt à comparer les frais avant chaque ordre.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    DEGIRO est moins adapté si :
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <li>• Vous voulez un accompagnement personnalisé.</li>
                    <li>• Vous ne comprenez pas les produits financiers.</li>
                    <li>• Vous cherchez une solution totalement automatisée.</li>
                    <li>• Vous voulez investir sans jamais regarder les frais.</li>
                    <li>• Vous êtes tenté par les produits complexes sans expérience.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="avis"
              className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Avis Afflizen sur DEGIRO
              </h2>

              <p className="mt-5 leading-8 text-slate-200">
                DEGIRO est une plateforme solide pour les investisseurs
                autonomes qui veulent accéder aux marchés financiers avec une
                tarification généralement compétitive. Pour une stratégie simple
                basée sur des ETF ou quelques actions bien choisies, c’est une
                option à étudier sérieusement.
              </p>

              <p className="mt-5 leading-8 text-slate-200">
                Notre avis est plus réservé pour les personnes qui débutent sans
                connaissances financières. La plateforme donne accès à de
                nombreux produits, mais cette liberté demande de la discipline :
                comprendre les frais, éviter les produits trop risqués,
                diversifier correctement et ne pas investir de l’argent dont on
                peut avoir besoin à court terme.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">
                  Verdict Afflizen
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Une bonne option pour investir en bourse à frais maîtrisés,
                  surtout si vous êtes autonome et prudent. À éviter si vous
                  cherchez du conseil personnalisé ou si vous ne comprenez pas
                  encore les bases de l’investissement.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-bold tracking-tight">
                FAQ DEGIRO
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
            </div>
          </article>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Courtier en ligne
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Ouvrir un compte DEGIRO
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                Le bouton ci-dessous renvoie vers le site officiel de DEGIRO.
                Aucun lien d’affiliation ou de parrainage Afflizen n’est utilisé
                pour le moment.
              </p>

              <a
                href={DEGIRO_OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Aller sur le site officiel
              </a>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Transparence Afflizen
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Cette page est informative. Elle ne constitue pas un conseil
                  en investissement. Afflizen ne touche actuellement aucune
                  commission sur cette page DEGIRO.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Risque de perte
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-900">
                  Les marchés financiers peuvent monter ou baisser. Vous pouvez
                  perdre une partie ou la totalité du capital investi.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}