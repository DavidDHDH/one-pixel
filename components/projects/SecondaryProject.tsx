import React from "react"
import Image from "next/image"
import { ProjectType } from "@/datas/projects"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip"
import { Icon } from "../shared/Icon"

const SecondaryProject = ({ project }: { project: ProjectType }) => {
	return (
		<div className="rounded-xl shadow-xl overflow-hidden bg-[#1F2937] h-[550px] flex flex-col text-white ">
			<div className="h-[50%]">
				<Image
					src={project.mainImage}
					alt={`${project.title} mockup`}
					className="object-cover object-center h-full"
				/>
			</div>
			<div className="p-4 flex flex-col flex-grow">
				<div className="flex justify-between items-center mb-4 ">
					<h3 className="font-semibold text-xl font-rubik"> {project.title}</h3>
					<p className="border px-2 bg-gray-100 text-gray-900 text-sm rounded-full">
						{project.type}
					</p>
				</div>
				<p className="flex-grow">{project.description}</p>
				<div className="flex gap-4">
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
			</div>
		</div>
	)
}

export default SecondaryProject
