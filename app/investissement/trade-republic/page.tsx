import Link from "next/link";

const TRADE_REPUBLIC_AFFILIATE_LINK = "https://refnocode.trade.re/dj55hz7z";

export const metadata = {
  title:
    "Trade Republic avis 2026 : frais, ETF, actions, carte et rendement",
  description:
    "Notre avis sur Trade Republic en 2026 : avantages, inconvénients, frais, ETF, actions, carte, intérêt sur espèces, sécurité, FAQ et lien d’inscription.",
};

export default function TradeRepublicPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Plateforme d’investissement
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Trade Republic avis 2026 : une bonne application pour investir ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Trade Republic est une application d’investissement européenne qui
            permet d’acheter des actions, des ETF, des obligations, certaines
            cryptomonnaies et de mettre en place des plans d’investissement
            programmés. Elle se distingue par une interface simple, des frais
            lisibles et une approche orientée investissement régulier.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={TRADE_REPUBLIC_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              S’inscrire sur Trade Republic
            </a>

            <Link
              href="/investissement"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres plateformes d’investissement
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            Investir comporte des risques. La valeur de vos investissements peut
            monter ou baisser, et vous pouvez perdre tout ou partie de votre
            capital. Vérifiez toujours les frais, les conditions et vos
            obligations fiscales avant d’ouvrir un compte.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Très accessible
          </p>
          <p className="mt-3 text-slate-600">
            Une application simple pour investir régulièrement en actions et ETF.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Frais indicatifs
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">1 €</p>
          <p className="mt-3 text-slate-600">
            Par ordre ponctuel, hors spreads, frais tiers ou conditions
            spécifiques. Les plans programmés sont mis en avant comme gratuits.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil idéal
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">Long terme</p>
          <p className="mt-3 text-slate-600">
            Convient surtout aux investisseurs qui veulent automatiser leurs
            investissements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Attention à la fiscalité
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Trade Republic est une plateforme étrangère pour un résident belge,
            français, luxembourgeois ou suisse francophone. Selon votre pays,
            vous pouvez avoir des obligations de déclaration, de taxation des
            revenus, de déclaration de compte étranger ou de déclaration des
            plus-values. Afflizen ne donne pas de conseil fiscal : vérifiez les
            règles officielles dans votre pays ou demandez conseil à un
            professionnel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de Trade Republic
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Interface simple et moderne.</li>
              <li>• Frais lisibles sur les ordres ponctuels.</li>
              <li>• Plans d’investissement programmés très pratiques.</li>
              <li>• Accès aux actions, ETF, obligations et certaines cryptos.</li>
              <li>• Possibilité d’investir à partir de petits montants.</li>
              <li>• Carte Visa Debit disponible selon le pays.</li>
              <li>• Intérêt possible sur les espèces non investies selon conditions.</li>
              <li>• Application adaptée à une stratégie long terme simple.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients de Trade Republic
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Moins complet qu’un courtier avancé comme Interactive Brokers.</li>
              <li>• Choix de places de marché plus limité.</li>
              <li>• Présence possible de spreads ou de frais tiers.</li>
              <li>• Les taux d’intérêt peuvent changer avec le temps.</li>
              <li>• Certaines fonctions varient selon le pays de résidence.</li>
              <li>• Fiscalité à vérifier soi-même selon son pays.</li>
              <li>• Pas idéal pour les traders très actifs ou très techniques.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Frais Trade Republic
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Trade Republic met en avant une tarification simple : les plans
            d’investissement programmés sont proposés sans frais de courtage, et
            les ordres ponctuels coûtent généralement 1 € par transaction. Il
            peut toutefois exister des spreads, des frais tiers ou des coûts
            propres au produit acheté.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Pour un investisseur long terme qui achète régulièrement des ETF ou
            des actions, les plans programmés peuvent donc être particulièrement
            intéressants. Pour un investisseur plus actif, il faut comparer le
            coût réel avec d’autres courtiers, notamment selon la fréquence des
            ordres et les montants investis.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              Trade Republic est surtout intéressant pour investir simplement et
              régulièrement. Avant de passer un ordre, vérifiez toujours le prix,
              les frais affichés, le spread éventuel et les informations du
              produit.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            Trade Republic est une banque et plateforme d’investissement
            européenne. Les espèces peuvent bénéficier d’une protection des
            dépôts selon les conditions applicables, et les titres sont
            généralement conservés séparément des actifs de la société. Ces
            protections sont rassurantes, mais elles ne protègent pas contre les
            pertes liées aux marchés financiers.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              La sécurité d’une plateforme ne remplace pas une bonne stratégie.
              Pour investir correctement, il faut diversifier, limiter les
              risques, comprendre les produits achetés et éviter d’investir de
              l’argent dont vous pourriez avoir besoin rapidement.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Plans d’investissement programmés
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le gros point fort de Trade Republic est la possibilité de mettre en
            place des plans d’investissement programmés. L’idée est simple :
            investir automatiquement un montant régulier dans une action, un ETF
            ou un autre actif disponible, selon une fréquence définie.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Cette approche peut convenir à une stratégie long terme, notamment
            pour les investisseurs qui veulent éviter d’essayer de deviner le
            meilleur moment pour acheter. Elle favorise la régularité, la
            discipline et la simplicité.
          </p>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-semibold text-slate-950">
              Notre avis sur les plans programmés
            </h3>
            <p className="mt-2 text-slate-700">
              Pour Afflizen, c’est l’un des meilleurs usages de Trade Republic :
              choisir un ou plusieurs ETF simples, investir chaque mois et
              garder une vision long terme. Cela reste toutefois un
              investissement risqué, car les marchés peuvent baisser.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Carte Trade Republic et espèces non investies
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Trade Republic propose aussi une carte Visa Debit, avec une carte
            virtuelle gratuite et des cartes physiques selon conditions. La
            plateforme met également en avant une rémunération possible des
            espèces non investies, avec un calcul quotidien et un versement
            mensuel.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Ces éléments peuvent rendre l’application intéressante pour gérer
            une partie de son épargne disponible. Il faut toutefois vérifier le
            taux actuel, le plafond applicable, la fiscalité des intérêts et les
            conditions exactes dans votre pays.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre prudence</h3>
            <p className="mt-2 text-slate-700">
              Ne choisissez pas Trade Republic uniquement pour un taux
              promotionnel. Les taux peuvent changer. L’intérêt principal de la
              plateforme reste surtout l’investissement simple, régulier et peu
              coûteux.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui Trade Republic est-elle adaptée ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">
                Débutants en investissement
              </h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent acheter leurs premiers ETF ou actions
                depuis une application simple.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">
                Investisseurs long terme
              </h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent automatiser un investissement mensuel
                dans des ETF ou des actions.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">
                Profils prudents
              </h3>
              <p className="mt-3 text-slate-700">
                À condition de comprendre la fiscalité, les risques de marché et
                les limites de la plateforme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : Trade Republic est une très bonne application pour
            commencer à investir simplement, surtout si l’objectif est de mettre
            en place des plans programmés sur ETF ou actions. Elle est claire,
            accessible et bien adaptée à une stratégie long terme.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Elle est moins adaptée aux investisseurs très avancés qui veulent
            accéder à de nombreuses places boursières, optimiser chaque détail
            d’exécution ou utiliser des outils professionnels. Pour un profil
            débutant ou intermédiaire, elle peut cependant être une excellente
            porte d’entrée vers l’investissement régulier.
          </p>

          <div className="mt-8">
            <a
              href={TRADE_REPUBLIC_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder à Trade Republic
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">
          FAQ Trade Republic
        </h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "Trade Republic est-elle adaptée aux débutants ?",
              answer:
                "Oui, Trade Republic peut convenir aux débutants grâce à son interface simple et à ses plans d’investissement programmés. Il faut toutefois comprendre les risques liés aux actions, ETF, obligations et cryptos avant d’investir.",
            },
            {
              question: "Quels sont les frais de Trade Republic ?",
              answer:
                "Trade Republic met en avant des plans d’investissement programmés sans frais de courtage et des ordres ponctuels à 1 € par transaction. Des spreads, frais tiers ou coûts liés aux produits peuvent toutefois s’ajouter.",
            },
            {
              question: "Peut-on acheter des ETF avec Trade Republic ?",
              answer:
                "Oui, Trade Republic permet d’investir dans des ETF et de mettre en place des plans programmés. C’est l’un des usages les plus intéressants pour un investisseur long terme.",
            },
            {
              question: "Trade Republic rémunère-t-elle les espèces non investies ?",
              answer:
                "Trade Republic peut proposer une rémunération des espèces non investies selon les conditions en vigueur. Le taux, le plafond et les règles fiscales doivent être vérifiés avant de considérer cette rémunération comme un argument principal.",
            },
            {
              question: "La carte Trade Republic est-elle intéressante ?",
              answer:
                "La carte peut être utile pour certains utilisateurs, notamment avec la carte virtuelle gratuite et les fonctionnalités associées. Les conditions, limites et avantages doivent cependant être vérifiés directement sur Trade Republic.",
            },
            {
              question: "Trade Republic est-elle suffisante pour un investisseur avancé ?",
              answer:
                "Pas toujours. Trade Republic est très pratique pour investir simplement, mais un investisseur avancé peut préférer un courtier plus complet comme Interactive Brokers ou DEGIRO selon ses besoins.",
            },
            {
              question: "Afflizen recommande-t-il Trade Republic ?",
              answer:
                "Afflizen considère Trade Republic comme une bonne solution pour commencer à investir simplement et régulièrement. Elle convient surtout aux profils débutants ou intermédiaires qui veulent construire une stratégie long terme.",
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