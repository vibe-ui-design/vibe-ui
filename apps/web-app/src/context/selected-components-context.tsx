'use client'

import { createContext, useContext } from 'react'
import type { RegistryItem } from 'shadcn/registry'

interface SelectedRegistryItemsContextType {
  selectedRegistryItems: RegistryItem[]
  toggleRegistryItem: (registryItem: RegistryItem) => void
  clearSelection: () => void
}

export const SelectedRegistryItemsContext =
  createContext<SelectedRegistryItemsContextType>({
    selectedRegistryItems: [],
    toggleRegistryItem: () => {},
    clearSelection: () => {},
  })

export const useSelectedRegistryItems = () =>
  useContext(SelectedRegistryItemsContext)
