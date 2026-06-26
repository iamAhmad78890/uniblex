import { Nunito } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'GameCraftHub - Browser games, built from scratch',
  description: 'WebGL experiments, dev breakdowns, and games — playable instantly, no installs.',
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