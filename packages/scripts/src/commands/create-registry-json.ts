import { promises as fs } from 'node:fs'
import path from 'node:path'
import Ajv, { type ValidateFunction, type ErrorObject, type Schema } from 'ajv'
import addFormats from 'ajv-formats'

const REGISTRY_SCHEMA_URL = 'https://ui.shadcn.com/schema/registry.json'
const REGISTRY_ITEM_SCHEMA_URL =
  'https://ui.shadcn.com/schema/registry-item.json'

export interface CreateRegistryOptions {
  verbose: boolean
  registryDir: string
  outputFile: string
}

async function fetchJsonSchema(url: string): Promise<Schema> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch schema from ${url}: ${response.statusText}`,
    )
  }
  const data = await response.json()
  return data as Schema
}

function formatValidationErrors(
  errors: ErrorObject[] | null | undefined,
): string {
  if (!errors) return 'Unknown validation error'
  return errors.map((err) => `${err.instancePath} ${err.message}`).join(', ')
}

async function setupAjv(): Promise<{
  validateRegistry: ValidateFunction
  validateRegistryItem: ValidateFunction
}> {
  // Initialize Ajv
  const ajv = new Ajv({
    allErrors: true, // Show all errors, not just the first one
    strict: true,
    validateFormats: true,
  })

  // Add string formats like 'uri', 'email', etc.
  addFormats(ajv)

  // Fetch and compile schemas
  const [registrySchema, registryItemSchema] = await Promise.all([
    fetchJsonSchema(REGISTRY_SCHEMA_URL),
    fetchJsonSchema(REGISTRY_ITEM_SCHEMA_URL),
  ])

  // Add schemas to Ajv instance
  const validateRegistry = ajv.compile(registrySchema)
  const validateRegistryItem = ajv.compile(registryItemSchema)

  return {
    validateRegistry,
    validateRegistryItem,
  }
}

async function readRegistryItems(
  registryDir: string,
  validateRegistryItem: ValidateFunction,
): Promise<Record<string, unknown>[]> {
  try {
    const files = await fs.readdir(registryDir)
    const items: Record<string, unknown>[] = []

    for (const file of files) {
      if (file.endsWith('.json') && file !== 'registry.json') {
        const filePath = path.join(registryDir, file)
        const content = await fs.readFile(filePath, 'utf-8')
        const parsedContent = JSON.parse(content)

        // Validate the item using Ajv
        if (!validateRegistryItem(parsedContent)) {
          throw new Error(
            `Validation error in ${file}: ${formatValidationErrors(
              validateRegistryItem.errors,
            )}`,
          )
        }

        items.push(parsedContent as Record<string, unknown>)
      }
    }

    return items
  } catch (error) {
    throw new Error(`Failed to read registry items: ${error}`)
  }
}

export async function createRegistry(
  options: CreateRegistryOptions,
): Promise<void> {
  const { validateRegistry, validateRegistryItem } = await setupAjv()
  const items = await readRegistryItems(
    options.registryDir,
    validateRegistryItem,
  )

  if (options.verbose) {
    console.log(`Found ${items.length} registry items`)
  }

  const registry = {
    name: 'vibe-ui',
    homepage: 'https://vibe-ui.com',
    items,
  }

  // Validate the entire registry using Ajv
  if (!validateRegistry(registry)) {
    throw new Error(
      `Registry validation error: ${formatValidationErrors(validateRegistry.errors)}`,
    )
  }

  await fs.writeFile(options.outputFile, JSON.stringify(registry, null, 2))

  if (options.verbose) {
    console.log(`Registry file written to ${options.outputFile}`)
  }
}
