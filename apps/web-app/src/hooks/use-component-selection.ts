'use client'

import { useEffect, useState } from 'react'
import type { ComponentData } from '~/lib/component-data'

export function useComponentSelection() {
  const [selectedComponents, setSelectedComponents] = useState<ComponentData[]>(
    [],
  )

  // Load selected components from localStorage on initial render
  useEffect(() => {
    const savedComponents = localStorage.getItem('selectedComponents')
    if (savedComponents) {
      try {
        setSelectedComponents(JSON.parse(savedComponents))
      } catch (error) {
        console.error('Failed to parse saved components:', error)
        localStorage.removeItem('selectedComponents')
      }
    }
  }, [])

  // Save selected components to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      'selectedComponents',
      JSON.stringify(selectedComponents),
    )
  }, [selectedComponents])

  const toggleComponent = (component: ComponentData) => {
    setSelectedComponents((prev) => {
      const isSelected = prev.some((c) => c.id === component.id)
      if (isSelected) {
        return prev.filter((c) => c.id !== component.id)
      } else {
        return [...prev, component]
      }
    })
  }

  const clearSelection = () => {
    setSelectedComponents([])
  }

  const exportSelection = () => {
    // Create a JSON file with the selected components
    const dataStr = JSON.stringify(selectedComponents, null, 2)
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`

    // Create a download link and trigger it
    const exportFileDefaultName = `vibeui-components-${new Date().toISOString().slice(0, 10)}.json`
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  return {
    selectedComponents,
    toggleComponent,
    clearSelection,
    exportSelection,
  }
}
