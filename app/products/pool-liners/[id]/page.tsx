import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { poolLiners, getPoolLinerById } from '../../../components/pool-liner-data'
import { RelatedLiners } from '../../../components/related-liners'
import { GalleryImageSlider } from '../../../components/gallery-image-slider'
import { Button } from '../../../../components/ui/button'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export function generateStaticParams() {
  return poolLiners.map((liner) => ({
    id: liner.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const liner = getPoolLinerById(id)
  if (!liner) return {}

  const discontinuedSuffix = liner.discontinued ? ' - While quantities last' : ''

  return {
    title: `${liner.name} Pool Liner Pattern${liner.exclusive ? ' - AquaMate Exclusive' : ''}${discontinuedSuffix}`,
    description: `${liner.longDescription.slice(0, 155)}...`,
    keywords: [liner.name, 'pool liner', liner.collection, ...liner.features, 'custom pool liner', 'vinyl pool liner', ...(liner.discontinued ? ['while quantities last', 'discontinued'] : [])],
    openGraph: {
      title: `${liner.name} - ${liner.collection} Collection | AquaMate Inc.${discontinuedSuffix}`,
      description: liner.shortDescription,
      images: [liner.imageUrl],
    },
    alternates: {
      canonical: `https://www.aquamatepool.com/products/pool-liners/${liner.id}`,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const liner = getPoolLinerById(id)

  if (!liner) notFound()

  const relatedLiners = poolLiners
    .filter((l) => l.collection === liner.collection && l.id !== liner.id)
    .slice(0, 4)

  return (
    <div className="container max-w-6xl py-8 space-y-8 bg-white">
      {/* Back Button */}
      <div>
        <Button
          variant="ghost"
          asChild
          className="gap-2 pl-0 text-muted-foreground hover:text-foreground"
        >
          <Link href="/products/pool-liners" className="text-blue-600 hover:text-blue-700">
            <ChevronLeft className="h-4 w-4" />
            Back to Pool Liners
          </Link>
        </Button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="space-y-6">
          {liner.exclusive && (
            <span className="inline-flex rounded-full bg-blue-950 px-3 py-1 text-sm font-semibold text-white">
              AquaMate Exclusive
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight">{liner.name}</h1>
          <p className="text-muted-foreground leading-7">{liner.longDescription}</p>
          <p className="text-muted-foreground">
            Category:{" "}
            <Link
              href={`/products/pool-liners?collection=${liner.collection}`}
              className="text-blue-600 hover:underline"
            >
              {liner.collection}
            </Link>
          </p>
        </div>
      </div>

      {/* Gallery */}
      {liner.galleryImages?.length > 0 && (
        <GalleryImageSlider images={liner.galleryImages} linerName={liner.name} />
      )}

      {/* Related Liners */}
      <div className="border-t pt-8 mb-12">
        <RelatedLiners currentLiner={liner} limit={4} />
      </div>
    </div>
  )
}
