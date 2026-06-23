import type { Metadata } from "next";
import Link from "next/link";
import AffiliateButton from "../../../components/AffiliateButton";

const IGRAAL_REFERRAL_URL =
  "https://fr.igraal.com/parrainage?parrain=AG_5cec013713c0f&utm_medium=raf&utm_source=refer_friend";

const primaryButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-700";

const darkButtonClassName =
  "inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700";

export const metadata: Metadata = {
  title: "iGraal avis 2026 : cashback, codes promo, paiement et parrainage",
  description:
    "Notre avis sur iGraal en 2026 : avantages, inconvénients, cashback, codes promo, seuil de paiement, extension, FAQ et lien de parrainage.",
  alternates: {
    canonical: "https://afflizen.com/cashback/igraal",
  },
  openGraph: {
    title: "iGraal avis 2026 : cashback, codes promo, paiement et parrainage",
    description:
      "Avis Afflizen sur iGraal : cashback, codes promo, seuil de paiement, extension navigateur, avantages, limites et parrainage.",
    url: "https://afflizen.com/cashback/igraal",
    siteName: "Afflizen",
    type: "article",
  },
};

export default function IGraalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
          >
            ← Retour à l’accueil
          </Link>

          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Cashback
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            iGraal avis 2026 : une bonne solution pour récupérer du cashback ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            iGraal est une plateforme de cashback et de codes promo qui permet
            de récupérer une partie de ses achats en ligne chez des enseignes
            partenaires. Le principe est simple : vous passez par iGraal avant
            d’acheter, le cashback est suivi, puis il est crédité dans votre
            cagnotte après validation par le marchand.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AffiliateButton
              href={IGRAAL_REFERRAL_URL}
              platform="igraal"
              category="cashback"
              location="hero"
              className={primaryButtonClassName}
            >
              S’inscrire sur iGraal
            </AffiliateButton>

            <Link
              href="/cashback"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes cashback
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            Les taux de cashback, les bonus de parrainage, les codes promo, les
            délais de validation et les seuils de paiement peuvent évoluer.
            Vérifiez toujours les conditions officielles avant de finaliser un
            achat.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Très utile
          </p>
          <p className="mt-3 text-slate-600">
            Une solution simple pour récupérer de l’argent sur des achats que
            vous aviez déjà prévus.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Seuil indicatif
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">20 €</p>
          <p className="mt-3 text-slate-600">
            Seuil souvent indiqué pour demander un retrait par virement ou
            PayPal, selon conditions.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil idéal
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">
            Acheteur en ligne
          </p>
          <p className="mt-3 text-slate-600">
            Convient surtout aux personnes qui achètent régulièrement sur
            internet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Attention aux conditions de cashback
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Le cashback n’est pas automatique dans tous les cas. Il peut être
            refusé ou annulé si vous utilisez un code promo non compatible, si
            vous annulez la commande, si vous retournez le produit, si le panier
            n’est pas suivi correctement ou si vous ne respectez pas les
            conditions du marchand.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Avant chaque achat, vérifiez le taux affiché, les exclusions, les
            conditions de validation et les délais indiqués sur la fiche du
            marchand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages d’iGraal
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Plateforme simple à comprendre.</li>
              <li>• Cashback sur de nombreuses enseignes partenaires.</li>
              <li>• Codes promo disponibles directement depuis iGraal.</li>
              <li>
                • Extension navigateur pratique pour ne pas oublier d’activer le
                cashback.
              </li>
              <li>• Application mobile utile pour suivre sa cagnotte.</li>
              <li>
                • Possibilité de retirer ses gains selon les conditions en
                vigueur.
              </li>
              <li>
                • Parrainage intéressant si vous partagez iGraal autour de vous.
              </li>
              <li>• Bon complément pour optimiser des achats déjà prévus.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients d’iGraal
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Le cashback peut prendre du temps à être validé.</li>
              <li>• Tous les marchands ne sont pas disponibles.</li>
              <li>• Certains achats ou catégories peuvent être exclus.</li>
              <li>• Les taux changent régulièrement.</li>
              <li>
                • Le cashback peut être refusé si les conditions ne sont pas
                respectées.
              </li>
              <li>• Il ne faut pas acheter uniquement pour obtenir du cashback.</li>
              <li>
                • Les bonus de parrainage peuvent évoluer selon les campagnes.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Comment fonctionne iGraal ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le fonctionnement est assez simple. Vous créez un compte iGraal,
            recherchez le marchand qui vous intéresse, activez le cashback, puis
            vous êtes redirigé vers le site marchand pour finaliser votre achat.
            Si l’achat est bien suivi et validé, le cashback apparaît ensuite
            dans votre cagnotte.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Le cashback peut d’abord apparaître comme “en attente”, puis être
            validé après confirmation du marchand. Le délai dépend de l’enseigne,
            du type d’achat, des délais de retour produit et des conditions
            propres au marchand.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              iGraal est surtout intéressant quand vous l’utilisez sur des
              achats que vous aviez déjà prévus. Le cashback doit être vu comme
              une économie bonus, pas comme une raison d’acheter davantage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité et fiabilité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            iGraal ne remplace pas une banque, un compte d’épargne ou une
            plateforme d’investissement. C’est un service de cashback et de codes
            promo. Le principal point de vigilance concerne le suivi des achats :
            il faut activer correctement le cashback, accepter les cookies si
            nécessaire et éviter les extensions ou codes promo incompatibles.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              Pour maximiser vos chances de validation, ouvrez iGraal juste
              avant l’achat, activez le cashback, ne changez pas de navigateur
              pendant la commande et évitez d’utiliser un code promo non indiqué
              comme compatible.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Retirer son cashback iGraal
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Une fois votre cashback validé et votre cagnotte suffisante, iGraal
            permet généralement de demander un paiement selon les moyens proposés
            : virement bancaire, PayPal ou cartes cadeaux selon les conditions
            disponibles dans votre espace.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Le seuil de retrait souvent indiqué pour un virement ou PayPal est
            de 20 € de cashback validé. Ce montant peut évoluer, et certaines
            options de paiement peuvent avoir des règles spécifiques.
          </p>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre conseil</h3>
            <p className="mt-2 text-slate-700">
              Ne comptez pas sur le cashback comme argent immédiat. Les délais
              de validation peuvent être longs. Considérez plutôt iGraal comme
              une petite cagnotte qui se construit progressivement.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Extension iGraal et application mobile
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            L’extension navigateur iGraal peut être utile pour détecter les sites
            partenaires et éviter d’oublier d’activer le cashback. Elle peut
            aussi signaler certains codes promo disponibles.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            L’application mobile permet de rechercher des marchands, suivre sa
            cagnotte, consulter les offres et activer le cashback depuis son
            téléphone. Pour les achats fréquents, l’extension et l’application
            rendent l’utilisation plus simple.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre prudence</h3>
            <p className="mt-2 text-slate-700">
              Même avec l’extension, vérifiez toujours que le cashback est bien
              activé avant de payer. Gardez aussi une capture ou une preuve si le
              cashback concerne un montant important.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui iGraal est-il adapté ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">Acheteurs en ligne</h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui commandent régulièrement sur internet et veulent
                récupérer une partie de leurs achats.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">
                Chasseurs de bons plans
              </h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui comparent les prix, utilisent des codes promo et
                veulent optimiser leurs dépenses.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">Profils prudents</h3>
              <p className="mt-3 text-slate-700">
                À condition de ne pas acheter inutilement et de vérifier les
                conditions avant chaque commande.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : iGraal est une solution de cashback intéressante pour
            récupérer un peu d’argent sur des achats déjà prévus. L’intérêt est
            surtout visible si vous achetez régulièrement en ligne, notamment
            dans les catégories voyage, mode, high-tech, maison, assurance,
            télécom ou services numériques.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            iGraal ne doit pas pousser à consommer davantage. Le bon réflexe est
            simple : choisir d’abord le bon produit au bon prix, puis vérifier si
            iGraal permet d’ajouter du cashback ou un code promo compatible. Dans
            cette logique, c’est un très bon outil d’optimisation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AffiliateButton
              href={IGRAAL_REFERRAL_URL}
              platform="igraal"
              category="cashback"
              location="avis"
              className={darkButtonClassName}
            >
              Accéder à iGraal
            </AffiliateButton>

            <Link
              href="/cashback"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes cashback
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">FAQ iGraal</h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "iGraal est-il gratuit ?",
              answer:
                "Oui, l’inscription à iGraal est gratuite. La plateforme se rémunère via ses partenariats avec les marchands, et reverse une partie sous forme de cashback.",
            },
            {
              question: "Comment fonctionne le cashback iGraal ?",
              answer:
                "Vous activez le cashback depuis iGraal avant de faire votre achat chez un marchand partenaire. Si l’achat est bien suivi et validé, une partie du montant est créditée dans votre cagnotte.",
            },
            {
              question: "Quand le cashback iGraal est-il validé ?",
              answer:
                "Le délai dépend du marchand. Le cashback peut rester en attente plusieurs semaines, notamment le temps que le délai de retour ou d’annulation soit terminé.",
            },
            {
              question: "À partir de combien peut-on retirer son cashback ?",
              answer:
                "Le seuil souvent indiqué pour un retrait par virement ou PayPal est de 20 € de cashback validé. Les conditions peuvent évoluer et doivent être vérifiées dans votre compte iGraal.",
            },
            {
              question: "Le cashback est-il garanti ?",
              answer:
                "Non. Le cashback peut être refusé si les conditions ne sont pas respectées : code promo non compatible, achat non suivi, retour produit, annulation ou exclusion indiquée par le marchand.",
            },
            {
              question: "Faut-il installer l’extension iGraal ?",
              answer:
                "Ce n’est pas obligatoire, mais c’est pratique. L’extension aide à détecter les marchands partenaires et à ne pas oublier d’activer le cashback.",
            },
            {
              question: "Afflizen recommande-t-il iGraal ?",
              answer:
                "Afflizen considère iGraal comme un bon outil de cashback pour optimiser des achats déjà prévus. Il ne faut pas l’utiliser comme prétexte pour acheter plus.",
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
            Certains liens présents sur Afflizen peuvent être des liens
            d’affiliation ou de parrainage. Cela signifie que nous pouvons
            recevoir une commission, un bonus ou un avantage si vous créez un
            compte ou utilisez un service via notre lien, sans coût
            supplémentaire pour vous. Cette rémunération aide à financer le site
            et n’influence pas notre volonté de présenter les avantages comme les
            limites de chaque plateforme.
          </p>
        </div>
      </section>
    </main>
  );
}