import {
  ClockIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Design moderne et professionnel',
    description:
      'Un design unique qui reflète ton identité et attire tes clients potentiels. Ici, pas de templates : on design.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Optimisé pour mobile et multilingue',
    description:
      "Ton site s'adapte parfaitement à tous les écrans : mobile, tablette et ordinateur. Et il est multilingue.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Référencement local optimisé',
    description:
      'Ton site sera visible sur Google quand tes clients recherchent tes services.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Livraison rapide',
    description: 'Ton site est livré en 1 à 2 semaines maximum.',
    icon: ClockIcon,
  },
  {
    name: 'Hébergement sécurisé',
    description:
      'Hébergement professionnel, sauvegardes automatiques et sécurité renforcée.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Technologies modernes',
    description:
      'Ton site ne tombe pas en panne, et il ne te coûte pas une fortune en maintenance par mois.',
    icon: RocketLaunchIcon,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Pourquoi choisir One Pixel ?</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Un site internet qui <strong>travaille pour ton business</strong>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pas de site vitrine inutile. Je crée des sites qui attirent tes
            clients et génèrent des résultats concrets.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col"
                itemScope
                itemType="https://schema.org/Service"
              >
                <meta itemProp="serviceType" content="Web Development" />
                <meta
                  itemProp="provider"
                  itemType="https://schema.org/Organization"
                  content="One Pixel"
                />
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-sand-700"
                    aria-hidden="true"
                  />
                  <span itemProp="name">{feature.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto" itemProp="description">
                    {feature.description}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
