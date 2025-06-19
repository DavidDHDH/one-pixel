import SecondaryProject from '@/components/projects/SecondaryProject'
import { projects } from '@/datas/projects'
import Link from 'next/link'

export default function ProjectsSection() {
  // Filtrer les projets avec seoCategory = 'WebSite' ou 'UI/UX'
  const websiteProjects = projects.filter(
    (project) =>
      project.seoCategory === 'WebSite' || project.seoCategory === 'UI/UX'
  )

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="sm:text-lg text-sand-700 text-pretty">
            <strong>Certaines de mes réalisations</strong>
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Sites internet <strong>créés pour mes clients</strong>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvre quelques-uns des sites internet et projets design que
            j&apos;ai réalisés pour des entreprises de Saint-Barthélemy et des
            Antilles.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {websiteProjects.map((project) => (
            <SecondaryProject key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Envie de voir plus de réalisations ?
          </p>
          <Link
            href="/#portfolio"
            className="rounded-md border border-sand-700 bg-white px-4 py-3 text-center text-sm font-semibold text-sand-700 shadow hover:bg-sand-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all"
          >
            Voir tous mes projets
          </Link>
        </div>
      </div>
    </section>
  )
}
