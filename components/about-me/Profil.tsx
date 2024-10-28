import profilPic from "@/public/images/IMG_7289.webp"
import Image from "next/image"
import { Icon } from "../shared/Icon"

const Profil = ({
	people,
}: {
	people: { name: string; role: string; githubUrl: string; linkedinUrl: string }
}) => {
	return (
		<div className="flex justify-center flex-col">
			<Image
				alt=""
				src={profilPic}
				className="aspect-[3/2] w-full rounded-2xl object-cover"
			/>
			<h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-primaryText">
				{people.name}
			</h3>
			<p className="text-base leading-7 text-gray-600">{people.role}</p>
			<div className="mt-6 flex gap-x-6 justify-center">
				<a
					href={people.githubUrl}
					className="text-gray-400 hover:text-gray-500">
					<span className="sr-only">Github</span>
					<Icon name="Github" />
				</a>
				<a
					href={people.linkedinUrl}
					className="text-gray-400 hover:text-gray-500">
					<span className="sr-only">LinkedIn</span>
					<Icon name="LinkedIn" />
				</a>
			</div>
		</div>
	)
}

export default Profil
