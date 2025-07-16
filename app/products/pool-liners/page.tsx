import { PoolLinerGrid } from '../../components/pool-liner-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pool Liner Patterns - 2025 Collection',
  description: 'Explore our 2025 collection of premium pool liner patterns. Choose from AquaFinish™, AquaSculpt™, AquaShift™, and AquaShimmer™ designs. Custom sizes available for any pool shape.',
  keywords: ['pool liner patterns', '2025 pool liners', 'custom pool liners', 'vinyl liner designs', 'AquaFinish', 'AquaSculpt', 'AquaShift', 'AquaShimmer'],
  openGraph: {
    title: 'Pool Liner Patterns 2025 - AquaMate Inc.',
    description: 'Browse our extensive collection of premium pool liner patterns. Custom fabrication for any pool shape or size.',
    images: ['/assets/gallery-harmony.webp'],
  },
  alternates: {
    canonical: 'https://www.aquamatepool.com/products/pool-liners',
  },
}

export default function PoolLinersPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">2025 Collection</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            Pool Liner Patterns
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Choose from our wide selection of custom pool liner patterns, each designed to enhance the beauty of your pool 
            while providing exceptional durability and style.
          </p>
        </div>
      </div>
      <PoolLinerGrid />
    </div>
  )
}