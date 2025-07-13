import {
  CheckCircleIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const reassurances = [
  {
    icon: ShieldCheckIcon,
    title: 'Sécurité et contrôle',
    description:
      "Tu gardes le contrôle total sur tes données et tes processus. L'IA est un outil au service de ton entreprise, pas l'inverse.",
  },
  {
    icon: CheckCircleIcon,
    title: 'Implementation progressive',
    description:
      "Pas besoin de tout révolutionner d'un coup. Ca serait même une bêtise. On intègre l'IA étape par étape, on l’entraîne sur des fausses données, selon tes besoins et ton rythme. On ne fait pas de gros projets en un jour.",
  },
  {
    icon: RocketLaunchIcon,
    title: 'Avantage concurrentiel',
    description:
      "Quand tu connais le retard digital des Antilles, tu comprends que les entreprises qui adoptent l'IA maintenant prennent une vraie longueur d'avance sur leurs concurrents.",
  },
]

export default function AIFearSection() {
  return (
    <section className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rubik text-3xl font-bold tracking-tight   sm:text-4xl mb-6">
            Doit-on avoir peur de l&apos;IA ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une question légitime que se posent beaucoup d&apos;entrepreneurs.
            Voici pourquoi l&apos;IA est plus une opportunité qu&apos;une menace
            pour ton business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reassurances.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-sand-500"
            >
              <div className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-sand-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-sand-500">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold   mb-6">
              L&apos;IA est une révolution aussi forte que ne l&apos;a été
              internet.
            </h3>
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <p className=" leading-relaxed">
                <strong>À Saint-Barthélemy</strong>, nous avons la chance
                d&apos;être dans un écosystème dynamique où l&apos;innovation
                peut faire la différence. Les entreprises qui intègrent
                l&apos;IA aujourd&apos;hui seront celles qui domineront leur
                marché demain.
              </p>
              <p className="leading-relaxed">
                L&apos;IA n&apos;est pas là pour remplacer l&apos;humain, mais
                pour <strong>augmenter tes capacités</strong>. Elle te permet de
                te concentrer sur ce qui compte vraiment : la stratégie, la
                créativité, et la relation client.
              </p>
              <p className="leading-relaxed">
                Dans un territoire comme le nôtre, où chaque avantage
                concurrentiel compte, l&apos;IA peut être{' '}
                <strong>le facteur différenciant</strong> qui propulse ton
                entreprise vers de nouveaux sommets.
              </p>
            </div>
            <div className="mt-8 p-6 bg-sand-50 rounded-lg">
              <p className="text-sand-800 font-medium text-center">
                💡 L&apos;IA, c&apos;est comme avoir un assistant
                ultra-performant qui ne prend jamais de vacances et qui apprend
                constamment de tes données pour te aider à prendre de meilleures
                décisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
