import { ProcessTimeline, TimelineEntry } from './ProcessTimeline'

export const ProcessSection = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance   dark:text-white max-w-4xl">
          Approche et processus
        </h2>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-lg max-w-sm">
          Etapes clés de la réalisation du projet.
        </p>
      </div>
      <ProcessTimeline data={data} />
    </section>
  )
}
