import './global.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ViewTransitions } from 'next-view-transitions';
import { baseUrl } from './basepath';
import classNames from 'classnames';
import { GeistSans } from 'geist/font/sans';
import Navbar from './components/nav';
import Wrapper from './components/wrapper';
import Background from './components/background';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Trhni si smyčcem',
    template: '%s | Next.js Portfolio Starter',
  },
  description:
    'Trhni si smyčcem je komorní těleso mezi punkem a filharmonií. Hrajeme vlastní písně. Je nás 6 a máme klasické hudební nástroje. Nejlépe se nám vystupuje mezi skvělými lidmi v zajímavých prostorech a v přírodě. Naše písně reflektují sociální, filosofická a zahradnická témata. Patříme pod magický realismus.',
  openGraph: {
    title: 'Trhni si smyčcemo',
    description:
      'Trhni si smyčcem je komorní těleso mezi punkem a filharmonií. Hrajeme vlastní písně. Je nás 6 a máme klasické hudební nástroje. Nejlépe se nám vystupuje mezi skvělými lidmi v zajímavých prostorech a v přírodě. Naše písně reflektují sociální, filosofická a zahradnická témata. Patříme pod magický realismus.',
    url: baseUrl,
    siteName: 'Trhni si smyčcem',
    locale: 'cs_CZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <html lang="cs" className="h-full">
        <body
          className={classNames(
            GeistSans.variable,
            'bg-black h-full grid grid-cols-[460px_auto] lg:gap-16 overflow-hidden'
          )}
        >
          <Navbar />
          <Wrapper>{children}</Wrapper>
          <Background />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
