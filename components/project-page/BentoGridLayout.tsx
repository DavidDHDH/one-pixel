import React from 'react'

type BentoGridLayoutProps = {
  items: React.ReactNode[] // 7 items attendus
}

const BentoGridLayout: React.FC<BentoGridLayoutProps> = ({ items }) => (
  <div className="w-full max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2 gap-4">
    {/* Ligne du haut : 1 case à gauche, 1 grande case fusionnée à droite */}
    <div className="bg-gray-50 rounded-2xl h-[500px] overflow-hidden">
      {items[0]}
    </div>
    <div className="bg-gray-50 rounded-2xl h-[500px] overflow-hidden md:col-span-2">
      {items[1]}
    </div>

    {/* Ligne du bas */}
    {/* Case de gauche */}
    <div className="bg-gray-50 rounded-2xl h-[500px] md:row-start-2 md:col-start-1">
      {items[2]}
    </div>
    {/* Case du milieu : mini-grid */}
    <div className="md:row-start-2 md:col-start-2 flex flex-col h-[500px] gap-4 overflow-hidden">
      {/* Mini-grid verticale */}
      <div className="bg-gray-50 rounded-2xl flex-1 h-[80px] overflow-hidden">
        {items[3]}
      </div>
      <div className="flex gap-4 flex-1 h-[80px] overflow-hidden">
        <div className="bg-gray-50 rounded-2xl w-1/2 h-full overflow-hidden">
          {items[4]}
        </div>
        <div className="bg-gray-50 rounded-2xl w-1/2 h-full overflow-hidden">
          {items[5]}
        </div>
      </div>
    </div>
    {/* Case de droite */}
    <div className="bg-gray-50 rounded-2xl h-[500px] md:row-start-2 md:col-start-3 overflow-hidden">
      {items[6]}
    </div>
  </div>
)

export { BentoGridLayout }
