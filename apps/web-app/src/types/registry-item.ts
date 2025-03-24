import type { Registry, RegistryItem } from 'shadcn/registry'

export type VibeUiRegistryItem = RegistryItem & {
  framework: string
}

export type VibeUiRegistry = Registry & {
  frameworks: string[]
  items: VibeUiRegistryItem[]
}
