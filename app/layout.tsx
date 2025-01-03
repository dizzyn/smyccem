import "./global.css";
import type { Metadata } from "next";
import { baseUrl } from "./basepath";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import Navbar from "./components/nav";
import Background from "./components/background";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { backgrounds } from "backgrounds";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Trhni si smyčcem",
    template: "%s – Trhni si smyčcem",
  },
  description:
    "Trhni si smyčcem je komorní těleso mezi punkem a filharmonií. Hrajeme vlastní písně. Je nás 6 a máme klasické hudební nástroje. Nejlépe se nám vystupuje mezi skvělými lidmi v zajímavých prostorech a v přírodě. Naše písně reflektují sociální, filosofická a zahradnická témata. Patříme pod magický realismus.",
  openGraph: {
    title: "Trhni si smyčcem",
    description:
      "Trhni si smyčcem je komorní těleso mezi punkem a filharmonií. Hrajeme vlastní písně. Je nás 6 a máme klasické hudební nástroje. Nejlépe se nám vystupuje mezi skvělými lidmi v zajímavých prostorech a v přírodě. Naše písně reflektují sociální, filosofická a zahradnická témata. Patříme pod magický realismus.",
    url: baseUrl,
    siteName: "Trhni si smyčcem",
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // nahodne BG id ze server renderingu
  const randomBgId = Math.floor(Math.random() * backgrounds.length);
  return (
    <html lang="cs" className="h-full bg-black text-white overflow-hidden">
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      <body
        className={classNames(
          GeistSans.variable,
          "h-full overflow-hidden print:overflow-visible"
        )}
      >
        <SpeedInsights />
        <Background SSRrandomBgId={randomBgId} />
        <div
          className="overflow-auto lg:overflow-hidden print:overflow-visible h-full lg:grid lg:grid-cols-[0.8fr_1.2fr]"
          id="wrapper"
        >
          <Navbar />
          <div className="lg:py-16 overflow-auto print:overflow-visible relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
