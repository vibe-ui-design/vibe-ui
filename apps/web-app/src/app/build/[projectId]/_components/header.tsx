'use client'

import { Input } from '@acme/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@acme/ui/select'
import { Separator } from '@acme/ui/separator'
import { SidebarTrigger } from '@acme/ui/sidebar'
import { Tabs, TabsList, TabsTrigger } from '@acme/ui/tabs'
import { Search } from 'lucide-react'
import { type ItemType, useComponentStore } from '../store'

interface SiteHeaderProps {
  frameworks: string[]
}

export function SiteHeader({ frameworks }: SiteHeaderProps) {
  const activeItemType = useComponentStore(
    (state) => state.theme.activeItemType,
  )
  const setActiveItemType = useComponentStore(
    (state) => state.setActiveItemType,
  )
  const searchQuery = useComponentStore((state) => state.theme.searchQuery)
  const setSearchQuery = useComponentStore((state) => state.setSearchQuery)
  const activeFramework = useComponentStore(
    (state) => state.theme.activeFramework,
  )
  const setActiveFramework = useComponentStore(
    (state) => state.setActiveFramework,
  )

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-4 px-4 lg:gap-4 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Tabs
          value={activeItemType}
          onValueChange={(value) => setActiveItemType(value as ItemType)}
        >
          <TabsList className="bg-neutral-900 border border-neutral-800">
            <TabsTrigger value="component">Components</TabsTrigger>
            <TabsTrigger value="template">Templates</TabsTrigger>
          </TabsList>
        </Tabs>
        <Select value={activeFramework} onValueChange={setActiveFramework}>
          <SelectTrigger className="w-[180px] bg-neutral-900 border-neutral-800">
            <SelectValue placeholder="Select Framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Frameworks</SelectItem>
            {frameworks.map((framework) => (
              <SelectItem key={framework} value={framework}>
                {framework}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative ml-auto max-w-[240px]">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
          <Input
            placeholder={`Search ${activeItemType}s...`}
            value={searchQuery ?? ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
          />
        </div>
      </div>
    </header>
  )
}
