import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Applications Métiers Saint-Barthélemy | CRM & Solutions Sur Mesure | One Pixel',
  description:
    "Expert en développement d'applications métiers intelligentes à Saint-Barthélemy et Saint-Martin. CRM, dashboards, planning : solutions IA sur mesure pour optimiser votre entreprise. Devis gratuit.",
  keywords: [
    'application métier saint barthélemy',
    'application métier saint martin',
    'intelligence artificielle',
    'intégration IA',
    'IA pour les entreprises des Antilles',
    'développement CRM st barth',
    'dashboard entreprise saint barthélemy',
    'logiciel sur mesure antilles',
    'application web saint barthélemy',
    'système réservation st barth',
    'planning personnel saint barthélemy',
    'gestion stock application antilles',
    'développeur applications métiers',
    'solution digitale saint barthélemy',
    'automatisation processus st barth',
    'application gestion entreprise',
  ],
  authors: [{ name: 'David Heimfert', url: 'https://www.one-pixel.com' }],
  creator: 'David Heimfert - One Pixel',
  publisher: 'One Pixel',
  openGraph: {
    title:
      'Applications Métiers Sur Mesure | Développement CRM & Solutions Saint-Barthélemy | One Pixel',
    description:
      "Expert en développement d'applications métiers intelligentes à Saint-Barthélemy et Saint-Martin. CRM, dashboards, planning : solutions IA sur mesure pour optimiser votre entreprise. Devis gratuit.",
    url: 'https://www.one-pixel.com/applications-metiers',
    siteName: 'One Pixel - Applications Métiers Saint-Barthélemy',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applications Métiers Saint-Barthélemy | CRM & Solutions Sur Mesure',
    description:
      "Développement d'applications web personnalisées : CRM, dashboards, planning. Solutions métiers adaptées aux Antilles.",

    creator: '@DavidHeim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.one-pixel.com/applications-metiers',
  },
  other: {
    'geo.region': 'FR-BL',
    'geo.placename': 'Saint-Barthélemy',
    'geo.position': '17.9000;-62.8500',
    ICBM: '17.9000, -62.8500',
  },
}
