'use client';

import { usePathname } from 'next/navigation'
import { FooterContact } from './components/footer-contact'
import { useEffect } from 'react'

export function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/protected'

  useEffect(() => {
    // Update HTML and body classes based on auth page status
    if (isAuthPage) {
      document.documentElement.classList.add('h-full', 'bg-white')
      document.body.classList.add('h-full')
    } else {
      document.documentElement.classList.remove('h-full', 'bg-white')
      document.body.classList.remove('h-full')
    }
  }, [isAuthPage])

  return (
    <>
      {children}
      {!isAuthPage && <FooterContact />}
    </>
  )
}
