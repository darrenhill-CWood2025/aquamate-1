import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { LayoutClient } from './layout-client'
import { Navigation } from './components/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from './components/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aquamateinc.com'),
  title: {
    default: 'AquaMate Inc. - Premium Custom Pool Liners | Made in Canada',
    template: '%s | AquaMate Inc.'
  },
  description: 'Leading manufacturer of custom pool liners in Collingwood, Ontario. Premium vinyl liners for any pool shape or size. AquaFinish™, AquaSculpt™, AquaShift™, and AquaShimmer™ collections.',
  keywords: ['pool liners', 'custom pool liners', 'vinyl pool liners', 'pool liner replacement', 'Canadian pool liners', 'Collingwood Ontario', 'AquaMate', 'AquaFinish', 'AquaSculpt', 'AquaShift', 'AquaShimmer'],
  authors: [{ name: 'AquaMate Inc.' }],
  creator: 'AquaMate Inc.',
  publisher: 'AquaMate Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AquaMate Inc. - Premium Custom Pool Liners | Made in Canada',
    description: 'Leading manufacturer of custom pool liners in Collingwood, Ontario. Premium vinyl liners for any pool shape or size.',
    url: 'https://www.aquamateinc.com',
    siteName: 'AquaMate Inc.',
    images: [
      {
        url: '/assets/aquamate-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'AquaMate Inc. - Custom Pool Liners',
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaMate Inc. - Premium Custom Pool Liners',
    description: 'Leading manufacturer of custom pool liners in Collingwood, Ontario. Premium vinyl liners for any pool shape or size.',
    images: ['/assets/aquamate-hero.jpg'],
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
  alternates: {
    canonical: 'https://www.aquamateinc.com',
  },
  verification: {
    google: 'verification-token-here',
    yandex: 'verification-token-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
        <StructuredData />
      </head>
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
