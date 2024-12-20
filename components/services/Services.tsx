import clsx from "clsx"
import Image from "next/image"
import { Icon } from "../shared/Icon"
import codePic from "@/public/images/Code illustration design.webp"
import designPic from "@/public/images/Web design illustration.webp"
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react"

const services = [
	{
		label: "Développement",
		description:
			"Le code à ses régles : je développe des applications reactives et sécurisées.",
		icon: "code",
	},
	{
		label: "Web Design",
		description:
			"Conception d'interfaces utilisateurs modernes, intuitives et performantes.",
		icon: "design",
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
		<section
			id="services"
			className="relative mt-24">
			<ShaderGradientCanvas
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: -1,
				}}>
				<ShaderGradient
					control="query"
					urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=4.4&cPolarAngle=70&cameraZoom=1&color1=%23DFD2C2&color2=%23BFA78D&color3=%23DFD2C2&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1.6&positionX=0&positionY=0.9&positionZ=-0.3&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1&uFrequency=0&uSpeed=0.2&uStrength=2.1&uTime=0&wireframe=false&zoomOut=false"
				/>
			</ShaderGradientCanvas>
			<div className=" mx-auto max-w-7xl px-6 lg:px-8 z-10">
				{/* Section text */}
				<div>
					<h2 className=" text-lg font-semibold leading-7 text-white z-10">
						Mes services.
					</h2>
					<p className="font-rubik mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						Ce que je peux faire pour vous.
					</p>
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
									<div className="relative flex w-full px-8 py-6 shadow-xl bg-white rounded-3xl bg-dark-700 sm:px-10">
										<div className="text-center sm:flex sm:text-left">
											<div className="w-full sm:w-1/6">
												<div className="flex items-center justify-center sm:mx-0 from-dark-800 to-dark-900">
													<Icon
														name={service.icon}
														className="w-6 h-6 text-primaryText"
													/>
												</div>
											</div>
											<div className="w-full mt-3 sm:mt-0">
												<h5 className="text-lg font-semibold text-gray-900 ">
													{service.label}
												</h5>
												<p className="mt-1 text-base text-gray-600">
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
									src={codePic}
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
