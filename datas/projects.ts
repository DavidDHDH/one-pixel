import DLmockup from '@/public/projects/DI-mockup.webp'
import FWIscreen from '@/public/projects/FWI-screen.webp'
import rwayMockup from '@/public/projects/Rway-mockup.webp'
import SBmockup from '@/public/projects/SB-mockup.webp'
import tileMockup from '@/public/projects/Tile-mockup.webp'
import VCscreen from '@/public/projects/VC-screen.webp'
import WIHscreen from '@/public/projects/WIH-screen.webp'
import artiziaScreen from '@/public/projects/artizia-screen.webp'
import { StaticImageData } from 'next/image'

type Projects = {
  title: string
  type: string
  isMainProject: boolean
  mainImage: StaticImageData
  description: string
  seoCategory: 'WebApplication' | 'WebSite' | 'UI/UX'
  seoPlatform: 'Web' | 'Mobile' | 'Desktop'
  industry: string
  features: {
    name: string
    description: string
    icon: string
  }[]
  stack: string[]
  location?: string
  slug?: string
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

    mainImage: VCscreen,
    location: 'Saint-Barthélemy',
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
      'Figma',
      'React',
      'NextJS',
      'TailwindCSS',
      'Supabase',
      'Typescript',
    ],
    slug: 'villa-care',
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
    mainImage: FWIscreen,
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
    stack: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Supabase'],
    slug: 'frip-west-indies',
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
    mainImage: artiziaScreen,
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
    stack: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Supabase'],
    slug: 'artizia-fwi',
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
    stack: ['React', 'NextJS', 'TailwindCSS', 'API Platform', 'Typescript'],
    slug: 'compagnie-xyz',
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
    stack: ['Figma', 'Trello'],
    slug: 'delifood-island',
    seoCategory: 'UI/UX',
    seoPlatform: 'Web',
  },
  {
    title: 'St Barth R Way',
    type: 'Refonte UI pour agence de voyage de luxe',
    industry: 'Voyage',
    isMainProject: false,
    description:
      "Refonte UI premium pour St Barth R Way, agence de voyage spécialisée en VIP Service et vols privés. L'objectif était de moderniser le design, de le rendre plus en adéquation avec les standards de l'industrie du luxe et la qualité de service de l'agence.",
    mainImage: rwayMockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: ['Figma'],
    slug: 'st-barth-r-way',
    seoCategory: 'UI/UX',
    seoPlatform: 'Web',
  },
  {
    title: 'SeaBarts Watersports',
    type: 'Site vitrine multilangue – sports nautiques',
    industry: 'Sports nautiques',
    isMainProject: false,
    seoCategory: 'WebSite',
    seoPlatform: 'Web',
    description:
      'Site vitrine multilangue pour SeaBarts Watersports, spécialiste des seabobs et e-foils à Saint-Barthélemy. Une interface moderne et mobile-first pour présenter leurs activités nautiques haut de gamme.',
    mainImage: SBmockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: ['Figma', 'Gatsby', 'TailwindCSS'],
    slug: 'sea-barts-watersports',
  },
  {
    title: 'Tile & Design Shop',
    type: 'Site vitrine multilingue – showroom d’aménagement',
    industry: 'Aménagement',
    isMainProject: false,
    seoCategory: 'WebSite',
    seoPlatform: 'Web',
    description:
      'Site vitrine multilingue pour Tile & Design Shop, showroom de décoration à Saint-Barthélemy. Présentation de leurs collections, réalisations et services, avec une visite 3D immersive du showroom.',
    mainImage: tileMockup,
    location: 'Saint-Barthélemy',
    features: [],
    stack: ['Figma', 'Bootstrap'],
    slug: 'tile-and-design-shop',
  },
]

export type ProjectType = (typeof projects)[number]
