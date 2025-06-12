import { TimelineEntry } from '@/components/project-page/ProcessTimeline'
import { StackItem } from '@/components/stack/StackWithDescription'
import { Icon123, Icon12Hours } from '@tabler/icons-react'
import { StaticImageData } from 'next/image'
import { Testimonial, testimonials } from './testimonials'

import artiziaMainScreen from '@/public/projects/artizia/artizia-fwi-main-screen.webp'
import FWImainScreen from '@/public/projects/fwi/frip-west-indies-main-screen.webp'
import VCmainProject from '@/public/projects/villacare/main-project-villa-care.webp'
import VCmainScreen from '@/public/projects/villacare/main-screen-villa-care.webp'
import VC1 from '@/public/projects/villacare/villa-care-1.webp'
import VC2 from '@/public/projects/villacare/villa-care-2.webp'
import VC6 from '@/public/projects/villacare/villa-care-6.webp'

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
  seoCategory: 'WebApplication' | 'WebSite' | 'UI/UX'
  seoPlatform: 'Web' | 'Mobile' | 'Desktop'
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
  context?: string
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
    seoCategory: 'WebApplication',
    seoPlatform: 'Web',
    description:
      'Villa Care révolutionne la gestion locative haut de gamme à Saint-Barthélemy et dans les Caraïbes. Cette application SaaS tout-en-un centralise réservations, plannings, travaux et infos clients. Les tâches répétitives sont automatisées, les gestionnaires gagnent en efficacité.',

    mainImage: VCmainScreen,
    mainProjectImage: VCmainProject,
    carouselImages: [VC1, VC2, VC6],
    location: 'Saint-Barthélemy',
    bentoItems: [
      <p key="1" className="h-full w-full">
        teste 515645
      </p>,
      <p key="2" className="h-full w-full">
        test
      </p>,
      <p key="3" className="h-full w-full">
        test
      </p>,
      <p key="4" className="h-full w-full">
        testdfsf
      </p>,
      <p key="5" className="h-full w-full">
        test 5
      </p>,
      <p key="6" className="h-full w-full">
        test 6
      </p>,
      <div key="7" className="h-full w-full flex items-center justify-center">
        <Icon123 size={100} />
      </div>,
      <p key="8" className="h-full w-full">
        test 8
      </p>,
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
          "Envois automatiques des plannings, des confirmations de réservations, des nouvelles demandes, des rappels d'informations manquantes...",
        icon: 'mail',
      },
      {
        name: 'Statistiques.',
        description:
          "Analyse des performances des biens, des revenus et des taux d'occupation.",
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
        description: 'Figma est un outil de design graphique.',
        icon: 'Figma',
      },
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
        name: 'Supabase',
        description:
          "Supabase est un outil de base de données pour la création d'interfaces utilisateur.",
        icon: 'Supabase',
      },
      {
        name: 'Typescript',
        description:
          "Typescript est un langage de programmation pour la création d'interfaces utilisateur.",
        icon: 'Typescript',
      },
    ],
    slug: 'villa-care-management',
    year: '2024',
    context:
      'Villa Care est une application SaaS de gestion locative pour villas à Saint-Barthélemy. Elle permet de gérer les réservations, les disponibilités, les travaux et les informations clients.',
    goals: [
      {
        icon: <Icon12Hours />,
        description:
          'Simplifier la gestion des réservations et des disponibilités.',
      },
      {
        icon: <Icon12Hours />,
        description: 'Automatiser les tâches répétitives.',
      },
      {
        icon: <Icon12Hours />,
        description: 'Centraliser les informations clients.',
      },
    ],
    process: [
      {
        title: 'Phase 1',
        content: <p>Phase 1 de la réalisation du projet</p>,
      },
      {
        title: 'Phase 2',
        content: <p>Phase 2 de la réalisation du projet</p>,
      },
      {
        title: 'Phase 3',
        content: <p>Phase 3 de la réalisation du projet</p>,
      },
      {
        title: 'Phase 4',
        content: <p>Phase 4 de la réalisation du projet</p>,
      },
      {
        title: 'Phase 5',
        content: <p>Phase 5 de la réalisation du projet</p>,
      },
      {
        title: 'Phase 6',
        content: <p>Phase 6 de la réalisation du projet</p>,
      },
      {
        title: 'Phase 7',
        content: <p>Phase 7 de la réalisation du projet</p>,
      },
    ],
    results: {
      paragraph: (
        <div>
          <p>
            <span className="font-semibold">
              Villa Care a transformé la gestion locative
            </span>
            , en permettant une augmentation de{' '}
            <span className="font-semibold">40% des réservations</span> sur la
            première année. La plateforme a automatisé plus de{' '}
            <span className="font-semibold">
              80% des tâches administratives
            </span>
            , libérant ainsi du temps précieux pour les propriétaires.
          </p>
          <p>
            Les retours clients sont exceptionnels, avec une satisfaction de{' '}
            <span className="font-semibold">4.8/5</span> sur plus de 200 avis.
          </p>
        </div>
      ),
      testimonials: testimonials.find(
        (testimonial) => testimonial.author.company === 'Villa Care'
      )!,
    },
  },
  {
    title: 'Frip West Indies',
    type: 'Marketplace d’achat-vente entre particuliers aux Antilles',
    isMainProject: true,
    industry: 'Commerce',
    seoCategory: 'WebApplication',
    seoPlatform: 'Web',
    description:
      "Marketplace d’occasion pensée pour les Antilles Françaises, Frip West Indies connecte les vendeurs et acheteurs locaux via un système de paiement sécurisé et des livraisons Colissimo intégrées. Une plateforme simple et fiable pour acheter et vendre en toute confiance d'une île à l'autre.",
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
      'Artizia FWI est une solution de mise en relation pensée pour les créateurs et prestataires de services des Antilles. Chacun peut créer son showroom en ligne pour exposer son activité, toucher les locaux et touristes, et recevoir des demandes de contact. L’inscription est gratuite, la création du showroom se fait via un abonnement mensuel.',
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
      'Refonte UX/UI de l’app Delifood Island, service de livraison à Saint-Barthélemy. Nouveau parcours utilisateur, design modernisé, et intégration du Click and Collect pour améliorer l’expérience client.',
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
      "Refonte UI pour St Barth R Way, agence de voyage spécialisée en VIP Service et vols privés. L'objectif était de moderniser le design du site, de le rendre plus en adéquation avec les standards de l'industrie du luxe et la qualité de service de l'agence.",
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
      'Site vitrine multilingue pour SeaBarts Watersports, spécialiste des seabobs et e-foils à Saint-Barthélemy. Une interface moderne et mobile-first pour présenter leurs activités nautiques haut de gamme.',
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
      'Site vitrine multilingue pour Tile & Design Shop, showroom de décoration à Saint-Barthélemy. Présentation de leurs collections, réalisations et services, avec une visite 3D immersive du showroom.',
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
