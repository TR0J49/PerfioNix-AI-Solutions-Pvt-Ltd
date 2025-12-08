import type { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import { SITE_URL, SITE_NAME } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'AI Services - Machine Learning, NLP, Computer Vision, Generative AI',
  description: 'Discover Perfionix AI services including AI automation, predictive analytics, NLP, computer vision, generative AI integration, RAG systems, and LLM implementation tailored for enterprise transformation.',
  keywords: [
    'AI services',
    'machine learning services',
    'AI automation',
    'predictive analytics',
    'natural language processing',
    'computer vision services',
    'generative AI integration',
    'LLM implementation',
    'RAG systems development',
    'AI consulting services',
    'enterprise AI services',
    'custom AI development'
  ],
  openGraph: {
    title: `AI Services by ${SITE_NAME} | Enterprise AI & Automation Experts`,
    description: 'From AI automation to generative AI integration, explore Perfionix AI services designed to accelerate digital transformation.',
    url: `${SITE_URL}/services`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `AI Services | ${SITE_NAME}`,
    description: 'AI automation, predictive analytics, NLP, computer vision, and generative AI integration for enterprises.'
  },
  alternates: {
    canonical: `${SITE_URL}/services`
  }
}

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <ServicesList />
    </div>
  )
}
