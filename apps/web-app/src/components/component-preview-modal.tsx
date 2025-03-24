'use client'

import { Button } from '@acme/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@acme/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Check, Copy, X } from 'lucide-react'
import { useState } from 'react'
import type { RegistryItem } from 'shadcn/registry'

interface ComponentPreviewModalProps {
  registryItem: RegistryItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComponentPreviewModal({
  registryItem,
  open,
  onOpenChange,
}: ComponentPreviewModalProps) {
  const [activeTab, setActiveTab] = useState('preview')
  const [copied, setCopied] = useState(false)

  if (!registryItem) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(getComponentCode(registryItem))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-neutral-900 border-neutral-800 text-white p-0">
        <DialogHeader className="p-6 border-b border-neutral-800">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">{registryItem.name}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-neutral-400 hover:text-white hover:bg-neutral-800"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-neutral-400">
            {registryItem.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="preview"
          className="p-6"
          onValueChange={setActiveTab}
        >
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-neutral-800 border border-neutral-700">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            {activeTab === 'code' && (
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:text-white"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-3 w-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-3 w-3" />
                    Copy Code
                  </>
                )}
              </Button>
            )}
          </div>

          <TabsContent value="preview" className="mt-0">
            <div className="rounded-lg border border-neutral-800 bg-black p-6 flex items-center justify-center min-h-[300px]">
              {/* {registryItem.preview ? (
                <img
                  src={registryItem.preview || '/placeholder.svg'}
                  alt={registryItem.name}
                  className="max-w-full max-h-[300px] object-contain"
                />
              ) : (
                <div className="text-neutral-600 text-sm">
                  Preview not available
                </div>
              )} */}
              <img
                src={'/placeholder.svg'}
                alt={registryItem.name}
                className="max-w-full max-h-[300px] object-contain"
              />
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-0">
            <div className="rounded-lg border border-neutral-800 bg-black p-4 overflow-auto">
              <pre className="text-sm text-neutral-400">
                <code>{getComponentCode(registryItem)}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="usage" className="mt-0">
            <div className="rounded-lg border border-neutral-800 bg-black p-6">
              <h3 className="text-lg font-medium mb-4">Installation</h3>
              <div className="bg-neutral-900 rounded-md p-3 mb-6">
                <pre className="text-sm text-neutral-400">
                  <code>{`npm install @vibeui/${registryItem.name}`}</code>
                </pre>
              </div>

              <h3 className="text-lg font-medium mb-4">Usage</h3>
              <div className="bg-neutral-900 rounded-md p-3">
                <pre className="text-sm text-neutral-400">
                  <code>{`import { ${registryItem.name} } from '@vibeui/${registryItem.name}'

export default function MyComponent() {
  return (
    <${registryItem.name} />
  )
}`}</code>
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

// Helper function to generate sample code for a component
function getComponentCode(registryItem: RegistryItem): string {
  switch (registryItem.name) {
    case 'button':
      return `import { Button } from "@acme/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Button>Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  )`
    case 'card':
      return `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@acme/ui/card"
import { Button } from "@acme/ui/button"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )`
    default:
      return `import { ${registryItem.name} } from "@acme/ui/${registryItem.name}"

export function ${registryItem.name}Demo() {
  return (
    <${registryItem.name}>
      // ${registryItem.name} content
    </${registryItem.name}>
  )
}`
  }
}
