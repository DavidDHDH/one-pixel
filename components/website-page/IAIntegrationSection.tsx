import {
  BrainCogIcon,
  MessageSquareIcon,
  SearchIcon,
  UserIcon,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquareIcon,
    title: 'Chatbot intelligent',
    description:
      'Un assistant virtuel disponible 24h/24 pour répondre aux questions de vos visiteurs et les guider vers vos services.',
  },
  {
    icon: UserIcon,
    title: 'Personnalisation dynamique',
    description:
      'Adaptation automatique du contenu selon le profil et les préférences de chaque visiteur pour une expérience sur mesure.',
  },
  {
    icon: SearchIcon,
    title: 'Recherche intelligente',
    description:
      'Moteur de recherche avancé qui comprend les intentions des utilisateurs et suggère le contenu le plus pertinent.',
  },
  {
    icon: BrainCogIcon,
    title: 'Recommandations automatiques',
    description:
      'Suggestions intelligentes de produits ou services basées sur le comportement et les préférences des visiteurs.',
  },
]

export default function IAIntegrationSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-sand-100 to-sand-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Intelligence artificielle</strong>
          </p>
          <h2 className="font-rubik mt-2 text-pretty text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Intégrer l&apos;IA à mon site pour améliorer l&apos;expérience
            client
          </h2>
          <p className="mt-6 text-lg text-balance leading-8 text-gray-600">
            Même sur un site vitrine, l&apos;intelligence artificielle peut
            transformer l&apos;expérience de vos visiteurs. Voici des exemples
            de cas d&apos;utilisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-sand-500 group/card"
            >
              <div className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-sand-600" />
              </div>
              <h3 className="text-lg font-semibold  mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
