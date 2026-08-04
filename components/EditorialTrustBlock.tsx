"use client";

import { getEditorialEntry } from "@/lib/editorialRegistry";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function EditorialTrustBlock() {
  const pathname = usePathname();
  const entry = getEditorialEntry(pathname);

  if (!entry) {
    return null;
  }

  const reviewedAt = dateFormatter.format(
    new Date(`${entry.reviewedAt}T00:00:00Z`),
  );

  return (
    <aside
      aria-labelledby="editorial-trust-title"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <h2
                id="editorial-trust-title"
                className="text-xl font-bold text-slate-950"
              >
                Publié et supervisé par Sébastien Foulon
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Responsable éditorial d&apos;Afflizen · Dernière révision
                éditoriale : {reviewedAt}
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                Consultez la présentation d&apos;
                <Link
                  href="/a-propos"
                  className="rounded-sm font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Afflizen
                </Link>{" "}
                et notre{" "}
                <Link
                  href="/methodologie"
                  className="rounded-sm font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  méthodologie éditoriale
                </Link>
                .
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Les tarifs, offres et conditions pouvant évoluer, consultez
                toujours les informations officielles avant de vous inscrire.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-950">
                Sources officielles de référence
              </h3>
              {entry.sources.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {entry.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-sm py-2 font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                      >
                        {source.label}
                        <span aria-hidden="true" className="ml-1">
                          ↗
                        </span>
                        <span className="sr-only"> (nouvel onglet)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Aucune source officielle de référence n&apos;est actuellement
                  enregistrée pour cette fiche.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
