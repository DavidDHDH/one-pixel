import { ProjectType } from '@/datas/projects'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../shared/Icon'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export default function MainProject({
  index,
  project,
}: {
  index: number
  project: ProjectType
}) {
  const isEven = index % 2 === 0
  const contentOrder = isEven ? 'lg:order-2' : 'lg:order-1'
  const imageOrder = isEven ? 'lg:order-1' : 'lg:order-2'
  const contentSpacing = isEven
    ? 'lg:ml-auto lg:pl-4 lg:pt-4'
    : 'lg:mr-auto lg:pr-4 lg:pt-4'

  return (
    <article
      itemScope
      itemType={`https://schema.org/${project.seoCategory || 'CreativeWork'}`}
    >
      <meta itemProp="name" content={project.title} />
      <meta itemProp="applicationCategory" content={project.type} />
      <meta itemProp="operatingSystem" content={project.seoPlatform || 'Web'} />
      <meta itemProp="description" content={project.description} />
      <div className="overflow-hidden bg-white py-20 sm:py-28 lg:py-24 lg:sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className={`${contentOrder} ${contentSpacing} h-full py-10`}>
              <div className="lg:max-w-xl flex flex-col h-full">
                {isEven ? (
                  <>
                    <h3 className="text-base font-semibold leading-7 text-primaryText">
                      {project.type}
                    </h3>
                    <p className="font-rubik mt-1 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                      {project.title}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-base font-semibold leading-7 text-primaryText">
                      {project.type}
                    </p>
                    <h3 className="font-rubik mt-1 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                      {project.title}
                    </h3>
                  </>
                )}
                <p className="mt-6 sm:text-lg leading-8 text-gray-600">
                  {project.description}
                </p>
                <dl className="my-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none flex-grow">
                  {project.features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <Icon
                          name={feature.icon}
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-primaryText"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 ml-1">
                    {project.stack.map((s, i) => (
                      <TooltipProvider delayDuration={100} key={i}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Icon name={s.name} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{s.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                  <div>
                    {project.slug && (
                      <Link
                        href={`/projets/${project.slug}`}
                        className={!isEven ? 'cursor-pointer' : ''}
                      >
                        <p className="text-sm leading-6 hover:underline">
                          Découvrir le projet <span aria-hidden="true">→</span>
                        </p>
                      </Link>
                    )}
                    {!project.slug && (
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger>
                            <p className="text-sm leading-6 text-gray-400 cursor-default">
                              Découvrir le projet{' '}
                              <span aria-hidden="true">→</span>
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Bientôt disponible</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${imageOrder} ${
                isEven ? 'flex items-start justify-end' : ''
              }`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <Image
                      alt={`${project.title} mockup`}
                      src={project.mainImage}
                      width={2432}
                      height={1442}
                      className="w-[48rem] max-w-none rounded-xl shadow-lg sm:w-[57rem] hover:scale-105 transition-all duration-500 hover:shadow-xl"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl">
                  <Image
                    src={project.mainImage}
                    alt={`${project.title} mockup`}
                    width={2432}
                    height={1442}
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
