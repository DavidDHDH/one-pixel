import { PartnersCarousel } from "./PartnersCarousel"

export default function Partners() {
	return (
		<section
			id="partners"
			className="bg-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-primaryText">
					Ils me font confiance.
				</h2>
				{/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
					<Image
						alt="Transistor"
						src={okleira}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={delifood}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={fwi}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={villacare}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={rway}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={seabarts}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={tile}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
					<Image
						alt="Transistor"
						src={stafflink}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>{" "}
					<Image
						alt="Transistor"
						src={discover}
						width={158}
						height={100}
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
					/>
				</div> */}
				<PartnersCarousel />
			</div>
		</section>
	)
}
