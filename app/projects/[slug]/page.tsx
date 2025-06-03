import { BentoGridLayout } from '@/components/project-page/BendoGridLayout'
import { ProjectContext } from '@/components/project-page/ProjectContext'
import { ProjectHero } from '@/components/project-page/ProjectHero'
import { projects } from '@/datas/projects'

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8 mt-32">
      <ProjectHero
        title={project.title}
        subtitle={project.type}
        location={project.location}
        year={project.year}
        description={project.description}
        image={project.mainImage}
      />
      <ProjectContext
        context={project.context || ''}
        goals={project.goals || []}
      />
      <BentoGridLayout items={project.bentoItems || []} />
    </div>
  )
}

export default ProjectPage
