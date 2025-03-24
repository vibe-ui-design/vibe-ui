import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { RegistryItem } from 'shadcn/registry'

export async function loadRegistryItemForPath(
  registryItemPath: string,
): Promise<RegistryItem | null> {
  try {
    let item: RegistryItem | null = null

    if (await fs.stat(registryItemPath).catch(() => null)) {
      // For JavaScript/TypeScript registry items
      const registryModule = await fs.readFile(registryItemPath, 'utf8')
      item = JSON.parse(registryModule) as RegistryItem
    }

    if (item) {
      return {
        $schema: 'https://ui.shadcn.com/schema/registry-item.json',
        ...item,
      }
    }

    return null
  } catch (error) {
    console.warn(
      `Error loading registry item for path ${registryItemPath}:`,
      error,
    )
    return null
  }
}

export async function loadRegistryFiles(
  registryItem: RegistryItem,
): Promise<RegistryItem['files']> {
  if (!registryItem.files) return []

  return await Promise.all(
    registryItem.files.map(async (file) => {
      const filePath = path.join(process.cwd(), file.path)
      const content = await fs.readFile(filePath, 'utf8')

      return {
        ...file,
        content,
      }
    }),
  )
}
