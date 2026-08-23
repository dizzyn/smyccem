import "./global.css";
import type { Metadata } from "next";
import { baseUrl } from "./basepath";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import Navbar from "./components/nav";
import Background from "./components/background";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { pickRandomBackgroundId } from "backgrounds";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

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
  twitter: {
    card: "summary_large_image",
    title: "Trhni si smyčcem",
    description:
      "Trhni si smyčcem je komorní těleso mezi punkem a filharmonií.",
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
  const randomBgId = pickRandomBackgroundId();
  return (
    <html
      lang="cs"
      className={classNames(
        GeistSans.variable,
        playfair.variable,
        "h-full bg-black text-stone-100 overflow-hidden"
      )}
    >
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
      <meta name="theme-color" content="#0b0a09" />
      <body className="h-full overflow-hidden print:overflow-visible">
        <SpeedInsights />
        <Background SSRrandomBgId={randomBgId} />
        <Navbar />
        <div
          className="overflow-auto print:overflow-visible relative h-full pt-24 lg:pt-28"
          id="wrapper"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
