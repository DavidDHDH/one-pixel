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
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

const SecondaryProject = ({ project }: { project: ProjectType }) => {
	return (
		<div className="rounded-xl shadow-2xl overflow-hidden bg-white h-[500px] flex flex-col text-gray-900 ">
			<div className="h-[50%]">
				<Dialog>
					<DialogTrigger asChild>
						<div className="cursor-pointer h-full">
							<Image
								src={project.mainImage}
								alt={`${project.title} mockup`}
								className="object-cover object-center h-full"
							/>
						</div>
					</DialogTrigger>
					<DialogContent className="max-w-6xl">
						<Image
							src={project.mainImage}
							alt={`${project.title} mockup`}
							className="w-full h-auto"
						/>
					</DialogContent>
				</Dialog>
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
