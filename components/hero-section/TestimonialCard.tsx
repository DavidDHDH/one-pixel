import { Testimonial } from '@/datas/testimonials'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function TestimonialCard({
  testimonial,
  includeItemReviewed = false,
  variant = 'light',
}: {
  testimonial: Testimonial
  includeItemReviewed?: boolean
  variant?: 'light' | 'dark'
}) {
  if (includeItemReviewed) {
    return (
      <div itemScope itemType="https://schema.org/Product">
        <meta
          itemProp="name"
          content="Création de sites internet et solutions IA sur‑mesure"
        />
        <div
          itemScope
          itemType="https://schema.org/Review"
          itemProp="review"
          className={`relative max-w-lg rounded-lg p-6 shadow-lg border border-t-white/50 border-l-white/50 border-b-white/25 border-r-white/25 bg-[radial-gradient(circle_at_40%_25%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_70%,rgba(255,255,255,0.02)_100%)] backdrop-blur-md lg:backdrop-blur-sm transition-all duration-500  ${
            variant === 'dark'
              ? 'hover:border-white/60'
              : 'hover:border-gray-200/60'
          }`}
        >
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content={testimonial.author.name} />
            <meta itemProp="brand" content={testimonial.author.company} />
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
                <span
                  className={`text-sm font-semibold ${
                    variant === 'dark' ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {testimonial.author.name}
                </span>
                <span
                  className={`mx-1.5 ${
                    variant === 'dark' ? 'text-white/60' : 'text-gray-300'
                  }`}
                >
                  •
                </span>
                <span
                  className={`text-xs truncate ${
                    variant === 'dark' ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {testimonial.author.company}
                </span>
              </div>
              <div
                itemProp="reviewBody"
                className={`text-sm/5 text-left ${
                  variant === 'dark' ? 'text-white/90' : 'text-gray-600'
                }`}
              >
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
      </div>
    )
  }

  return (
    <div
      itemScope
      itemType="https://schema.org/Review"
      itemProp="review"
      className={`relative rounded-lg p-6 shadow-lg max-w-xl border border-t-white/50 border-l-white/50 border-b-white/25 border-r-white/25 bg-[radial-gradient(circle_at_40%_25%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_70%,rgba(255,255,255,0.02)_100%)] backdrop-blur-sm transition-all duration-500 hover:backdrop-blur-md ${
        variant === 'dark'
          ? 'hover:border-white/60'
          : 'hover:border-gray-200/60'
      }`}
    >
      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={testimonial.author.name} />
        <meta itemProp="brand" content={testimonial.author.company} />
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
            <span
              className={`text-sm font-semibold ${
                variant === 'dark' ? 'text-white' : 'text-gray-700'
              }`}
            >
              {testimonial.author.name}
            </span>
            <span
              className={`mx-1.5 ${
                variant === 'dark' ? 'text-white/60' : 'text-gray-300'
              }`}
            >
              •
            </span>
            <span
              className={`text-xs truncate ${
                variant === 'dark' ? 'text-white/80' : 'text-gray-500'
              }`}
            >
              {testimonial.author.company}
            </span>
          </div>
          <div
            itemProp="reviewBody"
            className={`text-sm/5 ${
              variant === 'dark' ? 'text-white/90' : 'text-gray-600'
            }`}
          >
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
