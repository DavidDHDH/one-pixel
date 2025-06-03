import Image, { StaticImageData } from 'next/image'

type ProjectHeroProps = {
  title: string
  subtitle: string
  location: string
  year: string
  description: string
  image: StaticImageData
}

const ProjectHero = ({
  title,
  subtitle,
  location,
  year,
  description,
  image,
}: ProjectHeroProps) => (
  <section className="max-w-7xl mx-auto flex flex-col gap-12 py-12">
    {/* Deux colonnes */}
    <div className="flex flex-col md:flex-row gap-8 my-10">
      {/* Colonne gauche */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <h2 className="text-xl font-medium mb-4">{subtitle}</h2>
        <div className="flex items-center gap-4 text-gray-600 mb-2">
          <span>📍 {location}</span>
          <span>🗓️ {year}</span>
        </div>
      </div>
      {/* Colonne droite */}
      <div className="flex-1 flex items-start">
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
    {/* Image mockup */}
    <div className="max-w-7xl mx-auto ">
      <Image
        src={image}
        alt={`Mockup du projet ${title}`}
        className="rounded-xl shadow-lg max-w-full h-auto object-contain"
        priority
      />
    </div>
  </section>
)

export { ProjectHero }
