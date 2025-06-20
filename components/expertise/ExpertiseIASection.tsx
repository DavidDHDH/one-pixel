import { Icon } from '../shared/Icon'
import CTAButtons from '../website-page/CTAButtons'
import IACard, { UseCase } from './IACard'

type UseCaseCategory = {
  title: string
  description: string
  icon: string
  useCases: UseCase[]
}

const aiExpertise: UseCaseCategory[] = [
  {
    title: 'Automatisation intelligente',
    description: "Libérez-vous des tâches répétitives grâce à l'IA",
    icon: 'ia',
    useCases: [
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
        title: "Tri et réponse automatique d'emails",
        description:
          'IA qui classe vos emails par priorité et génère des réponses automatiques personnalisées',
        benefits: [
          'Gain de temps considérable',
          'Zéro email manqué',
          'Réponses cohérentes',
        ],
        industry: 'Tous secteurs',
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
    ],
  },

  {
    title: 'Expérience client augmentée',
    description: 'Créez des interactions exceptionnelles avec vos clients',
    icon: 'users',
    useCases: [
      {
        title: 'Concierge virtuel multilingue',
        description:
          'Assistant IA qui guide vos clients en français, anglais, espagnol avec reconnaissance vocale',
        benefits: [
          'Service personnalisé',
          'Barrière linguistique supprimée',
          'Satisfaction client++',
        ],
        industry: 'Hôtellerie de luxe',
      },
      {
        title: "Recommandations d'activités intelligentes",
        description:
          'IA qui propose des activités personnalisées selon météo, préférences et disponibilités',
        benefits: [
          'Expérience unique',
          'Optimisation du séjour',
          'Revenus additionnels',
        ],
        industry: 'Agences & Conciergeries',
      },
      {
        title: 'Support client conversationnel',
        description:
          'Chatbot avancé qui résout 80% des demandes clients avec escalade humaine intelligente',
        benefits: [
          'Résolution instantanée',
          'Équipe déchargée',
          'Coûts réduits',
        ],
        industry: 'Services numériques',
      },
    ],
  },
  {
    title: 'Analyse prédictive',
    description: 'Anticipez les tendances et optimisez vos décisions',
    icon: 'stats',
    useCases: [
      {
        title: 'Prévision de demande touristique',
        description:
          "Analyse des données historiques pour prévoir l'affluence et optimiser votre planning",
        benefits: [
          'Gestion optimisée du stock',
          'Personnel adapté',
          'Revenus maximisés',
        ],
        industry: 'Tourisme & Loisirs',
      },
      {
        title: 'Analyse comportementale clients',
        description:
          "IA qui identifie les patterns d'achat et prédit les préférences clients",
        benefits: [
          'Recommandations personnalisées',
          'Fidélisation accrue',
          'Upselling efficace',
        ],
        industry: 'E-commerce & Retail',
      },
      {
        title: 'Maintenance prédictive',
        description:
          "Anticipation des pannes équipements grâce à l'analyse de données IoT",
        benefits: [
          'Réduction des coûts',
          'Continuité de service',
          'Sécurité renforcée',
        ],
        industry: 'Immobilier & Maintenance',
      },
    ],
  },
]

export default function ExpertiseIASection() {
  return (
    <section id="expertise-ia" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Intelligence Artificielle</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Transforme ton business avec <strong>l&apos;IA</strong> : cas
            d&apos;usage concrets pour <strong>Saint-Barthélémy</strong>
          </h2>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
            L&apos;Intelligence Artificielle n&apos;est plus réservée aux géants
            tech. Que ça soit sur ton site internet ou dans un logiciel métier à
            part entière, l&apos;IA peut révolutionner ton activité dès
            aujourd&apos;hui avec des solutions adaptées au marché caribéen, et
            des données sécurisées.
          </p>
        </div>

        {/* Grille des catégories d'expertise */}
        <div className="space-y-16">
          {aiExpertise.map((category, categoryIndex) => (
            <div
              key={`category-${categoryIndex}`}
              className="group"
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta
                itemProp="name"
                content={`${category.title} - Intelligence Artificielle`}
              />
              <meta itemProp="description" content={category.description} />
              <div
                itemProp="provider"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="One Pixel" />
                <meta itemProp="url" content="https://www.one-pixel.com" />
              </div>
              <meta
                itemProp="areaServed"
                content="Saint-Barthélemy, Antilles françaises"
              />

              {/* Titre de catégorie */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand-100 group-hover:bg-sand-200 transition-colors">
                  <Icon
                    name={category.icon}
                    className="w-6 h-6 text-sand-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              {/* Use cases */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.useCases.map((useCase, useCaseIndex) => (
                  <IACard
                    key={`usecase-${categoryIndex}-${useCaseIndex}`}
                    useCase={useCase}
                    keyPrefix={`usecase-${categoryIndex}-${useCaseIndex}-`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action amélioré */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12">
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-pulse"></div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              {/* Badge premium */}
              <div className="inline-flex items-center gap-2 rounded-full bg-sand-700 px-4 py-2 text-sm font-medium text-white mb-6">
                <Icon name="sparkles" className="w-4 h-4" />
                Diagnostic IA gratuit
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 lg:text-3xl">
                Ton entreprise peut-elle être{' '}
                <span className="bg-gradient-to-r from-sand-400 to-sand-300 bg-clip-text text-transparent">
                  10x plus efficace
                </span>{' '}
                avec l&apos;IA ?
              </h3>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                En 30 minutes, on identifie ensemble{' '}
                <strong className="text-white">3 processus clés</strong> de ton
                business que l&apos;IA peut automatiser dès maintenant. Même si
                on ne travaille pas ensemble, tu repars avec un plan
                d&apos;action concret.
              </p>

              {/* Stats impressionnantes */}
              <div className="grid grid-cols-3 gap-6 mb-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sand-400">80%</div>
                  <div className="text-sm text-gray-400">de temps gagné</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sand-400">24/7</div>
                  <div className="text-sm text-gray-400">automatisation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sand-400">0€</div>
                  <div className="text-sm text-gray-400">coût audit</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTAButtons
                  primaryText="Réserver mon audit IA offert"
                  primaryIcon="calendarMonth"
                  secondaryText="WhatsApp direct"
                  secondaryIcon="whatsapp"
                  secondaryHref="https://wa.me/590690771911?text=Bonjour David !"
                  emailSubject="Audit IA gratuit"
                  variant="dark"
                />
              </div>

              {/* Testimonial ou garantie */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
                <Icon name="shieldCheck" className="w-5 h-5 text-green-400" />
                <span>
                  Aucun engagement • Conseils personnalisés • Confidentiel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
