'use client'

import { createContext, useContext } from 'react'
import type { ComponentData } from '~/lib/component-data'

interface SelectedComponentsContextType {
  selectedComponents: ComponentData[]
  toggleComponent: (component: ComponentData) => void
  clearSelection: () => void
}

export const SelectedComponentsContext =
  createContext<SelectedComponentsContextType>({
    selectedComponents: [],
    toggleComponent: () => {},
    clearSelection: () => {},
  })

export const useSelectedComponents = () => useContext(SelectedComponentsContext)
