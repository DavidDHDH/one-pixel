'use client'

import { testimonials } from '@/datas/testimonials'
import { cn } from '@/lib/utils'
import profile from '@/public/images/IMG_0620.webp'
import RGPD from '@/public/images/rgpdgris.webp'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'
import AnimatedShinyText from '../ui/animated-shiny-text'
import TestimonialCard from './TestimonialCard'

export default function HeroSectionSoft() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setRootElement(document.getElementById('calendly'))
  }, [])

  const testimonial =
    testimonials.find(
      (testimonial) => testimonial.author.name === 'Mélina S.'
    ) || testimonials[0]

  return (
    <div id="calendly">
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

            <div className="relative px-6 py-20 sm:py-40 lg:py-32 lg:pl-8 xl:pl-0">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden z-10 mb-10 sm:flex items-center justify-start">
                  <div
                    className={cn(
                      'group rounded-full border border-black/5 text-sm/6 text-white transition-all ease-in'
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span>One Pixel - Agence web & IA</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <h1 className="font-rubik text-pretty text-center sm:text-left text-4xl sm:text-[2.75rem] sm:leading-[3rem] tracking-tight text-gray-900">
                  <strong>
                    Agence web à Saint-Barthélemy :{' '}
                    <span className="text-sand-700">
                      création de sites internet et applications métier
                      intelligentes
                    </span>
                  </strong>
                </h1>
                <h2 className="mt-6 text-pretty text-gray-600 sm:text-lg/8">
                  Je suis David, développeur web spécialisé en intelligence
                  artificielle pour booster ta productivité.
                </h2>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  J&apos;accompagne les entreprises des{' '}
                  <strong>Antilles</strong> dans leur transformation digitale
                  avec des <strong>applications métier</strong>, des{' '}
                  <strong>outils IA personnalisés</strong> et des{' '}
                  <strong>sites web professionnels</strong> qui te font gagner
                  du temps <span className="italic">et</span> attirent plus de
                  clients.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  🔥 Ici, pas d&apos;usine à sites. Un seul projet à la fois :
                  le tien, sur mesure.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  📍 Basé à Saint-Barth. Disponible partout dans les Caraïbes.
                </p>
                <div className="mt-10 flex items-center justify-between gap-x-6">
                  <div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* CTA primaire – Audit IA */}
                      {rootElement ? (
                        <PopupButton
                          url="https://calendly.com/david-heimfert/30min"
                          rootElement={rootElement}
                          text="Réserve ton diagnostic IA offert"
                          aria-label="Planifier un appel pour un diagnostic IA gratuit"
                          className="rounded-md bg-sand-700 px-4 py-3 text-center text-sm  text-white shadow hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all"
                        />
                      ) : (
                        <a
                          href="mailto:contact@one-pixel.com?subject=Diagnostic%20IA"
                          aria-label="Envoyer un mail pour planifier un diagnostic IA"
                          className="rounded-md bg-sand-700 px-4 py-3 text-center text-sm  text-white shadow hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all"
                        >
                          Réserve ton diagnostic IA offert
                        </a>
                      )}

                      {/* CTA secondaire – Portfolio */}
                      <a
                        href="#portfolio"
                        aria-label="Découvrir mes projets réalisés"
                        className="rounded-md border border-sand-700 bg-white px-4 py-3 text-center text-sm  text-sand-700 shadow hover:bg-sand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all"
                      >
                        Découvrir les cas clients
                      </a>
                    </div>
                  </div>
                  <Image
                    className="mr-8"
                    src={RGPD}
                    alt="Conforme RGPD St Barth"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <TestimonialCard
                    testimonial={testimonial}
                    includeItemReviewed
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src={profile}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            alt="David Heimfert – développeur web IA à Saint-Barthélemy créateur de sites internet"
          />
        </div>
      </div>
    </div>
  )
}
