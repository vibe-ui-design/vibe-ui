'use client'

import { Label } from '@acme/ui/label'
import { cn } from '@acme/ui/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@acme/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@acme/ui/toggle-group'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeIcon as HeroiconsHome } from '@heroicons/react/24/outline'
import { Home as MaterialHome } from '@mui/icons-material'
import { HomeIcon as RadixHome } from '@radix-ui/react-icons'
import { Check, Home as LucideHome } from 'lucide-react'
import { useState } from 'react'
import { useSelectionStore } from '~/app/build/[projectId]/store'
import { ColorPicker } from '~/components/color-picker'

export type ColorTheme = {
  id: string
  name: string
  primaryColor: string
  secondaryColor: string
}

export type ThemeMode = 'light' | 'dark' | 'both'

export type BorderRadius = '0' | '0.3' | '0.5' | '0.75' | '1'

export type FontFamily = {
  id: string
  name: string
  value: string
  description: string
}

export type IconLibrary = {
  id: string
  name: string
  description: string
  npmPackage: string
  previewIcon: React.ReactNode
}

const colorThemes: ColorTheme[] = [
  {
    id: 'violet',
    name: 'Violet',
    primaryColor: '#8B5CF6',
    secondaryColor: '#C4B5FD',
  },
  {
    id: 'blue',
    name: 'Blue',
    primaryColor: '#3B82F6',
    secondaryColor: '#93C5FD',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    primaryColor: '#10B981',
    secondaryColor: '#6EE7B7',
  },
  {
    id: 'amber',
    name: 'Amber',
    primaryColor: '#F59E0B',
    secondaryColor: '#FCD34D',
  },
  {
    id: 'rose',
    name: 'Rose',
    primaryColor: '#F43F5E',
    secondaryColor: '#FDA4AF',
  },
  {
    id: 'slate',
    name: 'Slate',
    primaryColor: '#64748B',
    secondaryColor: '#CBD5E1',
  },
]

const fontFamilies: FontFamily[] = [
  {
    id: 'inter',
    name: 'Inter',
    value: 'Inter, sans-serif',
    description: 'Clean and modern sans-serif',
  },
  {
    id: 'roboto',
    name: 'Roboto',
    value: 'Roboto, sans-serif',
    description: "Google's signature font",
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    value: 'Open Sans, sans-serif',
    description: 'Friendly and approachable',
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    value: 'Montserrat, sans-serif',
    description: 'Modern geometric sans-serif',
  },
  {
    id: 'lato',
    name: 'Lato',
    value: 'Lato, sans-serif',
    description: 'Balanced and readable',
  },
]

const iconLibraries: IconLibrary[] = [
  {
    id: 'lucide',
    name: 'Lucide',
    description: 'Beautiful & consistent icons',
    npmPackage: 'lucide-react',
    previewIcon: <LucideHome className="size-4 text-white" />,
  },
  {
    id: 'heroicons',
    name: 'Heroicons',
    description: 'By the makers of Tailwind CSS',
    npmPackage: '@heroicons/react',
    previewIcon: <HeroiconsHome className="size-4 text-white" />,
  },
  {
    id: 'font-awesome',
    name: 'Font Awesome',
    description: "The web's most popular icon set",
    npmPackage: '@fortawesome/react-fontawesome',
    previewIcon: (
      <FontAwesomeIcon icon={faHome} className="size-4 text-white" />
    ),
  },
  {
    id: 'material',
    name: 'Material Icons',
    description: "Google's Material Design icons",
    npmPackage: '@mui/icons-material',
    previewIcon: <MaterialHome className="size-4 text-white" />,
  },
  {
    id: 'radix',
    name: 'Radix Icons',
    description: 'Crisp set of 15×15 icons',
    npmPackage: '@radix-ui/react-icons',
    previewIcon: <RadixHome className="size-4 text-white" />,
  },
]

