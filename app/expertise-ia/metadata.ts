import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Agence IA Saint-Barthélemy | Solutions Intelligence Artificielle pour Entreprises | One Pixel',
  description:
    'Spécialiste IA à Saint-Barthélemy. Automatisation intelligente, chatbots 24/7, analyse prédictive pour hôtels, restaurants et services. Données sécurisées localement. Devis gratuit.',
  keywords: [
    'intelligence artificielle saint barthélemy',
    'IA st barth',
    'chatbot saint barthélemy',
    'automatisation entreprise antilles',
    'intelligence artificielle entreprise',
    'solution IA caribbean',
    'agence IA saint barthélemy',
    'assistant virtuel st barth',
    'automatisation hôtellerie',
    'IA tourisme antilles',
    'machine learning saint barthélemy',
    'transformation digitale IA',
  ],
  authors: [{ name: 'David Heimfert', url: 'https://www.one-pixel.com' }],
  creator: 'David Heimfert - One Pixel',
  publisher: 'One Pixel',
  openGraph: {
    title:
      'Solutions IA pour Entreprises | Agence Intelligence Artificielle St-Barth | One Pixel',
    description:
      "Révolutionne ton business avec l'IA : chatbots, automatisation, analyse prédictive. Solutions personnalisées pour Saint-Barthélemy et les Antilles. Devis gratuit.",
    url: 'https://www.one-pixel.com/expertise-ia',
    siteName: 'One Pixel - Agence IA Saint-Barthélemy',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence IA Saint-Barthélemy | Solutions Intelligence Artificielle',
    description:
      "Automatisation, chatbots 24/7, analyse prédictive. Révolutionne ton business avec l'IA adaptée aux Antilles.",
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
    canonical: 'https://www.one-pixel.com/expertise-ia',
  },
  other: {
    'geo.region': 'FR-BL',
    'geo.placename': 'Saint-Barthélemy',
    'geo.position': '17.9000;-62.8500',
    ICBM: '17.9000, -62.8500',
  },
}
