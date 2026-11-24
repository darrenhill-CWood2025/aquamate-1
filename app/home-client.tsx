"use client"

import { VideoHero } from './components/video-hero'
import { FeaturedProducts } from './components/featured-products'
import { MadeInCanada } from './components/made-in-canada'

export default function HomeClient() {
  return (
    <div className="bg-white">
      <VideoHero />
      <FeaturedProducts />
      <MadeInCanada />
    </div>
  )
}
