import {
	CodeBracketIcon,
	PencilIcon,
	WrenchIcon,
} from "@heroicons/react/24/outline"
import {
	IconApi,
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
	IconCalendarMonth,
	IconChartDotsFilled,
	IconCodeCircle2,
	IconCreditCard,
	IconFiles,
	IconListSearch,
	IconMail,
	IconObjectScan,
	IconPackageExport,
	IconPlaneTilt,
	IconRotateClockwise2,
	IconUsers,
	IconUsersGroup,
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
	calendarMonth: IconCalendarMonth,
	mail: IconMail,
	stats: IconChartDotsFilled,
	users: IconUsers,
	creditcard: IconCreditCard,
	delivery: IconPackageExport,
	social: IconUsersGroup,
	search: IconListSearch,
	files: IconFiles,
	plane: IconPlaneTilt,
	"API Platform": IconApi,
	research: IconObjectScan,
	dev: IconCodeCircle2,
	rotateArrow: IconRotateClockwise2,
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
