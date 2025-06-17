'use client'

import LayeredVideo from '../shared/LayeredVideo'
import { FaqAccordion } from '../ui/faq-chat-accordion'

const defaultData = [
  {
    id: 3,
    question: 'Quels types de projets développes-tu ?',
    answer:
      'Je développe des applications métier, des plateformes SaaS et des sites internet pour les entreprises des Antilles. Chaque projet est pensé pour résoudre un problème concret : automatiser une tâche, mieux communiquer ou gagner du temps.',
  },
  {
    id: 6,
    question: 'Tu travailles seul ?',
    answer:
      "Tout dépend de ton projet. Mon expertise, c'est le développement et l'IA. Pour le reste (stratégie SEO, branding, photos ...), je suis entouré d'autres experts. Si besoin, on monte une équipe légère et adaptée à ton projet.",
  },
  {
    id: 10,
    question: "Et l'intelligence artificielle ?",
    answer:
      "Quand ca à un intérêt, je peux t'aider à intégrer l'IA dans ton quotidien. Aujourd'hui, on fait déjà beaucoup de choses avec l'IA, et ça ne cesse de progresser.",
  },
  {
    id: 9,
    question: "Tu t'occupes de la conformité RGPD ?",
    answer:
      "Oui. Je suis formé au RGPD, et j'intègre les obligations légales dès la conception de ton site ou application. Consentement, mentions, sécurité : on fait les choses proprement, et je t'accompagne sur les bonnes pratiques à adopter.",
  },

  {
    id: 2,
    question: 'Et le référencement ?',
    answer:
      'Ton site ou application sera optimisé pour le référencement naturel (balises, vitesse, accessibilité, structure technique). Si tu vises une stratégie SEO long terme (contenus, backlinks…), nous travaillerons avec un spécialiste.',
  },
  {
    id: 5,
    question: 'Et après la mise en ligne ?',
    answer:
      'Je propose un suivi sur mesure : corrections, nouvelles fonctionnalités, itérations basées sur les retours utilisateurs. Ton outil évolue avec ton business — pas besoin de tout refaire dans 6 mois.',
  },
  {
    id: 7,
    question: 'Mais tu peux gérer plusieurs projets à la fois ?',
    answer:
      'Oui, mais je ne prends pas tout le monde en même temps. Quand je dis oui à un projet, il devient prioritaire. Je préfère avancer peu mais bien, et être vraiment dispo pour toi.',
  },
  {
    id: 8,
    question: 'Je peux te parler de mon idée sans engagement ?',
    answer:
      "Bien sûr. Tu peux m'exposer ton idée, tes objectifs, et on voit ensemble ce qui est réaliste, si je suis la bonne personne pour t'accompagner ou te diriger vers un autre expert. Pas de promesse vide, pas d'engagement tant qu'on n'a pas cadré ton projet.",
  },
  // {
  //   id: 1,
  //   question: "Pourquoi choisir un freelance plutôt qu'une grosse agence ?",
  //   answer:
  //     "En travaillant avec un freelance, tu gagnes en flexibilité, réactivité et proximité. Pas d'intermédiaire, tu es l'unique priorité du freelance pendant le projet, pas de surcoûts d'agence : tu parles directement avec la personne qui conçoit et développe ton projet. Un freelance bien entouré te garantit une qualité de service optimale.",
  // },
  // {
  //   id: 4,
  //   question: 'Est-ce que tu proposes le design aussi ?',
  //   answer:
  //     "Oui ! Je m'occupe de l'UX/UI design de ton projet, du wireframe à l'interface finale, en collaboration directe avec toi pour que chaque écran soit clair, utile et joli.",
  // },
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
