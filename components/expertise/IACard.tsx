type UseCase = {
  title: string
  description: string
  benefits: string[]
  industry?: string
}

interface IACardProps {
  useCase: UseCase
  keyPrefix?: string
}

export default function IACard({ useCase, keyPrefix = '' }: IACardProps) {
  return (
    <div
      className="relative rounded-xl border border-gray-200 bg-white p-6  transition-all duration-300 hover:border-sand-500 group/card flex flex-col h-full"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <meta itemProp="name" content={useCase.title} />
      <meta itemProp="description" content={useCase.description} />
      <meta itemProp="applicationCategory" content="Business Application" />
      <meta itemProp="operatingSystem" content="Web" />

      {/* Badge industrie */}
      {useCase.industry && (
        <div className="inline-flex items-center text-xs font-medium text-sand-700 mb-3">
          {useCase.industry}
        </div>
      )}

      {/* Titre et description */}
      <h3 className="text-lg font-semibold   mb-2">{useCase.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {useCase.description}
      </p>

      {/* Bénéfices */}
      <div className="space-y-2 mt-auto border-t border-gray-200 pt-4">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          Bénéfices clés
        </p>
        <ul className="space-y-1">
          {useCase.benefits.map((benefit, benefitIndex) => (
            <li
              key={`${keyPrefix}benefit-${benefitIndex}`}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <svg
                className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export type { UseCase }
