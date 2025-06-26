import { BentoGridLayout } from './BentoGridLayout'

export const FeaturesSection = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-20 ">
        <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance   dark:text-white max-w-4xl">
          Fonctionnalités
        </h2>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Principales fonctionnalités du projet.
        </p>
      </div>
      <BentoGridLayout items={items} />
    </section>
  )
}
