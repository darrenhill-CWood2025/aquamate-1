import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warranty Information',
  description: 'Learn about AquaMate Inc.\'s comprehensive 20-year limited warranty for custom pool liners. Coverage includes manufacturing defects, seam separation, and material deterioration.',
  keywords: ['pool liner warranty', 'AquaMate warranty', '20 year warranty', 'pool liner guarantee', 'warranty coverage'],
  openGraph: {
    title: 'Pool Liner Warranty - 20 Year Coverage | AquaMate Inc.',
    description: 'Comprehensive 20-year limited warranty coverage for all AquaMate custom pool liners. Peace of mind for your pool investment.',
    images: ['/assets/aquamate-warranty.webp'],
  },
  alternates: {
    canonical: 'https://www.aquamatepool.com/warranty',
  },
}

export default function WarrantyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Peace of Mind</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Warranty Coverage</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We stand behind the quality of our pool liners with comprehensive warranty coverage.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <div className="rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">20-Year Limited Warranty</h3>
            <p className="mt-4 text-base text-gray-600">
              Our pool liners are backed by a 20-year limited warranty that covers:
            </p>
            <ul className="mt-6 space-y-4 text-base text-gray-600">
              <li className="flex gap-x-3">
                <span className="text-blue-600">•</span>
                Manufacturing defects in material and workmanship
              </li>
              <li className="flex gap-x-3">
                <span className="text-blue-600">•</span>
                Seam separation under normal use and maintenance
              </li>
              <li className="flex gap-x-3">
                <span className="text-blue-600">•</span>
                Premature material deterioration
              </li>
              <li className="flex gap-x-3">
                <span className="text-blue-600">•</span>
                Color fading beyond normal wear
              </li>
            </ul>
          </div>
          <div className="mt-8 space-y-6 text-base text-gray-600">
            <p>
              Our warranty represents our commitment to quality and customer satisfaction. Contact us for detailed warranty 
              information and registration.
            </p>
            <p>
              For warranty claims or questions, please contact our customer service team at{' '}
              <a href="mailto:sales@aquamatepool.com" className="text-blue-600 hover:text-blue-500">
                sales@aquamatepool.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}