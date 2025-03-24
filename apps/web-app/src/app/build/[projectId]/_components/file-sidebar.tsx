'use client'
import { ChevronRight, Download, File, Folder, X } from 'lucide-react'
import type * as React from 'react'

import { Button } from '@acme/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@acme/ui/collapsible'
import { Badge } from '@acme/ui/components/badge'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@acme/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { OpenInV0Button } from '~/components/open-in-v0-button'
import { ThemePreview } from '~/components/theme-preview'
import { ThemeSelector } from '~/components/theme-selector'
import { useSelectionStore } from '../store'

// This is sample data.
type FileTreeDirectory = [string, ...(string | FileTreeDirectory)[]]
type FileTreeItem = string | FileTreeDirectory

export function FileSidebar({
  onClose,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  onClose?: () => void
}) {
  const selectedComponents = useSelectionStore(
    (state) => state.selectedRegistryItems,
  )
  const toggleComponent = useSelectionStore((state) => state.toggleRegistryItem)

  if (selectedComponents.length === 0) {
    return null
  }

  const data = {
    tree: [
      [
        'components',
        [
          'ui',
          selectedComponents.map(
            (component) => `${component.name.toLowerCase()}.tsx`,
          ),
        ],
        'layout.tsx',
      ],
      ['styles', 'globals.css'],
    ] as FileTreeItem[],
  }

  const handleDownload = () => {
    // TODO: Implement download functionality
  }

  const handleOpenInV0 = () => {
    window.open('https://v0.dev', '_blank')
  }

  return (
    <Sidebar
      side="right"
      className="flex h-screen w-96 flex-col sticky top-0"
      collapsible="none"
      {...props}
    >
      <Tabs defaultValue="files" className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="px-4 py-2">
            <TabsList className="w-full">
              <TabsTrigger value="files" className="flex-1">
                Files{' '}
                <Badge variant="secondary" className="ml-2">
                  {selectedComponents.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="theme" className="flex-1">
                Theme
              </TabsTrigger>
            </TabsList>
          </div>
          <SidebarContent className="flex-1 overflow-y-auto">
            <TabsContent value="files" className="m-0 h-full">
              <div className="px-2 py-4">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Collapsible
                      className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
                      defaultOpen
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <ChevronRight className="transition-transform" />
                          <Folder />
                          components
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuItem>
                            <Collapsible
                              className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
                              defaultOpen
                            >
                              <CollapsibleTrigger asChild>
                                <SidebarMenuButton>
                                  <ChevronRight className="transition-transform" />
                                  <Folder />
                                  ui
                                </SidebarMenuButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {selectedComponents.map((component) => (
                                    <div
                                      key={component.name}
                                      className="group/file flex items-center gap-2"
                                    >
                                      <SidebarMenuButton className="flex-1 data-[active=true]:bg-transparent">
                                        <File className="size-4" />
                                        {component.name.toLowerCase()}.tsx
                                      </SidebarMenuButton>
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="ghost"
                                        onClick={() =>
                                          toggleComponent(component)
                                        }
                                        className="invisible group-hover/file:visible"
                                      >
                                        <X className="size-4 text-muted-foreground" />
                                      </Button>
                                    </div>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Collapsible
                      className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
                      defaultOpen
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <ChevronRight className="transition-transform" />
                          <Folder />
                          styles
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuButton>
                            <File className="size-4" />
                            globals.css
                          </SidebarMenuButton>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenu>
              </div>
            </TabsContent>
            <TabsContent value="theme" className="m-0 h-full">
              <div className="space-y-4 p-4">
                <ThemeSelector />
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">Preview</div>
                  <ThemePreview />
                </div>
              </div>
            </TabsContent>
          </SidebarContent>
        </div>
      </Tabs>
      <SidebarFooter>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full" onClick={handleDownload}>
            <Download className="size-4" />
            Download
          </Button>
          <OpenInV0Button />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function Tree({ item }: { item: FileTreeItem }) {
  const [name, ...items] = Array.isArray(item) ? item : [item]

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === 'button.tsx'}
        className="data-[active=true]:bg-transparent"
      >
        <File />
        {name}
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === 'components' || name === 'ui'}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <Tree
                key={typeof subItem === 'string' ? subItem : `${name}-${index}`}
                item={subItem}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
