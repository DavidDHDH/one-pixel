import { ProjectType } from '@/datas/projects'
import Image from 'next/image'
import { Icon } from '../shared/Icon'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

const SecondaryProject = ({ project }: { project: ProjectType }) => {
  return (
    <article
      itemScope
      itemType={`https://schema.org/${project.seoCategory || 'CreativeWork'}`}
    >
      <meta itemProp="name" content={project.title} />
      <meta itemProp="applicationCategory" content={project.type} />
      <meta itemProp="operatingSystem" content={project.seoPlatform || 'Web'} />
      <meta itemProp="description" content={project.description} />
      <div className="rounded-xl shadow-lg overflow-hidden bg-white h-full min-h-[600px] flex flex-col text-gray-900 ">
        <div className="h-[50%]">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer h-full overflow-hidden">
                <Image
                  src={project.mainImage}
                  alt={`${project.title} mockup`}
                  className="object-cover object-center h-full hover:scale-105 transition-all duration-500"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-6xl">
              <Image
                src={project.mainImage}
                alt={`${project.title} mockup`}
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-sm font-semibold text-primaryText">
              {project.type}
            </h3>
            <p className="font-rubik text-xl font-semibold text-gray-900 leading-tight">
              {project.title}
            </p>
          </div>
          <p className="flex-grow">{project.description}</p>
          <div className="flex gap-4 mt-3">
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
        </div>
      </div>
    </article>
  )
}

export default SecondaryProject
