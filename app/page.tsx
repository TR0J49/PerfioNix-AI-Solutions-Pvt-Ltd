import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import KeyHighlights from '@/components/KeyHighlights'
import TrustedCollaboration from '@/components/TrustedCollaboration'
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME, SITE_LOGO } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'AI Consulting & Intelligent Solutions for Enterprises | Best AI Company India',
  description: `${SITE_DESCRIPTION} Transform your business with AXIO AI, DocNavigator, Friday Voice Assistant, and RenewForecast.`,
  keywords: [
    'AI consulting India',
    'best AI company',
    'enterprise AI solutions',
    'machine learning services',
    'digital transformation',
    'AI automation',
    'generative AI',
    'Perfionix AI',
    'AI products',
    'AXIO AI',
    'artificial intelligence company India'
  ],
  openGraph: {
    title: `${SITE_NAME} | Enterprise AI Consulting & Solutions`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    images: [
      {
        url: SITE_LOGO,
        width: 512,
        height: 512,
        alt: 'Perfionix AI - AI Consulting Company'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | AI Consulting & Solutions`,
    description: 'Empowering industries with intelligent AI innovation. Transform your business with cutting-edge AI solutions.'
  },
  alternates: {
    canonical: SITE_URL
  }
}

export default function Home() {
  return (
    <div>
      <Hero />
      <KeyHighlights />
      <TrustedCollaboration />
    </div>
  )
}
