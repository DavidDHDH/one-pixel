import { Icon } from "../shared/Icon"
import Stack from "../stack/Stack"
import Profil from "./Profil"

const people = {
	name: "David Heimfert",
	role: "Développeur Web - Next.JS",
	imageUrl: "public/images/IMG_7289.webp",
	xUrl: "#",
	linkedinUrl: "#",
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
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8 pb-24">
				<div className="mx-auto max-w-2xl">
					<p className="text-base font-semibold leading-7 text-primary">
						Votre partenaire local.
					</p>
					<h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Développeur web fullstack, passionné par le code, le design, et
						l&apos;IA.
					</h2>
				</div>
				<div className="grid grid-cols-2 gap-10 pt-10">
					<div className="col-span-1 mx-auto">
						<Profil people={people} />
					</div>
					<div className="col-span-1 mx-auto space-y-8 mt-4">
						<p className="text-start max-w-[600px]">
							Je suis David Heimfert, développeur web freelance.
							J&apos;accompagne les entreprises et les entrepreneurs dans la
							création d&apos;application web sur mesure, c&apos;est à dire qui
							s&apos;adapate à vous, et non l&apos;inverse.
						</p>
						<p className="text-start max-w-[600px]">
							Ici, pas de sous-traitance. Je suis au plus proche de vous pour
							comprendre vos besoins, vos attentes et vos objectifs. Je connais
							les contraintes lié à notre situation géographique. Nous allons
							ensemble développer une solution 100% adaptée et évolutive.
						</p>
						<p className="text-start max-w-[600px]">
							Ma spécialité ? Les applications métiers et les logiciels de type
							SAAS (Software As A Service).
						</p>
						<div className="flex gap-4 justify-evenly">
							{pros.map((pro, i) => (
								<div
									key={i}
									className="flex flex-col items-center gap-2 border p-2 rounded-lg bg-gray-50 w-40">
									<Icon
										name={pro.icon}
										className="h-6 w-6 text-dark-900"
									/>
									<p>{pro.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Stack />
		</section>
	)
}