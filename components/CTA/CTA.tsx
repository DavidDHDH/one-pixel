import { CheckCircleIcon } from "@heroicons/react/20/solid"

const projectsType = [
	"Application métier",
	"SAAS",
	"Dashboard interne",
	"Automatisation de tâches",
	"E-commerce",
	"...",
]

export default function CTA() {
	return (
		<section className="bg-gray-900">
			<div className="relative isolate">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
						<img
							alt=""
							src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
							className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
						/>
						<div className="w-full flex-auto">
							<h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
								Parlons de votre projet.
							</h2>
							<p className="mt-6 text-pretty text-lg/8 text-gray-300">
								Vous avez une idée en tête ? Un besoin spécifique par rapport à
								votre activité ? Parlons-en ensemble pour voir comment je peux
								vous aider.
							</p>
							<ul
								role="list"
								className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
								{projectsType.map((type) => (
									<li
										key={type}
										className="flex gap-x-3">
										<CheckCircleIcon
											aria-hidden="true"
											className="h-7 w-5 flex-none"
										/>
										{type}
									</li>
								))}
							</ul>
							<div className="mt-6 flex justify-end">
								<a
									href="#"
									className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
									Planifier un appel
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
					<div
						style={{
							clipPath:
								"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
						}}
						className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#BFA68E] to-[#4f46e5] opacity-25"
					/>
				</div>
			</div>
		</section>
	)
}
