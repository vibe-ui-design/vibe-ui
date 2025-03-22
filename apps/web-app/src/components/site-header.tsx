'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@acme/ui/button'
import { cn } from '@acme/ui/lib/utils'

interface SiteHeaderProps {
  className?: string
}

export function SiteHeader({ className }: SiteHeaderProps) {
  const { setTheme } = useTheme()
  const isSignedIn = false // Temporary fallback while Clerk is commented out

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-neutral-800 bg-black',
        className,
      )}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">VibeUI</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/components"
              className="flex items-center text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              Components & AI Prompts
            </Link>
            <Link
              href="/templates"
              className="flex items-center text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              Templates
            </Link>
            <Link
              href="/api/docs"
              className="flex items-center text-sm font-medium text-neutral-400 transition-colors hover:text-white"
            >
              API
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="default">
              <Link href="https://github.com/yourusername/vibeui">GitHub</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
