'use client'

import LayeredVideo from '../shared/LayeredVideo'
import { FaqAccordion } from '../ui/faq-chat-accordion'

const defaultData = [
  {
    id: 1,
    question: "Pourquoi choisir un freelance plutot qu'une grosse agence ?",
    answer:
      "En travaillant avec un freelance, tu gagnes en flexibilite, reactivite et proximite. Pas d'intermediaire, tu es l'unique priorite du freelance pendant le projet, pas de surcouts d'agence : tu parles directement avec la personne qui conçoit et developpe ton projet. Un freelance bien entoure te garantit une qualite de service optimale.",
  },
  {
    id: 6,
    question: 'Tu peux vraiment tout faire ?',
    answer:
      "Non, et heureusement. Mon expertise, c'est le developpement et la productivite. Pour le reste (strategie SEO, branding, photos ...), je m'entoure d'autres experts. On monte une equipe legere et adaptee a ton projet, sans les couts fixes d'une agence.",
  },
  {
    id: 3,
    question: 'Quels types de projets developpes-tu ?',
    answer:
      'Je developpe des applications metier, des plateformes SaaS et des sites internet pour les pros des Antilles. Chaque projet est pense pour resoudre un probleme concret : automatiser une tache, mieux communiquer ou gagner du temps.',
  },
  {
    id: 9,
    question: "Tu t'occupes de la conformite RGPD ?",
    answer:
      "Oui. Je suis forme au RGPD, et j'integre les obligations legales des la conception de ton site ou application. Consentement, mentions, securite : on fait les choses proprement, pour que tu sois tranquille, et je t'accompagne sur les bonnes pratiques a adopter.",
  },
  {
    id: 4,
    question: 'Est-ce que tu proposes le design aussi ?',
    answer:
      "Oui ! Je m'occupe de l'UX/UI design de ton projet, du wireframe a l'interface finale, en collaboration directe avec toi pour que chaque ecran soit clair, utile et joli.",
  },

  {
    id: 2,
    question: 'Et le referencement ?',
    answer:
      'Ton site ou application sera optimise pour le referencement naturel (balises, vitesse, accessibilite, structure technique). Si tu vises une strategie SEO long terme (contenus, backlinks…), nous travaillerons avec un specialiste.',
  },
  {
    id: 5,
    question: 'Et apres la mise en ligne ?',
    answer:
      'Je propose un suivi sur mesure : corrections, nouvelles fonctionnalites, iterations basees sur les retours utilisateurs. Ton outil evolue avec ton business — pas besoin de tout refaire dans 6 mois.',
  },

  {
    id: 7,
    question: 'Tu peux gerer plusieurs projets a la fois ?',
    answer:
      'Oui, mais je ne prends pas tout le monde en meme temps. Quand je dis oui a un projet, il devient prioritaire. Je prefere avancer peu mais bien, et etre vraiment dispo pour toi.',
  },
  {
    id: 8,
    question: 'Je peux te parler de mon idee sans engagement ?',
    answer:
      "Bien sur. Tu peux m'exposer ton idee, tes objectifs, et on voit ensemble ce qui est realiste, si je suis la bonne personne pour t'accompagner ou te diriger vers un autre expert. Pas de promesse vide, pas d'engagement tant qu'on n'a pas cadre ton projet.",
  },
]

export default function FaqSection() {
  const now = new Date()
  const timestamp = `Aujourd'hui à ${now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })}`

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:text-center mb-16 text-center">
          <h2 className="sm:text-lg font-semibold leading-7 text-primaryText">
            Questions fréquentes.
          </h2>
          <p className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900">
            Tu te poses peut-être l&apos;une de ces questions.
          </p>
          <p className="mt-6 sm:text-lg leading-8 text-gray-600">
            Pas de question bête, je réponds ici aux interrogations les plus
            courantes avant de démarrer un projet. Si tu ne trouves pas ta
            réponse, n&apos;hésite pas à me contacter directement.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <FaqAccordion
            data={defaultData}
            className="max-w-[700px] mx-auto lg:mx-0"
            answerClassName="bg-blue-500"
            timestamp={timestamp}
          />
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <LayeredVideo width={600} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}
