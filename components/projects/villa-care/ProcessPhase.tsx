interface ProcessPhaseProps {
  description: string
  highlights?: string[]
}

export const ProcessPhase: React.FC<ProcessPhaseProps> = ({
  description,
  highlights
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      {highlights && highlights.length > 0 && (
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}