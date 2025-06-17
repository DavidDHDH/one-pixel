import { testimonials } from '@/datas/testimonials'
import { CONTACT_EMAIL } from '@/lib/const'
import Image from 'next/image'
import TestimonialCard from '../hero-section/TestimonialCard'
import { Icon } from '../shared/Icon'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="sm:text-lg font-semibold leading-7 text-primaryText">
              Avis & témoignages clients
            </h2>
            <p className="font-rubik mt-2 text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              La confiance est mutuelle.
            </p>
          </div>
          <a
            href="https://g.co/kgs/XJQCvZ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/Google-Review-Logo.png"
              alt="Google Review Logo"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div itemScope itemType="https://schema.org/Product">
          <meta
            itemProp="name"
            content="Création de sites internet et solutions IA sur‑mesure"
          />
          <div
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <meta itemProp="ratingValue" content="5" />
            <meta itemProp="ratingCount" content="6" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none ">
            <div className="sm:-mx-4 sm:columns-2 sm:text-[0]  lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`pt-8 sm:inline-block sm:w-full sm:px-4 ${
                    index === 3 && 'col-start-2'
                  }`}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    includeItemReviewed={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-24 gap-4 my-4">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            Un projet web en tête ?{' '}
          </h3>
          <p className="mt-4 sm:text-lg leading-8 text-gray-600">
            Je t&apos;aide à y voir plus clair, et je te propose des solutions
            concrètes, sans aucun engagement.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}?subject=Demande d'information`}>
            <div className="rounded-md flex items-center gap-2 bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
              <span>
                <Icon name="mail" />
              </span>{' '}
              Discutons ensemble
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
