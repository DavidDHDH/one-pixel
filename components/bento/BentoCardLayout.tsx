import React from 'react'

interface BentoCardLayoutProps {
  icon: React.ReactNode
  children: React.ReactNode
}

export const BentoCardLayout: React.FC<BentoCardLayoutProps> = ({
  icon,
  children,
}) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between p-4 gap-2">
      <div className="flex items-center justify-center h-1/5 max-h-20">
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-center w-full">
        {children}
      </div>
    </div>
  )
}
