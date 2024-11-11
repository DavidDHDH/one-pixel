import { CONTACT_EMAIL } from "@/lib/const"
import { Icon } from "../shared/Icon"
import Stack from "../stack/Stack"
import Profil from "./Profil"

const people = {
	name: "David Heimfert",
	role: "Développeur Web - Next.JS",
	imageUrl: "public/images/IMG_7289.webp",
	githubUrl: "https://github.com/DavidDHDH",
	linkedinUrl: "https://www.linkedin.com/in/david-heimfert-571960265/",
}

const pros = [
	{
		name: "Réactivité",
		icon: "speed",
	},
	{
		name: "Créativité",
		icon: "creativity",
	},
	{
		name: "Pixel Perfect",
		icon: "pixel",
	},
]

export default function AboutMe() {
	return (
		<section id="aboutme">
			<div className="mx-auto max-w-7xl px-6 md:text-center lg:px-8 pb-24">
				<div className="mx-auto max-w-2xl">
					<p className="text-lg font-semibold leading-7 text-primaryText">
						Votre partenaire local.
					</p>
					<h2 className="font-rubik mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance text-gray-900">
						David Heimfert - Développeur web, passionné par le code, le design,
						et l&apos;IA.
					</h2>
				</div>
				<div className="md:grid md:grid-cols-2 gap-10 pt-10">
					<div className="col-span-1 mx-auto">
						<Profil people={people} />
					</div>
					<div className="col-span-1 mx-auto space-y-8 mt-4 text-gray-600 md:max-w-full">
						<p className="text-start max-w-[600px] md:max-w-full">
							Je crée des solutions digitales sur mesure qui s&apos;adaptent à
							vous — pas l&apos;inverse.
						</p>
						<p className="text-start max-w-[600px] md:max-w-full">
							Ici, pas de sous-traitance, pas d&apos;intermédiaire. Je suis au
							plus proche de vous pour comprendre pleinement vos besoins et vos
							objectifs en tenant compte des défis uniques de notre région. Nous
							allons ensemble développer une solution 100% adaptée et évolutive.
						</p>
						<p className="text-start max-w-[600px] md:max-w-full">
							Ma spécialité ? Les applications métiers et les logiciels de type
							SAAS (Software As A Service).
						</p>
						<p className="text-start max-w-[600px] md:max-w-full">
							Mon kiff ? Trouver des solutions à vos défis du quotidien.
						</p>

						<div className="flex gap-4 justify-evenly">
							{pros.map((pro, i) => (
								<div
									key={i}
									className="flex flex-col items-center gap-2 border p-2 rounded-lg bg-gray-50 w-40 text-gray-900">
									<Icon
										name={pro.icon}
										className="h-6 w-6 text-dark-900"
									/>
									<p>{pro.name}</p>
								</div>
							))}
						</div>
						<div className="flex justify-center">
							<a href={`mailto:${CONTACT_EMAIL}?subject=Demande d'information`}>
								<div className="rounded-md flex items-center gap-2 bg-sand-700 px-3.5 py-2.5 transition-all text-sm font-semibold text-white shadow-sm hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400">
									<span>
										<Icon name="mail" />
									</span>{" "}
									Me Contacter
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Stack />
		</section>
	)
}
