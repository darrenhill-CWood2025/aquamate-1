"use client"

import { useState } from 'react'
import Image from "next/image"

interface GalleryImageSliderProps {
  images: string[]
  linerName: string
}

export function GalleryImageSlider({ images, linerName }: GalleryImageSliderProps) {
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <>
      {/* Large Main Image */}
      <div className="w-full h-[500px] relative overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          <Image
            src={images[activeImage]}
            alt={`${linerName} gallery image ${activeImage + 1}`}
            width={1200}
            height={500}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
      
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
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
              <Image
                src={image}
                alt={`${linerName} gallery image ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
} 