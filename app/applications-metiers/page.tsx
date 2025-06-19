import AboutMe from '@/components/about-me/AboutMe'
import BusinessAppSection from '@/components/business-app/BusinessAppSection'
import CTASectionBusinessApp from '@/components/business-app/CTASectionBusinessApp'
import FAQSectionBusinessApp from '@/components/business-app/FAQSectionBusinessApp'
import HeroSectionBusinessApp from '@/components/business-app/HeroSectionBusinessApp'
import WhyCustomSection from '@/components/business-app/WhyCustomSection'
import type { Metadata } from 'next'
import { metadata as pageMetadata } from './metadata'

export const metadata: Metadata = pageMetadata

export default function ApplicationsMetiersPage() {
  return (
    <div
      id="calendly"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta
        itemProp="name"
        content="Applications métiers sur mesure à Saint-Barthélemy"
      />
      <meta
        itemProp="description"
        content="Développement d'applications métiers personnalisées à Saint-Barthélemy. Solutions digitales sur mesure pour optimiser vos processus d'entreprise."
      />
      <meta
        itemProp="url"
        content="https://one-pixel.com/applications-metiers"
      />
      <meta itemProp="inLanguage" content="fr-FR" />
      <meta itemProp="about" content="Développement d'applications métiers" />

      <HeroSectionBusinessApp />
      <BusinessAppSection />
      <WhyCustomSection />
      <CTASectionBusinessApp />
      <FAQSectionBusinessApp />
      <AboutMe />
    </div>
  )
}