export function ThemeSelector() {
  const theme = useSelectionStore((state) => state.theme)
  const setTheme = useSelectionStore((state) => state.setTheme)
  const setThemeMode = useSelectionStore((state) => state.setThemeMode)
  const setBorderRadius = useSelectionStore((state) => state.setBorderRadius)
  const setCustomColors = useSelectionStore((state) => state.setCustomColors)
  const setIconLibrary = useSelectionStore((state) => state.setIconLibrary)
  const setFontFamily = useSelectionStore((state) => state.setFontFamily)

  const [primaryColor, setPrimaryColor] = useState(
    theme.selectedTheme.primaryColor,
  )
  const [secondaryColor, setSecondaryColor] = useState(
    theme.selectedTheme.secondaryColor,
  )

  const handlePrimaryColorChange = (color: string) => {
    setPrimaryColor(color)
    setCustomColors(color, secondaryColor)
  }

  const handleSecondaryColorChange = (color: string) => {
    setSecondaryColor(color)
    setCustomColors(primaryColor, color)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Color Theme</h3>
        <div className="grid grid-cols-3 gap-3">
          {colorThemes.map((colorTheme) => (
            <button
              key={colorTheme.id}
              className={cn(
                'relative h-12 rounded-md overflow-hidden border-2 transition-all',
                theme.selectedTheme.id === colorTheme.id
                  ? 'border-white ring-2 ring-primary'
                  : 'border-transparent hover:border-neutral-700',
              )}
              onClick={() => {
                setTheme(colorTheme)
                setPrimaryColor(colorTheme.primaryColor)
                setSecondaryColor(colorTheme.secondaryColor)
              }}
              type="button"
            >
              <div className="absolute inset-0 flex flex-col">
                <div
                  className="h-1/2"
                  style={{ backgroundColor: colorTheme.primaryColor }}
                />
                <div
                  className="h-1/2"
                  style={{ backgroundColor: colorTheme.secondaryColor }}
                />
              </div>
              {theme.selectedTheme.id === colorTheme.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
              <span className="sr-only">{colorTheme.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Custom Colors</h3>
        <div className="grid grid-cols-2 gap-3">
          <ColorPicker
            color={primaryColor}
            onChange={handlePrimaryColorChange}
            label="Primary"
          />
          <ColorPicker
            color={secondaryColor}
            onChange={handleSecondaryColorChange}
            label="Secondary"
          />
        </div>
      </div>

      <div className="space-y-3 w-full">
        <h3 className="text-sm font-medium text-neutral-300">Border Radius</h3>
        <div className="space-y-1.5 w-full">
          <ToggleGroup
            type="single"
            value={theme.borderRadius}
            variant="outline"
            onValueChange={(value) => {
              if (value) setBorderRadius(value as BorderRadius)
            }}
            className="justify-between w-full"
          >
            <ToggleGroupItem value="0">0</ToggleGroupItem>
            <ToggleGroupItem value="0.3">0.3</ToggleGroupItem>
            <ToggleGroupItem value="0.5">0.5</ToggleGroupItem>
            <ToggleGroupItem value="0.75">0.75</ToggleGroupItem>
            <ToggleGroupItem value="1">1</ToggleGroupItem>
          </ToggleGroup>
          <div className="flex justify-between px-1">
            <Label className="text-xs text-neutral-500">Square</Label>
            <Label className="text-xs text-neutral-500">Rounded</Label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Theme Mode</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <button
              className={cn(
                'relative w-full h-10 rounded-md overflow-hidden border-2 transition-all bg-white',
                theme.selectedMode === 'light'
                  ? 'border-white ring-2 ring-primary'
                  : 'border-transparent hover:border-neutral-700',
              )}
              onClick={() => setThemeMode('light')}
              type="button"
            >
              {theme.selectedMode === 'light' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
              <span className="sr-only">Light Mode</span>
            </button>
            <Label
              className={cn(
                'text-xs',
                theme.selectedMode === 'light'
                  ? 'text-white'
                  : 'text-neutral-500',
              )}
            >
              Light
            </Label>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <button
              className={cn(
                'relative w-full h-10 rounded-md overflow-hidden border-2 transition-all bg-black',
                theme.selectedMode === 'dark'
                  ? 'border-white ring-2 ring-primary'
                  : 'border-transparent hover:border-neutral-700',
              )}
              onClick={() => setThemeMode('dark')}
              type="button"
            >
              {theme.selectedMode === 'dark' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
              <span className="sr-only">Dark Mode</span>
            </button>
            <Label
              className={cn(
                'text-xs',
                theme.selectedMode === 'dark'
                  ? 'text-white'
                  : 'text-neutral-500',
              )}
            >
              Dark
            </Label>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <button
              className={cn(
                'relative w-full h-10 rounded-md overflow-hidden border-2 transition-all',
                theme.selectedMode === 'both'
                  ? 'border-white ring-2 ring-primary'
                  : 'border-transparent hover:border-neutral-700',
              )}
              onClick={() => setThemeMode('both')}
              type="button"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, white 0 50%, black 50% 100%)',
                }}
              />
              {theme.selectedMode === 'both' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
              <span className="sr-only">Both Modes</span>
            </button>
            <Label
              className={cn(
                'text-xs',
                theme.selectedMode === 'both'
                  ? 'text-white'
                  : 'text-neutral-500',
              )}
            >
              Both
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Font Family</h3>
        <Select value={theme.selectedFontFamily} onValueChange={setFontFamily}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font family">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: fontFamilies.find(
                      (font) => font.id === theme.selectedFontFamily,
                    )?.value,
                  }}
                >
                  {
                    fontFamilies.find(
                      (font) => font.id === theme.selectedFontFamily,
                    )?.name
                  }
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {fontFamilies.map((font) => (
              <SelectItem
                key={font.id}
                value={font.id}
                className="flex flex-col items-start py-3"
              >
                <div className="flex flex-col gap-1">
                  <div
                    className="font-medium"
                    style={{ fontFamily: font.value }}
                  >
                    {font.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {font.description}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Icon Library</h3>
        <Select
          value={theme.selectedIconLibrary}
          onValueChange={setIconLibrary}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an icon library">
              <div className="flex items-center gap-2">
                <div className="flex size-5 shrink-0 items-center justify-center rounded bg-neutral-800 text-white">
                  {
                    iconLibraries.find(
                      (lib) => lib.id === theme.selectedIconLibrary,
                    )?.previewIcon
                  }
                </div>
                {
                  iconLibraries.find(
                    (lib) => lib.id === theme.selectedIconLibrary,
                  )?.name
                }
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {iconLibraries.map((library) => (
              <SelectItem
                key={library.id}
                value={library.id}
                className="flex flex-col items-start py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded bg-neutral-800">
                    {library.previewIcon}
                  </div>
                  <div>
                    <div className="font-medium">{library.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {library.description}
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export { colorThemes, iconLibraries, fontFamilies }
