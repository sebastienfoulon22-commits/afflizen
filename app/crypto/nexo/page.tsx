import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "../../../components/AffiliateButton";

const NEXO_REFERRAL_URL =
  "https://nexo.com/ref/hel1o3ivp2?src=ios-link";

export const metadata: Metadata = {
  title: "Nexo : avis, rendement crypto, carte et crédit crypto | Afflizen",
  description:
    "Avis Afflizen sur Nexo : rendement crypto, carte Nexo, crédit crypto, avantages, limites, risques et conditions à vérifier avant inscription.",
  alternates: {
    canonical: "https://afflizen.com/crypto/nexo",
  },
  openGraph: {
    title: "Nexo : avis, rendement crypto, carte et crédit crypto",
    description:
      "Analyse prudente de Nexo : rendement non garanti, plateforme crypto centralisée, risques, frais, carte et crédit crypto.",
    url: "https://afflizen.com/crypto/nexo",
    siteName: "Afflizen",
    type: "article",
  },
};

const avantages = [
  "Plateforme crypto centralisée connue, avec une interface simple à utiliser.",
  "Possibilité de générer des rendements sur certains crypto-actifs, selon les conditions en vigueur.",
  "Carte Nexo disponible dans certaines zones, avec des fonctionnalités liées aux actifs crypto.",
  "Service de crédit crypto permettant d’emprunter en utilisant ses actifs comme garantie.",
  "Application mobile claire pour suivre son portefeuille, ses intérêts et ses opérations.",
];

const inconvenients = [
  "Les rendements ne sont jamais garantis et peuvent changer à tout moment.",
  "Nexo reste une plateforme centralisée : l’utilisateur dépend de la solidité de l’entreprise.",
  "Le crédit crypto comporte un risque de liquidation si la valeur des garanties baisse fortement.",
  "Les conditions, frais, taux et fonctionnalités peuvent varier selon le pays de résidence.",
  "Ce n’est pas une solution adaptée à quelqu’un qui veut conserver lui-même ses clés privées.",
];

const pointsSecurite = [
  "Utiliser un mot de passe unique et solide.",
  "Activer l’authentification à deux facteurs.",
  "Ne pas conserver plus de fonds que nécessaire sur une plateforme centralisée.",
  "Lire les conditions exactes des produits de rendement et de crédit.",
  "Comprendre le risque de contrepartie avant de déposer des crypto-actifs.",
];

const faqs = [
  {
    question: "Nexo est-il sans risque ?",
    reponse:
      "Non. Nexo est une plateforme crypto centralisée. Cela implique un risque de marché, un risque de contrepartie et un risque lié aux conditions de la plateforme. Les rendements ne sont pas garantis.",
  },
  {
    question: "Les rendements Nexo sont-ils garantis ?",
    reponse:
      "Non. Les taux peuvent évoluer, être suspendus ou varier selon les actifs, les conditions de marché, le pays de résidence et le niveau de l’utilisateur.",
  },
  {
    question: "Le crédit crypto Nexo est-il risqué ?",
    reponse:
      "Oui. Si la valeur des crypto-actifs déposés en garantie baisse fortement, il peut exister un risque de liquidation. Il faut comprendre ce mécanisme avant d’utiliser ce type de service.",
  },
  {
    question: "Nexo convient-il aux débutants ?",
    reponse:
      "Nexo peut être simple à utiliser, mais les produits proposés nécessitent de bien comprendre les risques liés aux cryptomonnaies, aux plateformes centralisées, au rendement et au crédit crypto.",
  },
];

