import { promises as fs } from 'node:fs'
import path from 'node:path'
import { cancel, intro, outro } from '@clack/prompts'
import Ajv, { type ValidateFunction, type ErrorObject, type Schema } from 'ajv'
import addFormats from 'ajv-formats'
import pc from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const REGISTRY_SCHEMA_URL = 'https://ui.shadcn.com/schema/registry.json'
const REGISTRY_ITEM_SCHEMA_URL =
  'https://ui.shadcn.com/schema/registry-item.json'

interface Args {
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

// Function to get the CLI args
function getCliArgs() {
  return yargs(hideBin(process.argv))
    .option('verbose', {
      alias: 'v',
      type: 'boolean',
      description: 'Run with verbose logging',
      default: false,
    })
    .option('registry-dir', {
      alias: 'd',
      type: 'string',
      description: 'Directory containing registry item files',
      default: 'registry',
    })
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Output registry.json file path',
      default: 'registry.json',
    })
    .help()
    .parseSync()
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

async function createRegistry(args: Args): Promise<void> {
  const { validateRegistry, validateRegistryItem } = await setupAjv()
  const items = await readRegistryItems(args.registryDir, validateRegistryItem)

  if (args.verbose) {
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

  await fs.writeFile(args.outputFile, JSON.stringify(registry, null, 2))

  if (args.verbose) {
    console.log(`Registry file written to ${args.outputFile}`)
  }
}

async function main() {
  intro(pc.blue('📦 Creating Registry JSON'))

  try {
    const parsedArgs = getCliArgs()

    const args: Args = {
      verbose: Boolean(parsedArgs.verbose),
      registryDir: parsedArgs['registry-dir'] as string,
      outputFile: parsedArgs.output as string,
    }

    if (args.verbose) {
      console.log('CLI Arguments:', JSON.stringify(args, null, 2))
    }

    await createRegistry(args)
    outro(pc.green('✨ Registry created successfully!'))
  } catch (error) {
    cancel(String(error))
  }
}

main().catch((error) => {
  console.error(pc.red('Fatal error:'), error)
  process.exit(1)
})
