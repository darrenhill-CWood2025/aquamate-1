import { ContactForm } from './contact-form';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AquaMate Inc. for custom pool liner quotes, product information, and support. Contact our Canadian manufacturing facility in Collingwood, Ontario.',
  keywords: ['contact AquaMate', 'pool liner quote', 'custom pool liner inquiry', 'Collingwood Ontario'],
  openGraph: {
    title: 'Contact AquaMate Inc. - Get Your Custom Pool Liner Quote',
    description: 'Contact our expert team for custom pool liner solutions. Fast quotes, professional service, and Canadian-made quality.',
    images: ['/assets/contact-us.webp'],
  },
  alternates: {
    canonical: 'https://www.aquamatepool.com/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
