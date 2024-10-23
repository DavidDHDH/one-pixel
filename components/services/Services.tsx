import clsx from "clsx"
import Image from "next/image"
import { Icon } from "../shared/Icon"
import codePic from "@/public/images/Code illustration design.webp"
import designPic from "@/public/images/Web design illustration.webp"

const services = [
	{
		label: "Web Design",
		description:
			"Conception d'interfaces utilisateurs modernes, intuitives et performantes.",
		icon: "design",
	},
	{
		label: "Développement",
		description:
			"Le code à ses régles : je développe des applications reactives et sécurisées.",
		icon: "code",
	},
	{
		label: "Maintenance & Optimisation",
		description:
			"Votre web application reste performante et sécurisée tout au long de sa vie.",
		icon: "tool",
	},
]

export default function Services() {
	return (
		<section className="bg-gray-900">
			<div className=" mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section text */}
				<div className="max-w-xl mx-auto text-center md:max-w-2xl lg:text-left lg:max-w-screen-xl">
					<p className="text-base font-semibold leading-7 text-primary">
						Ce que je vais faire pour vous.
					</p>
					<div className="grid w-full gap-6 mt-6 lg:grid-cols-5">
						<div className="lg:col-span-3">
							<h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
								Mes services.
							</h2>
						</div>
						{/* <div className="lg:col-span-2">
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. mi
								quos, quia ipsa repellat a, deleniti quasi quis.
							</p>
						</div> */}
					</div>
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
									"w-full",
									index === 1 &&
										" mt-8 lg:mt-5 xl:mt-8 2xl:mt-10 lg:pr-12 xl:pr-18 2xl:pr-28",
									index === 2 && "mt-8 lg:mt-5 xl:mt-8 2xl:mt-10"
								)}>
								<div className="max-w-lg mx-auto lg:mr-auto xl:mx-auto">
									<div className="relative flex w-full px-8 py-6 shadow-xl bg-gray-100 rounded-3xl bg-dark-700 sm:px-10">
										<div className="text-center sm:flex sm:text-left">
											<div className="w-full sm:w-1/5">
												<div className="flex items-center justify-center w-12 h-12 mx-auto bg-gradient-to-r rounded-2xl sm:mx-0 from-dark-800 to-dark-900">
													<Icon
														name={service.icon}
														className="w-6 h-6 text-dark-300"
													/>
												</div>
											</div>
											<div className="w-full mt-3 sm:mt-0">
												<h5 className="text-lg font-semibold text-gray-900 ">
													{service.label}
												</h5>
												<p className="mt-1 text-base text-dark-300">
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
						<div className="grid w-full h-full grid-flow-col grid-rows-2 gap-4">
							<div className="relative row-span-2 shadow-xl rounded-3xl">
								<Image
									src={designPic}
									alt="Office work"
									className="object-cover object-right w-full h-full rounded-3xl"
									sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
								/>
							</div>
							<div className="relative shadow-xl rounded-3xl">
								<Image
									src={designPic}
									alt="More office work"
									className="object-cover object-center w-full h-full rounded-3xl"
									sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw"
								/>
							</div>
							<div className="relative shadow-xl rounded-3xl">
								<Image
									src={codePic}
									alt="Group brainstorming"
									className="object-cover object-center w-full h-full rounded-3xl"
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
