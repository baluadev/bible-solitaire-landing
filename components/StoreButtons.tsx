import { site } from "@/lib/site";

type Store = { url: string | null; badge: string; alt: string; cls: string; label: string };

const stores: Store[] = [
  { url: site.googlePlayUrl, badge: "/badges/google-play-badge.png", alt: "Get it on Google Play", cls: "google", label: "Google Play" },
  { url: site.appStoreUrl, badge: "/badges/app-store-badge.svg", alt: "Download on the App Store", cls: "apple", label: "App Store" },
];

/**
 * Official store badges. A store without a URL yet is shown disabled with "Coming soon".
 * Google Play's PNG carries its own transparent margin, so it is rendered taller with a
 * negative margin to visually match Apple's SVG.
 */
export default function StoreButtons({ center = false, id }: { center?: boolean; id?: string }) {
  return (
    <div id={id} className={`store-row${center ? " center" : ""}`}>
      {stores.map((s) =>
        s.url ? (
          <a key={s.label} href={s.url} className="store-link" rel="noopener">
            <img src={s.badge} alt={s.alt} className={s.cls} />
          </a>
        ) : (
          <span key={s.label} className="store-soon" aria-disabled="true" title={`Coming soon to ${s.label}`}>
            <img src={s.badge} alt={`${s.label} — coming soon`} className={s.cls === "google" ? "gsoon" : undefined} />
            <small>Coming soon</small>
          </span>
        ),
      )}
    </div>
  );
}
