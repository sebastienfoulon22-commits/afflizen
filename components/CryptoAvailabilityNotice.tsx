import type { ReactNode } from "react";

type AvailabilityLevel = "warning" | "unavailable" | "verification";

type CryptoAvailabilityNoticeProps = {
  title: string;
  level: AvailabilityLevel;
  children: ReactNode;
};

type SuspendedRegistrationMessageProps = {
  children?: ReactNode;
  className?: string;
};

const levelStyles: Record<AvailabilityLevel, string> = {
  warning: "border-amber-300 bg-amber-50 text-amber-950",
  unavailable: "border-rose-300 bg-rose-50 text-rose-950",
  verification: "border-sky-300 bg-sky-50 text-sky-950",
};

export default function CryptoAvailabilityNotice({
  title,
  level,
  children,
}: CryptoAvailabilityNoticeProps) {
  return (
    <aside
      aria-label={title}
      className={`mt-8 max-w-4xl rounded-lg border p-6 ${levelStyles[level]}`}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3 leading-7">{children}</div>
      <p className="mt-4 text-sm font-semibold">
        Informations réglementaires et géographiques vérifiées le 4 août 2026.
      </p>
      <p className="mt-2 text-sm leading-6">
        Les agréments, services et restrictions peuvent évoluer. Vérifiez les
        conditions officielles applicables à votre pays.
      </p>
    </aside>
  );
}

export function SuspendedRegistrationMessage({
  children,
  className = "",
}: SuspendedRegistrationMessageProps) {
  return (
    <p
      role="note"
      className={`rounded-lg border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold leading-6 text-slate-700 ${className}`}
    >
      {children ??
        "Inscription non recommandée actuellement depuis Afflizen. Consultez les informations réglementaires ci-dessus avant toute démarche."}
    </p>
  );
}
