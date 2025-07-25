import { TimelineEntry } from '@/components/project-page/ProcessTimeline'
import { StackItem } from '@/components/stack/StackWithDescription'
import { Code, Palette, Rocket, Search, TestTube, Zap } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { Testimonial, testimonials } from './testimonials'

import artiziaMainScreen from '@/public/projects/artizia/artizia-fwi-main-screen.webp'
import FWImainScreen from '@/public/projects/fwi/frip-west-indies-main-screen.webp'
import VCbooking from '@/public/projects/villacare/booking.webp'
import VCinventory from '@/public/projects/villacare/inventory.webp'
import VCinvoices from '@/public/projects/villacare/invoices.webp'
import VCmainProject from '@/public/projects/villacare/main-project-villa-care.webp'
import VCmainScreen from '@/public/projects/villacare/main-screen-villa-care.webp'
import VCmonthlyreport from '@/public/projects/villacare/monthly-report.webp'
import VCproject from '@/public/projects/villacare/project.webp'
import VCsettings from '@/public/projects/villacare/villa-settings.webp'

import VC2 from '@/public/projects/villacare/villa-care-2.webp'
import VC6 from '@/public/projects/villacare/villa-care-6.webp'

import { ProcessStep } from '@/components/project-page/ProcessStep'
import { AccountingCard } from '@/components/projects/villa-care/AccountingCard'
import { AutomationCard } from '@/components/projects/villa-care/AutomationCard'
import { CompactDarkModeCard } from '@/components/projects/villa-care/CompactDarkModeCard'
import { CompactLanguageCard } from '@/components/projects/villa-care/CompactLanguageCard'
import { PlanningCard } from '@/components/projects/villa-care/PlanningCard'
import { StatisticsCard } from '@/components/projects/villa-care/StatisticsCard'
import { WorkspacesCard } from '@/components/projects/villa-care/WorkspacesCard'
import { Icon } from '@/components/shared/Icon'
import DLmockup from '@/public/projects/DI-mockup.webp'
import rwayMockup from '@/public/projects/Rway-mockup.webp'
import SBmockup from '@/public/projects/SB-mockup.webp'
import tileMockup from '@/public/projects/Tile-mockup.webp'
import WIHscreen from '@/public/projects/WIH-screen.webp'

type Projects = {
  title: string
  type: string
  isMainProject: boolean
  mainImage: StaticImageData
  mainProjectImage?: StaticImageData
  carouselImages?: StaticImageData[]
  description: string
  seoType?: 'Application SaaS' | 'Marketplace' | 'WebSite' | 'UI/UX'
  seoCategory: 'WebApplication' | 'WebSite' | 'UI/UX'
  seoPlatform: 'Web' | 'Mobile' | 'Desktop'
  seoDescription?: string
  industry: string
  bentoItems?: React.ReactNode[]
  features: {
    name: string
    description: string
    icon: string
  }[]
  stack: StackItem[]
  location: string
  year: string
  slug?: string
  context?: React.ReactNode
  goals?: {
    icon: React.ReactNode
    description: string
  }[]
  process?: TimelineEntry[]
  results?: {
    paragraph: React.ReactNode
    testimonials: Testimonial
  }
}

