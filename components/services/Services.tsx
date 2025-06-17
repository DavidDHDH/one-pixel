import { CONTACT_EMAIL } from '@/lib/const'
import { Icon } from '../shared/Icon'

type Service = {
  label: string
  description: string
  icon: string
  examples: string[]
}

const services: Service[] = [
  {
    label: 'Applications métier sur mesure',
    description:
      'On digitalise tes process et on automatise tes tâches pour te libérer du temps.',
    icon: 'application',
    examples: [
      'Gestion de réservations & planning',
      'Dashboard de suivi',
      'Portail RH & pointage',
      'Suivi livraisons & flotte',
    ],
  },
  {
    label: 'Sites internet sur mesure clés en main',
    description:
      'Un site moderne, optimisé pour les mobiles et le SEO, livré en 1 à 2 semaines.',
    icon: 'website',
    examples: [
      'E-commerce',
      'Agence de voyages locale',
      'Agence immobilière',
      'Restaurant',
    ],
  },
  {
    label: 'IA & automatisation intelligente',
    description:
      "L'IA est devenu incontournable. Intègre-la dès maintenant dans tes process.",
    icon: 'ia',
    examples: [
      'Devis PDF instantané',
      'Chatbot support 24/7',
      'Tri intelligent d’e-mails',
      'Analyse d’avis clients',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[url('/images/sunset.webp')] bg-black/30 bg-blend-overlay
 bg-cover bg-bottom text-white min-h-[90vh]"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8 ">
        <p className="sm:text-lg font-semibold leading-7 text-white text-center">
          Mes services
        </p>
        <p className="font-rubik mt-2 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-white text-center">
          Applications métier, sites internet et solutions web sur-mesure pour
          booster ton activité.
        </p>
        <p className="mt-6 sm:text-lg leading-8 text-white text-center max-w-4xl mx-auto">
          Je suis la pour t&apos;accompagner dans la digitalisation de ton
          business, que tu partes de zéro, ou que tu sois déjà présent en ligne.
          L&apos;objectif : ne pas te laisser dépasser par la concurrence.
        </p>
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3  h-full">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              itemScope
              itemType="https://schema.org/Service"
              className="flex flex-col items-center rounded-2xl shadow-lg px-8 py-6 text-center h-full border border-t-white/50 border-l-white/50 border-b-white/25 border-r-white/25 bg-[radial-gradient(circle_at_40%_25%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_70%,rgba(255,255,255,0.02)_100%)] backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl hover:backdrop-blur-md"
            >
              <meta itemProp="name" content={service.label} />
              <meta itemProp="description" content={service.description} />
              <div
                itemProp="provider"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="One Pixel" />
                <meta itemProp="url" content="https://www.one-pixel.com" />
                <meta
                  itemProp="logo"
                  content="https://www.one-pixel.com/images/logo.webp"
                />
                <meta itemProp="email" content="hello@one-pixel.com" />
                <div
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <meta itemProp="addressCountry" content="FR" />
                  <meta itemProp="addressRegion" content="Saint-Barthélemy" />
                  <meta itemProp="postalCode" content="97133" />
                  <meta
                    itemProp="streetAddress"
                    content="Quartier de Lorient"
                  />
                </div>
              </div>
              <meta
                itemProp="areaServed"
                content="Saint-Barthélemy, Antilles françaises"
              />
              {service.examples.map((ex) => (
                <meta key={`type-${ex}`} itemProp="serviceType" content={ex} />
              ))}
              <div className="flex flex-col justify-center items-center">
                <Icon
                  name={service.icon}
                  className="w-8 h-8 text-primaryText mb-4 stroke-2"
                />
                <h3 className="text-lg font-semibold text-white text-center leading-7 mb-2">
                  {service.label}
                </h3>
                <p className="mt-1 text-base leading-6 text-white/90">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1 text-white/80 text-base list-disc list-inside">
                  {service.examples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="flex flex-1 justify-center items-end min-h-10 ">
                <p>Découvrir</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Demande d'information`}
          className="mt-16"
        >
          <div className="rounded-md flex items-center gap-2 bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
            <Icon name="mail" />
            Réserve ton appel découverte gratuit
          </div>
        </a>
      </div>
    </section>
  )
}
