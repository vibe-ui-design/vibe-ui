'use client'

import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Filter, Search } from 'lucide-react'
import { useState } from 'react'
import {
  groupRegistryItemsByCategory,
  groupRegistryItemsByFramework,
} from '~/app/build/[projectId]/registry-utils'
import { ComponentCard } from '~/components/component-card'
import { componentCategories } from '~/lib/component-data'
import type { Registry, RegistryItemType } from '../actions'
import { useComponentStore } from '../store'

interface ComponentSelectionProps {
  registry: Registry
}

export function ComponentSelection({ registry }: ComponentSelectionProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeFramework, setActiveFramework] = useState(
    registry.frameworks[0] || 'all',
  )
  const [activeItemType, setActiveItemType] =
    useState<RegistryItemType>('component')

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
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFramework =
      activeFramework === 'all' || component.framework === activeFramework

    return matchesSearch && matchesFramework
  })

  return (
    <div>
      <div className="flex-1">
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder={`Search ${activeItemType}s...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
            />
          </div>
          <Button
            variant="outline"
            className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
          >
            <Filter className="mr-2 size-4" />
            Filters
          </Button>
        </div>

        <Tabs
          defaultValue="component"
          className="mb-4"
          onValueChange={(value) =>
            setActiveItemType(value as RegistryItemType)
          }
        >
          <TabsList className="bg-neutral-900 border border-neutral-800">
            <TabsTrigger value="component">Components</TabsTrigger>
            <TabsTrigger value="template">Templates</TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs
          defaultValue={registry.frameworks[0]}
          className="mb-4"
          onValueChange={setActiveFramework}
        >
          <TabsList className="bg-neutral-900 border border-neutral-800">
            <TabsTrigger value="all">All Frameworks</TabsTrigger>
            {registry.frameworks.map((framework) => (
              <TabsTrigger key={framework} value={framework}>
                {framework}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

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
              id: component.name,
              name: component.title,
              description: component.description,
              category: component.categories?.[0] || 'uncategorized',
              framework: component.framework,
              preview: `/placeholder.svg?height=200&width=300&text=${component.name}`,
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
                setSearchQuery('')
                setActiveCategory('all')
                setActiveFramework('all')
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
