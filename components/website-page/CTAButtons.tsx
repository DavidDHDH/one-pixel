'use client'

import { Icon } from '@/components/shared/Icon'
import { useState } from 'react'

interface CTAButtonsProps {
  primaryText: string
  primaryIcon?: string
  secondaryText?: string
  secondaryIcon?: string
  secondaryHref?: string
  variant?: 'default' | 'dark'
}

export default function CTAButtons({
  primaryText,
  primaryIcon,
  secondaryText,
  secondaryIcon,
  secondaryHref,
  variant = 'default',
}: CTAButtonsProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const primaryButtonClass =
    variant === 'dark'
      ? 'rounded-md bg-white px-6 py-3 text-sm font-semibold text-sand-700 shadow hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all inline-flex items-center gap-2'
      : 'rounded-md bg-sand-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all inline-flex items-center gap-2'

  const secondaryButtonClass =
    variant === 'dark'
      ? 'rounded-md border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white shadow hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all inline-flex items-center gap-2'
      : 'rounded-md border border-sand-700 bg-white px-6 py-3 text-sm font-semibold text-sand-700 shadow hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all inline-flex items-center gap-2'

  const CalendlyDialog = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg w-full mx-4">
        <div className="bg-sand-700 text-white p-4 flex justify-between items-center">
          <span className="font-medium">{primaryText}</span>
          <button
            onClick={() => setIsCalendlyOpen(false)}
            className="text-white hover:text-gray-200 text-xl font-bold"
          >
            ×
          </button>
        </div>
        <iframe
          src="https://calendly.com/david-heimfert/30min"
          width="100%"
          height="600"
          title="Calendly - David Heimfert"
          className="border-0"
        />
      </div>
    </div>
  )

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className={`${primaryButtonClass} w-full sm:w-auto justify-center`}
          onClick={() => setIsCalendlyOpen(true)}
        >
          {primaryIcon && <Icon name={primaryIcon} className="w-4 h-4" />}
          {primaryText}
        </button>

        {secondaryText && secondaryHref && (
          <a href={secondaryHref} className={`${secondaryButtonClass} w-full sm:w-auto justify-center`}>
            {secondaryIcon && <Icon name={secondaryIcon} className="w-4 h-4" />}
            {secondaryText}
          </a>
        )}
      </div>

      {/* Dialog Calendly */}
      {isCalendlyOpen && <CalendlyDialog />}
    </>
  )
}
