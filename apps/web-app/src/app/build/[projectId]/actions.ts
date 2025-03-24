'use server'

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { cache } from 'react'
import type { Registry, RegistryItem } from 'shadcn/registry'
import {
  loadRegistryFiles,
  loadRegistryItemForPath,
} from '~/lib/registry-utils'

async function getFrameworkDirectories(
  registryPath: string,
): Promise<string[]> {
  const entries = await fs.readdir(registryPath, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
    .map((dir) => dir.name)
}

async function getItemDirectories(
  frameworkPath: string,
  itemType: 'components' | 'templates',
): Promise<string[]> {
  const itemsPath = path.join(frameworkPath, itemType)
  try {
    const entries = await fs.readdir(itemsPath, { withFileTypes: true })
    return entries.filter((entry) => entry.isDirectory()).map((dir) => dir.name)
  } catch {
    return []
  }
}

async function loadRegistryItemsForType(
  frameworkPath: string,
  itemType: 'components' | 'templates',
): Promise<RegistryItem[]> {
  const items: RegistryItem[] = []
  const dirs = await getItemDirectories(frameworkPath, itemType)

  for (const dir of dirs) {
    const itemPath = path.join(frameworkPath, itemType, dir)
    const registryItemFilePath = path.join(itemPath, 'registry-item.json')
    const item = await loadRegistryItemForPath(registryItemFilePath)
    if (item) {
      const filesWithContent = await loadRegistryFiles(item)
      items.push({
        ...item,
        files: filesWithContent,
      })
    }
  }

  return items
}

export const loadRegistries = cache(async (): Promise<Registry[]> => {
  const registryBasePath = path.join(process.cwd(), 'registry')
  const frameworks = await getFrameworkDirectories(registryBasePath)
  const registries: Registry[] = []

  for (const framework of frameworks) {
    const frameworkPath = path.join(registryBasePath, framework)

    // Load both components and templates
    const items = [
      ...(await loadRegistryItemsForType(frameworkPath, 'components')),
      ...(await loadRegistryItemsForType(frameworkPath, 'templates')),
    ]

    // Create registry for this framework
    registries.push({
      name: framework,
      homepage: `https://vibeui.dev/registry/${framework}`,
      items,
    })
  }

  return registries
})
