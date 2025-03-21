import { cancel, intro, outro } from '@clack/prompts'
import pc from 'picocolors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { createRegistry } from './commands/create-registry-json'

async function main() {
  intro(pc.blue('📦 Creating Registry JSON'))

  try {
    const parsedArgs = yargs(hideBin(process.argv))
      .command(
        'create-registry',
        'Create a registry.json file from individual component registries',
        {
          verbose: {
            alias: 'v',
            type: 'boolean',
            description: 'Run with verbose logging',
            default: false,
          },
          'registry-dir': {
            alias: 'd',
            type: 'string',
            description: 'Directory containing registry item files',
            default: 'registry',
          },
          output: {
            alias: 'o',
            type: 'string',
            description: 'Output registry.json file path',
            default: 'registry.json',
          },
        },
      )
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

    await createRegistry(options)
    outro(pc.green('✨ Registry created successfully!'))
  } catch (error) {
    cancel(String(error))
  }
}

main().catch((error) => {
  console.error(pc.red('Fatal error:'), error)
  process.exit(1)
})
