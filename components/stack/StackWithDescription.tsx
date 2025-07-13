import { StaticImageData } from 'next/image'
import { Icon } from '../shared/Icon'

export interface StackItem {
  name: string
  description: string
  icon: StaticImageData | string
}

interface StackWithDescriptionProps {
  stackItems: StackItem[]
}

export default function StackWithDescription({
  stackItems,
}: StackWithDescriptionProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
          {stackItems.map((item, index) => {
            return (
              <div
                key={index}
                className="relative p-6 sm:p-10 bg-gray-400/5 flex flex-col items-center text-center"
              >
                <Icon
                  name={item.name}
                  className="h-14 w-14 object-contain mb-4"
                />
                <h3 className="text-sm font-medium   mb-2">{item.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
