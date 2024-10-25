import { Icon } from "../shared/Icon"

const features = [
	{
		name: "Etude",
		description:
			"Je vous aide à définir vos besoins et à les prioriser. Nous définissons ensemble le cahier des charges et les objectifs de votre projet, et je vous propose une solution adaptée.",
		icon: "search",
	},
	{
		name: "UX/UI Design",
		description:
			"Je conçois les interfaces utilisateurs de votre application, afin de la rendre le plus intuitive et agréable possible pour les utilisateurs finaux. Nous validons ensemble chaque écran.",
		icon: "pixel",
	},
	{
		name: "Developpement",
		description:
			"Suivant les maquettes que nous avons définies ensemble, je développe votre application par sprint, en utilisant les technologies web les plus adaptées. Vous validez chaque étape.",
		icon: "dev",
	},
	{
		name: "Suivi",
		description:
			"Je vous accompagne de manière proactive dans la priorisation des futures fonctionnalités et vous suggère des améliorations basées sur mon expertise.",
		icon: "rotateArrow",
	},
]

export default function ProcessSection() {
	return (
		<section
			id="process"
			className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-600">
						Process
					</h2>
					<p className="font-rubik mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl lg:text-balance text-gray-900">
						Rien n&apos;est laissé au hasard.
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						De l&apos;accompagnement lors de la phase de recherche, à la mise en
						production, je vous accompagne tout au long de votre projet.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 ">
									<Icon
										name={feature.icon}
										className="h-6 w-6 flex-none text-indigo-400"
									/>
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">{feature.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}
