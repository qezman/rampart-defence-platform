import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: {
    default: 'Rampart Defence Engineering — Armoured Vehicle Sales, Repair & Refurbishment',
    template: '%s | Rampart Defence Engineering',
  },
  description:
    'Armoured vehicle sales, repair, and refurbishment for civilian and military clients. BR4–BR7 and STANAG 4569 certified. Serving 15+ countries.',
  keywords: ['armoured vehicles', 'armoured car', 'military vehicles', 'ballistic protection', 'BR7', 'STANAG'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

