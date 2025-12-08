import type { Metadata } from 'next'
import CompanyOverview from '@/components/CompanyOverview'
import MissionVision from '@/components/MissionVision'
import CoreValues from '@/components/CoreValues'
import { SITE_URL, SITE_NAME } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'About Us - AI Consulting & Innovation Company',
  description: 'Learn about Perfionix AI - a leading AI consulting company empowering industries with intelligent innovation. Discover our mission, vision, and core values driving digital transformation.',
  keywords: [
    'about Perfionix AI',
    'AI consulting company',
    'AI company India',
    'artificial intelligence company',
    'AI innovation',
    'machine learning company',
    'digital transformation company'
  ],
  openGraph: {
    title: `About ${SITE_NAME} | AI Consulting & Innovation Leaders`,
    description: 'Discover how Perfionix AI empowers industries with cutting-edge artificial intelligence solutions. Learn about our mission to drive intelligent innovation globally.',
    url: `${SITE_URL}/about`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${SITE_NAME} | AI Consulting & Innovation Leaders`,
    description: 'Discover how Perfionix AI empowers industries with cutting-edge artificial intelligence solutions.'
  },
  alternates: {
    canonical: `${SITE_URL}/about`
  }
}

export default function About() {
  return (
    <div>
      <CompanyOverview />
      <MissionVision />
      <CoreValues />
    </div>
  )
}
