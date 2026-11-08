import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          © {site.year} {site.studio}. {site.name}.
        </span>
        <div className="footer-links">
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/support/">Support</Link>
          {site.termsUrl && <a href={site.termsUrl}>Terms of Use</a>}
          <a href={`mailto:${site.supportEmail}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
