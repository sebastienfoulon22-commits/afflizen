const affiliateLinks = {
    binance: {
        label: "S’inscrire sur Binance",
        url: "https://account.binance.com/register?registerChannel=user_center&ref=W1CW1QNP",
    },
    bitget: {
        label: "S’inscrire sur Bitget",
        url: "https://www.bitgetapp.com/fr/referral/register?clacCode=2YMT39ZH&from=%2Ffr%2Fevents%2Freferral-all-program&source=events&utmSource=PremierInviter",
    },
    cryptoCom: {
        label: "S’inscrire sur Crypto.com",
        url: "https://crypto.com/app/ykrgcpqy7f",
    },
    tradeRepublic: {
        label: "S’inscrire sur Trade Republic",
        url: "https://refnocode.trade.re/dj55hz7z",
    },
    revolut: {
        label: "S’inscrire sur Revolut",
        url: "https://revolut.com/referral/?referral-code=sebast23u!JUN1-26-AR-H1&geo-redirect",
    },
    n26: {
        label: "S’inscrire sur N26",
        url: "TON_LIEN_N26",
    },
    igraal: {
        label: "S’inscrire sur iGraal",
        url: "https://fr.igraal.com/parrainage?parrain=AG_5cec013713c0f&utm_medium=raf&utm_source=refer_friend",
    },
    widilo: {
        label: "S’inscrire sur Widilo",
        url: "https://www.widilo.fr/i/571J27",
    },
    hostinger: {
        label: "Voir l’offre Hostinger",
        url: "https://www.hostinger.com/fr?REFERRALCODE=J7NILOVEBA7H",
    },
    ovh: {
        label: "Voir l’offre OVHcloud",
        url: "https://www.ovhcloud.com/fr/",
    },
};

type PlatformKey =
    | "binance"
    | "bitget"
    | "cryptoCom"
    | "tradeRepublic"
    | "revolut"
    | "n26"
    | "igraal"
    | "widilo"
    | "hostinger"
    | "ovh";

type PlatformPageProps = {
    platformKey: PlatformKey;
    name: string;
    category: string;
    categoryUrl: string;
    headline: string;
    intro: string;
    presentation: string;
    advantages: string[];
    disadvantages: string[];
    bonus: string;
    conditions: string;
    tutorial: string[];
    opinion: string;
    profile: string;
    risk: string;
};

export default function PlatformPage({
    platformKey,
    name,
    category,
    categoryUrl,
    headline,
    intro,
    presentation,
    advantages,
    disadvantages,
    bonus,
    conditions,
    tutorial,
    opinion,
    profile,
    risk,
}: PlatformPageProps) {
    const affiliate = affiliateLinks[platformKey];

    return (
        <main className="min-h-screen bg-white text-slate-950">
            <section className="border-b border-slate-200 bg-gradient-to-b from-white to-emerald-50">
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <p className="text-sm font-semibold text-emerald-600">
                        {category} / Plateforme
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                        {headline}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        {intro}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href={affiliate.url}
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700"
                        >
                            {affiliate.label}
                        </a>

                        <a
                            href={categoryUrl}
                            className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 hover:border-emerald-600 hover:text-emerald-700"
                        >
                            Retour à la catégorie
                        </a>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                        Lien affilié possible : Afflizen peut recevoir une commission si vous
                        vous inscrivez via ce bouton, sans coût supplémentaire pour vous. Les bonus
                        et conditions peuvent changer : vérifiez toujours les informations
                        officielles avant inscription.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="space-y-10">
                        <article>
                            <h2 className="text-2xl font-bold">Présentation de {name}</h2>
                            <p className="mt-4 leading-7 text-slate-600">{presentation}</p>
                        </article>

                        <article>
                            <h2 className="text-2xl font-bold">Avantages</h2>
                            <ul className="mt-4 space-y-3 text-slate-600">
                                {advantages.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article>
                            <h2 className="text-2xl font-bold">Inconvénients</h2>
                            <ul className="mt-4 space-y-3 text-slate-600">
                                {disadvantages.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article>
                            <h2 className="text-2xl font-bold">Bonus actuel</h2>
                            <p className="mt-4 leading-7 text-slate-600">{bonus}</p>
                        </article>

                        <article>
                            <h2 className="text-2xl font-bold">
                                Conditions pour obtenir le bonus
                            </h2>
                            <p className="mt-4 leading-7 text-slate-600">{conditions}</p>
                        </article>

                        <article>
                            <h2 className="text-2xl font-bold">Tutoriel rapide</h2>
                            <ol className="mt-4 space-y-3 text-slate-600">
                                {tutorial.map((step, index) => (
                                    <li key={step}>
                                        {index + 1}. {step}
                                    </li>
                                ))}
                            </ol>
                        </article>

                        <article>
                            <h2 className="text-2xl font-bold">Avis Afflizen</h2>
                            <p className="mt-4 leading-7 text-slate-600">{opinion}</p>
                        </article>
                    </div>
                </div>

                <aside className="lg:col-span-1">
                    <div className="sticky top-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h2 className="text-xl font-bold">Résumé rapide</h2>

                        <div className="mt-5 space-y-4 text-sm">
                            <div>
                                <p className="font-semibold text-slate-900">Plateforme</p>
                                <p className="text-slate-600">{name}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">Catégorie</p>
                                <p className="text-slate-600">{category}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">Bonus</p>
                                <p className="text-slate-600">À vérifier</p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">Profil adapté</p>
                                <p className="text-slate-600">{profile}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-slate-900">Risque</p>
                                <p className="text-slate-600">{risk}</p>
                            </div>
                        </div>

                        <a
                            href={affiliate.url}
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            className="mt-6 block rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                        >
                            {affiliate.label}
                        </a>
                        <p className="mt-3 text-xs leading-5 text-slate-500">
                            Lien affilié possible. Les conditions, bonus et frais peuvent changer.
                        </p>
                    </div>
                </aside>
            </section>
        </main>
    );
}