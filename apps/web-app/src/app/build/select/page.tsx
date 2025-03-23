'use client'

import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Download, Filter, Search } from 'lucide-react'
import { useState } from 'react'
import { ComponentCard } from '~/components/component-card'
import { ComponentSelectionSidebar } from '~/components/component-selection-sidebar'
import { ExportModal } from '~/components/export-modal'
import { SelectedComponentsContext } from '~/context/selected-components-context'
import { useComponentSelection } from '~/hooks/use-component-selection'
import { allComponents, componentCategories } from '~/lib/component-data'

export default function ComponentSelectionPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showSidebar, setShowSidebar] = useState(true)
  const [showExportModal, setShowExportModal] = useState(false)
  const {
    selectedComponents,
    toggleComponent,
    clearSelection,
    exportSelection,
  } = useComponentSelection()

  const filteredComponents = allComponents.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      activeCategory === 'all' || component.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const handleExport = () => {
    if (selectedComponents.length > 0) {
      setShowExportModal(true)
    }
  }

  return (
    <SelectedComponentsContext.Provider
      value={{ selectedComponents, toggleComponent, clearSelection }}
    >
      <div>
        <div className="container py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Component Selection</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {showSidebar ? 'Hide Selection' : 'Show Selection'}
              </Button>
              <Button
                variant="outline"
                className="border-neutral-800 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                onClick={clearSelection}
              >
                Clear Selection
              </Button>
              <Button
                onClick={handleExport}
                className="bg-primary hover:bg-primary/90"
                disabled={selectedComponents.length === 0}
              >
                <Download className="mr-2 h-4 w-4" />
                Export Selection
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1">
              <div className="mb-6 flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
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
                  <Filter className="mr-2 h-4 w-4" />
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
                    isSelected={selectedComponents.some(
                      (c) => c.id === component.id,
                    )}
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

            {showSidebar && (
              <ComponentSelectionSidebar
                selectedComponents={selectedComponents}
                onRemove={toggleComponent}
                onClear={clearSelection}
                onExport={handleExport}
              />
            )}
          </div>
        </div>

        <ExportModal
          isOpen={showExportModal}
          onClose={() => setShowExportModal(false)}
          selectedComponents={selectedComponents}
        />
      </div>
    </SelectedComponentsContext.Provider>
  )
}
