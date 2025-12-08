import type { Metadata } from 'next'
import ProductsHero from '@/components/ProductsHero'
import ProductsList from '@/components/ProductsList'
import { SITE_URL, SITE_NAME } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'AI Products - AXIO AI, DocNavigator, Friday Voice Assistant, RenewForecast',
  description: 'Explore Perfionix AI innovative product suite: AXIO AI productivity platform, DocNavigator AI documentation assistant, Friday multilingual voice assistant, and RenewForecast renewable energy prediction system.',
  keywords: [
    'AXIO AI',
    'DocNavigator AI',
    'Friday AI voice assistant',
    'RenewForecast',
    'AI productivity platform',
    'AI document assistant',
    'AI voice bot Hindi',
    'renewable energy forecasting AI',
    'solar power prediction',
    'wind energy prediction',
    'RAG system',
    'AI knowledge base'
  ],
  openGraph: {
    title: `AI Products by ${SITE_NAME} | AXIO AI, DocNavigator, Friday & More`,
    description: 'Discover our cutting-edge AI products: AXIO AI for productivity, DocNavigator for documentation intelligence, Friday voice assistant, and RenewForecast for energy prediction.',
    url: `${SITE_URL}/products`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `AI Products by ${SITE_NAME}`,
    description: 'Explore AXIO AI, DocNavigator, Friday Voice Assistant, and RenewForecast - AI products designed to transform businesses.'
  },
  alternates: {
    canonical: `${SITE_URL}/products`
  }
}

export default function Products() {
  return (
    <div>
      <ProductsHero />
      <ProductsList />
    </div>
  )
}
