import { testimonials } from '@/datas/testimonials'
import { cn } from '@/lib/utils'
import { StarIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import TestimonialCard from '../hero-section/TestimonialCard'
import AnimatedShinyText from '../ui/animated-shiny-text'
import CTAButtons from './CTAButtons'

const highlights = [
  'Livraison en 1-2 semaines',
  'Design professionnel unique',
  'Optimisé mobile et SEO',
  'Allers-retours illimités',
]

const testimonialWebsite =
  testimonials.find((t) => t.author.name === 'Pierre B.') || testimonials[0]

export default function HeroSectionWebsite() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sand-50 to-white pt-10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/beach-cover.webp')] bg-center bg-cover [mask-image:linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.3)_70%,rgba(255,255,255,0)_85%,transparent_100%)]" />

      {/* White overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div
            className={cn(
              'group inline-block rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm/6 text-white transition-all ease-in mb-6 shadow-lg'
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
              <span className="mr-2">💻</span>{' '}
              <span>Création sites internet à Saint-Barthélemy</span>
            </AnimatedShinyText>
          </div>

          {/* Main headline */}
          <h1 className="font-rubik text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Ton{' '}
            <span className="text-sand-700">site internet professionnel</span>{' '}
            en 2 semaines
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-900 max-w-xl mx-auto [text-shadow:0_2px_4px_rgba(255,255,255,0.8)]">
            <strong>Fini les sites amateurs qui ne convertissent pas.</strong>{' '}
            Je crée des sites web qui attirent tes clients et génèrent des
            résultats concrets pour ton business à Saint-Barthélemy.
          </p>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <strong>5/5</strong> • basé sur les avis clients
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <CheckCircleIcon className="h-4 w-4 text-sand-600 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10">
            <CTAButtons
              primaryText="Planifie un appel découverte"
              primaryIcon="calendarMonth"
              secondaryText="Voir les réalisations"
              secondaryIcon="eye"
              secondaryHref="#portfolio"
            />
          </div>
          <div className="mt-10 flex justify-center">
            <TestimonialCard
              testimonial={testimonialWebsite}
              includeItemReviewed
            />
          </div>
        </div>
      </div>
    </div>
  )
}
