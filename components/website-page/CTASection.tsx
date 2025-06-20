import { Icon } from '@/components/shared/Icon'
import CTAButtons from './CTAButtons'

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12">
          {/* Effet de brillance animé */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-pulse"></div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-2 rounded-full bg-sand-700 px-4 py-2 text-sm font-medium text-white mb-6">
              <Icon name="sparkles" className="w-4 h-4" />
              Site web professionnel
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 lg:text-3xl">
              Ton site peut-il vraiment{' '}
              <span className="bg-gradient-to-r from-sand-500 to-sand-600 bg-clip-text text-transparent">
                attirer plus de clients
              </span>{' '}
              et booster tes ventes ?
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              En 30 minutes, on analyse ensemble ton{' '}
              <strong className="text-white">positionnement digital</strong> et
              on identifie comment créer un site qui{' '}
              <strong className="text-white">convertit vraiment</strong>. Même
              si on ne travaille pas ensemble, tu repars avec une stratégie
              claire.
            </p>

            {/* Stats impressionnantes */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-sand-400">1-2</div>
                <div className="text-sm text-gray-400">semaines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sand-400">100%</div>
                <div className="text-sm text-gray-400">sur mesure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sand-400">0€</div>
                <div className="text-sm text-gray-400">consultation</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButtons
                primaryText="Réserver mon audit offert"
                primaryIcon="calendarMonth"
                secondaryText="WhatsApp direct"
                secondaryIcon="whatsapp"
                secondaryHref="https://wa.me/590690771911?text=Bonjour David !"
                variant="dark"
              />
            </div>

            {/* Testimonial ou garantie */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Icon name="shieldCheck" className="w-5 h-5 text-green-400" />
              <span>
                Aucun engagement • Conseil personnalisé • 100% confidentiel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
