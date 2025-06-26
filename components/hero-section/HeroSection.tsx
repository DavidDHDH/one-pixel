import { testimonials } from '@/datas/testimonials'
import { cn } from '@/lib/utils'
import beach from '@/public/images/beach-cover.webp'
import RGPD from '@/public/images/rgpdgris.webp'
import Image from 'next/image'

import AnimatedShinyText from '../ui/animated-shiny-text'
import CTAButtons from '../website-page/CTAButtons'
import TestimonialCard from './TestimonialCard'

export default function HeroSection() {
  const testimonial =
    testimonials.find(
      (testimonial) => testimonial.author.name === 'Mélina S.'
    ) || testimonials[0]

  return (
    <div>
      <div className="relative">
        <div className="mx-auto max-w-6xl">
          <div className="relative z-10 pt-10 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-20 sm:py-32 lg:pl-8 xl:pl-0">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden z-10 mb-10 sm:flex items-center justify-start">
                  <div
                    className={cn(
                      'group rounded-full border border-black/5 text-sm/6 text-white transition-all ease-in'
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span>One Pixel - Agence web & IA à St Barth</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <h1 className="font-rubik text-pretty text-center sm:text-left text-4xl sm:text-[2.75rem] sm:leading-[3rem] tracking-tight font-semibold mb-10">
                  Agence web à Saint-Barthélemy :{' '}
                  <span className="text-sand-700">
                    création de sites internet et applications métier
                    intelligentes
                  </span>
                </h1>
                <p className="mt-6 text-pretty text-gray-600 sm:text-lg/8">
                  Je suis David, <strong>développeur web</strong> et fondateur
                  de l&apos;<strong>agence One Pixel</strong>, spécialisée en{' '}
                  <strong>solutions d&apos;intelligence artificielle</strong>{' '}
                  pour les entreprises.
                </p>

                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  J&apos;aide les entreprises des Antilles à{' '}
                  <strong>gagner du temps</strong> et{' '}
                  <strong>attirer plus de clients</strong> avec des{' '}
                  <strong>sites web professionnels</strong> et des{' '}
                  <strong>applications métier</strong> sur-mesure.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  🔥 La seule agence web de l&apos;île qui met l&apos;IA à ton
                  service pour booster ton expérience client et rester leader
                  sur ton marché.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  📍 Basé à Saint-Barth. Disponible partout dans les Caraïbes.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  🤖 Intelligence artificielle personnalisée, locale et
                  sécurisée.
                </p>
                <div className="mt-10 flex items-center justify-between gap-x-6">
                  <div>
                    <CTAButtons
                      primaryText="Planifie un appel découverte"
                      primaryIcon="calendarMonth"
                      secondaryText="Découvre les cas clients"
                      secondaryHref="#portfolio"
                    />
                  </div>
                  <Image
                    className="mr-8"
                    src={RGPD}
                    alt="Conforme RGPD St Barth"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-sand-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative">
          <Image
            src={beach}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            alt="Plage à Saint Barthélémy"
          />
          <div className="absolute inset-0 flex items-center justify-center lg:items-end lg:justify-center lg:pb-28">
            <div className="px-4">
              <TestimonialCard testimonial={testimonial} includeItemReviewed />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
