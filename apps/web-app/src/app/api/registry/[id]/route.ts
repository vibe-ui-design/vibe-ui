import { db } from '@acme/db/client'
import { ThemeSelections } from '@acme/db/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { registryItemSchema } from 'shadcn/registry'
import type { RegistryItem, registryItemTypeSchema } from 'shadcn/registry'
import type { z } from 'zod'
import { loadRegistryFiles } from '~/lib/registry-utils'

async function themeSelectionToRegistryItem(
  themeSelection: typeof ThemeSelections.$inferSelect,
): Promise<RegistryItem> {
  // Create a description of the theme configuration
  const themeDesc = [
    `Theme: ${themeSelection.themeConfig.selectedTheme.name}`,
    `Mode: ${themeSelection.themeConfig.selectedMode}`,
    `Border Radius: ${themeSelection.themeConfig.borderRadius}`,
    `Icon Library: ${themeSelection.themeConfig.selectedIconLibrary}`,
  ].join(', ')

  // Load all registry items in parallel
  const registryItems = await Promise.all(
    themeSelection.registryItems.map(async (item) => {
      // Load the files for this registry item
      const filesWithContent = await loadRegistryFiles(item)
      return {
        ...item,
        files: filesWithContent,
      } satisfies RegistryItem
    }),
  )

  // Filter out any null results and merge all files
  const allFiles = registryItems
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .flatMap((item) => item.files || [])

  // Get unique dependencies from all registry items
  const registryDependencies = Array.from(
    new Set(
      registryItems
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .flatMap((item) => item.registryDependencies || []),
    ),
  )

  return {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: themeSelection.id,
    type: 'registry:block',
    author: 'vibeui (https://vibeui.dev)',
    description: themeDesc,
    registryDependencies,
    files: allFiles,
    categories: ['theme'],
  } satisfies RegistryItem
}

// This route shows an example for serving a component using a route handler.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params

    // Check if this is a theme selection ID request
    if (id.startsWith('theme_')) {
      const themeSelection = await db.query.ThemeSelections.findFirst({
        where: eq(ThemeSelections.id, id),
      })

      if (!themeSelection) {
        return NextResponse.json(
          { error: 'Theme selection not found' },
          { status: 404 },
        )
      }

      // Check if the theme selection has expired
      if (themeSelection.expiresAt < new Date()) {
        return NextResponse.json(
          { error: 'Theme selection has expired' },
          { status: 410 },
        )
      }

      // Transform the theme selection into a registry item format
      const registryItem = await themeSelectionToRegistryItem(themeSelection)

      return NextResponse.json(registryItem)
    }

    // Handle registry component requests (existing code)
    const registryData = await import('registry.json')
    const registry = registryData.default

    const component = registry.items.find(
      (item: { name: string }) => item.name === id,
    )

    if (!component) {
      return NextResponse.json(
        { error: 'Component not found' },
        { status: 404 },
      )
    }

    // Validate and transform the component
    const parsedItem = registryItemSchema.parse(component)
    const registryItem: RegistryItem = {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      ...parsedItem,
      type: parsedItem.type as z.infer<typeof registryItemTypeSchema>,
      description: parsedItem.description || 'No description provided',
      registryDependencies: parsedItem.registryDependencies || [],
      files: (parsedItem.files || []).map((file) => ({
        ...file,
        target: file.target || '',
      })),
    }

    // If the component has no files, return a 400 error.
    if (!registryItem.files?.length) {
      return NextResponse.json(
        { error: 'Component has no files' },
        { status: 400 },
      )
    }

    // Read all files in parallel.
    const filesWithContent = await loadRegistryFiles(registryItem)

    // Return the component with the files.
    return NextResponse.json({ ...registryItem, files: filesWithContent })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
