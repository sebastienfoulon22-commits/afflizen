"use client";

import { usePathname } from "next/navigation";

export default function BackHomeButton() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <a
      href="/"
      className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 hover:bg-emerald-100"
    >
      ← Retour à l’accueil
    </a>
  );
}