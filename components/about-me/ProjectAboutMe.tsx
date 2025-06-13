import { DavidHeimfert } from './AboutMe'
import Profil from './Profil'

export const ProjectAboutMe = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 md:text-center lg:px-8 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="sm:text-lg font-semibold leading-7 text-primaryText">
            On ne s&apos;est pas présenté…
          </p>
          <h2 className="font-rubik mt-2 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl lg:text-balance text-gray-900">
            Je suis David Heimfert, développeur web à Saint-Barthélemy,
            passionné par le code et l&apos;Intelligence Artificielle.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 items-center">
          <div className="col-span-1 mx-auto">
            <Profil people={DavidHeimfert} />
          </div>
        </div>
      </div>
    </section>
  )
}
