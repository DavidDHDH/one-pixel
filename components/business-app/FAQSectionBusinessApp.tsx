import FAQSection, { FAQ } from '../shared/FAQSection'

const faqs: FAQ[] = [
  {
    question:
      'Combien de temps faut-il pour développer une application métier ?',
    answer:
      "Le délai varie selon la complexité de l'application. Un CRM simple peut être développé en 4-6 semaines, tandis qu'une application complexe avec multiples modules peut prendre 2-4 mois. Nous établissons un planning détaillé lors de la phase de cadrage.",
  },
  {
    question: "L'application sera-t-elle accessible sur mobile ?",
    answer:
      "Oui, toutes nos applications sont développées avec une approche responsive design. Elles s'adaptent automatiquement aux smartphones et tablettes. Pour des besoins spécifiques, on peut également développer une application mobile native.",
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'Absolument. On applique les meilleures pratiques de sécurité : chiffrement des données, authentification renforcée, sauvegardes automatiques et hébergement sécurisé. On respecte le RGPD et on peut héberger localement aux Antilles si nécessaire.',
  },
  {
    question: "Puis-je intégrer l'application avec mes outils actuels ?",
    answer:
      "Oui, on développe des API pour connecter l'application à tes outils existants : logiciels de comptabilité, systèmes de caisse, plateformes de paiement, outils de communication, etc. L'intégration est planifiée dès la conception.",
  },
  {
    question: 'Comment se passe la maintenance et les évolutions ?',
    answer:
      'Nous proposons un contrat de maintenance incluant les mises à jour de sécurité, le support technique et les petites évolutions. Pour les nouvelles fonctionnalités importantes, nous établissons un devis séparé. Votre application reste évolutive.',
  },
  {
    question: "Puis-je tester l'application avant la livraison finale ?",
    answer:
      "Bien sûr ! On utilise une approche agile avec des livraisons intermédiaires. Tu peux tester et valider chaque fonctionnalité au fur et à mesure du développement. Cela garantit que l'application répond parfaitement à tes attentes.",
  },
]

export default function FAQSectionBusinessApp() {
  return (
    <FAQSection
      title="Questions fréquentes"
      subtitle="Tout ce que tu dois savoir sur le développement d'applications métiers"
      faqs={faqs}
      contactSubject="Questions sur les applications métiers"
      backgroundColor="gray"
    />
  )
}
