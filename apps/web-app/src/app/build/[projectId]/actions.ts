'use server'

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { cache } from 'react'

export interface RegistryFile {
  path: string
  type: string
}

export type RegistryItemType = 'component' | 'template'

export interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  categories?: string[]
  registryDependencies: string[]
  files: RegistryFile[]
  framework: string
  itemType: RegistryItemType
}

export interface Registry {
  name: string
  description: string
  frameworks: string[]
  items: RegistryItem[]
}

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

async function loadRegistryItem(
  frameworkName: string,
  itemPath: string,
  itemType: RegistryItemType,
): Promise<RegistryItem | null> {
  try {
    const registryItemPath = path.join(itemPath, 'registry-item.ts')
    const registryItemJsonPath = path.join(itemPath, 'registry-item.json')

    let item: Omit<RegistryItem, 'framework' | 'itemType'> | null = null

    if (await fs.stat(registryItemPath).catch(() => null)) {
      // For TypeScript registry items
      const { registryItem } = await import(registryItemPath)
      item = registryItem
    } else if (await fs.stat(registryItemJsonPath).catch(() => null)) {
      // For JSON registry items
      const content = await fs.readFile(registryItemJsonPath, 'utf-8')
      item = JSON.parse(content)
    }

    if (item) {
      return {
        ...item,
        framework: frameworkName,
        itemType,
      }
    }

    return null
  } catch (error) {
    console.warn(`Error loading registry item from ${itemPath}:`, error)
    return null
  }
}

export const loadRegistry = cache(async (): Promise<Registry> => {
  const registryBasePath = path.join(process.cwd(), 'registry')
  const frameworks = await getFrameworkDirectories(registryBasePath)
  const items: RegistryItem[] = []

  for (const framework of frameworks) {
    const frameworkPath = path.join(registryBasePath, framework)

    // Load components
    const componentDirs = await getItemDirectories(frameworkPath, 'components')
    for (const componentDir of componentDirs) {
      const componentPath = path.join(frameworkPath, 'components', componentDir)
      const item = await loadRegistryItem(framework, componentPath, 'component')
      if (item) {
        items.push(item)
      }
    }

    // Load templates
    const templateDirs = await getItemDirectories(frameworkPath, 'templates')
    for (const templateDir of templateDirs) {
      const templatePath = path.join(frameworkPath, 'templates', templateDir)
      const item = await loadRegistryItem(framework, templatePath, 'template')
      if (item) {
        items.push(item)
      }
    }
  }

  return {
    name: 'vibe-ui',
    description:
      'A collection of UI components and templates for building modern applications',
    frameworks,
    items,
  }
})
