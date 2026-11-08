import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} on iOS and Android.`,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader variant="inner" />
      <main className="container page">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p className="meta">
          Last updated: {site.privacyUpdated} · Applies to {site.name} (iOS and Android)
        </p>

        <div className="doc">
          <p>
            {site.studio} (&quot;we&quot;, &quot;us&quot;) makes {site.name} (the &quot;Game&quot;). This policy
            explains what information the Game collects, how it is used and the choices you have. The Game does
            not require an account and does not ask for your name, email address or phone number to play.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Game progress</strong> — your level, gems, boosters and settings are stored on your
              device. They leave the device only if you choose to back them up with your platform account.
            </li>
            <li>
              <strong>Device and usage data</strong> — device model, operating system, language, country, app
              version, crash reports and in‑game events (for example, which level you played). Collected
              through Firebase Analytics and Firebase Crashlytics (Google).
            </li>
            <li>
              <strong>Advertising identifiers</strong> — the Game shows ads through Google AdMob. AdMob and its
              partners may use your device&apos;s advertising ID to show and measure ads. On iOS, ads are
              personalised only if you allow tracking in the App Tracking Transparency prompt.
            </li>
            <li>
              <strong>Purchases</strong> — in‑app purchases are handled by the App Store or Google Play. We
              receive a purchase token to unlock what you bought, never your payment details.
            </li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To run the Game, save your progress and deliver purchases.</li>
            <li>To fix crashes, balance levels and improve the Game.</li>
            <li>To show ads that fund the free version of the Game.</li>
          </ul>

          <h2>Third‑party services</h2>
          <p>The Game includes the following services, each with its own privacy policy:</p>
          <ul>
            <li>
              Google AdMob — <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>
            </li>
            <li>
              Firebase Analytics, Crashlytics and Remote Config (Google) —{" "}
              <a href="https://firebase.google.com/support/privacy">firebase.google.com/support/privacy</a>
            </li>
            <li>Apple App Store / Google Play billing — governed by Apple&apos;s and Google&apos;s privacy policies.</li>
          </ul>

          <h2>Your choices</h2>
          <ul>
            <li>
              <strong>Personalised ads</strong> — opt out in your device settings (iOS: Settings › Privacy ›
              Tracking; Android: Settings › Google › Ads). In the EEA and UK you can change your consent choices
              at any time from the Game&apos;s Settings screen.
            </li>
            <li>
              <strong>Remove ads</strong> — the Game offers a one‑time purchase that removes banner and
              interstitial ads.
            </li>
            <li>
              <strong>Delete data</strong> — uninstalling the Game deletes progress stored on your device. To
              request deletion of analytics data linked to your device, email us at the address below.
            </li>
          </ul>

          <h2>Children</h2>
          <p>
            The Game is rated for everyone and is not directed at children under 13. We do not knowingly collect
            personal information from children. If you believe a child has provided us with personal
            information, contact us and we will delete it.
          </p>

          <h2>Data retention and security</h2>
          <p>
            Analytics and crash data are kept for as long as needed for the purposes above and then deleted or
            aggregated. Data is transmitted over encrypted connections.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top shows the latest version.
            Significant changes will be announced in the Game.
          </p>

          <h2>Contact</h2>
          <p>
            {site.studio}
            <br />
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
