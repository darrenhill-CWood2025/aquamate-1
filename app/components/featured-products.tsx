"use client"

import Image from 'next/image'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'

const featuredLiners = [
  {
    id: 'gladstone',
    name: 'Gladstone',
    description: 'Elegant mosaic pattern with traditional appeal.',
    imageUrl: '/assets/gallery/gladstone/gladstone-0.jpg',
  },
  {
    id: 'silver-lake',
    name: 'Silver Lake',
    description: 'Shimmering silver mosaic design for modern pools.',
    imageUrl: '/assets/gallery/silver-lake/silver-lake-0.jpg',
  },
  {
    id: 'blue-marble',
    name: 'Blue Marble',
    description: 'Refined marble design for luxury pools with classic elegance.',
    imageUrl: '/assets/gallery/blue-marble/blue-marble-0.jpg',
  },
]

export function FeaturedProducts() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Liner Patterns</h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our most popular pool liner patterns
              </p>
            </div>
            <div className="hidden lg:flex lg:items-center lg:gap-x-2">
              <a
                href="/products/pool-liners"
                className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
              >
                View all patterns
                <span className="ml-2 inline-block">
                  <ArrowLongRightIcon className="h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredLiners.map((liner) => (
              <div key={liner.id} className="group relative">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={liner.imageUrl}
                    alt={liner.name}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <a href={`/products/pool-liners/${liner.id}`}>
                      <span className="absolute inset-0" />
                      {liner.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{liner.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex lg:hidden">
            <a
              href="/products/pool-liners"
              className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
            >
              View all patterns
              <span className="ml-2 inline-block">
                <ArrowLongRightIcon className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 