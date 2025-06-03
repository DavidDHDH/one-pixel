import React from 'react'

type ProjectContextProps = {
  context: string
  goals?: {
    icon: React.ReactNode
    description: string
  }[]
}

const ProjectContext: React.FC<ProjectContextProps> = ({ context, goals }) => (
  <section className="max-w-7xl mx-auto py-12 min-h-[70vh] flex flex-col justify-center">
    <h2 className="text-2xl font-bold mb-4">Contexte et objectifs</h2>
    <p className="text-gray-700 mb-6">{context}</p>
    {goals && goals.length > 0 && (
      <div>
        <h3 className="text-lg font-semibold mb-2">Objectifs principaux :</h3>
        <ul className="space-y-1 text-gray-700">
          {goals.map((goal, idx) => (
            <li key={idx} className="">
              <span className="flex items-center gap-2">
                {goal.icon}
                {goal.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </section>
)

export { ProjectContext }
