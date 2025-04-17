import { Icon } from '../shared/Icon'

const features = [
  {
    name: 'Étude',
    description:
      'Analyse de ton besoin métier, définition d’un MVP ciblé, cadrage du projet : on pose des bases solides pour un développement efficace.',
    icon: 'search',
  },
  {
    name: 'UX/UI Design',
    description:
      "Maquettes validées à chaque étape, interface fluide, logique métier respectée. On pense l'expérience utilisateur dès le départ.",
    icon: 'pixel',
  },
  {
    name: 'Développement',
    description:
      'Avancement itératif, feedbacks réguliers, code robuste. Tu suis la progression pas à pas, jusqu’à un produit prêt à scaler.',
    icon: 'dev',
  },
  {
    name: 'Suivi',
    description:
      'Une fois en ligne, je t’accompagne pour itérer : analyse des usages, roadmap, ajout de fonctionnalités, maintenance évolutive.',
    icon: 'rotateArrow',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold leading-7 text-primaryText">
            Mon processus de création
          </h2>
          <p className="font-rubik mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl lg:text-balance text-gray-900">
            Rien n&apos;est laissé au hasard.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            De l&apos;analyse à l&apos;évolution de ton application, chaque
            étape est conçue pour livrer une solution sur-mesure, efficace et
            évolutive.
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
