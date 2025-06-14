import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/const'
import profilPic2 from '@/public/images/feuille-2.webp'
import Image from 'next/image'
import { Icon } from '../shared/Icon'

const links = [
  {
    name: 'email',
    href: `mailto:${CONTACT_EMAIL}?subject=Demande d'information`,
    icon: 'mail',
  },
  {
    name: 'Whatsapp',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: 'whatsapp',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/david-heimfert-571960265/',
    icon: 'LinkedIn',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DavidDHDH',
    icon: 'Github',
  },
]

const Profil = ({
  people,
}: {
  people: {
    name: string
    role: string
    githubUrl: string
    linkedinUrl: string
  }
}) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Image
        alt="David Heimfert, Développeur Web - Next.JS"
        src={profilPic2}
        className="aspect-[1/1] w-full max-w-[500px] rounded-2xl object-cover shadow-lg"
      />
      <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-primaryText">
        {people.name}
      </h3>
      <p className="text-base leading-7 text-gray-600">{people.role}</p>
      <div className="mt-6 flex gap-x-6 justify-center">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{item.name}</span>
            <Icon name={item.icon} className="h-6" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Profil
