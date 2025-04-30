'use client'

import { cn } from '@/lib/utils'
import profile from '@/public/images/profil-2.webp'
import RGPD from '@/public/images/rgpdgris.webp'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'
import AnimatedShinyText from '../ui/animated-shiny-text'
import TestimonialHero from './TestimonialHero'
export default function HeroSectionSoft() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setRootElement(document.getElementById('calendly'))
  }, [])
  return (
    <div id="calendly" className="">
      <div className="relative">
        <div className="mx-auto max-w-6xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-44 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden z-10 mb-10 sm:flex items-center justify-start">
                  <div
                    className={cn(
                      'group rounded-full border border-black/5 text-sm/6 text-white transition-all ease-in'
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span> One Pixel - Web & Dev Studio</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                <h1 className="font-rubik text-pretty text-5xl font-semibold tracking-tight text-gray-900">
                  Développeur web freelance à Saint-Barthélemy
                </h1>
                <h2 className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-lg/8">
                  Création d&apos;applications web, logiciels métiers et sites
                  internet pour les entreprises des Antilles.
                </h2>
                <p className="mt-4 text-pretty text-lg font-medium text-gray-600 sm:text-lg/8">
                  💡 Des solutions sur-mesure pour digitaliser ton activité,
                  moderniser tes processus et booster ton business localement ou
                  à distance.
                </p>
                <p className="mt-4 text-pretty text-lg font-medium text-gray-600 sm:text-lg/8">
                  📍 Basé à Saint-Barth. Disponible partout dans les Caraïbes.
                </p>
                <div className="mt-10 flex items-center justify-between gap-x-6">
                  {!rootElement && (
                    <div className="rounded-md text-center bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
                      Planifier un appel
                    </div>
                  )}

                  {rootElement && (
                    <PopupButton
                      url="https://calendly.com/david-heimfert/30min"
                      rootElement={rootElement}
                      text="Planifier un appel"
                      className="rounded-md bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400"
                    />
                  )}
                  <Image
                    className="mr-8"
                    src={RGPD}
                    alt="Conforme RGPD St Barth"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <TestimonialHero />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src={profile}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            alt="David Heimfert, Développeur web freelance à Saint-Barthélemy"
          />
        </div>
      </div>
    </div>
  )
}
