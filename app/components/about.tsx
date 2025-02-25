"use client"

import Image from 'next/image'

export function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-blue-600">About AquaMate</p>
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Crafting Perfect Pool Liners Since 2024
          </h1>
          <p className="mt-6 text-balance text-xl/8 text-gray-700">
            Founded by industry veteran Darren Hill, AquaMate brings decades of expertise in pool services to serve pool owners across Canada.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Our mission</h2>
            <p className="mt-6 text-base/7 text-gray-600">
              At AquaMate, we&apos;re committed to delivering excellence in pool liner solutions. Our mission is to provide custom-fit, 
              high-quality pool liners that enhance the beauty and longevity of your pool. We understand that every pool is unique, 
              which is why we specialize in creating perfectly tailored solutions for any pool shape or size.
            </p>
            <p className="mt-8 text-base/7 text-gray-600">
              Our team combines cutting-edge technology with traditional craftsmanship to ensure every liner we produce meets the 
              highest standards of quality and durability. We take pride in our attention to detail and our commitment to customer 
              satisfaction, making sure every installation is perfect from start to finish.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Pool liner installation"
                  src="/assets/patterns/blue-horizon.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt="Custom pool liner detail"
                  src="/assets/patterns/maui.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Finished pool with new liner"
                  src="/assets/patterns/silver-lake.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt="Pool liner fabrication process"
                  src="/assets/patterns/oxford-blue-marble.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500">Our Impact</p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Years Experience</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>25</span>+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Pools Serviced</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>1000</span>+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-600">Custom Patterns</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>50</span>+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600">Satisfaction Rate</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight">
                  <span>100</span>%
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
} 