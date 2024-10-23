import VCmockup from "@/public/projects/VCmockup.webp"

export const projects = [
	{
		title: "Frip West Indies",
		type: "E-commerce",
		isMainProject: true,
		description:
			"Frip West Indies est une agence de voyage spécialisée dans les séjours en Guadeloupe. Le site a été conçu pour mettre en avant les offres de l'agence et permettre aux visiteurs de réserver leur séjour en ligne.",
		mainImage: VCmockup,
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
		stack: ["React", "NextJS", "TailwindCSS", "Firebase", "Typescript"],
		internalUrl: "fripwestindies",
	},
	{
		title: "Villa Care",
		type: "SAAS Platforme",
		isMainProject: true,
		description:
			"Villa Care est une plateforme SAAS qui permet aux propriétaires de villas de gérer leurs biens en ligne. La plateforme permet de gérer les réservations, les paiements et la communication avec les locataires.",
		mainImage: VCmockup,
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
				icon: "design",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "design",
			},
		],
		stack: ["React", "NextJS", "TailwindCSS", "Firebase", "Typescript"],
	},
	{
		title: "Villa Care",
		type: "SAAS Platforme",
		isMainProject: false,
		description:
			"Villa Care est une plateforme SAAS qui permet aux propriétaires de villas de gérer leurs biens en ligne. La plateforme permet de gérer les réservations, les paiements et la communication avec les locataires.",
		mainImage: VCmockup,
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
				icon: "design",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "design",
			},
		],
		stack: ["React", "NextJS", "TailwindCSS", "Firebase", "Typescript"],
	},
	{
		title: "Villa Care",
		type: "SAAS Platforme",
		isMainProject: false,
		description:
			"Villa Care est une plateforme SAAS qui permet aux propriétaires de villas de gérer leurs biens en ligne. La plateforme permet de gérer les réservations, les paiements et la communication avec les locataires.",
		mainImage: VCmockup,
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
				icon: "design",
			},
			{
				name: "Gestion des offres",
				description: "Un back-office pour gérer les offres de l'agence",
				icon: "design",
			},
		],
		stack: ["React", "NextJS", "TailwindCSS", "Gatsby", "Typescript"],
	},
	{
		title: "Frip West Indies",
		type: "E-commerce",
		isMainProject: false,
		description:
			"Frip West Indies est une agence de voyage spécialisée dans les séjours en Guadeloupe. Le site a été conçu pour mettre en avant les offres de l'agence et permettre aux visiteurs de réserver leur séjour en ligne.",
		mainImage: VCmockup,
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
		stack: ["React", "NextJS", "TailwindCSS", "Firebase", "Typescript"],
	},
]

export type ProjectType = (typeof projects)[number]
