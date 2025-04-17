import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développeur Web Freelance à Saint-Barthélemy - One Pixel',
  description:
    'Développeur web freelance basé à Saint-Barthélemy, je conçois des applications sur-mesure, sites et logiciels métier pour les entreprises des Antilles.',
  keywords: [
    'développeur web freelance',
    'Saint-Barthélemy',
    'applications sur-mesure',
    'site internet professionnel',
    'SaaS',
    'logiciel métier',
    'Antilles',
  ],
  authors: [{ name: 'David Heimfert', url: 'https://www.one-pixel.com' }],
  creator: 'David Heimfert',
  publisher: 'David Heimfert',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.one-pixel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Développeur Web Freelance à Saint-Barthélemy - One Pixel',
    description:
      'Développeur web freelance à Saint-Barthélemy. Création de sites internet, applications métiers, plateformes SaaS sur-mesure pour les entreprises locales.',
    url: 'https://www.one-pixel.com',
    siteName: 'One Pixel',
    locale: 'fr_FR',
    type: 'website',
    // images retirées pour l’instant
  },
  twitter: {
    card: 'summary',
    title: 'Développeur Web Freelance à Saint-Barthélemy - One Pixel',
    description:
      'Applications sur-mesure, SaaS, sites web professionnels — développeur freelance à Saint-Barthélemy au service des Antilles.',
    // pas d’image tant que tu n’as pas de fichier
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
}
