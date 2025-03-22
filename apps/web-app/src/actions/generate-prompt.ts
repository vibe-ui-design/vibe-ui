'use server'

import type { ComponentData } from '~/lib/component-data'
import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import type {
  ColorTheme,
  ThemeMode,
  BorderRadius,
} from '~/components/theme-selector'

export async function generatePrompt(
  projectDescription: string,
  selectedComponents: ComponentData[],
  theme?: ColorTheme,
  mode?: ThemeMode,
  borderRadius?: BorderRadius,
): Promise<string> {
  try {
    // Format the selected components for the prompt
    const componentsList = selectedComponents
      .map((component) => `- ${component.name} (${component.category})`)
      .join('\n')

    // Create theme information if provided
    const themeInfo =
      theme && mode
        ? `
Design Preferences:
- Primary Color: ${theme.primaryColor}
- Secondary Color: ${theme.secondaryColor}
- Border Radius: ${borderRadius}rem
- Mode: ${mode === 'both' ? 'Support both light and dark modes' : `${mode} mode only`}
`
        : ''

    // Create the system prompt
    const systemPrompt = `You are an expert UI/UX designer and developer who specializes in creating prompts for v0.dev, an AI tool that generates React components and full UIs from text descriptions.

Your task is to create a detailed, effective prompt for v0.dev based on the user's project description, their selected UI components, and design preferences.

The prompt should:
1. Start with a clear, concise description of what needs to be built
2. Include specific details about layout, functionality, and design aesthetic
3. Mention all the selected components in a natural way
4. Incorporate the specified color theme, border radius, and mode preferences
5. Add relevant context that would help v0.dev understand the project better
6. Be written in a way that would produce a cohesive, well-designed UI

The prompt should be detailed but concise, focusing on what matters most for generating a high-quality UI.`

    // Create the user prompt
    const userPrompt = `Project Description:
${projectDescription}

Selected Components:
${componentsList}
${themeInfo}

Based on this information, create an effective prompt for v0.dev that will generate a UI matching the user's needs, incorporating the selected components and following the specified design preferences.`

    // Generate the prompt using AI
    const { text } = await generateText({
      model: openai('gpt-4o'),
      system: systemPrompt,
      prompt: userPrompt,
    })

    return text
  } catch (error) {
    console.error('Error generating prompt:', error)
    return 'Failed to generate prompt. Please try again.'
  }
}
