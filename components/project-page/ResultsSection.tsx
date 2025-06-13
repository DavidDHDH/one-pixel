import { ProjectType } from '@/datas/projects'
import TestimonialCard from '../hero-section/TestimonialCard'

export const ResultsSection = ({
  results,
}: {
  results: ProjectType['results']
}) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20">
        <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900 dark:text-white max-w-4xl">
          Résultats
        </h2>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Résultats du projet.
        </p>
      </div>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        <div className="">{results?.paragraph}</div>
        {results?.testimonials && (
          <div className="justify-self-center">
            <TestimonialCard testimonial={results.testimonials} />
          </div>
        )}
      </div>
    </section>
  )
}
