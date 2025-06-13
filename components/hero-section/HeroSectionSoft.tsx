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
                      <span>One Pixel - Web & Dev Studio</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <h1 className="font-rubik text-pretty text-center sm:text-left text-4xl sm:text-5xl/tight font-semibold tracking-tight text-gray-900">
                  Agence web IA & création de sites internet à Saint-Barthélémy
                </h1>
                <h2 className="mt-6 text-pretty text-gray-600 sm:text-lg/8">
                  <h2>
                    Développeur web, j’aide les entreprises des Antilles à créer
                    des <strong>sites web professionnels</strong> et des{' '}
                    <strong>
                      applications métier intelligentes boostées à l’IA
                    </strong>
                    .
                  </h2>
                </h2>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  💡 Des solutions web sur-mesure (sites, applications,
                  logiciels métier), pensées pour ton quotidien, pour te faire
                  gagner du temps et des clients.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  🔥 Ici, pas d&apos;usine à sites. Un seul projet à la fois :
                  le tien.
                </p>
                <p className="mt-4 text-pretty text-gray-600 sm:text-lg/8">
                  📍 Basé à Saint-Barth. Disponible partout dans les Caraïbes.
                </p>
                <div className="mt-10 flex items-center justify-between gap-x-6">
                  <div className="flex items-center gap-x-6">
                    <a href="#portfolio">
                      <div className="rounded-md text-center bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
                        Découvrir mes projets
                      </div>
                    </a>
                    {!rootElement && (
                      <div className="rounded-md border border-sand-700 bg-white px-3.5 py-2.5 transition-all text-sm font-semibold text-sand-700 shadow-sm hover:bg-sand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
                        Planifier un appel
                      </div>
                    )}
                    {rootElement && (
                      <PopupButton
                        url="https://calendly.com/david-heimfert/30min"
                        rootElement={rootElement}
                        text="Planifier un appel"
                        className="rounded-md border border-sand-700 bg-white px-3.5 py-2.5 transition-all text-sm font-semibold text-sand-700 shadow-sm hover:bg-sand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
                      />
                    )}
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
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src={profile}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            alt="David Heimfert – Développeur web freelance spécialisé IA et création de sites internet à Saint-Barthélemy"
          />
        </div>
      </div>
    </div>
  )
}
