import Image from 'next/image'
import { cn } from '~/lib/utils'

interface BrowserFrameProps {
  url: string
  image: string
  className?: string
  accentColor?: string
}

export function BrowserFrame({
  url,
  image,
  className,
  accentColor,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900',
        className,
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-neutral-800 bg-neutral-950 px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-neutral-700" />
          <div className="h-3 w-3 rounded-full bg-neutral-700" />
          <div className="h-3 w-3 rounded-full bg-neutral-700" />
        </div>
        <div className="ml-2 flex-1">
          <div className="flex h-6 w-full items-center rounded-md bg-neutral-800 px-2 text-xs text-neutral-400">
            {url}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative aspect-[16/10] w-full"
        style={accentColor ? { backgroundColor: accentColor } : undefined}
      >
        <Image
          src={image || '/placeholder.svg'}
          alt={url}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
