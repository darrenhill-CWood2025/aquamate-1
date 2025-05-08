"use client"

export function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div 
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/gallery/blue-horizon/blue-horizon-1.jpg")' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Custom Pool Liners Crafted to Perfection
          </h1>
          <p className="mt-6 text-lg/8 text-gray-100 sm:text-xl/8">
            Fabricated in our state-of-the-art facility in beautiful Collingwood Ontario, we specialize in custom-fit liners for any pool shape or size, ensuring perfect fit and long-lasting quality.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/products/pool-liners"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
             View 2025 Collection <span aria-hidden="true">&rarr;</span>
            </a>
            {/* <a href="#services" className="text-sm font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}
