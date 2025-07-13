import { Icon } from '../shared/Icon'
import CTAButtons from '../website-page/CTAButtons'
import BusinessAppCard, { BusinessApp } from './BusinessAppCard'

type BusinessAppCategory = {
  title: string
  description: string
  icon: string
  apps: BusinessApp[]
}

const businessApps: BusinessAppCategory[] = [
  {
    title: 'Gestion & CRM',
    description:
      'Centralise et optimise la gestion de ton entreprise, tes clients et tes prospects',
    icon: 'users',
    apps: [
      {
        title: 'CRM personnalisé',
        description:
          'Système de gestion client adapté à ton secteur avec suivi des interactions, pipeline de ventes et reporting avancé',
        features: [
          'Base clients centralisée',
          'Suivi des opportunités',
          'Historique des interactions',
          'Rapports personnalisés',
          'Automatisation des relances',
        ],
        industry: 'Tous secteurs',
        techStack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      },
      {
        title: 'Gestion de stocks & inventaire',
        description:
          'Application de suivi des stocks en temps réel avec alertes automatiques et prévisions de réapprovisionnement.',
        features: [
          'Suivi en temps réel',
          'Alertes stock minimum',
          'Gestion multi-entrepôts',
          'Historique des mouvements',
          'Rapports de rotation',
        ],
        industry: 'Commerce & Distribution',
        techStack: ['React', 'Firebase', 'Material-UI'],
      },
      {
        title: 'Portail fournisseurs',
        description:
          'Plateforme collaborative pour gérer tes relations fournisseurs avec commandes, factures et évaluations.',
        features: [
          'Gestion des commandes',
          'Suivi des livraisons',
          'Évaluation fournisseurs',
          'Documents partagés',
          'Communication intégrée',
        ],
        industry: 'Industrie & Services',
        techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
      },
    ],
  },
  {
    title: 'Planning & Réservations',
    description: 'Optimise la gestion de tes créneaux et ressources.',
    icon: 'calendarMonth',
    apps: [
      {
        title: 'Système de réservation en ligne',
        description:
          'Plateforme de réservation intuitive avec paiement en ligne, notifications automatiques et gestion des annulations.',
        features: [
          'Calendrier en temps réel',
          'Paiement sécurisé intégré',
          'Notifications SMS/email',
          'Gestion des annulations',
          'Interface client personnalisée',
        ],
        industry: 'Hôtellerie & Services',
        techStack: ['React', 'Stripe', 'Node.js', 'MongoDB'],
      },
      {
        title: 'Planning du personnel',
        description:
          'Outil de planification avancé pour gérer les équipes avec gestion des congés, remplacements et coûts.',
        features: [
          'Planification drag & drop',
          'Gestion des congés',
          'Alertes de conflit',
          'Calcul des coûts',
          'Export vers paie',
        ],
        industry: 'Services & Restauration',
        techStack: ['Vue.js', 'Laravel', 'MySQL'],
      },
      {
        title: 'Gestion de maintenance',
        description:
          'Application pour planifier et suivre la maintenance préventive et curative de tes équipements.',
        features: [
          'Planning maintenance préventive',
          'Suivi des interventions',
          'Gestion des pièces détachées',
          'Historique équipements',
          'Tableau de bord KPI',
        ],
        industry: 'Immobilier & Maintenance',
        techStack: ['React', 'Express', 'PostgreSQL'],
      },
    ],
  },
  {
    title: 'Dashboards & Analytics',
    description:
      'Visualise tes données métiers avec des tableaux de bord interactifs.',
    icon: 'stats',
    apps: [
      {
        title: 'Dashboard commercial',
        description:
          'Tableau de bord temps réel pour suivre tes ventes, objectifs et performance commerciale avec KPI personnalisés.',
        features: [
          'KPI temps réel',
          'Graphiques interactifs',
          'Comparaisons périodes',
          'Objectifs & alertes',
          'Export automatisé',
        ],
        industry: 'Commerce & Vente',
        techStack: ['React', 'D3.js', 'Node.js', 'InfluxDB'],
      },
      {
        title: 'Analytics tourisme',
        description:
          'Analyse avancée des données touristiques : occupation, revenus, satisfaction client et prévisions saisonnières.',
        features: [
          "Taux d'occupation temps réel",
          'Analyse de rentabilité',
          'Prévisions saisonnières',
          'Satisfaction client',
          'Benchmarking concurrence',
        ],
        industry: 'Tourisme & Hôtellerie',
        techStack: ['Next.js', 'Chart.js', 'Python', 'PostgreSQL'],
      },
      {
        title: 'Reporting financier',
        description:
          'Système de reporting financier automatisé avec consolidation multi-entités et alertes de performance.',
        features: [
          'Consolidation automatique',
          'Ratios financiers',
          'Prévisions de trésorerie',
          'Alertes personnalisées',
          'Export comptabilité',
        ],
        industry: 'Finance & Comptabilité',
        techStack: ['React', 'FastAPI', 'PostgreSQL', 'Redis'],
      },
    ],
  },
]

export default function BusinessAppSection() {
  return (
    <section id="business-apps" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Applications Métiers</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold   sm:text-4xl">
            Solutions logicielles <strong>sur mesure</strong> pour digitaliser{' '}
            <strong>ton activité</strong>
          </h2>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
            Du <strong>CRM personnalisé aux dashboards interactifs</strong>, je
            développons des applications web{' '}
            <strong>
              qui s&apos;adaptent parfaitement à tes processus métiers
            </strong>
            .<strong> Sécurisées, évolutives, intégrant de l&apos;IA</strong> si
            besoin, et conçues pour les entreprises des Antilles.
          </p>
        </div>
        {/* Grille des catégories d'applications */}
        <div className="space-y-16">
          {businessApps.map((category, categoryIndex) => (
            <div
              key={`category-${categoryIndex}`}
              className="group"
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta
                itemProp="name"
                content={`${category.title} - Applications Métiers`}
              />
              <meta itemProp="description" content={category.description} />
              <div
                itemProp="provider"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="One Pixel" />
                <meta itemProp="url" content="https://www.one-pixel.com" />
              </div>
              <meta
                itemProp="areaServed"
                content="Saint-Barthélemy, Antilles françaises"
              />

              {/* Titre de catégorie */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand-100 group-hover:bg-sand-200 transition-colors">
                  <Icon
                    name={category.icon}
                    className="w-6 h-6 text-sand-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold  ">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              {/* Applications */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.apps.map((app, appIndex) => (
                  <BusinessAppCard
                    key={`app-${categoryIndex}-${appIndex}`}
                    app={app}
                    keyPrefix={`app-${categoryIndex}-${appIndex}-`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Call to action de conclusion */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Une application métier sur mesure pour ton entreprise ?
            </h3>
            <p className="text-gray-600 mb-8">
              Chaque entreprise est unique. Discutons de tes processus métiers
              et concevons ensemble l&apos;application qui maximisera ta
              rentabilité.
            </p>
            <CTAButtons
              primaryText="Réserve un appel découverte"
              primaryIcon="calendarMonth"
              secondaryText="Envoi moi un email"
              secondaryIcon="mail"
              secondaryHref="mailto:hello@one-pixel.com?subject=Application métier sur mesure"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
