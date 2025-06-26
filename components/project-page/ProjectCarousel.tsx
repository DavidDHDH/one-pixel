'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

export const ProjectCarousel = ({
  projectImages,
  projectTitle,
}: {
  projectImages: StaticImageData[]
  projectTitle: string
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const openDialog = (index: number) => {
    setSelectedImageIndex(index)
    setIsDialogOpen(true)
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Synchroniser l'index sélectionné avec le carousel
  useEffect(() => {
    if (api && isDialogOpen) {
      api.scrollTo(selectedImageIndex)
    }
  }, [selectedImageIndex, api, isDialogOpen])

  if (!projectImages || projectImages.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-rubik text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance   dark:text-white text-center mb-8">
          Galerie du projet
        </h2>

        {/* Grille normale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectImages.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => openDialog(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <Image
                  src={image}
                  alt={`Image ${index + 1} de ${projectTitle}`}
                  className="w-full h-64 object-cover"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dialog avec Carousel shadcn ui */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[85vh] sm:max-h-[90vh] p-0 overflow-hidden">
            <div className="relative w-full h-full flex flex-col">
              {/* Carousel principal */}
              <div className="relative w-full bg-white flex-1 min-h-0">
                <Carousel
                  setApi={setApi}
                  className="w-full h-full"
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                >
                  <CarouselContent className="h-full">
                    {projectImages.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="h-full flex items-center justify-center p-2 sm:p-4">
                          <Image
                            src={image}
                            alt={`Image ${index + 1} du projet`}
                            className="max-w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain"
                            placeholder="blur"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Boutons de navigation personnalisés */}
                  <CarouselPrevious
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 h-10 w-10 sm:h-12 sm:w-12"
                    aria-label="Image précédente"
                  />
                  <CarouselNext
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 h-10 w-10 sm:h-12 sm:w-12"
                    aria-label="Image suivante"
                  />
                </Carousel>

                {/* Indicateur de position */}
                {projectImages.length > 1 && (
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {current + 1} / {projectImages.length}
                  </div>
                )}
              </div>

              {/* Miniatures en bas */}
              {projectImages.length > 1 && (
                <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-4 flex-shrink-0">
                  <div className="flex gap-1 sm:gap-4 overflow-x-auto pb-1 sm:p-2">
                    {projectImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedImageIndex(index)
                          api?.scrollTo(index)
                        }}
                        className={`flex-shrink-0 relative w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden transition-all duration-200 ${
                          index === current
                            ? 'ring-2 ring-sand-600 scale-110'
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Miniature ${index + 1}`}
                          className="w-full h-full object-cover"
                          placeholder="blur"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
