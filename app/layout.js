import { Nunito } from 'next/font/google'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}