import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { LayoutClient } from './layout-client'
import { Navigation } from './components/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from './components/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aquamatepool.com'),
  title: {
    default: 'AquaMate Inc. - Premium Custom Pool Liners | Product of Canada',
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
    title: 'AquaMate Inc. - Premium Custom Pool Liners | Product of Canada',
    description: 'Leading manufacturer of custom pool liners in Collingwood, Ontario. Premium vinyl liners for any pool shape or size.',
    url: 'https://www.aquamatepool.com',
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
    canonical: 'https://www.aquamatepool.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
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
        {/* Primary favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        
        {/* Additional icon sizes */}
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/icons/icon-512x512.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#317EFB" />

        {/* ARW Verification */}
        <meta name="arw-verification" content="c224ee29a6b51d277558050807dab953" />
        
        {/* Structured Data */}
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
        {/* ARW script disabled for now: api.arw.dev/arw.js is behind a sign-in and does not load for visitors */}
        {/* <script src="https://api.arw.dev/arw.js" data-site-id="c943cd59-9617-4cc5-9e25-9db1c1a3a8a6" async></script> */}
      </body>
    </html>
  )
}
