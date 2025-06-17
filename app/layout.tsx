import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import WidgetCalendly from '@/components/widget-calendly/WidgetCalendly'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { metadata as siteMetadata } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <Analytics />
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WidgetCalendly />
      </body>
    </html>
  )
}
