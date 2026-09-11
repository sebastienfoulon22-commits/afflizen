import { createPageMetadata } from "@/lib/metadata";
import AffiliateButton from "../../../components/AffiliateButton";

const EBUYCLUB_AFFILIATE_LINK =
  "https://www.ebuyclub.com/inscription?parrain=docfox22";

export const metadata = createPageMetadata({
  title: "eBuyClub : cashback, parrainage et avis",
  description: "Découvrez eBuyClub, une plateforme de cashback pour économiser sur vos achats en ligne, en magasin et via bons d’achat. Avis, fonctionnement, avantages et lien de parrainage.",
  path: "/cashback/ebuyclub",
  type: "article",
});

const highlights = [
  "Cashback sur de nombreux achats du quotidien",
  "Possibilité d’utiliser le service en ligne, en magasin ou via bons d’achat selon les offres disponibles",
  "Plateforme intéressante pour récupérer une partie de ses dépenses habituelles",
  "Programme de parrainage disponible",
];

const steps = [
  {
    title: "Créer un compte eBuyClub",
    description:
      "L’inscription permet d’accéder aux offres de cashback, aux marchands partenaires et aux éventuelles offres de bienvenue disponibles au moment de l’inscription.",
  },
  {
    title: "Passer par eBuyClub avant d’acheter",
    description:
      "Avant de commander chez un marchand partenaire, il faut activer l’offre depuis eBuyClub afin que l’achat puisse être suivi correctement.",
  },
  {
    title: "Attendre la validation du cashback",
    description:
      "Le cashback apparaît généralement dans la cagnotte après l’achat, puis il doit être validé selon les règles du marchand partenaire.",
  },
  {
    title: "Demander le paiement",
    description:
      "Une fois les conditions remplies, l’utilisateur peut récupérer ses gains selon les moyens de paiement proposés par eBuyClub.",
  },
];

const pros = [
  "Service simple à comprendre pour les achats du quotidien",
  "Peut permettre de récupérer de l’argent sur des dépenses déjà prévues",
  "Compatible avec plusieurs types d’achats selon les marchands",
  "Intéressant à combiner avec d’autres bons plans lorsque les conditions le permettent",
];

const cons = [
  "Les taux de cashback changent selon les marchands et les périodes",
  "Le cashback peut être refusé si les conditions ne sont pas respectées",
  "La validation peut prendre du temps selon les enseignes",
  "Il faut penser à passer par eBuyClub avant l’achat",
];

