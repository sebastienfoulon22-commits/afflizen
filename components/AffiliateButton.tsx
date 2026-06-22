"use client";

type AffiliateButtonProps = {
  href: string;
  platform: string;
  category: string;
  location?: string;
  children: React.ReactNode;
  className?: string;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>
    ) => void;
  }
}

export default function AffiliateButton({
  href,
  platform,
  category,
  location = "page",
  children,
  className,
}: AffiliateButtonProps) {
  function handleClick() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", {
        platform,
        category,
        location,
        link_url: href,
        page_path: window.location.pathname,
      });
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}