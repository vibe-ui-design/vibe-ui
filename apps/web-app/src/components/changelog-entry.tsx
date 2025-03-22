import type React from 'react'
import { cn } from '~/lib/utils'

interface ChangelogEntryProps {
  version: string
  date: string
  title: string
  children: React.ReactNode
  isHighlighted?: boolean
}

export function ChangelogEntry({
  version,
  date,
  title,
  children,
  isHighlighted = false,
}: ChangelogEntryProps) {
  return (
    <div
      className={cn(
        'relative pl-8 border-l border-neutral-800',
        isHighlighted && 'border-l-2 border-l-primary',
      )}
    >
      {/* Version marker */}
      <div
        className={cn(
          'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-white',
          isHighlighted && 'bg-primary',
        )}
      >
        <span className="sr-only">Version</span>
      </div>

      {/* Version header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold">v{version}</h2>
          <div className="text-sm text-neutral-400">{date}</div>
        </div>
        <h3 className="text-xl font-medium text-neutral-200">{title}</h3>
      </div>

      {/* Content */}
      <div className="mb-8">{children}</div>
    </div>
  )
}
