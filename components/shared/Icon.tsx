import {
	CodeBracketIcon,
	PencilIcon,
	WrenchIcon,
} from "@heroicons/react/24/outline"
import {
	IconArtboard,
	IconBrandBootstrap,
	IconBrandCss3,
	IconBrandFigma,
	IconBrandFirebase,
	IconBrandGatsby,
	IconBrandHtml5,
	IconBrandNextjs,
	IconBrandReact,
	IconBrandSketch,
	IconBrandSpeedtest,
	IconBrandSupabase,
	IconBrandTailwind,
	IconBrandTrello,
	IconBrandTypescript,
	IconWand,
} from "@tabler/icons-react"

const iconOptions: {
	[key: string]: React.ElementType
} = {
	code: CodeBracketIcon,
	design: PencilIcon,
	tool: WrenchIcon,
	HTML: IconBrandHtml5,
	TailwindCSS: IconBrandTailwind,
	Figma: IconBrandFigma,
	CSS: IconBrandCss3,
	Gatsby: IconBrandGatsby,
	Bootstrap: IconBrandBootstrap,
	Sketch: IconBrandSketch,
	Trello: IconBrandTrello,
	NextJS: IconBrandNextjs,
	React: IconBrandReact,
	Firebase: IconBrandFirebase,
	Supabase: IconBrandSupabase,
	Typescript: IconBrandTypescript,
	speed: IconBrandSpeedtest,
	creativity: IconWand,
	pixel: IconArtboard,
}

export const Icon = ({
	name,
	className = "",
}: {
	name: string
	className?: string
}) => {
	const iconName = (
		name in iconOptions ? name : Object.keys(iconOptions)[0]
	) as keyof typeof iconOptions
	const IconSVG = iconOptions[iconName]

	return (
		<IconSVG
			className={`${className}`}
			strokeWidth={1.5}
		/>
	)
}
