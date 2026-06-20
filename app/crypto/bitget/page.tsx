import Link from "next/link";

const BITGET_AFFILIATE_LINK =
  "https://www.bitgetapp.com/fr/referral/register?clacCode=2YMT39ZH&from=%2Ffr%2Fevents%2Freferral-all-program&source=events&utmSource=PremierInviter";

export const metadata = {
  title: "Bitget avis 2026 : frais, sécurité, copy trading et inconvénients",
  description:
    "Notre avis sur Bitget en 2026 : avantages, inconvénients, frais, sécurité, copy trading, disponibilité, FAQ et lien d’inscription.",
};

export default function BitgetPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Plateforme crypto
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Bitget avis 2026 : une plateforme crypto intéressante ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Bitget est une plateforme crypto connue pour ses frais compétitifs,
            son application mobile, ses outils de trading et ses fonctionnalités
            de copy trading. Elle peut convenir aux utilisateurs qui veulent
            aller plus loin qu’un simple achat de Bitcoin ou d’Ethereum, mais
            elle demande aussi une certaine prudence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={BITGET_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              S’inscrire sur Bitget
            </a>

            <Link
              href="/crypto"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes crypto
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            Les cryptoactifs sont volatils. Vous pouvez perdre tout ou partie de
            votre capital. Vérifiez toujours la disponibilité, les frais, la
            réglementation et les conditions applicables dans votre pays avant
            de vous inscrire.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Très orientée trading
          </p>
          <p className="mt-3 text-slate-600">
            Une plateforme complète, surtout intéressante pour les utilisateurs
            actifs.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Frais spot indicatifs
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">0,10 %</p>
          <p className="mt-3 text-slate-600">
            Frais de base indicatifs pour le trading spot, hors promotions,
            réductions ou conditions spécifiques.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil idéal
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">Actif</p>
          <p className="mt-3 text-slate-600">
            Plutôt adaptée aux utilisateurs qui veulent trader, comparer ou
            utiliser plusieurs outils crypto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Attention à la disponibilité selon votre pays
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            La disponibilité de Bitget peut varier selon le pays et la situation
            réglementaire. En particulier, Bitget a communiqué une suspension de
            ses services pour les utilisateurs résidant en France. Avant toute
            inscription, vérifiez que la plateforme accepte bien les résidents
            de votre pays et que les services souhaités sont accessibles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de Bitget
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Frais de trading généralement compétitifs.</li>
              <li>• Plateforme complète pour le trading crypto.</li>
              <li>• Fonctionnalités de copy trading populaires.</li>
              <li>• Application mobile moderne et assez complète.</li>
              <li>• Large choix de cryptomonnaies et de paires de trading.</li>
              <li>• Outils avancés pour les utilisateurs plus expérimentés.</li>
              <li>• Preuve de réserves et fonds de protection mis en avant par la plateforme.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients de Bitget
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Moins adaptée à un débutant qui veut simplement acheter quelques cryptos.</li>
              <li>• Le copy trading peut donner une fausse impression de simplicité.</li>
              <li>• Certains produits sont risqués, notamment le trading avec effet de levier.</li>
              <li>• La disponibilité peut varier selon le pays.</li>
              <li>• Contexte réglementaire européen à surveiller.</li>
              <li>• Il faut bien comprendre les frais avant d’utiliser les fonctions avancées.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Frais Bitget</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Bitget affiche des frais de base compétitifs sur le trading spot.
            À titre indicatif, les frais spot standards sont généralement de
            0,10 % maker et 0,10 % taker, hors promotions, réductions, niveau
            VIP ou conditions spécifiques.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Les frais peuvent varier selon le produit utilisé : achat direct,
            trading spot, futures, conversion, retrait crypto, paiement par
            carte ou promotion temporaire. Avant d’utiliser Bitget, il est donc
            préférable de consulter la grille tarifaire officielle.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              Bitget peut être intéressant pour les frais, mais le coût réel
              dépend toujours de votre usage. Un achat simple par carte, un
              retrait crypto ou une opération avec effet de levier ne coûtent
              pas forcément la même chose qu’un simple ordre spot.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            Bitget met en avant plusieurs éléments de sécurité : vérification
            d’identité, authentification à deux facteurs, preuve de réserves,
            surveillance des risques et fonds de protection. Ces éléments sont
            rassurants, mais ils ne suppriment pas les risques liés aux
            plateformes centralisées.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              Pour de gros montants ou une conservation long terme, il reste
              préférable d’apprendre à utiliser un wallet personnel ou un wallet
              matériel. Une plateforme d’échange est pratique pour acheter,
              vendre ou trader, mais ce n’est pas forcément l’endroit idéal pour
              conserver tout son capital crypto.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Le copy trading sur Bitget
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Bitget est particulièrement connue pour ses fonctions de copy
            trading. Le principe est simple : l’utilisateur peut copier les
            positions d’un trader sélectionné. C’est attractif sur le papier,
            mais cela ne garantit aucun résultat.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Copier un trader ne signifie pas supprimer le risque. Une stratégie
            rentable dans le passé peut devenir perdante, surtout en crypto où
            les marchés sont très volatils. Le copy trading doit donc rester une
            option à utiliser avec prudence, sur des montants limités.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <h3 className="font-semibold text-slate-950">
              Notre prudence
            </h3>
            <p className="mt-2 text-slate-700">
              Afflizen ne recommande pas de copier aveuglément un trader. Avant
              d’utiliser cette fonction, regardez l’historique, le niveau de
              risque, les pertes maximales, la régularité et la taille des
              positions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui Bitget est-elle adaptée ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">Utilisateurs actifs</h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent trader régulièrement, comparer des paires
                crypto ou utiliser des outils plus avancés.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">Curieux du copy trading</h3>
              <p className="mt-3 text-slate-700">
                Pour les utilisateurs qui veulent tester le copy trading, à
                condition de bien comprendre les risques.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">Profils prudents</h3>
              <p className="mt-3 text-slate-700">
                À condition d’éviter l’effet de levier, de limiter les montants
                et d’activer toutes les options de sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : Bitget est une plateforme crypto intéressante pour les
            utilisateurs qui veulent accéder à des frais compétitifs, à des
            outils de trading avancés et au copy trading. Elle peut être utile
            pour un profil actif, mais elle n’est pas forcément le meilleur
            choix pour un débutant absolu.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Pour un utilisateur belge, luxembourgeois ou suisse francophone,
            Bitget peut être une option à comparer avec Binance, Kraken,
            Coinbase ou Crypto.com, à condition que les services soient bien
            disponibles dans son pays. Pour un résident français, la situation
            doit être vérifiée avec une grande prudence en raison de la
            suspension annoncée par Bitget.
          </p>

          <div className="mt-8">
            <a
              href={BITGET_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder à Bitget
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">FAQ Bitget</h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "Bitget est-elle adaptée aux débutants ?",
              answer:
                "Bitget peut convenir à un débutant motivé, mais la plateforme est surtout pensée pour des utilisateurs actifs. Pour un premier achat crypto très simple, une application plus minimaliste peut être plus confortable.",
            },
            {
              question: "Quels sont les frais de Bitget ?",
              answer:
                "Les frais spot standards sont généralement compétitifs, autour de 0,10 % maker et 0,10 % taker à titre indicatif. Ils peuvent varier selon les promotions, le niveau VIP, les produits utilisés et les méthodes de paiement.",
            },
            {
              question: "Bitget est-elle disponible en France ?",
              answer:
                "Bitget a annoncé une suspension de ses services pour les utilisateurs résidant en France. Les résidents français doivent donc vérifier la situation officielle avant toute tentative d’inscription ou d’utilisation.",
            },
            {
              question: "Le copy trading Bitget est-il sans risque ?",
              answer:
                "Non. Le copy trading reste risqué. Copier un trader ne garantit aucun résultat et peut entraîner des pertes importantes, surtout sur les marchés crypto.",
            },
            {
              question: "Peut-on laisser ses cryptos sur Bitget ?",
              answer:
                "C’est possible, mais ce n’est pas toujours idéal pour de gros montants ou une conservation long terme. Pour conserver des cryptos sur la durée, un wallet personnel ou matériel reste souvent préférable.",
            },
            {
              question: "Afflizen recommande-t-il Bitget ?",
              answer:
                "Afflizen considère Bitget comme une plateforme intéressante pour les profils actifs, mais recommande de rester prudent avec le copy trading, l’effet de levier et la disponibilité réglementaire selon le pays.",
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
            d’affiliation. Cela signifie que nous pouvons recevoir une
            commission si vous ouvrez un compte via notre lien, sans coût
            supplémentaire pour vous. Cette rémunération aide à financer le site
            et n’influence pas notre volonté de présenter les avantages comme
            les limites de chaque plateforme.
          </p>
        </div>
      </section>
    </main>
  );
}