import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { LayoutClient } from './layout-client'
import { Navigation } from './components/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'AquaMate Inc.',
  description: 'Custom Pool Liner Fabrication | Premium Quality Vinyl Liners Made in Collingwood, Ontario | Expert Craftsmanship for Any Pool Shape or Size | AquaMate Inc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/icons/icon-512x512.png" />
      </Head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <LayoutClient>
            {children}
          </LayoutClient>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
