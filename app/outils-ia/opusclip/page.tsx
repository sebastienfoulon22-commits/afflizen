import AffiliateButton from "@/components/AffiliateButton";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

const OPUSCLIP_AFFILIATE_LINK = "https://opus.pro/?via=sebastien";

export const metadata = createPageMetadata({
  title: "OpusClip avis : extraits vidéo IA, tarifs et limites",
  description:
    "Comprendre OpusClip : découpage de vidéos longues, sous-titres, recadrage, formules gratuites et payantes, droits des contenus et limites de l’IA.",
  path: "/outils-ia/opusclip",
  type: "article",
});

const features = [
  {
    title: "Repérer des extraits",
    text: "OpusClip sélectionne des passages d’une vidéo longue pour proposer des formats courts. Le choix final du message et du montage vous appartient.",
  },
  {
    title: "Adapter le format",
    text: "Le recadrage automatique aide à préparer une vidéo pour un écran vertical. Les formats et réglages accessibles dépendent de la formule.",
  },
  {
    title: "Préparer les sous-titres",
    text: "La transcription prend notamment en charge le français. Relisez les noms propres, chiffres et formulations avant de diffuser un extrait.",
  },
];

const plans = [
  { name: "Free", price: "0 USD", detail: "60 crédits par mois ; filigrane, sans édition et export limité à trois jours après création." },
  { name: "Starter", price: "15 USD / mois", detail: "Facturation mensuelle, 150 crédits par mois et export sans filigrane." },
  { name: "Pro", price: "29 USD / mois", detail: "Tarif mensuel affiché. L’option annuelle annonce 174 USD facturés en une fois, soit 14,50 USD par mois en équivalent." },
  { name: "Business", price: "Sur devis", detail: "Volumes, collaboration et services adaptés à l’organisation selon l’offre convenue." },
];

const faq = [
  {
    question: "OpusClip garantit-il des vidéos virales ?",
    answer: "Non. Un score ou une suggestion de l’outil ne garantit ni vues, ni abonnés, ni revenus. Évaluez chaque extrait selon votre audience et le sens de la vidéo originale.",
  },
  {
    question: "Peut-on utiliser les vidéos d’autres créateurs ?",
    answer: "Un lien accessible publiquement ne suffit pas à donner le droit de réutiliser une vidéo. Vérifiez les autorisations nécessaires sur les images, musiques, voix et personnes présentes avant tout import ou diffusion.",
  },
  {
    question: "Y a-t-il un bonus Afflizen pour OpusClip ?",
    answer: "Aucun bonus, cashback ou coupon propre à Afflizen n’est annoncé sur cette fiche. Le lien proposé est un lien d’affiliation professionnel.",
  },
];

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4";
const cta = `inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-emerald-200 ${focus}`;

export default function OpusClipPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/outils-ia" className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 ${focus}`}>
          ← Comparatif des outils IA
        </Link>

        <header className="mt-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-10 text-white shadow-xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Outils IA · Création vidéo</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            OpusClip : transformer une vidéo longue en extraits courts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            OpusClip réunit découpage assisté par IA, sous-titres et recadrage.
            Il peut servir à décliner une interview, un podcast filmé ou une présentation en plusieurs extraits à relire avant publication.
          </p>
          <div className="mt-8">
            <AffiliateButton href={OPUSCLIP_AFFILIATE_LINK} platform="OpusClip" category="Outils IA" location="hero" className={cta}>
              Découvrir OpusClip ↗
            </AffiliateButton>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Lien affilié : Afflizen peut percevoir une rémunération si vous souscrivez via ce lien.
            Aucun résultat de publication n’est garanti.
          </p>
        </header>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8" aria-labelledby="avis">
          <h2 id="avis" className="text-2xl font-bold">À qui cet outil peut-il convenir ?</h2>
          <p className="mt-4 leading-8 text-slate-700">
            L’intérêt est surtout de réutiliser un contenu que vous possédez déjà.
            Pour un créateur publiant régulièrement des vidéos longues, comparez le temps de retouche nécessaire
            avec votre montage habituel avant de choisir un abonnement. Pour une vidéo ponctuelle ou un montage
            très précis, un éditeur classique peut suffire.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Cette fiche est une analyse documentaire des sources officielles, pas le compte rendu d’un test pratique réalisé par Afflizen.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="fonctions">
          <h2 id="fonctions" className="text-2xl font-bold">Les fonctions à examiner</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="tarifs">
          <h2 id="tarifs" className="text-2xl font-bold">Tarifs et limites des formules</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Repères relevés le 10 septembre 2026 sur la page tarifaire officielle, en dollars américains.
            Vérifiez les taxes éventuelles, la devise de paiement, les crédits et les conditions actuelles avant de souscrire.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {plans.map((plan) => (
              <article key={plan.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-2xl font-bold text-emerald-800">{plan.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{plan.detail}</p>
              </article>
            ))}
          </div>
          <a href="https://www.opus.pro/pricing" target="_blank" rel="noopener noreferrer" className={`mt-4 inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 underline underline-offset-4 ${focus}`}>
            Vérifier les tarifs chez OpusClip ↗
          </a>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Précautions et disponibilité">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Garder la main sur le résultat</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700">
              <li>Une coupe peut retirer une nuance : regardez l’extrait avec son contexte d’origine.</li>
              <li>Corrigez les sous-titres et vérifiez que le recadrage conserve les éléments utiles.</li>
              <li>Utilisez uniquement des contenus dont vous avez les droits et les autorisations nécessaires.</li>
              <li>Examinez les conditions de traitement des fichiers avant de téléverser une vidéo confidentielle.</li>
              <li>Conservez vos originaux et exportations : les durées d’accès varient selon la formule.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Pays et accès au service</h2>
            <p className="mt-4 leading-8 text-slate-700">
              La prise en charge du français ne confirme pas à elle seule l’éligibilité d’un pays.
              Pour la Belgique, la France, le Luxembourg et la Suisse, Afflizen n’a pas trouvé de liste
              officielle garantissant séparément l’accès à toutes les fonctionnalités.
            </p>
            <p className="mt-3 leading-8 text-slate-700">
              Vérifiez l’inscription, la facturation et les restrictions applicables à votre situation
              directement auprès d’OpusClip avant un engagement payant.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="questions">
          <h2 id="questions" className="text-2xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-200 p-5">
                <summary className={`cursor-pointer rounded-sm font-semibold ${focus}`}>{item.question}</summary>
                <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-950 p-6 text-white md:p-8" aria-labelledby="decouvrir">
          <h2 id="decouvrir" className="text-2xl font-bold">Examiner OpusClip selon votre usage</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">Commencez par vérifier les limites de la formule envisagée et la qualité des extraits sur votre propre contenu.</p>
          <AffiliateButton href={OPUSCLIP_AFFILIATE_LINK} platform="OpusClip" category="Outils IA" location="bottom" className={`mt-6 ${cta}`}>
            Voir OpusClip et ses formules ↗
          </AffiliateButton>
          <p className="mt-3 text-sm text-slate-300">Lien affilié professionnel, sans bonus Afflizen annoncé.</p>
        </section>

        <nav aria-label="Autres outils IA" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/outils-ia/elevenlabs" className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 ${focus}`}>ElevenLabs : voix et audio IA →</Link>
          <Link href="/outils-ia/gamma" className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-emerald-700 ${focus}`}>Gamma : présentations IA →</Link>
        </nav>
      </div>
    </main>
  );
}
