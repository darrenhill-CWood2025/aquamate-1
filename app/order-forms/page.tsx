import { Metadata } from 'next'
import OrderFormsClient from './order-forms-client'

export const metadata: Metadata = {
  title: 'Pool Liner Order Forms',
  description: 'Download specialty liner order forms for every pool shape - rectangle, kidney, freeform, L-shaped, and more. Email completed forms to get your custom AquaMate pool liner fabricated.',
  keywords: ['pool liner order form', 'custom pool liner measurement', 'pool shape template', 'liner order form download'],
  openGraph: {
    title: 'Pool Liner Order Forms | AquaMate Inc.',
    description: 'Download order forms for any pool shape. Each form captures all critical measurements needed for a perfect-fitting custom liner.',
    images: ['/assets/aquamate-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.aquamatepool.com/order-forms',
  },
}

export default function OrderFormsPage() {
  return <OrderFormsClient />
}
