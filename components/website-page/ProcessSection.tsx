const processSteps = [
  {
    step: '1',
    title: 'Audit de tes besoins',
    description:
      'On échange sur ton activité, tes objectifs et ton public cible pour définir la stratégie parfaite.',
  },
  {
    step: '2',
    title: 'Création du design',
    description:
      'Je conçois une maquette personnalisée qui reflète ton identité et attire tes clients.',
  },
  {
    step: '3',
    title: 'Développement',
    description:
      'Je développe ton site avec les dernières technologies, optimisé pour la performance et le SEO.',
  },
  {
    step: '4',
    title: 'Tests et lancement',
    description:
      'Tests complets sur tous les appareils, puis mise en ligne avec formation à la gestion.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Processus de création</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Comment ça se passe <strong>concrètement ?</strong>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un processus simple et transparent, de l&apos;idée à la mise en
            ligne de ton site.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-center justify-center w-12 h-12 bg-sand-700 text-white rounded-full font-semibold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
