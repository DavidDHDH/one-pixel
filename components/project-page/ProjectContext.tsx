import React from 'react'

type ProjectContextProps = {
  context: string
  goals?: {
    icon: React.ReactNode
    description: string
  }[]
}

const ProjectContext: React.FC<ProjectContextProps> = ({ context, goals }) => (
  <section>
    <div className="max-w-7xl mx-auto py-20 ">
      <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900 dark:text-white max-w-4xl">
        Contexte et objectifs
      </h2>
      <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base max-w-sm">
        Contexte et objectifs du projet.
      </p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <p className="text-gray-700 mb-6 text-balance">{context}</p>
      {goals && goals.length > 0 && (
        <div className="justify-self-center">
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
    </div>
  </section>
)

export { ProjectContext }
