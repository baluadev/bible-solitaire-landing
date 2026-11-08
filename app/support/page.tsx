import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description: `Help and frequently asked questions for ${site.name}.`,
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "My purchase didn't arrive",
    a: (
      <>
        Make sure you are online, then open Shop and tap <strong>Restore purchases</strong>. If the item still
        doesn&apos;t show after a few minutes, email us with your App Store or Google Play order number and
        we&apos;ll sort it out.
      </>
    ),
  },
  {
    q: "How do I remove ads?",
    a: (
      <>
        Open Shop and choose <strong>Remove Ads</strong>. It is a one‑time purchase that removes banner and
        interstitial ads forever. Rewarded videos stay optional. The Game never shows ads in the middle of a
        level.
      </>
    ),
  },
  {
    q: "What do the boosters do?",
    a: (
      <>
        <strong>Candle</strong> suggests a move. <strong>Fishing Net</strong> draws in the cards you need.{" "}
        <strong>The Book</strong> lets you choose a topic. <strong>Olive Branch</strong> is a joker card. You earn
        boosters from daily gifts and events, or find more in the Shop.
      </>
    ),
  },
  {
    q: "Can I move my progress to a new phone?",
    a: (
      <>
        Progress is saved on your device. Sign in with the same Google Play Games or Game Center account on both
        devices to carry it over. Purchases can always be restored from the Shop on the new device.
      </>
    ),
  },
  {
    q: "Does the game work offline?",
    a: <>Levels you have already downloaded play offline. Some card sets, the Shop and events need an internet connection.</>,
  },
  {
    q: "How do I change ad consent (EEA / UK)?",
    a: (
      <>
        Open <strong>Settings</strong> in the Game and tap <strong>Privacy options</strong> to change your
        choices at any time.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteHeader variant="inner" />
      <main className="container page">
        <div className="support-grid">
          <div className="faq-list">
            <span className="eyebrow">Help</span>
            <h1>Support &amp; FAQ</h1>
            <p className="faq-intro">
              Stuck on a level, missing a purchase, or found a bug? Check the answers below, or write to us — a
              real person reads every message.
            </p>
            {faqs.map((f, i) => (
              <details className="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          <aside className="help-card">
            <img src="/images/pax-win.png" alt="" />
            <h2>Still need help?</h2>
            <p>Send us your device model, app version and a screenshot if you can. We reply within 2 business days.</p>
            <a href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(site.name + " support")}`} className="btn-email">
              Email support
            </a>
            <p className="email">{site.supportEmail}</p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
