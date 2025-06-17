// REMETTRE COLUMN000-3 A LA PLACE DE GRID

import { testimonials } from '@/datas/testimonials'
import TestimonialCard from '../hero-section/TestimonialCard'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="sm:text-lg font-semibold leading-7 text-primaryText">
            Avis & témoignages clients
          </h2>
          <p className="font-rubik mt-2 text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            La confiance est mutuelle.
          </p>
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
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
