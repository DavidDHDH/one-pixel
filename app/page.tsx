'use client'

import AboutMe from '@/components/about-me/AboutMe'
import CTA from '@/components/CTA/CTA'
import ExpertiseIAPreview from '@/components/expertise/ExpertiseIAPreview'
import FaqSection from '@/components/faq/FaqSection'
import HeroSection from '@/components/hero-section/HeroSection'
import Partners from '@/components/partners/Partners'
import ProcessSection from '@/components/process/Process'
import Portfolio from '@/components/projects/Portfolio'
import Services from '@/components/services/Services'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import WhySection from '@/components/why-section/WhySection'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <div id="calendly">
        <HeroSection />
        <Partners />
        <Portfolio />
        <TestimonialsSection />
        <Services />
        <ExpertiseIAPreview />
        <ProcessSection />
        <WhySection />
        <AboutMe withStack />
        <FaqSection />
        <CTA />
      </div>

      <Script
        id="ld-json-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'One Pixel',
            url: 'https://www.one-pixel.com',
            logo: 'https://www.one-pixel.com/images/logo.webp',
            description:
              'Agence web à Saint-Barthélemy spécialisée dans la création de sites internet et applications métiers boostées à l’IA.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Saint-Barthélemy',
              addressCountry: 'FR',
              postalCode: '97133',
              streetAddress: 'Quartier de Lorient',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'hello@one-pixel.com',
              contactType: 'customer support',
            },
            sameAs: [
              'https://www.linkedin.com/in/david-heimfert',
              'https://github.com/DavidDHDH',
            ],
          }),
        }}
      />
    </>
  )
}
