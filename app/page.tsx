"use client"
import { Hero } from "./components/hero"
import { VideoHero } from './components/video-hero';
import { FeaturedProducts } from './components/featured-products';

export default function Home() {
  return (
    <div className="bg-white">
      <VideoHero />
      <FeaturedProducts />
    </div>
   
   
  )
}

