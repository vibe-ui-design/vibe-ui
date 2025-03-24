'use client'

import { Button } from '@acme/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { useState } from 'react'
import type { Registry, RegistryItem } from 'shadcn/registry'
import { ComponentCard } from '~/components/component-card'
import { useSelectionStore } from '../store'

interface ComponentSelectionProps {
  registries: Registry[]
}

function groupRegistryItemsByFramework(
  items: RegistryItem[],
): Record<string, RegistryItem[]> {
  return items.reduce(
    (acc, item) => {
      const framework = item.name
      if (!acc[framework]) {
        acc[framework] = []
      }
      acc[framework].push(item)
      return acc
    },
    {} as Record<string, RegistryItem[]>,
  )
}

function groupRegistryItemsByCategory(
  items: RegistryItem[],
): Record<string, RegistryItem[]> {
  return items.reduce(
    (acc, item) => {
      const categories = item.categories || ['uncategorized']
      for (const category of categories) {
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(item)
      }
      return acc
    },
    {} as Record<string, RegistryItem[]>,
  )
}

export function ComponentSelection({ registries }: ComponentSelectionProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const activeItemType = useSelectionStore(
    (state) => state.theme.activeItemType,
  )
  const searchQuery = useSelectionStore((state) => state.theme.searchQuery)
  const activeFramework = useSelectionStore(
    (state) => state.theme.activeFramework,
  )

  const selectedComponents = useSelectionStore(
    (state) => state.selectedRegistryItems,
  )
  const toggleComponent = useSelectionStore((state) => state.toggleRegistryItem)

  // Combine all items from all registries
  const allItems = registries.flatMap((registry) => registry.items)

  // Filter items by type
  const itemsByType = allItems.filter((item) => item.type === activeItemType)

  const componentsByFramework = groupRegistryItemsByFramework(itemsByType)
  const componentsByCategory = groupRegistryItemsByCategory(
    activeFramework === 'all'
      ? itemsByType
      : componentsByFramework[activeFramework] || [],
  )

  const filteredComponents = (
    activeCategory === 'all'
      ? itemsByType
      : componentsByCategory[activeCategory] || []
  ).filter((component) => {
    const searchLowerCase = searchQuery?.toLowerCase() ?? ''
    const matchesSearch =
      (component.name?.toLowerCase() ?? '').includes(searchLowerCase) ||
      (component.description?.toLowerCase() ?? '').includes(searchLowerCase)
    const matchesFramework =
      activeFramework === 'all' || component.name === activeFramework

    return matchesSearch && matchesFramework
  })

  const categories = Object.entries(componentsByCategory)
    .filter(([id]) => id !== 'undefined')
    .map(([id, items]) => ({
      id,
      name: id.charAt(0).toUpperCase() + id.slice(1),
      count: items.length,
    }))

  return (
    <div>
      <div className="flex-1">
        <Tabs
          defaultValue="all"
          className="mb-8"
          onValueChange={setActiveCategory}
        >
          <TabsList className="bg-neutral-900 border border-neutral-800">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => {
            return (
              <ComponentCard
                key={`${component.name}-${component.type}`}
                component={component}
                isSelected={selectedComponents.some(
                  (c) =>
                    c.name === component.name &&
                    (activeFramework === 'all' || c.name === component.name),
                )}
                onToggle={() => toggleComponent(component)}
              />
            )
          })}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12 border border-neutral-800 rounded-lg">
            <p className="text-neutral-400 mb-4">
              No {activeItemType}s found matching your search.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setActiveCategory('all')
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
