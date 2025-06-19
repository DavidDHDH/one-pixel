import BenefitsSection from '@/components/website-page/BenefitsSection'
import CTASection from '@/components/website-page/CTASection'
import FAQSectionWebsite from '@/components/website-page/FAQSection'
import FeaturesSection from '@/components/website-page/FeaturesSection'
import HeroSectionWebsite from '@/components/website-page/HeroSectionWebsite'
import IAIntegrationSection from '@/components/website-page/IAIntegrationSection'
import ProcessSection from '@/components/website-page/ProcessSection'
import ProjectsSection from '@/components/website-page/ProjectsSection'
import type { Metadata } from 'next'
import { metadata as pageMetadata } from './metadata'

export const metadata: Metadata = pageMetadata

export default function CreationSiteInternetPage() {
  return (
    <div 
      id="calendly" 
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Création de site internet à Saint-Barthélemy" />
      <meta itemProp="description" content="Création de sites internet professionnels et modernes à Saint-Barthélemy. Design unique, optimisation mobile et SEO local inclus." />
      <meta itemProp="url" content="https://one-pixel.com/creation-site-internet" />
      <meta itemProp="inLanguage" content="fr-FR" />
      <meta itemProp="about" content="Services de création de sites web" />
      
      <HeroSectionWebsite />
      <FeaturesSection />
      <ProjectsSection />
      <ProcessSection />
      <BenefitsSection />
      <IAIntegrationSection />
      <CTASection />
      <FAQSectionWebsite />
    </div>
  )
}
