import Link from "next/link";

const N26_LINK = "https://n26.com/en-be";

export const metadata = {
  title: "N26 avis 2026 : frais, carte, compte gratuit et sécurité",
  description:
    "Notre avis sur N26 en 2026 : avantages, inconvénients, frais, carte bancaire, compte gratuit, épargne, sécurité, FAQ et inscription.",
};

export default function N26Page() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Banque en ligne
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            N26 avis 2026 : une bonne banque en ligne pour gérer son argent ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            N26 est une banque mobile européenne qui permet d’ouvrir un compte
            bancaire depuis son smartphone, d’obtenir une carte, de gérer ses
            paiements, de suivre ses dépenses et d’utiliser plusieurs outils de
            gestion budgétaire. Cette page résume les avantages, les limites, les
            frais, la sécurité et notre avis Afflizen.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={N26_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              Découvrir N26
            </a>

            <Link
              href="/banques-en-ligne"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Voir les autres banques en ligne
            </Link>
          </div>

          <p className="mt-4 max-w-3xl text-sm text-slate-500">
            Les frais, les plafonds, les taux et les avantages peuvent évoluer.
            Vérifiez toujours les conditions officielles N26 dans votre pays
            avant d’ouvrir un compte ou de choisir une formule payante.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Notre avis
          </p>
          <p className="mt-3 text-3xl font-bold text-emerald-600">
            Simple et mobile
          </p>
          <p className="mt-3 text-slate-600">
            Une banque en ligne claire, pratique et bien adaptée à un usage
            quotidien depuis smartphone.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Plan Standard
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">0 €/mois</p>
          <p className="mt-3 text-slate-600">
            Le compte gratuit permet d’utiliser les fonctions bancaires
            essentielles avec certaines limites.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil idéal
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">Mobile</p>
          <p className="mt-3 text-slate-600">
            Convient surtout aux utilisateurs qui veulent gérer leur argent
            simplement depuis une application.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Attention au compte étranger et à la fiscalité
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Selon votre pays de résidence, un compte N26 peut devoir être
            déclaré comme compte étranger. Pour un résident belge ou français,
            c’est un point important à vérifier. Les intérêts éventuels peuvent
            aussi être soumis à déclaration fiscale. Afflizen ne donne pas de
            conseil fiscal : vérifiez les règles officielles dans votre pays ou
            demandez conseil à un professionnel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de N26
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Application mobile simple, moderne et agréable.</li>
              <li>• Plan Standard gratuit disponible.</li>
              <li>• Ouverture de compte rapide depuis smartphone.</li>
              <li>• Carte virtuelle incluse avec le compte Standard.</li>
              <li>• Paiements gratuits dans le monde selon les conditions du plan.</li>
              <li>• Outils de suivi des dépenses et de gestion du budget.</li>
              <li>• Sous-comptes, espaces et outils avancés selon la formule choisie.</li>
              <li>• Dépôts éligibles protégés jusqu’à 100 000 € selon conditions.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients de N26
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Certaines fonctions intéressantes sont réservées aux plans payants.</li>
              <li>• Les retraits gratuits sont limités selon le plan.</li>
              <li>• La carte physique peut entraîner des frais selon la formule.</li>
              <li>• Support client parfois moins humain qu’une banque traditionnelle.</li>
              <li>• Moins adapté aux besoins bancaires complexes.</li>
              <li>• Compte étranger potentiellement à déclarer selon le pays.</li>
              <li>• Les taux d’épargne et avantages peuvent évoluer avec le temps.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Frais N26</h2>

          <p className="mt-5 leading-8 text-slate-700">
            N26 propose plusieurs formules. Le compte N26 Standard est gratuit.
            Les formules payantes ajoutent progressivement plus d’outils, plus
            de retraits gratuits, des fonctionnalités de gestion budgétaire et
            certains avantages liés au voyage ou aux assurances.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            En Belgique, N26 met en avant les formules Standard à 0 €/mois,
            Smart à 4,90 €/mois, Go à 9,90 €/mois et Metal à 16,90 €/mois. Les
            retraits gratuits varient selon la formule : le plan Standard
            indique jusqu’à 2 retraits domestiques gratuits, tandis que les
            formules supérieures augmentent ces limites.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Des frais peuvent apparaître selon l’usage : retraits supplémentaires,
            carte physique, services premium, change, paiements spécifiques ou
            opérations hors conditions standards. Il faut donc vérifier la grille
            tarifaire officielle avant de choisir une formule.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              N26 est intéressant pour un usage mobile simple. Le plan gratuit
              suffit à beaucoup d’utilisateurs, mais les plans payants deviennent
              intéressants si vous utilisez vraiment les outils de budget, les
              retraits supplémentaires ou les avantages voyage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            N26 est une banque allemande disposant d’une licence bancaire
            complète. Les dépôts éligibles peuvent être protégés jusqu’à
            100 000 € par déposant via le système allemand de garantie des
            dépôts, selon les conditions applicables.
          </p>

          <p className="mt-5 leading-8 text-slate-200">
            L’application met aussi en avant plusieurs fonctions de sécurité :
            authentification biométrique, 3D Secure, association du compte à un
            appareil, notifications en temps réel et possibilité de gérer
            certaines limites depuis l’application.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              Une banque mobile peut être très pratique, mais il faut toujours
              garder une bonne hygiène de sécurité : code fort, téléphone
              protégé, authentification activée, vigilance contre le phishing et
              suivi régulier des transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            N26 Standard, Smart, Go ou Metal ?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Le plan Standard convient aux utilisateurs qui veulent un compte
            mobile simple et gratuit. Il permet de gérer les paiements, la carte
            virtuelle, les virements et les fonctions bancaires essentielles.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Les plans Smart, Go et Metal ajoutent des avantages : plus d’outils
            de gestion, plus de retraits gratuits, fonctionnalités de voyage,
            assurances ou services premium selon la formule. Avant de payer un
            abonnement, il faut vérifier si les avantages compensent vraiment le
            coût mensuel.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre prudence</h3>
            <p className="mt-2 text-slate-700">
              Ne choisissez pas une formule payante uniquement pour le côté
              premium. Comparez le prix mensuel avec vos besoins réels :
              retraits, voyages, assurances, outils de budget et support.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            N26 Instant Savings
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            N26 propose aussi un compte d’épargne instantané dans certains pays,
            dont la Belgique sous conditions. Le taux dépend de la formule
            choisie et peut évoluer à tout moment. Les intérêts sont calculés
            selon les conditions indiquées par N26.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Pour un résident belge, N26 indique que le compte d’épargne est fourni
            sous droit allemand et que les taxes ne sont pas retenues
            automatiquement. La déclaration et le paiement des taxes doivent donc
            être gérés par le client selon les règles belges.
          </p>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-semibold text-slate-950">
              Notre avis sur l’épargne N26
            </h3>
            <p className="mt-2 text-slate-700">
              L’épargne N26 peut être pratique pour garder une réserve disponible,
              mais elle ne doit pas être choisie uniquement pour un taux affiché.
              Vérifiez le taux actuel, la fiscalité, la protection applicable et
              les alternatives disponibles dans votre pays.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui N26 est-elle adaptée ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">Utilisateurs mobiles</h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent gérer leur argent depuis une application
                claire, rapide et moderne.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">Voyageurs occasionnels</h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent une carte pratique, des paiements simples
                et des formules plus complètes selon leurs besoins.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">Profils prudents</h3>
              <p className="mt-3 text-slate-700">
                À condition de vérifier les frais, la fiscalité, les retraits et
                les limites du plan choisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : N26 est une bonne banque mobile pour les utilisateurs
            qui veulent une application simple, moderne et efficace. Elle peut
            convenir comme compte principal pour certains profils, ou comme
            compte secondaire pour gérer un budget, voyager ou séparer certaines
            dépenses.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            N26 est moins adaptée aux utilisateurs qui veulent une relation
            bancaire traditionnelle, une agence physique ou des services très
            complets. Pour un usage mobile, simple et quotidien, elle reste une
            alternative intéressante à comparer avec Revolut, Wise, Nickel,
            Bunq ou une banque en ligne classique.
          </p>

          <div className="mt-8">
            <a
              href={N26_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Découvrir N26
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Cette page ne contient pas encore de lien d’affiliation N26. Le lien
            sera ajouté plus tard si Afflizen obtient un lien ou un code de
            parrainage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">FAQ N26</h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "N26 est-elle gratuite ?",
              answer:
                "Oui, N26 propose un compte Standard gratuit. Des formules payantes existent aussi avec plus de fonctionnalités, plus de retraits gratuits ou des avantages supplémentaires selon le pays.",
            },
            {
              question: "Quels sont les frais de N26 ?",
              answer:
                "Les frais dépendent du plan choisi et de l’usage. Le plan Standard est gratuit, tandis que les plans Smart, Go et Metal sont payants. Des frais peuvent s’appliquer pour certains retraits, cartes, services ou opérations spécifiques.",
            },
            {
              question: "N26 est-elle disponible en Belgique ?",
              answer:
                "Oui, N26 propose ses services en Belgique. Les conditions exactes, les frais, les plans et les produits disponibles doivent toutefois être vérifiés directement sur le site officiel de N26.",
            },
            {
              question: "Les dépôts N26 sont-ils protégés ?",
              answer:
                "Les dépôts éligibles auprès de N26 peuvent être protégés jusqu’à 100 000 € par déposant via le système allemand de garantie des dépôts, selon les conditions applicables.",
            },
            {
              question: "Faut-il déclarer son compte N26 ?",
              answer:
                "Selon votre pays de résidence, un compte N26 peut devoir être déclaré comme compte étranger. Les résidents belges et français doivent vérifier les obligations applicables auprès des autorités fiscales officielles.",
            },
            {
              question: "N26 peut-elle remplacer une banque classique ?",
              answer:
                "Pour certains utilisateurs, oui. Pour d’autres, N26 sera plutôt un compte secondaire ou une application complémentaire. Cela dépend des besoins : salaire, crédit, épargne, support, services bancaires et fiscalité.",
            },
            {
              question: "Afflizen recommande-t-il N26 ?",
              answer:
                "Afflizen considère N26 comme une bonne banque mobile pour un usage simple, quotidien et digital. Elle doit toutefois être comparée à Revolut, Wise, Bunq ou une banque traditionnelle selon les besoins.",
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
            Cette page N26 ne contient pas encore de lien d’affiliation. Certains
            autres liens présents sur Afflizen peuvent être des liens
            d’affiliation. Cela signifie que nous pouvons recevoir une commission
            si vous ouvrez un compte via notre lien, sans coût supplémentaire
            pour vous. Cette rémunération aide à financer le site et n’influence
            pas notre volonté de présenter les avantages comme les limites de
            chaque plateforme.
          </p>
        </div>
      </section>
    </main>
  );
}