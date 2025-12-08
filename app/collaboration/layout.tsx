import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Collaborate With Us - AI Partnership & Integration',
  description: `Partner with ${SITE_NAME} for strategic AI collaborations. We offer enterprise integration, innovation sprints, and custom AI solutions. Contact: ${CONTACT_EMAIL}`,
  keywords: [
    'AI partnership',
    'AI collaboration',
    'enterprise AI integration',
    'AI consulting partnership',
    'strategic AI partnership',
    'AI development partner',
    'machine learning partnership',
    'AI innovation partner'
  ],
  openGraph: {
    title: `Collaborate with ${SITE_NAME} | AI Partnership & Integration`,
    description: 'Partner with Perfionix AI for strategic AI collaborations, enterprise integration, and innovation sprints. Let us build the future of AI together.',
    url: `${SITE_URL}/collaboration`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `Collaborate with ${SITE_NAME} | AI Partnership & Integration`,
    description: 'Partner with Perfionix AI for strategic AI collaborations and enterprise integration.'
  },
  alternates: {
    canonical: `${SITE_URL}/collaboration`
  }
}

export default function CollaborationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
