import DLmockup from "@/public/projects/DI-mockup.webp";
import FWIscreen from "@/public/projects/FWI-screen.webp";
import rwayMockup from "@/public/projects/Rway-mockup.webp";
import SBmockup from "@/public/projects/SB-mockup.webp";
import tileMockup from "@/public/projects/Tile-mockup.webp";
import VCscreen from "@/public/projects/VC-screen.webp";
import WIHscreen from "@/public/projects/WIH-screen.webp";
import { StaticImageData } from "next/image";

type Projects = {
  title: string;
  type: string;
  isMainProject: boolean;
  mainImage: StaticImageData;
  description: string;
  industry: string;
  features: {
    name: string;
    description: string;
    icon: string;
  }[];
  stack: string[];
  location?: string;
  slug?: string;
};

export const projects: Projects[] = [
  {
    title: "Villa Care",
    type: "SaaS B2B - Management de villas",
    isMainProject: true,
    industry: "Immobilier de luxe",
    description:
      "Villa Care révolutionne la gestion locative haut de gamme à Saint-Barthélemy. Cette application SaaS tout-en-un permet aux managers de centraliser réservations, plannings, travaux et informations clients, tout en automatisant les tâches répétitives.",

    mainImage: VCscreen,
    location: "Saint-Barthélemy",
    features: [
      {
        name: "Planning.",
        description:
          "Gestion des réservations, des disponibilités, centralisations des demandes et des informations clients.",
        icon: "calendarMonth",
      },
      {
        name: "Automatisations.",
        description:
          "Envois automatiques des plannings, des confirmations de réservations, des nouvelles demandes, des rappels d'informations manquantes...",
        icon: "mail",
      },
      {
        name: "Statistiques.",
        description:
          "Analyse des performances des biens, des revenus et des taux d'occupation.",
        icon: "stats",
      },
      {
        name: "Espaces Utilisateurs.",
        description:
          "Différents espaces et niveaux d'accès pour les propriétaires, les managers, les employés, les agences de locations.",
        icon: "users",
      },
    ],
    stack: [
      "Figma",
      "React",
      "NextJS",
      "TailwindCSS",
      "Supabase",
      "Typescript",
    ],
    slug: "villa-care",
  },
  {
    title: "Frip West Indies",
    type: "Site e-commerce",
    isMainProject: true,
    industry: "Commerce",
    description:
      "Frip West Indies redéfinit l'achat-vente d'occasion aux Antilles. Cette marketplace locale sécurisée connecte les résidents des Antilles Françaises, facilitant les échanges avec paiement intégré et livraison Colissimo.",
    mainImage: FWIscreen,
    location: "Saint-Barthélemy",
    features: [
      {
        name: "Paiements sécurisés.",
        description:
          "Paiements en ligne entre particuliers, avec gestion d'un porte-monnaie virtuel Stripe.",
        icon: "creditcard",
      },
      {
        name: "Livraisons Colissimo.",
        description:
          "Connexion à l'API La Poste Colissimo, génération de bons de livraison et de suivi de colis via le profil utilisateur.",
        icon: "delivery",
      },
      {
        name: "Réseau social.",
        description: "Messagerie instantanée, avis, likes, follow...",
        icon: "social",
      },
      {
        name: "Recherche avancée.",
        description:
          "Recherche de produits intuitive par nom, description, catégories, prix, localisation...",
        icon: "search",
      },
    ],
    stack: ["React", "NextJS", "TailwindCSS", "Firebase", "Typescript"],
    slug: "frip-west-indies",
  },
  {
    title: "Compagnie XYZ",
    type: "Application métier B2B",
    industry: "Aviation",
    isMainProject: true,
    description:
      "Solution sur mesure pour une compagnie aérienne caribéenne, cette application métier centralise la gestion des réservations, l'organisation des vols et les processus administratifs. Une interface intuitive qui optimise les opérations quotidiennes et améliore l'expérience passager dès la réservation.",
    mainImage: WIHscreen,
    location: "Saint-Barthélemy",
    features: [
      {
        name: "Réservations.",
        description:
          "Module de réservation en ligne, gestion des options, listes de passagers, bagages.",
        icon: "files",
      },
      {
        name: "Planning des vols.",
        description:
          "Planning des vols, génération des gendecs, envois automatiques aux escales, gestion des pilotes.",
        icon: "plane",
      },
      {
        name: "Facturation.",
        description:
          "Paiements en ligne, gestion des factures, des encomptes...",
        icon: "creditcard",
      },
    ],
    stack: ["React", "NextJS", "TailwindCSS", "API Platform", "Typescript"],
    slug: "compagnie-xyz",
  },
  {
    title: "Delifood Island",
    type: "UI/UX - Gestion de projet",
    industry: "Restauration",
    isMainProject: false,
    description:
      "Refonte UX/UI complète pour Delifood Island, leader de la livraison à Saint-Barthélemy. J'ai modernisé l'interface, fluidifié le parcours utilisateur et intégré de nouvelles fonctionnalités comme le Click and Collect, tout en améliorant la satisfaction client.",
    mainImage: DLmockup,
    location: "Saint-Barthélemy",
    features: [],
    stack: ["Figma", "Trello"],
    slug: "delifood-island",
  },
  {
    title: "St Barth R Way",
    type: "UI Design",
    industry: "Voyage",
    isMainProject: false,
    description:
      "Redesign premium pour St Barth R Way, agence de voyage de luxe spécialisée en VIP Service et vols privés. L'objectif était de moderniser le design, de le rendre plus en adéquation avec les standards de l'industrie du luxe et la qualité de service de l'agence.",
    mainImage: rwayMockup,
    location: "Saint-Barthélemy",
    features: [],
    stack: ["Figma"],
    slug: "st-barth-r-way",
  },
  {
    title: "SeaBarts Watersports",
    type: "Site vitrine",
    industry: "Sports nautiques",
    isMainProject: false,
    description:
      "Site vitrine multilangue pour SeaBarts Watersports, entreprise leader des sports nautiques à Saint-Barthélemy. Interface moderne présentant leur gamme exclusive de seabobs, e-foils et autres équipements nautiques haut de gamme, expérience utilisateur optimisée pour mobile.",
    mainImage: SBmockup,
    location: "Saint-Barthélemy",
    features: [],
    stack: ["Figma", "Gatsby", "TailwindCSS"],
    slug: "sea-barts-watersports",
  },
  {
    title: "Tile & Design Shop",
    type: "Site vitrine",
    industry: "Aménagement",
    isMainProject: false,
    description:
      "Vitrine digitale élégante pour Tile & Design Shop, showroom d'aménagement intérieur et extérieur premium à Saint-Barthélemy. Site multilingue présentant leurs collections exclusives avec expérience 3D immersive du showroom.",
    mainImage: tileMockup,
    location: "Saint-Barthélemy",
    features: [],
    stack: ["Figma", "Bootstrap"],
    slug: "tile-and-design-shop",
  },
];

export type ProjectType = (typeof projects)[number];
