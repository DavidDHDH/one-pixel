import { CONTACT_EMAIL } from '@/lib/const'
import { Icon } from '../shared/Icon'
import Stack from '../stack/Stack'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import Profil from './Profil'

export const DavidHeimfert = {
  name: 'David Heimfert',
  role: 'Développeur Web - Next.JS',
  imageUrl: 'public/images/IMG_7289.webp',
  githubUrl: 'https://github.com/DavidDHDH',
  linkedinUrl: 'https://www.linkedin.com/in/david-heimfert',
}

const pros = [
  {
    name: 'Réactivité',
    icon: 'speed',
  },
  {
    name: 'Créativité',
    icon: 'creativity',
  },
  {
    name: 'Pixel Perfect',
    icon: 'pixel',
  },
]

export default function AboutMe() {
  return (
    <section id="aboutme">
      <div className="mx-auto max-w-7xl px-6 md:text-center lg:px-8 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="sm:text-lg font-semibold leading-7 text-primaryText">
            On ne s&apos;est pas présenté…
          </p>
          <h2 className="font-rubik mt-2 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900">
            Je suis David Heimfert, développeur web à Saint-Barthélemy,
            passionné par le code, le design et l&apos;IA.
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 gap-10 pt-10 items-center">
          <div className="col-span-1 mx-auto">
            <Profil people={DavidHeimfert} />
          </div>
          <div className="col-span-1 mx-auto space-y-8 mt-4 text-gray-600 md:max-w-full text-start">
            <p>
              💪 Je développe des applications métier et des plateformes SaaS
              qui s&apos;adaptent à toi — pas l&apos;inverse. Chaque projet est
              sur mesure, pensé pour ton quotidien, ton activité… et ta
              productivité.
            </p>

            <p>
              📍 Basé à Saint-Barthélemy, je travaille en direct avec mes
              clients, sans intermédiaire. Ça veut dire plus de fluidité, de
              réactivité… et une vraie compréhension de ton contexte terrain.
            </p>

            <p>
              🎯 Mon objectif : te faire gagner du temps, réduire les erreurs,
              automatiser ce qui peut l&apos;être. Résultat : des outils
              solides, simples à prendre en main, et conçus pour évoluer avec
              ton business.
            </p>

            <p>
              ❤️ Et mon kiff ? Résoudre des problèmes concrets avec du code
              utile. Je suis la pour te simplifier la vie.
            </p>

            <div className="flex gap-4 justify-evenly">
              {pros.map((pro, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 border p-2 rounded-lg bg-gray-50 w-40 text-gray-900 text-center text-sm sm:text-base"
                >
                  <Icon name={pro.icon} className="h-6 w-6 text-dark-900" />
                  <p>{pro.name}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a href={`mailto:${CONTACT_EMAIL}?subject=Demande d'information`}>
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
      </div>
      <Stack />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="technical-details">
            <AccordionTrigger className="text-base font-semibold">
              🛠️ Détails techniques (pour les curieux)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 text-gray-600 text-base leading-7">
                <p>
                  Chaque projet est construit sur des bases solides :
                  architecture claire, code maintenable, performances au
                  rendez-vous. J’adopte les principes du clean code pour
                  garantir lisibilité, évolutivité et simplicité.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium text-gray-900">
                      Architecture modulaire & DDD
                    </span>{' '}
                    : séparation métier stricte, organisation par domaine,
                    logique métier encapsulée.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">
                      Clean Code & conventions
                    </span>{' '}
                    : nommage explicite, responsabilités bien réparties,
                    composants réutilisables.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">
                      TDD & tests automatisés
                    </span>{' '}
                    : fiabilité assurée, régressions évitées.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">CI/CD</span> :
                    déploiements instantanés sur chaque commit avec Vercel &
                    GitHub Actions.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">
                      Stack moderne
                    </span>{' '}
                    : Next.js App Router, TypeScript, TailwindCSS, Supabase,
                    Prisma, Zustand, shadcn/ui.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">
                      Qualité & outillage
                    </span>{' '}
                    : ESLint, Prettier, Husky, commit conventions.
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
