import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { LayoutClient } from './layout-client'
import { Navigation } from './components/navigation'
import { ThemeProvider } from "@/components/theme-provider"

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
