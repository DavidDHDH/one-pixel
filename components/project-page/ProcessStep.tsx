interface ProcessStepProps {
  description: string
  highlights: string[]
}

export const ProcessStep = ({ description, highlights }: ProcessStepProps) => {
  return (
    <div className="space-y-4">
      <p className="text-base leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 text-sm opacity-75"
          >
            <div className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}