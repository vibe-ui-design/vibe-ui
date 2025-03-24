'use client'
import { Button } from '@acme/ui/button'
import { ScrollArea } from '@acme/ui/scroll-area'
import { X } from 'lucide-react'
import { useSelectedRegistryItems } from '~/context/selected-components-context'

export function SelectedComponentsList() {
  const { selectedRegistryItems, toggleRegistryItem } =
    useSelectedRegistryItems()

  if (selectedRegistryItems.length === 0) {
    return (
      <div className="text-center py-8 border border-neutral-800 rounded-lg">
        <p className="text-neutral-400 mb-2">No components selected</p>
        <p className="text-sm text-neutral-500">
          Select components to include in your prompt
        </p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-3">
        {selectedRegistryItems.map((component) => (
          <div
            key={component.name}
            className="flex items-center justify-between p-3 rounded-md bg-neutral-800 border border-neutral-700"
          >
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium text-white">{component.name}</p>
                {/* {component.isPro && (
                  <Badge className="bg-primary text-white hover:bg-primary/90 text-xs">
                    Pro
                  </Badge>
                )} */}
              </div>
              <p className="text-xs text-neutral-400">
                {component.categories?.[0]}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-neutral-400 hover:text-white hover:bg-neutral-700"
              onClick={() => toggleRegistryItem(component)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
