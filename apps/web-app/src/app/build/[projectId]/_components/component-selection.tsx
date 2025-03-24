'use client'

import { Button } from '@acme/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { useState } from 'react'
import {
  groupRegistryItemsByCategory,
  groupRegistryItemsByFramework,
} from '~/app/build/[projectId]/registry-utils'
import { ComponentCard } from '~/components/component-card'
import { componentCategories } from '~/lib/component-data'
import type { Registry } from '../actions'
import { useComponentStore } from '../store'

interface ComponentSelectionProps {
  registry: Registry
}

export function ComponentSelection({ registry }: ComponentSelectionProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const activeItemType = useComponentStore(
    (state) => state.theme.activeItemType,
  )
  const searchQuery = useComponentStore((state) => state.theme.searchQuery)
  const activeFramework = useComponentStore(
    (state) => state.theme.activeFramework,
  )

  const selectedComponents = useComponentStore(
    (state) => state.selectedComponents,
  )
  const toggleComponent = useComponentStore((state) => state.toggleComponent)
  const clearSelection = useComponentStore((state) => state.clearSelection)

  const itemsByType = registry.items.filter(
    (item) => item.itemType === activeItemType,
  )
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
      activeFramework === 'all' || component.framework === activeFramework

    return matchesSearch && matchesFramework
  })

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
            {componentCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => {
            const componentData = {
              id: component.name ?? '',
              name: component.title ?? component.name ?? 'Untitled Component',
              description: component.description ?? 'No description available',
              category: component.categories?.[0] || 'uncategorized',
              framework: component.framework,
              preview: `/placeholder.svg?height=200&width=300&text=${component.name ?? 'component'}`,
              itemType: component.itemType,
            }

            return (
              <ComponentCard
                key={`${component.framework}-${component.name}`}
                component={componentData}
                isSelected={selectedComponents.some(
                  (c) =>
                    c.id === component.name &&
                    (activeFramework === 'all' ||
                      c.framework === component.framework),
                )}
                onToggle={() => toggleComponent(componentData)}
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
