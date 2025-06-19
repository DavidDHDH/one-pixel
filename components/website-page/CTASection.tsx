import { Icon } from '@/components/shared/Icon'
import CTAButtons from './CTAButtons'

export default function CTASection() {
  return (
    <section className="relative py-24 bg-sand-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Prêt à lancer ton site internet ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-sand-100">
            Planifie un appel découverte, on discute de ton projet et je te
            donne mes premiers conseils, même si on ne travaille pas ensemble.
          </p>

          <div className="mt-10">
            <CTAButtons
              primaryText="Réserver mon appel gratuit"
              secondaryText="Demander un devis"
              secondaryHref="mailto:hello@one-pixel.com?subject=Devis site internet"
              emailSubject="Appel découverte - Création site internet"
              variant="dark"
            />
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sand-100">
            <Icon name="clock" className="h-4 w-4" />
            <span className="text-sm">
              Réponse sous 24h • Appel sans engagement
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
