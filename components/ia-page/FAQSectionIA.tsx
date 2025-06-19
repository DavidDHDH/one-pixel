import FAQSection, { FAQ } from '../shared/FAQSection'

const faqsIA: FAQ[] = [
  {
    question:
      "L'IA est-elle vraiment adaptée aux petites entreprises des Antilles ?",
    answer:
      "Absolument ! L'IA n'est plus réservée aux grandes entreprises. Je développe des solutions sur-mesure, adaptées à ton budget et tes besoins spécifiques. Un simple chatbot peut déjà transformer ton service client.",
  },
  {
    question: "Mes données sont-elles sécurisées avec l'IA ?",
    answer:
      'Sécurité maximale garantie. Toutes mes solutions IA respectent le RGPD et peuvent être hébergées localement. Tes données sensibles ne quittent jamais ton contrôle et restent en conformité avec la réglementation française.',
  },
  {
    question: "L'IA va-t-elle remplacer mes employés ?",
    answer:
      "Non, l'IA vient en complément de tes équipes. Elle automatise les tâches répétitives pour libérer du temps à tes employés pour des missions à plus forte valeur ajoutée et le contact humain.",
  },
  {
    question: "J'utilise déjà ChatGPT 😎",
    answer:
      "C'est un excellent premier pas ! ChatGPT est un outil puissant, mais l'IA est bien plus large que ca. Elle offre bien d'autres possibilités pour ton entreprise : automatisation des processus, analyse prédictive, reconnaissance d'images, traitement automatique des documents, etc.",
  },
  {
    question: "Quel est le coût d'une solution IA ?",
    answer:
      "Les tarifs varient selon la complexité. A l'utilisation, contrairement à l'idée reçue, ca ne coûte presque rien, et ca peut même faire gagner de l'argent.",
  },
]

export default function FAQSectionIA() {
  return (
    <FAQSection
      title="Questions fréquentes sur l'IA"
      subtitle="Toutes les réponses à tes questions sur l'Intelligence Artificielle pour ton entreprise."
      faqs={faqsIA}
      contactSubject="Question sur l'IA"
      backgroundColor="white"
    />
  )
}
