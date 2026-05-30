import { ReactNode } from 'react'

interface StructuredDataProps {
  type: 'organization' | 'softwareApplication'
}

export function StructuredData({ type }: StructuredDataProps): ReactNode {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prepviewai.com'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prepview AI',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description: 'AI-powered interview preparation platform',
    sameAs: [
      // Add your social media URLs here
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Prepview AI',
    description: 'Master technical interviews with AI-powered interview prep. Practice with real interview questions, get instant AI feedback, and ace your next interview.',
    url: baseUrl,
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100',
    },
  }

  const schema = type === 'organization' ? organizationSchema : softwareApplicationSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default StructuredData
