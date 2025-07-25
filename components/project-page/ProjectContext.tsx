import React from 'react'

type ProjectContextProps = {
  context: React.ReactNode
  goals?: {
    icon: React.ReactNode
    description: string
  }[]
}

const ProjectContext: React.FC<ProjectContextProps> = ({ context, goals }) => (
  <section>
    <div className="max-w-7xl mx-auto py-20 ">
      <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance  dark:text-white max-w-4xl">
        Contexte et objectifs
      </h2>
      <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-lg max-w-sm">
        Contexte et objectifs du projet.
      </p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start ">
      <div className="text-base sm:text-lg text-gray-700 mb-6 text-pretty space-y-4">
        {context}
      </div>
      {goals && goals.length > 0 && (
        <div className="justify-self-center">
          <h3 className="text-lg font-semibold mb-4">Objectifs principaux :</h3>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 ">
            {goals.map((goal, idx) => (
              <li key={idx} className="">
                <p className="flex items-start gap-2 text-pretty">
                  <span>{goal.icon}</span>
                  {goal.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </section>
)

export { ProjectContext }