export const projects: Projects[] = [
  {
    title: 'Villa Care',
    type: 'Application SaaS de gestion locative pour villas à Saint-Barthélemy',
    isMainProject: true,
    industry: 'Immobilier de luxe',
    seoType: 'Application SaaS',
    seoCategory: 'WebApplication',
    seoPlatform: 'Web',
    seoDescription:
      'Développé à Saint-Barthélemy, Villa Care est une application SaaS de management de villas. Elle permet de gérer les réservations, les travaux, les inventaires, et automatiser les tâches répétitives comme les envois de plannings ou les relances.',
    description:
      'Villa Care révolutionne la gestion locative haut de gamme à Saint-Barthélemy et dans les Caraïbes. Cette application SaaS tout-en-un centralise réservations, plannings, travaux et infos clients. Les tâches répétitives sont automatisées, les gestionnaires gagnent en efficacité.',

    mainImage: VCmainScreen,
    mainProjectImage: VCmainProject,
    carouselImages: [
      VC2,
      VCmainScreen,
      VCbooking,
      VCinventory,
      VCinvoices,
      VCmonthlyreport,
      VCproject,
      VCsettings,
      VC6,
    ],
    location: 'Saint-Barthélemy',
    bentoItems: [
      <PlanningCard key="1" />,
      <WorkspacesCard key="2" />,
      <AutomationCard key="3" />,
      <StatisticsCard key="4" />,
      <CompactLanguageCard key="5" />,
      <CompactDarkModeCard key="6" />,
      <AccountingCard key="7" />,
    ],
    features: [
      {
        name: 'Planning.',
        description:
          'Gestion des réservations, des disponibilités, centralisations des demandes et des informations clients.',
        icon: 'calendarMonth',
      },
      {
        name: 'Automatisations.',
        description:
          "Envois auto des plannings, des confirmations, des nouvelles demandes, des rappels d'informations manquantes, etc.",
        icon: 'mail',
      },
      {
        name: 'Comptabilité.',
        description:
          'Gestion complète de la facturation, rapports mensuels et annuels, export Excel, statistiques pour une comptabilité simplifiée.',
        icon: 'stats',
      },
      {
        name: 'Espaces Utilisateurs.',
        description:
          "Différents espaces et niveaux d'accès pour les propriétaires, les managers, les employés, les agences de locations.",
        icon: 'users',
      },
    ],
    stack: [
      {
        name: 'Figma',
        description:
          "Design système et prototypes rapides pour la création de l'application.",
        icon: 'Figma',
      },
      {
        name: 'React',
        description:
          'Interface réactive pour la gestion en temps réel des réservations et propriétés.',
        icon: 'React',
      },
      {
        name: 'NextJS',
        description:
          'Performance et SEO optimisés, confort et rapidité de développement.',
        icon: 'NextJS',
      },
      {
        name: 'TailwindCSS',
        description:
          'Design élégant et responsive adapté aux standards du luxe immobilier.',
        icon: 'TailwindCSS',
      },
      {
        name: 'Supabase',
        description:
          'Gestion sécurisée des données clients et synchronisation multi-utilisateurs.',
        icon: 'Supabase',
      },
      {
        name: 'Typescript',
        description:
          'Code robuste et maintenable pour une plateforme critique métier.',
        icon: 'Typescript',
      },
    ],
    slug: 'villa-care-management',
    year: '2024',
    context: (
      <>
        <p>
          Saint Barthélémy et les Antilles Francaises en générale sont des lieux
          touristiques toute l&apos;année. Il y a plus d&apos;
          <strong>un millier de villas</strong> rien que sur Saint Barth, et
          peut etre autant d&apos;agences de location{' '}
          <em>(ou à peine moins 🫠)</em>
        </p>
        <p>
          Les managers locaux doivent gérer des centaines de réservations, tenir
          à jour les plannings sur excel, les envoyer régulièrement à tout le
          monde, répondre aux demandes de disponibilités, mais aussi demander
          les informations manquantes de chaque booking.
        </p>
        <p>
          Et ce n&apos;est que la partie &quot;réservation&quot;. Il faut aussi
          gérer la partie administrative, ainsi que les travaux,
          l&apos;entretien, et la comptabilité.
        </p>
        <p>
          Tout ca, dans autant de logiciels ou solutions différentes, et sans
          aucune intégration entre elles.
        </p>
      </>
    ),
    goals: [
      {
        icon: <Icon name="calendarMonth" />,
        description:
          'Simplifier la gestion des réservations et des disponibilités.',
      },
      {
        icon: <Icon name="users" />,
        description: 'Centraliser les informations clients pour tout le monde',
      },
      {
        icon: <Icon name="mail" />,
        description: 'Automatiser les tâches répétitives.',
      },
    ],
    process: [
      {
        title: 'Découverte & Analyse',
        icon: <Search className="w-5 h-5" />,
        content: (
          <ProcessStep
            description="Plusieurs échanges pour comprendre le contexte métier, décortiquer les habitudes de travail, et cadrer ensemble l’application idéale à concevoir."
            highlights={[
              'Exploration des idées initiales du client',
              'Audit des processus actuels de gestion locative pour les optimiser',
              'Identification des points de friction qui ralentissent le quotidien',
              'Définition des priorités pour maximiser l’impact dès la première version',
            ]}
          />
        ),
      },
      {
        title: 'Architecture & Design',
        icon: <Palette className="w-5 h-5" />,
        content: (
          <ProcessStep
            description="À partir des croquis initiaux, l’interface a été repensée pour créer des parcours utilisateurs clairs. La base de données a été conçue sur mesure pour couvrir l’ensemble des besoins métier."
            highlights={[
              'Transformation des idées papier en maquettes Figmaclaires',
              'Conception de parcours utilisateurs optimisés',
              'Modélisation d’une base de données adaptée aux besoins métier',
              'Validation collaborative des écrans et des données avant développement',
            ]}
          />
        ),
      },
      {
        title: 'Développement Core',
        icon: <Code className="w-5 h-5" />,
        content: (
          <ProcessStep
            description="Développement des fonctionnalités essentielles : gestion des réservations et planning."
            highlights={[
              'Système de réservations temps réel',
              'Calendrier centralisé multi-utilisateurs',
              'Gestion des états et workflows',
              'Authentification et permissions',
            ]}
          />
        ),
      },
      {
        title: 'Automatisations',
        icon: <Zap className="w-5 h-5" />,
        content: (
          <ProcessStep
            description="Mise en place d’automatisations pour fluidifier la gestion et limiter les actions manuelles du quotidien."
            highlights={[
              'Envois automatiques d’emails',
              'Notifications temps réel',
              'Tâches planifiées côté serveur',
              'Synchronisation des données entre les différents espaces utilisateurs',
            ]}
          />
        ),
      },
      {
        title: 'Tests & Optimisation',
        icon: <TestTube className="w-5 h-5" />,
        content: (
          <ProcessStep
            description="Une phase de tests terrain pour fiabiliser l’application et affiner l’expérience utilisateur."
            highlights={[
              'Tests avec les gestionnaires villa',
              'Optimisation des performances',
              'Correction des bugs identifiés',
              'Ajustements UX pour plus de fluidité',
            ]}
          />
        ),
      },
      {
        title: 'Déploiement & Suivi',
        icon: <Rocket className="w-5 h-5" />,
        content: (
          <ProcessStep
            description="Mise en production et accompagnement des utilisateurs."
            highlights={[
              'Déploiement sur infrastructure cloud',
              'Support technique et maintenance pour une application sans interruption',
              'Nouvelles fonctionnalités ajoutées en continu',
            ]}
          />
        ),
      },
    ],
    results: {
      paragraph: (
        <div className="space-y-4">
          <p>
            Une solution tout en un : réservations, travaux, inventaires,
            comptabilité, statistiques, automatisations, etc.
          </p>
          <p>
            Un outil qui permet aux gestionnaires locaux de gagner du temps, de
            gagner en efficacité, et d&apos;augmenter leur crédibilité face aux
            propriétaires.
          </p>
          <p>
            Plus d&apos;oublis d&apos;envoi de plannings, plus de relances
            clients manuelles, plus de double ou triple saisies
            d&apos;informations : une seule source de vérité pour tout le monde.
          </p>
        </div>
      ),
      testimonials: testimonials.find(
        (testimonial) => testimonial.author.company === 'Villa Care'
      )!,
    },
    // slug: 'villa-care',
  },
  {
    title: 'Frip West Indies',
    type: 'Marketplace d’achat-vente entre particuliers aux Antilles',
    isMainProject: true,
    industry: 'Commerce',
    seoCategory: 'WebApplication',
    seoPlatform: 'Web',
    description:
      "Marketplace d’occasion pensée pour les Antilles Françaises, Frip West Indies connecte les vendeurs et acheteurs de Saint-Barthélemy, Saint-Martin, Guadeloupe et Martinique via un système de paiement sécurisé et des livraisons Colissimo intégrées. Une plateforme simple et fiable pour acheter et vendre en toute confiance d'une île à l'autre.",
    mainImage: FWImainScreen,
    location: 'Saint-Barthélemy, Saint-Martin, Guadeloupe, Martinique',
    features: [
      {
        name: 'Paiements sécurisés.',
        description:
          "Paiements en ligne entre particuliers, avec gestion d'un porte-monnaie virtuel Stripe.",
        icon: 'creditcard',
      },
      {
        name: 'Livraisons Colissimo.',
        description:
          "Connexion à l'API La Poste Colissimo, génération de bons de livraison et de suivi de colis via le profil utilisateur.",
        icon: 'delivery',
      },
      {
        name: 'Réseau social.',
        description: 'Messagerie instantanée, avis, likes, follow...',
        icon: 'social',
      },
      {
        name: 'Recherche avancée.',
        description:
          'Recherche de produits intuitive par nom, description, catégories, prix, localisation...',
        icon: 'search',
      },
    ],
    stack: [
      {
        name: 'React',
        description:
          "React est un framework JavaScript pour la création d'interfaces utilisateur.",
        icon: 'React',
      },
      {
        name: 'NextJS',
        description:
          "NextJS est un framework JavaScript pour la création d'interfaces utilisateur.",
        icon: 'NextJS',
      },
      {
        name: 'Typescript',
        description:
          "Typescript est un langage de programmation pour la création d'interfaces utilisateur.",
        icon: 'Typescript',
      },
      {
        name: 'TailwindCSS',
        description:
          "TailwindCSS est un framework CSS pour la création d'interfaces utilisateur.",
        icon: 'TailwindCSS',
      },
      {
        name: 'Supabase',
        description:
          "Supabase est un outil de base de données pour la création d'interfaces utilisateur.",
        icon: 'Supabase',
      },
    ],
    year: '2024',
  },
  {
    title: 'Artizia FWI',
    type: 'Site de mises en relation, dédié aux créateurs et prestataires des Antilles.',
    isMainProject: true,
    industry: 'Commerce',
    seoCategory: 'WebApplication',
    seoPlatform: 'Web',
    description:
      'Artizia FWI est une solution de mise en relation pensée pour les créateurs et prestataires de services de Saint-Barthélemy et Saint-Martin. Chacun peut créer son showroom en ligne pour exposer son activité, toucher les locaux et touristes, et recevoir des demandes de contact.',
    mainImage: artiziaMainScreen,
    location: 'Saint-Barthélemy, Saint-Martin',
    features: [
      {
        name: 'Showroom en ligne.',
        description:
          'Création de showrooms personnalisés pour présenter ses créations, services ou prestations.',
        icon: 'showroom',
      },
      {
        name: 'Recherche avancée.',
        description:
          'Recherche intuitive par nom, description, catégories, prix ou localisation.',
        icon: 'search',
      },
      {
        name: 'Abonnement mensuel.',
        description:
          'Souscription directement en ligne pour activer son showroom.',
        icon: 'creditcard',
      },
      {
        name: 'Dashboard administrateur.',
        description:
          'Modération des contenus, gestion des abonnements et des paiements utilisateurs.',
        icon: 'dashboard',
      },
    ],
    stack: [
      {
        name: 'React',
        description:
          "React est un framework JavaScript pour la création d'interfaces utilisateur.",
        icon: 'React',
      },
      {
        name: 'NextJS',
        description:
          "NextJS est un framework JavaScript pour la création d'interfaces utilisateur.",
        icon: 'NextJS',
      },
      {
        name: 'Typescript',
        description:
          "Typescript est un langage de programmation pour la création d'interfaces utilisateur.",
        icon: 'Typescript',
      },
      {
        name: 'TailwindCSS',
        description:
          "TailwindCSS est un framework CSS pour la création d'interfaces utilisateur.",
        icon: 'TailwindCSS',
      },
      {
        name: 'Supabase',
        description:
          "Supabase est un outil de base de données pour la création d'interfaces utilisateur.",
        icon: 'Supabase',
      },
    ],
    year: '2024',
  },
  {
    title: 'Compagnie XYZ',
    type: 'Application de gestion de vols pour une compagnie aérienne caribéenne',
    isMainProject: true,
    industry: 'Aviation',
    seoCategory: 'WebApplication',
    seoPlatform: 'Web',
    description:
      'Une application métier en cours de réalisation pour une compagnie aérienne caribéenne. Elle centralisera les vols, les réservations et la facturation, avec pour objectif de simplifier les opérations et d’offrir une meilleure expérience passager.',
    mainImage: WIHscreen,
    location: 'Saint-Barthélemy',
    features: [
      {
        name: 'Réservations.',
        description:
          'Module de réservation en ligne, gestion des options, listes de passagers, bagages.',
        icon: 'files',
      },
      {
        name: 'Planning des vols.',
        description:
          'Planning des vols, génération des gendecs, envois automatiques aux escales, gestion des pilotes.',
        icon: 'plane',
      },
      {
        name: 'Facturation.',
        description:
          'Paiements en ligne, gestion des factures, des encomptes...',
        icon: 'creditcard',
      },
    ],
    stack: [
      {
        name: 'React',
        description:
          "React est un framework JavaScript pour la création d'interfaces utilisateur.",
        icon: 'React',
      },
      {
        name: 'NextJS',
        description:
          "NextJS est un framework JavaScript pour la création d'interfaces utilisateur.",
        icon: 'NextJS',
      },
      {
        name: 'TailwindCSS',
        description:
          "TailwindCSS est un framework CSS pour la création d'interfaces utilisateur.",
        icon: 'TailwindCSS',
      },
      {
        name: 'API Platform',
        description: "API Platform est un framework pour la création d'API.",
        icon: 'API Platform',
      },
      {
        name: 'Typescript',
        description:
          "Typescript est un langage de programmation pour la création d'interfaces utilisateur.",
        icon: 'Typescript',
      },
    ],
    // slug: 'compagnie-xyz',
    year: '2024',
  },
  {
    title: 'Delifood Island',
    type: 'Refonte UX/UI pour app de livraison à Saint-Barthélemy',
    isMainProject: false,
    industry: 'Restauration',
    description:
      'Refonte érgonomique et design de l’app Delifood Island, service de livraison à Saint-Barthélemy. Nouveau parcours utilisateur, design modernisé, et intégration du Click and Collect pour améliorer l’expérience client.',
    mainImage: DLmockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: [
      {
        name: 'Figma',
        description: 'Figma est un outil de design graphique.',
        icon: 'Figma',
      },
      {
        name: 'Trello',
        description: 'Trello est un outil de gestion de projet.',
        icon: 'Trello',
      },
    ],
    slug: 'delifood-island',
    seoCategory: 'UI/UX',
    seoPlatform: 'Web',
    year: '2024',
  },
  {
    title: 'St Barth R Way',
    type: 'Site internet - agence de voyage de luxe',
    industry: 'Voyage',
    isMainProject: false,
    description:
      "Refonte UI du site internet de St Barth R Way, agence de voyage spécialisée en VIP Service et vols privés. L'objectif était de moderniser le design du site, de le rendre plus en adéquation avec les standards de l'industrie du luxe et la qualité de service de l'agence.",
    mainImage: rwayMockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: [
      {
        name: 'Figma',
        description: 'Figma est un outil de design graphique.',
        icon: 'Figma',
      },
      {
        name: 'Gatsby',
        description:
          'Gatsby est un framework pour la création de sites statiques.',
        icon: 'Gatsby',
      },
      {
        name: 'TailwindCSS',
        description:
          "TailwindCSS est un framework CSS pour la création d'interfaces utilisateur.",
        icon: 'TailwindCSS',
      },
    ],
    slug: 'st-barth-r-way',
    seoCategory: 'UI/UX',
    seoPlatform: 'Web',
    year: '2024',
  },
  {
    title: 'SeaBarts Watersports',
    type: 'Site internet multilingue – sports nautiques',
    industry: 'Sports nautiques',
    isMainProject: false,
    seoCategory: 'WebSite',
    seoPlatform: 'Web',
    description:
      'Création du site internet de SeaBarts, spécialiste de la location de bateaux à la journée et watersports à Saint-Barthélemy. Une interface moderne et mobile-first pour présenter leurs activités nautiques haut de gamme.',
    mainImage: SBmockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: [
      {
        name: 'Figma',
        description: 'Figma est un outil de design graphique.',
        icon: 'Figma',
      },
      {
        name: 'Gatsby',
        description:
          'Gatsby est un framework pour la création de sites statiques.',
        icon: 'Gatsby',
      },
      {
        name: 'TailwindCSS',
        description:
          "TailwindCSS est un framework CSS pour la création d'interfaces utilisateur.",
        icon: 'TailwindCSS',
      },
    ],
    slug: 'sea-barts-watersports',
    year: '2024',
  },
  {
    title: 'Tile & Design Shop',
    type: 'Site internet multilingue – showroom d’aménagement',
    industry: 'Aménagement',
    isMainProject: false,
    seoCategory: 'WebSite',
    seoPlatform: 'Web',
    description:
      'Design et développement du site internet de Tile & Design Shop, showroom de décoration à Saint-Barthélemy. Présentation de leurs collections, réalisations et services, avec une visite 3D immersive du showroom.',
    mainImage: tileMockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: [
      {
        name: 'Figma',
        description: 'Figma est un outil de design graphique.',
        icon: 'Figma',
      },
      {
        name: 'Bootstrap',
        description:
          "Bootstrap est un framework CSS pour la création d'interfaces utilisateur.",
        icon: 'Bootstrap',
      },
    ],
    slug: 'tile-and-design-shop',
    year: '2024',
  },
]

export type ProjectType = (typeof projects)[number]
