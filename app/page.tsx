import { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'AquaMate Inc. - Premium Custom Pool Liners | Made in Canada',
  description: 'Custom vinyl pool liners fabricated in Collingwood, Ontario. Browse our 2026 collection featuring AquaFinish, AquaShimmer, AquaShift, and AquaSense technologies. Custom-fit for any pool shape or size.',
  keywords: ['custom pool liners', 'vinyl pool liners', 'pool liner manufacturer', 'Canadian pool liners', 'Collingwood Ontario', 'AquaMate', '2026 pool liners'],
  openGraph: {
    title: 'AquaMate Inc. - Premium Custom Pool Liners | Made in Canada',
    description: 'Custom vinyl pool liners fabricated in Collingwood, Ontario. Browse our 2026 collection featuring AquaFinish, AquaShimmer, AquaShift, and AquaSense technologies.',
    images: ['/assets/aquamate-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.aquamatepool.com',
  },
}

export default function Home() {
  return <HomeClient />
}
