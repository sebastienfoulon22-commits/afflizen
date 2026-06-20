import Link from "next/link";

const WIDILO_AFFILIATE_LINK = "https://www.widilo.fr/i/571J27";

export const metadata = {
  title: "Widilo avis 2026 : cashback, codes promo, paiement et parrainage",
  description:
    "Notre avis sur Widilo en 2026 : avantages, inconvénients, cashback, codes promo, seuil de paiement, application, FAQ et lien de parrainage.",
};

export default function WidiloPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Cashback
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Widilo avis 2026 : une bonne plateforme de cashback ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Widilo est une plateforme de cashback et de codes promo qui permet
            de récupérer une partie de ses achats en ligne chez des marchands
            partenaires. Le principe est simple : vous activez le cashback avant
            votre achat, vous commandez chez le marchand, puis le cashback est
            ajouté à votre cagnotte après validation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={WIDILO_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              S’inscrire sur Widilo
            </a>

            <Link
              href="/cashback"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes cashback
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            Les taux de cashback, les codes promo, les bonus de parrainage, les
            délais de validation et les seuils de paiement peuvent évoluer.
            Vérifiez toujours les conditions Widilo et les conditions du marchand
            avant de finaliser un achat.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Très pratique
          </p>
          <p className="mt-3 text-slate-600">
            Une bonne solution pour économiser sur des achats déjà prévus.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Seuil de retrait
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">20 €</p>
          <p className="mt-3 text-slate-600">
            À partir de 20 € de gains validés, selon les conditions Widilo.
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
            Convient surtout aux personnes qui commandent régulièrement sur
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
            Le cashback Widilo n’est pas garanti dans tous les cas. Il peut être
            refusé si vous utilisez un code promo non compatible, si vous annulez
            la commande, si vous retournez le produit, si le suivi ne fonctionne
            pas ou si les conditions du marchand ne sont pas respectées.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Avant chaque achat, vérifiez le taux affiché, les exclusions, les
            délais de validation, les codes promo autorisés et les conditions
            spécifiques du marchand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de Widilo
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Plateforme simple à utiliser.</li>
              <li>• Cashback disponible chez de nombreux marchands partenaires.</li>
              <li>• Codes promo proposés directement sur la plateforme.</li>
              <li>• Application mobile pratique pour suivre sa cagnotte.</li>
              <li>• Extension navigateur utile pour ne pas oublier d’activer le cashback.</li>
              <li>• Retrait possible par virement bancaire ou PayPal selon conditions.</li>
              <li>• Programme de parrainage disponible.</li>
              <li>• Bon outil pour optimiser des achats déjà prévus.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients de Widilo
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Le cashback peut mettre du temps à être validé.</li>
              <li>• Tous les marchands ne sont pas disponibles.</li>
              <li>• Les taux de cashback changent régulièrement.</li>
              <li>• Certaines catégories d’achat peuvent être exclues.</li>
              <li>• Certains codes promo peuvent annuler le cashback.</li>
              <li>• Le suivi peut échouer si le navigateur ou les cookies bloquent la transaction.</li>
              <li>• Il ne faut pas acheter uniquement pour obtenir du cashback.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Comment fonctionne Widilo ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le fonctionnement de Widilo est simple. Vous créez un compte, vous
            recherchez le marchand qui vous intéresse, vous activez le cashback,
            puis vous êtes redirigé vers le site du marchand pour passer votre
            commande.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Si l’achat est correctement suivi, le cashback apparaît ensuite dans
            votre espace Widilo. Il peut d’abord être indiqué comme en attente,
            puis validé après confirmation du marchand. Le délai dépend de
            l’enseigne, du type d’achat et des éventuels délais de retour.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              Widilo est surtout intéressant si vous l’utilisez sur des achats
              que vous aviez déjà prévus. Le cashback doit être vu comme une
              économie supplémentaire, pas comme une raison de consommer plus.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité et fiabilité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            Widilo n’est pas une banque ni une plateforme d’investissement. C’est
            un service de cashback, de codes promo et de bons plans. Le principal
            point de vigilance concerne le suivi des achats : il faut activer le
            cashback correctement, rester connecté à son compte et respecter les
            conditions du marchand.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              Pour maximiser vos chances de validation, ouvrez Widilo juste
              avant l’achat, activez le cashback, évitez les codes promo non
              indiqués comme compatibles et ne changez pas de navigateur pendant
              la commande.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Retirer son cashback Widilo
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Lorsque votre cagnotte atteint le seuil minimum de gains validés,
            Widilo permet de demander un paiement. Le seuil actuellement indiqué
            est de 20 € de gains validés.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Les modes de paiement indiqués par Widilo sont le virement bancaire
            et PayPal. Attention : selon la FAQ Widilo, le retrait via PayPal
            n’est possible qu’après avoir effectué un premier versement sur un
            compte bancaire.
          </p>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre conseil</h3>
            <p className="mt-2 text-slate-700">
              Ne considérez pas le cashback comme de l’argent immédiat. Les
              validations peuvent prendre du temps. Widilo doit plutôt être vu
              comme une cagnotte progressive qui s’accumule au fil de vos achats.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Application et extension Widilo
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            L’application Widilo permet de consulter les offres, suivre sa
            cagnotte, rechercher des marchands, activer du cashback et rester au
            courant de certaines promotions. Elle peut être pratique si vous
            utilisez souvent le cashback depuis votre téléphone.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            L’extension navigateur est également utile. Elle aide à repérer les
            marchands partenaires et peut éviter d’oublier l’activation du
            cashback. Pour un utilisateur régulier, c’est souvent le moyen le
            plus simple de ne pas passer à côté d’une économie.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre prudence</h3>
            <p className="mt-2 text-slate-700">
              Même avec l’extension, vérifiez toujours que le cashback est bien
              activé avant de payer. Pour un achat important, gardez une preuve
              de l’offre et des conditions affichées au moment de la commande.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Widilo ou iGraal ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Widilo et iGraal ont un fonctionnement proche : cashback, codes
            promo, extension, application et retrait des gains. Le meilleur choix
            dépend souvent du marchand, du taux affiché au moment de l’achat et
            des conditions exactes de l’offre.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Dans une logique d’optimisation, le bon réflexe est de comparer les
            deux plateformes avant une commande importante. Le taux le plus élevé
            n’est pas toujours le meilleur choix si les conditions sont plus
            restrictives ou si un code promo est incompatible.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">
              Méthode Afflizen
            </h3>
            <p className="mt-2 text-slate-700">
              Pour chaque achat important : comparez le prix final, regardez le
              cashback Widilo, regardez le cashback iGraal, vérifiez les codes
              promo compatibles, puis choisissez l’option la plus rentable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui Widilo est-il adapté ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">
                Acheteurs en ligne
              </h3>
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
                Pour ceux qui comparent les prix, utilisent les codes promo et
                cherchent à optimiser leurs dépenses.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">
                Profils disciplinés
              </h3>
              <p className="mt-3 text-slate-700">
                À condition d’éviter les achats inutiles et de considérer le
                cashback comme une économie bonus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : Widilo est une très bonne plateforme de cashback pour
            économiser sur des achats déjà prévus. Elle est simple à utiliser,
            propose des codes promo, permet de suivre sa cagnotte et peut devenir
            un réflexe utile avant chaque achat en ligne.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Le principal piège est psychologique : il ne faut pas acheter
            davantage sous prétexte de récupérer quelques euros. Le bon usage est
            de comparer les prix, vérifier les conditions, activer le cashback,
            puis finaliser uniquement si l’achat était déjà prévu.
          </p>

          <div className="mt-8">
            <a
              href={WIDILO_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder à Widilo
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">FAQ Widilo</h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "Widilo est-il gratuit ?",
              answer:
                "Oui, l’inscription à Widilo est gratuite. La plateforme se rémunère via ses partenariats avec les marchands et reverse une partie sous forme de cashback.",
            },
            {
              question: "Comment fonctionne le cashback Widilo ?",
              answer:
                "Vous activez le cashback depuis Widilo avant votre achat chez un marchand partenaire. Si la commande est correctement suivie et validée, le cashback est ajouté à votre cagnotte.",
            },
            {
              question: "Quand le cashback Widilo est-il validé ?",
              answer:
                "Le délai dépend du marchand. Le cashback peut rester en attente plusieurs semaines, notamment pendant les délais d’annulation, de retour ou de validation de la commande.",
            },
            {
              question: "À partir de combien peut-on retirer ses gains Widilo ?",
              answer:
                "Widilo indique un seuil de 20 € de gains validés pour demander un paiement. Les retraits peuvent se faire par virement bancaire ou PayPal selon les conditions applicables.",
            },
            {
              question: "Peut-on retirer directement par PayPal ?",
              answer:
                "Selon la FAQ Widilo, le retrait PayPal n’est possible qu’après avoir effectué un premier versement sur un compte bancaire.",
            },
            {
              question: "Le cashback Widilo est-il garanti ?",
              answer:
                "Non. Le cashback peut être refusé si les conditions ne sont pas respectées : code promo non compatible, achat non suivi, annulation, retour produit ou exclusion indiquée par le marchand.",
            },
            {
              question: "Widilo est-il mieux qu’iGraal ?",
              answer:
                "Cela dépend du marchand et de l’offre du moment. Le mieux est de comparer Widilo et iGraal avant chaque achat important, en regardant le taux, les conditions et les codes promo compatibles.",
            },
            {
              question: "Afflizen recommande-t-il Widilo ?",
              answer:
                "Afflizen considère Widilo comme un bon outil de cashback pour optimiser des achats déjà prévus. Il ne faut pas l’utiliser comme prétexte pour acheter davantage.",
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
            et n’influence pas notre volonté de présenter les avantages comme
            les limites de chaque plateforme.
          </p>
        </div>
      </section>
    </main>
  );
}