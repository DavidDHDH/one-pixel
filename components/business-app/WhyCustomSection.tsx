import { Icon } from '../shared/Icon'

const benefits = [
  {
    icon: 'puzzle',
    title: 'Parfaitement adapté à tes processus',
    description:
      "Contrairement aux solutions génériques, ton application est conçue spécifiquement pour tes méthodes de travail. Plus de compromis : l'outil s'adapte à toi, pas l'inverse.",
    comparison: 'vs. Solutions génériques qui forcent à adapter ses processus',
  },
  {
    icon: 'growth',
    title: 'Évolutif selon tes besoins réels',
    description:
      "Pas de fonctionnalités inutiles qui alourdissent l'interface. Tu paies uniquement pour ce dont tu as besoin, et on ajoute de nouvelles fonctions au fur et à mesure.",
    comparison: 'vs. Abonnements coûteux avec 80% de fonctions inutilisées',
  },
  {
    icon: 'shield',
    title: 'Contrôle total de tes données',
    description:
      'Tes données restent chez toi ou sur tes serveurs. Pas de dépendance à un éditeur externe qui peut changer ses conditions ou fermer du jour au lendemain.',
    comparison: 'vs. Dépendance totale aux éditeurs SaaS étrangers',
  },
  {
    icon: 'support',
    title: 'Support personnalisé et réactif',
    description:
      'Un problème ? Une question ? Tu parles directement au développeur qui connaît ton application par cœur. Support en français, adapté au contexte caribéen.',
    comparison:
      "vs. Support standardisé avec des temps d'attente interminables",
  },
  {
    icon: 'integration',
    title: 'Intégration native avec tes outils',
    description:
      'Connexion fluide avec tes logiciels existants : comptabilité, caisse, emails... Pas besoin de "bricoler" des connections via des API limitées.',
    comparison: 'vs. Intégrations limitées ou payantes en supplément',
  },
  {
    icon: 'economics',
    title: 'ROI à long terme',
    description:
      "Investissement unique qui t'appartient. Pas d'abonnements mensuels qui s'accumulent. Sur 3-5 ans, c'est souvent plus économique qu'un SaaS.",
    comparison: 'vs. Abonnements mensuels qui augmentent chaque année',
  },
]

export default function WhyCustomSection() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Pourquoi du sur mesure ?</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold   sm:text-4xl">
            Logiciel <strong>sur mesure</strong> vs solution existante :<br />
            <span className="text-sand-700">6 avantages décisifs</span>
          </h2>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            &quot;Pourquoi ne pas prendre un logiciel qui existe déjà ?&quot;
            C&apos;est LA question qu&apos;on me pose souvent. Voici pourquoi le
            sur mesure est souvent le choix le plus intelligent si ton
            entreprise à une forte activité.
          </p>
        </div>

        {/* Grille des bénéfices */}
        <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
          {benefits.map((benefit, index) => (
            <div key={`benefit-${index}`} className="relative group">
              <div className="flex items-start gap-6 p-6 rounded-xl bg-white border border-gray-200  hover:border-sand-500 transition-all duration-300">
                {/* Icône */}
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand-100  transition-colors">
                    <Icon
                      name={benefit.icon}
                      className="w-6 h-6 text-sand-600"
                    />
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold   mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {benefit.description}
                  </p>

                  {/* Comparaison */}
                  <div className="text-sm text-gray-500 italic border-l-2 border-sand-400 pl-3">
                    {benefit.comparison}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
