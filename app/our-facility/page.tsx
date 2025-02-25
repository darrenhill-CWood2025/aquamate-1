import Image from 'next/image'

import {
  BeakerIcon,
  BuildingOfficeIcon,
  CubeIcon,
  CogIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'State-of-the-Art Equipment',
    description: 'Our facility features the latest in pool liner manufacturing technology, ensuring precise cuts and durable seams.',
    icon: CogIcon,
  },
  {
    name: 'Quality Control Lab',
    description: 'Every liner undergoes rigorous testing for material strength, seam integrity, and pattern alignment.',
    icon: BeakerIcon,
  },
  {
    name: 'Custom Fabrication',
    description: 'Specialized equipment allows us to create custom-fit liners for any pool shape or size.',
    icon: CubeIcon,
  },
  {
    name: 'Manufacturing & Distribution Facility',
    description: 'Our modernfacility in Collingwood houses our entire manufacturing and warehouse operations, including our PENTAIR POOL distribution products.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'RF Welding and Material Integrity',
    description: 'RF welding preserves material integrity by generating internal heat for stronger bonds. Unlike traditional welding, it avoids high external temperatures, ensuring durability and a superior finish.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Distribution Network',
    description: 'Efficient shipping and logistics to serve pool professionals across Canada.',
    icon: TruckIcon,
  },
]

export default function FacilityPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">Manufacturing Excellence</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            Our Collingwood Facility
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Located in the heart of Collingwood, our state-of-the-art manufacturing facility combines advanced technology 
            with expert craftsmanship to produce the highest quality pool liners in the industry.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            alt="AquaMate facility interior"
            src="/assets/aquamate-facility.jpeg"
            width={2432}
            height={1442}
            className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-blue-600" />
                {feature.name}
              </dt>{' '}<br/>
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
} 