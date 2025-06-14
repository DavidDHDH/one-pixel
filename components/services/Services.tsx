import designPic from '@/public/images/design.webp'
import ipadPic from '@/public/images/ipad.webp'
import me from '@/public/images/terrasse.webp'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import clsx from 'clsx'
import Image from 'next/image'
import { Icon } from '../shared/Icon'

const services = [
  {
    label: 'Applications métier sur mesure',
    description:
      'Gère tes réservations, plannings ou processus internes depuis une seule interface. Je conçois des applications web qui automatisent tes tâches et t’aident à mieux organiser ton activité au quotidien.',
    icon: 'application',
  },
  {
    label: 'Sites internet professionnels',
    description:
      'Un site internet sur mesure, moderne, rapide à déployer, optimisé pour les mobiles et le référencement local, livré en 1 à 2 semaines.',
    icon: 'website',
  },
  {
    label: 'IA & automatisation intelligente',
    description:
      'Je t’aide à intégrer l’intelligence artificielle dans tes outils : génération de contenu, réponses automatiques, chatbots connaissant ton business, analyse de données, agents IA… pour aller plus vite et mieux décider.',
    icon: 'ia',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative mt-24">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%23DFD2C2&color2=%23BFA78D&color3=%23DFD2C2&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1.6&positionX=0&positionY=0.9&positionZ=-0.3&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1&uFrequency=0&uSpeed=0.2&uStrength=2.1&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas>
      <div className=" mx-auto max-w-7xl px-6 lg:px-8 z-10">
        {/* Section text */}
        <div>
          <p className=" sm:text-lg font-semibold leading-7 text-white z-10">
            Mes services.
          </p>
          <h2 className="font-rubik mt-2 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Applications métier, sites internet et solutions web sur-mesure pour
            booster ton activité.
          </h2>
          <p className="sr-only">
            Développeur web freelance aux Antilles, je crée des logiciels
            métiers, plateformes SaaS et outils intégrant l’intelligence
            artificielle, pour améliorer l’efficacité des entreprises locales.
          </p>
        </div>
        {/* Section content */}
        <div className="grid justify-center w-full gap-12 mx-auto mt-12 lg:grid-cols-2 lg:gap-8 lg:mt-16 lg:max-w-screen-xl xl:max-w-screen-xl lg:justify-start">
          {/* Features list */}
          <div>
            {/* Item */}
            {services.slice(0, 3).map((service, index) => (
              <div
                key={`service-${index}`}
                className={clsx(
                  'w-full',
                  index === 1 &&
                    ' mt-8 lg:mt-5 xl:mt-8 2xl:mt-10 lg:pr-12 xl:pr-18 2xl:pr-28',
                  index === 2 && 'mt-8 lg:mt-5 xl:mt-8 2xl:mt-10'
                )}
              >
                <div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
                  <div className="relative flex w-full px-8 py-6 shadow-lg bg-white rounded-2xl bg-dark-700 sm:px-10">
                    <div className="text-center sm:flex sm:text-left">
                      <div className="w-full sm:w-1/6">
                        <div className="flex items-center justify-center sm:mx-0 from-dark-800 to-dark-900">
                          <Icon
                            name={service.icon}
                            className="w-6 h-6 text-primaryText"
                          />
                        </div>
                      </div>
                      <div className="w-full mt-3 sm:mt-0">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                          {service.label}
                        </h3>
                        <p className="mt-1 text-base text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Image collage */}
          <div className="flex items-center justify-center max-w-screen-md lg:max-w-full">
            <div className="grid w-full h-full grid-cols-2 gap-4">
              <div className="relative shadow-xl rounded-3xl col-span-2">
                <Image
                  src={designPic}
                  alt="Développeur agence web de création de site internet à St Barth"
                  className="object-cover object-center w-full h-full rounded-2xl aspect-[2/1]"
                  sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
                />
              </div>{' '}
              <div className="relative shadow-xl rounded-3xl">
                <Image
                  src={me}
                  alt="Conception d'interface utilisateur à St Barth"
                  className="object-cover object-center w-full h-full rounded-2xl aspect-square"
                  sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
                />
              </div>
              <div className="relative shadow-xl rounded-3xl">
                <Image
                  src={ipadPic}
                  alt="Conception d'interface utilisateur à St Barth"
                  className="object-cover object-center w-full h-full rounded-2xl aspect-square"
                  sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
