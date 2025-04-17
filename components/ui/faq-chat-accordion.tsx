'use client'

import { cn } from '@/lib/utils'
import * as Accordion from '@radix-ui/react-accordion'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import * as React from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
  icon?: string
  iconPosition?: 'left' | 'right'
}

interface FaqAccordionProps {
  data: FAQItem[]
  className?: string
  timestamp?: string
  questionClassName?: string
  answerClassName?: string
}

export function FaqAccordion({
  data,
  className,
  timestamp = 'Every day, 9:01 AM',
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)

  return (
    <div className={cn('p-4', className)}>
      {timestamp && (
        <div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          {timestamp}
        </div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ''}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-2"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4">
                <div
                  className={cn(
                    'relative flex items-center space-x-2 rounded-xl p-2 transition-colors',
                    openItem === item.id.toString()
                      ? 'bg-neutral-900/20 text-neutral-900 dark:bg-neutral-50/20 dark:text-neutral-50'
                      : 'bg-neutral-100 hover:bg-neutral-900/10 dark:bg-neutral-800 dark:hover:bg-neutral-50/10',
                    questionClassName
                  )}
                >
                  {item.icon && (
                    <span
                      className={cn(
                        'absolute bottom-6',
                        item.iconPosition === 'right' ? 'right-0' : 'left-0'
                      )}
                      style={{
                        transform:
                          item.iconPosition === 'right'
                            ? 'rotate(7deg)'
                            : 'rotate(-4deg)',
                      }}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span className="font-medium">{item.question}</span>
                </div>

                <span
                  className={cn(
                    'text-neutral-500 dark:text-neutral-400',
                    openItem === item.id.toString() &&
                      'text-neutral-900 dark:text-neutral-50'
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <MinusIcon className="h-5 w-5" />
                  ) : (
                    <PlusIcon className="h-5 w-5" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? 'open' : 'collapsed'}
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="flex justify-end mt-1">
                  <div
                    className={cn(
                      'relative max-w-xs rounded-2xl bg-neutral-900 px-4 py-2 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900',
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}
