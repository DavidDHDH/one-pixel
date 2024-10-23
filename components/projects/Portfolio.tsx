import React from "react"
import MainProject from "./MainProject"
import SecondaryProject from "./SecondaryProject"
import { projects } from "@/datas/projects"

const Portfolio = () => {
	const mainProjects = projects.filter((project) => project.isMainProject)
	const secondaryProjects = projects.filter((project) => !project.isMainProject)

	return (
		<section
			id="portfolio"
			className="min-h-screen">
			<div className="mx-auto max-w-2xl lg:text-center">
				<p className="text-base font-semibold leading-7 text-indigo-600">
					Intelligement conçu, construit avec précision.
				</p>
				<h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
					Mes projets
				</h2>
			</div>
			{mainProjects.map((project, index) => (
				<MainProject
					key={project.title}
					index={index}
					project={project}
				/>
			))}
			<div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-7xl px-6 lg:px-8 pt-12 sm:pt-24">
				{secondaryProjects.map((project, index) => (
					<SecondaryProject
						key={index}
						project={project}
					/>
				))}
			</div>
		</section>
	)
}

export default Portfolio
