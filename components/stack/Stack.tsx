import logoFigma from '@/public/stack/logo-figma.png'
import logoNextJS from '@/public/stack/logo-nextjs.png'
import logoNode from '@/public/stack/logo-nodejs.png'
import logoPrisma from '@/public/stack/logo-prisma.png'
import logoReact from '@/public/stack/logo-react.png'
import logoSentry from '@/public/stack/logo-sentry.png'
import logoSupabase from '@/public/stack/logo-supabase.png'
import logoTailwindCSS from '@/public/stack/logo-tailwind.png'
import logoTypeScript from '@/public/stack/logo-typescript.png'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const stack = [
  {
    name: 'React',
    icon: logoReact,
  },
  {
    name: 'NextJS',
    icon: logoNextJS,
  },
  {
    name: 'Prisma',
    icon: logoPrisma,
  },
  {
    name: 'Supabase',
    icon: logoSupabase,
  },
  {
    name: 'NodeJS',
    icon: logoNode,
  },
  {
    name: 'TypeScript',
    icon: logoTypeScript,
  },
  {
    name: 'TailwindCSS',
    icon: logoTailwindCSS,
  },
  {
    name: 'Sentry',
    icon: logoSentry,
  },
  {
    name: 'Figma',
    icon: logoFigma,
  },
]

export default function Stack() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="stack">
            <AccordionTrigger className="text-base font-semibold">
              💻 Mes technologies favorites
            </AccordionTrigger>
            <AccordionContent>
              <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                {stack.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative p-6 sm:p-10 bg-gray-400/5"
                    >
                      <Image
                        alt={item.name}
                        src={item.icon}
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                      />
                    </div>
                  )
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
