import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import CryptoAvailabilityNotice, {
  SuspendedRegistrationMessage,
} from "@/components/CryptoAvailabilityNotice";

export const metadata = createPageMetadata({
  title: "Binance avis 2026 : frais, sécurité, avantages et inconvénients",
  description: "Notre avis sur Binance en 2026 : services, frais, sécurité et situation réglementaire en Belgique et en France.",
  path: "/crypto/binance",
  type: "article",
});

export default function BinancePage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Plateforme crypto
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Binance avis 2026 : faut-il utiliser cette plateforme crypto ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Binance est l’une des plateformes crypto les plus connues au monde.
            Elle propose un grand choix de cryptomonnaies, des frais compétitifs
            et de nombreux outils pour acheter, vendre, convertir ou trader des
            actifs numériques. Cette page résume les points forts, les limites,
            les frais, la sécurité et notre avis Afflizen.
          </p>

          <CryptoAvailabilityNotice
            title="Disponibilité de Binance à vérifier avant toute démarche"
            level="warning"
          >
            <p>
              Afflizen n’a pas identifié Binance dans le registre MiCA des
              prestataires de services sur crypto-actifs publié par l’ESMA au 31
              juillet 2026. En France, l’enregistrement PSAN de Binance France
              SAS est indiqué comme caduc depuis le 2 juillet 2026 par l’AMF.
            </p>
            <p>
              La disponibilité pour les résidents belges ou français ne doit
              donc pas être déduite de la seule accessibilité du site. Afflizen
              suspend ses liens d’inscription vers Binance.
            </p>
            <p>
              Cette absence de confirmation ne signifie pas que Binance est
              frauduleuse ou officiellement interdite. Elle signifie uniquement
              qu’Afflizen ne dispose pas actuellement d’éléments suffisants pour
              promouvoir l’inscription.
            </p>
          </CryptoAvailabilityNotice>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <SuspendedRegistrationMessage />

            <Link
              href="/crypto"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes crypto
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            Les cryptoactifs sont volatils. Vous pouvez perdre tout ou partie de
            votre capital. Vérifiez toujours la disponibilité, les frais et les
            conditions applicables dans votre pays avant toute démarche.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Très complet
          </p>
          <p className="mt-3 text-slate-600">
            Une plateforme puissante, mais qui peut être trop dense pour un
            débutant total.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Frais spot indicatifs
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">0,10 %</p>
          <p className="mt-3 text-slate-600">
            Pour un utilisateur standard, hors promotions, réductions ou
            conditions spécifiques.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil idéal
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Intermédiaire
          </p>
          <p className="mt-3 text-slate-600">
            Convient surtout aux utilisateurs qui veulent aller plus loin qu’un
            simple achat occasionnel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de Binance
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Très grand choix de cryptomonnaies disponibles.</li>
              <li>• Frais de trading généralement compétitifs.</li>
              <li>• Application mobile complète.</li>
              <li>
                • Outils avancés pour les utilisateurs plus expérimentés.
              </li>
              <li>
                • Fonctionnalités nombreuses : spot, conversion, staking, bots,
                Earn, carte selon disponibilité.
              </li>
              <li>• Interface traduite en français.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients de Binance
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Interface parfois complexe pour un débutant.</li>
              <li>
                • Beaucoup de produits, ce qui peut pousser à prendre trop de
                risques.
              </li>
              <li>• Réglementation européenne à surveiller attentivement.</li>
              <li>
                • Certaines fonctionnalités peuvent varier selon le pays.
              </li>
              <li>
                • Le support client peut être impersonnel sur une plateforme de
                cette taille.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Frais Binance</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Binance est souvent appréciée pour ses frais de trading compétitifs.
            Pour un utilisateur standard, les frais spot affichés sont de 0,10 %
            maker et 0,10 % taker, hors promotions, réductions ou conditions
            particulières. Les frais peuvent évoluer selon le volume de trading,
            le niveau VIP, l’utilisation de BNB ou le type d’opération.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              Avant de déposer de l’argent, vérifiez toujours la grille
              tarifaire officielle de Binance. Les frais de retrait, d’achat par
              carte, de conversion ou de réseau peuvent varier selon la crypto
              et la méthode utilisée.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            Binance met en avant plusieurs éléments de sécurité : vérification
            d’identité, authentification à deux facteurs, alertes de connexion,
            preuve de réserves et fonds d’urgence SAFU. Ces éléments sont
            rassurants, mais ils ne suppriment pas les risques liés aux
            plateformes centralisées.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              Pour de gros montants ou une conservation long terme, il reste
              préférable d’apprendre à utiliser un wallet personnel ou un wallet
              matériel, plutôt que de laisser toutes ses cryptos sur une
              plateforme d’échange.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui Binance est-elle adaptée ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">Débutants motivés</h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent acheter leurs premières cryptos, mais qui
                acceptent de prendre le temps de comprendre l’interface.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">Utilisateurs actifs</h3>
              <p className="mt-3 text-slate-700">
                Pour comparer, convertir, trader ou utiliser plusieurs outils
                crypto depuis une seule plateforme.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">Profils prudents</h3>
              <p className="mt-3 text-slate-700">
                À condition de limiter les montants, d’activer la sécurité et
                d’éviter les produits trop risqués.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : Binance reste une plateforme crypto très complète et
            compétitive, surtout pour les utilisateurs qui veulent accéder à un
            large choix d’actifs et à des outils avancés. Elle n’est cependant
            pas la plus simple pour un débutant absolu, et son contexte
            réglementaire en Europe doit être surveillé.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Pour un utilisateur belge ou français, Afflizen ne recommande pas
            d’ouvrir un compte tant que l’entité contractante, son agrément MiCA
            et les services autorisés dans le pays de résidence ne sont pas
            confirmés par une source officielle à jour.
          </p>

          <div className="mt-8">
            <SuspendedRegistrationMessage />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">FAQ Binance</h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "Binance est-elle adaptée aux débutants ?",
              answer:
                "Oui, mais seulement si l’utilisateur prend le temps de comprendre l’interface. Binance est plus complète que certaines applications crypto simplifiées.",
            },
            {
              question: "Quels sont les frais de Binance ?",
              answer:
                "Les frais spot standards sont généralement compétitifs, mais ils peuvent varier selon le niveau de compte, les promotions, la méthode de paiement et le type d’opération.",
            },
            {
              question: "Binance est-elle disponible en Belgique ?",
              answer:
                "Afflizen n’a pas identifié Binance dans le registre MiCA de l’ESMA au 31 juillet 2026. L’accessibilité du site ne suffit pas à établir quels services sont autorisés en Belgique : l’entité contractante et son agrément doivent être vérifiés avant toute démarche.",
            },
            {
              question: "Peut-on laisser ses cryptos sur Binance ?",
              answer:
                "C’est possible, mais ce n’est pas toujours idéal pour de gros montants ou du long terme. Pour une conservation longue durée, un wallet personnel ou matériel est souvent préférable.",
            },
            {
              question: "Afflizen recommande-t-il Binance ?",
              answer:
                "Afflizen suspend actuellement ses liens d’inscription vers Binance et recommande de vérifier l’entité contractante, son agrément et les services autorisés dans le pays de résidence.",
            },
          ].map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-slate-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Mention affiliation
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Afflizen a suspendu les liens d’affiliation et d’inscription vers
            Binance sur cette fiche. Aucun clic depuis cette page ne déclenche
            de suivi affilié vers la plateforme.
          </p>
        </div>
      </section>
    </main>
  );
}
