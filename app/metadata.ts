import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'One Pixel - Agence web spécialisée IA & création de sites internet à Saint-Barthélemy',
  description:
    'Agence web & IA à Saint-Barthélemy, spécialisée dans la création de sites internet, applications sur-mesure et logiciels métier boostés à l’IA pour les entreprises des Antilles.',
  keywords: [
    'agence web',
    'création de site internet',
    'développement web',
    'développeur web',
    'développeur web freelance',
    'accompagnement IA',
    'intelligence artificielle',
    'développeur web à Saint-Barthélemy',
    'applications sur-mesure',
    'site internet professionnel',
    'SaaS',
    'logiciel métier',
    'Saint-Barthélemy',
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
    title:
      'One Pixel - Agence web à Saint-Barthélemy – IA & création de sites internet sur-mesure',
    description:
      'Agence web à Saint-Barthélemy, spécialisée dans la création de sites internet, applications sur-mesure et logiciels métier boostés à l’IA pour les entreprises des Antilles.',
    url: 'https://www.one-pixel.com',
    siteName: 'One Pixel',
    locale: 'fr_FR',
    type: 'website',
    // images retirées pour l’instant
  },
  twitter: {
    card: 'summary',
    title:
      'One Pixel - Agence web à Saint-Barthélemy – IA & création de sites internet sur-mesure',
    description:
      'Agence web à Saint-Barthélemy, spécialisée dans la création de sites internet, applications sur-mesure et logiciels métier boostés à l’IA pour les entreprises des Antilles.',
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
