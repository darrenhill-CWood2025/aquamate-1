import { MetadataRoute } from 'next'
import { poolLiners } from './components/pool-liner-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aquamatepool.com'

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/our-facility',
    '/warranty',
    '/order-forms',
    '/products/pool-liners',
  ]

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const productPages = poolLiners.map((liner) => ({
    url: `${baseUrl}/products/pool-liners/${liner.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...productPages,
  ]
}
