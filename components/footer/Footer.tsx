import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/const'
import Link from 'next/link'
import { Icon } from '../shared/Icon'

const navigation = [
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
    href: 'https://www.linkedin.com/in/david-heimfert',
    icon: 'LinkedIn',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DavidDHDH',
    icon: 'Github',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/monsieur__david/',
    icon: 'Instagram',
  },
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-800"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <Icon name={item.icon} className="h-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} One Pixel - agence web & IA à Saint
          Barthélémy, Tout droit réservé.{' '}
          <Link
            href="/legals"
            className="text-gray-600 hover:text-gray-800 text-sm underline"
          >
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  )
}
