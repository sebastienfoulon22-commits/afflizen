"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  KeyboardEvent,
  RefObject,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { SearchItem, searchSiteItems } from "@/lib/siteSearchIndex";

type SiteSearchProps = {
  variant?: "hero" | "compact";
};

type SearchBoxProps = {
  variant: "hero" | "panel";
  autoFocus?: boolean;
  closeOnOutsideClick?: boolean;
  openerRef?: RefObject<HTMLButtonElement | null>;
  clearButtonTabIndex?: number;
  onClose?: () => void;
};

const defaultPlaceholder = "Rechercher une plateforme, une catégorie ou un service...";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

function ResultTypeBadge({ type }: { type: SearchItem["type"] }) {
  return (
    <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
      {type === "platform" ? "Plateforme" : "Catégorie"}
    </span>
  );
}

function SearchBox({
  variant,
  autoFocus = false,
  closeOnOutsideClick = true,
  openerRef,
  clearButtonTabIndex = 0,
  onClose,
}: SearchBoxProps) {
  const router = useRouter();
  const instanceId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const results = useMemo(() => searchSiteItems(query), [query]);
  const listboxId = `${instanceId}-results`;
  const activeResultId =
    activeIndex >= 0 && results[activeIndex]
      ? `${instanceId}-result-${activeIndex}`
      : undefined;

  const closeSearch = () => {
    setIsExpanded(false);
    setActiveIndex(-1);
    onClose?.();
    openerRef?.current?.focus();
  };

  useEffect(() => {
    if (!autoFocus) {
      return;
    }

    inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (!closeOnOutsideClick) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        rootRef.current &&
        event.target instanceof Node &&
        !rootRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [closeOnOutsideClick]);

  const openResult = (result: SearchItem | undefined) => {
    if (!result) {
      return;
    }

    router.push(result.url);
    closeSearch();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsExpanded(true);
      setActiveIndex((currentIndex) => {
        if (results.length === 0) {
          return -1;
        }

        return currentIndex >= results.length - 1 ? 0 : currentIndex + 1;
      });
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsExpanded(true);
      setActiveIndex((currentIndex) => {
        if (results.length === 0) {
          return -1;
        }

        return currentIndex <= 0 ? results.length - 1 : currentIndex - 1;
      });
      return;
    }

    if (event.key === "Enter") {
      if (activeIndex >= 0 && results[activeIndex]) {
        event.preventDefault();
        openResult(results[activeIndex]);
      }

      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();

      if (variant === "panel") {
        closeSearch();
        return;
      }

      setIsExpanded(false);
      setActiveIndex(-1);
    }
  };

  const hasQuery = query.trim().length > 0;
  const shouldShowResults = isExpanded && hasQuery;

  return (
    <div
      ref={rootRef}
      className={variant === "hero" ? "relative w-full" : "relative w-full"}
    >
      <label htmlFor={`${instanceId}-input`} className="sr-only">
        Rechercher sur Afflizen
      </label>

      <div
        className={[
          "flex items-center gap-3 border border-slate-200 bg-white shadow-sm transition focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100",
          variant === "hero"
            ? "rounded-2xl px-5 py-4"
            : "rounded-xl px-4 py-3",
        ].join(" ")}
      >
        <span className="shrink-0 text-emerald-600">
          <SearchIcon />
        </span>

        <input
          ref={inputRef}
          id={`${instanceId}-input`}
          type="search"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={shouldShowResults}
          aria-controls={listboxId}
          aria-activedescendant={activeResultId}
          autoComplete="off"
          placeholder={defaultPlaceholder}
          value={query}
          onChange={(event) => {
            const nextQuery = event.target.value;

            setQuery(nextQuery);
            setIsExpanded(true);
            setActiveIndex(nextQuery.trim() ? 0 : -1);
          }}
          onFocus={() => setIsExpanded(true)}
          onKeyDown={handleKeyDown}
          className={[
            "min-w-0 flex-1 bg-transparent text-slate-950 outline-none placeholder:text-slate-400",
            variant === "hero" ? "text-base md:text-lg" : "text-sm",
          ].join(" ")}
        />

        {query ? (
          <button
            type="button"
            tabIndex={clearButtonTabIndex}
            onClick={() => {
              setQuery("");
              setIsExpanded(false);
              inputRef.current?.focus();
            }}
            className="shrink-0 rounded-full px-2 py-1 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            Effacer
          </button>
        ) : null}
      </div>

      {variant === "hero" ? (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Exemples : Kraken, cashback, courtier, carte bancaire, hébergement...
        </p>
      ) : null}

      <p className="sr-only" aria-live="polite">
        {hasQuery
          ? `${results.length} résultat${results.length > 1 ? "s" : ""} trouvé${
              results.length > 1 ? "s" : ""
            }.`
          : "Saisissez une recherche."}
      </p>

      {shouldShowResults ? (
        <div
          className={[
            "absolute left-0 right-0 z-50 mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
            variant === "panel" ? "max-h-[60vh] overflow-y-auto" : "",
          ].join(" ")}
        >
          {results.length > 0 ? (
            <ul id={listboxId} role="listbox" className="divide-y divide-slate-100">
              {results.map((result, index) => (
                <li key={result.url} role="presentation">
                  <Link
                    id={`${instanceId}-result-${index}`}
                    href={result.url}
                    role="option"
                    aria-selected={activeIndex === index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={closeSearch}
                    className={[
                      "block px-4 py-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-emerald-500",
                      activeIndex === index
                        ? "bg-emerald-50"
                        : "bg-white hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-950">{result.name}</p>
                        <p className="mt-1 text-sm leading-5 text-slate-600">
                          {result.category} - {result.description}
                        </p>
                      </div>

                      <ResultTypeBadge type={result.type} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-5 text-sm text-slate-600">
              Aucun résultat trouvé. Essayez un nom de plateforme, une catégorie
              ou un service.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}

function CompactSiteSearch() {
  const openerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShortcut = (event: globalThis.KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== "k") {
        return;
      }

      if (isEditableTarget(event.target)) {
        return;
      }

      event.preventDefault();
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:px-4"
        aria-label="Ouvrir la recherche"
        aria-haspopup="dialog"
      >
        <SearchIcon />
        <span className="hidden sm:inline">Rechercher</span>
        <span className="hidden rounded-md border border-slate-200 px-1.5 py-0.5 text-[11px] text-slate-500 xl:inline">
          Ctrl K
        </span>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Recherche Afflizen"
          className="fixed inset-0 z-[100] bg-slate-950/40 px-4 py-20 backdrop-blur-sm sm:px-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
              openerRef.current?.focus();
            }
          }}
        >
          <div className="relative mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-4 pt-14 shadow-2xl sm:p-5 sm:pt-14">
            <p className="absolute left-5 top-5 text-sm font-semibold text-slate-700">
              Recherche Afflizen
            </p>

            <SearchBox
              variant="panel"
              autoFocus
              closeOnOutsideClick={false}
              clearButtonTabIndex={-1}
              openerRef={openerRef}
              onClose={() => setIsOpen(false)}
            />

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openerRef.current?.focus();
              }}
              className="absolute right-4 top-3 rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:right-5 sm:top-4"
            >
              Fermer
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function SiteSearch({ variant = "compact" }: SiteSearchProps) {
  if (variant === "hero") {
    return <SearchBox variant="hero" />;
  }

  return <CompactSiteSearch />;
}
