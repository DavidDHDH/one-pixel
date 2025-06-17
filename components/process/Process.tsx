import { CONTACT_EMAIL } from '@/lib/const'
import { Icon } from '../shared/Icon'

const features = [
  {
    name: 'Étude',
    description:
      'On clarifie ensemble ton besoin métier et ta cible. Résultat : une vision précise du produit, conforme au RGPD, avec une première version cadrée et priorisée.',
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
      'Déploiement progressif, retours réguliers, code solide. Tu suis chaque étape, sans surprise, jusqu’à une application prête à être mise en production.',
    icon: 'dev',
  },
  {
    name: 'Suivi',
    description:
      "Une fois en ligne, on analyse les usages pour faire évoluer ton outil, on s'adapte aux nouveautés IA. Nouvelles fonctionnalités, roadmap claire, support continu.",
    icon: 'rotateArrow',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24 sm:py-32 min-h-[90vh]">
      <div className="mx-auto my-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="sm:text-lg font-semibold leading-7 text-primaryText">
            Mon approche pour créer des outils web et IA sur-mesure
          </h2>
          <p className="font-rubik mt-2 text-pretty text-3xl font-semibold tracking-tight  sm:text-4xl lg:text-balance text-gray-900">
            Rien n&apos;est laissé au hasard.
          </p>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600">
            On part d’un besoin métier réel, on structure une interface
            intuitive, on développe avec rigueur, et on intègre l&apos;IA dès
            qu&apos;elle apporte un gain réel d&apos;efficacité ou
            d&apos;automatisation. A la fin, on a un outil moderne, efficace, et
            prêt pour durer.
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
      <div className="flex justify-center">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Demande d'information`}
          className="mt-16"
        >
          <div className="rounded-md flex items-center gap-2 bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
            <span>
              <Icon name="mail" />
            </span>{' '}
            Planifions ton projet autour d&apos;un
            <Icon name="coffee" />
          </div>
        </a>
      </div>
    </section>
  )
}
