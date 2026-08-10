type CryptoRiskNoticeProps = {
  className?: string;
};

const noticeClassName =
  "rounded-lg border border-amber-300 bg-amber-50 p-5 text-slate-900 shadow-sm";

export default function CryptoRiskNotice({
  className,
}: CryptoRiskNoticeProps) {
  return (
    <aside
      aria-labelledby="crypto-risk-notice-title"
      className={[noticeClassName, className].filter(Boolean).join(" ")}
    >
      <p
        id="crypto-risk-notice-title"
        className="text-sm font-bold uppercase text-amber-900"
      >
        Information importante
      </p>

      <p className="mt-3 text-lg font-bold leading-7 text-slate-950">
        Monnaie virtuelle, risques réels. En crypto seul le risque est garanti.
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
