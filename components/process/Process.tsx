import { Icon } from '../shared/Icon'

const features = [
  {
    name: 'Étude',
    description:
      'On clarifie ensemble ton besoin métier et ta cible. Résultat : une vision précise du produit, conforme au RGPD, avec un MVP cadré et priorisé.',
    icon: 'search',
  },
  {
    name: 'UX/UI Design',
    description:
      'Maquettes validées à chaque étape, logique métier respectée, navigation fluide. Ton futur outil est pensé pour être intuitif dès le départ.',
    icon: 'pixel',
  },
  {
    name: 'Développement',
    description:
      'Déploiement progressif, retours réguliers, code solide. Tu suis chaque étape, sans surprise, jusqu’à une application prête à évoluer.',
    icon: 'dev',
  },
  {
    name: 'Suivi',
    description:
      'Une fois en ligne, on analyse les usages pour faire évoluer ton outil. Nouvelles features, roadmap claire, support continu.',
    icon: 'rotateArrow',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="sm:text-lg font-semibold leading-7 text-primaryText">
            Mon processus de création
          </h2>
          <p className="font-rubik mt-2 text-pretty text-3xl font-semibold tracking-tight  sm:text-4xl lg:text-balance text-gray-900">
            Rien n&apos;est laissé au hasard.
          </p>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600">
            Chaque étape est pensée pour sécuriser ton investissement : on part
            d’un vrai besoin métier, on construit une UX sur-mesure, on
            développe avec rigueur, et on t’accompagne dans la durée.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div
                itemScope
                itemType="https://schema.org/HowToStep"
                key={feature.name}
                className="flex flex-col"
              >
                <meta itemProp="name" content={feature.name} />
                <meta itemProp="description" content={feature.description} />
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 ">
                  <Icon
                    name={feature.icon}
                    className="h-6 w-6 flex-none text-primaryText"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
