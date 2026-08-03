import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const SUMUP_FRANCE_LINK = "https://www.sumup.com/fr-fr/";
const SUMUP_BELGIQUE_LINK = "https://www.sumup.com/fr-be/";

export const metadata = createPageMetadata({
  title: "SumUp avis : terminaux de paiement, Tap to Pay et solutions pro",
  description: "Notre présentation de SumUp, solution de paiement pour indépendants, commerçants et petites entreprises : terminaux de paiement, Tap to Pay, compte pro, frais, points forts et limites.",
  path: "/cartes-et-paiements/sumup",
  type: "article",
});

const strengths = [
  "Solution de paiement pensée pour indépendants, commerçants, artisans, prestataires et petites entreprises.",
  "Permet d’accepter des paiements par carte et sans contact selon le terminal, le pays et les services disponibles.",
  "Offres autour des terminaux de paiement, Tap to Pay, liens de paiement, paiements en ligne et services business selon disponibilité.",
  "Peut simplifier l’encaissement en boutique, en déplacement, en événement ou lors de prestations.",
  "Alternative plus simple à comparer avec certains contrats monétiques traditionnels, selon activité et volume.",
];

const limits = [
  "SumUp France et SumUp Belgique peuvent proposer des offres, frais, terminaux et services différents.",
  "Les frais de transaction, tarifs de matériel, options, délais et conditions doivent être vérifiés sur les sites officiels.",
  "SumUp n’est pas à présenter comme toujours moins cher qu’un contrat monétique classique.",
  "Il ne faut pas promettre de réduction, bonus, code promo ou avantage de parrainage sans offre officielle confirmée.",
  "Les conditions peuvent dépendre du pays, de l’activité, du volume d’encaissement, du terminal et du mode de paiement.",
];

const useCases = [
  "Encaisser des paiements par carte dans un commerce ou point de vente.",
  "Accepter le sans contact lors de prestations, marchés, salons ou déplacements.",
  "Envoyer certains liens de paiement ou utiliser des paiements en ligne selon disponibilité.",
  "Comparer une solution simple à un contrat monétique plus traditionnel.",
];

const products = [
  "Terminaux de paiement à comparer selon prix, connectivité, autonomie et usages prévus.",
  "Tap to Pay et encaissement sans contact selon appareil, pays et conditions techniques.",
  "Liens de paiement, outils de paiement en ligne et services business selon disponibilité locale.",
  "Compte pro ou services associés à vérifier directement sur SumUp France ou Belgique.",
];

const fees = [
  "Frais de transaction selon type de paiement, pays, terminal et conditions en vigueur.",
  "Coût du matériel, options, accessoires et éventuels services additionnels.",
  "Délais de versement, limites, documents demandés et obligations propres à l’activité.",
  "Conditions contractuelles, résiliation, conformité et règles applicables aux professionnels.",
];

const relatedLinks = [
  {
    href: "/cartes-et-paiements",
    title: "Cartes et paiements",
    text: "Revenir à la catégorie cartes, paiements et wallets.",
  },
  {
    href: "/cartes-et-paiements/curve-pay",
    title: "Curve Pay",
    text: "Une solution de wallet pour regrouper plusieurs cartes bancaires.",
  },
  {
    href: "/cartes-et-paiements/wise",
    title: "Wise",
    text: "Une solution multidevise pour paiements, conversions et transferts internationaux.",
  },
  {
    href: "/banques-en-ligne",
    title: "Banques en ligne",
    text: "Comparer les comptes mobiles et applications financières suivies.",
  },
  {
    href: "/banques-en-ligne/qonto",
    title: "Qonto",
    text: "Un compte pro en ligne pour indépendants, PME et entreprises.",
  },
  {
    href: "/banques-en-ligne/hello-bank",
    title: "Hello bank!",
    text: "Une banque en ligne présente en France et en Belgique.",
  },
  {
    href: "/cashback",
    title: "Cashback",
    text: "Comparer les plateformes de cashback et codes promo référencées.",
  },
  {
    href: "/investissement",
    title: "Investissement",
    text: "Explorer les plateformes d’investissement suivies par Afflizen.",
  },
];

