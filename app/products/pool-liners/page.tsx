import { PoolLinerGrid } from '../../components/pool-liner-grid'

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