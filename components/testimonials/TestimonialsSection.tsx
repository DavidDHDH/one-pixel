const testimonials = [
	{
		body: "Personne très à l'écoute des projets , je ne connais pas l'informatique et il partage sa passion , il sait prendre le temps pour optimiser les demandes ! Je recommande.",
		author: {
			name: "Philippe H.",
			company: "Discover St Barths",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "J’ai fait appel aux services de David pour la création d’un logiciel et suis plus que satisfaite de son travail. Efficacité, rapidité, professionnalisme et écoute. Je recommande sans hésiter!",
		author: {
			name: "Margaux B.",
			company: "Villa Care",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "Efficacité, professionnalisme, réactivité et gentillesse sont les atouts premiers de David. Nous avons ce que nous souhaitons depuis si longtemps : un site magnifique !. Merci encore David.",
		author: {
			name: "Pierre B.",
			company: "The Tile & Design Shop",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},

	// More testimonials...
]

// REMETTRE COLUMN000-3 A LA PLACE DE GRID

export default function TestimonialsSection() {
	return (
		<section
			id="testimonials"
			className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-base font-semibold leading-7 text-indigo-600">
						C&apos;est vous qui le dites.
					</p>
					<h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Témoignages
					</h2>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none ">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:grid lg:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="pt-8 sm:inline-block sm:w-full sm:px-4">
								<figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
									<blockquote className="text-gray-900">
										<p>{`“${testimonial.body}”`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<img
											alt=""
											src={testimonial.author.imageUrl}
											className="h-10 w-10 rounded-full bg-gray-50"
										/>
										<div>
											<div className="font-semibold text-gray-900">
												{testimonial.author.name}
											</div>
											<div className="text-gray-600">{`${testimonial.author.company}`}</div>
										</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