const faq = [
  {
    question: "SumUp est-il adapté aux indépendants et commerçants ?",
    answer:
      "SumUp peut convenir aux indépendants, commerçants, artisans, prestataires et petites entreprises qui veulent accepter des paiements par carte ou sans contact. L’intérêt dépend du pays, de l’activité, du volume d’encaissement, du matériel choisi et des frais applicables.",
  },
  {
    question: "SumUp France et SumUp Belgique proposent-ils les mêmes offres ?",
    answer:
      "Pas forcément. Les terminaux, tarifs, frais de transaction, services, options de paiement, compte pro et fonctionnalités peuvent varier entre la France et la Belgique. Il faut vérifier le site officiel correspondant à son pays.",
  },
  {
    question: "Quels frais vérifier avant d’utiliser SumUp ?",
    answer:
      "Il faut vérifier les frais de transaction, le prix du terminal, les options, les frais éventuels selon le mode d’encaissement, les délais de versement, les conditions contractuelles et les obligations propres à son activité.",
  },
  {
    question: "SumUp est-il toujours moins cher qu’un contrat monétique classique ?",
    answer:
      "Non, il ne faut pas le promettre. SumUp peut être simple et pratique, mais le coût réel dépend du volume d’encaissement, des frais, du matériel, du pays et des conditions négociées avec d’autres solutions.",
  },
  {
    question: "Les liens SumUp sur Afflizen sont-ils affiliés ?",
    answer:
      "Non. Les liens utilisés sur cette page sont des liens officiels provisoires vers SumUp France et SumUp Belgique. Ils ne sont pas présentés comme des liens affiliés, partenaires ou sponsorisés.",
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

export default function SumUpPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/cartes-et-paiements"
            className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            Voir la catégorie cartes & paiements
          </Link>

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
            Paiements professionnels
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            SumUp : une solution simple pour accepter les paiements par carte et
            sans contact
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            SumUp est une solution de paiement pour indépendants, commerçants,
            artisans, prestataires et petites entreprises. Elle permet
            d’accepter des paiements par carte, paiements sans contact, Tap to
            Pay, liens de paiement ou paiements en ligne selon le matériel, le
            pays et les services disponibles.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={SUMUP_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel SumUp France
            </a>

            <a
              href={SUMUP_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder au site officiel SumUp Belgique
            </a>
          </div>

          <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">
              Liens officiels France et Belgique, sans affiliation pour le moment
            </p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Les liens utilisés sur cette page renvoient vers les sites
              officiels SumUp France et SumUp Belgique. Ils ne sont pas
              présentés comme des liens affiliés, partenaires, sponsorisés,
              parrainage, bonus, réduction, code promo ou offre de bienvenue.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Usage
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Encaisser
          </p>
          <p className="mt-3 text-slate-600">
            Carte, sans contact, terminal et paiements en ligne selon
            disponibilité.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Pros
          </p>
          <p className="mt-3 text-slate-600">
            Indépendants, commerçants, artisans, prestataires et petites
            entreprises.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Affiliation
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Aucune
          </p>
          <p className="mt-3 text-slate-600">
            Liens officiels France et Belgique, sans parrainage Afflizen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            À qui s’adresse SumUp ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            SumUp s’adresse aux professionnels qui veulent encaisser plus
            simplement : indépendants, commerçants, artisans, prestataires,
            restaurateurs, vendeurs en événement ou petites entreprises. La
            plateforme peut être utile pour accepter des paiements en boutique,
            en déplacement ou après une prestation.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Avant de choisir SumUp, il faut comparer le pays, le type
            d’activité, le volume de transactions, le matériel nécessaire, les
            frais de transaction, les options de paiement et les conditions
            contractuelles. Cette page ne remplace pas un conseil comptable,
            juridique ou financier personnalisé.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Points forts
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {strengths.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Limites et points de vigilance
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              {limits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            SumUp est-il adapté aux indépendants, commerçants et artisans ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            SumUp peut être adapté aux professionnels qui veulent une solution
            d’encaissement simple, mobile et rapide à mettre en place. Son
            intérêt dépend toutefois du nombre de paiements, du panier moyen, du
            lieu d’encaissement, du terminal choisi et des frais réellement
            appliqués.
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Terminaux de paiement, Tap to Pay et paiements en ligne
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            SumUp met en avant plusieurs façons d’encaisser selon les besoins :
            terminaux de paiement, Tap to Pay, paiements sans contact, liens de
            paiement, outils en ligne, compte pro ou services business selon le
            pays. Les fonctionnalités exactes doivent être vérifiées sur le site
            officiel correspondant.
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">
            France ou Belgique : quel lien utiliser ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Utilisez le lien officiel correspondant au pays où votre activité
            est concernée. SumUp France et SumUp Belgique peuvent afficher des
            terminaux, tarifs, frais, services, options de paiement et conditions
            contractuelles différents.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href={SUMUP_FRANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                SumUp France
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle française.
              </span>
            </a>

            <a
              href={SUMUP_BELGIQUE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-300 hover:bg-white/10"
            >
              <span className="font-semibold text-emerald-300">
                SumUp Belgique
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-200">
                Accéder à la page officielle belge francophone.
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Frais, matériel et conditions à vérifier
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Les frais SumUp ne doivent pas être résumés trop vite. Le coût réel
            dépend du pays, du terminal, du mode d’encaissement, du volume de
            transactions, du type de cartes acceptées, des options utilisées et
            des conditions contractuelles applicables à l’activité.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fees.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div
          id="avis"
          className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-slate-950">
            Notre avis sur SumUp
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            SumUp est une solution intéressante à comparer pour les
            professionnels qui veulent accepter les paiements par carte ou sans
            contact sans se lancer dans une installation monétique trop lourde.
            Elle peut être pratique pour les encaissements en boutique, en
            déplacement ou lors de prestations.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Notre approche reste prudente : SumUp n’est pas automatiquement le
            meilleur choix pour tous les volumes ou toutes les activités. Les
            tarifs, frais, terminaux, services, délais, obligations et conditions
            doivent être vérifiés directement avant toute souscription.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">FAQ SumUp</h2>

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
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une présentation générale. Les terminaux, tarifs,
            frais de transaction, services, options de paiement, délais,
            conditions contractuelles, pays éligibles et obligations
            professionnelles peuvent évoluer. Vérifiez toujours les informations
            officielles SumUp France ou SumUp Belgique avant de choisir une
            solution d’encaissement.
          </p>
        </div>
      </section>
    </main>
  );
}
