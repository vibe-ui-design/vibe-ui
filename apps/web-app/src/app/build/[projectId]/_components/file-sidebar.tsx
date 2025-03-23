'use client'
import {
  ChevronRight,
  Download,
  ExternalLink,
  File,
  Folder,
} from 'lucide-react'
import type * as React from 'react'

import { Button } from '@acme/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@acme/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@acme/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { ThemePreview } from '~/components/theme-preview'
import { ThemeSelector } from '~/components/theme-selector'
import type { ColorTheme } from '../store'
import { useComponentStore } from '../store'

// This is sample data.
type FileTreeDirectory = [string, ...(string | FileTreeDirectory)[]]
type FileTreeItem = string | FileTreeDirectory

const data = {
  changes: [
    {
      file: 'README.md',
      state: 'M',
    },
    {
      file: 'api/hello/route.ts',
      state: 'U',
    },
    {
      file: 'app/layout.tsx',
      state: 'M',
    },
  ],
  tree: [
    [
      'app',
      [
        'api',
        ['hello', ['route.ts']],
        'page.tsx',
        'layout.tsx',
        ['blog', ['page.tsx']],
      ],
    ],
    [
      'components',
      ['ui', 'button.tsx', 'card.tsx'],
      'header.tsx',
      'footer.tsx',
    ],
    ['lib', ['util.ts']],
    ['public', 'favicon.ico', 'vercel.svg'],
    '.eslintrc.json',
    '.gitignore',
    'next.config.js',
    'tailwind.config.js',
    'package.json',
    'README.md',
  ] as FileTreeItem[],
}

const defaultTheme = {
  id: 'violet',
  name: 'Violet',
  primaryColor: '#8B5CF6',
  secondaryColor: '#C4B5FD',
}

export function FileSidebar({
  onClose,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  onClose?: () => void
}) {
  const selectedComponents = useComponentStore(
    (state) => state.selectedComponents,
  )
  const theme = useComponentStore((state) => state.theme)
  const setTheme = useComponentStore((state) => state.setTheme)
  const setThemeMode = useComponentStore((state) => state.setThemeMode)
  const setBorderRadius = useComponentStore((state) => state.setBorderRadius)
  const setCustomColors = useComponentStore((state) => state.setCustomColors)

  if (selectedComponents.length === 0) {
    return null
  }

  const handleThemeChange = (theme: ColorTheme) => {
    setTheme(theme)
  }

  const handleCustomColorsChange = (primary: string, secondary: string) => {
    setCustomColors(primary, secondary)
  }

  const currentTheme = {
    ...theme.selectedTheme,
    primaryColor: theme.isUsingCustomColors
      ? theme.customPrimaryColor
      : theme.selectedTheme.primaryColor,
    secondaryColor: theme.isUsingCustomColors
      ? theme.customSecondaryColor
      : theme.selectedTheme.secondaryColor,
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
      {/* <SidebarHeader className="flex shrink-0 items-center justify-between  px-4 py-3">
        <div className="flex items-center gap-2">
          <Settings2 className="h-5 w-5 text-neutral-400" />
          <span className="font-semibold">Project Settings</span>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-neutral-400 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close settings</span>
          </Button>
        )}
      </SidebarHeader> */}
      <Tabs defaultValue="theme" className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="px-4 py-2">
            <TabsList className="w-full">
              <TabsTrigger value="theme" className="flex-1">
                Theme
              </TabsTrigger>
              <TabsTrigger value="files" className="flex-1">
                Files
              </TabsTrigger>
            </TabsList>
          </div>
          <SidebarContent className="flex-1 overflow-y-auto">
            <TabsContent value="theme" className="m-0 h-full">
              <div className="space-y-4 p-4">
                <ThemeSelector
                  selectedTheme={theme.selectedTheme}
                  selectedMode={theme.selectedMode}
                  borderRadius={theme.borderRadius}
                  onThemeChange={handleThemeChange}
                  onModeChange={setThemeMode}
                  onBorderRadiusChange={setBorderRadius}
                  onCustomColorsChange={handleCustomColorsChange}
                />
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">Preview</div>
                  <ThemePreview
                    theme={currentTheme}
                    mode={theme.selectedMode}
                    borderRadius={theme.borderRadius}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="files" className="m-0 h-full">
              <div className="px-2 py-4">
                <SidebarMenu>
                  {data.changes.map((item) => (
                    <SidebarMenuItem key={item.file}>
                      <SidebarMenuButton>
                        <File className="h-4 w-4" />
                        {item.file}
                      </SidebarMenuButton>
                      <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
                <SidebarMenu>
                  {data.tree.map((item) => (
                    <Tree
                      key={Array.isArray(item) ? item[0] : item}
                      item={item}
                    />
                  ))}
                </SidebarMenu>
              </div>
            </TabsContent>
          </SidebarContent>
        </div>
      </Tabs>
      <SidebarFooter>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="w-full border-neutral-800"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleOpenInV0}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in V0
          </Button>
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
