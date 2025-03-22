import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import Link from 'next/link'
import { DocsLayout } from '~/components/docs-layout'

export default function RemixPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="flex items-center text-sm text-neutral-400">
          <Link href="/docs" className="hover:text-white">
            Docs
          </Link>
          <span className="mx-2">›</span>
          <span className="text-white">Remix</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Remix</h1>
          <p className="text-xl text-neutral-400">
            Install and configure Remix.
          </p>
        </div>

        <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-px before:bg-neutral-800">
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium">
            1
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Create project</h2>

            <p>
              Run the{' '}
              <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-sm">
                init
              </code>{' '}
              command to create a new Remix project or to setup an existing one:
            </p>

            <div className="rounded-lg border border-neutral-800 overflow-hidden">
              <Tabs defaultValue="pnpm" className="w-full">
                <div className="border-b border-neutral-800 px-4">
                  <TabsList className="bg-transparent border-0 p-0 h-12 gap-4">
                    <TabsTrigger
                      value="pnpm"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      pnpm
                    </TabsTrigger>
                    <TabsTrigger
                      value="npm"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      npm
                    </TabsTrigger>
                    <TabsTrigger
                      value="yarn"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      yarn
                    </TabsTrigger>
                    <TabsTrigger
                      value="bun"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      bun
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="p-4 bg-black">
                  <TabsContent value="pnpm" className="mt-0">
                    <pre className="text-sm font-mono">
                      pnpm dlx shadcn-remix@latest init
                    </pre>
                  </TabsContent>
                  <TabsContent value="npm" className="mt-0">
                    <pre className="text-sm font-mono">
                      npx shadcn-remix@latest init
                    </pre>
                  </TabsContent>
                  <TabsContent value="yarn" className="mt-0">
                    <pre className="text-sm font-mono">
                      yarn dlx shadcn-remix@latest init
                    </pre>
                  </TabsContent>
                  <TabsContent value="bun" className="mt-0">
                    <pre className="text-sm font-mono">
                      bunx shadcn-remix@latest init
                    </pre>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>

        <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-px before:bg-neutral-800">
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium">
            2
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Configure components.json</h2>

            <p>
              You will be asked a few questions to configure{' '}
              <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-sm">
                components.json
              </code>
              :
            </p>

            <div className="rounded-lg border border-neutral-800 bg-black p-4">
              <pre className="text-sm font-mono text-neutral-400">
                <span className="text-neutral-500">1</span> Which style would
                you like to use? <span className="text-white">› New York</span>
                <span className="text-neutral-500">2</span> Which color would
                you like to use as base color?{' '}
                <span className="text-white">› Zinc</span>
                <span className="text-neutral-500">3</span> Where is your global
                CSS file?{' '}
                <span className="text-white">› app/styles/globals.css</span>
                <span className="text-neutral-500">4</span> Would you like to
                use CSS variables for colors?{' '}
                <span className="text-white">› yes</span>
                <span className="text-neutral-500">5</span> Where is your
                tailwind.config.js located?{' '}
                <span className="text-white">› tailwind.config.js</span>
                <span className="text-neutral-500">6</span> Configure the import
                alias for components?{' '}
                <span className="text-white">› ~/components</span>
                <span className="text-neutral-500">7</span> Configure the import
                alias for utils?{' '}
                <span className="text-white">› ~/lib/utils</span>
              </pre>
            </div>
          </div>
        </div>

        <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-px before:bg-neutral-800">
          <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium">
            3
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Add components</h2>

            <p>Use the CLI to add components to your project:</p>

            <div className="rounded-lg border border-neutral-800 overflow-hidden">
              <Tabs defaultValue="pnpm" className="w-full">
                <div className="border-b border-neutral-800 px-4">
                  <TabsList className="bg-transparent border-0 p-0 h-12 gap-4">
                    <TabsTrigger
                      value="pnpm"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      pnpm
                    </TabsTrigger>
                    <TabsTrigger
                      value="npm"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      npm
                    </TabsTrigger>
                    <TabsTrigger
                      value="yarn"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      yarn
                    </TabsTrigger>
                    <TabsTrigger
                      value="bun"
                      className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:shadow-none rounded-none px-1 py-3 h-full"
                    >
                      bun
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="p-4 bg-black">
                  <TabsContent value="pnpm" className="mt-0">
                    <pre className="text-sm font-mono">
                      pnpm dlx shadcn-remix@latest add button
                    </pre>
                  </TabsContent>
                  <TabsContent value="npm" className="mt-0">
                    <pre className="text-sm font-mono">
                      npx shadcn-remix@latest add button
                    </pre>
                  </TabsContent>
                  <TabsContent value="yarn" className="mt-0">
                    <pre className="text-sm font-mono">
                      yarn dlx shadcn-remix@latest add button
                    </pre>
                  </TabsContent>
                  <TabsContent value="bun" className="mt-0">
                    <pre className="text-sm font-mono">
                      bunx shadcn-remix@latest add button
                    </pre>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
