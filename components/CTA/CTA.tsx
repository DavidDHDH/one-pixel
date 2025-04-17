'use client'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

import { CONTACT_EMAIL } from '@/lib/const'
import beach3 from '@/public/images/plage-2.webp'
import Image from 'next/image'
import { InlineWidget } from 'react-calendly'
import { Icon } from '../shared/Icon'

const projectTypes = [
  'Application métier',
  'SaaS',
  'Dashboard interne',
  'Automatisation de tâches',
  'E-commerce',
  '...',
]

export default function CTA() {
  return (
    <section className="relative">
      <Image
        alt="beach in pixel art background"
        src={beach3}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto backdrop-blur-md flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 border border-t-white/50 border-r-white/50 border-b-white/25 border-l-white/25 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-16 xl:gap-x-20 xl:px-16">
            <div className="w-full lg:w-1/2 flex-auto">
              <h2 className="text-pretty font-rubik text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Une idée ? Un projet ? Discutons-en.
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-white">
                Application métier, plateforme SaaS ou outil interne ? On fait
                le point sur ton besoin, et je t’aide à y voir clair pour
                construire une solution utile, solide et évolutive.
              </p>
              <p className="mt-6 text-pretty text-lg/8 text-white">
                Voici les types de projets sur lesquels j’interviens
                régulièrement :
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {projectTypes.map((type) => (
                  <li key={type} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 justify-end mt-8">
                <p className="mt-4 text-sm text-white text-end">
                  Ou si tu préfères, contacte-moi directement par mail :
                </p>
                <div className="flex justify-end">
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Demande d'information`}
                  >
                    <div className="rounded-md flex items-center gap-2 bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
                      <span>
                        <Icon name="mail" />
                      </span>{' '}
                      Me Contacter
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
              <InlineWidget
                url="https://calendly.com/david-heimfert/30min"
                prefill={{
                  name: 'David Heimfert',
                  email: 'hello@one-pixel.com',
                }}
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#222] to-white opacity-25"
          />
        </div>
      </div>
    </section>
  )
}
