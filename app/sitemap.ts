import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aquamateinc.com'
  
  // Define your static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/our-facility',
    '/warranty',
    '/order-forms',
    '/products/pool-liners',
  ]

  // Map static routes to sitemap entries
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // You can add dynamic routes here if needed
  // For example, if you have dynamic product pages:
  // const products = await getProducts() // Fetch your products
  // const dynamicPages = products.map((product) => ({
  //   url: `${baseUrl}/products/pool-liners/${product.id}`,
  //   lastModified: product.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [
    ...staticPages,
    // ...dynamicPages,
  ]
}