export default function EbuyclubPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Cashback
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            eBuyClub : cashback, bons plans et parrainage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            eBuyClub est une plateforme de cashback qui permet de récupérer une
            partie de ses achats chez des marchands partenaires. C’est une
            solution intéressante pour les utilisateurs qui veulent économiser
            sur leurs achats en ligne, certains achats en magasin ou des bons
            d’achat selon les offres disponibles.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AffiliateButton
              href={EBUYCLUB_AFFILIATE_LINK}
              platform="ebuyclub"
              category="cashback"
              location="hero"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              S’inscrire sur eBuyClub
            </AffiliateButton>

            <a
              href="/cashback"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres sites cashback
            </a>
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-6 text-slate-500">
            Ce lien est un lien personnel de parrainage. Afflizen peut recevoir un bonus ou un avantage si vous vous inscrivez et remplissez les conditions du programme, sans coût supplémentaire pour vous.
          </p>
        </div>
      </section>



      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold leading-6 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold text-emerald-400">
            Fonctionnement
          </p>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold">
            Comment utiliser eBuyClub pour récupérer du cashback ?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold text-emerald-400">
                  Étape {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-emerald-600">
              Points forts
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Pourquoi eBuyClub peut être intéressant
            </h2>

            <ul className="mt-6 space-y-4">
              {pros.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <p className="text-sm font-semibold text-amber-700">
              Points à vérifier
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Ce qu’il faut contrôler avant d’acheter
            </h2>

            <ul className="mt-6 space-y-4">
              {cons.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Inscription : 3 € de bienvenue et parrain docfox22</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Le lien de cette fiche conserve le parrain docfox22 dans le formulaire officiel.
            Vérifiez sa présence avant de créer votre compte. Les CGU eBuyClub consultées le 11
            septembre 2026 prévoient un bonus d’inscription standard de 3 €, crédité et validé dès
            l’inscription, selon les conditions en vigueur.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Ce crédit de bienvenue n’est pas un retrait immédiat : le paiement de la cagnotte
            nécessite au moins 10 € validés. Les offres spéciales d’autres partenaires ne sont pas
            reprises ici, car elles ne prouvent pas un avantage supplémentaire pour ce lien
            personnel.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            L’inscription est réservée aux personnes majeures, avec un seul compte par personne. Le
            programme limite le parrainage à un filleul majeur par foyer. Renseignez des
            informations exactes : eBuyClub peut vérifier le respect des conditions.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            La récompense du parrain dépend d’achats éligibles du filleul. Elle est distincte des 3
            € de bienvenue du nouvel inscrit : les seuils d’achat du programme ne doivent pas être
            confondus avec une condition de ce crédit initial. Aucun bonus supplémentaire non
            confirmé n’est promis au lecteur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Activation, suivi et validation : les bons réflexes</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Connectez-vous, ouvrez la fiche du marchand et lisez les exclusions avant de cliquer
            pour activer le cashback. Terminez l’achat dans la page marchande ouverte. Les bloqueurs
            empêchant les cookies de suivi et un passage par un autre comparateur peuvent
            compromettre l’attribution.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Sur mobile, distinguez le site du marchand de son application : le suivi d’une commande
            basculée dans l’application marchande n’est pas garanti. L’application eBuyClub et
            l’extension navigateur aident à trouver les offres ; elles ne rendent pas tous les
            achats éligibles.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Le marchand doit confirmer une commande payée et non annulée. Le suivi puis la
            validation sont deux étapes différentes. Un retour, une exclusion produit ou un code
            promotionnel non cumulable peuvent entraîner un refus. N’utilisez un code que si sa
            compatibilité avec le cashback est indiquée.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Conservez la facture, la date d’activation et les références de commande. Si le cashback
            manque, consultez l’aide depuis votre compte rapidement : les réclamations sont
            encadrées par des délais et nécessitent des justificatifs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Retirer sa cagnotte et choisir son moyen de paiement</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Le retrait est possible dès 10 € de gains validés. eBuyClub présente le virement
            bancaire, PayPal, les chèques cadeaux Amazon.fr et les eBuyCards, selon les options
            proposées dans le compte. Vérifiez les conditions du support choisi avant de convertir
            votre cagnotte.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            La demande doit être vérifiée par eBuyClub. Les CGU annoncent un paiement sous 15 jours,
            hors acheminement éventuel ; ce délai commence avec la demande de paiement et ne
            remplace pas l’attente de validation des achats.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Renseignez des coordonnées exactes dans la rubrique de paiement. Consultez aussi les
            règles d’inactivité : les CGU prévoient des conséquences sur la cagnotte et le compte
            après une période prolongée sans achat. Ne laissez pas des gains oubliés sans relire ces
            conditions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Bons d’achat, achats en magasin et disponibilité</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Un bon d’achat s’achète avant son utilisation auprès de l’enseigne. Vérifiez sa date de
            validité, ses restrictions, les lieux d’acceptation et son éventuel cumul avec une
            promotion. Un bon n’est pas équivalent à du cash librement remboursable.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Les offres en magasin peuvent avoir une procédure différente du cashback en ligne :
            activation, justificatif ou achat de bon selon l’offre. Suivez le parcours affiché
            plutôt que d’appliquer automatiquement la méthode d’un achat sur le web.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            La présence de marchands belges ne garantit pas que tous les services, bonus ou
            paiements soient accessibles à chaque résident belge. Pour la France comme pour la
            Belgique, vérifiez votre résidence, la livraison et les conditions de l’enseigne. Nous
            ne promettons pas une éligibilité universelle.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Questions fréquentes sur eBuyClub</h2>
          <p className="mt-5 leading-8 text-slate-700">
            Puis-je retirer uniquement les 3 € de bienvenue ? Non : il faut atteindre le seuil de 10
            € de gains validés. Un montant en attente ne suffit pas.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Le code docfox22 procure-t-il un bonus supplémentaire garanti ? La présence du parrain
            est confirmée, mais aucun supplément chiffré au bonus standard n’est promis ici.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Puis-je cumuler un code promo avec le cashback ? Seulement lorsque l’offre l’autorise.
            Un code trouvé ailleurs peut rendre la commande inéligible.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Pourquoi le cashback tarde-t-il ? Le marchand doit contrôler la commande et les
            éventuels retours. Un délai de suivi, un délai de validation et un délai de paiement
            sont trois choses distinctes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-emerald-600">
            Avis Afflizen
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Notre avis sur eBuyClub
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            eBuyClub peut être une bonne option pour les personnes qui achètent
            régulièrement en ligne ou qui souhaitent optimiser certaines
            dépenses du quotidien. Le service est surtout intéressant si l’on
            prend l’habitude de vérifier les offres disponibles avant chaque
            achat important.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Comme pour toutes les plateformes de cashback, il ne faut pas
            acheter uniquement pour obtenir une récompense. Le cashback doit
            rester un bonus sur une dépense déjà prévue, pas une raison de
            consommer davantage.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AffiliateButton
              href={EBUYCLUB_AFFILIATE_LINK}
              platform="ebuyclub"
              category="cashback"
              location="avis"
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Découvrir eBuyClub
            </AffiliateButton>

            <a
              href="/cashback/igraal"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Comparer avec iGraal
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs leading-6 text-slate-500">
            Cette page est une fiche d’information indépendante. Le lien personnel peut procurer à Afflizen un avantage de parrainage sous conditions ; il ne s’agit pas d’une affiliation professionnelle annoncée. Les offres, taux de cashback, conditions de
            parrainage et modalités de paiement peuvent changer à tout moment.
            Consultez toujours les conditions officielles d’eBuyClub avant toute
            inscription ou utilisation.
          </p>
        </div>
      </section>
    </main>
  );
}