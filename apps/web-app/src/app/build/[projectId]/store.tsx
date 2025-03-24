'use client'

import { type ReactNode, createContext, useContext, useRef } from 'react'
import type { RegistryItem, registryItemTypeSchema } from 'shadcn/registry'
import type { z } from 'zod'
import { createStore, useStore } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ColorTheme {
  id: string
  name: string
  primaryColor: string
  secondaryColor: string
}

export type ThemeMode = 'light' | 'dark' | 'both'
export type BorderRadius = '0' | '0.3' | '0.5' | '0.75' | '1'
export type ItemType = z.infer<typeof registryItemTypeSchema>

interface SelectionState {
  selectedRegistryItems: RegistryItem[]
  theme: {
    selectedTheme: ColorTheme
    selectedMode: ThemeMode
    borderRadius: BorderRadius
    customPrimaryColor: string
    customSecondaryColor: string
    isUsingCustomColors: boolean
    selectedIconLibrary: string
    activeItemType: ItemType
    searchQuery: string
    activeFramework: string
  }
}

interface ComponentActions {
  toggleRegistryItem: (registryItem: RegistryItem) => void
  clearSelection: () => void
  setTheme: (theme: ColorTheme) => void
  setThemeMode: (mode: ThemeMode) => void
  setBorderRadius: (radius: BorderRadius) => void
  setCustomColors: (primary: string, secondary: string) => void
  setIconLibrary: (libraryId: string) => void
  setActiveItemType: (type: ItemType) => void
  setSearchQuery: (query: string) => void
  setActiveRegistry: (registryName: string) => void
}

type SelectionStore = SelectionState & ComponentActions

const defaultTheme = {
  id: 'violet',
  name: 'Violet',
  primaryColor: '#8B5CF6',
  secondaryColor: '#C4B5FD',
}

export const defaultInitState: SelectionState = {
  selectedRegistryItems: [],
  theme: {
    selectedTheme: defaultTheme,
    selectedMode: 'dark',
    borderRadius: '0.5',
    customPrimaryColor: defaultTheme.primaryColor,
    customSecondaryColor: defaultTheme.secondaryColor,
    isUsingCustomColors: false,
    selectedIconLibrary: 'lucide',
    activeItemType: 'registry:component',
    searchQuery: '',
    activeFramework: 'all',
  },
}

export const createSelectionStore = (
  initState: SelectionState = defaultInitState,
) => {
  return createStore<SelectionStore>()(
    persist(
      (set) => ({
        ...initState,
        selectedRegistryItems: initState.selectedRegistryItems,
        theme: initState.theme,
        toggleRegistryItem: (component) =>
          set((state) => ({
            selectedRegistryItems: state.selectedRegistryItems.some(
              (c) => c.name === component.name,
            )
              ? state.selectedRegistryItems.filter(
                  (c) => c.name !== component.name,
                )
              : [...state.selectedRegistryItems, component],
          })),
        clearSelection: () => set({ selectedRegistryItems: [] }),
        setTheme: (theme) =>
          set((state) => ({
            theme: {
              ...state.theme,
              selectedTheme: theme,
              customPrimaryColor: theme.primaryColor,
              customSecondaryColor: theme.secondaryColor,
              isUsingCustomColors: false,
            },
          })),
        setThemeMode: (mode) =>
          set((state) => ({
            theme: {
              ...state.theme,
              selectedMode: mode,
            },
          })),
        setBorderRadius: (radius) =>
          set((state) => ({
            theme: {
              ...state.theme,
              borderRadius: radius,
            },
          })),
        setCustomColors: (primary, secondary) =>
          set((state) => ({
            theme: {
              ...state.theme,
              customPrimaryColor: primary,
              customSecondaryColor: secondary,
              isUsingCustomColors: true,
            },
          })),
        setIconLibrary: (libraryId) =>
          set((state) => ({
            theme: {
              ...state.theme,
              selectedIconLibrary: libraryId,
            },
          })),
        setActiveItemType: (type) =>
          set((state) => ({
            theme: {
              ...state.theme,
              activeItemType: type,
            },
          })),
        setSearchQuery: (query) =>
          set((state) => ({
            theme: {
              ...state.theme,
              searchQuery: query,
            },
          })),
        setActiveRegistry: (framework) =>
          set((state) => ({
            theme: {
              ...state.theme,
              activeFramework: framework,
            },
          })),
      }),
      {
        name: 'vibe-ui-storage',
        partialize: (state) => ({
          selectedComponents: state.selectedRegistryItems,
          theme: state.theme,
        }),
      },
    ),
  )
}

export type SelectionStoreApi = ReturnType<typeof createSelectionStore>

const SelectionStoreContext = createContext<SelectionStoreApi | undefined>(
  undefined,
)

export interface SelectionStoreProviderProps {
  children: ReactNode
}

export function SelectionStoreProvider({
  children,
}: SelectionStoreProviderProps) {
  const storeRef = useRef<SelectionStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createSelectionStore()
  }

  return (
    <SelectionStoreContext.Provider value={storeRef.current}>
      {children}
    </SelectionStoreContext.Provider>
  )
}

export const useSelectionStore = <T,>(
  selector: (store: SelectionStore) => T,
): T => {
  const selectionStoreContext = useContext(SelectionStoreContext)

  if (!selectionStoreContext) {
    throw new Error(
      'useSelectionStore must be used within SelectionStoreProvider',
    )
  }

  return useStore(selectionStoreContext, selector)
}
