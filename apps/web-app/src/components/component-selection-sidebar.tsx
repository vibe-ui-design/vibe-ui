'use client'

import { Button } from '@acme/ui/button'
import { ScrollArea } from '@acme/ui/scroll-area'
import { Download, Trash2, X } from 'lucide-react'
import type { ComponentData } from '~/lib/component-data'

interface ComponentSelectionSidebarProps {
  selectedComponents: ComponentData[]
  onRemove: (component: ComponentData) => void
  onClear: () => void
  onExport: () => void
}

export function ComponentSelectionSidebar({
  selectedComponents,
  onRemove,
  onClear,
  onExport,
}: ComponentSelectionSidebarProps) {
  return (
    <div className="w-80 shrink-0 border-l border-neutral-800 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Selected Components</h2>
        <span className="text-sm text-neutral-400">
          {selectedComponents.length} selected
        </span>
      </div>

      {selectedComponents.length > 0 ? (
        <>
          <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="space-y-2 pr-3">
              {selectedComponents.map((component) => (
                <div
                  key={component.id}
                  className="flex items-center justify-between rounded-md border border-neutral-800 bg-neutral-900 p-2"
                >
                  <div>
                    <p className="font-medium">{component.name}</p>
                    <p className="text-xs text-neutral-400">
                      {component.category}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemove(component)}
                    className="h-7 w-7 text-neutral-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove {component.name}</span>
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-4 space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClear}
              className="w-full border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Selection
            </Button>
            <Button
              size="sm"
              onClick={onExport}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Selection
            </Button>
          </div>
        </>
      ) : (
        <div className="flex h-[calc(100vh-300px)] flex-col items-center justify-center text-center">
          <p className="text-neutral-400 mb-2">No components selected</p>
          <p className="text-xs text-neutral-500">
            Select components from the library to add them to your selection.
          </p>
        </div>
      )}
    </div>
  )
}
