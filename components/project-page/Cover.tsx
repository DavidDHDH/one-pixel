import Image from 'next/image'

export const Cover = ({ image }: { image: string }) => {
  return (
    <div className="relative h-[700px] w-full">
      <Image src={image} alt="Cover" fill className="object-cover" />
    </div>
  )
}
