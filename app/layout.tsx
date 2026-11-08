import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import LiturgicalTheme from "@/components/LiturgicalTheme";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Card-sorting solitaire with Catholic topics`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Card-sorting solitaire with Catholic topics. Sort picture cards of saints and Scripture by topic, clear the board and journey through the Church year.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: site.name,
    description:
      "Sort picture cards of saints and Scripture by topic. A calm card-sorting solitaire whose colours follow the Church year.",
    type: "website",
    images: [{ url: "/images/pax-key.jpg", width: 400, height: 600 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3566",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="sanctuary">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,600;1,700&family=Be+Vietnam+Pro:wght@500;600;700;800&display=swap"
        />
      </head>
      <body>
        <LiturgicalTheme />
        {children}
      </body>
    </html>
  );
}
