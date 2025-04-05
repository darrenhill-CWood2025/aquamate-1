import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Import poolLiners data and related components
import { poolLiners, getPoolLinerById } from '../../../components/pool-liner-data'
import { RelatedLiners } from '../../../components/related-liners'

export function generateStaticParams() {
  return poolLiners.map((liner) => ({
    id: liner.id,
  }))
}

export default function PoolLinerPage({ params }: { params: { id: string } }) {
  const liner = getPoolLinerById(params.id)
  
  if (!liner) {
    notFound()
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="mb-8">
          <Link 
            href="/products/pool-liners"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Pool Liners
          </Link>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={liner.imageUrl}
                alt={liner.name}
                width={800}
                height={1200}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            
            {liner.galleryImages.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {liner.galleryImages.slice(0, 4).map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={image}
                      alt={`${liner.name} gallery image ${index + 1}`}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">{liner.name}</h1>
              <p className="mt-2 text-lg text-blue-600">{liner.collection} Collection</p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-4 text-lg text-gray-600">{liner.longDescription}</p>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Features</h2>
                <ul className="mt-4 space-y-2 text-gray-600">
                  {liner.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium vinyl material
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom-fit for any pool shape
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    15-year warranty
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-gray-900">Get a Quote</h2>
                <p className="mt-4 text-gray-600">
                  Interested in the {liner.name} pattern for your pool? 
                  Contact our team to get a personalized quote for your project.
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <RelatedLiners currentLiner={liner} limit={3} />
      </div>
    </div>
  )
}