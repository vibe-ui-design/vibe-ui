import type { RegistryItem } from '~/app/build/[projectId]/actions'

export function groupRegistryItemsByFramework(
  items: RegistryItem[],
): Record<string, RegistryItem[]> {
  return items.reduce(
    (acc, item) => {
      const framework = item.framework
      if (!acc[framework]) {
        acc[framework] = []
      }
      acc[framework].push(item)
      return acc
    },
    {} as Record<string, RegistryItem[]>,
  )
}

export function groupRegistryItemsByCategory(
  items: RegistryItem[],
): Record<string, RegistryItem[]> {
  return items.reduce(
    (acc, item) => {
      const categories = item.categories || ['uncategorized']
      for (const category of categories) {
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(item)
      }
      return acc
    },
    {} as Record<string, RegistryItem[]>,
  )
}
