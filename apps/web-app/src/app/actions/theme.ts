'use server'

import { db } from '@acme/db/client'
import { ThemeSelections, themeSelectionSchema } from '@acme/db/schema'
import { add } from 'date-fns'
import type { z } from 'zod'

export async function createThemeSelection(
  input: z.infer<typeof themeSelectionSchema>,
) {
  const validatedInput = themeSelectionSchema.parse(input)

  const themeSelection = await db
    .insert(ThemeSelections)
    .values({
      registryItems: validatedInput.registryItems,
      themeConfig: validatedInput.themeConfig,
      title: validatedInput.title,
      prompt: validatedInput.prompt,
      integrations: validatedInput.integrations,
      expiresAt: add(new Date(), { hours: 24 }), // Expires in 24 hours
    })
    .returning({ id: ThemeSelections.id })

  if (!themeSelection[0]) {
    throw new Error('Failed to create theme selection')
  }

  return themeSelection[0].id
}
