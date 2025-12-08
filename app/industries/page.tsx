import type { Metadata } from 'next'
import IndustriesHero from '@/components/IndustriesHero'
import IndustrySections from '@/components/IndustrySections'
import { SITE_URL, SITE_NAME } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Industries We Serve - AI Solutions for Every Sector',
  description: 'Perfionix AI delivers tailored artificial intelligence solutions across Healthcare, Finance, Agriculture, Manufacturing, Retail, Energy, and more. Transform your industry with AI.',
  keywords: [
    'AI for healthcare',
    'AI for finance',
    'AI for agriculture',
    'AI for manufacturing',
    'AI for retail',
    'AI for energy',
    'AI for education',
    'industry-specific AI solutions',
    'enterprise AI by industry',
    'AI digital transformation industries'
  ],
  openGraph: {
    title: `Industries We Serve | ${SITE_NAME}`,
    description: 'Explore how Perfionix AI transforms industries with tailored AI solutions for Healthcare, Finance, Agriculture, Manufacturing, Retail, and Energy sectors.',
    url: `${SITE_URL}/industries`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `Industries We Serve | ${SITE_NAME}`,
    description: 'Explore how Perfionix AI transforms industries with tailored AI solutions across multiple sectors.'
  },
  alternates: {
    canonical: `${SITE_URL}/industries`
  }
}

export default function Industries() {
  return (
    <div>
      <IndustriesHero />
      <IndustrySections />
    </div>
  )
}
