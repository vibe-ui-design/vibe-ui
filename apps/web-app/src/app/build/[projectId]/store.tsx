'use client'

import { type ReactNode, createContext, useContext, useRef } from 'react'
import { createStore, useStore } from 'zustand'
import { persist } from 'zustand/middleware'

interface Component {
  id: string
  name: string
  description: string
  category: string
  framework?: string
  preview?: string
  itemType: 'component' | 'template'
}

export interface ColorTheme {
  id: string
  name: string
  primaryColor: string
  secondaryColor: string
}

export type ThemeMode = 'light' | 'dark' | 'both'
export type BorderRadius = '0' | '0.3' | '0.5' | '0.75' | '1'

interface ComponentState {
  selectedComponents: Component[]
  theme: {
    selectedTheme: ColorTheme
    selectedMode: ThemeMode
    borderRadius: BorderRadius
    customPrimaryColor: string
    customSecondaryColor: string
    isUsingCustomColors: boolean
    selectedIconLibrary: string
  }
}

interface ComponentActions {
  toggleComponent: (component: Component) => void
  clearSelection: () => void
  setTheme: (theme: ColorTheme) => void
  setThemeMode: (mode: ThemeMode) => void
  setBorderRadius: (radius: BorderRadius) => void
  setCustomColors: (primary: string, secondary: string) => void
  setIconLibrary: (libraryId: string) => void
}

type ComponentStore = ComponentState & ComponentActions

const defaultTheme = {
  id: 'violet',
  name: 'Violet',
  primaryColor: '#8B5CF6',
  secondaryColor: '#C4B5FD',
}

export const defaultInitState: ComponentState = {
  selectedComponents: [],
  theme: {
    selectedTheme: defaultTheme,
    selectedMode: 'dark',
    borderRadius: '0.5',
    customPrimaryColor: defaultTheme.primaryColor,
    customSecondaryColor: defaultTheme.secondaryColor,
    isUsingCustomColors: false,
    selectedIconLibrary: 'lucide',
  },
}

export const createComponentStore = (
  initState: ComponentState = defaultInitState,
) => {
  return createStore<ComponentStore>()(
    persist(
      (set) => ({
        ...initState,
        selectedComponents: initState.selectedComponents,
        theme: initState.theme,
        toggleComponent: (component) =>
          set((state) => ({
            selectedComponents: state.selectedComponents.some(
              (c) => c.id === component.id,
            )
              ? state.selectedComponents.filter((c) => c.id !== component.id)
              : [...state.selectedComponents, component],
          })),
        clearSelection: () => set({ selectedComponents: [] }),
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
      }),
      {
        name: 'vibe-ui-storage',
        partialize: (state) => ({
          selectedComponents: state.selectedComponents,
          theme: state.theme,
        }),
      },
    ),
  )
}

export type ComponentStoreApi = ReturnType<typeof createComponentStore>

const ComponentStoreContext = createContext<ComponentStoreApi | undefined>(
  undefined,
)

export interface ComponentStoreProviderProps {
  children: ReactNode
}

export function ComponentStoreProvider({
  children,
}: ComponentStoreProviderProps) {
  const storeRef = useRef<ComponentStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createComponentStore()
  }

  return (
    <ComponentStoreContext.Provider value={storeRef.current}>
      {children}
    </ComponentStoreContext.Provider>
  )
}

export const useComponentStore = <T,>(
  selector: (store: ComponentStore) => T,
): T => {
  const componentStoreContext = useContext(ComponentStoreContext)

  if (!componentStoreContext) {
    throw new Error(
      'useComponentStore must be used within ComponentStoreProvider',
    )
  }

  return useStore(componentStoreContext, selector)
}
