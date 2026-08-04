type CryptoAffiliateDisclosureProps = {
  className?: string;
};

const disclosureClassName =
  "rounded-lg border border-amber-300 bg-amber-50 p-5 text-slate-900 shadow-sm";

export default function CryptoAffiliateDisclosure({
  className,
}: CryptoAffiliateDisclosureProps) {
  return (
    <aside
      aria-labelledby="crypto-affiliate-disclosure-title"
      className={[disclosureClassName, className].filter(Boolean).join(" ")}
    >
      <p
        id="crypto-affiliate-disclosure-title"
        className="text-sm font-bold uppercase text-amber-900"
      >
        Publicité – lien affilié
      </p>

      <p className="mt-3 text-lg font-bold leading-7 text-slate-950">
        Monnaie virtuelle, risques réels. En crypto seul le risque est garanti.
      </p>

      <p className="mt-3 leading-7">
        Cette page contient un lien affilié ou de parrainage. Afflizen peut
        recevoir une commission ou un avantage si vous effectuez une action
        éligible via ce lien, sans coût supplémentaire direct pour vous. Cette
        rémunération n’influence pas la présentation des risques et ne garantit
        aucun bonus.
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
        <li>La valeur des crypto-actifs peut fortement varier.</li>
        <li>Une perte partielle ou totale est possible.</li>
        <li>
          Les crypto-actifs ne bénéficient généralement pas de la garantie des
          dépôts bancaires.
        </li>
        <li>
          Les services, produits et protections peuvent varier selon l’entité et
          le pays.
        </li>
        <li>
          Un agrément réglementaire ne supprime pas les risques financiers,
          techniques ou opérationnels.
        </li>
      </ul>

      <p className="mt-4 text-sm leading-6 text-slate-700">
        Ce contenu est un résumé pratique et ne constitue pas un conseil
        personnalisé.
      </p>

      <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
        Résidents belges et français : vérifiez toujours l’entité contractante,
        les services disponibles et les conditions applicables à votre pays avant
        de vous inscrire.
      </p>
    </aside>
  );
}

export function CryptoAffiliateCtaDisclosure({
  className,
}: CryptoAffiliateDisclosureProps) {
  return (
    <p
      className={[
        "rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-slate-700",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <strong className="font-semibold text-slate-950">Lien affilié :</strong>{" "}
      Afflizen peut recevoir une rémunération si vous réalisez une action éligible
      via ce lien. Les avantages, bonus et conditions ne sont pas garantis et
      peuvent varier selon le pays et la plateforme.
    </p>
  );
}
