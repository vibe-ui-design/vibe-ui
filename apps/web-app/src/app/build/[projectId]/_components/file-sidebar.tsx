'use client'
import {
  Briefcase,
  ChevronRight,
  Download,
  File,
  Folder,
  Laptop,
  Newspaper,
  ShoppingBag,
  X,
} from 'lucide-react'
import type * as React from 'react'

import { Button } from '@acme/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@acme/ui/collapsible'
import { Icons } from '@acme/ui/custom/icons'
import { Input } from '@acme/ui/input'
import { Label } from '@acme/ui/label'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from '@acme/ui/sidebar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Textarea } from '@acme/ui/textarea'
import { OpenInV0Button } from '~/components/open-in-v0-button'
import { ThemePreview } from '~/components/theme-preview'
import { ThemeSelector } from '~/components/theme-selector'
import { type SelectionState, useSelectionStore } from '../store'
import { IntegrationsTab } from './integrations-tab'

interface PredefinedPrompt {
  id: string
  label: string
  prompt: (
    title: string,
    components: string[],
    theme: SelectionState['theme'],
    integrations: SelectionState['integrations'],
  ) => string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

function generatePrompt(
  title: string,
  components: string[],
  theme: SelectionState['theme'],
  integrations: SelectionState['integrations'],
): string {
  // Filter to get only enabled integrations
  const enabledIntegrations = Object.entries(integrations)
    .filter(([_, enabled]) => enabled)
    .map(([name]) => name)

  let prompt = `Create a Next.js application using the App Router for ${title}. Use the following components: ${components.join(', ')}. Style it with a ${theme.selectedMode} theme using ${theme.selectedTheme.name} as the primary color scheme and a border radius of ${theme.borderRadius}rem.`

  if (enabledIntegrations.length > 0) {
    prompt += `\n\nInclude the following integrations: ${enabledIntegrations.join(', ')}.`
  }

  return prompt
}

const componentPrompts: PredefinedPrompt[] = [
  {
    id: 'auth-form',
    label: 'Sign In Form',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Create a sign-in form with email and password fields. Add form validation, error states, and a "Remember me" checkbox. Include social sign-in options and a forgot password link. Show loading states during submission.`,
    icon: Icons.User,
    color: 'text-blue-500',
  },
  {
    id: 'settings',
    label: 'Settings Page',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Build a settings page with sections for profile, notifications, and security. Include form inputs, toggles, and save buttons. Add unsaved changes warning and success/error notifications.`,
    icon: Icons.Settings,
    color: 'text-gray-500',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Create a dashboard layout with a sidebar navigation, header with user menu, and main content area. Add cards for key metrics, a recent activity feed, and data tables.`,
    icon: Icons.BarChart2,
    color: 'text-indigo-500',
  },
  {
    id: 'pricing',
    label: 'Pricing Section',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Design a pricing section with multiple tiers. Include feature lists, monthly/yearly toggle, and highlighted recommended plan. Add CTAs and FAQ section below.`,
    icon: Icons.DollarSign,
    color: 'text-green-500',
  },
]

const clonePrompts: PredefinedPrompt[] = [
  {
    id: 'github',
    label: 'Clone GitHub',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Create a GitHub-style repository page with a file explorer, README display, and commit history. Include the repository header with stats and actions. Add tabs for Issues, Pull Requests, and Settings. Match GitHub's layout and functionality.`,
    icon: Icons.Github,
    color: 'text-slate-500',
  },
  {
    id: 'linear',
    label: 'Clone Linear',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Build a Linear-style issue tracker with a clean, minimal design. Include a sidebar with projects and teams, main issue list with filters, and detail view. Add keyboard shortcuts and smooth animations.`,
    icon: Icons.CheckCircle2,
    color: 'text-violet-500',
  },
  {
    id: 'slack',
    label: 'Clone Slack',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Design a Slack-like chat interface with channels list, message threads, and user presence. Include message composition with formatting, emoji picker, and file uploads. Add channel header and thread sidebar.`,
    icon: Icons.MessageSquareText,
    color: 'text-purple-500',
  },
  {
    id: 'notion',
    label: 'Clone Notion',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Create a Notion-style document editor with a sidebar navigation and block-based editing. Include page hierarchy, rich text formatting, and collaborative features. Add cover images and page icons.`,
    icon: Icons.Bookmark,
    color: 'text-slate-500',
  },
]

const predefinedPrompts: PredefinedPrompt[] = [
  {
    id: 'ecommerce',
    label: 'E-commerce',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Build a modern e-commerce platform with a responsive product grid layout. Create a sticky header with search and cart functionality. Add product cards with images, prices, and quick-add buttons. Include a shopping cart panel and multi-step checkout flow. Implement server-side product filtering and search functionality using Next.js Server Components. Add responsive navigation with a mobile menu.`,
    icon: ShoppingBag,
    color: 'text-green-500',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Design a minimalist portfolio site with a hero section using a clean layout and large typography. Create a filterable project showcase grid. Add smooth scroll navigation with a sticky header. Include an about section with skill tags. Add a contact form with validation. Implement image optimization using Next/Image and add subtle hover animations for interactive elements.`,
    icon: Laptop,
    color: 'text-blue-500',
  },
  {
    id: 'saas',
    label: 'SaaS Landing',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Create a conversion-focused SaaS landing page with a hero section and prominent call-to-action buttons. Build a features section in a responsive grid layout. Add pricing tables with a toggle for monthly/yearly prices. Include a testimonials section. Add a sticky call-to-action header. Create an FAQ section. Implement a newsletter signup form. Add integration logos section and trust signals.`,
    icon: Briefcase,
    color: 'text-indigo-500',
  },
  {
    id: 'blog',
    label: 'Blog',
    prompt: (
      title,
      components,
      theme,
      integrations,
    ) => `${generatePrompt(title, components, theme, integrations)}
Develop a content-first blog using Next.js App Router and MDX for posts. Create a clean article layout with optimized typography and reading experience. Add a featured posts grid. Implement category-based navigation. Add a newsletter signup form with email validation. Include a related posts section and social sharing functionality. Add a search feature with instant results. Use Next/Image for optimized images.`,
    icon: Newspaper,
    color: 'text-purple-500',
  },
]

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
  const theme = useSelectionStore((state) => state.theme)
  const title = useSelectionStore((state) => state.title)
  const prompt = useSelectionStore((state) => state.prompt)
  const setTitle = useSelectionStore((state) => state.setTitle)
  const setPrompt = useSelectionStore((state) => state.setPrompt)
  const integrations = useSelectionStore((state) => state.integrations)

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

