import { Nunito } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Uniblex - Browser games, built from scratch',
  description: 'WebGL experiments, dev breakdowns, and games — playable instantly, no installs.',
  other: {
    'p:domain_verify': 'd60723ce580a7190090e2cd1a3e4f4bd',
  },
  icons: {
    icon: [
      { url: '/assets/Favicon 16 by 16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/Favicon 32 by 32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/icon only 180 by 180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Uniblex - Browser games, built from scratch',
    description: 'WebGL experiments, dev breakdowns, and games — playable instantly, no installs.',
    url: 'https://www.uniblex.com',
    siteName: 'Uniblex',
    images: [
      {
        url: 'https://www.uniblex.com/assets/OG Image.png',
        width: 1200,
        height: 630,
        alt: 'Uniblex',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniblex - Browser games, built from scratch',
    description: 'WebGL experiments, dev breakdowns, and games — playable instantly, no installs.',
    images: ['https://www.uniblex.com/assets/OG Image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5LHGPFZ9S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q5LHGPFZ9S');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}