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
import { Textarea } from '@acme/ui/textarea'
import { Copy, ExternalLink, Palette, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { generatePrompt } from '~/actions/generate-prompt'
import { ThemePreview } from '~/components/theme-preview'
import {
  type BorderRadius,
  type ColorTheme,
  type ThemeMode,
  ThemeSelector,
  colorThemes,
} from '~/components/theme-selector'
import type { ComponentData } from '~/lib/component-data'

interface ExportModalProps {
  isOpen: boolean
  onClose: () => void
  selectedComponents: ComponentData[]
}

export function ExportModal({
  isOpen,
  onClose,
  selectedComponents,
}: ExportModalProps) {
  const [projectDescription, setProjectDescription] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [step, setStep] = useState<'describe' | 'theme' | 'result'>('describe')
  const defaultTheme = colorThemes[0] ?? {
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
    name: 'Default',
    id: 'default',
  }
  const [selectedTheme, setSelectedTheme] = useState<ColorTheme>(defaultTheme)
  const [selectedMode, setSelectedMode] = useState<ThemeMode>('dark')
  const [borderRadius, setBorderRadius] = useState<BorderRadius>('0.5')
  const [activeTab, setActiveTab] = useState('customize')
  const [customPrimaryColor, setCustomPrimaryColor] = useState(
    defaultTheme.primaryColor,
  )
  const [customSecondaryColor, setCustomSecondaryColor] = useState(
    defaultTheme.secondaryColor,
  )
  const [isUsingCustomColors, setIsUsingCustomColors] = useState(false)

  const handleGeneratePrompt = async () => {
    if (!projectDescription.trim()) return

    setIsGenerating(true)
    try {
      const themeToUse = {
        ...selectedTheme,
        primaryColor: isUsingCustomColors
          ? customPrimaryColor
          : selectedTheme.primaryColor,
        secondaryColor: isUsingCustomColors
          ? customSecondaryColor
          : selectedTheme.secondaryColor,
      }

      const prompt = await generatePrompt(
        projectDescription,
        selectedComponents,
        themeToUse,
        selectedMode,
        borderRadius,
      )
      setGeneratedPrompt(prompt)
      setStep('result')
    } catch (error) {
      console.error('Failed to generate prompt:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCustomColorsChange = (primary: string, secondary: string) => {
    setCustomPrimaryColor(primary)
    setCustomSecondaryColor(secondary)
    setIsUsingCustomColors(true)
  }

  const handleThemeChange = (theme: ColorTheme) => {
    setSelectedTheme(theme)
    setCustomPrimaryColor(theme.primaryColor)
    setCustomSecondaryColor(theme.secondaryColor)
    setIsUsingCustomColors(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpenInV0 = () => {
    // Encode the prompt for URL safety
    const encodedPrompt = encodeURIComponent(generatedPrompt)

    // Open v0 with the prompt pre-filled
    // This is a placeholder URL - replace with the actual v0 URL structure
    window.open(`https://v0.dev/new?prompt=${encodedPrompt}`, '_blank')
  }

  const resetModal = () => {
    setStep('describe')
    setProjectDescription('')
    setGeneratedPrompt('')
    setCopied(false)
    setActiveTab('customize')
    setIsUsingCustomColors(false)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  const handleNextStep = () => {
    if (step === 'describe') {
      setStep('theme')
    } else if (step === 'theme') {
      handleGeneratePrompt()
    }
  }

  const handleBackStep = () => {
    if (step === 'theme') {
      setStep('describe')
    } else if (step === 'result') {
      setStep('theme')
    }
  }

  // Get the current theme colors (either from preset or custom)
  const currentPrimaryColor = isUsingCustomColors
    ? customPrimaryColor
    : selectedTheme.primaryColor
  const currentSecondaryColor = isUsingCustomColors
    ? customSecondaryColor
    : selectedTheme.secondaryColor

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] bg-neutral-950 border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {step === 'describe' && 'Describe Your Project'}
            {step === 'theme' && 'Customize Appearance'}
            {step === 'result' && 'Your V0 Prompt'}
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            {step === 'describe' &&
              `You've selected ${selectedComponents.length} component${selectedComponents.length !== 1 ? 's' : ''}. Now describe your project to generate a tailored prompt.`}
            {step === 'theme' &&
              'Customize the appearance of your components with colors, border radius, and theme mode.'}
            {step === 'result' &&
              'Your prompt is ready! Copy it or open directly in v0.'}
          </DialogDescription>
        </DialogHeader>

        {step === 'describe' && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Textarea
                placeholder="E.g., I'm building a dashboard for a fitness tracking app. It should display workout statistics, progress charts, and allow users to set goals. The design should be modern and motivational with a dark theme."
                className="min-h-[150px] bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
              <p className="text-xs text-neutral-500">
                Be specific about your project's purpose, target audience, and
                design preferences.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={handleClose}
                className="border-neutral-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleNextStep}
                disabled={!projectDescription.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                Next: Customize Appearance
              </Button>
            </div>
          </div>
        )}

        {step === 'theme' && (
          <div className="space-y-4 py-4">
            <ThemeSelector
              selectedTheme={selectedTheme}
              selectedMode={selectedMode}
              borderRadius={borderRadius}
              onThemeChange={handleThemeChange}
              onModeChange={setSelectedMode}
              onBorderRadiusChange={setBorderRadius}
              onCustomColorsChange={handleCustomColorsChange}
            />

            <div className="mt-6 p-4 rounded-md bg-neutral-900 border border-neutral-800">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-medium">Preview</h4>
              </div>
              <ThemePreview
                theme={{
                  ...selectedTheme,
                  primaryColor: currentPrimaryColor,
                  secondaryColor: currentSecondaryColor,
                }}
                mode={selectedMode}
                borderRadius={borderRadius}
              />
            </div>

            <div className="flex justify-between gap-3">
              <Button
                variant="outline"
                onClick={handleBackStep}
                className="border-neutral-800"
              >
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                className="bg-primary hover:bg-primary/90"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Prompt
              </Button>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="space-y-4 py-4">
            <Tabs defaultValue="customize" onValueChange={setActiveTab}>
              <TabsList className="bg-neutral-900 border border-neutral-800">
                <TabsTrigger value="customize">Customize</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>

              <TabsContent value="customize" className="mt-4">
                <div className="flex gap-4 mb-4">
                  <div className="w-1/3">
                    <div
                      className="aspect-square rounded-md border border-neutral-800"
                      style={{ backgroundColor: currentPrimaryColor }}
                    />
                    <p className="text-xs text-center mt-1 text-neutral-400">
                      Primary Color
                    </p>
                  </div>
                  <div className="w-1/3">
                    <div
                      className="aspect-square rounded-md border border-neutral-800"
                      style={{ backgroundColor: currentSecondaryColor }}
                    />
                    <p className="text-xs text-center mt-1 text-neutral-400">
                      Secondary Color
                    </p>
                  </div>
                  <div className="w-1/3">
                    <div
                      className="aspect-square rounded-md border border-neutral-800 flex items-center justify-center"
                      style={{
                        backgroundColor:
                          selectedMode === 'light' || selectedMode === 'both'
                            ? '#ffffff'
                            : '#1a1a1a',
                        color:
                          selectedMode === 'light' || selectedMode === 'both'
                            ? '#000000'
                            : '#ffffff',
                        borderRadius:
                          borderRadius === '0' ? '0px' : `${borderRadius}rem`,
                      }}
                    >
                      <span className="text-xs">{borderRadius}rem</span>
                    </div>
                    <p className="text-xs text-center mt-1 text-neutral-400">
                      Border Radius
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-800 bg-black p-4 overflow-auto max-h-[200px]">
                  <pre className="whitespace-pre-wrap text-sm text-neutral-300">
                    {generatedPrompt}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-4">
                <div className="rounded-lg border border-neutral-800 bg-black p-4 overflow-auto max-h-[250px]">
                  <pre className="whitespace-pre-wrap text-sm text-neutral-300">
                    {`// Theme configuration
const theme = {
  colors: {
    primary: "${currentPrimaryColor}",
    secondary: "${currentSecondaryColor}",
    mode: "${selectedMode}"
  },
  borderRadius: "${borderRadius}rem",
  components: [
${selectedComponents.map((c) => `    "${c.name}"`).join(',\n')}
  ]
}

// Usage with v0
// 1. Copy the generated prompt
// 2. Paste it into v0.dev
// 3. Customize as needed`}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <Button
                variant="outline"
                onClick={handleBackStep}
                className="border-neutral-800 order-3 sm:order-1"
              >
                Back to Customize
              </Button>
              <Button
                variant="outline"
                onClick={handleCopy}
                className="border-neutral-800 order-2"
              >
                {copied ? (
                  <>
                    <span className="mr-2">✓</span>
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Prompt
                  </>
                )}
              </Button>
              <Button
                onClick={handleOpenInV0}
                className="bg-primary hover:bg-primary/90 order-1 sm:order-3"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in V0
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
