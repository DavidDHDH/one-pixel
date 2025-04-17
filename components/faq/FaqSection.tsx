'use client'

import profilPic from '@/public/images/IMG_7289.webp'
import Image from 'next/image'
import { FaqAccordion } from '../ui/faq-chat-accordion'

const defaultData = [
  {
    id: 1,
    question: "Pourquoi choisir un freelance plutôt qu'une agence ?",
    answer:
      "En travaillant avec un freelance, tu gagnes en flexibilité, réactivité et proximité. Pas d'intermédiaire, pas de surcoûts d'agence : tu parles directement avec la personne qui conçoit et développe ton projet.",
  },
  {
    id: 3,
    question: 'Quels types de projets développes-tu ?',
    answer:
      'Je suis spécialisé dans les applications métier (outils internes, automatisation), les plateformes SaaS et les sites web sur mesure. Chaque projet est unique et conçu pour répondre à un besoin concret.',
  },
  {
    id: 4,
    question: 'Est-ce que tu proposes le design aussi ?',
    answer:
      "Oui ! Je m'occupe de l'UX/UI design de ton projet, du wireframe à l'interface finale, en collaboration directe avec toi pour que chaque écran soit clair, utile et joli.",
  },
  {
    id: 2,
    question: 'Et niveau SEO ?',
    answer:
      'Ton site ou application sera optimisé pour le référencement naturel (balises, vitesse, accessibilité, structure technique). Si tu vises une stratégie SEO long terme (contenus, backlinks…), nous travaillerons avec un spécialiste.',
  },
  {
    id: 5,
    question: 'Et après la mise en ligne ?',
    answer:
      'Je propose un suivi personnalisé selon tes besoins : corrections, évolutions, nouvelles fonctionnalités. Ton app continue de grandir avec ton activité.',
  },
  {
    id: 6,
    question: 'Tu peux vraiment tout faire ?',
    answer:
      "Non, et c’est normal. Mon truc, c’est le développement sur mesure. Pour le reste (stratégie SEO, photos, branding…), je travaille avec d'autres pros. On monte une équipe adaptée à ton projet, sans les lourdeurs ni les coûts d’une agence.",
  },
  {
    id: 7,
    question: 'Tu peux gérer plusieurs projets à la fois ?',
    answer:
      'Oui, mais je ne prends pas tout le monde en même temps. Quand je dis oui à un projet, il devient prioritaire. Je préfère avancer peu mais bien, et être vraiment dispo pour toi.',
  },
  {
    id: 8,
    question: 'Je peux te parler de mon idée sans engagement ?',
    answer:
      'Bien sûr. On peut en discuter ensemble, poser les bases, et voir si je suis la bonne personne pour t’accompagner. Aucun engagement tant qu’on n’a pas cadré un projet.',
  },
]

export default function FaqSection() {
  const now = new Date()
  const timestamp = `Aujourd'hui à ${now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })}`

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:text-center mb-16">
          <p className="text-lg font-semibold leading-7 text-primaryText">
            Questions fréquentes.
          </p>
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance text-gray-900">
            Tu te poses peut-être l&apos;une de ces questions.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Je réponds ici aux interrogations les plus courantes avant de
            démarrer un projet. Si tu ne trouves pas ta réponse, n&apos;hésite
            pas à me contacter directement.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FaqAccordion
            data={defaultData}
            className="max-w-[700px] mx-auto lg:mx-0"
            answerClassName="bg-blue-500"
            timestamp={timestamp}
          />
          <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <Image
              alt="David Heimfert, Développeur web à Saint-Barthélemy"
              src={profilPic}
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
