import darkModeIcon from '@/assets/icons/darkmode.webp'
import Image from 'next/image'
import { BentoCardLayout } from './BentoCardLayout'

export const DarkModeCard = ({ illustration }: { illustration: string }) => {
  return (
    <BentoCardLayout
      icon={
        <Image src={darkModeIcon} alt="Dark mode icon" className="h-16 w-16" />
      }
    >
      <Image
        src={illustration}
        alt="Dark mode illustration"
        width={180}
        height={180}
        className="object-contain max-h-full max-w-full"
      />
    </BentoCardLayout>
  )
}
