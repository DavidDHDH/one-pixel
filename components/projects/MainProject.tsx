import { ProjectType } from "@/datas/projects"
import { Icon } from "../shared/Icon"
import Image from "next/image"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip"
// import Link from "next/link"

export default function MainProject({
	index,
	project,
}: {
	index: number
	project: ProjectType
}) {
	if (index % 2 === 0) {
		return (
			<div className="overflow-hidden bg-white py-20 sm:py-28">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div className="lg:ml-auto lg:pl-4 lg:pt-4 h-full py-10">
							<div className="lg:max-w-xl flex flex-col h-full">
								<p className="text-base font-semibold leading-7 text-primaryText">
									{project.type}
								</p>
								<h3 className="font-rubik mt-1 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
									{project.title}
								</h3>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									{project.description}
								</p>
								<dl className="my-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none flex-grow">
									{project.features.map((feature) => (
										<div
											key={feature.name}
											className="relative pl-9">
											<dt className="inline font-semibold text-gray-900">
												<Icon
													name={feature.icon}
													aria-hidden="true"
													className="absolute left-1 top-1 h-5 w-5 text-primaryText"
												/>
												{feature.name}
											</dt>{" "}
											<dd className="inline">{feature.description}</dd>
										</div>
									))}
								</dl>
								<div className="flex items-center justify-between">
									<div className="flex gap-4 ml-1">
										{project.stack.map((s, i) => (
											<TooltipProvider
												delayDuration={100}
												key={i}>
												<Tooltip>
													<TooltipTrigger>
														<Icon name={s} />
													</TooltipTrigger>
													<TooltipContent>
														<p>{s}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										))}
									</div>
									<div className="hidden xl:block">
										<TooltipProvider delayDuration={0}>
											<Tooltip>
												<TooltipTrigger>
													<p className="text-sm  leading-6 text-gray-400 cursor-default">
														Étude de cas <span aria-hidden="true">→</span>
													</p>
												</TooltipTrigger>
												<TooltipContent>
													<p>Bientôt disponible</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-start justify-end lg:order-first">
							<Image
								alt={`${project.title} mockup`}
								src={project.mainImage}
								width={2432}
								height={1442}
								className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
							/>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="overflow-hidden bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto items-center h-full grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div className="lg:mr-auto lg:pr-4 lg:pt-4 h-full py-10">
							<div className="lg:max-w-xl flex flex-col h-full">
								<p className="text-base font-semibold leading-7 text-primaryText">
									{project.type}
								</p>
								<h3 className="font-rubik mt-1 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
									{project.title}
								</h3>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									{project.description}
								</p>
								<dl className="my-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none flex-grow">
									{project.features.map((feature) => (
										<div
											key={feature.name}
											className="relative pl-9">
											<dt className="inline font-semibold text-gray-900">
												<Icon
													name={feature.icon}
													aria-hidden="true"
													className="absolute left-1 top-1 h-5 w-5 text-primaryText"
												/>
												{feature.name}
											</dt>{" "}
											<dd className="inline">{feature.description}</dd>
										</div>
									))}
								</dl>
								<div className="flex items-center justify-between">
									<div className="flex gap-4 mt-auto ml-1">
										{project.stack.map((s, i) => (
											<TooltipProvider key={i}>
												<Tooltip>
													<TooltipTrigger>
														<Icon name={s} />
													</TooltipTrigger>
													<TooltipContent>
														<p>{s}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										))}
									</div>
									{/* <Link
										href={`/projects/${project.internalUrl}`}
										className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
										Étude de cas <span aria-hidden="true">→</span>
									</Link> */}
								</div>
							</div>
						</div>
						<Image
							alt={`${project.title} mockup`}
							src={project.mainImage}
							width={2432}
							height={1442}
							className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						/>
					</div>
				</div>
			</div>
		)
	}
}