  const handlePromptSelect = (predefinedPrompt: PredefinedPrompt) => {
    setPrompt(
      predefinedPrompt.prompt(
        title,
        selectedComponents.map((item) => item.name),
        theme,
        integrations,
      ),
    )
  }

  return (
    <Sidebar
      side="right"
      className="flex h-screen w-96 flex-col sticky top-0"
      collapsible="none"
      {...props}
    >
      <SidebarHeader className="border-b px-4 py-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="h-9"
        />
      </SidebarHeader>
      <Tabs defaultValue="files" className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="px-4 py-2">
            <TabsList className="w-full">
              <TabsTrigger value="files" className="flex-1">
                Files
              </TabsTrigger>
              <TabsTrigger value="theme" className="flex-1">
                Theme
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex-1">
                Integrations
              </TabsTrigger>
              <TabsTrigger value="prompt" className="flex-1">
                AI Prompt
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
            <TabsContent value="integrations" className="m-0 h-full">
              <IntegrationsTab />
            </TabsContent>
            <TabsContent value="prompt" className="m-0 h-full">
              <div className="space-y-4 p-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {predefinedPrompts.map((predefinedPrompt) => {
                      const Icon = predefinedPrompt.icon
                      return (
                        <Button
                          key={predefinedPrompt.id}
                          variant="outline"
                          onClick={() => handlePromptSelect(predefinedPrompt)}
                          className="h-auto justify-start gap-2 px-3 py-2"
                        >
                          <Icon
                            className={`size-4 shrink-0 ${predefinedPrompt.color}`}
                          />
                          <span className="text-sm">
                            {predefinedPrompt.label}
                          </span>
                        </Button>
                      )
                    })}
                  </div>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between"
                      >
                        More Templates
                        <Icons.ChevronDown className="size-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-muted-foreground">
                            Components
                          </Label>
                          <div className="grid grid-cols-2 gap-2">
                            {componentPrompts.map((prompt) => {
                              const Icon = prompt.icon
                              return (
                                <Button
                                  key={prompt.id}
                                  variant="outline"
                                  onClick={() => handlePromptSelect(prompt)}
                                  className="h-auto justify-start gap-2 px-3 py-2"
                                >
                                  <Icon
                                    className={`size-4 shrink-0 ${prompt.color}`}
                                  />
                                  <span className="text-sm">
                                    {prompt.label}
                                  </span>
                                </Button>
                              )
                            })}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-muted-foreground">
                            Popular Clones
                          </Label>
                          <div className="grid grid-cols-2 gap-2">
                            {clonePrompts.map((prompt) => {
                              const Icon = prompt.icon
                              return (
                                <Button
                                  key={prompt.id}
                                  variant="outline"
                                  onClick={() => handlePromptSelect(prompt)}
                                  className="h-auto justify-start gap-2 px-3 py-2"
                                >
                                  <Icon
                                    className={`size-4 shrink-0 ${prompt.color}`}
                                  />
                                  <span className="text-sm">
                                    {prompt.label}
                                  </span>
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <div className="space-y-2">
                    <Label htmlFor="prompt">Prompt for v0</Label>
                    <div className="relative">
                      <Textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your prompt for v0..."
                        className="min-h-[200px] rounded-b-none border-b-0"
                      />
                      <div className="flex items-center justify-end gap-2 p-2 bg-secondary/10 rounded-b-md border border-t-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8"
                          onClick={() => {
                            const improvedPrompt = `Make it responsive and add animations to interactive elements. Ensure proper spacing and alignment between sections. Add hover states and transitions for better user experience. Optimize for all screen sizes and ensure accessibility compliance.${prompt ? `\n\nOriginal prompt:\n${prompt}` : ''}`
                            setPrompt(improvedPrompt)
                          }}
                        >
                          <Icons.Sparkles className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8"
                          asChild
                        >
                          <label>
                            <input
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) => {
                                // TODO: Implement image upload handling
                                console.log(
                                  'Image selected:',
                                  e.target.files?.[0],
                                )
                              }}
                            />
                            <Icons.Paperclip className="size-4" />
                          </label>
                        </Button>
                      </div>
                    </div>
                  </div>
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
