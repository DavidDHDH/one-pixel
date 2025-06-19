import FAQSection, { FAQ } from '../shared/FAQSection'

const faqs: FAQ[] = [
  {
    question: 'Combien de temps pour créer mon site ?',
    answer:
      'Généralement entre 1 et 2 semaines pour les sites vitrines. Des fois un peu plus en fonction de la complexité. Je commence dès que tu valides le devis et que tu me fournis tes contenus (textes, photos).',
  },
  {
    question: 'Est-ce que je pourrai modifier mon site après ?',
    answer:
      "Oui ! Rien n'est figé, on peux modifier ton site à tout moment. On met en place de quoi le faire toi-même si c'est régulier, et je reste disponible pour les modifications.",
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer:
      "Absolument. Tous mes sites sont optimisés pour le référencement local à Saint-Barthélemy. Je m'occupe aussi de l'inscription sur Google My Business. Si tu as besoin d'une stratégie complète, on travaillera avec un expert SEO.",
  },
  {
    question: 'Que se passe-t-il après la livraison ?',
    answer:
      "Je m'occupe de la maintenance de ton site tous les mois, et je reste disponible pour les mises à jour, les nouvelles fonctionnalités, etc. Ton site reste vivant et performant.",
  },
]

export default function FAQSectionWebsite() {
  return (
    <FAQSection
      title="Questions fréquentes"
      faqs={faqs}
      contactSubject="Question sur la création de site internet"
    />
  )
}
