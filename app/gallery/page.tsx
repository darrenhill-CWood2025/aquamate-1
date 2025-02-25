import Image from 'next/image'

const galleryImages = [
  {
    src: '/assets/gallery/pool-1.jpg',
    alt: 'Custom pool with blue liner',
  },
  {
    src: '/assets/gallery/pool-2.jpg',
    alt: 'Modern pool design',
  },
  {
    src: '/assets/gallery/pool-3.jpg',
    alt: 'Pool with mosaic liner pattern',
  },
  {
    src: '/assets/gallery/pool-4.jpg',
    alt: 'Luxury pool installation',
  },
  {
    src: '/assets/gallery/pool-5.jpg',
    alt: 'Resort-style pool',
  },
  {
    src: '/assets/gallery/pool-6.jpg',
    alt: 'Elegant pool design',
  },
  {
    src: '/assets/gallery/pool-7.jpg',
    alt: 'Family pool with custom liner',
  },
  {
    src: '/assets/gallery/pool-8.jpg',
    alt: 'Contemporary pool design',
  },
]

export default function GalleryPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Gallery</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our collection of custom pool liner installations and transformations.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 