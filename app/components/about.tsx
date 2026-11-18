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
            <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Proud Partner of Poolside by CGT</h2>
            <p className="mt-6 text-base/7 text-gray-600">
              AquaMate is proud to partner with Poolside by CGT, a Canadian vinyl manufacturer that has been in the pool business
              for over 35 years. Poolside by CGT manufactures premium pool vinyl and is the world&apos;s leading vinyl manufacturer
              for in-ground pools. All CGT products are manufactured in accordance with ISO 9001:2015, ISO 14001:2018, and
              ISO 45001:2018, ensuring the highest standards of quality, environmental responsibility, and workplace safety.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Caspian pool liner pattern"
                  src="/assets/gallery/caspian/caspian-0.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt="Antigua Twilight pool liner pattern"
                  src="/assets/gallery/twilight/twilight-0.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Quartz Garden pool liner pattern"
                  src="/assets/gallery/quartz-garden/quartz-garden-0.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                <Image
                  alt="Maui pool liner pattern"
                  src="/assets/gallery/maui/maui-0.jpg"
                  width={560}
                  height={560}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 