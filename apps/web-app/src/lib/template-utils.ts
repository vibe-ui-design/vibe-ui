import type { Template } from '~/types/template'

/**
 * Validates a template structure to ensure it has all required fields
 * and follows the expected format
 */
export function validateTemplate(template: Partial<Template>): string[] {
  const errors: string[] = []

  if (!template.id) {
    errors.push('Template ID is required')
  }

  if (!template.metadata) {
    errors.push('Template metadata is required')
  } else {
    if (!template.metadata.name) {
      errors.push('Template name is required')
    }
    if (!template.metadata.description) {
      errors.push('Template description is required')
    }
    if (!template.metadata.category) {
      errors.push('Template category is required')
    }
  }

  if (!template.components || template.components.length === 0) {
    errors.push('Template must have at least one component')
  } else {
    template.components.forEach((component, index) => {
      if (!component.name) {
        errors.push(`Component at index ${index} is missing a name`)
      }
      if (!component.path) {
        errors.push(`Component at index ${index} is missing a path`)
      }
      if (!component.content) {
        errors.push(`Component at index ${index} is missing content`)
      }
    })
  }

  return errors
}

/**
 * Formats a template for v0 consumption
 * This ensures the template is in the correct format for v0 to import
 */
export function formatTemplateForV0(template: Template): Record<string, any> {
  return {
    name: template.metadata.name,
    description: template.metadata.description,
    files: [
      ...template.components.map((component) => ({
        name: component.path,
        content: component.content,
      })),
      ...template.styles.map((style) => ({
        name: style.path,
        content: style.content,
      })),
    ],
    dependencies: template.config.dependencies || {},
    devDependencies: {},
    assets: template.assets.map((asset) => ({
      name: asset.path,
      url: asset.url,
    })),
  }
}

/**
 * Generates the URL to open a template in v0
 */
export function getOpenInV0Url(templateId: string, baseUrl: string): string {
  return `https://v0.dev/chat/api/open?url=${encodeURIComponent(`${baseUrl}/api/templates/${templateId}`)}`
}
