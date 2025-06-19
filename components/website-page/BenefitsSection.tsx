import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Site internet professionnel clés en main',
  'Design moderne et responsive (mobile-first)',
  'Optimisation SEO locale pour St-Barthélemy',
  'Intégration Google Maps et réseaux sociaux',
  'Formulaire de contact',
  'Hébergement et nom de domaine inclus (1 an)',
  'Intégration IA si nécessaire',
  'Support technique 3 mois inclus',
]

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Package complet inclus</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Ce que tu obtiens avec <strong>ton site</strong>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un package complet pour être présent sur le web dès maintenant.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-sand-700 flex-shrink-0" />
                <span className="text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              À partir de <span className="text-sand-700">2 500€</span>
            </p>
            <p className="text-gray-600">
              Paiement en 3 étapes • Devis personnalisé selon tes besoins
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
