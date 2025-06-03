// REMETTRE COLUMN000-3 A LA PLACE DE GRID

import { testimonials } from '@/datas/testimonials'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

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
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none ">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0]  lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`pt-8 sm:inline-block sm:w-full sm:px-4 ${
                  index === 3 && 'col-start-2'
                }`}
              >
                <div
                  itemScope
                  itemType="https://schema.org/Review"
                  className="relative bg-white/50 backdrop-blur-sm border border-gray-100/60 rounded-lg p-6 shadow-lg"
                >
                  <div
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <meta itemProp="name" content={testimonial.author.name} />
                    <meta
                      itemProp="brand"
                      content={testimonial.author.company}
                    />
                  </div>

                  <div
                    itemProp="itemReviewed"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <meta itemProp="name" content="One Pixel" />
                    <meta
                      itemProp="description"
                      content="Agence de développement web aux Antilles, Saint Barthélemy"
                    />
                  </div>

                  <div
                    itemScope
                    itemType="https://schema.org/Rating"
                    itemProp="reviewRating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Image
                        src={testimonial.author.image}
                        alt={`Photo de ${testimonial.author.name}`}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <span className="text-sm font-semibold text-gray-700">
                          {testimonial.author.name}
                        </span>
                        <span className="mx-1.5 text-gray-300">•</span>
                        <span className="text-xs text-gray-500 truncate">
                          {testimonial.author.company}
                        </span>
                      </div>
                      <p
                        itemProp="reviewBody"
                        className="text-sm/5 text-gray-600"
                      >
                        {testimonial.body}
                      </p>
                      <div className="flex mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="h-3 w-3 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
