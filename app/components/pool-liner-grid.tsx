"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { poolLiners, collections } from './pool-liner-data'

export function PoolLinerGrid() {
  const [selectedCollection, setSelectedCollection] = useState('All')

  const filteredLiners = useMemo(() => 
    selectedCollection === 'All' 
      ? poolLiners
      : poolLiners.filter(liner => liner.collection === selectedCollection),
    [selectedCollection]
  )

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="sticky top-0 z-20 bg-white py-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {collections.map((collection) => (
                <button
                  key={collection}
                  onClick={() => setSelectedCollection(collection)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base whitespace-nowrap ${
                    selectedCollection === collection
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-gray-700 hover:bg-blue-200'
                  }`}
                >
                  {collection}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLiners.map((liner) => (
              <div key={liner.id} className="group relative">
                <Link href={`/products/pool-liners/${liner.id}`}>
                  <div className="aspect-[3/4.65] w-full overflow-hidden rounded-t-lg bg-gray-100">
                    <Image
                      src={liner.imageUrl}
                      alt={liner.name}
                      width={600}
                      height={920}
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="sm:static sticky top-[72px] z-10 mt-0 p-4 bg-blue-50 rounded-b-lg">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                      {liner.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">{liner.shortDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}