import DImockup from "@/public/projects/DI-mockup.webp"
import VCscreen from "@/public/projects/VC-screen.webp"
import tileMockup from "@/public/projects/Tile-mockup.webp"
import rwayMockup from "@/public/projects/Rway-mockup.webp"
import SLmockup from "@/public/projects/SL-mockup.webp"
import FWImockup from "@/public/projects/FWI-mockup.png"
import SBmockup from "@/public/projects/SB-mockup.webp"
import WIHscreen from "@/public/projects/wih-screen.png"

export const projects = [
	{
		title: "Villa Care",
		type: "SAAS - Management de villas",
		isMainProject: true,
		description:
			"Conception et développement de Villa Care, un logiciel complet de gestions de biens immobiliers disponible à la location saisonnière, à destination des managers.",
		mainImage: VCscreen,
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
		internalUrl: "fripwestindies",
	},
	{
		title: "Frip West Indies",
		type: "E-commerce",
		isMainProject: true,
		description:
			"Développement de Frip West Indies, une plateforme de e-commerce de reventes d'articles d'occasions entre particuliers, type Vinted, dans les Antilles Françaises.",
		mainImage: FWImockup,
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
	},
	{
		title: "Compagnie XYZ",
		type: "Application métier",
		isMainProject: true,
		description:
			"Conception et développement en cours d'une application métier destiné à une compagnie aérienne, afin de regrouper en un seul endroit toute la gestion des réservations, des vols, et de l'entreprise.",
		mainImage: WIHscreen,
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
	},
	{
		title: "Delifood Island",
		type: "UI/UX - Gestion de projet",
		isMainProject: false,
		description:
			"Modernisation du design, amélioration de l'expérience utilisateurs clients et back office, et ajout régulier de fonctionnalités pour une application de livraison de repas et de courses.",
		mainImage: DImockup,
		features: [
			{
				name: "UI/UX design",
				description:
					"Refonte du design original pour une meilleure expérience utilisateur.",
				icon: "design",
			},
			{
				name: "Réservation en ligne",
				description: "Un système de réservation en ligne",
				icon: "design",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "design",
			},
		],
		stack: ["Figma", "Trello"],
	},
	{
		title: "St Barth R Way",
		type: "UI - Gestion de projet",
		isMainProject: false,
		description:
			"Refonte et modernisation du site vitrine d'une agence de voyage, spécialisé dans le VIP Service.",
		mainImage: rwayMockup,
		features: [
			{
				name: "Design",
				description:
					"Un design moderne et épuré pour une expérience utilisateur optimale.",
				icon: "design",
			},
			{
				name: "Réservation en ligne",
				description: "Un système de réservation en ligne",
				icon: "code",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "tool",
			},
		],
		stack: ["Figma"],
	},
	{
		title: "SeaBarts Watersports",
		type: "Site vitrine",
		isMainProject: false,
		description:
			"Design et développement d'un site vitrine multilangue pour une entreprise de location et de ventes de seabob, e-foil et autres équipements nautiques.",
		mainImage: SBmockup,
		features: [
			{
				name: "Design",
				description:
					"Un design moderne et épuré pour une expérience utilisateur optimale.",
				icon: "design",
			},
			{
				name: "Réservation en ligne",
				description: "Un système de réservation en ligne",
				icon: "code",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "tool",
			},
		],
		stack: ["Figma", "Gatsby", "TailwindCSS"],
	},
	{
		title: "Tile & Design Shop",
		type: "Site vitrine",
		isMainProject: false,
		description:
			"Design et développement d'un site vitrine multilingue sans CMS, pour une entreprise d'aménagement d'intérieur et exterieur, présentant les collections, les réalisations de l'entreprise et une visite 3D du showroom.",
		mainImage: tileMockup,
		features: [
			{
				name: "Design",
				description:
					"Un design moderne et épuré pour une expérience utilisateur optimale.",
				icon: "design",
			},
			{
				name: "Réservation en ligne",
				description: "Un système de réservation en ligne",
				icon: "code",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "tool",
			},
		],
		stack: ["Figma", "Bootstrap"],
	},
	{
		title: "Staff Link",
		type: "UI - Gestion de projet",
		isMainProject: false,
		description:
			"Conception, UX design et gestion de projet pour une web application de mise en relation avancée entre des recruteurs et des candidats.",
		mainImage: SLmockup,
		features: [],
		stack: ["Figma", "Trello"],
	},
]

export type ProjectType = (typeof projects)[number]
