import "./global.css";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { baseUrl } from "./basepath";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import Navbar from "./components/nav";
import Background from "./components/background";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Trhni si smyčcem",
    template: "%s – Trhni si smyčcem",
  },
  description:
    "Trhni si smyčcem je komorní těleso mezi punkem a filharmonií. Hrajeme vlastní písně. Je nás 6 a máme klasické hudební nástroje. Nejlépe se nám vystupuje mezi skvělými lidmi v zajímavých prostorech a v přírodě. Naše písně reflektují sociální, filosofická a zahradnická témata. Patříme pod magický realismus.",
  openGraph: {
    title: "Trhni si smyčcemo",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="cs" className="h-full bg-black text-white">
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <body
          className={classNames(
            GeistSans.variable,
            "h-full overflow-hidden print:overflow-visible"
          )}
        >
          <Background />
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
    </ViewTransitions>
  );
}
