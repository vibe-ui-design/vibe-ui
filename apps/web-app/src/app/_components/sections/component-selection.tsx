'use client'

import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Filter, Search } from 'lucide-react'
import { useState } from 'react'
import { useComponentStore } from '~/app/build/[projectId]/store'
import { ComponentCard } from '~/components/component-card'
import { allComponents, componentCategories } from '~/lib/component-data'

export function ComponentSelection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const selectedComponents = useComponentStore(
    (state) => state.selectedComponents,
  )
  const toggleComponent = useComponentStore((state) => state.toggleComponent)
  const clearSelection = useComponentStore((state) => state.clearSelection)

  const filteredComponents = allComponents.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      activeCategory === 'all' || component.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <div className="flex-1">
        <div className="mb-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder="Search components..."
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
          {filteredComponents.map((component) => (
            <ComponentCard
              key={component.id}
              component={component}
              isSelected={selectedComponents.some((c) => c.id === component.id)}
              onToggle={() => toggleComponent(component)}
            />
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12 border border-neutral-800 rounded-lg">
            <p className="text-neutral-400 mb-4">
              No components found matching your search.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('')
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
