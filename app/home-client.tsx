"use client"

import { VideoHero } from './components/video-hero'
import { FeaturedProducts } from './components/featured-products'

export default function HomeClient() {
  return (
    <div className="bg-white">
      <VideoHero />
      <FeaturedProducts />
    </div>
  )
}
