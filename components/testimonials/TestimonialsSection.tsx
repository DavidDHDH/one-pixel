// REMETTRE COLUMN000-3 A LA PLACE DE GRID

import { testimonials } from "@/datas/testimonials"
import Image from "next/image"

export default function TestimonialsSection() {
	return (
		<section
			id="testimonials"
			className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-lg font-semibold leading-7 text-primaryText">
						Témoignages.
					</h2>
					<p className="font-rubik mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						C&apos;est vous qui le dites.
					</p>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none ">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:grid lg:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="pt-8 sm:inline-block sm:w-full sm:px-4">
								<figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
									<blockquote className="text-gray-600">
										<p>{`“${testimonial.body}”`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<Image
											alt=""
											src={testimonial.author.image}
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
