import { promises as fs } from 'node:fs'
import path from 'node:path'
import Ajv, { type ErrorObject, type ValidateFunction } from 'ajv'
import addFormats from 'ajv-formats'

import { cancel, intro, outro } from '@clack/prompts'
import pc from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

// Define schemas locally instead of fetching
const registryItemSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    type: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    files: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          type: { type: 'string' },
        },
        required: ['path', 'type'],
      },
    },
  },
  required: ['name', 'type', 'title', 'description', 'files'],
}

const registrySchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    homepage: { type: 'string' },
    items: {
      type: 'array',
      items: registryItemSchema,
    },
  },
  required: ['name', 'homepage', 'items'],
}

export interface CreateRegistryOptions {
  verbose: boolean
  registryDir: string
  outputFile: string
}

function formatValidationErrors(
  errors: ErrorObject[] | null | undefined,
): string {
  if (!errors) return 'Unknown validation error'
  return errors.map((err) => `${err.instancePath} ${err.message}`).join(', ')
}

function setupAjv(): ValidateFunction {
  const ajv = new Ajv({
    allErrors: true,
    strict: true,
    validateFormats: true,
  })

  addFormats(ajv)

  const validateRegistry = ajv.compile(registrySchema)
  return validateRegistry
}

async function readRegistryItems(
  registryDir: string,
): Promise<Record<string, unknown>[]> {
  try {
    const items: Record<string, unknown>[] = []

    async function scanDirectory(currentPath: string) {
      const files = await fs.readdir(currentPath, { withFileTypes: true })

      for (const file of files) {
        const filePath = path.join(currentPath, file.name)

        if (file.isDirectory()) {
          await scanDirectory(filePath)
        } else if (
          file.name.endsWith('.json') &&
          file.name !== 'registry.json'
        ) {
          const content = await fs.readFile(filePath, 'utf-8')
          const parsedContent = JSON.parse(content)
          items.push(parsedContent as Record<string, unknown>)
        }
      }
    }

    // Resolve the registry directory path relative to the current file
    // const resolvedRegistryDir = path.resolve(__dirname, registryDir)
    await scanDirectory(registryDir)

    return items
  } catch (error) {
    throw new Error(`Failed to read registry items: ${error}`)
  }
}

export async function createRegistry(options: CreateRegistryOptions) {
  const validateRegistry = setupAjv()
  const items = await readRegistryItems(options.registryDir)

  if (options.verbose) {
    console.log(`Found ${items.length} registry items`)
  }

  const registry = {
    name: 'vibe-ui',
    homepage: 'https://vibe-ui.com',
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    items,
  } as const

  if (!validateRegistry(registry)) {
    throw new Error(
      `Registry validation error: ${formatValidationErrors(validateRegistry.errors)}`,
    )
  }

  await fs.writeFile(options.outputFile, JSON.stringify(registry, null, 2))

  if (options.verbose) {
    console.log(`Registry file written to ${options.outputFile}`)
  }

  return registry
}

async function main() {
  intro(pc.blue('📦 Creating Registry JSON'))

  try {
    const parsedArgs = yargs(hideBin(process.argv))
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
        default: './registry',
      })
      .option('output', {
        alias: 'o',
        type: 'string',
        description: 'Output registry.json file path',
        default: 'registry.json',
      })
      .help()
      .parseSync()

    const options = {
      verbose: Boolean(parsedArgs.verbose),
      registryDir: parsedArgs['registry-dir'] as string,
      outputFile: parsedArgs.output as string,
    }

    if (options.verbose) {
      console.log('CLI Arguments:', JSON.stringify(options, null, 2))
    }

    const registry = await createRegistry(options)
    outro(
      pc.green(
        `✨ Created ${registry.name} with ${registry.items.length} items successfully!`,
      ),
    )
  } catch (error) {
    cancel(String(error))
  }
}

main().catch((error) => {
  console.error(pc.red('Fatal error:'), error)
  process.exit(1)
})
