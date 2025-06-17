import {
  CodeBracketIcon,
  PencilIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline'
import {
  IconApi,
  IconArtboard,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandFirebase,
  IconBrandGatsby,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSketch,
  IconBrandSpeedtest,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTrello,
  IconBrandTypescript,
  IconBrandWhatsapp,
  IconBuildingStore,
  IconCalendarMonth,
  IconChartDotsFilled,
  IconCodeCircle2,
  IconCoffee,
  IconCreditCard,
  IconFiles,
  IconLayoutDashboard,
  IconListSearch,
  IconMail,
  IconObjectScan,
  IconPackageExport,
  IconPlaneTilt,
  IconRobot,
  IconRotateClockwise2,
  IconUsers,
  IconUsersGroup,
  IconWand,
} from '@tabler/icons-react'

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
  LinkedIn: IconBrandLinkedin,
  Github: IconBrandGithub,
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
  'API Platform': IconApi,
  research: IconObjectScan,
  dev: IconCodeCircle2,
  rotateArrow: IconRotateClockwise2,
  Instagram: IconBrandInstagram,
  whatsapp: IconBrandWhatsapp,
  dashboard: IconLayoutDashboard,
  showroom: IconBuildingStore,
  application: IconPlaneTilt,
  ia: IconRobot,
  coffee: IconCoffee,
}

export const Icon = ({
  name,
  className = '',
}: {
  name: string
  className?: string
}) => {
  const iconName = (
    name in iconOptions ? name : Object.keys(iconOptions)[0]
  ) as keyof typeof iconOptions
  const IconSVG = iconOptions[iconName]

  return <IconSVG className={`${className}`} strokeWidth={1.5} />
}
