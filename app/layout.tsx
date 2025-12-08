import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_LOGO,
  SEO_KEYWORDS,
  SOCIAL_LINKS,
  COMPANY_ADDRESS,
  PRODUCTS,
  SERVICES
} from '@/lib/siteConfig'

// Lazy load ChatWidget for better performance
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { 
  ssr: false,
  loading: () => null 
})

// Navigation loader
const NavigationLoader = dynamic(() => import('@/components/NavigationLoader'), {
  ssr: false
})

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Perfionix AI - Empowering Industries with Intelligent Innovation | AI Consulting India',
    template: '%s | Perfionix AI'
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'en-IN': SITE_URL
    }
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Perfionix AI - Empowering Industries with Intelligent Innovation',
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_US',
    emails: [CONTACT_EMAIL],
    phoneNumbers: [CONTACT_PHONE],
    images: [
      {
        url: SITE_LOGO,
        width: 512,
        height: 512,
        alt: 'Perfionix AI - AI Consulting Company Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perfionix AI - Empowering Industries with Intelligent Innovation',
    description: SITE_DESCRIPTION,
    site: '@PerfionixAI',
    creator: '@PerfionixAI',
    images: {
      url: SITE_LOGO,
      alt: 'Perfionix AI Logo'
    }
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/cropped_circle_image.png', sizes: '32x32', type: 'image/png' },
      { url: '/cropped_circle_image.png', sizes: '16x16', type: 'image/png' },
      { url: '/cropped_circle_image.png', sizes: '192x192', type: 'image/png' },
      { url: '/cropped_circle_image.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/cropped_circle_image.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/cropped_circle_image.png'
  },
  manifest: '/manifest.json'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${SITE_URL}/#organization`,
              url: SITE_URL,
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              email: CONTACT_EMAIL,
              telephone: CONTACT_PHONE,
              logo: {
                '@type': 'ImageObject',
                url: SITE_URL + SITE_LOGO,
                width: 512,
                height: 512
              },
              image: SITE_URL + SITE_LOGO,
              address: {
                '@type': 'PostalAddress',
                addressLocality: COMPANY_ADDRESS.locality,
                addressRegion: COMPANY_ADDRESS.region,
                addressCountry: COMPANY_ADDRESS.countryCode
              },
              sameAs: [
                SOCIAL_LINKS.linkedin,
                SOCIAL_LINKS.instagram,
                SOCIAL_LINKS.twitter
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: CONTACT_EMAIL,
                  telephone: CONTACT_PHONE,
                  contactType: 'sales',
                  areaServed: 'Worldwide',
                  availableLanguage: ['English', 'Hindi']
                },
                {
                  '@type': 'ContactPoint',
                  email: CONTACT_EMAIL,
                  contactType: 'customer service',
                  areaServed: 'Worldwide',
                  availableLanguage: ['English', 'Hindi']
                }
              ],
              foundingDate: '2024',
              foundingLocation: {
                '@type': 'Place',
                name: 'Nagpur, Maharashtra, India'
              },
              knowsAbout: SERVICES
            })
          }}
        />

        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': `${SITE_URL}/#service`,
              name: SITE_NAME,
              image: SITE_URL + SITE_LOGO,
              telephone: CONTACT_PHONE,
              email: CONTACT_EMAIL,
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                addressLocality: COMPANY_ADDRESS.locality,
                addressRegion: COMPANY_ADDRESS.region,
                addressCountry: COMPANY_ADDRESS.countryCode
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '21.1458',
                longitude: '79.0882'
              },
              sameAs: [
                SOCIAL_LINKS.linkedin,
                SOCIAL_LINKS.instagram,
                SOCIAL_LINKS.twitter
              ],
              serviceType: SERVICES,
              areaServed: [
                { '@type': 'Country', name: 'India' },
                { '@type': 'Country', name: 'United States' },
                { '@type': 'Country', name: 'United Kingdom' },
                { '@type': 'Place', name: 'Worldwide' }
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AI Services',
                itemListElement: SERVICES.map((service, index) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: service,
                    provider: {
                      '@type': 'Organization',
                      name: SITE_NAME
                    }
                  }
                }))
              }
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              publisher: {
                '@id': `${SITE_URL}/#organization`
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${SITE_URL}/search?q={search_term_string}`
                },
                'query-input': 'required name=search_term_string'
              },
              inLanguage: 'en-US'
            })
          }}
        />

        {/* Software Products Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Perfionix AI Products',
              description: 'AI-powered software products by Perfionix AI',
              itemListElement: PRODUCTS.map((product, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'SoftwareApplication',
                  name: product.name,
                  description: product.description,
                  url: product.url,
                  applicationCategory: product.category,
                  operatingSystem: 'Web Browser',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD'
                  },
                  creator: {
                    '@type': 'Organization',
                    name: SITE_NAME
                  }
                }
              }))
            })
          }}
        />

        {/* FAQ Schema for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Perfionix AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Perfionix AI is a leading AI consulting company that delivers strategic artificial intelligence solutions to accelerate digital transformation and drive data-powered decision making for enterprises globally.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What AI services does Perfionix AI offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Perfionix AI offers AI Consulting, Machine Learning Solutions, Predictive Analytics, Natural Language Processing, Computer Vision, Generative AI Integration, AI Automation, Data Analytics, and Custom AI Development services.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What industries does Perfionix AI serve?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Perfionix AI serves multiple industries including Healthcare, Finance & Banking, Agriculture, Manufacturing, Retail & E-commerce, Energy & Utilities, Education, and Logistics & Supply Chain.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What AI products does Perfionix AI offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Perfionix AI offers AXIO AI (productivity platform), DocNavigator AI (documentation intelligence), Friday AI Voice Assistant (multilingual voice assistant), and RenewForecast (renewable energy forecasting).'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How can I contact Perfionix AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `You can contact Perfionix AI via email at ${CONTACT_EMAIL} or phone at ${CONTACT_PHONE}. We are based in Nagpur, Maharashtra, India and serve clients worldwide.`
                  }
                }
              ]
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE_URL
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: `${SITE_URL}/services`
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Products',
                  item: `${SITE_URL}/products`
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Industries',
                  item: `${SITE_URL}/industries`
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'About',
                  item: `${SITE_URL}/about`
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  name: 'Contact',
                  item: `${SITE_URL}/contact`
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NavigationLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
