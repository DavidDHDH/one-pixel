import { projects } from '@/datas/projects'
import MainProject from './MainProject'
import SecondaryProject from './SecondaryProject'

const Portfolio = () => {
  const mainProjects = projects.filter((project) => project.isMainProject)
  const secondaryProjects = projects.filter((project) => !project.isMainProject)

  return (
    <section
      id="portfolio"
      aria-label="Portfolio de projets"
      className="min-h-screen"
    >
      <div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
        <p className="sm:text-lg text-primaryText text-pretty">
          <strong>
            Projets sur-mesure réalisés pour des entreprises locales.
          </strong>
        </p>
        <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
          Des <strong>applications et sites internet</strong> pensés pour les{' '}
          <strong>Antilles</strong>.
        </h2>
        <p className="mt-6 sm:text-lg leading-8 text-gray-600">
          Je développe pour les entreprises de Saint-Barthélemy, de Saint-Martin
          et de toutes les Antilles françaises des solutions digitales
          sur-mesure : sites internet, logiciels métiers personnalisés,
          applications intelligentes intégrant de l’IA.
        </p>
      </div>
      {mainProjects.map((project, index) => (
        <MainProject key={project.title} index={index} project={project} />
      ))}
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-7xl px-6 lg:px-8 pt-12 sm:pt-24">
        {secondaryProjects.map((project, index) => (
          <SecondaryProject key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
