'use client'

import { Badge } from '@acme/ui/badge'
import { Button } from '@acme/ui/button'
import { cn } from '@acme/ui/lib/utils'
import { Check } from 'lucide-react'
// Import the ComponentPreviewModal
import { useState } from 'react'
import { ComponentPreviewModal } from '~/components/component-preview-modal'
import type { ComponentData } from '~/lib/component-data'

interface ComponentCardProps {
  component: ComponentData
  isSelected: boolean
  onToggle: () => void
}

export function ComponentCard({
  component,
  isSelected,
  onToggle,
}: ComponentCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <div
      className={cn(
        'rounded-lg border p-4 transition-all',
        isSelected
          ? 'border-primary bg-primary/10'
          : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700',
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-white">{component.name}</h3>
          <p className="text-sm text-neutral-400">{component.description}</p>
        </div>
        <Button
          variant={isSelected ? 'default' : 'outline'}
          size="sm"
          className={cn(
            'h-8 w-8 p-0',
            isSelected
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-white',
          )}
          onClick={onToggle}
        >
          {isSelected && <Check className="h-4 w-4" />}
        </Button>
      </div>

      <div
        className="aspect-video w-full bg-black rounded-md overflow-hidden mb-4 flex items-center justify-center cursor-pointer"
        onClick={() => setPreviewOpen(true)}
      >
        {component.preview ? (
          <img
            src={component.preview || '/placeholder.svg'}
            alt={component.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-neutral-600 text-sm">Preview not available</div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          >
            {component.category}
          </Badge>
          {component.isPro && (
            <Badge className="bg-primary text-white hover:bg-primary/90">
              Pro
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-neutral-400 hover:text-white hover:bg-neutral-800"
          onClick={() => setPreviewOpen(true)}
        >
          Preview
        </Button>
      </div>

      <ComponentPreviewModal
        component={component}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </div>
  )
}
