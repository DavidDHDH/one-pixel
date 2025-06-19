import Link from 'next/link'
import { Icon } from '../shared/Icon'
import IACard, { UseCase } from './IACard'

const featuredUseCases: UseCase[] = [
  {
    title: 'Assistant de réservation 24/7',
    description:
      'Chatbot intelligent qui gère les réservations, répond aux questions et propose des créneaux optimisés',
    benefits: [
      'Disponibilité 24h/24',
      'Réduction des no-shows',
      'Augmentation du taux de conversion',
    ],
    industry: 'Hôtellerie & Restauration',
  },
  {
    title: 'Génération de devis intelligents',
    description:
      'Système qui analyse les demandes clients et génère des devis personnalisés instantanément',
    benefits: [
      'Réactivité immédiate',
      'Tarification cohérente',
      'Conversion améliorée',
    ],
    industry: 'Services & Artisanat',
  },
  {
    title: 'Assistant assurance intelligent',
    description:
      'Chatbot IA qui maîtrise vos contrats et garanties pour répondre instantanément aux questions de vos clients',
    benefits: [
      'Réponses précises 24/7',
      'Connaissance approfondie des contrats',
      'Orientation vers les bonnes garanties',
    ],
    industry: 'Assurance',
  },
]

export default function ExpertiseIAPreview() {
  return (
    <section
      id="expertise-ia-preview"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <p className="sm:text-lg font-semibold leading-7 text-sand-600">
            Intelligence Artificielle
          </p>
          <h2 className="font-rubik mt-2 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900">
            L&apos;IA au service de ton business à Saint-Barthélemy
          </h2>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
            Automatisation intelligente, expérience client augmentée, analyse
            prédictive... Découvre des cas d&apos;usage concrets pour
            révolutionner ton activité, sans jamais perdre la main.
          </p>
        </div>
        {/* Exemples d'use cases */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {featuredUseCases.map((useCase, index) => (
            <IACard
              key={`featured-usecase-${index}`}
              useCase={useCase}
              keyPrefix={`featured-usecase-${index}-`}
            />
          ))}
        </div>
        {/* Call to action vers la page complète */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Link
              href="/expertise-ia"
              className=" flex items-center gap-2 rounded-md border border-sand-700 bg-white px-4 py-3 text-center text-sm font-semibold text-sand-700 shadow hover:bg-sand-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all"
            >
              <Icon name="ia" className="w-6 h-6" />
              Voir d&apos;autres cas d&apos;usage IA
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
