import { Icon } from "../shared/Icon"

const features = [
	{
		name: "Étude",
		description:
			"Une phase d'analyse approfondie pour définir un MVP qui cible précisément les besoins de vos utilisateurs. L'objectif : un plan de développement clair et optimal.",
		icon: "search",
	},
	{
		name: "UX/UI Design",
		description:
			"Une interface professionnelle pensée pour maximiser l'adoption. Chaque écran est validé pour garantir une expérience utilisateur fluide et engageante dès le lancement.",
		icon: "pixel",
	},
	{
		name: "Développement",
		description:
			"Une construction itérative basée sur des technologies robustes et évolutives. Des validations régulières assurent un alignement parfait avec vos attentes.",
		icon: "dev",
	},
	{
		name: "Suivi",
		description:
			"Un accompagnement continu pour faire évoluer le produit. Analyse des usages, priorisation des features, optimisations : votre application grandit avec votre succès.",
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
					<h2 className="text-lg font-semibold leading-7 text-primaryText">
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
										className="h-6 w-6 flex-none text-primaryText"
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
