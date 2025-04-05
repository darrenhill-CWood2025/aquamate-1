import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from 'next/navigation'
import { poolLiners, getPoolLinerById } from '../../../components/pool-liner-data'
import { RelatedLiners } from '../../../components/related-liners'
import { Button } from '../../../../components/ui/button'
import { GalleryImageSlider } from '../../../components/gallery-image-slider'

type PageProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Generate static params for all pool liners
export function generateStaticParams() {
  return poolLiners.map((liner) => ({
    id: liner.id,
  }))
}

export default function PoolLinerPage({ params }: PageProps) {
  const liner = getPoolLinerById(params.id)

  if (!liner) {
    notFound()
  }

  // Get related liners from same collection, excluding current liner
  const relatedLiners = poolLiners
    .filter(l => l.collection === liner.collection && l.id !== liner.id)
    .slice(0, 4)

  return (
    <div className="container max-w-6xl py-8 space-y-8">
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

      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Description */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{liner.name}</h1>
            <p className="text-muted-foreground leading-7">{liner.longDescription}</p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Category:{" "}
              <Link href={`/products/pool-liners?collection=${liner.collection}`} className="text-blue-600 hover:text-blue-700 hover:underline">
                {liner.collection}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section with Image Slider */}
      {liner.galleryImages && liner.galleryImages.length > 0 && (
        <GalleryImageSlider images={liner.galleryImages} linerName={liner.name} />
      )}

      {/* Related Liners */}
      <div className="border-t pt-8">
        <RelatedLiners currentLiner={liner} limit={4} />
      </div>
    </div>
  )
}