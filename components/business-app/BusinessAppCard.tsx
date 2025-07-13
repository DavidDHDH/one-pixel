type BusinessApp = {
  title: string
  description: string
  features: string[]
  industry?: string
  techStack?: string[]
}

interface BusinessAppCardProps {
  app: BusinessApp
  keyPrefix?: string
}

export default function BusinessAppCard({
  app,
  keyPrefix = '',
}: BusinessAppCardProps) {
  return (
    <div
      className="relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-sand-500 group/card flex flex-col h-full"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <meta itemProp="name" content={app.title} />
      <meta itemProp="description" content={app.description} />
      <meta itemProp="applicationCategory" content="Business Application" />
      <meta itemProp="operatingSystem" content="Web" />

      {/* Badge industrie */}
      {app.industry && (
        <div className="inline-flex items-center text-xs font-medium text-sand-700 mb-3">
          {app.industry}
        </div>
      )}

      {/* Titre et description */}
      <h3 className="text-lg font-semibold  mb-2">{app.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {app.description}
      </p>

      {/* Fonctionnalités */}
      <div className="space-y-2 mb-4 flex-grow">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          Fonctionnalités clés
        </p>
        <ul className="space-y-1">
          {app.features.map((feature, featureIndex) => (
            <li
              key={`${keyPrefix}feature-${featureIndex}`}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <svg
                className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack technique */}
      {/* {app.techStack && app.techStack.length > 0 && (
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1">
            {app.techStack.map((tech, techIndex) => (
              <span
                key={`${keyPrefix}tech-${techIndex}`}
                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )} */}
    </div>
  )
}

export type { BusinessApp }
