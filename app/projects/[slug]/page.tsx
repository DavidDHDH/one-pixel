import AboutMe from '@/components/about-me/AboutMe'
import { Cover } from '@/components/project-page/Cover'
import { FeaturesSection } from '@/components/project-page/FeaturesSection'
import { ProcessSection } from '@/components/project-page/ProcessSection'
import { ProjectCarousel } from '@/components/project-page/ProjectCarousel'
import { ProjectContext } from '@/components/project-page/ProjectContext'
import { ProjectHero } from '@/components/project-page/ProjectHero'
import { ProjectStackSection } from '@/components/project-page/ProjectStackSection'
import { ResultsSection } from '@/components/project-page/ResultsSection'
import { projects } from '@/datas/projects'

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8 mt-32 ">
        <ProjectHero
          title={project.title}
          subtitle={project.type}
          location={project.location}
          year={project.year}
          description={project.description}
          image={project.mainProjectImage || project.mainImage}
        />
        <ProjectContext
          context={project.context || ''}
          goals={project.goals || []}
        />
        <FeaturesSection items={project.bentoItems || []} />
        <ProcessSection data={project.process || []} />
        <ResultsSection results={project.results} />
        <ProjectStackSection stack={project.stack || []} />
        <ProjectCarousel
          projectImages={project.carouselImages || []}
          projectTitle={project.title}
        />
      </div>
      <Cover image="/images/sunset-island.jpg" />
      <AboutMe />
    </div>
  )
}

export default ProjectPage
