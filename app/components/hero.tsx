"use client"

import Image from "next/image"

export const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <Image
              alt="AquaMate Pools"
              src="/assets/logo.svg"
              width={400}
              height={44}
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Industry veteran Darren Hill launches AquaMate Inc.{' '}
                <a target="_new" href="https://www.poolspamarketing.com/trade/industry-veteran-darren-hill-launches-aquamate-inc/" className="whitespace-nowrap font-semibold text-coral-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
              AquaMate Pools
            </h1> */}
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Using our state of the art facility in beautiful Collingwood Ontario, we specialize in custom-fit liners for any pool shape or size, ensuring perfect fit and long-lasting quality.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="mailto:sales@aquamatepool.com"
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
               Contact Us
              </a>
              {/* <a href="tel:1-705-445-4454" className="text-sm/6 font-semibold text-gray-900">
                Telephone: 1-705-445-4454 
              </a> */}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            alt="Pool with custom liner"
            src="/assets/aquamate-hero.jpg"
            width={2102}
            height={1400}
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            priority
          />
        </div>
      </div>
    </div>
  )
}