export default function NexoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            ← Retour à l’accueil
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                Plateforme crypto centralisée
              </p>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Nexo : avis, rendement crypto, carte et crédit crypto
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Nexo est une plateforme crypto centralisée qui permet notamment
                d’acheter, conserver et utiliser certains actifs numériques, avec
                des fonctionnalités de rendement, de carte et de crédit crypto.
                Elle peut être intéressante pour certains profils, mais elle ne
                doit pas être considérée comme une solution sans risque.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <AffiliateButton
                  href={NEXO_REFERRAL_URL}
                  platform="nexo"
                  category="crypto"
                  location="hero"
                >
                  Découvrir Nexo
                </AffiliateButton>

                <Link
                  href="/crypto"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  Voir les plateformes crypto
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Les crypto-actifs sont volatils. Les rendements ne sont pas
                garantis. Ce contenu est informatif et ne constitue pas un
                conseil financier.
              </p>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-emerald-950/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Résumé Afflizen
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Type</p>
                  <p className="mt-1">Plateforme crypto centralisée</p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Intérêt principal</p>
                  <p className="mt-1">
                    Rendement crypto, carte, crédit crypto et gestion simple
                    depuis une application.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Point de vigilance</p>
                  <p className="mt-1">
                    Risque de contrepartie, rendement non garanti et risque de
                    liquidation avec le crédit crypto.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <AffiliateButton
                  href={NEXO_REFERRAL_URL}
                  platform="nexo"
                  category="crypto"
                  location="sidebar"
                >
                  Accéder à Nexo
                </AffiliateButton>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Résumé rapide de Nexo
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Nexo s’adresse aux utilisateurs qui veulent accéder à plusieurs
              services crypto depuis une seule plateforme : achat, conservation,
              rendement potentiel, carte et crédit adossé aux crypto-actifs. Son
              intérêt vient surtout de sa simplicité, mais cette simplicité ne
              supprime pas les risques.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Contrairement à un portefeuille non custodial, les fonds placés
              sur Nexo dépendent de l’infrastructure et de la solidité de la
              plateforme. Avant d’utiliser ce type de service, il faut vérifier
              les conditions officielles, les frais, les taux, la disponibilité
              dans son pays et le niveau de risque accepté.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Avantages de Nexo
            </h2>

            <div className="mt-6 grid gap-4">
              {avantages.map((avantage) => (
                <div
                  key={avantage}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-slate-300"
                >
                  <span className="font-semibold text-emerald-300">✓ </span>
                  {avantage}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Inconvénients et limites
            </h2>

            <div className="mt-6 grid gap-4">
              {inconvenients.map((inconvenient) => (
                <div
                  key={inconvenient}
                  className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-slate-300"
                >
                  <span className="font-semibold text-amber-300">! </span>
                  {inconvenient}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Frais, taux et conditions
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Les frais, taux de rendement, limites, conditions de carte et
              conditions de crédit peuvent évoluer. Ils peuvent aussi dépendre du
              pays, du type d’actif, du niveau de fidélité, du montant déposé et
              des règles internes de la plateforme.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Avant de déposer des fonds ou d’activer un produit, il est
              préférable de vérifier directement les informations officielles
              dans l’application ou sur le site de Nexo. Un taux affiché à un
              instant donné ne doit pas être interprété comme un rendement fixe
              ou garanti dans le temps.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Rendement crypto : prudence obligatoire
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Nexo peut proposer des rendements sur certains crypto-actifs, mais
              ces rendements dépendent des conditions de la plateforme. Ils
              peuvent changer, être réduits ou ne pas être disponibles pour tous
              les utilisateurs.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Le rendement crypto implique plusieurs risques : volatilité des
              actifs, risque de contrepartie, risque réglementaire et risque de
              modification des conditions. Il ne faut donc pas comparer ce type
              de rendement à un livret bancaire classique ou à un placement
              garanti.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Carte Nexo et crédit crypto
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              La carte Nexo peut permettre d’utiliser certains services liés aux
              crypto-actifs au quotidien, selon les fonctionnalités disponibles
              dans le pays de l’utilisateur. Les avantages exacts doivent être
              vérifiés directement auprès de Nexo.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Le crédit crypto permet d’emprunter en utilisant des actifs
              numériques comme garantie. Ce fonctionnement peut être pratique,
              mais il comporte un risque important : si la valeur des garanties
              baisse, la plateforme peut demander un ajout de garantie ou
              liquider une partie des actifs.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Sécurité : les points à vérifier
            </h2>

            <div className="mt-6 grid gap-4">
              {pointsSecurite.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-slate-300"
                >
                  {point}
                </div>
              ))}
            </div>

            <p className="mt-6 leading-8 text-slate-300">
              Même avec de bonnes pratiques de sécurité, une plateforme
              centralisée reste différente d’un portefeuille personnel avec clés
              privées. L’utilisateur doit accepter que ses actifs dépendent en
              partie d’un tiers.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Pour qui Nexo peut être intéressant ?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <h3 className="font-semibold text-emerald-300">
                  Profil adapté
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Utilisateur crypto qui comprend déjà les risques, veut une
                  interface simple et souhaite explorer des services comme le
                  rendement, la carte ou le crédit crypto avec prudence.
                </p>
              </div>

              <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
                <h3 className="font-semibold text-red-300">
                  Profil moins adapté
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Débutant complet, personne qui cherche un placement garanti,
                  utilisateur qui refuse le risque de contrepartie ou qui préfère
                  contrôler lui-même ses clés privées.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Avis Afflizen sur Nexo
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Nexo peut être une plateforme intéressante pour un utilisateur
              crypto déjà conscient des risques, surtout pour centraliser
              plusieurs fonctionnalités dans une seule interface. Son principal
              avantage est la simplicité d’utilisation.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Notre avis reste prudent : Nexo ne doit pas être présenté comme
              une solution sans risque. Les rendements ne sont pas garantis, le
              crédit crypto peut entraîner une liquidation et les fonds déposés
              sur une plateforme centralisée impliquent un risque de
              contrepartie.
            </p>

            <div className="mt-8">
              <AffiliateButton
                href={NEXO_REFERRAL_URL}
                platform="nexo"
                category="crypto"
                location="avis"
              >
                S’inscrire sur Nexo
              </AffiliateButton>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Cette page contient un lien de parrainage ou d’affiliation. Cela
              peut permettre à Afflizen de recevoir une rémunération, sans coût
              supplémentaire pour vous.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              FAQ sur Nexo
            </h2>

            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                >
                  <summary className="cursor-pointer font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-300">
                    {faq.reponse}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">
              Mention importante
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Afflizen propose du contenu informatif sur des plateformes,
              services financiers, crypto, cashback et outils en ligne. Ce
              contenu ne constitue pas un conseil en investissement, un conseil
              fiscal, un conseil juridique ou une recommandation personnalisée.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Avant d’utiliser Nexo ou toute autre plateforme crypto, vérifiez
              les conditions officielles, la disponibilité dans votre pays, les
              frais applicables et les risques liés aux crypto-actifs.
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-3xl border border-white/10 bg-slate-900/80 p-6 lg:sticky lg:top-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Nexo
          </p>

          <h2 className="mt-4 text-2xl font-bold text-white">
            Plateforme crypto avec rendement, carte et crédit
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            À utiliser avec prudence : rendement non garanti, risque de
            contrepartie et risque de liquidation avec le crédit crypto.
          </p>

          <div className="mt-6">
            <AffiliateButton
              href={NEXO_REFERRAL_URL}
              platform="nexo"
              category="crypto"
              location="sidebar"
            >
              Découvrir Nexo
            </AffiliateButton>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-7 text-amber-100">
            Les crypto-actifs sont volatils. Ne déposez pas de fonds sans
            comprendre les risques de la plateforme et des produits utilisés.
          </div>
        </aside>
      </section>
    </main>
  );
}