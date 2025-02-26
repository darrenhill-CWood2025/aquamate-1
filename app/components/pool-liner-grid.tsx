"use client"

import Image from 'next/image'
import { useState, useMemo } from 'react'

type PoolLiner = {
  id: string
  name: string
  description: string
  imageUrl: string
  collection: string
}

const poolLiners = [
  {
    id: 'antigua',
    name: 'Antigua',
    description: 'Traditional terrazzo pattern with timeless appeal.',
    imageUrl: '/assets/patterns/antigua.jpg',
    collection: 'Terrazzo'
  },
  {
    id: 'black-slate',
    name: 'Black Slate',
    description: 'Dramatic black slate pattern for sophisticated pools.',
    imageUrl: '/assets/patterns/black-slate.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'blue-horizon',
    name: 'Blue Horizon',
    description: 'Stunning blue terrazzo pattern for a bold look.',
    imageUrl: '/assets/patterns/blue-horizon.jpg',
    collection: 'Terrazzo'
  },
  {
    id: 'blue-pebble',
    name: 'Blue Pebble',
    description: 'Tropical-inspired pattern with aqua tones for a resort-like feel.',
    imageUrl: '/assets/patterns/blue-pebble.jpg',
    collection: 'Pebble'
  },
  {
    id: 'blue-slate',
    name: 'Blue Slate',
    description: 'Natural stone pattern with cool blue tones.',
    imageUrl: '/assets/patterns/blue-slate.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'butterfly-effect',
    name: 'Butterfly Effect',
    description: 'Intricate mosaic pattern with butterfly motifs.',
    imageUrl: '/assets/patterns/butterfly-effect.jpg',
    collection: 'Mosaic'
  },
  {
    id: 'cambridge-blue-marble',
    name: 'Cambridge Blue Marble',
    description: 'Refined blue marble design for luxury pools.',
    imageUrl: '/assets/patterns/cambridge-blue-marble.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'carnival',
    name: 'Carnival',
    description: 'Vibrant mosaic design full of color and life.',
    imageUrl: '/assets/patterns/carnival.jpg',
    collection: 'Mosaic'
  },
  {
    id: 'carrara-white-marble',
    name: 'Carrara White Marble',
    description: 'Luxurious white marble pattern for elegant pools.',
    imageUrl: '/assets/patterns/carrara-white-marble.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'catalina-sandstone',
    name: 'Catalina Sandstone',
    description: 'Warm sandstone texture creating a natural pool environment.',
    imageUrl: '/assets/patterns/catalina-sandstone.jpg',
    collection: 'Pebble'
  },
  {
    id: 'caterbury-antigua',
    name: 'Caterbury Antigua',
    description: 'Elegant terrazzo design with intricate detailing.',
    imageUrl: '/assets/patterns/canterbury-antigua.jpg',
    collection: 'Terrazzo'
  },
  {
    id: 'cirali-beach',
    name: 'Cirali Beach', 
    description: 'A classic blue pattern that creates a serene, crystal-clear water appearance.',
    imageUrl: '/assets/patterns/cirali-beach.jpg',
    collection: 'Terrazzo'
  },
  {
    id: 'clarkson-blue',
    name: 'Clarkson Blue',
    description: 'Natural stone pattern with deep blue tones for a luxurious look.',
    imageUrl: '/assets/patterns/clarkson-blue.jpg',
    collection: 'Pebble'
  },
  {
    id: 'disco',
    name: 'Disco',
    description: 'Playful mosaic pattern with dynamic elements.',
    imageUrl: '/assets/patterns/disco.jpg',
    collection: 'Mosaic'
  },
  {
    id: 'esagono',
    name: 'Esagono',
    description: 'Elegant mosaic design with pearlescent finish, perfect for modern pools.',
    imageUrl: '/assets/patterns/esagono.jpg',
    collection: 'Mosaic'
  },
  {
    id: 'gladstone',
    name: 'Gladstone',
    description: 'Elegant mosaic pattern with traditional appeal.',
    imageUrl: '/assets/patterns/gladstone.jpg',
    collection: 'Mosaic'
  },
  {
    id: 'hamlin-blue',
    name: 'Hamlin Blue',
    description: 'Deep ocean-inspired blue pattern with subtle texture.',
    imageUrl: '/assets/patterns/hamlin-blue.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'lake-tahoe',
    name: 'Lake Tahoe',
    description: 'Serene waterscape pattern inspired by mountain lakes.',
    imageUrl: '/assets/patterns/lake-tahoe.jpg',
    collection: 'Water Scape'
  },
  {
    id: 'maui',
    name: 'Maui',
    description: 'Tropical-inspired natural stone pattern.',
    imageUrl: '/assets/patterns/maui.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'maui-grey',
    name: 'Maui Grey',
    description: 'Subtle grey stone pattern with island charm.',
    imageUrl: '/assets/patterns/maui-grey.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'ocean-midnight',
    name: 'Ocean Midnight',
    description: 'Deep, rich pebble pattern reminiscent of ocean depths.',
    imageUrl: '/assets/patterns/ocean-midnight.jpg',
    collection: 'Pebble'
  },
  {
    id: 'oxford-blue-marble',
    name: 'Oxford Blue Marble',
    description: 'Deep blue marble pattern with classic appeal.',
    imageUrl: '/assets/patterns/oxford-blue-marble.jpg',
    collection: 'Natural Stone'
  },
  {
    id: 'raleigh-blue',
    name: 'Raleigh Blue',
    description: 'Classic Mediterranean tile pattern for timeless elegance.',
    imageUrl: '/assets/patterns/raleigh-blue.jpg',
    collection: 'Pebble'
  },
  {
    id: 'raleigh-grey',
    name: 'Raleigh Grey',
    description: 'Sophisticated grey pebble design for a modern aesthetic.',
    imageUrl: '/assets/patterns/raleigh-grey.jpg',
    collection: 'Pebble'
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    description: 'Dynamic wave pattern that brings movement and depth to your pool.',
    imageUrl: '/assets/patterns/sandstone.jpg',
    collection: 'Pebble'
  },
  {
    id: 'silver-antiqua',
    name: 'Silver Antiqua',
    description: 'Classic terrazzo pattern with silver accents.',
    imageUrl: '/assets/patterns/silver-antigua.jpg',
    collection: 'Terrazzo'
  },
  {
    id: 'silver-horizon',
    name: 'Silver Horizon',
    description: 'Modern terrazzo design with a silvery finish.',
    imageUrl: '/assets/patterns/silver-horizon.jpg',
    collection: 'Terrazzo'
  },
  {
    id: 'silver-lake',
    name: 'Silver Lake',
    description: 'Shimmering silver mosaic design for modern pools.',
    imageUrl: '/assets/patterns/silver-lake.jpg',
    collection: 'Mosaic'
  },
  {
    id: 'sonata',
    name: 'Sonata',
    description: 'Rhythmic water pattern creating visual movement.',
    imageUrl: '/assets/patterns/sonata.jpg',
    collection: 'Water Scape'
  },
  {
    id: 'water-street',
    name: 'Water Street',
    description: 'Contemporary water pattern with flowing design elements.',
    imageUrl: '/assets/patterns/water-street.jpg',
    collection: 'Water Scape'
  },
  {
    id: 'white-pebble',
    name: 'White Pebble',
    description: 'Clean and bright pebble pattern for a fresh pool appearance.',
    imageUrl: '/assets/patterns/white-pebble.jpg',
    collection: 'Pebble'
  }
]

const collections = ['All', 'Terrazzo', 'Mosaic', 'Pebble', 'Water Scape', 'Natural Stone']

export function PoolLinerGrid() {
  const [selectedCollection, setSelectedCollection] = useState('All')
  const [selectedLiner, setSelectedLiner] = useState<PoolLiner | null>(null)

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
                <div 
                  className="aspect-[3/4.65] w-full overflow-hidden rounded-t-lg bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedLiner(liner)}
                >
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
                    <span className="absolute inset-0" />
                    {liner.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2 h-10">{liner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedLiner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full mb-4">
              <Image
                src={selectedLiner.imageUrl}
                alt={selectedLiner.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{selectedLiner.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{selectedLiner.description}</p>
            <button
              onClick={() => setSelectedLiner(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}