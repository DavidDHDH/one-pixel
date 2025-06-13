import { Testimonial } from '@/datas/testimonials'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial
}) {
  return (
    <div
      itemScope
      itemType="https://schema.org/Review"
      className="relative bg-white/50 backdrop-blur-sm border border-gray-100/60 rounded-lg p-6 shadow-lg max-w-md"
    >
      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={testimonial.author.name} />
        <meta itemProp="brand" content={testimonial.author.company} />
      </div>

      <div
        itemProp="itemReviewed"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta
          itemProp="name"
          content="Création de sites internet et solutions IA sur-mesure"
        />
        <meta itemProp="provider" content="One Pixel" />
        <meta
          itemProp="areaServed"
          content="Saint-Barthélemy, Saint Martin, Antilles françaises"
        />
        <meta
          itemProp="serviceType"
          content="Développement web, intégration IA, SaaS sur-mesure"
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
            alt={`Photo de ${testimonial.author.name}, ${testimonial.author.company}`}
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
          <div itemProp="reviewBody" className="text-sm/5 text-gray-600">
            {testimonial.body}
          </div>
          <div className="flex mt-1.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-3 w-3 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
