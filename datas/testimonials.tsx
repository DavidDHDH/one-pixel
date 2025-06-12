import arnaud from '@/public/testimonials/arnaud.webp'
import placeholder from '@/public/testimonials/dummy-profile-pic-300x300.webp'
import melina from '@/public/testimonials/frip_app.webp'
import margaux from '@/public/testimonials/margaux.webp'
import pierre from '@/public/testimonials/tile.webp'
import { StaticImageData } from 'next/image'

export type Testimonial = {
  body: React.ReactNode
  author: {
    name: string
    company: string
    image: StaticImageData
  }
}

export const testimonials: Testimonial[] = [
  {
    body: (
      <p>
        Un développeur{' '}
        <span className="font-bold">
          à l&apos;écoute, rapide et qui sait ce qu&apos;il fait
        </span>
        . J&apos;ai développé mon{' '}
        <span className="font-bold">site et web app</span> avec lui, et
        c&apos;était <span className="font-bold">parfait</span> !
      </p>
    ),
    author: {
      name: 'Mélina S.',
      company: 'Frip West Indies',
      image: melina,
    },
  },

  {
    body: (
      <p>
        <span className="font-bold">
          Efficacité, professionnalisme, réactivité et gentillesse
        </span>{' '}
        sont les atouts premiers de David. Nous avons ce que nous souhaitons
        depuis si longtemps :{' '}
        <span className="font-bold">un site magnifique</span> ! Merci encore
        David.
      </p>
    ),
    author: {
      name: 'Pierre B.',
      company: 'The Tile & Design Shop',
      image: pierre,
    },
  },
  {
    body: (
      <p>
        J’ai fait appel aux services de David pour la{' '}
        <span className="font-bold">création d’un logiciel</span> et suis plus
        que satisfaite de son travail.{' '}
        <span className="font-bold">
          Efficacité, rapidité, professionnalisme et écoute
        </span>
        . Je recommande sans hésiter!
      </p>
    ),
    author: {
      name: 'Margaux B.',
      company: 'Villa Care',
      image: margaux,
    },
  },
  {
    body: (
      <p>
        <span className="font-bold">Excellente expérience</span> avec OnePixel
        pour la création de notre site web ! David est{' '}
        <span className="font-bold">très pros, à l’écoute et réactif</span>. Le
        résultat est{' '}
        <span className="font-bold">
          moderne, esthétique et parfaitement adapté à nos besoins.
        </span>
        Je recommande vivement !
      </p>
    ),
    author: {
      name: 'Arnaud B.',
      company: 'Seabarts',
      image: arnaud,
    },
  },
  {
    body: (
      <p>
        Personne <span className="font-bold">très à l&apos;écoute</span> des
        projets , je ne connais pas l&apos;informatique et il{' '}
        <span className="font-bold">partage sa passion</span> , il sait prendre
        le temps pour optimiser les demandes ! Je recommande.
      </p>
    ),
    author: {
      name: 'Philippe H.',
      company: 'Discover St Barths',
      image: placeholder,
    },
  },
]
