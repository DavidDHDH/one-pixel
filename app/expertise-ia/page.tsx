import type { Metadata } from 'next'
import { metadata as pageMetadata } from './metadata'
import AboutMe from '@/components/about-me/AboutMe'
import HeroSectionIA from '@/components/ia-page/HeroSectionIA'
import ExpertiseIASection from '@/components/expertise/ExpertiseIASection'
import AIFearSection from '@/components/ia-page/AIFearSection'
import FAQSectionIA from '@/components/ia-page/FAQSectionIA'

export const metadata: Metadata = pageMetadata

export default function IntelligenceArtificiellePage() {
  return (
    <div 
      id="calendly" 
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Expertise Intelligence Artificielle à Saint-Barthélemy" />
      <meta itemProp="description" content="Solutions d'intelligence artificielle pour entreprises à Saint-Barthélemy. Automatisation, chatbots, analyse de données et plus." />
      <meta itemProp="url" content="https://one-pixel.com/expertise-ia" />
      <meta itemProp="inLanguage" content="fr-FR" />
      <meta itemProp="about" content="Services d'intelligence artificielle" />
      
      <HeroSectionIA />
      <ExpertiseIASection />
      <AIFearSection />
      <FAQSectionIA />
      <AboutMe />
    </div>
  )
}
