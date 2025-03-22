'use client'

import { Label } from '@acme/ui/label'
import { cn } from '@acme/ui/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@acme/ui/toggle-group'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { ColorPicker } from '~/components/color-picker'

export type ColorTheme = {
  id: string
  name: string
  primaryColor: string
  secondaryColor: string
}

export type ThemeMode = 'light' | 'dark' | 'both'

export type BorderRadius = '0' | '0.3' | '0.5' | '0.75' | '1'

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

interface ThemeSelectorProps {
  selectedTheme: ColorTheme
  selectedMode: ThemeMode
  borderRadius: BorderRadius
  onThemeChange: (theme: ColorTheme) => void
  onModeChange: (mode: ThemeMode) => void
  onBorderRadiusChange: (radius: BorderRadius) => void
  onCustomColorsChange: (primaryColor: string, secondaryColor: string) => void
}

export function ThemeSelector({
  selectedTheme,
  selectedMode,
  borderRadius,
  onThemeChange,
  onModeChange,
  onBorderRadiusChange,
  onCustomColorsChange,
}: ThemeSelectorProps) {
  const [primaryColor, setPrimaryColor] = useState(selectedTheme.primaryColor)
  const [secondaryColor, setSecondaryColor] = useState(
    selectedTheme.secondaryColor,
  )

  const handlePrimaryColorChange = (color: string) => {
    setPrimaryColor(color)
    onCustomColorsChange(color, secondaryColor)
  }

  const handleSecondaryColorChange = (color: string) => {
    setSecondaryColor(color)
    onCustomColorsChange(primaryColor, color)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Color Theme</h3>
        <div className="grid grid-cols-3 gap-3">
          {colorThemes.map((theme) => (
            <button
              key={theme.id}
              className={cn(
                'relative h-20 rounded-md overflow-hidden border-2 transition-all',
                selectedTheme.id === theme.id
                  ? 'border-white ring-2 ring-primary'
                  : 'border-transparent hover:border-neutral-700',
              )}
              onClick={() => {
                onThemeChange(theme)
                setPrimaryColor(theme.primaryColor)
                setSecondaryColor(theme.secondaryColor)
              }}
              type="button"
            >
              <div className="absolute inset-0 flex flex-col">
                <div
                  className="h-1/2"
                  style={{ backgroundColor: theme.primaryColor }}
                />
                <div
                  className="h-1/2"
                  style={{ backgroundColor: theme.secondaryColor }}
                />
              </div>
              {selectedTheme.id === theme.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Check className="h-6 w-6 text-white" />
                </div>
              )}
              <span className="sr-only">{theme.name}</span>
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

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-neutral-300">Border Radius</h3>
        <div className="space-y-1.5">
          <ToggleGroup
            type="single"
            value={borderRadius}
            onValueChange={(value) => {
              if (value) onBorderRadiusChange(value as BorderRadius)
            }}
            className="justify-between"
          >
            <ToggleGroupItem
              value="0"
              className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              0
            </ToggleGroupItem>
            <ToggleGroupItem
              value="0.3"
              className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              0.3
            </ToggleGroupItem>
            <ToggleGroupItem
              value="0.5"
              className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              0.5
            </ToggleGroupItem>
            <ToggleGroupItem
              value="0.75"
              className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              0.75
            </ToggleGroupItem>
            <ToggleGroupItem
              value="1"
              className="flex-1 data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              1
            </ToggleGroupItem>
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
          <button
            className={cn(
              'flex flex-col items-center justify-center rounded-md border-2 bg-white p-3 transition-all',
              selectedMode === 'light'
                ? 'border-white ring-2 ring-primary'
                : 'border-transparent hover:border-neutral-700',
            )}
            onClick={() => onModeChange('light')}
            type="button"
          >
            <div className="h-8 w-8 rounded-full bg-neutral-200 mb-2" />
            <span className="text-xs font-medium text-black">Light</span>
          </button>

          <button
            className={cn(
              'flex flex-col items-center justify-center rounded-md border-2 bg-neutral-900 p-3 transition-all',
              selectedMode === 'dark'
                ? 'border-white ring-2 ring-primary'
                : 'border-transparent hover:border-neutral-700',
            )}
            onClick={() => onModeChange('dark')}
            type="button"
          >
            <div className="h-8 w-8 rounded-full bg-neutral-700 mb-2" />
            <span className="text-xs font-medium text-white">Dark</span>
          </button>

          <button
            className={cn(
              'flex flex-col items-center justify-center rounded-md border-2 p-3 transition-all',
              selectedMode === 'both'
                ? 'border-white ring-2 ring-primary'
                : 'border-transparent hover:border-neutral-700',
            )}
            onClick={() => onModeChange('both')}
            type="button"
          >
            <div className="flex h-8 w-8 mb-2">
              <div className="h-8 w-4 rounded-l-full bg-white" />
              <div className="h-8 w-4 rounded-r-full bg-neutral-900" />
            </div>
            <span className="text-xs font-medium">Both</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { colorThemes }
