'use client'

import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { BoltIcon } from '@heroicons/react/24/outline'
import CTAButtons from '../website-page/CTAButtons'

// const stats = [
//   { label: 'Entreprises transformées', value: '15+' },
//   { label: 'Temps économisé', value: '80%' },
//   { label: 'ROI moyen', value: '300%' },
// ]

export default function HeroSectionIA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sand-50 to-white pt-10 h-[85vh] flex items-center">
      {/* Background decoration avec image de plage */}
      <div className="absolute inset-0 bg-[url('/images/beach-cover.webp')] bg-center bg-cover [mask-image:linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.3)_70%,rgba(255,255,255,0)_85%,transparent_100%)]" />

      {/* Subtle tech overlay pour effet IA */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5" />

      {/* White overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center w-full">
          {/* Badge */}
          <div className="mb-8">
            <div
              className={cn(
                'group inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm/6 text-gray-900 transition-all ease-in shadow-lg'
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
                <span className="mr-2">🤖</span>{' '}
                <span>Intelligence Artificielle pour entreprises</span>
              </AnimatedShinyText>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-rubik text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl mb-8">
            Révolutionne ton business avec{' '}
            <span className="text-sand-700">l&apos;IA</span>
          </h1>

          <p className="text-lg leading-8 text-gray-900 max-w-xl mx-auto [text-shadow:0_2px_4px_rgba(255,255,255,0.8)] mb-10">
            <strong>
              Automatise tes tâches répétitives, améliore ton service client et
              prends des décisions éclairées
            </strong>{' '}
            grâce à des solutions d&apos;Intelligence Artificielle adaptées au
            marché caribéen.
          </p>

          {/* Key benefits */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <BoltIcon className="h-4 w-4 text-sand-600 flex-shrink-0" />
              <span>Automatisation 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <BoltIcon className="h-4 w-4 text-sand-600 flex-shrink-0" />
              <span>Données sécurisées</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <BoltIcon className="h-4 w-4 text-sand-600 flex-shrink-0" />
              <span>ROI mesurable</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <CTAButtons
            primaryText="🚀 Analyse IA gratuite"
            emailSubject="Analyse IA gratuite"
            secondaryText="Voir les cas d'usage"
            secondaryHref="#expertise-ia"
          />

          {/* Stats */}
          {/* <div className="mt-16 border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-semibold text-sand-700">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom wave transition */}
    </div>
  )
}
