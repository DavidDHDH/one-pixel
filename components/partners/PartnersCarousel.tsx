import Marquee from "@/components/ui/marquee"
import Image, { StaticImageData } from "next/image"
import okleira from "@/public/partners/okleira.webp"
import delifood from "@/public/partners/delifood.webp"
import fwi from "@/public/partners/fwi.webp"
import rway from "@/public/partners/rway.webp"
import villacare from "@/public/partners/villacare.webp"
import discover from "@/public/partners/discover.webp"
import seabarts from "@/public/partners/seabarts.webp"
import stafflink from "@/public/partners/stafflink.webp"
import tile from "@/public/partners/tile.webp"

const partners = [
	{
		name: "Delifood",
		image: delifood,
	},
	{
		name: "FWI",
		image: fwi,
	},
	{
		name: "Rway",
		image: rway,
	},
	{
		name: "Okleira",
		image: okleira,
	},
	{
		name: "Villacare",
		image: villacare,
	},
	{
		name: "Seabarts",
		image: seabarts,
	},
	{
		name: "Tile",
		image: tile,
	},
	{
		name: "Stafflink",
		image: stafflink,
	},
	{
		name: "Discover",
		image: discover,
	},
]

const firstRow = partners.slice(0, partners.length / 2)
const secondRow = partners.slice(partners.length / 2)

const PartnerCard = ({
	name,
	image,
}: {
	name: string
	image: StaticImageData
}) => {
	return (
		<Image
			alt={name}
			src={image}
			width={158}
			height={100}
			className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
		/>
	)
}

export function PartnersCarousel() {
	return (
		<div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
			<Marquee
				pauseOnHover
				className="[--duration:30s]">
				{firstRow.map((partner) => (
					<PartnerCard
						key={partner.name}
						{...partner}
					/>
				))}
			</Marquee>
			<Marquee
				reverse
				pauseOnHover
				className="[--duration:30s]">
				{secondRow.map((partner) => (
					<PartnerCard
						key={partner.name}
						{...partner}
					/>
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	)
}
