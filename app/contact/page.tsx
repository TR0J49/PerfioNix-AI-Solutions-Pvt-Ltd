import type { Metadata } from 'next'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Contact Us - Get AI Consulting & Solutions',
  description: `Contact Perfionix AI for AI consulting, machine learning solutions, and digital transformation services. Email: ${CONTACT_EMAIL} | Phone: ${CONTACT_PHONE}. Get a free consultation today.`,
  keywords: [
    'contact Perfionix AI',
    'AI consulting inquiry',
    'hire AI consultants',
    'AI solutions quote',
    'machine learning services contact',
    'AI development inquiry',
    'AI company contact India'
  ],
  openGraph: {
    title: `Contact ${SITE_NAME} | Get AI Solutions for Your Business`,
    description: 'Ready to transform your business with AI? Contact Perfionix AI for a free consultation. Our experts will help you implement the right AI solutions.',
    url: `${SITE_URL}/contact`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_NAME} | Get AI Solutions for Your Business`,
    description: 'Ready to transform your business with AI? Contact Perfionix AI for a free consultation.'
  },
  alternates: {
    canonical: `${SITE_URL}/contact`
  }
}

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}
