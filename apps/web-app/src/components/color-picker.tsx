'use client'

import type React from 'react'

import { Button } from '@acme/ui/button'
import { Input } from '@acme/ui/input'
import { Label } from '@acme/ui/label'
import { cn } from '@acme/ui/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@acme/ui/popover'
import { Check, Pipette } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  label: string
}

export function ColorPicker({ color, onChange, label }: ColorPickerProps) {
  const [value, setValue] = useState(color)
  const [isOpen, setIsOpen] = useState(false)

  // Update internal value when color prop changes
  useEffect(() => {
    setValue(color)
  }, [color])

  // Validate hex color
  const isValidHex = (hex: string) =>
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (isValidHex(newValue)) {
      onChange(newValue)
    }
  }

  // Predefined color options
  const colorOptions = [
    '#000000',
    '#FFFFFF',
    '#F43F5E',
    '#8B5CF6',
    '#3B82F6',
    '#10B981',
    '#F59E0B',
    '#64748B',
  ]

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full border-neutral-800 bg-transparent hover:bg-neutral-800 hover:text-white justify-between"
        >
          <div className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded-full border border-neutral-700"
              style={{ backgroundColor: color }}
            />
            <span>{label}</span>
          </div>
          <Pipette className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-neutral-950 border-neutral-800 p-3">
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="color-input">{label}</Label>
            <div className="flex gap-2">
              <Input
                id="color-input"
                value={value}
                onChange={handleChange}
                className={cn(
                  'bg-neutral-900 border-neutral-800',
                  !isValidHex(value) && value !== '' && 'border-red-500',
                )}
              />
              <div
                className="h-9 w-9 rounded border border-neutral-800"
                style={{
                  backgroundColor: isValidHex(value) ? value : '#000000',
                }}
              />
            </div>
            {!isValidHex(value) && value !== '' && (
              <p className="text-xs text-red-500">
                Please enter a valid hex color (e.g., #FF0000)
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Presets</Label>
            <div className="grid grid-cols-4 gap-2">
              {colorOptions.map((colorOption) => (
                <button
                  key={colorOption}
                  className={cn(
                    'h-6 w-6 rounded-full border border-neutral-800 flex items-center justify-center',
                    value === colorOption && 'ring-2 ring-primary',
                  )}
                  style={{ backgroundColor: colorOption }}
                  onClick={() => {
                    setValue(colorOption)
                    onChange(colorOption)
                  }}
                  type="button"
                >
                  {value === colorOption && (
                    <Check className="h-3 w-3 text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
