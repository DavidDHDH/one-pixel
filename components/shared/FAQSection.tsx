import CTAButtons from '../website-page/CTAButtons'

export type FAQ = {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  subtitle?: string
  faqs: FAQ[]
  contactSubject: string
  contactText?: string
  backgroundColor?: 'white' | 'gray'
}

export default function FAQSection({
  title,
  subtitle,
  faqs,

  contactText = "Tu as d'autres questions ?",
  backgroundColor = 'white',
}: FAQSectionProps) {
  const bgClass = backgroundColor === 'white' ? 'bg-white' : 'bg-sand-100'

  return (
    <section
      className={`py-24 ${bgClass}`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rubik text-3xl font-semibold tracking-tight   sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={`faq-${index}`}
              className="border-b border-gray-200 pb-8"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 className="text-lg font-semibold   mb-3" itemProp="name">
                {faq.question}
              </h3>
              <div
                className="text-gray-600 leading-relaxed"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {backgroundColor === 'white' && (
            <div className="bg-sand-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold   mb-4">
                Une autre question ?
              </h3>
              <p className="text-gray-600 mb-6">
                Chaque projet est unique. Parlons de tes défis spécifiques.
              </p>
              <CTAButtons
                primaryText="Planifie un appel quand tu veux"
                primaryIcon="calendarMonth"
                secondaryText="Envoi moi un email"
                secondaryIcon="mail"
                secondaryHref="mailto:hello@one-pixel.com?subject=Application métier sur mesure"
              />
            </div>
          )}

          {backgroundColor === 'gray' && (
            <>
              <p className="text-gray-600 mb-6">{contactText}</p>
              <CTAButtons
                primaryText="Planifie un appel quand tu veux"
                primaryIcon="calendarMonth"
                secondaryText="Envoi moi un email"
                secondaryIcon="mail"
                secondaryHref="mailto:hello@one-pixel.com?subject=Application métier sur mesure"
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
