"use client"

import { useState } from 'react'
import Image from "next/image"
import { Suspense } from 'react'

interface GalleryImageSliderProps {
  images: string[]
  linerName: string
}

function ImageLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="animate-pulse flex space-x-2">
        <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
        <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
        <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  )
}

export function GalleryImageSlider({ images, linerName }: GalleryImageSliderProps) {
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <>
      {/* Large Main Image */}
      <div className="w-full h-[800px] relative overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Suspense fallback={<ImageLoader />}>
            <Image
              src={images[activeImage]}
              alt={`${linerName} gallery image ${activeImage + 1}`}
              width={1200}
              height={800}
              className="w-full h-full object-cover object-top transition-all duration-500 ease-in-out"
            />
          </Suspense>
        </div>
      </div>
      
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`aspect-square overflow-hidden rounded-lg ${
              activeImage === index 
                ? 'border-2 border-blue-500' 
                : 'border-2 border-transparent hover:border-blue-500/20'
            }`}
          >
            <Suspense fallback={<ImageLoader />}>
              <Image
                src={image}
                alt={`${linerName} gallery image ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </Suspense>
          </button>
        ))}
      </div>
    </>
  );
} 