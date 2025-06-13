import StackWithDescription, { StackItem } from '../stack/StackWithDescription'

export const ProjectStackSection = ({ stack }: { stack: StackItem[] }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20">
        <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900 dark:text-white max-w-4xl">
          Stack technique
        </h2>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Technologies utilisées pour le projet.
        </p>
      </div>
      <StackWithDescription stackItems={stack} />
    </section>
  )
}
