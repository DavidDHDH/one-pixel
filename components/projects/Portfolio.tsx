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
      <div className="mx-auto max-w-3xl text-center px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-primaryText">
          Projets sur-mesure réalisés pour des entreprises locales.
        </h2>
        <p className="font-rubik mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Des applications et sites web pensés pour les Antilles.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Découvre comment j’ai accompagné des entreprises à Saint-Barthélemy et
          dans les Caraïbes avec des solutions digitales adaptées : web apps,
          plateformes internes, marketplaces locales ou sites vitrines.
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
