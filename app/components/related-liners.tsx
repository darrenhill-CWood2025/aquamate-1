"use client"

import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPoolLiners, type PoolLiner } from './pool-liner-data'

interface RelatedLinersProps {
  currentLiner: PoolLiner;
  limit?: number;
}

export function RelatedLiners({ currentLiner, limit = 3 }: RelatedLinersProps) {
  // Get related liners from the same collection
  const relatedLiners = getRelatedPoolLiners(currentLiner, limit);

  if (relatedLiners.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Related Patterns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedLiners.map((liner) => (
          <Link 
            key={liner.id} 
            href={`/products/pool-liners/${liner.id}`}
            className="group"
          >
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={liner.imageUrl}
                alt={`${liner.name} - ${liner.collection} collection pool liner pattern`}
                width={400}
                height={400}
                className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{liner.name}</h3>
            <p className="mt-1 text-sm text-gray-600">{liner.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}