import Link from "next/link";

const REVOLUT_AFFILIATE_LINK =
  "https://revolut.com/referral/?referral-code=sebast23u!JUN1-26-AR-H1&geo-redirect";

export const metadata = {
  title: "Revolut avis 2026 : frais, carte, compte, change et sécurité",
  description:
    "Notre avis sur Revolut en 2026 : avantages, inconvénients, frais, carte bancaire, change, sécurité, compte étranger, FAQ et lien d’inscription.",
};

export default function RevolutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">
            Banque en ligne
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Revolut avis 2026 : une bonne banque en ligne pour gérer son argent ?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Revolut est une application financière très populaire qui permet de
            gérer un compte, une carte, des virements, des paiements à
            l’étranger, du change de devises et plusieurs services financiers
            depuis une seule interface. Cette page résume les avantages, les
            limites, les frais, la sécurité et notre avis Afflizen.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={REVOLUT_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="rounded-full bg-emerald-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-700"
            >
              S’inscrire sur Revolut
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
            Vérifiez toujours les conditions officielles Revolut dans votre pays
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
            Très pratique
          </p>
          <p className="mt-3 text-slate-600">
            Une application complète pour gérer son argent au quotidien et à
            l’étranger.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Plan Standard
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">0 €/mois</p>
          <p className="mt-3 text-slate-600">
            Le plan gratuit permet déjà de profiter des fonctions principales,
            avec certaines limites.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Profil idéal
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">Voyageur</p>
          <p className="mt-3 text-slate-600">
            Convient surtout aux utilisateurs qui veulent une app moderne, une
            carte pratique et du change facile.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Attention au compte étranger et à la fiscalité
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Selon votre pays de résidence, un compte Revolut peut devoir être
            déclaré comme compte étranger. C’est particulièrement important pour
            les résidents belges ou français. Afflizen ne donne pas de conseil
            fiscal : vérifiez les règles officielles dans votre pays ou demandez
            conseil à un professionnel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Avantages de Revolut
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Application mobile très simple et moderne.</li>
              <li>• Plan Standard gratuit disponible.</li>
              <li>• Carte pratique pour les paiements du quotidien.</li>
              <li>• Très utile pour voyager et payer dans plusieurs devises.</li>
              <li>• Virements SEPA simples depuis l’application.</li>
              <li>• Cartes virtuelles gratuites selon les conditions du plan.</li>
              <li>• Possibilité de passer à des plans payants avec plus d’avantages.</li>
              <li>• Dépôts éligibles protégés jusqu’à 100 000 € selon conditions.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-100 bg-amber-50 p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              Inconvénients de Revolut
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Certains frais apparaissent au-delà des limites du plan.</li>
              <li>• Les retraits gratuits sont plafonnés sur le plan Standard.</li>
              <li>• Le change gratuit est limité selon le plan et le moment de l’opération.</li>
              <li>• Les avantages des plans payants doivent être rentabilisés.</li>
              <li>• Le support peut être moins humain qu’une banque traditionnelle.</li>
              <li>• La fiscalité et la déclaration du compte peuvent dépendre du pays.</li>
              <li>• Tous les services financiers ne sont pas disponibles partout.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Frais Revolut</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Revolut propose un plan Standard gratuit, ainsi que plusieurs plans
            payants comme Plus, Premium, Metal et Ultra. Les frais dépendent du
            plan choisi, du type d’opération et du pays de résidence.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Sur le plan Standard en Belgique, Revolut indique notamment des
            retraits gratuits jusqu’à 5 retraits ou 200 € par mois, selon la
            limite atteinte en premier. Au-delà, des frais de 2 % avec un minimum
            de 1 € peuvent s’appliquer.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Pour le change de devises, Revolut peut appliquer des limites selon
            le plan. Sur le plan Standard, une limite mensuelle de change sans
            frais supplémentaires peut s’appliquer en semaine, avec des frais
            possibles au-delà ou pendant le week-end.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-950">À retenir</h3>
            <p className="mt-2 text-slate-700">
              Revolut est très intéressant pour un usage simple, mobile et
              international. Mais il faut surveiller les plafonds, les retraits,
              le change de devises, les week-ends et les conditions des plans
              payants.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-3xl font-bold">Sécurité</h2>

          <p className="mt-5 leading-8 text-slate-200">
            Revolut Bank UAB est une banque européenne. Les dépôts éligibles
            peuvent être protégés jusqu’à 100 000 € par déposant via le système
            lituanien de garantie des dépôts, selon les conditions applicables.
            Cette protection ne couvre pas tous les produits financiers et ne
            protège pas contre les pertes liées aux investissements.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-emerald-300">Règle Afflizen</p>
            <p className="mt-2 text-slate-200">
              Revolut peut être très pratique pour gérer son argent au quotidien,
              voyager ou séparer certains budgets. Pour une épargne importante
              ou des investissements complexes, il faut comprendre précisément
              où est placé l’argent, quelle protection s’applique et quels frais
              peuvent intervenir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Revolut pour voyager
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Revolut est particulièrement appréciée par les voyageurs. L’app
            permet de payer dans plusieurs devises, de suivre ses dépenses, de
            créer des cartes virtuelles et de gérer son budget depuis le
            téléphone.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Le vrai avantage dépend toutefois de votre usage. Si vous retirez
            beaucoup d’espèces, changez souvent de devise le week-end ou dépassez
            les plafonds du plan gratuit, des frais peuvent apparaître. Pour un
            voyageur régulier, un plan payant peut parfois être plus adapté.
          </p>

          <div className="mt-6 rounded-2xl bg-emerald-50 p-6">
            <h3 className="font-semibold text-slate-950">
              Notre avis voyage
            </h3>
            <p className="mt-2 text-slate-700">
              Pour Afflizen, Revolut est l’une des applications les plus
              pratiques pour voyager, à condition de connaître ses limites :
              retraits, change de devises, week-end, assurance et conditions du
              plan choisi.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Plans Revolut : Standard, Plus, Premium, Metal, Ultra
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Revolut propose plusieurs formules. Le plan Standard est gratuit et
            couvre les besoins de base. Les plans Plus, Premium, Metal et Ultra
            ajoutent progressivement des avantages : plafonds plus élevés,
            assurances, cartes spécifiques, avantages voyage, support ou
            services supplémentaires selon le pays.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Avant de payer un abonnement, il faut comparer le prix mensuel avec
            votre usage réel. Un plan payant n’est intéressant que si vous
            utilisez vraiment les avantages inclus.
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <h3 className="font-semibold text-slate-950">Notre prudence</h3>
            <p className="mt-2 text-slate-700">
              Ne choisissez pas un plan payant uniquement parce qu’il semble plus
              premium. Vérifiez les frais, les assurances, les plafonds et les
              avantages réellement utiles pour vous.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            Pour qui Revolut est-elle adaptée ?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="font-bold text-slate-950">Voyageurs</h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui paient souvent à l’étranger, changent des devises
                ou veulent une carte pratique en voyage.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">
                Utilisateurs mobiles
              </h3>
              <p className="mt-3 text-slate-700">
                Pour ceux qui veulent gérer leur argent depuis une application
                claire, rapide et moderne.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="font-bold text-slate-950">Profils prudents</h3>
              <p className="mt-3 text-slate-700">
                À condition de surveiller les plafonds, les frais, la fiscalité
                et les conditions du plan choisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Avis Afflizen</h2>

          <p className="mt-5 leading-8 text-slate-700">
            Notre avis : Revolut est une excellente application pour gérer son
            argent de manière simple, mobile et internationale. Elle est
            particulièrement intéressante pour les paiements à l’étranger, les
            cartes virtuelles, le suivi des dépenses et les utilisateurs qui
            veulent une alternative moderne à une banque traditionnelle.
          </p>

          <p className="mt-5 leading-8 text-slate-700">
            Elle ne remplace pas forcément une banque principale pour tout le
            monde. Pour certains profils, Revolut sera parfaite comme compte
            secondaire, compte voyage ou app de gestion quotidienne. Pour une
            utilisation bancaire complète, il faut comparer avec N26, Wise, une
            banque en ligne classique ou votre banque actuelle.
          </p>

          <div className="mt-8">
            <a
              href={REVOLUT_AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700"
            >
              Accéder à Revolut
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-950">FAQ Revolut</h2>

        <div className="mt-8 space-y-5">
          {[
            {
              question: "Revolut est-elle gratuite ?",
              answer:
                "Oui, Revolut propose un plan Standard gratuit. Des plans payants existent aussi avec plus d’avantages, de plafonds ou de services selon les conditions du pays.",
            },
            {
              question: "Quels sont les frais de Revolut ?",
              answer:
                "Les frais dépendent du plan et de l’usage. Sur le plan Standard, les retraits gratuits sont plafonnés et des frais peuvent s’appliquer au-delà. Des frais peuvent aussi intervenir pour certains changes, retraits, virements ou services spécifiques.",
            },
            {
              question: "Revolut est-elle adaptée aux voyageurs ?",
              answer:
                "Oui, Revolut est très pratique pour voyager, payer en devises étrangères et suivre ses dépenses. Il faut toutefois surveiller les plafonds de retrait, le change le week-end et les limites du plan gratuit.",
            },
            {
              question: "Les dépôts Revolut sont-ils protégés ?",
              answer:
                "Les dépôts éligibles auprès de Revolut Bank UAB peuvent être protégés jusqu’à 100 000 € par déposant via le système lituanien de garantie des dépôts, selon les conditions applicables.",
            },
            {
              question: "Faut-il déclarer son compte Revolut ?",
              answer:
                "Selon votre pays de résidence, un compte Revolut peut devoir être déclaré comme compte étranger. Les résidents belges et français doivent vérifier les obligations applicables auprès des autorités fiscales officielles.",
            },
            {
              question: "Revolut peut-elle remplacer une banque classique ?",
              answer:
                "Pour certains utilisateurs, oui. Pour d’autres, Revolut sera plutôt un compte secondaire, un compte voyage ou une app complémentaire. Cela dépend des besoins : salaire, crédit, épargne, fiscalité, support et services bancaires attendus.",
            },
            {
              question: "Afflizen recommande-t-il Revolut ?",
              answer:
                "Afflizen considère Revolut comme une excellente application financière mobile, surtout pour voyager et gérer son argent simplement. Elle doit toutefois être utilisée en comprenant ses frais, ses plafonds et ses obligations fiscales.",
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