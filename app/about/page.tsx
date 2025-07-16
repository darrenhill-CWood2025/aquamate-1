import { About } from '../components/about'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AquaMate Inc., a leading Canadian manufacturer of custom pool liners. Discover our commitment to quality, innovation, and exceptional craftsmanship since our founding in Collingwood, Ontario.',
  openGraph: {
    title: 'About AquaMate Inc. - Premium Pool Liner Manufacturer',
    description: 'Discover the story behind AquaMate Inc., Canada\'s trusted custom pool liner manufacturer based in Collingwood, Ontario.',
    images: ['/assets/aquamate-facility.jpeg'],
  },
  alternates: {
    canonical: 'https://www.aquamatepool.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <About />
    </div>
  )
} 