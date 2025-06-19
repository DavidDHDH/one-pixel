'use client'

import { CONTACT_EMAIL } from '@/lib/const'
import { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'

interface CTAButtonsProps {
  primaryText: string
  secondaryText?: string
  secondaryHref?: string
  emailSubject: string
  variant?: 'default' | 'dark'
}

export default function CTAButtons({
  primaryText,
  secondaryText,
  secondaryHref,
  emailSubject,
  variant = 'default',
}: CTAButtonsProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setRootElement(document.getElementById('calendly'))
  }, [])

  const primaryButtonClass =
    variant === 'dark'
      ? 'rounded-md bg-white px-6 py-3 text-sm font-semibold text-sand-700 shadow hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all'
      : 'rounded-md bg-sand-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-sand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all'

  const secondaryButtonClass =
    variant === 'dark'
      ? 'rounded-md border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white shadow hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all'
      : 'rounded-md border border-sand-700 bg-white px-6 py-3 text-sm font-semibold text-sand-700 shadow hover:bg-sand-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-400 transition-all'

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {rootElement ? (
        <PopupButton
          url="https://calendly.com/david-heimfert/30min"
          rootElement={rootElement}
          text={primaryText}
          className={primaryButtonClass}
        />
      ) : (
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            emailSubject
          )}`}
          className={primaryButtonClass}
        >
          {primaryText}
        </a>
      )}

      {secondaryText && secondaryHref && (
        <a href={secondaryHref} className={secondaryButtonClass}>
          {secondaryText}
        </a>
      )}
    </div>
  )
}
