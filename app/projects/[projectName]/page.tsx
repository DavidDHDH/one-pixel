import React from "react"
import { projects } from "@/datas/projects"

const ProjectPage = ({ params }: { params: { projectName: string } }) => {
	const project = projects.find(
		(project) => project.internalUrl === params.projectName
	)
	return (
		<main className="h-screen flex justify-center items-center">
			ProjectPage {project?.title}
		</main>
	)
}

export default ProjectPage
