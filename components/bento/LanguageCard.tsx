import multiLanguage from '@/assets/icons/multilanguage-icon.webp'
import Image from 'next/image'
import { BentoCardLayout } from './BentoCardLayout'

export const LanguageCard = () => {
  return (
    <BentoCardLayout
      icon={
        <Image
          src={multiLanguage}
          alt="Multilingue icon"
          className="h-16 w-16"
        />
      }
    >
      <p className="text-5xl md:text-xl lg:text-3xl xl:text-4xl">🇫🇷 🇬🇧</p>
    </BentoCardLayout>
  )
}
